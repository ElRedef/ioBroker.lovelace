/*! For license information please see 45cf357c.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[49842],{23916:function(n,t,e){e.d(t,{N:function(){return p}});e(48175);var i,a=e(9672),o=e(50856);var r,l,p=(0,a.k)({_template:(0,o.d)(i||(r=['\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n'],l||(l=r.slice(0)),i=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(l)}})))),is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){p.instance||(p.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(n){this._text="",this.async((function(){this._text=n}),100)},_onIronAnnounce:function(n){n.detail&&n.detail.text&&this.announce(n.detail.text)}});p.instance=null,p.requestAvailability=function(){p.instance||(p.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(p.instance)}},21006:function(n,t,e){e.d(t,{V:function(){return i}});e(48175);var i={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}}},98235:function(n,t,e){e.d(t,{x:function(){return o}});e(48175);var i=e(15112),a=null,o={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){a=new i.P({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return a&&a.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(n){return void 0===n&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(n),!this.invalid},_getValidity:function(n){return!this.hasValidator()||this._validator.validate(n)}}},71765:function(n,t,e){e.d(t,{o:function(){return i}});e(48175);var i={attached:function(){this.fire("addon-attached")},update:function(n){}}},66668:function(n,t,e){e.d(t,{d0:function(){return s}});e(48175);var i=e(8621),a=e(26110),o=e(87156),r=e(28426),l={NextLabelID:1,NextAddonID:1,NextInputID:1},p={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!r.H3&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(n,t){return n=n?n+" "+t:t},_onAddonAttached:function(n){var t=(0,o.vz)(n).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var e="paper-input-add-on-"+l.NextAddonID++;t.id=e,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(n){a.a._focusBlurHandler.call(this,n),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(n){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(n){try{var t=this.inputElement.selectionStart;this.value=n,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(e){this.value=n}},_computeAlwaysFloatLabel:function(n,t){return t||n},_updateAriaLabelledBy:function(){var n,t=(0,o.vz)(this.root).querySelector("label");t?(t.id?n=t.id:(n="paper-input-label-"+l.NextLabelID++,t.id=n),this._ariaLabelledBy=n):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+l.NextInputID++)},_onChange:function(n){this.shadowRoot&&this.fire(n.type,{sourceEvent:n},{node:this,bubbles:n.bubbles,cancelable:n.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var n=document.activeElement;n instanceof HTMLElement&&n!==document.body&&n!==document.documentElement||this._focusableElement.focus()}}},s=[a.a,i.G,p]},2178:function(n,t,e){e(48175),e(70019);var i,a,o,r=e(9672),l=e(50856),p=e(71765);(0,r.k)({_template:(0,l.d)(i||(a=["\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"],o||(o=a.slice(0)),i=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),is:"paper-input-char-counter",behaviors:[p.o],properties:{_charCounterStr:{type:String,value:"0"}},update:function(n){if(n.inputElement){n.value=n.value||"";var t=n.value.toString().length.toString();n.inputElement.hasAttribute("maxlength")&&(t+="/"+n.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}})},98121:function(n,t,e){e(48175),e(65660),e(70019);var i,a,o=e(9672),r=e(87156),l=e(67130),p=e(50856);function s(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var u=(0,p.d)(i||(i=s(['\n<custom-style>\n  <style is="custom-style">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n'])));u.setAttribute("style","display: none;"),document.head.appendChild(u.content),(0,o.k)({_template:(0,p.d)(a||(a=s(['\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n\n      .input-content ::slotted(label):before,\n      .input-content ::slotted(.paper-input-label):before {\n        @apply --paper-input-container-label-before;\n      }\n\n      .input-content ::slotted(label):after,\n      .input-content ::slotted(.paper-input-label):after {\n        @apply --paper-input-container-label-after;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn\'t apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>\n\n    <div class="input-wrapper">\n      <span class="prefix"><slot name="prefix"></slot></span>\n\n      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">\n        <slot name="label"></slot>\n        <slot name="input"></slot>\n      </div>\n\n      <span class="suffix"><slot name="suffix"></slot></span>\n    </div>\n\n    <div class$="[[_computeUnderlineClass(focused,invalid)]]">\n      <div class="unfocused-line"></div>\n      <div class="focused-line"></div>\n    </div>\n\n    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">\n      <slot name="add-on"></slot>\n    </div>\n']))),is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return(0,l.z)(this.attrForValue)},get _inputElement(){return(0,r.vz)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(n){this._addons||(this._addons=[]);var t=n.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(n){this._handleValueAndAutoValidate(n.target)},_onValueChanged:function(n){var t=n.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(n.target)},_handleValue:function(n){var t=this._inputElementValue;t||0===t||"number"===n.type&&!n.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:n,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(n){var t;this.autoValidate&&n&&(t=n.validate?n.validate(this._inputElementValue):n.checkValidity(),this.invalid=!t);this._handleValue(n)},_onIronInputValidate:function(n){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(n){for(var t,e=0;t=this._addons[e];e++)t.update(n)},_computeInputContentClass:function(n,t,e,i,a){var o="input-content";if(n)a&&(o+=" label-is-hidden"),i&&(o+=" is-invalid");else{var r=this.querySelector("label");t||a?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?o+=" is-invalid":e&&(o+=" label-is-highlighted")):(r&&(this.$.labelAndInputContainer.style.position="relative"),i&&(o+=" is-invalid"))}return e&&(o+=" focused"),o},_computeUnderlineClass:function(n,t){var e="underline";return t?e+=" is-invalid":n&&(e+=" is-highlighted"),e},_computeAddOnContentClass:function(n,t){var e="add-on-content";return t?e+=" is-invalid":n&&(e+=" is-highlighted"),e}})},65911:function(n,t,e){e(48175),e(70019);var i,a,o,r=e(9672),l=e(50856),p=e(71765);(0,r.k)({_template:(0,l.d)(i||(a=['\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n'],o=['\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n'],o||(o=a.slice(0)),i=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),is:"paper-input-error",behaviors:[p.o],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(n){this._setInvalid(n.invalid)}})},49842:function(n,t,e){e(48175);var i,a,o,r=e(23916),l=e(98235),p=e(9672),s=e(87156),u=e(50856);(0,p.k)({_template:(0,u.d)(i||(a=['\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n'],o||(o=a.slice(0)),i=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(o)}})))),is:"iron-input",behaviors:[l.x],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){r.N.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=(0,s.vz)(this).observeNodes(function(n){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&((0,s.vz)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var n;if(this.allowedPattern)n=new RegExp(this.allowedPattern);else if("number"===this.inputElement.type)n=/[0-9.,e-]/;return n},_bindValueChanged:function(n,t){t&&(void 0===n?t.value=null:n!==t.value&&(this.inputElement.value=n),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:n}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(n){var t=8==n.keyCode||9==n.keyCode||13==n.keyCode||27==n.keyCode,e=19==n.keyCode||20==n.keyCode||45==n.keyCode||46==n.keyCode||144==n.keyCode||145==n.keyCode||n.keyCode>32&&n.keyCode<41||n.keyCode>111&&n.keyCode<124;return!(t||0==n.charCode&&e)},_onKeypress:function(n){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(n.metaKey||n.ctrlKey||n.altKey)){this._patternAlreadyChecked=!0;var e=String.fromCharCode(n.charCode);this._isPrintable(n)&&!t.test(e)&&(n.preventDefault(),this._announceInvalidCharacter("Invalid character "+e+" not entered."))}}},_checkPatternValidity:function(){var n=this._patternRegExp;if(!n)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!n.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var n=this.inputElement.checkValidity();return n&&(this.required&&""===this.bindValue?n=!1:this.hasValidator()&&(n=l.x.validate.call(this,this.bindValue))),this.invalid=!n,this.fire("iron-input-validate"),n},_announceInvalidCharacter:function(n){this.fire("iron-announce",{text:n})},_computeValue:function(n){return n}});e(2178),e(98121),e(65911);var d,c=e(21006),h=(e(21384),e(66668));(0,p.k)({is:"paper-input",_template:(0,u.d)(d||(d=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ']))),behaviors:[h.d0,c.V],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})}}]);