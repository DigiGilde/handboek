const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/dist.CBfQ8g78.js","_astro/dist.C_0kLdE9.js","_astro/dist.Cd4vgKWk.js","_astro/dist.DMJTMcka.js","_astro/icon.9dzV6M-I.js","_astro/decorators.VVcZcd54.js","_astro/reflect-non-default.D43nWX__.js","_astro/directive.BSZPiF1A.js","_astro/dist.CbYOvnee.js","_astro/dist.BEk9YKDY.js","_astro/dist.3O4hMHWO.js","_astro/dist.CPJ55cwe.js","_astro/dist.nqTWPzGT.js","_astro/dist.CYhK4MCp.js","_astro/dist.B90x9YkE.js","_astro/dist.CFFWl064.js"])))=>i.map(i=>d[i]);
import{n as e,r as t}from"./icon.9dzV6M-I.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,t as d}from"./decorators.VVcZcd54.js";import{t as f}from"./query.DDQkTGvL.js";import{t as p}from"./reflect-non-default.D43nWX__.js";import{n as m,r as h,t as g}from"./static-html.CDZ6ga1p.js";import{n as _,t as v}from"./shadow-resets.DG6wXGXQ.js";import{n as ee,r as te,t as ne}from"./directive.BSZPiF1A.js";import{i as y,n as re,r as ie,t as ae}from"./class-map.DjzOioQh.js";import{a as oe,i as se,n as ce,o as le,r as ue,s as de,t as fe}from"./icon-button.BG0JA1zM.js";import{n as pe,r as me,t as he}from"./input-modality.D5atRMhA.js";import{t as b}from"./breakpoints.EM_gyS4P.js";import{t as ge}from"./visibility-mixin.BOlHyX2K.js";var _e=`nldd-single-column-change`;function ve(e){let t=e.closest?.(`nldd-app-view, nldd-sheet, nldd-modal-dialog`);return t&&`registerScrollConsumer`in t?t:null}var ye=class{constructor(e,t){this.mode=`nested`,this._raf=0,this._provider=null,this._onResize=()=>{this._raf||=requestAnimationFrame(()=>{this._raf=0,this.read()})},this._host=e,this._onChange=t,e.addController(this)}hostConnected(){this._provider=ve(this._host),this._provider?this._provider.registerScrollConsumer(this):(window.addEventListener(`resize`,this._onResize,{passive:!0}),this.read())}hostDisconnected(){this._provider?(this._provider.unregisterScrollConsumer(this),this._provider=null):window.removeEventListener(`resize`,this._onResize),this._raf&&cancelAnimationFrame(this._raf)}readScrollMode(e){let t=e??this._readVar();t!==this.mode&&(this.mode=t,this._host.dataset.scroll=t,this._onChange?.(t))}_readVar(){return getComputedStyle(this._host).getPropertyValue(`--context-scroll-mode`).trim()===`root`?`root`:`nested`}read(){this.readScrollMode()}},be=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--context-parent-background-color: var(--semantics-surfaces-base-background-color);
		--_background-color: var(--context-parent-background-color);

		display: flex;
		background-color: var(--_background-color);
		width: 100%;
		height: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	:host([background="tinted"]) {
		--context-parent-background-color: var(--semantics-surfaces-tinted-background-color);
		--_background-color: var(--semantics-surfaces-tinted-background-color);
	}

	/* Root-scroll mode — the DOCUMENT scrolls (see ScrollModeController +
	   --context-scroll-mode). The app-view is the outermost DS layer, so it grows
	   with its content (min-height fills the viewport for short pages), letting a
	   descendant nldd-page's sticky layers stick against the document. */
	:host([data-scroll="root"]) {
		height: auto;
		min-height: 100dvh;
	}


	/* # Block */

	.app-view {
		display: flex;
		min-width: 0;
		min-height: 0;
		overflow: hidden;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	/* Root-scroll mode — row axis untouched (this is a column block but a row item
	   of the host); only stop clipping so descendant sticky layers can escape. */
	:host([data-scroll="root"]) .app-view {
		overflow: visible;
	}


	/* # Elements */

	::slotted(*) {
		min-height: 0;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	/* Root-scroll mode — the slotted layer (bar/split-view or page) is a COLUMN
	   item here, so flex-basis/flex-shrink govern its height: fill the viewport
	   when short (flex-grow), keep its own height when taller (flex-shrink:0), so
	   a definite ancestor height can't squeeze it and cap a descendant sticky
	   layer's range. */
	:host([data-scroll="root"]) ::slotted(*) {
		flex-basis: auto;
		flex-shrink: 0;
	}
`;function xe(e){return r`
		<div class="app-view">
			<slot></slot>
		</div>
	`}var Se=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ce=[];function we(){for(let e=Ce.length-1;e>=0;e--)if(Ce[e].isConnected)return Ce[e];return null}var Te=class extends o{constructor(){super(...arguments),this.background=`base`,this._scrollConsumers=new Set,this._derivedMode=null,this._scrollMode=new ye(this,()=>this._applyOverscroll()),this._onSingleColumnChange=()=>{this._evaluateScrollMode()}}registerScrollConsumer(e){this._scrollConsumers.add(e),this._evaluateScrollMode(),this._derivedMode&&e.readScrollMode(this._derivedMode)}unregisterScrollConsumer(e){this._scrollConsumers.delete(e),this._evaluateScrollMode()}_outermostSplitView(){return this.querySelector(`nldd-navigation-split-view, nldd-side-by-side-split-view`)}_evaluateScrollMode(){let e=this._outermostSplitView();if(e&&typeof e.isSingleColumn!=`boolean`)return;let t=e?e.isSingleColumn?`root`:`nested`:`root`;t!==this._derivedMode&&(this._derivedMode=t,this.style.setProperty(`--context-scroll-mode`,t),this._scrollConsumers.forEach(e=>e.readScrollMode(this._derivedMode??void 0)))}connectedCallback(){super.connectedCallback(),Ce.push(this),this._writeBodyBackground(),this._applyOverscroll(),this.addEventListener(_e,this._onSingleColumnChange),this._evaluateScrollMode()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(_e,this._onSingleColumnChange);let e=Ce.indexOf(this);e>=0&&Ce.splice(e,1);let t=we();t?(t._writeBodyBackground(),t._applyOverscroll()):(document.body.style.removeProperty(`background-color`),document.documentElement.style.removeProperty(`overscroll-behavior`),document.body.style.removeProperty(`overscroll-behavior`))}_applyOverscroll(){we()===this&&(this._scrollMode.mode===`root`?(document.documentElement.style.removeProperty(`overscroll-behavior`),document.body.style.removeProperty(`overscroll-behavior`)):(document.documentElement.style.overscrollBehavior=`none`,document.body.style.overscrollBehavior=`none`))}updated(e){e.has(`background`)&&we()===this&&this._writeBodyBackground()}_writeBodyBackground(){let e=this.background===`tinted`?`--semantics-surfaces-tinted-background-color`:`--semantics-surfaces-base-background-color`;document.body.style.backgroundColor=`var(${e})`}render(){return xe(this)}};Te.styles=be,Se([c({reflect:!0,converter:p(`base`)})],Te.prototype,`background`,void 0),Te=Se([u(`nldd-app-view`)],Te);var Ee=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_background-color: var(--context-parent-background-color, var(--semantics-surfaces-base-background-color));
		/* The insets this page arrived with, parked before it adds its own:
		   republishing --context-inset-top on the element it reads from would be
		   a cycle. */
		--_outer-inset-top: var(--context-inset-top, 0px);
		--_outer-inset-bottom: var(--context-inset-bottom, 0px);
		--_header-height: 0px;
		--_footer-height: 0px;
		--_header-full-height: 0px;
		/* Set from JS while the page owns the scroller. initial, not a length, so
		   the fallback stands when the document scrolls instead. */
		--_scroll-height: initial;

		display: flex;
		background-color: var(--_background-color);
		width: 100%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior: contain;
		flex-direction: column;
		/* New stacking context so descendant z-index (e.g. list-item
		 * sticky/elevated layers) can't paint over the page's scrollbar. */
		isolation: isolate;
	}

	:host([hidden]) {
		display: none;
	}

	:host([background="base"]) {
		--context-parent-background-color: var(--semantics-surfaces-base-background-color);
		--_background-color: var(--context-parent-background-color);
	}

	:host([background="tinted"]) {
		--context-parent-background-color: var(--semantics-surfaces-tinted-background-color);
		--_background-color: var(--context-parent-background-color);
	}

	/* Overflow hidden prevents content from escaping the scroll wrapper.
	   Overlays inside slotted content should use popover, dialog, or
	   position: fixed to render in the top layer. */
	:host([sticky-header]) {
		position: relative;
		overflow: hidden;
	}

	/* Root-scroll mode: the DOCUMENT scrolls (see nldd-app-view), not the page.
	   The page stops owning an inner scroll container and its sticky-header/footer
	   stick against the document, offset by the insets above and below
	   (--context-inset-top/bottom, published by any bars outside the page). The mode is derived upstream and
	   delivered as --context-scroll-mode; nldd-page reflects it to [data-scroll]
	   so these (higher-specificity, later) rules win over the nested ones. */
	:host([data-scroll="root"]) {
		height: auto;
		overflow: visible;
		overscroll-behavior: auto;
	}

	/* Undo the nested-mode clip — the document is the scroller now. */
	:host([data-scroll="root"][sticky-header]) {
		overflow: visible;
	}


	/* # Block */

	.page {
		display: flex;
		min-height: 0;
		flex-direction: column;
		flex-grow: 1;
	}

	/* Root-scroll mode: no inner scroller; content-sized (flex-shrink:0) so the
	   sticky header/footer's containing block spans the whole document rather
	   than being squeezed to a definite ancestor height.

	   Content-sized costs the page its floor, though: nested mode inherits one
	   from the pane it stretches inside, and here there is nothing to stretch in.
	   A short page would end where its content ends and leave anything after it
	   (an nldd-page-footer, say) stranded mid-viewport. The minimum restores that
	   floor without pinning: longer content still pushes past it. */
	:host([data-scroll="root"]) .page {
		overflow: visible;
		flex-shrink: 0;
		min-height: calc(100dvh - var(--context-inset-top, 0px) - var(--context-inset-bottom, 0px));
	}


	/* # Elements */

	.page__header {
		position: relative;
		flex-shrink: 0;
	}

	:host([sticky-header]) .page__header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: color-mix(in srgb, var(--_background-color) 95%, transparent);
	}

	:host([sticky-header]) .page__header::after {
		content: '';
		position: absolute;
		/* Behind the header's own content, not over it: the header has z-index 1
		   and so its own stacking context, which keeps this inside it — above the
		   header's background, below whatever is slotted in. Without it the fade
		   paints last and covers anything that reaches past the header's bottom
		   edge, such as the focus ring of a field sitting flush against it. */
		z-index: -1;
		top: 100%;
		left: 0;
		right: 0;
		opacity: 0;
		background: linear-gradient(to bottom, color-mix(in srgb, var(--_background-color) 95%, transparent), transparent);
		pointer-events: none;
		height: var(--primitives-space-24);
		transition: opacity var(--primitives-transition-duration-medium) var(--primitives-transition-easing-default);
	}

	:host([sticky-header]) .page__header.is-scrolled::after {
		opacity: 1;
	}

	/* Root-scroll mode: sticky against the document instead of absolute-over-a-
	   nested-scroller. Being in normal flow it reserves its own space, so no
	   ResizeObserver padding is needed. left/right revert to auto: those insets
	   only mattered for the absolute overlay. */
	:host([data-scroll="root"][sticky-header]) .page__header {
		position: sticky;
		top: var(--context-inset-top, 0px);
		left: auto;
		right: auto;
	}

	/* The page adds its own bars to the insets it inherited, so sticky content
	   inside clears them without knowing a number. The header sits outside this
	   element and keeps the value without itself in it. */
	.page__scroll {
		--context-inset-top: calc(var(--_outer-inset-top) + var(--_header-height));
		--context-inset-bottom: calc(var(--_outer-inset-bottom) + var(--_footer-height));
		/* The height sticky content can cap itself on. Unset while the document
		   scrolls, where the viewport is the whole story. */
		--context-scroller-height: var(--_scroll-height, 100dvh);

		display: flex;
		min-height: 0;
		flex-direction: column;
		flex-grow: 1;
	}

	/* Nested scrolling: a sticky child is measured against this element, so the
	   bars above the page fall outside it and only its own header counts. */
	:host(:not([data-scroll="root"])) .page__scroll {
		--context-inset-top: var(--_header-height);
		--context-inset-bottom: var(--_footer-height);
		padding-top: var(--_header-full-height);
	}

	:host([sticky-header]) .page__scroll {
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior: contain;
	}

	/* Root-scroll mode: content-sized, no inner scroller (see the .page rule). */
	:host([data-scroll="root"]) .page__scroll {
		overflow: visible;
		flex-shrink: 0;
	}

	.page__main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.page__footer {
		position: relative;
		flex-shrink: 0;
	}

	:host([sticky-footer]) .page__footer {
		position: sticky;
		bottom: 0;
		z-index: 1;
		background-color: color-mix(in srgb, var(--_background-color) 95%, transparent);
	}

	:host([sticky-footer]) .page__footer::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 0;
		right: 0;
		background: linear-gradient(to top, color-mix(in srgb, var(--_background-color) 95%, transparent), transparent);
		pointer-events: none;
		height: var(--primitives-space-24);
	}

	/* Root-scroll mode: footer sticks to the document bottom, above any bottom bars. */
	:host([data-scroll="root"][sticky-footer]) .page__footer {
		bottom: var(--context-inset-bottom, 0px);
	}
`;function De(e){let t=e._isRegion,r=t?g`section`:g`div`,i=t?g`div`:g`main`,a=e.accessibleLabel.trim()||n;return h`
		<${r} class="page"
			aria-label=${t?a:n}
		>
			<header class="page__header ${e._scrolled?`is-scrolled`:``}">
				<slot name="header"></slot>
			</header>
			<div class="page__scroll">
				<${i} class="page__main"
					aria-label=${t?n:a}
				>
					<slot></slot>
				</${i}>
				<footer class="page__footer">
					<slot name="footer"></slot>
				</footer>
			</div>
		</${r}>
	`}var Oe=t({NLDDPage:()=>Ne}),ke=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ae=[`nldd-sheet`,`nldd-modal-dialog`,`nldd-window`,`nldd-popover`],je=[`nldd-navigation-split-view`,`nldd-side-by-side-split-view`,`nldd-stacked-split-view`],Me=new Set,Ne=class extends o{constructor(){super(...arguments),this.background=`inherit`,this.accessibleLabel=``,this.stickyHeader=!1,this.stickyFooter=!1,this.landmarks=`auto`,this._scrolled=!1,this._derived=`page`,this._warnedDuplicateMain=!1,this._scrollMode=`nested`,this._scrollTarget=null,this._scrollProvider=null,this._insetObserver=null,this._headerFullHeight=0,this._mainSlot=null,this._resizeRaf=0,this._onResize=()=>{this._resizeRaf||=requestAnimationFrame(()=>{this._resizeRaf=0,this._readScrollMode()&&this._configureScroll()})},this._onScroll=()=>{this._scrolled=this._isRoot?window.scrollY>0:((this.stickyHeader?this._scrollEl:this)?.scrollTop??0)>0},this._updateMainItems=()=>{let e=this._mainSlot;if(!e)return;let t=e.assignedElements(),n=t.filter(e=>!e.hasAttribute(`hidden`)),r=n[n.length-1];t.forEach(e=>e.classList.toggle(`is-last`,e===r))}}get _isRegion(){return this.landmarks===`auto`?this._derived===`region`:this.landmarks===`region`}_deriveLandmarks(){for(let e=this.parentElement;e;e=e.parentElement){let t=e.localName;if(Ae.includes(t)||je.includes(t)){this._derived=`region`;return}}this._derived=`page`}_warnOnSecondMain(){}get _isRoot(){return this._scrollMode===`root`}get scrollTarget(){return this._isRoot?document.scrollingElement??document.documentElement:this.stickyHeader?this._scrollEl??this:this}get scrollEventTarget(){return this._isRoot?window:this.stickyHeader?this._scrollEl??this:this}get _headerEl(){return this.shadowRoot?.querySelector(`.page__header`)??null}get _scrollEl(){return this.shadowRoot?.querySelector(`.page__scroll`)??null}get _footerEl(){return this.shadowRoot?.querySelector(`.page__footer`)??null}connectedCallback(){super.connectedCallback(),this._deriveLandmarks(),Me.add(this),this.style.containerType=`inline-size`,this.style.containerName=`layout-container`,this._scrollProvider=ve(this),this._scrollProvider?(this._scrollProvider.registerScrollConsumer(this),this.hasUpdated&&this._configureScroll()):(window.addEventListener(`resize`,this._onResize,{passive:!0}),this.hasUpdated&&(this._readScrollMode(),this._configureScroll()))}disconnectedCallback(){super.disconnectedCallback(),Me.delete(this),window.removeEventListener(`resize`,this._onResize),this._scrollProvider?.unregisterScrollConsumer(this),this._scrollProvider=null,this._resizeRaf&&cancelAnimationFrame(this._resizeRaf),this._teardownScrollListener(),this._teardownInsetObserver(),this._teardownMainSlotListener()}firstUpdated(){this._scrollProvider||this._readScrollMode(),this._configureScroll(),this._setupMainSlotListener()}updated(e){e.has(`stickyHeader`)&&this._configureScroll(),this._warnOnSecondMain()}readScrollMode(e){this._readScrollMode(e)&&this._configureScroll()}_readScrollMode(e){let t=e??(getComputedStyle(this).getPropertyValue(`--context-scroll-mode`).trim()===`root`?`root`:`nested`);return t!==this._scrollMode&&(this._scrollMode=t,this.dataset.scroll=t,!0)}_configureScroll(){this._teardownScrollListener(),this._setupScrollListener(),this._headerFullHeight=0,this._setupInsetObserver(),this._onScroll()}_setupInsetObserver(){this._teardownInsetObserver();let e=this._headerEl,t=this._footerEl;if(!e||!t)return;let n=()=>{this._publish(`--_header-height`,`${this.stickyHeader?e.offsetHeight:0}px`),this._publish(`--_footer-height`,`${this.stickyFooter?t.offsetHeight:0}px`),this._publish(`--_header-full-height`,`${this._measureHeaderFullHeight(e)}px`),this._isRoot?this.style.removeProperty(`--_scroll-height`):this._publish(`--_scroll-height`,`${this._scrollEl?.clientHeight??0}px`)};n(),this._insetObserver=new ResizeObserver(n),this._insetObserver.observe(e),this._insetObserver.observe(t),this._scrollEl&&this._insetObserver.observe(this._scrollEl)}_teardownInsetObserver(){this._insetObserver&&=(this._insetObserver.disconnect(),null)}_publish(e,t){this.style.getPropertyValue(e)!==t&&this.style.setProperty(e,t)}_measureHeaderFullHeight(e){return this.stickyHeader?(this.scrollTarget.scrollTop===0&&(this._headerFullHeight=e.offsetHeight),this._headerFullHeight):0}_setupScrollListener(){let e=this.scrollEventTarget;e.addEventListener(`scroll`,this._onScroll,{passive:!0}),this._scrollTarget=e}_teardownScrollListener(){this._scrollTarget&&=(this._scrollTarget.removeEventListener(`scroll`,this._onScroll),null)}_setupMainSlotListener(){this._teardownMainSlotListener();let e=this.shadowRoot?.querySelector(`slot:not([name])`)??null;this._mainSlot=e,e&&(e.addEventListener(`slotchange`,this._updateMainItems),this._updateMainItems())}_teardownMainSlotListener(){this._mainSlot&&=(this._mainSlot.removeEventListener(`slotchange`,this._updateMainItems),null)}render(){return De(this)}};Ne.styles=Ee,ke([c({type:String,reflect:!0})],Ne.prototype,`background`,void 0),ke([c({type:String,attribute:`accessible-label`})],Ne.prototype,`accessibleLabel`,void 0),ke([c({type:Boolean,reflect:!0,attribute:`sticky-header`})],Ne.prototype,`stickyHeader`,void 0),ke([c({type:Boolean,reflect:!0,attribute:`sticky-footer`})],Ne.prototype,`stickyFooter`,void 0),ke([c({type:String,reflect:!0})],Ne.prototype,`landmarks`,void 0),ke([d()],Ne.prototype,`_scrolled`,void 0),ke([d()],Ne.prototype,`_derived`,void 0),Ne=ke([u(`nldd-page`)],Ne);var Pe=i`
	.breadcrumbs__separator {
		display: inline-flex;
		position: relative;
		top: var(--_separator-vertical-offset);
		margin-inline: var(--primitives-space-2);
		color: var(--semantics-content-secondary-color);
		width: var(--primitives-space-16);
		height: var(--primitives-space-16);
		flex-shrink: 0;
	}
`,Fe=i`
	:host {
		box-sizing: border-box;
	}
	:host {
		${v}
		display: block;
	}

	:host([hidden]) {
		display: none;
	}

	.breadcrumbs {
		display: flex;
	}

	.breadcrumbs__items {
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--primitives-space-4);
	}
`,Ie=i`
	:host {
		/* Small downward offset so the chevron-right-small icon sits closer
		   to the text's optical centerline (the icon's bbox renders slightly
		   above the visual baseline). */
		--_separator-vertical-offset: 0.05em;

		${v}
		display: inline-flex;
		align-items: center;
	}

	:host([hidden]) {
		display: none;
	}

	.breadcrumbs__item {
		display: inline-flex;
		align-items: center;
		color: var(--semantics-content-color);
		font: var(--primitives-font-body-md-regular-tight);
	}

	.breadcrumbs__item-link {
		color: var(--semantics-links-color);
		text-decoration: underline;
	}

	.breadcrumbs__item-link:hover {
		color: var(--semantics-links-is-hovered-color);
	}

	.breadcrumbs__item-link:active {
		color: var(--semantics-links-is-active-color);
	}

	.breadcrumbs__item-link:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		border-radius: var(--primitives-corner-radius-xs);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	${Pe}

	:host(:last-of-type) .breadcrumbs__separator {
		display: none;
	}
`;function Le(e){let t=e._t(`components.breadcrumbs.accessible-label`);return r`
		<nav class="breadcrumbs"
			aria-label=${t||n}
		>
			<div class="breadcrumbs__items"
				role="list"
			>
				<slot></slot>
			</div>
		</nav>
	`}function Re(e){let t=e.text||r`<slot></slot>`,i=r`<span class="breadcrumbs__separator"
		aria-hidden="true"
	><nldd-icon icon="chevron-right-small"></nldd-icon></span>`;return!e.current&&e.href?r`
			<span class="breadcrumbs__item">
				<a class="breadcrumbs__item-link"
					href=${e.href}
				>${t}</a>
			</span>${i}
		`:r`<span class="breadcrumbs__item"
		aria-current=${e.current?`page`:n}
	>${t}</span>${i}`}var ze={"components.breadcrumbs.accessible-label":`Kruimelpad`},Be=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),Ve=function(e){return`/handboek/`+e},He={},Ue=function(e){return e.pathname.endsWith(`.css`)},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ve(t,n);let r=s(t);if(r.href in He)return;He[r.href]=!0;let i=Ue(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:Be,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},We=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ge=class extends o{constructor(){super(...arguments),this.current=!1,this.text=``}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.current?this.setAttribute(`aria-current`,`page`):this.removeAttribute(`aria-current`))}render(){return Re(this)}};Ge.styles=Ie,We([c({type:String,reflect:!0})],Ge.prototype,`href`,void 0),We([c({type:Boolean,reflect:!0})],Ge.prototype,`current`,void 0),We([c({reflect:!0,converter:p(``)})],Ge.prototype,`text`,void 0),customElements.get(`nldd-breadcrumbs-item`)||customElements.define(`nldd-breadcrumbs-item`,Ge);var Ke=class extends o{constructor(){super(...arguments),this.accessibleLabel=``,this.translations={}}_t(e){return e===`components.breadcrumbs.accessible-label`&&this.accessibleLabel?this.accessibleLabel:y(this.translations,ze,e)}render(){return Le(this)}};Ke.styles=Fe,We([c({type:String,attribute:`accessible-label`})],Ke.prototype,`accessibleLabel`,void 0),We([c({type:Object})],Ke.prototype,`translations`,void 0),Ke=We([u(`nldd-breadcrumbs`)],Ke);var qe=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_corner-radius: var(--semantics-controls-md-corner-radius);
		/* A parent that stacks its buttons says so through the context variable;
		   the button's own width attribute overrides it with an inline style. */
		--_width: var(--context-button-width, auto);
		--_min-size: var(--semantics-controls-md-min-size);
		--_block-padding: var(--semantics-controls-md-block-padding);
		--_inline-padding: var(--semantics-buttons-md-inline-padding);
		--_gap: var(--semantics-buttons-md-gap);
		--_font: var(--semantics-buttons-md-primary-text-font);
		--_icon-size: var(--semantics-buttons-md-icon-size);
		--_disclosure-icon-size: var(--primitives-space-20);
		--_supporting-font: var(--semantics-buttons-md-supporting-text-font);
		--_background-color: var(--semantics-buttons-neutral-tinted-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-tinted-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-tinted-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-tinted-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-tinted-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-tinted-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-tinted-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-tinted-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-tinted-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-active-highlight-border-color);

		${v}
		/* inline-flex, not inline-block: a block container puts the control on a
		   line, and the strut's descender then grows the host with the inherited
		   line-height, so the same button is taller in body text than in a form. */
		display: inline-flex;
		position: relative;
		/* A definite width, so a flex or grid parent doesn't stretch the host: an
		   inline-block shrink-wraps in normal flow, but as a flex item it would be
		   stretched to the full line while the button inside stays content-sized —
		   leaving an invisible box around the button that swallows clicks that
		   look like they land beside it. align-self would only cover flex. */
		width: fit-content;
		max-width: 100%;
		-webkit-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	:host([size="xs"]) {
		--_corner-radius: var(--semantics-controls-xs-corner-radius);
		--_min-size: var(--semantics-controls-xs-min-size);
		--_block-padding: var(--semantics-controls-xs-block-padding);
		--_inline-padding: var(--semantics-buttons-xs-inline-padding);
		--_gap: var(--semantics-buttons-xs-gap);
		--_font: var(--semantics-buttons-xs-primary-text-font);
		--_icon-size: var(--semantics-buttons-xs-icon-size);
		--_disclosure-icon-size: var(--primitives-space-16);
		--_supporting-font: var(--semantics-buttons-xs-supporting-text-font);
	}

	:host([size="sm"]) {
		--_corner-radius: var(--semantics-controls-sm-corner-radius);
		--_min-size: var(--semantics-controls-sm-min-size);
		--_block-padding: var(--semantics-controls-sm-block-padding);
		--_inline-padding: var(--semantics-buttons-sm-inline-padding);
		--_gap: var(--semantics-buttons-sm-gap);
		--_font: var(--semantics-buttons-sm-primary-text-font);
		--_icon-size: var(--semantics-buttons-sm-icon-size);
		--_disclosure-icon-size: var(--primitives-space-18);
		--_supporting-font: var(--semantics-buttons-sm-supporting-text-font);
	}

	:host([size="lg"]) {
		--_corner-radius: var(--semantics-controls-lg-corner-radius);
		--_min-size: var(--semantics-controls-lg-min-size);
		--_block-padding: var(--semantics-controls-lg-block-padding);
		--_inline-padding: var(--semantics-buttons-lg-inline-padding);
		--_gap: var(--semantics-buttons-lg-gap);
		--_font: var(--semantics-buttons-lg-primary-text-font);
		--_icon-size: var(--semantics-buttons-lg-icon-size);
		--_disclosure-icon-size: var(--primitives-space-24);
		--_supporting-font: var(--semantics-buttons-lg-supporting-text-font);
	}

	:host([appearance="neutral-base"]) {
		--_background-color: var(--semantics-buttons-neutral-base-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-base-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-base-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-base-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-base-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-base-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-base-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-base-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-base-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-base-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-base-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-base-is-active-highlight-border-color);
	}

	:host([appearance="neutral-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-neutral-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([appearance="accent-filled"]),
	:host([appearance="primary"]) {
		--_background-color: var(--semantics-buttons-accent-filled-background-color);
		--_primary-content-color: var(--semantics-buttons-accent-filled-content-color);
		--_secondary-content-color: var(--semantics-buttons-accent-filled-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-accent-filled-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-accent-filled-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-filled-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-accent-filled-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-accent-filled-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-accent-filled-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-accent-filled-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-accent-filled-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-accent-filled-is-active-highlight-border-color);
	}

	:host([appearance="accent-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-accent-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-accent-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([appearance="critical-tinted"]),
	:host([appearance="destructive"]) {
		--_background-color: var(--semantics-buttons-critical-tinted-background-color);
		--_primary-content-color: var(--semantics-buttons-critical-tinted-content-color);
		--_secondary-content-color: var(--semantics-buttons-critical-tinted-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-critical-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-critical-tinted-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-tinted-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-critical-tinted-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-critical-tinted-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-critical-tinted-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-critical-tinted-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-critical-tinted-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-critical-tinted-is-active-highlight-border-color);
	}

	:host([appearance="critical-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-critical-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-critical-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	/* The on-color variants derive from currentColor (which stays
	   unresolved inside the tokens). The filled label prefers the surface
	   color from --context-parent-background-color; that var() must resolve
	   here on the host — inside a :root token it would freeze — with the
	   tokens' white/black contrast flip as fallback. */

	:host([appearance="inherit-tinted"]),
	:host([expanded][appearance="inherit-tinted"]) {
		--_background-color: var(--context-button-background-color, var(--semantics-buttons-inherit-tinted-background-color));
		--_primary-content-color: var(--semantics-buttons-inherit-tinted-content-color);
		--_secondary-content-color: var(--semantics-buttons-inherit-tinted-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-inherit-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--_background-color);
		--_is-hovered-primary-content-color: var(--_primary-content-color);
		--_is-hovered-secondary-content-color: var(--_secondary-content-color);
		--_is-hovered-highlight-border-color: var(--_highlight-border-color);
		--_is-active-background-color: var(--_background-color);
		--_is-active-primary-content-color: var(--_primary-content-color);
		--_is-active-secondary-content-color: var(--_secondary-content-color);
		--_is-active-highlight-border-color: var(--_highlight-border-color);
	}

	:host([appearance="inherit-filled"]),
	:host([expanded][appearance="inherit-filled"]) {
		--_background-color: var(--semantics-buttons-inherit-filled-background-color);
		--_primary-content-color: var(--context-parent-background-color, var(--semantics-buttons-inherit-filled-content-color));
		--_secondary-content-color: var(--semantics-buttons-inherit-filled-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-inherit-filled-highlight-border-color);
		--_is-hovered-background-color: var(--_background-color);
		--_is-hovered-primary-content-color: var(--_primary-content-color);
		--_is-hovered-secondary-content-color: var(--_secondary-content-color);
		--_is-hovered-highlight-border-color: var(--_highlight-border-color);
		--_is-active-background-color: var(--_background-color);
		--_is-active-primary-content-color: var(--_primary-content-color);
		--_is-active-secondary-content-color: var(--_secondary-content-color);
		--_is-active-highlight-border-color: var(--_highlight-border-color);
	}

	/* For inherit-filled the inner button keeps the inherited on-color:
	   its currentColor background and the label's contrast flip resolve
	   against it, and would otherwise self-reference the label. The label
	   color moves to the content layer instead. The higher specificity of
	   these rules deliberately pins the color through hover/active/expanded. */
	:host([appearance="inherit-filled"]) .button {
		color: inherit;
	}

	:host([appearance="inherit-filled"]) .button > * {
		color: var(--_primary-content-color);
	}

	/* ## Expanded — default (incl. unknown variant) */

	:host([expanded]) {
		--_background-color: var(--semantics-buttons-neutral-tinted-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="neutral-base"]) {
		--_background-color: var(--semantics-buttons-neutral-base-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-base-is-expanded-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="neutral-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-neutral-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-neutral-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([expanded][appearance="accent-filled"]),
	:host([expanded][appearance="primary"]) {
		--_background-color: var(--semantics-buttons-accent-filled-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-content-color);
		--_secondary-content-color: var(--semantics-buttons-accent-filled-is-expanded-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="accent-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-accent-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-accent-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([expanded][appearance="critical-tinted"]),
	:host([expanded][appearance="destructive"]) {
		--_background-color: var(--semantics-buttons-critical-tinted-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-content-color);
		--_secondary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-content-secondary-color);
		--_highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-content-secondary-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="critical-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-critical-transparent-content-color);
		--_secondary-content-color: var(--semantics-buttons-critical-transparent-content-secondary-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-color);
		--_is-hovered-secondary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-secondary-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-color);
		--_is-active-secondary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-secondary-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([width="full"]) {
		display: block;
		width: 100%;
	}

	:host([horizontal-alignment="left"]) .button {
		justify-content: flex-start;
		text-align: left;
	}

	:host([horizontal-alignment="right"]) .button {
		justify-content: flex-end;
		text-align: right;
	}

	:host([hidden]) {
		display: none;
	}

	:host([disabled]) {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}

	:host([no-highlight-border]),
	:host([no-highlight-border][expanded]) {
		--_highlight-border-color: transparent;
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-highlight-border-color: transparent;
	}


	/* # Block */

	.button {
		box-sizing: border-box;
		display: inline-flex;
		position: relative;
		margin: 0;
		border: none;
		border-radius: var(--_corner-radius);
		background: none;
		background-color: var(--_background-color);
		box-shadow: inset 0 0 0 var(--primitives-border-width-thin) var(--_highlight-border-color);
		width: var(--_width);
		min-width: var(--_min-size);
		max-width: 100%;
		min-height: var(--_min-size);
		padding: var(--_block-padding) var(--_inline-padding);
		gap: var(--_gap);
		align-items: center;
		justify-content: center;
		color: var(--_primary-content-color);
		font: var(--_font);
		text-align: center;
		text-decoration: none;
		text-wrap: pretty;
		transition:
			background-color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default),
			color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default)
		;
		appearance: none;
	}

	a.button {
		cursor: var(--semantics-controls-link-cursor);
	}

	.button:hover {
		@media (hover: hover) {
			background-color: var(--_is-hovered-background-color);
			color: var(--_is-hovered-primary-content-color);
			--_highlight-border-color: var(--_is-hovered-highlight-border-color);
		}
	}

	.button:active {
		background-color: var(--_is-active-background-color);
		color: var(--_is-active-primary-content-color);
		--_highlight-border-color: var(--_is-active-highlight-border-color);
	}

	/* Loading keeps the control focusable (not disabled); activation is blocked in JS. */
	:host([loading]) .button {
		cursor: default;
	}

	.button:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow), inset 0 0 0 var(--primitives-border-width-thin) var(--_highlight-border-color);
	}

	.button:focus:not(:focus-visible) {
		outline: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.button,
		.button__content {
			transition: none;
		}
	}


	/* # Elements */

	.button__content {
		display: inline-flex;
		max-width: 100%;
		min-width: 0;
		align-items: center;
		/* Space between the icons and the text-area. Was padding-inline on the
		   text-area; a flex gap keeps it off the text and out of the no-icon edges. */
		gap: var(--_gap);
		transition: opacity var(--primitives-transition-duration-slow) var(--primitives-transition-easing-default);
	}

	/* Loading crossfades the content out (opacity, not visibility, so the button
	   keeps its accessible name) while the indicator fades in. The content stays
	   laid out, so the button keeps its width. */
	:host([loading]) .button__content {
		opacity: 0;
	}

	:host([loading]) .button__disclosure-icon {
		opacity: 0;
	}

	/* Wrapper overlaid on the control, positioned against the host (which is
	   position:relative). It lives outside the <button>/<a> so the indicator's
	   role="status" live region announces loading without joining the button's
	   accessible name. The activity-indicator inside fills it and centers its
	   circle, which inherits the content color via currentColor. */
	.button__activity-indicator {
		position: absolute;
		inset: 0;
		color: var(--_primary-content-color);
	}

	::slotted(nldd-icon) {
		display: none;
	}

	.button__text {
		min-width: 0;
	}

	/* A capped button truncates by itself: max-width is there to keep the button
	   within a bound, and a label that wrapped to three lines would defeat that. */
	:host([single-line]) .button__text,
	:host([max-width]) .button__text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.button__text-area {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	:host([size="xs"]) .button__text-area,
	:host([size="sm"]) .button__text-area {
		flex-direction: row;
		align-items: baseline;
		gap: var(--_gap);
	}

	.button__supporting-text {
		min-width: 0;
		color: var(--_secondary-content-color);
		font: var(--_supporting-font);
	}

	.button:hover .button__supporting-text {
		@media (hover: hover) {
			color: var(--_is-hovered-secondary-content-color);
		}
	}

	.button:active .button__supporting-text {
		color: var(--_is-active-secondary-content-color);
	}

	/* Visually-hidden "opens in new tab" announcement (href + target="_blank");
	   part of the link's accessible name but never shown. Standard recipe. */
	.button__opens-in-new-tab-hint {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}

	:host([single-line]) .button__supporting-text,
	:host([max-width]) .button__supporting-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:host(:not([size])) .button.has-supporting-text,
	:host([size="md"]) .button.has-supporting-text {
		--_font: var(--semantics-buttons-sm-primary-text-font);
		--_icon-size: var(--semantics-buttons-md-has-supporting-text-icon-size);
		--_inline-padding: var(--semantics-buttons-md-has-supporting-text-inline-padding);
		--_block-padding: var(--primitives-space-4);
	}

	:host([size="lg"]) .button.has-supporting-text {
		--_font: var(--semantics-buttons-md-primary-text-font);
		--_icon-size: var(--semantics-buttons-lg-has-supporting-text-icon-size);
		--_inline-padding: var(--semantics-buttons-lg-has-supporting-text-inline-padding);
		--_block-padding: var(--primitives-space-4);
	}

	.button__start-icon,
	.button__end-icon {
		display: flex;
		width: var(--_icon-size);
		height: var(--_icon-size);
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
	}

	/* Those spans are only rendered for the attribute; slotted content lands in a
	   bare slot. Sizing it here rather than wrapping the slot in the same span,
	   because that span has a width and would reserve icon space on every button
	   that has no icon at all. */
	::slotted([slot="start-icon"]),
	::slotted([slot="end-icon"]) {
		flex-shrink: 0;
		width: var(--_icon-size);
		height: var(--_icon-size);
	}

	:host([expandable]) .button {
		padding-inline-end: calc(var(--_inline-padding) + var(--_gap) + var(--_disclosure-icon-size));
	}

	.button__disclosure-icon {
		display: block;
		position: absolute;
		top: 50%;
		inset-inline-end: var(--_inline-padding);
		width: var(--_disclosure-icon-size);
		height: var(--_disclosure-icon-size);
		transform: translateY(-50%);
	}
`;function Je(e){return r`
		<span class="button__content">
			${e.startIcon?r`
				<span class="button__start-icon">
					<nldd-icon icon=${e.startIcon}></nldd-icon>
				</span>
			`:r`<slot name="start-icon"></slot>`}
			<span class="button__text-area">
				<span class="button__text">${e.text?e.text:r`<slot name="text"></slot>`}</span>
				${e.supportingText?r`<span class="button__supporting-text">${e.supportingText}</span>`:n}
			</span>
			${e.endIcon?r`
				<span class="button__end-icon">
					<nldd-icon icon=${e.endIcon}></nldd-icon>
				</span>
			`:r`<slot name="end-icon"></slot>`}
		</span>
		${e.expandable?r`
			<nldd-icon class="button__disclosure-icon"
				icon="chevron-down-small"
			></nldd-icon>
		`:n}
	`}function Ye(e){let t=Je(this),i=[`button`,this.supportingText?`has-supporting-text`:``].filter(Boolean).join(` `),a=this.expandable||this.popupType?String(this.expanded):this.expanded?`true`:n,o=this.href&&this.target===`_blank`?this._t(`components.button.opens-in-new-tab-label`):``,s=this.accessibleLabel||(this.supportingText?[this.text,this.supportingText].filter(Boolean).join(`, `):``),c=s?[s,o].filter(Boolean).join(`, `):n,l=!!o&&!s,u=this.loading?`true`:n,d=this.loading?r`
			<div class="button__activity-indicator">
				<nldd-activity-indicator
					timing="instant"
					size=${this.size===`xs`?`16`:this.size===`sm`?`20`:this.size===`lg`?`28`:`24`}
					text=${this.loadingText||n}
				></nldd-activity-indicator>
			</div>
		`:n,f=r`<slot name="popup" @slotchange=${this._popup.handleSlotChange}></slot>`;if(this.href){let s=ie(this.rel,this.target);return r`
			<a class=${i}
				href=${this.href}
				target=${this.target||n}
				rel=${s||n}
				aria-disabled=${this.disabled?`true`:n}
				aria-label=${c}
				aria-haspopup=${this.popupType||n}
				aria-expanded=${a}
				aria-busy=${u}
				tabindex=${this.noTab?`-1`:n}
				@pointerdown=${this._popup.handlePointerdown}
				@click=${e.handleClick}
			>
				${t}
				${l?r`<span class="button__opens-in-new-tab-hint">${o}</span>`:n}
			</a>
			${d}
			${f}
		`}return r`
		<button class=${i}
			type=${this.type}
			?disabled=${this.disabled}
			aria-disabled=${this.disabled?`true`:n}
			aria-label=${c}
			aria-haspopup=${this.popupType||n}
			aria-expanded=${a}
			aria-busy=${u}
			tabindex=${this.noTab?`-1`:n}
			popovertarget=${this.popovertarget||n}
			.popoverTargetElement=${this.popoverTargetElement}
			.popoverTargetAction=${this.popoverTargetAction}
			@pointerdown=${this._popup.handlePointerdown}
			@click=${e.handleClick}
		>
			${t}
		</button>
		${d}
		${f}
	`}var Xe={"components.button.opens-in-new-tab-label":`Opent in nieuw tabblad`},Ze=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};function Qe(e,t,n=!1){if(!e)return;if(!n&&`describedByElements`in e){e.describedByElements=[...t];return}let r=e;r.ariaDescribedByElements=t.length?[...t]:null}function $e(e,t,n=!1){if(e){if(!n&&`invalid`in e){e.invalid=t;return}t?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`)}}function et(e){class t extends e{constructor(...e){super(...e),this.describedByElements=[],this.addController({hostUpdated:()=>{let e=this.describedTarget(),t=e===this;Qe(e,this.describedByElements,t);let n=this.invalid;n!==void 0&&$e(e,n,t)}})}describedTarget(){return this.shadowRoot?.querySelector(`input, textarea, select`)??null}}return Ze([c({attribute:!1})],t.prototype,`describedByElements`,void 0),t}var S=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},C=class extends et(re(o,Xe)){constructor(){super(...arguments),this._internals=this.attachInternals(),this.appearance=`neutral-tinted`,this.size=`md`,this.horizontalAlignment=``,this.width=``,this.maxWidth=``,this.noTab=!1,this.expandable=!1,this.expanded=!1,this.type=`button`,this.popovertarget=void 0,this.popoverTargetElement=null,this.popoverTargetAction=`toggle`,this.loading=!1,this.loadingText=``,this.disabled=!1,this.text=``,this.supportingText=``,this.singleLine=!1,this.noHighlightBorder=!1,this.startIcon=``,this.endIcon=``,this.accessibleLabel=``,this.href=void 0,this.target=void 0,this.rel=void 0,this._warnedA11y=!1,this._warnedFormId=null,this._popup=new de(this)}updated(e){if(e.has(`maxWidth`)){let e=!!this.maxWidth&&CSS.supports(`max-width`,this.maxWidth);this.style.maxWidth=e?this.maxWidth:``}if(e.has(`width`)){let e=this.width,t=e===`full`,n=!!e&&!t&&CSS.supports(`width`,e);this.style.width=n?e:``,t||n?this.style.setProperty(`--_width`,`100%`):this.style.removeProperty(`--_width`)}(this.text||this.accessibleLabel)&&(this._warnedA11y=!1)}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}if(this._popup.handleClick(e)){e.preventDefault();return}if(this.href)return;let t=this._ownerForm();this.type===`submit`?t?.requestSubmit():this.type===`reset`&&t?.reset()}_ownerForm(){let e=this.getAttribute(`form`);if(!e)return this._internals.form;let t=this.getRootNode(),n=`getElementById`in t?t.getElementById(e):null;if(n instanceof HTMLFormElement)return n;let r=n?.form;return r instanceof HTMLFormElement?r:null}focus(e){this.shadowRoot?.querySelector(`.button`)?.focus(e)}describedTarget(){return this.shadowRoot?.querySelector(`button, a`)??null}render(){return Ye.call(this,{handleClick:this._handleClick.bind(this)})}};C.styles=qe,C.formAssociated=!0,S([c({reflect:!0,converter:p(`neutral-tinted`)})],C.prototype,`appearance`,void 0),S([c({reflect:!0,converter:p(`md`)})],C.prototype,`size`,void 0),S([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(``)})],C.prototype,`horizontalAlignment`,void 0),S([c({reflect:!0,converter:p(``)})],C.prototype,`width`,void 0),S([c({reflect:!0,attribute:`max-width`,converter:p(``)})],C.prototype,`maxWidth`,void 0),S([c({type:Boolean,reflect:!0,attribute:`no-tab`})],C.prototype,`noTab`,void 0),S([c({type:Boolean,reflect:!0,attribute:`expandable`})],C.prototype,`expandable`,void 0),S([c({type:Boolean,reflect:!0})],C.prototype,`expanded`,void 0),S([c({type:String,reflect:!0,attribute:`popup-type`})],C.prototype,`popupType`,void 0),S([c({type:String,reflect:!0})],C.prototype,`type`,void 0),S([c({type:String})],C.prototype,`popovertarget`,void 0),S([c({attribute:!1})],C.prototype,`popoverTargetElement`,void 0),S([c({attribute:!1})],C.prototype,`popoverTargetAction`,void 0),S([c({type:Boolean,reflect:!0})],C.prototype,`loading`,void 0),S([c({attribute:`loading-text`})],C.prototype,`loadingText`,void 0),S([c({type:Boolean,reflect:!0})],C.prototype,`disabled`,void 0),S([c({reflect:!0,converter:p(``)})],C.prototype,`text`,void 0),S([c({reflect:!0,attribute:`supporting-text`,converter:p(``)})],C.prototype,`supportingText`,void 0),S([c({type:Boolean,reflect:!0,attribute:`single-line`})],C.prototype,`singleLine`,void 0),S([c({type:Boolean,reflect:!0,attribute:`no-highlight-border`})],C.prototype,`noHighlightBorder`,void 0),S([c({type:String,attribute:`start-icon`})],C.prototype,`startIcon`,void 0),S([c({type:String,attribute:`end-icon`})],C.prototype,`endIcon`,void 0),S([c({type:String,attribute:`accessible-label`})],C.prototype,`accessibleLabel`,void 0),S([c({type:String,reflect:!0})],C.prototype,`href`,void 0),S([c({type:String})],C.prototype,`target`,void 0),S([c({type:String})],C.prototype,`rel`,void 0),C=S([u(`nldd-button`)],C);var tt=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_background-color: var(--components-card-background-color);
		--_border-color: var(--components-card-highlight-border-color);
		--_is-hovered-background-color: var(--components-card-is-hovered-background-color);
		--_is-hovered-border-color: var(--components-card-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--components-card-is-active-background-color);
		--_is-active-border-color: var(--components-card-is-active-highlight-border-color);

		display: flex;
		/* Anchor for the focus ring, which hangs outside the card box. */
		position: relative;
		width: 100%;
		flex-direction: column;
	}

	:host([hidden]) {
		display: none;
	}


	/* ## Background variants */

	:host([background="tinted"]) {
		--_background-color: var(--components-card-tinted-background-color);
		--_border-color: var(--components-card-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--components-card-tinted-is-hovered-background-color);
		--_is-hovered-border-color: var(--components-card-tinted-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--components-card-tinted-is-active-background-color);
		--_is-active-border-color: var(--components-card-tinted-is-active-highlight-border-color);
	}


	/* # Block */

	.card {
		display: flex;
		position: relative;
		border-radius: var(--components-card-corner-radius);
		box-shadow: var(--components-card-box-shadow);
		background-color: var(--_background-color);
		overflow: hidden;
		flex-direction: column;
		flex-grow: 1;
		isolation: isolate;
		transition: background-color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default);
	}

	@media (hover: hover) {
		.card:has(> .card__action:hover) {
			--_border-color: var(--_is-hovered-border-color);
			background-color: var(--_is-hovered-background-color);
		}
	}

	.card:has(> .card__action:active) {
		--_border-color: var(--_is-active-border-color);
		background-color: var(--_is-active-background-color);
	}

	.card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 var(--components-card-highlight-border-width) var(--_border-color);
		pointer-events: none;
	}


	/* # Link / button overlay */

	.card__action {
		position: absolute;
		inset: 0;
		z-index: 0;
		border-radius: inherit;
	}

	a.card__action {
		cursor: var(--semantics-controls-link-cursor);
	}

	/* Strip the native button chrome so the overlay stays invisible; the focus
	   ring is drawn on the card below, same as for the anchor. */
	button.card__action {
		margin: 0;
		outline: none;
		border: none;
		background: none;
		padding: 0;
		appearance: none;
	}

	/* Shown from JS (a class on the host) instead of with
	   :has(.card__action:focus-visible): Safari does not re-evaluate a dynamic
	   pseudo-class inside :has(), so the ring stayed away there while Chromium
	   drew it.

	   The ring is a sibling of the card, not something drawn on it. Two reasons:
	   the card clips its descendants (overflow: hidden keeps images and fills
	   inside the rounded corners), so a ring drawn within would be cut off at the
	   edge; and the card's own box-shadow is a token that may be "none", which
	   cannot be combined with a second shadow in one declaration — the whole
	   declaration would be dropped and the ring's halo with it. */
	.card__focus-ring {
		display: none;
		position: absolute;
		inset: 0;
		border-radius: var(--components-card-corner-radius);
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
		pointer-events: none;
	}

	:host(.is-action-focused) .card__focus-ring {
		display: block;
	}


	/* # Elements */

	.card__header {
		flex-shrink: 0;
	}

	.card__header[hidden] {
		display: none;
	}

	.card__main {
		display: flex;
		min-height: 0;
		flex-direction: column;
		flex-grow: 1;
	}

	.card__footer {
		flex-shrink: 0;
	}

	.card__footer[hidden] {
		display: none;
	}
`;function nt(e){let t=e.href&&e.target===`_blank`?e._t(`components.card.opens-in-new-tab-label`):``,i=[e.accessibleLabel,t].filter(Boolean).join(`, `)||n,a=!!e.href||e.button;return r`
		<article class="card"
			aria-label=${a?n:e.accessibleLabel??n}
		>
			${e.href?r`
				<a class="card__action"
					href=${e.href}
					target=${e.target||n}
					rel=${ie(e.rel,e.target)||n}
					aria-label=${i}
				></a>
			`:e.button?r`
				<button class="card__action"
					type="button"
					aria-label=${i}
				></button>
			`:n}
			<header class="card__header"
				hidden
			>
				<slot
					name="header"
					@slotchange=${e._onSlotChange}
				></slot>
			</header>
			<div class="card__main">
				<slot></slot>
			</div>
			<footer class="card__footer"
				hidden
			>
				<slot
					name="footer"
					@slotchange=${e._onSlotChange}
				></slot>
			</footer>
		</article>
		<span class="card__focus-ring"></span>
	`}var rt={"components.card.opens-in-new-tab-label":`Opent in nieuw tabblad`},it=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},at=class extends re(o,rt){constructor(){super(...arguments),this.background=`base`,this.href=``,this.target=``,this.rel=``,this.button=!1,this._warnedLabel=!1,this._actionFocused=!1,this._onFocusIn=e=>{let t=e.composedPath()[0];this._actionFocused=!!t?.matches?.(`.card__action:focus-visible`)},this._onFocusOut=()=>{this._actionFocused=!1},this._onSlotChange=e=>{let t=e.target,n=t.parentElement;n.hidden=t.assignedElements().length===0}}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this._onFocusIn),this.addEventListener(`focusout`,this._onFocusOut),this.style.containerType=`inline-size`,this.style.containerName=`layout-container`}updated(){this.classList.toggle(`is-action-focused`,this._actionFocused)}disconnectedCallback(){this.removeEventListener(`focusin`,this._onFocusIn),this.removeEventListener(`focusout`,this._onFocusOut),super.disconnectedCallback()}render(){return nt(this)}};at.styles=tt,it([c({reflect:!0,converter:p(`base`)})],at.prototype,`background`,void 0),it([c({type:String,attribute:`accessible-label`})],at.prototype,`accessibleLabel`,void 0),it([c({type:String,reflect:!0})],at.prototype,`href`,void 0),it([c({type:String})],at.prototype,`target`,void 0),it([c({type:String})],at.prototype,`rel`,void 0),it([c({type:Boolean,reflect:!0})],at.prototype,`button`,void 0),it([d()],at.prototype,`_actionFocused`,void 0),at=it([u(`nldd-card`)],at);var ot=[],st=[];(()=>{let e=`lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5`.split(`,`).map(e=>e?parseInt(e,36):1);for(let t=0,n=0;t<e.length;t++)(t%2?st:ot).push(n+=e[t])})();function ct(e){if(e<768)return!1;for(let t=0,n=ot.length;;){let r=t+n>>1;if(e<ot[r])n=r;else if(e>=st[r])t=r+1;else return!0;if(t==n)return!1}}function lt(e){return e>=127462&&e<=127487}var ut=8205;function dt(e,t,n=!0,r=!0){return(n?ft:pt)(e,t,r)}function ft(e,t,n){if(t==e.length)return t;t&&ht(e.charCodeAt(t))&&gt(e.charCodeAt(t-1))&&t--;let r=mt(e,t);for(t+=_t(r);t<e.length;){let i=mt(e,t);if(r==ut||i==ut||n&&ct(i))t+=_t(i),r=i;else if(lt(i)){let n=0,r=t-2;for(;r>=0&&lt(mt(e,r));)n++,r-=2;if(n%2==0)break;t+=2}else break}return t}function pt(e,t,n){for(;t>1;){let r=ft(e,t-2,n);if(r<t)return r;t--}return 0}function mt(e,t){let n=e.charCodeAt(t);if(!gt(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return ht(r)?(n-55296<<10)+(r-56320)+65536:n}function ht(e){return e>=56320&&e<57344}function gt(e){return e>=55296&&e<56320}function _t(e){return e<65536?1:2}var w=class e{lineAt(e){if(e<0||e>this.length)throw RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=Dt(this,e,t);let r=[];return this.decompose(0,e,r,2),n.length&&n.decompose(0,n.length,r,3),this.decompose(t,this.length,r,1),yt.from(r,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=Dt(this,e,t);let n=[];return this.decompose(e,t,n,0),yt.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),r=new Ct(this),i=new Ct(e);for(let e=t,a=t;;){if(r.next(e),i.next(e),e=0,r.lineBreak!=i.lineBreak||r.done!=i.done||r.value!=i.value)return!1;if(a+=r.value.length,r.done||a>=n)return!0}}iter(e=1){return new Ct(this,e)}iterRange(e,t=this.length){return new wt(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t??=this.lines+1;let r=this.line(e).from;n=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new Tt(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(t){if(t.length==0)throw RangeError(`A document must have at least one line`);return t.length==1&&!t[0]?e.empty:t.length<=32?new vt(t):yt.from(vt.split(t,[]))}},vt=class e extends w{constructor(e,t=bt(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.text[i],o=r+a.length;if((t?n:o)>=e)return new Et(r,o,n,a);r=o+1,n++}}decompose(t,n,r,i){let a=t<=0&&n>=this.length?this:new e(St(this.text,t,n),Math.min(n,this.length)-Math.max(0,t));if(i&1){let t=r.pop(),n=xt(a.text,t.text.slice(),0,a.length);if(n.length<=32)r.push(new e(n,t.length+a.length));else{let t=n.length>>1;r.push(new e(n.slice(0,t)),new e(n.slice(t)))}}else r.push(a)}replace(t,n,r){if(!(r instanceof e))return super.replace(t,n,r);[t,n]=Dt(this,t,n);let i=xt(this.text,xt(r.text,St(this.text,0,t)),n),a=this.length+r.length-(n-t);return i.length<=32?new e(i,a):yt.from(e.split(i,[]),a)}sliceString(e,t=this.length,n=`
`){[e,t]=Dt(this,e,t);let r=``;for(let i=0,a=0;i<=t&&a<this.text.length;a++){let o=this.text[a],s=i+o.length;i>e&&a&&(r+=n),e<s&&t>i&&(r+=o.slice(Math.max(0,e-i),t-i)),i=s+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(t,n){let r=[],i=-1;for(let a of t)r.push(a),i+=a.length+1,r.length==32&&(n.push(new e(r,i)),r=[],i=-1);return i>-1&&n.push(new e(r,i)),n}},yt=class e extends w{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.children[i],o=r+a.length,s=n+a.lines-1;if((t?s:o)>=e)return a.lineInner(e,t,n,r);r=o+1,n=s+1}}decompose(e,t,n,r){for(let i=0,a=0;a<=t&&i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(e<=s&&t>=a){let i=r&(a<=e|(s>=t?2:0));a>=e&&s<=t&&!i?n.push(o):o.decompose(e-a,t-a,n,i)}a=s+1}}replace(t,n,r){if([t,n]=Dt(this,t,n),r.lines<this.lines)for(let i=0,a=0;i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(t>=a&&n<=s){let c=o.replace(t-a,n-a,r),l=this.lines-o.lines+c.lines;if(c.lines<l>>4&&c.lines>l>>6){let a=this.children.slice();return a[i]=c,new e(a,this.length-(n-t)+r.length)}return super.replace(a,s,c)}a=s+1}return super.replace(t,n,r)}sliceString(e,t=this.length,n=`
`){[e,t]=Dt(this,e,t);let r=``;for(let i=0,a=0;i<this.children.length&&a<=t;i++){let o=this.children[i],s=a+o.length;a>e&&i&&(r+=n),e<s&&t>a&&(r+=o.sliceString(e-a,t-a,n)),a=s+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(t,n){if(!(t instanceof e))return 0;let r=0,[i,a,o,s]=n>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1];for(;;i+=n,a+=n){if(i==o||a==s)return r;let e=this.children[i],c=t.children[a];if(e!=c)return r+e.scanIdentical(c,n);r+=e.length+1}}static from(t,n=t.reduce((e,t)=>e+t.length+1,-1)){let r=0;for(let e of t)r+=e.lines;if(r<32){let e=[];for(let n of t)n.flatten(e);return new vt(e,n)}let i=Math.max(32,r>>5),a=i<<1,o=i>>1,s=[],c=0,l=-1,u=[];function d(t){let n;if(t.lines>a&&t instanceof e)for(let e of t.children)d(e);else t.lines>o&&(c>o||!c)?(f(),s.push(t)):t instanceof vt&&c&&(n=u[u.length-1])instanceof vt&&t.lines+n.lines<=32?(c+=t.lines,l+=t.length+1,u[u.length-1]=new vt(n.text.concat(t.text),n.length+1+t.length)):(c+t.lines>i&&f(),c+=t.lines,l+=t.length+1,u.push(t))}function f(){c!=0&&(s.push(u.length==1?u[0]:e.from(u,l)),l=-1,c=u.length=0)}for(let e of t)d(e);return f(),s.length==1?s[0]:new e(s,n)}};w.empty=new vt([``],0);function bt(e){let t=-1;for(let n of e)t+=n.length+1;return t}function xt(e,t,n=0,r=1e9){for(let i=0,a=0,o=!0;a<e.length&&i<=r;a++){let s=e[a],c=i+s.length;c>=n&&(c>r&&(s=s.slice(0,r-i)),i<n&&(s=s.slice(n-i)),o?(t[t.length-1]+=s,o=!1):t.push(s)),i=c+1}return t}function St(e,t,n){return xt(e,[``],t,n)}var Ct=class{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value=``,this.nodes=[e],this.offsets=[t>0?1:(e instanceof vt?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,r=this.nodes[n],i=this.offsets[n],a=i>>1,o=r instanceof vt?r.text.length:r.children.length;if(a==(t>0?o:0)){if(n==0)return this.done=!0,this.value=``,this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((i&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof vt){let i=r.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,i.length>Math.max(0,e))return this.value=e==0?i:t>0?i.slice(e):i.slice(0,i.length-e),this;e-=i.length}else{let i=r.children[a+(t<0?-1:0)];e>i.length?(e-=i.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(i),this.offsets.push(t>0?1:(i instanceof vt?i.text.length:i.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}},wt=class{constructor(e,t,n){this.value=``,this.done=!1,this.cursor=new Ct(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value=``,this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=n?r:t<0?r.slice(r.length-n):r.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=``}},Tt=class{constructor(e){this.inner=e,this.afterBreak=!0,this.value=``,this.done=!1}next(e=0){let{done:t,lineBreak:n,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value=``,this.afterBreak=!1):t?(this.done=!0,this.value=``):n?this.afterBreak?this.value=``:(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}};typeof Symbol<`u`&&(w.prototype[Symbol.iterator]=function(){return this.iter()},Ct.prototype[Symbol.iterator]=wt.prototype[Symbol.iterator]=Tt.prototype[Symbol.iterator]=function(){return this});var Et=class{constructor(e,t,n,r){this.from=e,this.to=t,this.number=n,this.text=r}get length(){return this.to-this.from}};function Dt(e,t,n){return t=Math.max(0,Math.min(e.length,t)),[t,Math.max(t,Math.min(e.length,n))]}function Ot(e,t,n=!0,r=!0){return dt(e,t,n,r)}function kt(e){return e>=56320&&e<57344}function At(e){return e>=55296&&e<56320}function jt(e,t){let n=e.charCodeAt(t);if(!At(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return kt(r)?(n-55296<<10)+(r-56320)+65536:n}function Mt(e){return e<65536?1:2}var Nt=/\r\n?|\n/,Pt=(function(e){return e[e.Simple=0]=`Simple`,e[e.TrackDel=1]=`TrackDel`,e[e.TrackBefore=2]=`TrackBefore`,e[e.TrackAfter=3]=`TrackAfter`,e})(Pt||={}),Ft=class e{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,r=0;t<this.sections.length;){let i=this.sections[t++],a=this.sections[t++];a<0?(e(n,r,i),r+=i):r+=a,n+=i}}iterChangedRanges(e,t=!1){zt(this,e,t)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let n=this.sections[e++],r=this.sections[e++];r<0?t.push(n,r):t.push(r,n)}return new e(t)}composeDesc(e){return this.empty?e:e.empty?this:Vt(this,e)}mapDesc(e,t=!1){return e.empty?this:Bt(this,e,t)}mapPos(e,t=-1,n=Pt.Simple){let r=0,i=0;for(let a=0;a<this.sections.length;){let o=this.sections[a++],s=this.sections[a++],c=r+o;if(s<0){if(c>e)return i+(e-r);i+=o}else{if(n!=Pt.Simple&&c>=e&&(n==Pt.TrackDel&&r<e&&c>e||n==Pt.TrackBefore&&r<e||n==Pt.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!o)return e==r||t<0?i:i+s;i+=s}r=c}if(e>r)throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);return i}touchesRange(e,t=e){for(let n=0,r=0;n<this.sections.length&&r<=t;){let i=this.sections[n++],a=this.sections[n++],o=r+i;if(a>=0&&r<=t&&o>=e)return r<e&&o>t?`cover`:!0;r=o}return!1}toString(){let e=``;for(let t=0;t<this.sections.length;){let n=this.sections[t++],r=this.sections[t++];e+=(e?` `:``)+n+(r>=0?`:`+r:``)}return e}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(e=>typeof e!=`number`))throw RangeError(`Invalid JSON representation of ChangeDesc`);return new e(t)}static create(t){return new e(t)}},It=class e extends Ft{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw RangeError(`Applying change set to a document with the wrong length`);return zt(this,(t,n,r,i,a)=>e=e.replace(r,r+(n-t),a),!1),e}mapDesc(e,t=!1){return Bt(this,e,t,!0)}invert(t){let n=this.sections.slice(),r=[];for(let e=0,i=0;e<n.length;e+=2){let a=n[e],o=n[e+1];if(o>=0){n[e]=o,n[e+1]=a;let s=e>>1;for(;r.length<s;)r.push(w.empty);r.push(a?t.slice(i,i+a):w.empty)}i+=a}return new e(n,r)}compose(e){return this.empty?e:e.empty?this:Vt(this,e,!0)}map(e,t=!1){return e.empty?this:Bt(this,e,t,!0)}iterChanges(e,t=!1){zt(this,e,t)}get desc(){return Ft.create(this.sections)}filter(t){let n=[],r=[],i=[],a=new Ht(this);done:for(let e=0,o=0;;){let s=e==t.length?1e9:t[e++];for(;o<s||o==s&&a.len==0;){if(a.done)break done;let e=Math.min(a.len,s-o);Lt(i,e,-1);let t=a.ins==-1?-1:a.off==0?a.ins:0;Lt(n,e,t),t>0&&Rt(r,n,a.text),a.forward(e),o+=e}let c=t[e++];for(;o<c;){if(a.done)break done;let e=Math.min(a.len,c-o);Lt(n,e,-1),Lt(i,e,a.ins==-1?-1:a.off==0?a.ins:0),a.forward(e),o+=e}}return{changes:new e(n,r),filtered:Ft.create(i)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],r=this.sections[t+1];r<0?e.push(n):r==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(t,n,r){let i=[],a=[],o=0,s=null;function c(t=!1){if(!t&&!i.length)return;o<n&&Lt(i,n-o,-1);let r=new e(i,a);s=s?s.compose(r.map(s)):r,i=[],a=[],o=0}function l(t){if(Array.isArray(t))for(let e of t)l(e);else if(t instanceof e){if(t.length!=n)throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);c(),s=s?s.compose(t.map(s)):t}else{let{from:e,to:s=e,insert:l}=t;if(e>s||e<0||s>n)throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);let u=l?typeof l==`string`?w.of(l.split(r||Nt)):l:w.empty,d=u.length;if(e==s&&d==0)return;e<o&&c(),e>o&&Lt(i,e-o,-1),Lt(i,s-e,d),Rt(a,i,u),o=s}}return l(t),c(!s),s}static empty(t){return new e(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw RangeError(`Invalid JSON representation of ChangeSet`);let n=[],r=[];for(let e=0;e<t.length;e++){let i=t[e];if(typeof i==`number`)n.push(i,-1);else if(!Array.isArray(i)||typeof i[0]!=`number`||i.some((e,t)=>t&&typeof e!=`string`))throw RangeError(`Invalid JSON representation of ChangeSet`);else if(i.length==1)n.push(i[0],0);else{for(;r.length<e;)r.push(w.empty);r[e]=w.of(i.slice(1)),n.push(i[0],r[e].length)}}return new e(n,r)}static createSet(t,n){return new e(t,n)}};function Lt(e,t,n,r=!1){if(t==0&&n<=0)return;let i=e.length-2;i>=0&&n<=0&&n==e[i+1]?e[i]+=t:i>=0&&t==0&&e[i]==0?e[i+1]+=n:r?(e[i]+=t,e[i+1]+=n):e.push(t,n)}function Rt(e,t,n){if(n.length==0)return;let r=t.length-2>>1;if(r<e.length)e[e.length-1]=e[e.length-1].append(n);else{for(;e.length<r;)e.push(w.empty);e.push(n)}}function zt(e,t,n){let r=e.inserted;for(let i=0,a=0,o=0;o<e.sections.length;){let s=e.sections[o++],c=e.sections[o++];if(c<0)i+=s,a+=s;else{let l=i,u=a,d=w.empty;for(;l+=s,u+=c,c&&r&&(d=d.append(r[o-2>>1])),!(n||o==e.sections.length||e.sections[o+1]<0);)s=e.sections[o++],c=e.sections[o++];t(i,l,a,u,d),i=l,a=u}}}function Bt(e,t,n,r=!1){let i=[],a=r?[]:null,o=new Ht(e),s=new Ht(t);for(let e=-1;;)if(o.done&&s.len||s.done&&o.len)throw Error(`Mismatched change set lengths`);else if(o.ins==-1&&s.ins==-1){let e=Math.min(o.len,s.len);Lt(i,e,-1),o.forward(e),s.forward(e)}else if(s.ins>=0&&(o.ins<0||e==o.i||o.off==0&&(s.len<o.len||s.len==o.len&&!n))){let t=s.len;for(Lt(i,s.ins,-1);t;){let n=Math.min(o.len,t);o.ins>=0&&e<o.i&&o.len<=n&&(Lt(i,0,o.ins),a&&Rt(a,i,o.text),e=o.i),o.forward(n),t-=n}s.next()}else if(o.ins>=0){let t=0,n=o.len;for(;n;)if(s.ins==-1){let e=Math.min(n,s.len);t+=e,n-=e,s.forward(e)}else if(s.ins==0&&s.len<n)n-=s.len,s.next();else break;Lt(i,t,e<o.i?o.ins:0),a&&e<o.i&&Rt(a,i,o.text),e=o.i,o.forward(o.len-n)}else if(o.done&&s.done)return a?It.createSet(i,a):Ft.create(i);else throw Error(`Mismatched change set lengths`)}function Vt(e,t,n=!1){let r=[],i=n?[]:null,a=new Ht(e),o=new Ht(t);for(let e=!1;;)if(a.done&&o.done)return i?It.createSet(r,i):Ft.create(r);else if(a.ins==0)Lt(r,a.len,0,e),a.next();else if(o.len==0&&!o.done)Lt(r,0,o.ins,e),i&&Rt(i,r,o.text),o.next();else if(a.done||o.done)throw Error(`Mismatched change set lengths`);else{let t=Math.min(a.len2,o.len),n=r.length;if(a.ins==-1){let n=o.ins==-1?-1:o.off?0:o.ins;Lt(r,t,n,e),i&&n&&Rt(i,r,o.text)}else o.ins==-1?(Lt(r,a.off?0:a.len,t,e),i&&Rt(i,r,a.textBit(t))):(Lt(r,a.off?0:a.len,o.off?0:o.ins,e),i&&!o.off&&Rt(i,r,o.text));e=(a.ins>t||o.ins>=0&&o.len>t)&&(e||r.length>n),a.forward2(t),o.forward(t)}}var Ht=class{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?w.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?w.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}},Ut=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.flags=n,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(t,n=-1){let r,i;return this.empty?r=i=t.mapPos(this.from,n):(r=t.mapPos(this.from,1),i=t.mapPos(this.to,-1)),r==this.from&&i==this.to?this:new e(r,i,this.flags,this.goalColumn)}extend(e,t=e,n=0){if(e<=this.anchor&&t>=this.anchor)return T.range(e,t,void 0,void 0,n);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return T.range(this.anchor,r,void 0,void 0,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!=`number`||typeof e.head!=`number`)throw RangeError(`Invalid JSON representation for SelectionRange`);return T.range(e.anchor,e.head)}static create(t,n,r,i){return new e(t,n,r,i)}},T=class e{constructor(e,t){this.ranges=e,this.mainIndex=t}map(t,n=-1){return t.empty?this:e.create(this.ranges.map(e=>e.map(t,n)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new e([this.main],0)}addRange(t,n=!0){return e.create([t].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(t,n=this.mainIndex){let r=this.ranges.slice();return r[n]=t,e.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||typeof t.main!=`number`||t.main>=t.ranges.length)throw RangeError(`Invalid JSON representation for EditorSelection`);return new e(t.ranges.map(e=>Ut.fromJSON(e)),t.main)}static single(t,n=t){return new e([e.range(t,n)],0)}static create(t,n=0){if(t.length==0)throw RangeError(`A selection needs at least one range`);for(let r=0,i=0;i<t.length;i++){let a=t[i];if(a.empty?a.from<=r:a.from<r)return e.normalized(t.slice(),n);r=a.to}return new e(t,n)}static cursor(e,t=0,n,r){return Ut.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n)),r)}static range(e,t,n,r,i){let a=r==null?7:Math.min(6,r);return!i&&e!=t&&(i=t<e?1:-1),i&&(a|=i<0?8:16),t<e?Ut.create(t,e,a|32,n):Ut.create(e,t,a,n)}static undirectionalRange(e,t){return Ut.create(e,t,64,void 0)}static normalized(t,n=0){let r=t[n];t.sort((e,t)=>e.from-t.from),n=t.indexOf(r);for(let r=1;r<t.length;r++){let i=t[r],a=t[r-1];if(i.empty?i.from<=a.to:i.from<a.to){let o=a.from,s=Math.max(i.to,a.to);r<=n&&n--,t.splice(--r,2,i.anchor>i.head?e.range(s,o):e.range(o,s))}}return new e(t,n)}};function Wt(e,t){for(let n of e.ranges)if(n.to>t)throw RangeError(`Selection points outside of document`)}var Gt=0,E=class e{constructor(e,t,n,r,i){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=r,this.id=Gt++,this.default=e([]),this.extensions=typeof i==`function`?i(this):i}get reader(){return this}static define(t={}){return new e(t.combine||(e=>e),t.compareInput||((e,t)=>e===t),t.compare||(t.combine?(e,t)=>e===t:Kt),!!t.static,t.enables)}of(e){return new qt([],this,0,e)}compute(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new qt(e,this,1,t)}computeN(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new qt(e,this,2,t)}from(e,t){return t||=e=>e,this.compute([e],n=>t(n.field(e)))}};function Kt(e,t){return e==t||e.length==t.length&&e.every((e,n)=>e===t[n])}var qt=class{constructor(e,t,n,r){this.dependencies=e,this.facet=t,this.type=n,this.value=r,this.id=Gt++}dynamicSlot(e){let t=this.value,n=this.facet.compareInput,r=this.id,i=e[r]>>1,a=this.type==2,o=!1,s=!1,c=[];for(let t of this.dependencies)t==`doc`?o=!0:t==`selection`?s=!0:(e[t.id]??1)&1||c.push(e[t.id]);return{create(e){return e.values[i]=t(e),1},update(e,r){if(o&&r.docChanged||s&&(r.docChanged||r.selection)||Yt(e,c)){let r=t(e);if(a?!Jt(r,e.values[i],n):!n(r,e.values[i]))return e.values[i]=r,1}return 0},reconfigure:(e,o)=>{let s,c=o.config.address[r];if(c!=null){let r=ln(o,c);if(this.dependencies.every(t=>t instanceof E?o.facet(t)===e.facet(t):t instanceof Qt?o.field(t,!1)==e.field(t,!1):!0)||(a?Jt(s=t(e),r,n):n(s=t(e),r)))return e.values[i]=r,0}else s=t(e);return e.values[i]=s,1}}}get extension(){return this}};function Jt(e,t,n){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Yt(e,t){let n=!1;for(let r of t)cn(e,r)&1&&(n=!0);return n}function Xt(e,t,n){let r=n.map(t=>e[t.id]),i=n.map(e=>e.type),a=r.filter(e=>!(e&1)),o=e[t.id]>>1;function s(e){let n=[];for(let t=0;t<r.length;t++){let a=ln(e,r[t]);if(i[t]==2)for(let e of a)n.push(e);else n.push(a)}return t.combine(n)}return{create(e){for(let t of r)cn(e,t);return e.values[o]=s(e),1},update(e,n){if(!Yt(e,a))return 0;let r=s(e);return t.compare(r,e.values[o])?0:(e.values[o]=r,1)},reconfigure(e,i){let a=Yt(e,r),c=i.config.facets[t.id],l=i.facet(t);if(c&&!a&&Kt(n,c))return e.values[o]=l,0;let u=s(e);return t.compare(u,l)?(e.values[o]=l,0):(e.values[o]=u,1)}}}var Zt=E.define({static:!0}),Qt=class e{constructor(e,t,n,r,i){this.id=e,this.createF=t,this.updateF=n,this.compareF=r,this.spec=i,this.provides=void 0}static define(t){let n=new e(Gt++,t.create,t.update,t.compare||((e,t)=>e===t),t);return t.provide&&(n.provides=t.provide(n)),n}create(e){return(e.facet(Zt).find(e=>e.field==this)?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,n)=>{let r=e.values[t],i=this.updateF(r,n);return this.compareF(r,i)?0:(e.values[t]=i,1)},reconfigure:(e,n)=>{let r=e.facet(Zt),i=n.facet(Zt),a;return(a=r.find(e=>e.field==this))&&a!=i.find(e=>e.field==this)?(e.values[t]=a.create(e),1):n.config.address[this.id]==null?(e.values[t]=this.create(e),1):(e.values[t]=n.field(this),0)}}}init(e){return[this,Zt.of({field:this,create:e})]}get extension(){return this}},$t={lowest:4,low:3,default:2,high:1,highest:0};function en(e){return t=>new nn(t,e)}var tn={highest:en($t.highest),high:en($t.high),default:en($t.default),low:en($t.low),lowest:en($t.lowest)},nn=class{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}},rn=class e{of(e){return new an(this,e)}reconfigure(t){return e.reconfigure.of({compartment:this,extension:t})}get(e){return e.config.compartments.get(this)}},an=class{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}},on=class e{constructor(e,t,n,r,i,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=r,this.staticValues=i,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(t,n,r){let i=[],a=Object.create(null),o=new Map;for(let e of sn(t,n,o))e instanceof Qt?i.push(e):(a[e.facet.id]||(a[e.facet.id]=[])).push(e);let s=Object.create(null),c=[],l=[];for(let e of i)s[e.id]=l.length<<1,l.push(t=>e.slot(t));let u=r?.config.facets;for(let e in a){let t=a[e],n=t[0].facet,i=u&&u[e]||[];if(t.every(e=>e.type==0)){if(s[n.id]=c.length<<1|1,Kt(i,t))c.push(r.facet(n));else{let e=n.combine(t.map(e=>e.value));c.push(r&&n.compare(e,r.facet(n))?r.facet(n):e)}}else{for(let e of t)e.type==0?(s[e.id]=c.length<<1|1,c.push(e.value)):(s[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));s[n.id]=l.length<<1,l.push(e=>Xt(e,n,t))}}let d=l.map(e=>e(s));return new e(t,o,d,s,c,a)}};function sn(e,t,n){let r=[[],[],[],[],[]],i=new Map;function a(e,o){let s=i.get(e);if(s!=null){if(s<=o)return;let t=r[s].indexOf(e);t>-1&&r[s].splice(t,1),e instanceof an&&n.delete(e.compartment)}if(i.set(e,o),Array.isArray(e))for(let t of e)a(t,o);else if(e instanceof an){if(n.has(e.compartment))throw RangeError(`Duplicate use of compartment in extensions`);let r=t.get(e.compartment)||e.inner;n.set(e.compartment,r),a(r,o)}else if(e instanceof nn)a(e.inner,e.prec);else if(e instanceof Qt)r[o].push(e),e.provides&&a(e.provides,o);else if(e instanceof qt)r[o].push(e),e.facet.extensions&&a(e.facet.extensions,$t.default);else{let t=e.extension;if(!t)throw Error(`Unrecognized extension value in extension set (${e}).`);if(t==e)throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);a(t,o)}}return a(e,$t.default),r.reduce((e,t)=>e.concat(t))}function cn(e,t){if(t&1)return 2;let n=t>>1,r=e.status[n];if(r==4)throw Error(`Cyclic dependency between fields and/or facets`);if(r&2)return r;e.status[n]=4;let i=e.computeSlot(e,e.config.dynamicSlots[n]);return e.status[n]=2|i}function ln(e,t){return t&1?e.config.staticValues[t>>1]:e.values[t>>1]}var un=E.define(),dn=E.define({combine:e=>e.some(e=>e),static:!0}),fn=E.define({combine:e=>e.length?e[0]:void 0,static:!0}),pn=E.define(),mn=E.define(),hn=E.define(),gn=E.define({combine:e=>e.length?e[0]:!1}),_n=class{constructor(e,t){this.type=e,this.value=t}static define(){return new vn}},vn=class{of(e){return new _n(this,e)}},yn=class{constructor(e){this.map=e}of(e){return new D(this,e)}},D=class e{constructor(e,t){this.type=e,this.value=t}map(t){let n=this.type.map(this.value,t);return n===void 0?void 0:n==this.value?this:new e(this.type,n)}is(e){return this.type==e}static define(e={}){return new yn(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let r of e){let e=r.map(t);e&&n.push(e)}return n}};D.reconfigure=D.define(),D.appendConfig=D.define();var bn=class e{constructor(t,n,r,i,a,o){this.startState=t,this.changes=n,this.selection=r,this.effects=i,this.annotations=a,this.scrollIntoView=o,this._doc=null,this._state=null,r&&Wt(r,n.newLength),a.some(t=>t.type==e.time)||(this.annotations=a.concat(e.time.of(Date.now())))}static create(t,n,r,i,a,o){return new e(t,n,r,i,a,o)}get newDoc(){return this._doc||=this.changes.apply(this.startState.doc)}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let n=this.annotation(e.userEvent);return!!(n&&(n==t||n.length>t.length&&n.slice(0,t.length)==t&&n[t.length]==`.`))}};bn.time=_n.define(),bn.userEvent=_n.define(),bn.addToHistory=_n.define(),bn.remote=_n.define();function xn(e,t){let n=[];for(let r=0,i=0;;){let a,o;if(r<e.length&&(i==t.length||t[i]>=e[r]))a=e[r++],o=e[r++];else if(i<t.length)a=t[i++],o=t[i++];else return n;!n.length||n[n.length-1]<a?n.push(a,o):n[n.length-1]<o&&(n[n.length-1]=o)}}function Sn(e,t,n){let r,i,a;return n?(r=t.changes,i=It.empty(t.changes.length),a=e.changes.compose(t.changes)):(r=t.changes.map(e.changes),i=e.changes.mapDesc(t.changes,!0),a=e.changes.compose(r)),{changes:a,selection:t.selection?t.selection.map(i):e.selection?.map(r),effects:D.mapEffects(e.effects,r).concat(D.mapEffects(t.effects,i)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function Cn(e,t,n){let r=t.selection,i=On(t.annotations);return t.userEvent&&(i=i.concat(bn.userEvent.of(t.userEvent))),{changes:t.changes instanceof It?t.changes:It.of(t.changes||[],n,e.facet(fn)),selection:r&&(r instanceof T?r:T.single(r.anchor,r.head)),effects:On(t.effects),annotations:i,scrollIntoView:!!t.scrollIntoView}}function wn(e,t,n){let r=Cn(e,t.length?t[0]:{},e.doc.length);t.length&&t[0].filter===!1&&(n=!1);for(let i=1;i<t.length;i++){t[i].filter===!1&&(n=!1);let a=!!t[i].sequential;r=Sn(r,Cn(e,t[i],a?r.changes.newLength:e.doc.length),a)}let i=bn.create(e,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return En(n?Tn(i):i)}function Tn(e){let t=e.startState,n=!0;for(let r of t.facet(pn)){let t=r(e);if(t===!1){n=!1;break}Array.isArray(t)&&(n=n===!0?t:xn(n,t))}if(n!==!0){let r,i;if(n===!1)i=e.changes.invertedDesc,r=It.empty(t.doc.length);else{let t=e.changes.filter(n);r=t.changes,i=t.filtered.mapDesc(t.changes).invertedDesc}e=bn.create(t,r,e.selection&&e.selection.map(i),D.mapEffects(e.effects,i),e.annotations,e.scrollIntoView)}let r=t.facet(mn);for(let n=r.length-1;n>=0;n--){let i=r[n](e);e=i instanceof bn?i:Array.isArray(i)&&i.length==1&&i[0]instanceof bn?i[0]:wn(t,On(i),!1)}return e}function En(e){let t=e.startState,n=t.facet(hn),r=e;for(let i=n.length-1;i>=0;i--){let a=n[i](e);a&&Object.keys(a).length&&(r=Sn(r,Cn(t,a,e.changes.newLength),!0))}return r==e?e:bn.create(t,e.changes,e.selection,r.effects,r.annotations,r.scrollIntoView)}var Dn=[];function On(e){return e==null?Dn:Array.isArray(e)?e:[e]}var kn=(function(e){return e[e.Word=0]=`Word`,e[e.Space=1]=`Space`,e[e.Other=2]=`Other`,e})(kn||={}),An=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,jn;try{jn=RegExp(`[\\p{Alphabetic}\\p{Number}_]`,`u`)}catch{}function Mn(e){if(jn)return jn.test(e);for(let t=0;t<e.length;t++){let n=e[t];if(/\w/.test(n)||n>``&&(n.toUpperCase()!=n.toLowerCase()||An.test(n)))return!0}return!1}function Nn(e){return t=>{if(!/\S/.test(t))return kn.Space;if(Mn(t))return kn.Word;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return kn.Word;return kn.Other}}var O=class e{constructor(e,t,n,r,i,a){this.config=e,this.doc=t,this.selection=n,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=i,a&&(a._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)cn(this,e<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw RangeError(`Field is not present in this state`);return}return cn(this,n),ln(this,n)}update(...e){return wn(this,e,!0)}applyTransaction(t){let n=this.config,{base:r,compartments:i}=n;for(let e of t.effects)e.is(rn.reconfigure)?(n&&=(i=new Map,n.compartments.forEach((e,t)=>i.set(t,e)),null),i.set(e.value.compartment,e.value.extension)):e.is(D.reconfigure)?(n=null,r=e.value):e.is(D.appendConfig)&&(n=null,r=On(r).concat(e.value));let a;n?a=t.startState.values.slice():(n=on.resolve(r,i,this),a=new e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values);let o=t.startState.facet(dn)?t.newSelection:t.newSelection.asSingle();new e(n,t.newDoc,o,a,(e,n)=>n.update(e,t),t)}replaceSelection(e){return typeof e==`string`&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:T.cursor(t.from+e.length,-1)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),r=this.changes(n.changes),i=[n.range],a=On(n.effects);for(let n=1;n<t.ranges.length;n++){let o=e(t.ranges[n]),s=this.changes(o.changes),c=s.map(r);for(let e=0;e<n;e++)i[e]=i[e].map(c);let l=r.mapDesc(s,!0);i.push(o.range.map(l)),r=r.compose(c),a=D.mapEffects(a,c).concat(D.mapEffects(On(o.effects),l))}return{changes:r,selection:T.create(i,t.mainIndex),effects:a}}changes(t=[]){return t instanceof It?t:It.of(t,this.doc.length,this.facet(e.lineSeparator))}toText(t){return w.of(t.split(this.facet(e.lineSeparator)||Nt))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(cn(this,t),ln(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let r=e[n];r instanceof Qt&&this.config.address[r.id]!=null&&(t[n]=r.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(t,n={},r){if(!t||typeof t.doc!=`string`)throw RangeError(`Invalid JSON representation for EditorState`);let i=[];if(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(t,e)){let n=r[e],a=t[e];i.push(n.init(e=>n.spec.fromJSON(a,e)))}}return e.create({doc:t.doc,selection:T.fromJSON(t.selection),extensions:n.extensions?i.concat([n.extensions]):i})}static create(t={}){let n=on.resolve(t.extensions||[],new Map),r=t.doc instanceof w?t.doc:w.of((t.doc||``).split(n.staticFacet(e.lineSeparator)||Nt)),i=t.selection?t.selection instanceof T?t.selection:T.single(t.selection.anchor,t.selection.head):T.single(0);return Wt(i,r.length),n.staticFacet(dn)||(i=i.asSingle()),new e(n,r,i,n.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(e.tabSize)}get lineBreak(){return this.facet(e.lineSeparator)||`
`}get readOnly(){return this.facet(gn)}phrase(t,...n){for(let n of this.facet(e.phrases))if(Object.prototype.hasOwnProperty.call(n,t)){t=n[t];break}return n.length&&(t=t.replace(/\$(\$|\d*)/g,(e,t)=>{if(t==`$`)return`$`;let r=+(t||1);return!r||r>n.length?e:n[r-1]})),t}languageDataAt(e,t,n=-1){let r=[];for(let i of this.facet(un))for(let a of i(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&r.push(a[e]);return r}charCategorizer(e){let t=this.languageDataAt(`wordChars`,e);return Nn(t.length?t[0]:``)}wordAt(e){let{text:t,from:n,length:r}=this.doc.lineAt(e),i=this.charCategorizer(e),a=e-n,o=e-n;for(;a>0;){let e=Ot(t,a,!1);if(i(t.slice(e,a))!=kn.Word)break;a=e}for(;o<r;){let e=Ot(t,o);if(i(t.slice(o,e))!=kn.Word)break;o=e}return a==o?null:T.range(a+n,o+n)}};O.allowMultipleSelections=dn,O.tabSize=E.define({combine:e=>e.length?e[0]:4}),O.lineSeparator=fn,O.readOnly=gn,O.phrases=E.define({compare(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length==r.length&&n.every(n=>e[n]==t[n])}}),O.languageData=un,O.changeFilter=pn,O.transactionFilter=mn,O.transactionExtender=hn,rn.reconfigure=D.define();var Pn=class{eq(e){return this==e}range(e,t=e){return In.create(e,t,this)}};Pn.prototype.startSide=Pn.prototype.endSide=0,Pn.prototype.point=!1,Pn.prototype.mapMode=Pt.TrackDel;function Fn(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}var In=class e{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(t,n,r){return new e(t,n,r)}};function Ln(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}var Rn=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.value=n,this.maxPoint=r}get length(){return zn(this.to)}findIndex(e,t,n,r=0){let i=n?this.to:this.from;for(let a=r,o=i.length;;){if(a==o)return a;let r=a+o>>1,s=i[r]-e||(n?this.value[r].endSide:this.value[r].startSide)-t;if(r==a)return s>=0?a:o;s>=0?o=r:a=r+1}}between(e,t,n,r){for(let i=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,i);i<a;i++)if(r(this.from[i]+e,this.to[i]+e,this.value[i])===!1)return!1}map(t,n,r,i,a){let o=[],s=[],c=[],l=-1,u=-1;iter:for(let e=0;e<this.value.length;e++){let d=this.value[e],f=this.from[e]+t,p=this.to[e]+t,m,h;if(f==p){let e=n.mapPos(f,d.startSide,d.mapMode);if(e==null||(m=h=e,d.startSide!=d.endSide&&(h=n.mapPos(f,d.endSide),h<m)))continue}else if(m=n.mapPos(f,d.startSide),h=n.mapPos(p,d.endSide),m>h||m==h&&d.startSide>0&&d.endSide<=0)continue;if(!((h-m||d.endSide-d.startSide)<0)){if(l<0&&(l=m),d.point&&(u=Math.max(u,h-m)),(m-r||d.startSide-i)>=0)o.push(d),s.push(m-l),c.push(h-l),r=h,i=d.endSide;else{if(m==h)for(let e=o.length;e>0;e--){if((m-(c[e-1]+l)||d.startSide-o[e-1].endSide)>=0){o.splice(e,0,d),s.splice(e,0,m-l),c.splice(e,0,h-l);continue iter}if((m-(s[e-1]+l)||d.endSide-o[e-1].startSide)>0)break}a(m,h,d)}}}return{mapped:o.length?new e(s,c,o,u):null,pos:l}}},k=class e{constructor(e,t,n,r){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=r}static create(t,n,r,i){return new e(t,n,r,i)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(t){let{add:n=[],sort:r=!1,filterFrom:i=0,filterTo:a=this.length}=t,o=t.filter;if(n.length==0&&!o)return this;if(r&&(n=n.slice().sort(Ln)),this.isEmpty)return n.length?e.of(n):this;let s=new Un(this,null,-1).goto(0),c=0,l=[],u=new Vn;for(;s.value||c<n.length;)if(c<n.length&&(s.from-n[c].from||s.startSide-n[c].value.startSide)>=0){let e=n[c++];u.addInner(e.from,e.to,e.value,!1)||l.push(e)}else s.rangeIndex==1&&s.chunkIndex<this.chunk.length&&(c==n.length||this.chunkEnd(s.chunkIndex)<n[c].from)&&(!o||i>this.chunkEnd(s.chunkIndex)||a<this.chunkPos[s.chunkIndex])&&u.addChunk(this.chunkPos[s.chunkIndex],this.chunk[s.chunkIndex])?s.nextChunk():((!o||i>s.to||a<s.from||o(s.from,s.to,s.value))&&(u.addInner(s.from,s.to,s.value,!1)||l.push(In.create(s.from,s.to,s.value))),s.next());return u.finishInner(this.nextLayer.isEmpty&&!l.length?e.empty:this.nextLayer.update({add:l,filter:o,filterFrom:i,filterTo:a}))}map(t){if(t.empty||this.isEmpty)return this;let n=[],r=[],i=-1,a,o=(e,t,n)=>{a||=new Vn,a.addRange(e,t,n,!1)};for(let e=0;e<this.chunk.length;e++){let a=this.chunkPos[e],s=this.chunk[e],c=t.touchesRange(a,a+s.length);if(c===!1)i=Math.max(i,s.maxPoint),n.push(s),r.push(t.mapPos(a));else if(c===!0){let[e,c]=n.length?[zn(r)+zn(n).length,zn(zn(n).value).endSide]:[-1,-1],{mapped:l,pos:u}=s.map(a,t,e,c,o);l&&(i=Math.max(i,l.maxPoint),n.push(l),r.push(u))}}let s=this.nextLayer.map(t);return a&&(s=a.finishInner(s)),n.length==0?s:new e(r,n,s||e.empty,i)}between(e,t,n){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let i=this.chunkPos[r],a=this.chunk[r];if(t>=i&&e<=i+a.length&&a.between(i,e-i,t-i,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return Wn.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Wn.from(e).goto(t)}static compare(e,t,n,r,i=-1){let a=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),o=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),s=Hn(a,o,n),c=new Kn(a,s,i),l=new Kn(o,s,i);n.iterGaps((e,t,n)=>qn(c,e,l,t,n,r)),n.empty&&n.length==0&&qn(c,0,l,0,0,r)}static eq(e,t,n=0,r){r??=1e9-1;let i=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),a=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(i.length!=a.length)return!1;if(!i.length)return!0;let o=Hn(i,a),s=new Kn(i,o,0).goto(n),c=new Kn(a,o,0).goto(n);for(;;){if(s.to!=c.to||!Jn(s.active,c.active)||s.point&&(!c.point||!Fn(s.point,c.point)))return!1;if(s.to>r)return!0;s.next(),c.next()}}static spans(e,t,n,r,i=-1){let a=new Kn(e,null,i).goto(t),o=t,s=a.openStart;for(;;){let e=Math.min(a.to,n);if(a.point){let n=a.activeForPoint(a.to),i=a.pointFrom<t?n.length+1:a.point.startSide<0?n.length:Math.min(n.length,s);r.point(o,e,a.point,n,i,a.pointRank),s=Math.min(a.openEnd(e),n.length)}else e>o&&(r.span(o,e,a.active,s),s=a.openEnd(e));if(a.to>n)return s+(a.point&&a.to>n?1:0);o=a.to,a.next()}}static of(e,t=!1){let n=new Vn;for(let r of e instanceof In?[e]:t?Bn(e):e)n.add(r.from,r.to,r.value);return n.finish()}static join(t){if(!t.length)return e.empty;let n=zn(t);for(let r=t.length-2;r>=0;r--)for(let i=t[r];i!=e.empty;i=i.nextLayer)n=new e(i.chunkPos,i.chunk,n,Math.max(i.maxPoint,n.maxPoint));return n}};k.empty=new k([],[],null,-1);function zn(e){return e[e.length-1]}function Bn(e){if(e.length>1)for(let t=e[0],n=1;n<e.length;n++){let r=e[n];if(Ln(t,r)>0)return e.slice().sort(Ln);t=r}return e}k.empty.nextLayer=k.empty;var Vn=class e{finishChunk(e){this.chunks.push(new Rn(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addRange(e,t,n,!0)}addRange(t,n,r,i){this.addInner(t,n,r,i)||(this.nextLayer||=new e).addRange(t,n,r,i)}addInner(e,t,n,r){let i=e-this.lastTo||n.startSide-this.last.endSide;if(r&&i<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw Error("Ranges must be added sorted by `from` position and `startSide`");return i<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(k.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=k.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}};function Hn(e,t,n){let r=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&r.set(t.chunk[e],t.chunkPos[e]);let i=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let a=r.get(e.chunk[t]);a!=null&&(n?n.mapPos(a):a)==e.chunkPos[t]&&!n?.touchesRange(a,a+e.chunk[t].length)&&i.add(e.chunk[t])}return i}var Un=class{constructor(e,t,n,r=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}},Wn=class e{constructor(e){this.heap=e}static from(t,n=null,r=-1){let i=[];for(let e=0;e<t.length;e++)for(let a=t[e];!a.isEmpty;a=a.nextLayer)a.maxPoint>=r&&i.push(new Un(a,n,r,e));return i.length==1?i[0]:new e(i)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)Gn(this.heap,e);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)Gn(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Gn(this.heap,0)}}};function Gn(e,t){for(let n=e[t];;){let r=(t<<1)+1;if(r>=e.length)break;let i=e[r];if(r+1<e.length&&i.compare(e[r+1])>=0&&(i=e[r+1],r++),n.compare(i)<0)break;e[r]=n,e[t]=i,t=r}}var Kn=class{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Wn.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Yn(this.active,e),Yn(this.activeTo,e),Yn(this.activeRank,e),this.minActive=Zn(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:r,rank:i}=this.cursor;for(;t<this.activeRank.length&&(i-this.activeRank[t]||r-this.activeTo[t])>0;)t++;Xn(this.active,t,n),Xn(this.activeTo,t,r),Xn(this.activeRank,t,i),e&&Xn(e,t,this.cursor.from),this.minActive=Zn(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),n&&Yn(n,r)}else if(!this.cursor.value){this.to=this.endSide=1e9;break}else if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let e=this.cursor.value;if(!e.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}}if(n){this.openStart=0;for(let t=n.length-1;t>=0&&n[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}};function qn(e,t,n,r,i,a){e.goto(t),n.goto(r);let o=r+i,s=r,c=r-t,l=!!a.boundChange;for(let t=!1;;){let r=e.to+c-n.to,i=r||e.endSide-n.endSide,u=i<0?e.to+c:n.to,d=Math.min(u,o);if(e.point||n.point?(e.point&&n.point&&Fn(e.point,n.point)&&Jn(e.activeForPoint(e.to),n.activeForPoint(n.to))||a.comparePoint(s,d,e.point,n.point),t=!1):(t&&=(a.boundChange(s),!1),d>s&&!Jn(e.active,n.active)&&a.compareRange(s,d,e.active,n.active),l&&d<o&&(r||e.openEnd(u)!=n.openEnd(u))&&(t=!0)),u>o)break;s=u,i<=0&&e.next(),i>=0&&n.next()}}function Jn(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n]&&!Fn(e[n],t[n]))return!1;return!0}function Yn(e,t){for(let n=t,r=e.length-1;n<r;n++)e[n]=e[n+1];e.pop()}function Xn(e,t,n){for(let n=e.length-1;n>=t;n--)e[n+1]=e[n];e[t]=n}function Zn(e,t){let n=-1,r=1e9;for(let i=0;i<t.length;i++)(t[i]-r||e[i].endSide-e[n].endSide)<0&&(n=i,r=t[i]);return n}function Qn(e,t,n=e.length){let r=0;for(let i=0;i<n&&i<e.length;)e.charCodeAt(i)==9?(r+=t-r%t,i++):(r++,i=Ot(e,i));return r}function $n(e,t,n,r){for(let r=0,i=0;;){if(i>=t)return r;if(r==e.length)break;i+=e.charCodeAt(r)==9?n-i%n:1,r=Ot(e,r)}return r===!0?-1:e.length}for(var er=`ͼ`,tr=typeof Symbol>`u`?`__ͼ`:Symbol.for(er),nr=typeof Symbol>`u`?`__styleSet`+Math.floor(Math.random()*1e8):Symbol(`styleSet`),rr=typeof globalThis<`u`?globalThis:typeof window<`u`?window:{},ir=class{constructor(e,t){this.rules=[];let{finish:n}=t||{};function r(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function i(e,t,a,o){let s=[],c=/^@(\w+)\b/.exec(e[0]),l=c&&c[1]==`keyframes`;if(c&&t==null)return a.push(e[0]+`;`);for(let n in t){let o=t[n];if(/&/.test(n))i(n.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),o,a);else if(o&&typeof o==`object`){if(!c)throw RangeError(`The value of a property (`+n+`) should be a primitive value.`);i(r(n),o,s,l)}else o!=null&&s.push(n.replace(/_.*/,``).replace(/[A-Z]/g,e=>`-`+e.toLowerCase())+`: `+o+`;`)}(s.length||l)&&a.push((n&&!c&&!o?e.map(n):e).join(`, `)+` {`+s.join(` `)+`}`)}for(let t in e)i(r(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=rr[tr]||1;return rr[tr]=e+1,er+e.toString(36)}static mount(e,t,n){let r=e[nr],i=n&&n.nonce;r?i&&r.setNonce(i):r=new or(e,i),r.mount(Array.isArray(t)?t:[t],e)}},ar=new Map,or=class{constructor(e,t){let n=e.ownerDocument||e,r=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let t=ar.get(n);if(t)return e[nr]=t;this.sheet=new r.CSSStyleSheet,ar.set(n,this)}else this.styleTag=n.createElement(`style`),t&&this.styleTag.setAttribute(`nonce`,t);this.modules=[],e[nr]=this}mount(e,t){let n=this.sheet,r=0,i=0,a=!1;for(let t=0;t<e.length;t++){let o=e[t],s=this.modules.indexOf(o);if(s<i&&s>-1&&(this.modules.splice(s,1),a=!0,i--,s=-1),s==-1){if(this.modules.splice(i++,0,o),a=!0,n)for(let e=0;e<o.rules.length;e++)n.insertRule(o.rules[e],r++)}else{for(;i<s;)r+=this.modules[i++].rules.length;r+=o.rules.length,i++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{if(a){let e=``;for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+`
`;this.styleTag.textContent=e}let e=t.head||t;this.styleTag.parentNode!=e&&e.insertBefore(this.styleTag,e.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute(`nonce`)!=e&&this.styleTag.setAttribute(`nonce`,e)}},sr={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},cr={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},lr=typeof navigator<`u`&&/Mac/.test(navigator.platform),ur=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),dr=0;dr<10;dr++)sr[48+dr]=sr[96+dr]=String(dr);for(var dr=1;dr<=24;dr++)sr[dr+111]=`F`+dr;for(var dr=65;dr<=90;dr++)sr[dr]=String.fromCharCode(dr+32),cr[dr]=String.fromCharCode(dr);for(var fr in sr)cr.hasOwnProperty(fr)||(cr[fr]=sr[fr]);function pr(e){var t=!(lr&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||ur&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?cr:sr)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}var mr=typeof navigator<`u`?navigator:{userAgent:``,vendor:``,platform:``},hr=typeof document<`u`?document:{documentElement:{style:{}}},gr=/Edge\/(\d+)/.exec(mr.userAgent),_r=/MSIE \d/.test(mr.userAgent),vr=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(mr.userAgent),yr=!!(_r||vr||gr),br=!yr&&/gecko\/(\d+)/i.test(mr.userAgent),xr=!yr&&/Chrome\/(\d+)/.exec(mr.userAgent),Sr=`webkitFontSmoothing`in hr.documentElement.style,Cr=!yr&&/Apple Computer/.test(mr.vendor),wr=Cr&&(/Mobile\/\w+/.test(mr.userAgent)||mr.maxTouchPoints>2),A={mac:wr||/Mac/.test(mr.platform),windows:/Win/.test(mr.platform),linux:/Linux|X11/.test(mr.platform),ie:yr,ie_version:_r?hr.documentMode||6:vr?+vr[1]:gr?+gr[1]:0,gecko:br,gecko_version:br?+(/Firefox\/(\d+)/.exec(mr.userAgent)||[0,0])[1]:0,chrome:!!xr,chrome_version:xr?+xr[1]:0,ios:wr,android:/Android\b/.test(mr.userAgent),webkit:Sr,webkit_version:Sr?+(/\bAppleWebKit\/(\d+)/.exec(mr.userAgent)||[0,0])[1]:0,safari:Cr,safari_version:Cr?+(/\bVersion\/(\d+(\.\d+)?)/.exec(mr.userAgent)||[0,0])[1]:0,tabSize:hr.documentElement.style.tabSize==null?`-moz-tab-size`:`tab-size`};function Tr(e,t){for(let n in e)n==`class`&&t.class?t.class+=` `+e.class:n==`style`&&t.style?t.style+=`;`+e.style:t[n]=e[n];return t}var Er=Object.create(null);function Dr(e,t,n){if(e==t)return!0;e||=Er,t||=Er;let r=Object.keys(e),i=Object.keys(t);if(r.length-(n&&r.indexOf(n)>-1?1:0)!=i.length-(n&&i.indexOf(n)>-1?1:0))return!1;for(let a of r)if(a!=n&&(i.indexOf(a)==-1||e[a]!==t[a]))return!1;return!0}function Or(e,t){for(let n=e.attributes.length-1;n>=0;n--){let r=e.attributes[n].name;t[r]??e.removeAttribute(r)}for(let n in t){let r=t[n];n==`style`?e.style.cssText=r:e.getAttribute(n)!=r&&e.setAttribute(n,r)}}function kr(e,t,n){let r=!1;if(t)for(let i in t)n&&i in n||(r=!0,i==`style`?e.style.cssText=``:e.removeAttribute(i));if(n)for(let i in n)t&&t[i]==n[i]||(r=!0,i==`style`?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return r}function Ar(e){let t=Object.create(null);for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}var jr=class{eq(e){return!1}updateDOM(e,t,n){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}},Mr=(function(e){return e[e.Text=0]=`Text`,e[e.WidgetBefore=1]=`WidgetBefore`,e[e.WidgetAfter=2]=`WidgetAfter`,e[e.WidgetRange=3]=`WidgetRange`,e})(Mr||={}),Nr=class extends Pn{constructor(e,t,n,r){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=r}get heightRelevant(){return!1}static mark(e){return new Pr(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new Ir(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,r;if(e.isBlockGap)n=-5e8,r=4e8;else{let{start:i,end:a}=Lr(e,t);n=(i?t?-3e8:-1:5e8)-1,r=(a?t?2e8:1:-6e8)+1}return new Ir(e,n,r,t,e.widget||null,!0)}static line(e){return new Fr(e)}static set(e,t=!1){return k.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}};Nr.none=k.empty;var Pr=class e extends Nr{constructor(e){let{start:t,end:n}=Lr(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||`span`,this.attrs=e.class&&e.attributes?Tr(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||Er}eq(t){return this==t||t instanceof e&&this.tagName==t.tagName&&Dr(this.attrs,t.attrs)}range(e,t=e){if(e>=t)throw RangeError(`Mark decorations may not be empty`);return super.range(e,t)}};Pr.prototype.point=!1;var Fr=class e extends Nr{constructor(e){super(-2e8,-2e8,null,e)}eq(t){return t instanceof e&&this.spec.class==t.spec.class&&Dr(this.spec.attributes,t.spec.attributes)}range(e,t=e){if(t!=e)throw RangeError(`Line decoration ranges must be zero-length`);return super.range(e,t)}};Fr.prototype.mapMode=Pt.TrackBefore,Fr.prototype.point=!0;var Ir=class e extends Nr{constructor(e,t,n,r,i,a){super(t,n,i,e),this.block=r,this.isReplace=a,this.mapMode=r?t<=0?Pt.TrackBefore:Pt.TrackAfter:Pt.TrackDel}get type(){return this.startSide==this.endSide?this.startSide<=0?Mr.WidgetBefore:Mr.WidgetAfter:Mr.WidgetRange}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof e&&Rr(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw RangeError(`Invalid range for replacement decoration`);if(!this.isReplace&&t!=e)throw RangeError(`Widget decorations can only have zero-length ranges`);return super.range(e,t)}};Ir.prototype.point=!0;function Lr(e,t=!1){let{inclusiveStart:n,inclusiveEnd:r}=e;return n??=e.inclusive,r??=e.inclusive,{start:n??t,end:r??t}}function Rr(e,t){return e==t||!!(e&&t&&e.compare(t))}function zr(e,t,n,r=0){let i=n.length-1;i>=0&&n[i]+r>=e?n[i]=Math.max(n[i],t):n.push(e,t)}var Br=class e extends Pn{constructor(e,t,n){super(),this.tagName=e,this.attributes=t,this.rank=n}eq(t){return t==this||t instanceof e&&this.tagName==t.tagName&&Dr(this.attributes,t.attributes)}static create(t){return new e(t.tagName,t.attributes||Er,t.rank==null?50:Math.max(0,Math.min(t.rank,100)))}static set(e,t=!1){return k.of(e,t)}};Br.prototype.startSide=Br.prototype.endSide=-1;function Vr(e){let t;return t=e.nodeType==11?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function Hr(e,t){return t?e==t||e.contains(t.nodeType==1?t:t.parentNode):!1}function Ur(e,t){if(!t.anchorNode)return!1;try{return Hr(e,t.anchorNode)}catch{return!1}}function Wr(e){return e.nodeType==3?si(e,0,e.nodeValue.length).getClientRects():e.nodeType==1?e.getClientRects():[]}function Gr(e,t,n,r){return n?Jr(e,t,n,r,-1)||Jr(e,t,n,r,1):!1}function Kr(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t}function qr(e){return e.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Jr(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Yr(e))){if(e.nodeName==`DIV`)return!1;let n=e.parentNode;if(!n||n.nodeType!=1)return!1;t=Kr(e)+(i<0?0:1),e=n}else if(e.nodeType==1){if(e=e.childNodes[t+(i<0?-1:0)],e.nodeType==1&&e.contentEditable==`false`)return!1;t=i<0?Yr(e):0}else return!1}}function Yr(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function Xr(e,t){let{left:n,right:r}=e;if(n==r)return e;let i=t?n:r;return{left:i,right:i,top:e.top,bottom:e.bottom}}function Zr(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function Qr(e,t){let n=t.width/e.offsetWidth,r=t.height/e.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(t.width-e.offsetWidth)<1)&&(n=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(t.height-e.offsetHeight)<1)&&(r=1),{scaleX:n,scaleY:r}}function $r(e,t,n,r,i,a,o,s){let c=e.ownerDocument,l=c.defaultView||window;for(let u=e,d=!1;u&&!d;)if(u.nodeType==1){let e,f=u==c.body,p=1,m=1;if(f)e=Zr(l);else{if(/^(fixed|sticky)$/.test(getComputedStyle(u).position)&&(d=!0),u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth){u=u.assignedSlot||u.parentNode;continue}let t=u.getBoundingClientRect();({scaleX:p,scaleY:m}=Qr(u,t)),e={left:t.left,right:t.left+u.clientWidth*p,top:t.top,bottom:t.top+u.clientHeight*m}}let h=0,g=0;if(i==`nearest`)t.top<e.top+o?(g=t.top-(e.top+o),n>0&&t.bottom>e.bottom+g&&(g=t.bottom-e.bottom+o)):t.bottom>e.bottom-o&&(g=t.bottom-e.bottom+o,n<0&&t.top-g<e.top&&(g=t.top-(e.top+o)));else{let r=t.bottom-t.top,a=e.bottom-e.top;g=(i==`center`&&r<=a?t.top+r/2-a/2:i==`start`||i==`center`&&n<0?t.top-o:t.bottom-a+o)-e.top}if(r==`nearest`?t.left<e.left+a?(h=t.left-(e.left+a),n>0&&t.right>e.right+h&&(h=t.right-e.right+a)):t.right>e.right-a&&(h=t.right-e.right+a,n<0&&t.left<e.left+h&&(h=t.left-(e.left+a))):h=(r==`center`?t.left+(t.right-t.left)/2-(e.right-e.left)/2:r==`start`==s?t.left-a:t.right-(e.right-e.left)+a)-e.left,h||g){if(f)l.scrollBy(h,g);else{let e=0,n=0;if(g){let e=u.scrollTop;u.scrollTop+=g/m,n=(u.scrollTop-e)*m}if(h){let t=u.scrollLeft;u.scrollLeft+=h/p,e=(u.scrollLeft-t)*p}t={left:t.left-e,top:t.top-n,right:t.right-e,bottom:t.bottom-n},e&&Math.abs(e-h)<1&&(r=`nearest`),n&&Math.abs(n-g)<1&&(i=`nearest`)}}if(f)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),u=u.assignedSlot||u.parentNode}else if(u.nodeType==11)u=u.host;else break}function ei(e,t=!0){let n=e.ownerDocument,r=null,i=null;for(let a=e.parentNode;a&&!(a==n.body||(!t||r)&&i);)if(a.nodeType==1)!i&&a.scrollHeight>a.clientHeight&&(i=a),t&&!r&&a.scrollWidth>a.clientWidth&&(r=a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;return{x:r,y:i}}var ti=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Yr(t):0),n,Math.min(e.focusOffset,n?Yr(n):0))}set(e,t,n,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=r}};function ni(e){let t=[];for(let n=e;n;n=n.nodeType==11?n.host:n.parentNode)n.nodeType==1&&t.push({node:n,left:n.scrollLeft,top:n.scrollTop});return t}function ri(e,t=!0){for(let{node:n,left:r,top:i}of e)t&&n.scrollTop!=i&&(n.scrollTop=i),n.scrollLeft!=r&&(n.scrollLeft=r)}var ii=null;A.safari&&A.safari_version>=26&&(ii=!1);function ai(e){if(e.setActive)return e.setActive();if(ii)return e.focus(ii);let t=ni(e);e.focus(ii==null?{get preventScroll(){return ii={preventScroll:!0},!0}}:void 0),ii||(ii=!1,ri(t))}var oi;function si(e,t,n=t){let r=oi||=document.createRange();return r.setEnd(e,n),r.setStart(e,t),r}function ci(e,t,n,r){let i={key:t,code:t,keyCode:n,which:n,cancelable:!0};r&&({altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}=r);let a=new KeyboardEvent(`keydown`,i);a.synthetic=!0,e.dispatchEvent(a);let o=new KeyboardEvent(`keyup`,i);return o.synthetic=!0,e.dispatchEvent(o),a.defaultPrevented||o.defaultPrevented}function li(e){for(;e;){if(e&&(e.nodeType==9||e.nodeType==11&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function ui(e,t){let n=t.focusNode,r=t.focusOffset;if(!n||t.anchorNode!=n||t.anchorOffset!=r)return!1;for(r=Math.min(r,Yr(n));;)if(r){if(n.nodeType!=1)return!1;let e=n.childNodes[r-1];e.contentEditable==`false`?r--:(n=e,r=Yr(n))}else if(n==e)return!0;else r=Kr(n),n=n.parentNode}function di(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function fi(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r>0)return{node:n,offset:r};else if(n.nodeType==1&&r>0){if(n.contentEditable==`false`)return null;n=n.childNodes[r-1],r=Yr(n)}else if(n.parentNode&&!qr(n))r=Kr(n),n=n.parentNode;else return null}function pi(e,t){for(let n=e,r=t;;)if(n.nodeType==3&&r<n.nodeValue.length)return{node:n,offset:r};else if(n.nodeType==1&&r<n.childNodes.length){if(n.contentEditable==`false`)return null;n=n.childNodes[r],r=0}else if(n.parentNode&&!qr(n))r=Kr(n)+1,n=n.parentNode;else return null}var mi=class e{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(t,n){return new e(t.parentNode,Kr(t),n)}static after(t,n){return new e(t.parentNode,Kr(t)+1,n)}},j=(function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e})(j||={}),hi=j.LTR,gi=j.RTL;function _i(e){let t=[];for(let n=0;n<e.length;n++)t.push(1<<e[n]);return t}var vi=_i(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),yi=_i(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),bi=Object.create(null),xi=[];for(let e of[`()`,`[]`,`{}`]){let t=e.charCodeAt(0),n=e.charCodeAt(1);bi[t]=n,bi[n]=-t}function Si(e){return e<=247?vi[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?yi[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}var Ci=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,wi=class{get dir(){return this.level%2?gi:hi}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,r){let i=-1;for(let a=0;a<e.length;a++){let o=e[a];if(o.from<=t&&o.to>=t){if(o.level==n)return a;(i<0||(r==0?e[i].level>o.level:r<0?o.from<t:o.to>t))&&(i=a)}}if(i<0)throw RangeError(`Index out of range`);return i}};function Ti(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.direction!=i.direction||!Ti(r.inner,i.inner))return!1}return!0}var M=[];function Ei(e,t,n,r,i){for(let a=0;a<=r.length;a++){let o=a?r[a-1].to:t,s=a<r.length?r[a].from:n,c=a?256:i;for(let t=o,n=c,r=c;t<s;t++){let i=Si(e.charCodeAt(t));i==512?i=n:i==8&&r==4&&(i=16),M[t]=i==4?2:i,i&7&&(r=i),n=i}for(let e=o,t=c,r=c;e<s;e++){let i=M[e];if(i==128)e<s-1&&t==M[e+1]&&t&24?i=M[e]=t:M[e]=256;else if(i==64){let i=e+1;for(;i<s&&M[i]==64;)i++;let a=e&&t==8||i<n&&M[i]==8?r==1?1:8:256;for(let t=e;t<i;t++)M[t]=a;e=i-1}else i==8&&r==1&&(M[e]=1);t=i,i&7&&(r=i)}}}function Di(e,t,n,r,i){let a=i==1?2:1;for(let o=0,s=0,c=0;o<=r.length;o++){let l=o?r[o-1].to:t,u=o<r.length?r[o].from:n;for(let t=l,n,r,o;t<u;t++)if(r=bi[n=e.charCodeAt(t)]){if(r<0){for(let e=s-3;e>=0;e-=3)if(xi[e+1]==-r){let n=xi[e+2],r=n&2?i:n&4?n&1?a:i:0;r&&(M[t]=M[xi[e]]=r),s=e;break}}else if(xi.length==189)break;else xi[s++]=t,xi[s++]=n,xi[s++]=c}else if((o=M[t])==2||o==1){let e=o==i;c=+!e;for(let t=s-3;t>=0;t-=3){let n=xi[t+2];if(n&2)break;if(e)xi[t+2]|=2;else{if(n&4)break;xi[t+2]|=4}}}}}function Oi(e,t,n,r){for(let i=0,a=r;i<=n.length;i++){let o=i?n[i-1].to:e,s=i<n.length?n[i].from:t;for(let c=o;c<s;){let o=M[c];if(o==256){let o=c+1;for(;;)if(o==s){if(i==n.length)break;o=n[i++].to,s=i<n.length?n[i].from:t}else if(M[o]==256)o++;else break;let l=a==1,u=l==((o<t?M[o]:r)==1)?l?1:2:r;for(let t=o,r=i,a=r?n[r-1].to:e;t>c;)t==a&&(t=n[--r].from,a=r?n[r-1].to:e),M[--t]=u;c=o}else a=o,c++}}}function ki(e,t,n,r,i,a,o){let s=r%2?2:1;if(r%2==i%2)for(let c=t,l=0;c<n;){let t=!0,u=!1;if(l==a.length||c<a[l].from){let e=M[c];e!=s&&(t=!1,u=e==16)}let d=!t&&s==1?[]:null,f=t?r:r+1,p=c;run:for(;;)if(l<a.length&&p==a[l].from){if(u)break run;let m=a[l];if(!t)for(let e=m.to,t=l+1;;){if(e==n)break run;if(t<a.length&&a[t].from==e)e=a[t++].to;else if(M[e]==s)break run;else break}l++,d?d.push(m):(m.from>c&&o.push(new wi(c,m.from,f)),Ai(e,m.direction==hi==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.to),p=m.to}else if(p==n||(t?M[p]!=s:M[p]==s))break;else p++;d?ki(e,c,p,r+1,i,d,o):c<p&&o.push(new wi(c,p,f)),c=p}else for(let c=n,l=a.length;c>t;){let n=!0,u=!1;if(!l||c>a[l-1].to){let e=M[c-1];e!=s&&(n=!1,u=e==16)}let d=!n&&s==1?[]:null,f=n?r:r+1,p=c;run:for(;;)if(l&&p==a[l-1].to){if(u)break run;let m=a[--l];if(!n)for(let e=m.from,n=l;;){if(e==t)break run;if(n&&a[n-1].to==e)e=a[--n].from;else if(M[e-1]==s)break run;else break}d?d.push(m):(m.to<c&&o.push(new wi(m.to,c,f)),Ai(e,m.direction==hi==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.from),p=m.from}else if(p==t||(n?M[p-1]!=s:M[p-1]==s))break;else p--;d?ki(e,p,c,r+1,i,d,o):p<c&&o.push(new wi(p,c,f)),c=p}}function Ai(e,t,n,r,i,a,o){let s=t%2?2:1;Ei(e,i,a,r,s),Di(e,i,a,r,s),Oi(i,a,r,s),ki(e,i,a,t,n,r,o)}function ji(e,t,n){if(!e)return[new wi(0,0,+(t==gi))];if(t==hi&&!n.length&&!Ci.test(e))return Mi(e.length);if(n.length)for(;e.length>M.length;)M[M.length]=256;let r=[],i=t==hi?0:1;return Ai(e,i,i,n,0,e.length,r),r}function Mi(e){return[new wi(0,e,0)]}var Ni=``;function Pi(e,t,n,r,i){if(!e.length)return null;let a=r.head-e.from,o;if(r.head==e.from&&r.assoc<0){if(!i)return null;a=t[o=0].side(!1,n)}else if(r.head==e.to&&r.assoc>0){if(i)return null;a=t[o=t.length-1].side(!0,n)}else o=wi.find(t,a,r.bidiLevel??-1,r.assoc);let s=t[o],c=s.side(i,n);if(a==c){let e=o+=i?1:-1;if(e<0||e>=t.length)return null;s=t[o=e],a=s.side(!i,n),c=s.side(i,n)}let l=Ot(e.text,a,s.forward(i,n));(l<s.from||l>s.to)&&(l=c),Ni=e.text.slice(Math.min(a,l),Math.max(a,l));let u=o==(i?t.length-1:0)?null:t[o+(i?1:-1)];if(l==c){if(!u)return i?T.cursor(e.to,1):T.cursor(e.from,-1);if(u.level+ +!i<s.level)return T.cursor(u.side(!i,n)+e.from,u.forward(i,n)?1:-1,u.level)}return T.cursor(l+e.from,s.forward(i,n)?-1:1,s.level)}function Fi(e,t,n){for(let r=t;r<n;r++){let t=Si(e.charCodeAt(r));if(t==1)return hi;if(t==2||t==4)return gi}return hi}var Ii=E.define(),Li=E.define(),Ri=E.define(),zi=E.define(),Bi=E.define(),Vi=E.define(),Hi=E.define(),Ui=E.define(),Wi=E.define(),Gi=E.define({combine:e=>e.some(e=>e)}),Ki=E.define({combine:e=>e.some(e=>e)}),qi=E.define(),Ji=class e{constructor(e,t,n,r,i,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=r,this.xMargin=i,this.isSnapshot=a}map(t){return t.empty?this:new e(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new e(T.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}},Yi=D.define({map:(e,t)=>e.map(t)}),Xi=D.define();function Zi(e,t,n){let r=e.facet(zi);r.length?r[0](t):window.onerror&&window.onerror(String(t),n,void 0,void 0,t)||(n?console.error(n+`:`,t):console.error(t))}var Qi=E.define({combine:e=>!e.length||e[0]}),$i=0,ea=E.define({combine(e){return e.filter((t,n)=>{for(let r=0;r<n;r++)if(e[r].plugin==t.plugin)return!1;return!0})}}),ta=class e{constructor(e,t,n,r,i){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=r,this.baseExtensions=i(this),this.extension=this.baseExtensions.concat(ea.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(ea.of({plugin:this,arg:e}))}static define(t,n){let{eventHandlers:r,eventObservers:i,provide:a,decorations:o}=n||{};return new e($i++,t,r,i,e=>{let t=[];return o&&t.push(aa.of(t=>{let n=t.plugin(e);return n?o(n):Nr.none})),a&&t.push(a(e)),t})}static fromClass(t,n){return e.define((e,n)=>new t(e,n),n)}},na=class{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(!this.value){if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Zi(e.state,t,`CodeMirror plugin crashed`),this.deactivate()}}else if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(Zi(e.state,t,`CodeMirror plugin crashed`),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}return this}destroy(e){if(this.value?.destroy)try{this.value.destroy()}catch(t){Zi(e.state,t,`CodeMirror plugin crashed`)}}deactivate(){this.spec=this.value=null}},ra=E.define(),ia=E.define(),aa=E.define(),oa=E.define(),sa=E.define(),ca=E.define(),la=E.define();function ua(e,t){let n=e.state.facet(la);if(!n.length)return n;let r=n.map(t=>t instanceof Function?t(e):t),i=[];return k.spans(r,t.from,t.to,{point(){},span(e,n,r,a){let o=e-t.from,s=n-t.from,c=i;for(let e=r.length-1;e>=0;e--,a--){let n=r[e].spec.bidiIsolate,i;if(n??=Fi(t.text,o,s),a>0&&c.length&&(i=c[c.length-1]).to==o&&i.direction==n)i.to=s,c=i.inner;else{let e={from:o,to:s,direction:n,inner:[]};c.push(e),c=e.inner}}}}),i}var da=E.define();function fa(e){let t=0,n=0,r=0,i=0;for(let a of e.state.facet(da)){let o=a(e);o&&(o.left!=null&&(t=Math.max(t,o.left)),o.right!=null&&(n=Math.max(n,o.right)),o.top!=null&&(r=Math.max(r,o.top)),o.bottom!=null&&(i=Math.max(i,o.bottom)))}return{left:t,right:n,top:r,bottom:i}}var pa=E.define(),ma=class e{constructor(e,t,n,r){this.fromA=e,this.toA=t,this.fromB=n,this.toB=r}join(t){return new e(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>n.toA)){if(r.toA<n.fromA)break;n=n.join(r),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(t,n){if(n.length==0)return t;let r=[];for(let i=0,a=0,o=0;;){let s=i<t.length?t[i].fromB:1e9,c=a<n.length?n[a]:1e9,l=Math.min(s,c);if(l==1e9)break;let u=l+o,d=l,f=u;for(;;)if(a<n.length&&n[a]<=d){let e=n[a+1];a+=2,d=Math.max(d,e);for(let e=i;e<t.length&&t[e].fromB<=d;e++)o=t[e].toA-t[e].toB;f=Math.max(f,e+o)}else if(i<t.length&&t[i].fromB<=d){let e=t[i++];d=Math.max(d,e.toB),f=Math.max(f,e.toA),o=e.toA-e.toB}else break;r.push(new e(u,f,l,d))}return r}},ha=class e{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=It.empty(this.startState.doc.length);for(let e of n)this.changes=this.changes.compose(e.changes);let r=[];this.changes.iterChangedRanges((e,t,n,i)=>r.push(new ma(e,t,n,i))),this.changedRanges=r}static create(t,n,r){return new e(t,n,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}},ga=[],N=class{constructor(e,t,n=0){this.dom=e,this.length=t,this.flags=n,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return ga}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let e=this.domAttrs;e&&Or(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:``)+(this.breakAfter?`#`:``)}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let n=t;for(let t of this.children){if(t==e)return n;n+=t.length+t.breakAfter}throw RangeError(`Invalid child in posBefore`)}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t,n){return null}domPosFor(e,t){let n=Kr(this.dom),r=this.length?e>0:t>0;return new mi(this.parent.dom,n+ +!!r,e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof ya)return e;return null}static get(e){return e.cmTile}},_a=class extends N{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,n=null,r,i=e?.node==t?e:null,a=0;for(let o of this.children){if(o.sync(e),a+=o.length+o.breakAfter,r=n?n.nextSibling:t.firstChild,i&&r!=o.dom&&(i.written=!0),o.dom.parentNode==t)for(;r&&r!=o.dom;)r=va(r);else t.insertBefore(o.dom,r);n=o.dom}for(r=n?n.nextSibling:t.firstChild,i&&r&&(i.written=!0);r;)r=va(r);this.length=a}};function va(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var ya=class extends _a{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=N.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],n=this,r=0,i=0;;)if(r==n.children.length){if(!t.length)return;n=n.parent,n.breakAfter&&i++,r=t.pop()}else{let a=n.children[r++];if(a instanceof ba)t.push(r),n=a,r=0;else{let t=i+a.length,n=e(a,i);if(n!==void 0)return n;i=t+a.breakAfter}}}resolveBlock(e,t){let n,r=-1,i,a=-1;if(this.blockTiles((o,s)=>{let c=s+o.length;if(e>=s&&e<=c){if(o.isWidget()&&t>=-1&&t<=1){if(o.flags&32)return!0;o.flags&16&&(n=void 0)}(s<e||e==c&&(t<-1?o.length:o.covers(1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=e-s),(c>e||e==s&&(t>1?o.length:o.covers(-1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,a=e-s)}}),!n&&!i)throw Error(`No tile at position `+e);return n&&t<0||!i?{tile:n,offset:r}:{tile:i,offset:a}}},ba=class e extends _a{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},xa=class e extends _a{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(t,n,r){let i=new e(n||document.createElement(`div`),t);return(!n||!r)&&(i.flags|=4),i}get domAttrs(){return this.attrs}resolveInline(e,t,n){let r=null,i=-1,a=null,o=-1;function s(e,c){for(let l=0,u=0;l<e.children.length&&u<=c;l++){let d=e.children[l],f=u+d.length;f>=c&&(d.isComposite()?s(d,c-u):(!a||a.isHidden&&(t>0&&!(a.flags&32)||n&&Ca(a,d)))&&(f>c||d.flags&32&&t<=1)?(a=d,o=c-u):(u<c||d.flags&16&&!d.isHidden&&t>=-1)&&(r=d,i=c-u)),u=f}}s(this,e);let c=(t<0?r:a)||r||a;return c?{tile:c,offset:c==r?i:o}:null}coordsIn(e,t,n){let r=this.resolveInline(e,t,!0);return r?r.tile.coordsIn(Math.max(0,r.offset),t,n):Sa(this)}domIn(e,t){let n=this.resolveInline(e,t);if(n){let{tile:e,offset:r}=n;if(this.dom.contains(e.dom))return e.isText()?new mi(e.dom,Math.min(e.dom.nodeValue.length,r)):e.domPosFor(r,e.flags&16?1:e.flags&32?-1:t);let i=n.tile.parent,a=!1;for(let e of i.children){if(a)return new mi(e.dom,0);e==n.tile&&(a=!0)}}return new mi(this.dom,0)}};function Sa(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let n=Wr(t);return n[n.length-1]||null}function Ca(e,t){let n=e.coordsIn(0,1),r=t.coordsIn(0,1);return n&&r&&r.top<n.bottom}var wa=class e extends _a{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},Ta=class e extends N{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t,n){let r=this.dom.nodeValue.length;e>r&&(e=r);let i=e,a=e,o=0;e==0&&t<0||e==r&&t>=0?A.chrome||A.gecko||(e?(i--,o=1):a<r&&(a++,o=-1)):t<0?i--:a<r&&a++;let s=si(this.dom,i,a).getClientRects();if(!s.length)return null;let c=s[(o?o<0:t>=0)?0:s.length-1];return A.safari&&!o&&c.width==0&&(c=Array.prototype.find.call(s,e=>e.width)||c),n==null?c:Xr(c,(o?o>0:t<0)==n)}static of(t,n){let r=new e(n||document.createTextNode(t),t);return n||(r.flags|=2),r}},Ea=class e extends N{constructor(e,t,n,r){super(e,t,r),this.widget=n}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,n){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(n)return Xr(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let t=this.dom.getClientRects(),n=null;if(!t.length)return null;let r=this.flags&16?!0:this.flags&32?!1:e>0;for(let i=r?t.length-1:0;n=t[i],!(e>0?i==0:i==t.length-1||n.top<n.bottom);i+=r?-1:1);return Xr(n,!r)}}get overrideDOMText(){if(!this.length)return w.empty;let{root:e}=this;if(!e)return w.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,n,r,i,a){return a||(a=t.toDOM(n),t.editable||(a.contentEditable=`false`)),new e(a,r,t,i)}},Da=class extends N{constructor(e){let t=document.createElement(`img`);t.className=`cm-widgetBuffer`,t.setAttribute(`aria-hidden`,`true`),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return w.empty}coordsIn(e,t,n){let r=this.dom.getBoundingClientRect();return n==null?r:Xr(r,t>0==n)}},Oa=class{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,n){let{tile:r,index:i,beforeBreak:a,parents:o}=this;for(;e||t>0;)if(!r.isComposite()){let t=r.length;if(i<t&&e){let a=Math.min(e,t-i);n&&n.skip(r,i,i+a),e-=a,i+=a}if(i==t)a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++;else if(!e)break}else if(a){if(!e)break;n&&n.break(),e--,a=!1}else if(i==r.children.length){if(!e&&!o.length)break;n&&n.leave(r),a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++}else{let s=r.children[i],c=s.breakAfter;(t>0?s.length<=e:s.length<e)&&(!n||n.skip(s,0,s.length)!==!1||!s.isComposite)?(a=!!c,i++,e-=s.length):(o.push({tile:r,index:i}),r=s,i=0,n&&s.isComposite()&&n.enter(s))}return this.tile=r,this.index=i,this.beforeBreak=a,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}},ka=class{constructor(e,t,n,r){this.from=e,this.to=t,this.wrapper=n,this.rank=r}},Aa=class{constructor(e,t,n){this.cache=e,this.root=t,this.blockWrappers=n,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,n,r){this.flushBuffer();let i=this.ensureMarks(t,n),a=i.lastChild;if(a&&a.isText()&&!(a.flags&8)&&a.length+e.length<512){this.cache.reused.set(a,2);let t=i.children[i.children.length-1]=new Ta(a.dom,a.text+e);t.parent=i}else i.append(r||Ta.of(e,this.cache.find(Ta)?.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let n=this.curLine;n.dom!=t.line.dom&&(n.setDOM(this.cache.reused.has(t.line)?Ba(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=n;for(let e=t.marks.length-1;e>=0;e--){let n=t.marks[e],i=r.lastChild;if(i instanceof wa&&i.mark.eq(n.mark))i.dom!=n.dom&&i.setDOM(Ba(n.dom)),r=i;else{let{dom:e}=n;this.cache.reused.get(n)&&N.get(n.dom)&&(e=Ba(n.dom));let t=wa.of(n.mark,e);r.append(t),r=t}this.cache.reused.set(n,2)}let i=N.get(e.text);i&&this.cache.reused.set(i,2);let a=new Ta(e.text,e.text.nodeValue);a.flags|=8,this.pos=e.range.toB,r.append(a)}addInlineWidget(e,t,n){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let i=this.ensureMarks(t,n);!r&&!(e.flags&16)&&i.append(this.getBuffer(1)),i.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,n){this.flushBuffer(),this.ensureMarks(t,n).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){e||=La;let n=xa.start(e,t||this.cache.find(xa)?.dom,!!t);this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){let n=this.curLine;for(let r=e.length-1;r>=0;r--){let i=e[r],a;if(t>0&&(a=n.lastChild)&&a instanceof wa&&a.mark.eq(i))n=a,t--;else{let e=wa.of(i,this.cache.find(wa,e=>e.mark.eq(i))?.dom);n.append(e),n=e,t=0}}return n}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!Fa(this.curLine,!1)||e.dom.nodeName!=`BR`&&e.isWidget()&&!(A.ios&&Fa(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(Ha,0,32)||new Ea(Ha.toDOM(),0,Ha,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,n=new ka(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-n.rank||this.wrappers[r-1].to-n.to)<0;)r--;this.wrappers.splice(r,0,n)}this.wrapperPos=this.pos}getBlockPos(){this.updateBlockWrappers();let e=this.root;for(let t of this.wrappers){let n=e.lastChild;if(t.from<this.pos&&n instanceof ba&&n.wrapper.eq(t.wrapper))e=n;else{let n=ba.of(t.wrapper,this.cache.find(ba,e=>e.wrapper.eq(t.wrapper))?.dom);e.append(n),e=n}}return e}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),n=this.cache.find(Da,void 0,1);return n&&(n.flags=t),n||new Da(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}},ja=class{constructor(e){this.skipCount=0,this.text=``,this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text=``,this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:n,done:r}=this.cursor.next(this.skipCount);if(this.skipCount=0,r)throw Error(`Ran out of text content when drawing inline views`);this.text=t;let i=this.textOff=Math.min(e,t.length);return n?null:t.slice(0,i)}let t=Math.min(this.text.length,this.textOff+e),n=this.text.slice(this.textOff,t);return this.textOff=t,n}},Ma=[Ea,xa,Ta,wa,Da,ba,ya];for(let e=0;e<Ma.length;e++)Ma[e].bucket=e;var Na=class{constructor(e){this.view=e,this.buckets=Ma.map(()=>[]),this.index=Ma.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,n=this.buckets[t];n.length<6?n.push(e):n[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,n=2){let r=e.bucket,i=this.buckets[r],a=this.index[r];for(let e=0;e<i.length;e++){let o=(e+a)%i.length,s=i[o];if((!t||t(s))&&!this.reused.has(s))return i.splice(o,1),o<a&&this.index[r]--,this.reused.set(s,n),s}return null}findWidget(e,t,n){let r=this.buckets[0];if(r.length)for(let i=0,a=0;;i++){if(i==r.length){if(a)return null;a=1,i=0}let o=r[i];if(!this.reused.has(o)&&(a==0?o.widget.compare(e):o.widget.constructor==e.constructor&&e.updateDOM(o.dom,this.view,o.widget)))return r.splice(i,1),i<this.index[0]&&this.index[0]--,o.widget==e&&o.length==t&&(o.flags&497)==n?(this.reused.set(o,1),o):(this.reused.set(o,2),new Ea(o.dom,t,e,o.flags&-498|n))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}},Pa=class{constructor(e,t,n,r,i){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=i,this.openWidget=!1,this.openMarks=0,this.cache=new Na(e),this.text=new ja(e.state.doc),this.builder=new Aa(this.cache,new ya(e,e.contentDOM),k.iter(n)),this.cache.reused.set(t,2),this.old=new Oa(t),this.reuseWalker={skip:(e,t,n)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let n=t&&this.getCompositionContext(t.text);for(let r=0,i=0,a=0;;){let o=a<e.length?e[a++]:null,s=o?o.fromA:this.old.root.length;if(s>r){let e=s-r;this.preserve(e,!a,!o),r=s,i+=e}if(!o)break;t&&o.fromA<=t.range.fromA&&o.toA>=t.range.toA?(this.forward(o.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(i,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,n),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,o.toA),this.emit(t.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(i,o.toB)),i=o.toB,r=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,n){let r=za(this.old),i=this.openMarks;this.old.advance(e,n?1:-1,{skip:(e,t,n)=>{if(e.isWidget()){if(this.openWidget)this.builder.continueWidget(n-t);else{let a=n>0||t<e.length?Ea.of(e.widget,this.view,n-t,e.flags&496,this.cache.maybeReuse(e)):this.cache.reuse(e);a.flags&256?(a.flags&=-2,this.builder.addBlockWidget(a)):(this.builder.ensureLine(null),this.builder.addInlineWidget(a,r,i),i=r.length)}}else if(e.isText())this.builder.ensureLine(null),!t&&n==e.length&&!this.cache.reused.has(e)?this.builder.addText(e.text,r,i,this.cache.reuse(e)):(this.cache.add(e),this.builder.addText(e.text.slice(t,n),r,i)),i=r.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof Da)this.cache.add(e);else if(e instanceof wa)this.builder.ensureLine(null),this.builder.addMark(e,r,i),this.cache.reused.set(e,1),i=r.length;else return!1;this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof wa&&r.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?r.length&&=i=0:e instanceof wa&&(r.shift(),i=Math.min(i,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let n=null,r=this.builder,i=-1,a=k.spans(this.decorations,e,t,{point:(e,t,a,o,s,c)=>{if(a instanceof Ir){if(this.disallowBlockEffectsFor[c]){if(a.block)throw RangeError(`Block decorations may not be specified via plugins`);if(t>this.view.state.doc.lineAt(e).to)throw RangeError(`Decorations that replace line breaks may not be specified via plugins`)}if(i=o.length,s>o.length)r.continueWidget(t-e);else{let i=a.widget||(a.block?Va.block:Va.inline),c=Ia(a),l=this.cache.findWidget(i,t-e,c)||Ea.of(i,this.view,t-e,c);a.block?(a.startSide>0&&r.addLineStartIfNotCovered(n),r.addBlockWidget(l)):(r.ensureLine(n),r.addInlineWidget(l,o,s))}n=null}else n=Ra(n,a);t>e&&this.text.skip(t-e)},span:(e,t,a,o)=>{for(let i=e;i<t;){let s=this.text.next(Math.min(512,t-i));s==null?(r.addLineStartIfNotCovered(n),r.addBreak(),i++):(r.ensureLine(n),r.addText(s,a,i==e?o:a.length),i+=s.length),n=null}i=a.length}});i>-1&&(this.openWidget=a>i),this.openWidget||r.addLineStartIfNotCovered(n),this.openMarks=a}forward(e,t,n=1){t-e<=10?this.old.advance(t-e,n,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,n,this.reuseWalker))}getCompositionContext(e){let t=[],n=null;for(let r=e.parentNode;;r=r.parentNode){let e=N.get(r);if(r==this.view.contentDOM)break;e instanceof wa?t.push(e):e?.isLine()?n=e:e instanceof ba||(r.nodeName==`DIV`&&!n?n=new xa(r,La):n||t.push(wa.of(new Pr({tagName:r.nodeName.toLowerCase(),attributes:Ar(r)}),r)))}return n?{line:n,marks:t}:null}};function Fa(e,t){let n=e=>{for(let r of e.children)if((t?r.isText():r.length)||n(r))return!0;return!1};return n(e)}function Ia(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}var La={class:`cm-line`};function Ra(e,t){let n=t.spec.attributes,r=t.spec.class;return!n&&!r?e:(e||={class:`cm-line`},n&&Tr(n,e),r&&(e.class+=` `+r),e)}function za(e){let t=[];for(let n=e.parents.length;n>1;n--){let r=n==e.parents.length?e.tile:e.parents[n].tile;r instanceof wa&&t.push(r.mark)}return t}function Ba(e){let t=N.get(e);return t&&t.setDOM(e.cloneNode()),e}var Va=class extends jr{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}};Va.inline=new Va(`span`),Va.block=new Va(`div`);var Ha=new class extends jr{toDOM(){return document.createElement(`br`)}get isHidden(){return!0}get editable(){return!0}},Ua=class{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=Nr.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new ya(e,e.contentDOM),this.updateInner([new ma(0,0,0,e.state.doc.length)],null)}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let n=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(this.domChanged?.newSel?n=this.domChanged.newSel.head:!eo(e.changes,this.hasComposition)&&!e.selectionSet&&(n=e.state.selection.main.head));let r=n>-1?qa(this.view,e.changes,n):null;if(this.domChanged=null,this.hasComposition){let{from:n,to:r}=this.hasComposition;t=new ma(n,r,e.changes.mapPos(n,-1),e.changes.mapPos(r,1)).addToSet(t.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,(A.ie||A.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let i=this.decorations,a=this.blockWrappers;this.updateDeco();let o=Xa(i,this.decorations,e.changes);o.length&&(t=ma.extendWithRanges(t,o));let s=Qa(a,this.blockWrappers,e.changes);return s.length&&(t=ma.extendWithRanges(t,s)),r&&!t.some(e=>e.fromA<=r.range.fromA&&e.toA>=r.range.toA)&&(t=r.range.addToSet(t.slice())),this.tile.flags&2&&t.length==0?!1:(this.updateInner(t,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:n}=this.view;n.ignore(()=>{if(t||e.length){let n=this.tile,r=new Pa(this.view,n,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&N.get(t.text)&&r.cache.reused.set(N.get(t.text),2),this.tile=r.run(e,t),Wa(n,r.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+`px`,this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+`px`:``;let r=A.chrome||A.ios?{node:n.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(r),r&&(r.written||n.selectionRange.focusNode!=r.node||!this.tile.dom.contains(r.node))&&(this.forceSelection=!0),this.tile.dom.style.height=``});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof to&&r.push(e.dom);n.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(Xi)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:n}=this.tile,r=this.view.root.activeElement,i=r==n,a=!i&&!(this.view.state.facet(Qi)||n.tabIndex>-1)&&Ur(n,this.view.observer.selectionRange)&&!(r&&n.contains(r));if(!(i||t||a))return;let o=this.forceSelection;this.forceSelection=!1;let s=this.view.state.selection.main,c,l;if(s.empty?l=c=this.inlineDOMNearPos(s.anchor,s.assoc||1):(l=this.inlineDOMNearPos(s.head,s.head==s.from?1:-1),c=this.inlineDOMNearPos(s.anchor,s.anchor==s.from?1:-1)),A.gecko&&s.empty&&!this.hasComposition&&Ga(c)){let e=document.createTextNode(``);this.view.observer.ignore(()=>c.node.insertBefore(e,c.node.childNodes[c.offset]||null)),c=l=new mi(e,0),o=!0}let u=this.view.observer.selectionRange;(o||!u.focusNode||(!Gr(c.node,c.offset,u.anchorNode,u.anchorOffset)||!Gr(l.node,l.offset,u.focusNode,u.focusOffset))&&!this.suppressWidgetCursorChange(u,s))&&(this.view.observer.ignore(()=>{A.android&&A.chrome&&n.contains(u.focusNode)&&$a(u.focusNode,n)&&(n.blur(),n.focus({preventScroll:!0}));let e=Vr(this.view.root);if(e){if(s.empty){if(A.gecko){let e=Ja(c.node,c.offset);if(e&&e!=3){let t=(e==1?fi:pi)(c.node,c.offset);t&&(c=new mi(t.node,t.offset))}}e.collapse(c.node,c.offset),s.bidiLevel!=null&&e.caretBidiLevel!==void 0&&(e.caretBidiLevel=s.bidiLevel)}else if(e.extend){e.collapse(c.node,c.offset);try{e.extend(l.node,l.offset)}catch{}}else{let t=document.createRange();s.anchor>s.head&&([c,l]=[l,c]),t.setEnd(l.node,l.offset),t.setStart(c.node,c.offset),e.removeAllRanges(),e.addRange(t)}}a&&this.view.root.activeElement==n&&(n.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(c,l)),this.impreciseAnchor=c.precise?null:new mi(u.anchorNode,u.anchorOffset),this.impreciseHead=l.precise?null:new mi(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Gr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=Vr(e.root),{anchorNode:r,anchorOffset:i}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=this.lineAt(t.head,t.assoc);if(!a)return;let o=a.posAtStart;if(t.head==o||t.head==o+a.length)return;let s=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!s||!c||s.bottom>c.top)return;let l=this.domAtPos(t.head+t.assoc,t.assoc);n.collapse(l.node,l.offset),n.modify(`move`,t.assoc<0?`forward`:`backward`,`lineboundary`),e.observer.readSelectionRange();let u=e.observer.selectionRange;e.docView.posFromDOM(u.anchorNode,u.anchorOffset)!=t.from&&n.collapse(r,i)}posFromDOM(e,t){let n=this.tile.nearest(e);if(!n)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=n.posAtStart;if(n.isComposite()){let i;if(e==n.dom)i=n.dom.childNodes[t];else{let r=Yr(e)==0?0:t==0?-1:1;for(;;){let t=e.parentNode;if(t==n.dom)break;r==0&&t.firstChild!=t.lastChild&&(r=e==t.firstChild?-1:1),e=t}i=r<0?e:e.nextSibling}if(i==n.dom.firstChild)return r;for(;i&&!N.get(i);)i=i.nextSibling;if(!i)return r+n.length;for(let e=0,t=r;;e++){let r=n.children[e];if(r.dom==i)return t;t+=r.length+r.breakAfter}}else if(n.isText())return e==n.dom?r+t:r+(t?n.length:0);else return r}domAtPos(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.domPosFor(r,t):n.domIn(r,t)}inlineDOMNearPos(e,t){let n,r=-1,i=!1,a,o=-1,s=!1;return this.tile.blockTiles((t,c)=>{if(t.isWidget()){if(t.flags&32&&c>=e)return!0;t.flags&16&&(i=!0)}else{let l=c+t.length;if(c<=e&&(n=t,r=e-c,i=l<e),l>=e&&!a&&(a=t,o=e-c,s=c>e),c>e&&a)return!0}}),!n&&!a?this.domAtPos(e,t):(i&&a?n=null:s&&n&&(a=null),n&&t<0||!a?n.domIn(r,t):a.domIn(o,t))}coordsAt(e,t,n){let{tile:r,offset:i}=this.tile.resolveBlock(e,t);return r.isWidget()?r.widget instanceof to?null:r.coordsInWidget(i,t,!0):r.coordsIn(i,t,n)}lineAt(e,t){let{tile:n}=this.tile.resolveBlock(e,t);return n.isLine()?n:null}coordsForChar(e){let{tile:t,offset:n}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(e,t){if(e.isComposite())for(let n of e.children){if(n.length>=t){let e=r(n,t);if(e)return e}if(t-=n.length,t<0)break}else if(e.isText()&&t<e.length){let n=Ot(e.text,t);if(n==t)return null;let r=si(e.dom,t,n).getClientRects();for(let e=0;e<r.length;e++){let t=r[e];if(e==r.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}return r(t,n)}measureVisibleLineHeights(e){let t=[],{from:n,to:r}=e,i=this.view.contentDOM.clientWidth,a=i>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,s=this.view.textDirection==j.LTR,c=0,l=(e,u,d)=>{for(let f=0;f<e.children.length&&!(u>r);f++){let r=e.children[f],p=u+r.length,m=r.dom.getBoundingClientRect(),{height:h}=m;if(d&&!f&&(c+=m.top-d.top),r instanceof ba)p>n&&l(r,u,m);else if(u>=n&&(c>0&&t.push(-c),t.push(h+c),c=0,a)){let e=r.dom.lastChild,t=e?Wr(e):[];if(t.length){let e=t[t.length-1],n=s?e.right-m.left:m.right-e.left;n>o&&(o=n,this.minWidth=i,this.minWidthFrom=u,this.minWidthTo=p)}}d&&f==e.children.length-1&&(c+=d.bottom-m.bottom),u=p+r.breakAfter}};return l(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction==`rtl`?j.RTL:j.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t=0,n;for(let r of e.children){if(!r.isText()||/[^ -~]/.test(r.text))return;let e=Wr(r.dom);if(e.length!=1)return;t+=e[0].width,n=e[0].height}if(t)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:t/e.length,textHeight:n}}});if(e)return e;let t=document.createElement(`div`),n,r,i;return t.className=`cm-line`,t.style.width=`99999px`,t.style.position=`absolute`,t.textContent=`abc def ghi jkl mno pqr stu`,this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let e=Wr(t.firstChild)[0];n=t.getBoundingClientRect().height,r=e&&e.width?e.width/27:7,i=e&&e.height?e.height:n,t.remove()}),{lineHeight:n,charWidth:r,textHeight:i}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,r=0;;r++){let i=r==t.viewports.length?null:t.viewports[r],a=i?i.from-1:this.view.state.doc.length;if(a>n){let r=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(Nr.replace({widget:new to(r),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!i)break;n=i.to+1}return Nr.set(e)}updateDeco(){let e=1,t=this.view.state.facet(aa).map(t=>(this.dynamicDecorationMap[e++]=typeof t==`function`)?t(this.view):t),n=!1,r=this.view.state.facet(sa).map((e,t)=>{let r=typeof e==`function`;return r&&(n=!0),r?e(this.view):e});for(r.length&&(this.dynamicDecorationMap[e++]=n,t.push(k.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(oa).map(e=>typeof e==`function`?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=t.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let t of this.view.state.facet(qi))try{if(t(this.view,e.range,e))return!0}catch(e){Zi(this.view.state,e,`scroll handler`)}let{range:t}=e,n=this.coordsAt(t.head,t.assoc||(t.head>t.anchor?-1:1)),r;if(!n)return;!t.empty&&(r=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,r.left),top:Math.min(n.top,r.top),right:Math.max(n.right,r.right),bottom:Math.max(n.bottom,r.bottom)});let i=fa(this.view),a={left:n.left-i.left,top:n.top-i.top,right:n.right+i.right,bottom:n.bottom+i.bottom},{offsetWidth:o,offsetHeight:s}=this.view.scrollDOM;if($r(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,o),-o),Math.max(Math.min(e.yMargin,s),-s),this.view.textDirection==j.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(t.head,1);if(e){let t=ni(e.dom);e.dom.scrollIntoView({block:`nearest`}),ri(t,!1)}}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){Wa(this.tile)}};function Wa(e,t){let n=t?.get(e);if(n!=1){n??e.destroy();for(let n of e.children)Wa(n,t)}}function Ga(e){return e.node.nodeType==1&&e.node.firstChild&&(e.offset==0||e.node.childNodes[e.offset-1].contentEditable==`false`)&&(e.offset==e.node.childNodes.length||e.node.childNodes[e.offset].contentEditable==`false`)}function Ka(e,t){let n=e.observer.selectionRange;if(!n.focusNode)return null;let r=fi(n.focusNode,n.focusOffset),i=pi(n.focusNode,n.focusOffset),a=r||i;if(i&&r&&i.node!=r.node){let t=N.get(i.node);if(!t||t.isText()&&t.text!=i.node.nodeValue)a=i;else if(e.docView.lastCompositionAfterCursor){let e=N.get(r.node);!e||e.isText()&&e.text!=r.node.nodeValue||(a=i)}}if(e.docView.lastCompositionAfterCursor=a!=r,!a)return null;let o=t-a.offset;return{from:o,to:o+a.node.nodeValue.length,node:a.node}}function qa(e,t,n){let r=Ka(e,n);if(!r)return null;let{node:i,from:a,to:o}=r,s=i.nodeValue;if(/[\n\r]/.test(s)||e.state.doc.sliceString(r.from,r.to)!=s)return null;let c=t.invertedDesc;return{range:new ma(c.mapPos(a),c.mapPos(o),a,o),text:i}}function Ja(e,t){return e.nodeType==1?(t&&e.childNodes[t-1].contentEditable==`false`?1:0)|(t<e.childNodes.length&&e.childNodes[t].contentEditable==`false`?2:0):0}var Ya=class{constructor(){this.changes=[]}compareRange(e,t){zr(e,t,this.changes)}comparePoint(e,t){zr(e,t,this.changes)}boundChange(e){zr(e,e,this.changes)}};function Xa(e,t,n){let r=new Ya;return k.compare(e,t,n,r),r.changes}var Za=class{constructor(){this.changes=[]}compareRange(e,t){zr(e,t,this.changes)}comparePoint(){}boundChange(e){zr(e,e,this.changes)}};function Qa(e,t,n){let r=new Za;return k.compare(e,t,n,r),r.changes}function $a(e,t){for(let n=e;n&&n!=t;n=n.assignedSlot||n.parentNode)if(n.nodeType==1&&n.contentEditable==`false`)return!0;return!1}function eo(e,t){let n=!1;return t&&e.iterChangedRanges((e,r)=>{e<t.to&&r>t.from&&(n=!0)}),n}var to=class extends jr{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement(`div`);return e.className=`cm-gap`,this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+`px`,!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}};function no(e,t,n=1){let r=e.charCategorizer(t),i=e.doc.lineAt(t),a=t-i.from;if(i.length==0)return T.cursor(t);a==0?n=1:a==i.length&&(n=-1);let o=a,s=a;n<0?o=Ot(i.text,a,!1):s=Ot(i.text,a);let c=r(i.text.slice(o,s));for(;o>0;){let e=Ot(i.text,o,!1);if(r(i.text.slice(e,o))!=c)break;o=e}for(;s<i.length;){let e=Ot(i.text,s);if(r(i.text.slice(s,e))!=c)break;s=e}return T.undirectionalRange(o+i.from,s+i.from)}function ro(e,t,n,r,i){let a=Math.round((r-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&n.height>e.defaultLineHeight*1.5){let t=e.viewState.heightOracle.textHeight,r=Math.floor((i-n.top-(e.defaultLineHeight-t)*.5)/t);a+=r*e.viewState.heightOracle.lineLength}let o=e.state.sliceDoc(n.from,n.to);return n.from+$n(o,a,e.state.tabSize)}function io(e,t,n){let r=e.lineBlockAt(t);if(Array.isArray(r.type)){let e;for(let i of r.type){if(i.from>t)break;if(!(i.to<t)){if(i.from<t&&i.to>t)return i;(!e||i.type==Mr.Text&&(e.type!=i.type||(n<0?i.from<t:i.to>t)))&&(e=i)}}return e||r}return r}function ao(e,t,n,r){let i=io(e,t.head,t.assoc||-1),a=!r||i.type!=Mr.Text||!(e.lineWrapping||i.widgetLineBreaks)?null:e.coordsAtPos(t.assoc<0&&t.head>i.from?t.head-1:t.head);if(a){let t=e.dom.getBoundingClientRect(),r=e.textDirectionAt(i.from),o=e.posAtCoords({x:n==(r==j.LTR)?t.right-1:t.left+1,y:(a.top+a.bottom)/2});if(o!=null)return T.cursor(o,n?-1:1)}return T.cursor(n?i.to:i.from,n?-1:1)}function oo(e,t,n,r){let i=e.state.doc.lineAt(t.head),a=e.bidiSpans(i),o=e.textDirectionAt(i.from);for(let s=t,c=null;;){let t=Pi(i,a,o,s,n),l=Ni;if(!t){if(i.number==(n?e.state.doc.lines:1))return s;l=`
`,i=e.state.doc.line(i.number+(n?1:-1)),a=e.bidiSpans(i),t=n?T.cursor(i.from,-1):T.cursor(i.to,1)}if(!c){if(!r)return t;c=r(l)}else if(!c(l))return s;s=t}}function so(e,t,n){let r=e.state.charCategorizer(t),i=r(n);return e=>{let t=r(e);return i==kn.Space&&(i=t),i==t}}function co(e,t,n,r){let i=t.head,a=n?1:-1;if(i==(n?e.state.doc.length:0))return T.cursor(i,t.assoc);let o=t.goalColumn,s,c=e.contentDOM.getBoundingClientRect(),l=e.coordsAtPos(i,t.assoc||((t.empty?n:t.head==t.from)?1:-1)),u=e.documentTop;if(l)o??=l.left-c.left,s=a<0?l.top:l.bottom;else{let t=e.viewState.lineBlockAt(i);o??=Math.min(c.right-c.left,e.defaultCharacterWidth*(i-t.from)),s=(a<0?t.top:t.bottom)+u}let d=c.left+o,f=e.viewState.heightOracle.textHeight>>1,p=r??f;for(let t=0;;t+=f){let r=s+(p+t)*a,i=mo(e,{x:d,y:r},!1,a);if(n?r>c.bottom:r<c.top)return T.cursor(i.pos,i.assoc);let l=e.coordsAtPos(i.pos,i.assoc),u=l?(l.top+l.bottom)/2:0;if(!l||(n?u>s:u<s))return T.cursor(i.pos,i.assoc,void 0,o)}}function lo(e,t,n){for(;;){let r=0;for(let i of e)i.between(t-1,t+1,(e,i,a)=>{if(t>e&&t<i){let a=r||n||(t-e<i-t?-1:1);t=a<0?e:i,r=a}});if(!r)return t}}function uo(e,t){let n=null;for(let r=0;r<t.ranges.length;r++){let i=t.ranges[r],a=null;if(i.empty){let t=lo(e,i.from,0);t!=i.from&&(a=T.cursor(t,-1))}else{let t=lo(e,i.from,-1),n=lo(e,i.to,1);(t!=i.from||n!=i.to)&&(a=i.undirectional?T.undirectionalRange(i.from,i.to):T.range(i.from==i.anchor?t:n,i.from==i.head?t:n))}a&&(n||=t.ranges.slice(),n[r]=a)}return n?T.create(n,t.mainIndex):t}function fo(e,t,n){let r=lo(e.state.facet(ca).map(t=>t(e)),n.from,t.head>n.from?-1:1);return r==n.from?n:T.cursor(r,r<n.from?1:-1)}var po=class{constructor(e,t){this.pos=e,this.assoc=t}};function mo(e,t,n,r){let i=e.contentDOM.getBoundingClientRect(),a=i.top+e.viewState.paddingTop,{x:o,y:s}=t,c=s-a,l;for(;;){if(c<0)return new po(0,1);if(c>e.viewState.docHeight)return new po(e.state.doc.length,-1);if(l=e.elementAtHeight(c),r==null)break;if(l.type==Mr.Text){if(r<0?l.to<e.viewport.from:l.from>e.viewport.to)break;let t=e.docView.coordsAt(r<0?l.from:l.to,r>0?-1:1);if(t&&(r<0?t.top<=c+a:t.bottom>=c+a))break}let t=e.viewState.heightOracle.textHeight/2;c=r>0?l.bottom+t:l.top-t}if(e.viewport.from>=l.to||e.viewport.to<=l.from){if(n)return null;if(l.type==Mr.Text){let t=ro(e,i,l,o,s);return new po(t,t==l.from?1:-1)}}if(l.type!=Mr.Text)return c<(l.top+l.bottom)/2?new po(l.from,1):new po(l.to,-1);let u=e.docView.lineAt(l.from,2);return(!u||u.length!=l.length)&&(u=e.docView.lineAt(l.from,-2)),new ho(e,o,s,e.textDirectionAt(l.from)).scanTile(u,l.from)}var ho=class{constructor(e,t,n,r){this.view=e,this.x=t,this.y=n,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[wi.find(r,e-n.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[wi.find(r,e-n.from,-1,t)].dir}bidiIn(e,t){let{spans:n,line:r}=this.bidiSpansAt(e);return n.length>1||n.length&&(n[0].level!=this.baseDir||n[0].to+r.from<t)}scan(e,t,n=!1){let r=0,i=e.length-1,a=new Set,o=this.bidiIn(e[0],e[i]),s,c,l=-1,u=1e9,d;search:for(;r<i;){let n=i-r,f=r+i>>1;adjust:if(a.has(f)){for(let e=1;e<n;e++){let t=f+e;if(t>=i&&(t-=n),!a.has(t)){f=t;break adjust}}break search}a.add(f);let p=t(f),m=0;if(p)for(let e=0;e<p.length;e++){let t=p[e];if(!(t.width==0&&p.length>1)){if(t.bottom<this.y)(!s||s.bottom<t.bottom)&&(s=t),m=1;else if(t.top>this.y)(!c||c.top>t.top)&&(c=t),m=-1;else{let e=t.left>this.x?this.x-t.left:t.right<this.x?this.x-t.right:0,n=Math.abs(e);n<u&&(l=f,u=n,d=t),e&&(m=e<0==(this.baseDir==j.LTR)?-1:1)}}}m==-1&&(!o||this.baseDirAt(e[f],1))?i=f:m==1&&(!o||this.baseDirAt(e[f+1],-1))&&(r=f+1)}if(!d){if(!c&&!s)return{i:0,after:!1};let n=s&&(!c||this.y-s.bottom<c.top-this.y)?s:c;return this.y=(n.top+n.bottom)/2,this.scan(e,t,!0)}if(u&&!n){let{top:n,bottom:r}=d;if(s&&s.bottom>(n+n+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(c&&c.top<(n+r+r)/3)return this.y=c.top+1,this.scan(e,t,!0)}let f=(o?this.dirAt(e[l],1):this.baseDir)==j.LTR;return{i:l,after:this.x>(d.left+d.right)/2==f}}scanText(e,t){let n=[];for(let r=0;r<e.length;r=Ot(e.text,r))n.push(t+r);n.push(t+e.length);let r=this.scan(n,r=>{let i=n[r]-t,a=n[r+1]-t;return si(e.dom,i,a).getClientRects()});return r.after?new po(n[r.i+1],-1):new po(n[r.i],1)}scanTile(e,t){if(!e.length)return new po(t,1);if(e.children.length==1){let n=e.children[0];if(n.isText())return this.scanText(n,t);if(n.isComposite())return this.scanTile(n,t)}let n=[t];for(let r=0,i=t;r<e.children.length;r++)n.push(i+=e.children[r].length);let r=this.scan(n,t=>{let n=e.children[t];return n.flags&48?null:(n.dom.nodeType==1?n.dom:si(n.dom,0,n.length)).getClientRects()}),i=e.children[r.i],a=n[r.i];return i.isText()?this.scanText(i,a):i.isComposite()?this.scanTile(i,a):r.after?new po(n[r.i+1],-1):new po(a,1)}},go=`￿`,_o=class{constructor(e,t){this.points=e,this.view=t,this.text=``,this.lineSeparator=t.state.facet(O.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=go}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let r=e;;){this.findPointBefore(n,r);let e=this.text.length;this.readNode(r);let i=N.get(r),a=r.nextSibling;if(a==t){i?.breakAfter&&!a&&n!=this.view.contentDOM&&this.lineBreak();break}let o=N.get(a);(i&&o?i.breakAfter:(i?i.breakAfter:qr(r))||qr(a)&&(r.nodeName!=`BR`||i?.isWidget())&&this.text.length>e)&&!yo(a,t)&&this.lineBreak(),r=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let i=-1,a=1,o;if(this.lineSeparator?(i=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(o=r.exec(t))&&(i=o.index,a=o[0].length),this.append(t.slice(n,i<0?t.length:i)),i<0)break;if(this.lineBreak(),a>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=a-1);n=i+a}}readNode(e){let t=N.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let e=n.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName==`BR`?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(vo(e,n.node,n.offset)?t:0))}};function vo(e,t,n){for(;;){if(!t||n<Yr(t))return!1;if(t==e)return!0;n=Kr(t)+1,t=t.parentNode}}function yo(e,t){let n;for(;e!=t&&e;e=e.nextSibling){let t=N.get(e);if(!t?.isWidget())return!1;t&&(n||=[]).push(t)}if(n){for(let e of n)if(e.overrideDOMText?.length)return!1}return!0}var bo=class{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}},xo=class{constructor(e,t,n,r){this.typeOver=r,this.bounds=null,this.text=``,this.domChanged=t>-1;let{impreciseHead:i,impreciseAnchor:a}=e.docView,o=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=So(e.docView.tile,t,n,0))){let t=i||a?[]:Do(e),n=new _o(t,e);n.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=n.text,this.newSel=Oo(t,this.bounds.from)}else{let t=e.observer.selectionRange,n=i&&i.node==t.focusNode&&i.offset==t.focusOffset||!Hr(e.contentDOM,t.focusNode)?o.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),r=a&&a.node==t.anchorNode&&a.offset==t.anchorOffset||!Hr(e.contentDOM,t.anchorNode)?o.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),s=e.viewport;if((A.ios||A.chrome)&&n!=r&&Math.min(n,r)<=o.main.from&&Math.max(n,r)>=o.main.to&&(s.from>0||s.to<e.state.doc.length)){let t=Math.min(n,r),i=Math.max(n,r),a=s.from-t,o=s.to-i;(a==0||a==1||t==0)&&(o==0||o==-1||i==e.state.doc.length)&&(n=0,r=e.state.doc.length)}if(e.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(T.range(r,n));else if(e.lineWrapping&&r==n&&!(o.main.empty&&o.main.head==n)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(n,-1),r=0;t&&(r=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=T.create([T.cursor(n,r)])}else this.newSel=T.single(r,n)}}};function So(e,t,n,r){if(e.isComposite()){let i=-1,a=-1,o=-1,s=-1;for(let c=0,l=r,u=r;c<e.children.length;c++){let r=e.children[c],d=l+r.length;if(l<t&&d>n)return So(r,t,n,l);if(d>=t&&i==-1&&(i=c,a=l),l>n&&r.dom.parentNode==e.dom){o=c,s=u;break}u=d,l=d+r.breakAfter}return{from:a,to:s<0?r+e.length:s,startDOM:(i?e.children[i-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:o<e.children.length&&o>=0?e.children[o].dom:null}}return e.isText()?{from:r,to:r+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling}:null}function Co(e,t){let n,{newSel:r}=t,{state:i}=e,a=i.selection.main,o=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:r}=t.bounds,s=a.from,c=null;(o===8||A.android&&t.text.length<r-e)&&(s=a.to,c=`end`);let l=i.doc.sliceString(e,r,go),u,d;!a.empty&&a.from>=e&&a.to<=r&&(t.typeOver||l!=t.text)&&l.slice(0,a.from-e)==t.text.slice(0,a.from-e)&&l.slice(a.to-e)==t.text.slice(u=t.text.length-(l.length-(a.to-e)))?n={from:a.from,to:a.to,insert:w.of(t.text.slice(a.from-e,u).split(go))}:(d=Eo(l,t.text,s-e,c))&&(A.chrome&&o==13&&d.toB==d.from+2&&t.text.slice(d.from,d.toB)==`￿￿`&&d.toB--,n={from:e+d.from,to:e+d.toA,insert:w.of(t.text.slice(d.from,d.toB).split(go))})}else r&&(!e.hasFocus&&i.facet(Qi)||ko(r,a))&&(r=null);if(!n&&!r)return!1;if((A.mac||A.android)&&n&&n.from==n.to&&n.from==a.head-1&&/^\. ?$/.test(n.insert.toString())&&e.contentDOM.getAttribute(`autocorrect`)==`off`?(r&&n.insert.length==2&&(r=T.single(r.main.anchor-1,r.main.head-1)),n={from:n.from,to:n.to,insert:w.of([n.insert.toString().replace(`.`,` `)])}):i.doc.lineAt(a.from).to<a.to&&e.docView.lineHasWidget(a.to)&&e.inputState.insertingTextAt>Date.now()-50?n={from:a.from,to:a.to,insert:i.toText(e.inputState.insertingText)}:A.chrome&&n&&n.from==n.to&&n.from==a.head&&n.insert.toString()==`
 `&&e.lineWrapping&&(r&&=T.single(r.main.anchor-1,r.main.head-1),n={from:a.from,to:a.to,insert:w.of([` `])}),n)return wo(e,n,r,o);if(r&&!ko(r,a)){let t=!1,n=`select`;return e.inputState.lastSelectionTime>Date.now()-50&&(e.inputState.lastSelectionOrigin==`select`&&(t=!0),n=e.inputState.lastSelectionOrigin,n==`select.pointer`&&(r=uo(i.facet(ca).map(t=>t(e)),r))),e.dispatch({selection:r,scrollIntoView:t,userEvent:n}),!0}return!1}function wo(e,t,n,r=-1){if(A.ios&&e.inputState.flushIOSKey(t))return!0;let i=e.state.selection.main;if(A.android&&(t.to==i.to&&(t.from==i.from||t.from==i.from-1&&e.state.sliceDoc(t.from,i.from)==` `)&&t.insert.length==1&&t.insert.lines==2&&ci(e.contentDOM,`Enter`,13)||(t.from==i.from-1&&t.to==i.to&&t.insert.length==0||r==8&&t.insert.length<t.to-t.from&&t.to>i.head)&&ci(e.contentDOM,`Backspace`,8)||t.from==i.from&&t.to==i.to+1&&t.insert.length==0&&ci(e.contentDOM,`Delete`,46)))return!0;let a=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let o,s=()=>o||=To(e,t,n);return e.state.facet(Vi).some(n=>n(e,t.from,t.to,a,s))||e.dispatch(s()),!0}function To(e,t,n){let r,i=e.state,a=i.selection.main,o=-1;if(t.from==t.to&&t.from<a.from||t.from>a.to){let n=t.from<a.from?-1:1,r=n<0?a.from:a.to,s=lo(i.facet(ca).map(t=>t(e)),r,n);t.from==s&&(o=s)}if(o>-1)r={changes:t,selection:T.cursor(t.from+t.insert.length,-1)};else if(t.from>=a.from&&t.to<=a.to&&t.to-t.from>=(a.to-a.from)/3&&(!n||n.main.empty&&n.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let n=a.from<t.from?i.sliceDoc(a.from,t.from):``,o=a.to>t.to?i.sliceDoc(t.to,a.to):``;r=i.replaceSelection(e.state.toText(n+t.insert.sliceString(0,void 0,e.state.lineBreak)+o))}else{let o=i.changes(t),s=n&&n.main.to<=o.newLength?n.main:void 0;if(i.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=a.to+10&&t.to>=a.to-10){let c=e.state.sliceDoc(t.from,t.to),l,u=n&&Ka(e,n.main.head);if(u){let e=t.insert.length-(t.to-t.from);l={from:u.from,to:u.to-e}}else l=e.state.doc.lineAt(a.head);let d=a.to-t.to;r=i.changeByRange(n=>{if(n.from==a.from&&n.to==a.to)return{changes:o,range:s||n.map(o)};let r=n.to-d,u=r-c.length;if(e.state.sliceDoc(u,r)!=c||r>=l.from&&u<=l.to)return{range:n};let f=i.changes({from:u,to:r,insert:t.insert}),p=n.to-a.to;return{changes:f,range:s?T.range(Math.max(0,s.anchor+p),Math.max(0,s.head+p)):n.map(f)}})}else r={changes:o,selection:s&&i.selection.replaceRange(s)}}let s=`input.type`;return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,s+=`.compose`,e.inputState.compositionFirstChange&&(s+=`.start`,e.inputState.compositionFirstChange=!1)),i.update(r,{userEvent:s,scrollIntoView:!0})}function Eo(e,t,n,r){let i=Math.min(e.length,t.length),a=0;for(;a<i&&e.charCodeAt(a)==t.charCodeAt(a);)a++;if(a==i&&e.length==t.length)return null;let o=e.length,s=t.length;for(;o>0&&s>0&&e.charCodeAt(o-1)==t.charCodeAt(s-1);)o--,s--;if(r==`end`){let e=Math.max(0,a-Math.min(o,s));n-=o+e-a}if(o<a&&e.length<t.length){let e=n<=a&&n>=o?a-n:0;a-=e,s=a+(s-o),o=a}else if(s<a){let e=n<=a&&n>=s?a-n:0;a-=e,o=a+(o-s),s=a}return{from:a,toA:o,toB:s}}function Do(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}=e.observer.selectionRange;return n&&(t.push(new bo(n,r)),(i!=n||a!=r)&&t.push(new bo(i,a))),t}function Oo(e,t){if(e.length==0)return null;let n=e[0].pos,r=e.length==2?e[1].pos:n;return n<0||r<0?null:n==r?T.create([T.cursor(r+t,-1)]):T.single(n+t,r+t)}function ko(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}var Ao=class{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText=``,this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,A.safari&&e.contentDOM.addEventListener(`input`,()=>null),A.gecko&&ps(e.contentDOM.ownerDocument)}handleEvent(e){Wo(this.view,e)&&!this.ignoreDuringComposition(e)&&(e.type==`keydown`&&this.keydown(e)||(this.view.updateState==0?this.runHandlers(e.type,e):Promise.resolve().then(()=>this.runHandlers(e.type,e))))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let e of n.observers)e(this.view,t);for(let e of n.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=No(e),n=this.handlers,r=this.view.contentDOM;for(let e in t)if(e!=`scroll`){let i=!t[e].handlers.length,a=n[e];a&&i!=!a.handlers.length&&(r.removeEventListener(e,this.handleEvent),a=null),a||r.addEventListener(e,this.handleEvent,{passive:i})}for(let e in n)e!=`scroll`&&!t[e]&&r.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Io.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),A.android&&A.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(A.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(Po.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||Fo.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};t.shiftKey&&A.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&jo(this.view.win)&&(t.shiftKey=!1);let n=this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t};return setTimeout(()=>{this.pendingIOSKey==n&&this.flushIOSKey()},50),!0}return e.keyCode!=229&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!t||this.view.observer.pendingRecords().length||t.key==`Enter`&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,ci(this.view.contentDOM,t.key,t.keyCode,t.mods))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:A.safari&&!A.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}};function jo(e){return e.visualViewport?e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85:!1}function Mo(e,t){return(n,r)=>{try{return t.call(e,r,n)}catch(e){Zi(n.state,e)}}}function No(e){let t=Object.create(null);function n(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,r=e&&e.plugin.domEventHandlers,i=e&&e.plugin.domEventObservers;if(r)for(let e in r){let i=r[e];i&&n(e).handlers.push(Mo(t.value,i))}if(i)for(let e in i){let r=i[e];r&&n(e).observers.push(Mo(t.value,r))}}for(let e in Go)n(e).handlers.push(Go[e]);for(let e in Ko)n(e).observers.push(Ko[e]);return t}var Po=[{key:`Backspace`,keyCode:8,inputType:`deleteContentBackward`},{key:`Enter`,keyCode:13,inputType:`insertParagraph`},{key:`Enter`,keyCode:13,inputType:`insertLineBreak`},{key:`Delete`,keyCode:46,inputType:`deleteContentForward`}],Fo=`dthko`,Io=[16,17,18,20,91,92,224,225],Lo=6;function Ro(e){return Math.max(0,e)*.7+8}function zo(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}var Bo=class{constructor(e,t,n,r){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=ei(e.contentDOM),this.atoms=e.state.facet(ca).map(t=>t(e));let i=e.contentDOM.ownerDocument;i.addEventListener(`mousemove`,this.move=this.move.bind(this)),i.addEventListener(`mouseup`,this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(O.allowMultipleSelections)&&Vo(e,t),this.dragging=Uo(e,t)&&ns(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&zo(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,r=0,i=0,a=this.view.win.innerWidth,o=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:i,bottom:o}=this.scrollParents.y.getBoundingClientRect());let s=fa(this.view);e.clientX-s.left<=r+Lo?t=-Ro(r-e.clientX):e.clientX+s.right>=a-Lo&&(t=Ro(e.clientX-a)),e.clientY-s.top<=i+Lo?n=-Ro(i-e.clientY):e.clientY+s.bottom>=o-Lo&&(n=Ro(e.clientY-o)),this.setScrollSpeed(t,n)}up(e){this.dragging??this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener(`mousemove`,this.move),e.removeEventListener(`mouseup`,this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=uo(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:`select.pointer`}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent(`input.type`))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}};function Vo(e,t){let n=e.state.facet(Ii);return n.length?n[0](t):A.mac?t.metaKey:t.ctrlKey}function Ho(e,t){let n=e.state.facet(Li);return n.length?n[0](t):A.mac?!t.altKey:!t.ctrlKey}function Uo(e,t){let{main:n}=e.state.selection;if(n.empty)return!1;let r=Vr(e.root);if(!r||r.rangeCount==0)return!0;let i=r.getRangeAt(0).getClientRects();for(let e=0;e<i.length;e++){let n=i[e];if(n.left<=t.clientX&&n.right>=t.clientX&&n.top<=t.clientY&&n.bottom>=t.clientY)return!0}return!1}function Wo(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target,r;n!=e.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(r=N.get(n))&&r.isWidget()&&!r.isHidden&&r.widget.ignoreEvent(t))return!1;return!0}var Go=Object.create(null),Ko=Object.create(null),qo=A.ie&&A.ie_version<15||A.ios&&A.webkit_version<604;function Jo(e){let t=e.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement(`textarea`));n.style.cssText=`position: fixed; left: -10000px; top: 10px`,n.focus(),setTimeout(()=>{e.focus(),n.remove(),Xo(e,n.value)},50)}function Yo(e,t,n){for(let r of e.facet(t))n=r(n,e);return n}function Xo(e,t){t=Yo(e.state,Ui,t);let{state:n}=e,r,i=1,a=n.toText(t),o=a.lines==n.selection.ranges.length;if(cs!=null&&n.selection.ranges.every(e=>e.empty)&&cs==a.toString()){let e=-1;r=n.changeByRange(r=>{let s=n.doc.lineAt(r.from);if(s.from==e)return{range:r};e=s.from;let c=n.toText((o?a.line(i++).text:t)+n.lineBreak);return{changes:{from:s.from,insert:c},range:T.cursor(r.from+c.length,-1)}})}else r=o?n.changeByRange(e=>{let t=a.line(i++);return{changes:{from:e.from,to:e.to,insert:t.text},range:T.cursor(e.from+t.length,-1)}}):n.replaceSelection(a);e.dispatch(r,{userEvent:`input.paste`,scrollIntoView:!0})}Ko.scroll=e=>{let t=e.inputState;t.lastScrollTop=e.scrollDOM.scrollTop,t.lastScrollLeft=e.scrollDOM.scrollLeft,A.ios&&!t.touchActive&&(t.lastIOSMomentumScroll=Date.now())},Ko.wheel=Ko.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},Go.keydown=(e,t)=>(e.inputState.setSelectionOrigin(`select`),t.keyCode==27&&e.inputState.tabFocusMode!=0&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),Ko.touchstart=(e,t)=>{let n=e.inputState,r=t.targetTouches[0];n.touchActive=!0,n.lastTouchTime=Date.now(),r&&(n.lastTouchX=r.clientX,n.lastTouchY=r.clientY),n.setSelectionOrigin(`select.pointer`)},Ko.touchmove=e=>{e.inputState.setSelectionOrigin(`select.pointer`)},Ko.touchend=(e,t)=>{e.inputState.touchActive=!1},Go.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let r of e.state.facet(Ri))if(n=r(e,t),n)break;if(!n&&t.button==0&&(n=rs(e,t)),n){let r=!e.hasFocus;e.inputState.startMouseSelection(new Bo(e,t,n,r)),r&&e.observer.ignore(()=>{ai(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let i=e.inputState.mouseSelection;if(i)return i.start(t),i.dragging===!1}else e.inputState.setSelectionOrigin(`select.pointer`);return!1};function Zo(e,t,n,r){if(r==1)return T.cursor(t,n);if(r==2)return no(e.state,t,n);{let r=e.docView.lineAt(t,n),i=e.state.doc.lineAt(r?r.posAtEnd:t),a=r?r.posAtStart:i.from,o=r?r.posAtEnd:i.to;return o<e.state.doc.length&&o==i.to&&o++,T.undirectionalRange(a,o)}}var Qo=A.ie&&A.ie_version<=11,$o=null,es=0,ts=0;function ns(e){if(!Qo)return e.detail;let t=$o,n=ts;return $o=e,ts=Date.now(),es=!t||n>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(es+1)%3:1}function rs(e,t){let n=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),r=ns(t),i=e.state.selection;return{update(e){e.docChanged&&(n.pos=e.changes.mapPos(n.pos),i=i.map(e.changes))},get(t,a,o){let s=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),c,l=Zo(e,s.pos,s.assoc,r);if(n.pos!=s.pos&&!a){let t=Zo(e,n.pos,n.assoc,r),i=Math.min(t.from,l.from),a=Math.max(t.to,l.to);l=i<l.from?T.range(i,a,l.assoc):T.range(a,i,l.assoc)}return a?i.replaceRange(i.main.extend(l.from,l.to,l.assoc)):o&&r==1&&i.ranges.length>1&&(c=is(i,s.pos))?c:o?i.addRange(l):T.create([l])}}}function is(e,t){for(let n=0;n<e.ranges.length;n++){let{from:r,to:i}=e.ranges[n];if(r<=t&&i>=t)return T.create(e.ranges.slice(0,n).concat(e.ranges.slice(n+1)),e.mainIndex==n?0:e.mainIndex-+(e.mainIndex>n))}return null}Go.dragstart=(e,t)=>{let{selection:{main:n}}=e.state;if(t.target.draggable){let r=e.docView.tile.nearest(t.target);if(r&&r.isWidget()){let e=r.posAtStart,t=e+r.length;(e>=n.to||t<=n.from)&&(n=T.undirectionalRange(e,t))}}let{inputState:r}=e;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=n,t.dataTransfer&&(t.dataTransfer.setData(`Text`,Yo(e.state,Wi,e.state.sliceDoc(n.from,n.to))),t.dataTransfer.effectAllowed=`copyMove`),!1},Go.dragend=e=>(e.inputState.draggedContent=null,!1);function as(e,t,n,r){if(n=Yo(e.state,Ui,n),!n)return;let i=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:a}=e.inputState,o=r&&a&&Ho(e,t)?{from:a.from,to:a.to}:null,s={from:i,insert:n},c=e.state.changes(o?[o,s]:s);e.focus(),e.dispatch({changes:c,selection:{anchor:c.mapPos(i,-1),head:c.mapPos(i,1)},userEvent:o?`move.drop`:`input.drop`}),e.inputState.draggedContent=null}Go.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let n=t.dataTransfer.files;if(n&&n.length){let r=Array(n.length),i=0,a=()=>{++i==n.length&&as(e,t,r.filter(e=>e!=null).join(e.state.lineBreak),!1)};for(let e=0;e<n.length;e++){let t=new FileReader;t.onerror=a,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(r[e]=t.result),a()},t.readAsText(n[e])}return!0}{let n=t.dataTransfer.getData(`Text`);if(n)return as(e,t,n,!0),!0}return!1},Go.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let n=qo?null:t.clipboardData;return n?(Xo(e,n.getData(`text/plain`)||n.getData(`text/uri-list`)),!0):(Jo(e),!1)};function os(e,t){let n=e.dom.parentNode;if(!n)return;let r=n.appendChild(document.createElement(`textarea`));r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.value=t,r.focus(),r.selectionEnd=t.length,r.selectionStart=0,setTimeout(()=>{r.remove(),e.focus()},50)}function ss(e){let t=[],n=[],r=!1;for(let r of e.selection.ranges)r.empty||(t.push(e.sliceDoc(r.from,r.to)),n.push(r));if(!t.length){let i=-1;for(let{from:r}of e.selection.ranges){let a=e.doc.lineAt(r);a.number>i&&(t.push(a.text),n.push({from:a.from,to:Math.min(e.doc.length,a.to+1)})),i=a.number}r=!0}return{text:Yo(e,Wi,t.join(e.lineBreak)),ranges:n,linewise:r}}var cs=null;Go.copy=Go.cut=(e,t)=>{if(!Ur(e.contentDOM,e.observer.selectionRange))return!1;let{text:n,ranges:r,linewise:i}=ss(e.state);if(!n&&!i)return!1;cs=i?n:null,t.type==`cut`&&!e.state.readOnly&&e.dispatch({changes:r,scrollIntoView:!0,userEvent:`delete.cut`});let a=qo?null:t.clipboardData;return a?(a.clearData(),a.setData(`text/plain`,n),!0):(os(e,n),!1)};var ls=_n.define();function us(e,t){let n=[];for(let r of e.facet(Hi)){let i=r(e,t);i&&n.push(i)}return n.length?e.update({effects:n,annotations:ls.of(!0)}):null}function ds(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let n=us(e.state,t);n?e.dispatch(n):e.update([])}},10)}Ko.focus=e=>{e.inputState.lastFocusTime=Date.now(),!e.scrollDOM.scrollTop&&(e.inputState.lastScrollTop||e.inputState.lastScrollLeft)&&(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),ds(e)},Ko.blur=e=>{e.observer.clearSelectionRange(),ds(e)},Ko.compositionstart=Ko.compositionupdate=e=>{if(!e.observer.editContext&&(e.inputState.compositionFirstChange??(e.inputState.compositionFirstChange=!0),e.inputState.composing<0)){let{main:t}=e.state.selection;!t.empty&&e.lineBlockAt(t.from).from!=e.lineBlockAt(t.to).from&&e.dispatch({changes:e.state.selection.ranges.filter(e=>!e.empty).map(e=>({from:e.from,to:e.to})),userEvent:`input`}),e.inputState.composing=0}},Ko.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,A.chrome&&A.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},Ko.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},Go.beforeinput=(e,t)=>{if((t.inputType==`insertText`||t.inputType==`insertCompositionText`)&&(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),t.inputType==`insertReplacementText`&&e.observer.editContext){let n=t.dataTransfer?.getData(`text/plain`),r=t.getTargetRanges();if(n&&r.length){let t=r[0];return wo(e,{from:e.posAtDOM(t.startContainer,t.startOffset),to:e.posAtDOM(t.endContainer,t.endOffset),insert:e.state.toText(n)},null),!0}}let n;if(A.chrome&&A.android&&(n=Po.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),n.key==`Backspace`||n.key==`Delete`)){let t=window.visualViewport?.height||0;setTimeout(()=>{(window.visualViewport?.height||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return A.ios&&t.inputType==`deleteContentForward`&&e.observer.flushSoon(),A.safari&&t.inputType==`insertText`&&e.inputState.composing>=0&&setTimeout(()=>Ko.compositionend(e,t),20),!1};var fs=new Set;function ps(e){fs.has(e)||(fs.add(e),e.addEventListener(`copy`,()=>{}),e.addEventListener(`cut`,()=>{}))}var ms=[`pre-wrap`,`normal`,`pre-line`,`break-spaces`],hs=!1;function gs(){hs=!1}var _s=class{constructor(e){this.lineWrapping=e,this.doc=w.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return ms.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];r<0?n++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,n,r,i,a){let o=ms.indexOf(e)>-1,s=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=o;if(this.lineWrapping=o,this.lineHeight=t,this.charWidth=n,this.textHeight=r,this.lineLength=i,s){this.heightSamples={};for(let e=0;e<a.length;e++){let t=a[e];t<0?e++:this.heightSamples[Math.floor(t*10)]=!0}}return s}},vs=class{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}},ys=class e{constructor(e,t,n,r,i){this.from=e,this.length=t,this.top=n,this.height=r,this._content=i}get type(){return typeof this._content==`number`?Mr.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof Ir?this._content.widget:null}get widgetLineBreaks(){return typeof this._content==`number`?this._content:0}join(t){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t]);return new e(this.from,this.length+t.length,this.top,this.height+t.height,n)}},P=(function(e){return e[e.ByPos=0]=`ByPos`,e[e.ByHeight=1]=`ByHeight`,e[e.ByPosNoHeight=2]=`ByPosNoHeight`,e})(P||={}),bs=.001,xs=class e{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>bs&&(hs=!0),this.height=e)}replace(t,n,r){return e.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,r){let i=this,a=n.doc;for(let o=r.length-1;o>=0;o--){let{fromA:s,toA:c,fromB:l,toB:u}=r[o],d=i.lineAt(s,P.ByPosNoHeight,n.setDoc(t),0,0),f=d.to>=c?d:i.lineAt(c,P.ByPosNoHeight,n,0,0);for(u+=f.to-c,c=f.to;o>0&&d.from<=r[o-1].toA;)s=r[o-1].fromA,l=r[o-1].fromB,o--,s<d.from&&(d=i.lineAt(s,P.ByPosNoHeight,n,0,0));l+=d.from-s,s=d.from;let p=As.build(n.setDoc(a),e,l,u);i=Ss(i,i.replace(s,c,p))}return i.updateHeight(n,0)}static empty(){return new Ts(0,0,0)}static of(t){if(t.length==1)return t[0];let n=0,r=t.length,i=0,a=0;for(;;)if(n==r){if(i>a*2){let e=t[n-1];e.break?t.splice(--n,1,e.left,null,e.right):t.splice(--n,1,e.left,e.right),r+=1+e.break,i-=e.size}else if(a>i*2){let e=t[r];e.break?t.splice(r,1,e.left,null,e.right):t.splice(r,1,e.left,e.right),r+=2+e.break,a-=e.size}else break}else if(i<a){let e=t[n++];e&&(i+=e.size)}else{let e=t[--r];e&&(a+=e.size)}let o=!1;return t[n-1]==null?(o=!0,n--):t[n]??(o=!0,r++),new Ds(e.of(t.slice(0,n)),o,e.of(t.slice(r)))}};function Ss(e,t){return e==t?e:(e.constructor!=t.constructor&&(hs=!0),t)}xs.prototype.size=1;var Cs=Nr.replace({}),ws=class extends xs{constructor(e,t,n){super(e,t),this.deco=n,this.spaceAbove=0}mainBlock(e,t){return new ys(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,n,r){return this.spaceAbove&&e<n+this.spaceAbove?new ys(r,0,n,this.spaceAbove,Cs):this.mainBlock(n,r)}lineAt(e,t,n,r,i){let a=this.mainBlock(r,i);return this.spaceAbove?this.blockAt(0,n,r,i).join(a):a}forEachLine(e,t,n,r,i,a){e<=i+this.length&&t>=i&&a(this.lineAt(0,P.ByPos,n,r,i))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}},Ts=class e extends ws{constructor(e,t,n){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=n}mainBlock(e,t){return new ys(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,n,r){let i=r[0];return r.length==1&&(i instanceof e||i instanceof Es&&i.flags&4)&&Math.abs(this.length-i.length)<10?(i instanceof Es?i=new e(i.length,this.height,this.spaceAbove):i.height=this.height,this.outdated||(i.outdated=!1),i):xs.of(r)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(n||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:``}${this.widgetHeight?`:`+this.widgetHeight:``})`}},Es=class e extends xs{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,i=r-n+1,a,o=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*i);a=t/i,this.length>i+1&&(o=(this.height-t)/(this.length-i-1))}else a=this.height/i;return{firstLine:n,lastLine:r,perLine:a,perChar:o}}blockAt(e,t,n,r){let{firstLine:i,lastLine:a,perLine:o,perChar:s}=this.heightMetrics(t,r);if(t.lineWrapping){let i=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),a=t.doc.lineAt(i),c=o+a.length*s,l=Math.max(n,e-c/2);return new ys(a.from,a.length,l,c,0)}{let r=Math.max(0,Math.min(a-i,Math.floor((e-n)/o))),{from:s,length:c}=t.doc.line(i+r);return new ys(s,c,n+o*r,o,0)}}lineAt(e,t,n,r,i){if(t==P.ByHeight)return this.blockAt(e,n,r,i);if(t==P.ByPosNoHeight){let{from:t,to:r}=n.doc.lineAt(e);return new ys(t,r-t,0,0,0)}let{firstLine:a,perLine:o,perChar:s}=this.heightMetrics(n,i),c=n.doc.lineAt(e),l=o+c.length*s,u=c.number-a,d=r+o*u+s*(c.from-i-u);return new ys(c.from,c.length,Math.max(r,Math.min(d,r+this.height-l)),l,0)}forEachLine(e,t,n,r,i,a){e=Math.max(e,i),t=Math.min(t,i+this.length);let{firstLine:o,perLine:s,perChar:c}=this.heightMetrics(n,i);for(let l=e,u=r;l<=t;){let t=n.doc.lineAt(l);if(l==e){let n=t.number-o;u+=s*n+c*(e-i-n)}let r=s+c*t.length;a(new ys(t.from,t.length,u,r,0)),u+=r,l=t.to+1}}replace(t,n,r){let i=this.length-n;if(i>0){let t=r[r.length-1];t instanceof e?r[r.length-1]=new e(t.length+i):r.push(null,new e(i-1))}if(t>0){let n=r[0];n instanceof e?r[0]=new e(t+n.length):r.unshift(new e(t-1),null)}return xs.of(r)}decomposeLeft(t,n){n.push(new e(t-1),null)}decomposeRight(t,n){n.push(null,new e(this.length-t-1))}updateHeight(t,n=0,r=!1,i){let a=n+this.length;if(i&&i.from<=n+this.length&&i.more){let r=[],o=Math.max(n,i.from),s=-1;for(i.from>n&&r.push(new e(i.from-n-1).updateHeight(t,n));o<=a&&i.more;){let e=t.doc.lineAt(o).length;r.length&&r.push(null);let n=i.heights[i.index++],a=0;n<0&&(a=-n,n=i.heights[i.index++]),s==-1?s=n:Math.abs(n-s)>=bs&&(s=-2);let c=new Ts(e,n,a);c.outdated=!1,r.push(c),o+=e+1}o<=a&&r.push(null,new e(a-o).updateHeight(t,o));let c=xs.of(r);return(s<0||Math.abs(c.height-this.height)>=bs||Math.abs(s-this.heightMetrics(t,n).perLine)>=bs)&&(hs=!0),Ss(this,c)}return(r||this.outdated)&&(this.setHeight(t.heightForGap(n,n+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}},Ds=class extends xs{constructor(e,t,n){super(e.length+ +!!t+n.length,e.height+n.height,+!!t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,r){let i=n+this.left.height;return e<i?this.left.blockAt(e,t,n,r):this.right.blockAt(e,t,i,r+this.left.length+this.break)}lineAt(e,t,n,r,i){let a=r+this.left.height,o=i+this.left.length+this.break,s=t==P.ByHeight?e<a:e<o,c=s?this.left.lineAt(e,t,n,r,i):this.right.lineAt(e,t,n,a,o);if(this.break||(s?c.to<o:c.from>o))return c;let l=t==P.ByPosNoHeight?P.ByPosNoHeight:P.ByPos;return s?c.join(this.right.lineAt(o,l,n,a,o)):this.left.lineAt(o,l,n,r,i).join(c)}forEachLine(e,t,n,r,i,a){let o=r+this.left.height,s=i+this.left.length+this.break;if(this.break)e<s&&this.left.forEachLine(e,t,n,r,i,a),t>=s&&this.right.forEachLine(e,t,n,o,s,a);else{let c=this.lineAt(s,P.ByPos,n,r,i);e<c.from&&this.left.forEachLine(e,Math.min(t,c.from-1),n,r,i,a),c.to>=e&&c.from<=t&&a(c),t>c.to&&this.right.forEachLine(Math.max(e,c.to+1),t,n,o,s,a)}}replace(e,t,n){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,n));let i=[];e>0&&this.decomposeLeft(e,i);let a=i.length;for(let e of n)i.push(e);if(e>0&&Os(i,a-1),t<this.length){let e=i.length;this.decomposeRight(t,i),Os(i,e)}return xs.of(i)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,r=n+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?xs.of(this.break?[e,null,t]:[e,t]):(this.left=Ss(this.left,e),this.right=Ss(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,r){let{left:i,right:a}=this,o=t+i.length+this.break,s=null;return r&&r.from<=t+i.length&&r.more?s=i=i.updateHeight(e,t,n,r):i.updateHeight(e,t,n),r&&r.from<=o+a.length&&r.more?s=a=a.updateHeight(e,o,n,r):a.updateHeight(e,o,n),s?this.balanced(i,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?` `:`-`)+this.right}};function Os(e,t){let n,r;e[t]==null&&(n=e[t-1])instanceof Es&&(r=e[t+1])instanceof Es&&e.splice(t-1,3,new Es(n.length+1+r.length))}var ks=5,As=class e{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof Ts?n.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new Ts(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let r=n.widget?n.widget.estimatedHeight:0,i=n.widget?n.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new ws(a,r,n)):(a||i||r>=ks)&&this.addLineDeco(r,i,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new Ts(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let n=new Es(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof Ts)return e;let t=new Ts(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos+=e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let r=this.ensureLine();r.length+=n,r.collapsed+=n,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos+=n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof Ts)&&!this.isCovered?this.nodes.push(new Ts(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let e of this.nodes)e instanceof Ts&&e.updateHeight(this.oracle,n),n+=e?e.length:1;return this.nodes}static build(t,n,r,i){let a=new e(r,t);return k.spans(n,r,i,a,0),a.finish(r)}};function js(e,t,n){let r=new Ms;return k.compare(e,t,n,r,0),r.changes}var Ms=class{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,r){(e<t||n&&n.heightRelevant||r&&r.heightRelevant)&&zr(e,t,this.changes,5)}};function Ns(e,t){let n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.defaultView||window,a=Math.max(0,n.left),o=Math.min(i.innerWidth,n.right),s=Math.max(0,n.top),c=Math.min(i.innerHeight,n.bottom);for(let t=e.parentNode;t&&t!=r.body;)if(t.nodeType==1){let n=t,r=window.getComputedStyle(n);if((n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)&&r.overflow!=`visible`){let r=n.getBoundingClientRect();a=Math.max(a,r.left),o=Math.min(o,r.right),s=Math.max(s,r.top),c=Math.min(t==e.parentNode?i.innerHeight:c,r.bottom)}t=r.position==`absolute`||r.position==`fixed`?n.offsetParent:n.parentNode}else if(t.nodeType==11)t=t.host;else break;return{left:a-n.left,right:Math.max(a,o)-n.left,top:s-(n.top+t),bottom:Math.max(s,c)-(n.top+t)}}function Ps(e){let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||window;return t.left<n.innerWidth&&t.right>0&&t.top<n.innerHeight&&t.bottom>0}function Fs(e,t){let n=e.getBoundingClientRect();return{left:0,right:n.right-n.left,top:t,bottom:n.bottom-(n.top+t)}}var Is=class{constructor(e,t,n,r){this.from=e,this.to=t,this.size=n,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.size!=i.size)return!1}return!0}draw(e,t){return Nr.replace({widget:new Ls(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}},Ls=class extends jr{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement(`div`);return this.vertical?e.style.height=this.size+`px`:(e.style.width=this.size+`px`,e.style.height=`2px`,e.style.display=`inline-block`),e}get estimatedHeight(){return this.vertical?this.size:-1}},Rs=class{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Ws,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=j.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let n=t.facet(ia).some(e=>typeof e!=`function`&&e.class==`cm-lineWrapping`);this.heightOracle=new _s(n),this.stateDeco=Gs(t),this.heightMap=xs.empty().applyChanges(this.stateDeco,w.empty,this.heightOracle.setDoc(t.doc),[new ma(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Nr.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let r=n?t.head:t.anchor;if(!e.some(({from:e,to:t})=>r>=e&&r<=t)){let{from:t,to:n}=this.lineBlockAt(r);e.push(new zs(t,n))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Ws:new Ks(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(qs(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=Gs(this.state);let r=e.changedRanges,i=ma.extendWithRanges(r,js(n,this.stateDeco,e?e.changes:It.empty(this.state.doc.length))),a=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);gs(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),i),(this.heightMap.height!=a||hs)&&(e.flags|=2),o?(this.scrollAnchorPos=e.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=a);let s=i.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<s.from||t.range.head>s.to)||!this.viewportIsAppropriate(s))&&(s=this.getViewport(0,t));let c=s.from!=this.viewport.from||s.to!=this.viewport.to;this.viewport=s,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(Ki)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,n=window.getComputedStyle(t),r=this.heightOracle,i=n.whiteSpace;this.defaultTextDirection=n.direction==`rtl`?j.RTL:j.LTR;let a=this.heightOracle.mustRefreshForWrapping(i)||this.mustMeasureContent===`refresh`,o=t.getBoundingClientRect(),s=a||this.mustMeasureContent||this.contentDOMHeight!=o.height;this.contentDOMHeight=o.height,this.mustMeasureContent=!1;let c=0,l=0;if(o.width&&o.height){let{scaleX:e,scaleY:n}=Qr(t,o);(e>.005&&Math.abs(this.scaleX-e)>.005||n>.005&&Math.abs(this.scaleY-n)>.005)&&(this.scaleX=e,this.scaleY=n,c|=16,a=s=!0)}let u=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=u||this.paddingBottom!=d)&&(this.paddingTop=u,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(s=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let f=ei(this.view.contentDOM,!1).y;f!=this.scrollParent&&(this.scrollParent=f,this.scrollAnchorHeight=-1,this.scrollOffset=0);let p=this.getScrollOffset();this.scrollOffset!=p&&(this.scrollAnchorHeight=-1,this.scrollOffset=p),this.scrolledToBottom=di(this.scrollParent||e.win);let m=(this.printing?Fs:Ns)(t,this.paddingTop),h=m.top-this.pixelViewport.top,g=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let _=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(_!=this.inView&&(this.inView=_,_&&(s=!0)),!this.inView&&!this.scrollTarget&&!Ps(e.dom))return 0;let v=o.width;if((this.contentDOMWidth!=v||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=o.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),s){let t=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(t)&&(a=!0),a||r.lineWrapping&&Math.abs(v-this.contentDOMWidth)>r.charWidth){let{lineHeight:n,charWidth:o,textHeight:s}=e.docView.measureTextSize();a=n>0&&r.refresh(i,n,o,s,Math.max(5,v/o),t),a&&(e.docView.minWidth=0,c|=16)}h>0&&g>0?l=Math.max(h,g):h<0&&g<0&&(l=Math.min(h,g)),gs();for(let n of this.viewports){let i=n.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(n);this.heightMap=(a?xs.empty().applyChanges(this.stateDeco,w.empty,this.heightOracle,[new ma(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,a,new vs(n.from,i))}hs&&(c|=2)}let ee=!this.viewportIsAppropriate(this.viewport,l)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return ee&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(l,this.scrollTarget),c|=this.updateForViewport()),(c&2||ee)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,i=this.heightOracle,{visibleTop:a,visibleBottom:o}=this,s=new zs(r.lineAt(a-n*1e3,P.ByHeight,i,0,0).from,r.lineAt(o+(1-n)*1e3,P.ByHeight,i,0,0).to);if(t){let{head:e}=t.range;if(e<s.from||e>s.to){let n=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),a=r.lineAt(e,P.ByPos,i,0,0),o;o=t.y==`center`?(a.top+a.bottom)/2-n/2:t.y==`start`||t.y==`nearest`&&e<s.from?a.top:a.bottom-n,s=new zs(r.lineAt(o-500,P.ByHeight,i,0,0).from,r.lineAt(o+n+500,P.ByHeight,i,0,0).to)}}return s}mapViewport(e,t){let n=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new zs(this.heightMap.lineAt(n,P.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,P.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,P.ByPos,this.heightOracle,0,0),{bottom:i}=this.heightMap.lineAt(t,P.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:o}=this;return(e==0||r<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||i>=o+Math.max(10,Math.min(n,250)))&&r>a-2e3&&i<o+2e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let r of e)t.touchesRange(r.from,r.to)||n.push(new Is(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,r=n?1e4:2e3,i=r>>1,a=r<<1;if(this.defaultTextDirection!=j.LTR&&!n)return[];let o=[],s=(r,a,c,l)=>{if(a-r<i)return;let u=this.state.selection.main,d=[u.from];u.empty||d.push(u.to);for(let e of d)if(e>r&&e<a){s(r,e-10,c,l),s(e+10,a,c,l);return}let f=Us(e,e=>e.from>=c.from&&e.to<=c.to&&Math.abs(e.from-r)<i&&Math.abs(e.to-a)<i&&!d.some(t=>e.from<t&&e.to>t));if(!f){if(a<c.to&&t&&n&&t.visibleRanges.some(e=>e.from<=a&&e.to>=a)){let e=t.moveToLineBoundary(T.cursor(a),!1,!0).head;e>r&&(a=e)}let e=this.gapSize(c,r,a,l);f=new Is(r,a,e,n||e<2e6?e:2e6)}o.push(f)},c=t=>{if(t.length<a||t.type!=Mr.Text)return;let i=Bs(t.from,t.to,this.stateDeco);if(i.total<a)return;let o=this.scrollTarget?this.scrollTarget.range.head:null,c,l;if(n){let e=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,n,a;if(o!=null){let r=Hs(i,o),s=((this.visibleBottom-this.visibleTop)/2+e)/t.height;n=r-s,a=r+s}else n=(this.visibleTop-t.top-e)/t.height,a=(this.visibleBottom-t.top+e)/t.height;c=Vs(i,n),l=Vs(i,a)}else{let n=i.total*this.heightOracle.charWidth,a=r*this.heightOracle.charWidth,s=0;if(n>2e6)for(let n of e)n.from>=t.from&&n.from<t.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+s<this.pixelViewport.left&&(s=n.size-n.displaySize);let u=this.pixelViewport.left+s,d=this.pixelViewport.right+s,f,p;if(o!=null){let e=Hs(i,o),t=((d-u)/2+a)/n;f=e-t,p=e+t}else f=(u-a)/n,p=(d+a)/n;c=Vs(i,f),l=Vs(i,p)}c>t.from&&s(t.from,c,t,i),l<t.to&&s(l,t.to,t,i)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(c):c(e);return o}gapSize(e,t,n,r){let i=Hs(r,n)-Hs(r,t);return this.heightOracle.lineWrapping?e.height*i:r.total*this.heightOracle.charWidth*i}updateLineGaps(e){Is.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Nr.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];k.spans(t,this.viewport.from,this.viewport.to,{span(e,t){n.push({from:e,to:t})},point(){}},20);let r=0;if(n.length!=this.visibleRanges.length)r=12;else for(let t=0;t<n.length&&!(r&8);t++){let i=this.visibleRanges[t],a=n[t];(i.from!=a.from||i.to!=a.to)&&(r|=4,e&&e.mapPos(i.from,-1)==a.from&&e.mapPos(i.to,1)==a.to||(r|=8))}return this.visibleRanges=n,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||qs(this.heightMap.lineAt(e,P.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||qs(this.heightMap.lineAt(this.scaler.fromDOM(e),P.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop*this.scaleY:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return qs(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}},zs=class{constructor(e,t){this.from=e,this.to=t}};function Bs(e,t,n){let r=[],i=e,a=0;return k.spans(n,e,t,{span(){},point(e,t){e>i&&(r.push({from:i,to:e}),a+=e-i),i=t}},20),i<t&&(r.push({from:i,to:t}),a+=t-i),{total:a,ranges:r}}function Vs({total:e,ranges:t},n){if(n<=0)return t[0].from;if(n>=1)return t[t.length-1].to;let r=Math.floor(e*n);for(let e=0;;e++){let{from:n,to:i}=t[e],a=i-n;if(r<=a)return n+r;r-=a}}function Hs(e,t){let n=0;for(let{from:r,to:i}of e.ranges){if(t<=i){n+=t-r;break}n+=i-r}return n/e.total}function Us(e,t){for(let n of e)if(t(n))return n}var Ws={toDOM(e){return e},fromDOM(e){return e},scale:1,eq(e){return e==this}};function Gs(e){let t=e.facet(aa).filter(e=>typeof e!=`function`),n=e.facet(sa).filter(e=>typeof e!=`function`);return n.length&&t.push(k.join(n)),t}var Ks=class e{constructor(e,t,n){let r=0,i=0,a=0;this.viewports=n.map(({from:n,to:i})=>{let a=t.lineAt(n,P.ByPos,e,0,0).top,o=t.lineAt(i,P.ByPos,e,0,0).bottom;return r+=o-a,{from:n,to:i,top:a,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let e of this.viewports)e.domTop=a+(e.top-i)*this.scale,a=e.domBottom=e.domTop+(e.bottom-e.top),i=e.bottom}toDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.top)return r+(e-n)*this.scale;if(e<=i.bottom)return i.domTop+(e-i.top);n=i.bottom,r=i.domBottom}}fromDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.domTop)return n+(e-r)/this.scale;if(e<=i.domBottom)return i.top+(e-i.domTop);n=i.bottom,r=i.domBottom}}eq(t){return t instanceof e&&this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,n)=>e.from==t.viewports[n].from&&e.to==t.viewports[n].to)}};function qs(e,t){if(t.scale==1)return e;let n=t.toDOM(e.top),r=t.toDOM(e.bottom);return new ys(e.from,e.length,n,r-n,Array.isArray(e._content)?e._content.map(e=>qs(e,t)):e._content)}var Js=E.define({combine:e=>e.join(` `)}),Ys=E.define({combine:e=>e.indexOf(!0)>-1}),Xs=ir.newName(),Zs=ir.newName(),Qs=ir.newName(),$s={"&light":`.`+Zs,"&dark":`.`+Qs};function ec(e,t,n){return new ir(t,{finish(t){return/&/.test(t)?t.replace(/&\w*/,t=>{if(t==`&`)return e;if(!n||!n[t])throw RangeError(`Unsupported selector: ${t}`);return n[t]}):e+` `+t}})}var tc=ec(`.`+Xs,{"&":{position:`relative !important`,boxSizing:`border-box`,"&.cm-focused":{outline:`1px dotted #212121`},display:`flex !important`,flexDirection:`column`},".cm-scroller":{display:`flex !important`,alignItems:`flex-start !important`,fontFamily:`monospace`,lineHeight:1.4,height:`100%`,overflowX:`auto`,position:`relative`,zIndex:0,overflowAnchor:`none`},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:`block`,whiteSpace:`pre`,wordWrap:`normal`,boxSizing:`border-box`,minHeight:`100%`,padding:`4px 0`,outline:`none`,"&[contenteditable=true]":{WebkitUserModify:`read-write-plaintext-only`}},".cm-lineWrapping":{whiteSpace_fallback:`pre-wrap`,whiteSpace:`break-spaces`,wordBreak:`break-word`,overflowWrap:`anywhere`,flexShrink:1},"&light .cm-content":{caretColor:`black`},"&dark .cm-content":{caretColor:`white`},".cm-line":{display:`block`,padding:`0 2px 0 6px`},".cm-layer":{userSelect:`none`,position:`absolute`,left:0,top:0,contain:`size style`,"& > *":{position:`absolute`}},"&light .cm-selectionBackground":{background:`#d9d9d9`},"&dark .cm-selectionBackground":{background:`#222`},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#d7d4f0`},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#233`},".cm-cursorLayer":{pointerEvents:`none`},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:`steps(1) cm-blink 1.2s infinite`},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:`1.2px solid black`,marginLeft:`-0.6px`,pointerEvents:`none`},".cm-cursor":{display:`none`},"&dark .cm-cursor":{borderLeftColor:`#ddd`},".cm-selectionHandle":{backgroundColor:`currentColor`,width:`1.5px`},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:`""`,backgroundColor:`inherit`,borderRadius:`50%`,width:`8px`,height:`8px`,position:`absolute`,left:`-3.25px`},".cm-selectionHandle-start::before":{top:`-8px`},".cm-selectionHandle-end::before":{bottom:`-8px`},".cm-dropCursor":{position:`absolute`},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:`block`},".cm-iso":{unicodeBidi:`isolate`},".cm-announced":{position:`fixed`,top:`-10000px`},"@media print":{".cm-announced":{display:`none`}},"&light .cm-activeLine":{backgroundColor:`#cceeff44`},"&dark .cm-activeLine":{backgroundColor:`#99eeff33`},"&light .cm-specialChar":{color:`red`},"&dark .cm-specialChar":{color:`#f78`},".cm-gutters":{flexShrink:0,display:`flex`,height:`100%`,boxSizing:`border-box`,zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:`#f5f5f5`,color:`#6c6c6c`,border:`0px solid #ddd`,"&.cm-gutters-before":{borderRightWidth:`1px`},"&.cm-gutters-after":{borderLeftWidth:`1px`}},"&dark .cm-gutters":{backgroundColor:`#333338`,color:`#ccc`},".cm-gutter":{display:`flex !important`,flexDirection:`column`,flexShrink:0,boxSizing:`border-box`,minHeight:`100%`,overflow:`hidden`},".cm-gutterElement":{boxSizing:`border-box`},".cm-lineNumbers .cm-gutterElement":{padding:`0 3px 0 5px`,minWidth:`20px`,textAlign:`right`,whiteSpace:`nowrap`},"&light .cm-activeLineGutter":{backgroundColor:`#e2f2ff`},"&dark .cm-activeLineGutter":{backgroundColor:`#222227`},".cm-panels":{boxSizing:`border-box`,position:`sticky`,left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:`#f5f5f5`,color:`black`},".cm-panels-top":{top:`0`},".cm-panels-bottom":{bottom:`0`},"&light .cm-panels-top":{borderBottom:`1px solid #ddd`},"&light .cm-panels-bottom":{borderTop:`1px solid #ddd`},"&dark .cm-panels":{backgroundColor:`#333338`,color:`white`},".cm-dialog":{padding:`2px 19px 4px 6px`,position:`relative`,"& label":{fontSize:`80%`}},".cm-dialog-close":{position:`absolute`,top:`3px`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,fontSize:`14px`,padding:`0`},".cm-tab":{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`},".cm-widgetBuffer":{verticalAlign:`text-top`,height:`1em`,width:0,display:`inline`},".cm-placeholder":{color:`#888`,display:`inline-block`,verticalAlign:`top`,userSelect:`none`},".cm-highlightSpace":{background:`radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat`,backgroundSize:`.4em`,backgroundPosition:`calc(min(50%, 0px)) center`},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:`auto 100%`,backgroundPosition:`right 90%`,backgroundRepeat:`no-repeat`},".cm-trailingSpace":{backgroundColor:`#ff332255`},".cm-button":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,padding:`.2em 1em`,borderRadius:`1px`},"&light .cm-button":{backgroundImage:`linear-gradient(#eff1f5, #d9d9df)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#b4b4b4, #d0d3d6)`}},"&dark .cm-button":{backgroundImage:`linear-gradient(#393939, #111)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#111, #333)`}},".cm-textfield":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,border:`1px solid silver`,padding:`.2em .5em`},"&light .cm-textfield":{backgroundColor:`white`},"&dark .cm-textfield":{border:`1px solid #555`,backgroundColor:`inherit`}},$s),nc={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},rc=A.ie&&A.ie_version<=11,ic=class{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new ti,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(A.ie&&A.ie_version<=11||A.ios&&e.composing)&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&A.android&&e.constructor.EDIT_CONTEXT!==!1&&!(A.chrome&&A.chrome_version<126)&&(this.editContext=new cc(e),e.state.facet(Qi)&&(e.contentDOM.editContext=this.editContext.editContext)),rc&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia(`print`)),typeof ResizeObserver==`function`&&(this.resizeScroll=new ResizeObserver(()=>{this.view.docView?.lastUpdate<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver==`function`&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent(`Event`)))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent(`Event`))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers(`scroll`,e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type!=`change`&&e.type||e.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,r=this.selectionRange;if(n.state.facet(Qi)?n.root.activeElement!=this.dom:!Ur(this.dom,r))return;let i=r.anchorNode&&n.docView.tile.nearest(r.anchorNode);if(i&&i.isWidget()&&i.widget.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(A.ie&&A.ie_version<=11||A.android&&A.chrome)&&!n.state.selection.main.empty&&r.focusNode&&Gr(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=Vr(e.root);if(!t)return!1;let n=A.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&sc(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let r=Ur(this.dom,n);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&ui(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||=this.scrollTargets.slice(0,e),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener(`scroll`,this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||=(this.observer.observe(this.dom,nc),rc&&this.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),rc&&this.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;e&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&ci(this.dom,e.key,e.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}(!this.delayedAndroidKey||e==`Enter`)&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!this.delayedAndroidKey?.force})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,r=!1;for(let i of e){let e=this.readMutation(i);e&&(e.typeOver&&(r=!0),t==-1?{from:t,to:n}=e:(t=Math.min(e.from,t),n=Math.max(e.to,n)))}return{from:t,to:n,typeOver:r}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),r=this.selectionChanged&&Ur(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let i=new xo(this.view,e,t,n);return this.view.docView.domChanged={newSel:i.newSel?i.newSel.main:null},i}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,r=Co(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!ko(this.view.state.selection,t.newSel.main))&&this.view.update([]),r}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type==`attributes`),e.type==`childList`){let n=ac(t,e.previousSibling||e.target.previousSibling,-1),r=ac(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}return e.type==`characterData`?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener(`change`,this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener(`beforeprint`,this.onPrint),e.addEventListener(`scroll`,this.onScroll),e.document.addEventListener(`selectionchange`,this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener(`scroll`,this.onScroll),e.removeEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener(`change`,this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener(`beforeprint`,this.onPrint),e.document.removeEventListener(`selectionchange`,this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Qi)!=e.state.facet(Qi)&&(e.view.contentDOM.editContext=e.state.facet(Qi)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)==null||e.disconnect(),(t=this.gapIntersection)==null||t.disconnect(),(n=this.resizeScroll)==null||n.disconnect();for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}};function ac(e,t,n){for(;t;){let r=N.get(t);if(r&&r.parent==e)return r;let i=t.parentNode;t=i==e.dom?n>0?t.nextSibling:t.previousSibling:i}return null}function oc(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.docView.domAtPos(e.state.selection.main.anchor,1);return Gr(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function sc(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return oc(e,n)}let n=null;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.contentDOM.addEventListener(`beforeinput`,r,!0),e.dom.ownerDocument.execCommand(`indent`),e.contentDOM.removeEventListener(`beforeinput`,r,!0),n?oc(e,n):null}var cc=class{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let r=e.state.selection.main,{anchor:i,head:a}=r,o=this.toEditorPos(n.updateRangeStart),s=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:o,drifted:!1});let c=s-o>n.text.length;o==this.from&&i<this.from?o=i:s==this.to&&i>this.to&&(s=i);let l=Eo(e.state.sliceDoc(o,s),n.text,(c?r.from:r.to)-o,c?`end`:null);if(!l){let t=T.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));ko(t,r)||e.dispatch({selection:t,userEvent:`select`});return}let u={from:l.from+o,to:l.toA+o,insert:w.of(n.text.slice(l.from,l.toB).split(`
`))};if((A.mac||A.android)&&u.from==a-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute(`autocorrect`)==`off`&&(u={from:o,to:s,insert:w.of([n.text.replace(`.`,` `)])}),this.pendingContextChange=u,!e.state.readOnly){let t=this.to-this.from+(u.to-u.from+u.insert.length);wo(e,u,T.single(this.toEditorPos(n.selectionStart,t),this.toEditorPos(n.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),u.from<u.to&&!u.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let r=[],i=null;for(let t=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);t<a;t++){let n=e.coordsForChar(t);i=n&&new DOMRect(n.left,n.top,n.right-n.left,n.bottom-n.top)||i||new DOMRect,r.push(i)}t.updateCharacterBounds(n.rangeStart,r)},this.handlers.textformatupdate=t=>{let n=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,r=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(r)){let i=this.toEditorPos(e.rangeStart),a=this.toEditorPos(e.rangeEnd);if(i<a){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+` `:t==`Dashed`?`dashed `:t==`Squiggle`?`wavy `:``}${/thin/i.test(r)?1:2}px`;n.push(Nr.mark({attributes:{style:e}}).range(i,a))}}}e.dispatch({effects:Xi.of(Nr.set(n))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=Vr(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,r=this.pendingContextChange;return e.changes.iterChanges((i,a,o,s,c)=>{if(n)return;let l=c.length-(a-i);if(r&&a>=r.to){if(r.from==i&&r.to==a&&r.insert.eq(c)){r=this.pendingContextChange=null,t+=l,this.to+=l;return}r=null,this.revertPending(e.state)}if(i+=t,a+=t,a<=this.from)this.from+=l,this.to+=l;else if(i<this.to){if(i<this.from||a>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(i),this.toContextPos(a),c.toString()),this.to+=l}t+=l}),r&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(e=>!e.isUserEvent(`input.type`)&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(n,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>3e4)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}},F=class e{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.clearAnnouncement=-1,this.contentDOM=document.createElement(`div`),this.scrollDOM=document.createElement(`div`),this.scrollDOM.tabIndex=-1,this.scrollDOM.className=`cm-scroller`,this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement(`div`),this.announceDOM.className=`cm-announced`,this.announceDOM.setAttribute(`aria-live`,`polite`),this.dom=document.createElement(`div`),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(e=>e.forEach(e=>t(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||li(e.parent)||document,this.viewState=new Rs(this,e.state||O.create(e)),e.scrollTo&&e.scrollTo.is(Yi)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(ea).map(e=>new na(e));for(let e of this.plugins)e.update(this);this.observer=new ic(this),this.inputState=new Ao(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Ua(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent=`refresh`,this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof bn?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(t){if(this.updateState!=0)throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);let n=!1,r=!1,i,a=this.state;for(let e of t){if(e.startState!=a)throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);a=e.state}if(this.destroyed){this.viewState.state=a;return}let o=this.hasFocus,s=0,c=null;t.some(e=>e.annotation(ls))?(this.inputState.notifiedFocused=o,s=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,c=us(a,o),c||(s=1));let l=this.observer.delayedAndroidKey,u=null;if(l?(this.observer.clearDelayedAndroidKey(),u=this.observer.readChange(),(u&&!this.state.doc.eq(a.doc)||!this.state.selection.eq(a.selection))&&(u=null)):this.observer.clear(),a.facet(O.phrases)!=this.state.facet(O.phrases))return this.setState(a);i=ha.create(this,a,t),i.flags|=s;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let n of t){if(d&&=d.map(n.changes),n.scrollIntoView){let{main:t}=n.state.selection,{x:r,y:i}=this.state.facet(e.cursorScrollMargin);d=new Ji(t.empty?t:T.cursor(t.head,t.head>t.anchor?-1:1),`nearest`,`nearest`,i,r)}for(let e of n.effects)e.is(Yi)&&(d=e.value.clip(this.state))}this.viewState.update(i,d),this.bidiCache=dc.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),n=this.docView.update(i),this.state.facet(pa)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(n,t.some(e=>e.isUserEvent(`select.pointer`)))}finally{this.updateState=0}if(i.startState.facet(Js)!=i.state.facet(Js)&&(this.viewState.mustMeasureContent=!0),(n||r||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!i.empty)for(let e of this.state.facet(Bi))try{e(i)}catch(e){Zi(this.state,e,`update listener`)}(c||u)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),u&&!Co(this,u)&&l.force&&ci(this.contentDOM,l.key,l.keyCode)})}setState(e){if(this.updateState!=0)throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new Rs(this,e),this.plugins=e.facet(ea).map(e=>new na(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new Ua(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(ea),n=e.state.facet(ea);if(t!=n){let r=[];for(let i of n){let n=t.indexOf(i);if(n<0)r.push(new na(i));else{let t=this.plugins[n];t.mustUpdate=e,r.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){Zi(this.state,e,`doc view update listener`)}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:i,scrollAnchorHeight:a,scaleY:o}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(a<0){if(di(n||this.win))i=-1,a=this.viewState.heightMap.height/this.viewState.scaleY;else{let e=this.viewState.scrollAnchorAt(r);i=e.from,a=e.top}o=this.viewState.scaleY}this.updateState=1;let s=this.viewState.measure();if(!s&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(e>5){console.warn(this.measureRequests.length?`Measure loop restarted more than 5 times`:`Viewport failed to stabilize`);break}let c=[];s&4||([this.measureRequests,c]=[c,this.measureRequests]);let l=c.map(e=>{try{return e.read(this)}catch(e){return Zi(this.state,e),uc}}),u=ha.create(this,this.state,[]),d=!1;u.flags|=s,t?t.flags|=s:t=u,this.updateState=2,u.empty||(this.updatePlugins(u),this.inputState.update(u),this.updateAttrs(),d=this.docView.update(u),d&&this.docViewUpdate());for(let e=0;e<c.length;e++)if(l[e]!=uc)try{let t=c[e];t.write&&t.write(l[e],this)}catch(e){Zi(this.state,e)}if(d&&this.docView.updateSelection(!0),!u.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}{let e=(i<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(i).top)/this.viewState.scaleY-a/o;if((e>1||e<-1)&&!(A.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(n==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r+=e,n?i<0?n.scrollTop=n.scrollHeight:n.scrollTop+=e:this.win.scrollBy(0,e),a=-1;continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(Bi))e(t)}get themeClasses(){return Xs+` `+(this.state.facet(Ys)?Qs:Zs)+` `+this.state.facet(Js)}updateAttrs(){let e=fc(this,ra,{class:`cm-editor`+(this.hasFocus?` cm-focused `:` `)+this.themeClasses}),t={spellcheck:`false`,autocorrect:`off`,autocapitalize:`off`,writingsuggestions:`false`,translate:`no`,contenteditable:this.state.facet(Qi)?`true`:`false`,class:`cm-content`,style:`${A.tabSize}: ${this.state.tabSize}`,role:`textbox`,"aria-multiline":`true`};this.state.readOnly&&(t[`aria-readonly`]=`true`),fc(this,ia,t);let n=this.observer.ignore(()=>{let n=kr(this.contentDOM,this.contentAttrs,t),r=kr(this.dom,this.editorAttrs,e);return n||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(t){let n=!0;for(let r of t)for(let t of r.effects)if(t.is(e.announce)){n&&=(this.announceDOM.textContent=``,this.win.clearTimeout(this.clearAnnouncement),this.clearAnnouncement=this.win.setTimeout(()=>{this.announceDOM.textContent=`\xA0`},200),!1);let e=this.announceDOM.appendChild(document.createElement(`div`));e.textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(pa);let t=this.state.facet(e.cspNonce);ir.mount(this.root,this.styleModules.concat(tc).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(this.updateState==2)throw Error(`Reading the editor layout isn't allowed during an update`);this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return fo(this,e,oo(this,e,t,n))}moveByGroup(e,t){return fo(this,e,oo(this,e,t,t=>so(this,e.head,t)))}visualLineSide(e,t){return t?T.cursor(e.to,1):T.cursor(e.from,-1)}moveToLineBoundary(e,t,n=!0){return ao(this,e,t,n)}moveVertically(e,t,n){return fo(this,e,co(this,e,t,n))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let n=mo(this,e,t);return n&&n.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),mo(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.state.doc.lineAt(e),r=this.bidiSpans(n),i=r[wi.find(r,e-n.from,-1,t)];return n.length&&(e==n.from&&t<0||e==n.to&&t>0)&&i.dir!=this.textDirectionAt(n.from)&&(e==n.to?(e=n.from+i.from,t=1):(e=n.from+i.to,t=-1)),this.docView.coordsAt(e,t,i.dir==j.RTL)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(Gi)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>lc)return Mi(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||Ti(r.isolates,n=ua(this,e))))return r.order;n||=ua(this,e);let r=ji(e.text,t,n);return this.bidiCache.push(new dc(e.from,e.to,t,n,!0,r)),r}get hasFocus(){return(this.dom.ownerDocument.hasFocus()||A.safari&&this.inputState?.lastContextMenu>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{ai(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.win.clearTimeout(this.clearAnnouncement),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Yi.of(new Ji(typeof e==`number`?T.cursor(e):e,t.y??`nearest`,t.x??`nearest`,t.yMargin??5,t.xMargin??5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Yi.of(new Ji(T.cursor(n.from),`start`,`start`,n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e==`boolean`?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return ta.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return ta.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=ir.newName(),r=[Js.of(n),pa.of(ec(`.${n}`,e))];return t&&t.dark&&r.push(Ys.of(!0)),r}static baseTheme(e){return tn.lowest(pa.of(ec(`.`+Xs,e,$s)))}static findFromDOM(e){let t=e.querySelector(`.cm-content`);return(t&&N.get(t)||N.get(e))?.root?.view||null}};F.styleModule=pa,F.inputHandler=Vi,F.clipboardInputFilter=Ui,F.clipboardOutputFilter=Wi,F.scrollHandler=qi,F.focusChangeEffect=Hi,F.perLineTextDirection=Gi,F.exceptionSink=zi,F.updateListener=Bi,F.editable=Qi,F.mouseSelectionStyle=Ri,F.dragMovesSelection=Li,F.clickAddsSelectionRange=Ii,F.decorations=aa,F.blockWrappers=oa,F.outerDecorations=sa,F.atomicRanges=ca,F.bidiIsolatedRanges=la,F.cursorScrollMargin=E.define({combine:e=>{let t=5,n=5;for(let r of e)typeof r==`number`?t=n=r:{x:t,y:n}=r;return{x:t,y:n}}}),F.scrollMargins=da,F.darkTheme=Ys,F.cspNonce=E.define({combine:e=>e.length?e[0]:``}),F.contentAttributes=ia,F.editorAttributes=ra,F.lineWrapping=F.contentAttributes.of({class:`cm-lineWrapping`}),F.announce=D.define();var lc=4096,uc={},dc=class e{constructor(e,t,n,r,i,a){this.from=e,this.to=t,this.dir=n,this.isolates=r,this.fresh=i,this.order=a}static update(t,n){if(n.empty&&!t.some(e=>e.fresh))return t;let r=[],i=t.length?t[t.length-1].dir:j.LTR;for(let a=Math.max(0,t.length-10);a<t.length;a++){let o=t[a];o.dir==i&&!n.touchesRange(o.from,o.to)&&r.push(new e(n.mapPos(o.from,1),n.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return r}};function fc(e,t,n){for(let r=e.state.facet(t),i=r.length-1;i>=0;i--){let t=r[i],a=typeof t==`function`?t(e):t;a&&Tr(a,n)}return n}var pc=A.mac?`mac`:A.windows?`win`:A.linux?`linux`:`key`;function mc(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1];r==`Space`&&(r=` `);let i,a,o,s;for(let e=0;e<n.length-1;++e){let r=n[e];if(/^(cmd|meta|m)$/i.test(r))s=!0;else if(/^a(lt)?$/i.test(r))i=!0;else if(/^(c|ctrl|control)$/i.test(r))a=!0;else if(/^s(hift)?$/i.test(r))o=!0;else if(/^mod$/i.test(r))t==`mac`?s=!0:a=!0;else throw Error(`Unrecognized modifier name: `+r)}return i&&(r=`Alt-`+r),a&&(r=`Ctrl-`+r),s&&(r=`Meta-`+r),o&&(r=`Shift-`+r),r}function hc(e,t,n){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n!==!1&&t.shiftKey&&(e=`Shift-`+e),e}var gc=tn.default(F.domEventHandlers({keydown(e,t){return wc(yc(t.state),e,t,`editor`)}})),_c=E.define({enables:gc}),vc=new WeakMap;function yc(e){let t=e.facet(_c),n=vc.get(t);return n||vc.set(t,n=Sc(t.reduce((e,t)=>e.concat(t),[]))),n}var bc=null,xc=4e3;function Sc(e,t=pc){let n=Object.create(null),r=Object.create(null),i=(e,t)=>{let n=r[e];if(n==null)r[e]=t;else if(n!=t)throw Error(`Key binding `+e+` is used both as a regular binding and as a multi-stroke prefix`)},a=(e,r,a,o,s)=>{let c=n[e]||(n[e]=Object.create(null)),l=r.split(/ (?!$)/).map(e=>mc(e,t));for(let t=1;t<l.length;t++){let n=l.slice(0,t).join(` `);i(n,!0),c[n]||(c[n]={preventDefault:!0,stopPropagation:!1,run:[t=>{let r=bc={view:t,prefix:n,scope:e};return setTimeout(()=>{bc==r&&(bc=null)},xc),!0}]})}let u=l.join(` `);i(u,!1);let d=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(c._any?.run)?.slice()||[]});a&&d.run.push(a),o&&(d.preventDefault=!0),s&&(d.stopPropagation=!0)};for(let r of e){let e=r.scope?r.scope.split(` `):[`editor`];if(r.any)for(let t of e){let e=n[t]||(n[t]=Object.create(null));e._any||={preventDefault:!1,stopPropagation:!1,run:[]};let{any:i}=r;for(let t in e)e[t].run.push(e=>i(e,Cc))}let i=r[t]||r.key;if(i)for(let t of e)a(t,i,r.run,r.preventDefault,r.stopPropagation),r.shift&&a(t,`Shift-`+i,r.shift,r.preventDefault,r.stopPropagation)}return n}var Cc=null;function wc(e,t,n,r){Cc=t;let i=pr(t),a=Mt(jt(i,0))==i.length&&i!=` `,o=``,s=!1,c=!1,l=!1;bc&&bc.view==n&&bc.scope==r&&(o=bc.prefix+` `,Io.indexOf(t.keyCode)<0&&(c=!0,bc=null));let u=new Set,d=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(n)))return e.stopPropagation&&(l=!0),!0;e.preventDefault&&(e.stopPropagation&&(l=!0),c=!0)}return!1},f=e[r],p,m;return f&&(d(f[o+hc(i,t,!a)])?s=!0:a&&(t.altKey||t.metaKey||t.ctrlKey)&&!(A.windows&&t.ctrlKey&&t.altKey)&&!(A.mac&&t.altKey&&!(t.ctrlKey||t.metaKey))&&(p=sr[t.keyCode])&&p!=i?(d(f[o+hc(p,t,!0)])||t.shiftKey&&(m=cr[t.keyCode])!=i&&m!=p&&d(f[o+hc(m,t,!1)]))&&(s=!0):a&&t.shiftKey&&d(f[o+hc(i,t,!0)])&&(s=!0),!s&&d(f._any)&&(s=!0)),c&&(s=!0),s&&l&&t.stopPropagation(),Cc=null,s}A.gecko&&A.gecko_version,/x/.unicode;var Tc=class extends Pn{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}};Tc.prototype.elementClass=``,Tc.prototype.toDOM=void 0,Tc.prototype.mapMode=Pt.TrackBefore,Tc.prototype.startSide=Tc.prototype.endSide=-1,Tc.prototype.point=!0;var Ec=class extends o{constructor(){super(...arguments),this._hasMounted=!1}get doc(){return this.view?this.view.state.doc.toString():``}mountEditor(e){let t=this.getEditorParent();t&&!this.view&&(this.view=new F({state:O.create({doc:e,extensions:this.buildExtensions()}),parent:t,root:this.shadowRoot??void 0}),this._hasMounted=!0,this.requestUpdate())}onEditorMounted(){}getRemountDoc(){return this._preservedDoc??``}destroyEditor(){this.view?.destroy(),this.view=void 0}setDoc(e){let t=this.view;t&&t.state.doc.toString()!==e&&t.dispatch({changes:{from:0,to:t.state.doc.length,insert:e}})}reconfigure(e,t){this.view?.dispatch({effects:e.reconfigure(t)})}focus(){this.view?.focus()}focusFromPoint(e,t){let n=this.view;if(!n||n.state.readOnly)return;let r=n.posAtCoords({x:e,y:t},!1)??n.state.doc.length;n.dispatch({selection:{anchor:r}}),n.focus()}connectedCallback(){super.connectedCallback(),this._hasMounted&&!this.view&&(this.mountEditor(this.getRemountDoc()),this.view&&this.onEditorMounted())}disconnectedCallback(){super.disconnectedCallback(),this.view&&(this._preservedDoc=this.doc),this.destroyEditor()}},Dc=1024,Oc=0,kc=class{constructor(e,t){this.from=e,this.to=t}},I=class{constructor(e={}){this.id=Oc++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=Mc.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};I.closedBy=new I({deserialize:e=>e.split(` `)}),I.openedBy=new I({deserialize:e=>e.split(` `)}),I.group=new I({deserialize:e=>e.split(` `)}),I.isolate=new I({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),I.contextHash=new I({perNode:!0}),I.lookAhead=new I({perNode:!0}),I.mounted=new I({perNode:!0});var Ac=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[I.mounted.id]}},jc=Object.create(null),Mc=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):jc,r=+!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(I.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(I.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};Mc.none=new Mc(``,Object.create(null),0,8);var Nc=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||=Object.assign({},e.props);let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new Mc(e.name,r,e.id,e.flags):e)}return new e(n)}},Pc=new WeakMap,Fc=new WeakMap,L;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(L||={});var R=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=Ac.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new Yc(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new Yc(Pc.get(this)||this.topNode);return r.moveTo(e,t),Pc.set(this,r._tree),r}get topNode(){return new Vc(this,0,0,null)}resolve(e,t=0){let n=zc(Pc.get(this)||this.topNode,e,t,!1);return Pc.set(this,n),n}resolveInner(e,t=0){let n=zc(Fc.get(this)||this.topNode,e,t,!0);return Fc.set(this,n),n}resolveStack(e,t=0){return Jc(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&L.IncludeAnonymous)>0;for(let e=this.cursor(a|L.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:el(Mc.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(Mc.none,t,n,r)))}static build(e){return Zc(e)}};R.empty=new R(Mc.none,[],[],0);var Ic=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},Lc=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return Mc.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!(Rc(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function Rc(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function zc(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof Vc&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:L.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof Vc&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var Bc=class{cursor(e=0){return new Yc(this,e)}getChild(e,t=null,n=null){let r=Hc(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return Hc(this,e,t,n)}resolve(e,t=0){return zc(this,e,t,!1)}resolveInner(e,t=0){return zc(this,e,t,!0)}matchContext(e){return Uc(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},Vc=class e extends Bc{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(a&L.EnterBracketed&&l instanceof R&&(d=Ac.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length||Rc(i,r,u,u+l.length)){if(l instanceof Lc){if(a&L.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new Gc(new Wc(o,l,t,u),null,e)}else if(a&L.IncludeAnonymous||!l.type.isAnonymous||Xc(l)){let s;if(!(a&L.IgnoreMounts)&&(s=Ac.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&L.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&L.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&L.IgnoreOverlays)&&(i=Ac.get(this._tree))&&i.overlay){let a=t-this.from,o=r&L.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function Hc(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function Uc(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var Wc=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},Gc=class e extends Bc{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&L.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new R(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function Kc(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof Vc&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new qc(i,n)}var qc=class{constructor(e,t){this.heads=e,this.node=t}get next(){return Kc(this.heads)}};function Jc(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof Vc?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||=[r]).push(a.resolve(t,n)),e=a}else{let a=Ac.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new Vc(a.tree,a.overlay[0].from+e.from,-1,e);(i||=[r]).push(zc(o,t,n,!1))}}return i?Kc(i):r}var Yc=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~L.EnterBracketed,e instanceof Vc)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof Vc?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&L.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&L.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&L.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&L.IncludeAnonymous||e instanceof Lc||!e.type.isAnonymous||Xc(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new Gc(this.buffer,t,this.stack[e]);return this.bufferNode=new Gc(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return Uc(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return Uc(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function Xc(e){return e.children.some(e=>e instanceof Lc||!e.type.isAnonymous||Xc(e))}function Zc(e){let{buffer:t,nodeSet:n,maxBufferLength:r=Dc,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new Ic(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,ee,te){let{id:ne,start:y,end:re,size:ie}=o,ae=l,oe=c;if(ie<0){if(o.next(),ie==-1){let t=i[ne];_.push(t),v.push(y-e);return}if(ie==-3){c=ne;return}if(ie==-4){l=ne;return}throw RangeError(`Unrecognized record size: ${ie}`)}let se=s[ne],ce,le,ue=y-e;if(re-y<=r&&(le=h(o.pos-t,ee))){let t=new Uint16Array(le.size-le.skip),r=o.pos-le.size,i=t.length;for(;o.pos>r;)i=g(le.start,t,i);ce=new Lc(t,re-le.start,n),ue=le.start-e}else{let e=o.pos-ie;o.next();let t=[],n=[],i=ne>=a?ne:-1,s=0,c=re;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,y,s,o.end,c,i,ae,oe),s=t.length,c=o.end),o.next()):te>2500?d(y,e,t,n):u(y,e,t,n,i,te+1);if(i>=0&&s>0&&s<t.length&&p(t,n,y,s,y,c,i,ae,oe),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(se,oe);ce=el(se,t,n,0,t.length,0,re-y,e,e)}else ce=m(se,t,n,re-y,ae-re,oe)}_.push(ce),v.push(ue)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new Lc(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof R){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(I.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[I.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[I.lookAhead,i];o=o?[e].concat(o):[e]}return new R(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0){if(n.size==-3||n.size==-4)d+=4;else break scan}else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let ee=e.length??(_.length?v[0]+_[0].length:0);return new R(s[e.topID],_.reverse(),v.reverse(),ee)}var Qc=new WeakMap;function $c(e,t){if(!e.isAnonymous||t instanceof Lc||t.type!=e)return 1;let n=Qc.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof R)){n=1;break}n+=$c(e,r)}Qc.set(t,n)}return n}function el(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=$c(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=$c(e,t[s]);for(s++;s<i;s++){let n=$c(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(el(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var tl=class{constructor(){this.map=new WeakMap}setBuffer(e,t,n){let r=this.map.get(e);r||this.map.set(e,r=new Map),r.set(t,n)}getBuffer(e,t){let n=this.map.get(e);return n&&n.get(t)}set(e,t){e instanceof Gc?this.setBuffer(e.context.buffer,e.index,t):e instanceof Vc&&this.map.set(e.tree,t)}get(e){return e instanceof Gc?this.getBuffer(e.context.buffer,e.index):e instanceof Vc?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}},nl=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},rl=class{startParse(e,t,n){return typeof e==`string`&&(e=new il(e)),n=n?n.length?n.map(e=>new kc(e.from,e.to)):[new kc(0,0)]:[new kc(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},il=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};function al(e){return(t,n,r,i)=>new ul(t,e,n,r,i)}var ol=class{constructor(e,t,n,r,i,a){this.parser=e,this.parse=t,this.overlay=n,this.bracketed=r,this.target=i,this.from=a}};function sl(e){if(!e.length||e.some(e=>e.from>=e.to))throw RangeError(`Invalid inner parse ranges given: `+JSON.stringify(e))}var cl=class{constructor(e,t,n,r,i,a,o,s){this.parser=e,this.predicate=t,this.mounts=n,this.index=r,this.start=i,this.bracketed=a,this.target=o,this.prev=s,this.depth=0,this.ranges=[]}},ll=new I({perNode:!0}),ul=class{constructor(e,t,n,r,i){this.nest=t,this.input=n,this.fragments=r,this.ranges=i,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let e=this.baseParse.advance();if(!e)return null;if(this.baseParse=null,this.baseTree=e,this.startInner(),this.stoppedAt!=null)for(let e of this.inner)e.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let e=this.baseTree;return this.stoppedAt!=null&&(e=new R(e.type,e.children,e.positions,e.length,e.propValues.concat([[ll,this.stoppedAt]]))),e}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let n=Object.assign(Object.create(null),e.target.props);n[I.mounted.id]=new Ac(t,e.overlay,e.parser,e.bracketed),e.target.props=n}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new hl(this.fragments),t=null,n=null,r=new Yc(new Vc(this.baseTree,this.ranges[0].from,0,null),L.IncludeAnonymous|L.IgnoreMounts);scan:for(let i,a;;){let o=!0,s;if(this.stoppedAt!=null&&r.from>=this.stoppedAt)o=!1;else if(e.hasNode(r)){if(t){let e=t.mounts.find(e=>e.frag.from<=r.from&&e.frag.to>=r.to&&e.mount.overlay);if(e)for(let n of e.mount.overlay){let i=n.from+e.pos,a=n.to+e.pos;i>=r.from&&a<=r.to&&!t.ranges.some(e=>e.from<a&&e.to>i)&&t.ranges.push({from:i,to:a})}}o=!1}else if(n&&(a=dl(n.ranges,r.from,r.to)))o=a!=2;else if(!r.type.isAnonymous&&(i=this.nest(r,this.input))&&(r.from<r.to||!i.overlay)){r.tree||(pl(r),t&&t.depth++,n&&n.depth++);let a=e.findMounts(r.from,i.parser);if(typeof i.overlay==`function`)t=new cl(i.parser,i.overlay,a,this.inner.length,r.from,!!i.bracketed,r.tree,t);else{let e=gl(this.ranges,i.overlay||(r.from<r.to?[new kc(r.from,r.to)]:[]));e.length&&sl(e),(e.length||!i.overlay)&&this.inner.push(new ol(i.parser,e.length?i.parser.startParse(this.input,vl(a,e),e):i.parser.startParse(``),i.overlay?i.overlay.map(e=>new kc(e.from-r.from,e.to-r.from)):null,!!i.bracketed,r.tree,e.length?e[0].from:r.from)),i.overlay?e.length&&(n={ranges:e,depth:0,prev:n}):o=!1}}else if(t&&(s=t.predicate(r))&&(s===!0&&(s=new kc(r.from,r.to)),s.from<s.to)){let e=t.ranges.length-1;e>=0&&t.ranges[e].to==s.from?t.ranges[e]={from:t.ranges[e].from,to:s.to}:t.ranges.push(s)}if(o&&r.firstChild())t&&t.depth++,n&&n.depth++;else for(;!r.nextSibling();){if(!r.parent())break scan;if(t&&!--t.depth){let e=gl(this.ranges,t.ranges);e.length&&(sl(e),this.inner.splice(t.index,0,new ol(t.parser,t.parser.startParse(this.input,vl(t.mounts,e),e),t.ranges.map(e=>new kc(e.from-t.start,e.to-t.start)),t.bracketed,t.target,e[0].from))),t=t.prev}n&&!--n.depth&&(n=n.prev)}}}};function dl(e,t,n){for(let r of e){if(r.from>=n)break;if(r.to>t)return r.from<=t&&r.to>=n?2:1}return 0}function fl(e,t,n,r,i,a){if(t<n){let o=e.buffer[t+1];r.push(e.slice(t,n,o)),i.push(o-a)}}function pl(e){let{node:t}=e,n=[],r=t.context.buffer;do n.push(e.index),e.parent();while(!e.tree);let i=e.tree,a=i.children.indexOf(r),o=i.children[a],s=o.buffer,c=[a];function l(e,r,i,a,u,d){let f=n[d],p=[],m=[];fl(o,e,f,p,m,a);let h=s[f+1],g=s[f+2];c.push(p.length);let _=d?l(f+4,s[f+3],o.set.types[s[f]],h,g-h,d-1):t.toTree();return p.push(_),m.push(h-a),fl(o,s[f+3],r,p,m,a),new R(i,p,m,u)}i.children[a]=l(0,s.length,Mc.none,0,o.length,n.length-1);for(let t of c){let n=e.tree.children[t],r=e.tree.positions[t];e.yield(new Vc(n,r+e.from,t,e._tree))}}var ml=class{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(L.IncludeAnonymous|L.IgnoreMounts|L.ExcludeBuffers)}moveTo(e){let{cursor:t}=this,n=e-this.offset;for(;!this.done&&t.from<n;)if(!(t.to>=n&&t.enter(n,1,L.IncludeAnonymous|L.IgnoreOverlays|L.ExcludeBuffers))){if(t.to<=n)t.next(!1)||(this.done=!0);else break}}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&t.positions[0]==0&&t.children[0]instanceof R)t=t.children[0];else break}return!1}},hl=class{constructor(e){if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let t=this.curFrag=e[0];this.curTo=t.tree.prop(ll)??t.to,this.inner=new ml(t.tree,-t.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let e=this.curFrag=this.fragments[this.fragI];this.curTo=e.tree.prop(ll)??e.to,this.inner=new ml(e.tree,-e.offset)}}findMounts(e,t){let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let e=this.inner.cursor.node;e;e=e.parent){let r=e.tree?.prop(I.mounted);if(r&&r.parser==t)for(let t=this.fragI;t<this.fragments.length;t++){let i=this.fragments[t];if(i.from>=e.to)break;i.tree==this.curFrag.tree&&n.push({frag:i,pos:e.from-i.offset,mount:r})}}}return n}};function gl(e,t){let n=null,r=t;for(let i=1,a=0;i<e.length;i++){let o=e[i-1].to,s=e[i].from;for(;a<r.length;a++){let e=r[a];if(e.from>=s)break;e.to<=o||(n||(r=n=t.slice()),e.from<o?(n[a]=new kc(e.from,o),e.to>s&&n.splice(a+1,0,new kc(s,e.to))):e.to>s?n[a--]=new kc(s,e.to):n.splice(a--,1))}}return r}function _l(e,t,n,r){let i=0,a=0,o=!1,s=!1,c=-1e9,l=[];for(;;){let u=i==e.length?1e9:o?e[i].to:e[i].from,d=a==t.length?1e9:s?t[a].to:t[a].from;if(o!=s){let e=Math.max(c,n),t=Math.min(u,d,r);e<t&&l.push(new kc(e,t))}if(c=Math.min(u,d),c==1e9)break;u==c&&(o?(o=!1,i++):o=!0),d==c&&(s?(s=!1,a++):s=!0)}return l}function vl(e,t){let n=[];for(let{pos:r,mount:i,frag:a}of e){let e=r+(i.overlay?i.overlay[0].from:0),o=e+i.tree.length,s=Math.max(a.from,e),c=Math.min(a.to,o);if(i.overlay){let o=_l(t,i.overlay.map(e=>new kc(e.from+r,e.to+r)),s,c);for(let t=0,r=s;;t++){let s=t==o.length,l=s?c:o[t].from;if(l>r&&n.push(new nl(r,l,i.tree,-e,a.from>=r||a.openStart,a.to<=l||a.openEnd)),s)break;r=o[t].to}}else n.push(new nl(s,c,i.tree,-e,a.from>=e||a.openStart,a.to<=o||a.openEnd))}return n}var yl=0,bl=class e{constructor(e,t,n,r){this.name=e,this.set=t,this.base=n,this.modified=r,this.id=yl++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,n){let r=typeof t==`string`?t:`?`;if(t instanceof e&&(n=t),n?.base)throw Error(`Can not derive from a modified tag`);let i=new e(r,[],null,[]);if(i.set.push(i),n)for(let e of n.set)i.set.push(e);return i}static defineModifier(e){let t=new Sl(e);return e=>e.modified.indexOf(t)>-1?e:Sl.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},xl=0,Sl=class e{constructor(e){this.name=e,this.instances=[],this.id=xl++}static get(t,n){if(!n.length)return t;let r=n[0].instances.find(e=>e.base==t&&Cl(n,e.modified));if(r)return r;let i=[],a=new bl(t.name,i,t,n);for(let e of n)e.instances.push(a);let o=wl(n);for(let n of t.set)if(!n.modified.length)for(let t of o)i.push(e.get(n,t));return a}};function Cl(e,t){return e.length==t.length&&e.every((e,n)=>e==t[n])}function wl(e){let t=[[]];for(let n=0;n<e.length;n++)for(let r=0,i=t.length;r<i;r++)t.push(t[r].concat(e[n]));return t.sort((e,t)=>t.length-e.length)}function Tl(e){let t=Object.create(null);for(let n in e){let r=e[n];Array.isArray(r)||(r=[r]);for(let e of n.split(` `))if(e){let n=[],i=2,a=e;for(let t=0;;){if(a==`...`&&t>0&&t+3==e.length){i=1;break}let r=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!r)throw RangeError(`Invalid path: `+e);if(n.push(r[0]==`*`?``:r[0][0]==`"`?JSON.parse(r[0]):r[0]),t+=r[0].length,t==e.length)break;let o=e[t++];if(t==e.length&&o==`!`){i=0;break}if(o!=`/`)throw RangeError(`Invalid path: `+e);a=e.slice(t)}let o=n.length-1,s=n[o];if(!s)throw RangeError(`Invalid path: `+e);t[s]=new Dl(r,i,o>0?n.slice(0,o):null).sort(t[s])}}return El.add(t)}var El=new I({combine(e,t){let n,r,i;for(;e||t;){if(!e||t&&e.depth<=t.depth?(i=t,t=t.next):(i=e,e=e.next),n&&n.mode==i.mode&&!i.context&&!n.context)continue;let a=new Dl(i.tags,i.mode,i.context);n?n.next=a:r=a,n=a}return r}}),Dl=class{constructor(e,t,n,r){this.tags=e,this.mode=t,this.context=n,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}};Dl.empty=new Dl([],2,null);function Ol(e,t){let n=Object.create(null);for(let t of e)if(!Array.isArray(t.tag))n[t.tag.id]=t.class;else for(let e of t.tag)n[e.id]=t.class;let{scope:r,all:i=null}=t||{};return{style:e=>{let t=i;for(let r of e)for(let e of r.set){let r=n[e.id];if(r){t=t?t+` `+r:r;break}}return t},scope:r}}function kl(e,t){let n=null;for(let r of e){let e=r.style(t);e&&(n=n?n+` `+e:e)}return n}function Al(e,t,n,r=0,i=e.length){let a=new jl(r,Array.isArray(t)?t:[t],n);a.highlightRange(e.cursor(),r,i,``,a.highlighters),a.flush(i)}var jl=class{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=``}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,r,i){let{type:a,from:o,to:s}=e;if(o>=n||s<=t)return;a.isTop&&(i=this.highlighters.filter(e=>!e.scope||e.scope(a)));let c=r,l=Ml(e)||Dl.empty,u=kl(i,l.tags);if(u&&(c&&(c+=` `),c+=u,l.mode==1&&(r+=(r?` `:``)+u)),this.startSpan(Math.max(t,o),c),l.opaque)return;let d=e.tree&&e.tree.prop(I.mounted);if(d&&d.overlay){let a=e.node.enter(d.overlay[0].from+o,1),l=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),u=e.firstChild();for(let f=0,p=o;;f++){let m=f<d.overlay.length?d.overlay[f]:null,h=m?m.from+o:s,g=Math.max(t,p),_=Math.min(n,h);if(g<_&&u)for(;e.from<_&&(this.highlightRange(e,g,_,r,i),this.startSpan(Math.min(_,e.to),c),!(e.to>=h||!e.nextSibling())););if(!m||h>n)break;p=m.to+o,p>t&&(this.highlightRange(a.cursor(),Math.max(t,m.from+o),Math.min(n,p),``,l),this.startSpan(Math.min(n,p),c))}u&&e.parent()}else if(e.firstChild()){d&&(r=``);do if(!(e.to<=t)){if(e.from>=n)break;this.highlightRange(e,t,n,r,i),this.startSpan(Math.min(n,e.to),c)}while(e.nextSibling());e.parent()}}};function Ml(e){let t=e.type.prop(El);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}var z=bl.define,Nl=z(),Pl=z(),Fl=z(Pl),Il=z(Pl),Ll=z(),Rl=z(Ll),zl=z(Ll),Bl=z(),Vl=z(Bl),Hl=z(),Ul=z(),Wl=z(),Gl=z(Wl),Kl=z(),B={comment:Nl,lineComment:z(Nl),blockComment:z(Nl),docComment:z(Nl),name:Pl,variableName:z(Pl),typeName:Fl,tagName:z(Fl),propertyName:Il,attributeName:z(Il),className:z(Pl),labelName:z(Pl),namespace:z(Pl),macroName:z(Pl),literal:Ll,string:Rl,docString:z(Rl),character:z(Rl),attributeValue:z(Rl),number:zl,integer:z(zl),float:z(zl),bool:z(Ll),regexp:z(Ll),escape:z(Ll),color:z(Ll),url:z(Ll),keyword:Hl,self:z(Hl),null:z(Hl),atom:z(Hl),unit:z(Hl),modifier:z(Hl),operatorKeyword:z(Hl),controlKeyword:z(Hl),definitionKeyword:z(Hl),moduleKeyword:z(Hl),operator:Ul,derefOperator:z(Ul),arithmeticOperator:z(Ul),logicOperator:z(Ul),bitwiseOperator:z(Ul),compareOperator:z(Ul),updateOperator:z(Ul),definitionOperator:z(Ul),typeOperator:z(Ul),controlOperator:z(Ul),punctuation:Wl,separator:z(Wl),bracket:Gl,angleBracket:z(Gl),squareBracket:z(Gl),paren:z(Gl),brace:z(Gl),content:Bl,heading:Vl,heading1:z(Vl),heading2:z(Vl),heading3:z(Vl),heading4:z(Vl),heading5:z(Vl),heading6:z(Vl),contentSeparator:z(Bl),list:z(Bl),quote:z(Bl),emphasis:z(Bl),strong:z(Bl),link:z(Bl),monospace:z(Bl),strikethrough:z(Bl),inserted:z(),deleted:z(),changed:z(),invalid:z(),meta:Kl,documentMeta:z(Kl),annotation:z(Kl),processingInstruction:z(Kl),definition:bl.defineModifier(`definition`),constant:bl.defineModifier(`constant`),function:bl.defineModifier(`function`),standard:bl.defineModifier(`standard`),local:bl.defineModifier(`local`),special:bl.defineModifier(`special`)};for(let e in B){let t=B[e];t instanceof bl&&(t.name=e)}Ol([{tag:B.link,class:`tok-link`},{tag:B.heading,class:`tok-heading`},{tag:B.emphasis,class:`tok-emphasis`},{tag:B.strong,class:`tok-strong`},{tag:B.keyword,class:`tok-keyword`},{tag:B.atom,class:`tok-atom`},{tag:B.bool,class:`tok-bool`},{tag:B.url,class:`tok-url`},{tag:B.labelName,class:`tok-labelName`},{tag:B.inserted,class:`tok-inserted`},{tag:B.deleted,class:`tok-deleted`},{tag:B.literal,class:`tok-literal`},{tag:B.string,class:`tok-string`},{tag:B.number,class:`tok-number`},{tag:[B.regexp,B.escape,B.special(B.string)],class:`tok-string2`},{tag:B.variableName,class:`tok-variableName`},{tag:B.local(B.variableName),class:`tok-variableName tok-local`},{tag:B.definition(B.variableName),class:`tok-variableName tok-definition`},{tag:B.special(B.variableName),class:`tok-variableName2`},{tag:B.definition(B.propertyName),class:`tok-propertyName tok-definition`},{tag:B.typeName,class:`tok-typeName`},{tag:B.namespace,class:`tok-namespace`},{tag:B.className,class:`tok-className`},{tag:B.macroName,class:`tok-macroName`},{tag:B.propertyName,class:`tok-propertyName`},{tag:B.operator,class:`tok-operator`},{tag:B.comment,class:`tok-comment`},{tag:B.meta,class:`tok-meta`},{tag:B.invalid,class:`tok-invalid`},{tag:B.punctuation,class:`tok-punctuation`}]);var ql=new I;function Jl(e){return E.define({combine:e?t=>t.concat(e):void 0})}var Yl=new I,Xl=class{constructor(e,t,n=[],r=``){this.data=e,this.name=r,O.prototype.hasOwnProperty(`tree`)||Object.defineProperty(O.prototype,"tree",{get(){return $l(this)}}),this.parser=t,this.extension=[cu.of(this),O.languageData.of((e,t,n)=>{let r=Zl(e,t,n),i=r.type.prop(ql);if(!i)return[];let a=e.facet(i),o=r.type.prop(Yl);if(o){let i=r.resolve(t-r.from,n);for(let t of o)if(t.test(i,e)){let n=e.facet(t.facet);return t.type==`replace`?n:n.concat(a)}}return a})].concat(n)}isActiveAt(e,t,n=-1){return Zl(e,t,n).type.prop(ql)==this.data}findRegions(e){let t=e.facet(cu);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],r=(e,t)=>{if(e.prop(ql)==this.data){n.push({from:t,to:t+e.length});return}let i=e.prop(I.mounted);if(i){if(i.tree.prop(ql)==this.data){if(i.overlay)for(let e of i.overlay)n.push({from:e.from+t,to:e.to+t});else n.push({from:t,to:t+e.length});return}if(i.overlay){let e=n.length;if(r(i.tree,i.overlay[0].from+t),n.length>e)return}}for(let n=0;n<e.children.length;n++){let i=e.children[n];i instanceof R&&r(i,e.positions[n]+t)}};return r($l(e),0),n}get allowsNesting(){return!0}};Xl.setState=D.define();function Zl(e,t,n){let r=e.facet(cu),i=$l(e).topNode;if(!r||r.allowsNesting)for(let e=i;e;e=e.enter(t,n,L.ExcludeBuffers|L.EnterBracketed))e.type.isTop&&(i=e);return i}var Ql=class e extends Xl{constructor(e,t,n){super(e,t,[],n),this.parser=t}static define(t){let n=Jl(t.languageData);return new e(n,t.parser.configure({props:[ql.add(e=>e.isTop?n:void 0)]}),t.name)}configure(t,n){return new e(this.data,this.parser.configure(t),n||this.name)}get allowsNesting(){return this.parser.hasWrappers()}};function $l(e){let t=e.field(Xl.state,!1);return t?t.tree:R.empty}var eu=class{constructor(e){this.doc=e,this.cursorPos=0,this.string=``,this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}},tu=null,nu=class e{constructor(e,t,n=[],r,i,a,o,s){this.parser=e,this.state=t,this.fragments=n,this.tree=r,this.treeLen=i,this.viewport=a,this.skipped=o,this.scheduleOn=s,this.parse=null,this.tempSkipped=[]}static create(t,n,r){return new e(t,n,[],R.empty,0,r,[],null)}startParse(){return this.parser.startParse(new eu(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=R.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{if(typeof e==`number`){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||=this.startParse(),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let n=this.parse.advance();if(n){if(this.fragments=this.withoutTempSkipped(nl.addTree(n,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=this.parse.stoppedAt??this.state.doc.length,this.tree=n,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0}if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(nl.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=tu;tu=this;try{return e()}finally{tu=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=ru(e,t.from,t.to);return e}changes(t,n){let{fragments:r,tree:i,treeLen:a,viewport:o,skipped:s}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges((t,n,r,i)=>e.push({fromA:t,toA:n,fromB:r,toB:i})),r=nl.applyChanges(r,e),i=R.empty,a=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){s=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);n<r&&s.push({from:n,to:r})}}}return new e(this.parser,n,r,i,a,o,s,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:n,to:r}=this.skipped[t];n<e.to&&r>e.from&&(this.fragments=ru(this.fragments,n,r),this.skipped.splice(t--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&=(this.takeTree(),null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends rl{createParse(t,n,r){let i=r[0].from,a=r[r.length-1].to;return{parsedPos:i,advance(){let t=tu;if(t){for(let e of r)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=a,new R(Mc.none,[],[],a-i)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return tu}};function ru(e,t,n){return nl.applyChanges(e,[{fromA:t,toA:n,fromB:t,toB:n}])}var iu=class e{constructor(e){this.context=e,this.tree=e.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let n=this.context.changes(t.changes,t.state),r=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),n.viewport.to);return n.work(20,r)||n.takeTree(),new e(n)}static init(t){let n=Math.min(3e3,t.doc.length),r=nu.create(t.facet(cu).parser,t,{from:0,to:n});return r.work(20,n)||r.takeTree(),new e(r)}};Xl.state=Qt.define({create:iu.init,update(e,t){for(let e of t.effects)if(e.is(Xl.setState))return e.value;return t.startState.facet(cu)==t.state.facet(cu)?e.apply(t):iu.init(t.state)}});var au=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};typeof requestIdleCallback<`u`&&(au=e=>{let t=-1,n=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(n):cancelIdleCallback(t)});var ou=typeof navigator<`u`&&navigator.scheduling?.isInputPending?()=>navigator.scheduling.isInputPending():null,su=ta.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Xl.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Xl.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=au(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,i=n.field(Xl.state);if(i.tree==i.context.tree&&i.context.isDone(r+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!ou?Math.max(25,e.timeRemaining()-5):1e9),o=i.context.treeLen<r&&n.doc.length>r+1e3,s=i.context.work(()=>ou&&ou()||Date.now()>a,r+(o?0:1e5));this.chunkBudget-=Date.now()-t,(s||this.chunkBudget<=0)&&(i.context.takeTree(),this.view.dispatch({effects:Xl.setState.of(new iu(i.context))})),this.chunkBudget>0&&(!s||o)&&this.scheduleWork(),this.checkAsyncSchedule(i.context)}checkAsyncSchedule(e){e.scheduleOn&&=(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>Zi(this.view.state,e)).then(()=>this.workScheduled--),null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),cu=E.define({combine(e){return e.length?e[0]:null},enables:e=>[Xl.state,su,F.contentAttributes.compute([e],t=>{let n=t.facet(e);return n&&n.name?{"data-language":n.name}:{}})]}),lu=class{constructor(e,t=[]){this.language=e,this.support=t,this.extension=[e,t]}},uu=class e{constructor(e,t,n,r,i,a=void 0){this.name=e,this.alias=t,this.extensions=n,this.filename=r,this.loadFunc=i,this.support=a,this.loading=null}load(){return this.loading||=this.loadFunc().then(e=>this.support=e,e=>{throw this.loading=null,e})}static of(t){let{load:n,support:r}=t;if(!n){if(!r)throw RangeError(`Must pass either 'load' or 'support' to LanguageDescription.of`);n=()=>Promise.resolve(r)}return new e(t.name,(t.alias||[]).concat(t.name).map(e=>e.toLowerCase()),t.extensions||[],t.filename,n,r)}static matchFilename(e,t){for(let n of e)if(n.filename&&n.filename.test(t))return n;let n=/\.([^.]+)$/.exec(t);if(n){for(let t of e)if(t.extensions.indexOf(n[1])>-1)return t}return null}static matchLanguageName(e,t,n=!0){t=t.toLowerCase();for(let n of e)if(n.alias.some(e=>e==t))return n;if(n)for(let n of e)for(let e of n.alias){let r=t.indexOf(e);if(r>-1&&(e.length>2||!/\w/.test(t[r-1])&&!/\w/.test(t[r+e.length])))return n}return null}},du=E.define({combine:e=>{if(!e.length)return`  `;let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw Error(`Invalid indent unit: `+JSON.stringify(e[0]));return t}});function fu(e){let t=e.facet(du);return t.charCodeAt(0)==9?e.tabSize*t.length:t.length}var pu=new I;function mu(e){let t=e.node,n=t.childAfter(t.from),r=t.lastChild;if(!n)return null;let i=e.options.simulateBreak,a=e.state.doc.lineAt(n.from),o=i==null||i<=a.from?a.to:Math.min(a.to,i);for(let e=n.to;;){let i=t.childAfter(e);if(!i||i==r)return null;if(!i.type.isSkipped){if(i.from>=o)return null;let e=/^ */.exec(a.text.slice(n.to-a.from))[0].length;return{from:n.from,to:n.to+e}}e=i.to}}function hu({closing:e,align:t=!0,units:n=1}){return r=>gu(r,t,n,e)}function gu(e,t,n,r,i){let a=e.textAfter,o=a.match(/^\s*/)[0].length,s=r&&a.slice(o,o+r.length)==r||i==e.pos+o,c=t?mu(e):null;return c?s?e.column(c.from):e.column(c.to):e.baseIndent+(s?0:e.unit*n)}var _u=e=>e.baseIndent;function vu({except:e,units:t=1}={}){return n=>{let r=e&&e.test(n.textAfter);return n.baseIndent+(r?0:t*n.unit)}}var yu=E.define(),bu=new I;function xu(e){let t=e.firstChild,n=e.lastChild;return t&&t.to<n.from?{from:t.to,to:n.type.isError?e.to:n.from}:null}var Su=class e{constructor(e,t){this.specs=e;let n;function r(e){let t=ir.newName();return(n||=Object.create(null))[`.`+t]=e,t}let i=typeof t.all==`string`?t.all:t.all?r(t.all):void 0,a=t.scope;this.scope=a instanceof Xl?e=>e.prop(ql)==a.data:a?e=>e==a:void 0,this.style=Ol(e.map(e=>({tag:e.tag,class:e.class||r(Object.assign({},e,{tag:null}))})),{all:i}).style,this.module=n?new ir(n):null,this.themeType=t.themeType}static define(t,n){return new e(t,n||{})}},Cu=E.define(),wu=E.define({combine(e){return e.length?[e[0]]:null}});function Tu(e){let t=e.facet(Cu);return t.length?t:e.facet(wu)}function Eu(e,t){let n=[Ou],r;return e instanceof Su&&(e.module&&n.push(F.styleModule.of(e.module)),r=e.themeType),t?.fallback?n.push(wu.of(e)):r?n.push(Cu.computeN([F.darkTheme],t=>t.facet(F.darkTheme)==(r==`dark`)?[e]:[])):n.push(Cu.of(e)),n}var Du=class{constructor(e){this.markCache=Object.create(null),this.tree=$l(e.state),this.decorations=this.buildDeco(e,Tu(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=$l(e.state),n=Tu(e.state),r=n!=Tu(e.startState),{viewport:i}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<i.to&&!r&&t.type==this.tree.type&&a>=i.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||r)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=i.to)}buildDeco(e,t){if(!t||!this.tree.length)return Nr.none;let n=new Vn;for(let{from:r,to:i}of e.visibleRanges)Al(this.tree,t,(e,t,r)=>{n.add(e,t,this.markCache[r]||(this.markCache[r]=Nr.mark({class:r})))},r,i);return n.finish()}},Ou=tn.high(ta.fromClass(Du,{decorations:e=>e.decorations}));B.meta,B.link,B.heading,B.emphasis,B.strong,B.strikethrough,B.keyword,B.atom,B.bool,B.url,B.contentSeparator,B.labelName,B.literal,B.inserted,B.string,B.deleted,B.regexp,B.escape,B.string,B.variableName,B.variableName,B.typeName,B.namespace,B.className,B.variableName,B.macroName,B.propertyName,B.comment,B.invalid;var ku=new I;function Au(e,t,n,r=0,i=0){t??(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length));let a=i;for(let i=r;i<t;i++)e.charCodeAt(i)==9?a+=n-a%n:a++;return a}var ju=class{constructor(e,t,n,r){this.string=e,this.tabSize=t,this.indentUnit=n,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(e){let t=this.string.charAt(this.pos),n;if(n=typeof e==`string`?t==e:t&&(e instanceof RegExp?e.test(t):e(t)),n)return++this.pos,t}eatWhile(e){let t=this.pos;for(;this.eat(e););return this.pos>t}eatSpace(){let e=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e}skipToEnd(){this.pos=this.string.length}skipTo(e){let t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0}backUp(e){this.pos-=e}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Au(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return this.overrideIndent??Au(this.string,null,this.tabSize)}match(e,t,n){if(typeof e==`string`){let r=e=>n?e.toLowerCase():e;return r(this.string.substr(this.pos,e.length))==r(e)?(t!==!1&&(this.pos+=e.length),!0):null}{let n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}}current(){return this.string.slice(this.start,this.pos)}};function Mu(e){return{name:e.name||``,token:e.token,blankLine:e.blankLine||(()=>{}),startState:e.startState||(()=>!0),copyState:e.copyState||Nu,indent:e.indent||(()=>null),languageData:e.languageData||{},tokenTable:e.tokenTable||Vu,mergeTokens:e.mergeTokens!==!1}}function Nu(e){if(typeof e!=`object`)return e;let t={};for(let n in e){let r=e[n];t[n]=r instanceof Array?r.slice():r}return t}var Pu=new WeakMap,Fu=class e extends Xl{constructor(e){let t=Jl(e.languageData),n=Mu(e),r,i=new class extends rl{createParse(e,t,n){return new zu(r,e,t,n)}};super(t,i,[],e.name),this.topNode=Zu(t,this),r=this,this.streamParser=n,this.stateAfter=new I({perNode:!0}),this.tokenTable=e.tokenTable?new qu(n.tokenTable):Ju}static define(t){return new e(t)}getIndent(e){let t,{overrideIndentation:n}=e.options;n&&(t=Pu.get(e.state),t!=null&&t<e.pos-1e4&&(t=void 0));let r=Iu(this,e.node.tree,e.node.from,e.node.from,t??e.pos),i,a;if(r?(a=r.state,i=r.pos+1):(a=this.streamParser.startState(e.unit),i=e.node.from),e.pos-i>1e4)return null;for(;i<e.pos;){let t=e.state.doc.lineAt(i),r=Math.min(e.pos,t.to);if(t.length){let i=n?n(t.from):-1,o=new ju(t.text,e.state.tabSize,e.unit,i<0?void 0:i);for(;o.pos<r-t.from;)Bu(this.streamParser.token,o,a)}else this.streamParser.blankLine(a,e.unit);if(r==e.pos)break;i=t.to+1}let o=e.lineAt(e.pos);return n&&t==null&&Pu.set(e.state,o.from),this.streamParser.indent(a,/^\s*(.*)/.exec(o.text)[1],e)}get allowsNesting(){return!1}};function Iu(e,t,n,r,i){let a=n>=r&&n+t.length<=i&&t.prop(e.stateAfter);if(a)return{state:e.streamParser.copyState(a),pos:n+t.length};for(let a=t.children.length-1;a>=0;a--){let o=t.children[a],s=n+t.positions[a],c=o instanceof R&&s<i&&Iu(e,o,s,r,i);if(c)return c}return null}function Lu(e,t,n,r,i){if(i&&n<=0&&r>=t.length)return t;!i&&n==0&&t.type==e.topNode&&(i=!0);for(let a=t.children.length-1;a>=0;a--){let o=t.positions[a],s=t.children[a],c;if(o<r&&s instanceof R){if(!(c=Lu(e,s,n-o,r-o,i)))break;return i?new R(t.type,t.children.slice(0,a).concat(c),t.positions.slice(0,a+1),o+c.length):c}}return null}function Ru(e,t,n,r,i){for(let i of t){let t=i.from+(i.openStart?25:0),a=i.to-(i.openEnd?25:0),o=t<=n&&a>n&&Iu(e,i.tree,0-i.offset,n,a),s;if(o&&o.pos<=r&&(s=Lu(e,i.tree,n+i.offset,o.pos+i.offset,!1)))return{state:o.state,tree:s}}return{state:e.streamParser.startState(i?fu(i):4),tree:R.empty}}var zu=class{constructor(e,t,n,r){this.lang=e,this.input=t,this.fragments=n,this.ranges=r,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=r[r.length-1].to;let i=nu.get(),a=r[0].from,{state:o,tree:s}=Ru(e,n,a,this.to,i?.state);this.state=o,this.parsedPos=this.chunkStart=a+s.length;for(let e=0;e<s.children.length;e++)this.chunks.push(s.children[e]),this.chunkPos.push(s.positions[e]);i&&this.parsedPos<i.viewport.from-1e5&&r.some(e=>e.from<=i.viewport.from&&e.to>=i.viewport.from)&&(this.state=this.lang.streamParser.startState(fu(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let e=nu.get(),t=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(t,this.chunkStart+512);for(e&&(n=Math.min(n,e.viewport.to));this.parsedPos<n;)this.parseLine(e);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=t?this.finish():e&&this.parsedPos>=e.viewport.to?(e.skipUntilInView(this.parsedPos,t),this.finish()):null}stopAt(e){this.stoppedAt=e}lineAfter(e){let t=this.input.chunk(e);if(this.input.lineChunks)t==`
`&&(t=``);else{let e=t.indexOf(`
`);e>-1&&(t=t.slice(0,e))}return e+t.length<=this.to?t:t.slice(0,this.to-e)}nextLine(){let e=this.parsedPos,t=this.lineAfter(e),n=e+t.length;for(let e=this.rangeIndex;;){let r=this.ranges[e].to;if(r>=n||(t=t.slice(0,r-(n-t.length)),e++,e==this.ranges.length))break;let i=this.ranges[e].from,a=this.lineAfter(i);t+=a,n=i+a.length}return{line:t,end:n}}skipGapsTo(e,t,n){for(;;){let r=this.ranges[this.rangeIndex].to,i=e+t;if(n>0?r>i:r>=i)break;let a=this.ranges[++this.rangeIndex].from;t+=a-r}return t}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(e,t,n,r){let i=4;if(this.ranges.length>1){r=this.skipGapsTo(t,r,1),t+=r;let e=this.chunk.length;r=this.skipGapsTo(n,r,-1),n+=r,i+=this.chunk.length-e}let a=this.chunk.length-4;return this.lang.streamParser.mergeTokens&&i==4&&a>=0&&this.chunk[a]==e&&this.chunk[a+2]==t?this.chunk[a+2]=n:this.chunk.push(e,t,n,i),r}parseLine(e){let{line:t,end:n}=this.nextLine(),r=0,{streamParser:i}=this.lang,a=new ju(t,e?e.state.tabSize:4,e?fu(e.state):2);if(a.eol())i.blankLine(this.state,a.indentUnit);else for(;!a.eol();){let e=Bu(i.token,a,this.state);if(e&&(r=this.emitToken(this.lang.tokenTable.resolve(e),this.parsedPos+a.start,this.parsedPos+a.pos,r)),a.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let e=R.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:Uu,topID:0,maxBufferLength:512,reused:this.chunkReused});e=new R(e.type,e.children,e.positions,e.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(e),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new R(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}};function Bu(e,t,n){t.start=t.pos;for(let r=0;r<10;r++){let r=e(t,n);if(t.pos>t.start)return r}throw Error(`Stream parser failed to advance stream.`)}var Vu=Object.create(null),Hu=[Mc.none],Uu=new Nc(Hu),Wu=[],Gu=Object.create(null),Ku=Object.create(null);for(let[e,t]of[[`variable`,`variableName`],[`variable-2`,`variableName.special`],[`string-2`,`string.special`],[`def`,`variableName.definition`],[`tag`,`tagName`],[`attribute`,`attributeName`],[`type`,`typeName`],[`builtin`,`variableName.standard`],[`qualifier`,`modifier`],[`error`,`invalid`],[`header`,`heading`],[`property`,`propertyName`]])Ku[e]=Xu(Vu,t);var qu=class{constructor(e){this.extra=e,this.table=Object.assign(Object.create(null),Ku)}resolve(e){return e?this.table[e]||(this.table[e]=Xu(this.extra,e)):0}},Ju=new qu(Vu);function Yu(e,t){Wu.indexOf(e)>-1||(Wu.push(e),console.warn(t))}function Xu(e,t){let n=[];for(let r of t.split(` `)){let t=[];for(let n of r.split(`.`)){let r=e[n]||B[n];r?typeof r==`function`?t.length?t=t.map(r):Yu(n,`Modifier ${n} used at start of tag`):t.length?Yu(n,`Tag ${n} used as modifier`):t=Array.isArray(r)?r:[r]:Yu(n,`Unknown highlighting tag ${n}`)}for(let e of t)n.push(e)}if(!n.length)return 0;let r=t.replace(/ /g,`_`),i=r+` `+n.map(e=>e.id),a=Gu[i];if(a)return a.id;let o=Gu[i]=Mc.define({id:Hu.length,name:r,props:[Tl({[r]:n})]});return Hu.push(o),o.id}function Zu(e,t){let n=Mc.define({id:Hu.length,name:`Document`,props:[ql.add(()=>e),pu.add(()=>e=>t.getIndent(e))],top:!0});return Hu.push(n),n}j.RTL,j.LTR;var Qu=[F.theme({"&":{height:`100%`,color:`var(--semantics-content-color)`,backgroundColor:`transparent`},"&.cm-focused":{outline:`none`},".cm-scroller":{fontFamily:`inherit`,lineHeight:`inherit`,overflow:`auto`},".cm-content":{padding:`0`,caretColor:`var(--semantics-content-color)`},".cm-line":{padding:`0`},".cm-cursor, .cm-dropCursor":{borderLeftColor:`var(--semantics-content-color)`},".cm-placeholder":{color:`var(--semantics-input-fields-placeholder-color)`},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:`light-dark(var(--primitives-color-accent-150), var(--primitives-color-accent-250))`},".cm-gutters":{border:`none`,backgroundColor:`transparent`,color:`var(--semantics-input-fields-placeholder-color)`},".cm-lineNumbers .cm-gutterElement":{padding:`0 var(--primitives-space-16) 0 var(--primitives-space-8)`},".cm-activeLine, .cm-activeLineGutter":{backgroundColor:`transparent`}}),Eu(Su.define([{tag:[B.comment,B.lineComment,B.blockComment,B.docComment],color:`var(--components-code-viewer-token-comment-color)`,fontStyle:`italic`},{tag:[B.keyword,B.modifier,B.controlKeyword,B.operatorKeyword],color:`var(--components-code-viewer-token-keyword-color)`},{tag:[B.string,B.special(B.string),B.character],color:`var(--components-code-viewer-token-string-color)`},{tag:[B.number,B.integer,B.float],color:`var(--components-code-viewer-token-number-color)`},{tag:B.bool,color:`var(--components-code-viewer-token-boolean-color)`},{tag:B.null,color:`var(--components-code-viewer-token-null-color)`},{tag:[B.function(B.variableName),B.function(B.propertyName)],color:`var(--components-code-viewer-token-function-color)`},{tag:[B.className,B.typeName,B.namespace],color:`var(--components-code-viewer-token-class-color)`},{tag:[B.propertyName,B.attributeName],color:`var(--components-code-viewer-token-property-color)`},{tag:[B.punctuation,B.separator,B.bracket],color:`var(--components-code-viewer-token-punctuation-color)`},{tag:B.operator,color:`var(--components-code-viewer-token-operator-color)`},{tag:B.tagName,color:`var(--components-code-viewer-token-tag-color)`},{tag:B.attributeValue,color:`var(--components-code-viewer-token-attr-value-color)`},{tag:B.variableName,color:`var(--components-code-viewer-token-variable-color)`},{tag:[B.constant(B.variableName),B.standard(B.variableName)],color:`var(--components-code-viewer-token-constant-color)`},{tag:B.regexp,color:`var(--components-code-viewer-token-regex-color)`},{tag:B.url,color:`var(--components-code-viewer-token-url-color)`},{tag:B.strong,fontWeight:`bold`},{tag:B.emphasis,fontStyle:`italic`}]))],$u={json:async()=>(await x(async()=>{let{json:e}=await import(`./dist.CBfQ8g78.js`);return{json:e}},__vite__mapDeps([0,1]))).json(),yaml:async()=>(await x(async()=>{let{yaml:e}=await import(`./dist.Cd4vgKWk.js`);return{yaml:e}},__vite__mapDeps([2,1]))).yaml(),javascript:async()=>(await x(async()=>{let{javascript:e}=await import(`./dist.DMJTMcka.js`).then(e=>e.t);return{javascript:e}},__vite__mapDeps([3,4,5,6,7,1,8]))).javascript(),typescript:async()=>(await x(async()=>{let{javascript:e}=await import(`./dist.DMJTMcka.js`).then(e=>e.t);return{javascript:e}},__vite__mapDeps([3,4,5,6,7,1,8]))).javascript({typescript:!0}),css:async()=>(await x(async()=>{let{css:e}=await import(`./dist.BEk9YKDY.js`).then(e=>e.r);return{css:e}},__vite__mapDeps([9,4,5,6,7,1]))).css(),html:async()=>(await x(async()=>{let{html:e}=await import(`./dist.3O4hMHWO.js`);return{html:e}},__vite__mapDeps([10,1,9,4,5,6,7,3,8]))).html(),xml:async()=>(await x(async()=>{let{xml:e}=await import(`./dist.CPJ55cwe.js`);return{xml:e}},__vite__mapDeps([11,1]))).xml(),python:async()=>(await x(async()=>{let{python:e}=await import(`./dist.nqTWPzGT.js`);return{python:e}},__vite__mapDeps([12,1,8]))).python(),rust:async()=>(await x(async()=>{let{rust:e}=await import(`./dist.CYhK4MCp.js`);return{rust:e}},__vite__mapDeps([13,1]))).rust(),sql:async()=>(await x(async()=>{let{sql:e}=await import(`./dist.B90x9YkE.js`);return{sql:e}},__vite__mapDeps([14,1,8]))).sql(),markdown:async()=>(await x(async()=>{let{markdown:e}=await import(`./dist.CFFWl064.js`);return{markdown:e}},__vite__mapDeps([15,8,10,1,9,4,5,6,7,3]))).markdown(),bash:async()=>new lu(Fu.define((await x(async()=>{let{shell:e}=await import(`./shell.DwuoZtxw.js`);return{shell:e}},[])).shell)),toml:async()=>new lu(Fu.define((await x(async()=>{let{toml:e}=await import(`./toml.BPTmHmyx.js`);return{toml:e}},[])).toml)),gherkin:async()=>new lu(Fu.define((await x(async()=>{let{gherkin:e}=await import(`./gherkin.oBAE_ms0.js`);return{gherkin:e}},[])).gherkin))},ed=new Map;function td(e){let t=$u[e];if(!t)return;let n=ed.get(e);return n||(n=t().catch(t=>{throw ed.delete(e),t}),ed.set(e,n)),n}var nd=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_corner-radius: var(--semantics-surfaces-corner-radius);
		--_background-color: var(--semantics-surfaces-tinted-background-color);
		--_border-width: var(--semantics-surfaces-border-width);
		--_border-color: var(--semantics-surfaces-tinted-border-color);
		--_border-shadow: inset 0 0 0 var(--_border-width) var(--_border-color);
		--_block-padding: var(--primitives-space-16);
		--_inline-padding: var(--primitives-space-16);
		--_content-color: var(--semantics-content-color);
		--_font: var(--primitives-font-monospace-sm-regular-snug);
		--_actions-area-padding: var(--primitives-space-8);
		--_actions-area-size: calc(var(--semantics-controls-md-min-size) + var(--_actions-area-padding) * 2);
		--_actions-z-index: 1;

		${v}
		display: flex;
		position: relative;
		/* Own stacking context so the absolutely-positioned actions button
		   (z-index: var(--_actions-z-index)) stays scoped to the code-viewer
		   and can't paint over other layers on the page. */
		isolation: isolate;
		/* iOS Safari inflates text in wide scrollable blocks (text autosizing);
		   lock the size so code renders at the authored font-size on mobile. */
		-webkit-text-size-adjust: 100%;
		text-size-adjust: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	:host([appearance="box-base"]) {
		--_background-color: var(--semantics-surfaces-base-background-color);
		--_border-color: var(--semantics-surfaces-base-border-color);
	}

	:host([appearance="simple"]) {
		--_corner-radius: 0;
		--_background-color: transparent;
		--_border-color: transparent;
		--_block-padding: 0;
		--_inline-padding: 0;
	}


	/* # Block — CodeMirror (read-only) mounts into .code-viewer */

	.code-viewer {
		box-sizing: border-box;
		position: relative;
		border-radius: var(--_corner-radius);
		/* Inner box-shadow paints the border ring inside the radius
		   without taking layout space — matches nldd-box / nldd-banner.
		   appearance="simple" suppresses the ring via --_border-color. The
		   forced-colors fallback at the bottom restores a real border. */
		box-shadow: var(--_border-shadow);
		background-color: var(--_background-color);
		min-width: 0;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: auto;
		padding: var(--_block-padding) var(--_inline-padding);
		color: var(--_content-color);
		font: var(--_font);
	}

	/* Reserve the actions space only when the copy button actually renders: not
	   opted out (no-copy) and the Clipboard API is usable (copy-unavailable is
	   set by JS when it isn't). Both attributes suppress the button, so both drop
	   the reserved space. */
	:host(:not([no-copy]):not([copy-unavailable])) .code-viewer {
		min-height: var(--_actions-area-size);
		padding-right: var(--_actions-area-size);
	}

	:host([appearance="simple"]:not([no-copy]):not([copy-unavailable])) {
		--_actions-area-padding: 0;
	}

	:host([appearance="simple"]:not([no-copy]):not([copy-unavailable])) .code-viewer {
		min-height: var(--_actions-area-size);
		padding-right: 0;
	}

	/* The horizontally-scrollable region is CodeMirror's scroller; it gets
	   tabindex/role/aria-label from JS when content overflows. Lift the focus
	   ring onto the framed block so it reads as one element. */
	.code-viewer:has(.cm-scroller:focus-visible) {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow), var(--_border-shadow);
	}

	.cm-content {
		tab-size: 2;
	}

	/* The slot is the declarative content + copy source only; CodeMirror
	   renders the visible, highlighted copy. */
	slot {
		display: none;
	}


	/* # Elements */

	.code-viewer__actions {
		position: absolute;
		top: var(--_actions-area-padding);
		right: var(--_actions-area-padding);
		z-index: var(--_actions-z-index);
	}

	.code-viewer__live-region {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}


	/* # High Contrast
	   forced-colors strips box-shadow, so the inset
	   border ring would disappear. Restore the frame with a real border —
	   same fallback nldd-box, nldd-banner, and nldd-list use. */

	@media (forced-colors: active) {
		:host .code-viewer {
			border: var(--_border-width) solid CanvasText;
		}

		:host([appearance="simple"]) .code-viewer {
			border: none;
		}
	}
`;function rd(e){let t=e._copyState,i=t===`success`?e._t(`components.code-viewer.copy-success-text`):t===`failure`?e._t(`components.code-viewer.copy-failure-text`):e._t(`components.code-viewer.copy-action`),a=i,o=t===`success`?e._t(`components.code-viewer.copy-success-text`):t===`failure`?e._t(`components.code-viewer.copy-failure-text`):``;return r`<div class="code-viewer"></div><slot @slotchange=${e._onSlotChange}></slot>${e._canCopy?r`
		<div class="code-viewer__actions">
			<div class="code-viewer__copy-button">
				<nldd-tooltip
					text=${i}
					placement="left"
					?open=${t!==`idle`}
					@nldd-tooltip-dismiss=${e._onCopyDismiss}
				>
					<nldd-icon-button
						icon=${t===`success`?`check-mark`:`copy`}
						accessible-label=${a}
						tooltip-timing="never"
						size="md"
						@click=${e._onCopyClick}
					></nldd-icon-button>
				</nldd-tooltip>
			</div>
			<div class="code-viewer__live-region"
				role="status"
				aria-live="polite"
			>${o}</div>
		</div>
	`:n}`}var id={"components.code-viewer.region-label":`Code`,"components.code-viewer.copy-action":`Kopieer`,"components.code-viewer.copy-success-text":`Gekopieerd`,"components.code-viewer.copy-failure-text":`Kopiëren mislukt`},ad=new Set,od=null;function sd(){od||(od=new MutationObserver(e=>{for(let t of e)if(t.attributeName===`data-scheme`){for(let e of ad)e();return}}),od.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-scheme`]}))}function cd(e){return sd(),ad.add(e),()=>{ad.delete(e),ad.size===0&&(od?.disconnect(),od=null)}}function ld(e){let t=e.scrollLeft,n=e.scrollTop,r=e.style.display;e.style.display=`none`,e.offsetHeight,e.style.display=r,e.scrollLeft=t,e.scrollTop=n}var ud=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dd=2e3;function fd(){return typeof window<`u`&&window.isSecureContext===!0&&typeof navigator<`u`&&typeof navigator.clipboard?.writeText==`function`}var pd=class extends Ec{constructor(){super(...arguments),this.appearance=`box-tinted`,this.language=``,this.noCopy=!1,this.wrap=!1,this._copyUnavailable=!1,this.translations={},this._isScrollable=!1,this._copyState=`idle`,this._languageCompartment=new rn,this._wrapCompartment=new rn,this._languagePending=Promise.resolve()}get _canCopy(){return!this.noCopy&&fd()}getEditorParent(){return this.shadowRoot?.querySelector(`.code-viewer`)}buildExtensions(){return[Qu,F.editable.of(!1),O.readOnly.of(!0),F.contentAttributes.of({role:`code`,"aria-multiline":null,"aria-readonly":null}),this._wrapCompartment.of(this.wrap?F.lineWrapping:[]),this._languageCompartment.of([])]}render(){return rd(this)}focus(e){let t=this.view?.scrollDOM;this._isScrollable&&t&&t.focus(e)}getRemountDoc(){return this._getRawText()}connectedCallback(){super.connectedCallback(),this._unsubscribeScheme=cd(()=>this._repaint())}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeScheme?.(),this._unsubscribeScheme=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._mutationObserver?.disconnect(),this._mutationObserver=void 0,this._scrollableRaf!==void 0&&(cancelAnimationFrame(this._scrollableRaf),this._scrollableRaf=void 0),clearTimeout(this._copyResetTimer),this._copyResetTimer=void 0}firstUpdated(){this._copyUnavailable=!this.noCopy&&!fd(),this.mountEditor(this._getRawText()),this.onEditorMounted()}_observeSlotText(){this._mutationObserver?.disconnect(),this._mutationObserver=new MutationObserver(()=>this._onSlotChange()),this._mutationObserver.observe(this,{characterData:!0,subtree:!0,childList:!0})}onEditorMounted(){let e=this.view?.scrollDOM;e&&(this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{e.every(e=>e.contentRect.width===0)||this._scheduleUpdateScrollable()}),this._resizeObserver.observe(e)),this._observeSlotText(),this.language&&this._applyLanguage(),this._updateScrollable()}updated(e){e.has(`noCopy`)&&(this._copyUnavailable=!this.noCopy&&!fd()),this.view&&(this._isScrollable&&this.view.scrollDOM.setAttribute(`aria-label`,this._t(`components.code-viewer.region-label`)),e.has(`language`)&&this._applyLanguage(),e.has(`wrap`)&&(this.reconfigure(this._wrapCompartment,this.wrap?F.lineWrapping:[]),this._updateScrollable()),(e.has(`appearance`)||e.has(`noCopy`)||e.has(`_copyUnavailable`))&&this._updateScrollable())}_onSlotChange(){this.setDoc(this._getRawText()),this._updateScrollable()}_t(e){return y(this.translations,id,e)}async getUpdateComplete(){let e=await super.getUpdateComplete();return await this._languagePending,e}_applyLanguage(){this._languagePending=this._runLanguage()}async _runLanguage(){let e=this.language;if(!e){this.reconfigure(this._languageCompartment,[]);return}let t=td(e);if(!t){this.reconfigure(this._languageCompartment,[]);return}try{let n=await t;this.language===e&&(this.reconfigure(this._languageCompartment,n),this._updateScrollable())}catch{this.reconfigure(this._languageCompartment,[])}}_scheduleUpdateScrollable(){this._scrollableRaf===void 0&&(this._scrollableRaf=requestAnimationFrame(()=>{this._scrollableRaf=void 0,this._updateScrollable()}))}_updateScrollable(){let e=this.view?.scrollDOM;if(!e||e.clientWidth===0)return;let t=!this.wrap&&e.scrollWidth>e.clientWidth;this._isScrollable=t,t?(e.setAttribute(`tabindex`,`0`),e.setAttribute(`role`,`region`),e.setAttribute(`aria-label`,this._t(`components.code-viewer.region-label`))):(e.removeAttribute(`tabindex`),e.removeAttribute(`role`),e.removeAttribute(`aria-label`))}_getRawText(){let e=this.shadowRoot?.querySelector(`slot`);return e?e.assignedNodes({flatten:!0}).map(e=>e.textContent??``).join(``):``}async _onCopyClick(){try{if(!fd())throw Error(`Clipboard API unavailable`);await navigator.clipboard.writeText(this._getRawText()),this._copyState=`success`}catch{this._copyState=`failure`}clearTimeout(this._copyResetTimer),this._copyResetTimer=setTimeout(()=>{this._copyState=`idle`},dd)}_onCopyDismiss(){clearTimeout(this._copyResetTimer),this._copyState=`idle`}_repaint(){let e=this.view?.scrollDOM;e&&ld(e)}};pd.styles=nd,ud([c({reflect:!0,converter:p(`box-tinted`)})],pd.prototype,`appearance`,void 0),ud([c({reflect:!0,converter:p(``)})],pd.prototype,`language`,void 0),ud([c({type:Boolean,reflect:!0,attribute:`no-copy`})],pd.prototype,`noCopy`,void 0),ud([c({type:Boolean,reflect:!0})],pd.prototype,`wrap`,void 0),ud([c({type:Boolean,reflect:!0,attribute:`copy-unavailable`})],pd.prototype,`_copyUnavailable`,void 0),ud([c({type:Object})],pd.prototype,`translations`,void 0),ud([d()],pd.prototype,`_isScrollable`,void 0),ud([d()],pd.prototype,`_copyState`,void 0),pd=ud([u(`nldd-code-viewer`)],pd);var md=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: auto;
		--_min-width: 0;
		--_max-width: none;
		--_min-height: 0;

		${v}
		/* !important: shields the row padding from consumer universal resets, which beat normal :host declarations per CSS Scoping. */
		padding-block: var(--context-cell-padding-block, 0px) !important;
		display: flex;
		width: var(--_width);
		min-width: var(--_min-width);
		max-width: var(--_max-width);
		min-height: var(--_min-height);
		flex-direction: column;
		flex-shrink: 0;
		align-items: flex-start;
		justify-content: center;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Width */

	:host([width="full"]) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	:host([width="fit-content"]),
	:host(:not([width])),
	:host([width=""]) {
		width: fit-content;
		flex-grow: 0;
		flex-basis: auto;
	}

	:host([width]:not([width="full"]):not([width="fit-content"]):not([width=""])) {
		flex-shrink: 0;
	}

	:host([max-width]) {
		flex-basis: var(--_max-width);
	}


	/* # Vertical alignment */

	:host([vertical-alignment="center"]),
	:host(:not([vertical-alignment])) {
		align-self: stretch;
	}

	:host([vertical-alignment="top"]) {
		align-self: flex-start;
	}

	:host([vertical-alignment="bottom"]) {
		align-self: flex-end;
	}


	/* # Horizontal alignment */

	:host([horizontal-alignment="left"]),
	:host(:not([horizontal-alignment])) {
		align-items: flex-start;
	}

	:host([horizontal-alignment="center"]) {
		align-items: center;
	}

	:host([horizontal-alignment="right"]) {
		align-items: flex-end;
	}


	/* # Slotted content */

	::slotted(*) {
		flex-shrink: 0;
	}
`,hd=()=>r`<slot></slot>`,gd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_d=class extends ge(o,`cells-container`){constructor(){super(...arguments),this.width=`fit-content`,this.horizontalAlignment=`left`,this.verticalAlignment=`center`}updated(e){super.updated(e),(e.has(`width`)||e.has(`minWidth`)||e.has(`maxWidth`)||e.has(`minHeight`))&&this._applyDimensionStyles()}_applyDimensionStyles(){let e=this.width,t=e===`full`||e===`fit-content`,n=!!e&&!t&&CSS.supports(`width`,e);n?this.style.setProperty(`--_width`,e):this.style.removeProperty(`--_width`),e&&!t&&!n&&(this.width=``),this.minWidth?this.style.setProperty(`--_min-width`,this.minWidth):this.style.removeProperty(`--_min-width`),this.maxWidth?this.style.setProperty(`--_max-width`,this.maxWidth):this.style.removeProperty(`--_max-width`),this.minHeight?this.style.setProperty(`--_min-height`,this.minHeight):this.style.removeProperty(`--_min-height`)}render(){return hd()}};_d.styles=[md],gd([c({reflect:!0,converter:p(`fit-content`)})],_d.prototype,`width`,void 0),gd([c({type:String,reflect:!0,attribute:`min-width`})],_d.prototype,`minWidth`,void 0),gd([c({type:String,reflect:!0,attribute:`max-width`})],_d.prototype,`maxWidth`,void 0),gd([c({type:String,reflect:!0,attribute:`min-height`})],_d.prototype,`minHeight`,void 0),gd([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(`left`)})],_d.prototype,`horizontalAlignment`,void 0),gd([c({reflect:!0,attribute:`vertical-alignment`,converter:p(`center`)})],_d.prototype,`verticalAlignment`,void 0),_d=gd([u(`nldd-cell`)],_d);var vd=a(b.smMax),yd=a(b.mdMin),bd=a(b.mdMax),xd=a(b.lgMin),Sd=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_item-width: var(--primitives-area-280);
		--_focus-ring-z-index: 1;

		/* Two sets, because a collection inside a layout-container follows that
		   container and anywhere else the viewport. The bare --_gap is what
		   stands when neither set matches. */
		--_sm-gap: var(--components-collection-sm-gap);
		--_md-gap: var(--components-collection-md-gap);
		--_lg-gap: var(--components-collection-lg-gap);
		--_gap: var(--_sm-gap);

		@media (max-width: ${vd}) { --_gap: var(--_sm-gap); }
		@media (min-width: ${yd}) and (max-width: ${bd}) { --_gap: var(--_md-gap); }
		@media (min-width: ${xd}) { --_gap: var(--_lg-gap); }

		@container layout-container (max-width: ${vd}) { --_gap: var(--_sm-gap); }
		@container layout-container (min-width: ${yd}) and (max-width: ${bd}) { --_gap: var(--_md-gap); }
		@container layout-container (min-width: ${xd}) { --_gap: var(--_lg-gap); }

		display: flex;
		width: 100%;
		min-width: 0;
		flex-direction: column;
		gap: var(--_gap);
	}

	:host([hidden]) {
		display: none;
	}


	/* # Items */

	.collection__items {
		display: flex;
		width: 100%;
		gap: var(--_gap);
	}

	/* ## Grid */

	:host([layout="grid"]) .collection__items,
	:host(:not([layout])) .collection__items {
		/* min(item-width, 100%) clamps the track min to the container width so
		   a single column never forces horizontal overflow on narrow screens. */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(var(--_item-width), 100%), 1fr));
	}

	/* A grid item's automatic minimum is min-content, so one long unbreakable
	   string inside a card would stretch its whole track past 1fr. Every
	   consumer had to repeat min-width: 0 themselves; the track sizes the item,
	   not the content. */
	:host([layout="grid"]) .collection__items ::slotted(*),
	:host(:not([layout])) .collection__items ::slotted(*) {
		min-width: 0;
	}

	/* ## Stack */

	:host([layout="stack"]) .collection__items {
		flex-direction: column;
	}


	/* ## Lanes */

	/* Falls back to the grid above, not to the multicol nldd-container uses:
	   this component pages, and multicol redistributes the whole set every time
	   load-more adds to it. */
	:host([layout="lanes"]) .collection__items {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(var(--_item-width), 100%), 1fr));
	}

	:host([layout="lanes"]) .collection__items ::slotted(*) {
		min-width: 0;
	}

	@supports (display: grid-lanes) {
		:host([layout="lanes"]) .collection__items {
			display: grid-lanes;
		}
	}

	/* ## Horizontal scroll */

	:host([layout="horizontal-scroll"]) .collection__items {
		margin-inline: calc(var(--primitives-space-16) * -1);
		margin-block: calc(var(--primitives-space-16) * -1);
		overflow-x: auto;
		padding-inline: var(--primitives-space-16);
		padding-block: var(--primitives-space-16);
		flex-direction: row;
		flex-wrap: nowrap;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		scroll-padding-inline-start: var(--primitives-space-16);
	}

	:host([layout="horizontal-scroll"][scrollable]) .collection__items {
		mask-image: linear-gradient(
			to right,
			transparent 0,
			black var(--primitives-space-16),
			black calc(100% - var(--primitives-space-16)),
			transparent 100%
		);
	}

	:host([layout="horizontal-scroll"]) .collection__items::-webkit-scrollbar {
		display: none;
	}

	:host([layout="horizontal-scroll"]) .collection__items ::slotted(*) {
		max-width: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: var(--_item-width);
		scroll-snap-align: start;
	}

	/* The horizontal-scroll items has a mask-image that fades the left
	 * and right edges, which would clip an outline drawn directly on it.
	 * The .collection__scroll-area wrapper has no mask and is the layout
	 * box that matches the visible content area; its ::after sits above
	 * slotted cards via z-index, so card box-shadows can't overlap the
	 * ring. :has() works here because both elements are in the same
	 * shadow tree (unlike :host(:has()), which doesn't pierce). */
	.collection__scroll-area {
		position: relative;
	}

	.collection__items:focus-visible {
		outline: none;
	}

	.collection__scroll-area:has(.collection__items:focus-visible)::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: var(--_focus-ring-z-index);
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
		pointer-events: none;
	}


	/* # Footer */

	.collection__footer {
		display: flex;
		width: 100%;
	}

	.collection__footer[hidden] {
		display: none;
	}

	/* ## Scroll navigation — horizontal scroll */

	:host([layout="horizontal-scroll"]) .collection__footer {
		justify-content: flex-end;
		gap: var(--primitives-space-16);
	}
`,Cd=e=>e??n;function wd(e){let t=e.layout===`horizontal-scroll`,i=!t&&e.showLoadMore&&e._hasMore,a=t&&e._isScrollable,o=a||i||e._hasFooterSlot;return r`
		<div class="collection__scroll-area">
			<div class="collection__items"
				tabindex=${Cd(a?`0`:void 0)}
				role=${Cd(a?`region`:void 0)}
				aria-label=${Cd(a?e._t(`components.collection.region-label`):void 0)}
			>
				<slot @slotchange=${t=>e._onSlotChange(t)}></slot>
			</div>
		</div>
		<footer class="collection__footer"
			?hidden=${!o}
		>
			<slot
				name="footer"
				@slotchange=${e._onFooterSlotChange}
			>
				${a?r`
					<nldd-button-bar>
						<nldd-icon-button
							icon="chevron-left"
							text=${e._t(`components.collection.previous-action`)}
							tooltip-timing="never"
							.disabled=${e._atStart}
							@click=${()=>e._scrollBy(-1)}
						></nldd-icon-button>
						<nldd-button-bar-divider></nldd-button-bar-divider>
						<nldd-icon-button
							icon="chevron-right"
							text=${e._t(`components.collection.next-action`)}
							tooltip-timing="never"
							.disabled=${e._atEnd}
							@click=${()=>e._scrollBy(1)}
						></nldd-icon-button>
					</nldd-button-bar>
				`:n}
				${i?r`
					<nldd-button
						appearance="neutral-tinted"
						text=${e._t(`components.collection.load-more-action`)}
						width="full"
						@click=${()=>e._loadMore()}
					></nldd-button>
				`:n}
			</slot>
		</footer>
	`}var Td={"components.collection.previous-action":`Vorige`,"components.collection.next-action":`Volgende`,"components.collection.load-more-action":`Toon meer`,"components.collection.region-label":`Collectie`},Ed=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_corner-radius: var(--semantics-controls-md-corner-radius);
		--_background-color: var(--semantics-buttons-neutral-tinted-background-color);
		--_size: var(--semantics-controls-md-min-size);
		--_divider-color: var(--semantics-buttons-neutral-tinted-divider-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-tinted-highlight-border-color);
		--_divider-length: var(--semantics-buttons-md-divider-length);

		display: inline-flex;
		isolation: isolate;
	}

	:host([size="xs"]) {
		--_corner-radius: var(--semantics-controls-xs-corner-radius);
		--_size: var(--semantics-controls-xs-min-size);
		--_divider-length: var(--semantics-buttons-xs-divider-length);
	}

	:host([size="sm"]) {
		--_corner-radius: var(--semantics-controls-sm-corner-radius);
		--_size: var(--semantics-controls-sm-min-size);
		--_divider-length: var(--semantics-buttons-sm-divider-length);
	}

	:host([size="lg"]) {
		--_corner-radius: var(--semantics-controls-lg-corner-radius);
		--_size: var(--semantics-controls-lg-min-size);
		--_divider-length: var(--semantics-buttons-lg-divider-length);
	}

	/* ## Accent Filled (Primary) */

	:host([appearance="accent-filled"]),
	:host([appearance="primary"]) {
		--_background-color: var(--semantics-buttons-accent-filled-background-color);
		--_divider-color: var(--semantics-buttons-accent-filled-divider-color);
		--_highlight-border-color: var(--semantics-buttons-accent-filled-highlight-border-color);
	}

	:host([appearance="neutral-base"]) {
		--_background-color: var(--semantics-buttons-neutral-base-background-color);
		--_divider-color: var(--semantics-buttons-neutral-base-divider-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-base-highlight-border-color);
	}

	/* ## On-color */

	:host([appearance="inherit-tinted"]) {
		--_background-color: var(--semantics-buttons-inherit-tinted-background-color);
		--_divider-color: var(--semantics-buttons-inherit-tinted-divider-color);
		--_highlight-border-color: var(--semantics-buttons-inherit-tinted-highlight-border-color);
		--context-button-background-color: transparent;
	}

	:host([appearance="inherit-filled"]) {
		--_background-color: var(--semantics-buttons-inherit-filled-background-color);
		--_divider-color: var(--semantics-buttons-inherit-filled-divider-color);
		--_highlight-border-color: var(--semantics-buttons-inherit-filled-highlight-border-color);
	}

	:host([hidden]) {
		display: none;
	}

	:host([disabled]) {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}

	:host([disabled]) ::slotted(nldd-button),
	:host([disabled]) ::slotted(nldd-icon-button) {
		opacity: 1;
	}


	/* # Block */

	.button-bar {
		display: flex;
		position: relative;
		border-radius: var(--_corner-radius);
		background-color: var(--_background-color);
		height: var(--_size);
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.button-bar::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: inset 0 0 0 var(--primitives-border-width-thin) var(--_highlight-border-color);
		pointer-events: none;
	}


	/* # Elements */

	.button-bar__divider {
		display: flex;
		height: var(--_size);
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.button-bar__divider-line {
		background-color: var(--_divider-color);
		width: var(--semantics-dividers-thickness);
		height: var(--_divider-length);
	}

	::slotted([data-focused]) {
		position: relative;
		z-index: 1;
	}
`,{I:Dd}=s,Od=e=>e,kd=()=>document.createComment(``),Ad=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Dd(r.insertBefore(kd(),i),r.insertBefore(kd(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Od(e).nextSibling;Od(r).insertBefore(e,i),e=t}}}return n},jd=(e,t,n=e)=>(e._$AI(t,n),e),Md={},Nd=(e,t=Md)=>e._$AH=t,Pd=e=>e._$AH,Fd=e=>{e._$AR(),e._$AA.remove()},Id=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ld=ne(class extends ee{constructor(e){if(super(e),e.type!==te.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Pd(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=jd(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=jd(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=jd(i[f],a[h]),Ad(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=jd(i[p],a[m]),Ad(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=Id(o,m,h),d=Id(s,f,p)),u.has(s[f])){if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=Ad(e,i[f]);jd(t,a[m]),c[m]=t}else c[m]=jd(n,a[m]),Ad(e,i[f],n),i[t]=null;m++}else Fd(i[p]),p--}else Fd(i[f]),f++;for(;m<=h;){let t=Ad(e,c[h+1]);jd(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&Fd(e)}return this.ut=o,Nd(e,c),l}});function Rd(){return r`
		<div class="button-bar"
			part="bar"
			role="group"
		>
			${Ld(this._children,e=>e.id,e=>zd.call(this,e))}
		</div>
	`}function zd(e){return e.type===`divider`?r`
			<div class="button-bar__divider">
				<div class="button-bar__divider-line"></div>
			</div>
		`:r`<slot name="child-${e.id}"></slot>`}var Bd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};customElements.get(`nldd-button-bar-divider`)||customElements.define(`nldd-button-bar-divider`,class extends HTMLElement{});var Vd=[`nldd-button`,`nldd-icon-button`],Hd=class extends o{constructor(){super(...arguments),this.size=`md`,this.appearance=`neutral-tinted`,this.disabled=!1,this._children=[],this._idCounter=0,this._observer=null,this._building=!1,this._individuallyDisabled=new WeakSet,this._warnedToggleButton=!1}connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(()=>this._buildChildren()),this._observer.observe(this,{childList:!0}),this._buildChildren(),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect(),this._observer=null,this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut)}updated(e){(e.has(`size`)||e.has(`_children`))&&this._propagateSize(),(e.has(`appearance`)||e.has(`_children`))&&this._propagateAppearance(),e.has(`disabled`)?this._propagateDisabled():e.has(`_children`)&&this.disabled&&Array.from(this.children).filter(e=>Vd.includes(e.tagName.toLowerCase())).forEach(e=>e.setAttribute(`disabled`,``))}_handleFocusIn(e){let t=e.target;Vd.includes(t.tagName.toLowerCase())&&t.setAttribute(`data-focused`,``)}_handleFocusOut(e){let t=e.target;Vd.includes(t.tagName.toLowerCase())&&t.removeAttribute(`data-focused`)}_propagateSize(){Array.from(this.children).filter(e=>Vd.includes(e.tagName.toLowerCase())).forEach(e=>e.setAttribute(`size`,this.size))}_propagateAppearance(){Array.from(this.children).filter(e=>Vd.includes(e.tagName.toLowerCase())).forEach(e=>e.setAttribute(`appearance`,this.appearance))}_propagateDisabled(){let e=Array.from(this.children).filter(e=>Vd.includes(e.tagName.toLowerCase()));this.disabled?(e.forEach(e=>{e.hasAttribute(`disabled`)&&this._individuallyDisabled.add(e)}),e.forEach(e=>e.setAttribute(`disabled`,``))):(e.forEach(e=>{this._individuallyDisabled.has(e)||e.removeAttribute(`disabled`)}),this._individuallyDisabled=new WeakSet)}_buildChildren(){this._building||=(this._building=!0,this._idCounter=0,this._children=Array.from(this.children).map(e=>{let t=e.tagName.toLowerCase();if(t===`nldd-button-bar-divider`)return{type:`divider`,id:this._idCounter++};t===`nldd-toggle-button`&&this._warnToggleButton(),Vd.includes(t)&&(e.setAttribute(`size`,this.size),e.setAttribute(`appearance`,this.appearance),e.setAttribute(`no-highlight-border`,``));let n=this._idCounter++,r=`child-${n}`;return e.getAttribute(`slot`)!==r&&e.setAttribute(`slot`,r),{type:`button`,element:e,id:n}}),!1)}_warnToggleButton(){}render(){return Rd.call(this)}};Hd.styles=Ed,Bd([c({reflect:!0,converter:p(`md`)})],Hd.prototype,`size`,void 0),Bd([c({reflect:!0,converter:p(`neutral-tinted`)})],Hd.prototype,`appearance`,void 0),Bd([c({type:Boolean,reflect:!0})],Hd.prototype,`disabled`,void 0),Bd([d()],Hd.prototype,`_children`,void 0),Hd=Bd([u(`nldd-button-bar`)],Hd);var Ud=[`0`,`2`,`4`,`6`,`8`,`10`,`12`,`16`,`20`,`24`,`28`,`32`,`40`,`44`,`48`,`56`,`64`,`80`,`96`];function Wd(e,t,n){if(e===void 0||e===``)return null;let r=String(e).trim();return Ud.includes(r)?r===`0`?`0`:`var(--primitives-space-${r})`:null}var V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends o{constructor(){super(...arguments),this.layout=`grid`,this.maxItems=24,this.translations={},this.showLoadMore=!1,this.lazyLoad=!1,this._visibleCount=0,this._totalCount=0,this._atStart=!0,this._atEnd=!1,this._isScrollable=!1,this._hasFooterSlot=!1,this._onFooterSlotChange=e=>{let t=e.target;queueMicrotask(()=>{this._hasFooterSlot=t.assignedElements().length>0})},this._scrollListener=()=>{let e=this._itemsEl;if(!e)return;let t=this._atStart,n=this._atEnd;this._atStart=e.scrollLeft<1,this._atEnd=e.scrollLeft+e.clientWidth>=e.scrollWidth-1,this._isScrollable=e.scrollWidth>e.clientWidth,!t&&this._atStart&&this._handOffControlFocus(`previous`),!n&&this._atEnd&&this._handOffControlFocus(`next`)},this._scrollListenerAttached=!1}_t(e){return y(this.translations,Td,e)}_handOffControlFocus(e){let t=this.shadowRoot?.querySelectorAll(`nldd-icon-button`);if(!t||t.length<2)return;let[n,r]=t,i=e===`previous`?n:r;if(this.shadowRoot?.activeElement!==i)return;let a=e===`previous`?r:n;this.updateComplete.then(()=>{a.disabled||a.focus()})}connectedCallback(){super.connectedCallback(),this._visibleCount=this.maxItems}disconnectedCallback(){super.disconnectedCallback(),this._intersectionObserver?.disconnect(),this._teardownScrollListeners()}updated(e){if(e.has(`layout`)&&this._setupScrollListeners(),e.has(`itemWidth`)&&(this.itemWidth?this.style.setProperty(`--_item-width`,this.itemWidth):this.style.removeProperty(`--_item-width`)),e.has(`gap`)||e.has(`smGap`)||e.has(`mdGap`)||e.has(`lgGap`)){let e=Wd(this.gap,`nldd-collection`,`gap`),t=(t,n,r)=>{let i=n===void 0?e:Wd(n,`nldd-collection`,r)??e;i===null?this.style.removeProperty(t):this.style.setProperty(t,i)};t(`--_sm-gap`,this.smGap,`sm-gap`),t(`--_md-gap`,this.mdGap,`md-gap`),t(`--_lg-gap`,this.lgGap,`lg-gap`)}this.lazyLoad&&this._loadMoreBtn&&!this._intersectionObserver?(this._intersectionObserver=new IntersectionObserver(([e])=>{e.isIntersecting&&this._loadMore()},{threshold:.1}),this._intersectionObserver.observe(this._loadMoreBtn)):this._loadMoreBtn||(this._intersectionObserver?.disconnect(),this._intersectionObserver=void 0),this.toggleAttribute(`scrollable`,this.layout===`horizontal-scroll`&&this._isScrollable)}_setupScrollListeners(){this._teardownScrollListeners(),this.layout===`horizontal-scroll`&&this._itemsEl&&(this._itemsEl.addEventListener(`scroll`,this._scrollListener,{passive:!0}),this._resizeObserver=new ResizeObserver(()=>this._scrollListener()),this._resizeObserver.observe(this._itemsEl),this._scrollListenerAttached=!0,this._scrollListener())}_teardownScrollListeners(){this._itemsEl?.removeEventListener(`scroll`,this._scrollListener),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._scrollListenerAttached=!1,this._isScrollable=!1}_onSlotChange(e){let t=e.target.assignedElements();queueMicrotask(()=>{this._totalCount=t.length}),this.layout===`horizontal-scroll`?this._scrollListener():this._applyVisibility(t)}_applyVisibility(e){let t=this._itemsEl?.querySelector(`slot`);(e??t?.assignedElements()??[]).forEach((e,t)=>{e.hidden=t>=this._visibleCount})}_loadMore(){this._visibleCount=Math.min(this._visibleCount+this.maxItems,this._totalCount),this._applyVisibility(),this.dispatchEvent(new CustomEvent(`load-more`,{bubbles:!0,composed:!0}))}get _hasMore(){return this._visibleCount<this._totalCount}_scrollBy(e){let t=this._itemsEl;if(!t)return;let n=t.querySelector(`slot`)?.assignedElements()??[];if(n.length===0)return;let r=t.getBoundingClientRect().left,i=parseFloat(getComputedStyle(t).scrollPaddingInlineStart)||0,a=n.map(e=>Math.round(e.getBoundingClientRect().left-r+t.scrollLeft-i)),o=t.scrollLeft,s=e===1?a.find(e=>e>o+2):a.filter(e=>e<o-2).pop();s!==void 0&&t.scrollTo({left:s,behavior:`smooth`})}render(){return wd(this)}};H.styles=Sd,V([c({reflect:!0,converter:p(`grid`)})],H.prototype,`layout`,void 0),V([c({type:String,reflect:!0,attribute:`item-width`})],H.prototype,`itemWidth`,void 0),V([c({type:String,reflect:!0})],H.prototype,`gap`,void 0),V([c({type:String,reflect:!0,attribute:`sm-gap`})],H.prototype,`smGap`,void 0),V([c({type:String,reflect:!0,attribute:`md-gap`})],H.prototype,`mdGap`,void 0),V([c({type:String,reflect:!0,attribute:`lg-gap`})],H.prototype,`lgGap`,void 0),V([c({type:Number,attribute:`max-items`})],H.prototype,`maxItems`,void 0),V([c({type:Object})],H.prototype,`translations`,void 0),V([c({type:Boolean,reflect:!0,attribute:`show-load-more`})],H.prototype,`showLoadMore`,void 0),V([c({type:Boolean,reflect:!0,attribute:`lazy-load`})],H.prototype,`lazyLoad`,void 0),V([d()],H.prototype,`_visibleCount`,void 0),V([d()],H.prototype,`_totalCount`,void 0),V([d()],H.prototype,`_atStart`,void 0),V([d()],H.prototype,`_atEnd`,void 0),V([d()],H.prototype,`_isScrollable`,void 0),V([d()],H.prototype,`_hasFooterSlot`,void 0),V([f(`.collection__items`)],H.prototype,`_itemsEl`,void 0),V([f(`nldd-button.load-more`)],H.prototype,`_loadMoreBtn`,void 0),H=V([u(`nldd-collection`)],H);var Gd=a(b.smMax),Kd=a(b.mdMin),qd=a(b.mdMax),Jd=a(b.lgMin),Yd=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host — external contract; padding and the query container live on
	   .container in the shadow root, out of reach of consumer resets */

	:host {
		--_min-column-width: var(--primitives-area-280);
		--_width: 100%;
		--_min-width: auto;
		--_max-width: none;
		--_justify-content: initial;
		--_justify-items: initial;
		--_align-items: initial;
		--_sm-gap: 0;
		--_md-gap: 0;
		--_lg-gap: 0;
		--_gap: var(--_sm-gap);
		--_padding-top: 0;
		--_padding-right: 0;
		--_padding-bottom: 0;
		--_padding-left: 0;
		--_sm-padding-top: var(--_padding-top);
		--_sm-padding-right: var(--_padding-right);
		--_sm-padding-bottom: var(--_padding-bottom);
		--_sm-padding-left: var(--_padding-left);
		--_md-padding-top: var(--_padding-top);
		--_md-padding-right: var(--_padding-right);
		--_md-padding-bottom: var(--_padding-bottom);
		--_md-padding-left: var(--_padding-left);
		--_lg-padding-top: var(--_padding-top);
		--_lg-padding-right: var(--_padding-right);
		--_lg-padding-bottom: var(--_padding-bottom);
		--_lg-padding-left: var(--_padding-left);
		--_slot-order: 0;
		--_slot-sm-order: var(--_slot-order);
		--_slot-md-order: var(--_slot-order);
		--_slot-lg-order: var(--_slot-order);
		/* Two sets, because a container inside a layout-container follows that
		   container and anywhere else the viewport. Multicol reads the gap in three
		   rules, so the value is swapped here rather than declared in each. The
		   bare --_gap is what stands when neither set matches. */
		@media (max-width: ${Gd}) { --_gap: var(--_sm-gap); }
		@media (min-width: ${Kd}) and (max-width: ${qd}) { --_gap: var(--_md-gap); }
		@media (min-width: ${Jd}) { --_gap: var(--_lg-gap); }

		@container layout-container (max-width: ${Gd}) { --_gap: var(--_sm-gap); }
		@container layout-container (min-width: ${Kd}) and (max-width: ${qd}) { --_gap: var(--_md-gap); }
		@container layout-container (min-width: ${Jd}) { --_gap: var(--_lg-gap); }

		display: block;
		width: var(--_width);
		min-width: var(--_min-width);
		max-width: var(--_max-width);
		height: auto;
	}

	:host([width="fit-content"]) {
		--_width: fit-content;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Outer chrome — padding + query container. Size queries measure the
	   content box, so .container reports the same padded interior width the
	   host reported when it carried the padding itself. */

	.container {
		container-type: inline-size;
		box-sizing: border-box;
		padding-top: var(--_padding-top);
		padding-right: var(--_padding-right);
		padding-bottom: var(--_padding-bottom);
		padding-left: var(--_padding-left);

		@media (max-width: ${Gd}) {
			padding-top: var(--_sm-padding-top);
			padding-right: var(--_sm-padding-right);
			padding-bottom: var(--_sm-padding-bottom);
			padding-left: var(--_sm-padding-left);
		}

		@media (min-width: ${Kd}) and (max-width: ${qd}) {
			padding-top: var(--_md-padding-top);
			padding-right: var(--_md-padding-right);
			padding-bottom: var(--_md-padding-bottom);
			padding-left: var(--_md-padding-left);
		}

		@media (min-width: ${Jd}) {
			padding-top: var(--_lg-padding-top);
			padding-right: var(--_lg-padding-right);
			padding-bottom: var(--_lg-padding-bottom);
			padding-left: var(--_lg-padding-left);
		}

		@container layout-container (max-width: ${Gd}) {
			padding-top: var(--_sm-padding-top);
			padding-right: var(--_sm-padding-right);
			padding-bottom: var(--_sm-padding-bottom);
			padding-left: var(--_sm-padding-left);
		}

		@container layout-container (min-width: ${Kd}) and (max-width: ${qd}) {
			padding-top: var(--_md-padding-top);
			padding-right: var(--_md-padding-right);
			padding-bottom: var(--_md-padding-bottom);
			padding-left: var(--_md-padding-left);
		}

		@container layout-container (min-width: ${Jd}) {
			padding-top: var(--_lg-padding-top);
			padding-right: var(--_lg-padding-right);
			padding-bottom: var(--_lg-padding-bottom);
			padding-left: var(--_lg-padding-left);
		}
	}


	/* # Inner — actual layout */

	.container__inner {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: var(--_justify-content);
		justify-items: var(--_justify-items);
		align-items: var(--_align-items);
		gap: var(--_gap);
	}

	:host([layout="row"]) .container__inner {
		flex-direction: row;
	}

	:host([layout="wrap"]) .container__inner {
		flex-direction: row;
		flex-wrap: wrap;
	}

	:host([layout="grid"]) .container__inner {
		display: grid;
		grid-template-columns: repeat(
			var(--_column-count, auto-fit),
			minmax(var(--_track-min, var(--_min-column-width)), 1fr)
		);
	}

	:host([layout="columns"]) .container__inner {
		display: block;
		columns: var(--_min-column-width);
		column-gap: var(--_gap);
	}

	:host([layout="columns"]) ::slotted(*) {
		break-inside: avoid;
	}

	/* Lanes â native CSS grid-lanes where supported, CSS multicol fallback
	   otherwise. CSS-only (no JS). Fallback flows column-order; native lanes
	   packs shortest-column (row-order). */
	:host([layout="lanes"]) .container__inner {
		display: block;
		columns: var(--_min-column-width);
		column-gap: var(--_gap);
	}

	:host([layout="lanes"]) ::slotted(*) {
		break-inside: avoid;
		/* multicol has no row-gap; item margin supplies the vertical gap. The
		   native branch resets this (grid-lanes gap covers both axes). */
		margin-bottom: var(--_gap);
	}

	@supports (display: grid-lanes) {
		:host([layout="lanes"]) .container__inner {
			display: grid-lanes;
			grid-template-columns: repeat(
				var(--_column-count, auto-fill),
				minmax(var(--_track-min, var(--_min-column-width)), 1fr)
			);
		}

		:host([layout="lanes"]) ::slotted(*) {
			margin-bottom: 0;
		}
	}

	:host([layout="columns"][column-count]) .container__inner,
	:host([layout="columns"][sm-column-count]) .container__inner,
	:host([layout="columns"][md-column-count]) .container__inner,
	:host([layout="columns"][lg-column-count]) .container__inner,
	:host([layout="lanes"][column-count]) .container__inner,
	:host([layout="lanes"][sm-column-count]) .container__inner,
	:host([layout="lanes"][md-column-count]) .container__inner,
	:host([layout="lanes"][lg-column-count]) .container__inner {
		column-count: var(--_column-count);
		column-width: auto;
	}


	/* # Column count — base scope */

	:host([column-count="1"]) .container__inner { --_column-count: 1; }
	:host([column-count="2"]) .container__inner { --_column-count: 2; }
	:host([column-count="3"]) .container__inner { --_column-count: 3; }
	:host([column-count="4"]) .container__inner { --_column-count: 4; }
	:host([column-count="5"]) .container__inner { --_column-count: 5; }
	:host([column-count="6"]) .container__inner { --_column-count: 6; }
	:host([column-count="7"]) .container__inner { --_column-count: 7; }
	:host([column-count="8"]) .container__inner { --_column-count: 8; }
	:host([column-count]) .container__inner { --_track-min: 0; }


	/* # Column count — sm scope (queries :host own width) */

	@container (max-width: ${Gd}) {
		:host([sm-column-count="1"]) .container__inner { --_column-count: 1; }
		:host([sm-column-count="2"]) .container__inner { --_column-count: 2; }
		:host([sm-column-count="3"]) .container__inner { --_column-count: 3; }
		:host([sm-column-count="4"]) .container__inner { --_column-count: 4; }
		:host([sm-column-count="5"]) .container__inner { --_column-count: 5; }
		:host([sm-column-count="6"]) .container__inner { --_column-count: 6; }
		:host([sm-column-count="7"]) .container__inner { --_column-count: 7; }
		:host([sm-column-count="8"]) .container__inner { --_column-count: 8; }
		:host([sm-column-count]) .container__inner { --_track-min: 0; }
	}


	/* # Column count — md scope */

	@container (min-width: ${Kd}) and (max-width: ${qd}) {
		:host([md-column-count="1"]) .container__inner { --_column-count: 1; }
		:host([md-column-count="2"]) .container__inner { --_column-count: 2; }
		:host([md-column-count="3"]) .container__inner { --_column-count: 3; }
		:host([md-column-count="4"]) .container__inner { --_column-count: 4; }
		:host([md-column-count="5"]) .container__inner { --_column-count: 5; }
		:host([md-column-count="6"]) .container__inner { --_column-count: 6; }
		:host([md-column-count="7"]) .container__inner { --_column-count: 7; }
		:host([md-column-count="8"]) .container__inner { --_column-count: 8; }
		:host([md-column-count]) .container__inner { --_track-min: 0; }
	}


	/* # Column count — lg scope */

	@container (min-width: ${Jd}) {
		:host([lg-column-count="1"]) .container__inner { --_column-count: 1; }
		:host([lg-column-count="2"]) .container__inner { --_column-count: 2; }
		:host([lg-column-count="3"]) .container__inner { --_column-count: 3; }
		:host([lg-column-count="4"]) .container__inner { --_column-count: 4; }
		:host([lg-column-count="5"]) .container__inner { --_column-count: 5; }
		:host([lg-column-count="6"]) .container__inner { --_column-count: 6; }
		:host([lg-column-count="7"]) .container__inner { --_column-count: 7; }
		:host([lg-column-count="8"]) .container__inner { --_column-count: 8; }
		:host([lg-column-count]) .container__inner { --_track-min: 0; }
	}


	/* # Slot order — per-child via order / sm-order / md-order / lg-order
	   attributes on slotted children. Container JS bridges those to
	   --_slot-{attr} inline custom props on the child; the queries below
	   pick the right value per breakpoint with var() cascading
	   sm/md/lg-order → order → 0. No-op for layout="columns" (multicol). */

	::slotted(*) {
		/* Keep padded slotted items inside their track (multicol/grid columns). */
		box-sizing: border-box;
		order: var(--_slot-order, 0);
	}

	@container (max-width: ${Gd}) {
		::slotted(*) { order: var(--_slot-sm-order, var(--_slot-order, 0)); }
	}

	@container (min-width: ${Kd}) and (max-width: ${qd}) {
		::slotted(*) { order: var(--_slot-md-order, var(--_slot-order, 0)); }
	}

	@container (min-width: ${Jd}) {
		::slotted(*) { order: var(--_slot-lg-order, var(--_slot-order, 0)); }
	}
`;function Xd(e){return r`
		<div class="container">
			<div class="container__inner">
				<slot @slotchange=${e._onSlotChange}></slot>
			</div>
		</div>
	`}var U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zd={left:`flex-start`,center:`center`,right:`flex-end`},Qd={top:`flex-start`,center:`center`,bottom:`flex-end`},$d=[`order`,`sm-order`,`md-order`,`lg-order`];function ef(e,t){return Wd(e,`nldd-container`,t)}var W=class extends o{constructor(){super(...arguments),this.width=``,this.minWidth=``,this.maxWidth=``,this.gap=void 0,this.smGap=void 0,this.mdGap=void 0,this.lgGap=void 0,this.padding=void 0,this.paddingInline=void 0,this.paddingBlock=void 0,this.paddingTop=void 0,this.paddingRight=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.smPadding=void 0,this.smPaddingInline=void 0,this.smPaddingBlock=void 0,this.smPaddingTop=void 0,this.smPaddingRight=void 0,this.smPaddingBottom=void 0,this.smPaddingLeft=void 0,this.mdPadding=void 0,this.mdPaddingInline=void 0,this.mdPaddingBlock=void 0,this.mdPaddingTop=void 0,this.mdPaddingRight=void 0,this.mdPaddingBottom=void 0,this.mdPaddingLeft=void 0,this.lgPadding=void 0,this.lgPaddingInline=void 0,this.lgPaddingBlock=void 0,this.lgPaddingTop=void 0,this.lgPaddingRight=void 0,this.lgPaddingBottom=void 0,this.lgPaddingLeft=void 0,this.horizontalAlignment=void 0,this.verticalAlignment=void 0,this._onSlotChange=e=>{let t=e.target;this._childObserver?.disconnect(),this._childObserver=new MutationObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&this._applyOrderProps(t.target)});for(let e of t.assignedElements())e instanceof HTMLElement&&(this._applyOrderProps(e),this._childObserver.observe(e,{attributes:!0,attributeFilter:[...$d]}))}}updated(e){this.writeCustomProperties(),this.writeDimensionProperties()}writeDimensionProperties(){let e=this.width,t=e===`full`||e===`fit-content`,n=!!e&&!t&&CSS.supports(`width`,e);n?this.style.setProperty(`--_width`,e):this.style.removeProperty(`--_width`),e&&!t&&!n&&(this.width=``),this.minWidth?this.style.setProperty(`--_min-width`,this.minWidth):this.style.removeProperty(`--_min-width`),this.maxWidth?this.style.setProperty(`--_max-width`,this.maxWidth):this.style.removeProperty(`--_max-width`)}writeCustomProperties(){let e=(e,t)=>{t===null?this.style.removeProperty(e):this.style.setProperty(e,t)},t=this.horizontalAlignment?Zd[this.horizontalAlignment]:null,n=this.verticalAlignment?Qd[this.verticalAlignment]:null,r=this.layout===`row`||this.layout===`wrap`,i=this.layout===`grid`;this.layout===`columns`||this.layout===`lanes`?(e(`--_justify-content`,null),e(`--_justify-items`,null),e(`--_align-items`,null)):i?(e(`--_justify-items`,t),e(`--_justify-content`,t),e(`--_align-items`,n)):r?(e(`--_justify-content`,t),e(`--_align-items`,n),e(`--_justify-items`,null)):(e(`--_justify-content`,n),e(`--_align-items`,t),e(`--_justify-items`,null));let a=ef(this.gap,`gap`);e(`--_sm-gap`,ef(this.smGap,`sm-gap`)??a),e(`--_md-gap`,ef(this.mdGap,`md-gap`)??a),e(`--_lg-gap`,ef(this.lgGap,`lg-gap`)??a);for(let t of[``,`sm`,`md`,`lg`]){let[n,r,i,a]=this.resolvePadding(t),o=t?`${t}-`:``;e(`--_${o}padding-top`,ef(n?.size,n?.attribute??`padding`)),e(`--_${o}padding-right`,ef(r?.size,r?.attribute??`padding`)),e(`--_${o}padding-bottom`,ef(i?.size,i?.attribute??`padding`)),e(`--_${o}padding-left`,ef(a?.size,a?.attribute??`padding`))}}resolvePadding(e){let t=t=>{let n=e?`${e}${t}`:t.charAt(0).toLowerCase()+t.slice(1),r=this[n];if(r===void 0)return;let i=t.replace(/([A-Z])/g,(e,t,n)=>(n?`-`:``)+t.toLowerCase());return{size:r,attribute:e?`${e}-${i}`:i}},n=t(`Padding`),r=t(`PaddingInline`),i=t(`PaddingBlock`);return[t(`PaddingTop`)??i??n,t(`PaddingRight`)??r??n,t(`PaddingBottom`)??i??n,t(`PaddingLeft`)??r??n]}disconnectedCallback(){super.disconnectedCallback(),this._childObserver?.disconnect(),this._childObserver=void 0}_applyOrderProps(e){for(let t of $d){let n=e.getAttribute(t),r=`--_slot-${t}`;n===null?e.style.removeProperty(r):e.style.setProperty(r,n)}}render(){return Xd(this)}};W.styles=Yd,U([c({type:String,reflect:!0})],W.prototype,`layout`,void 0),U([c({type:Number,reflect:!0,attribute:`column-count`})],W.prototype,`columnCount`,void 0),U([c({type:Number,reflect:!0,attribute:`sm-column-count`})],W.prototype,`smColumnCount`,void 0),U([c({type:Number,reflect:!0,attribute:`md-column-count`})],W.prototype,`mdColumnCount`,void 0),U([c({type:Number,reflect:!0,attribute:`lg-column-count`})],W.prototype,`lgColumnCount`,void 0),U([c({type:String,reflect:!0})],W.prototype,`width`,void 0),U([c({type:String,reflect:!0,attribute:`min-width`})],W.prototype,`minWidth`,void 0),U([c({type:String,reflect:!0,attribute:`max-width`})],W.prototype,`maxWidth`,void 0),U([c({type:String,reflect:!0})],W.prototype,`gap`,void 0),U([c({type:String,reflect:!0,attribute:`sm-gap`})],W.prototype,`smGap`,void 0),U([c({type:String,reflect:!0,attribute:`md-gap`})],W.prototype,`mdGap`,void 0),U([c({type:String,reflect:!0,attribute:`lg-gap`})],W.prototype,`lgGap`,void 0),U([c({type:String,reflect:!0})],W.prototype,`padding`,void 0),U([c({type:String,reflect:!0,attribute:`padding-inline`})],W.prototype,`paddingInline`,void 0),U([c({type:String,reflect:!0,attribute:`padding-block`})],W.prototype,`paddingBlock`,void 0),U([c({type:String,reflect:!0,attribute:`padding-top`})],W.prototype,`paddingTop`,void 0),U([c({type:String,reflect:!0,attribute:`padding-right`})],W.prototype,`paddingRight`,void 0),U([c({type:String,reflect:!0,attribute:`padding-bottom`})],W.prototype,`paddingBottom`,void 0),U([c({type:String,reflect:!0,attribute:`padding-left`})],W.prototype,`paddingLeft`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding`})],W.prototype,`smPadding`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-inline`})],W.prototype,`smPaddingInline`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-block`})],W.prototype,`smPaddingBlock`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-top`})],W.prototype,`smPaddingTop`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-right`})],W.prototype,`smPaddingRight`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-bottom`})],W.prototype,`smPaddingBottom`,void 0),U([c({type:String,reflect:!0,attribute:`sm-padding-left`})],W.prototype,`smPaddingLeft`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding`})],W.prototype,`mdPadding`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-inline`})],W.prototype,`mdPaddingInline`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-block`})],W.prototype,`mdPaddingBlock`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-top`})],W.prototype,`mdPaddingTop`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-right`})],W.prototype,`mdPaddingRight`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-bottom`})],W.prototype,`mdPaddingBottom`,void 0),U([c({type:String,reflect:!0,attribute:`md-padding-left`})],W.prototype,`mdPaddingLeft`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding`})],W.prototype,`lgPadding`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-inline`})],W.prototype,`lgPaddingInline`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-block`})],W.prototype,`lgPaddingBlock`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-top`})],W.prototype,`lgPaddingTop`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-right`})],W.prototype,`lgPaddingRight`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-bottom`})],W.prototype,`lgPaddingBottom`,void 0),U([c({type:String,reflect:!0,attribute:`lg-padding-left`})],W.prototype,`lgPaddingLeft`,void 0),U([c({type:String,reflect:!0,attribute:`horizontal-alignment`})],W.prototype,`horizontalAlignment`,void 0),U([c({type:String,reflect:!0,attribute:`vertical-alignment`})],W.prototype,`verticalAlignment`,void 0),W=U([u(`nldd-container`)],W);var tf=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		display: block;
		flex-shrink: 0;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.divider {
		display: block;
		margin: 0;
		border: none;
		background-color: var(--semantics-dividers-color);
		width: 100%;
		height: var(--semantics-dividers-thickness);
	}

	@media (forced-colors: active) {
		.divider {
			background-color: CanvasText;
		}
	}
`;function nf(e){return r`
		<hr class="divider">
	`}var rf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},af=class extends o{render(){return nf(this)}};af.styles=tf,af=rf([u(`nldd-divider`)],af);var of=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sf={base:`var(--semantics-surfaces-base-background-color)`,tinted:`var(--semantics-surfaces-tinted-background-color)`};function cf(e){return e===void 0||e===``?null:e===`0`?`0`:`var(--primitives-space-${e})`}var lf=[``,`sm`,`md`,`lg`],uf=[`paddingBlock`,`paddingTop`,`paddingBottom`,`smPaddingBlock`,`smPaddingTop`,`smPaddingBottom`,`mdPaddingBlock`,`mdPaddingTop`,`mdPaddingBottom`,`lgPaddingBlock`,`lgPaddingTop`,`lgPaddingBottom`];function df(e){class t extends e{constructor(){super(...arguments),this.background=`inherit`}updated(e){super.updated(e),e.has(`background`)&&this._applyBackground(),uf.some(t=>e.has(t))&&this._applyPadding(),e.has(`height`)&&this._applyHeight()}_onSlotChange(e){let t=e.target,n=t.parentElement;n&&(n.hidden=t.assignedElements().length===0)}_applyBackground(){if(this.background===`base`||this.background===`tinted`){let e=sf[this.background];this.style.backgroundColor=e,this.style.setProperty(`--context-parent-background-color`,e)}else this.style.backgroundColor=``,this.style.removeProperty(`--context-parent-background-color`)}_applyPadding(){let e=this;for(let t of lf){let n=e=>t?`${t}Padding${e}`:`padding${e}`,r=e[n(`Block`)],i=e[n(`Top`)],a=e[n(`Bottom`)],o=t?`${t}-`:``;this._setVar(`--_${o}padding-top`,cf(i??r)),this._setVar(`--_${o}padding-bottom`,cf(a??r))}}_applyHeight(){let e=this.height;e&&typeof CSS<`u`&&CSS.supports(`min-height`,e)?this.style.minHeight=e:this.style.removeProperty(`min-height`)}_setVar(e,t){t===null?this.style.removeProperty(e):this.style.setProperty(e,t)}}return of([c({type:String,reflect:!0})],t.prototype,`background`,void 0),of([c({type:String,reflect:!0})],t.prototype,`height`,void 0),of([c({type:String,reflect:!0,attribute:`padding-block`})],t.prototype,`paddingBlock`,void 0),of([c({type:String,reflect:!0,attribute:`padding-top`})],t.prototype,`paddingTop`,void 0),of([c({type:String,reflect:!0,attribute:`padding-bottom`})],t.prototype,`paddingBottom`,void 0),of([c({type:String,reflect:!0,attribute:`sm-padding-block`})],t.prototype,`smPaddingBlock`,void 0),of([c({type:String,reflect:!0,attribute:`sm-padding-top`})],t.prototype,`smPaddingTop`,void 0),of([c({type:String,reflect:!0,attribute:`sm-padding-bottom`})],t.prototype,`smPaddingBottom`,void 0),of([c({type:String,reflect:!0,attribute:`md-padding-block`})],t.prototype,`mdPaddingBlock`,void 0),of([c({type:String,reflect:!0,attribute:`md-padding-top`})],t.prototype,`mdPaddingTop`,void 0),of([c({type:String,reflect:!0,attribute:`md-padding-bottom`})],t.prototype,`mdPaddingBottom`,void 0),of([c({type:String,reflect:!0,attribute:`lg-padding-block`})],t.prototype,`lgPaddingBlock`,void 0),of([c({type:String,reflect:!0,attribute:`lg-padding-top`})],t.prototype,`lgPaddingTop`,void 0),of([c({type:String,reflect:!0,attribute:`lg-padding-bottom`})],t.prototype,`lgPaddingBottom`,void 0),t}var ff=a(b.smMax),pf=a(b.mdMin),mf=a(b.mdMax),hf=a(b.lgMin),gf=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		container-type: inline-size;
		/* Block-padding overrides from PageSectionMixin; 'initial' makes the
		   var() in .hero fall back to the responsive default until the mixin
		   sets a value inline on the host. */
		--_padding-top: initial;
		--_padding-bottom: initial;
		--_sm-padding-top: initial;
		--_sm-padding-bottom: initial;
		--_md-padding-top: initial;
		--_md-padding-bottom: initial;
		--_lg-padding-top: initial;
		--_lg-padding-bottom: initial;
		--_max-width: var(--semantics-page-sections-body-max-width);
		--_media-aspect-ratio: 21 / 9;
		--_main-width: 50%;
		--_main-background-color: var(--semantics-categories-accent-reference-background-color);
		--_main-content-color: var(--semantics-categories-accent-reference-content-color);
		--_main-padding: var(--primitives-space-16);

		${v}
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}

	:host([hidden]) {
		display: none;
	}

	:host(:last-child),
	:host(.is-last) {
		flex-grow: 1;
	}

	:host([width="full"]) {
		--_max-width: none;
	}

	:host([main-width="2/3"]) {
		--_main-width: 66.667%;
	}

	:host([main-width="3/4"]) {
		--_main-width: 75%;
	}

	:host([main-width="full"]) {
		--_main-width: 100%;
	}

	:host([main-background="base"]) {
		--_main-background-color: var(--semantics-surfaces-base-background-color);
		--_main-content-color: var(--semantics-content-color);
	}

	:host([main-background="lintblauw"]) {
		--_main-background-color: var(--semantics-categories-lintblauw-reference-background-color);
		--_main-content-color: var(--semantics-categories-lintblauw-reference-content-color);
	}

	:host([main-background="donkerblauw"]) {
		--_main-background-color: var(--semantics-categories-donkerblauw-reference-background-color);
		--_main-content-color: var(--semantics-categories-donkerblauw-reference-content-color);
	}

	:host([main-background="hemelblauw"]) {
		--_main-background-color: var(--semantics-categories-hemelblauw-reference-background-color);
		--_main-content-color: var(--semantics-categories-hemelblauw-reference-content-color);
	}

	:host([main-background="lichtblauw"]) {
		--_main-background-color: var(--semantics-categories-lichtblauw-reference-background-color);
		--_main-content-color: var(--semantics-categories-lichtblauw-reference-content-color);
	}

	:host([main-background="paars"]) {
		--_main-background-color: var(--semantics-categories-paars-reference-background-color);
		--_main-content-color: var(--semantics-categories-paars-reference-content-color);
	}

	:host([main-background="violet"]) {
		--_main-background-color: var(--semantics-categories-violet-reference-background-color);
		--_main-content-color: var(--semantics-categories-violet-reference-content-color);
	}

	:host([main-background="robijnrood"]) {
		--_main-background-color: var(--semantics-categories-robijnrood-reference-background-color);
		--_main-content-color: var(--semantics-categories-robijnrood-reference-content-color);
	}

	:host([main-background="roze"]) {
		--_main-background-color: var(--semantics-categories-roze-reference-background-color);
		--_main-content-color: var(--semantics-categories-roze-reference-content-color);
	}

	:host([main-background="rood"]) {
		--_main-background-color: var(--semantics-categories-rood-reference-background-color);
		--_main-content-color: var(--semantics-categories-rood-reference-content-color);
	}

	:host([main-background="oranje"]) {
		--_main-background-color: var(--semantics-categories-oranje-reference-background-color);
		--_main-content-color: var(--semantics-categories-oranje-reference-content-color);
	}

	:host([main-background="donkergeel"]) {
		--_main-background-color: var(--semantics-categories-donkergeel-reference-background-color);
		--_main-content-color: var(--semantics-categories-donkergeel-reference-content-color);
	}

	:host([main-background="geel"]) {
		--_main-background-color: var(--semantics-categories-geel-reference-background-color);
		--_main-content-color: var(--semantics-categories-geel-reference-content-color);
	}

	:host([main-background="donkerbruin"]) {
		--_main-background-color: var(--semantics-categories-donkerbruin-reference-background-color);
		--_main-content-color: var(--semantics-categories-donkerbruin-reference-content-color);
	}

	:host([main-background="bruin"]) {
		--_main-background-color: var(--semantics-categories-bruin-reference-background-color);
		--_main-content-color: var(--semantics-categories-bruin-reference-content-color);
	}

	:host([main-background="donkergroen"]) {
		--_main-background-color: var(--semantics-categories-donkergroen-reference-background-color);
		--_main-content-color: var(--semantics-categories-donkergroen-reference-content-color);
	}

	:host([main-background="groen"]) {
		--_main-background-color: var(--semantics-categories-groen-reference-background-color);
		--_main-content-color: var(--semantics-categories-groen-reference-content-color);
	}

	:host([main-background="mosgroen"]) {
		--_main-background-color: var(--semantics-categories-mosgroen-reference-background-color);
		--_main-content-color: var(--semantics-categories-mosgroen-reference-content-color);
	}

	:host([main-background="mintgroen"]) {
		--_main-background-color: var(--semantics-categories-mintgroen-reference-background-color);
		--_main-content-color: var(--semantics-categories-mintgroen-reference-content-color);
	}


	/* # Block */

	.hero {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-grow: 1;
		align-items: center;

		/* The responsive overrides live here, not on :host — a container query
		   inside :host would match an ancestor container, while these must query
		   the host's own inline size. */

		@container (max-width: ${ff}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
			padding-top: var(--_sm-padding-top, var(--_padding-top, var(--semantics-page-sections-sm-margin-block)));
			padding-bottom: var(--_sm-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-sm-margin-block)));
		}

		@container (min-width: ${pf}) and (max-width: ${mf}) {
			--_main-padding: var(--primitives-space-24);
			padding-inline: var(--semantics-page-sections-md-margin-inline);
			padding-top: var(--_md-padding-top, var(--_padding-top, var(--semantics-page-sections-md-margin-block)));
			padding-bottom: var(--_md-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-md-margin-block)));
		}

		@container (min-width: ${hf}) {
			--_main-padding: var(--primitives-space-32);
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
			padding-top: var(--_lg-padding-top, var(--_padding-top, var(--semantics-page-sections-lg-margin-block)));
			padding-bottom: var(--_lg-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-lg-margin-block)));
		}
	}


	/* # Body
	   No overflow clipping here: it would zero the grid's automatic content
	   minimum and stop the hero from growing with the panel. The background
	   is painted in the panel color so subpixel seams between the media and
	   the panel (fractional aspect-ratio heights) never show as a light
	   hairline. */

	.hero__body {
		display: grid;
		position: relative;
		background-color: var(--_main-background-color);
		width: 100%;
		max-width: var(--_max-width);
		flex-grow: 1;
		grid-template-columns: 100%;
	}

	/* Without media a base-colored panel would be invisible on the base surface;
	   give it a full border so the rectangle reads. */
	:host(:not([data-has-media])[main-background="base"]) .hero__body {
		border: var(--primitives-border-width-regular) solid var(--semantics-content-color);
	}

	/* A ghost cell sets the body's minimum height from the aspect ratio
	   without forcing it: the panel shares the same grid cell, so a taller
	   panel grows the row past this floor. Putting the ratio on a ghost
	   (instead of aspect-ratio on the body) keeps growth content-driven
	   rather than rigidly tied to the width. align-self: start stops the
	   stretch fit from cancelling the ratio. */
	:host([data-has-media]:not([main-width="full"])) .hero__body::before {
		@container (min-width: ${pf}) {
			content: '';
			aspect-ratio: var(--_media-aspect-ratio);
			grid-area: 1 / 1;
			align-self: start;
		}
	}

	@media (forced-colors: active) {
		.hero__body {
			border: var(--primitives-border-width-thin) solid CanvasText;
		}
	}


	/* # Media */

	.hero__media {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.hero__media[hidden] {
		display: none;
	}

	.hero__media ::slotted(img) {
		${_}
		display: block !important;
		width: 100% !important;
		height: 100% !important;
		object-fit: cover !important;
	}

	.hero__media ::slotted(nldd-image) {
		display: block !important;
		width: 100% !important;
		height: 100% !important;
	}

	.hero__media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}


	/* # Main */

	.hero__main {
		/* Cascade the panel color so descendants that key off the parent
		   background (inherit-filled buttons, badge rings) read this
		   surface. */
		--context-parent-background-color: var(--_main-background-color);

		box-sizing: border-box;
		display: flex;
		position: relative;
		grid-area: 1 / 1;
		align-self: end;
		justify-self: start;
		background-color: var(--_main-background-color);
		width: var(--_main-width);
		padding: var(--_main-padding);
		flex-direction: column;
		color: var(--_main-content-color);
	}

	:host(:not([data-has-media])) .hero__main {
		width: 100%;
	}

	:host([main-position="top-left"]) .hero__main {
		align-self: start;
	}

	:host([main-position="top-right"]) .hero__main {
		align-self: start;
		justify-self: end;
	}

	:host([main-position="bottom-right"]) .hero__main {
		justify-self: end;
	}

	:host([main-position="left"]) .hero__main {
		align-self: stretch;
	}

	:host([main-position="right"]) .hero__main {
		align-self: stretch;
		justify-self: end;
	}

	@media (forced-colors: active) {
		.hero__main {
			border: var(--primitives-border-width-thin) solid CanvasText;
		}
	}


	/* # Full-width strip (md+)
	   With main-width="full" the panel is a full top or bottom strip and the
	   media stacks on the opposite side instead of sitting behind it. Switch the
	   body to a column so the two blocks stack: a bottom panel keeps the media on
	   top, a top panel (column-reverse) drops it below. The media keeps the
	   overlay's 21/9 strip. Below sm every layout already stacks, so this only
	   targets md and up. */

	@container (min-width: ${pf}) {
		:host([data-has-media][main-width="full"]) .hero__body {
			display: flex;
			flex-direction: column;
		}

		:host([data-has-media][main-width="full"]:is([main-position="top-left"], [main-position="top-right"])) .hero__body {
			flex-direction: column-reverse;
		}

		:host([data-has-media][main-width="full"]) .hero__media {
			position: static;
			aspect-ratio: var(--_media-aspect-ratio);
		}
	}


	/* # Mobile — stack media over a full-width panel. */

	@container (max-width: ${ff}) {
		.hero__body {
			display: flex;
			flex-direction: column;
		}

		:host(:is([main-position="top-left"], [main-position="top-right"])) .hero__body {
			flex-direction: column-reverse;
		}

		.hero__media {
			position: static;
			overflow: hidden;
			aspect-ratio: var(--_media-aspect-ratio);
		}

		.hero__main {
			width: 100%;
		}
	}
`;function _f(e){let t=e.mediaSrc&&!e._slotHasMedia?r`<img
				src=${e.mediaSrc}
				srcset=${e.mediaSrcset||n}
				sizes=${e.mediaSizes||n}
				alt=${e.mediaAlt}
				loading="eager"
				decoding="async"
			>`:n;return r`
		<section class="hero">
			<div class="hero__body">
				<div class="hero__media"
					?hidden=${!e._hasMedia}
				>
					<slot
						name="media"
						@slotchange=${e._onMediaSlotChange}
					></slot>
					${t}
				</div>
				<div class="hero__main">
					<slot></slot>
				</div>
			</div>
		</section>
	`}var vf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yf=class extends df(o){constructor(){super(...arguments),this.width=``,this.mainBackground=`accent`,this.mainWidth=`1/2`,this.mainPosition=`bottom-left`,this.mediaAspectRatio=``,this.mediaSrc=``,this.mediaSrcset=``,this.mediaSizes=``,this.mediaAlt=``,this._slotHasMedia=!1}get _hasMedia(){return this.mediaSrc!==``||this._slotHasMedia}willUpdate(e){super.willUpdate(e),this.toggleAttribute(`data-has-media`,this._hasMedia)}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}if(e.has(`mediaAspectRatio`)){let e=(this.mediaAspectRatio??``).replace(`:`,`/`).trim();e&&CSS.supports(`aspect-ratio`,e)?this.style.setProperty(`--_media-aspect-ratio`,e):this.style.removeProperty(`--_media-aspect-ratio`)}}_onMediaSlotChange(e){let t=e.target;this._slotHasMedia=t.assignedElements().length>0}render(){return _f(this)}};yf.styles=gf,vf([c({type:String,reflect:!0})],yf.prototype,`width`,void 0),vf([c({reflect:!0,attribute:`main-background`,converter:p(`accent`)})],yf.prototype,`mainBackground`,void 0),vf([c({reflect:!0,attribute:`main-width`,converter:p(`1/2`)})],yf.prototype,`mainWidth`,void 0),vf([c({reflect:!0,attribute:`main-position`,converter:p(`bottom-left`)})],yf.prototype,`mainPosition`,void 0),vf([c({type:String,reflect:!0,attribute:`media-aspect-ratio`})],yf.prototype,`mediaAspectRatio`,void 0),vf([c({type:String,attribute:`media-src`})],yf.prototype,`mediaSrc`,void 0),vf([c({type:String,attribute:`media-srcset`})],yf.prototype,`mediaSrcset`,void 0),vf([c({type:String,attribute:`media-sizes`})],yf.prototype,`mediaSizes`,void 0),vf([c({type:String,attribute:`media-alt`})],yf.prototype,`mediaAlt`,void 0),vf([d()],yf.prototype,`_slotHasMedia`,void 0),yf=vf([u(`nldd-hero`)],yf);var bf=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_size: var(--primitives-space-24);
		--_content-color: var(--context-content-color, var(--semantics-content-color));

		display: flex;
		/* !important: shields the row padding from consumer universal resets, which beat normal :host declarations per CSS Scoping. */
		padding-block: var(--context-cell-padding-block, 0px) !important;
		width: var(--_size);
		flex-direction: column;
		align-items: center;
		color: var(--_content-color);
	}

	:host([hidden]) {
		display: none;
	}

	:host([size="16"]) {
		--_size: var(--primitives-space-16);
	}

	:host([size="20"]) {
		--_size: var(--primitives-space-20);
	}

	:host([size="32"]) {
		--_size: var(--primitives-space-32);
	}

	/* ## Color */

	:host([color="secondary"]) {
		--_content-color: var(--context-content-secondary-color, var(--semantics-content-secondary-color));
	}

	:host([color="accent"]) {
		--_content-color: var(--context-content-accent-color, var(--semantics-content-accent-color));
	}

	:host([color="success"]) {
		--_content-color: var(--context-content-success-color, var(--semantics-content-success-color));
	}

	:host([color="warning"]) {
		--_content-color: var(--context-content-warning-color, var(--semantics-content-warning-color));
	}

	:host([color="critical"]) {
		--_content-color: var(--context-content-critical-color, var(--semantics-content-critical-color));
	}


	/* # Vertical alignment */

	:host([vertical-alignment="center"]),
	:host(:not([vertical-alignment])) {
		align-self: stretch;
		justify-content: center;
	}

	:host([vertical-alignment="top"]) {
		align-self: flex-start;
		justify-content: flex-start;
	}

	:host([vertical-alignment="bottom"]) {
		align-self: flex-end;
		justify-content: flex-end;
	}


	/* # Elements */

	/* No width/height here: a slotted nldd-icon defines its own --_size,
	   which shadows this cell's --_size in ::slotted var() resolution
	   (custom props resolve against the slotted element). The icon sizes
	   itself — width fills the cell, height auto keeps it square. */
	::slotted(*) {
		display: block;
		flex-shrink: 0;
	}

	/* A disclosure chevron turns on command of the row or the segment, which set
	   --context-cell-glyph-rotation. The glyph turns, never the cell: a transform
	   on the cell changes the box getBoundingClientRect() reports, and that box is
	   what a row measures to place its divider. */
	.icon-cell__glyph {
		/* Flex, not block: a block box adds the line-height leading around the
		   glyph, which made the cell measure taller than the icon it holds. The
		   centering lives here too — the glyph sits in this box, so the host can
		   no longer place it. */
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		rotate: var(--context-cell-glyph-rotation, 0deg);
		transition: rotate var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default);
	}

	@media (prefers-reduced-motion: reduce) {
		.icon-cell__glyph {
			transition: none;
		}
	}
`;function xf(){return r`
		<span
			part="icon"
			class="icon-cell__glyph"
		>
			${this.icon?r`<nldd-icon icon=${this.icon}></nldd-icon>`:r`<slot></slot>`}
		</span>
	`}var Sf=t({NLDDIconCell:()=>wf}),Cf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wf=class extends ge(o,`cells-container`){constructor(){super(...arguments),this.size=`24`,this.color=`content`,this.verticalAlignment=`center`,this.icon=``}render(){return xf.call(this)}};wf.styles=bf,Cf([c({type:String,reflect:!0})],wf.prototype,`size`,void 0),Cf([c({reflect:!0,converter:p(`content`)})],wf.prototype,`color`,void 0),Cf([c({reflect:!0,attribute:`vertical-alignment`,converter:p(`center`)})],wf.prototype,`verticalAlignment`,void 0),Cf([c({type:String,reflect:!0})],wf.prototype,`icon`,void 0),wf=Cf([u(`nldd-icon-cell`)],wf);var Tf=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_icon-size: var(--primitives-space-40);
		--_icon-color: var(--components-inline-dialog-icon-color);
		--_text-font: var(--primitives-font-body-md-bold-tight);
		--_supporting-text-font: var(--primitives-font-body-sm-regular-tight);

		${v}
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
	}

	:host([size="lg"]) {
		--_icon-size: var(--primitives-space-48);
		--_text-font: var(--primitives-font-body-lg-bold-tight);
		--_supporting-text-font: var(--primitives-font-body-md-regular-tight);
	}

	:host([variant="alert"]) {
		--_icon-color: var(--components-inline-dialog-icon-warning-color);
	}

	:host([variant="success"]) {
		--_icon-color: var(--components-inline-dialog-icon-success-color);
	}

	:host([icon-color="secondary"]) {
		--_icon-color: var(--components-inline-dialog-icon-secondary-color);
	}

	:host([icon-color="accent"]) {
		--_icon-color: var(--components-inline-dialog-icon-accent-color);
	}

	:host([icon-color="critical"]) {
		--_icon-color: var(--components-inline-dialog-icon-critical-color);
	}

	:host([icon-color="warning"]) {
		--_icon-color: var(--components-inline-dialog-icon-warning-color);
	}

	:host([icon-color="success"]) {
		--_icon-color: var(--components-inline-dialog-icon-success-color);
	}

	:host([hidden]) {
		display: none;
	}


	/* # Elements */

	.inline-dialog {
		box-sizing: border-box;
		display: flex;
		max-width: var(--primitives-area-480);
		flex-direction: column;
		flex-grow: 1;
		align-items: center;
	}

	.inline-dialog--left-aligned {
		align-items: stretch;
	}

	.inline-dialog__main {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: var(--primitives-space-2);
	}

	.inline-dialog--left-aligned .inline-dialog__main {
		align-items: stretch;
	}

	.inline-dialog__icon {
		display: flex;
		width: var(--_icon-size);
		height: var(--_icon-size);
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		color: var(--_icon-color);
	}

	.inline-dialog__text {
		margin: 0;
		text-align: center;
		color: var(--semantics-content-color);
		font: var(--_text-font);
		text-wrap: pretty;
	}

	.inline-dialog__text:focus-visible {
		outline: none;
		box-shadow: none;
	}

	.inline-dialog__supporting-text {
		margin: 0;
		text-align: center;
		color: var(--semantics-content-color);
		font: var(--_supporting-text-font);
		text-wrap: pretty;
	}

	.inline-dialog--left-aligned .inline-dialog__text,
	.inline-dialog--left-aligned .inline-dialog__supporting-text {
		text-align: left;
	}

	.inline-dialog__content {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding-top: var(--primitives-space-16);
	}

	.inline-dialog--left-aligned .inline-dialog__content {
		align-items: stretch;
	}

	.inline-dialog__content[hidden] {
		display: none;
	}

	.inline-dialog__footer {
		width: 100%;
		padding-top: var(--primitives-space-16);
	}

	.inline-dialog__footer[hidden] {
		display: none;
	}
`;function Ef(e){let t=e._resolvedHorizontalAlignment,i=[`inline-dialog`,t===`left`?`inline-dialog--left-aligned`:``].filter(Boolean).join(` `);return r`
		<div class=${i}>
			<div class="inline-dialog__main">
				${e.variant===`loading`?r`
					<div class="inline-dialog__icon">
						<nldd-activity-indicator
							size=${e.size===`lg`?`48`:`40`}
							timing="instant"
						></nldd-activity-indicator>
					</div>
				`:e._resolvedIconName?r`
					<div class="inline-dialog__icon">
						<nldd-icon icon=${e._resolvedIconName}></nldd-icon>
					</div>
				`:n}
				${e.text?r`
					${e.headingLevel===1?r`<h1 class="inline-dialog__text">${e.text}</h1>`:e.headingLevel===2?r`<h2 class="inline-dialog__text">${e.text}</h2>`:e.headingLevel===3?r`<h3 class="inline-dialog__text">${e.text}</h3>`:e.headingLevel===4?r`<h4 class="inline-dialog__text">${e.text}</h4>`:e.headingLevel===5?r`<h5 class="inline-dialog__text">${e.text}</h5>`:e.headingLevel===6?r`<h6 class="inline-dialog__text">${e.text}</h6>`:r`<p class="inline-dialog__text">${e.text}</p>`}
				`:n}
				${e.supportingText?r`
					<p class="inline-dialog__supporting-text">${e.supportingText}</p>
				`:n}
				<div class="inline-dialog__content"
					?hidden=${!e._hasContent}
				>
					<slot></slot>
				</div>
			</div>
			<div class="inline-dialog__footer"
				?hidden=${!e._hasActions}
			>
				<nldd-button-group orientation=${t===`left`?`horizontal`:`vertical`}>
					<slot name="actions"></slot>
				</nldd-button-group>
			</div>
		</div>
	`}var Df=a(b.smMax),Of=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: 100%;
		--_flex-direction: column;
		--_flex-wrap: nowrap;
		--_gap: var(--components-button-group-md-gap);

		display: flex;
		width: 100%;
		justify-content: flex-start;
	}

	/* Only auto asks its own width a question, so only auto becomes a container.
	   A container may not size itself from its contents, and a group pinned to a
	   row or a stack would then measure zero in a parent that shrink-wraps, for
	   a query it never runs. */
	:host(:not([orientation="horizontal"], [orientation="vertical"])) {
		container-type: inline-size;
	}

	:host([size="sm"]) {
		--_gap: var(--components-button-group-sm-gap);
	}

	/* ## In a row
	   The row keeps the full width (like the stack) so full-width children
	   can actually stretch; content-sized buttons still sit left within
	   the row. */

	:host([orientation="horizontal"]),
	:host(:not([orientation="horizontal"], [orientation="vertical"])) {
		--_flex-direction: row;
		--_flex-wrap: wrap;
	}

	/* ## Auto
	   Auto is the default: a row, and stacked over the full width on a narrow
	   container, where two labels beside each other leave no room for either.

	   Auto is matched as "neither of the other two" rather than as itself: the
	   attribute reflects only when it is not the default, so auto is written out
	   OR absent, and a rule that named it would have needed a second selector
	   beside it everywhere. */

	@container (max-width: ${Df}) {
		:host(:not([orientation="horizontal"], [orientation="vertical"])) .button-group {
			flex-direction: column;
			--context-button-width: 100%;
		}

		/* display as well as width: a button host shrink-wraps as inline-flex, so
		   width alone leaves the button itself content-sized in a stretched box.
		   An icon-only control is the exception: its size is its icon, and a
		   full-width bar with one glyph in the middle is not a bigger target for
		   the thumb, just a wider one. */
		:host(:not([orientation="horizontal"], [orientation="vertical"])) ::slotted(:not(nldd-icon-button)) {
			display: block;
			width: 100%;
		}

		/* align-self as well: a column stretches its items across the full width
		   on its own, so without this the icon button is a wide bar regardless of
		   the width rule above. */
		:host(:not([orientation="horizontal"], [orientation="vertical"])) ::slotted(nldd-icon-button) {
			align-self: flex-start;
		}
	}

	:host([orientation="vertical"]) .button-group {
		--context-button-width: 100%;
	}

	:host([orientation="vertical"]) ::slotted(:not(nldd-icon-button)) {
		display: block;
		width: 100%;
	}

	:host([orientation="vertical"]) ::slotted(nldd-icon-button) {
		align-self: flex-start;
	}

	:host([hidden]) {
		display: none;
	}

	/* The stacking rules above set display on every slotted child at a higher
	   specificity than this selector, so without !important a hidden button in
	   a stacked group stays in the row. */
	::slotted([hidden]) {
		display: none !important;
	}


	/* # Block */

	.button-group {
		display: flex;
		width: var(--_width);
		flex-direction: var(--_flex-direction);
		flex-wrap: var(--_flex-wrap);
		gap: var(--_gap);
	}
`;function kf(){return r`
	<div class="button-group">
		<slot @slotchange=${this.handleSlotChange}></slot>
	</div>
	`}var Af=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jf=class extends o{constructor(){super(...arguments),this.size=`md`,this.orientation=`auto`,this._collapseObserver=null,this._collapseVerdict=0}handleSlotChange(){this._slot.assignedElements({flatten:!0}).filter(e=>e instanceof HTMLElement).forEach((e,t)=>{t>=3&&e.setAttribute(`hidden`,``),e.setAttribute(`size`,this.size)})}updated(e){e.has(`size`)&&this.handleSlotChange(),e.has(`orientation`)&&this._watchForCollapse()}connectedCallback(){super.connectedCallback(),this._watchForCollapse()}disconnectedCallback(){super.disconnectedCallback(),this._stopWatchingForCollapse()}_watchForCollapse(){}_stopWatchingForCollapse(){this._collapseObserver?.disconnect(),this._collapseObserver=null,this._collapseVerdict&&clearTimeout(this._collapseVerdict),this._collapseVerdict=0}render(){return kf.call(this)}};jf.styles=Of,Af([c({reflect:!0,converter:p(`md`)})],jf.prototype,`size`,void 0),Af([c({reflect:!0,converter:p(`auto`)})],jf.prototype,`orientation`,void 0),Af([f(`slot`)],jf.prototype,`_slot`,void 0),jf=Af([u(`nldd-button-group`)],jf);var Mf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nf=class extends o{constructor(){super(...arguments),this.variant=``,this.size=`md`,this.icon=``,this.iconColor=``,this.text=``,this.supportingText=``,this.headingLevel=null,this.horizontalAlignment=``,this._hasContent=!1,this._hasActions=!1}get _resolvedIconName(){return this.variant===`alert`?`alert`:this.variant===`success`?`success`:this.icon?this.icon:``}get _resolvedHorizontalAlignment(){return this.horizontalAlignment?this.horizontalAlignment:this._hasContent?`left`:`center`}firstUpdated(){let e=this.shadowRoot?.querySelector(`slot:not([name])`),t=this.shadowRoot?.querySelector(`slot[name="actions"]`),n=e=>(e?.assignedNodes({flatten:!0})??[]).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()??``)!==``),r=()=>{this._hasContent=n(e)},i=()=>{this._hasActions=n(t)};e?.addEventListener(`slotchange`,r),t?.addEventListener(`slotchange`,i),queueMicrotask(()=>{r(),i()})}render(){return Ef(this)}};Nf.styles=Tf,Mf([c({reflect:!0,converter:p(``)})],Nf.prototype,`variant`,void 0),Mf([c({reflect:!0,converter:p(`md`)})],Nf.prototype,`size`,void 0),Mf([c({type:String,reflect:!0})],Nf.prototype,`icon`,void 0),Mf([c({type:String,reflect:!0,attribute:`icon-color`})],Nf.prototype,`iconColor`,void 0),Mf([c({reflect:!0,converter:p(``)})],Nf.prototype,`text`,void 0),Mf([c({reflect:!0,attribute:`supporting-text`,converter:p(``)})],Nf.prototype,`supportingText`,void 0),Mf([c({type:Number,reflect:!0,attribute:`heading-level`})],Nf.prototype,`headingLevel`,void 0),Mf([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(``)})],Nf.prototype,`horizontalAlignment`,void 0),Mf([d()],Nf.prototype,`_hasContent`,void 0),Mf([d()],Nf.prototype,`_hasActions`,void 0),Nf=Mf([u(`nldd-inline-dialog`)],Nf);var Pf=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	/* Two modes: no [size] or [size="inherit"] → display:inline (wraps in
	   running text, inherits font). Sized xs/sm/md/lg → inline-flex (start/end
	   icons baseline-aligned with explicit gap). */

	:host {
		${v}
		-webkit-tap-highlight-color: transparent;
	}

	:host(:not([size])),
	:host([size="inherit"]) {
		display: inline;
	}

	:host([size="xs"]),
	:host([size="sm"]),
	:host([size="md"]),
	:host([size="lg"]) {
		display: inline-flex;
	}

	:host([hidden]) {
		display: none;
	}

	:host([disabled]) {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}


	/* # Block */

	.link {
		border-radius: var(--primitives-corner-radius-xs);
		background: none;
		color: var(--semantics-links-color);
		text-decoration: none;
		transition: color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default);
		appearance: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.link {
			transition: none;
		}
	}

	:host(:not([size])) .link,
	:host([size="inherit"]) .link {
		display: inline;
	}

	:host([size="xs"]) .link {
		display: inline-flex;
		gap: var(--primitives-space-4);
		align-items: center;
		font: var(--primitives-font-body-xs-regular-flat);
	}

	:host([size="sm"]) .link {
		display: inline-flex;
		gap: var(--primitives-space-4);
		align-items: center;
		font: var(--primitives-font-body-sm-regular-flat);
	}

	:host([size="md"]) .link {
		display: inline-flex;
		gap: var(--primitives-space-6);
		align-items: center;
		font: var(--primitives-font-body-md-regular-flat);
	}

	:host([size="lg"]) .link {
		display: inline-flex;
		gap: var(--primitives-space-6);
		align-items: center;
		font: var(--primitives-font-body-lg-regular-flat);
	}

	@media (hover: hover) {
		.link:hover {
			color: var(--semantics-links-is-hovered-color);
		}
	}

	.link:active {
		color: var(--semantics-links-is-active-color);
	}

	.link:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	@media (forced-colors: active) {
		.link:focus-visible {
			outline: 2px solid CanvasText;
		}
	}

	.link:focus:not(:focus-visible) {
		outline: none;
	}


	/* # Elements */

	.link__label {
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.link:focus-visible .link__label {
		text-decoration: none;
	}

	.link__start-icon,
	.link__end-icon {
		display: inline-flex;
		position: relative;
		width: 1em;
		height: 1em;
		flex-shrink: 0;
		align-items: center;
	}

	:host(:not([size])) .link__start-icon,
	:host([size="inherit"]) .link__start-icon,
	:host(:not([size])) .link__end-icon,
	:host([size="inherit"]) .link__end-icon {
		top: 0.2em;
	}

	/* Visually-hidden "opens in new tab" announcement (target="_blank"); part of
	   the link's accessible name but never shown. Standard visually-hidden recipe. */
	.link__opens-in-new-tab-hint {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}
`;function Ff(e){let t=ie(this.rel,this.target),i=!this.disabled&&this.href&&this.target===`_blank`?this._t(`components.link.opens-in-new-tab-label`):``,a=this.accessibleLabel?[this.accessibleLabel,i].filter(Boolean).join(`, `):n,o=!!i&&!this.accessibleLabel;return r`
		<a class="link"
			href=${this.disabled?n:this.href||n}
			role=${this.disabled?`link`:n}
			tabindex=${this.noTab?`-1`:this.disabled?`0`:n}
			target=${this.disabled?n:this.target||n}
			rel=${this.disabled?n:t||n}
			aria-disabled=${this.disabled?`true`:n}
			aria-label=${a}
			@click=${e.handleClick}
		>
			${this.startIcon?r`
				<span class="link__start-icon"><nldd-icon icon=${this.startIcon}></nldd-icon></span>
			`:r`<slot name="start-icon"></slot>`}
			<span class="link__label">${this.text?this.text:r`<slot></slot>`}</span>
			${this.endIcon?r`
				<span class="link__end-icon"><nldd-icon icon=${this.endIcon}></nldd-icon></span>
			`:r`<slot name="end-icon"></slot>`}
			${o?r`<span class="link__opens-in-new-tab-hint">${i}</span>`:n}
		</a>
	`}var If={"components.link.opens-in-new-tab-label":`Opent in nieuw tabblad`},Lf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rf=class extends re(o,If){constructor(){super(...arguments),this.href=void 0,this.target=void 0,this.rel=void 0,this.size=`inherit`,this.text=``,this.startIcon=``,this.endIcon=``,this.accessibleLabel=``,this.disabled=!1,this.noTab=!1}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){return Ff.call(this,{handleClick:this._handleClick.bind(this)})}};Rf.styles=Pf,Lf([c({type:String,reflect:!0})],Rf.prototype,`href`,void 0),Lf([c({type:String})],Rf.prototype,`target`,void 0),Lf([c({type:String})],Rf.prototype,`rel`,void 0),Lf([c({reflect:!0,converter:p(`inherit`)})],Rf.prototype,`size`,void 0),Lf([c({reflect:!0,converter:p(``)})],Rf.prototype,`text`,void 0),Lf([c({type:String,attribute:`start-icon`})],Rf.prototype,`startIcon`,void 0),Lf([c({type:String,attribute:`end-icon`})],Rf.prototype,`endIcon`,void 0),Lf([c({type:String,attribute:`accessible-label`})],Rf.prototype,`accessibleLabel`,void 0),Lf([c({type:Boolean,reflect:!0})],Rf.prototype,`disabled`,void 0),Lf([c({type:Boolean,reflect:!0,attribute:`no-tab`})],Rf.prototype,`noTab`,void 0),Rf=Lf([u(`nldd-link`)],Rf);var zf=i`
	:host {
		box-sizing: border-box;
	}

	/* Nothing in it, nothing said about it and no controls of its own: not a
	   thing on the page, so a parent that spaces its children keeps no room for
	   it either. The surface is already gone with .list__main; this takes the
	   box out of the flow. */
	:host(.is-blank) {
		display: none;
	}


	/* # Host */

	:host {
		--_drag-clone-top: 0px;
		--_drag-clone-left: 0px;
		--_drag-clone-opacity: 0.95;
		--_drag-clone-z-index: 100;
		--_drag-clone-width: 0px;
		--_drag-clone-height: 0px;
		--_max-height: none;
		--_background-color: transparent;
		--_highlight-border-color: transparent;
		--_box-padding: var(--primitives-space-4);
		--_gap: var(--primitives-space-8);
		--_search-field-min-size: var(--semantics-controls-md-min-size);
		--_search-field-icon-size: var(--primitives-space-24);
		--_search-field-end-padding-right: calc((var(--_search-field-min-size) - var(--semantics-controls-sm-min-size)) / 2 - var(--semantics-input-fields-border-width));
		--_search-field-button-focus-z-index: 1;
		--_search-bar-gap: var(--primitives-space-8);
		--_toolbar-gap: var(--primitives-space-8);
		--_empty-padding: var(--primitives-space-16);

		display: block;
		position: relative;
		width: 100%;
		isolation: isolate;
	}

	:host([hidden]) {
		display: none;
	}

	:host([dividers="never"]),
	:host([dividers="on-touch"]) {
		--context-list-divider-display: none;
	}

	@media (pointer: coarse) {
		:host([dividers="on-touch"]) {
			--context-list-divider-display: block;
		}
	}

	:host([appearance^="box"]) {
		--_background-color: var(--semantics-surfaces-tinted-background-color);
		--_highlight-border-color: var(--semantics-surfaces-tinted-border-color);
	}

	:host([appearance="box-base"]) {
		--_background-color: var(--semantics-surfaces-base-background-color);
		--_highlight-border-color: var(--semantics-surfaces-base-border-color);
	}


	/* # Block */

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--_gap);
	}


	/* # Elements */

	.list__header {
		display: contents;
	}

	.list__toolbar {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--_toolbar-gap);
	}

	.list__toolbar[hidden] {
		display: none;
	}

	.list__search-bar[hidden] {
		display: none;
	}

	.list__main {
		display: flex;
		flex-direction: column;
	}

	/* No overflow clip: the rows sit 4px inside the frame, so their fills never
	   reach its corners and have nothing to be clipped against. Without it a
	   focus ring inside the box paints outward, like every other control in the
	   system, instead of being cut off by the frame. */
	:host([appearance^="box"]) .list__main {
		position: relative;
		border-radius: var(--semantics-surfaces-corner-radius);
		background-color: var(--_background-color);
		box-shadow: inset 0 0 0 1px var(--_highlight-border-color);
	}

	/* Listbox: give the options a bit more breathing room from the pinned
	   search bar (and toolbar) above them than the default inter-row gap, so
	   the search field reads as a zone distinct from the scrolling options. */

	:host([type="listbox"]) .list__main {
		margin-block-start: var(--primitives-space-8);
	}

	.list__main[hidden] {
		display: none;
	}

	.list__items {
		display: flex;
		flex-direction: column;
	}

	.list__items[hidden] {
		display: none;
	}

	:host([appearance^="box"]) .list__items {
		padding-inline: calc(var(--components-list-item-indicator-inline-inset) + var(--_box-padding));
		padding-block: var(--_box-padding);
	}

	:host([type="listbox"]) .list__items {
		max-height: var(--_max-height);
		overflow-x: hidden;
		overflow-y: auto;
		padding-inline: var(--components-list-item-indicator-inline-inset);
	}

	.list__empty {
		padding: var(--_empty-padding);
	}

	.list__empty[hidden] {
		display: none;
	}

	.list__search-bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--_search-bar-gap);
	}

	.list__search-bar-end {
		display: flex;
		flex-shrink: 0;
		flex-direction: row;
		align-items: center;
		gap: var(--_search-bar-gap);
	}

	.list__search-bar-end[hidden] {
		display: none;
	}

	.list__search-field {
		box-sizing: border-box;
		display: flex;
		position: relative;
		border: var(--semantics-input-fields-border);
		border-radius: var(--semantics-controls-md-corner-radius);
		background-color: var(--semantics-input-fields-background-color);
		width: 100%;
		min-width: 0;
		min-height: var(--_search-field-min-size);
		flex-direction: row;
		align-items: center;
	}

	.list__search-field:has(.list__search-field-input:focus-visible) {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	.list__search-field-label {
		display: flex;
		min-width: 0;
		flex-grow: 1;
		align-self: stretch;
		flex-direction: row;
		align-items: center;
	}

	.list__search-field-icon {
		display: flex;
		margin-inline: calc((var(--_search-field-min-size) - var(--_search-field-icon-size)) / 2 - var(--semantics-input-fields-border-width));
		width: var(--_search-field-icon-size);
		height: var(--_search-field-icon-size);
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		color: var(--semantics-content-secondary-color);
	}

	.list__search-field-input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		background: transparent;
		min-width: 0;
		padding: 0;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
		align-self: stretch;
		color: var(--semantics-content-color);
		font: var(--semantics-input-fields-md-text-font);
		appearance: none;
	}

	.list__search-field-input::placeholder {
		color: var(--semantics-input-fields-placeholder-color);
	}

	.list__search-field-end {
		display: flex;
		position: relative;
		padding-right: var(--_search-field-end-padding-right);
		flex-shrink: 0;
		align-items: center;
	}

	.list__search-field-clear:focus-within {
		position: relative;
		z-index: var(--_search-field-button-focus-z-index);
	}

	::slotted(.nldd-list-drag-placeholder) {
		box-sizing: border-box;
		border-radius: var(--components-list-item-indicator-corner-radius);
		background-color: var(--components-list-drag-placeholder-background-color);
		pointer-events: none;
	}

	.list__drag-clone {
		display: flex;
		position: absolute;
		top: var(--_drag-clone-top);
		left: var(--_drag-clone-left);
		opacity: var(--_drag-clone-opacity);
		z-index: var(--_drag-clone-z-index);
		border-radius: var(--components-list-item-indicator-corner-radius);
		background: var(--semantics-surfaces-base-background-color);
		pointer-events: none;
		width: var(--_drag-clone-width);
		height: var(--_drag-clone-height);
		overflow: hidden;
		flex-direction: row;
		align-items: stretch;
	}

	.list__polite-announcer,
	.list__assertive-announcer {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}


	/* # High Contrast */

	@media (forced-colors: active) {
		:host([appearance^="box"]) .list__main {
			border: 1px solid CanvasText;
		}
	}
`,Bf=({itemsLabel:e,hasToolbar:t,type:i,isEmpty:a,hasItems:o,hasEmptyState:s,hasNoResultsState:c,listbox:l})=>{let u=i===`navigation`,d=i===`listbox`,f=u||d,p=d?`listbox`:i===`tree`?`tree`:i===`radiogroup`?`radiogroup`:`list`,m=a&&o,h=d&&l.searchValue===``,g=m&&!c&&s,_=m&&c&&!h,v=(!m&&a&&s||g)&&!h,ee=!a||v||_,te=o||d;return r`
		<div class="list">
			<div class="list__header">
				${d?r`
					<div class="list__search-bar"
						?hidden=${!te}
					>
						<div class="list__search-field">
							<label class="list__search-field-label">
								<div class="list__search-field-icon"
									aria-hidden="true"
								>
									<nldd-icon icon="search"></nldd-icon>
								</div>
								<input class="list__search-field-input"
									type="text"
									role="combobox"
									aria-controls=${l.listboxId}
									aria-expanded=${!a}
									aria-autocomplete="list"
									aria-activedescendant=${l.activeId||n}
									aria-label=${l.searchAccessibleLabel}
									placeholder=${l.searchPlaceholder}
									.value=${l.searchValue}
									@input=${l.onSearchInput}
									@keydown=${l.onSearchKeyDown}
									@focus=${l.onSearchFocus}
									@blur=${l.onSearchBlur}
								>
							</label>
							${l.searchValue?r`
								<div class="list__search-field-end">
									<div class="list__search-field-clear">
										<nldd-icon-button
											appearance="neutral-transparent"
											size="sm"
											icon="dismiss"
											text=${l.searchClearLabel}
											tooltip-timing="never"
											@click=${l.onClearClick}
										></nldd-icon-button>
									</div>
								</div>
							`:n}
						</div>
						<div class="list__search-bar-end"
							?hidden=${!l.hasSearchBarEnd}
						>
							<slot
								name="search-bar-end"
								@slotchange=${l.onSearchBarEndSlotChange}
							></slot>
						</div>
					</div>
				`:n}
				<div class="list__toolbar"
					?hidden=${!t||!te}
				>
					<slot name="toolbar"></slot>
				</div>
			</div>
			<div class="list__main"
				?hidden=${!ee}
			>
				<div class="list__items"
					id=${Cd(d?l.listboxId:void 0)}
					role=${p}
					aria-label=${Cd(f?void 0:e)}
					?hidden=${a}
				>
					<slot></slot>
				</div>
				<div class="list__empty"
					?hidden=${!v&&!_}
				>
					<slot
						name="empty"
						?hidden=${!v}
					></slot>
					<slot
						name="no-results"
						?hidden=${!_}
					></slot>
				</div>
			</div>
		</div>
		<div class="list__polite-announcer"
			role="status"
			aria-live="polite"
			aria-atomic="true"
		></div>
		<div class="list__assertive-announcer"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		></div>
	`},Vf={"components.list.items-accessible-label":`Lijst`,"components.list.navigation-accessible-label":`Navigatie`,"components.list.arrow-navigation-description-text":`Gebruik de pijltjestoetsen om door de lijst te navigeren.`,"components.list.search-placeholder-label":`Zoeken`,"components.list.search-clear-action":`Wis zoekopdracht`,"components.list.reorder-moved-text":`Item verplaatst naar positie {position}.`,"components.list.reorder-dropped-text":`Item neergezet op positie {position}.`,"components.list.reorder-no-change-text":`Item neergezet. Positie ongewijzigd.`,"components.list.reorder-canceled-text":`Slepen geannuleerd.`},Hf=t({NLDDList:()=>K}),G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uf,K=Uf=class extends o{constructor(){super(...arguments),this.appearance=`simple`,this.type=`list`,this.dividers=`always`,this.height=``,this.accessibleLabel=``,this.translations={},this.reorderable=!1,this._hasToolbar=!1,this._hasSearchBarEnd=!1,this._hasEmptyState=!1,this._hasNoResultsState=!1,this._hasItems=!1,this._isEmpty=!1,this._searchValue=``,this._activeId=``,this._searchFocused=!1,this._listboxId=`nldd-list-listbox-${Uf._idCounter++}`,this._draggingEl=null,this._draggingFromIndex=-1,this._placeholder=null,this._currentDropIndex=-1,this._pointerId=null,this._clone=null,this._cloneOffsetY=0,this._listRect=null,this._itemsObserver=null,this._autoLabel=null,this._contextScheduled=!1,this._warnedSilentEmpty=!1,this._listboxScheduled=!1,this._onSearchInput=e=>{e.stopPropagation();let t=e.target;this._searchValue=t.value,this._emitListboxInput(this._searchValue)},this._onClearClick=()=>{this._clearSearch()},this._onSearchBarEndSlotChange=e=>{let t=e.target;queueMicrotask(()=>{this._hasSearchBarEnd=t.assignedElements().length>0})},this._onSearchFocus=()=>{this._searchFocused=!0,this._applyListboxOptions()},this._onSearchBlur=()=>{this._searchFocused=!1,this._syncHighlight()},this._onListClick=e=>{if(this.type!==`listbox`)return;let t=e.target?.closest?.(`nldd-list-item`);t&&t.parentElement===this&&!t.hasAttribute(`hidden`)&&(this._activeId=this._ensureOptionId(t))},this._onSearchKeyDown=e=>{let{key:t}=e;if(t===`Escape`){this._searchValue!==``&&(e.preventDefault(),this._clearSearch());return}if(t===`Enter`){let t=this._activeItem;t&&(e.preventDefault(),t.shadowRoot?.querySelector(`.list-item__action`)?.click(),this._searchInput?.focus());return}if(t!==`ArrowDown`&&t!==`ArrowUp`&&t!==`Home`&&t!==`End`)return;let n=this._getVisibleItems();if(n.length===0)return;e.preventDefault();let r=n.findIndex(e=>e.id===this._activeId),i;if(t===`Home`)i=0;else if(t===`End`)i=n.length-1;else{let e=t===`ArrowDown`?1:-1;i=((r===-1?e===1?-1:0:r)+e+n.length)%n.length}this._setActiveOption(n[i])},this._rovingScheduled=!1,this._warnedActionRowInForm=!1,this._popoverWasOpen=!1,this._onKeyDownCapture=e=>{if(e.key!==`Escape`||!this._arrowNavActive)return;let t=this._origin(e);this._popoverWasOpen=!!t?.control&&!!t.row.querySelector(`:popover-open`)},this._onFocusIn=e=>{if(!this._arrowNavActive)return;let t=e.composedPath().find(e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-list-item`);if(t&&!t._rovingActive&&this._getInteractiveItems().includes(t)){this._setRovingActive(t);return}t?._rovingActive&&t._syncRovingTabStops()},this._onFocusOut=()=>{this._arrowNavActive&&queueMicrotask(()=>{this.isConnected&&!this._containsFocus()&&this._getAllRows().forEach(e=>{e._parkControls()})})},this._warnedUnmanaged=new WeakSet,this._unmanagedWarnScheduled=!1,this._onPointerDown=e=>{if(!this.reorderable||this.type!==`list`)return;let t=e.composedPath();if(!t.some(e=>e instanceof Element&&e.hasAttribute(`reorderable-only`)))return;let n=t.find(e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-list-item`);n&&(e.preventDefault(),this._lastPointerY=e.clientY,this._startDrag(n,e.clientY),t.find(e=>e instanceof HTMLButtonElement)?.focus(),this._pointerId=e.pointerId,this.setPointerCapture(e.pointerId),this.addEventListener(`pointermove`,this._onPointerMove),this.addEventListener(`pointerup`,this._onPointerUp),this.addEventListener(`pointercancel`,this._onPointerCancel))},this._lastPointerY=0,this._onPointerMove=e=>{if(!this._draggingEl||!this._placeholder)return;this._clone&&(this._listRect=this.getBoundingClientRect(),this._clone.style.setProperty(`--_drag-clone-top`,`${e.clientY-this._listRect.top-this._cloneOffsetY}px`));let t=e.clientY>=this._lastPointerY;this._lastPointerY=e.clientY;let n=this._getItems().filter(e=>e!==this._draggingEl),r=e.clientY,i=n.length;for(let e=0;e<n.length;e++){let a=(n[e].shadowRoot?.querySelector(`.list-item`)??n[e]).getBoundingClientRect();if(r<(t?a.top:a.bottom)){i=e;break}}this._setDropIndex(i)},this._onPointerUp=e=>{this._endDrag()},this._onPointerCancel=()=>{this._cancelDrag()},this._onKeyDown=e=>{if(this._arrowNavActive){if(e.key===`Escape`){this._onEscape(e);return}this._onArrowNav(e);return}if(!this.reorderable||this.type!==`list`||e.key!==`ArrowUp`&&e.key!==`ArrowDown`)return;let t=e.composedPath(),n=t.find(e=>e instanceof HTMLElement&&e.hasAttribute(`reorderable-only`));if(!n)return;let r=t.find(e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-list-item`);if(!r)return;let i=this._getItems(),a=i.indexOf(r);if(a===-1)return;let o=e.key===`ArrowUp`?a-1:a+1;if(o<0||o>=i.length)return;e.preventDefault();let s=this._getDeepActiveElement()??n;this.dispatchEvent(new CustomEvent(`nldd-reorder`,{detail:{fromIndex:a,toIndex:o},bubbles:!0,composed:!0})),this._announce(this._t(`components.list.reorder-moved-text`,{position:o+1})),requestAnimationFrame(()=>s.focus())}}willUpdate(e){this.hasUpdated||(this._updateEmpty(),this._hasToolbar=this.querySelector(`:scope > [slot="toolbar"]`)!==null,this._hasSearchBarEnd=this.querySelector(`:scope > [slot="search-bar-end"]`)!==null)}firstUpdated(){(this.shadowRoot?.querySelector(`slot:not([name])`))?.addEventListener(`slotchange`,()=>queueMicrotask(()=>{this._updateItems(),this._updateEmpty()})),this._updateItems(),this._warnArrowNav();let e=this.shadowRoot?.querySelector(`slot[name="toolbar"]`);e?.addEventListener(`slotchange`,()=>queueMicrotask(()=>{this._hasToolbar=e.assignedElements().length>0})),(this.shadowRoot?.querySelector(`slot[name="empty"]`))?.addEventListener(`slotchange`,()=>queueMicrotask(()=>this._updateEmpty())),(this.shadowRoot?.querySelector(`slot[name="no-results"]`))?.addEventListener(`slotchange`,()=>queueMicrotask(()=>this._updateEmpty())),this._itemsObserver=new MutationObserver(e=>{let t=e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-list-item`;e.some(e=>e.type===`childList`?e.target===this||t(e.target):e.type!==`attributes`||!t(e.target)?!1:e.attributeName===`expanded`||e.attributeName===`disabled`||e.attributeName===`hidden`&&(e.target.parentElement===this||t(e.target.parentElement)))&&(this._updateItems(),this._updateEmpty(),this._warnUnmanagedControls())}),this._itemsObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`hidden`,`expanded`,`disabled`]}),this._applyHostType()}connectedCallback(){super.connectedCallback(),this.style.containerType=`inline-size`,this.style.containerName=`cells-container`,this.addEventListener(`pointerdown`,this._onPointerDown),this.addEventListener(`keydown`,this._onKeyDownCapture,!0),this.addEventListener(`keydown`,this._onKeyDown),this.addEventListener(`focusin`,this._onFocusIn),this.addEventListener(`focusout`,this._onFocusOut),this.addEventListener(`click`,this._onListClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerdown`,this._onPointerDown),this.removeEventListener(`keydown`,this._onKeyDownCapture,!0),this.removeEventListener(`keydown`,this._onKeyDown),this.removeEventListener(`focusin`,this._onFocusIn),this.removeEventListener(`focusout`,this._onFocusOut),this.removeEventListener(`click`,this._onListClick),this._itemsObserver?.disconnect(),this._itemsObserver=null,this._cancelDrag()}updated(e){if(this._syncTranslatedTexts(),(e.has(`reorderable`)||e.has(`type`))&&(this.reorderable&&this.type,this._updateItems(),this._warnArrowNav()),e.has(`appearance`)&&this._updateItemContext(),e.has(`type`)&&(this._applyHostType(),e.get(`type`)===`listbox`&&this.type!==`listbox`&&(this._activeId=``,this._getItems().forEach(e=>{e._highlighted=!1}))),e.has(`height`)){let e=this.height;e&&CSS.supports(`max-height`,e)?this.style.setProperty(`--_max-height`,e):this.style.removeProperty(`--_max-height`)}}_syncTranslatedTexts(){this.hasAttribute(`data-nldd-auto-label`)&&this.getAttribute(`aria-label`)===this._autoLabel&&(this._autoLabel=this._t(`components.list.navigation-accessible-label`),this.setAttribute(`aria-label`,this._autoLabel)),this.hasAttribute(`aria-keyshortcuts`)&&this.setAttribute(`aria-description`,this._t(`components.list.arrow-navigation-description-text`))}_applyHostType(){this.type===`navigation`?(this.setAttribute(`role`,`navigation`),!this.hasAttribute(`aria-label`)&&!this.hasAttribute(`aria-labelledby`)&&(this._autoLabel=this._t(`components.list.navigation-accessible-label`),this.setAttribute(`aria-label`,this._autoLabel),this.setAttribute(`data-nldd-auto-label`,``))):(this.getAttribute(`role`)===`navigation`&&this.removeAttribute(`role`),this.hasAttribute(`data-nldd-auto-label`)&&(this.getAttribute(`aria-label`)===this._autoLabel&&this.removeAttribute(`aria-label`),this.removeAttribute(`data-nldd-auto-label`),this._autoLabel=null))}_getItems(){return((this.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements()??[]).filter(e=>e.tagName.toLowerCase()===`nldd-list-item`&&!e.hasAttribute(`data-nldd-placeholder`))}_getVisibleItems(){return this._getItems().filter(e=>!e.hasAttribute(`hidden`))}_getAllRows(e=this._getItems()){return e.flatMap(e=>[e,...this._getAllRows(e.childRows)])}_getPaintedRows(e=this._getItems()){return e.filter(e=>!e.hasAttribute(`hidden`)).flatMap(e=>e.expanded?[e,...this._getPaintedRows(e.childRows)]:[e])}_updateItems(){let e=this._getItems(),t=this._getPaintedRows(e),n=t[0],r=t[t.length-1],i=this.reorderable&&this.type===`list`;this._getAllRows(e).forEach(e=>{e.classList.toggle(`is-first`,e===n),e.classList.toggle(`is-last`,e===r)}),e.forEach(e=>{i?e.setAttribute(`reorderable`,``):e.removeAttribute(`reorderable`)}),this._updateItemContext(),this._updateRoving(),this.type===`listbox`&&this._updateListboxOptions()}_updateItemContext(){this._contextScheduled||(this._contextScheduled=!0,queueMicrotask(()=>{this._contextScheduled=!1,this._applyItemContext()}))}_applyItemContext(){this._getItems().forEach(e=>{e._applyAppearance(this.appearance),e._applyParentType(this.type)})}_updateEmpty(){let e=this.hasUpdated?this._getItems():Array.from(this.querySelectorAll(`:scope > nldd-list-item`));this._isEmpty=e.length===0||e.every(e=>e.hasAttribute(`hidden`)),this._hasItems=e.length>0,this._hasEmptyState=!!this.querySelector(`:scope > [slot="empty"]`),this._hasNoResultsState=!!this.querySelector(`:scope > [slot="no-results"]`),this.classList.toggle(`is-blank`,this._isEmpty&&!this._hasItems&&!this._hasEmptyState&&this.type!==`listbox`),this._warnSilentEmpty()}_warnSilentEmpty(){}_ensureOptionId(e){return e.id||=`nldd-list-option-${Uf._optionIdCounter++}`,e.id}_updateListboxOptions(){this._listboxScheduled||(this._listboxScheduled=!0,queueMicrotask(()=>{this._listboxScheduled=!1,this._applyListboxOptions()}))}_applyListboxOptions(){if(this.type!==`listbox`)return;let e=this._getVisibleItems();e.forEach(e=>this._ensureOptionId(e));let t=e.find(e=>e.id===this._activeId)??e[0];this._activeId=t?.id??``,this._syncHighlight()}_setActiveOption(e){this._activeId=this._ensureOptionId(e),this._syncHighlight(),e.scrollIntoView({block:`nearest`})}_syncHighlight(){let e=this._searchFocused?this._activeItem:null;this._getItems().forEach(t=>{t._highlighted=t===e})}get _activeItem(){return this._activeId?this._getVisibleItems().find(e=>e.id===this._activeId)??null:null}_emitListboxInput(e){this.dispatchEvent(new CustomEvent(`input`,{detail:{value:e},bubbles:!0,composed:!0}))}_clearSearch(){this._searchValue=``,this._searchInput&&(this._searchInput.value=``),this._emitListboxInput(``),this._searchInput?.focus()}get _arrowNavActive(){return this.type===`listbox`||this.type===`form`?!1:!(this.reorderable&&this.type===`list`)}_getInteractiveItems(){let e=this._getPaintedRows();return this.type===`tree`?e:e.filter(e=>e._isRovingStop)}_updateRoving(){this._rovingScheduled||(this._rovingScheduled=!0,queueMicrotask(()=>{this._rovingScheduled=!1,this._applyRoving()}))}_applyRoving(){let e=this._arrowNavActive,t=this._getAllRows();t.forEach(t=>{t._arrowNavigation=e});let n=e?this._getInteractiveItems():[];if(n.length>0?(this.setAttribute(`aria-keyshortcuts`,`ArrowUp ArrowDown Home End`),this.setAttribute(`aria-description`,this._t(`components.list.arrow-navigation-description-text`))):(this.removeAttribute(`aria-keyshortcuts`),this.removeAttribute(`aria-description`)),!e){t.forEach(e=>{e._rovingActive=!1});return}if(n.length===0)return;let r=n.find(e=>e._rovingActive)??n.find(e=>e.selected)??n[0];t.forEach(e=>{e._rovingActive=e===r,e._syncRovingTabStops()})}_setRovingActive(e,t=this._getAllRows()){t.forEach(t=>{t._rovingActive=t===e,t._syncRovingTabStops()})}_containsFocus(){let e=document.activeElement;for(;e;){if(e===this||this.contains(e))return!0;e=e.shadowRoot?.activeElement??null}return!1}_origin(e){let t=e.composedPath(),n=t.find(e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-list-item`);return n?{row:n,control:n._slottedControlFor(t)}:null}_onArrowNav(e){let{key:t}=e;if(this._origin(e)?.control)return;if(this.type===`tree`&&(t===`ArrowRight`||t===`ArrowLeft`)){this._onTreeHorizontal(e,t);return}if(this.type===`tree`&&(t===`Enter`||t===` `)){this._onTreeActivate(e);return}if(t!==`ArrowUp`&&t!==`ArrowDown`&&t!==`Home`&&t!==`End`)return;let n=this._getInteractiveItems();if(n.length===0)return;let r=n.findIndex(e=>e._rovingActive),i;if(t===`Home`)i=0;else if(t===`End`)i=n.length-1;else{let e=t===`ArrowDown`?1:-1;i=((r===-1?e===1?-1:0:r)+e+n.length)%n.length}e.preventDefault();let a=n[i];this._setRovingActive(a),a.focus()}_onEscape(e){let t=this._popoverWasOpen;this._popoverWasOpen=!1;let n=this._origin(e);n?.control&&(t||(e.preventDefault(),e.stopPropagation(),this._setRovingActive(n.row),n.row.focus()))}_onTreeHorizontal(e,t){let n=this._getInteractiveItems().find(e=>e._rovingActive);if(!n)return;let r=n.childRows.filter(e=>!e.hasAttribute(`hidden`)),i=r.length>0&&n.expanded===!0;if(t===`ArrowRight`){if(r.length===0)return;if(e.preventDefault(),!i){n._activateDisclosure();return}this._moveRovingTo(r[0]);return}if(i){e.preventDefault(),n._activateDisclosure();return}let a=n.parentRow;a&&(e.preventDefault(),this._moveRovingTo(a))}_onTreeActivate(e){let t=e.target;if(!(t instanceof Element)||t.tagName.toLowerCase()!==`nldd-list-item`)return;let n=t;if(!n.shadowRoot?.activeElement){if(e.key===`Enter`&&n._activatePrimary()){e.preventDefault();return}n._activateDisclosure()&&e.preventDefault()}}_moveRovingTo(e){this._setRovingActive(e),e.focus()}_warnArrowNav(){}_warnUnmanagedControls(){}_hiddenWithin(e,t){for(let n=t;n&&n!==e;n=n.parentElement)if(getComputedStyle(n).display===`none`)return!0;return!1}_getDeepActiveElement(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e instanceof HTMLElement?e:null}_startDrag(e,t=0){let n=this._getItems().indexOf(e);if(n===-1)return;this._draggingEl=e,this._draggingFromIndex=n,this._currentDropIndex=n;let r=e.shadowRoot?.querySelector(`.list-item`)??e,i=r.getBoundingClientRect(),a=parseFloat(getComputedStyle(r).marginBlockEnd)||0;this._placeholder=document.createElement(`div`),this._placeholder.className=`nldd-list-drag-placeholder`,this._placeholder.setAttribute(`aria-hidden`,`true`),this._placeholder.setAttribute(`data-nldd-placeholder`,``),this._placeholder.style.height=`${i.height+a}px`,e.after(this._placeholder),e.classList.add(`is-dragging`),e.classList.add(`is-dragging-pointer`),this._listRect=this.getBoundingClientRect(),this._cloneOffsetY=t-i.top;let o=e.cloneNode(!0);o.classList.remove(`is-dragging`),o.classList.remove(`is-dragging-pointer`),o.setAttribute(`data-nldd-clone`,``),this._clone=document.createElement(`div`),this._clone.className=`list__drag-clone`,this._clone.style.setProperty(`--_drag-clone-top`,`${t-this._listRect.top-this._cloneOffsetY}px`),this._clone.style.setProperty(`--_drag-clone-left`,`${i.left-this._listRect.left}px`),this._clone.style.setProperty(`--_drag-clone-width`,`${i.width}px`),this._clone.style.setProperty(`--_drag-clone-height`,`${i.height}px`),this._clone.appendChild(o),this.renderRoot.appendChild(this._clone)}_setDropIndex(e){if(!this._placeholder||!this._draggingEl)return;let t=this._getItems().filter(e=>e!==this._draggingEl),n=Math.max(0,Math.min(t.length,e));if(this._currentDropIndex=n,this._placeholder.remove(),t.length===0){this._draggingEl.after(this._placeholder);return}n===0?t[0].before(this._placeholder):t[n-1].after(this._placeholder)}_getDropIndex(){return this._currentDropIndex}_endDrag(){if(!this._draggingEl)return;let e=this._draggingFromIndex,t=this._getDropIndex(),n=this._draggingEl;this._cleanupDrag(),e===t?this._announce(this._t(`components.list.reorder-no-change-text`)):(this.dispatchEvent(new CustomEvent(`nldd-reorder`,{detail:{fromIndex:e,toIndex:t},bubbles:!0,composed:!0})),this._announce(this._t(`components.list.reorder-dropped-text`,{position:t+1})),requestAnimationFrame(()=>{(n.querySelector(`[reorderable-only]`)?.shadowRoot?.querySelector(`button`))?.focus()}))}_cancelDrag(){this._draggingEl&&(this._cleanupDrag(),this._announce(this._t(`components.list.reorder-canceled-text`)))}_cleanupDrag(){if(this._draggingEl?.classList.remove(`is-dragging`),this._draggingEl?.classList.remove(`is-dragging-pointer`),this._placeholder?.remove(),this._clone?.remove(),this._pointerId!==null){try{this.releasePointerCapture(this._pointerId)}catch(e){if(!(e instanceof DOMException))throw e}this._pointerId=null}this.removeEventListener(`pointermove`,this._onPointerMove),this.removeEventListener(`pointerup`,this._onPointerUp),this.removeEventListener(`pointercancel`,this._onPointerCancel),this._draggingEl=null,this._draggingFromIndex=-1,this._placeholder=null,this._clone=null,this._cloneOffsetY=0,this._listRect=null,this._currentDropIndex=-1}_t(e,t){return y(this.translations,Vf,e,t)}_announce(e,t=!1){let n=t?`.list__assertive-announcer`:`.list__polite-announcer`,r=this.shadowRoot?.querySelector(n);r&&(r.textContent=``,requestAnimationFrame(()=>requestAnimationFrame(()=>{r.textContent=e})))}render(){return Bf({itemsLabel:this.accessibleLabel||this._t(`components.list.items-accessible-label`),hasToolbar:this._hasToolbar,type:this.type,isEmpty:this._isEmpty,hasItems:this._hasItems,hasEmptyState:this._hasEmptyState,hasNoResultsState:this._hasNoResultsState,listbox:{listboxId:this._listboxId,searchValue:this._searchValue,activeId:this._searchFocused?this._activeId:``,searchPlaceholder:this._t(`components.list.search-placeholder-label`),searchAccessibleLabel:this.accessibleLabel||this._t(`components.list.search-placeholder-label`),searchClearLabel:this._t(`components.list.search-clear-action`),hasSearchBarEnd:this._hasSearchBarEnd,onSearchInput:this._onSearchInput,onSearchKeyDown:this._onSearchKeyDown,onSearchFocus:this._onSearchFocus,onSearchBlur:this._onSearchBlur,onClearClick:this._onClearClick,onSearchBarEndSlotChange:this._onSearchBarEndSlotChange}})}};K.styles=[zf],K._idCounter=0,K._optionIdCounter=0,G([c({reflect:!0,converter:p(`simple`)})],K.prototype,`appearance`,void 0),G([c({reflect:!0,converter:p(`list`)})],K.prototype,`type`,void 0),G([c({reflect:!0,converter:p(`always`)})],K.prototype,`dividers`,void 0),G([c({type:String,reflect:!0})],K.prototype,`height`,void 0),G([c({type:String,attribute:`accessible-label`})],K.prototype,`accessibleLabel`,void 0),G([c({type:Object})],K.prototype,`translations`,void 0),G([c({type:Boolean,reflect:!0})],K.prototype,`reorderable`,void 0),G([d(),d()],K.prototype,`_hasToolbar`,void 0),G([d()],K.prototype,`_hasSearchBarEnd`,void 0),G([d()],K.prototype,`_hasEmptyState`,void 0),G([d()],K.prototype,`_hasNoResultsState`,void 0),G([d()],K.prototype,`_hasItems`,void 0),G([d()],K.prototype,`_isEmpty`,void 0),G([d()],K.prototype,`_searchValue`,void 0),G([d()],K.prototype,`_activeId`,void 0),G([d()],K.prototype,`_searchFocused`,void 0),G([f(`.list__search-field-input`)],K.prototype,`_searchInput`,void 0),K=Uf=G([u(`nldd-list`)],K);var Wf=i`
	:host {
		box-sizing: border-box;
	}



	:host {
		--_background-color: transparent;
		--_content-z-index: 0;
		--_focus-z-index: 1;
		--_indicator-z-index: calc(var(--_content-z-index) - 1);
		/* Set from JS by the divider-start/divider-end markers; initial keeps
		   them guaranteed-invalid so the var() fallbacks below apply. */
		--_divider-inset-start: initial;
		--_divider-inset-end: initial;

		--context-list-item-size: var(--semantics-controls-md-min-size);
		--context-cell-padding-block: var(--components-list-item-md-padding-block);
		container-type: inline-size;
		display: block;
		width: 100%;
		-webkit-tap-highlight-color: transparent;
	}

	:host([size="sm"]) {
		--context-cell-padding-block: var(--components-list-item-sm-padding-block);
		--context-list-item-size: var(--semantics-controls-sm-min-size);
	}

	:host(.is-interactive) {
		/* Not the host's 100%: a width plus negative margins is over-constrained
		   in block layout, so the row would shift instead of widen. */
		width: auto;
		/* !important: shields the widening from consumer universal resets, which
		   beat normal :host declarations per CSS Scoping. A negative margin
		   cannot move inward — an inner element cannot reach outside the host. */
		margin-inline: calc(-1 * var(--components-list-item-indicator-inline-inset)) !important;
	}

	:host(.is-interactive) .list-item {
		padding-inline: var(--components-list-item-indicator-inline-inset);
	}

	:host(.is-interactive) .list-item:has(> .list-item__action) {
		padding-inline: 0;
	}

	/* A segment at a row edge already owns the padding for that side,
	   so the row drops its own there. Mid-row it claims nothing. */
	:host(.is-interactive.has-leading-segment) .list-item {
		padding-inline-start: 0;
	}

	:host(.is-interactive.has-trailing-segment) .list-item {
		padding-inline-end: 0;
	}

	:host([hidden]) {
		display: none;
	}

	:host(:focus-within) {
		position: relative;
		z-index: var(--_focus-z-index);
	}

	/* The focus ring reaches past the row's own box, and a branch paints its
	   children group right after the row, in the same stacking context — so on a
	   branch the ring's bottom edge disappeared under the first child. Raising
	   the row settles it in both directions: with focus in a child, the rule
	   matches this row too, and the group (later in the tree) still wins. */
	:host(:focus-within) .list-item {
		z-index: var(--_focus-z-index);
	}

	:host(.is-dragging) {
		opacity: var(--semantics-controls-is-dragging-opacity);
	}

	:host(.is-dragging-pointer) {
		display: none;
	}

	:host(:not([reorderable])) ::slotted([reorderable-only]) {
		display: none;
	}

	:host([reorderable]) ::slotted([reorderable-only]) {
		cursor: grab;
		touch-action: none;
	}

	:host(.is-dragging) ::slotted([reorderable-only]) {
		cursor: grabbing;
	}



	/* The row reserves the divider's line below itself, rather than the host
	   doing it: on a branch the children group follows the row inside the host,
	   so a margin on the host would land after the whole subtree — leaving the
	   divider to overlap the first child and an extra line's worth of space
	   under the last one. */
	.list-item {
		box-sizing: border-box;
		display: flex;
		position: relative;
		margin-block-end: var(--semantics-dividers-thickness);
		width: 100%;
		min-height: var(--context-list-item-size);
		flex-direction: row;
		align-items: stretch;
		isolation: isolate;
	}



	.list-item__action {
		box-sizing: border-box;
		display: flex;
		margin: 0;
		outline: none;
		border: none;
		background: none;
		width: 100%;
		padding: 0;
		padding-inline: var(--components-list-item-indicator-inline-inset);
		flex-direction: row;
		align-items: stretch;
		text-align: start;
		color: inherit;
		text-decoration: none;
	}

	a.list-item__action {
		cursor: var(--semantics-controls-link-cursor);
	}

	/* There is no disabled attribute for an anchor, so the row blocks the click
	   itself and aria-disabled carries the state. */
	button.list-item__action:disabled,
	:host([disabled]) a.list-item__action {
		cursor: default;
		opacity: var(--primitives-opacity-disabled);
	}

	.list-item__opens-in-new-tab-hint {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}



	/* On the control when the row is one, so hover, focus and press can drive it. */
	.list-item:not(:has(.list-item__action))::before,
	.list-item__action::before {
		content: '';
		display: block;
		position: absolute;
		inset-block: 0;
		inset-inline: calc(-1 * var(--components-list-item-indicator-inline-inset));
		z-index: var(--_indicator-z-index);
		border-radius: var(--components-list-item-indicator-corner-radius);
		background-color: var(--_background-color);
		pointer-events: none;
	}

	:host(.is-interactive) .list-item:not(:has(.list-item__action))::before,
	.list-item__action::before {
		inset-inline: 0;
	}

	/* data-current is set by the row itself when one of its own segments carries
	   current, so a segmented row paints without one on the host. */
	:host(:is([selected], [checkbox][checked])),
	:host(:is([current], [data-current])) {
		--_background-color: var(--components-list-item-is-selected-background-color);
		--context-content-color: var(--components-list-item-is-selected-content-color);
		--context-content-secondary-color: var(--components-list-item-is-selected-content-color);
	}


	/* A checked checkbox action selects the whole row, so the fill runs across
	   the disclosure action too instead of stopping at its boundary. */
	.list-item.is-action-checked {
		--_background-color: var(--components-list-item-is-selected-background-color);
		--context-content-color: var(--components-list-item-is-selected-content-color);
		--context-content-secondary-color: var(--components-list-item-is-selected-content-color);
	}

	/* Hover only on hover-capable devices, so a touch that turns into a scroll
	   does not flash the row under the finger.

	   The row hands its rung down to its segments through the two context
	   variables at the end of each block: a segmented row has no control of its
	   own, so the segment paints, and it must paint on the same scale as the
	   row it sits in. */
	@media (hover: hover) {
		:host(:not([disabled])) .list-item__action:hover {
			--_background-color: var(--components-list-item-is-hovered-background-color);
			--context-content-color: var(--components-list-item-is-hovered-content-color);
			--context-content-secondary-color: var(--components-list-item-is-hovered-content-color);
		}

		:host(:is([selected], [checkbox][checked]):not([disabled])) .list-item__action:hover,
		:host(:is([current], [data-current]):not([disabled])) .list-item__action:hover {
			--_background-color: var(--components-list-item-is-selected-is-hovered-background-color);
			--context-content-color: var(--components-list-item-is-selected-content-color);
			--context-content-secondary-color: var(--components-list-item-is-selected-content-color);
		}
	}

	:host(:is([selected], [checkbox][checked])) {
		--context-list-item-hovered-background-color: var(--components-list-item-is-selected-is-hovered-background-color);
		--context-list-item-hovered-content-color: var(--components-list-item-is-selected-content-color);
		--context-list-item-active-background-color: var(--components-list-item-is-selected-is-active-background-color);
	}

	/* Pressing the row you are on lands on the accent whether or not focus got
	   there first. Safari does not focus a button on click, and a press that
	   waits for focus would go grey there while the other browsers go accent.
	   Hover still follows the focus: that is the state, not the gesture. */
	:host(:is([current], [data-current])) {
		--context-list-item-hovered-background-color: var(--components-list-item-is-selected-is-hovered-background-color);
		--context-list-item-hovered-content-color: var(--components-list-item-is-selected-content-color);
		--context-list-item-active-background-color: var(--components-list-item-is-highlighted-is-active-background-color);
		--context-list-item-active-content-color: var(--components-list-item-is-highlighted-content-color);
	}

	/* focus-within on the host, not on the row-wide control: focus inside a
	   nested nldd-list-item-segment has to match, and a segmented row has no
	   control of its own to key off.

	   After the hover rules on purpose: a pointer that lands on the row is
	   hovering it as well, and the state it just gave focus to has to win. */
	:host(:is([current], [data-current]):focus-within) .list-item,
	:host(:is([current], [data-current]):focus-within) .list-item__action {
		--context-content-color: var(--components-list-item-is-highlighted-content-color);
		--context-content-secondary-color: var(--components-list-item-is-highlighted-content-color);
	}

	:host(:is([current], [data-current]):focus-within) {
		--context-list-item-hovered-background-color: var(--components-list-item-is-highlighted-is-hovered-background-color);
		--context-list-item-hovered-content-color: var(--components-list-item-is-highlighted-content-color);
		--context-list-item-active-background-color: var(--components-list-item-is-highlighted-is-active-background-color);
	}

	:host(:is([current], [data-current]):focus-within) .list-item::before,
	:host(:is([current], [data-current]):focus-within) .list-item__action::before {
		background-color: var(--components-list-item-is-highlighted-background-color);
	}

	/* Only the row-wide control, never the row itself: on a segmented row the
	   hovered segment deepens on its own, and a row that darkened as a whole
	   would hide which segment you are on. */
	@media (hover: hover) {
		:host(:is([current], [data-current]):focus-within:not([disabled])) .list-item__action:hover::before {
			background-color: var(--components-list-item-is-highlighted-is-hovered-background-color);
		}
	}

	/* Two selectors, because pressing means hovering too and the hover rule
	   above carries a pseudo-class more: the focused one has to match its
	   weight to win, and the plain one catches Safari, where the mouse being
	   down means the row is not focused at all. */
	:host(:is([current], [data-current]):not([disabled])) .list-item__action.is-pressed::before,
	:host(:is([current], [data-current]):focus-within:not([disabled])) .list-item__action.is-pressed::before {
		background-color: var(--components-list-item-is-highlighted-is-active-background-color);
	}

	/* The content color has to travel with the fill: the neutral press rule
	   above sets it too, and black on a deep accent is unreadable. */
	:host(:is([current], [data-current]):focus-within:not([disabled])) .list-item__action:hover {
		--context-content-color: var(--components-list-item-is-highlighted-content-color);
		--context-content-secondary-color: var(--components-list-item-is-highlighted-content-color);
	}

	/* JS-driven rather than :active, so a touch that turns into a scroll clears
	   the press (pointercancel) instead of flashing it. */
	:host(:not([disabled])) .list-item__action.is-pressed {
		--_background-color: var(--components-list-item-is-active-background-color);
		--context-content-color: var(--components-list-item-is-active-content-color);
		--context-content-secondary-color: var(--components-list-item-is-active-content-color);
	}

	:host(:is([selected], [checkbox][checked]):not([disabled])) .list-item__action.is-pressed,
	:host(:is([current], [data-current]):not([disabled])) .list-item__action.is-pressed {
		--_background-color: var(--components-list-item-is-selected-is-active-background-color);
		--context-content-color: var(--components-list-item-is-selected-content-color);
		--context-content-secondary-color: var(--components-list-item-is-selected-content-color);
	}

	:host(:is([selected], [checkbox][checked])) .list-item__action {
		--_background-color: var(--components-list-item-is-selected-background-color);
		--context-content-color: var(--components-list-item-is-selected-content-color);
		--context-content-secondary-color: var(--components-list-item-is-selected-content-color);
	}

	/* .is-highlighted is set by the list: in a listbox the focus stays in the
	   search input, so the option cannot carry the state itself. */
	/* After the neutral press rules above, or black lands on a deep accent. */
	:host(:is([current], [data-current]):not([disabled])) .list-item__action.is-pressed {
		--context-content-color: var(--components-list-item-is-highlighted-content-color);
		--context-content-secondary-color: var(--components-list-item-is-highlighted-content-color);
	}

	.list-item.is-highlighted,
	:host(:is([selected], [checkbox][checked])) .list-item.is-highlighted .list-item__action {
		--_background-color: var(--components-list-item-is-highlighted-background-color);
		--context-content-color: var(--components-list-item-is-highlighted-content-color);
		--context-content-secondary-color: var(--components-list-item-is-highlighted-content-color);
	}



	/* The ring follows the real (widened) box: inset 0 against the row block,
	   painting outward like every other control. */
	.list-item__action:focus-visible:not(.is-pointer-focus)::after,
	:host(:focus-visible) .list-item::after {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		border-radius: var(--components-list-item-indicator-corner-radius);
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
		pointer-events: none;
	}

	/* A tree row without a control of its own takes focus on the host, and the
	   host wraps the children group as well — so the browser's own ring would be
	   drawn around the whole open branch. Ours goes on the row. */
	:host(:focus-visible) {
		outline: none;
	}

	/* The cell turns its own glyph from this, so the cell's box stays put: a
	   rotated cell reports a turned box, and that box is what the divider
	   measurement below reads. */
	:host([expanded]) ::slotted(nldd-icon-cell[disclosure]) {
		--context-cell-glyph-rotation: 90deg;
	}


	/* Indentation is the consumer's. Re-inset a widened parent's strip, or each
	   nested level would bleed a further inset outward. */

	.list-item__children {
		display: block;
	}

	:host(.is-interactive) .list-item__children {
		padding-inline: var(--components-list-item-indicator-inline-inset);
	}

	.list-item__children[hidden] {
		display: none;
	}


	/* Content-wide by default; the divider-start/divider-end cell markers
	   override it through the measured --_divider-inset-* vars. */

	/* A segment with focus paints its ring past its own box, and the
	   divider is rendered after the slot — so without this the line ran straight
	   through the ring. Lifting the focused action puts the ring on top. */
	::slotted(nldd-list-item-segment:focus-within) {
		z-index: var(--_focus-z-index);
	}

	.list-item__divider {
		display: var(--context-list-divider-display, block);
		position: absolute;
		/* Hangs in the row's bottom margin: the boundary band belongs to the pair
		   of rows, not to either one. */
		inset-block-end: calc(-1 * var(--semantics-dividers-thickness));
		inset-inline: var(--_divider-inset-start, 0px) var(--_divider-inset-end, 0px);
		background-color: var(--semantics-dividers-color);
		height: var(--semantics-dividers-thickness);
	}

	:host(.is-interactive) .list-item__divider {
		inset-inline:
			var(--_divider-inset-start, var(--components-list-item-indicator-inline-inset))
			var(--_divider-inset-end, var(--components-list-item-indicator-inline-inset));
	}

	:host(.is-boxed.is-last) .list-item {
		margin-block-end: 0;
	}

	:host(.is-boxed.is-last) .list-item__divider,
	:host(.is-dragging) .list-item__divider,
	:host([data-nldd-clone]) .list-item__divider {
		display: none;
	}
`,Gf=r`<slot></slot>`,Kf=r`<div class="list-item__divider"></div>`,qf=(e,t,i,a,o,s,c=!1,l=!1,u=!1,d=!1,f,p=!1,m=!1,h=!1)=>{let g=f===void 0?n:String(f),_=p?r`<div class="list-item__children"
			role="group"
			?hidden=${f!==!0}
		><slot name="children"></slot></div>`:r`<slot name="children" hidden></slot>`,v=ae({"list-item":!0,"is-highlighted":c,"is-action-checked":m});return t?r`<div class=${v}>
			<a class="list-item__action"
				href=${t}
				target=${i??n}
				rel=${ie(a,i)||n}
				aria-disabled=${h?`true`:n}
				aria-expanded=${g}
				tabindex=${s??n}
			>${Gf}${o?r`<span class="list-item__opens-in-new-tab-hint">${o}</span>`:n}</a>
			${Kf}
		</div>${_}`:l?r`<div class=${v}>
			<button class="list-item__action"
				type="button"
				role="checkbox"
				?disabled=${h}
				aria-checked=${String(d)}
				aria-expanded=${g}
				tabindex=${s??n}
			>${Gf}</button>
			${Kf}
		</div>${_}`:u?r`<div class=${v}>
			<button class="list-item__action"
				type="button"
				role="radio"
				?disabled=${h}
				aria-checked=${String(d)}
				tabindex=${s??n}
			>${Gf}</button>
			${Kf}
		</div>${_}`:e?r`<div class=${v}>
			<button class="list-item__action"
				type="button"
				?disabled=${h}
				aria-expanded=${g}
				tabindex=${s??n}
			>${Gf}</button>
			${Kf}
		</div>${_}`:r`<div class=${v}>
		${Gf}
		${Kf}
	</div>${_}`},Jf={"components.list-item.opens-in-new-tab-label":`Opent in nieuw tabblad`},Yf=t({NLDDListItem:()=>J}),q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xf,Zf=`a[href], button, input, select, textarea, [contenteditable]:not([contenteditable="false"]), [tabindex]`,Qf=new WeakMap;function $f(e){let t=Qf.get(e);return t||(t={noTab:`noTab`in e?e.noTab:void 0,tabindex:e.getAttribute(`tabindex`)},Qf.set(e,t)),t}function ep(e,t){if(t.noTab!==void 0){e.noTab=t.noTab;return}t.tabindex===null?e.removeAttribute(`tabindex`):e.setAttribute(`tabindex`,t.tabindex)}function tp(e,t){let n=$f(e);if(n.noTab!==void 0){e.noTab=n.noTab||!t;return}t?ep(e,n):e.setAttribute(`tabindex`,`-1`)}function np(e){let t=Qf.get(e);t&&(ep(e,t),Qf.delete(e))}[`nldd-list-item-segment`,`nldd-button`,`nldd-icon-button`,`nldd-link`,`nldd-checkbox`,`nldd-radio-button`,`nldd-switch`,`a[href]`,`button`,`input`,`select`,`textarea`].join(`, `);var J=Xf=class extends re(o,Jf){constructor(){super(...arguments),this.size=`md`,this.button=!1,this.checkbox=!1,this.radio=!1,this.reorderable=!1,this.selected=!1,this.checked=!1,this.current=!1,this.disabled=!1,this._showChildren=!1,this._parentType=`list`,this._arrowNavigation=!1,this._rovingActive=!1,this._highlighted=!1,this._isBoxed=!1,this._hasCheckedSegment=!1,this._lightDomObserver=null,this._rovingControlsCache=null,this._dividerMarkerObserver=null,this._observedMarkerTargets=[],this._warnedDegenerateDivider=!1,this._warnedChildrenOutsideTree=!1,this._warnedStrayContent=!1,this._warnedNestedControl=!1,this._ownCellSize=new WeakMap,this._warnOnStrayContent=e=>{},this._handleClick=e=>{if(this.disabled){e.preventDefault(),e.stopPropagation();return}this._action?.focus(),this.checkbox&&!this.href&&e.composedPath().includes(this._action)&&(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked},bubbles:!0,composed:!0}))),this.radio&&!this.checkbox&&!this.href&&!this.checked&&e.composedPath().includes(this._action)&&(this.checked=!0,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:!0},bubbles:!0,composed:!0})))},this._handleFocusIn=()=>{this._action?.classList.toggle(`is-pointer-focus`,pe())},this._handleFocusOut=()=>{this._action?.classList.remove(`is-pointer-focus`)},this._onMouseDown=e=>{e.button>0||this.reorderable||this._isFromNestedRow(e)||this._action&&e.preventDefault()},this._onPointerDown=e=>{this.disabled||e.button>0||this._isFromNestedRow(e)||(this._action?.classList.add(`is-pressed`),window.addEventListener(`pointerup`,this._clearPressed),window.addEventListener(`pointercancel`,this._clearPressed),this._action?.focus({preventScroll:!0}))},this._clearPressed=()=>{window.removeEventListener(`pointerup`,this._clearPressed),window.removeEventListener(`pointercancel`,this._clearPressed),this._action?.classList.remove(`is-pressed`)}}connectedCallback(){super.connectedCallback(),this._captureAuthoredCellSizes(),!this.hasAttribute(`data-nldd-clone`)&&(this.setAttribute(`role`,`listitem`),this.addEventListener(`focusin`,this._handleFocusIn),this.addEventListener(`focusout`,this._handleFocusOut),this.addEventListener(`click`,this._handleClick),this.addEventListener(`pointerdown`,this._onPointerDown),this.addEventListener(`mousedown`,this._onMouseDown),this._lightDomObserver=new MutationObserver(()=>this._onLightDomChange()),this._lightDomObserver.observe(this,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`checked`,`current`,`divider-start`,`divider-end`]}),this._onLightDomChange())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this._handleFocusIn),this.removeEventListener(`focusout`,this._handleFocusOut),this.removeEventListener(`click`,this._handleClick),this.removeEventListener(`pointerdown`,this._onPointerDown),this.removeEventListener(`mousedown`,this._onMouseDown),this._clearPressed(),this._lightDomObserver?.disconnect(),this._lightDomObserver=null,this._dividerMarkerObserver?.disconnect(),this._dividerMarkerObserver=null}_onLightDomChange(){this._updateCheckedSegment(),this._updateCurrentSegment(),this._updateInteractive(),this._measureDividerMarkers(),this._rovingControlsCache=null,this._arrowNavigation&&(this._syncRovingTabStops(),this._parentList?._updateRoving())}get _parentList(){return this.closest(`nldd-list`)}_rovingControls(){if(this._rovingControlsCache)return this._rovingControlsCache;let e=new Set,t=this._ownDescendants(`*`).filter(t=>{let n=t.tagName.toLowerCase();return n===`nldd-list-item-segment`?!1:n.includes(`-`)&&!customElements.get(n)?(e.add(n),!1):`noTab`in t||t.matches(Zf)});return this._rovingControlsCache=t,e.forEach(e=>{customElements.whenDefined(e).then(()=>{this._rovingControlsCache=null,this._arrowNavigation&&this._syncRovingTabStops()})}),t}get _isRovingStop(){return this.disabled?!1:this.href||this.button||this.checkbox||this.radio||this._ownDescendants(`nldd-list-item-segment:not([disabled])`).length>0?!0:this._rovingControls().some(e=>!e.hasAttribute(`disabled`))}_updateCurrentSegment(){this.toggleAttribute(`data-current`,this._ownDescendants(`nldd-list-item-segment[current]`).length>0)}_updateCheckedSegment(){this._hasCheckedSegment=this._ownDescendants(`nldd-list-item-segment[checkbox][checked]`).length>0}_updateInteractive(){let e=!!this.href||this.button||this.checkbox||this.radio||this._ownDescendants(`nldd-list-item-segment`).length>0;this.classList.toggle(`is-interactive`,e);let t=Array.from(this.children).filter(e=>e.getAttribute(`slot`)!==`children`),n=e=>e?.tagName.toLowerCase()===`nldd-list-item-segment`;this.classList.toggle(`has-leading-segment`,n(t[0])),this.classList.toggle(`has-trailing-segment`,n(t[t.length-1]))}willUpdate(e){super.willUpdate(e),!(this.hasUpdated||this.hasAttribute(`data-nldd-clone`))&&this._syncWithList()}firstUpdated(){this.hasAttribute(`data-nldd-clone`)||(this._observeChildrenSlot(),this.renderRoot.addEventListener(`slotchange`,this._warnOnStrayContent),queueMicrotask(()=>this._updateChildren()),this._relayExpanded(),this._measureDividerMarkers())}_ownDescendants(e){return Array.from(this.querySelectorAll(e)).filter(e=>e.closest(`nldd-list-item`)===this)}_captureAuthoredCellSizes(){this._ownDescendants(Xf.SIZED_CELLS).forEach(e=>{this._ownCellSize.has(e)||this._ownCellSize.set(e,e.getAttribute(`size`))})}_propagateSize(){this._captureAuthoredCellSizes(),this._ownDescendants(Xf.SIZED_CELLS).forEach(e=>{this._ownCellSize.get(e)??e.setAttribute(`size`,this.size)})}updated(e){(e.has(`selected`)||e.has(`current`)||e.has(`button`)||e.has(`checkbox`)||e.has(`radio`)||e.has(`href`)||e.has(`_parentType`))&&this._updateAriaState(),(e.has(`button`)||e.has(`checkbox`)||e.has(`radio`)||e.has(`href`))&&(this._updateInteractive(),this._warnOnNestedControl()),e.has(`expanded`)&&(this._relayExpanded(),this._warnOnStrayExpanded()),(e.has(`_arrowNavigation`)||e.has(`_rovingActive`))&&this._syncRovingTabStops(),e.has(`disabled`)&&(this._syncRovingTabStops(),this._parentList?._updateRoving()),this._propagateSize()}get _resolvedExpanded(){return this._showChildren?this.expanded===!0:this.expanded}_relayExpanded(){this._ownDescendants(`nldd-list-item-segment[disclosure]`).forEach(e=>{e._rowExpanded=this._resolvedExpanded})}_warnOnStrayExpanded(){}_warnOnNestedControl(){}get _isListboxOption(){return this._parentType===`listbox`}_syncWithList(){let e=this.closest(`nldd-list`);e&&(this._applyAppearance(e.appearance),this._applyParentType(e.type))}_applyAppearance(e){this._isBoxed=e.startsWith(`box`),this._relayToChildren(t=>t._applyAppearance(e)),this.classList.toggle(`is-boxed`,this._isBoxed)}_applyParentType(e){this._parentType=e,this._relayToChildren(t=>t._applyParentType(e)),this._ownDescendants(`nldd-list-item-segment`).forEach(t=>t._applyParentType?.(e))}get childRows(){return Array.from(this.children).filter(e=>e.getAttribute(`slot`)===`children`&&e.tagName.toLowerCase()===`nldd-list-item`)}_relayToChildren(e){this.childRows.forEach(e)}_updateAriaState(){this._parentType===`radiogroup`?(this.setAttribute(`role`,`none`),this.removeAttribute(`aria-selected`)):this._parentType===`tree`?(this.setAttribute(`role`,`treeitem`),this.removeAttribute(`aria-selected`)):this._isListboxOption?(this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,String(this.selected))):(this.setAttribute(`role`,`listitem`),this.removeAttribute(`aria-selected`));let e=this._action;this._parentType===`navigation`&&(this.current||this.selected)&&e?e.setAttribute(`aria-current`,`page`):e?.removeAttribute(`aria-current`)}_implicitDividerStart(){return this._ownDescendants(`nldd-text-cell, nldd-title-cell`)}_measureDividerMarkers(){if(this.hasAttribute(`data-nldd-clone`))return;let e=this._ownDescendants(`[divider-start]`),t=e.length?e:this._implicitDividerStart(),n=this._ownDescendants(`[divider-end]`),r=t.length||n.length?[this,...t,...n]:[];if(r.length===this._observedMarkerTargets.length&&r.every((e,t)=>e===this._observedMarkerTargets[t])||(this._dividerMarkerObserver?.disconnect(),this._observedMarkerTargets=r,r.length?(this._dividerMarkerObserver??=new ResizeObserver(()=>this._measureDividerMarkers()),r.forEach(e=>this._dividerMarkerObserver.observe(e))):this._dividerMarkerObserver=null),r.length===0){this.style.removeProperty(`--_divider-inset-start`),this.style.removeProperty(`--_divider-inset-end`);return}let i=this.shadowRoot?.querySelector(`.list-item`);if(!i)return;let a=i.getBoundingClientRect();if(a.width===0)return;let o=getComputedStyle(this).direction===`rtl`,s=e=>o?a.right-e.right:e.left-a.left,c=e=>o?e.left-a.left:a.right-e.right,l=e=>e.getClientRects().length>0,u=t.filter(l),d=n.filter(l),f=u.length?Math.min(...u.map(e=>s(e.getBoundingClientRect()))):null,p=d.length?Math.min(...d.map(e=>c(e.getBoundingClientRect()))):null;if(f!==null&&p!==null&&a.width-f-p<=0){this.style.removeProperty(`--_divider-inset-start`),this.style.removeProperty(`--_divider-inset-end`);return}f===null?this.style.removeProperty(`--_divider-inset-start`):this.style.setProperty(`--_divider-inset-start`,`${f}px`),p===null?this.style.removeProperty(`--_divider-inset-end`):this.style.setProperty(`--_divider-inset-end`,`${p}px`)}_observeChildrenSlot(){(this.shadowRoot?.querySelector(`slot[name="children"]`))?.addEventListener(`slotchange`,()=>this._updateChildren())}_updateChildren(){let e=((this.shadowRoot?.querySelector(`slot[name="children"]`))?.assignedElements()??[]).filter(e=>e.tagName.toLowerCase()===`nldd-list-item`),t=this._showChildren;this._showChildren=e.length>0,this._showChildren!==t&&this._relayExpanded(),this._showChildren&&e.forEach(e=>{let t=e;t._applyAppearance?.(this._isBoxed?`box-tinted`:`simple`),t._applyParentType?.(this._parentType)})}_isFromNestedRow(e){let t=e.composedPath(),n=t.indexOf(this);return t.slice(0,n===-1?t.length:n).some(e=>e instanceof Element&&e.localName===`nldd-list-item`)}focus(e){if(this._action){this._action.focus(e);return}super.focus(e)}_syncRovingTabStops(){let e=this._ownSegments();if(!this._arrowNavigation){this.removeAttribute(`tabindex`),e.forEach(e=>{e._tabbable=void 0}),this._rovingControls().forEach(np);return}this._action||!this._rovingActive?this.removeAttribute(`tabindex`):this.setAttribute(`tabindex`,`0`),e.forEach(e=>{e._tabbable=this._rovingActive}),this._rovingControls().forEach(e=>{tp(e,this._rovingActive)})}_slottedControlFor(e){let t=[];for(let n of e){if(n===this)break;n instanceof Element&&this.contains(n)&&t.push(n)}return t.length===0||t.length===1&&t[0].tagName.toLowerCase()===`nldd-list-item-segment`?null:t[0]}_parkControls(){this._arrowNavigation&&this._rovingActive&&(this._ownSegments().forEach(e=>{e._tabbable=!1}),this._rovingControls().forEach(e=>{tp(e,!1)}))}_ownSegments(){return Array.from(this.children).filter(e=>e.getAttribute(`slot`)!==`children`&&e.tagName.toLowerCase()===`nldd-list-item-segment`)}get _disclosureControl(){let e=Array.from(this.children).find(e=>e.getAttribute(`slot`)!==`children`&&e.tagName.toLowerCase()===`nldd-list-item-segment`&&e.hasAttribute(`disclosure`));if(e)return e;if(this.button&&!this.href)return this._action}_activateDisclosure(){let e=this._disclosureControl;if(!e)return!1;let t=this.matches(`:focus-within`);return e.click(),t&&this.focus(),!0}_activatePrimary(){let e=[...this.querySelectorAll(`:scope > nldd-list-item-segment`)].find(e=>!e.hasAttribute(`disclosure`));if(!e)return!1;let t=e.shadowRoot?.querySelector(`a, button`);if(!t)return!1;let n=this.matches(`:focus-within`);return t.click(),n&&this.focus(),!0}get parentRow(){let e=this.parentElement;if(e&&e.tagName.toLowerCase()===`nldd-list-item`)return e}render(){let e=this.href&&this.target===`_blank`?this._t(`components.list-item.opens-in-new-tab-label`):void 0,t=this._isListboxOption?`-1`:this._arrowNavigation?this._rovingActive?`0`:`-1`:void 0;return qf(this.button,this.href,this.target,this.rel,e,t,this._highlighted,this.checkbox,this.radio,this.checked,this._resolvedExpanded,this._showChildren,this._hasCheckedSegment,this.disabled)}};J.styles=[Wf],J.SIZED_CELLS=`nldd-text-cell, nldd-drag-handle-cell`,q([c({reflect:!0,converter:p(`md`)})],J.prototype,`size`,void 0),q([c({reflect:!0})],J.prototype,`href`,void 0),q([c({reflect:!0})],J.prototype,`target`,void 0),q([c({reflect:!0})],J.prototype,`rel`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`button`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`checkbox`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`radio`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`reorderable`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`selected`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`checked`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`expanded`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`current`,void 0),q([c({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),q([d()],J.prototype,`_showChildren`,void 0),q([d()],J.prototype,`_parentType`,void 0),q([d()],J.prototype,`_arrowNavigation`,void 0),q([d()],J.prototype,`_rovingActive`,void 0),q([d()],J.prototype,`_highlighted`,void 0),q([f(`.list-item__action`)],J.prototype,`_action`,void 0),q([d()],J.prototype,`_hasCheckedSegment`,void 0),J=Xf=q([u(`nldd-list-item`)],J);var rp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		${v}
		display: flex;
		min-width: 0;
		flex-grow: 1;
		flex-shrink: 1;
		-webkit-user-select: none;
		user-select: none;
	}

	:host([hidden]),
	:host([empty]) {
		display: none;
	}


	/* # Block */

	.menu-bar {
		display: flex;
		min-width: 0;
		flex-direction: row;
		flex-grow: 1;
		flex-shrink: 1;
		align-items: center;
	}


	/* # Elements */

	.menu-bar__overflow-button {
		display: none;
	}
`;function ip(e){return r`
		<nav class="menu-bar"
			aria-label=${e.accessibleLabel||n}
		>
			<slot></slot>
			<div class="menu-bar__overflow-button">
				<nldd-menu-bar-item
					text="${e._overflowText}"
					icon="ellipsis"
					icon-only
					haspopup="menu"
					?expanded=${e._menuOpen}
					@pointerdown=${e._handleOverflowButtonPointerdown}
					@click=${e._toggleOverflowMenu}
				>
					<!-- The overflow popover is opened/closed explicitly by
						 _toggleOverflowMenu (same mechanism as an expandable
						 nldd-menu-bar-item's own submenu): anchored to this
						 always-visible trigger + a reopen guard. aria-controls
						 omitted: ARIA IDREF attributes cannot cross shadow DOM
						 boundaries and the menu is reparented to document.body;
						 haspopup + expanded forward to the inner button and give
						 sufficient AT context for WCAG 2.1 AA. -->
				</nldd-menu-bar-item>
			</div>
		</nav>
	`}var ap={"components.menu-bar.overflow-action":`Meer opties`},op=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_indicator-z-index: 0;
		--_content-z-index: 1;
		--_focus-z-index: 1;

		${v}
		display: inline-block;
		position: relative;
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
		isolation: isolate;
		-webkit-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.menu-bar-item {
		box-sizing: border-box;
		display: flex;
		position: relative;
		margin: 0;
		border: none;
		background: none;
		min-width: var(--semantics-controls-md-min-size);
		height: var(--semantics-controls-md-min-size);
		padding: 0 var(--components-menu-bar-item-inline-padding);
		gap: var(--primitives-space-4);
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--components-menu-bar-item-content-color);
		font: var(--components-menu-bar-item-font);
		text-decoration: none;
		white-space: nowrap;
		appearance: none;
	}

	a.menu-bar-item {
		cursor: var(--semantics-controls-link-cursor);
	}

	/* ## Hover indicator (::before) */

	.menu-bar-item::before {
		content: '';
		position: absolute;
		top: var(--primitives-space-6);
		right: 0;
		bottom: var(--primitives-space-6);
		left: 0;
		z-index: var(--_indicator-z-index);
		border-radius: var(--semantics-controls-sm-corner-radius);
		pointer-events: none;
	}

	@media (hover: hover) {
		.menu-bar-item:hover::before {
			background-color: var(--components-menu-bar-item-is-hovered-indicator-background-color);
		}
	}

	:host([expanded]) .menu-bar-item::before {
		background-color: var(--components-menu-bar-item-is-expanded-indicator-background-color);
	}

	@media (hover: hover) {
		:host([expanded]) .menu-bar-item:hover::before {
			background-color: var(--components-menu-bar-item-is-hovered-indicator-background-color);
		}
	}

	/* ## Current indicator (::after) */

	:host([current]) .menu-bar-item::after {
		content: '';
		position: absolute;
		right: var(--primitives-space-8);
		bottom: 0;
		left: var(--primitives-space-8);
		z-index: var(--_indicator-z-index);
		background-color: var(--components-menu-bar-item-is-current-indicator-background-color);
		height: var(--components-menu-bar-item-is-current-indicator-height);
		pointer-events: none;
	}

	/* ## Text */

	.menu-bar-item__text {
		position: relative;
		z-index: var(--_content-z-index);
	}

	/* ## Icon */

	.menu-bar-item__icon {
		z-index: var(--_content-z-index);
		width: var(--primitives-space-20);
		height: var(--primitives-space-20);
		flex-shrink: 0;
	}

	/* ## Disclosure icon */

	.menu-bar-item__disclosure-icon {
		z-index: var(--_content-z-index);
		width: var(--primitives-space-16);
		height: var(--primitives-space-16);
	}


	/* # Focus */

	:host(:focus-within) {
		z-index: var(--_focus-z-index);
	}

	.menu-bar-item:focus-visible {
		outline: none;
	}

	.menu-bar-item:focus-visible::before {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}


	/* # Slotted */

	::slotted(nldd-menu-item),
	::slotted(nldd-menu-divider) {
		display: none;
	}


	/* # Disabled */

	:host([disabled]) .menu-bar-item {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}


	/* # Icon-only */

	:host([icon-only]) .menu-bar-item,
	:host([content-priority="icon"][compact][icon]:not([icon=""])) .menu-bar-item {
		padding: var(--primitives-space-8);
	}

	:host([icon-only]) .menu-bar-item__text,
	:host([content-priority="icon"][compact][icon]:not([icon=""])) .menu-bar-item__text {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}

	:host([content-priority="text"][compact]) .menu-bar-item__icon {
		display: none;
	}
`;function sp(e){if(!e)return null;let t=e.replace(/^[\s\u00A0\u200B\u2028\u2029]+|[\s\u00A0\u200B\u2028\u2029]+$/g,``).replace(/[\0\t\n\r]/g,``),n=t.toLowerCase();return n.startsWith(`javascript:`)||n.startsWith(`data:`)||n.startsWith(`vbscript:`)||n.startsWith(`blob:`)?null:t}function cp(e){let t=sp(e.href),i=!!t,a=!!((e.iconOnly||e.contentPriority===`icon`&&e.compact)&&e.text),o=e.accessibleLabel||(a?e.text:n),s=e.current?e.currentType:n,c=e.expandable?`menu`:e.haspopup||n,l=e.expandable||e.haspopup?String(e.expanded):n;return i?r`
			<a class="menu-bar-item"
				href=${t}
				aria-disabled=${e.disabled||n}
				tabindex=${e.disabled?`-1`:n}
				aria-current=${s}
				aria-label=${o}
				aria-haspopup=${c}
				aria-expanded=${l}
			>
				${e.icon?r`
					<span class="menu-bar-item__icon">
						<nldd-icon icon=${e.icon}></nldd-icon>
					</span>
				`:n}
				<span class="menu-bar-item__text">
					${e.text}
				</span>
				${e.expandable?r`
					<span class="menu-bar-item__disclosure-icon">
						<nldd-icon icon="chevron-down-small"></nldd-icon>
					</span>
				`:n}
			</a>
			<slot @slotchange=${e._onSlotChange}></slot>
		`:r`
		<button class="menu-bar-item"
			type="button"
			?disabled=${e.disabled}
			aria-current=${s}
			aria-label=${o}
			aria-haspopup=${c}
			aria-expanded=${l}
			.popoverTargetElement=${e.popoverTargetElement}
			.popoverTargetAction=${e.popoverTargetAction}
		>
			${e.icon?r`
				<span class="menu-bar-item__icon">
					<nldd-icon icon=${e.icon}></nldd-icon>
				</span>
			`:n}
			<span class="menu-bar-item__text">
				${e.text}
			</span>
			${e.expandable?r`
				<span class="menu-bar-item__disclosure-icon">
					<nldd-icon icon="chevron-down-small"></nldd-icon>
				</span>
			`:n}
		</button>
		<slot @slotchange=${e._onSlotChange}></slot>
	`}var lp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_viewport-margin: var(--primitives-space-16);
		--_width: initial;
		--_min-width: var(--primitives-area-280);
		--_max-width: min(100vw - 2 * var(--_viewport-margin), var(--primitives-area-640));
		--_max-height: calc(infinity * 1px);
		--_max-items: 9999;
		--_padding: var(--primitives-space-8);
		--_item-size: var(--semantics-controls-md-min-size);
		--_item-background-color: transparent;
		--_item-is-highlighted-background-color: var(--components-menu-item-is-highlighted-background-color);
		--_item-is-highlighted-content-color: var(--components-menu-item-is-highlighted-content-color);

		@media (pointer: fine) {
			--_padding: var(--primitives-space-6);
			--_item-size: var(--semantics-controls-sm-min-size);
		}

		/* A menu is an overlay: context from where it happens to be ANCHORED must
		   not style its items. Inside an nldd-list-item the row's cell padding
		   would cascade into the text-cells of the items and stretch every row. */
		--context-cell-padding-block: 0px;

		${v}
		display: block;
		position: absolute;
		margin: 0;
		border: none;
		background: transparent;
		overflow: visible;
		padding: 0;
		-webkit-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	:host(:not(:popover-open)) {
		display: none;
	}

	:host([hidden]) {
		display: none;
	}

	/* Hide the menu between opening and being placed by Floating UI, so it never
	   flashes at the popover's default position. visibility (not display) keeps it laid
	   out so its size can be measured for positioning. The positioned attribute is set
	   once reposition() finishes; cleared again on every re-open. */
	:host(:popover-open:not([positioned])) {
		visibility: hidden;
	}

	:host([scroll-active]) {
		--_item-is-highlighted-background-color: transparent;
		--_item-is-highlighted-content-color: initial;
	}


	/* # Block */

	.menu {
		display: flex;
		box-sizing: border-box;
		border-radius: var(--semantics-overlays-corner-radius);
		box-shadow: var(--components-menu-box-shadow);
		background: var(--semantics-surfaces-base-background-color);
		width: var(--_width, max-content);
		min-width: var(--_min-width);
		max-width: var(--_max-width);
		flex-direction: column;
		max-height: min(var(--_max-height), calc(var(--_max-items) * var(--_item-size) + var(--_padding) * 2));
		outline: none;
		overflow-x: hidden;
		overflow-y: auto;
		scroll-padding-block: var(--_padding);
	}

	.menu:focus-visible:not(.is-pointer-focus) {
		box-shadow: var(--semantics-focus-ring-box-shadow), var(--components-menu-box-shadow);
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
	}


	/* # Elements */

	.menu__main {
		display: flex;
		flex-direction: column;
		padding: var(--_padding);
	}

	.menu__list {
		display: flex;
		flex-direction: column;
	}

	.menu__header {
		box-sizing: border-box;
		border-bottom: var(--semantics-dividers-thickness) solid var(--semantics-dividers-color);
		flex-shrink: 0;
	}

	.menu__header[hidden] {
		display: none;
	}

	.menu__footer {
		box-sizing: border-box;
		border-top: var(--semantics-dividers-thickness) solid var(--semantics-dividers-color);
		flex-shrink: 0;
	}

	.menu__footer[hidden] {
		display: none;
	}

	.menu__empty {
		padding: var(--primitives-space-8);
	}

	.menu__back-button {
		display: flex;
		box-sizing: border-box;
		border: none;
		border-radius: var(--semantics-controls-md-corner-radius);
		background: transparent;
		width: 100%;
		min-height: var(--_item-size);
		padding: var(--primitives-space-8);
		flex-direction: row;
		align-items: center;
		text-align: start;
		appearance: none;
		--context-content-color: var(--semantics-content-secondary-color);

		@media (pointer: fine) {
			border-radius: var(--semantics-controls-sm-corner-radius);
			padding: var(--primitives-space-4) var(--primitives-space-8);
		}
	}

	/* Hover gated to hover-capable pointers: touch's sticky :hover would
	 * otherwise leave the back button highlighted after opening a submenu. */

	@media (hover: hover) {
		.menu__back-button:hover {
			background-color: var(--_item-is-highlighted-background-color);
			--context-content-color: var(--_item-is-highlighted-content-color);
		}
	}

	.menu__back-button:active:hover {
		background-color: var(--_item-is-highlighted-background-color);
		--context-content-color: var(--_item-is-highlighted-content-color);
	}

	.menu__back-button:focus-visible {
		position: relative;
		z-index: 1;
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	.menu__back-button-divider {
		margin: var(--primitives-space-4) 0;
		background-color: var(--semantics-dividers-color);
		height: var(--semantics-dividers-thickness);
	}


	/* Sibling of .menu so role="status" stays outside menu's required-owned
	   children (WCAG 4.1.3); visually hidden, kept in the a11y tree. */
	.menu__live-region {
		position: absolute;
		margin: -1px;
		border: 0;
		width: 1px;
		height: 1px;
		overflow: hidden;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(50%);
	}
`,up=i`


	/* # Host */

	:host {
		${v}
		display: block;
		-webkit-tap-highlight-color: transparent;
	}

	:host([hidden]) {
		display: none;
	}

	/* ## Open submenu opener
	 *
	 * Lighter neutral bg while the cursor is in the submenu — the active
	 * item is in the submenu, the opener just marks the branch. The
	 * highlighted/hover rule below upgrades back to the bold accent when
	 * the cursor returns to the opener. */

	.menu__item[aria-expanded="true"] {
		--_item-background-color: var(--components-menu-item-is-expanded-background-color);
		--context-content-color: var(--components-menu-item-is-expanded-content-color);
		--context-content-secondary-color: var(--components-menu-item-is-expanded-content-color);
	}

	/* ## Highlighted or pressed
	 *
	 * :hover on [aria-expanded="true"] covers the cursor-on-open-opener
	 * case where [highlighted] has been cleared by submenu-open.
	 * :active:hover is the press flash on touch (neutralised during
	 * scroll via --_item-is-highlighted-* on :host([scroll-active])). */

	:host([highlighted]) .menu__item,
	.menu__item[aria-expanded="true"]:hover,
	.menu__item:active:hover {
		--_item-background-color: var(--_item-is-highlighted-background-color);
		--context-content-color: var(--_item-is-highlighted-content-color);
		--context-content-secondary-color: var(--_item-is-highlighted-content-color);
	}

	/* ## Destructive */

	:host([destructive]) {
		--_item-is-highlighted-background-color: var(--components-menu-item-is-destructive-is-highlighted-background-color);
		--_item-is-highlighted-content-color: var(--components-menu-item-is-destructive-is-highlighted-content-color);
		--context-content-color: var(--components-menu-item-is-destructive-content-color);
		--context-content-secondary-color: var(--components-menu-item-is-destructive-content-color);
	}


	/* # Elements */

	.menu__item {
		display: flex;
		box-sizing: border-box;
		border: none;
		border-radius: var(--semantics-controls-md-corner-radius);
		background: var(--_item-background-color);
		width: 100%;
		min-height: var(--_item-size);
		padding: var(--primitives-space-8);
		flex-direction: row;
		align-items: center;
		text-align: start;
		appearance: none;
		@media (pointer: fine) {
			border-radius: var(--semantics-controls-sm-corner-radius);
			padding: var(--primitives-space-4) var(--primitives-space-8);
		}
	}

	/* A link item (href) renders as <a>; strip the UA link color/underline so
	   it is visually identical to the button variant. The text color is owned
	   by the inner nldd-text-cell. The control cursor token (default, like the
	   other controls) replaces the UA link pointer and stays overridable. */
	a.menu__item {
		color: inherit;
		text-decoration: none;
		cursor: var(--semantics-controls-link-cursor);
	}

	.menu__item:focus-visible {
		position: relative;
		z-index: 1;
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	:host([disabled]) .menu__item {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}


	@media (prefers-reduced-motion: reduce) {
		.menu__item {
			transition: none;
		}
	}


	@media (forced-colors: active) {
		:host([highlighted]) .menu__item,
		.menu__item:hover,
		.menu__item:focus-visible {
			background-color: Highlight;
			color: HighlightText;
		}
	}
`,dp=i`


	/* # Host */

	:host {
		display: flow-root;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Divider */

	.menu__divider {
		margin: var(--primitives-space-4) 0;
		background-color: var(--semantics-dividers-color);
		height: var(--semantics-dividers-thickness);
	}
`,fp=i`


	/* # Host
	 *
	 * Auto top/bottom dividers via border-top/-bottom; suppressed for the
	 * first item (top) and when followed by another group or last item
	 * (bottom). Both flags are set by the parent menu (data-no-top-divider /
	 * data-no-bottom-divider): CSS :first-child / :last-child can't see hidden
	 * siblings, nor the header slot's div that becomes the first light-DOM
	 * child (which would leave a first group no longer :first-child). */

	:host {
		${v}
		display: flow-root;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.menu__group {
		margin-top: var(--primitives-space-4);
		margin-bottom: var(--primitives-space-4);
		border-top: var(--semantics-dividers-thickness) solid var(--semantics-dividers-color);
		border-bottom: var(--semantics-dividers-thickness) solid var(--semantics-dividers-color);
		padding-top: var(--primitives-space-6);
		padding-bottom: var(--primitives-space-4);
	}

	:host(:first-child) .menu__group,
	:host([data-no-top-divider]) .menu__group {
		border-top: none;
		padding-top: var(--primitives-space-2);
	}

	:host([data-no-bottom-divider]) .menu__group {
		margin-bottom: 0;
		border-bottom: none;
		padding-bottom: var(--primitives-space-2);
	}


	/* # Title */

	.menu__group-title {
		margin: 0;
		padding-top: 0;
		padding-right: var(--primitives-space-8);
		padding-bottom: var(--primitives-space-1);
		padding-left: var(--primitives-space-4);
		font: var(--primitives-font-body-sm-regular-tight);
		color: var(--semantics-content-secondary-color);
	}


	/* # Items wrapper
	 *
	 * display: block keeps the role="group" wrapper as a real box so the
	 * a11y tree exposes role + aria-labelledby reliably (display: contents
	 * has historical a11y-tree bugs in older WebKit/Chromium). */

	.menu__group-items {
		display: block;
	}
`,pp={menu:`menu`,listbox:`listbox`},mp={button:{menu:`menuitem`,listbox:`option`},checkbox:{menu:`menuitemcheckbox`,listbox:`option`},radio:{menu:`menuitemradio`,listbox:`option`}};function hp(e,t){let i=pp[t],a=this._isSubmenu&&this._drillInMode&&this._parentItem!==null,o=!this._isSubmenu;return r`
		<div class="menu"
			tabindex="-1"
			@touchstart=${this._handleMenuTouchStart}
			@touchmove=${this._handleMenuTouchMove}
			@touchend=${this._handleMenuTouchEnd}
			@touchcancel=${this._handleMenuTouchEnd}
		>
			${o?r`
				<div class="menu__header"
					?hidden=${!this._hasHeader}
				>
					<slot
						name="header"
						@slotchange=${this._onHeaderSlotChange}
					></slot>
				</div>
			`:n}
			<div class="menu__main">
				${a?r`
					<button class="menu__back-button"
						type="button"
						aria-label=${this._resolvedBackLabel}
						@click=${this._handleBack}
						@mouseenter=${this._handleBackMouseenter}
					>
						<nldd-icon-cell
							size="20"
							icon="chevron-left"
						></nldd-icon-cell>
						<nldd-spacer-cell size="6"></nldd-spacer-cell>
						<nldd-text-cell text=${this._parentItem.text}></nldd-text-cell>
					</button>
					<!-- Pure visual divider; role="none" keeps strict ARIA validators
					     quiet (a focusable role="separator" inside a menu would need
					     aria-valuenow et al.; this one is decorative). -->
					<div class="menu__back-button-divider"
						role="none"
					></div>
				`:n}
				<div class="menu__list"
					role=${i}
				>
					<slot @slotchange=${this._claimItems}></slot>
				</div>
				${e?r`
					<div class="menu__empty">
						<slot name="empty">
							<nldd-inline-dialog
								text=${this._resolvedEmptyText}
								supporting-text=${this.emptySupportingText||n}
							></nldd-inline-dialog>
						</slot>
					</div>
				`:n}
			</div>
			${o?r`
				<div class="menu__footer"
					?hidden=${!this._hasFooter}
				>
					<slot
						name="footer"
						@slotchange=${this._onFooterSlotChange}
					></slot>
				</div>
			`:n}
		</div>
		<!-- Drill-in view-change announcer (WCAG 4.1.3). Sibling of .menu so
		     it sits outside role="menu"'s required-children set. Updated via
		     _announce(); empty and inert until a drill-in transition. -->
		<div class="menu__live-region"
			role="status"
			aria-live="polite"
			aria-atomic="true"
		></div>
	`}function gp(e=null){let t=this.type!==`button`&&e===`menu`,i=t||this.checkColumn&&e===`menu`,a=e?mp[this.type][e]:n,o=this._hasSubmenu,s=sp(this.href)??``,c=!!s&&this.type===`button`&&!o&&!this.disabled,l=r`
		${i?r`
			<nldd-icon-cell
				size="24"
				horizontal-alignment="center"
				icon=${t&&this.selected?`check-mark`:n}
			></nldd-icon-cell>
			<nldd-spacer-cell size="4"></nldd-spacer-cell>
		`:n}
		${this.icon?r`
			<nldd-icon-cell
				size="20"
				icon=${this.icon}
			></nldd-icon-cell>
			<nldd-spacer-cell size="8"></nldd-spacer-cell>
		`:n}
		<nldd-text-cell
			text=${this.text}
			query=${this.query}
			query-mark-mode=${this.queryMarkMode}
		></nldd-text-cell>
		${this.details?r`
			<nldd-spacer-cell size="8"></nldd-spacer-cell>
			<nldd-text-cell
				width="fit-content"
				horizontal-alignment="right"
				color="secondary"
				text=${this.details}
			></nldd-text-cell>
		`:n}
		<!--
			Accessibility (intentional decision): the shortcut is deliberately NOT
			aria-hidden. It is announced as part of the item's accessible name —
			e.g. "Ongedaan maken Ctrl Z" — so screen-reader users learn the
			accelerator, the way native OS menus surface it. aria-keyshortcuts was
			considered and rejected: the menu item itself does not handle the key
			(the application's global shortcut does), so the plain announcement is
			the deliberate choice rather than a missing aria-hidden.
		-->
		${this.shortcut||this.shortcutMac||this.shortcutWindows||this.shortcutLinux?r`
			<nldd-spacer-cell size="8"></nldd-spacer-cell>
			<nldd-text-cell
				width="fit-content"
				size="md"
				color="secondary"
				horizontal-alignment="right"
			>
				<nldd-keyboard-shortcut
					size="inherit"
					appearance="simple"
					color="inherit"
					keys=${this.shortcut||n}
					mac-keys=${this.shortcutMac||n}
					windows-keys=${this.shortcutWindows||n}
					linux-keys=${this.shortcutLinux||n}
				></nldd-keyboard-shortcut>
			</nldd-text-cell>
		`:n}
		${o?r`
			<nldd-spacer-cell size="6"></nldd-spacer-cell>
			<nldd-icon-cell
				size="20"
				icon="chevron-right"
			></nldd-icon-cell>
		`:n}
	`;return r`
		${c?r`
			<a class="menu__item"
				href=${s}
				role=${a}
				aria-current=${this.selected?`page`:n}
				@click=${this._handleClick}
			>${l}</a>
		`:r`
			<button class="menu__item"
				type="button"
				role=${a}
				?disabled=${this.disabled}
				aria-checked=${t?String(this.selected):n}
				aria-selected=${e===`listbox`?String(this.selected):n}
				aria-haspopup=${o?`menu`:n}
				aria-expanded=${o?String(this._submenuOpen):n}
				aria-controls=${o&&this._submenuEl?.id?this._submenuEl.id:n}
				.popoverTargetElement=${this._submenuEl}
				@click=${this._handleClick}
			>${l}</button>
		`}
		<!--
			Project the slotted nldd-menu (the submenu, if any) into the flat
			tree. Without this slot, a light-DOM child nldd-menu sits outside
			any flat tree — and the Popover API uses the flat tree to locate
			a popover's ancestor popover. Without an ancestor, calling
			showPopover() on the submenu would dismiss the parent menu (its
			DOM ancestor) instead of stacking on top of it. The slot itself
			has no visible effect because the submenu is display:none until
			it opens its own popover.
		-->
		<slot></slot>
	`}function _p(){return r`<div class="menu__divider"
		role="separator"
	></div>`}function vp(e){return r`
		<div class="menu__group">
			<div class="menu__group-title"
				id=${e._titleId}
				aria-hidden="true"
			>${e.text}</div>
			<div class="menu__group-items"
				role="group"
				aria-labelledby=${e._titleId}
			>
				<slot></slot>
			</div>
		</div>
	`}var yp={"components.menu.empty-text":`Geen opties beschikbaar`,"components.menu.back-action":`Terug`,"components.menu.submenu-title":`Submenu: {title}`,"components.menu.submenu-back-action":`Terug naar {title}`},bp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: var(--primitives-space-16);

		display: block;
		width: var(--_width);
		flex-grow: 0;
		flex-shrink: 0;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Size */

	:host([size="2"])  { --_width: var(--primitives-space-2); }
	:host([size="4"])  { --_width: var(--primitives-space-4); }
	:host([size="6"])  { --_width: var(--primitives-space-6); }
	:host([size="8"])  { --_width: var(--primitives-space-8); }
	:host([size="10"]) { --_width: var(--primitives-space-10); }
	:host([size="12"]) { --_width: var(--primitives-space-12); }
	:host([size="20"]) { --_width: var(--primitives-space-20); }
	:host([size="24"]) { --_width: var(--primitives-space-24); }
	:host([size="28"]) { --_width: var(--primitives-space-28); }
	:host([size="32"]) { --_width: var(--primitives-space-32); }
	:host([size="40"]) { --_width: var(--primitives-space-40); }
	:host([size="44"]) { --_width: var(--primitives-space-44); }
	:host([size="48"]) { --_width: var(--primitives-space-48); }
	:host([size="56"]) { --_width: var(--primitives-space-56); }
	:host([size="64"]) { --_width: var(--primitives-space-64); }
	:host([size="80"]) { --_width: var(--primitives-space-80); }
	:host([size="96"]) { --_width: var(--primitives-space-96); }

	:host([size="flexible"]) {
		--_width: auto;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}
`,xp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sp=class extends ge(o,`cells-container`){constructor(){super(...arguments),this.size=`16`}render(){return null}};Sp.styles=bp,xp([c({type:String,reflect:!0})],Sp.prototype,`size`,void 0),Sp=xp([u(`nldd-spacer-cell`)],Sp);var Cp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: auto;
		--_min-width: 0;
		--_max-width: none;
		--_min-height: 0;
		--_secondary-color: var(--context-content-secondary-color, var(--semantics-content-secondary-color));
		--_secondary-font: var(--primitives-font-body-xs-regular-tight);
		--_text-align: start;
		--_text-color: var(--context-content-color, var(--semantics-content-color));
		--_text-font: var(--primitives-font-body-md-regular-tight);

		${v}
		/* !important: shields the row padding from consumer universal resets, which beat normal :host declarations per CSS Scoping. */
		padding-block: var(--context-cell-padding-block, 0px) !important;
		display: flex;
		width: var(--_width);
		min-width: var(--_min-width);
		max-width: var(--_max-width);
		min-height: var(--_min-height);
		flex-direction: column;
		justify-content: center;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Width */

	:host([width="full"]),
	:host(:not([width])),
	:host([width=""]) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	:host([width="fit-content"]) {
		/* min-content rather than 0 as the floor: the cell gives way as soon as
		   the row is too narrow, but never past the width of its longest word,
		   so the text stays readable instead of breaking mid-word. */
		--_min-width: min-content;

		width: fit-content;
		flex-grow: 0;
		/* Krimpen mag: fit-content betekent min(max-content, max(min-content,
		   beschikbaar)), en met flex-shrink: 0 hield de cel zijn inhoudsbreedte
		   vast en duwde hij alles erachter de rij uit. */
		flex-shrink: 1;
		flex-basis: auto;
	}

	:host([width]:not([width="full"]):not([width="fit-content"]):not([width=""])) {
		flex-shrink: 0;
	}

	:host([max-width]) {
		flex-basis: var(--_max-width);
	}


	/* # Vertical alignment */

	/* "center" (default) stretches to the full row height then centers content;
	   use vertical-alignment="top" for strict top without a minimum height */

	:host([vertical-alignment="center"]),
	:host(:not([vertical-alignment])) {
		align-self: stretch;
	}

	:host([vertical-alignment="top"]) {
		align-self: flex-start;
	}

	:host([vertical-alignment="bottom"]) {
		align-self: flex-end;
	}


	/* # Horizontal alignment */

	:host([horizontal-alignment="left"]),
	:host(:not([horizontal-alignment])) {
		align-items: flex-start;
	}

	:host([horizontal-alignment="center"]) {
		--_text-align: center;
		align-items: center;
	}

	:host([horizontal-alignment="right"]) {
		--_text-align: right;
		align-items: flex-end;
	}


	/* # Size */

	:host([size="sm"]) {
		--_secondary-font: var(--primitives-font-body-xxs-regular-tight);
		--_text-font: var(--primitives-font-body-sm-regular-tight);
	}


	/* # Color */

	:host([color="secondary"]) {
		--_text-color: var(--context-content-secondary-color, var(--semantics-content-secondary-color));
	}

	:host([color="accent"]) {
		--_secondary-color: var(--context-content-accent-color, var(--semantics-content-accent-color));
		--_text-color: var(--context-content-accent-color, var(--semantics-content-accent-color));
	}

	:host([color="success"]) {
		--_secondary-color: var(--context-content-success-color, var(--semantics-content-success-color));
		--_text-color: var(--context-content-success-color, var(--semantics-content-success-color));
	}

	:host([color="warning"]) {
		--_secondary-color: var(--context-content-warning-color, var(--semantics-content-warning-color));
		--_text-color: var(--context-content-warning-color, var(--semantics-content-warning-color));
	}

	:host([color="critical"]) {
		--_secondary-color: var(--context-content-critical-color, var(--semantics-content-critical-color));
		--_text-color: var(--context-content-critical-color, var(--semantics-content-critical-color));
	}


	/* # Elements */

	.text-cell__overline {
		margin: 0;
		min-width: 0;
		align-self: stretch;
		text-align: var(--_text-align);
		color: var(--_secondary-color);
		font: var(--_secondary-font);
		overflow-wrap: anywhere;
	}

	.text-cell__text {
		margin: 0;
		min-width: 0;
		align-self: stretch;
		text-align: var(--_text-align);
		color: var(--_text-color);
		font: var(--_text-font);
		overflow-wrap: anywhere;
		text-wrap: pretty;
	}

	@media (forced-colors: active) {
		.text-cell__text {
			forced-color-adjust: none;
		}
	}

	.text-cell__supporting-text {
		margin: 0;
		min-width: 0;
		align-self: stretch;
		text-align: var(--_text-align);
		color: var(--_secondary-color);
		font: var(--_secondary-font);
		overflow-wrap: anywhere;
	}
`;function wp(e){if(!e.includes(`**`))return e;let t=e.split(/\*\*(.+?)\*\*/g);return r`${t.map((e,t)=>t%2==1?r`<b>${e}</b>`:e)}`}function Tp(e,t,i=`predictive`){if(!e)return n;let a=t.trim();if(!a)return wp(e);let o=a.toLowerCase(),s=e.toLowerCase();if(!s.includes(o))return wp(e);let c=[],l=0;for(;l<e.length;){let t=s.indexOf(o,l);if(t===-1){c.push({text:e.slice(l),bold:i===`predictive`});break}t>l&&c.push({text:e.slice(l,t),bold:i===`predictive`}),c.push({text:e.slice(t,t+a.length),bold:i===`match`}),l=t+a.length}return r`${c.map(e=>e.bold?r`<b>${e.text}</b>`:e.text)}`}function Ep(){return r`
		<p
			class="text-cell__overline"
			?hidden=${!this.overline&&!this._hasOverlineSlotted}
		>
			${this.overline&&!this._hasOverlineSlotted?Tp(this.overline,this.query,this.queryMarkMode):n}
			<slot
				name="overline"
				@slotchange=${this._onSlotChange}
			></slot>
		</p>
		<p
			class="text-cell__text"
			?hidden=${!this.text&&!this._hasDefaultSlotted}
		>
			${this.text&&!this._hasDefaultSlotted?Tp(this.text,this.query,this.queryMarkMode):n}
			<slot @slotchange=${this._onSlotChange}></slot>
		</p>
		<p
			class="text-cell__supporting-text"
			?hidden=${!this.supportingText&&!this._hasSupportingTextSlotted}
		>
			${this.supportingText&&!this._hasSupportingTextSlotted?Tp(this.supportingText,this.query,this.queryMarkMode):n}
			<slot
				name="supporting-text"
				@slotchange=${this._onSlotChange}
			></slot>
		</p>
	`}var Dp=t({NLDDTextCell:()=>Y}),Op=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends ge(o,`cells-container`){constructor(){super(...arguments),this.size=`md`,this.color=`content`,this.width=`full`,this.horizontalAlignment=`left`,this.verticalAlignment=`center`,this.text=``,this.supportingText=``,this.overline=``,this.query=``,this.queryMarkMode=`predictive`,this._hasOverlineSlotted=!1,this._hasDefaultSlotted=!1,this._hasSupportingTextSlotted=!1,this._onSlotChange=e=>{let t=e.target,n=t.assignedNodes().some(e=>e.nodeType===Node.TEXT_NODE?(e.textContent??``).trim().length>0:e.nodeType===Node.ELEMENT_NODE);switch(t.name){case`overline`:this._hasOverlineSlotted=n;break;case`supporting-text`:this._hasSupportingTextSlotted=n;break;default:this._hasDefaultSlotted=n}}}updated(e){super.updated(e),(e.has(`width`)||e.has(`minWidth`)||e.has(`maxWidth`)||e.has(`minHeight`))&&this._applyDimensionStyles()}_applyDimensionStyles(){let e=this.width,t=e===`full`||e===`fit-content`,n=!!e&&!t&&CSS.supports(`width`,e);n?this.style.setProperty(`--_width`,e):this.style.removeProperty(`--_width`),e&&!t&&!n&&(this.width=``),this.minWidth?this.style.setProperty(`--_min-width`,this.minWidth):this.style.removeProperty(`--_min-width`),this.maxWidth?this.style.setProperty(`--_max-width`,this.maxWidth):this.style.removeProperty(`--_max-width`),this.minHeight?this.style.setProperty(`--_min-height`,this.minHeight):this.style.removeProperty(`--_min-height`)}render(){return Ep.call(this)}};Y.styles=[Cp],Op([c({reflect:!0,converter:p(`md`)})],Y.prototype,`size`,void 0),Op([c({reflect:!0,converter:p(`content`)})],Y.prototype,`color`,void 0),Op([c({reflect:!0,converter:p(`full`)})],Y.prototype,`width`,void 0),Op([c({type:String,reflect:!0,attribute:`min-width`})],Y.prototype,`minWidth`,void 0),Op([c({type:String,reflect:!0,attribute:`max-width`})],Y.prototype,`maxWidth`,void 0),Op([c({type:String,reflect:!0,attribute:`min-height`})],Y.prototype,`minHeight`,void 0),Op([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(`left`)})],Y.prototype,`horizontalAlignment`,void 0),Op([c({reflect:!0,attribute:`vertical-alignment`,converter:p(`center`)})],Y.prototype,`verticalAlignment`,void 0),Op([c({reflect:!0,converter:p(``)})],Y.prototype,`text`,void 0),Op([c({reflect:!0,attribute:`supporting-text`,converter:p(``)})],Y.prototype,`supportingText`,void 0),Op([c({reflect:!0,converter:p(``)})],Y.prototype,`overline`,void 0),Op([c({reflect:!0,converter:p(``)})],Y.prototype,`query`,void 0),Op([c({type:String,attribute:`query-mark-mode`})],Y.prototype,`queryMarkMode`,void 0),Op([d()],Y.prototype,`_hasOverlineSlotted`,void 0),Op([d()],Y.prototype,`_hasDefaultSlotted`,void 0),Op([d()],Y.prototype,`_hasSupportingTextSlotted`,void 0),Y=Op([u(`nldd-text-cell`)],Y);var kp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_size: var(--components-keyboard-shortcut-md-size);
		--_inline-padding: var(--primitives-space-4);
		--_font-family: var(--primitives-font-family-monospace);
		--_font-size: var(--primitives-font-size-80);
		--_font-weight: var(--primitives-font-weight-body-regular);
		--_line-height: var(--primitives-line-height-flat);
		--_content-color: var(--components-keyboard-shortcut-content-color);
		--_separator-color: var(--components-keyboard-shortcut-separator-color);
		--_highlight-border-color: var(--components-keyboard-shortcut-border-color);
		--_background-color: var(--components-keyboard-shortcut-background-color);

		${v}
		display: inline-flex;
		vertical-align: middle;
	}

	:host([color="inherit"]) {
		--_content-color: currentColor;
		--_separator-color: currentColor;
		--_highlight-border-color: color-mix(in oklab, var(--semantics-content-contrast-color) 10%, transparent);
		--_background-color: color-mix(in oklab, var(--semantics-content-contrast-color) 20%, transparent);
	}

	:host([size="sm"]) {
		--_size: var(--components-keyboard-shortcut-sm-size);
		--_font-size: var(--primitives-font-size-70);
	}

	:host([size="inherit"]) {
		--_size: 1.5em;
		--_inline-padding: 0.35em;
		--_font-size: 0.75em;
	}

	:host([appearance="simple"]) {
		--_font-family: var(--primitives-font-family-body);
		--_font-size: var(--primitives-font-size-100);
	}

	:host([appearance="simple"][size="sm"]) {
		--_font-size: var(--primitives-font-size-90);
	}

	:host([appearance="simple"][size="inherit"]) {
		--_font-size: inherit;
	}

	:host([hidden]) {
		display: none;
	}

	@media (any-hover: none) {
		:host(:not([always-visible])) {
			display: none;
		}
	}


	/* # Block */

	.keyboard-shortcut {
		display: inline-flex;
		gap: var(--primitives-space-2);
		align-items: center;
	}

	:host([size="inherit"]) .keyboard-shortcut {
		position: relative;
		top: -0.05em;
	}

	:host([size="inherit"][appearance="simple"]) .keyboard-shortcut {
		position: static;
	}


	/* # Elements */

	.keyboard-shortcut__key {
		box-sizing: border-box;
		display: inline-flex;
		box-shadow: inset 0 0 0 var(--components-keyboard-shortcut-border-width) var(--_highlight-border-color);
		border-radius: var(--components-keyboard-shortcut-corner-radius);
		background-color: var(--_background-color);
		min-width: var(--_size);
		height: var(--_size);
		padding: 0 var(--_inline-padding);
		align-items: center;
		justify-content: center;
		color: var(--_content-color);
		font-family: var(--_font-family);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
		white-space: nowrap;
	}

	:host([appearance="simple"]) .keyboard-shortcut {
		gap: 0;
	}

	:host([appearance="simple"]) .keyboard-shortcut__key {
		box-shadow: none;
		background-color: transparent;
		border-radius: 0;
		min-width: 0;
		height: auto;
		padding: 0;
	}

	@media (forced-colors: active) {
		.keyboard-shortcut__key {
			color: CanvasText;
		}

		:host(:not([appearance="simple"])) .keyboard-shortcut__key {
			border: var(--components-keyboard-shortcut-border-width) solid CanvasText;
			background-color: Canvas;
		}
	}

	.keyboard-shortcut__separator {
		color: var(--_separator-color);
		font-family: var(--_font-family);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
	}
`;function Ap(e){let t=e._parsedKeys;return t.length===0?r`
			<kbd class="keyboard-shortcut">
				<slot></slot>
			</kbd>
		`:r`
		<kbd class="keyboard-shortcut">
			${t.map((e,t)=>r`
				${t>0?r`<span class="keyboard-shortcut__separator"
					aria-hidden="true"
				>+</span>`:``}
				<kbd class="keyboard-shortcut__key">${e}</kbd>
			`)}
		</kbd>
	`}var jp=null,Mp=null;function Np(e){let t=e.toLowerCase();return/mac|iphone|ipad|ipod|ios/.test(t)?`mac`:/win/.test(t)?`windows`:/android/.test(t)?`other`:/linux|cros/.test(t)?`linux`:`other`}function Pp(){if(Mp!==null)return Mp;if(jp!==null)return jp;if(typeof navigator>`u`)return jp=`other`,jp;let e=navigator;return jp=Np(e.userAgentData?.platform||e.platform||``),jp}var Fp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ip=class extends o{constructor(){super(...arguments),this.keys=``,this.macKeys=``,this.windowsKeys=``,this.linuxKeys=``,this.size=`md`,this.appearance=`box`,this.color=`neutral`,this.alwaysVisible=!1,this.debugOS=``}get _resolvedOS(){return this.debugOS||Pp()}get _resolvedKeys(){let e=this._resolvedOS;return e===`mac`&&this.macKeys?this.macKeys:e===`windows`&&this.windowsKeys?this.windowsKeys:e===`linux`&&this.linuxKeys?this.linuxKeys:this.keys}get _parsedKeys(){let e=this._resolvedKeys;return e?e.replace(/\+\+\+/g,`+\0+`).split(`+`).map(e=>e.trim().replace(RegExp(`\0`,`g`),`+`)).filter(Boolean):[]}render(){return Ap(this)}};Ip.styles=kp,Fp([c({reflect:!0,converter:p(``)})],Ip.prototype,`keys`,void 0),Fp([c({reflect:!0,attribute:`mac-keys`,converter:p(``)})],Ip.prototype,`macKeys`,void 0),Fp([c({reflect:!0,attribute:`windows-keys`,converter:p(``)})],Ip.prototype,`windowsKeys`,void 0),Fp([c({reflect:!0,attribute:`linux-keys`,converter:p(``)})],Ip.prototype,`linuxKeys`,void 0),Fp([c({reflect:!0,converter:p(`md`)})],Ip.prototype,`size`,void 0),Fp([c({reflect:!0,converter:p(`box`)})],Ip.prototype,`appearance`,void 0),Fp([c({reflect:!0,converter:p(`neutral`)})],Ip.prototype,`color`,void 0),Fp([c({type:Boolean,reflect:!0,attribute:`always-visible`})],Ip.prototype,`alwaysVisible`,void 0),Fp([c({type:String,attribute:`debug-os`})],Ip.prototype,`debugOS`,void 0),Ip=Fp([u(`nldd-keyboard-shortcut`)],Ip);var X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lp=class extends o{render(){return _p()}};Lp.styles=dp,customElements.get(`nldd-menu-divider`)||customElements.define(`nldd-menu-divider`,Lp);var Rp=class e extends o{constructor(){super(...arguments),this.text=``,this._titleId=`nldd-menu-group-title-${e._idCounter++}`}render(){return vp(this)}};Rp.styles=fp,Rp._idCounter=0,X([c({reflect:!0,converter:p(``)})],Rp.prototype,`text`,void 0),customElements.get(`nldd-menu-group`)||customElements.define(`nldd-menu-group`,Rp);var Z=class e extends o{constructor(){super(...arguments),this.destructive=!1,this.text=``,this.details=``,this.icon=``,this.shortcut=``,this.shortcutMac=``,this.shortcutWindows=``,this.shortcutLinux=``,this.href=``,this.type=`button`,this.selected=!1,this.disabled=!1,this.value=``,this.aliases=``,this.query=``,this.queryMarkMode=`predictive`,this.menuVariant=null,this.checkColumn=!1,this._submenuOpen=!1,this._cachedSubmenuEl=null,this._submenuMutationObserver=null}connectedCallback(){super.connectedCallback(),this.id||=`nldd-menu-item-${e._idCounter++}`,this.addEventListener(`focusin`,e=>{let t=e.composedPath()[0];t&&this.shadowRoot?.contains(t)&&(this.setAttribute(`data-focused`,``),this.dispatchEvent(new CustomEvent(`menu-item-focused`,{bubbles:!0,composed:!0})))}),this.addEventListener(`focusout`,e=>{let t=e.composedPath()[0];t&&this.shadowRoot?.contains(t)&&this.removeAttribute(`data-focused`)})}focus(e){(this.shadowRoot?.querySelector(`button, a`))?.focus(e)}get _submenuEl(){return this._cachedSubmenuEl}get _hasSubmenu(){return this._cachedSubmenuEl!==null}willUpdate(){this.hasUpdated||(this._cachedSubmenuEl=this.querySelector(`:scope > nldd-menu`))}updated(e){e.has(`type`)&&e.get(`type`)!==void 0&&this.menuVariant&&this.closest(`nldd-menu`)?._claimItems()}firstUpdated(){this._submenuMutationObserver=new MutationObserver(()=>{let e=this.querySelector(`:scope > nldd-menu`);e&&e!==this._cachedSubmenuEl&&console.warn(`[nldd-menu-item] A nldd-menu child was added after mount. Submenu attachment is resolved once at firstUpdated in v1, so this menu will not be treated as a submenu. Define the nldd-menu child before the item is connected to the DOM.`)}),this._submenuMutationObserver.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this._submenuMutationObserver?.disconnect(),this._submenuMutationObserver=null}_handleClick(e){if(!this.disabled){if(this._hasSubmenu){if(e?.preventDefault(),this._submenuOpen)return;this.dispatchEvent(new CustomEvent(`submenu-open`,{detail:{submenu:this._submenuEl,item:this},bubbles:!0,composed:!1}));return}this.dispatchEvent(new CustomEvent(`select`,{bubbles:!0,composed:!0})),this.closest(`nldd-menu`)?.hidePopover?.()}}select(){this._handleClick()}render(){return gp.call(this,this.menuVariant)}};Z.styles=up,Z._idCounter=0,X([c({type:Boolean,reflect:!0})],Z.prototype,`destructive`,void 0),X([c({reflect:!0,converter:p(``)})],Z.prototype,`text`,void 0),X([c({reflect:!0,converter:p(``)})],Z.prototype,`details`,void 0),X([c({type:String,reflect:!0})],Z.prototype,`icon`,void 0),X([c({reflect:!0,converter:p(``)})],Z.prototype,`shortcut`,void 0),X([c({reflect:!0,attribute:`shortcut-mac`,converter:p(``)})],Z.prototype,`shortcutMac`,void 0),X([c({reflect:!0,attribute:`shortcut-windows`,converter:p(``)})],Z.prototype,`shortcutWindows`,void 0),X([c({reflect:!0,attribute:`shortcut-linux`,converter:p(``)})],Z.prototype,`shortcutLinux`,void 0),X([c({type:String,reflect:!0})],Z.prototype,`href`,void 0),X([c({type:String,reflect:!0})],Z.prototype,`type`,void 0),X([c({type:Boolean,reflect:!0})],Z.prototype,`selected`,void 0),X([c({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),X([c({type:String,reflect:!0})],Z.prototype,`value`,void 0),X([c({reflect:!0,converter:p(``)})],Z.prototype,`aliases`,void 0),X([c({reflect:!0,converter:p(``)})],Z.prototype,`query`,void 0),X([c({reflect:!0,attribute:`query-mark-mode`,converter:p(`predictive`)})],Z.prototype,`queryMarkMode`,void 0),X([d()],Z.prototype,`menuVariant`,void 0),X([d()],Z.prototype,`checkColumn`,void 0),X([d()],Z.prototype,`_submenuOpen`,void 0),customElements.get(`nldd-menu-item`)||customElements.define(`nldd-menu-item`,Z);var zp=(e,t)=>{let n=e.toLowerCase(),r=t.text.toLowerCase().includes(n),i=t.value!==``&&t.value.toLowerCase().includes(n),a=t.aliases!==``&&t.aliases.split(` `).some(e=>e.toLowerCase().includes(n));return r||i||a},Q=class e extends o{constructor(){super(...arguments),this.variant=`menu`,this.width=``,this.anchor=``,this.anchorElement=null,this.placement=`bottom-start`,this.maxItems=0,this.emptyText=``,this.emptySupportingText=``,this.translations={},this.filterFn=zp,this.debugSafeTriangle=!1,this._isEmpty=!1,this._hasHeader=!1,this._hasFooter=!1,this._activeSubmenu=null,this._activeSubmenuOpener=null,this._activeSubmenuCleanup=null,this._drillInHidingForDeeper=!1,this._openChain=[],this._chainRoot=null,this._collapseSelf=null,this._parentMenu=null,this._parentItem=null,this._isOpen=!1,this._previousAnchorForResync=null,this._collapsedByPointerGesture=!1,this._cleanupAutoUpdate=null,this._announceRaf=0,this._pendingAnnouncement=``,this._resyncAnchorFromPopoverState=()=>{let e=this.matches(`:popover-open`);e!==this._isOpen&&(this._isOpen=e,this._syncAnchorPopupState(e))},this._handleDocumentClick=e=>{if(this.anchorElement)return;let t=this._collapsedByPointerGesture;this._collapsedByPointerGesture=!1;let n=this._getAnchorEl();if(n&&e.composedPath().includes(n)&&!t){if(this._drillInMode&&(this._isOpen||this._openChain.length>0)){this._collapseChain();return}this._isOpen?this.hidePopover():this.showPopover()}},this._hoverOpenTimer=null,this._safeTriangleListener=null,this._safeTriangleStallTimer=null,this._lastCursorPos=null,this._safeTriangleApex=null,this._safeTriangleSubmenu=null,this._movingTowardSubmenu=!1,this._handleMenuItemMouseenter=e=>{if(me())return;let t=e.target.closest(`nldd-menu-item`);t&&this._activateItem(t)},this._handleMouseleave=()=>{this.variant!==`listbox`&&this._clearHighlight(),this._cancelHoverOpen()},this._safeTriangleOverlay=null,this._handleMenuItemFocused=e=>{let t=e.target.closest(`nldd-menu-item`);!t||t.disabled||t.hasAttribute(`hidden`)||t.closest(`nldd-menu`)===this&&this._setHighlight(t)},this._handleSubmenuOpen=e=>{let{item:t,submenu:n}=e.detail;if(t.closest(`nldd-menu`)!==this||(e.stopPropagation(),this._activeSubmenu===n))return;this._activeSubmenu&&this._activeSubmenu!==n&&this._activeSubmenu.hidePopover?.(),n._parentMenu=this,n._parentItem=t;let r=this._rootMenu;if(n._chainRoot=r,r._openChain.includes(n)||r._openChain.push(n),this._drillInMode){let e=this._rootMenu;n.anchorElement=e._getAnchorEl(),n.placement=e.placement}else n.anchorElement=t,n.placement=`right-start`;this._activeSubmenu=n,this._activeSubmenuOpener=t,t._submenuOpen=!0,t.removeAttribute(`highlighted`);let i=this._drillInMode,a=e=>{n.removeEventListener(`toggle`,o),this._activeSubmenu===n&&(this._activeSubmenu=null,this._activeSubmenuOpener=null,this._activeSubmenuCleanup=null),n._parentMenu=null,n._parentItem=null;let a=r._openChain.indexOf(n);if(a!==-1&&r._openChain.splice(a,1),n._collapseSelf=null,n._chainRoot=null,t._submenuOpen=!1,i&&(s&&s.isConnected?s.insertBefore(n,c):n.remove(),!e&&this.isConnected&&!this.matches(`:popover-open`)&&this.showPopover?.(),!e&&this.isConnected)){let e=this._parentItem?.text;this._announce(e?this._t(`components.menu.submenu-back-action`,{title:e}):this._t(`components.menu.back-action`))}t.hasAttribute(`data-focused`)||t.removeAttribute(`highlighted`),this._stopSafeTriangle(),this.dispatchEvent(new CustomEvent(`submenu-close`,{detail:{submenu:n,item:t},bubbles:!0,composed:!1}))},o=e=>{if(e.newState===`closed`){if(n._drillInHidingForDeeper){n._drillInHidingForDeeper=!1;return}a(!1)}};n.addEventListener(`toggle`,o),this._activeSubmenuCleanup=a,n._collapseSelf=()=>{n.removeEventListener(`toggle`,o),n.hidePopover?.(),a(!0)};let s=null,c=null;i&&(s=n.parentElement,c=n.nextSibling,document.body.appendChild(n)),n.showPopover?.(),i&&(n._announce(n._t(`components.menu.submenu-title`,{title:t.text})),this._drillInHidingForDeeper=!0,this.hidePopover?.()),i||requestAnimationFrame(()=>{this._activeSubmenu===n&&this._startSafeTriangle(n)})},this._handleBack=()=>{this.hidePopover?.()},this._handleBackMouseenter=()=>{this._clearHighlight()},this._touchStartX=0,this._touchStartY=0,this._handleMenuTouchStart=e=>{let t=e.touches[0];t&&(this._touchStartX=t.clientX,this._touchStartY=t.clientY,this.removeAttribute(`scroll-active`))},this._handleMenuTouchMove=t=>{if(this.hasAttribute(`scroll-active`))return;let n=t.touches[0];if(!n)return;let r=n.clientX-this._touchStartX,i=n.clientY-this._touchStartY;Math.hypot(r,i)>e._TOUCH_SCROLL_THRESHOLD_PX&&this.setAttribute(`scroll-active`,``)},this._handleMenuTouchEnd=()=>{this.removeAttribute(`scroll-active`)},this._handleWindowResize=()=>{this._collapseChain()},this._collapseChain=()=>{let e=this._chainRoot??this,t=e._openChain;e._openChain=[];for(let e=t.length-1;e>=0;e--)t[e]._collapseSelf?.();e._isOpen&&e.hidePopover?.()},this._dragStartItem=null,this._handleItemPointerdown=e=>{if(e.button!==0)return;let t=e.target?.closest(`nldd-menu-item`);t&&!t.disabled&&(this._dragStartItem=t,document.addEventListener(`pointerup`,this._handleDragRelease,{capture:!0,once:!0}))},this._handleDragRelease=e=>{let t=this._dragStartItem;if(this._dragStartItem=null,!t||!this._isOpen)return;let n=this._menuItemFromPoint(e.clientX,e.clientY);n&&n!==t&&!n.disabled&&n._handleClick()},this._handleDocumentPointerdown=e=>{if(!this._isOpen)return;if(!this._isSubmenu){let t=this._getAnchorEl();if(t&&e.composedPath().includes(t)){this._collapsedByPointerGesture=!0;return}}if(!this._drillInMode||!this._isSubmenu)return;let t=e.composedPath(),n=this;for(;n;){if(t.includes(n))return;n=n._parentMenu}if(e.pointerType===`touch`){this._outsideTapStartX=e.clientX,this._outsideTapStartY=e.clientY,this._teardownOutsideTap(),this._outsideTapTracking=!0,document.addEventListener(`pointermove`,this._outsideTapMove,!0),document.addEventListener(`pointerup`,this._outsideTapEnd,!0),document.addEventListener(`pointercancel`,this._outsideTapCancel,!0);return}(this._chainRoot??this)._collapsedByPointerGesture=!0,this._collapseChain()},this._outsideTapStartX=0,this._outsideTapStartY=0,this._outsideTapTracking=!1,this._outsideTapMove=t=>{let n=t.clientX-this._outsideTapStartX,r=t.clientY-this._outsideTapStartY;Math.hypot(n,r)>e._TOUCH_SCROLL_THRESHOLD_PX&&this._teardownOutsideTap()},this._outsideTapEnd=()=>{let e=this._outsideTapTracking;this._teardownOutsideTap(),e&&((this._chainRoot??this)._collapsedByPointerGesture=!0,this._collapseChain())},this._outsideTapCancel=()=>{this._teardownOutsideTap()},this._handleKeydown=e=>{let t=this._getVisibleItems();if(t.length===0)return;let n=this.querySelector(`nldd-menu-item[data-focused]`);if(n&&n.closest(`nldd-menu`)!==this)return;let r=this._getFocusedIndex(t);switch(e.key){case`ArrowDown`:e.preventDefault(),e.stopPropagation(),t[r===-1?0:r<t.length-1?r+1:0].focus();break;case`ArrowUp`:e.preventDefault(),e.stopPropagation(),t[r===-1?t.length-1:r>0?r-1:t.length-1].focus();break;case`Home`:e.preventDefault(),e.stopPropagation(),t[0].focus();break;case`End`:e.preventDefault(),e.stopPropagation(),t[t.length-1].focus();break;case`ArrowRight`:{let n=t[r];n?._hasSubmenu&&(e.preventDefault(),e.stopPropagation(),n._handleClick(),requestAnimationFrame(()=>{this._activeSubmenu?._getVisibleItems()[0]?.focus()}));break}case`ArrowLeft`:if(this._isSubmenu){e.preventDefault(),e.stopPropagation();let t=this._parentItem;this.hidePopover(),t?.focus()}break;case`Escape`:e.preventDefault(),e.stopPropagation(),this.hidePopover(),(this._isSubmenu?this._parentItem:this._getAnchorEl())?.focus();break;default:e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&this._handleTypeahead(e,t,r)}},this._typeaheadBuffer=``,this._typeaheadTimer=null,this._claimItems=()=>{let e=Array.from(this.querySelectorAll(`nldd-menu-item`));e.forEach(e=>{e.menuVariant=this.variant});let t=e.filter(e=>e.closest(`nldd-menu`)===this),n=this.variant===`menu`&&t.some(e=>e.type!==`button`);t.forEach(e=>{e.checkColumn=n})},this._handleBeforeToggle=e=>{e.newState===`open`&&this.removeAttribute(`positioned`)},this._handleToggle=async e=>{let t=e;if(this._isOpen=t.newState===`open`,this._syncAnchorPopupState(this._isOpen),t.newState!==`open`){this._cleanupAutoUpdate?.(),this._cleanupAutoUpdate=null,window.removeEventListener(`resize`,this._handleWindowResize),document.removeEventListener(`pointerdown`,this._handleDocumentPointerdown,!0),this._teardownOutsideTap(),this._clearHighlight();return}this._updateDividerVisibility(),this._clearHighlight(),this._updateEmptyState(),this._claimItems(),await this.reposition(),this.setAttribute(`positioned`,``);let n=this._getAnchorEl();if(n&&(this._cleanupAutoUpdate=fe(n,this,()=>this.reposition())),window.addEventListener(`resize`,this._handleWindowResize,{passive:!0}),document.addEventListener(`pointerdown`,this._handleDocumentPointerdown,!0),await this.updateComplete,this.variant!==`listbox`){let e=he(),t=this._getVisibleItems();if(e&&t.length>0)this._setHighlight(t[0]),t[0].focus();else{let t=this.shadowRoot?.querySelector(`.menu`);t?.classList.toggle(`is-pointer-focus`,!e),t?.focus()}}}}_t(e,t){return y(this.translations,yp,e,t)}get _resolvedEmptyText(){return this.emptyText||this._t(`components.menu.empty-text`)}get _resolvedBackLabel(){let e=this._t(`components.menu.back-action`),t=this._parentItem?.text??``;return t?`${e}: ${t}`:e}_announce(e){if(!e||this._announceRaf&&e===this._pendingAnnouncement)return;let t=this.shadowRoot?.querySelector(`.menu__live-region`);t&&(this._announceRaf&&cancelAnimationFrame(this._announceRaf),this._pendingAnnouncement=e,t.textContent=``,this._announceRaf=requestAnimationFrame(()=>{this._announceRaf=requestAnimationFrame(()=>{this._announceRaf=0,this._pendingAnnouncement=``,t.textContent=e})}))}updated(e){if(e.has(`width`)&&(this.width?(this.style.setProperty(`--_width`,this.width),this.style.setProperty(`--_min-width`,this.width),this.style.setProperty(`--_max-width`,this.width)):(this.style.removeProperty(`--_width`),this.style.removeProperty(`--_min-width`),this.style.removeProperty(`--_max-width`))),e.has(`maxItems`)&&(this.maxItems>0?this.style.setProperty(`--_max-items`,String(this.maxItems)):this.style.removeProperty(`--_max-items`)),e.has(`variant`)&&this._claimItems(),e.has(`anchor`)||e.has(`anchorElement`)){this._previousAnchorForResync?.removeEventListener(`pointerdown`,this._resyncAnchorFromPopoverState,!0);let e=this._getAnchorEl();e?.addEventListener(`pointerdown`,this._resyncAnchorFromPopoverState,!0),this._previousAnchorForResync=e,this._syncAnchorPopupState(this._isOpen)}}_getAnchorEl(){return this.anchorElement?this.anchorElement:this.anchor?document.getElementById(this.anchor):null}_resolveDrillInPlacement(e){let t=this.placement||`bottom-start`,n=t.includes(`-`)?t.slice(t.indexOf(`-`)):``,r=e.getBoundingClientRect(),i=this._cssPx(`--_viewport-margin`);return`${window.innerHeight-r.bottom-i>=r.top-i?`bottom`:`top`}${n}`}_syncAnchorPopupState(e){let t=this._getAnchorEl();t&&(`expanded`in t&&(t.expanded=e),`popupType`in t&&!t.popupType&&(t.popupType=this.variant===`listbox`?`listbox`:`menu`),`popoverTargetAction`in t&&(t.popoverTargetAction=e?`hide`:`show`))}_activateItem(e){e.disabled||e.hasAttribute(`hidden`)||e.closest(`nldd-menu`)===this&&(this._movingTowardSubmenu&&e!==this._activeSubmenuOpener||(this._setHighlight(e),!this._drillInMode&&(this._activeSubmenu&&e!==this._activeSubmenuOpener&&this._activeSubmenu.hidePopover?.(),this._cancelHoverOpen(),e._hasSubmenu&&this._activeSubmenuOpener!==e&&(this._hoverOpenTimer=window.setTimeout(()=>{this._hoverOpenTimer=null,e._handleClick()},150)))))}_activateItemAt(e){let t=document.elementFromPoint(e.x,e.y)?.closest(`nldd-menu-item`);t&&this._activateItem(t)}_startSafeTriangle(t){this._stopSafeTriangle(),this._lastCursorPos=null,this._safeTriangleApex=null,this._safeTriangleSubmenu=t,this._movingTowardSubmenu=!1,this._safeTriangleListener=n=>{let r={x:n.clientX,y:n.clientY},i=t.getBoundingClientRect();if(e._isPointInMenuTree(r,t)){this._safeTriangleArrived(r);return}let a=this._activeSubmenuOpener?.getBoundingClientRect(),o=e._rectContainsPoint(a,r),s=e._rectContainsPoint(a,this._lastCursorPos);this._safeTriangleApex!==null&&o&&(this._safeTriangleApex=null);let c=this._movingTowardSubmenu;if(this._safeTriangleApex===null){if(o){this._safeTriangleWaitOnOpener(r,i,a);return}a&&s&&(r.y>a.bottom||r.y<a.top)?this._safeTrianglePinApex(r,a):this._safeTriangleSidewaysExit(r,c)}else this._safeTrianglePolygonTest(r,i);this._lastCursorPos=r,this._safeTriangleSyncOpenerHighlight(),this._safeTriangleDirectionReversalRecovery(r,c),this._safeTriangleScheduleStall()},window.addEventListener(`mousemove`,this._safeTriangleListener)}_safeTriangleArrived(e){this._movingTowardSubmenu=!1,this._lastCursorPos=e,this._safeTriangleApex=null,this._activeSubmenuOpener?.removeAttribute(`highlighted`),this._removeSafeTriangleOverlay()}_safeTriangleWaitOnOpener(t,n,r){if(this._movingTowardSubmenu=!0,this._lastCursorPos=t,this._activeSubmenuOpener&&!this._activeSubmenuOpener.hasAttribute(`highlighted`)&&this._setHighlight(this._activeSubmenuOpener),this.debugSafeTriangle&&r){let r=t.x<n.left?n.left:n.right;this._renderSafeTriangleOverlay([{x:t.x-e._SAFE_TRIANGLE_APEX_X_OFFSET,y:t.y},{x:r,y:n.top},{x:r,y:n.bottom}])}}_safeTrianglePinApex(t,n){let r=Math.max(n.left,Math.min(n.right,t.x))-e._SAFE_TRIANGLE_APEX_X_OFFSET,i=t.y>n.bottom?n.bottom:n.top;this._safeTriangleApex={x:r,y:i},this._movingTowardSubmenu=!0}_safeTriangleSidewaysExit(e,t){this._movingTowardSubmenu=!1,this._lastCursorPos=e,this._removeSafeTriangleOverlay(),t&&this._activateItemAt(e)}_safeTrianglePolygonTest(t,n){let r=t.x<n.left?n.left:n.right,i=[this._safeTriangleApex,{x:r,y:n.top},{x:r,y:n.bottom}];this._movingTowardSubmenu=e._pointInPolygon(t,i),this.debugSafeTriangle&&this._renderSafeTriangleOverlay(i)}_safeTriangleSyncOpenerHighlight(){this._activeSubmenuOpener&&this._movingTowardSubmenu&&!this._activeSubmenuOpener.hasAttribute(`highlighted`)&&this._setHighlight(this._activeSubmenuOpener)}_safeTriangleDirectionReversalRecovery(e,t){t&&!this._movingTowardSubmenu&&this._activateItemAt(e)}_safeTriangleScheduleStall(){this._safeTriangleStallTimer!==null&&(clearTimeout(this._safeTriangleStallTimer),this._safeTriangleStallTimer=null),this._movingTowardSubmenu&&(this._safeTriangleStallTimer=window.setTimeout(()=>{this._safeTriangleStallTimer=null,this._movingTowardSubmenu=!1,this._safeTriangleApex=null,this._lastCursorPos&&this._activateItemAt(this._lastCursorPos)},e._SAFE_TRIANGLE_STALL_DISMISS_MS))}static _rectContainsPoint(e,t){return!!e&&!!t&&t.x>=e.left&&t.x<=e.right&&t.y>=e.top&&t.y<=e.bottom}_stopSafeTriangle(){this._safeTriangleListener!==null&&(window.removeEventListener(`mousemove`,this._safeTriangleListener),this._safeTriangleListener=null),this._safeTriangleStallTimer!==null&&(clearTimeout(this._safeTriangleStallTimer),this._safeTriangleStallTimer=null),this._lastCursorPos=null,this._safeTriangleApex=null,this._safeTriangleSubmenu=null,this._movingTowardSubmenu=!1,this._removeSafeTriangleOverlay()}_renderSafeTriangleOverlay(e){let t=`http://www.w3.org/2000/svg`;if(this._safeTriangleOverlay===null){let e=document.createElement(`div`);e.setAttribute(`popover`,`manual`),e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;border:0;padding:0;margin:0;background:transparent;overflow:visible;`;let n=document.createElementNS(t,`svg`);n.setAttribute(`width`,`100%`),n.setAttribute(`height`,`100%`);let r=document.createElementNS(t,`polygon`);r.setAttribute(`fill`,`rgba(255, 0, 128, 0.15)`),r.setAttribute(`stroke`,`rgba(255, 0, 128, 0.85)`),r.setAttribute(`stroke-width`,`1`),n.appendChild(r),e.appendChild(n),document.body.appendChild(e),e.showPopover(),this._safeTriangleOverlay=e}this._safeTriangleOverlay.querySelector(`polygon`).setAttribute(`points`,e.map(e=>`${e.x},${e.y}`).join(` `))}_removeSafeTriangleOverlay(){this._safeTriangleOverlay?.hidePopover?.(),this._safeTriangleOverlay?.remove(),this._safeTriangleOverlay=null}_cancelHoverOpen(){this._hoverOpenTimer!==null&&(clearTimeout(this._hoverOpenTimer),this._hoverOpenTimer=null)}static _isPointInMenuTree(t,n){let r=n.getBoundingClientRect();return t.x>=r.left&&t.x<=r.right&&t.y>=r.top&&t.y<=r.bottom?!0:n._activeSubmenu?e._isPointInMenuTree(t,n._activeSubmenu):!1}static _pointInPolygon(e,t){let n=!1,r=!1;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length],s=(e.x-o.x)*(a.y-o.y)-(a.x-o.x)*(e.y-o.y);if(s<0&&(n=!0),s>0&&(r=!0),n&&r)return!1}return!0}static _getDrillInModeQuery(){return e._drillInModeQuery===null&&(e._drillInModeQuery=matchMedia(`(pointer: coarse), (max-width: ${b.smMax})`)),e._drillInModeQuery}get _drillInMode(){return e._getDrillInModeQuery().matches}get _rootMenu(){let e=this;for(;e._parentMenu;)e=e._parentMenu;return e}get _isSubmenu(){return this._parentMenu!==null}_menuItemFromPoint(e,t){let n=document;for(let r=0;r<20;r++){let r=n.elementFromPoint(e,t);if(!r)return null;let i=r.closest(`nldd-menu-item`);if(i)return i;if(!r.shadowRoot)return null;n=r.shadowRoot}return null}_teardownOutsideTap(){this._outsideTapTracking=!1,document.removeEventListener(`pointermove`,this._outsideTapMove,!0),document.removeEventListener(`pointerup`,this._outsideTapEnd,!0),document.removeEventListener(`pointercancel`,this._outsideTapCancel,!0)}connectedCallback(){super.connectedCallback(),this.id||=`nldd-menu-${e._menuIdCounter++}`,this.hasAttribute(`popover`)||this.setAttribute(`popover`,``),this.addEventListener(`beforetoggle`,this._handleBeforeToggle),this.addEventListener(`toggle`,this._handleToggle),this.addEventListener(`keydown`,this._handleKeydown),this.addEventListener(`mouseenter`,this._handleMenuItemMouseenter,!0),this.addEventListener(`mouseleave`,this._handleMouseleave),this.addEventListener(`menu-item-focused`,this._handleMenuItemFocused),this.addEventListener(`submenu-open`,this._handleSubmenuOpen),this.addEventListener(`select`,this._collapseChain),this.addEventListener(`pointerdown`,this._handleItemPointerdown),document.addEventListener(`click`,this._handleDocumentClick)}willUpdate(){this.hasUpdated||this._updateEmptyState()}firstUpdated(){queueMicrotask(()=>{this._onHeaderSlotChange(),this._onFooterSlotChange()}),Promise.resolve().then(()=>this._syncAnchorPopupState(this._isOpen))}disconnectedCallback(){super.disconnectedCallback(),this._activeSubmenu&&this._activeSubmenu.hidePopover?.(),this.removeEventListener(`beforetoggle`,this._handleBeforeToggle),this.removeEventListener(`toggle`,this._handleToggle),this._previousAnchorForResync?.removeEventListener(`pointerdown`,this._resyncAnchorFromPopoverState,!0),this._previousAnchorForResync=null,this.removeEventListener(`keydown`,this._handleKeydown),this.removeEventListener(`mouseenter`,this._handleMenuItemMouseenter,!0),this.removeEventListener(`mouseleave`,this._handleMouseleave),this.removeEventListener(`menu-item-focused`,this._handleMenuItemFocused),this.removeEventListener(`submenu-open`,this._handleSubmenuOpen),this.removeEventListener(`select`,this._collapseChain),this.removeEventListener(`pointerdown`,this._handleItemPointerdown),document.removeEventListener(`click`,this._handleDocumentClick),document.removeEventListener(`pointerup`,this._handleDragRelease,!0),document.removeEventListener(`pointerdown`,this._handleDocumentPointerdown,!0),this._teardownOutsideTap(),window.removeEventListener(`resize`,this._handleWindowResize),this._cancelHoverOpen(),this._stopSafeTriangle(),this._typeaheadTimer!==null&&(clearTimeout(this._typeaheadTimer),this._typeaheadTimer=null),this._cleanupAutoUpdate?.(),this._cleanupAutoUpdate=null}_getVisibleItems(){return Array.from(this.querySelectorAll(`nldd-menu-item:not([hidden]):not([disabled])`)).filter(e=>e.closest(`nldd-menu`)===this)}_getFocusedIndex(e){return e.findIndex(e=>e.hasAttribute(`data-focused`))}_clearHighlight(){Array.from(this.querySelectorAll(`nldd-menu-item`)).filter(e=>e.closest(`nldd-menu`)===this).forEach(e=>e.removeAttribute(`highlighted`))}_setHighlight(e){this._clearHighlight(),(e??this._getVisibleItems()[0]??null)?.setAttribute(`highlighted`,``)}_updateEmptyState(){let e=Array.from(this.querySelectorAll(`nldd-menu-item:not([hidden])`)).filter(e=>e.closest(`nldd-menu`)===this);this._isEmpty=e.length===0}_slotHasContent(e){return((this.shadowRoot?.querySelector(`slot[name="${e}"]`))?.assignedNodes({flatten:!0})??[]).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()??``)!==``)}_onHeaderSlotChange(){this._hasHeader=this._slotHasContent(`header`)}_onFooterSlotChange(){this._hasFooter=this._slotHasContent(`footer`)}_updateDividerVisibility(){let e=Array.from(this.children).filter(e=>!e.hasAttribute(`slot`));e.forEach(e=>{let t=e.tagName.toLowerCase();t===`nldd-menu-divider`&&e.removeAttribute(`hidden`),t===`nldd-menu-group`&&(e.removeAttribute(`data-no-bottom-divider`),e.removeAttribute(`data-no-top-divider`))});let t=e.filter(e=>!e.hasAttribute(`hidden`));t.forEach((e,n)=>{if(e.tagName.toLowerCase()!==`nldd-menu-divider`)return;let r=t[n-1]?.tagName.toLowerCase(),i=t[n+1]?.tagName.toLowerCase(),a=n===0,o=n===t.length-1;(a||o||r===`nldd-menu-divider`||r===`nldd-menu-group`||i===`nldd-menu-group`)&&e.setAttribute(`hidden`,``)});let n=t.filter(e=>!e.hasAttribute(`hidden`));n.forEach((e,t)=>{if(e.tagName.toLowerCase()!==`nldd-menu-group`)return;t===0&&e.setAttribute(`data-no-top-divider`,``);let r=n[t+1]?.tagName.toLowerCase();(t===n.length-1||r===`nldd-menu-group`)&&e.setAttribute(`data-no-bottom-divider`,``)})}filter(e,{hide:t=!0}={}){Array.from(this.querySelectorAll(`nldd-menu-item`)).forEach(n=>{let r=!t||!e||this.filterFn(e,n);n.toggleAttribute(`hidden`,!r),n.query=r&&e?e:``}),this._updateGroupVisibility(),this._setHighlight(null),this._updateEmptyState(),this._updateDividerVisibility(),this._isOpen&&this.reposition()}_updateGroupVisibility(){this.querySelectorAll(`nldd-menu-group`).forEach(e=>{let t=e.querySelectorAll(`nldd-menu-item:not([hidden])`);e.toggleAttribute(`hidden`,t.length===0)})}focusItem(e){let t=this._getVisibleItems();if(t.length===0)return;let n;if(e===`first`)n=0;else{let r=t.findIndex(e=>e.hasAttribute(`highlighted`)||e.hasAttribute(`data-focused`));n=e===`next`?r===-1?0:r<t.length-1?r+1:0:r===-1?t.length-1:r>0?r-1:t.length-1}t.forEach(e=>e.removeAttribute(`highlighted`)),t[n].setAttribute(`highlighted`,``),t[n].focus()}moveHighlight(e){let t=this._getVisibleItems();if(t.length===0)return;let n=t.findIndex(e=>e.hasAttribute(`highlighted`)),r;r=e===`next`?n===-1?0:n<t.length-1?n+1:0:n===-1?t.length-1:n>0?n-1:t.length-1,t.forEach(e=>e.removeAttribute(`highlighted`)),t[r].setAttribute(`highlighted`,``),t[r].scrollIntoView({block:`nearest`,inline:`nearest`})}getHighlighted(){return this.querySelector(`nldd-menu-item[highlighted]`)}getHighlightedId(){return this.getHighlighted()?.id??``}_cssPx(e){let t=parseFloat(getComputedStyle(this).getPropertyValue(e));return Number.isNaN(t)?0:t}async reposition(){let e=this._getAnchorEl();if(!e||!this._isOpen)return;let t=this._cssPx(`--_viewport-margin`),n=this._isSubmenu&&!this._drillInMode?this._cssPx(`--_padding`):0,r=this._drillInMode,i=r?this._resolveDrillInPlacement(e):this.placement,{x:a,y:o}=await ce(e,this,{placement:i,middleware:[se({mainAxis:0,alignmentAxis:-n}),...r?[]:[ue({padding:t})],oe({padding:t}),le({padding:t,apply:({availableHeight:e})=>{this.style.setProperty(`--_max-height`,`${e}px`)}})]});Object.assign(this.style,{left:`${a}px`,top:`${o}px`})}_handleTypeahead(t,n,r){this._typeaheadTimer!==null&&clearTimeout(this._typeaheadTimer),this._typeaheadBuffer+=t.key.toLowerCase(),this._typeaheadTimer=window.setTimeout(()=>{this._typeaheadBuffer=``,this._typeaheadTimer=null},e._TYPEAHEAD_RESET_MS);let i=this._typeaheadBuffer.length===1&&r>=0?r+1:Math.max(0,r);for(let e=0;e<n.length;e++){let r=(i+e)%n.length;if(n[r].text.toLowerCase().startsWith(this._typeaheadBuffer)){t.preventDefault(),t.stopPropagation(),n[r].focus();return}}}render(){return hp.call(this,this._isEmpty,this.variant)}};Q.styles=lp,Q._SAFE_TRIANGLE_STALL_DISMISS_MS=500,Q._SAFE_TRIANGLE_APEX_X_OFFSET=4,Q._drillInModeQuery=null,Q._TOUCH_SCROLL_THRESHOLD_PX=8,Q._menuIdCounter=0,Q._TYPEAHEAD_RESET_MS=500,X([c({reflect:!0,converter:p(`menu`)})],Q.prototype,`variant`,void 0),X([c({type:String,reflect:!0})],Q.prototype,`width`,void 0),X([c({type:String,reflect:!0})],Q.prototype,`anchor`,void 0),X([c({attribute:!1})],Q.prototype,`anchorElement`,void 0),X([c({reflect:!0,converter:p(`bottom-start`)})],Q.prototype,`placement`,void 0),X([c({type:Number,attribute:`max-items`})],Q.prototype,`maxItems`,void 0),X([c({reflect:!0,attribute:`empty-text`,converter:p(``)})],Q.prototype,`emptyText`,void 0),X([c({reflect:!0,attribute:`empty-supporting-text`,converter:p(``)})],Q.prototype,`emptySupportingText`,void 0),X([c({type:Object})],Q.prototype,`translations`,void 0),X([c({attribute:!1})],Q.prototype,`filterFn`,void 0),X([c({type:Boolean,reflect:!0,attribute:`debug-safe-triangle`})],Q.prototype,`debugSafeTriangle`,void 0),X([d()],Q.prototype,`_isEmpty`,void 0),X([d()],Q.prototype,`_hasHeader`,void 0),X([d()],Q.prototype,`_hasFooter`,void 0),X([d()],Q.prototype,`_parentItem`,void 0),customElements.get(`nldd-menu`)||customElements.define(`nldd-menu`,Q);var Bp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vp=class extends o{constructor(){super(...arguments),this.text=``,this.current=!1,this.currentType=`page`,this.href=``,this.icon=``,this.expandable=!1,this.iconOnly=!1,this.contentPriority=``,this.compact=!1,this.disabled=!1,this.accessibleLabel=``,this.haspopup=``,this.expanded=!1,this.popoverTargetElement=null,this.popoverTargetAction=`toggle`,this._menu=null,this._menuOpen=!1,this._pointerdownWhileMenuOpen=!1,this._menuToggleHandler=null,this._onSlotChange=()=>{this._wireMenu()},this._handlePointerdown=()=>{this._menuOpen&&(this._pointerdownWhileMenuOpen=!0)},this._handleClick=e=>{if(this.disabled){e.preventDefault(),e.stopPropagation();return}if(this.expandable&&this._findMenu()){e.preventDefault(),this._toggleMenu();return}this.href||(e.preventDefault(),this.dispatchEvent(new CustomEvent(`select`,{bubbles:!0,composed:!0,detail:{item:this}})))}}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerdown`,this._handlePointerdown),this.addEventListener(`click`,this._handleClick),this._wireMenu()}firstUpdated(){this._wireMenu()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerdown`,this._handlePointerdown),this.removeEventListener(`click`,this._handleClick),this._unwireMenu()}focus(e){(this.shadowRoot?.querySelector(`button, a`))?.focus(e)}_findMenu(){return this.querySelector(`nldd-menu`)}_wireMenu(){let e=this._findMenu();e!==this._menu&&(this._unwireMenu(),e&&(this._menu=e,this._menuToggleHandler=e=>{let t=e.newState===`open`;this._menuOpen=t,this.expanded=t},e.addEventListener(`toggle`,this._menuToggleHandler)))}_unwireMenu(){this._menu&&this._menuToggleHandler&&this._menu.removeEventListener(`toggle`,this._menuToggleHandler),this._menu=null,this._menuToggleHandler=null,this._menuOpen=!1}_toggleMenu(){if(this._pointerdownWhileMenuOpen){this._pointerdownWhileMenuOpen=!1;return}this._menu&&(this._menu.anchorElement=this,this._menuOpen?this._menu.hidePopover():this._menu.showPopover())}render(){return cp(this)}};Vp.styles=op,Bp([c({reflect:!0,converter:p(``)})],Vp.prototype,`text`,void 0),Bp([c({type:Boolean,reflect:!0})],Vp.prototype,`current`,void 0),Bp([c({reflect:!0,attribute:`current-type`,converter:p(`page`)})],Vp.prototype,`currentType`,void 0),Bp([c({type:String})],Vp.prototype,`href`,void 0),Bp([c({type:String,reflect:!0})],Vp.prototype,`icon`,void 0),Bp([c({type:Boolean,reflect:!0})],Vp.prototype,`expandable`,void 0),Bp([c({type:Boolean,attribute:`icon-only`,reflect:!0})],Vp.prototype,`iconOnly`,void 0),Bp([c({reflect:!0,attribute:`content-priority`,converter:p(``)})],Vp.prototype,`contentPriority`,void 0),Bp([c({type:Boolean,reflect:!0})],Vp.prototype,`compact`,void 0),Bp([c({type:Boolean,reflect:!0})],Vp.prototype,`disabled`,void 0),Bp([c({type:String,attribute:`accessible-label`})],Vp.prototype,`accessibleLabel`,void 0),Bp([c({type:String})],Vp.prototype,`haspopup`,void 0),Bp([c({type:Boolean,reflect:!0})],Vp.prototype,`expanded`,void 0),Bp([c({attribute:!1})],Vp.prototype,`popoverTargetElement`,void 0),Bp([c({attribute:!1})],Vp.prototype,`popoverTargetAction`,void 0),Vp=Bp([u(`nldd-menu-bar-item`)],Vp);var Hp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Up=class extends re(o,ap){constructor(){super(...arguments),this.overflowText=``,this.accessibleLabel=``,this.compact=!1,this._menuOpen=!1,this._overflowMenu=null,this._overflowPointerdownWhileOpen=!1,this._overflowUpdatePending=!1,this._resizeObserver=null,this._overflowRAF=null,this._setupRAF=null,this._onSlotChange=()=>{this._syncCompactAttribute(),this._scheduleOverflowUpdate(),this._syncEmpty()},this._scheduleOverflowUpdate=()=>{this._overflowRAF&&cancelAnimationFrame(this._overflowRAF),this._overflowRAF=requestAnimationFrame(()=>{this._overflowRAF=null,this._updateOverflow()})},this._toggleOverflowMenu=()=>{if(this._overflowPointerdownWhileOpen){this._overflowPointerdownWhileOpen=!1;return}if(this._createOverflowMenu(),!this._overflowMenu)return;let e=this._overflowButton?.querySelector(`nldd-menu-bar-item`);this._overflowMenu.anchorElement=e??this._overflowButton,this._menuOpen?this._overflowMenu.hidePopover():(this._populateOverflowMenu(),this._overflowMenu.showPopover())},this._handleOverflowButtonPointerdown=()=>{this._menuOpen&&(this._overflowPointerdownWhileOpen=!0)}}willUpdate(e){super.willUpdate(e),e.has(`compact`)&&this._syncCompactAttribute()}get _overflowText(){return this.overflowText||this._t(`components.menu-bar.overflow-action`)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupOverflowDetection(),this._overflowMenu?.remove(),this._overflowMenu=null}firstUpdated(){this._setupOverflowDetection(),this._syncCompactAttribute(),this._syncEmpty()}requestOverflowUpdate(){this._scheduleOverflowUpdate()}_syncEmpty(){let e=(this._defaultSlot?.assignedElements({flatten:!0})??[]).some(e=>e.tagName===`NLDD-MENU-BAR-ITEM`);this.toggleAttribute(`empty`,!e)}_syncCompactAttribute(){let e=this._defaultSlot?.assignedElements({flatten:!0})??[];for(let t of e)t.toggleAttribute(`compact`,this.compact)}_setupOverflowDetection(){this._cleanupOverflowDetection(),this._setupRAF=requestAnimationFrame(()=>{this._setupRAF=null,this.isConnected&&(this._resizeObserver=new ResizeObserver(()=>{this._scheduleOverflowUpdate()}),this._resizeObserver.observe(this),this._defaultSlot&&this._defaultSlot.addEventListener(`slotchange`,this._onSlotChange),this._scheduleOverflowUpdate())})}_cleanupOverflowDetection(){this._setupRAF&&=(cancelAnimationFrame(this._setupRAF),null),this._overflowRAF&&=(cancelAnimationFrame(this._overflowRAF),null),this._resizeObserver&&=(this._resizeObserver.disconnect(),null),this._defaultSlot&&this._defaultSlot.removeEventListener(`slotchange`,this._onSlotChange)}_updateOverflow(){let e=this._overflowButton;if(!e)return;if(this._menuOpen){this._overflowUpdatePending=!0;return}let t=(this._defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.tagName===`NLDD-MENU-BAR-ITEM`);if(t.length===0){e.style.display=`none`;return}t.forEach(e=>{e.style.display=``,e.removeAttribute(`data-overflow`)}),e.style.display=`inline-block`;let n=this.clientWidth;if(t.reduce((e,t)=>e+t.offsetWidth,0)<=n){e.style.display=`none`;return}let r=n-e.offsetWidth,i=0,a=-1;for(let e=0;e<t.length;e++){let n=t[e].offsetWidth;if(i+n>r){a=e;break}i+=n}if(a>=0)for(let e=a;e<t.length;e++)t[e].style.display=`none`,t[e].setAttribute(`data-overflow`,`true`);else e.style.display=`none`}_createOverflowMenu(){if(this._overflowMenu||typeof document>`u`)return;let e=document.createElement(`nldd-menu`);e.setAttribute(`placement`,`bottom-end`),e.addEventListener(`toggle`,e=>{let t=e.newState===`open`;this._menuOpen=t,t||this._overflowUpdatePending&&(this._overflowUpdatePending=!1,this._scheduleOverflowUpdate())}),document.body.appendChild(e),this._overflowMenu=e}_populateOverflowMenu(){if(!this._overflowMenu)return;this._overflowMenu.replaceChildren();let e=(this._defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.tagName===`NLDD-MENU-BAR-ITEM`&&e.hasAttribute(`data-overflow`));for(let t of e){let e=document.createElement(`nldd-menu-item`);if(e.setAttribute(`text`,t.text),t.icon&&e.setAttribute(`icon`,t.icon),t.current&&e.setAttribute(`selected`,``),t.disabled&&e.setAttribute(`disabled`,``),t.expandable){let n=t.querySelectorAll(`nldd-menu-item, nldd-menu-divider`);if(n.length>0){let t=document.createElement(`nldd-menu`);n.forEach(e=>{let n=e.cloneNode(!0),r=e;typeof r.select==`function`&&n.addEventListener(`click`,()=>r.select()),t.appendChild(n)}),e.appendChild(t),this._overflowMenu.appendChild(e);continue}}e.addEventListener(`click`,()=>{t.click()}),this._overflowMenu.appendChild(e)}}render(){return ip(this)}};Up.styles=rp,Hp([c({reflect:!0,attribute:`overflow-text`,converter:p(``)})],Up.prototype,`overflowText`,void 0),Hp([c({type:String,attribute:`accessible-label`})],Up.prototype,`accessibleLabel`,void 0),Hp([c({type:Boolean,reflect:!0})],Up.prototype,`compact`,void 0),Hp([f(`slot:not([name])`)],Up.prototype,`_defaultSlot`,void 0),Hp([f(`.menu-bar__overflow-button`)],Up.prototype,`_overflowButton`,void 0),Hp([d()],Up.prototype,`_menuOpen`,void 0),Up=Hp([u(`nldd-menu-bar`)],Up);var Wp=a(b.smMax),Gp=a(b.mdMin),Kp=a(b.mdMax),qp=a(b.lgMin),Jp=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		container-type: inline-size;
		/* Block-padding overrides from PageSectionMixin; 'initial' lets the
		   block fall back to the responsive default until the mixin sets one. */
		--_padding-top: initial;
		--_padding-bottom: initial;
		--_sm-padding-top: initial;
		--_sm-padding-bottom: initial;
		--_md-padding-top: initial;
		--_md-padding-bottom: initial;
		--_lg-padding-top: initial;
		--_lg-padding-bottom: initial;
		--_max-width: var(--semantics-page-sections-body-max-width);

		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}

	:host([hidden]) {
		display: none;
	}

	:host([width="full"]) {
		--_max-width: none;
	}


	/* # Block */

	.one-third-two-thirds-section {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;


		@container (max-width: ${Wp}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
			padding-top: var(--_sm-padding-top, var(--_padding-top, var(--semantics-page-sections-sm-margin-block)));
			padding-bottom: var(--_sm-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-sm-margin-block)));
		}

		@container (min-width: ${Gp}) and (max-width: ${Kp}) {
			padding-inline: var(--semantics-page-sections-md-margin-inline);
			padding-top: var(--_md-padding-top, var(--_padding-top, var(--semantics-page-sections-md-margin-block)));
			padding-bottom: var(--_md-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-md-margin-block)));
		}

		@container (min-width: ${qp}) {
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
			padding-top: var(--_lg-padding-top, var(--_padding-top, var(--semantics-page-sections-lg-margin-block)));
			padding-bottom: var(--_lg-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-lg-margin-block)));
		}
	}


	/* # Elements */

	.one-third-two-thirds-section__body {
		display: flex;
		width: 100%;
		max-width: var(--_max-width);
		flex-direction: column;

		@container (max-width: ${Wp}) {
			gap: var(--semantics-page-sections-sm-gap);
		}

		@container (min-width: ${Gp}) and (max-width: ${Kp}) {
			gap: var(--semantics-page-sections-md-gap);
		}

		@container (min-width: ${qp}) {
			gap: var(--semantics-page-sections-lg-gap);
		}
	}

	.one-third-two-thirds-section__header[hidden],
	.one-third-two-thirds-section__footer[hidden] {
		display: none;
	}

	.one-third-two-thirds-section__columns {
		display: flex;
		flex-wrap: wrap;

		/* Below ~768px the 2/3 column would shrink under 400px and read as
		   two near-equal columns; stack to a single column instead. nowrap
		   stops the column-direction wrap container from stretching the
		   shorter column to fill height. */
		@container (max-width: 768px) {
			flex-direction: column;
			flex-wrap: nowrap;
		}

		@container (max-width: ${Wp}) {
			gap: var(--semantics-page-sections-sm-gap);
		}

		@container (min-width: ${Gp}) and (max-width: ${Kp}) {
			gap: var(--semantics-page-sections-md-gap);
		}

		@container (min-width: ${qp}) {
			gap: var(--semantics-page-sections-lg-gap);
		}
	}

	.one-third-two-thirds-section__left-column {
		min-width: var(--primitives-area-280);
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	.one-third-two-thirds-section__right-column {
		min-width: var(--primitives-area-280);
		flex-grow: 2;
		flex-shrink: 1;
		flex-basis: 0;
	}
`;function Yp(e){return r`
		<section class="one-third-two-thirds-section">
			<div class="one-third-two-thirds-section__body">
				<header class="one-third-two-thirds-section__header"
					hidden
				>
					<slot
						name="header"
						@slotchange=${e._onSlotChange}
					></slot>
				</header>
				<div class="one-third-two-thirds-section__columns">
					<div class="one-third-two-thirds-section__left-column">
						<slot name="left"></slot>
					</div>
					<div class="one-third-two-thirds-section__right-column">
						<slot></slot>
						<slot name="right"></slot>
					</div>
				</div>
				<footer class="one-third-two-thirds-section__footer"
					hidden
				>
					<slot
						name="footer"
						@slotchange=${e._onSlotChange}
					></slot>
				</footer>
			</div>
		</section>
	`}var Xp=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zp=class extends df(o){constructor(){super(...arguments),this.width=``}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}}render(){return Yp(this)}};Zp.styles=Jp,Xp([c({type:String,reflect:!0})],Zp.prototype,`width`,void 0),Zp=Xp([u(`nldd-one-third-two-thirds-section`)],Zp);var Qp=a(b.smMax),$p=a(b.mdMin),em=a(b.mdMax),tm=a(b.lgMin),nm=i`
	:host {
		box-sizing: border-box;
	}
	:host {
		--_max-width: var(--semantics-page-sections-body-max-width);
		/* Official Rijksoverheid lintje color — identical across all
		   .rijks.app / .overheid.nl sites by visual-identity policy, so it
		   intentionally lives outside the semantic token system. Local
		   --_ var keeps the value discoverable in one place. */
		--_lintje-color: #154273;
		--context-parent-background-color: var(--components-page-footer-background-color);

		container-type: inline-size;
		display: block;
		background-color: var(--components-page-footer-background-color);
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	:host([empty]) {
		background-color: transparent;
	}

	:host([width="full"]) {
		--_max-width: none;
	}

	.page-footer {
		--_lintje-height: calc(var(--_lintje-width) / 2);

		box-sizing: border-box;
		display: flex;
		position: relative;
		width: 100%;
		flex-direction: column;
		align-items: center;

		@container (max-width: ${Qp}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
			--_lintje-width: var(--primitives-space-40);
		}

		@container (min-width: ${$p}) and (max-width: ${em}) {
			padding-inline: var(--semantics-page-sections-md-margin-inline);
			--_lintje-width: var(--primitives-space-44);
		}

		@container (min-width: ${tm}) {
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
			--_lintje-width: var(--primitives-space-48);
		}
	}

	/* Empty footer = only the lintje. Add top space equal to the lintje height
	   (container-type on :host makes a BFC, so this margin stays inside the
	   transparent host) so a preceding tinted page section doesn't butt right up
	   against the lintje. */
	:host([empty]) .page-footer {
		min-height: var(--_lintje-height);
		margin-top: var(--_lintje-height);
	}

	.page-footer::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: var(--_lintje-color);
		width: var(--_lintje-width);
		height: var(--_lintje-height);
		transform: translateX(-50%);
	}

	@media (forced-colors: active) {
		.page-footer::after {
			background-color: ButtonText;
		}
	}

	.page-footer__body {
		display: flex;
		width: 100%;
		max-width: var(--_max-width);
		flex-direction: column;
	}

	.page-footer__breadcrumbs,
	.page-footer__legal-bar {
		@container (max-width: ${Qp}) {
			padding-block: var(--primitives-space-16);
		}

		@container (min-width: ${$p}) and (max-width: ${em}) {
			padding-block: var(--primitives-space-24);
		}

		@container (min-width: ${tm}) {
			padding-block: var(--primitives-space-24);
		}
	}

	.page-footer__main {
		@container (max-width: ${Qp}) {
			padding-block: var(--primitives-space-24);
		}

		@container (min-width: ${$p}) and (max-width: ${em}) {
			padding-block: var(--primitives-space-32);
		}

		@container (min-width: ${tm}) {
			padding-block: var(--primitives-space-48);
		}
	}

	.page-footer__body > div:not([hidden]):not(:has(~ div:not([hidden]))) {
		padding-bottom: calc(var(--primitives-space-16) + var(--_lintje-height));
	}

	:host([single-slot]) .page-footer__body > div:not([hidden]) {
		padding-top: calc(var(--primitives-space-16) + var(--_lintje-height));
	}

	.page-footer__breadcrumbs[hidden],
	.page-footer__main[hidden],
	.page-footer__legal-bar[hidden],
	.page-footer__divider[hidden] {
		display: none;
	}

	.page-footer__divider {
		margin: 0;
		border: none;
		background-color: var(--components-page-footer-divider-color);
		width: 100%;
		height: var(--semantics-dividers-thickness);
	}

	@media (forced-colors: active) {
		.page-footer__divider {
			background-color: CanvasText;
		}
	}
`,rm=i`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none;
	}

	.page-footer__legal-bar {
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--primitives-space-4);
		column-gap: var(--primitives-space-16);
		align-items: flex-start;
		justify-content: space-between;
	}

	.page-footer__legal-bar-start {
		display: flex;
		flex-wrap: wrap;
		gap: var(--primitives-space-12);
		order: 0;
	}

	.page-footer__legal-bar-end {
		display: flex;
		flex-wrap: wrap;
		gap: var(--primitives-space-12);
		order: 1;
	}

	.page-footer__legal-bar-start[hidden],
	.page-footer__legal-bar-end[hidden] {
		display: none;
	}

	/* Without start items the end area is the only flex child, and space-between
	   puts a lone child at the start. The auto margin pushes it back to the end.
	   Scoped to this case so the wrapping behavior with both areas is untouched. */
	.page-footer__legal-bar-start[hidden] + .page-footer__legal-bar-end {
		margin-inline-start: auto;
	}
`,im=i`
	:host {
		${v}
		display: inline-flex;
	}

	:host([hidden]) {
		display: none;
	}

	.page-footer__legal-bar-item {
		display: inline-flex;
		color: var(--components-page-footer-legal-bar-item-color);
		font: var(--primitives-font-body-sm-regular-tight);
	}

	.page-footer__legal-bar-item-link {
		color: var(--components-page-footer-legal-bar-item-color);
		text-decoration: underline;
	}

	.page-footer__legal-bar-item-link:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		border-radius: var(--primitives-corner-radius-xs);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}
`;function am(e){let t=e._hasBreadcrumbs&&e._hasMain,n=(e._hasBreadcrumbs||e._hasMain)&&e._hasLegalBar;return r`
		<div class="page-footer">
			<div class="page-footer__body">
				<div class="page-footer__breadcrumbs"
					?hidden=${!e._hasBreadcrumbs}
				>
					<slot
						name="breadcrumbs"
						@slotchange=${e._onSlotChange}
					></slot>
				</div>
				<hr class="page-footer__divider"
					?hidden=${!t}
				>
				<div class="page-footer__main"
					?hidden=${!e._hasMain}
				>
					<slot @slotchange=${e._onSlotChange}></slot>
				</div>
				<hr class="page-footer__divider"
					?hidden=${!n}
				>
				<div class="page-footer__legal-bar"
					?hidden=${!e._hasLegalBar}
				>
					<slot
						name="legal-bar"
						@slotchange=${e._onSlotChange}
					></slot>
				</div>
			</div>
		</div>
	`}function om(e){let t=e._t(`components.page-footer.legal-bar-accessible-label`);return r`
		<nav class="page-footer__legal-bar"
			aria-label=${t||n}
			?hidden=${!e._hasStart&&!e._hasEnd}
		>
			<div class="page-footer__legal-bar-start"
				?hidden=${!e._hasStart}
			>
				<slot
					name="start"
					@slotchange=${e._onSlotChange}
				></slot>
			</div>
			<div class="page-footer__legal-bar-end"
				?hidden=${!e._hasEnd}
			>
				<slot
					name="end"
					@slotchange=${e._onSlotChange}
				></slot>
			</div>
		</nav>
	`}function sm(e){let t=e.text||r`<slot></slot>`;return e.href?r`
			<span class="page-footer__legal-bar-item">
				<a class="page-footer__legal-bar-item-link"
					href=${e.href}
				>${t}</a>
			</span>
		`:r`<span class="page-footer__legal-bar-item">${t}</span>`}var cm={"components.page-footer.legal-bar-accessible-label":`Juridische links`},lm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},um=class extends o{constructor(){super(...arguments),this.text=``}render(){return sm(this)}};um.styles=im,lm([c({reflect:!0,converter:p(``)})],um.prototype,`text`,void 0),lm([c({type:String,reflect:!0})],um.prototype,`href`,void 0),customElements.get(`nldd-page-footer-legal-bar-item`)||customElements.define(`nldd-page-footer-legal-bar-item`,um);var dm=class extends o{constructor(){super(...arguments),this.accessibleLabel=``,this.translations={},this._hasStart=!1,this._hasEnd=!1,this._onSlotChange=e=>{let t=e.target,n=t.assignedElements().length>0,r=t.getAttribute(`name`)??``;r===`start`?this._hasStart=n:r===`end`&&(this._hasEnd=n)}}_t(e){return e===`components.page-footer.legal-bar-accessible-label`&&this.accessibleLabel?this.accessibleLabel:y(this.translations,cm,e)}render(){return om(this)}};dm.styles=rm,lm([c({type:String,attribute:`accessible-label`})],dm.prototype,`accessibleLabel`,void 0),lm([c({type:Object})],dm.prototype,`translations`,void 0),lm([d()],dm.prototype,`_hasStart`,void 0),lm([d()],dm.prototype,`_hasEnd`,void 0),customElements.get(`nldd-page-footer-legal-bar`)||customElements.define(`nldd-page-footer-legal-bar`,dm);var fm=class extends o{constructor(){super(...arguments),this.width=``,this._hasBreadcrumbs=!1,this._hasMain=!1,this._hasLegalBar=!1,this._onSlotChange=e=>{let t=e.target,n=this._hasMeaningfulContent(t),r=t.getAttribute(`name`)??``;r===`breadcrumbs`?this._hasBreadcrumbs=n:r===`legal-bar`?this._hasLegalBar=n:this._hasMain=n}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`contentinfo`),this.id||=`page-footer`}_hasMeaningfulContent(e){return(e?.assignedNodes({flatten:!0})??[]).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()??``)!==``)}updated(e){let t=+!!this._hasBreadcrumbs+ +!!this._hasMain+ +!!this._hasLegalBar;if(this.toggleAttribute(`single-slot`,t===1),this.toggleAttribute(`empty`,t===0),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}}render(){return am(this)}};fm.styles=nm,lm([c({reflect:!0,converter:p(``)})],fm.prototype,`width`,void 0),lm([d()],fm.prototype,`_hasBreadcrumbs`,void 0),lm([d()],fm.prototype,`_hasMain`,void 0),lm([d()],fm.prototype,`_hasLegalBar`,void 0),fm=lm([u(`nldd-page-footer`)],fm);var pm={"components.rich-text.table-scroll-label":`Scrollbare tabel`},mm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hm=`data-nldd-managed-label`,gm=class extends o{constructor(){super(...arguments),this.color=`content`,this.spacing=`snug`,this.centered=!1,this.translations={},this.hyphens=!1}_t(e){return y(this.translations,pm,e)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(()=>this._syncTables()),this._resizeObserver.observe(this),this._mutationObserver=new MutationObserver(()=>this._syncTables()),this._mutationObserver.observe(this,{childList:!0,subtree:!0}),this._syncTables()}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver?.disconnect(),this._mutationObserver=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}updated(){for(let e of this.querySelectorAll(`table[${hm}]`))e.setAttribute(`aria-label`,this._t(`components.rich-text.table-scroll-label`))}_syncTables(){for(let e of this.querySelectorAll(`table`))e.scrollWidth>e.clientWidth?e.getAttribute(`tabindex`)!==`0`&&(e.setAttribute(`tabindex`,`0`),!e.hasAttribute(`aria-label`)&&!e.hasAttribute(`aria-labelledby`)&&!e.querySelector(`caption`)&&(e.setAttribute(`aria-label`,this._t(`components.rich-text.table-scroll-label`)),e.setAttribute(hm,``))):e.getAttribute(`tabindex`)===`0`&&(e.removeAttribute(`tabindex`),e.hasAttribute(hm)&&(e.removeAttribute(`aria-label`),e.removeAttribute(hm)))}};mm([c({reflect:!0,converter:p(`content`)})],gm.prototype,`color`,void 0),mm([c({reflect:!0,converter:p(`snug`)})],gm.prototype,`spacing`,void 0),mm([c({type:Boolean,reflect:!0})],gm.prototype,`centered`,void 0),mm([c({type:Object})],gm.prototype,`translations`,void 0),mm([c({type:Boolean,reflect:!0})],gm.prototype,`hyphens`,void 0),gm=mm([u(`nldd-rich-text`)],gm);var _m=[`badInput`,`customError`,`patternMismatch`,`rangeOverflow`,`rangeUnderflow`,`stepMismatch`,`tooLong`,`tooShort`,`typeMismatch`,`valueMissing`];function vm(e){class t extends e{constructor(...e){super(...e),this.internals=this.attachInternals(),this._customValidity=``,this.addController({hostUpdated:()=>this.commitFormValue()})}formValue(){return null}formState(){}commitFormValue(){this.internals.setFormValue(this.formValue(),this.formState()),this.commitValidity()}validationTarget(){return this.shadowRoot?.querySelector(`input, textarea, select`)??null}validationAnchor(){let e=this.validationTarget();return e&&!e.hidden?e:void 0}setCustomValidity(e){this._customValidity=e,this.commitValidity()}commitValidity(){let e=this.validationTarget(),t=this._customValidity;if(!e&&!t){this.internals.setValidity({});return}let n={},r=``;if(e&&!e.validity.valid){for(let t of _m)e.validity[t]&&(n[t]=!0);r=e.validationMessage}t&&(n.customError=!0,r=t);let i=this.validationAnchor();if(Object.keys(n).length===0){this.internals.setValidity({});return}this.internals.setValidity(n,r,i)}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,t}var ym=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: 100%;
		--_background-color: var(--semantics-input-fields-background-color);
		--_corner-radius: var(--semantics-controls-md-corner-radius);
		--_min-size: var(--semantics-controls-md-min-size);
		--_search-icon-size: var(--primitives-space-24);
		--_text-font: var(--semantics-input-fields-md-text-font);
		--_end-padding-right: calc((var(--_min-size) - var(--semantics-controls-sm-min-size)) / 2 - var(--semantics-input-fields-border-width));
		--_end-gap: var(--primitives-space-6);
		--_button-focus-z-index: 1;

		${v}
		display: block;
		width: var(--_width);
		max-width: 100%;
		min-width: 0;
		-webkit-tap-highlight-color: transparent;
	}

	:host([hidden]) {
		display: none;
	}

	:host([disabled]) {
		opacity: var(--primitives-opacity-disabled);
		pointer-events: none;
	}

	:host([size="sm"]) {
		--_corner-radius: var(--semantics-controls-sm-corner-radius);
		--_min-size: var(--semantics-controls-sm-min-size);
		--_search-icon-size: var(--primitives-space-20);
		--_text-font: var(--semantics-input-fields-sm-text-font);
		--_end-padding-right: calc((var(--_min-size) - var(--semantics-controls-xs-min-size)) / 2 - var(--semantics-input-fields-border-width));
		--_end-gap: var(--primitives-space-4);
	}


	/* # Block */

	.search-field {
		box-sizing: border-box;
		display: flex;
		position: relative;
		border: var(--semantics-input-fields-border);
		border-radius: var(--_corner-radius);
		background-color: var(--_background-color);
		width: 100%;
		min-height: var(--_min-size);
		flex-direction: row;
		align-items: center;
	}

	.search-field:has(input:-webkit-autofill),
	.search-field:has(input:autofill) {
		--_background-color: var(--semantics-input-fields-is-autofill-background-color);
	}

	.search-field:has(.search-field__input:focus-visible) {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}


	/* # Elements */

	.search-field__label {
		display: flex;
		min-width: 0;
		flex-grow: 1;
		align-self: stretch;
		flex-direction: row;
		align-items: center;
	}

	.search-field__search-icon {
		display: flex;
		margin-inline: calc((var(--_min-size) - var(--_search-icon-size)) / 2 - var(--semantics-input-fields-border-width));
		width: var(--_search-icon-size);
		height: var(--_search-icon-size);
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		color: var(--semantics-content-secondary-color);
	}

	.search-field__input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		background: transparent;
		min-width: 0;
		padding: 0;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
		align-self: stretch;
		color: var(--semantics-content-color);
		font: var(--_text-font);
		appearance: none;
	}

	.search-field__input::placeholder {
		color: var(--semantics-input-fields-placeholder-color);
	}

	.search-field__input:-webkit-autofill,
	.search-field__input:autofill,
	.search-field__input:-webkit-autofill:disabled,
	.search-field__input:autofill:disabled {
		box-shadow: 0 0 0 999px var(--_background-color) inset;
		-webkit-text-fill-color: var(--semantics-input-fields-is-autofill-content-color);
	}

	.search-field__input::-webkit-search-cancel-button {
		-webkit-appearance: none;
	}

	.search-field__input-fade {
		position: relative;
		width: 0;
		flex-shrink: 0;
		align-self: stretch;
	}

	.search-field__input-fade::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		border-radius: var(--_corner-radius);
		background: linear-gradient(90deg, color-mix(in oklch, var(--_background-color) 0%, transparent) 0%, var(--_background-color) 100%);
		pointer-events: none;
		width: var(--primitives-space-8);
	}

	.search-field__end {
		display: flex;
		position: relative;
		padding-right: var(--_end-padding-right);
		flex-shrink: 0;
		gap: var(--_end-gap);
		align-items: center;
	}

	.search-field__clear-button:focus-within,
	.search-field__search-button:focus-within {
		position: relative;
		z-index: var(--_button-focus-z-index);
	}
`;function bm(e){let t=e.size===`sm`?`xs`:`sm`,i=!!e.value||e.showSearchButton;return r`
		<div class="search-field">
			<label class="search-field__label">
				<div class="search-field__search-icon"
					aria-hidden="true"
				>
					<nldd-icon icon="search"></nldd-icon>
				</div>
				<input class="search-field__input"
					?required=${e.required}
					pattern=${e.pattern||n}
					minlength=${e.minlength??n}
					maxlength=${e.maxlength??n}
					type="search"
					.value=${e.value}
					placeholder=${e.placeholder}
					aria-label=${e.accessibleLabel||e.placeholder||n}
					?disabled=${e.disabled}
					name=${e.name||n}
					spellcheck=${e.noSpellcheck?`false`:`true`}
					@input=${e._handleInput}
					@change=${e._handleChange}
					@keydown=${e._handleKeydown}
				>
			</label>
			${i?r`
				<div class="search-field__input-fade"></div>
				<div class="search-field__end">
					${e.value?r`
						<div class="search-field__clear-button">
							<nldd-icon-button
								appearance="neutral-transparent"
								size=${t}
								icon="dismiss"
								text=${e._t(`components.search-field.clear-action`)}
								@click=${e._handleClear}
							></nldd-icon-button>
						</div>
					`:n}
					${e.showSearchButton?r`
						<div class="search-field__search-button">
							<nldd-button
								appearance="neutral-tinted"
								size=${t}
								text=${e._t(`components.search-field.search-action`)}
								@click=${e._handleSearch}
							></nldd-button>
						</div>
					`:n}
				</div>
			`:n}
		</div>
	`}var xm={"components.search-field.clear-action":`Wis zoekopdracht`,"components.search-field.search-action":`Zoek`},Sm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends et(vm(o)){constructor(){super(...arguments),this._initialValue=``,this.size=`md`,this.width=``,this.placeholder=`Zoeken`,this.accessibleLabel=``,this.showSearchButton=!1,this.translations={},this.invalid=!1,this.disabled=!1,this.name=``,this.value=``,this.required=!1,this.pattern=``,this.noSpellcheck=!1}firstUpdated(){this._initialValue=this.value}updated(e){if(e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`width`,e)?this.style.setProperty(`--_width`,e):this.style.removeProperty(`--_width`)}}formValue(){return this.value}formResetCallback(){this.value=this._initialValue}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}_t(e){return y(this.translations,xm,e)}_handleInput(e){e.stopPropagation();let t=e.target;this.value=t.value,this.commitFormValue(),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleChange(e){e.stopPropagation();let t=e.target;this.value=t.value,this.commitFormValue(),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleKeydown(e){e.key===`Enter`&&this._dispatchSearch()}_handleClear(){this.value=``,this.commitFormValue(),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:``},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:``},bubbles:!0,composed:!0})),this._input?.focus()}_handleSearch(){this._dispatchSearch()}_dispatchSearch(){this.commitFormValue(),this.dispatchEvent(new CustomEvent(`search`,{detail:{value:this.value},bubbles:!0,composed:!0}))}focus(e){this._input?.focus(e)}render(){return bm(this)}};$.styles=ym,$.isFormInput=!0,$.blocksImplicitSubmission=!0,Sm([c({reflect:!0,converter:p(`md`)})],$.prototype,`size`,void 0),Sm([c({reflect:!0,converter:p(``)})],$.prototype,`width`,void 0),Sm([f(`.search-field__input`)],$.prototype,`_input`,void 0),Sm([c({type:String})],$.prototype,`placeholder`,void 0),Sm([c({type:String,attribute:`accessible-label`})],$.prototype,`accessibleLabel`,void 0),Sm([c({type:Boolean,reflect:!0,attribute:`show-search-button`})],$.prototype,`showSearchButton`,void 0),Sm([c({type:Object})],$.prototype,`translations`,void 0),Sm([c({type:Boolean,reflect:!0})],$.prototype,`invalid`,void 0),Sm([c({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),Sm([c({reflect:!0,converter:p(``)})],$.prototype,`name`,void 0),Sm([c({type:String})],$.prototype,`value`,void 0),Sm([c({type:Boolean,reflect:!0})],$.prototype,`required`,void 0),Sm([c({type:Number,reflect:!0})],$.prototype,`minlength`,void 0),Sm([c({type:Number,reflect:!0})],$.prototype,`maxlength`,void 0),Sm([c({reflect:!0,converter:p(``)})],$.prototype,`pattern`,void 0),Sm([c({type:Boolean,reflect:!0,attribute:`no-spellcheck`})],$.prototype,`noSpellcheck`,void 0),$=Sm([u(`nldd-search-field`)],$);var Cm=a(b.smMax),wm=a(b.mdMin),Tm=a(b.mdMax),Em=a(b.lgMin),Dm=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host

	   Container queries on the section's OWN width (not the viewport): the row
	   <-> stacked switch and the padding follow the space the section is given.
	   The collapse-to-sheet is JS-driven — a ResizeObserver on the host sets
	   [collapsed] (see the .ts) — and only happens when the section is narrow AND
	   not [no-collapse]; the lg breakpoint (>= ${Em}) is the switch. */

	:host {
		container-type: inline-size;
		/* Block-padding overrides from PageSectionMixin; resolved per breakpoint
		   below (scope override -> base override -> responsive default). */
		--_padding-top: initial;
		--_padding-bottom: initial;
		--_sm-padding-top: initial;
		--_sm-padding-bottom: initial;
		--_md-padding-top: initial;
		--_md-padding-bottom: initial;
		--_lg-padding-top: initial;
		--_lg-padding-bottom: initial;
		--_max-width: var(--semantics-page-sections-body-max-width);
		/* 24px clear of the insets nldd-page publishes. 24 is the depth of a
		   sticky header's fade, so the box starts where the fade ends. */
		--_sticky-top: calc(var(--context-inset-top, 0px) + var(--primitives-space-24));
		--_sticky-bottom: calc(var(--context-inset-bottom, 0px) + var(--primitives-space-24));
		--_sidebar-width: var(--primitives-area-320);

		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}

	:host([hidden]) {
		display: none;
	}

	:host([width="full"]) {
		--_max-width: none;
	}

	/* # Growth — mirrors simple-section. The host only grows as the last
	   (visible) section in an nldd-page; the chain below (block -> body ->
	   columns -> main) is unconditional, so whatever height the host gets
	   always reaches the main column. An nldd-inline-dialog there (itself
	   flex-grow: 1) then fills and centers in the leftover space. */

	:host(:last-child),
	:host(.is-last) {
		flex-grow: 1;
	}


	/* # Block */

	.sidebar-section {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-grow: 1;
		align-items: center;

		@container (max-width: ${Cm}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
			padding-top: var(--_sm-padding-top, var(--_padding-top, var(--semantics-page-sections-sm-margin-block)));
			padding-bottom: var(--_sm-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-sm-margin-block)));
		}

		@container (min-width: ${wm}) and (max-width: ${Tm}) {
			padding-inline: var(--semantics-page-sections-md-margin-inline);
			padding-top: var(--_md-padding-top, var(--_padding-top, var(--semantics-page-sections-md-margin-block)));
			padding-bottom: var(--_md-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-md-margin-block)));
		}

		@container (min-width: ${Em}) {
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
			padding-top: var(--_lg-padding-top, var(--_padding-top, var(--semantics-page-sections-lg-margin-block)));
			padding-bottom: var(--_lg-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-lg-margin-block)));
		}
	}


	/* # Body */

	.sidebar-section__body {
		display: flex;
		width: 100%;
		max-width: var(--_max-width);
		flex-direction: column;
		flex-grow: 1;

		@container (max-width: ${Cm}) { gap: var(--semantics-page-sections-sm-gap); }
		@container (min-width: ${wm}) and (max-width: ${Tm}) { gap: var(--semantics-page-sections-md-gap); }
		@container (min-width: ${Em}) { gap: var(--semantics-page-sections-lg-gap); }
	}

	.sidebar-section__header[hidden],
	.sidebar-section__footer[hidden] {
		display: none;
	}


	/* # Columns — stacked (column) by default, two columns (row) when the section
	   is wide. Pure width switch, like the other page-sections. When collapsed the
	   aside is removed in JS (it moves to the sheet), so only the main remains;
	   with [no-collapse] the aside stays and this is the stacked fallback. */

	.sidebar-section__columns {
		display: flex;
		flex-direction: column;
		flex-grow: 1;

		@container (max-width: ${Cm}) { gap: var(--semantics-page-sections-sm-gap); }
		@container (min-width: ${wm}) and (max-width: ${Tm}) { gap: var(--semantics-page-sections-md-gap); }
		@container (min-width: ${Em}) {
			flex-direction: row;
			gap: var(--semantics-page-sections-lg-gap);
		}
	}

	/* Flex column so a growing child (the inline-dialog of an empty state) can
	   take the leftover height; flex-grow doubles as the row-mode width fill. */
	.sidebar-section__main {
		display: flex;
		min-width: 0;
		flex-direction: column;
		flex-grow: 1;
	}


	/* # Sidebar — full-width when stacked (narrow, [no-collapse]); a fixed-width
	   column beside the main when wide. */

	.sidebar-section__sidebar {
		flex-shrink: 0;

		@container (min-width: ${Em}) {
			width: var(--_sidebar-width);
			max-width: var(--_sidebar-width);
		}
	}

	/* # Box — tinted always. Sticky + scrollable only beside the main (wide); when
	   stacked it's a plain full-width tinted box above the main, so no sticky (which
	   would scroll over the main) and no viewport height cap. */

	.sidebar-section__sidebar-box {
		box-sizing: border-box;
		border-radius: var(--semantics-surfaces-corner-radius);
		background-color: var(--components-sidebar-section-sidebar-box-background-color);
		box-shadow: inset 0 0 0 var(--semantics-surfaces-border-width) var(--components-sidebar-section-sidebar-box-highlight-border-color);

		@container (min-width: ${Em}) {
			position: sticky;
			top: var(--_sticky-top);
			bottom: var(--_sticky-bottom);
			/* What the scroller shows, not what the window is: a viewport-tall cap
			   hangs out the bottom by the height of the chrome around the page. */
			max-height: calc(var(--context-scroller-height, 100dvh) - var(--_sticky-top) - var(--_sticky-bottom));
			overflow-y: auto;
		}
	}
`;function Om(e){let t=e.collapsed,i=e._resolvedSidebarLabel;return r`
		<section class="sidebar-section">
			<div class="sidebar-section__body">
				<header class="sidebar-section__header"
					hidden
				>
					<slot
						name="header"
						@slotchange=${e._onSlotChange}
					></slot>
				</header>
				<div class="sidebar-section__columns">
					${t?n:r`
						<aside class="sidebar-section__sidebar"
							aria-label=${i}
						>
							<div class="sidebar-section__sidebar-box">
								<slot name="sidebar"></slot>
							</div>
						</aside>
					`}
					<div class="sidebar-section__main">
						<slot></slot>
					</div>
				</div>
				<footer class="sidebar-section__footer"
					hidden
				>
					<slot
						name="footer"
						@slotchange=${e._onSlotChange}
					></slot>
				</footer>
			</div>
		</section>
		<nldd-sheet class="sidebar-section__sheet"
			placement="left"
			accessible-label=${i}
			@open=${e._onSheetOpen}
			@close=${e._onSheetClose}
		>
			${t?r`
				<nldd-page sticky-header>
					<slot
						name="sheet-top-title-bar"
						slot="header"
					>
						<nldd-top-title-bar
							text=${i}
							dismiss-text=${e._sheetDismissText}
						></nldd-top-title-bar>
					</slot>
					<slot name="sidebar"></slot>
				</nldd-page>
			`:n}
		</nldd-sheet>
	`}var km={"components.sidebar-section.sidebar-label":`Zijbalk`,"components.sidebar-section.sheet-dismiss-action":`Sluit`},Am=a(b.smMax),jm=a(b.mdMin),Mm=a(b.lgMin),Nm=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_width: initial;
		--_height: initial;

		/* A pane hides the back button of the bar inside it, because the menu
		   beside you is the way back. A sheet has no menu beside it, so a bar in
		   here keeps its back button even when the pane it stands in hides one. */
		--context-back-button-display: flex;

		/* contents, not block: the sheet itself is a position:fixed <dialog>, so the
		   host would only add an empty box. Left as a block it is a flex item like
		   any other, and inside a split-view pane it collects the pane's
		   ::slotted flex-grow and eats the height its siblings needed.
		   nldd-modal-dialog does the same for the same reason. */
		display: contents;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Keyframes */

	@keyframes sheet-slide-in-right {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	@keyframes sheet-slide-out-right {
		from { transform: translateX(0); }
		to { transform: translateX(100%); }
	}

	@keyframes sheet-slide-in-left {
		from { transform: translateX(-100%); }
		to { transform: translateX(0); }
	}

	@keyframes sheet-slide-out-left {
		from { transform: translateX(0); }
		to { transform: translateX(-100%); }
	}

	@keyframes sheet-slide-in-bottom {
		from { transform: translateY(100%); }
		to { transform: translateY(0); }
	}

	@keyframes sheet-slide-out-bottom {
		from { transform: translateY(0); }
		to { transform: translateY(100%); }
	}


	/* # Block */

	.sheet {
		/* Where the app's layout context ends. The sheet scrolls itself and starts
		   at its own top edge, so a page inside it keeps its own scroller and its
		   sticky header sticks to that edge instead of to a bar that stands
		   outside. See findScrollModeProvider for the other half. */
		--context-scroll-mode: nested;
		--context-inset-top: 0px;
		--context-inset-bottom: 0px;

		display: flex;
		position: fixed;
		margin: 0;
		outline: none;
		border: none;
		box-shadow: var(--semantics-overlays-box-shadow);
		background: var(--semantics-surfaces-base-background-color);
		overflow: hidden;
		padding: 0;
		flex-direction: column;

		@media (max-width: ${Am}) {
			inset: auto 0 0 0;
			border-radius: var(--semantics-overlays-corner-radius) var(--semantics-overlays-corner-radius) 0 0;
			width: 100%;
			max-width: 100%;
			max-height: calc(100dvh - var(--semantics-sheets-bottom-top-inset));
			height: var(--_height, calc(100dvh - var(--semantics-sheets-bottom-top-inset)));

			&[open] {
				animation: sheet-slide-in-bottom var(--semantics-sheets-bottom-animation-duration) var(--primitives-transition-easing-default) backwards;
			}

			&.is-closing {
				animation: sheet-slide-out-bottom var(--semantics-sheets-bottom-animation-duration) var(--primitives-transition-easing-default) both;
			}
		}

		@media (min-width: ${jm}) {
			inset: var(--semantics-overlays-inset) var(--semantics-overlays-inset) var(--semantics-overlays-inset) auto;
			border-radius: var(--semantics-overlays-corner-radius);
			width: min(var(--_width, var(--semantics-sheets-side-md-width)), calc(100vw - var(--semantics-overlays-inset) * 2));
			height: calc(100dvh - var(--semantics-overlays-inset) * 2);

			&[open] {
				animation: sheet-slide-in-right var(--semantics-sheets-side-animation-duration) var(--primitives-transition-easing-default) backwards;
			}

			&.is-closing {
				animation: sheet-slide-out-right var(--semantics-sheets-side-animation-duration) var(--primitives-transition-easing-default) both;
			}
		}

		@media (min-width: ${Mm}) {
			width: min(var(--_width, var(--semantics-sheets-side-lg-width)), calc(100vw - var(--semantics-overlays-inset) * 2));
		}
	}

	.sheet:focus-visible:not(.is-pointer-focus) {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow), var(--semantics-overlays-box-shadow);
	}

	.sheet:not([open]) {
		display: none;
	}

	.sheet::backdrop {
		background: var(--semantics-overlays-backdrop-color);
	}

	:host([placement="left"]) .sheet {
		@media (min-width: ${jm}) {
			inset: var(--semantics-overlays-inset) auto var(--semantics-overlays-inset) var(--semantics-overlays-inset);
			border-radius: var(--semantics-overlays-corner-radius);
			width: min(var(--_width, var(--semantics-sheets-side-md-width)), calc(100vw - var(--semantics-overlays-inset) * 2));
			height: calc(100dvh - var(--semantics-overlays-inset) * 2);

			&[open] {
				animation: sheet-slide-in-left var(--semantics-sheets-side-animation-duration) var(--primitives-transition-easing-default) backwards;
			}

			&.is-closing {
				animation: sheet-slide-out-left var(--semantics-sheets-side-animation-duration) var(--primitives-transition-easing-default) both;
			}
		}

		@media (min-width: ${Mm}) {
			width: min(var(--_width, var(--semantics-sheets-side-lg-width)), calc(100vw - var(--semantics-overlays-inset) * 2));
		}
	}

	:host([placement="bottom"]) .sheet {
		@media (min-width: ${jm}) {
			inset: auto 0 0 0;
			margin-inline: auto;
			border-radius: var(--semantics-overlays-corner-radius) var(--semantics-overlays-corner-radius) 0 0;
			width: calc(100% - var(--semantics-sheets-bottom-md-inline-inset));
			max-width: var(--semantics-page-sections-body-max-width);
			max-height: calc(100dvh - var(--semantics-sheets-bottom-top-inset));
			height: var(--_height, calc(100dvh - var(--semantics-sheets-bottom-top-inset)));

			&[open] {
				animation: sheet-slide-in-bottom var(--semantics-sheets-bottom-animation-duration) var(--primitives-transition-easing-default) backwards;
			}

			&.is-closing {
				animation: sheet-slide-out-bottom var(--semantics-sheets-bottom-animation-duration) var(--primitives-transition-easing-default) both;
			}
		}

		@media (min-width: ${Mm}) {
			width: calc(100% - var(--semantics-sheets-bottom-lg-inline-inset));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sheet[open],
		.sheet.is-closing {
			animation: none;
		}
	}


	/* # Elements */

	.sheet__body {
		display: flex;
		min-height: 0;
		width: 100%;
		flex-direction: column;
		flex-grow: 1;
	}

	/* Scoped to these two so other direct children keep their intrinsic height
	   instead of being stretched. */
	::slotted(nldd-page),
	::slotted(nldd-container) {
		min-height: 0;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}
`;function Pm(e){return r`
		<dialog class="sheet"
			aria-label=${e._resolvedAccessibleLabel}
			aria-modal="true"
			@pointerdown=${e._handleDialogPointerDown}
			@click=${e._handleDialogClick}
			@cancel=${e._handleCancel}
			@close=${e._handleDialogClose}
		>
			<div class="sheet__body">
				<slot></slot>
			</div>
			<!-- Inside the dialog, so it escapes the inertness a modal imposes on
			     everything outside it. Plumbing, not consumer API. -->
			<slot name="notifications"></slot>
		</dialog>
	`}function Fm(e){let t=e.querySelector(`[autofocus]`);if(!t)return!1;t.focus();let n=t.updateComplete;return n&&typeof n.then==`function`&&n.then(()=>{(!e.contains(document.activeElement)||document.activeElement===e)&&t.focus()}),!0}function Im(e){return e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`nldd-top-title-bar`)}function Lm(e,t,n){let r=!1;return e.updateComplete.then(()=>{!r&&t()&&n()}),()=>{r=!0}}var Rm=`nldd-sheet, nldd-window, nldd-modal-dialog, nldd-popover`,zm=class{constructor(e){this._host=e,this.text=``,this._observer=null,e.addController(this)}hostConnected(){this._read(),this._observer=new MutationObserver(e=>{e.some(e=>e.type===`childList`||e.target.localName===`nldd-top-title-bar`)&&this._read()}),this._observer.observe(this._host,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`text`]})}hostDisconnected(){this._observer?.disconnect(),this._observer=null}_read(){let e=[...this._host.querySelectorAll(`nldd-top-title-bar`)].find(e=>e.closest(Rm)===this._host)?.getAttribute(`text`)?.trim()??``;e!==this.text&&(this.text=e,this._host.requestUpdate())}},Bm=t({NLDDSheet:()=>Um}),Vm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hm=1e3,Um=class extends o{constructor(){super(...arguments),this.width=``,this.height=``,this.placement=`right`,this.accessibleLabel=``,this._titleBar=new zm(this),this.open=!1,this._hasWarnedLabel=!1,this._hasWarnedHeight=!1,this._closing=!1,this._cancelPendingOpen=null,this._closeFallback=0,this._pointerDownOnBackdrop=!1,this._closeEmitted=!1,this._handleDismiss=e=>{Im(e)&&(e.stopPropagation(),this.hide())}}get _resolvedAccessibleLabel(){return this.accessibleLabel||this._titleBar.text||`Venster`}updated(e){if(e.has(`open`)){let e=this._dialog;this.open&&(!e?.open||this._closing)?this.show():!this.open&&e?.open&&!this._closing&&this.hide()}if(e.has(`width`)&&(this.width?this.style.setProperty(`--_width`,this.width):this.style.removeProperty(`--_width`)),e.has(`height`)){let e=this.height;e&&e!==`full`&&CSS.supports(`height`,e)?this.style.setProperty(`--_height`,e):this.style.removeProperty(`--_height`)}}get _dialog(){return this.shadowRoot?.querySelector(`dialog`)??null}connectedCallback(){super.connectedCallback(),this.style.containerType=`inline-size`,this.style.containerName=`layout-container`,this.addEventListener(`dismiss`,this._handleDismiss)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`dismiss`,this._handleDismiss)}show(){let e=this._dialog;if(!e){this._cancelPendingOpen?.(),this._cancelPendingOpen=Lm(this,()=>this._dialog,()=>this.show());return}this._cancelPendingOpen?.(),this._cancelPendingOpen=null,this._closeEmitted=!1,this._closing?(window.clearTimeout(this._closeFallback),this._closing=!1,e.classList.remove(`is-closing`)):e.showModal(),this.open=!0,this._manageFocus(),this.dispatchEvent(new CustomEvent(`open`,{bubbles:!0,composed:!0}))}_manageFocus(){if(Fm(this))return;let e=this._dialog;e&&(e.classList.toggle(`is-pointer-focus`,pe()),e.focus())}hide(){this._cancelPendingOpen?.(),this._cancelPendingOpen=null;let e=this._dialog;if(!e||!e.open||this._closing)return;this.open=!1,this._closing=!0,e.classList.add(`is-closing`);let t=()=>{this._closing&&(window.clearTimeout(this._closeFallback),e.classList.remove(`is-closing`),this._closing=!1,e.close(),this._emitClose())};e.addEventListener(`animationend`,t,{once:!0}),requestAnimationFrame(()=>{this._closing&&getComputedStyle(e).animationName===`none`&&t()}),this._closeFallback=window.setTimeout(t,Hm)}_handleDialogPointerDown(e){this._pointerDownOnBackdrop=e.target===this._dialog}_handleDialogClick(e){e.target===this._dialog&&this._pointerDownOnBackdrop&&this.hide()}_emitClose(){this.open=!1,!this._closeEmitted&&(this._closeEmitted=!0,this.dispatchEvent(new CustomEvent(`close`,{bubbles:!1,composed:!0})))}_handleDialogClose(e){e.target===this._dialog&&(this._closing=!1,this._dialog?.classList.remove(`is-closing`),this._emitClose())}_handleCancel(e){e.preventDefault(),this.hide()}render(){return Pm(this)}};Um.styles=Nm,Vm([c({type:String,reflect:!0})],Um.prototype,`width`,void 0),Vm([c({type:String,reflect:!0})],Um.prototype,`height`,void 0),Vm([c({reflect:!0,converter:p(`right`)})],Um.prototype,`placement`,void 0),Vm([c({type:String,attribute:`accessible-label`})],Um.prototype,`accessibleLabel`,void 0),Vm([c({type:Boolean,reflect:!0})],Um.prototype,`open`,void 0),Um=Vm([u(`nldd-sheet`)],Um);var Wm=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		${v}
		display: block;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.top-title-bar {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		padding-inline: var(--primitives-space-6);
		flex-direction: row;
		align-items: center;
	}


	/* # Elements */

	.top-title-bar__start {
		display: flex;
		min-width: 0;
		flex-direction: row;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
		align-items: center;
	}

	.top-title-bar__end {
		display: flex;
		margin-top: var(--primitives-space-6);
		flex-direction: row;
		flex-grow: 0;
		flex-shrink: 0;
		align-items: center;
	}

	.top-title-bar__end[hidden] {
		display: none;
	}

	.top-title-bar__back-button {
		display: var(--context-back-button-display, flex);
		margin-top: var(--primitives-space-6);
		min-width: 0;
		flex-direction: row;
		align-items: center;
	}

	.top-title-bar__text-back-button {
		display: flex;
		min-width: 0;
	}

	:host(.is-compact) .top-title-bar__text-back-button {
		display: none;
	}

	.top-title-bar__icon-back-button {
		display: none;
	}

	:host(.is-compact) .top-title-bar__icon-back-button {
		display: flex;
	}

	.top-title-bar__divider {
		display: none;
		background-color: var(--components-top-title-bar-divider-color);
		width: var(--semantics-dividers-thickness);
		height: var(--primitives-space-24);
		flex-shrink: 0;
	}

	:host(.is-compact) .top-title-bar__divider {
		display: block;
	}

	.top-title-bar__title-group {
		display: none;
		margin-top: var(--primitives-space-6);
		min-width: 0;
		min-height: var(--semantics-controls-md-min-size);
		overflow: hidden;
		padding-inline: var(--primitives-space-10);
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 1;
		justify-content: center;
	}

	:host(.is-compact) .top-title-bar__title-group {
		display: flex;
	}

	.top-title-bar__title {
		margin: 0;
		overflow: hidden;
		color: var(--semantics-content-color);
		font: var(--primitives-font-body-lg-semi-bold-flat);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top-title-bar__title:has(+ .top-title-bar__supporting-text) {
		font: var(--primitives-font-body-md-semi-bold-flat);
	}

	@media (forced-colors: active) {
		.top-title-bar__title {
			color: CanvasText;
		}
	}

	.top-title-bar__supporting-text {
		margin: 0;
		overflow: hidden;
		color: var(--semantics-content-secondary-color);
		font: var(--primitives-font-body-xxs-regular-flat);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top-title-bar__dismiss-button {
		display: var(--context-dismiss-button-display, block);
	}
`,Gm={1:m(`h1`),2:m(`h2`),3:m(`h3`),4:m(`h4`),5:m(`h5`),6:m(`h6`)};function Km(e){let t=!!e.backText,i=Gm[e.headingLevel]??Gm[1];return r`
		<div class="top-title-bar">
			<div class="top-title-bar__start">
				${t?r`
					<div class="top-title-bar__back-button">
						<div class="top-title-bar__text-back-button">
							<nldd-button
								appearance="accent-transparent"
								start-icon="chevron-left"
								text=${e.backText}
								href=${e.backHref||n}
								single-line
								@click=${e._handleBack}
							></nldd-button>
						</div>
						<div class="top-title-bar__icon-back-button">
							<nldd-icon-button
								appearance="accent-transparent"
								icon="chevron-left"
								text=${e.backText}
								accessible-label=${e.backText||n}
								href=${e.backHref||n}
								@click=${e._handleBack}
							></nldd-icon-button>
						</div>
						<div class="top-title-bar__divider"></div>
					</div>
				`:n}
				<div class="top-title-bar__title-group"
					aria-hidden=${e._hasAnchor?`true`:n}
				>
					${h`<${i} class="top-title-bar__title">${e.text}</${i}>`}
					${e.supportingText?r`
						<p class="top-title-bar__supporting-text">${e.supportingText}</p>
					`:n}
				</div>
			</div>
			<div class="top-title-bar__end"
				?hidden=${!e.dismissText&&!e._hasToolbarItems}
			>
				<slot
					name="toolbar"
					@slotchange=${e._onToolbarSlotChange}
				></slot>
				${e.dismissText?r`
					<div class="top-title-bar__dismiss-button">
						<nldd-button
							appearance="accent-transparent"
							text=${e.dismissText}
							@click=${e._handleDismiss}
						></nldd-button>
					</div>
				`:n}
			</div>
		</div>
	`}var qm=t({NLDDTopTitleBar:()=>Ym}),Jm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ym=class extends o{constructor(){super(...arguments),this.text=``,this.supportingText=``,this.headingLevel=1,this.collapseAnchor=``,this.backText=``,this.backHref=``,this.dismissText=``,this._hasToolbarItems=!1,this._pageElement=null,this._anchorElement=null,this._activeScrollTarget=null,this._scrollTargetStyleObserver=null,this._pageModeObserver=null,this._anchorLayoutObserver=null,this._anchorAppearObserver=null,this._boundOnScroll=this._onScroll.bind(this),this._onToolbarSlotChange=e=>{let t=e.target;this._hasToolbarItems=t.assignedElements().length>0}}connectedCallback(){super.connectedCallback(),this._connectPage(),this._connectAnchor(),this._updateAutoCompact()}disconnectedCallback(){super.disconnectedCallback(),this._teardownAnchor()}updated(e){e.has(`collapseAnchor`)?(this._teardownAnchor(),this.collapseAnchor&&this._connectAnchor(),this._updateAutoCompact()):e.has(`text`)&&this._updateAutoCompact()}_updateAutoCompact(){this.collapseAnchor||this.classList.toggle(`is-compact`,!!this.text)}_connectPage(){let e=this;for(;e;){if(e.tagName.toLowerCase()===`nldd-page`){this._pageElement=e;return}e=e.parentElement??(e.getRootNode()instanceof ShadowRoot?e.getRootNode().host:null)}}get _hasAnchor(){return this._anchorElement!==null}_connectAnchor(){if(!this.collapseAnchor)return;let e=this.getRootNode();if(this._anchorElement=e.getElementById?.(this.collapseAnchor)??e.querySelector(`#${this.collapseAnchor}`),!this._anchorElement){this._waitForAnchor(e);return}this._wireScrollTarget(),this._pageElement&&(this._pageModeObserver=new MutationObserver(()=>this._wireScrollTarget()),this._pageModeObserver.observe(this._pageElement,{attributes:!0,attributeFilter:[`data-scroll`]})),this._anchorLayoutObserver=new ResizeObserver(()=>this._onScroll()),this._anchorLayoutObserver.observe(this._anchorElement),this.updateComplete.then(()=>this._onScroll())}_waitForAnchor(e){this._anchorAppearObserver=new MutationObserver(()=>{(e.getElementById?.(this.collapseAnchor)??e.querySelector(`#${this.collapseAnchor}`))&&(this._anchorAppearObserver?.disconnect(),this._anchorAppearObserver=null,this._connectAnchor())}),this._anchorAppearObserver.observe(e,{childList:!0,subtree:!0})}_wireScrollTarget(){this._activeScrollTarget?.removeEventListener(`scroll`,this._boundOnScroll),this._scrollTargetStyleObserver?.disconnect(),this._scrollTargetStyleObserver=null;let e=this._pageElement;this._activeScrollTarget=e?e.scrollEventTarget:window,this._activeScrollTarget.addEventListener(`scroll`,this._boundOnScroll,{passive:!0}),this._activeScrollTarget instanceof Element&&(this._scrollTargetStyleObserver=new MutationObserver(()=>this._onScroll()),this._scrollTargetStyleObserver.observe(this._activeScrollTarget,{attributes:!0,attributeFilter:[`style`]})),this._onScroll()}_teardownAnchor(){this._activeScrollTarget?.removeEventListener(`scroll`,this._boundOnScroll),this._activeScrollTarget=null,this._anchorElement=null,this._scrollTargetStyleObserver?.disconnect(),this._scrollTargetStyleObserver=null,this._pageModeObserver?.disconnect(),this._pageModeObserver=null,this._anchorLayoutObserver?.disconnect(),this._anchorLayoutObserver=null,this._anchorAppearObserver?.disconnect(),this._anchorAppearObserver=null}_onScroll(){if(!this._anchorElement||!this._pageElement)return;let e=this._anchorElement.getBoundingClientRect();if(e.width===0&&e.height===0)return;let t=this.getBoundingClientRect().top;this.classList.toggle(`is-compact`,e.top<=t)}_handleBack(){this.backHref||this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))}_handleDismiss(){this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0}))}render(){return Km(this)}};Ym.styles=Wm,Jm([c({reflect:!0,converter:p(``)})],Ym.prototype,`text`,void 0),Jm([c({reflect:!0,attribute:`supporting-text`,converter:p(``)})],Ym.prototype,`supportingText`,void 0),Jm([c({reflect:!0,attribute:`heading-level`,converter:p(1)})],Ym.prototype,`headingLevel`,void 0),Jm([c({type:String,attribute:`collapse-anchor`})],Ym.prototype,`collapseAnchor`,void 0),Jm([c({reflect:!0,attribute:`back-text`,converter:p(``)})],Ym.prototype,`backText`,void 0),Jm([c({type:String,attribute:`back-href`})],Ym.prototype,`backHref`,void 0),Jm([c({reflect:!0,attribute:`dismiss-text`,converter:p(``)})],Ym.prototype,`dismissText`,void 0),Jm([d()],Ym.prototype,`_hasToolbarItems`,void 0),Jm([d()],Ym.prototype,`_anchorElement`,void 0),Ym=Jm([u(`nldd-top-title-bar`)],Ym);var Xm=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zm=class extends df(o){constructor(){super(...arguments),this.width=``,this.sidebarLabel=``,this.translations={},this.noCollapse=!1,this.stickyTop=``,this.stickyBottom=``,this.collapsed=!1,this._lgMin=parseInt(b.lgMin,10),this._hasMeasured=!1,this._sheetOpen=!1,this._onResize=e=>{let t=e[0],n=t.contentBoxSize?.[0]?.inlineSize??t.contentRect.width,r=this._hasMeasured;this._hasMeasured=!0,this._applyCollapsed(n,r)},this._onSheetOpen=()=>{this._sheetOpen=!0},this._onSheetClose=()=>{this._sheetOpen=!1}}get _resolvedSidebarLabel(){return this.sidebarLabel||this._t(`components.sidebar-section.sidebar-label`)}get _sheetDismissText(){return this._t(`components.sidebar-section.sheet-dismiss-action`)}_t(e){return y(this.translations,km,e)}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(this._onResize),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect(),this._ro=void 0,this._hasMeasured=!1}firstUpdated(){this._applyCollapsed(this.clientWidth,!1)}_applyCollapsed(e,t){let n=e<this._lgMin&&!this.noCollapse;n!==this.collapsed&&(this.collapsed=n,t&&this.dispatchEvent(new CustomEvent(`collapse-change`,{detail:{collapsed:n},bubbles:!0,composed:!0})))}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}e.has(`stickyTop`)&&this._applyInset(`--_sticky-top`,this.stickyTop),e.has(`stickyBottom`)&&this._applyInset(`--_sticky-bottom`,this.stickyBottom),e.has(`noCollapse`)&&this._applyCollapsed(this.clientWidth,!1),e.has(`collapsed`)&&!this.collapsed&&this._sheet?.hide()}_applyInset(e,t){t&&CSS.supports(`top`,t)?this.style.setProperty(e,t):this.style.removeProperty(e)}show(){this.collapsed&&this._sheet?.show()}hide(){this._sheet?.hide()}toggle(){this.collapsed&&(this._sheetOpen?this._sheet?.hide():this._sheet?.show())}render(){return Om(this)}};Zm.styles=Dm,Xm([c({type:String,reflect:!0})],Zm.prototype,`width`,void 0),Xm([c({type:String,attribute:`sidebar-label`})],Zm.prototype,`sidebarLabel`,void 0),Xm([c({type:Object})],Zm.prototype,`translations`,void 0),Xm([c({type:Boolean,reflect:!0,attribute:`no-collapse`})],Zm.prototype,`noCollapse`,void 0),Xm([c({type:String,reflect:!0,attribute:`sticky-top`})],Zm.prototype,`stickyTop`,void 0),Xm([c({type:String,reflect:!0,attribute:`sticky-bottom`})],Zm.prototype,`stickyBottom`,void 0),Xm([c({type:Boolean,reflect:!0})],Zm.prototype,`collapsed`,void 0),Xm([f(`.sidebar-section__sheet`)],Zm.prototype,`_sheet`,void 0),Zm=Xm([u(`nldd-sidebar-section`)],Zm);var Qm=a(b.smMax),$m=a(b.mdMin),eh=a(b.mdMax),th=a(b.lgMin),nh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		container-type: inline-size;
		/* Block-padding overrides from PageSectionMixin; 'initial' makes the
		   var() in .simple-section fall back to the responsive default until the
		   mixin sets a value inline on the host. */
		--_padding-top: initial;
		--_padding-bottom: initial;
		--_sm-padding-top: initial;
		--_sm-padding-bottom: initial;
		--_md-padding-top: initial;
		--_md-padding-bottom: initial;
		--_lg-padding-top: initial;
		--_lg-padding-bottom: initial;
		--_max-width: var(--semantics-page-sections-body-max-width);

		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}

	:host([hidden]) {
		display: none;
	}

	:host(:last-child),
	:host(.is-last) {
		flex-grow: 1;
	}

	:host([width="full"]) {
		--_max-width: none;
	}

	/* On the main rather than the body: the body also holds the header and the
	   footer, and the children land in the main. It is a flex column, so down the
	   section is the main axis and across it is the cross axis. */
	:host([vertical-alignment="center"]) .simple-section__main {
		justify-content: center;
	}

	:host([vertical-alignment="bottom"]) .simple-section__main {
		justify-content: flex-end;
	}

	:host([horizontal-alignment="center"]) .simple-section__main {
		align-items: center;
	}

	:host([horizontal-alignment="right"]) .simple-section__main {
		align-items: flex-end;
	}


	/* # Block */

	.simple-section {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-grow: 1;
		align-items: center;


		@container (max-width: ${Qm}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
			padding-top: var(--_sm-padding-top, var(--_padding-top, var(--semantics-page-sections-sm-margin-block)));
			padding-bottom: var(--_sm-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-sm-margin-block)));
		}

		@container (min-width: ${$m}) and (max-width: ${eh}) {
			padding-inline: var(--semantics-page-sections-md-margin-inline);
			padding-top: var(--_md-padding-top, var(--_padding-top, var(--semantics-page-sections-md-margin-block)));
			padding-bottom: var(--_md-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-md-margin-block)));
		}

		@container (min-width: ${th}) {
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
			padding-top: var(--_lg-padding-top, var(--_padding-top, var(--semantics-page-sections-lg-margin-block)));
			padding-bottom: var(--_lg-padding-bottom, var(--_padding-bottom, var(--semantics-page-sections-lg-margin-block)));
		}
	}


	/* # Elements */

	.simple-section__body {
		display: flex;
		width: 100%;
		max-width: var(--_max-width);
		flex-direction: column;
		flex-grow: 1;

		@container (max-width: ${Qm}) {
			gap: var(--semantics-page-sections-sm-gap);
		}

		@container (min-width: ${$m}) and (max-width: ${eh}) {
			gap: var(--semantics-page-sections-md-gap);
		}

		@container (min-width: ${th}) {
			gap: var(--semantics-page-sections-lg-gap);
		}
	}

	.simple-section__header[hidden] {
		display: none;
	}

	.simple-section__main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.simple-section__footer[hidden] {
		display: none;
	}
`;function rh(e){return r`
		<section class="simple-section">
			<div class="simple-section__body">
				<header class="simple-section__header"
					hidden
				>
					<slot
						name="header"
						@slotchange=${e._onSlotChange}
					></slot>
				</header>
				<div class="simple-section__main">
					<slot></slot>
				</div>
				<footer class="simple-section__footer"
					hidden
				>
					<slot
						name="footer"
						@slotchange=${e._onSlotChange}
					></slot>
				</footer>
			</div>
		</section>
	`}var ih=t({NLDDSimpleSection:()=>oh}),ah=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},oh=class extends df(o){constructor(){super(...arguments),this.width=``,this.horizontalAlignment=`left`,this.verticalAlignment=`top`}updated(e){if(super.updated(e),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}}render(){return rh(this)}};oh.styles=nh,ah([c({type:String,reflect:!0})],oh.prototype,`width`,void 0),ah([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(`left`)})],oh.prototype,`horizontalAlignment`,void 0),ah([c({reflect:!0,attribute:`vertical-alignment`,converter:p(`top`)})],oh.prototype,`verticalAlignment`,void 0),oh=ah([u(`nldd-simple-section`)],oh);var sh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_z-index: 1000;
		--_box-shadow: var(--primitives-box-shadows-level-3);
		--_focus-box-shadow: inset var(--semantics-focus-ring-box-shadow);
		--_focus-outline-offset: -6px;

		${v}
		display: block;
		position: relative;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.skip-link {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		clip-path: inset(50%);
		z-index: var(--_z-index);
		border-radius: var(--semantics-controls-md-corner-radius);
		box-shadow: var(--_box-shadow);
		background-color: var(--semantics-surfaces-base-background-color);
		width: 1px;
		height: 1px;
		overflow: hidden;
		pointer-events: none;
		justify-content: center;
	}

	.skip-link:has(:focus-visible) {
		clip-path: none;
		width: auto;
		max-width: 100%;
		height: auto;
		overflow: visible;
		pointer-events: auto;
	}


	/* # Elements */

	.skip-link__control {
		display: inline-flex;
		border: none;
		border-radius: var(--semantics-controls-sm-corner-radius);
		background: none;
		min-height: var(--semantics-controls-md-min-size);
		padding: var(--primitives-space-4) var(--primitives-space-16);
		align-items: center;
		color: var(--semantics-links-color);
		font: var(--primitives-font-body-md-medium-tight);
		text-decoration: underline;
		appearance: none;
	}

	.skip-link__control:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		/* negative: keep the focus halo inside the small skip-link, not past the viewport */
		outline-offset: var(--_focus-outline-offset);
		box-shadow: var(--_focus-box-shadow);
	}
`;function ch(e){let t=sp(e.href);return r`
		<div class="skip-link">
			${t?r`
				<a class="skip-link__control"
					href=${t}
				>
					${e._text}
				</a>
			`:r`
				<button class="skip-link__control"
					type="button"
					@click=${e._handleClick}
				>
					${e._text}
				</button>
			`}
		</div>
		<slot></slot>
	`}var lh={"components.skip-link.action":`Sla over`},uh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dh=class extends re(o,lh){constructor(){super(...arguments),this.text=``,this.href=``,this._handleClick=()=>{let e=this.nextElementSibling;e&&(e.hasAttribute(`tabindex`)||(e.setAttribute(`tabindex`,`-1`),e.addEventListener(`blur`,()=>{e.removeAttribute(`tabindex`)},{once:!0})),e.focus())}}get _text(){return this.text||this._t(`components.skip-link.action`)}render(){return ch(this)}};dh.styles=sh,uh([c({reflect:!0,converter:p(``)})],dh.prototype,`text`,void 0),uh([c({type:String})],dh.prototype,`href`,void 0),dh=uh([u(`nldd-skip-link`)],dh);var fh=a(b.smMax),ph=a(b.mdMin),mh=a(b.mdMax),hh=a(b.lgMin),gh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_size: var(--primitives-space-16);

		display: block;
		width: var(--_size);
		height: var(--_size);
		flex-shrink: 0;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Direction */

	:host([direction="horizontal"]) {
		height: auto;
	}

	:host([direction="vertical"]) {
		width: auto;
	}


	/* # Size — applies at every breakpoint */

	:host([size="2"]) { --_size: var(--primitives-space-2); }
	:host([size="4"]) { --_size: var(--primitives-space-4); }
	:host([size="6"]) { --_size: var(--primitives-space-6); }
	:host([size="8"]) { --_size: var(--primitives-space-8); }
	:host([size="10"]) { --_size: var(--primitives-space-10); }
	:host([size="12"]) { --_size: var(--primitives-space-12); }
	:host([size="20"]) { --_size: var(--primitives-space-20); }
	:host([size="24"]) { --_size: var(--primitives-space-24); }
	:host([size="28"]) { --_size: var(--primitives-space-28); }
	:host([size="32"]) { --_size: var(--primitives-space-32); }
	:host([size="40"]) { --_size: var(--primitives-space-40); }
	:host([size="44"]) { --_size: var(--primitives-space-44); }
	:host([size="48"]) { --_size: var(--primitives-space-48); }
	:host([size="56"]) { --_size: var(--primitives-space-56); }
	:host([size="64"]) { --_size: var(--primitives-space-64); }
	:host([size="80"]) { --_size: var(--primitives-space-80); }
	:host([size="96"]) { --_size: var(--primitives-space-96); }

	/* ## Size: flexible — takes all remaining space in the flex parent */

	:host([size="flexible"]) {
		min-width: 0;
		min-height: 0;
		width: auto;
		height: auto;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	:host([size="flexible"][direction="horizontal"]) {
		min-height: auto;
	}

	:host([size="flexible"][direction="vertical"]) {
		min-width: auto;
	}


	/* # Per-viewport size overrides
	 *
	 * Each per-breakpoint attribute (sm-size / md-size / lg-size) sets the
	 * same --_size local var inside its respective @media query, so it wins
	 * over the base [size] selector at that breakpoint via cascade source
	 * order. If only [size] is set, --_size keeps the base value across all
	 * breakpoints.
	 */

	/* ## sm: max-width 640px */

	@media (max-width: ${fh}) {
		:host([sm-size="2"]) { --_size: var(--primitives-space-2); }
		:host([sm-size="4"]) { --_size: var(--primitives-space-4); }
		:host([sm-size="6"]) { --_size: var(--primitives-space-6); }
		:host([sm-size="8"]) { --_size: var(--primitives-space-8); }
		:host([sm-size="10"]) { --_size: var(--primitives-space-10); }
		:host([sm-size="12"]) { --_size: var(--primitives-space-12); }
		:host([sm-size="16"]) { --_size: var(--primitives-space-16); }
		:host([sm-size="20"]) { --_size: var(--primitives-space-20); }
		:host([sm-size="24"]) { --_size: var(--primitives-space-24); }
		:host([sm-size="28"]) { --_size: var(--primitives-space-28); }
		:host([sm-size="32"]) { --_size: var(--primitives-space-32); }
		:host([sm-size="40"]) { --_size: var(--primitives-space-40); }
		:host([sm-size="44"]) { --_size: var(--primitives-space-44); }
		:host([sm-size="48"]) { --_size: var(--primitives-space-48); }
		:host([sm-size="56"]) { --_size: var(--primitives-space-56); }
		:host([sm-size="64"]) { --_size: var(--primitives-space-64); }
		:host([sm-size="80"]) { --_size: var(--primitives-space-80); }
		:host([sm-size="96"]) { --_size: var(--primitives-space-96); }

		:host([sm-size="flexible"]) {
			min-width: 0;
			min-height: 0;
			width: auto;
			height: auto;
			flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 0;
		}

		:host([sm-size="flexible"][direction="horizontal"]) {
			min-height: auto;
		}

		:host([sm-size="flexible"][direction="vertical"]) {
			min-width: auto;
		}
	}

	/* ## md: 641px–1007px */

	@media (min-width: ${ph}) and (max-width: ${mh}) {
		:host([md-size="2"]) { --_size: var(--primitives-space-2); }
		:host([md-size="4"]) { --_size: var(--primitives-space-4); }
		:host([md-size="6"]) { --_size: var(--primitives-space-6); }
		:host([md-size="8"]) { --_size: var(--primitives-space-8); }
		:host([md-size="10"]) { --_size: var(--primitives-space-10); }
		:host([md-size="12"]) { --_size: var(--primitives-space-12); }
		:host([md-size="16"]) { --_size: var(--primitives-space-16); }
		:host([md-size="20"]) { --_size: var(--primitives-space-20); }
		:host([md-size="24"]) { --_size: var(--primitives-space-24); }
		:host([md-size="28"]) { --_size: var(--primitives-space-28); }
		:host([md-size="32"]) { --_size: var(--primitives-space-32); }
		:host([md-size="40"]) { --_size: var(--primitives-space-40); }
		:host([md-size="44"]) { --_size: var(--primitives-space-44); }
		:host([md-size="48"]) { --_size: var(--primitives-space-48); }
		:host([md-size="56"]) { --_size: var(--primitives-space-56); }
		:host([md-size="64"]) { --_size: var(--primitives-space-64); }
		:host([md-size="80"]) { --_size: var(--primitives-space-80); }
		:host([md-size="96"]) { --_size: var(--primitives-space-96); }

		:host([md-size="flexible"]) {
			min-width: 0;
			min-height: 0;
			width: auto;
			height: auto;
			flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 0;
		}

		:host([md-size="flexible"][direction="horizontal"]) {
			min-height: auto;
		}

		:host([md-size="flexible"][direction="vertical"]) {
			min-width: auto;
		}
	}

	/* ## lg: min-width 1008px */

	@media (min-width: ${hh}) {
		:host([lg-size="2"]) { --_size: var(--primitives-space-2); }
		:host([lg-size="4"]) { --_size: var(--primitives-space-4); }
		:host([lg-size="6"]) { --_size: var(--primitives-space-6); }
		:host([lg-size="8"]) { --_size: var(--primitives-space-8); }
		:host([lg-size="10"]) { --_size: var(--primitives-space-10); }
		:host([lg-size="12"]) { --_size: var(--primitives-space-12); }
		:host([lg-size="16"]) { --_size: var(--primitives-space-16); }
		:host([lg-size="20"]) { --_size: var(--primitives-space-20); }
		:host([lg-size="24"]) { --_size: var(--primitives-space-24); }
		:host([lg-size="28"]) { --_size: var(--primitives-space-28); }
		:host([lg-size="32"]) { --_size: var(--primitives-space-32); }
		:host([lg-size="40"]) { --_size: var(--primitives-space-40); }
		:host([lg-size="44"]) { --_size: var(--primitives-space-44); }
		:host([lg-size="48"]) { --_size: var(--primitives-space-48); }
		:host([lg-size="56"]) { --_size: var(--primitives-space-56); }
		:host([lg-size="64"]) { --_size: var(--primitives-space-64); }
		:host([lg-size="80"]) { --_size: var(--primitives-space-80); }
		:host([lg-size="96"]) { --_size: var(--primitives-space-96); }

		:host([lg-size="flexible"]) {
			min-width: 0;
			min-height: 0;
			width: auto;
			height: auto;
			flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 0;
		}

		:host([lg-size="flexible"][direction="horizontal"]) {
			min-height: auto;
		}

		:host([lg-size="flexible"][direction="vertical"]) {
			min-width: auto;
		}
	}
`,_h=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vh=class extends o{constructor(){super(...arguments),this.size=`16`,this.direction=`both`}};vh.styles=gh,_h([c({type:String,reflect:!0})],vh.prototype,`size`,void 0),_h([c({type:String,reflect:!0,attribute:`sm-size`})],vh.prototype,`smSize`,void 0),_h([c({type:String,reflect:!0,attribute:`md-size`})],vh.prototype,`mdSize`,void 0),_h([c({type:String,reflect:!0,attribute:`lg-size`})],vh.prototype,`lgSize`,void 0),_h([c({reflect:!0,converter:p(`both`)})],vh.prototype,`direction`,void 0),vh=_h([u(`nldd-spacer`)],vh);var yh=i`


	/* # Host */

	:host {
		--_font-size: var(--primitives-font-size-100);
		--_font-weight: var(--primitives-font-weight-body-regular);
		--_line-height: var(--primitives-line-height-snug);
		--_max-width: var(--semantics-text-max-width);
		--_color: var(--context-content-color, var(--semantics-content-color));
		--_text-align: left;

		display: block;
		max-width: var(--_max-width);
		color: var(--_color);
		text-align: var(--_text-align);
		font: var(--_font-weight) var(--_font-size) / var(--_line-height) var(--primitives-font-family-body);
		text-wrap: pretty;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Size */

	:host([size="xxs"]) {
		--_font-size: var(--primitives-font-size-70);
	}

	:host([size="xs"]) {
		--_font-size: var(--primitives-font-size-80);
	}

	:host([size="sm"]) {
		--_font-size: var(--primitives-font-size-90);
	}

	:host([size="lg"]) {
		--_font-size: var(--primitives-font-size-200);
	}


	/* # Weight */

	:host([weight="medium"]) {
		--_font-weight: var(--primitives-font-weight-body-medium);
	}

	:host([weight="bold"]) {
		--_font-weight: var(--primitives-font-weight-body-bold);
	}

	/* Not the browser's "bolder", which is relative: from medium it lands on 700
	   and from bold it asks for a weight this font does not have, so the browser
	   thickens the glyphs itself. */
	::slotted(strong),
	::slotted(b) {
		color: inherit;
		font-weight: var(--primitives-font-weight-body-bold);
	}


	/* # Line height */

	:host([line-height="flat"]) {
		--_line-height: var(--primitives-line-height-flat);
	}

	:host([line-height="tight"]) {
		--_line-height: var(--primitives-line-height-tight);
	}

	:host([line-height="loose"]) {
		--_line-height: var(--primitives-line-height-loose);
	}


	/* # Color */

	:host([color="secondary"]) {
		--_color: var(--context-content-secondary-color, var(--semantics-content-secondary-color));
	}

	:host([color="accent"]) {
		--_color: var(--semantics-content-accent-color);
	}

	:host([color="success"]) {
		--_color: var(--semantics-content-success-color);
	}

	:host([color="warning"]) {
		--_color: var(--semantics-content-warning-color);
	}

	:host([color="critical"]) {
		--_color: var(--semantics-content-critical-color);
	}

	:host([color="inherit"]) {
		--_color: inherit;
	}


	/* # Alignment */

	:host([horizontal-alignment="center"]) {
		--_text-align: center;
	}

	:host([horizontal-alignment="right"]) {
		--_text-align: right;
	}
`;function bh(){return r`
		<slot></slot>
	`}var xh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sh=class extends o{constructor(){super(...arguments),this.size=`md`,this.weight=`regular`,this.lineHeight=`snug`,this.color=`content`,this.horizontalAlignment=`left`}render(){return bh()}};Sh.styles=yh,xh([c({reflect:!0,converter:p(`md`)})],Sh.prototype,`size`,void 0),xh([c({reflect:!0,converter:p(`regular`)})],Sh.prototype,`weight`,void 0),xh([c({reflect:!0,attribute:`line-height`,converter:p(`snug`)})],Sh.prototype,`lineHeight`,void 0),xh([c({reflect:!0,converter:p(`content`)})],Sh.prototype,`color`,void 0),xh([c({reflect:!0,attribute:`horizontal-alignment`,converter:p(`left`)})],Sh.prototype,`horizontalAlignment`,void 0),Sh=xh([u(`nldd-text`)],Sh);var Ch=a(b.smMax),wh=a(b.mdMin),Th=a(b.mdMax),Eh=a(b.lgMin),Dh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-3-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-3-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-3-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-3-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-3-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-3-lg);
		}

		${v}
		display: flex;
	}

	:host([size="1"]) {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-1-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-1-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-1-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-1-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-1-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-1-lg);
		}
	}

	:host([size="2"]) {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-2-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-2-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-2-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-2-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-2-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-2-lg);
		}
	}

	:host([size="4"]) {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-4-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-4-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-4-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-4-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-4-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-4-lg);
		}
	}

	:host([size="5"]) {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-5-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-5-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-5-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-5-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-5-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-5-lg);
		}
	}

	:host([size="6"]) {
		@media (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-6-sm);
		}

		@media (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-6-md);
		}

		@media (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-6-lg);
		}

		@container layout-container (max-width: ${Ch}) {
			--_font: var(--primitives-font-display-6-sm);
		}

		@container layout-container (min-width: ${wh}) and (max-width: ${Th}) {
			--_font: var(--primitives-font-display-6-md);
		}

		@container layout-container (min-width: ${Eh}) {
			--_font: var(--primitives-font-display-6-lg);
		}
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.title {
		display: flex;
		width: 100%;
		flex-direction: row;
		gap: var(--primitives-space-12);
		align-items: center;
	}


	/* # Elements */

	.title__title-group {
		display: flex;
		min-width: 0;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
	}

	.title__overline {
		margin: 0;
		color: var(--semantics-content-secondary-color);
		font: var(--primitives-font-body-sm-regular-tight);
		overflow-wrap: anywhere;
	}

	::slotted([slot="overline"]) {
		${_}
		${v}
		margin: 0 !important;
		color: var(--semantics-content-secondary-color) !important;
		font: var(--primitives-font-body-sm-regular-tight) !important;
		overflow-wrap: anywhere !important;
	}

	/* The measure is in ch, so one value covers every size: ch scales with the
	   font, and 40 characters stays 40 characters at 18px and at 52px. */
	.title__text {
		margin: 0;
		max-width: 40ch;
		color: var(--semantics-content-color);
		font: var(--_font);
		overflow-wrap: anywhere;
		text-wrap: balance;
	}

	::slotted(:not([slot])) {
		${_}
		${v}
		margin: 0 !important;
		max-width: 40ch !important;
		color: var(--semantics-content-color) !important;
		font: var(--_font) !important;
		overflow-wrap: anywhere !important;
		text-wrap: balance !important;
	}

	.title__supporting-text {
		margin: 0;
		color: var(--semantics-content-secondary-color);
		font: var(--primitives-font-body-md-regular-tight);
		overflow-wrap: anywhere;
	}

	::slotted([slot="supporting-text"]) {
		${_}
		${v}
		margin: 0 !important;
		color: var(--semantics-content-secondary-color) !important;
		font: var(--primitives-font-body-md-regular-tight) !important;
		overflow-wrap: anywhere !important;
	}

	:host([size="5"]) .title__supporting-text,
	:host([size="6"]) .title__supporting-text {
		font: var(--primitives-font-body-sm-regular-tight);
	}

	:host([size="5"]) ::slotted([slot="supporting-text"]),
	:host([size="6"]) ::slotted([slot="supporting-text"]) {
		font: var(--primitives-font-body-sm-regular-tight) !important;
	}

	:host([color="inherit"]) .title__text {
		color: inherit;
	}

	:host([color="inherit"]) .title__overline,
	:host([color="inherit"]) .title__supporting-text {
		color: color-mix(in oklab, currentColor var(--semantics-content-secondary-opacity), transparent);
	}

	/* !important matches the hardened slotted rules above. */

	:host([color="inherit"]) ::slotted(:not([slot])) {
		color: inherit !important;
	}

	:host([color="inherit"]) ::slotted([slot="overline"]),
	:host([color="inherit"]) ::slotted([slot="supporting-text"]) {
		color: color-mix(in oklab, currentColor var(--semantics-content-secondary-opacity), transparent) !important;
	}

	.title__end {
		display: flex;
		flex-direction: row;
		flex-shrink: 0;
		align-items: center;
	}
`,Oh={1:m(`h1`),2:m(`h2`),3:m(`h3`),4:m(`h4`),5:m(`h5`),6:m(`h6`)};function kh(e){if(!e.text||e._hasDefaultSlotted)return n;let t=e.headingLevel?Oh[e.headingLevel]:void 0;return t?h`<${t} class="title__text">${e.text}</${t}>`:r`<p class="title__text">${e.text}</p>`}function Ah(e){return r`
		<div class="title">
			<div class="title__title-group">
				${e.overline&&!e._hasOverlineSlotted?r`<p class="title__overline">${e.overline}</p>`:n}
				<slot
					name="overline"
					@slotchange=${e._onSlotChange}
				></slot>
				${kh(e)}
				<slot @slotchange=${e._onSlotChange}></slot>
				${e.supportingText&&!e._hasSupportingTextSlotted?r`<p class="title__supporting-text">${e.supportingText}</p>`:n}
				<slot
					name="supporting-text"
					@slotchange=${e._onSlotChange}
				></slot>
			</div>
			<div class="title__end">
				<slot name="end"></slot>
			</div>
		</div>
	`}var jh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mh=class extends o{constructor(){super(...arguments),this.size=3,this.color=`content`,this.text=``,this.supportingText=``,this.overline=``,this.headingLevel=null,this._hasOverlineSlotted=!1,this._hasDefaultSlotted=!1,this._hasSupportingTextSlotted=!1,this._onSlotChange=e=>{let t=e.target,n=t.assignedNodes().some(e=>e.nodeType===Node.ELEMENT_NODE||(e.textContent??``).trim().length>0);t.name===`overline`?this._hasOverlineSlotted=n:t.name===`supporting-text`?this._hasSupportingTextSlotted=n:this._hasDefaultSlotted=n}}firstUpdated(){}render(){return Ah(this)}};Mh.styles=Dh,jh([c({type:Number,reflect:!0})],Mh.prototype,`size`,void 0),jh([c({reflect:!0,converter:p(`content`)})],Mh.prototype,`color`,void 0),jh([c({reflect:!0,converter:p(``)})],Mh.prototype,`text`,void 0),jh([c({reflect:!0,attribute:`supporting-text`,converter:p(``)})],Mh.prototype,`supportingText`,void 0),jh([c({reflect:!0,converter:p(``)})],Mh.prototype,`overline`,void 0),jh([c({type:Number,reflect:!0,attribute:`heading-level`})],Mh.prototype,`headingLevel`,void 0),jh([d()],Mh.prototype,`_hasOverlineSlotted`,void 0),jh([d()],Mh.prototype,`_hasDefaultSlotted`,void 0),jh([d()],Mh.prototype,`_hasSupportingTextSlotted`,void 0),Mh=jh([u(`nldd-title`)],Mh);var Nh=a(b.smMax),Ph=a(b.mdMin),Fh=a(b.mdMax),Ih=a(b.lgMin),Lh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_logo-width: var(--semantics-brand-ribbon-sm-width);
		--_logo-offset: 0px;
		--_logo-background-color: #154273;
		--_wordmark-content-color: light-dark(var(--primitives-color-reference-lintblauw), var(--primitives-color-neutral-1000));
		--_wordmark-max-width: 280px;
		--_max-width: var(--semantics-page-sections-body-max-width);

		${v}
		container-type: inline-size;
		display: block;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.top-navigation-bar {
		/* The ribbon's width, and with it everything measured against the ribbon:
		   its own height and the wordmark beside it. Here rather than on :host,
		   because a container query cannot measure the container it sits on. */
		--_logo-height: calc(var(--_logo-width) * 2);

		@container (max-width: ${Nh}) {
			--_logo-width: var(--semantics-brand-ribbon-sm-width);
		}

		@container (min-width: ${Ph}) and (max-width: ${Fh}) {
			--_logo-width: var(--semantics-brand-ribbon-md-width);
		}

		@container (min-width: ${Ih}) {
			--_logo-width: var(--semantics-brand-ribbon-lg-width);
		}

		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		/* The page-section inline margin lives on the wrapper; each bar caps to
		   the content width and centers, so bar content lines up with page
		   sections. width=full drops the cap (bars fill the margin box). */
		@container (max-width: ${Nh}) {
			padding-inline: var(--semantics-page-sections-sm-margin-inline);
		}

		@container (min-width: ${Ph}) and (max-width: ${Fh}) {
			padding-inline: var(--semantics-page-sections-md-margin-inline);
		}

		@container (min-width: ${Ih}) {
			padding-inline: var(--semantics-page-sections-lg-margin-inline);
		}
	}

	:host([width="full"]) {
		--_max-width: none;
	}


	/* # Logo bar */

	.top-navigation-bar__logo-bar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: var(--primitives-space-8);
		align-items: center;
		width: 100%;
		max-width: var(--_max-width);
	}

	/* ## Logo */

	.top-navigation-bar__logo {
		display: flex;
		width: var(--_logo-width);
		height: var(--_logo-height);
		grid-column: 2;
		align-self: start;
		align-items: center;
		justify-content: center;
	}

	/* WebKit only: Chrome paints nothing above the page and leaves the fixed
	   ::after behind, so a hard pull shows a gap between it and the logo. */
	@supports (animation-timeline: scroll()) and (font: -apple-system-body) {
		.top-navigation-bar__logo {
			position: relative;
		}

		/* The ribbon carries on above the page, seen when it is pulled down.
		   No z-index: Safari does not paint it above the page with one. */
		.top-navigation-bar__logo::before {
			content: '';
			position: absolute;
			bottom: calc(100% + var(--_logo-offset));
			left: 0;
			width: 100%;
			height: 100lvh;
			background-color: var(--_logo-background-color);
			pointer-events: none;
		}

		/* Safari only paints above the page while something fixed touches the
		   top edge. This sits behind the logo, gone as soon as the page scrolls. */
		.top-navigation-bar__logo::after {
			content: '';
			position: fixed;
			top: 0;
			z-index: -1;
			width: var(--_logo-width);
			height: var(--_logo-height);
			background-color: var(--_logo-background-color);
			pointer-events: none;
			animation: top-navigation-bar-ribbon-at-top linear both;
			animation-timeline: scroll(root);
			animation-range: 0 1px;
		}
	}

	@keyframes top-navigation-bar-ribbon-at-top {
		to {
			visibility: hidden;
		}
	}

	.top-navigation-bar__logo svg {
		width: 100%;
		height: 100%;
	}

	a.top-navigation-bar__logo {
		color: inherit;
		text-decoration: none;
	}

	a.top-navigation-bar__logo:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	/* ## Logo and wordmark */

	.top-navigation-bar__logo-and-wordmark {
		display: grid;
		grid-column: 2 / 4;
		grid-template-columns: subgrid;
		align-items: center;
	}

	.top-navigation-bar__logo-and-wordmark > .top-navigation-bar__logo {
		grid-column: 1;
	}

	.top-navigation-bar__logo-and-wordmark > .top-navigation-bar__wordmark {
		grid-column: 2;
	}

	/* The link spans the wordmark's whole track so the ribbon stays centered;
	   only the ribbon and the text take the click, not the space beside them. */
	a.top-navigation-bar__logo-and-wordmark {
		pointer-events: none;
		text-decoration: none;
	}

	a.top-navigation-bar__logo-and-wordmark > .top-navigation-bar__logo,
	a.top-navigation-bar__logo-and-wordmark .top-navigation-bar__wordmark-content > p {
		pointer-events: auto;
	}

	a.top-navigation-bar__logo-and-wordmark .top-navigation-bar__wordmark-content > p {
		width: fit-content;
	}

	a.top-navigation-bar__logo-and-wordmark:focus-visible {
		outline: none;
	}

	a.top-navigation-bar__logo-and-wordmark:focus-visible > .top-navigation-bar__logo {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	/* ## Wordmark */

	.top-navigation-bar__wordmark {
		box-sizing: border-box;
		display: flex;
		/* A grid item is at least as wide as its longest word unless told
		   otherwise, and the column it sits in is one of the two that keep the
		   ribbon centred. One unbreakable name would push the ribbon off centre
		   and the page past the screen. */
		min-width: 0;
		min-height: var(--_logo-height);
		grid-column: 3;
		flex-direction: column;
		color: var(--_wordmark-content-color);

		/* The distance the text keeps from the top edge once it outgrows the
		   ribbon. Only at the top: space under it would raise the bar for
		   nothing. The minimum gives up the same 12, so the text still centres
		   on the middle of the ribbon rather than 6px below it. */
		@container (max-width: ${Nh}) {
			align-self: start;
			min-height: calc(var(--_logo-height) - var(--primitives-space-12));
			padding-block-start: var(--primitives-space-12);
		}
	}

	.top-navigation-bar__wordmark-spacer {
		height: var(--_logo-width);
		flex-grow: 0;
		flex-shrink: 0;

		@container (max-width: ${Nh}) {
			display: none;
		}
	}

	.top-navigation-bar__wordmark-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 50%;
		max-width: var(--_wordmark-max-width);
		/* anywhere rather than break-word: only this one takes the break into
		   the min-content width, which is what the track measures. A name that
		   cannot break wraps mid-word here, because a name cut off by an
		   ellipsis cannot be read at all. */
		overflow-wrap: anywhere;

		/* Centred against the ribbon, and what does not fit grows downward: an
		   auto margin takes positive free space and never negative, so the text
		   cannot ride up past the top. Growing is the flex item's job here, and
		   an item that grows leaves nothing for the margins to centre with. */
		@container (max-width: ${Nh}) {
			flex-grow: 0;
			flex-basis: auto;
			margin-block: auto;
		}
	}

	.top-navigation-bar__wordmark-title {
		margin: 0;
		font: var(--primitives-font-body-sm-medium-flat);
		text-wrap: balance;
	}

	.top-navigation-bar__wordmark-subtitle {
		margin: 0;
		font: var(--primitives-font-body-xs-regular-flat);
		text-wrap: balance;
	}

	.top-navigation-bar__wordmark-supporting-text {
		margin: 0;
		font: var(--primitives-font-body-xxs-regular-flat);
		text-wrap: balance;
	}


	/* # Main bar */

	.top-navigation-bar__main-bar {
		display: flex;
		width: 100%;
		max-width: var(--_max-width);

		@container (max-width: ${Nh}) {
			flex-direction: column;
		}

		@container (min-width: ${Ph}) and (max-width: ${Fh}) {
			flex-direction: row;
			align-items: center;
			gap: var(--components-menu-bar-item-inline-padding);
		}

		@container (min-width: ${Ih}) {
			flex-direction: row;
			align-items: center;
			gap: var(--components-menu-bar-item-inline-padding);
		}
	}

	/* ## Title bar */

	.top-navigation-bar__website-title-bar {
		display: flex;
		align-items: center;

		@container (max-width: ${Nh}) {
			justify-content: center;
		}

		@container (min-width: ${Ph}) {
			padding-inline-end: var(--components-menu-bar-item-inline-padding);
			justify-content: flex-start;
		}
	}

	/* Without a logo above it the title is the first thing in the bar, so its
	   focus ring has nothing to sit in. Six is what that ring needs: two of
	   offset, two of outline, and the halo that follows it. */

	:host([no-logo]) .top-navigation-bar__website-title-bar {
		@container (max-width: ${Nh}) {
			padding-top: var(--primitives-space-6);
		}
	}

	/* ## Title */

	.top-navigation-bar__website-title {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		min-width: var(--semantics-controls-xs-min-size);
		min-height: var(--semantics-controls-xs-min-size);
		font: var(--components-top-navigation-bar-title-sm-font);
		color: var(--semantics-content-color);
		white-space: nowrap;

		@container (max-width: ${Nh}) {
			padding-top: var(--primitives-space-4);
		}

		@container (min-width: ${Ph}) {
			font: var(--components-top-navigation-bar-title-md-font);
		}

		@container (min-width: ${Ih}) {
			font: var(--components-top-navigation-bar-title-lg-font);
		}
	}

	a.top-navigation-bar__website-title {
		border-radius: var(--primitives-corner-radius-xxs);
		text-decoration: none;
	}

	a.top-navigation-bar__website-title:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow);
	}

	/* ## Menu bar */

	.top-navigation-bar__menu-bar {
		display: flex;
		min-width: 0;
		align-items: center;
		gap: var(--primitives-space-12);
		flex-grow: 1;
		/* Pull the menu out by the menu-bar items own inline padding so the first
		   and last item text (not its hit-area) lines up with the content edge. */
		margin-inline: calc(-1 * var(--components-menu-bar-item-inline-padding));
	}

	/* ## Menu bar start */

	.top-navigation-bar__menu-bar-start {
		display: flex;
		min-width: 0;
		align-items: center;

		@container (max-width: ${Fh}) {
			flex-grow: 0;
			flex-shrink: 0;
		}

		@container (min-width: ${Ih}) {
			flex-grow: 1;
			flex-shrink: 1;
		}
	}

	/* ## Menu bar end */

	.top-navigation-bar__menu-bar-end {
		display: flex;
		min-width: 0;
		align-items: center;

		@container (max-width: ${Fh}) {
			flex-grow: 1;
			flex-shrink: 1;
		}

		@container (min-width: ${Ih}) {
			flex-grow: 0;
			flex-shrink: 0;
		}
	}

	/* ## Global bar */

	.top-navigation-bar__global-menu-bar {
		display: none;
		min-width: 0;
		flex-grow: 1;
		flex-shrink: 1;
		@container (min-width: ${Ih}) {
			:host(.has-global-items) & {
				display: flex;
			}
		}
	}

	/* ## Menu button */

	.top-navigation-bar__menu-button {
		display: none;

		@container (max-width: ${Fh}) {
			:host(.has-global-items) & {
				display: inline-block;
			}
		}
	}

	/* ## Utility menu bar */

	.top-navigation-bar__utility-menu-bar {
		display: flex;
		min-width: 0;
		flex-grow: 1;
		flex-shrink: 1;
		justify-content: flex-end;
	}

	slot[name="utility"]::slotted(nldd-menu-bar) {
		flex-grow: 0;
	}
`,Rh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100" aria-hidden="true" focusable="false"><path d="M0 0h50v100H0z" fill="#154273"/><path d="M25.9 77.36h-.87v-2.41h.87zm3.93-10.64h-.87v-2.41h.87zM13.7 62.56c-.06 0-.51 0-.51.1 0 .09.2.04.51.1.7.11.97.46 1.46.46.45 0 .9-.3.72-.94q-.06-.13-.1-.01c-.07.29-.42.45-.8.45-.46 0-.55-.16-1.28-.16m-4.79 2.41c.08.11.9 1.17-.36 1.58q-.1.04 0 .11c.94.39 1.39-.33 1.39-.33.47 1.08-.25 1.67-.25 1.67.1.2.54.52 1.22.67.26-.14.62-.4.77-.8 0 0 .18.46.01.91 1.9.17 2.58-1.35 4.04-1.07q.06 0 .06-.07c0-.94-.57-2.65-2.38-3s-1.33-1.09-1.33-1.09c.77-.03 1.2.3 1.2.3.15-.23-.05-.48-.05-.48.07-.08.11-.4.11-.4-.86 0-1.08-.18-1.08-.18-.13-.5.22-1.23 1.5-.46.32-.28.3-.72.3-.72.09-.04.15-.2.15-.26 0-.2-1.02-.78-1.28-.85-.07-.3-.46-.75-1.66-.6-.57.08-.98-.07-.79-.4.03-.06-.07-.07-.12-.01-.13.13-.31.5.18.75.55.28.59.83.6.9 0 .12-.14.14-.17.02-.25-.93-1.53-1.13-2.28-.64.04.5.58.83.87.83.17 0 .4-.17.4-.4 0-.11.06-.1.1-.01.12.33-.37 1.01-1.1.6-.74.74-.44 1.65-.37 1.99.14.6-.16 1.2-.7.92q-.05-.05-.06.04c0 .38.5.81 1.08.48M13 61.24c-.34.38-.9.3-1.04-.34.7-.04 1.01.03 1.04.34m22.07 1.48c-.37 0-.72-.16-.79-.45-.01-.07-.08-.1-.1 0-.18.65.27.95.72.95.48 0 .76-.35 1.45-.47.31-.05.52 0 .52-.1 0-.09-.45-.09-.52-.09-.72 0-.82.16-1.28.16m7.16 1.77q0-.09-.06-.04c-.54.27-.84-.31-.7-.92.07-.34.36-1.25-.38-2-.73.42-1.22-.26-1.1-.6.04-.08.1-.1.1.02 0 .23.23.4.4.4.3 0 .83-.33.88-.83-.76-.5-2.03-.3-2.28.64-.03.12-.17.1-.16-.01 0-.08.03-.63.58-.91.5-.25.32-.62.19-.75-.06-.06-.16-.05-.13 0 .2.34-.21.49-.78.42-1.2-.16-1.6.28-1.66.6-.26.06-1.28.63-1.28.84 0 .07.06.22.16.26 0 0-.03.44.29.72 1.27-.77 1.63-.05 1.5.46 0 0-.23.18-1.09.19 0 0 .04.3.12.4 0 0-.2.24-.06.47 0 0 .44-.33 1.2-.3 0 0 .49.74-1.32 1.1-1.81.34-2.39 2.05-2.39 3q0 .06.06.06c1.47-.28 2.14 1.24 4.04 1.07-.16-.45.02-.91.02-.91.15.4.51.66.77.8.67-.15 1.12-.48 1.22-.67 0 0-.72-.6-.25-1.67 0 0 .45.72 1.38.33q.11-.07.01-.1c-1.26-.42-.44-1.48-.36-1.59.58.33 1.08-.1 1.08-.48m-4.12-3.6c-.14.64-.7.73-1.05.35.03-.31.34-.38 1.05-.34M24.7 50.22c0 .16.07.3.12.38.12.16.1.25.04.3-.05.05-.14.07-.3-.04a1 1 0 0 0-.37-.12c-.28 0-.41.18-.41.33s.13.33.4.33q.26-.01.38-.12.23-.15.3-.04c.06.05-.02.6-.08 1.04-.46.1-.67.45-.67.67 0 .54.58.86.92 1.04.35-.18.93-.5.93-1.04 0-.22-.22-.58-.67-.67a4 4 0 0 1-.09-1.04c.05-.05.14-.07.3.04q.13.1.38.12c.28 0 .41-.18.41-.33s-.13-.33-.41-.33q-.25.01-.38.12-.23.15-.3.04c-.05-.05-.07-.14.04-.3a1 1 0 0 0 .13-.38c0-.27-.18-.4-.34-.4-.15 0-.33.13-.33.4m.33 4.06a.67.67 0 1 0 0 1.33.67.67 0 0 0 0-1.33m0 6.41c2.67 0 4.18.51 4.18.51.01-1.34 0-2.1.78-1.98-.43-1.14 1.4-1.58 1.4-3.06 0-.97-.7-1.08-.9-1.08-.6 0-.5.4-1.02.4-.06 0-.13-.02-.13.02 0 .17.14.46.38.46.32 0 .32-.31.56-.31.1 0 .24.08.24.4 0 .63-.4 1.33-.9 1.87a.6.6 0 0 0-.44-.25c-.28 0-.54.3-.54.67q0 .18.08.35a1 1 0 0 1-.42.14c-.22 0-.55-.09-.55-.57 0-1.07 1.44-2.01 1.44-3.37 0-.64-.44-1.29-1.34-1.29-.97 0-.79.89-1.63.89q-.06-.01-.07.04c0 .06.15.55.58.55.47 0 .6-.8 1-.8.16 0 .4.09.4.63 0 .42-.22 1.1-.52 1.76a.6.6 0 0 0-.42-.19c-.36 0-.62.35-.62.77q0 .4.28.68c-.2.27-.42.49-.72.49-.58 0-.83-.33-.83-.69 0-.38.7-.53.7-1.13 0-.41-.26-.64-.52-.64-.28 0-.42.18-.45.18s-.17-.18-.44-.18c-.26 0-.53.23-.53.64 0 .6.7.75.7 1.13 0 .36-.25.69-.83.69-.29 0-.5-.22-.72-.5a1 1 0 0 0 .28-.67c0-.42-.25-.77-.61-.77a.6.6 0 0 0-.43.2 5 5 0 0 1-.5-1.77c0-.54.22-.63.38-.63.4 0 .54.8 1 .8.44 0 .58-.5.58-.55q0-.04-.07-.04c-.84 0-.65-.89-1.62-.89-.9 0-1.34.65-1.34 1.3 0 1.35 1.43 2.3 1.43 3.36 0 .48-.33.57-.54.57a1 1 0 0 1-.42-.14 1 1 0 0 0 .07-.35c0-.37-.25-.67-.54-.67q-.27.01-.44.25c-.49-.54-.9-1.24-.9-1.87 0-.32.15-.4.25-.4.23 0 .24.31.56.31.23 0 .38-.29.38-.46 0-.04-.07-.03-.13-.03-.52 0-.42-.39-1.03-.39-.2 0-.89.11-.89 1.08 0 1.48 1.82 1.92 1.4 3.06.77-.12.76.64.78 1.98 0 0 1.5-.5 4.17-.5m-4.89 2q-1.11.24-1.48.38c.01-.33.13-.62.42-.69.04 0 .05-.06.01-.08-.65-.43-1 .4-1 .42-.23-.02-.58.05-.58.37 0 .92-2.12 1.44-2.61 1.51.86.34 1.22 1.43 1.22 1.43a5 5 0 0 1 1.53-1.18c.17 0 .23.2.24.33q.02.06.07.02c.33-.5.17-.6.15-.75-.03-.11 0-.54.49-.5v6.2l-.25.05c-.11.02-1.02-.75-2.05-1.47-1.04-.72-1.6-.29-2.78.35-1.54.84-3.1.08-3.1.08-1.34.95-1.8 3.7-1.8 3.7-.26.12-.7.24-1.12.24-1.01 0-1.2-.62-1.2-.99 0-1.57 1.97-2.24 1.97-3.79 0-.37-.18-1.9-2.07-1.9H4.51c-.7 0-.88-.51-.98-.7-.04-.08-.11-.04-.08.02.05.13-.09.33-.09.72 0 .63.37 1 1.06 1 .31 0 .6-.08.7-.14.07-.04.1.02.07.06-.3.35-.32 1-.2 1.16q.05.05.08 0a1.7 1.7 0 0 1 1.62-1.3c1.03 0 1.02.88 1.02 1.1 0 1.25-2.21 2.18-2.21 3.9 0 1.77 1.85 2.14 2.93 1.86-.06 1.76-2.08 2.36-2.14 1.1q-.02-.1-.08 0c-.25.63-.15 1.18.63 1.35q.06.03-.02.08c-.78.5-.36 2.43-.32 3 .06.82-.76.72-.82.7q-.08-.02-.02.07c.58.71 1.3.06 1.3.06.54.17.2.63-.16.87q-.08.07.01.08c.08 0 .92.08 1.07-.59.37.44.92.28 1.03.22.16-.08.95-.36 1.02.52 0 .06.05.02.07-.01.6-.75-.04-1.2-.4-1.26a.6.6 0 0 1 .94.11q.04.08.06-.03c.05-.95-.72-1.03-1.22-.62-.02-.1-.19-.63.56-.61.02 0 .06-.03.02-.06-.58-.62-1.06-.06-1.18.07-.26.31-.9.19-.96.18.2-3.29 3.1-2.12 3.5-3.72.01-.08.05-.05.06-.02.1.39 1.1.44 1.27-.32q.02-.1-.03-.05c-.84.83-2.73-1.78-.15-3.91a3.74 3.74 0 0 1 4.92-.2c.04.26-.12.34-.22.37q-.05.03.01.07c.21.08.5.05.65-.14.47.33.07.74-.13.86q-.05.05.02.07c.43.08.79-.37.8-.62l.08.04v1.87c0 2.66 3.07 3.03 6.43 5.28 3.37-2.25 6.44-2.62 6.44-5.28v-1.87l.07-.04c.02.25.38.7.81.62q.07-.01.01-.07c-.19-.12-.6-.53-.12-.86.14.2.43.22.64.14q.08-.04.01-.07c-.1-.03-.25-.11-.21-.38.75-.6 2.72-1.6 4.92.2 2.57 2.14.68 4.75-.15 3.92q-.05-.04-.03.05c.18.76 1.16.7 1.27.32 0-.03.04-.06.06.02.4 1.6 3.3.43 3.5 3.72-.06 0-.7.13-.97-.18-.1-.13-.59-.7-1.17-.07-.04.03 0 .06.01.06.76-.02.59.51.57.61-.5-.41-1.27-.33-1.22.62q0 .1.06.03a.6.6 0 0 1 .93-.11c-.35.05-.99.51-.4 1.26.03.03.07.07.07 0 .08-.87.86-.59 1.03-.5.11.05.66.21 1.03-.23.15.67.98.6 1.06.6q.1-.02.01-.09c-.36-.24-.7-.7-.15-.87 0 0 .72.65 1.3-.06.05-.07.01-.08-.02-.07-.07.02-.89.12-.83-.7.04-.57.46-2.5-.31-3q-.1-.06-.02-.08c.78-.17.88-.72.63-1.34q-.07-.11-.09 0c-.06 1.25-2.07.65-2.13-1.1 1.07.27 2.93-.1 2.93-1.86 0-1.73-2.21-2.66-2.21-3.92 0-.2-.01-1.08 1.02-1.08.83 0 1.46.63 1.62 1.3 0 .02.05.03.07 0 .13-.17.1-.82-.2-1.17-.03-.04 0-.1.07-.06.1.06.4.15.7.15.7 0 1.06-.38 1.06-1.01 0-.4-.13-.59-.08-.72.03-.06-.05-.1-.08-.03-.1.2-.28.7-.99.7h-1.69c-1.89 0-2.06 1.54-2.06 1.91 0 1.55 1.97 2.22 1.97 3.8 0 .36-.19.98-1.2.98-.42 0-.87-.12-1.13-.23 0 0-.45-2.76-1.79-3.71 0 0-1.56.76-3.1-.08-1.19-.64-1.74-1.07-2.78-.35s-1.94 1.49-2.05 1.47l-.25-.05v-6.2c.48-.04.51.39.5.5-.04.15-.2.26.14.75q.05.04.06-.02c.02-.12.08-.33.25-.33s.9.55 1.52 1.18c0 0 .36-1.1 1.23-1.43-.5-.07-2.61-.59-2.61-1.51 0-.32-.35-.39-.58-.37-.01-.03-.36-.85-1-.42a.04.04 0 0 0 0 .08c.3.07.42.36.43.69-.62-.2-3.25-.93-6.38-.93-1.51 0-2.9.17-4.02.37v2.15h-.87zm-5.76 21.98c-.23-.1-.38-.24-.38-.55v-1.33c-.38-.13-1.43-.53-3.5-.53-1.74 0-2.28.39-2.3.53l-.47 2.53s.7-.64 3.21-.47c3.02.19 6.16 1.97 6.16.07v-1.12c-2.37 0-2.72.76-2.72.87m18.6-.87v1.12c0 1.9 3.12.12 6.14-.07 2.51-.17 3.21.47 3.21.47l-.46-2.53c-.02-.14-.56-.53-2.3-.53-2.07 0-3.12.4-3.5.53v1.33q-.02.43-.38.55c0-.11-.35-.87-2.72-.87m-7.95-1.15c4.87 0 9.81.26 10.46.99.05.06.07 0 .07-.05V81c0-.76-5.1-1.2-10.53-1.2s-10.52.44-10.52 1.2v2.57c0 .05.02.1.07.05.65-.73 5.59-.99 10.45-.99M20.7 70.47l-.49-.12-.04.06-.57-.25h.51q.07-.02.03-.06l-.44-.43.56.21q.06.01.04-.04l-.38-.55.55.37q.05.02.05-.03l-.27-.65.5.48q.05.02.05-.02l-.14-.65.37.54q.04.04.05-.01l.01-.6.24.55q.02.06.06-.01l.2-.46.01.62-.08.01-.1.74c.73-.17 1.65-1.43 2.35-1.43.84 0 1.14.98 2.68.49.4.57.53 1.08.68 1.77.6.56 1.43.37 1.43-.22 0-.8-.87-.95-.87-1.79 0-.37.26-.9.98-.9.37 0 .93.16 1.24.16.38 0 .46-.28.5-.39.04-.08.14-.06.13 0-.01.09.04.2.04.38 0 .52-.76.6-.86.53-.04-.03-.07.01-.04.03.12.1.09.41-.05.61q-.02.03-.04 0c-.08-.38-.53-.85-.92-.85-.14 0-.43.09-.43.42 0 .47.96.9.96 1.9 0 1.01-1.02 1.26-2.04 1 .04.97 1.48 1.55 1.52.86 0-.05.03-.02.04 0 .22.3.12.52-.16.63.26.12.3.62.38.93.1.45.59.2.61.19q.05-.02.03.03c-.19.47-.67.3-.67.3-.26.17.05.33.28.4q.06.01 0 .04c-.16.07-.53.18-.7-.12-.13.31-.4.3-.5.3-.2 0-.32.2-.27.45q0 .03-.03.01c-.45-.3-.2-.64-.01-.72-.03-.02-.34-.15-.47.2q-.01.06-.04.01c-.19-.51.23-.66.54-.53-.02-.08-.18-.33-.58-.25q-.03 0-.02-.03c.06-.15.26-.39.63-.15.18.11.5-.05.53-.07-.65-1.29-1.9-.2-2.18-1.22 0-.02-.03-.04-.05.02-.07.21-.62.23-.72-.2q0-.04.03-.01c.08.08.25.15.48-.18.15-.21.17-.5.17-.7 0-.78-.78-2.1-2-2.1-.78 0-1.6.3-2.22.75l.57.14a.9.9 0 0 1-1.12.77l.09-.66a1 1 0 0 0-.44.28l-.03-.01c-.1-.38.2-.57.3-.61q.03-.02 0-.02a.6.6 0 0 0-.48.26q-.01.02-.02 0c-.03-.07-.08-.26.05-.4m1.7 4.48c-.21.27-.4.01-.7.01-.27 0-.31.23-.32.32q0 .03-.02 0c-.3-.41.04-.64.24-.67-.03-.03-.33-.23-.53.04q-.02.02-.03 0c0-.53.4-.57.68-.34.05-.2-.08-.33-.3-.34q-.04 0-.02-.03.14-.14.27-.14c.29 0 .33.36.51.36.29 0 .69-.38.73-.42 0-.02-.28-.75-.23-1.2q0-.02-.02 0c-.13.07-.48.07-.48-.36q0-.06.03-.01c.15.2.4-.03.52-.17.13-.15.85-1.19 1.8-1.19.21 0 .48.12.7.27-.33.4 0 .78.24.74q.05 0 0 .03c-1.25.47-1.82.66-1.82 1.71 0 .55.2.86.52.79q.04 0 .01.02a.5.5 0 0 1-.36.19c-.27 0-.31-.15-.45-.15s-.62.28-.62.51q-.01.14.22.31v.02c-.1.02-.48.05-.56-.3m3.32-10.25c-.4-.03-.64.06-.63.19.19.2.44.18.63-.2m-1.45.97c.28-.07.58-.04.62-.03s.04.09-.01.1c-.58.07-.6.33-.98.33-.24 0-.5-.24-.4-.6q.02-.08.05 0c.04.15.27.32.72.2m-7.53 12.86c.38.5.75.03 1.26.03.24 0 .54.08.6.58q0 .04.05 0c.55-.76-.08-1.18-.44-1.23.08-.07.61-.4.96.08q.03.04.05-.01c0-.95-.71-1.02-1.23-.6-.1-.38.19-.62.55-.62q.06 0 .03-.06c-.64-.68-1.11.18-1.22.31-.25.34-1.16-.3-1.52-.67 0 0 .8-.84.8-1.61v-.14q0-.03.03-.02.12.08.3.08c.17 0 .52-.06.52-.71q0-.07-.04-.02-.16.19-.28.17c-.65 0-2-2.16-3.6-2.16-.42 0-1.2.3-1.6.73.19.11.22.35.2.52-.03.27-.24.4-.47.47q-.06.02 0 .06c.81.3 2.28.86 2.61 1.15.4.34.32.98.09 1.87-.22.85-.7.73-.87.7q-.03 0-.02.04c.21.26.47.35.68.35.42 0 .58-.26.8-.26.36 0 1.12.52 1.12.92 0 .22-.17.42-.4.57q-.01.02.01.03c.18.03.9.1 1.03-.55m17.63.55q.04 0 .01-.03c-.22-.15-.4-.35-.4-.57 0-.4.77-.92 1.13-.92.22 0 .38.26.8.26q.34.02.67-.35.02-.04-.02-.03c-.17.02-.64.14-.86-.71-.23-.89-.3-1.53.09-1.87.33-.3 1.8-.85 2.6-1.15q.07-.04 0-.06c-.22-.06-.44-.2-.47-.47-.02-.17.02-.4.21-.52a2.7 2.7 0 0 0-1.6-.73c-1.6 0-2.95 2.16-3.6 2.16q-.13.02-.28-.17-.04-.05-.04.02c0 .65.34.7.53.7q.16.01.3-.07.02-.01.02.02v.14c0 .77.8 1.6.8 1.6-.36.39-1.27 1.02-1.52.68-.11-.13-.59-.99-1.22-.3q-.04.04.03.05c.36 0 .64.24.54.61-.51-.41-1.22-.34-1.22.6q.01.06.05.02c.34-.48.88-.15.96-.08-.36.05-.99.47-.44 1.23q.03.04.05 0c.05-.5.36-.58.6-.58.5 0 .87.46 1.26-.03.14.64.85.58 1.02.55M21.45 66.61c-.05.07-.22 0-.28-.03h-.02c.04.1.2.37.45.37.1 0 .26-.07.3-.14l1.41.43q-.27.37-.31.85c-.38-.23-1.88-1.04-1.88-1.04l-.46.64c-.08.1-.45-.17-.37-.27l.35-.49c-.12-.12-.4-.05-.48-.02q-.02 0 0-.02c.04-.1.22-.4.66-.26 0-.27-.4-.18-.5-.15q-.03 0-.01-.02c.1-.12.43-.38.8-.16l.16-.22-.33-.34.2-.28.23.3 1.73-2.37c.05-.05.39-.15.52-.18.01.13.03.49-.02.55l-1.7 2.39.36.12-.2.27-.42-.2zm6.07-.39c0 .22.13.54.42.44q.03 0 .03.02c-.05.24-.48.46-.68.17-.17.37-.13.72.25.93q.03.01 0 .05a.5.5 0 0 1-.74-.19c-.31.24-.27.73-.08.9 0 0-.86.52-1.64.15-.52-.25-.94-.56-1.6-.51.09-.94.56-1.18 1.42-1.32.68-.1.77-.42.67-.66-.23-.07-.66.15-.66.15-.08-.13.04-.26.04-.26-.05-.06-.07-.23-.07-.23.48 0 .57-.1.57-.1.08-.5-.43-.56-.81-.29-.18-.16-.16-.37-.16-.37q-.08-.06-.08-.15c0-.11.57-.43.71-.47.04-.17.25-.4.85-.34.07-.16-.04-.75-.12-.9q-.02-.08.07-.05c.2.14.42.63.56.64 0 0 .68-.36.72-.34s.12.78.12.78c.1.11.62 0 .85.1q.08.06 0 .08c-.17.03-.72.26-.8.41.3.48.16 1.17.16 1.36" fill="#fff"/></svg>`;function zh(e){return r`
		<div class="top-navigation-bar__wordmark">
			<div class="top-navigation-bar__wordmark-spacer"></div>
			<div class="top-navigation-bar__wordmark-content">
				<p class="top-navigation-bar__wordmark-title">
					${e.logoTitle}
				</p>
				${e.logoSubtitle?r`
					<p class="top-navigation-bar__wordmark-subtitle">
						${e.logoSubtitle}
					</p>
				`:n}
				${e.logoSupportingText1?r`
					<p class="top-navigation-bar__wordmark-supporting-text">
						${e.logoSupportingText1}
					</p>
				`:n}
				${e.logoSupportingText2?r`
					<p class="top-navigation-bar__wordmark-supporting-text">
						${e.logoSupportingText2}
					</p>
				`:n}
			</div>
		</div>
	`}function Bh(t){let i=sp(t.logoHref),a=sp(t.websiteHref);return r`
		<div class="top-navigation-bar">
			${t.noLogo?n:r`<div class="top-navigation-bar__logo-bar">
				${t.logoTitle&&i?r`
					<a class="top-navigation-bar__logo-and-wordmark"
						href="${i}"
					>
						<div class="top-navigation-bar__logo"
							aria-hidden="true"
						>
							${e(Rh)}
						</div>
						${zh(t)}
					</a>
				`:i?r`
					<a class="top-navigation-bar__logo"
						href="${i}"
						aria-label="${t._t(`components.top-navigation-bar.logo-label`)}"
					>
						<span aria-hidden="true">${e(Rh)}</span>
					</a>
				`:r`
					<div class="top-navigation-bar__logo"
						role="img"
						aria-label="${t._t(`components.top-navigation-bar.logo-label`)}"
					>
						${e(Rh)}
					</div>
					${t.logoTitle?zh(t):n}
				`}
			</div>`}
			<div class="top-navigation-bar__main-bar">
				${t.websiteTitle?r`
					<div class="top-navigation-bar__website-title-bar">
						${a?r`
							<a class="top-navigation-bar__website-title"
								href="${a}"
							>
								${t.websiteTitle}
							</a>
						`:r`
							<span class="top-navigation-bar__website-title">
								${t.websiteTitle}
							</span>
						`}
					</div>
				`:n}
				<div class="top-navigation-bar__menu-bar">
					<div class="top-navigation-bar__menu-bar-start">
						${t._hasBackButton?r`
							<div class="top-navigation-bar__back-button">
								<nldd-menu-bar-item
									icon="chevron-left"
									text="${t._backText}"
									href=${t.backHref||n}
									accessible-label="${t._backText}"
									@click=${t._handleBackClick}
								></nldd-menu-bar-item>
							</div>
						`:n}
						<div class="top-navigation-bar__menu-button">
							<nldd-menu-bar-item
								icon="menu"
								text="${t._menuText}"
								haspopup="dialog"
								@click=${t._onMenuButtonClick}
							></nldd-menu-bar-item>
						</div>
						<div class="top-navigation-bar__global-menu-bar">
							<slot
								name="global"
								@slotchange=${t._onGlobalSlotChange}
							></slot>
						</div>
					</div>
					<div class="top-navigation-bar__menu-bar-end">
						<div class="top-navigation-bar__utility-menu-bar">
							<slot
								name="utility"
								@slotchange=${t._onUtilitySlotChange}
							></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	`}var Vh={"components.top-navigation-bar.global-menu-bar-label":`Hoofdnavigatie`,"components.top-navigation-bar.back-action":`Terug`,"components.top-navigation-bar.menu-action":`Menu`,"components.top-navigation-bar.logo-label":`Rijkswapen - Rijksoverheid`,"components.top-navigation-bar.utility-menu-bar-label":`Hulplinks`,"components.top-navigation-bar.menu-sheet-dismiss-action":`Sluit`},Hh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uh=class extends re(o,Vh){constructor(){super(...arguments),this.websiteTitle=``,this.noLogo=!1,this.width=``,this.logoTitle=``,this.logoSubtitle=``,this.logoSupportingText1=``,this.logoSupportingText2=``,this.logoHref=``,this.websiteHref=``,this.backHref=``,this.backText=``,this._globalMenuSheet=null,this._globalMenuSheetList=null,this._globalMenuSheetTitleBar=null,this._sheetStack=[],this._resizeObserver=null,this._compactRAF=null,this._setupRAF=null,this._appliedMenuBarLabels=new WeakMap,this._appliedTexts=null,this._syncLogoOffset=()=>{if(window.scrollY>0)return;let e=this.shadowRoot?.querySelector(`.top-navigation-bar__logo`);if(!e)return;let t=Math.max(0,Math.round(e.getBoundingClientRect().top+window.scrollY));this.style.setProperty(`--_logo-offset`,`${t}px`)},this._handleItemSelect=e=>{let t=e.detail;if(!t?.item)return;let n=this._getSlottedItems(this._globalSlot);if(!n.includes(t.item))return;let r=new CustomEvent(`itemselect`,{bubbles:!0,composed:!0,cancelable:!0,detail:t});this.dispatchEvent(r),r.defaultPrevented||(t.item.current=!0,n.forEach(e=>{e!==t.item&&e.removeAttribute(`current`)}))},this._onGlobalSlotChange=()=>{this._syncHasGlobalItems(),this._syncSlottedMenuBarLabels(),this._syncCompactAttribute()},this._onUtilitySlotChange=()=>{this._syncSlottedMenuBarLabels(),this._syncCompactAttribute()},this._scheduleCompactUpdate=()=>{this._compactRAF&&cancelAnimationFrame(this._compactRAF),this._compactRAF=requestAnimationFrame(()=>{this._syncCompactAttribute()})},this._onSheetBack=()=>{if(this._sheetStack.length<=1)return;let e=this._sheetStack[this._sheetStack.length-1].title;this._sheetStack.pop(),this._renderSheetLevel(!0,e)},this._onMenuButtonClick=async()=>{if(!this._globalMenuSheet){try{await this._loadGlobalMenuSheetDependencies()}catch{return}if(!this.isConnected||this._globalMenuSheet)return;this._globalMenuSheet=this._createGlobalMenuSheet();let e=this._menuButton?.querySelector(`nldd-menu-bar-item`);this._globalMenuSheet.addEventListener(`open`,()=>{e&&(e.expanded=!0)}),this._globalMenuSheet.addEventListener(`close`,()=>{e&&(e.expanded=!1)})}this._resetSheetToRoot(),requestAnimationFrame(()=>{this._globalMenuSheet?.show()})},this._handleBackClick=e=>{this.backHref||(e.preventDefault(),this.dispatchEvent(new CustomEvent(`back-click`,{bubbles:!0,composed:!0})))}}_translatedTexts(){return[this._menuText,this._t(`components.top-navigation-bar.menu-sheet-dismiss-action`),this._t(`components.top-navigation-bar.global-menu-bar-label`),this._t(`components.top-navigation-bar.utility-menu-bar-label`)].join(`
`)}willUpdate(e){super.willUpdate(e);let t=this._translatedTexts();if(t!==this._appliedTexts&&(this._appliedTexts=t,this._globalMenuSheet?.setAttribute(`accessible-label`,this._menuText),this._globalMenuSheetTitleBar?.setAttribute(`dismiss-text`,this._t(`components.top-navigation-bar.menu-sheet-dismiss-action`)),this._sheetStack.length>0&&(this._sheetStack[0].title=this._menuText,this._renderSheetLevel()),this._syncSlottedMenuBarLabels()),e.has(`width`)){let e=this.width;e&&e!==`full`&&CSS.supports(`max-width`,e)?this.style.setProperty(`--_max-width`,e):this.style.removeProperty(`--_max-width`)}}_getSlottedMenuBar(e){return(e?.assignedElements({flatten:!0})??[]).find(e=>e.tagName===`NLDD-MENU-BAR`)??null}_getSlottedItems(e){let t=this._getSlottedMenuBar(e);return t?Array.from(t.querySelectorAll(`:scope > nldd-menu-bar-item`)):[]}_syncSlottedMenuBarLabels(){let e=(e,t)=>{if(!e)return;let n=e.getAttribute(`accessible-label`),r=this._appliedMenuBarLabels.get(e);if(n!==null&&n!==r){this._appliedMenuBarLabels.delete(e);return}let i=this._t(t);e.setAttribute(`accessible-label`,i),this._appliedMenuBarLabels.set(e,i)};e(this._getSlottedMenuBar(this._globalSlot),`components.top-navigation-bar.global-menu-bar-label`),e(this._getSlottedMenuBar(this._utilitySlot),`components.top-navigation-bar.utility-menu-bar-label`)}get _hasBackButton(){return!!(this.backHref||this.backText)}get _backText(){return this.backText||this._t(`components.top-navigation-bar.back-action`)}get _menuText(){return this._t(`components.top-navigation-bar.menu-action`)}connectedCallback(){super.connectedCallback(),this.addEventListener(`select`,this._handleItemSelect),window.addEventListener(`scroll`,this._syncLogoOffset,{passive:!0}),window.addEventListener(`resize`,this._syncLogoOffset,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`select`,this._handleItemSelect),window.removeEventListener(`scroll`,this._syncLogoOffset),window.removeEventListener(`resize`,this._syncLogoOffset),this._cleanupCompactDetection(),this._globalMenuSheet?.remove(),this._globalMenuSheet=null,this._globalMenuSheetList=null,this._globalMenuSheetTitleBar=null,this._sheetStack=[]}firstUpdated(){this._syncHasGlobalItems(),this._setupCompactDetection(),this._syncLogoOffset()}_setupCompactDetection(){this._cleanupCompactDetection(),this._setupRAF=requestAnimationFrame(()=>{this._setupRAF=null,this.isConnected&&(this._resizeObserver=new ResizeObserver(()=>{this._scheduleCompactUpdate()}),this._resizeObserver.observe(this),this._scheduleCompactUpdate())})}_cleanupCompactDetection(){this._setupRAF&&=(cancelAnimationFrame(this._setupRAF),null),this._compactRAF&&=(cancelAnimationFrame(this._compactRAF),null),this._resizeObserver&&=(this._resizeObserver.disconnect(),null)}_syncHasGlobalItems(){this.classList.toggle(`has-global-items`,this._getSlottedItems(this._globalSlot).length>0)}_syncCompactAttribute(){let e=this._isSmBreakpoint(),t=[this._getSlottedMenuBar(this._globalSlot),this._getSlottedMenuBar(this._utilitySlot)].filter(e=>e!==null);for(let n of t)n.toggleAttribute(`compact`,e),n.requestOverflowUpdate();let n=this.shadowRoot?.querySelectorAll(`nldd-menu-bar-item`)??[];for(let t of n)t.toggleAttribute(`compact`,e);this._syncHasGlobalItems()}_isSmBreakpoint(){let e=this.shadowRoot?.querySelector(`.top-navigation-bar`);return e?e.clientWidth<=parseInt(b.smMax):!1}async _loadGlobalMenuSheetDependencies(){await Promise.all([x(()=>Promise.resolve().then(()=>Bm),void 0),x(()=>Promise.resolve().then(()=>Oe),void 0),x(()=>Promise.resolve().then(()=>ih),void 0),x(()=>Promise.resolve().then(()=>qm),void 0),x(()=>Promise.resolve().then(()=>Hf),void 0),x(()=>Promise.resolve().then(()=>Yf),void 0),x(()=>Promise.resolve().then(()=>Dp),void 0),x(()=>Promise.resolve().then(()=>Sf),void 0),x(()=>import(`./icon.9dzV6M-I.js`).then(e=>e.t),__vite__mapDeps([4,5,6,7]))])}_createGlobalMenuSheet(){let e=document.createElement(`nldd-sheet`);e.setAttribute(`placement`,`left`),e.setAttribute(`accessible-label`,this._t(`components.top-navigation-bar.menu-action`));let t=document.createElement(`nldd-page`);t.setAttribute(`sticky-header`,``);let n=document.createElement(`nldd-top-title-bar`);n.setAttribute(`slot`,`header`),n.setAttribute(`dismiss-text`,this._t(`components.top-navigation-bar.menu-sheet-dismiss-action`)),n.addEventListener(`back`,this._onSheetBack),this._globalMenuSheetTitleBar=n,t.appendChild(n);let r=document.createElement(`nldd-simple-section`);return this._globalMenuSheetList=document.createElement(`nldd-list`),this._globalMenuSheetList.setAttribute(`appearance`,`simple`),this._globalMenuSheetList.setAttribute(`dividers`,`never`),r.appendChild(this._globalMenuSheetList),t.appendChild(r),e.appendChild(t),document.body.appendChild(e),e}_resetSheetToRoot(){this._sheetStack=[{title:this._menuText,container:this._getSlottedMenuBar(this._globalSlot)}],this._renderSheetLevel()}_readSheetEntries(e){return e?e.tagName===`NLDD-MENU-BAR`?Array.from(e.querySelectorAll(`:scope > nldd-menu-bar-item`)).map(e=>({text:e.text,href:sp(e.href)??``,selected:e.current,submenu:e.querySelector(`:scope > nldd-menu`),activate:()=>e.click()})):Array.from(e.querySelectorAll(`:scope > nldd-menu-item, :scope > nldd-menu-group > nldd-menu-item`)).map(e=>({text:e.text||e.getAttribute(`text`)||``,href:sp(e.href||``)??``,selected:e.hasAttribute(`selected`),submenu:e.querySelector(`:scope > nldd-menu`),activate:()=>e.dispatchEvent(new CustomEvent(`select`,{bubbles:!0,composed:!0}))})):[]}_renderSheetLevel(e=!1,t){let n=this._globalMenuSheetList,r=this._globalMenuSheetTitleBar;if(!n||!r||this._sheetStack.length===0)return;let i=this._sheetStack.length,a=this._sheetStack[i-1];r.setAttribute(`text`,a.title),i>1?r.setAttribute(`back-text`,this._sheetStack[i-2].title):r.removeAttribute(`back-text`),n.replaceChildren();let o=null;for(let e of this._readSheetEntries(a.container)){let r=document.createElement(`nldd-list-item`),i=document.createElement(`nldd-text-cell`);if(i.setAttribute(`text`,e.text),r.appendChild(i),e.submenu){r.setAttribute(`button`,``);let t=document.createElement(`nldd-icon-cell`);t.setAttribute(`icon`,`chevron-right-small`),r.appendChild(t);let{text:n,submenu:i}=e;r.addEventListener(`click`,()=>{this._sheetStack.push({title:n,container:i}),this._renderSheetLevel(!0)})}else if(e.href)r.setAttribute(`href`,e.href),r.addEventListener(`click`,()=>this._globalMenuSheet?.hide());else{r.setAttribute(`button`,``);let{activate:t}=e;r.addEventListener(`click`,()=>{t(),this._globalMenuSheet?.hide()})}e.selected&&r.setAttribute(`selected`,``),t!==void 0&&e.text===t&&(o=r),n.appendChild(r)}e&&requestAnimationFrame(()=>{(o??n.querySelector(`nldd-list-item`))?.focus()})}render(){return Bh(this)}};Uh.styles=Lh,Hh([c({reflect:!0,attribute:`website-title`,converter:p(``)})],Uh.prototype,`websiteTitle`,void 0),Hh([c({type:Boolean,attribute:`no-logo`,reflect:!0})],Uh.prototype,`noLogo`,void 0),Hh([c({type:String,reflect:!0})],Uh.prototype,`width`,void 0),Hh([c({reflect:!0,attribute:`logo-title`,converter:p(``)})],Uh.prototype,`logoTitle`,void 0),Hh([c({reflect:!0,attribute:`logo-subtitle`,converter:p(``)})],Uh.prototype,`logoSubtitle`,void 0),Hh([c({reflect:!0,attribute:`logo-supporting-text-1`,converter:p(``)})],Uh.prototype,`logoSupportingText1`,void 0),Hh([c({reflect:!0,attribute:`logo-supporting-text-2`,converter:p(``)})],Uh.prototype,`logoSupportingText2`,void 0),Hh([c({type:String,attribute:`logo-href`})],Uh.prototype,`logoHref`,void 0),Hh([c({type:String,attribute:`website-href`})],Uh.prototype,`websiteHref`,void 0),Hh([c({type:String,attribute:`back-href`})],Uh.prototype,`backHref`,void 0),Hh([c({reflect:!0,attribute:`back-text`,converter:p(``)})],Uh.prototype,`backText`,void 0),Hh([f(`.top-navigation-bar__menu-button`)],Uh.prototype,`_menuButton`,void 0),Hh([f(`slot[name="global"]`)],Uh.prototype,`_globalSlot`,void 0),Hh([f(`slot[name="utility"]`)],Uh.prototype,`_utilitySlot`,void 0),Uh=Hh([u(`nldd-top-navigation-bar`)],Uh);var Wh=i`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		${v}
		/* contents, not block: the window is a position:fixed <dialog>, so the host
		   would only add an empty box. As a block it is a flex item like any other
		   and grows with its siblings, taking space from them. Same reason as
		   nldd-sheet and nldd-modal-dialog. */
		display: contents;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.window {
		display: flex;
		position: fixed;
		margin: auto;
		outline: none;
		border: none;
		border-radius: var(--semantics-overlays-corner-radius);
		box-shadow: var(--semantics-overlays-box-shadow);
		background-color: var(--semantics-surfaces-base-background-color);
		width: var(--components-window-default-width);
		max-width: calc(100vw - var(--semantics-overlays-inset) * 2);
		max-height: calc(100dvh - var(--semantics-overlays-inset) * 2);
		overflow: hidden;
		padding: 0;
		flex-direction: column;
	}

	.window:not([open]) {
		display: none;
	}

	.window:focus-visible:not(.is-pointer-focus) {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow), var(--semantics-overlays-box-shadow);
	}

	.window::backdrop {
		background-color: var(--semantics-overlays-backdrop-color);
	}


	/* # Elements */

	.window__body {
		display: flex;
		min-height: 0;
		width: 100%;
		flex-direction: column;
		flex-grow: 1;
	}

	::slotted(*) {
		min-height: 0;
	}
`;function Gh(e){return r`
		<dialog class="window"
			aria-label=${e._resolvedAccessibleLabel}
			aria-modal="true"
			@pointerdown=${e._handleDialogPointerDown}
			@click=${e._handleDialogClick}
			@cancel=${e._handleCancel}
			@close=${e._handleDialogClose}
		>
			<div class="window__body">
				<slot></slot>
			</div>
			<!-- Inside the dialog, so it escapes the inertness a modal imposes on
			     everything outside it. Plumbing, not consumer API. -->
			<slot name="notifications"></slot>
		</dialog>
	`}var Kh={"components.window.accessible-label":`Venster`},qh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jh=class extends o{constructor(){super(...arguments),this.scheme=`inherit`,this.centered=!1,this.accessibleLabel=``,this.translations={},this.noLightDismiss=!1,this.open=!1,this._closing=!1,this._hasWarnedLabel=!1,this._titleBar=new zm(this),this._cancelPendingOpen=null,this._closeEmitted=!1,this._handleDialogClose=e=>{e.target===this._dialog&&(this._closing=!1,this._emitClose())},this._pointerDownOnBackdrop=!1,this._handleDialogPointerDown=e=>{this._pointerDownOnBackdrop=this._isOnBackdrop(e)},this._handleDialogClick=e=>{this.noLightDismiss||this._isOnBackdrop(e)&&this._pointerDownOnBackdrop&&this.hide()},this._handleCancel=e=>{e.preventDefault(),this.hide()},this._handleDismiss=e=>{Im(e)&&(e.stopPropagation(),this.hide())}}get _dialog(){return this.shadowRoot?.querySelector(`dialog`)??null}connectedCallback(){super.connectedCallback(),this.style.containerType=`inline-size`,this.style.containerName=`layout-container`,this.addEventListener(`dismiss`,this._handleDismiss)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`dismiss`,this._handleDismiss)}firstUpdated(){this._applyScheme()}updated(e){if(e.has(`open`)){let e=this._dialog;this.open&&!e?.open?this.show():!this.open&&e?.open&&this.hide()}this._applyPositionStyles(),e.has(`scheme`)&&this._applyScheme()}_applyScheme(){let e=this._dialog;this.scheme===`light`||this.scheme===`dark`?(this.style.colorScheme=this.scheme,e&&(e.style.colorScheme=this.scheme)):(this.style.removeProperty(`color-scheme`),e&&e.style.removeProperty(`color-scheme`))}_t(e){return y(this.translations,Kh,e)}get _resolvedAccessibleLabel(){return this.accessibleLabel||this._titleBar.text||this._t(`components.window.accessible-label`)}show(){let e=this._dialog;if(!e){this._cancelPendingOpen?.(),this._cancelPendingOpen=Lm(this,()=>this._dialog,()=>this.show());return}this._cancelPendingOpen?.(),this._cancelPendingOpen=null,this._closeEmitted=!1,e.showModal(),this.open=!0,this._applyPositionStyles(),this._manageFocus(),this.dispatchEvent(new CustomEvent(`open`,{bubbles:!0,composed:!0}))}hide(){this._cancelPendingOpen?.(),this._cancelPendingOpen=null;let e=this._dialog;e&&e.open&&!this._closing&&(this.open=!1,this._closing=!0,e.close(),this._closing=!1,this._emitClose())}_emitClose(){this.open=!1,!this._closeEmitted&&(this._closeEmitted=!0,this.dispatchEvent(new CustomEvent(`close`,{bubbles:!1,composed:!0})))}_manageFocus(){if(Fm(this))return;let e=this._dialog;e&&(e.classList.toggle(`is-pointer-focus`,pe()),e.focus())}_applyPositionStyles(){let e=this._dialog;if(!e)return;let t=this.top!==void 0||this.left!==void 0||this.right!==void 0||this.bottom!==void 0||this.centered,n=this.centered&&this.top===void 0&&this.bottom===void 0,r=this.centered&&this.left===void 0&&this.right===void 0;e.style.top=this.top??(n?`50%`:this.bottom===void 0?``:`auto`),e.style.bottom=this.bottom??(this.top===void 0?``:`auto`),e.style.left=this.left??(r?`50%`:this.right===void 0?``:`auto`),e.style.right=this.right??(this.left===void 0?``:`auto`),e.style.width=this.width??``,e.style.height=this.height??``,e.style.transform=r||n?`translate(${r?`-50%`:`0`}, ${n?`-50%`:`0`})`:``,e.style.margin=t?`0`:``}_isOnBackdrop(e){let t=this._dialog;if(!t||e.composedPath()[0]!==t)return!1;let n=t.getBoundingClientRect();return e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom}render(){return Gh(this)}};Jh.styles=Wh,qh([c({type:String,reflect:!0})],Jh.prototype,`scheme`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`width`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`height`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`top`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`right`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`bottom`,void 0),qh([c({type:String,reflect:!0})],Jh.prototype,`left`,void 0),qh([c({type:Boolean,reflect:!0})],Jh.prototype,`centered`,void 0),qh([c({type:String,attribute:`accessible-label`})],Jh.prototype,`accessibleLabel`,void 0),qh([c({type:Object})],Jh.prototype,`translations`,void 0),qh([c({type:Boolean,reflect:!0,attribute:`no-light-dismiss`})],Jh.prototype,`noLightDismiss`,void 0),qh([c({type:Boolean,reflect:!0})],Jh.prototype,`open`,void 0),Jh=qh([u(`nldd-window`)],Jh);var Yh=document.getElementById(`search-window`),Xh=document.getElementById(`search-open`),Zh=document.getElementById(`search-query`),Qh=document.getElementById(`search-results`),$h=document.getElementById(`search-output`),eg=document.getElementById(`search-status`);if(Yh&&Xh&&Zh&&Qh&&$h&&eg){let e=Qh.querySelector(`[slot="empty"]`),t=(Yh.dataset.base??`/`).replace(/\/$/,``),n,r=()=>(n??=x(()=>import(`${t}/pagefind/pagefind.js`).then(async e=>(await e.options({excerptLength:24}),e)),[]),n),i=e=>{let t=document.createElement(`p`);for(let n of new DOMParser().parseFromString(e,`text/html`).body.childNodes)if(n.nodeName===`MARK`){let e=document.createElement(`mark`);e.textContent=n.textContent,t.append(e)}else t.append(n.textContent??``);let n=document.createElement(`nldd-rich-text`);return n.setAttribute(`spacing`,`flat`),n.append(t),n},a=(e,t,n,r)=>{let a=document.createElement(`nldd-list-item`);if(a.setAttribute(`href`,e),r){let e=document.createElement(`nldd-spacer-cell`);e.setAttribute(`size`,`24`),a.append(e)}let o=document.createElement(`nldd-cell`);o.setAttribute(`width`,`full`);let s=document.createElement(`nldd-text`);return s.setAttribute(`weight`,`bold`),s.setAttribute(`size`,r?`sm`:`md`),s.textContent=t,o.append(s,i(n)),a.append(o),a},o=e=>{if(!e){eg.textContent=``,eg.hidden=!0;return}eg.hidden=!1,requestAnimationFrame(()=>eg.textContent=e)},s=()=>parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--semantics-overlays-inset`))||16,c=()=>{Yh.removeAttribute(`height`),requestAnimationFrame(()=>{let e=Yh.querySelector(`nldd-page`),t=innerHeight-Number(Yh.dataset.top??s())-s();e&&e.scrollHeight>t&&Yh.setAttribute(`height`,`${t}px`)})},l=(e,t)=>{Qh.querySelectorAll(`nldd-list-item`).forEach(e=>e.remove()),$h.hidden=e===null,e&&Qh.append(...e),o(t),c()},u=0,d=async t=>{let n=++u;if(!t.trim()){l(null,``);return}let i;try{i=await(await r()).debouncedSearch(t,{},200)}catch{e.text=`Zoeken is niet beschikbaar`,e.supportingText=`Probeer het later opnieuw.`,l([],`Zoeken is niet beschikbaar.`);return}if(i===null||n!==u)return;let o=await Promise.all(i.results.slice(0,10).map(e=>e.data()));if(n!==u)return;let s=o.flatMap(e=>{let t=e.meta.title??e.url,n=(e.sub_results??[]).filter(n=>n.url!==e.url&&n.title!==t).slice(0,3);return[a(e.url,t,e.excerpt,!1),...n.map(e=>a(e.url,e.title,e.excerpt,!0))]}),c=o.length===1?`1 pagina gevonden`:`${o.length} pagina's gevonden`;l(s,o.length?`${c}.`:`Geen resultaten.`)},f=()=>{r().catch(()=>void 0);let e=Math.max(s(),Math.round(Xh.getBoundingClientRect().top));Yh.setAttribute(`top`,`${e}px`),Yh.dataset.top=String(e),c(),Yh.show()};Xh.addEventListener(`click`,f),document.addEventListener(`keydown`,e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),f())}),Yh.addEventListener(`open`,()=>{Xh.setAttribute(`expanded`,``),Zh.focus()}),Yh.addEventListener(`close`,()=>Xh.removeAttribute(`expanded`));let p=e=>d(e.detail?.value??Zh.value??``);Zh.addEventListener(`input`,p),Zh.addEventListener(`search`,p),Zh.addEventListener(`keydown`,e=>{if(e.key!==`ArrowDown`)return;let t=Qh.querySelector(`nldd-list-item`);t&&(e.preventDefault(),setTimeout(()=>t.focus()))})}export{al as A,tn as B,L as C,tl as D,Mc as E,_n as F,bn as G,D as H,T as I,Qn as K,O as L,F as M,jr as N,rl as O,_c as P,E as R,Dc as S,Nc as T,Qt as U,Pn as V,w as W,Yl as _,nu as a,Tl as b,Jl as c,xu as d,bu as f,ql as g,du as h,lu as i,Nr as j,R as k,hu as l,pu as m,Xl as n,ku as o,yu as p,uu as r,vu as s,Ql as t,_u as u,$l as v,I as w,B as x,bl as y,Pt as z};