export const id=71850;export const ids=[71850];export const modules={71850:(t,i,e)=>{e.a(t,(async(t,s)=>{try{e.r(i);var n=e(17463),a=e(34541),o=e(47838),c=e(68144),d=e(79932),h=e(83448),r=e(30153),l=e(29171),u=e(91741),f=e(18457),_=(e(3143),e(56007)),v=e(75692),y=e(93491),p=e(17616),b=e(22193),g=e(53658),k=e(91476),m=e(75502),$=t([l,k]);[l,k]=$.then?(await $)():$;(0,n.Z)([(0,d.Mo)("hui-weather-entity-row")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_forecastEvent",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_subscribed",value:void 0},{kind:"method",key:"_unsubscribeForecastEvents",value:function(){this._subscribed&&(this._subscribed.then((t=>t())),this._subscribed=void 0)}},{kind:"method",key:"_subscribeForecastEvents",value:async function(){if(this._unsubscribeForecastEvents(),!this.hass||!this._config||!this.isConnected)return;const t=this.hass.states[this._config.entity],i=(0,v.k5)(t);i&&(this._subscribed=(0,v.MC)(this.hass,t.entity_id,i,(t=>{this._forecastEvent=t})))}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,o.Z)(e.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeForecastEvents()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,o.Z)(e.prototype),"disconnectedCallback",this).call(this),this._unsubscribeForecastEvents()}},{kind:"method",key:"setConfig",value:function(t){if(null==t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,g.G2)(this,t)}},{kind:"method",key:"updated",value:function(t){(0,a.Z)((0,o.Z)(e.prototype),"updated",this).call(this,t),!t.has("_config")&&this._subscribed||this._subscribeForecastEvents()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c.Ld;const t=this.hass.states[this._config.entity];if(!t)return c.dy` <hui-warning> ${(0,m.i)(this.hass,this._config.entity)} </hui-warning> `;const i=!(this._config.tap_action&&"none"!==this._config.tap_action.action),e=this._config.secondary_info,s=(0,v.Cq)(t.state,this,!1,this.hass.auth.accessToken),n=(0,v.Rt)(t.attributes,this._forecastEvent),a=null==n?void 0:n.forecast;return c.dy` <div class="icon-image ${(0,h.$)({pointer:i})}" @action="${this._handleAction}" .actionHandler="${(0,y.K)({hasHold:(0,b._)(this._config.hold_action),hasDoubleClick:(0,b._)(this._config.double_tap_action)})}" tabindex="${(0,r.o)(i?"0":void 0)}"> ${s||c.dy` <ha-state-icon class="weather-icon" .state="${t}"></ha-state-icon> `} </div> <div class="info ${(0,h.$)({pointer:i,"text-content":!e})}" @action="${this._handleAction}" .actionHandler="${(0,y.K)({hasHold:(0,b._)(this._config.hold_action),hasDoubleClick:(0,b._)(this._config.double_tap_action)})}"> ${this._config.name||(0,u.C)(t)} ${e?c.dy` <div class="secondary"> ${"entity-id"===this._config.secondary_info?t.entity_id:"last-changed"===this._config.secondary_info?c.dy` <ha-relative-time .hass="${this.hass}" .datetime="${t.last_changed}" capitalize></ha-relative-time> `:"last-updated"===this._config.secondary_info?c.dy` <ha-relative-time .hass="${this.hass}" .datetime="${t.last_updated}" capitalize></ha-relative-time> `:""} </div> `:""} </div> <div class="attributes ${(0,h.$)({pointer:i})}" @action="${this._handleAction}" .actionHandler="${(0,y.K)({hasHold:(0,b._)(this._config.hold_action),hasDoubleClick:(0,b._)(this._config.double_tap_action)})}"> <div> ${(0,_.rk)(t.state)||void 0===t.attributes.temperature||null===t.attributes.temperature?(0,l.D1)(this.hass.localize,t,this.hass.locale,this.hass.config,this.hass.entities):c.dy` ${(0,f.uf)(t.attributes.temperature,this.hass.locale)} ${(0,v.pv)(this.hass,t,"temperature")} `} </div> <div class="secondary"> ${(0,v.k2)(this.hass,t,a)} </div> </div> `}},{kind:"method",key:"_handleAction",value:function(t){(0,p.G)(this,this.hass,this._config,t.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return[v.A$,c.iv`:host{display:flex;align-items:center;flex-direction:row}.info{margin-left:16px;flex:1 0 60px}.info,.info>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.icon-image{display:flex;align-items:center;min-width:40px}.icon-image>*{flex:0 0 40px;height:40px}.icon-image:focus{outline:0;background-color:var(--divider-color);border-radius:50%}.weather-icon{--mdc-icon-size:40px}:host([rtl]) .flex{margin-left:0;margin-right:16px}.pointer{cursor:pointer}.attributes{display:flex;flex-direction:column;justify-content:center;text-align:right;margin-left:8px}.secondary{color:var(--secondary-text-color)}`]}}]}}),c.oi);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=71850-wXbSz9sNoXQ.js.map