// Fails on a skipped heading rank (h2 -> h4) in any built page. The pa11y-ci
// gate does not catch that: HTML_CodeSniffer does not check rank skips, and
// axe's heading-order rule is a best practice, which pa11y leaves out under
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
    for (const match of readFileSync(file, 'utf8').matchAll(heading)) {
        const level = match[1] ? Number(match[1]) : Number(match[3].match(/\sheading-level="([1-6])"/)?.[1] ?? 0);
        if (!level) continue;
        total++;
        const text = (match[1] ? stripTags(match[2]) : (match[3].match(/\stext="([^"]*)"/)?.[1] ?? '')).trim();
        if (last && level > last + 1) failures.push(`${path.relative(dist, file)}: h${last} -> h${level} at "${text.slice(0, 60)}"`);
        last = level;
    }
}

if (failures.length) {
    console.error(`check-heading-order: ${failures.length} skipped rank(s) across ${total} headings`);
    for (const failure of failures) console.error(`  ${failure}`);
    process.exit(1);
}
console.log(`check-heading-order: ${total} headings, no skipped ranks`);
