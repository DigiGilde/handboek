// Hast plugins for Sätteri, the Markdown processor of Astro 7.
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docsRoot = path.resolve('docs');

// The first h1 is the page title, for <title>. With `hero: true` in the
// frontmatter the page renders it in a hero, so it leaves the prose.
export const pageTitle = {
    name: 'page-title',
    element: {
        filter: ['h1'],
        visit(node, ctx) {
            const frontmatter = ctx.data.astro?.frontmatter;
            if (!frontmatter || frontmatter.title) return;
            frontmatter.title = ctx.textContent(node).trim();
            if (frontmatter.hero) ctx.removeNode(node);
        },
    },
};

// Pages link to each other by source file (`../werkwijze/principes.md`), the
// way they read on GitHub; the site serves them as directories under `base`.
export function markdownLinks(base) {
    const prefix = base.replace(/\/$/, '');
    return {
        name: 'markdown-links',
        element: {
            filter: ['a'],
            visit(node, ctx) {
                const href = String(node.properties?.href ?? '');
                const match = href.match(/^([^:?#]+\.md)(#.*)?$/);
                if (!match || !ctx.fileURL) return;
                const target = path.resolve(path.dirname(fileURLToPath(ctx.fileURL)), match[1]);
                const route = path
                    .relative(docsRoot, target)
                    .split(path.sep)
                    .join('/')
                    .replace(/\.md$/, '')
                    .replace(/(^|\/)index$/, '');
                ctx.setProperty(node, 'href', `${prefix}/${route ? `${route}/` : ''}${match[2] ?? ''}`);
            },
        },
    };
}

// A browser may break a line after the hyphen of "e-mail". A word joiner
// (U+2060) after it prevents that and keeps the hyphen of RijksSans, which has
// no non-breaking hyphen (U+2011) of its own.
export const nonBreakingEmail = {
    name: 'non-breaking-email',
    text(node, ctx) {
        if (!/e-mail/i.test(node.value) || ctx.parent(node)?.tagName === 'code') return;
        return { ...node, value: node.value.replace(/\b(e)-(mail)/gi, '$1-\u2060$2') };
    },
};

// Grammars nldd-code-viewer knows; anything else renders as plain text.
const languages = {
    bash: 'bash',
    sh: 'bash',
    shell: 'bash',
    zsh: 'bash',
    console: 'bash',
    css: 'css',
    html: 'html',
    xml: 'xml',
    svg: 'xml',
    js: 'javascript',
    javascript: 'javascript',
    ts: 'typescript',
    typescript: 'typescript',
    json: 'json',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'toml',
    md: 'markdown',
    markdown: 'markdown',
    py: 'python',
    python: 'python',
    sql: 'sql',
    rust: 'rust',
    gherkin: 'gherkin',
};

export const codeViewer = {
    name: 'code-viewer',
    element: {
        filter: ['pre'],
        visit(node, ctx) {
            const code = node.children.find((child) => child.type === 'element' && child.tagName === 'code');
            if (!code) return;
            const className = [code.properties?.className ?? []].flat().map(String);
            const fence = className.find((name) => name.startsWith('language-'))?.slice('language-'.length);
            const language = fence ? languages[fence.toLowerCase()] : undefined;
            ctx.replaceNode(node, {
                type: 'element',
                tagName: 'nldd-code-viewer',
                properties: language ? { language } : {},
                children: [{ type: 'text', value: ctx.textContent(code).replace(/\n$/, '') }],
            });
        },
    },
};
