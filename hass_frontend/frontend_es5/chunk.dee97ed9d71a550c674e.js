(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3465],{65253:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))}}r.d(t,{Pb:function(){return o},CE:function(){return a},uh:function(){return s},r4:function(){return c},Nq:function(){return u},h8:function(){return l}});var o="system-admin",a="system-users",s=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=i(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:r,group_ids:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),u=function(){var e=i(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign({},n,{type:"config/auth/update",user_id:r})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),l=function(){var e=i(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},26765:function(e,t,r){"use strict";r.d(t,{Ys:function(){return a},g7:function(){return s},D9:function(){return c}});var n=r(47181),i=function(){return Promise.all([r.e(8200),r.e(879),r.e(6372),r.e(6547),r.e(6509),r.e(4821),r.e(7230)]).then(r.bind(r,1281))},o=function(e,t,r){return new Promise((function(o){var a=t.cancel,s=t.confirm;(0,n.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:i,dialogParams:Object.assign({},t,r,{cancel:function(){o(!!(null==r?void 0:r.prompt)&&null),a&&a()},confirm:function(e){o(!(null==r?void 0:r.prompt)||e),s&&s(e)}})})}))},a=function(e,t){return o(e,t)},s=function(e,t){return o(e,t,{confirmation:!0})},c=function(e,t){return o(e,t,{prompt:!0})}},9914:function(e,t,r){"use strict";r.r(t),r.d(t,{HaConfigUsers:function(){return B}});r(29119);var n=r(55317),i=r(15652),o=r(94707),a=r(14516),s=(r(52039),r(65253)),c=r(26765),u=(r(96551),r(29311)),l=r(91188),f=r(47181),d=function(){return Promise.all([r.e(3641),r.e(6372),r.e(6547),r.e(4821),r.e(4950)]).then(r.bind(r,4503))};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e))return U(e)}(e)||F(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){m(o,n,i,a,s,"next",e)}function s(e){m(o,n,i,a,s,"throw",e)}a(void 0)}))}}function v(){var e=E(["\n      <hass-tabs-subpage-data-table\n        .hass=","\n        .narrow=","\n        .route=",'\n        backPath="/config"\n        .tabs=',"\n        .columns=","\n        .data=","\n        @row-click=",'\n        hasFab\n        clickable\n      >\n        <mwc-fab\n          slot="fab"\n          .title=',"\n          @click=",'\n        >\n          <ha-svg-icon slot="icon" .path=',"></ha-svg-icon>\n        </mwc-fab>\n      </hass-tabs-subpage-data-table>\n    "]);return v=function(){return e},e}function b(){var e=E([' <ha-icon icon="hass:check-circle-outline"></ha-icon> ']);return b=function(){return e},e}function g(){var e=E(["\n            ","\n          "]);return g=function(){return e},e}function w(){var e=E(["\n            ","\n          "]);return w=function(){return e},e}function k(){var e=E(["\n            ","\n          "]);return k=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=q(e);if(t){var i=q(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(){C=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!D(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||F(t)||I(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=T(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function R(e){var t,r=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function j(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function T(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function I(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function W(e,t,r){return(W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e,t,r,n){var i=C();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(z(o.descriptor)||z(i.descriptor)){if(D(o)||D(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(D(o)){if(D(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}j(o,i)}else t.push(o)}return t}(a.d.map(R)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,i.Mo)("ha-config-users")],(function(e,t){var r,p=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(n,t);var r=x(n);function n(){var t;P(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(S(t)),t}return n}(t);return{F:p,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"_users",value:function(){return[]}},{kind:"field",decorators:[(0,i.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"route",value:void 0},{kind:"field",key:"_columns",value:function(){var e=this;return(0,a.Z)((function(t){return{name:{title:e.hass.localize("ui.panel.config.users.picker.headers.name"),sortable:!0,filterable:!0,direction:"asc",grows:!0,template:function(t){return(0,o.dy)(k(),t||e.hass.localize("ui.panel.config.users.editor.unnamed_user"))}},group_ids:{title:e.hass.localize("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"30%",template:function(t){return(0,o.dy)(w(),e.hass.localize("groups.".concat(t[0])))}},system_generated:{title:e.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",width:"80px",sortable:!0,filterable:!0,template:function(e){return(0,o.dy)(g(),e?(0,o.dy)(b()):"")}}}}))}},{kind:"method",key:"firstUpdated",value:function(e){W(q(p.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return(0,o.dy)(v(),this.hass,this.narrow,this.route,u.configSections.persons,this._columns(this.hass.language),this._users,this._editUser,this.hass.localize("ui.panel.config.users.picker.add_user"),this._addUser,n.qX5)}},{kind:"method",key:"_fetchUsers",value:(r=y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.uh)(this.hass);case 2:this._users=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_editUser",value:function(e){var t,r,n,i,o=this,a=e.detail.id,u=this._users.find((function(e){return e.id===a}));u&&(t=this,r={entry:u,updateEntry:(i=y(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Nq)(o.hass,u.id,t);case 2:r=e.sent,o._users=o._users.map((function(e){return e===u?r.user:e}));case 4:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),removeEntry:(n=y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.g7)(o,{title:o.hass.localize("ui.panel.config.users.editor.confirm_user_deletion","name",u.name),dismissText:o.hass.localize("ui.common.no"),confirmText:o.hass.localize("ui.common.yes")});case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,(0,s.h8)(o.hass,u.id);case 7:return o._users=o._users.filter((function(e){return e!==u})),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])}))),function(){return n.apply(this,arguments)})},(0,f.B)(t,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:d,dialogParams:r}))}},{kind:"method",key:"_addUser",value:function(){var e,t=this;(0,l.G)(this,{userAddedCallback:(e=y(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(t._users=[].concat(h(t._users),[r]));case 1:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}}]}}),i.oi)},91188:function(e,t,r){"use strict";r.d(t,{G:function(){return o}});var n=r(47181),i=function(){return Promise.all([r.e(3641),r.e(6372),r.e(6547),r.e(4821),r.e(4894)]).then(r.bind(r,74898))},o=function(e,t){(0,n.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:i,dialogParams:t})}}}]);
//# sourceMappingURL=chunk.dee97ed9d71a550c674e.js.map