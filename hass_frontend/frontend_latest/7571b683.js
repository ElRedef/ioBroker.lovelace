"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60076],{73589:(e,t,i)=>{i.d(t,{Z:()=>n});const r=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(`${e} is not a number`);return t};function n(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:r(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:r(t[0]),h:1}:{w:r(t[0]),h:r(t[1])}}catch(e){}return null}},58763:(e,t,i)=>{i.a(e,(async e=>{i.d(t,{iq:()=>d,vq:()=>u,MG:()=>h,iz:()=>f,Nu:()=>y});var r=i(58831),n=i(29171),o=i(91741),s=e([n]);n=(s.then?await s:s)[0];const a=["climate","humidifier","water_heater"],l=["climate","humidifier","input_datetime","thermostat","water_heater"],c=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],d=(e,t)=>!e.states[t]||l.includes((0,r.M)(t)),u=(e,t,i,r,n=!1,o,s=!0,a)=>{let l="history/period";return i&&(l+="/"+i.toISOString()),l+="?filter_entity_id="+t,r&&(l+="&end_time="+r.toISOString()),n&&(l+="&skip_initial_state"),void 0!==o&&(l+=`&significant_changes_only=${Number(o)}`),s&&(l+="&minimal_response"),a&&(l+="&no_attributes"),e.callApi("GET",l)},h=(e,t,i,r,n=!1,o,s=!0,a)=>e.callWS({type:"history/history_during_period",start_time:i.toISOString(),end_time:r.toISOString(),significant_changes_only:o||!1,include_start_time_state:!n,minimal_response:s,no_attributes:a||!1,entity_ids:t.split(",")}),f=(e,t,i,r)=>{const n={type:"history/history_during_period",start_time:t.toISOString(),end_time:i.toISOString(),minimal_response:!0,no_attributes:!r.map((t=>d(e,t))).reduce(((e,t)=>e||t),!1)};return 0!==r.length?e.callWS({...n,entity_ids:r}):e.callWS(n)},p=(e,t)=>e.state===t.state&&(!e.attributes||!t.attributes||c.every((i=>e.attributes[i]===t.attributes[i]))),m=e=>"unit_of_measurement"in e||"state_class"in e,y=(e,t,i)=>{const s={},l=[];if(!t)return{line:[],timeline:[]};Object.keys(t).forEach((a=>{const c=t[a];if(0===c.length)return;const d=a in e.states?e.states[a]:void 0,u=!d&&c.find((e=>e.a&&m(e.a)));let h;h=d&&m(d.attributes)?d.attributes.unit_of_measurement||" ":u?u.a.unit_of_measurement||" ":{zone:i("ui.dialogs.more_info_control.zone.graph_unit"),climate:e.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:e.config.unit_system.temperature}[(0,r.M)(a)],h?h in s&&a in s[h]?s[h][a].push(...c):(h in s||(s[h]={}),s[h][a]=c):l.push(((e,t,i,r,s)=>{const a=[],l=r[0];for(const o of r)a.length>0&&o.s===a[a.length-1].state||a.push({state_localize:(0,n.c)(e,t,i,o.a||l.a,o.s),state:o.s,last_changed:1e3*(o.lc?o.lc:o.lu)});return{name:(0,o.a)(i,(null==s?void 0:s.attributes)||l.a),entity_id:i,data:a}})(i,e.locale,a,c,d))}));return{line:Object.keys(s).map((t=>((e,t,i)=>{const n=[];return Object.keys(t).forEach((e=>{const s=t[e],l=s[0],d=(0,r.M)(e),u=[];for(const e of s){let t;if(a.includes(d)){t={state:e.s,last_changed:1e3*e.lu,attributes:{}};for(const i of c)i in e.a&&(t.attributes[i]=e.a[i])}else t={state:e.s,last_changed:1e3*(e.lc?e.lc:e.lu),attributes:{}};u.length>1&&p(t,u[u.length-1])&&p(t,u[u.length-2])||u.push(t)}const h=e in i?i[e].attributes:"friendly_name"in l.a?l.a:void 0;n.push({domain:d,name:(0,o.a)(e,h||{}),entity_id:e,states:u})})),{unit:e,identifier:Object.keys(t).join(""),data:n}})(t,s[t],e.states))),timeline:l}}}))},60076:(e,t,i)=>{i.a(e,(async e=>{i.r(t);var r=i(37500),n=i(33310),o=i(14516),s=i(58831),a=i(73589),l=(i(22098),i(10983),i(58763)),c=i(15688),d=i(90271),u=(i(23956),i(55070)),h=e([l]);function f(){f=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?e:i;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var o=this.decorateConstructor(i,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function p(e){var t,i=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function _(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function b(e,t,i){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},b(e,t,i||e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}l=(h.then?await h:h)[0];!function(e,t,i,r){var n=f();if(r)for(var o=0;o<r.length;o++)n=r[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var n,o=e[r];if("method"===o.kind&&(n=t.find(i)))if(_(o.descriptor)||_(n.descriptor)){if(y(o)||y(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(y(o)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}m(o,n)}else t.push(o)}return t}(s.d.map(p)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-map-card")],(function(e,t){class h extends t{constructor(...t){super(...t),e(this)}}return{F:h,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_history",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-map")],key:"_map",value:void 0},{kind:"field",key:"_date",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_colorDict",value:()=>({})},{kind:"field",key:"_colorIndex",value:()=>0},{kind:"method",key:"setConfig",value:function(e){var t;if(!e)throw new Error("Error in card configuration.");if(!(null!==(t=e.entities)&&void 0!==t&&t.length||e.geo_location_sources))throw new Error("Either entities or geo_location_sources must be specified");if(e.entities&&!Array.isArray(e.entities))throw new Error("Entities need to be an array");if(e.geo_location_sources&&!Array.isArray(e.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=e,this._configEntities=(e.entities?(0,d.A)(e.entities):[]).map((e=>e.entity)),this._cleanupHistory()}},{kind:"method",key:"getCardSize",value:function(){var e;if(null===(e=this._config)||void 0===e||!e.aspect_ratio)return 7;const t=(0,a.Z)(this._config.aspect_ratio),i=t&&t.w>0&&t.h>0?`${(100*t.h/t.w).toFixed(2)}`:"100";return 1+Math.floor(Number(i)/25)||3}},{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(6294),i.e(41985),i.e(78874),i.e(45507),i.e(62299),i.e(77576),i.e(12545),i.e(26272),i.e(13701),i.e(74535),i.e(39284),i.e(83708),i.e(44446)]).then(i.bind(i,44446)),document.createElement("hui-map-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"map",entities:(0,c.j)(e,2,t,i,["device_tracker"])}}},{kind:"method",key:"render",value:function(){var e;return this._config?r.dy`
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <ha-map
            .hass=${this.hass}
            .entities=${this._getEntities(this.hass.states,this._config,this._configEntities)}
            .zoom=${null!==(e=this._config.default_zoom)&&void 0!==e?e:14}
            .paths=${this._getHistoryPaths(this._config,this._history)}
            .autoFit=${this._config.auto_fit}
            .darkMode=${this._config.dark_mode}
          ></ha-map>
          <ha-icon-button
            .label=${this.hass.localize("ui.panel.lovelace.cards.map.reset_focus")}
            .path=${"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,19H15V21H19A2,2 0 0,0 21,19V15H19M19,3H15V5H19V9H21V5A2,2 0 0,0 19,3M5,5H9V3H5A2,2 0 0,0 3,5V9H5M5,15H3V19A2,2 0 0,0 5,21H9V19H5V15Z"}
            @click=${this._fitMap}
            tabindex="0"
          ></ha-icon-button>
        </div>
      </ha-card>
    `:r.dy``}},{kind:"method",key:"shouldUpdate",value:function(e){if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass");if(!t||!this._configEntities)return!0;if(t.themes.darkMode!==this.hass.themes.darkMode)return!0;for(const e of this._configEntities)if(t.states[e]!==this.hass.states[e])return!0;return!1}},{kind:"method",key:"firstUpdated",value:function(e){b(w(h.prototype),"firstUpdated",this).call(this,e);const t=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!t)return;if(!this._config.aspect_ratio)return void(t.style.paddingBottom="100%");const i=(0,a.Z)(this._config.aspect_ratio);t.style.paddingBottom=i&&i.w>0&&i.h>0?`${(100*i.h/i.w).toFixed(2)}%`:t.style.paddingBottom="100%"}},{kind:"method",key:"updated",value:function(e){var t,i;null!==(t=this._config)&&void 0!==t&&t.hours_to_show&&null!==(i=this._configEntities)&&void 0!==i&&i.length&&(e.has("_config")||Date.now()-this._date.getTime()>=6e4)&&this._getHistory()}},{kind:"method",key:"_fitMap",value:function(){var e;null===(e=this._map)||void 0===e||e.fitMap()}},{kind:"method",key:"_getColor",value:function(e){let t=this._colorDict[e];return t||(t=(0,u.Eu)(this._colorIndex),this._colorIndex++,this._colorDict[e]=t,t)}},{kind:"field",key:"_getEntities",value(){return(0,o.Z)(((e,t,i)=>{if(!e||!t)return;let r=i||[];if(t.geo_location_sources){const i=[],n=t.geo_location_sources.includes("all");for(const r of Object.values(e))"geo_location"===(0,s.M)(r.entity_id)&&(n||t.geo_location_sources.includes(r.attributes.source))&&i.push(r.entity_id);r=[...r,...i]}return r.map((e=>({entity_id:e,color:this._getColor(e)})))}))}},{kind:"field",key:"_getHistoryPaths",value(){return(0,o.Z)(((e,t)=>{if(!e.hours_to_show||!t)return;const i=[];for(const e of t){if((null==e?void 0:e.length)<=1)continue;const t=e.reduce(((e,t)=>{const i=t.attributes.latitude,r=t.attributes.longitude;return i&&r&&e.push([i,r]),e}),[]);i.push({points:t,color:this._getColor(e[0].entity_id),gradualOpacity:.8})}return i}))}},{kind:"method",key:"_getHistory",value:async function(){if(this._date=new Date,!this._configEntities)return;const e=this._configEntities.join(","),t=new Date,i=new Date;i.setHours(t.getHours()-this._config.hours_to_show);const r=await(0,l.vq)(this.hass,e,i,t,!1,!1,!1);r.length<1||(this._history=r)}},{kind:"method",key:"_cleanupHistory",value:function(){this._history&&(this._config.hours_to_show<=0?this._history=void 0:this._history=this._history.reduce(((e,t)=>{var i;const r=t[0].entity_id;return null!==(i=this._configEntities)&&void 0!==i&&i.includes(r)&&e.push(t),e}),[]))}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-card {
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      ha-map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
      }

      ha-icon-button {
        position: absolute;
        top: 75px;
        left: 3px;
        outline: none;
      }

      #root {
        position: relative;
        height: 100%;
      }
    `}}]}}),r.oi)}))}}]);
//# sourceMappingURL=7571b683.js.map