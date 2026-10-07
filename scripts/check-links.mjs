// Fails on an internal link or #anchor in dist/ that leads nowhere. Every href
// counts, not only <a href>: the footer and the lists hang theirs on nldd-*
// elements. After the example of github.com/NederlandseDigitaleDienst/website.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { base } from '../src/lib/site.mjs';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const prefix = base === '/' ? '' : base;
const files = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        return statSync(full).isDirectory() ? files(full) : full.endsWith('.html') ? [full] : [];
    });
// Routes end in a slash (trailingSlash: 'always'); 404.html is /404/.
const routeOf = (file) => `/${path.relative(dist, file).split(path.sep).join('/')}`.replace(/(index)?\.html$/, '').replace(/([^/])$/, '$1/');

const pages = new Map();
for (const file of files(dist)) {
    const html = readFileSync(file, 'utf8');
    const ids = new Set([...html.matchAll(/\s(?:id|name)="([^"]+)"/g)].map((match) => match[1]));
    pages.set(routeOf(file), { html, ids });
}

const problems = [];
for (const [route, { html, ids }] of pages) {
    for (const match of html.matchAll(/\shref="([^"]+)"/g)) {
        const href = match[1].trim().replace(/&amp;/g, '&');
        // Another scheme (https:, mailto:, an inlined data: icon) is not ours to check.
        if (!href || /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue;
        if (href.startsWith('#')) {
            const anchor = decodeURIComponent(href.slice(1));
            if (anchor && !ids.has(anchor)) problems.push(`${route}: no #${anchor} on the page`);
            continue;
        }
        const [target, anchor] = href.split('#');
        let pathname = new URL(target, `http://site${prefix}${route}`).pathname;
        if (!pathname.startsWith(`${prefix}/`)) {
            problems.push(`${route}: ${href} leaves the base path ${base}`);
            continue;
        }
        pathname = pathname.slice(prefix.length);
        if (/\.[a-z0-9]+$/i.test(pathname)) {
            if (!existsSync(path.join(dist, decodeURIComponent(pathname)))) problems.push(`${route}: missing file ${href}`);
            continue;
        }
        const page = pages.get(pathname.replace(/([^/])$/, '$1/'));
        if (!page) problems.push(`${route}: broken link ${href}`);
        else if (anchor && !page.ids.has(decodeURIComponent(anchor))) problems.push(`${route}: no #${anchor} on ${href}`);
    }
}

if (problems.length) {
    console.error(`check-links: ${problems.length} problem(s)`);
    for (const problem of problems.sort()) console.error(`  ${problem}`);
    process.exit(1);
}
console.log(`check-links: ${pages.size} pages, no broken internal links`);
