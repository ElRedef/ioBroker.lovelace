"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3212],{319:function(e,t,r){var n,i,o,a,s=r(37500),l=r(33310),c=r(96151);r(9381);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){d(o,n,i,a,s,"next",e)}function s(e){d(o,n,i,a,s,"throw",e)}a(void 0)}))}}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var i=C(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!g(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=x(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:P(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=P(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function w(e){var t,r=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function E(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function g(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function P(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function x(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t,r){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},O(e,t,r||e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}!function(e,t,r,n){var i=k();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(_(o.descriptor)||_(i.descriptor)){if(g(o)||g(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(g(o)){if(g(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}E(o,i)}else t.push(o)}return t}(a.d.map(w)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,l.Mo)("ha-hls-player")],(function(e,t){var u,d,v,k,w=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,t);var r=m(n);function n(){var t;h(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(b(t)),t}return n}(t);return{F:w,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"url",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:function(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:function(){return!1}},{kind:"field",decorators:[(0,l.IO)("video")],key:"_videoEl",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_errorIsFatal",value:function(){return!1}},{kind:"field",key:"_hlsPolyfillInstance",value:void 0},{kind:"field",key:"_exoPlayer",value:function(){return!1}},{kind:"field",static:!0,key:"streamCount",value:function(){return 0}},{kind:"method",key:"connectedCallback",value:function(){O(C(w.prototype),"connectedCallback",this).call(this),w.streamCount+=1,this.hasUpdated&&(this._resetError(),this._startHls())}},{kind:"method",key:"disconnectedCallback",value:function(){O(C(w.prototype),"disconnectedCallback",this).call(this),w.streamCount-=1,this._cleanUp()}},{kind:"method",key:"render",value:function(){return(0,s.dy)(n||(n=p(["\n      ","\n      ","\n    "])),this._error?(0,s.dy)(i||(i=p(['<ha-alert\n            alert-type="error"\n            class=',"\n          >\n            ","\n          </ha-alert>"])),this._errorIsFatal?"fatal":"retry",this._error):"",this._errorIsFatal?"":(0,s.dy)(o||(o=p(["<video\n            ?autoplay=","\n            .muted=","\n            ?playsinline=","\n            ?controls=","\n          ></video>"])),this.autoPlay,this.muted,this.playsInline,this.controls))}},{kind:"method",key:"updated",value:function(e){O(C(w.prototype),"updated",this).call(this,e),e.has("url")&&(this._cleanUp(),this._resetError(),this._startHls())}},{kind:"method",key:"_startHls",value:(k=f(regeneratorRuntime.mark((function e(){var t,n,i,o,a,s,l,c,u,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.url),e.next=3,r.e(94683).then(r.t.bind(r,94683,23));case 3:if(i=e.sent.default,this.isConnected){e.next=6;break}return e.abrupt("return");case 6:if((o=i.isSupported())||(o=""!==this._videoEl.canPlayType("application/vnd.apple.mpegurl")),o){e.next=11;break}return this._setFatalError(this.hass.localize("ui.components.media-browser.video_not_supported")),e.abrupt("return");case 11:return a=this.allowExoPlayer&&(null===(t=this.hass.auth.external)||void 0===t?void 0:t.config.hasExoPlayer),e.next=14,n;case 14:return e.next=16,e.sent.text();case 16:if(s=e.sent,this.isConnected){e.next=19;break}return e.abrupt("return");case 19:c=(l=/#EXT-X-STREAM-INF:.*?(?:CODECS=".*?(hev1|hvc1)?\..*?".*?)?(?:\n|\r\n)(.+)/g).exec(s),u=l.exec(s),d=null!==c&&null===u?new URL(c[2],this.url).href:this.url,a&&null!==c&&void 0!==c[1]?this._renderHLSExoPlayer(d):i.isSupported()?this._renderHLSPolyfill(this._videoEl,i,d):this._renderHLSNative(this._videoEl,d);case 24:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{kind:"method",key:"_renderHLSExoPlayer",value:(v=f(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._exoPlayer=!0,window.addEventListener("resize",this._resizeExoPlayer),this.updateComplete.then((function(){return(0,c.y)()})).then(this._resizeExoPlayer),this._videoEl.style.visibility="hidden",e.next=6,this.hass.auth.external.sendMessage({type:"exoplayer/play_hls",payload:{url:new URL(t,window.location.href).toString(),muted:this.muted}});case 6:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{kind:"field",key:"_resizeExoPlayer",value:function(){var e=this;return function(){if(e._videoEl){var t=e._videoEl.getBoundingClientRect();e.hass.auth.external.fireMessage({type:"exoplayer/resize",payload:{left:t.left,top:t.top,right:t.right,bottom:t.bottom}})}}}},{kind:"method",key:"_isLLHLSSupported",value:function(){if(w.streamCount<=2)return!0;if(!("performance"in window)||0===performance.getEntriesByType("resource").length)return!1;var e=performance.getEntriesByType("resource")[0];return"nextHopProtocol"in e&&"h2"===e.nextHopProtocol}},{kind:"method",key:"_renderHLSPolyfill",value:(d=f(regeneratorRuntime.mark((function e(t,r,n){var i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=new r({backBufferLength:60,fragLoadingTimeOut:3e4,manifestLoadingTimeOut:3e4,levelLoadingTimeOut:3e4,maxLiveSyncPlaybackRate:2,lowLatencyMode:this._isLLHLSSupported()}),this._hlsPolyfillInstance=i,i.attachMedia(t),i.on(r.Events.MEDIA_ATTACHED,(function(){o._resetError(),i.loadSource(n)})),i.on(r.Events.FRAG_LOADED,(function(e,t){o._resetError()})),i.on(r.Events.ERROR,(function(e,t){if(t.fatal)if(t.type===r.ErrorTypes.NETWORK_ERROR){switch(t.details){case r.ErrorDetails.MANIFEST_LOAD_ERROR:var n="Error starting stream, see logs for details";void 0!==t.response&&void 0!==t.response.code&&(t.response.code>=500?n+=" (Server failure)":t.response.code>=400?n+=" (Stream never started)":n+=" ("+t.response.code+")"),o._setRetryableError(n);break;case r.ErrorDetails.MANIFEST_LOAD_TIMEOUT:o._setRetryableError("Timeout while starting stream");break;default:o._setRetryableError("Stream network error")}i.startLoad()}else t.type===r.ErrorTypes.MEDIA_ERROR?(o._setRetryableError("Error with media stream contents"),i.recoverMediaError()):o._setFatalError("Error playing stream")}));case 6:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return d.apply(this,arguments)})},{kind:"method",key:"_renderHLSNative",value:(u=f(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.src=r,t.addEventListener("loadedmetadata",(function(){t.play()}));case 2:case"end":return e.stop()}}),e)}))),function(e,t){return u.apply(this,arguments)})},{kind:"method",key:"_cleanUp",value:function(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0),this._exoPlayer&&(window.removeEventListener("resize",this._resizeExoPlayer),this.hass.auth.external.fireMessage({type:"exoplayer/stop"}),this._exoPlayer=!1),this._videoEl&&(this._videoEl.removeAttribute("src"),this._videoEl.load())}},{kind:"method",key:"_resetError",value:function(){this._error=void 0,this._errorIsFatal=!1}},{kind:"method",key:"_setFatalError",value:function(e){this._error=e,this._errorIsFatal=!0}},{kind:"method",key:"_setRetryableError",value:function(e){this._error=e,this._errorIsFatal=!1}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(a||(a=p(["\n      :host,\n      video {\n        display: block;\n      }\n\n      video {\n        width: 100%;\n        max-height: var(--video-max-height, calc(100vh - 97px));\n      }\n\n      .fatal {\n        display: block;\n        padding: 100px 16px;\n      }\n\n      .retry {\n        display: block;\n      }\n    "])))}}]}}),s.oi)},3212:function(e,t,r){r.r(t),r.d(t,{HuiDialogWebBrowserPlayMedia:function(){return R}});var n,i,o,a,s,l,c,u,d=r(37500),f=r(33310),p=r(47181),h=r(34821),y=(r(319),r(11654));function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var i=_(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!O(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=D(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:T(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=T(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=D(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function O(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function T(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function D(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=function(e,t,r,n){var i=P();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(C(o.descriptor)||C(i.descriptor)){if(O(o)||O(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(O(o)){if(O(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}S(o,i)}else t.push(o)}return t}(a.d.map(x)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,f.Mo)("hui-dialog-web-browser-play-media")],(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t);var r=w(n);function n(){var t;b(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(g(t)),t}return n}(t);return{F:r,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,p.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||!this._params.sourceType||!this._params.sourceUrl)return(0,d.dy)(n||(n=v([""])));var e=this._params.sourceType.split("/",1)[0];return(0,d.dy)(i||(i=v(["\n      <ha-dialog\n        open\n        hideActions\n        .heading=","\n        @closed=","\n      >\n        ","\n      </ha-dialog>\n    "])),(0,h.i)(this.hass,this._params.title||this.hass.localize("ui.components.media-browser.media_player")),this.closeDialog,"audio"===e?(0,d.dy)(o||(o=v(["\n              <audio controls autoplay>\n                <source\n                  src=","\n                  type=","\n                />\n                ","\n              </audio>\n            "])),this._params.sourceUrl,this._params.sourceType,this.hass.localize("ui.components.media-browser.audio_not_supported")):"video"===e?(0,d.dy)(a||(a=v(["\n              <video controls autoplay playsinline>\n                <source\n                  src=","\n                  type=","\n                />\n                ","\n              </video>\n            "])),this._params.sourceUrl,this._params.sourceType,this.hass.localize("ui.components.media-browser.video_not_supported")):"application/x-mpegURL"===this._params.sourceType?(0,d.dy)(s||(s=v(["\n              <ha-hls-player\n                controls\n                autoplay\n                playsinline\n                .hass=","\n                .url=","\n              ></ha-hls-player>\n            "])),this.hass,this._params.sourceUrl):"image"===e?(0,d.dy)(l||(l=v(["<img src="," />"])),this._params.sourceUrl):(0,d.dy)(c||(c=v(["",""])),this.hass.localize("ui.components.media-browser.media_not_supported")))}},{kind:"get",static:!0,key:"styles",value:function(){return[y.yu,(0,d.iv)(u||(u=v(["\n        @media (min-width: 800px) {\n          ha-dialog {\n            --mdc-dialog-max-width: 800px;\n            --mdc-dialog-min-width: 400px;\n          }\n        }\n\n        video,\n        audio,\n        img {\n          outline: none;\n          width: 100%;\n        }\n      "])))]}}]}}),d.oi)}}]);