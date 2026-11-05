// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { codeViewer, markdownLinks, nonBreakingEmail, pageTitle } from './src/lib/markdown.mjs';
import { base, siteUrl } from './src/lib/site.mjs';

// Readable names in _astro/: a <script> in Layout.astro is named after the
// component instead of its virtual module id, a chunk from a package after the
// package plus its module.
const slug = (label) =>
    label
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();

/** @param {import('rolldown').PreRenderedChunk} chunk */
const name = (chunk) => {
    const id = chunk.facadeModuleId ?? chunk.moduleIds.at(-1) ?? '';
    const astro = id.match(/([^/]+)\.astro\?astro&type=script/);
    const pkg = id.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/)?.[1];
    let label = chunk.name;
    if (astro) label = astro[1];
    else if (pkg && pkg !== '@nldd/design-system') {
        label = /^(dist|index)$/.test(chunk.name) ? pkg : `${pkg}-${chunk.name}`;
    }
    return `_astro/${slug(label)}.[hash].js`;
};

/** @param {import('rolldown').PreRenderedAsset} asset */
const assetName = (asset) => {
    const css = asset.names[0]?.match(/^(.+)\.css$/);
    return css ? `_astro/${slug(css[1])}.[hash].css` : '_astro/[name].[hash][extname]';
};

export default defineConfig({
    site: siteUrl.origin,
    base,
    trailingSlash: 'always',
    // No inlined scripts or assets, so the Content-Security-Policy in
    // container/security-headers.conf needs no 'unsafe-inline'.
    vite: {
        // Astro writes the CSS from the server build, the JavaScript from the client build.
        build: { assetsInlineLimit: 0, rolldownOptions: { output: { assetFileNames: assetName } } },
        environments: {
            client: { build: { rolldownOptions: { output: { entryFileNames: name, chunkFileNames: name } } } },
        },
    },
    integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
    markdown: {
        syntaxHighlight: false,
        processor: satteri({
            hastPlugins: [pageTitle, markdownLinks(base), nonBreakingEmail, codeViewer],
        }),
    },
});
