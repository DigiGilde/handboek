// Search in a window, on top of the Pagefind index that `npm run build` writes.
// Opens from the Zoeken item in the top bar and with Cmd/Ctrl+K. The window
// starts as just the search field and grows with the results.

interface PagefindResult {
    url: string;
    excerpt: string;
    meta: { title?: string };
    sub_results?: { url: string; title: string; excerpt: string }[];
}

interface Pagefind {
    options(options: { excerptLength?: number }): Promise<void>;
    debouncedSearch(
        query: string,
        options?: object,
        timeout?: number,
    ): Promise<{ results: { data(): Promise<PagefindResult> }[] } | null>;
}

type Overlay = HTMLElement & { show(): void };
type InlineDialog = HTMLElement & { text: string; supportingText: string };

const searchWindow = document.getElementById('search-window') as Overlay | null;
const opener = document.getElementById('search-open');
const field = document.getElementById('search-query') as (HTMLElement & { value: string }) | null;
const results = document.getElementById('search-results');
const output = document.getElementById('search-output');
const status = document.getElementById('search-status');

if (searchWindow && opener && field && results && output && status) {
    const emptyState = results.querySelector('[slot="empty"]') as InlineDialog;
    const base = (searchWindow.dataset.base ?? '/').replace(/\/$/, '');
    let pagefind: Promise<Pagefind> | undefined;

    // The index only exists in a build; `astro dev` has none.
    const loadPagefind = (): Promise<Pagefind> => {
        pagefind ??= import(/* @vite-ignore */ `${base}/pagefind/pagefind.js`).then(async (module: Pagefind) => {
            await module.options({ excerptLength: 24 });
            return module;
        });
        return pagefind;
    };

    // Pagefind marks hits with <mark>. Only the text is copied over, into real
    // <mark> elements, so nothing from the index is parsed into the page as HTML.
    const excerpt = (html: string): HTMLElement => {
        const paragraph = document.createElement('p');
        for (const node of new DOMParser().parseFromString(html, 'text/html').body.childNodes) {
            if (node.nodeName === 'MARK') {
                const mark = document.createElement('mark');
                mark.textContent = node.textContent;
                paragraph.append(mark);
            } else {
                paragraph.append(node.textContent ?? '');
            }
        }
        const text = document.createElement('nldd-rich-text');
        text.setAttribute('spacing', 'flat');
        text.append(paragraph);
        return text;
    };

    const resultItem = (href: string, title: string, html: string, nested: boolean): HTMLElement => {
        const item = document.createElement('nldd-list-item');
        item.setAttribute('href', href);
        if (nested) {
            const spacer = document.createElement('nldd-spacer-cell');
            spacer.setAttribute('size', '24');
            item.append(spacer);
        }
        const cell = document.createElement('nldd-cell');
        cell.setAttribute('width', 'full');
        const heading = document.createElement('nldd-text');
        heading.setAttribute('weight', 'bold');
        heading.setAttribute('size', nested ? 'sm' : 'md');
        heading.textContent = title;
        cell.append(heading, excerpt(html));
        item.append(cell);
        return item;
    };

    // An empty status still takes a line, so it is hidden until it has news.
    // It shows first and gets its text a frame later, so a screen reader hears
    // the change in a live region that is already there.
    const announce = (text: string) => {
        if (!text) {
            status.textContent = '';
            status.hidden = true;
            return;
        }
        status.hidden = false;
        requestAnimationFrame(() => (status.textContent = text));
    };

    // nldd-window caps its height as if it stood at the top of the screen,
    // whatever its top (checked against 0.8.95). Where the window opens lower,
    // it gets the room that is left as its height, and only once the results
    // need it, so a short list keeps the window compact.
    const inset = () =>
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--semantics-overlays-inset')) || 16;
    const fit = () => {
        searchWindow.removeAttribute('height');
        requestAnimationFrame(() => {
            const page = searchWindow.querySelector('nldd-page');
            const room = innerHeight - Number(searchWindow.dataset.top ?? inset()) - inset();
            if (page && page.scrollHeight > room) searchWindow.setAttribute('height', `${room}px`);
        });
    };

    const show = (items: HTMLElement[] | null, announcement: string) => {
        results.querySelectorAll('nldd-list-item').forEach((item) => item.remove());
        output.hidden = items === null;
        if (items) results.append(...items);
        announce(announcement);
        fit();
    };

    // Only the answer to the latest query is shown: a slower one for an earlier
    // query may come back after the field was cleared.
    let latest = 0;

    const search = async (query: string) => {
        const ticket = ++latest;
        if (!query.trim()) {
            show(null, '');
            return;
        }
        let response;
        try {
            response = await (await loadPagefind()).debouncedSearch(query, {}, 200);
        } catch {
            emptyState.text = 'Zoeken is niet beschikbaar';
            emptyState.supportingText = 'Probeer het later opnieuw.';
            show([], 'Zoeken is niet beschikbaar.');
            return;
        }
        if (response === null || ticket !== latest) return;
        const found = await Promise.all(response.results.slice(0, 10).map((result) => result.data()));
        if (ticket !== latest) return;
        const items = found.flatMap((result) => {
            const title = result.meta.title ?? result.url;
            // The page itself comes back as a sub-result too, by its url or its h1.
            const sections = (result.sub_results ?? [])
                .filter((sub) => sub.url !== result.url && sub.title !== title)
                .slice(0, 3);
            return [
                resultItem(result.url, title, result.excerpt, false),
                ...sections.map((sub) => resultItem(sub.url, sub.title, sub.excerpt, true)),
            ];
        });
        const count = found.length === 1 ? '1 pagina gevonden' : `${found.length} pagina's gevonden`;
        show(items, found.length ? `${count}.` : 'Geen resultaten.');
    };

    // The window opens level with the search item in the menu bar; when the page
    // has scrolled that bar away, at the top of the screen.
    const open = () => {
        loadPagefind().catch(() => undefined);
        const top = Math.max(inset(), Math.round(opener.getBoundingClientRect().top));
        searchWindow.setAttribute('top', `${top}px`);
        searchWindow.dataset.top = String(top);
        fit();
        searchWindow.show();
    };

    opener.addEventListener('click', open);
    document.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            open();
        }
    });

    // The window does not bubble its open and close events.
    searchWindow.addEventListener('open', () => {
        opener.setAttribute('expanded', '');
        field.focus();
    });
    searchWindow.addEventListener('close', () => opener.removeAttribute('expanded'));

    // The field has its own input in a shadow root and reports the value in the event detail.
    const onInput = (event: Event) => search((event as CustomEvent<{ value: string }>).detail?.value ?? field.value ?? '');
    field.addEventListener('input', onInput);
    field.addEventListener('search', onInput);

    // From the field, arrow down moves into the results; the list takes the
    // arrow keys from there. The focus moves once the key press has reached the
    // document, where the design system notes that the keyboard is in use: a
    // row focused before that takes it for a pointer and draws no focus ring.
    field.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowDown') return;
        const first = results.querySelector<HTMLElement>('nldd-list-item');
        if (!first) return;
        event.preventDefault();
        setTimeout(() => first.focus());
    });
}
