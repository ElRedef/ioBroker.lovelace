"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[70975],{70975:function(e,t,r){r.r(t),r.d(t,{DialogManageCloudhook:function(){return j}});r(51187);var n,o,i,a,s,l=r(37500),c=r(33310),u=r(47181),d=r(50577),f=(r(3555),r(26765)),p=r(11654),h=r(27322);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,o)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!z(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[i])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:C(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=C(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function D(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function z(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function C(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T="Public URL – Click to copy to clipboard",j=function(e,t,r,n){var o=P();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(A(i.descriptor)||A(o.descriptor)){if(z(i)||z(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(z(i)){if(z(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}x(i,o)}else t.push(i)}return t}(a.d.map(D)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){var r,m,w=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t);var r=g(n);function n(){var t;b(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r.call.apply(r,[this].concat(i)),e(E(t)),t}return n}(t);return{F:w,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,c.IO)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,u.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return(0,l.dy)(n||(n=v([""])));var e=this._params,t=e.webhook,r=e.cloudhook,s="automation"===t.domain?(0,h.R)(this.hass,"/docs/automation/trigger/#webhook-trigger"):(0,h.R)(this.hass,"/integrations/".concat(t.domain,"/"));return(0,l.dy)(o||(o=v(["\n      <ha-dialog\n        open\n        .heading=","\n      >\n        <div>\n          <p>\n            ","\n          </p>\n          <ha-textfield\n            .label=","\n            .value=","\n            @click=","\n            @blur=","\n          ></ha-textfield>\n          <p>\n            ","\n          </p>\n        </div>\n\n        <a\n          href=",'\n          target="_blank"\n          rel="noreferrer"\n          slot="secondaryAction"\n        >\n          <mwc-button>\n            ',"\n          </mwc-button>\n        </a>\n        <mwc-button @click=",' slot="primaryAction">\n          ',"\n        </mwc-button>\n      </ha-dialog>\n    "])),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for","name",t.name),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.available_at"),T,r.cloudhook_url,this._copyClipboard,this._restoreLabel,r.managed?(0,l.dy)(i||(i=v(["\n                  ","\n                "])),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")):(0,l.dy)(a||(a=v(["\n                  ",'\n                  <button class="link" @click=',">\n                    ","</button\n                  >.\n                "])),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook"),this._disableWebhook,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")),s,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation"),this.closeDialog,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close"))}},{kind:"method",key:"_disableWebhook",value:(r=regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,f.g7)(this,{text:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.disable"),confirm:function(){t._params.disableHook(),t.closeDialog()}});case 1:case"end":return e.stop()}}),e,this)})),m=function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){y(i,n,o,a,s,"next",e)}function s(e){y(i,n,o,a,s,"throw",e)}a(void 0)}))},function(){return m.apply(this,arguments)})},{kind:"method",key:"_copyClipboard",value:function(e){var t=e.currentTarget;try{(0,d.v)(t.value),t.label=this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard")}catch(r){}}},{kind:"method",key:"_restoreLabel",value:function(){this._input.label=T}},{kind:"get",static:!0,key:"styles",value:function(){return[p.Qx,p.yu,(0,l.iv)(s||(s=v(["\n        ha-dialog {\n          width: 650px;\n        }\n        ha-textfield {\n          display: block;\n        }\n        button.link {\n          color: var(--primary-color);\n        }\n        a {\n          text-decoration: none;\n        }\n      "])))]}}]}}),l.oi);customElements.define("dialog-manage-cloudhook",j)},27322:function(e,t,r){r.d(t,{R:function(){return n}});var n=function(e,t){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);