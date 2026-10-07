// Fetches every external link in dist/ and fails on the dead ones (404, 410,
// a host that does not resolve). A 403 or 429 is a bot block and a timeout is
// only slow, so those warn instead; that keeps the check free of a host list.
// After the example of github.com/NederlandseDigitaleDienst/website.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteUrl } from '../src/lib/site.mjs';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
// Hosts on the government intranet resolve only inside the Rijksnetwerk.
const intranet = ['rijksweb.nl', 'overheid-i.nl'];
const timeout = 15000;
const concurrency = 6;
const files = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        return statSync(full).isDirectory() ? files(full) : full.endsWith('.html') ? [full] : [];
    });

// The canonical links point at the production site, where a page added by the
// pull request under test does not exist yet; check-links.mjs covers them.
const urls = new Map();
for (const file of files(dist)) {
    for (const match of readFileSync(file, 'utf8').matchAll(/\shref="(https?:\/\/[^"]+)"/g)) {
        const url = match[1].replace(/&amp;/g, '&');
        if (new URL(url).hostname === siteUrl.hostname) continue;
        if (!urls.has(url)) urls.set(url, path.relative(dist, file));
    }
}

const probe = (url, method) =>
    fetch(url, {
        method,
        redirect: 'follow',
        signal: AbortSignal.timeout(timeout),
        headers: { 'user-agent': 'Mozilla/5.0 (compatible; digi-handboek-linkcheck/1.0)' },
    });

async function check(url) {
    try {
        // Plenty of servers mishandle HEAD; GET decides.
        let response = await probe(url, 'HEAD');
        if (response.status >= 400) response = await probe(url, 'GET');
        if (response.status === 404 || response.status === 410) return { dead: `HTTP ${response.status}` };
        if (response.status >= 400) return { warn: `HTTP ${response.status}` };
        return {};
    } catch (error) {
        const code = error.cause?.code ?? error.name;
        const internal = intranet.some((host) => new URL(url).hostname.endsWith(host));
        if (!internal && (code === 'ENOTFOUND' || code === 'ECONNREFUSED')) return { dead: code };
        return { warn: code ?? 'fetch failed' };
    }
}

const entries = [...urls];
const dead = [];
const warnings = [];
let next = 0;
await Promise.all(
    Array.from({ length: concurrency }, async () => {
        while (next < entries.length) {
            const [url, file] = entries[next++];
            const result = await check(url);
            if (result.dead) dead.push(`${url} (${result.dead}) in ${file}`);
            else if (result.warn) warnings.push(`${url} (${result.warn}) in ${file}`);
        }
    }),
);

console.log(`check-external-links: ${entries.length} URLs`);
for (const warning of warnings.sort()) console.log(`  not verified: ${warning}`);
if (dead.length) {
    console.error(`check-external-links: ${dead.length} dead link(s)`);
    for (const link of dead.sort()) console.error(`  ${link}`);
    process.exit(1);
}
console.log(`check-external-links: no dead links (${warnings.length} not verified)`);
