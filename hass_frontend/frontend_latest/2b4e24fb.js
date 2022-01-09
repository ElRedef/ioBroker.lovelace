"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[66054],{23682:(e,t,n)=>{function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>r})},90394:(e,t,n)=>{function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>r})},59699:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),s=n(39244),i=n(23682),a=36e5;function o(e,t){(0,i.Z)(2,arguments);var n=(0,r.Z)(t);return(0,s.Z)(e,n*a)}},39244:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(90394),s=n(34327),i=n(23682);function a(e,t){(0,i.Z)(2,arguments);var n=(0,s.Z)(e).getTime(),a=(0,r.Z)(t);return new Date(n+a)}},4535:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(34327);function s(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var i=n(59429),a=n(23682),o=864e5;function c(e,t){(0,a.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,i.Z)(t),c=n.getTime()-s(n),u=r.getTime()-s(r);return Math.round((c-u)/o)}function u(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function l(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e),s=(0,r.Z)(t),i=u(n,s),o=Math.abs(c(n,s));n.setDate(n.getDate()-i*o);var l=Number(u(n,s)===-i),_=i*(o-l);return 0===_?0:_}},93752:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(34327),s=n(23682);function i(e){(0,s.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(23,59,59,999),t}},70390:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(93752);function s(){return(0,r.Z)(Date.now())}},47538:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),s=new Date(0);return s.setFullYear(t,n,r-1),s.setHours(23,59,59,999),s}n.d(t,{Z:()=>r})},59429:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(34327),s=n(23682);function i(e){(0,s.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}},27088:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59429);function s(){return(0,r.Z)(Date.now())}},83008:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),s=new Date(0);return s.setFullYear(t,n,r-1),s.setHours(0,0,0,0),s}n.d(t,{Z:()=>r})},34327:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(23682);function s(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},92306:(e,t,n)=>{n.d(t,{v:()=>r});const r=(e,t)=>{const n={};for(const r of e){const e=t(r);e in n?n[e].push(r):n[e]=[r]}return n}},11950:(e,t,n)=>{n.d(t,{l:()=>r});const r=async(e,t)=>new Promise((n=>{const r=t(e,(e=>{r(),n(e)}))}))},81582:(e,t,n)=>{n.d(t,{LZ:()=>r,pB:()=>s,SO:()=>i,iJ:()=>a,Nn:()=>o,Ny:()=>c,T0:()=>u});const r=32143==n.j?["migration_error","setup_error","setup_retry"]:null,s=e=>e.callApi("GET","config/config_entries/entry"),i=(e,t,n)=>e.callWS({type:"config_entries/update",entry_id:t,...n}),a=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),o=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),c=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{Bm:()=>m,o1:()=>h,iK:()=>b,rl:()=>v,P:()=>w,KU:()=>S,xZ:()=>Z,gy:()=>T,ZC:()=>D,_Z:()=>k,Jj:()=>M,UB:()=>E,jB:()=>N,gM:()=>O,yT:()=>j,_n:()=>P,vR:()=>C,vE:()=>H});var r=n(4535),s=n(59699),i=n(27088),a=n(83008),o=n(70390),c=n(47538),u=n(97330),l=n(92306),_=n(11950),y=n(81582),g=n(74186),d=n(58763),p=e([d]);d=(p.then?await p:p)[0];const f=[],m=()=>({stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),h=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_to:null,entity_energy_price:null,number_energy_price:null}),b=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),v=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),w=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),S=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),Z=e=>e.callWS({type:"energy/info"}),T=e=>e.callWS({type:"energy/validate"}),D=e=>e.callWS({type:"energy/get_prefs"}),k=async(e,t)=>{const n=e.callWS({type:"energy/save_prefs",...t});return W(e),n},M=e=>(0,l.v)(e.energy_sources,(e=>e.type)),W=e=>{f.forEach((t=>{const n=E(e,{key:t});n.clearPrefs(),n._active&&n.refresh()}))},E=(e,t={})=>{let n="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");n=`_${t.key}`}if(e.connection[n])return e.connection[n];f.push(t.key);const l=(0,u._)(e.connection,n,(async()=>{if(l.prefs||(l.prefs=await D(e)),l._refreshTimeout&&clearTimeout(l._refreshTimeout),l._active&&(!l.end||l.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),l._refreshTimeout=window.setTimeout((()=>l.refresh()),e.getTime()-Date.now())}return(async(e,t,n,i)=>{const[a,o,c]=await Promise.all([(0,y.pB)(e),(0,_.l)(e.connection,g.LM),Z(e)]),u=a.find((e=>"co2signal"===e.domain));let l;if(u)for(const t of o){if(t.config_entry_id!==u.entry_id)continue;const n=e.states[t.entity_id];if(n&&"%"===n.attributes.unit_of_measurement){l=n.entity_id;break}}const p=[],f=[];for(const e of t.energy_sources)if("solar"!==e.type)if("gas"!==e.type)if("battery"!==e.type){for(const t of e.flow_from){p.push(t.stat_energy_from),f.push(t.stat_energy_from),t.stat_cost&&f.push(t.stat_cost);const e=c.cost_sensors[t.stat_energy_from];e&&f.push(e)}for(const t of e.flow_to){f.push(t.stat_energy_to),t.stat_compensation&&f.push(t.stat_compensation);const e=c.cost_sensors[t.stat_energy_to];e&&f.push(e)}}else f.push(e.stat_energy_from),f.push(e.stat_energy_to);else{f.push(e.stat_energy_from),e.stat_cost&&f.push(e.stat_cost);const t=c.cost_sensors[e.stat_energy_from];t&&f.push(t)}else f.push(e.stat_energy_from);const m=(0,r.Z)(i||new Date,n),h=(0,s.Z)(n,-1),b=await(0,d.dL)(e,h,i,f,m>35?"month":m>2?"day":"hour");let v;return void 0!==l&&(v=await(async(e,t,n,r,s,i="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==s?void 0:s.toISOString(),energy_statistic_ids:n,co2_statistic_id:r,period:i}))(e,n,p,l,i,m>35?"month":m>2?"day":"hour")),Object.values(b).forEach((e=>{e.length&&new Date(e[0].start)>h&&e.unshift({...e[0],start:h.toISOString(),end:h.toISOString(),sum:0,state:0})})),{start:n,end:i,info:c,prefs:t,stats:b,co2SignalConfigEntry:u,co2SignalEntity:l,fossilEnergyConsumption:v}})(e,l.prefs,l.start,l.end)})),p=l.subscribe;l.subscribe=e=>{const t=p(e);return l._active++,()=>{l._active--,l._active<1&&(clearTimeout(l._refreshTimeout),l._refreshTimeout=void 0),t()}},l._active=0,l.prefs=t.prefs;const m=new Date;l.start=m.getHours()>0?(0,i.Z)():(0,a.Z)(),l.end=m.getHours()>0?(0,o.Z)():(0,c.Z)();const h=()=>{l._updatePeriodTimeout=window.setTimeout((()=>{l.start=(0,i.Z)(),l.end=(0,o.Z)(),h()}),(0,s.Z)((0,o.Z)(),1).getTime()-Date.now())};return h(),l.clearPrefs=()=>{l.prefs=void 0},l.setPeriod=(e,t)=>{var n;l.start=e,l.end=t,l.start.getTime()!==(0,i.Z)().getTime()||(null===(n=l.end)||void 0===n?void 0:n.getTime())!==(0,o.Z)().getTime()||l._updatePeriodTimeout?l._updatePeriodTimeout&&(clearTimeout(l._updatePeriodTimeout),l._updatePeriodTimeout=void 0):h()},l},N=e=>e.callWS({type:"energy/solar_forecast"}),O=["m³","ft³"],j=["kWh"],P=[...O,...j],C=(e,t)=>{for(const n of t.energy_sources){if("gas"!==n.type)continue;const t=e.states[n.stat_energy_from];if(t)return O.includes(t.attributes.unit_of_measurement)?"volume":"energy"}},H=(e,t)=>{for(const n of t.energy_sources){if("gas"!==n.type)continue;const t=e.states[n.stat_energy_from];if(null!=t&&t.attributes.unit_of_measurement)return"Wh"===t.attributes.unit_of_measurement?"kWh":t.attributes.unit_of_measurement}}}))},74186:(e,t,n)=>{n.d(t,{eD:()=>a,Mw:()=>o,vA:()=>c,L3:()=>u,Nv:()=>l,z3:()=>_,LM:()=>d});var r=n(97330),s=n(91741),i=n(38346);const a=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),o=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),c=(e,t)=>{if(t.name)return t.name;const n=e.states[t.entity_id];return n?(0,s.C)(n):t.entity_id},u=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),l=(e,t,n)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...n}),_=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),y=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),g=(e,t)=>e.subscribeEvents((0,i.D)((()=>y(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),d=(e,t)=>(0,r.B)("_entityRegistry",y,g,e,t)},58763:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{vq:()=>u,_J:()=>l,Nu:()=>y,uR:()=>g,dL:()=>d,h_:()=>p,Cj:()=>f,hN:()=>m,Kj:()=>h,q6:()=>b,Nw:()=>v});var r=n(29171),s=n(22311),i=n(91741),a=e([r]);r=(a.then?await a:a)[0];const o=["climate","humidifier","water_heater"],c=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],u=(e,t,n,r,s=!1,i,a=!0)=>{let o="history/period";return n&&(o+="/"+n.toISOString()),o+="?filter_entity_id="+t,r&&(o+="&end_time="+r.toISOString()),s&&(o+="&skip_initial_state"),void 0!==i&&(o+=`&significant_changes_only=${Number(i)}`),a&&(o+="&minimal_response"),e.callApi("GET",o)},l=(e,t,n,r)=>e.callApi("GET",`history/period/${t.toISOString()}?end_time=${n.toISOString()}&minimal_response${r?`&filter_entity_id=${r}`:""}`),_=(e,t)=>e.state===t.state&&(!e.attributes||!t.attributes||c.every((n=>e.attributes[n]===t.attributes[n]))),y=(e,t,n)=>{const a={},u=[];if(!t)return{line:[],timeline:[]};t.forEach((t=>{if(0===t.length)return;const o=t.find((e=>e.attributes&&("unit_of_measurement"in e.attributes||"state_class"in e.attributes)));let c;c=o?o.attributes.unit_of_measurement||" ":{climate:e.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:e.config.unit_system.temperature}[(0,s.N)(t[0])],c?c in a?a[c].push(t):a[c]=[t]:u.push(((e,t,n)=>{const s=[],a=n.length-1;for(const i of n)s.length>0&&i.state===s[s.length-1].state||(i.entity_id||(i.attributes=n[a].attributes,i.entity_id=n[a].entity_id),s.push({state_localize:(0,r.D)(e,i,t),state:i.state,last_changed:i.last_changed}));return{name:(0,i.C)(n[0]),entity_id:n[0].entity_id,data:s}})(n,e.locale,t))}));return{line:Object.keys(a).map((e=>((e,t)=>{const n=[];for(const e of t){const t=e[e.length-1],r=(0,s.N)(t),a=[];for(const t of e){let e;if(o.includes(r)){e={state:t.state,last_changed:t.last_updated,attributes:{}};for(const n of c)n in t.attributes&&(e.attributes[n]=t.attributes[n])}else e=t;a.length>1&&_(e,a[a.length-1])&&_(e,a[a.length-2])||a.push(e)}n.push({domain:r,name:(0,i.C)(t),entity_id:t.entity_id,states:a})}return{unit:e,identifier:t.map((e=>e[0].entity_id)).join(""),data:n}})(e,a[e]))),timeline:u}},g=(e,t)=>e.callWS({type:"history/list_statistic_ids",statistic_type:t}),d=(e,t,n,r,s="hour")=>e.callWS({type:"history/statistics_during_period",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),statistic_ids:r,period:s}),p=e=>e.callWS({type:"recorder/validate_statistics"}),f=(e,t,n)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:n}),m=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),h=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const n=e[0].sum;return null===n?t:t-n},b=(e,t)=>{let n=null;for(const r of t){if(!(r in e))continue;const t=h(e[r]);null!==t&&(null===n?n=t:n+=t)}return n},v=(e,t)=>e.some((e=>null!==e[t]))}))},66054:(e,t,n)=>{n.a(e,(async e=>{n.r(t),n.d(t,{EnergyStrategy:()=>i});var r=n(55424),s=e([r]);r=(s.then?await s:s)[0];class i{static async generateView(e){const t=e.hass,s={cards:[]};let i;try{i=await(0,r.ZC)(t)}catch(e){return"not_found"===e.code?(async()=>(await Promise.all([n.e(878),n.e(88369)]).then(n.bind(n,55158)),{type:"panel",cards:[{type:"custom:energy-setup-wizard-card"}]}))():(s.cards.push({type:"markdown",content:`An error occured while fetching your energy preferences: ${e.message}.`}),s)}s.type="sidebar";const a=i.energy_sources.find((e=>"grid"===e.type)),o=a&&a.flow_to.length,c=i.energy_sources.some((e=>"solar"===e.type)),u=i.energy_sources.some((e=>"gas"===e.type));return e.narrow&&s.cards.push({type:"energy-date-selection",collection_key:"energy_dashboard",view_layout:{position:"sidebar"}}),a&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_usage_graph_title"),type:"energy-usage-graph",collection_key:"energy_dashboard"}),c&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_solar_graph_title"),type:"energy-solar-graph",collection_key:"energy_dashboard"}),u&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_gas_graph_title"),type:"energy-gas-graph",collection_key:"energy_dashboard"}),a&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_distribution_title"),type:"energy-distribution",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),(a||c)&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_sources_table_title"),type:"energy-sources-table",collection_key:"energy_dashboard"}),o&&s.cards.push({type:"energy-grid-neutrality-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),c&&o&&s.cards.push({type:"energy-solar-consumed-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),a&&s.cards.push({type:"energy-carbon-consumed-gauge",view_layout:{position:"sidebar"},collection_key:"energy_dashboard"}),i.device_consumption.length&&s.cards.push({title:t.localize("ui.panel.energy.cards.energy_devices_graph_title"),type:"energy-devices-graph",collection_key:"energy_dashboard"}),s}}}))}}]);