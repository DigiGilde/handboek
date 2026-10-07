// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { codeViewer, markdownLinks, nonBreakingEmail, pageTitle } from './src/lib/markdown.mjs';
import { base, siteUrl } from './src/lib/site.mjs';

export default defineConfig({
    site: siteUrl.origin,
    base,
    trailingSlash: 'always',
    // No inlined scripts or assets, so the Content-Security-Policy in
    // container/security-headers.conf needs no 'unsafe-inline'.
    vite: { build: { assetsInlineLimit: 0 } },
    integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
    markdown: {
        syntaxHighlight: false,
        processor: satteri({
            hastPlugins: [pageTitle, markdownLinks(base), nonBreakingEmail, codeViewer],
        }),
    },
});
