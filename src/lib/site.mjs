// One build serves digihandboek.rijks.app, Plak and the PR previews: SITE_URL
// carries both the origin and the base path of the target.
export const siteUrl = new URL(process.env.SITE_URL ?? 'https://digihandboek.rijks.app/');
export const base = siteUrl.pathname.replace(/\/$/, '') || '/';
