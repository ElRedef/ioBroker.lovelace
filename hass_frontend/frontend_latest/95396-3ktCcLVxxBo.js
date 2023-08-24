export const id=95396;export const ids=[95396];export const modules={95396:(t,i,e)=>{e.r(i),e.d(i,{DEFAULT_DAYS_TO_SHOW:()=>u,HuiStatisticsGraphCard:()=>v});var s=e(17463),a=e(34541),n=e(47838),o=e(68144),d=e(79932),h=e(83448),c=(e(22098),e(38014)),l=e(15688),r=e(53658),_=e(90271);const u=30;let v=(0,s.Z)([(0,d.Mo)("hui-statistics-graph-card")],(function(t,i){class s extends i{constructor(...i){super(...i),t(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([e.e(46992),e.e(31338),e.e(42977),e.e(97487),e.e(40163),e.e(52092),e.e(13927),e.e(2951)]).then(e.bind(e,86943)),document.createElement("hui-statistics-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,i,e){const s=(0,l.j)(t,1,i,e,["sensor"],(t=>"state_class"in t.attributes));return{type:"statistics-graph",entities:s.length?[s[0]]:[]}}},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_statistics",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_metadata",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_unit",value:void 0},{kind:"field",key:"_entities",value:()=>[]},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_statTypes",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,n.Z)(s.prototype),"disconnectedCallback",this).call(this),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,n.Z)(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setFetchStatisticsTimer()}},{kind:"method",key:"getCardSize",value:function(){var t,i,e;return 5+(null!==(t=this._config)&&void 0!==t&&t.title?2:0)+(null!==(i=this._config)&&void 0!==i&&i.hide_legend?0:(null===(e=this._entities)||void 0===e?void 0:e.length)||0)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");const i=t.entities?(0,_.A)(t.entities,!1):[];this._entities=[],i.forEach((t=>{this._entities.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),"string"==typeof t.stat_types?this._statTypes=[t.stat_types]:t.stat_types?this._statTypes=t.stat_types:this._statTypes=["change","state","sum","min","max","mean"],this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_statistics")||(0,r.Wh)(this,t)}},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,n.Z)(s.prototype),"willUpdate",this).call(this,t),!this._config||!t.has("_config"))return;const i=t.get("_config");t.has("_config")&&(null==i?void 0:i.entities)!==this._config.entities?this._getStatisticsMetaData(this._entities).then((()=>{this._setFetchStatisticsTimer()})):!t.has("_config")||(null==i?void 0:i.stat_types)===this._config.stat_types&&(null==i?void 0:i.days_to_show)===this._config.days_to_show&&(null==i?void 0:i.period)===this._config.period&&(null==i?void 0:i.unit)===this._config.unit||this._setFetchStatisticsTimer()}},{kind:"method",key:"_setFetchStatisticsTimer",value:function(){this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),this._intervalTimeout)}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o.dy` <ha-card .header="${this._config.title}"> <div class="content ${(0,h.$)({"has-header":!!this._config.title})}"> <statistics-chart .hass="${this.hass}" .isLoadingData="${!this._statistics}" .statisticsData="${this._statistics}" .metadata="${this._metadata}" .chartType="${this._config.chart_type||"line"}" .statTypes="${this._statTypes}" .names="${this._names}" .unit="${this._unit}" .hideLegend="${this._config.hide_legend||!1}"></statistics-chart> </div> </ha-card> `:o.Ld}},{kind:"get",key:"_intervalTimeout",value:function(){var t;return 1e3*("5minute"===(null===(t=this._config)||void 0===t?void 0:t.period)?5:60)*60}},{kind:"method",key:"_getStatisticsMetaData",value:async function(t){const i=await(0,c.Py)(this.hass,t),e={};i.forEach((t=>{e[t.statistic_id]=t})),this._metadata=e}},{kind:"method",key:"_getStatistics",value:async function(){const t=new Date;t.setTime(t.getTime()-36e5*(24*(this._config.days_to_show||u)+1));try{let i;if(this._config.unit&&this._metadata){const t=Object.values(this._metadata).find((t=>(0,c.dO)(this.hass,null==t?void 0:t.statistic_id,t)===this._config.unit));t&&(i=t.unit_class,this._unit=this._config.unit)}if(!i&&this._metadata){const t=this._metadata[this._entities[0]];i=null==t?void 0:t.unit_class,this._unit=i&&(0,c.dO)(this.hass,t.statistic_id,t)||void 0}const e=i?{[i]:this._unit}:void 0,s=await(0,c.dL)(this.hass,t,void 0,this._entities,this._config.period,e,this._statTypes);this._statistics={},this._entities.forEach((t=>{t in s&&(this._statistics[t]=s[t])}))}catch(t){this._statistics=void 0}}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`ha-card{height:100%}.content{padding:16px}.has-header{padding-top:0}`}}]}}),o.oi)}};
//# sourceMappingURL=95396-3ktCcLVxxBo.js.map