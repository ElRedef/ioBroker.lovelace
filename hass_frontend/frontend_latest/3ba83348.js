"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[97282],{73589:(e,t,r)=>{r.d(t,{Z:()=>n});const i=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(`${e} is not a number`);return t};function n(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:i(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:i(t[0]),h:1}:{w:i(t[0]),h:i(t[1])}}catch(e){}return null}},22780:(e,t,r)=>{var i=r(37500),n=r(26767),o=r(5701),a=r(17717),s=r(7323),l=r(91741),c=r(40095),d=r(50538),h=(r(319),r(67352));r(9381);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function p(e){var t,r=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function g(e,t,r){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},g(e,t,r||e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}!function(e,t,r,i){var n=u();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(y(o.descriptor)||y(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}f(o,n)}else t.push(o)}return t}(a.d.map(p)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.M)("ha-web-rtc-player")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"entityid",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:()=>!1},{kind:"field",decorators:[(0,a.S)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,h.I)("#remote-stream")],key:"_videoEl",value:void 0},{kind:"field",key:"_peerConnection",value:void 0},{kind:"field",key:"_remoteStream",value:void 0},{kind:"method",key:"render",value:function(){return this._error?i.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:i.dy`
      <video
        id="remote-stream"
        ?autoplay=${this.autoPlay}
        .muted=${this.muted}
        ?playsinline=${this.playsInline}
        ?controls=${this.controls}
      ></video>
    `}},{kind:"method",key:"disconnectedCallback",value:function(){g(w(r.prototype),"disconnectedCallback",this).call(this),this._cleanUp()}},{kind:"method",key:"updated",value:function(e){e.has("entityid")&&this._videoEl&&this._startWebRtc()}},{kind:"method",key:"_startWebRtc",value:async function(){this._error=void 0;const e=new RTCPeerConnection;e.createDataChannel("dataSendChannel"),e.addTransceiver("audio",{direction:"recvonly"}),e.addTransceiver("video",{direction:"recvonly"});const t=await e.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!0});let r;await e.setLocalDescription(t);try{r=await(0,d.tb)(this.hass,this.entityid,t.sdp)}catch(t){return this._error="Failed to start WebRTC stream: "+t.message,void e.close()}const i=new MediaStream;e.addEventListener("track",(e=>{i.addTrack(e.track),this._videoEl.srcObject=i})),this._remoteStream=i;const n=new RTCSessionDescription({type:"answer",sdp:r.answer});try{await e.setRemoteDescription(n)}catch(t){return this._error="Failed to connect WebRTC stream: "+t.message,void e.close()}this._peerConnection=e}},{kind:"method",key:"_cleanUp",value:function(){if(this._remoteStream&&(this._remoteStream.getTracks().forEach((e=>{e.stop()})),this._remoteStream=void 0),this._videoEl){const e=this._videoEl;e.removeAttribute("src"),e.load()}this._peerConnection&&(this._peerConnection.close(),this._peerConnection=void 0)}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host,
      video {
        display: block;
      }

      video {
        width: 100%;
        max-height: var(--video-max-height, calc(100vh - 97px));
      }
    `}}]}}),i.oi);function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=I(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:O(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=O(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=I(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function S(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function O(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function I(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function j(e,t,r){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},j(e,t,r||e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}!function(e,t,r,i){var n=_();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(S(o.descriptor)||S(n.descriptor)){if(P(o)||P(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(P(o)){if(P(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}C(o,n)}else t.push(o)}return t}(a.d.map(E)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.M)("ha-camera-stream")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[(0,o.C)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[(0,a.S)()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_url",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_connected",value:()=>!1},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("stateObj")&&!this._shouldRenderMJPEG&&this.stateObj&&(null===(t=e.get("stateObj"))||void 0===t?void 0:t.entity_id)!==this.stateObj.entity_id&&this.stateObj.attributes.frontend_stream_type===d.kU&&(this._forceMJPEG=void 0,this._url=void 0,this._getStreamUrl())}},{kind:"method",key:"connectedCallback",value:function(){j(A(r.prototype),"connectedCallback",this).call(this),this._connected=!0}},{kind:"method",key:"disconnectedCallback",value:function(){j(A(r.prototype),"disconnectedCallback",this).call(this),this._connected=!1}},{kind:"method",key:"render",value:function(){return this.stateObj?this._shouldRenderMJPEG?i.dy` <img
        .src=${this._connected?(0,d.nk)(this.stateObj):""}
        .alt=${`Preview of the ${(0,l.C)(this.stateObj)} camera.`}
      />`:this.stateObj.attributes.frontend_stream_type===d.kU?this._url?i.dy`<ha-hls-player
            autoplay
            playsinline
            .allowExoPlayer=${this.allowExoPlayer}
            .muted=${this.muted}
            .controls=${this.controls}
            .hass=${this.hass}
            .url=${this._url}
          ></ha-hls-player>`:i.dy``:this.stateObj.attributes.frontend_stream_type===d.jU?i.dy`<ha-web-rtc-player
        autoplay
        playsinline
        .muted=${this.muted}
        .controls=${this.controls}
        .hass=${this.hass}
        .entityid=${this.stateObj.entity_id}
      ></ha-web-rtc-player>`:i.dy``:i.dy``}},{kind:"get",key:"_shouldRenderMJPEG",value:function(){return this._forceMJPEG===this.stateObj.entity_id||(!(0,c.e)(this.stateObj,d.qW)||(this.stateObj.attributes.frontend_stream_type===d.jU?"undefined"==typeof RTCPeerConnection:!(0,s.p)(this.hass,"stream")))}},{kind:"method",key:"_getStreamUrl",value:async function(){try{const{url:e}=await(0,d.Lr)(this.hass,this.stateObj.entity_id);this._url=e}catch(e){console.error(e),this._forceMJPEG=this.stateObj.entity_id}}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host,
      img {
        display: block;
      }

      img {
        width: 100%;
      }
    `}}]}}),i.oi)},50538:(e,t,r)=>{r.d(t,{qW:()=>n,kU:()=>o,jU:()=>a,nk:()=>s,Xn:()=>u,Lr:()=>d,i4:()=>l,tb:()=>h,Mw:()=>p});var i=r(22814);const n=2,o="hls",a="web_rtc",s=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,l=async(e,t,r,i)=>{const n=await(async(e,t,r,i,n,...o)=>{let a=i[e];a||(a=i[e]={});const s=a[n];if(s)return s;const l=r(i,n,...o);return a[n]=l,l.then((()=>setTimeout((()=>{a[n]=void 0}),t)),(()=>{a[n]=void 0})),l})("_cameraTmbUrl",9e3,c,e,t);return`${n}&width=${r}&height=${i}`},c=async(e,t)=>{const r=await(0,i.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(r.path)},d=async(e,t,r)=>{const i={type:"camera/stream",entity_id:t};r&&(i.format=r);const n=await e.callWS(i);return n.url=e.hassUrl(n.url),n},h=(e,t,r)=>e.callWS({type:"camera/web_rtc_offer",entity_id:t,offer:r}),u=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),p=(e,t,r)=>e.callWS({type:"camera/update_prefs",entity_id:t,...r})},97282:(e,t,r)=>{var i=r(37500),n=r(26767),o=r(5701),a=r(17717),s=r(228),l=r(47501),c=r(49706),d=r(73589),h=(r(22780),r(50538)),u=r(56007);r(31206);function p(){p=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=b(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function f(e){var t,r=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function w(e,t,r){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},w(e,t,r||e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var E;!function(e){e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Error=3]="Error"}(E||(E={}));!function(e,t,r,i){var n=p();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(y(o)||y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(y(o)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}m(o,n)}else t.push(o)}return t}(a.d.map(f)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,n.M)("hui-image")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"entity",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"image",value:void 0},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"stateImage",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"cameraImage",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"cameraView",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"aspectRatio",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"filter",value:void 0},{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"stateFilter",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"darkModeImage",value:void 0},{kind:"field",decorators:[(0,o.C)()],key:"darkModeFilter",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_imageVisible",value:()=>!1},{kind:"field",decorators:[(0,a.S)()],key:"_loadState",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_cameraImageSrc",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_loadedImageSrc",value:void 0},{kind:"field",key:"_intersectionObserver",value:void 0},{kind:"field",key:"_lastImageHeight",value:void 0},{kind:"field",key:"_cameraUpdater",value:void 0},{kind:"field",key:"_ratio",value:()=>null},{kind:"method",key:"connectedCallback",value:function(){w(_(r.prototype),"connectedCallback",this).call(this),void 0===this._loadState&&(this._loadState=E.Loading),this.cameraImage&&"live"!==this.cameraView&&this._startIntersectionObserverOrUpdates()}},{kind:"method",key:"disconnectedCallback",value:function(){w(_(r.prototype),"disconnectedCallback",this).call(this),this._stopUpdateCameraInterval(),this._stopIntersectionObserver(),this._imageVisible=void 0}},{kind:"method",key:"handleIntersectionCallback",value:function(e){this._imageVisible=e[0].isIntersecting}},{kind:"method",key:"willUpdate",value:function(e){if(e.has("hass")){const t=e.get("hass");this._shouldStartCameraUpdates(t)?this._startIntersectionObserverOrUpdates():this.hass.connected||(this._stopUpdateCameraInterval(),this._stopIntersectionObserver())}e.has("_imageVisible")&&(this._imageVisible?this._shouldStartCameraUpdates()&&this._startUpdateCameraInterval():this._stopUpdateCameraInterval()),e.has("aspectRatio")&&(this._ratio=this.aspectRatio?(0,d.Z)(this.aspectRatio):null),this._loadState!==E.Loading||this.cameraImage||(this._loadState=E.Loaded)}},{kind:"method",key:"render",value:function(){if(!this.hass)return i.dy``;const e=Boolean(this._ratio&&this._ratio.w>0&&this._ratio.h>0),t=this.entity?this.hass.states[this.entity]:void 0,r=t?t.state:u.nZ;let n,o,a=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?o=this.hass.states[this.cameraImage]:n=this._cameraImageSrc;else if(this.stateImage){const e=this.stateImage[r];e?n=e:(n=this.image,a=!0)}else n=this.darkModeImage&&this.hass.themes.darkMode?this.darkModeImage:this.image;n&&(n=this.hass.hassUrl(n));let d=this.filter||"";if(this.hass.themes.darkMode&&this.darkModeFilter&&(d+=this.darkModeFilter),this.stateFilter&&this.stateFilter[r]&&(d+=this.stateFilter[r]),!d&&this.entity){d=(!t||c.tj.includes(r))&&a?"grayscale(100%)":""}return i.dy`
      <div
        style=${(0,l.V)({paddingBottom:e?`${(100*this._ratio.h/this._ratio.w).toFixed(2)}%`:void 0,backgroundImage:e&&this._loadedImageSrc?`url("${this._loadedImageSrc}")`:void 0,filter:this._loadState===E.Loaded||"live"===this.cameraView?d:void 0})}
        class="container ${(0,s.$)({ratio:e})}"
      >
        ${this.cameraImage&&"live"===this.cameraView?i.dy`
              <ha-camera-stream
                muted
                .hass=${this.hass}
                .stateObj=${o}
              ></ha-camera-stream>
            `:void 0===n?i.dy``:i.dy`
              <img
                id="image"
                src=${n}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${(0,l.V)({display:e||this._loadState===E.Loaded?"block":"none"})}
              />
            `}
        ${this._loadState===E.Error?i.dy`<div
              id="brokenImage"
              style=${(0,l.V)({height:e?void 0:`${this._lastImageHeight||"100"}px`})}
            ></div>`:"live"===this.cameraView||void 0!==n&&this._loadState!==E.Loading?"":i.dy`<div
              class="progress-container"
              style=${(0,l.V)({height:e?void 0:`${this._lastImageHeight||"100"}px`})}
            >
              <ha-circular-progress
                class="render-spinner"
                active
                size="small"
              ></ha-circular-progress>
            </div>`}
      </div>
    `}},{kind:"method",key:"_shouldStartCameraUpdates",value:function(e){return!(e&&e.connected===this.hass.connected||!this.hass.connected||"live"===this.cameraView)}},{kind:"method",key:"_startIntersectionObserverOrUpdates",value:function(){"IntersectionObserver"in window?(this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this))),this._intersectionObserver.observe(this)):(this._imageVisible=!0,this._startUpdateCameraInterval())}},{kind:"method",key:"_stopIntersectionObserver",value:function(){this._intersectionObserver&&this._intersectionObserver.disconnect()}},{kind:"method",key:"_startUpdateCameraInterval",value:function(){this._stopUpdateCameraInterval(),this._updateCameraImageSrc(),this.cameraImage&&this.isConnected&&(this._cameraUpdater=window.setInterval((()=>this._updateCameraImageSrcAtInterval()),1e4))}},{kind:"method",key:"_stopUpdateCameraInterval",value:function(){this._cameraUpdater&&(clearInterval(this._cameraUpdater),this._cameraUpdater=void 0)}},{kind:"method",key:"_onImageError",value:function(){this._loadState=E.Error}},{kind:"method",key:"_onImageLoad",value:async function(e){this._loadState=E.Loaded;const t=e.target;this._ratio&&this._ratio.w>0&&this._ratio.h>0&&(this._loadedImageSrc=t.src),await this.updateComplete,this._lastImageHeight=t.offsetHeight}},{kind:"method",key:"_updateCameraImageSrcAtInterval",value:async function(){return this._loadState===E.Loading&&this._onImageError(),this._updateCameraImageSrc()}},{kind:"method",key:"_updateCameraImageSrc",value:async function(){if(!this.hass||!this.cameraImage)return;if(!this.hass.states[this.cameraImage])return void this._onImageError();const e=this.clientWidth||640;let t,r=Math.ceil(e*devicePixelRatio);this._lastImageHeight?t=Math.ceil(this._lastImageHeight*devicePixelRatio):this._ratio&&this._ratio.w>0&&this._ratio.h>0?t=Math.ceil(r*(this._ratio.h/this._ratio.w)):(r*=2,t=Math.ceil(.5625*r)),this._cameraImageSrc=await(0,h.i4)(this.hass,this.cameraImage,r,t),void 0===this._cameraImageSrc&&this._onImageError()}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host {
        display: block;
      }

      .container {
        transition: filter 0.2s linear;
      }

      img {
        display: block;
        height: auto;
        width: 100%;
      }

      .progress-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
        background-position: center;
        background-size: cover;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .ratio img {
        visibility: hidden;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `}}]}}),i.oi)}}]);
//# sourceMappingURL=3ba83348.js.map