"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[41305],{14650:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(99307),i=r(23682),o=36e5;function a(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e,t)/o;return r>0?Math.floor(r):Math.ceil(r)}},99307:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(34327),i=r(23682);function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),o=(0,n.Z)(t);return r.getTime()-o.getTime()}},3700:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(59429),i=r(23682);function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),o=(0,n.Z)(t);return r.getTime()===o.getTime()}function a(e){return(0,i.Z)(1,arguments),o(e,Date.now())}},41305:function(e,t,r){r.r(t),r.d(t,{HuiEnergyGasGraphCard:function(){return N}});var n,i,o,a,s,c=r(27088),l=r(70390),u=r(3700),d=r(4535),f=r(14650),p=r(59699),h=r(37500),m=r(33310),y=r(8636),v=r(14516),b=r(15838),g=r(89525),k=r(12198),w=r(49684),_=r(18457),E=(r(62336),r(22098),r(55424)),S=r(58763),x=r(73826);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=W(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function D(e){return function(e){if(Array.isArray(e))return $(e)}(e)||q(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var i=M(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return z(this,r)}}function z(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function F(){F=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!H(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||q(t)||W(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=G(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:U(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=U(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function I(e){var t,r=G(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function B(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function H(e){return e.decorators&&e.decorators.length}function K(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function U(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function G(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C(t)?t:String(t)}function W(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var N=function(e,t,r,n){var i=F();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(K(o.descriptor)||K(i.descriptor)){if(H(o)||H(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(H(o)){if(H(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}B(o,i)}else t.push(o)}return t}(a.d.map(I)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,m.Mo)("hui-energy-gas-graph-card")],(function(e,t){var r,x,C=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(n,t);var r=Z(n);function n(){var t;O(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(R(t)),t}return n}(t);return{F:C,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,m.SB)()],key:"_start",value:function(){return(0,c.Z)()}},{kind:"field",decorators:[(0,m.SB)()],key:"_end",value:function(){return(0,l.Z)()}},{kind:"field",decorators:[(0,m.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_compareEnd",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_unit",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var e,t=this;return[(0,E.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((function(e){return t._getStatistics(e)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,h.dy)(i||(i=T(["\n      <ha-card>\n        ",'\n        <div\n          class="content ','"\n        >\n          <ha-chart-base\n            .data=',"\n            .options=",'\n            chart-type="bar"\n          ></ha-chart-base>\n          ',"\n        </div>\n      </ha-card>\n    "])),this._config.title?(0,h.dy)(o||(o=T(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,y.$)({"has-header":!!this._config.title}),this._chartData,this._createOptions(this._start,this._end,this.hass.locale,this._unit,this._compareStart,this._compareEnd),this._chartData.datasets.length?"":(0,h.dy)(a||(a=T(['<div class="no-data">\n                ',"\n              </div>"])),(0,u.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):(0,h.dy)(n||(n=T([""])))}},{kind:"field",key:"_createOptions",value:function(){return(0,v.Z)((function(e,t,r,n,i,o){var a=(0,d.Z)(t,e),s=void 0!==i&&void 0!==o;if(s){var c=(0,f.Z)(t,e),l=(0,f.Z)(o,i);l>c?t=(0,p.Z)(t,l-c):c>l&&(o=(0,p.Z)(o,c-l))}var u={parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:t.getTime(),adapters:{date:{locale:r}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(e){return e.tick&&e.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:a>35?"monthyear":a>7?"date":a>2?"weekday":a>0?"datetime":"hour",minUnit:a>35?"month":a>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:n},ticks:{beginAtZero:!0}}},plugins:{tooltip:{mode:"nearest",callbacks:{title:function(e){if(a>0)return e[0].label;var t=new Date(e[0].parsed.x);return"".concat(s?"".concat((0,k.mn)(t,r),": "):"").concat((0,w.mr)(t,r)," – ").concat((0,w.mr)((0,p.Z)(t,1),r))},label:function(e){return"".concat(e.dataset.label,": ").concat((0,_.uf)(e.parsed.y,r)," ").concat(n)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,_.Hd)(r)};return s&&(u.scales.xAxisCompare=Object.assign({},u.scales.x,{suggestedMin:i.getTime(),suggestedMax:o.getTime(),display:!1})),u}))}},{kind:"method",key:"_getStatistics",value:(r=regeneratorRuntime.mark((function e(t){var r,n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.prefs.energy_sources.filter((function(e){return"gas"===e.type})),this._unit=(0,E.vE)(this.hass,t.prefs,t.statsMetadata)||"m³",n=[],i=getComputedStyle(this),o=i.getPropertyValue("--energy-gas-color").trim(),n.push.apply(n,D(this._processDataSet(t.stats,t.statsMetadata,r,o))),t.statsCompare&&(n.push({order:0,data:[]}),n.push({order:999,data:[],xAxisID:"xAxisCompare"}),n.push.apply(n,D(this._processDataSet(t.statsCompare,t.statsMetadata,r,o,!0)))),this._start=t.start,this._end=t.end||(0,l.Z)(),this._compareStart=t.startCompare,this._compareEnd=t.endCompare,this._chartData={datasets:n};case 12:case"end":return e.stop()}}),e,this)})),x=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function a(e){A(o,n,i,a,s,"next",e)}function s(e){A(o,n,i,a,s,"throw",e)}a(void 0)}))},function(e){return x.apply(this,arguments)})},{kind:"method",key:"_processDataSet",value:function(e,t,r,n){var i=this,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=[];return r.forEach((function(r,s){var c=s>0?i.hass.themes.darkMode?(0,g.C)((0,b.Rw)((0,b.wK)(n)),s):(0,g.W)((0,b.Rw)((0,b.wK)(n)),s):void 0,l=c?(0,b.CO)((0,b.p3)(c)):n,u=null,d=null,f=[];if(r.stat_energy_from in e){var p,h=P(e[r.stat_energy_from]);try{for(h.s();!(p=h.n()).done;){var m=p.value;if(null!==m.sum)if(null!==u){if(d!==m.start){var y=m.sum-u,v=new Date(m.start);f.push({x:v.getTime(),y:y}),d=m.start,u=m.sum}}else u=m.sum}}catch(k){h.e(k)}finally{h.f()}}a.push({label:(0,S.Kd)(i.hass,r.stat_energy_from,t),borderColor:o?l+"7F":l,backgroundColor:o?l+"32":l+"7F",data:f,order:1,stack:"gas",xAxisID:o?"xAxisCompare":void 0})})),a}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(s||(s=T(["\n      ha-card {\n        height: 100%;\n      }\n      .card-header {\n        padding-bottom: 0;\n      }\n      .content {\n        padding: 16px;\n      }\n      .has-header {\n        padding-top: 0;\n      }\n      .no-data {\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20%;\n        margin-left: 32px;\n        box-sizing: border-box;\n      }\n    "])))}}]}}),(0,x.f)(h.oi))}}]);