import{d as e,f as t,n}from"./decorators.VVcZcd54.js";import{t as r}from"./breakpoints.EM_gyS4P.js";var i=t(r.smMax),a=t(r.mdMin),o=t(r.mdMax),s=t(r.lgMin),c=new Map;function l(n){let r=n??``,l=c.get(r);if(l)return l;let u=t(n?`${n} `:``),d=e`
		/* # Hide below: the value names the breakpoint you hide BELOW */

		:host([hide-below="md"]) {
			@container ${u}(max-width: ${i}) { display: none !important; }
		}

		:host([hide-below="lg"]) {
			@container ${u}(max-width: ${o}) { display: none !important; }
		}


		/* # Hide above */

		:host([hide-above="sm"]) {
			@container ${u}(min-width: ${a}) { display: none !important; }
		}

		:host([hide-above="md"]) {
			@container ${u}(min-width: ${s}) { display: none !important; }
		}
	`;return c.set(r,d),d}var u=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=new Set([`sm`,`md`,`lg`]);function f(e){return e===void 0||d.has(e)?null:e}function p(e,t,n,r,i){n===r&&console.warn(`[${e.localName}] ${t}="${r}" never hides anything: there is no breakpoint ${i}. The value names the breakpoint you hide below, so the smallest one that hides is "${t===`hide-below`?`md`:`sm`}". Leave the attribute off if you meant "always visible".`)}function m(e,t){class r extends e{static finalizeStyles(n){return[...e.finalizeStyles.call(this,n),l(t)]}updated(e){super.updated(e),(e.has(`hideBelow`)||e.has(`hideAbove`))&&this._updateVisibilityRules()}_updateVisibilityRules(){let e=this.shadowRoot;if(!e)return;let n=t?`${t} `:``,r=[];p(this,`hide-below`,this.hideBelow,`sm`,`below sm`);let i=f(this.hideBelow);i&&r.push(`:host { @container ${n}(max-width: ${i}) { display: none !important; } }`),p(this,`hide-above`,this.hideAbove,`lg`,`above lg`);let a=f(this.hideAbove);if(a&&r.push(`:host { @container ${n}(min-width: ${a}) { display: none !important; } }`),r.length===0){if(this._visibilitySheet){let t=this._visibilitySheet;e.adoptedStyleSheets=Array.from(e.adoptedStyleSheets).filter(e=>e!==t),this._visibilitySheet=void 0}return}this._visibilitySheet||(this._visibilitySheet=new CSSStyleSheet,e.adoptedStyleSheets=[...e.adoptedStyleSheets,this._visibilitySheet]),this._visibilitySheet.replaceSync(r.join(`
`))}}return u([n({type:String,reflect:!0,attribute:`hide-below`})],r.prototype,`hideBelow`,void 0),u([n({type:String,reflect:!0,attribute:`hide-above`})],r.prototype,`hideAbove`,void 0),r}export{m as t};