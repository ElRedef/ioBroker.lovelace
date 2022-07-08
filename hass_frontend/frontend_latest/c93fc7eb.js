"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[39085],{39085:(e,n,t)=>{t.r(n),t.d(n,{ExternalAuth:()=>c,createExternalAuth:()=>l});var s=t(10280);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class i{constructor(){a(this,"config",void 0),a(this,"commands",{}),a(this,"msgId",0),a(this,"_commandHandler",void 0)}async attach(){window.externalBus=e=>this.receiveMessage(e),window.addEventListener("connection-status",(e=>this.fireMessage({type:"connection-status",payload:{event:e.detail}}))),this.config=await this.sendMessage({type:"config/get"})}addCommandHandler(e){this._commandHandler=e}sendMessage(e){const n=++this.msgId;return e.id=n,this.fireMessage(e),new Promise(((e,t)=>{this.commands[n]={resolve:e,reject:t}}))}fireMessage(e){e.id||(e.id=++this.msgId),this._sendExternal(e)}receiveMessage(e){if("command"===e.type){if(!this._commandHandler||!this._commandHandler(e)){let n,t;this._commandHandler?(n="not_ready",t="Command handler not ready"):(n="unknown_command",t=`Unknown command ${e.command}`),console.warn(t,e),this.fireMessage({id:e.id,type:"result",success:!1,error:{code:n,message:t}})}return}const n=this.commands[e.id];n?"result"===e.type&&(e.success?n.resolve(e.result):n.reject(e.error)):console.warn("Received unknown msg ID",e.id)}_sendExternal(e){window.externalApp?window.externalApp.externalBus(JSON.stringify(e)):window.webkit.messageHandlers.externalBus.postMessage(e)}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const o="externalAuthSetToken",d="externalAuthRevokeToken";if(!window.externalApp&&!window.webkit)throw new Error("External auth requires either externalApp or webkit defined on Window object.");class c extends s.gx{constructor(e){super({hassUrl:e,clientId:"",refresh_token:"",access_token:"",expires_in:0,expires:0}),r(this,"external",void 0),r(this,"_tokenCallbackPromise",void 0)}async refreshAccessToken(e){if(this._tokenCallbackPromise&&!e)try{return void await this._tokenCallbackPromise}catch(e){this._tokenCallbackPromise=void 0}const n={callback:o};e&&(n.force=!0),this._tokenCallbackPromise=new Promise(((e,n)=>{window[o]=(t,s)=>t?e(s):n(s)})),await Promise.resolve(),window.externalApp?window.externalApp.getExternalAuth(JSON.stringify(n)):window.webkit.messageHandlers.getExternalAuth.postMessage(n);const t=await this._tokenCallbackPromise;this.data.access_token=t.access_token,this.data.expires=1e3*t.expires_in+Date.now(),this._tokenCallbackPromise=void 0}async revoke(){const e={callback:d},n=new Promise(((e,n)=>{window[d]=(t,s)=>t?e(s):n(s)}));await Promise.resolve(),window.externalApp?window.externalApp.revokeExternalAuth(JSON.stringify(e)):window.webkit.messageHandlers.revokeExternalAuth.postMessage(e),await n}}const l=async e=>{const n=new c(e);return(window.externalApp&&window.externalApp.externalBus||window.webkit&&window.webkit.messageHandlers.externalBus)&&(n.external=new i,await n.external.attach()),n}}}]);