/*! For license information please see 64c07e8f.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7314],{14166:function(e,t,n){n.d(t,{W:function(){return i}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};function i(e,t,n){void 0===t&&(t=Date.now()),void 0===n&&(n={});var i=r(r({},o),n||{}),a=(+e-+t)/1e3;if(Math.abs(a)<i.second)return{value:Math.round(a),unit:"second"};var s=a/60;if(Math.abs(s)<i.minute)return{value:Math.round(s),unit:"minute"};var u=a/3600;if(Math.abs(u)<i.hour)return{value:Math.round(u),unit:"hour"};var c=a/86400;if(Math.abs(c)<i.day)return{value:Math.round(c),unit:"day"};var l=new Date(e),f=new Date(t),d=l.getFullYear()-f.getFullYear();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"year"};var h=12*d+l.getMonth()-f.getMonth();if(Math.round(Math.abs(h))>0)return{value:Math.round(h),unit:"month"};var p=a/604800;return{value:Math.round(p),unit:"week"}}var o={second:45,minute:45,hour:22,day:5}},7323:function(e,t,n){n.d(t,{p:function(){return r}});var r=function(e,t){return e&&e.config.components.includes(t)}},25516:function(e,t,n){n.d(t,{i:function(){return r}});var r=function(e){return function(t){return{kind:"method",placement:"prototype",key:t.key,descriptor:{set:function(e){this["__".concat(String(t.key))]=e},get:function(){return this["__".concat(String(t.key))]},enumerable:!0,configurable:!0},finisher:function(n){var r=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){if(r.call(this),this[t.key]){var n=this.renderRoot.querySelector(e);if(!n)return;n.scrollTop=this[t.key]}}}}}}},21780:function(e,t,n){n.d(t,{f:function(){return r}});var r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},43793:function(e,t,n){n.d(t,{x:function(){return r}});var r=function(e,t){return e.substring(0,t.length)===t}},97389:function(e,t,n){n.d(t,{mA:function(){return i},lj:function(){return o},U_:function(){return a},nV:function(){return s},Zm:function(){return u}});var r=n(43793),i=function(e,t,n,r){return e.callWS({type:"trace/get",domain:t,item_id:n,run_id:r})},o=function(e,t,n){return e.callWS({type:"trace/list",domain:t,item_id:n})},a=function(e,t,n){return e.callWS({type:"trace/contexts",domain:t,item_id:n})},s=function(e,t){for(var n=t.split("/").reverse(),r=e;n.length;){var i=n.pop(),o=Number(i);if(isNaN(o))r=r[i];else if(Array.isArray(r))r=r[o];else if(0!==o)throw new Error("If config is not an array, can only return index 0")}return r},u=function(e){return"trigger"===e||(0,r.x)(e,"trigger/")}},65253:function(e,t,n){function r(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,u,"next",e)}function u(e){r(a,i,o,s,u,"throw",e)}s(void 0)}))}}n.d(t,{Pb:function(){return u},CE:function(){return c},uh:function(){return l},r4:function(){return f},Nq:function(){return d},h8:function(){return h},fm:function(){return p}});var o,a,s,u="system-admin",c="system-users",l=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=2143==n.j?(o=i(regeneratorRuntime.mark((function e(t,n,r,i){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:n,group_ids:r,local_only:i}));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n,r){return o.apply(this,arguments)}):null,d=2143==n.j?(a=i(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign({},r,{type:"config/auth/update",user_id:n})));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return a.apply(this,arguments)}):null,h=2143==n.j?(s=i(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:n}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}):null,p=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substr(0,1)})).join(""):"?"}},26765:function(e,t,n){n.d(t,{Ys:function(){return a},g7:function(){return s},D9:function(){return u}});var r=n(47181),i=function(){return Promise.all([n.e(5243),n.e(8200),n.e(879),n.e(2421),n.e(4821),n.e(5458)]).then(n.bind(n,1281))},o=function(e,t,n){return new Promise((function(o){var a=t.cancel,s=t.confirm;(0,r.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:i,dialogParams:Object.assign({},t,n,{cancel:function(){o(!(null==n||!n.prompt)&&null),a&&a()},confirm:function(e){o(null==n||!n.prompt||e),s&&s(e)}})})}))},a=function(e,t){return o(e,t)},s=function(e,t){return o(e,t,{confirmation:!0})},u=function(e,t){return o(e,t,{prompt:!0})}},18873:function(e,t,n){n.r(t),n.d(t,{HaPanelLogbook:function(){return J}});n(53268),n(12730);var r,i,o,a,s,u=n(37500),c=n(26767),l=n(5701),f=n(17717),d=n(59401),h=n(59281),p=n(27088),y=n(70390),v=n(83008),m=n(47538),g=n(79021),b=n(7323),_=n(22311),k=n(87744),w=(n(74535),n(31206),n(44491),n(10983),n(48932),n(55422)),A=n(97389),S=n(65253),E=n(26765),P=(n(27849),n(11654)),x=(n(97740),n(15493));function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function D(e,t){return q(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||Q(e,t)||Y()}function $(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Q(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function C(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){C(o,r,i,a,s,"next",e)}function s(e){C(o,r,i,a,s,"throw",e)}a(void 0)}))}}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var i=G(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return z(this,n)}}function z(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){H=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!L(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),u=this.toElementFinisherExtras((0,i[o])(s)||s);e=u.element,this.addElementPlacement(e,t),u.finisher&&r.push(u.finisher);var c=u.extras;if(c){for(var l=0;l<c.length;l++)this.addElementPlacement(c[l],t);n.push.apply(n,c)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,q(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||Q(t)||Y()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=W(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:Z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=Z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function U(e){var t,n=W(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function B(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function L(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Z(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function W(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}function Y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Q(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e){if(Array.isArray(e))return e}function X(e,t,n){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},X(e,t,n||e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var J=function(e,t,n,r){var i=H();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(F(o.descriptor)||F(i.descriptor)){if(L(o)||L(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(L(o)){if(L(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}B(o,i)}else t.push(o)}return t}(a.d.map(U)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.M)("ha-panel-logbook")],(function(e,t){var n,c,O=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(r,t);var n=M(r);function r(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=n.call(this),e(N(t));var i=new Date;i.setHours(i.getHours()-2,0,0,0),t._startDate=i;var o=new Date;return o.setHours(o.getHours()+1,0,0,0),t._endDate=o,t}return r}(t);return{F:O,d:[{kind:"field",decorators:[(0,l.C)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.C)({reflect:!0,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,l.C)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,l.C)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,l.C)()],key:"_entityId",value:function(){return""}},{kind:"field",decorators:[(0,l.C)()],key:"_isLoading",value:function(){return!1}},{kind:"field",decorators:[(0,l.C)()],key:"_entries",value:function(){return[]}},{kind:"field",decorators:[(0,l.C)({reflect:!0,type:Boolean})],key:"rtl",value:function(){return!1}},{kind:"field",decorators:[(0,f.S)()],key:"_ranges",value:void 0},{kind:"field",key:"_fetchUserPromise",value:void 0},{kind:"field",decorators:[(0,f.S)()],key:"_userIdToName",value:function(){return{}}},{kind:"field",decorators:[(0,f.S)()],key:"_traceContexts",value:function(){return{}}},{kind:"method",key:"render",value:function(){return(0,u.dy)(r||(r=T(['\n      <ha-app-layout>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              .hass=',"\n              .narrow=","\n            ></ha-menu-button>\n            <div main-title>","</div>\n            <ha-icon-button\n              @click=","\n              .path=","\n              .label=","\n              .disabled=","\n            ></ha-icon-button>\n          </app-toolbar>\n        </app-header>\n\n        ",'\n\n        <div class="filters">\n          <ha-date-range-picker\n            .hass=',"\n            ?disabled=","\n            .startDate=","\n            .endDate=","\n            .ranges=","\n            @change=","\n          ></ha-date-range-picker>\n\n          <ha-entity-picker\n            .hass=","\n            .value=","\n            .label=","\n            .disabled=","\n            @change=","\n          ></ha-entity-picker>\n        </div>\n\n        ","\n      </ha-app-layout>\n    "])),this.hass,this.narrow,this.hass.localize("panel.logbook"),this._refreshLogbook,"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",this.hass.localize("ui.common.refresh"),this._isLoading,this._isLoading?(0,u.dy)(i||(i=T([""]))):"",this.hass,this._isLoading,this._startDate,this._endDate,this._ranges,this._dateRangeChanged,this.hass,this._entityId,this.hass.localize("ui.components.entity.entity-picker.entity"),this._isLoading,this._entityPicked,this._isLoading?(0,u.dy)(o||(o=T(['\n              <div class="progress-wrapper">\n                <ha-circular-progress\n                  active\n                  alt=',"\n                ></ha-circular-progress>\n              </div>\n            "])),this.hass.localize("ui.common.loading")):(0,u.dy)(a||(a=T(["\n              <ha-logbook\n                .hass=","\n                .entries=","\n                .userIdToName=","\n                .traceContexts=","\n                virtualize\n              ></ha-logbook>\n            "])),this.hass,this._entries,this._userIdToName,this._traceContexts))}},{kind:"method",key:"firstUpdated",value:function(e){var t,n;X(G(O.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("title"),this._fetchUserPromise=this._fetchUserNames();var r=new Date,i=(0,d.Z)(r),o=(0,h.Z)(r);this._ranges=(R(t={},this.hass.localize("ui.components.date-range-picker.ranges.today"),[(0,p.Z)(),(0,y.Z)()]),R(t,this.hass.localize("ui.components.date-range-picker.ranges.yesterday"),[(0,v.Z)(),(0,m.Z)()]),R(t,this.hass.localize("ui.components.date-range-picker.ranges.this_week"),[i,o]),R(t,this.hass.localize("ui.components.date-range-picker.ranges.last_week"),[(0,g.Z)(i,-7),(0,g.Z)(o,-7)]),t),this._entityId=null!==(n=(0,x.io)("entity_id"))&&void 0!==n?n:"";var a=(0,x.io)("start_date");a&&(this._startDate=new Date(a))}},{kind:"method",key:"updated",value:function(e){if((e.has("_startDate")||e.has("_endDate")||e.has("_entityId"))&&this._getData(),e.has("hass")){var t=e.get("hass");t&&t.language===this.hass.language||(this.rtl=(0,k.HE)(this.hass))}}},{kind:"method",key:"_fetchUserNames",value:(c=j(regeneratorRuntime.mark((function e(){var t,n,r,i,o,a,s,u=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},r=(null===(t=this.hass.user)||void 0===t?void 0:t.is_admin)&&(0,S.uh)(this.hass),Object.values(this.hass.states).forEach((function(e){e.attributes.user_id&&"person"===(0,_.N)(e)&&(u._userIdToName[e.attributes.user_id]=e.attributes.friendly_name)})),!r){e.next=9;break}return e.next=6,r;case 6:i=e.sent,o=$(i);try{for(o.s();!(a=o.n()).done;)(s=a.value).id in n||(n[s.id]=s.name)}catch(c){o.e(c)}finally{o.f()}case 9:this._userIdToName=n;case 10:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{kind:"method",key:"_dateRangeChanged",value:function(e){this._startDate=e.detail.startDate;var t=e.detail.endDate;0===t.getHours()&&0===t.getMinutes()&&(t.setDate(t.getDate()+1),t.setMilliseconds(t.getMilliseconds()-1)),this._endDate=t}},{kind:"method",key:"_entityPicked",value:function(e){this._entityId=e.target.value}},{kind:"method",key:"_refreshLogbook",value:function(){this._entries=[],(0,w.tf)(this._startDate.toISOString(),this._endDate.toISOString()),this._getData()}},{kind:"method",key:"_getData",value:(n=j(regeneratorRuntime.mark((function e(){var t,n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._isLoading=!0,e.prev=1,e.next=4,Promise.all([(0,w.rM)(this.hass,this._startDate.toISOString(),this._endDate.toISOString(),this._entityId),(0,b.p)(this.hass,"trace")&&null!==(r=this.hass.user)&&void 0!==r&&r.is_admin?(0,A.U_)(this.hass):{},this._fetchUserPromise]);case 4:i=e.sent,o=D(i,2),t=o[0],n=o[1],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),(0,E.Ys)(this,{title:this.hass.localize("ui.components.logbook.retrieval_error"),text:e.t0.message});case 13:this._entries=t,this._traceContexts=n,this._isLoading=!1;case 16:case"end":return e.stop()}}),e,this,[[1,10]])}))),function(){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[P.Qx,(0,u.iv)(s||(s=T(["\n        ha-logbook,\n        .progress-wrapper {\n          height: calc(100vh - 136px);\n        }\n\n        :host([narrow]) ha-logbook,\n        :host([narrow]) .progress-wrapper {\n          height: calc(100vh - 198px);\n        }\n\n        ha-date-range-picker {\n          margin-right: 16px;\n          max-width: 100%;\n        }\n\n        :host([narrow]) ha-date-range-picker {\n          margin-right: 0;\n        }\n\n        .progress-wrapper {\n          position: relative;\n        }\n\n        ha-circular-progress {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n\n        .filters {\n          display: flex;\n          align-items: flex-end;\n          padding: 0 16px;\n        }\n\n        :host([narrow]) .filters {\n          flex-wrap: wrap;\n        }\n\n        ha-entity-picker {\n          display: inline-block;\n          flex-grow: 1;\n          max-width: 400px;\n        }\n\n        :host([narrow]) ha-entity-picker {\n          max-width: none;\n          width: 100%;\n        }\n      "])))]}}]}}),u.oi)},19596:function(e,t,n){n.d(t,{s:function(){return w}});var r=n(81563),i=n(38941);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},c(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(v){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function p(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function e(t,n){var r,i,o=t._$AN;if(void 0===o)return!1;var a,s=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=p(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(o);try{for(s.s();!(a=s.n()).done;){var u=a.value;null===(i=(r=u)._$AO)||void 0===i||i.call(r,n,!1),e(u,n)}}catch(c){s.e(c)}finally{s.f()}return!0},m=function(e){var t,n;do{if(void 0===(t=e._$AM))break;(n=t._$AN).delete(e),e=t}while(0===(null==n?void 0:n.size))},g=function(e){for(var t;t=e._$AM;e=t){var n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),k(t)}};function b(e){void 0!==this._$AN?(m(this),this._$AM=e,g(this)):this._$AM=e}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(var o=n;o<r.length;o++)v(r[o],!1),m(r[o]);else null!=r&&(v(r,!1),m(r));else v(this,e)}var k=function(e){var t,n,r,o;e.type==i.pX.CHILD&&(null!==(t=(r=e)._$AP)&&void 0!==t||(r._$AP=_),null!==(n=(o=e)._$AQ)&&void 0!==n||(o._$AQ=b))},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(d,e);var t,n,i,o=f(d);function d(){var e;return s(this,d),(e=o.apply(this,arguments))._$AN=void 0,e}return t=d,n=[{key:"_$AT",value:function(e,t,n){c(h(d.prototype),"_$AT",this).call(this,e,t,n),g(this),this.isConnected=e._$AU}},{key:"_$AO",value:function(e){var t,n,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),r&&(v(this,e),m(this))}},{key:"setValue",value:function(e){if((0,r.OR)(this._$Ct))this._$Ct._$AI(e,this);else{var t=a(this._$Ct._$AH);t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}],n&&u(t.prototype,n),i&&u(t,i),d}(i.Xe)},81563:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{E_:function(){return y},i9:function(){return h},_Y:function(){return c},pt:function(){return o},OR:function(){return s},hN:function(){return a},ws:function(){return p},fk:function(){return l},hl:function(){return d}});var i=n(15304).Al.H,o=function(e){return null===e||"object"!=r(e)&&"function"!=typeof e},a=function(e,t){var n,r;return void 0===t?void 0!==(null===(n=e)||void 0===n?void 0:n._$litType$):(null===(r=e)||void 0===r?void 0:r._$litType$)===t},s=function(e){return void 0===e.strings},u=function(){return document.createComment("")},c=function(e,t,n){var r,o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===n){var s=o.insertBefore(u(),a),c=o.insertBefore(u(),a);n=new i(s,c,e,e.options)}else{var l,f=n._$AB.nextSibling,d=n._$AM,h=d!==e;if(h)null===(r=n._$AQ)||void 0===r||r.call(n,e),n._$AM=e,void 0!==n._$AP&&(l=e._$AU)!==d._$AU&&n._$AP(l);if(f!==a||h)for(var p=n._$AA;p!==f;){var y=p.nextSibling;o.insertBefore(p,a),p=y}}return n},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return e._$AI(t,n),e},f={},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return e._$AH=t},h=function(e){return e._$AH},p=function(e){var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);for(var n=e._$AA,r=e._$AB.nextSibling;n!==r;){var i=n.nextSibling;n.remove(),n=i}},y=function(e){e._$AR()}}}]);