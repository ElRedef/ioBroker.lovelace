/*! For license information please see 50aa2324.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[92535],{63207:function(e,t,n){n(65660),n(15112);var r,i,o,a=n(9672),s=n(87156),l=n(50856),c=n(48175);(0,a.k)({_template:(0,l.d)(r||(i=["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"],o||(o=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}})))),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:c.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,s.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,s.vz)(this.root).appendChild(this._img))}})},15112:function(e,t,n){n.d(t,{P:function(){return o}});n(48175);var r=n(9672);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}var t,n,r;return t=e,(n=[{key:"value",get:function(){var t=this.type,n=this.key;if(t&&n)return e.types[t]&&e.types[t][n]},set:function(t){var n=this.type,r=this.key;n&&r&&(n=e.types[n]=e.types[n]||{},null==t?delete n[r]:n[r]=t)}},{key:"list",get:function(){if(this.type){var t=e.types[this.type];return t?Object.keys(t).map((function(e){return a[this.type][e]}),this):[]}}},{key:"byKey",value:function(e){return this.key=e,this.value}}])&&i(t.prototype,n),r&&i(t,r),e}();o[" "]=function(){},o.types={};var a=o.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var r=new o({type:e,key:t});return void 0!==n&&n!==r.value?r.value=n:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new o({type:this.type,key:e}).value}})},21560:function(e,t,n){n.d(t,{ZH:function(){return u},MT:function(){return a},U2:function(){return l},RV:function(){return o},t8:function(){return c}});var r,i=function(){var e;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var n=function(){return indexedDB.databases().finally(t)};e=setInterval(n,100),n()})).finally((function(){return clearInterval(e)})):Promise.resolve()};function o(e){return new Promise((function(t,n){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return n(e.error)}}))}function a(e,t){var n=i().then((function(){var n=indexedDB.open(e);return n.onupgradeneeded=function(){return n.result.createObjectStore(t)},o(n)}));return function(e,r){return n.then((function(n){return r(n.transaction(t,e).objectStore(t))}))}}function s(){return r||(r=a("keyval-store","keyval")),r}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return t("readonly",(function(t){return o(t.get(e))}))}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return n("readwrite",(function(n){return n.put(t,e),o(n.transaction)}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s();return e("readwrite",(function(e){return e.clear(),o(e.transaction)}))}},33243:function(e,t,n){n.r(t);n(51187);var r,i,o,a,s,l,c,u,d,p,h,f,m,v,y=n(37500),g=n(33310),b=n(47181),_=(n(31206),n(34821)),k=(n(46583),n(4940),n(3555),n(86490)),w=n(11654);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,i)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){x(o,r,i,a,s,"next",e)}function s(e){x(o,r,i,a,s,"throw",e)}a(void 0)}))}}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var i=j(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function T(){T=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!R(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=V(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:N(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=N(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function I(e){var t,n=V(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function B(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function R(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function N(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function V(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t,n,r){var i=T();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(F(o.descriptor)||F(i.descriptor)){if(R(o)||R(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(R(o)){if(R(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}B(o,i)}else t.push(o)}return t}(a.d.map(I)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,g.Mo)("ha-dialog-import-blueprint")],(function(e,t){var n,E,x=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(r,t);var n=C(r);function r(){var t;z(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(O(t)),t}return r}(t);return{F:x,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_importing",value:function(){return!1}},{kind:"field",decorators:[(0,g.SB)()],key:"_saving",value:function(){return!1}},{kind:"field",decorators:[(0,g.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_result",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_url",value:void 0},{kind:"field",decorators:[(0,g.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._error=void 0,this._url=this._params.url}},{kind:"method",key:"closeDialog",value:function(){this._error=void 0,this._result=void 0,this._params=void 0,this._url=void 0,(0,b.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(0,y.dy)(i||(i=P(["\n      <ha-dialog\n        open\n        @closed=","\n        .heading=","\n      >\n        <div>\n          ","\n          ",'\n        </div>\n        <mwc-button\n          slot="primaryAction"\n          @click=',"\n          .disabled=","\n        >\n          ","\n        </mwc-button>\n        ","\n      </ha-dialog>\n    "])),this.closeDialog,(0,_.i)(this.hass,this.hass.localize("ui.panel.config.blueprint.add.header")),this._error?(0,y.dy)(o||(o=P([' <div class="error">',"</div> "])),this._error):"",this._result?(0,y.dy)(a||(a=P(["","\n                <br />\n                <ha-markdown\n                  breaks\n                  .content=","\n                ></ha-markdown>\n                ","\n                <ha-expansion-panel\n                  .header=","\n                >\n                  <pre>","</pre>\n                </ha-expansion-panel>"])),this.hass.localize("ui.panel.config.blueprint.add.import_header","name",(0,y.dy)(s||(s=P(["<b>","</b>"])),this._result.blueprint.metadata.name),"domain",this._result.blueprint.metadata.domain),this._result.blueprint.metadata.description,this._result.validation_errors?(0,y.dy)(l||(l=P(['\n                      <p class="error">\n                        ','\n                      </p>\n                      <ul class="error">\n                        ',"\n                      </ul>\n                    "])),this.hass.localize("ui.panel.config.blueprint.add.unsupported_blueprint"),this._result.validation_errors.map((function(e){return(0,y.dy)(c||(c=P(["<li>","</li>"])),e)}))):(0,y.dy)(u||(u=P(['\n                      <ha-textfield\n                        id="input"\n                        .value=',"\n                        .label=","\n                      ></ha-textfield>\n                    "])),this._result.suggested_filename||"",this.hass.localize("ui.panel.config.blueprint.add.file_name")),this.hass.localize("ui.panel.config.blueprint.add.raw_blueprint"),this._result.raw_data):(0,y.dy)(d||(d=P(["\n                <p>\n                  ",'\n                </p>\n                <a\n                  href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/get-blueprints"\n                  target="_blank"\n                  rel="noreferrer noopener"\n                >\n                  ',"\n                  <ha-svg-icon .path=",'></ha-svg-icon>\n                </a>\n                <ha-textfield\n                  id="input"\n                  .label=',"\n                  .value=","\n                  dialogInitialFocus\n                ></ha-textfield>\n              "])),this.hass.localize("ui.panel.config.blueprint.add.import_introduction"),this.hass.localize("ui.panel.config.blueprint.add.community_forums"),"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",this.hass.localize("ui.panel.config.blueprint.add.url"),this._url||""),this.closeDialog,this._saving,this.hass.localize("ui.common.cancel"),this._result?(0,y.dy)(f||(f=P(['\n              <mwc-button\n                slot="primaryAction"\n                @click=',"\n                .disabled=","\n              >\n                ","\n                ","\n              </mwc-button>\n            "])),this._save,this._saving||this._result.validation_errors,this._saving?(0,y.dy)(m||(m=P(['<ha-circular-progress\n                      active\n                      size="small"\n                      .title=',"\n                    ></ha-circular-progress>"])),this.hass.localize("ui.panel.config.blueprint.add.saving")):"",this.hass.localize("ui.panel.config.blueprint.add.save_btn")):(0,y.dy)(p||(p=P(['\n              <mwc-button\n                slot="primaryAction"\n                @click=',"\n                .disabled=","\n              >\n                ","\n                ","\n              </mwc-button>\n            "])),this._import,this._importing,this._importing?(0,y.dy)(h||(h=P(['<ha-circular-progress\n                      active\n                      size="small"\n                      .title=',"\n                    ></ha-circular-progress>"])),this.hass.localize("ui.panel.config.blueprint.add.importing")):"",this.hass.localize("ui.panel.config.blueprint.add.import_btn"))):(0,y.dy)(r||(r=P([""])))}},{kind:"method",key:"_import",value:(E=S(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._url=void 0,this._importing=!0,this._error=void 0,e.prev=3,n=null===(t=this._input)||void 0===t?void 0:t.value){e.next=8;break}return this._error=this.hass.localize("ui.panel.config.blueprint.add.error_no_url"),e.abrupt("return");case 8:return e.next=10,(0,k.fQ)(this.hass,n);case 10:this._result=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),this._error=e.t0.message;case 16:return e.prev=16,this._importing=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[3,13,16,19]])}))),function(){return E.apply(this,arguments)})},{kind:"method",key:"_save",value:(n=S(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._saving=!0,e.prev=1,n=null===(t=this._input)||void 0===t?void 0:t.value){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(0,k.Bp)(this.hass,this._result.blueprint.metadata.domain,n,this._result.raw_data,this._result.blueprint.metadata.source_url);case 7:this._params.importedCallback(),this.closeDialog(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),this._error=e.t0.message;case 14:return e.prev=14,this._saving=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))),function(){return n.apply(this,arguments)})},{kind:"field",static:!0,key:"styles",value:function(){return[w.yu,(0,y.iv)(v||(v=P(["\n      p {\n        margin-top: 0;\n        margin-bottom: 8px;\n      }\n      ha-textfield {\n        display: block;\n        margin-top: 24px;\n      }\n      a {\n        text-decoration: none;\n      }\n      a ha-svg-icon {\n        --mdc-icon-size: 16px;\n      }\n    "])))]}}]}}),y.oi)}}]);