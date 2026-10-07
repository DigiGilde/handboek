export interface NavPage {
    title: string;
    // Entry id in the handboek collection: the path under docs/ without `.md`.
    id: string;
    // For a page that cannot carry front matter (a symlink to CONTRIBUTING.md,
    // which GitHub renders as is); every other page has its description there.
    description?: string;
}

export interface NavSection {
    title: string;
    // The section overview lives at /<slug>/.
    slug: string;
    pages: NavPage[];
}

export const navigation: NavSection[] = [
    {
        title: 'Onze werkwijze',
        slug: 'werkwijze',
        pages: [
            { title: 'Principes', id: 'werkwijze/principes' },
            {
                title: 'Bijdragen aan het Digi Handboek',
                id: 'bijdragen-aan-handboek',
                description: 'Hoe je een vraag stelt, een verbetering voorstelt of zelf een wijziging aanbiedt.',
            },
            { title: 'Beslissingen logboek', id: 'werkwijze/beslissingen-logboek' },
            { title: 'Code review', id: 'werkwijze/code-review' },
        ],
    },
    {
        title: 'Onboarding',
        slug: 'onboarding',
        pages: [
            { title: 'Je eerste dagen', id: 'onboarding/eerste-dagen' },
            { title: 'Dev machine', id: 'onboarding/dev-machine' },
            { title: 'Accounts', id: 'onboarding/accounts' },
            { title: 'Hybride werken', id: 'onboarding/hybride-werken' },
            { title: 'Offboarding', id: 'offboarding' },
        ],
    },
    {
        title: 'Kennis',
        slug: 'kennis',
        pages: [
            { title: 'SSO Rijk', id: 'kennis/sso-rijk-keycloak' },
            { title: 'Reservation Bot', id: 'kennis/reservation-bot' },
        ],
    },
];

// Linked from the footer, not from the home page.
export const about: NavSection = {
    title: 'Over deze website',
    slug: 'over',
    pages: [
        { title: 'Toegankelijkheid', id: 'over/toegankelijkheid' },
        { title: 'Privacy', id: 'over/privacy' },
        { title: 'Licentie', id: 'over/licentie' },
        { title: 'Kwetsbaarheid melden', id: 'over/kwetsbaarheid' },
    ],
};

export const sections: NavSection[] = [...navigation, about];

export function pageHref(id: string): string {
    const route = id === 'index' ? '' : `${id.replace(/\/index$/, '')}/`;
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${route}`;
}

export function sectionHref(section: NavSection): string {
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${section.slug}/`;
}

export function sectionOf(id: string): NavSection | undefined {
    return sections.find((section) => section.pages.some((page) => page.id === id));
}
