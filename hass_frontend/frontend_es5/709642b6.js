"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7044],{21560:function(e,t,n){n.d(t,{ZH:function(){return u},MT:function(){return a},U2:function(){return l},RV:function(){return o},t8:function(){return c}});var r,i=function(){var e;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var n=function(){return indexedDB.databases().finally(t)};e=setInterval(n,100),n()})).finally((function(){return clearInterval(e)})):Promise.resolve()};function o(e){return new Promise((function(t,n){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return n(e.error)}}))}function a(e,t){var n=i().then((function(){var n=indexedDB.open(e);return n.onupgradeneeded=function(){return n.result.createObjectStore(t)},o(n)}));return function(e,r){return n.then((function(n){return r(n.transaction(t,e).objectStore(t))}))}}function s(){return r||(r=a("keyval-store","keyval")),r}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return t("readonly",(function(t){return o(t.get(e))}))}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return n("readwrite",(function(n){return n.put(t,e),o(n.transaction)}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s();return e("readwrite",(function(e){return e.clear(),o(e.transaction)}))}},17324:function(e,t,n){n.d(t,{N:function(){return r}});var r=function(e,t,n){return e.subscribeMessage((function(e){return t(e)}),Object.assign({type:"render_template"},n))}},5369:function(e,t,n){n.r(t);n(51187);var r,i,o,a,s,l,c,u,p,d,f,h=n(37500),m=n(33310),v=n(8636),y=n(38346),b=(n(31206),n(53822),n(17324)),g=n(11654),k=n(27322);function _(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,i)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){_(o,r,i,a,s,"next",e)}function s(e){_(o,r,i,a,s,"throw",e)}a(void 0)}))}}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(){z=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!C(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=F(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:B(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=B(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function D(e){var t,n=F(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function C(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function B(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function F(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===R(t)?t:String(t)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t,n){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},M(e,t,n||e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var U='{## Imitate available variables: ##}\n{% set my_test_json = {\n  "temperature": 25,\n  "unit": "°C"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state("sun.sun", "above_horizon") -%}\n  The sun rose {{ relative_time(states.sun.sun.last_changed) }} ago.\n{%- else -%}\n  The sun will rise at {{ as_timestamp(state_attr("sun.sun", "next_rising")) | timestamp_local }}.\n{%- endif %}\n\nFor loop example getting entity values in the weather domain:\n\n{% for state in states.weather -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.';!function(e,t,n,r){var i=z();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(A(o.descriptor)||A(i.descriptor)){if(C(o)||C(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(C(o)){if(C(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}O(o,i)}else t.push(o)}return t}(a.d.map(D)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,m.Mo)("developer-tools-template")],(function(e,t){var n,_,P=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(r,t);var n=j(r);function r(){var t;x(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(S(t)),t}return r}(t);return{F:P,d:[{kind:"field",decorators:[(0,m.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_rendering",value:function(){return!1}},{kind:"field",decorators:[(0,m.SB)()],key:"_templateResult",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_unsubRenderTemplate",value:void 0},{kind:"field",key:"_template",value:function(){return""}},{kind:"field",key:"_inited",value:function(){return!1}},{kind:"method",key:"connectedCallback",value:function(){M(N(P.prototype),"connectedCallback",this).call(this),this._template&&!this._unsubRenderTemplate&&this._subscribeTemplate()}},{kind:"method",key:"disconnectedCallback",value:function(){this._unsubscribeTemplate()}},{kind:"method",key:"firstUpdated",value:function(){localStorage&&localStorage["panel-dev-template-template"]?this._template=localStorage["panel-dev-template-template"]:this._template=U,this._subscribeTemplate(),this._inited=!0}},{kind:"method",key:"render",value:function(){var e,t,n,f,m,y,b,g,_,w=this,x=R(null===(e=this._templateResult)||void 0===e?void 0:e.result),T="object"===x?Array.isArray(null===(t=this._templateResult)||void 0===t?void 0:t.result)?"list":"dict":x;return(0,h.dy)(r||(r=E(['\n      <div\n        class="content ','"\n      >\n        <div class="edit-pane">\n          <p>\n            ','\n          </p>\n          <ul>\n            <li>\n              <a\n                href="https://jinja.palletsprojects.com/en/latest/templates/"\n                target="_blank"\n                rel="noreferrer"\n                >',"\n              </a>\n            </li>\n            <li>\n              <a\n                href=",'\n                target="_blank"\n                rel="noreferrer"\n              >\n                ',"</a\n              >\n            </li>\n          </ul>\n          <p>\n            ",'\n          </p>\n          <ha-code-editor\n            mode="jinja2"\n            .hass=',"\n            .value=","\n            .error=","\n            autofocus\n            autocomplete-entities\n            autocomplete-icons\n            @value-changed=",'\n            dir="ltr"\n          ></ha-code-editor>\n          <mwc-button @click=',">\n            ",'\n          </mwc-button>\n        </div>\n\n        <div class="render-pane">\n          ',"\n          ",'\n          \x3c!-- prettier-ignore --\x3e\n          <pre\n            class="rendered ','"\n          >',"","</pre>\n          ","\n          ","\n        </div>\n      </div>\n    "])),(0,v.$)({layout:!this.narrow,horizontal:!this.narrow}),this.hass.localize("ui.panel.developer-tools.tabs.templates.description"),this.hass.localize("ui.panel.developer-tools.tabs.templates.jinja_documentation"),(0,k.R)(this.hass,"/docs/configuration/templating/"),this.hass.localize("ui.panel.developer-tools.tabs.templates.template_extensions"),this.hass.localize("ui.panel.developer-tools.tabs.templates.editor"),this.hass,this._template,this._error,this._templateChanged,this._restoreDemo,this.hass.localize("ui.panel.developer-tools.tabs.templates.reset"),this._rendering?(0,h.dy)(i||(i=E(['<ha-circular-progress\n                class="render-spinner"\n                active\n                size="small"\n              ></ha-circular-progress>']))):"",this._templateResult?(0,h.dy)(o||(o=E(["",":\n              ",""])),this.hass.localize("ui.panel.developer-tools.tabs.templates.result_type"),T):"",(0,v.$)((b={error:Boolean(this._error)},_=T,(g=T)in b?Object.defineProperty(b,g,{value:_,enumerable:!0,configurable:!0,writable:!0}):b[g]=_,b)),this._error,"object"===x?JSON.stringify(this._templateResult.result,null,2):null===(n=this._templateResult)||void 0===n?void 0:n.result,null!==(f=this._templateResult)&&void 0!==f&&f.listeners.time?(0,h.dy)(a||(a=E(["\n                <p>\n                  ","\n                </p>\n              "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.time")):"",null!==(m=this._templateResult)&&void 0!==m&&m.listeners?this._templateResult.listeners.all?(0,h.dy)(s||(s=E(['\n                <p class="all_listeners">\n                  ',"\n                </p>\n              "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.all_listeners")):this._templateResult.listeners.domains.length||this._templateResult.listeners.entities.length?(0,h.dy)(l||(l=E(["\n                <p>\n                  ","\n                </p>\n                <ul>\n                  ","\n                  ","\n                </ul>\n              "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.listeners"),this._templateResult.listeners.domains.sort().map((function(e){return(0,h.dy)(c||(c=E(["\n                          <li>\n                            <b\n                              >","</b\n                            >: ","\n                          </li>\n                        "])),w.hass.localize("ui.panel.developer-tools.tabs.templates.domain"),e)})),this._templateResult.listeners.entities.sort().map((function(e){return(0,h.dy)(u||(u=E(["\n                          <li>\n                            <b\n                              >","</b\n                            >: ","\n                          </li>\n                        "])),w.hass.localize("ui.panel.developer-tools.tabs.templates.entity"),e)}))):null!==(y=this._templateResult)&&void 0!==y&&y.listeners.time?(0,h.dy)(d||(d=E([""]))):(0,h.dy)(p||(p=E([' <span class="all_listeners">\n                ',"\n              </span>"])),this.hass.localize("ui.panel.developer-tools.tabs.templates.no_listeners")):"")}},{kind:"get",static:!0,key:"styles",value:function(){return[g.Qx,(0,h.iv)(f||(f=E(["\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px;\n        }\n\n        .edit-pane {\n          margin-right: 16px;\n        }\n\n        .edit-pane a {\n          color: var(--primary-color);\n        }\n\n        .horizontal .edit-pane {\n          max-width: 50%;\n        }\n\n        .render-pane {\n          position: relative;\n          max-width: 50%;\n        }\n\n        .render-spinner {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n        }\n\n        .rendered {\n          @apply --paper-font-code1;\n          clear: both;\n          white-space: pre-wrap;\n          background-color: var(--secondary-background-color);\n          padding: 8px;\n          direction: ltr;\n        }\n\n        .all_listeners {\n          color: var(--warning-color);\n        }\n\n        .rendered.error {\n          color: var(--error-color);\n        }\n\n        @media all and (max-width: 870px) {\n          .render-pane {\n            max-width: 100%;\n          }\n        }\n      "])))]}},{kind:"field",key:"_debounceRender",value:function(){var e=this;return(0,y.D)((function(){e._subscribeTemplate(),e._storeTemplate()}),500,!1)}},{kind:"method",key:"_templateChanged",value:function(e){this._template=e.detail.value,this._error&&(this._error=void 0),this._debounceRender()}},{kind:"method",key:"_subscribeTemplate",value:(_=w(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._rendering=!0,e.next=3,this._unsubscribeTemplate();case 3:return e.prev=3,this._unsubRenderTemplate=(0,b.N)(this.hass.connection,(function(e){t._templateResult=e,t._error=void 0}),{template:this._template,timeout:3,strict:!0}),e.next=7,this._unsubRenderTemplate;case 7:e.next=14;break;case 9:e.prev=9,e.t0=e.catch(3),this._error="Unknown error",e.t0.message&&(this._error=e.t0.message,this._templateResult=void 0),this._unsubRenderTemplate=void 0;case 14:return e.prev=14,this._rendering=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[3,9,14,17]])}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_unsubscribeTemplate",value:(n=w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._unsubRenderTemplate){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this._unsubRenderTemplate;case 5:(0,e.sent)(),this._unsubRenderTemplate=void 0,e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(2),"not_found"!==e.t0.code){e.next=15;break}e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"_storeTemplate",value:function(){this._inited&&(localStorage["panel-dev-template-template"]=this._template)}},{kind:"method",key:"_restoreDemo",value:function(){this._template=U,this._subscribeTemplate(),delete localStorage["panel-dev-template-template"]}}]}}),h.oi)},27322:function(e,t,n){n.d(t,{R:function(){return r}});var r=function(e,t){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);