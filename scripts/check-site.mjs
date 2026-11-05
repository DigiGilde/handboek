// Checks the built site against @nldd/design-system itself. A wrong name in
// this system renders nothing and raises no error, so nothing else would notice:
// - every nldd-* element, attribute and icon used in dist/ exists in the package;
// - every nldd-* element used is registered by src/scripts/nldd.ts;
// - no boolean attribute is written out as ="false", which counts as on;
// - every design token referenced in src/ exists.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkgDir = path.join(root, 'node_modules/@nldd/design-system');
const pkg = JSON.parse(readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
const manifest = JSON.parse(readFileSync(path.join(pkgDir, 'custom-elements.json'), 'utf8'));
const { iconRegistry } = await import(path.join(pkgDir, 'dist/components/content/icon/icon-registry.js'));
const { aliases } = await import(path.join(pkgDir, 'dist/components/content/icon/icon-aliases.js'));

const problems = [];
const files = (dir, ext) =>
    readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        return statSync(full).isDirectory() ? files(full, ext) : full.endsWith(ext) ? [full] : [];
    });
const rel = (file) => path.relative(root, file);

// Elements, their attributes, and the module that defines each.
const attributes = new Map();
const definedIn = new Map();
for (const module of manifest.modules) {
    for (const declaration of module.declarations ?? []) {
        if (!declaration.tagName) continue;
        attributes.set(declaration.tagName, new Set((declaration.attributes ?? []).map((attribute) => attribute.name)));
    }
    for (const exported of module.exports ?? []) {
        if (exported.kind !== 'custom-element-definition') continue;
        definedIn.set(exported.name, path.join(pkgDir, module.path.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js')));
    }
}
const icons = new Set([...iconRegistry.keys(), ...Object.keys(aliases)]);
const globalAttribute = /^(id|class|slot|hidden|role|style|tabindex|lang|title|aria-[a-z-]+|data-[a-z-]+)$/;
const iconAttribute = /^(icon|start-icon|end-icon)$/;

// Registration: follow the imports of src/scripts/nldd.ts through the package.
const registered = new Set();
const seen = new Set();
const walk = (file) => {
    if (seen.has(file)) return;
    seen.add(file);
    for (const [tag, definer] of definedIn) if (definer === file) registered.add(tag);
    const source = readFileSync(file, 'utf8');
    for (const [, specifier] of source.matchAll(/^\s*(?:import|export)\b[^'"]*['"](\.[^'"]+)['"]/gm)) {
        walk(path.resolve(path.dirname(file), specifier));
    }
};
const entry = readFileSync(path.join(root, 'src/scripts/nldd.ts'), 'utf8');
for (const [, subpath] of entry.matchAll(/import[ (]'@nldd\/design-system\/([^']+)'/g)) {
    const target = pkg.exports[`./${subpath}`];
    const file = typeof target === 'string' ? target : target?.default;
    if (!file) problems.push(`src/scripts/nldd.ts: @nldd/design-system/${subpath} is not an export of the package`);
    else walk(path.join(pkgDir, file));
}

// Markup in the built pages, and elements the scripts create.
const used = new Map();
const use = (tag, where) => used.has(tag) || used.set(tag, where);
for (const file of files(path.join(root, 'dist'), '.html')) {
    const html = readFileSync(file, 'utf8');
    for (const [, tag, rawAttributes] of html.matchAll(/<(nldd-[a-z-]+)((?:\s+[^\s=>]+(?:="[^"]*")?)*)\s*\/?>/g)) {
        use(tag, rel(file));
        if (!attributes.has(tag)) {
            problems.push(`${rel(file)}: <${tag}> does not exist in the package`);
            continue;
        }
        for (const [, name, value] of rawAttributes.matchAll(/\s([^\s=>]+)(?:="([^"]*)")?/g)) {
            if (!attributes.get(tag).has(name) && !globalAttribute.test(name)) {
                problems.push(`${rel(file)}: <${tag}> has no attribute ${name}`);
            }
            if (value === 'false') problems.push(`${rel(file)}: <${tag} ${name}="false"> counts as on`);
            if (iconAttribute.test(name) && value && !icons.has(value)) {
                problems.push(`${rel(file)}: <${tag} ${name}="${value}"> is not an icon of the package`);
            }
        }
    }
}
for (const file of files(path.join(root, 'src'), '.ts')) {
    for (const [, tag] of readFileSync(file, 'utf8').matchAll(/createElement\('(nldd-[a-z-]+)'\)/g)) use(tag, rel(file));
}
for (const [tag, where] of used) {
    if (attributes.has(tag) && !registered.has(tag)) {
        problems.push(`${where}: <${tag}> is not registered by src/scripts/nldd.ts`);
    }
}

// Design tokens.
const tokens = new Set();
for (const file of files(path.join(pkgDir, 'dist/css'), '.css')) {
    for (const [, name] of readFileSync(file, 'utf8').matchAll(/(--[a-z0-9-]+)\s*:/g)) tokens.add(name);
}
for (const file of files(path.join(root, 'src'), '.css')) {
    for (const [, name] of readFileSync(file, 'utf8').matchAll(/var\((--[a-z0-9-]+)/g)) {
        if (!tokens.has(name)) problems.push(`${rel(file)}: ${name} is not a token of the package`);
    }
}

if (problems.length > 0) {
    console.error([...new Set(problems)].join('\n'));
    process.exit(1);
}
console.log(`check-site: ${used.size} nldd-* elements checked against @nldd/design-system ${pkg.version}`);
