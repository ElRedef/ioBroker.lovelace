(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7203],{4705:function(t,e,n){"use strict";n.r(e);n(12730);var r=n(50856),o=n(28426);n(48932),n(3426);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n      <style include="ha-style">\n        iframe {\n          border: 0;\n          width: 100%;\n          position: absolute;\n          height: calc(100% - var(--header-height));\n          background-color: var(--primary-background-color);\n        }\n      </style>\n      <app-toolbar>\n        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>\n        <div main-title>[[panel.title]]</div>\n      </app-toolbar>\n\n      <iframe\n        src="[[panel.config.url]]"\n        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n        allowfullscreen="true"\n        webkitallowfullscreen="true"\n        mozallowfullscreen="true"\n      ></iframe>\n    ']);return c=function(){return t},t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,n,o,u=f(s);function s(){return a(this,s),u.apply(this,arguments)}return e=s,o=[{key:"template",get:function(){return(0,r.d)(c())}},{key:"properties",get:function(){return{hass:Object,narrow:Boolean,panel:Object}}}],(n=null)&&i(e.prototype,n),o&&i(e,o),s}(o.H3);customElements.define("ha-panel-iframe",y)},3426:function(t,e,n){"use strict";n(21384);var r=n(11654),o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="ha-style">\n  <template>\n    <style>\n    '.concat(r.Qx.cssText,"\n    </style>\n  </template>\n</dom-module>"),document.head.appendChild(o.content)}}]);
//# sourceMappingURL=chunk.f0da6c9836fc289325e9.js.map