// A search result opens its page with the query in this parameter, and the page
// marks the terms with Pagefind's own highlighter. It only marks light DOM: text
// a component draws in its shadow root from an attribute stays unmarked.
export const highlightParam = 'zoekterm';

declare global {
    interface Window {
        PagefindHighlight?: new (options: { highlightParam: string; addStyles: boolean }) => unknown;
    }
}

if (new URLSearchParams(location.search).has(highlightParam)) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    // addStyles: false leaves <mark> to the design system's own look.
    import(/* @vite-ignore */ `${base}/pagefind/pagefind-highlight.js`).then(() => {
        if (window.PagefindHighlight) new window.PagefindHighlight({ highlightParam, addStyles: false });
    });
}
