(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4885],{28417:function(e,t,r){"use strict";r(50808);var n=r(33367),o=r(93592),i=r(87156),a={getTabbableNodes:function(e){var t=[];return this._collectTabbableNodes(e,t)?o.H._sortByTabIndex(t):t},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!o.H._isVisible(e))return!1;var r,n=e,a=o.H._normalizedTabIndex(n),c=a>0;a>=0&&t.push(n),r="content"===n.localName||"slot"===n.localName?(0,i.vz)(n).getDistributedNodes():(0,i.vz)(n.shadowRoot||n.root||n).children;for(var s=0;s<r.length;s++)c=this._collectTabbableNodes(r[s],t)||c;return c}};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=customElements.get("paper-dialog"),h={get _focusableNodes(){return a.getTabbableNodes(this)}},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,e);var t=u(r);function r(){return s(this,r),t.apply(this,arguments)}return r}((0,n.P)([h],d));customElements.define("ha-paper-dialog",m)},26765:function(e,t,r){"use strict";r.d(t,{Ys:function(){return a},g7:function(){return c},D9:function(){return s}});var n=r(47181),o=function(){return Promise.all([r.e(8200),r.e(879),r.e(6372),r.e(6547),r.e(6509),r.e(4821),r.e(7230)]).then(r.bind(r,1281))},i=function(e,t,r){return new Promise((function(i){var a=t.cancel,c=t.confirm;(0,n.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:Object.assign({},t,r,{cancel:function(){i(!!(null==r?void 0:r.prompt)&&null),a&&a()},confirm:function(e){i(!(null==r?void 0:r.prompt)||e),c&&c(e)}})})}))},a=function(e,t){return i(e,t)},c=function(e,t){return i(e,t,{confirmation:!0})},s=function(e,t){return i(e,t,{prompt:!0})}},70975:function(e,t,r){"use strict";r.r(t),r.d(t,{DialogManageCloudhook:function(){return R}});r(53918),r(22626),r(30879);var n=r(15652),o=(r(28417),r(26765)),i=r(11654),a=r(27322);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=d(["\n        ha-paper-dialog {\n          width: 650px;\n        }\n        paper-input {\n          margin-top: -8px;\n        }\n        button.link {\n          color: var(--primary-color);\n        }\n        .paper-dialog-buttons a {\n          text-decoration: none;\n        }\n      "]);return s=function(){return e},e}function l(){var e=d(["\n                  ",'\n                  <button class="link" @click="','">\n                    ',"</button\n                  >.\n                "]);return l=function(){return e},e}function u(){var e=d(["\n                  ","\n                "]);return u=function(){return e},e}function f(){var e=d(["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ","\n        </h2>\n        <div>\n          <p>\n            ",'\n          </p>\n          <paper-input\n            label="','"\n            value="','"\n            @click="','"\n            @blur="','"\n          ></paper-input>\n          <p>\n            ','\n          </p>\n        </div>\n\n        <div class="paper-dialog-buttons">\n          <a href="','" target="_blank" rel="noreferrer">\n            <mwc-button\n              >','</mwc-button\n            >\n          </a>\n          <mwc-button @click="','"\n            >',"</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "]);return f=function(){return e},e}function p(){var e=d([""]);return p=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){h(i,n,o,a,c,"next",e)}function c(e){h(i,n,o,a,c,"throw",e)}a(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!D(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,o[i])(c)||c);e=s.element,this.addElementPlacement(e,t),s.finisher&&n.push(s.finisher);var l=s.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=T(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:S(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=S(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function S(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function T(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z="Public URL – Click to copy to clipboard",R=function(e,t,r,n){var o=_();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=t((function(e){o.initializeInstanceElements(e,c.elements)}),r),c=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(O(i.descriptor)||O(o.descriptor)){if(D(i)||D(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(D(i)){if(D(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}P(i,o)}else t.push(i)}return t}(a.d.map(E)),e);return o.initializeClassElements(a.F,c.elements),o.runClassFinishers(a.F,c.finishers)}(null,(function(e,t){var r,c;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,t);var r=v(n);function n(){var t;y(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r.call.apply(r,[this].concat(i)),e(k(t)),t}return n}(t),d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:(c=m(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=t,e.next=3,this.updateComplete;case 3:this._dialog.open();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{kind:"method",key:"render",value:function(){if(!this._params)return(0,n.dy)(p());var e=this._params,t=e.webhook,r=e.cloudhook,o="automation"===t.domain?(0,a.R)(this.hass,"/docs/automation/trigger/#webhook-trigger"):(0,a.R)(this.hass,"/integrations/".concat(t.domain,"/"));return(0,n.dy)(f(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for","name",t.name),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.available_at"),z,r.cloudhook_url,this._copyClipboard,this._restoreLabel,r.managed?(0,n.dy)(u(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")):(0,n.dy)(l(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook"),this._disableWebhook,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")),o,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation"),this._closeDialog,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close"))}},{kind:"get",key:"_dialog",value:function(){return this.shadowRoot.querySelector("ha-paper-dialog")}},{kind:"get",key:"_paperInput",value:function(){return this.shadowRoot.querySelector("paper-input")}},{kind:"method",key:"_closeDialog",value:function(){this._dialog.close()}},{kind:"method",key:"_disableWebhook",value:(r=m(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,o.g7)(this,{text:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable"),dismissText:this.hass.localize("ui.common.no"),confirmText:this.hass.localize("ui.common.yes"),confirm:function(){t._params.disableHook(),t._closeDialog()}});case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_copyClipboard",value:function(e){var t=e.currentTarget,r=t.inputElement.inputElement;r.setSelectionRange(0,r.value.length);try{document.execCommand("copy"),t.label=this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard")}catch(n){}}},{kind:"method",key:"_restoreLabel",value:function(){this._paperInput.label=z}},{kind:"get",static:!0,key:"styles",value:function(){return[i.Qx,(0,n.iv)(s())]}}]}}),n.oi);customElements.define("dialog-manage-cloudhook",R)},27322:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});var n=function(e,t){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);
//# sourceMappingURL=chunk.89cee9e1ef7a6f131565.js.map