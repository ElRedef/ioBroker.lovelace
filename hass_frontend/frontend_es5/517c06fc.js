"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[88643],{88643:function(e,r,t){t.r(r),t.d(r,{CloudRegister:function(){return D}});var n,i,o,s=t(37500),a=t(33310),l=t(47181),c=(t(98762),t(9381),t(22098),t(3555),t(83270)),u=(t(60010),t(11654));t(88165);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,r,t,n,i,o,s){try{var a=e[o](s),l=a.value}catch(c){return void t(c)}a.done?r(l):Promise.resolve(l).then(n,i)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var o=e.apply(r,t);function s(e){f(o,n,i,s,a,"next",e)}function a(e){f(o,n,i,s,a,"throw",e)}s(void 0)}))}}function h(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function m(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function y(e,r){return y=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},y(e,r)}function v(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=w(e);if(r){var i=w(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return g(this,t)}}function g(e,r){if(r&&("object"===d(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(n){r.forEach((function(r){var i=r.placement;if(r.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:t;this.defineClassElement(o,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!P(e))return t.push(e);var r=this.decorateElement(e,i);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),this),!r)return{elements:t,finishers:n};var o=this.decorateConstructor(t,r);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,r){for(var t=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=r[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(a)||a);e=l.element,this.addElementPlacement(e,r),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],r);t.push.apply(t,c)}}return{element:e,finishers:n,extras:t}},decorateConstructor:function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,r[n])(i)||i);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,r){if(e){if("string"==typeof e)return C(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=S(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:r,key:t,placement:n,descriptor:Object.assign({},i)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:x(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=x(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function _(e){var r,t=S(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function E(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function x(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function S(e){var r=function(e,r){if("object"!==d(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===d(r)?r:String(r)}function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var D=function(e,r,t,n){var i=k();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=r((function(e){i.initializeInstanceElements(e,a.elements)}),t),a=i.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=r.find(t)))if(z(o.descriptor)||z(i.descriptor)){if(P(o)||P(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(P(o)){if(P(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}E(o,i)}else r.push(o)}return r}(s.d.map(_)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,a.Mo)("cloud-register")],(function(e,r){var t,d,f=function(r){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&y(e,r)}(n,r);var t=v(n);function n(){var r;m(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),e(b(r)),r}return n}(r);return{F:f,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,a.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_requestInProgress",value:function(){return!1}},{kind:"field",decorators:[(0,a.SB)()],key:"_password",value:function(){return""}},{kind:"field",decorators:[(0,a.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,a.IO)("#email",!0)],key:"_emailField",value:void 0},{kind:"field",decorators:[(0,a.IO)("#password",!0)],key:"_passwordField",value:void 0},{kind:"method",key:"render",value:function(){return(0,s.dy)(n||(n=h(["\n      <hass-subpage\n        .hass=","\n        .narrow=","\n        .header=",'\n      >\n        <div class="content">\n          <ha-config-section .isWide=','>\n            <span slot="header"\n              >','</span\n            >\n            <div slot="introduction">\n              <p>\n                ',"\n              </p>\n              <p>\n                ","\n              </p>\n              <ul>\n                <li>\n                  ","\n                </li>\n                <li>\n                  ","\n                </li>\n                <li>\n                  ","\n                </li>\n                <li>\n                  ","\n                </li>\n              </ul>\n              <p>\n                ",'\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >Nabu&nbsp;Casa,&nbsp;Inc</a\n                >\n                ',"\n              </p>\n              <p>\n                ",'\n              </p>\n              <ul>\n                <li>\n                  <a\n                    href="https://www.nabucasa.com/tos/"\n                    target="_blank"\n                    rel="noreferrer"\n                  >\n                    ','\n                  </a>\n                </li>\n                <li>\n                  <a\n                    href="https://www.nabucasa.com/privacy_policy/"\n                    target="_blank"\n                    rel="noreferrer"\n                  >\n                    ',"\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <ha-card\n              outlined\n              .header=",'\n              ><div class="card-content register-form">\n                ','\n                <ha-textfield\n                  autofocus\n                  id="email"\n                  .label=','\n                  type="email"\n                  required\n                  .value=',"\n                  @keydown=","\n                  validationMessage=",'\n                ></ha-textfield>\n                <ha-textfield\n                  id="password"\n                  label="Password"\n                  .value=','\n                  type="password"\n                  minlength="8"\n                  required\n                  @keydown=',"\n                  validationMessage=",'\n                ></ha-textfield>\n              </div>\n              <div class="card-actions">\n                <ha-progress-button\n                  @click=',"\n                  .progress=","\n                  >",'</ha-progress-button\n                >\n                <button\n                  class="link"\n                  .disabled=',"\n                  @click=","\n                >\n                  ","\n                </button>\n              </div>\n            </ha-card>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.cloud.register.title"),this.isWide,this.hass.localize("ui.panel.config.cloud.register.headline"),this.hass.localize("ui.panel.config.cloud.register.information"),this.hass.localize("ui.panel.config.cloud.register.information2"),this.hass.localize("ui.panel.config.cloud.register.feature_remote_control"),this.hass.localize("ui.panel.config.cloud.register.feature_google_home"),this.hass.localize("ui.panel.config.cloud.register.feature_amazon_alexa"),this.hass.localize("ui.panel.config.cloud.register.feature_webhook_apps"),this.hass.localize("ui.panel.config.cloud.register.information3"),this.hass.localize("ui.panel.config.cloud.register.information3a"),this.hass.localize("ui.panel.config.cloud.register.information4"),this.hass.localize("ui.panel.config.cloud.register.link_terms_conditions"),this.hass.localize("ui.panel.config.cloud.register.link_privacy_policy"),this.hass.localize("ui.panel.config.cloud.register.create_account"),this._error?(0,s.dy)(i||(i=h(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.hass.localize("ui.panel.config.cloud.register.email_address"),this.email,this._keyDown,this.hass.localize("ui.panel.config.cloud.register.email_error_msg"),this._password,this._keyDown,this.hass.localize("ui.panel.config.cloud.register.password_error_msg"),this._handleRegister,this._requestInProgress,this.hass.localize("ui.panel.config.cloud.register.start_trial"),this._requestInProgress,this._handleResendVerifyEmail,this.hass.localize("ui.panel.config.cloud.register.resend_confirm_email"))}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleRegister()}},{kind:"method",key:"_handleRegister",value:(d=p(regeneratorRuntime.mark((function e(){var r,t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._emailField,t=this._passwordField,n=r.value,i=t.value,r.reportValidity()){e.next=8;break}return t.reportValidity(),r.focus(),e.abrupt("return");case 8:if(t.reportValidity()){e.next=11;break}return t.focus(),e.abrupt("return");case 11:return this._requestInProgress=!0,e.prev=12,e.next=15,(0,c.bi)(this.hass,n,i);case 15:this._verificationEmailSent(n),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(12),this._password="",this._requestInProgress=!1,this._error=e.t0&&e.t0.body&&e.t0.body.message?e.t0.body.message:"Unknown error";case 23:case"end":return e.stop()}}),e,this,[[12,18]])}))),function(){return d.apply(this,arguments)})},{kind:"method",key:"_handleResendVerifyEmail",value:(t=p(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._emailField,t=r.value,r.reportValidity()){e.next=5;break}return r.focus(),e.abrupt("return");case 5:return e.prev=5,e.next=8,(0,c._t)(this.hass,t);case 8:this._verificationEmailSent(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),this._error=e.t0&&e.t0.body&&e.t0.body.message?e.t0.body.message:"Unknown error";case 14:case"end":return e.stop()}}),e,this,[[5,11]])}))),function(){return t.apply(this,arguments)})},{kind:"method",key:"_verificationEmailSent",value:function(e){this._requestInProgress=!1,this._password="",(0,l.B)(this,"email-changed",{value:e}),(0,l.B)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.register.account_created")})}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,(0,s.iv)(o||(o=h(['\n        [slot="introduction"] {\n          margin: -1em 0;\n        }\n        [slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        a {\n          color: var(--primary-color);\n        }\n        h1 {\n          margin: 0;\n        }\n        .register-form {\n          display: flex;\n          flex-direction: column;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n      '])))]}}]}}),s.oi)}}]);