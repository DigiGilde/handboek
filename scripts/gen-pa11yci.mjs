// Writes .pa11yci for every page in dist/, so the gate tests exactly what
// ships and a new page is never left out. Two engines, HTML_CodeSniffer and
// axe-core: a finding in either fails the gate.
// After the example of github.com/NederlandseDigitaleDienst/website.
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { connect } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { base } from '../src/lib/site.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const port = process.env.A11Y_PORT ?? '4173';
const origin = `http://localhost:${port}${base === '/' ? '' : base}`;

// astro preview moves to the next free port instead of failing, and the gate
// would then time out on this one. Probe by connecting, not by binding: on
// macOS a listener on the IPv6 wildcard leaves 127.0.0.1 bindable.
const inUse = await new Promise((resolve) => {
    const probe = connect({ port: Number(port), host: 'localhost' });
    probe.setTimeout(1000);
    probe.once('connect', () => (probe.destroy(), resolve(true)));
    probe.once('timeout', () => (probe.destroy(), resolve(false)));
    probe.once('error', () => resolve(false));
});
if (inUse) {
    console.error(`gen-pa11yci: port ${port} is in use; free it or set A11Y_PORT`);
    process.exit(1);
}

const routes = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        if (statSync(full).isDirectory()) return routes(full);
        if (name !== 'index.html') return [];
        const route = path.relative(dist, dir).split(path.sep).join('/');
        return [route ? `/${route}/` : '/'];
    });
const urls = routes(dist).sort().map((route) => `${origin}${route}`);
if (urls.length === 0) {
    console.error('gen-pa11yci: no pages in dist/; run the build first');
    process.exit(1);
}

const config = {
    defaults: {
        standard: 'WCAG2AA',
        runners: ['htmlcs', 'axe'],
        // The pages render through web components that upgrade in the browser;
        // without the wait pa11y tests empty shadow roots.
        timeout: 30000,
        wait: 1000,
        chromeLaunchConfig: { args: ['--no-sandbox'] },
        // axe reports what it cannot measure (mostly contrast of slotted text,
        // whose background it cannot see through the shadow boundary) as
        // "incomplete". pa11y makes those errors by default; as warnings the
        // real violations still fail the gate.
        levelCapWhenNeedsReview: 'warning',
    },
    urls,
};
writeFileSync(path.join(root, '.pa11yci'), `${JSON.stringify(config, null, 4)}\n`);
console.log(`gen-pa11yci: ${urls.length} pages`);
