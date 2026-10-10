// Every nldd-* component the site uses, registered from this one module.
//
// nldd-app-view must be defined before nldd-page: a page that upgrades first
// finds no scroll-mode provider, stays in nested mode and swallows the mouse
// wheel (checked against @nldd/design-system 0.8.95). ES modules evaluate in
// import order, but only within one entry: component imports in a page's own
// <script> end up in shared chunks that the bundler may evaluate earlier. So
// pages import nothing from the design system themselves.
import '@nldd/design-system/app-view';
import '@nldd/design-system/page';
import '@nldd/design-system/breadcrumbs';
import '@nldd/design-system/button';
import '@nldd/design-system/card';
import '@nldd/design-system/cell';
import '@nldd/design-system/collection';
import '@nldd/design-system/container';
import '@nldd/design-system/divider';
import '@nldd/design-system/hero';
import '@nldd/design-system/icon-cell';
import '@nldd/design-system/inline-dialog';
import '@nldd/design-system/link';
import '@nldd/design-system/list';
import '@nldd/design-system/list-item';
import '@nldd/design-system/menu-bar';
import '@nldd/design-system/menu-bar-item';
import '@nldd/design-system/one-third-two-thirds-section';
import '@nldd/design-system/page-footer';
import '@nldd/design-system/rich-text';
import '@nldd/design-system/search-field';
import '@nldd/design-system/sidebar-section';
import '@nldd/design-system/simple-section';
import '@nldd/design-system/skip-link';
import '@nldd/design-system/spacer';
import '@nldd/design-system/spacer-cell';
import '@nldd/design-system/text';
import '@nldd/design-system/text-cell';
import '@nldd/design-system/title';
import '@nldd/design-system/top-navigation-bar';
import '@nldd/design-system/window';

// The code viewer brings CodeMirror, about half of all the JavaScript, and only
// a few pages have a code block.
if (document.querySelector('nldd-code-viewer')) {
    import('@nldd/design-system/code-viewer');
}
