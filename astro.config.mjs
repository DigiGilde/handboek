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
    integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
    markdown: {
        syntaxHighlight: false,
        processor: satteri({
            hastPlugins: [pageTitle, markdownLinks(base), nonBreakingEmail, codeViewer],
        }),
    },
});
