// Every nldd-* component the site uses, registered from this one module.
import '@nldd/design-system/shell';
import '@nldd/design-system/page';
import '@nldd/design-system/breadcrumbs';
import '@nldd/design-system/button';
import '@nldd/design-system/card';
import '@nldd/design-system/cell';
import '@nldd/design-system/collection';
import '@nldd/design-system/container';
import '@nldd/design-system/hero';
import '@nldd/design-system/icon-cell';
import '@nldd/design-system/inline-dialog';
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
import '@nldd/design-system/tag';
import '@nldd/design-system/text';
import '@nldd/design-system/text-cell';
import '@nldd/design-system/title';
import '@nldd/design-system/top-navigation-bar';
import '@nldd/design-system/two-thirds-one-third-section';
import '@nldd/design-system/window';

// The code viewer brings CodeMirror, about half of all the JavaScript, and only
// a few pages have a code block.
if (document.querySelector('nldd-code-viewer')) {
    import('@nldd/design-system/code-viewer');
}
