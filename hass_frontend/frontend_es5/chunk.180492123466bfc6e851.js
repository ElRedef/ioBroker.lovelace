/*! For license information please see chunk.180492123466bfc6e851.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8988,1823],{14114:function(t,e,i){"use strict";i.d(e,{P:function(){return n}});var n=function(t){return function(e,i){if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){var n=e.constructor._observers;e.constructor._observers=new Map,n.forEach((function(t,i){return e.constructor._observers.set(i,t)}))}}else{e.constructor._observers=new Map;var r=e.updated;e.updated=function(t){var e=this;r.call(this,t),t.forEach((function(t,i){var n=e.constructor._observers.get(i);void 0!==n&&n.call(e,e[i],t)}))}}e.constructor._observers.set(i,t)}}},1722:function(t,e,i){"use strict";i(43437);(0,i(9672).k)({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(t){if(t&&this.tail){if(this.tail.__queryParams!==t&&this.set("tail.__queryParams",t),!this.active||this._queryParamsUpdating)return;var e={},i=!1;for(var n in t)e[n]=t[n],!i&&this.queryParams&&t[n]===this.queryParams[n]||(i=!0);for(var n in this.queryParams)if(i||!(n in t)){i=!0;break}if(!i)return;this._queryParamsUpdating=!0,this.set("queryParams",e),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(t){t&&this.route&&this.route.__queryParams!=t&&this.set("route.__queryParams",t)},__queryParamsChanged:function(t){this.active&&!this._queryParamsUpdating&&this.set("route.__"+t.path,t.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var t=this.route.path,e=this.pattern;if(this.autoActivate&&""===t&&(t="/"),e)if(t){for(var i=t.split("/"),n=e.split("/"),r=[],a={},s=0;s<n.length;s++){var o=n[s];if(!o&&""!==o)break;var u=i.shift();if(!u&&""!==u)return void this.__resetProperties();if(r.push(u),":"==o.charAt(0))a[o.slice(1)]=u;else if(o!==u)return void this.__resetProperties()}this._matched=r.join("/");var h={};this.active||(h.active=!0);var c=this.route.prefix+this._matched,l=i.join("/");for(var _ in i.length>0&&(l="/"+l),this.tail&&this.tail.prefix===c&&this.tail.path===l||(h.tail={prefix:c,path:l,__queryParams:this.route.__queryParams}),h.data=a,this._dataInUrl={},a)this._dataInUrl[_]=a[_];this.setProperties?this.setProperties(h,!0):this.__setMulti(h)}else this.__resetProperties()}},__tailPathChanged:function(t){if(this.active){var e=t,i=this._matched;e&&("/"!==e.charAt(0)&&(e="/"+e),i+=e),this.set("route.path",i)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var t=this.__getLink({});t!==this.__getLink(this._dataInUrl)&&this.set("route.path",t)}},__getLink:function(t){var e={tail:null};for(var i in this.data)e[i]=this.data[i];for(var i in t)e[i]=t[i];var n=this.pattern.split("/").map((function(t){return":"==t[0]&&(t=e[t.slice(1)]),t}),this);return e.tail&&e.tail.path&&(n.length>0&&"/"===e.tail.path.charAt(0)?n.push(e.tail.path.slice(1)):n.push(e.tail.path)),n.join("/")},__setMulti:function(t){for(var e in t)this._propertySetter(e,t[e]);void 0!==t.data&&(this._pathEffector("data",this.data),this._notifyChange("data")),void 0!==t.active&&(this._pathEffector("active",this.active),this._notifyChange("active")),void 0!==t.tail&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}})},63207:function(t,e,i){"use strict";i(65660),i(15112);var n=i(9672),r=i(87156),a=i(50856),s=i(43437);function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);return o=function(){return t},t}(0,n.k)({_template:(0,a.d)(o()),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,r.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,r.vz)(this.root).appendChild(this._img))}})},15112:function(t,e,i){"use strict";i.d(e,{P:function(){return a}});i(43437);var n=i(9672);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}var e,i,n;return e=t,(i=[{key:"byKey",value:function(t){return this.key=t,this.value}},{key:"value",get:function(){var e=this.type,i=this.key;if(e&&i)return t.types[e]&&t.types[e][i]},set:function(e){var i=this.type,n=this.key;i&&n&&(i=t.types[i]=t.types[i]||{},null==e?delete i[n]:i[n]=e)}},{key:"list",get:function(){if(this.type){var e=t.types[this.type];return e?Object.keys(e).map((function(t){return s[this.type][t]}),this):[]}}}])&&r(e.prototype,i),n&&r(e,n),t}();a[" "]=function(){},a.types={};var s=a.types;(0,n.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new a({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new a({type:this.type,key:t}).value}})},58993:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,{yh:function(){return s},U2:function(){return u},t8:function(){return h},ZH:function(){return c}});var a,s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"keyval-store",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keyval";n(this,t),this.storeName=i,this._dbp=new Promise((function(t,n){var r=indexedDB.open(e,1);r.onerror=function(){return n(r.error)},r.onsuccess=function(){return t(r.result)},r.onupgradeneeded=function(){r.result.createObjectStore(i)}}))}var e,i,a;return e=t,(i=[{key:"_withIDBStore",value:function(t,e){var i=this;return this._dbp.then((function(n){return new Promise((function(r,a){var s=n.transaction(i.storeName,t);s.oncomplete=function(){return r()},s.onabort=s.onerror=function(){return a(s.error)},e(s.objectStore(i.storeName))}))}))}}])&&r(e.prototype,i),a&&r(e,a),t}();function o(){return a||(a=new s),a}function u(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o();return i._withIDBStore("readonly",(function(i){e=i.get(t)})).then((function(){return e.result}))}function h(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o();return i._withIDBStore("readwrite",(function(i){i.put(e,t)}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o();return t._withIDBStore("readwrite",(function(t){t.clear()}))}}}]);
//# sourceMappingURL=chunk.180492123466bfc6e851.js.map