import"./icon.9dzV6M-I.js";import{a as e,c as t,d as n,i as r,n as i,r as a,t as o}from"./decorators.VVcZcd54.js";import{t as s}from"./reflect-non-default.D43nWX__.js";import{t as c}from"./shadow-resets.DG6wXGXQ.js";import{i as l,n as u,r as d,t as f}from"./class-map.DjzOioQh.js";import{r as p}from"./input-modality.D5atRMhA.js";var m=`nldd-menu, nldd-popover`,h=class{constructor(e,t={}){this._overlay=null,this._wasOpenOnPointerdown=!1,this.handleSlotChange=e=>{let t=e.target.assignedElements().find(e=>e.matches(m))??null;this.setOverlay(t)},this.handlePointerdown=()=>{this._wasOpenOnPointerdown=this._overlay?.matches(`:popover-open`)??!1},this._anchorFor=t.anchorFor??(()=>e),this._onChange=t.onChange}get overlay(){return this._overlay}setOverlay(e){if(e===this._overlay)return;let t=this._overlay;t&&(t.anchorElement=null),this._overlay=e,this.anchor(),this._onChange?.(e,t)}anchor(){let e=this._anchorFor();this._overlay&&e&&(this._overlay.anchorElement=e)}handleClick(e){if(!this._overlay)return!1;let t=e.detail>0&&this._wasOpenOnPointerdown;return this._wasOpenOnPointerdown=!1,!t&&!this._overlay.matches(`:popover-open`)&&this._overlay.showPopover(),!0}},g=n`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_circle-size: var(--primitives-space-32);
		--_color: var(--context-content-color, currentColor);
		--_track-opacity: 0.25;
		--_stroke-width: 2;
		--_rotation-duration: 0.8s;
		--_fade-duration: var(--primitives-transition-duration-slow);
		--_fade-easing: ease-out;
		--_pulse-duration: 2s;
		--_pulse-easing: ease-in-out;
		--_max-width: var(--primitives-area-240);
		--_gap: var(--primitives-space-4);
		--_text-font: var(--primitives-font-body-sm-regular-flat);
		--_backdrop-blur: 3px;
		--_overlay-panel-padding: var(--primitives-space-12);
		--_overlay-panel-corner-radius: var(--primitives-corner-radius-md);

		${c}
		box-sizing: border-box;
		display: flex;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: auto;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	/* Overlay mode (content in the default slot): the host wraps the content and
	   is the containing block for the absolutely-positioned indicator + backdrop,
	   so it sizes to the content instead of filling its parent. */
	:host([has-content]) {
		display: block;
		position: relative;
		height: auto;
	}

	:host([hidden]) {
		display: none;
	}


	/* ## Sizes (icon scale) */

	:host([size="16"]) { --_circle-size: var(--primitives-space-16); }
	:host([size="20"]) { --_circle-size: var(--primitives-space-20); }
	:host([size="24"]) { --_circle-size: var(--primitives-space-24); }
	:host([size="28"]) { --_circle-size: var(--primitives-space-28); }
	:host([size="40"]) { --_circle-size: var(--primitives-space-40); }
	:host([size="44"]) { --_circle-size: var(--primitives-space-44); }
	:host([size="48"]) { --_circle-size: var(--primitives-space-48); }
	:host([size="56"]) { --_circle-size: var(--primitives-space-56); }
	:host([size="64"]) { --_circle-size: var(--primitives-space-64); }
	:host([size="80"]) { --_circle-size: var(--primitives-space-80); }
	:host([size="96"]) { --_circle-size: var(--primitives-space-96); }


	/* # Block
	   Stacks the default circle + label as a centered column. width:100% +
	   max-width gives a slotted progress-bar a width to fill; the fixed-size
	   circle and the label stay centered via align-items. */

	.activity-indicator {
		/* position:relative so it paints above the absolutely-positioned backdrop
		   (both are z-index:auto; the backdrop comes first in the DOM). Hidden by
		   default; the loading host attribute fades it (and the backdrop) in and
		   out — opacity + display via transition-behavior: allow-discrete, with a
		   starting-style for the entry. */
		position: relative;
		display: none;
		opacity: 0;
		pointer-events: none;
		width: 100%;
		max-width: var(--_max-width);
		flex-direction: column;
		align-items: center;
		gap: var(--_gap);
		transition-property: opacity, display;
		transition-duration: var(--_fade-duration);
		transition-timing-function: var(--_fade-easing);
		transition-behavior: allow-discrete;
	}

	:host([loading]) .activity-indicator {
		display: flex;
		opacity: 1;
	}

	@starting-style {
		:host([loading]) .activity-indicator {
			opacity: 0;
		}
	}

	/* Overlay mode: the wrapped content flows normally; the indicator + backdrop
	   sit on top as absolute layers that fill the host. */
	.activity-indicator__content {
		display: block;
	}

	/* Overlay mode: the indicator + label sit on a small rounded base-surface
	   panel that hugs them with padding (not the full component width) so they
	   keep contrast over the dimmed content, and read in the content color
	   instead of inheriting currentColor. */
	:host([has-content]) .activity-indicator {
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: var(--_overlay-panel-corner-radius);
		background-color: var(--semantics-surfaces-base-background-color);
		width: max-content;
		max-width: calc(100% - var(--primitives-space-32));
		padding: var(--_overlay-panel-padding);
		color: var(--semantics-content-color);
		transform: translate(-50%, -50%);
	}

	/* Dimming layer (overlay mode, on by default; opt out with no-backdrop): the
	   context parent background color — fallback the base surface — at one minus
	   the disabled opacity, so the content underneath reads as inactive while
	   loading. Fades in and out with the indicator via the loading attribute. */
	.activity-indicator__backdrop {
		position: absolute;
		inset: 0;
		display: none;
		opacity: 0;
		/* Frosted dim: the parent surface — fallback base surface — as a
		   translucent fill at one minus the disabled opacity (a translucent
		   color, not element opacity, which would hide the blur), plus a blur so
		   the content behind reads as inactive. backdrop-filter degrades
		   gracefully where unsupported, leaving just the translucent fill. */
		background-color: color-mix(in oklab, var(--context-parent-background-color, var(--semantics-surfaces-base-background-color)) calc((1 - var(--primitives-opacity-disabled)) * 100%), transparent);
		-webkit-backdrop-filter: blur(var(--_backdrop-blur));
		backdrop-filter: blur(var(--_backdrop-blur));
		pointer-events: none;
		transition-property: opacity, display;
		transition-duration: var(--_fade-duration);
		transition-timing-function: var(--_fade-easing);
		transition-behavior: allow-discrete;
	}

	:host([loading]) .activity-indicator__backdrop {
		display: block;
		opacity: 1;
	}

	@starting-style {
		:host([loading]) .activity-indicator__backdrop {
			opacity: 0;
		}
	}

	/* display:contents so the default circle + label (or a slotted override)
	   are direct flex items of the block. */
	slot {
		display: contents;
	}


	/* # Elements */

	/* The whole SVG (stroke included) scales with the size, like an icon. */
	.activity-indicator__circle {
		display: block;
		width: var(--_circle-size);
		height: var(--_circle-size);
	}

	.activity-indicator__track {
		opacity: var(--_track-opacity);
		stroke: var(--_color);
		stroke-width: var(--_stroke-width);
	}

	/* Rotate only the arc inside the SVG (around the view-box center via
	   transform-origin) rather than the whole <svg> element — rotating the
	   element visibly wobbles when it sits at a sub-pixel position (next to a
	   label, or overlaid on a button). Mirrors nldd-progress-circle. */
	.activity-indicator__indicator {
		stroke: var(--_color);
		stroke-width: var(--_stroke-width);
		stroke-linecap: round;
		stroke-dasharray: 25 100;
		transform-origin: 50% 50%;
		animation: activity-indicator-rotate var(--_rotation-duration) linear infinite;
	}

	@keyframes activity-indicator-rotate {
		to { transform: rotate(360deg); }
	}

	.activity-indicator__text {
		color: currentColor;
		font: var(--_text-font);
		text-align: center;
	}

	/* show-text off (default): the label still renders as the announced
	   content of the role="status" host, but is visually hidden.
	   Standard visually-hidden recipe. */
	.activity-indicator__text--visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}


	/* # Reduced Motion */

	@media (prefers-reduced-motion: reduce) {
		.activity-indicator,
		.activity-indicator__backdrop {
			transition: none;
		}

		.activity-indicator__indicator {
			/* Drop the rotation (vestibular safety); keep the 25 / 100 arc and
			   pulse its opacity instead, mirroring nldd-progress-circle. */
			animation: activity-indicator-pulse var(--_pulse-duration) var(--_pulse-easing) infinite;
		}

		@keyframes activity-indicator-pulse {
			0%, 100% { opacity: 0.3; }
			50% { opacity: 0.7; }
		}
	}
`;function _(n){let r=n._visible&&!n.complete&&n._hasContent,i=n._hasContent&&!n.noBackdrop,a=n._accessibleName;return t`
		<div class="activity-indicator__content"
			?inert=${r}
			aria-busy=${r?`true`:`false`}
		>
			<slot @slotchange=${n._onContentSlotChange}></slot>
		</div>
		${i?t`<div class="activity-indicator__backdrop" aria-hidden="true"></div>`:e}
		<div class="activity-indicator">
			<slot name="indicator">
				<svg class="activity-indicator__circle"
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
					focusable="false"
				>
					<circle class="activity-indicator__track"
						cx="12"
						cy="12"
						r="9"
					></circle>
					<circle class="activity-indicator__indicator"
						cx="12"
						cy="12"
						r="9"
						pathLength="100"
					></circle>
				</svg>
				<span class=${f({"activity-indicator__text":!0,"activity-indicator__text--visually-hidden":!n.showText})}>${a}</span>
			</slot>
		</div>
	`}var v={"components.activity-indicator.loading-label":`Laden`},y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=1e3,x=class extends r{constructor(){super(...arguments),this.size=`32`,this.showText=!1,this.text=``,this.timing=`delay`,this.complete=!1,this.noBackdrop=!1,this.translations={},this._visible=!1,this._hasContent=!1,this._onContentSlotChange=e=>{let t=e.target;this._hasContent=t.assignedElements().length>0}}_t(e){return l(this.translations,v,e)}get _accessibleName(){return this.text||this._t(`components.activity-indicator.loading-label`)}connectedCallback(){super.connectedCallback(),this._syncAria(),this._visible=this.timing===`instant`,!this._visible&&!this.complete&&this._scheduleDelay()}willUpdate(e){e.has(`complete`)&&this._syncAria(),e.has(`timing`)&&(this._clearDelay(),this.timing===`instant`?this._visible=!0:!this._visible&&!this.complete&&this._scheduleDelay())}disconnectedCallback(){super.disconnectedCallback(),this._clearDelay()}_clearDelay(){this._delayTimeout&&=(clearTimeout(this._delayTimeout),void 0)}_scheduleDelay(){this._delayTimeout=setTimeout(()=>{this._visible=!0,this._delayTimeout=void 0},b)}_syncAria(){this.complete?this.removeAttribute(`role`):this.setAttribute(`role`,`status`)}updated(){this.toggleAttribute(`loading`,this._visible&&!this.complete),this.toggleAttribute(`has-content`,this._hasContent)}render(){return _(this)}};x.styles=g,y([i({reflect:!0,converter:s(`32`)})],x.prototype,`size`,void 0),y([i({type:Boolean,reflect:!0,attribute:`show-text`})],x.prototype,`showText`,void 0),y([i({reflect:!0,converter:s(``)})],x.prototype,`text`,void 0),y([i({reflect:!0,converter:s(`delay`)})],x.prototype,`timing`,void 0),y([i({type:Boolean,reflect:!0})],x.prototype,`complete`,void 0),y([i({type:Boolean,reflect:!0,attribute:`no-backdrop`})],x.prototype,`noBackdrop`,void 0),y([i({type:Object})],x.prototype,`translations`,void 0),y([o()],x.prototype,`_visible`,void 0),y([o()],x.prototype,`_hasContent`,void 0),x=y([a(`nldd-activity-indicator`)],x);var S=n`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_corner-radius: var(--semantics-controls-md-corner-radius);
		--_width: auto;
		--_min-size: var(--semantics-controls-md-min-size);
		--_block-padding: var(--semantics-buttons-md-is-icon-only-inline-padding);
		--_inline-padding: var(--semantics-buttons-md-is-icon-only-inline-padding);
		--_icon-size: var(--semantics-buttons-md-is-icon-only-icon-size);
		--_disclosure-icon-margin-right: calc(var(--primitives-space-2) * -1);
		--_disclosure-icon-size: var(--primitives-space-20);
		--_text-display: none;
		--_text-font: var(--primitives-font-body-xxs-medium-flat);
		--_background-color: var(--semantics-buttons-neutral-tinted-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-tinted-content-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-tinted-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-tinted-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-tinted-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-tinted-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-active-highlight-border-color);

		${c}
		/* inline-flex, not inline-block: a block container puts the control on a
		   line, and the strut's descender then grows the host with the inherited
		   line-height, so the same button is taller in body text than in a form. */
		display: inline-flex;
		position: relative;
		max-width: 100%;
		-webkit-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	:host([size="xs"]) {
		--_corner-radius: var(--semantics-controls-xs-corner-radius);
		--_min-size: var(--semantics-controls-xs-min-size);
		--_block-padding: var(--semantics-buttons-xs-is-icon-only-inline-padding);
		--_inline-padding: var(--semantics-buttons-xs-is-icon-only-inline-padding);
		--_icon-size: var(--semantics-buttons-xs-is-icon-only-icon-size);
		--_disclosure-icon-margin-right: 0;
		--_disclosure-icon-size: var(--primitives-space-16);
	}

	:host([size="sm"]) {
		--_corner-radius: var(--semantics-controls-sm-corner-radius);
		--_min-size: var(--semantics-controls-sm-min-size);
		--_block-padding: var(--semantics-buttons-sm-is-icon-only-inline-padding);
		--_inline-padding: var(--semantics-buttons-sm-is-icon-only-inline-padding);
		--_icon-size: var(--semantics-buttons-sm-is-icon-only-icon-size);
	}

	:host([size="lg"]) {
		--_corner-radius: var(--semantics-controls-lg-corner-radius);
		--_min-size: var(--semantics-controls-lg-min-size);
		--_block-padding: var(--primitives-space-8);
		--_inline-padding: var(--primitives-space-8);
		--_text-display: block;
	}

	:host([size="lg"][hide-lg-text]) {
		--_block-padding: var(--semantics-buttons-lg-is-icon-only-inline-padding);
		--_inline-padding: var(--semantics-buttons-lg-is-icon-only-inline-padding);
		--_icon-size: var(--semantics-buttons-lg-is-icon-only-icon-size);
		--_text-display: none;
	}

	:host([appearance="neutral-base"]) {
		--_background-color: var(--semantics-buttons-neutral-base-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-base-content-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-base-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-base-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-base-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-base-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-base-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-base-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-base-is-active-highlight-border-color);
	}

	:host([appearance="neutral-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-neutral-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([appearance="accent-filled"]),
	:host([appearance="primary"]) {
		--_background-color: var(--semantics-buttons-accent-filled-background-color);
		--_primary-content-color: var(--semantics-buttons-accent-filled-content-color);
		--_highlight-border-color: var(--semantics-buttons-accent-filled-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-accent-filled-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-filled-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-accent-filled-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-accent-filled-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-accent-filled-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-accent-filled-is-active-highlight-border-color);
	}

	:host([appearance="accent-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-accent-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([appearance="critical-tinted"]),
	:host([appearance="destructive"]) {
		--_background-color: var(--semantics-buttons-critical-tinted-background-color);
		--_primary-content-color: var(--semantics-buttons-critical-tinted-content-color);
		--_highlight-border-color: var(--semantics-buttons-critical-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-critical-tinted-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-tinted-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-critical-tinted-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-critical-tinted-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-critical-tinted-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-critical-tinted-is-active-highlight-border-color);
	}

	:host([appearance="critical-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-critical-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	/* The on-color variants derive from currentColor; see nldd-button for
	   the full rationale. The filled label resolves the context var here on
	   the host, with the tokens' white/black contrast flip as fallback. */

	:host([appearance="inherit-tinted"]),
	:host([expanded][appearance="inherit-tinted"]) {
		--_background-color: var(--context-button-background-color, var(--semantics-buttons-inherit-tinted-background-color));
		--_primary-content-color: var(--semantics-buttons-inherit-tinted-content-color);
		--_highlight-border-color: var(--semantics-buttons-inherit-tinted-highlight-border-color);
		--_is-hovered-background-color: var(--_background-color);
		--_is-hovered-primary-content-color: var(--_primary-content-color);
		--_is-hovered-highlight-border-color: var(--_highlight-border-color);
		--_is-active-background-color: var(--_background-color);
		--_is-active-primary-content-color: var(--_primary-content-color);
		--_is-active-highlight-border-color: var(--_highlight-border-color);
	}

	:host([appearance="inherit-filled"]),
	:host([expanded][appearance="inherit-filled"]) {
		--_background-color: var(--semantics-buttons-inherit-filled-background-color);
		--_primary-content-color: var(--context-parent-background-color, var(--semantics-buttons-inherit-filled-content-color));
		--_highlight-border-color: var(--semantics-buttons-inherit-filled-highlight-border-color);
		--_is-hovered-background-color: var(--_background-color);
		--_is-hovered-primary-content-color: var(--_primary-content-color);
		--_is-hovered-highlight-border-color: var(--_highlight-border-color);
		--_is-active-background-color: var(--_background-color);
		--_is-active-primary-content-color: var(--_primary-content-color);
		--_is-active-highlight-border-color: var(--_highlight-border-color);
	}

	/* For inherit-filled the inner button keeps the inherited on-color:
	   its currentColor background and the label's contrast flip resolve
	   against it, and would otherwise self-reference the label. The label
	   color moves to the content layer instead; see nldd-button. */
	:host([appearance="inherit-filled"]) .icon-button {
		color: inherit;
	}

	:host([appearance="inherit-filled"]) .icon-button > * {
		color: var(--_primary-content-color);
	}

	/* ## Expanded — default (incl. unknown variant) */

	:host([expanded]) {
		--_background-color: var(--semantics-buttons-neutral-tinted-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-content-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-tinted-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="neutral-base"]) {
		--_background-color: var(--semantics-buttons-neutral-base-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-content-color);
		--_highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-neutral-base-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="neutral-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-neutral-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-neutral-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-neutral-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([expanded][appearance="accent-filled"]),
	:host([expanded][appearance="primary"]) {
		--_background-color: var(--semantics-buttons-accent-filled-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-content-color);
		--_highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-accent-filled-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="accent-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-accent-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-accent-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-accent-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([expanded][appearance="critical-tinted"]),
	:host([expanded][appearance="destructive"]) {
		--_background-color: var(--semantics-buttons-critical-tinted-is-expanded-background-color);
		--_primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-content-color);
		--_highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-highlight-border-color);
		--_is-hovered-background-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-background-color);
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-content-color);
		--_is-hovered-highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-is-hovered-highlight-border-color);
		--_is-active-background-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-background-color);
		--_is-active-primary-content-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-content-color);
		--_is-active-highlight-border-color: var(--semantics-buttons-critical-tinted-is-expanded-is-active-highlight-border-color);
	}

	:host([expanded][appearance="critical-transparent"]) {
		--_background-color: transparent;
		--_primary-content-color: var(--semantics-buttons-critical-transparent-content-color);
		--_highlight-border-color: transparent;
		--_is-hovered-background-color: transparent;
		--_is-hovered-primary-content-color: var(--semantics-buttons-critical-transparent-is-hovered-content-color);
		--_is-hovered-highlight-border-color: transparent;
		--_is-active-background-color: transparent;
		--_is-active-primary-content-color: var(--semantics-buttons-critical-transparent-is-active-content-color);
		--_is-active-highlight-border-color: transparent;
	}

	:host([width="full"]) {
		display: block;
		width: 100%;
		flex-grow: 1;
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

	.icon-button {
		box-sizing: border-box;
		display: inline-flex;
		margin: 0;
		border: none;
		border-radius: var(--_corner-radius);
		background: none;
		background-color: var(--_background-color);
		box-shadow: inset 0 0 0 var(--primitives-border-width-thin) var(--_highlight-border-color);
		width: var(--_width);
		min-width: var(--_min-size);
		height: var(--_min-size);
		min-height: var(--_min-size);
		padding: var(--_block-padding) var(--_inline-padding);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--_primary-content-color);
		font: inherit;
		text-decoration: none;
		transition:
			background-color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default),
			color var(--primitives-transition-duration-fast) var(--primitives-transition-easing-default)
		;
		appearance: none;
	}

	a.icon-button {
		cursor: var(--semantics-controls-link-cursor);
	}

	@media (prefers-reduced-motion: reduce) {
		.icon-button,
		.icon-button__icon-area,
		.icon-button__text {
			transition: none;
		}
	}

	.icon-button:focus-visible {
		outline: var(--semantics-focus-ring-outline);
		outline-offset: var(--semantics-focus-ring-outline-offset);
		box-shadow: var(--semantics-focus-ring-box-shadow), inset 0 0 0 var(--primitives-border-width-thin) var(--_highlight-border-color);
	}

	.icon-button:focus:not(:focus-visible) {
		outline: none;
	}

	@media (hover: hover) {
		.icon-button:hover {
			background-color: var(--_is-hovered-background-color);
			color: var(--_is-hovered-primary-content-color);
			--_highlight-border-color: var(--_is-hovered-highlight-border-color);
		}
	}

	.icon-button:active {
		background-color: var(--_is-active-background-color);
		color: var(--_is-active-primary-content-color);
		--_highlight-border-color: var(--_is-active-highlight-border-color);
	}

	/* Loading keeps the control focusable (not disabled); activation is blocked in JS. */
	:host([loading]) .icon-button {
		cursor: default;
	}


	/* # Elements */

	.icon-button__icon-area {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transition: opacity var(--primitives-transition-duration-slow) var(--primitives-transition-easing-default);
	}

	/* Loading crossfades the content out (opacity, not visibility, so the control
	   keeps its accessible name) while the indicator fades in. The content stays
	   laid out, so the control keeps its size. */
	:host([loading]) .icon-button__icon-area {
		opacity: 0;
	}

	.icon-button__icon {
		display: flex;
		width: var(--_icon-size);
		height: var(--_icon-size);
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
	}

	.icon-button__disclosure-icon {
		display: flex;
		margin-right: var(--_disclosure-icon-margin-right);
		width: var(--_disclosure-icon-size);
		height: var(--_disclosure-icon-size);
		flex-shrink: 0;
	}

	.icon-button__text {
		display: var(--_text-display);
		text-align: center;
		color: inherit;
		font: var(--_text-font);
		white-space: nowrap;
		transition: opacity var(--primitives-transition-duration-slow) var(--primitives-transition-easing-default);
	}

	:host([loading]) .icon-button__text {
		opacity: 0;
	}

	/* Wrapper overlaid on the control, positioned against the host (which is
	   position:relative). It lives outside the <button>/<a> and the tooltip
	   wrapper so the indicator's role="status" live region works reliably. The
	   activity-indicator inside fills it and centers its circle, which inherits
	   the content color via currentColor. */
	.icon-button__activity-indicator {
		position: absolute;
		inset: 0;
		color: var(--_primary-content-color);
	}
`,C=Math.min,w=Math.max,T=Math.round,E=Math.floor,D=e=>({x:e,y:e}),ee={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function te(e,t,n){return w(e,C(t,n))}function O(e,t){return typeof e==`function`?e(t):e}function k(e){return e.split(`-`)[0]}function A(e){return e.split(`-`)[1]}function ne(e){return e===`x`?`y`:`x`}function re(e){return e===`y`?`height`:`width`}function j(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function ie(e){return ne(j(e))}function ae(e,t,n){n===void 0&&(n=!1);let r=A(e),i=ie(e),a=re(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=M(o)),[o,M(o)]}function oe(e){let t=M(e);return[se(e),t,se(t)]}function se(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var ce=[`left`,`right`],le=[`right`,`left`],ue=[`top`,`bottom`],de=[`bottom`,`top`];function fe(e,t,n){switch(e){case`top`:case`bottom`:return n?t?le:ce:t?ce:le;case`left`:case`right`:return t?ue:de;default:return[]}}function pe(e,t,n,r){let i=A(e),a=fe(k(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(se)))),a}function M(e){let t=k(e);return ee[t]+e.slice(t.length)}function me(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function he(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:me(e)}function N(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ge(e,t,n){let{reference:r,floating:i}=e,a=j(t),o=ie(t),s=re(o),c=k(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=A(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function _e(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=O(t,e),p=he(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=N(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=N(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ve=50,ye=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:_e},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ge(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<ve&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ge(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},be=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=O(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=k(r),_=j(o),v=k(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[M(o)]:oe(o)),x=p!==`none`;!d&&x&&b.push(...pe(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=ae(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===j(t)||T.every(e=>j(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=j(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},xe=new Set([`left`,`top`]);async function Se(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=k(n),s=A(n),c=j(n)===`y`,l=xe.has(o)?-1:1,u=a&&c?-1:1,d=O(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Ce=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Se(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},we=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=O(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=j(i),p=ne(f),m=u[p],h=u[f],g=(e,t)=>te(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Te=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=O(e,t),c=await i.detectOverflow(t,s),l=k(n),u=A(n),d=j(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=C(p-c[m],g),y=C(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,T=y;b!=null&&b.enabled.x&&(T=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?T=f-2*w(c.left,c.right):S=p-2*w(c.top,c.bottom)),await o({...t,availableWidth:T,availableHeight:S});let E=await i.getDimensions(a.floating);return f!==E.width||p!==E.height?{reset:{rects:!0}}:{}}}};function Ee(){return typeof window<`u`}function P(e){return De(e)?(e.nodeName||``).toLowerCase():`#document`}function F(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function I(e){return((De(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function De(e){return Ee()?e instanceof Node||e instanceof F(e).Node:!1}function L(e){return Ee()?e instanceof Element||e instanceof F(e).Element:!1}function R(e){return Ee()?e instanceof HTMLElement||e instanceof F(e).HTMLElement:!1}function Oe(e){return!Ee()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof F(e).ShadowRoot}function z(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=U(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function ke(e){return/^(table|td|th)$/.test(P(e))}function B(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Ae=/transform|translate|scale|rotate|perspective|filter/,je=/paint|layout|strict|content/,V=e=>!!e&&e!==`none`,Me;function Ne(e){let t=L(e)?U(e):e;return V(t.transform)||V(t.translate)||V(t.scale)||V(t.rotate)||V(t.perspective)||!Fe()&&(V(t.backdropFilter)||V(t.filter))||Ae.test(t.willChange||``)||je.test(t.contain||``)}function Pe(e){let t=G(e);for(;R(t)&&!H(t);){if(Ne(t))return t;if(B(t))return null;t=G(t)}return null}function Fe(){return Me??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Me}function H(e){return/^(html|body|#document)$/.test(P(e))}function U(e){return F(e).getComputedStyle(e)}function W(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function G(e){if(P(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Oe(e)&&e.host||I(e);return Oe(t)?t.host:t}function Ie(e){let t=G(e);return H(t)?(e.ownerDocument||e).body:R(t)&&z(t)?t:Ie(t)}function K(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ie(e),i=r===e.ownerDocument?.body,a=F(r);if(i){let e=Le(a);return t.concat(a,a.visualViewport||[],z(r)?r:[],e&&n?K(e):[])}return t.concat(r,K(r,[],n))}function Le(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Re(e){let t=U(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=R(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=T(n)!==a||T(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ze(e){return L(e)?e:e.contextElement}function q(e){let t=ze(e);if(!R(t))return D(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Re(t),o=(a?T(n.width):n.width)/r,s=(a?T(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Be=D(0);function Ve(e){let t=F(e);return!Fe()||!t.visualViewport?Be:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function He(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===F(e)}function J(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ze(e),o=D(1);t&&(r?L(r)&&(o=q(r)):o=q(e));let s=He(a,n,r)?Ve(a):D(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=F(a),t=L(r)?F(r):r,n=e,i=Le(n);for(;i&&t!==n;){let e=q(i),t=i.getBoundingClientRect(),r=U(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=F(i),i=Le(n)}}return N({width:u,height:d,x:c,y:l})}function Y(e,t){let n=W(e).scrollLeft;return t?t.left+n:J(I(e)).left+n}function Ue(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Y(e,n),y:n.top+t.scrollTop}}function We(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=I(r),s=t?B(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=D(1),u=D(0),d=R(r);if((d||!a)&&((P(r)!==`body`||z(o))&&(c=W(r)),d)){let e=J(r);l=q(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Ue(o,c):D(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ge(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Ke(e){let t=W(e),n=e.ownerDocument.body,r=w(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=w(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Y(e),o=-t.scrollTop;return U(n).direction===`rtl`&&(a+=w(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var qe=25;function Je(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=F(e),a=I(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Fe()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Y(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=qe&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Ye(e,t){let n=J(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=q(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Xe(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Je(e,n,t);else if(t===`document`)r=Ke(I(e));else if(L(t))r=Ye(t,n);else{let n=Ve(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return N(r)}function Ze(e,t){let n=t.get(e);if(n)return n;let r=K(e,[],!1).filter(e=>L(e)&&P(e)!==`body`),i=null,a=U(e).position===`fixed`,o=a?G(e):e;for(;L(o)&&!H(o);){let e=U(o),t=Ne(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=G(o)}return t.set(e,r),r}function Qe(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?B(t)?[]:Ze(t,this._c):[].concat(n),r],o=Xe(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Xe(t,a[e],i);s=w(n.top,s),c=C(n.right,c),l=C(n.bottom,l),u=w(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function $e(e){let{width:t,height:n}=Re(e);return{width:t,height:n}}function et(e,t,n){let r=R(t),i=I(t),a=n===`fixed`,o=J(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=D(0);if((r||!a)&&((P(t)!==`body`||z(i))&&(s=W(t)),r)){let e=J(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Y(i));let l=i&&!r&&!a?Ue(i,s):D(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function tt(e){return U(e).position===`static`}function nt(e,t){if(!R(e)||U(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return I(e)===n&&(n=n.ownerDocument.body),n}function rt(e,t){let n=F(e);if(B(e))return n;if(!R(e)){let t=G(e);for(;t&&!H(t);){if(L(t)&&!tt(t))return t;t=G(t)}return n}let r=nt(e,t);for(;r&&ke(r)&&tt(r);)r=nt(r,t);return r&&H(r)&&tt(r)&&!Ne(r)?n:r||Pe(e)||n}var it=async function(e){let t=this.getOffsetParent||rt,n=this.getDimensions,r=await n(e.floating);return{reference:et(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function at(e){return U(e).direction===`rtl`}var ot={convertOffsetParentRelativeRectToViewportRelativeRect:We,getDocumentElement:I,getClippingRect:Qe,getOffsetParent:rt,getElementRects:it,getClientRects:Ge,getDimensions:$e,getScale:q,isElement:L,isRTL:at};function st(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ct(e,t,n){let r=null,i,a=I(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=E(d),h=E(a.clientWidth-(u+f)),g=E(a.clientHeight-(d+p)),_=E(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:w(0,C(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!st(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=F(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function lt(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ze(e),u=i||a?[...l?K(l):[],...t?K(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ct(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?J(e):null;c&&g();function g(){let t=J(e);h&&!st(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var ut=Ce,dt=we,ft=be,pt=Te,mt=(e,t,n)=>{let r=new Map,i=n??{},a={...ot,...i.platform,_c:r};return ye(e,t,{...i,platform:a})},ht=n`
	:host {
		box-sizing: border-box;
	}


	/* # Host */

	:host {
		--_hide-duration: var(--primitives-transition-duration-fast);
		--_show-duration: var(--primitives-transition-duration-fast);
		--_max-width: var(--primitives-area-280);
		--_z-index: 10000;
		--_show-delay: 700ms;
		--_hide-delay: 50; /* unitless ms, read by JavaScript */
		--_offset: 4; /* px, unitless — read by JS */
		--_shift-padding: 8; /* px, unitless — read by JS */

		${c}
		display: contents;
	}

	:host([hidden]) {
		display: none;
	}


	/* # Block */

	.tooltip {
		position: fixed;
		opacity: 0;
		margin: 0;
		border: none;
		background: none;
		padding: 0;
		transition:
			opacity var(--_hide-duration) ease,
			display var(--_hide-duration) allow-discrete,
			overlay var(--_hide-duration) allow-discrete;
	}

	.tooltip:popover-open {
		opacity: 1;
		transition:
			opacity var(--_show-duration) ease,
			display var(--_show-duration) allow-discrete,
			overlay var(--_show-duration) allow-discrete;
	}

	/* Stay invisible (no fade) until Floating UI has placed it, so the fade-in plays at
	   the final position rather than flashing at the popover's default spot. The
	   positioned attribute is set once _updatePosition writes the coordinates. */
	.tooltip:popover-open:not([positioned]) {
		/* visibility (like nldd-menu/nldd-popover) keeps the not-yet-placed tooltip out
		   of hit-testing at its stale default spot; opacity still drives the fade. */
		visibility: hidden;
		opacity: 0;
		transition: none;
	}

	@starting-style {
		.tooltip:popover-open {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tooltip,
		.tooltip.is-visible,
		.tooltip.is-focus-visible {
			transition: none;
		}
	}


	/* ## Tooltip body */

	.tooltip__body {
		border-radius: var(--primitives-corner-radius-xs);
		box-shadow: var(--components-tooltip-box-shadow);
		background-color: var(--components-tooltip-background-color);
		width: max-content;
		max-width: var(--_max-width);
		padding-block: var(--primitives-space-4);
		padding-inline: var(--primitives-space-8);
		color: var(--components-tooltip-content-color);
		font: var(--primitives-font-body-xs-regular-tight);
		overflow-wrap: break-word;
	}

	@media (forced-colors: active) {
		.tooltip__body {
			border: 1px solid CanvasText;
		}
	}
`;function gt(e){return t`
		<slot
			@mouseenter=${e._handleTriggerEnter}
			@mouseleave=${e._handleTriggerLeave}
			@focusin=${e._handleFocusIn}
			@focusout=${e._handleFocusOut}
			@click=${e._handleTriggerActivate}
		></slot>
		<div class="tooltip"
			popover="manual"
			aria-hidden="true"
			@mouseenter=${e._handleTooltipEnter}
			@mouseleave=${e._handleTooltipLeave}
		>
			<div class="tooltip__body">${e.text}</div>
		</div>
	`}var X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_t=0,vt=matchMedia(`(pointer: coarse)`),yt=700,bt=50,Z=class extends r{constructor(){super(...arguments),this.text=``,this.open=!1,this.placement=`bottom`,this.timing=`delay`,this._visible=!1,this._tooltipId=`nldd-tooltip-${++_t}`,this._hideTimeout=null,this._showTimeout=null,this._descriptionEl=null,this._currentTrigger=null,this._boundSlotChange=()=>this._syncAriaDescribedBy(),this._positionVersion=0,this._handleKeyDown=e=>{if(e.key===`Escape`&&this._visible){if(this.open){this.dispatchEvent(new CustomEvent(`nldd-tooltip-dismiss`,{bubbles:!0,composed:!0})),e.preventDefault();return}this._visible=!1}}}get _effectivePlacement(){return this.placement}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this._handleKeyDown),this.hasUpdated&&this.shadowRoot?.querySelector(`slot`)?.addEventListener(`slotchange`,this._boundSlotChange)}firstUpdated(){this.shadowRoot?.querySelector(`slot`)?.addEventListener(`slotchange`,this._boundSlotChange)}updated(e){if(e.has(`open`)&&(this.open?(this._hideTimeout&&=(clearTimeout(this._hideTimeout),null),this._showTimeout&&=(clearTimeout(this._showTimeout),null),this._visible=!0):this._visible&&=!1),e.has(`_visible`)){let e=this._getTooltipElement();e&&(this._visible?(e.matches(`:popover-open`)||(e.removeAttribute(`positioned`),e.showPopover()),this._updatePosition()):e.matches(`:popover-open`)&&e.hidePopover())}(e.has(`text`)||e.has(`timing`))&&this._syncAriaDescribedBy(),e.has(`text`)&&this._visible&&this._updatePosition(),e.has(`timing`)&&this.timing===`never`&&(this._showTimeout&&=(clearTimeout(this._showTimeout),null),this._visible&&=!1)}_syncAriaDescribedBy(){let e=this._getTriggerElement();this._currentTrigger&&this._currentTrigger!==e&&this._currentTrigger.removeAttribute(`aria-describedby`),this._currentTrigger=e,e&&e.getRootNode()===document&&(this.text&&this.timing!==`never`?(this._descriptionEl||(this._descriptionEl=document.createElement(`span`),this._descriptionEl.id=this._tooltipId,Object.assign(this._descriptionEl.style,{position:`absolute`,top:`0`,left:`0`,width:`1px`,height:`1px`,overflow:`hidden`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),document.body.appendChild(this._descriptionEl)),this._descriptionEl.textContent=this.text,e.setAttribute(`aria-describedby`,this._tooltipId)):(e.removeAttribute(`aria-describedby`),this._descriptionEl?.remove(),this._descriptionEl=null))}_getTriggerElement(){return(this.shadowRoot?.querySelector(`slot`))?.assignedElements({flatten:!0})?.[0]??null}_getTooltipElement(){return this.shadowRoot?.querySelector(`.tooltip`)??null}_handleTriggerEnter(){if(this.timing===`never`||!this.text||vt.matches)return;if(this._hideTimeout&&=(clearTimeout(this._hideTimeout),null),this._showTimeout&&clearTimeout(this._showTimeout),this.timing===`instant`){this._showTimeout=null,this._visible=!0;return}let e=parseInt(getComputedStyle(this).getPropertyValue(`--_show-delay`),10),t=Number.isFinite(e)?e:yt;this._showTimeout=setTimeout(()=>{this._showTimeout=null,this._visible=!0},t)}_handleFocusIn(){this.timing!==`never`&&this.text&&(p()||(this._hideTimeout&&=(clearTimeout(this._hideTimeout),null),this._showTimeout&&=(clearTimeout(this._showTimeout),null),this._visible=!0))}_handleTriggerLeave(){if(this._showTimeout&&=(clearTimeout(this._showTimeout),null),this.open)return;this._hideTimeout&&clearTimeout(this._hideTimeout);let e=parseInt(getComputedStyle(this).getPropertyValue(`--_hide-delay`),10),t=Number.isFinite(e)?e:bt;this._hideTimeout=setTimeout(()=>{this._visible=!1,this._hideTimeout=null},t)}_handleFocusOut(e){let t=(this.shadowRoot?.querySelector(`slot`))?.assignedElements({flatten:!0})??[],n=e.relatedTarget;n&&t.some(e=>e.contains(n)||e.shadowRoot?.contains(n))||this._handleTriggerLeave()}_handleTriggerActivate(){this.open||(this._showTimeout&&=(clearTimeout(this._showTimeout),null),this._hideTimeout&&=(clearTimeout(this._hideTimeout),null),this._visible=!1)}_handleTooltipEnter(){this._hideTimeout&&=(clearTimeout(this._hideTimeout),null)}_handleTooltipLeave(){this._handleTriggerLeave()}async _updatePosition(){let e=++this._positionVersion,t=this._getTriggerElement(),n=this._getTooltipElement();if(!t||!n){n?.setAttribute(`positioned`,``);return}if(document.fonts?.status!==`loaded`&&(await document.fonts?.ready,e!==this._positionVersion))return;let r=getComputedStyle(this),{x:i,y:a}=await mt(t,n,{placement:this._effectivePlacement,strategy:`fixed`,middleware:[ut(parseInt(r.getPropertyValue(`--_offset`),10)),ft(),dt({padding:parseInt(r.getPropertyValue(`--_shift-padding`),10)})]});e===this._positionVersion&&(n.style.left=`${i}px`,n.style.top=`${a}px`,n.setAttribute(`positioned`,``))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._handleKeyDown),this.shadowRoot?.querySelector(`slot`)?.removeEventListener(`slotchange`,this._boundSlotChange),this._hideTimeout&&=(clearTimeout(this._hideTimeout),null),this._showTimeout&&=(clearTimeout(this._showTimeout),null),this._currentTrigger?.removeAttribute(`aria-describedby`),this._currentTrigger=null,this._descriptionEl?.remove(),this._descriptionEl=null}render(){return gt(this)}};Z.styles=ht,X([i({reflect:!0,converter:s(``)})],Z.prototype,`text`,void 0),X([i({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),X([i({reflect:!0,converter:s(`bottom`)})],Z.prototype,`placement`,void 0),X([i({reflect:!0,converter:s(`delay`)})],Z.prototype,`timing`,void 0),X([o()],Z.prototype,`_visible`,void 0),Z=X([a(`nldd-tooltip`)],Z);function xt(n){return t`
		<span class="icon-button__icon-area">
			<span class="icon-button__icon">
				${n.icon?t`<nldd-icon icon=${n.icon}></nldd-icon>`:t`<slot name="icon" @slotchange=${n._onIconSlotChange}>
							<nldd-icon icon="icon-placeholder"></nldd-icon>
						</slot>`}
			</span>
			${n.expandable?t`
				<span class="icon-button__disclosure-icon">
					<nldd-icon icon="chevron-down-small"></nldd-icon>
				</span>
			`:e}
		</span>
		${n.text?t`
			<span class="icon-button__text">${n.text}</span>
		`:``}
	`}function St(){let n=this.href&&this.target===`_blank`?this._t(`components.icon-button.opens-in-new-tab-label`):``,r=[this.accessibleLabel||this.text||``,n].filter(Boolean).join(`, `)||e,i=xt(this),a=this.accessibleLabel||(this.size!==`lg`||this.hideLgText?this.text:``),o=this.expandable||this.popupType?String(this.expanded):this.expanded?`true`:e,s=this.loading?`true`:e,c=this.size===`xs`?`16`:this.size===`sm`?`20`:this.size===`lg`?`28`:`24`,l=this.loading?t`
			<div class="icon-button__activity-indicator">
				<nldd-activity-indicator
					timing="instant"
					size=${c}
					text=${this.loadingText||e}
				></nldd-activity-indicator>
			</div>
		`:e,u=()=>{if(this.href){let n=d(this.rel,this.target);return t`
				<a class="icon-button"
					href=${this.href}
					target=${this.target||e}
					rel=${n||e}
					aria-disabled=${this.disabled?`true`:e}
					aria-label=${r}
					aria-haspopup=${this.popupType||e}
					aria-expanded=${o}
					aria-busy=${s}
					tabindex=${this.noTab?`-1`:e}
					@pointerdown=${this._popup.handlePointerdown}
					@click=${this._handleClick}
				>
					${i}
				</a>
			`}return t`
			<button class="icon-button"
				type=${this.type}
				?disabled=${this.disabled}
				aria-disabled=${this.disabled?`true`:e}
				aria-label=${r}
				aria-haspopup=${this.popupType||e}
				aria-expanded=${o}
				aria-busy=${s}
				tabindex=${this.noTab?`-1`:e}
				popovertarget=${this.popovertarget||e}
				.popoverTargetElement=${this.popoverTargetElement}
				.popoverTargetAction=${this.popoverTargetAction}
				@pointerdown=${this._popup.handlePointerdown}
				@click=${this._handleClick}
			>
				${i}
			</button>
		`},f=a&&this.tooltipTiming!==`never`?t`
			<nldd-tooltip
				text=${a}
				timing=${this.tooltipTiming}
			>
				${u()}
			</nldd-tooltip>
		`:u(),p=t`<slot name="popup" @slotchange=${this._popup.handleSlotChange}></slot>`;return t`${f}${l}${p}`}var Ct={"components.icon-button.opens-in-new-tab-label":`Opent in nieuw tabblad`},Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends u(r,Ct){constructor(){super(...arguments),this._internals=this.attachInternals(),this.appearance=`neutral-tinted`,this.size=`md`,this.hideLgText=!1,this.loading=!1,this.loadingText=``,this.disabled=!1,this.noHighlightBorder=!1,this.type=`button`,this.expandable=!1,this.expanded=!1,this.noTab=!1,this.width=``,this.popovertarget=void 0,this.popoverTargetElement=null,this.popoverTargetAction=`toggle`,this.text=``,this.icon=``,this.accessibleLabel=``,this.tooltipTiming=`delay`,this.href=void 0,this.target=void 0,this.rel=void 0,this._warnedA11y=!1,this._popup=new h(this)}get _hasIcon(){return this.icon?!0:((this.shadowRoot?.querySelector(`slot[name="icon"]`))?.assignedElements().length??0)>0}updated(e){if(e.has(`width`)){let e=this.width,t=e===`full`,n=!!e&&!t&&CSS.supports(`width`,e);this.style.width=n?e:``,t||n?this.style.setProperty(`--_width`,`100%`):this.style.removeProperty(`--_width`)}(!this._hasIcon||this.text||this.accessibleLabel)&&(this._warnedA11y=!1)}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}if(this._popup.handleClick(e)){e.preventDefault();return}this.href||(this.type===`submit`?this._internals.form?.requestSubmit():this.type===`reset`&&this._internals.form?.reset())}focus(e){this.shadowRoot?.querySelector(`.icon-button`)?.focus(e)}_onIconSlotChange(){this.requestUpdate()}render(){return St.call(this)}};$.styles=S,$.formAssociated=!0,Q([i({reflect:!0,converter:s(`neutral-tinted`)})],$.prototype,`appearance`,void 0),Q([i({reflect:!0,converter:s(`md`)})],$.prototype,`size`,void 0),Q([i({type:Boolean,reflect:!0,attribute:`hide-lg-text`})],$.prototype,`hideLgText`,void 0),Q([i({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),Q([i({attribute:`loading-text`})],$.prototype,`loadingText`,void 0),Q([i({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),Q([i({type:Boolean,reflect:!0,attribute:`no-highlight-border`})],$.prototype,`noHighlightBorder`,void 0),Q([i({type:String,reflect:!0})],$.prototype,`type`,void 0),Q([i({type:Boolean,reflect:!0,attribute:`expandable`})],$.prototype,`expandable`,void 0),Q([i({type:Boolean,reflect:!0})],$.prototype,`expanded`,void 0),Q([i({type:Boolean,reflect:!0,attribute:`no-tab`})],$.prototype,`noTab`,void 0),Q([i({type:String,reflect:!0,attribute:`popup-type`})],$.prototype,`popupType`,void 0),Q([i({reflect:!0,converter:s(``)})],$.prototype,`width`,void 0),Q([i({type:String})],$.prototype,`popovertarget`,void 0),Q([i({attribute:!1})],$.prototype,`popoverTargetElement`,void 0),Q([i({attribute:!1})],$.prototype,`popoverTargetAction`,void 0),Q([i({reflect:!0,converter:s(``)})],$.prototype,`text`,void 0),Q([i({type:String})],$.prototype,`icon`,void 0),Q([i({type:String,attribute:`accessible-label`})],$.prototype,`accessibleLabel`,void 0),Q([i({reflect:!0,attribute:`tooltip-timing`,converter:s(`delay`)})],$.prototype,`tooltipTiming`,void 0),Q([i({type:String,reflect:!0})],$.prototype,`href`,void 0),Q([i({type:String})],$.prototype,`target`,void 0),Q([i({type:String})],$.prototype,`rel`,void 0),$=Q([a(`nldd-icon-button`)],$);export{dt as a,ut as i,mt as n,pt as o,ft as r,h as s,lt as t};