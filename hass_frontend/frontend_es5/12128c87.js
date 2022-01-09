/*! For license information please see 12128c87.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2421],{32421:function(e,t,n){n.d(t,{r:function(){return I}});var r,o,i=n(87480),c=n(26767),a=(n(66702),n(38103)),s=n(78220),l=n(14114),d=n(98734),u=n(72774),p={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},h={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},f=function(e){function t(n){return e.call(this,(0,i.__assign)((0,i.__assign)({},t.defaultAdapter),n))||this}return(0,i.__extends)(t,e),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(p.DISABLED):this.adapter.removeClass(p.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked(t.checked),this.updateCheckedStyling(t.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(p.CHECKED):this.adapter.removeClass(p.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(h.ARIA_CHECKED_ATTR,""+!!e)},t}(u.K),b=n(37500),m=n(5701),y=n(67352),v=n(35401),_=n(17717),w=n(84982),k=n(48399);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function R(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},E(e,t,n||e)}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var S,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,i,c=j(a);function a(){var e;return C(this,a),(e=c.apply(this,arguments)).checked=!1,e.disabled=!1,e.shouldRenderRipple=!1,e.mdcFoundationClass=f,e.rippleHandlers=new d.A((function(){return e.shouldRenderRipple=!0,e.ripple})),e}return t=a,(n=[{key:"changeHandler",value:function(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}},{key:"createAdapter",value:function(){var e=this;return Object.assign(Object.assign({},(0,s.q)(this.mdcRoot)),{setNativeControlChecked:function(t){e.formElement.checked=t},setNativeControlDisabled:function(t){e.formElement.disabled=t},setNativeControlAttr:function(t,n){e.formElement.setAttribute(t,n)}})}},{key:"renderRipple",value:function(){return this.shouldRenderRipple?(0,b.dy)(r||(r=R(['\n        <mwc-ripple\n          .accent="','"\n          .disabled="','"\n          unbounded>\n        </mwc-ripple>'])),this.checked,this.disabled):""}},{key:"focus",value:function(){var e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}},{key:"blur",value:function(){var e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var e=this;E(P(a.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}},{key:"render",value:function(){return(0,b.dy)(o||(o=R(['\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div class="mdc-switch__thumb-underlay">\n          ','\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              aria-label="','"\n              aria-labelledby="','"\n              @change="','"\n              @focus="','"\n              @blur="','"\n              @mousedown="','"\n              @mouseenter="','"\n              @mouseleave="','"\n              @touchstart="','"\n              @touchend="','"\n              @touchcancel="','">\n          </div>\n        </div>\n      </div>'])),this.renderRipple(),(0,k.o)(this.ariaLabel),(0,k.o)(this.ariaLabelledBy),this.changeHandler,this.handleRippleFocus,this.handleRippleBlur,this.handleRippleMouseDown,this.handleRippleMouseEnter,this.handleRippleMouseLeave,this.handleRippleTouchStart,this.handleRippleDeactivate,this.handleRippleDeactivate)}},{key:"handleRippleMouseDown",value:function(e){var t=this;window.addEventListener("mouseup",(function e(){window.removeEventListener("mouseup",e),t.handleRippleDeactivate()})),this.rippleHandlers.startPress(e)}},{key:"handleRippleTouchStart",value:function(e){this.rippleHandlers.startPress(e)}},{key:"handleRippleDeactivate",value:function(){this.rippleHandlers.endPress()}},{key:"handleRippleMouseEnter",value:function(){this.rippleHandlers.startHover()}},{key:"handleRippleMouseLeave",value:function(){this.rippleHandlers.endHover()}},{key:"handleRippleFocus",value:function(){this.rippleHandlers.startFocus()}},{key:"handleRippleBlur",value:function(){this.rippleHandlers.endFocus()}}])&&x(t.prototype,n),i&&x(t,i),a}(s.H);(0,i.__decorate)([(0,m.C)({type:Boolean}),(0,l.P)((function(e){this.mdcFoundation.setChecked(e)}))],A.prototype,"checked",void 0),(0,i.__decorate)([(0,m.C)({type:Boolean}),(0,l.P)((function(e){this.mdcFoundation.setDisabled(e)}))],A.prototype,"disabled",void 0),(0,i.__decorate)([a.L,(0,m.C)({attribute:"aria-label"})],A.prototype,"ariaLabel",void 0),(0,i.__decorate)([a.L,(0,m.C)({attribute:"aria-labelledby"})],A.prototype,"ariaLabelledBy",void 0),(0,i.__decorate)([(0,y.I)(".mdc-switch")],A.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,y.I)("input")],A.prototype,"formElement",void 0),(0,i.__decorate)([(0,v.G)("mwc-ripple")],A.prototype,"ripple",void 0),(0,i.__decorate)([(0,_.S)()],A.prototype,"shouldRenderRipple",void 0),(0,i.__decorate)([(0,w.h)({passive:!0})],A.prototype,"handleRippleMouseDown",null),(0,i.__decorate)([(0,w.h)({passive:!0})],A.prototype,"handleRippleTouchStart",null);var H=(0,b.iv)(S||(S=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([".mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}"])));function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(n,e);var t=B(n);function n(){return T(this,n),t.apply(this,arguments)}return n}(A);I.styles=[H],I=(0,i.__decorate)([(0,c.M)("mwc-switch")],I)}}]);