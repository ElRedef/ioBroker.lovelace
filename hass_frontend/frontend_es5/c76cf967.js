"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[38926],{34007:function(t,e,n){function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{N:function(){return a}});var o=[" ",": "],a=function(t,e){var n,i=t.toLowerCase(),a=r(o);try{for(a.s();!(n=a.n()).done;){var c=n.value,s="".concat(e).concat(c);if(i.startsWith(s)){var l=t.substring(s.length);return u(l.substr(0,l.indexOf(" ")))?l:l[0].toUpperCase()+l.slice(1)}}}catch(f){a.e(f)}finally{a.f()}},u=function(t){return t.toLowerCase()!==t}},65253:function(t,e,n){function r(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)}))}}n.d(e,{Pb:function(){return c},CE:function(){return s},uh:function(){return l},r4:function(){return f},Nq:function(){return p},h8:function(){return y},fm:function(){return h},FH:function(){return b}});var o,a,u,c="system-admin",s="system-users",l=function(){var t=i(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/list"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=32143==n.j?(o=i(regeneratorRuntime.mark((function t(e,n,r,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/create",name:n,group_ids:r,local_only:i}));case 1:case"end":return t.stop()}}),t)}))),function(t,e,n,r){return o.apply(this,arguments)}):null,p=32143==n.j?(a=i(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS(Object.assign({},r,{type:"config/auth/update",user_id:n})));case 1:case"end":return t.stop()}}),t)}))),function(t,e,n){return a.apply(this,arguments)}):null,y=32143==n.j?(u=i(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/delete",user_id:n}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return u.apply(this,arguments)}):null,h=function(t){return t?t.trim().split(" ").slice(0,3).map((function(t){return t.substring(0,1)})).join(""):"?"},d=32143==n.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,v=32143==n.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,m=32143==n.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,g=32143==n.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,b=function(t,e,n){var r=[],i=function(e){return t.localize("ui.panel.config.users.".concat(e))};return e.is_owner&&r.push([d,i("is_owner")]),n&&e.system_generated&&r.push([v,i("is_system")]),e.local_only&&r.push([m,i("is_local")]),e.is_active||r.push([g,i("is_not_active")]),r}},22314:function(t,e,n){n.d(e,{y:function(){return r}});var r=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer"]},38926:function(t,e,n){n.d(e,{VG:function(){return b},AP:function(){return w}});var r=n(58831),i=n(22311),o=n(91741),a=n(34007),u=n(85415),c=n(5986),s=n(41499),l=n(65253),f=n(22314);function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=d(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function d(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=new Set(["automation","configurator","device_tracker","geo_location","persistent_notification","script","sun","zone"]),g=new Set(["mobile_app"]),b=function t(e,n){var i,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=[],l=[],f=n.title?n.title.toLowerCase():void 0,p=[],d=h(e);try{for(d.s();!(i=d.n()).done;){var v=y(i.value,2),m=v[0],g=v[1],b=(0,r.M)(m);if("alarm_control_panel"===b){var _={type:"alarm-panel",entity:m};c.push(_)}else if("camera"===b){var w={type:"picture-entity",entity:m};c.push(w)}else if("climate"===b){var C={type:"thermostat",entity:m};c.push(C)}else if("humidifier"===b){var A={type:"humidifier",entity:m};c.push(A)}else if("media_player"===b){var S={type:"media-control",entity:m};c.push(S)}else if("plant"===b){var j={type:"plant-status",entity:m};c.push(j)}else if("weather"===b){var E={type:"weather-forecast",entity:m,show_forecast:!1};c.push(E)}else if(!u||"scene"!==b&&"script"!==b)if("sensor"===b&&(null==g?void 0:g.attributes.device_class)===s.A);else{var x=void 0,k=f&&g&&(x=(0,a.N)((0,o.C)(g),f))?{entity:m,name:x}:m;l.push(k)}else{var M={entity:m,show_icon:!0,show_name:!0},H=void 0;f&&g&&(H=(0,a.N)((0,o.C)(g),f))&&(M.name=H),p.push(M)}}}catch(L){d.e(L)}finally{d.f()}if(0===l.length&&p.length>0)return t(e,n,!1);if(l.length>0||p.length>0){var V=Object.assign({type:"entities",entities:l},n);p.length>0&&(V.footer={type:"buttons",entities:p}),c.unshift(V)}return c.length<2?c:[{type:"grid",square:!1,columns:1,cards:c}]},_=function(t,e,n,a,s,y){var d=function(t){var e=[],n={};return Object.keys(t).forEach((function(i){var o=t[i];"group"===(0,r.M)(i)?e.push(o):n[i]=o})),e.forEach((function(t){return t.attributes.entity_id.forEach((function(t){delete n[t]}))})),{groups:e,ungrouped:n}}(s);d.groups.sort((function(t,e){return y[t.entity_id]-y[e.entity_id]}));var v={};Object.keys(d.ungrouped).forEach((function(t){var e=d.ungrouped[t],n=(0,i.N)(e);n in v||(v[n]=[]),v[n].push(e.entity_id)}));var m=[];if("person"in v){var g=[];if(1===v.person.length)m.push({type:"entities",entities:v.person});else{var _,w,C="",A=h(v.person);try{for(A.s();!(w=A.n()).done;){var S=w.value,j=s[S],E=j.attributes.entity_picture;if(!E){if(void 0===_){var x=getComputedStyle(document.body);_=encodeURIComponent(x.getPropertyValue("--light-primary-color").trim()),C=encodeURIComponent((x.getPropertyValue("--text-light-primary-color")||x.getPropertyValue("--primary-text-color")).trim())}var k=(0,l.fm)(j.attributes.friendly_name||"");E="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50' style='background-color:".concat(_,"'%3E%3Cg%3E%3Ctext font-family='roboto' x='50%25' y='50%25' text-anchor='middle' stroke='").concat(C,"' font-size='1.3em' dy='.3em'%3E").concat(k,"%3C/text%3E%3C/g%3E%3C/svg%3E")}g.push({type:"picture-entity",entity:S,aspect_ratio:"1",show_name:!1,image:E})}}catch(N){A.e(N)}finally{A.f()}m.push({type:"grid",square:!0,columns:3,cards:g})}delete v.person}d.groups.forEach((function(t){m.push.apply(m,p(b(t.attributes.entity_id.map((function(t){return[t,s[t]]})),{title:(0,o.C)(t),show_header_toggle:"hidden"!==t.attributes.control})))}));var M,H=[],V=h(f.y);try{for(V.s();!(M=V.n()).done;){var L=M.value;L in v&&(H.push.apply(H,p(v[L])),delete v[L])}}catch(N){V.e(N)}finally{V.f()}for(var O={},I=0,R=Object.keys(v);I<R.length;I++){var P=R[I];O[P]=(0,c.Lh)(t,P)}H.length&&(v._helpers=H,O._helpers=t("ui.panel.lovelace.strategy.original-states.helpers")),Object.keys(v).sort((function(t,e){return(0,u.$)(O[t],O[e])})).forEach((function(t){m.push.apply(m,p(b(v[t].sort((function(t,e){return(0,u.$)((0,o.C)(s[t]),(0,o.C)(s[e]))})).map((function(t){return[t,s[t]]})),{title:O[t]})))}));var W={path:e,title:n,cards:m};return a&&(W.icon=a),W},w=function(t,e,n,r,o,a){var u,c=function(t,e){var n={},r=new Set(e.filter((function(t){return t.entity_category||g.has(t.platform)||t.hidden_by})).map((function(t){return t.entity_id})));return Object.keys(t).forEach((function(e){var o=t[e];m.has((0,i.N)(o))||r.has(o.entity_id)||(n[e]=t[e])})),n}(r,n),s={};Object.keys(c).forEach((function(t){var e=c[t];e.attributes.order&&(s[t]=e.attributes.order)}));var l=function(t,e,n,r){var i,o=Object.assign({},r),a=[],u=h(t);try{var c=function(){var t,r=i.value,u=[],c=new Set(e.filter((function(t){return t.area_id===r.area_id})).map((function(t){return t.id}))),s=h(n);try{for(s.s();!(t=s.n()).done;){var l=t.value;(c.has(l.device_id)&&!l.area_id||l.area_id===r.area_id)&&l.entity_id in o&&(u.push(o[l.entity_id]),delete o[l.entity_id])}}catch(f){s.e(f)}finally{s.f()}u.length>0&&a.push([r,u])};for(u.s();!(i=u.n()).done;)c()}catch(s){u.e(s)}finally{u.f()}return{areasWithEntities:a,otherEntities:o}}(t,e,n,c),f=_(o,"default_view","Home",undefined,l.otherEntities,s),d=[];if(l.areasWithEntities.forEach((function(t){var e=y(t,2),n=e[0],r=e[1];d.push.apply(d,p(b(r.map((function(t){return[t.entity_id,t]})),{title:n.name})))})),a){var v=a.energy_sources.find((function(t){return"grid"===t.type}));v&&v.flow_from.length>0&&d.push({title:o("ui.panel.lovelace.cards.energy.energy_distribution.title_today"),type:"energy-distribution",link_dashboard:!0})}return(u=f.cards).unshift.apply(u,d),f}}}]);