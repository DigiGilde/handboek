// Fails on a skipped heading rank (h2 -> h4) in any built page, and on a page
// without exactly one h1. The pa11y-ci gate catches neither: HTML_CodeSniffer
// checks no rank skips and counts no h1s, and axe's heading-order and
// page-has-heading-one rules are best practices, which pa11y leaves out under
// WCAG2AA. An nldd-title renders its heading in its shadow DOM, so its
// heading-level counts here as the heading it becomes.
// After the example of github.com/NederlandseDigitaleDienst/website.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const files = (dir) =>
    readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        return statSync(full).isDirectory() ? files(full) : full.endsWith('.html') ? [full] : [];
    });
const stripTags = (html) => {
    let previous;
    do {
        previous = html;
        html = html.replace(/<[^>]*>/g, '');
    } while (html !== previous);
    return html;
};

const heading = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>|<nldd-title\b([^>]*)>/gi;
const failures = [];
let total = 0;
for (const file of files(dist)) {
    let last = 0;
    let h1s = 0;
    for (const match of readFileSync(file, 'utf8').matchAll(heading)) {
        const level = match[1] ? Number(match[1]) : Number(match[3].match(/\sheading-level="([1-6])"/)?.[1] ?? 0);
        if (!level) continue;
        total++;
        if (level === 1) h1s++;
        const text = (match[1] ? stripTags(match[2]) : (match[3].match(/\stext="([^"]*)"/)?.[1] ?? '')).trim();
        if (last && level > last + 1) failures.push(`${path.relative(dist, file)}: h${last} -> h${level} at "${text.slice(0, 60)}"`);
        last = level;
    }
    if (h1s !== 1) failures.push(`${path.relative(dist, file)}: ${h1s} h1s, not 1`);
}

if (failures.length) {
    console.error(`check-heading-order: ${failures.length} problem(s) across ${total} headings`);
    for (const failure of failures) console.error(`  ${failure}`);
    process.exit(1);
}
console.log(`check-heading-order: ${total} headings, no skipped ranks, one h1 per page`);
