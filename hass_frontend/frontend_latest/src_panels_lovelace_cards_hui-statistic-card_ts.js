"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_cards_hui-statistic-card_ts"],{

/***/ "./src/panels/lovelace/cards/hui-statistic-card.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-statistic-card.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HuiStatisticCard: () => (/* binding */ HuiStatisticCard)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ \"./src/common/dom/apply_themes_on_element.ts\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ \"./src/common/entity/valid_entity_id.ts\");\n/* harmony import */ var _common_number_format_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/number/format_number */ \"./src/common/number/format_number.ts\");\n/* harmony import */ var _components_ha_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-alert */ \"./src/components/ha-alert.ts\");\n/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-card */ \"./src/components/ha-card.ts\");\n/* harmony import */ var _components_ha_state_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-state-icon */ \"./src/components/ha-state-icon.ts\");\n/* harmony import */ var _data_recorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/recorder */ \"./src/data/recorder.ts\");\n/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/compute-card-size */ \"./src/panels/lovelace/common/compute-card-size.ts\");\n/* harmony import */ var _common_find_entities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/find-entities */ \"./src/panels/lovelace/common/find-entities.ts\");\n/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/has-changed */ \"./src/panels/lovelace/common/has-changed.ts\");\n/* harmony import */ var _create_element_create_header_footer_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../create-element/create-header-footer-element */ \"./src/panels/lovelace/create-element/create-header-footer-element.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet HuiStatisticCard = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.customElement)(\"hui-statistic-card\")], function (_initialize, _LitElement) {\n  class HuiStatisticCard extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HuiStatisticCard,\n    d: [{\n      kind: \"method\",\n      static: true,\n      key: \"getConfigElement\",\n      value: async function getConfigElement() {\n        await Promise.all(/*! import() */[__webpack_require__.e(\"src_components_ha-selector_ha-selector_ts\"), __webpack_require__.e(\"src_common_array_ensure-array_ts-src_panels_lovelace_editor_config-elements_hui-statistic-car-3857bc\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../editor/config-elements/hui-statistic-card-editor */ \"./src/panels/lovelace/editor/config-elements/hui-statistic-card-editor.ts\"));\n        return document.createElement(\"hui-statistic-card-editor\");\n      }\n    }, {\n      kind: \"method\",\n      static: true,\n      key: \"getStubConfig\",\n      value: function getStubConfig(hass, entities, entitiesFill) {\n        const includeDomains = [\"sensor\"];\n        const maxEntities = 1;\n        const foundEntities = (0,_common_find_entities__WEBPACK_IMPORTED_MODULE_14__.findEntities)(hass, maxEntities, entities, entitiesFill, includeDomains, stateObj => \"state_class\" in stateObj.attributes);\n        return {\n          entity: foundEntities[0] || \"\",\n          period: {\n            calendar: {\n              period: \"month\"\n            }\n          }\n        };\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_value\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_metadata\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_error\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_interval\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_footerElement\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HuiStatisticCard.prototype), \"disconnectedCallback\", this).call(this);\n        clearInterval(this._interval);\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config.entity) {\n          throw new Error(\"Entity must be specified\");\n        }\n        if (!config.stat_type) {\n          throw new Error(\"Statistic type must be specified\");\n        }\n        if (!config.period) {\n          throw new Error(\"Period must be specified\");\n        }\n        if (config.entity && !(0,_data_recorder__WEBPACK_IMPORTED_MODULE_12__.isExternalStatistic)(config.entity) && !(0,_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_7__.isValidEntityId)(config.entity)) {\n          throw new Error(\"Invalid entity\");\n        }\n        this._config = config;\n        this._error = undefined;\n        this._fetchStatistic();\n        this._fetchMetadata();\n        if (this._config.footer) {\n          this._footerElement = (0,_create_element_create_header_footer_element__WEBPACK_IMPORTED_MODULE_16__.createHeaderFooterElement)(this._config.footer);\n        } else if (this._footerElement) {\n          this._footerElement = undefined;\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"getCardSize\",\n      value: async function getCardSize() {\n        let size = 2;\n        if (this._footerElement) {\n          const footerSize = (0,_common_compute_card_size__WEBPACK_IMPORTED_MODULE_13__.computeCardSize)(this._footerElement);\n          size += footerSize instanceof Promise ? await footerSize : footerSize;\n        }\n        return size;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config || !this.hass) {\n          return lit__WEBPACK_IMPORTED_MODULE_3__.nothing;\n        }\n        if (this._error) {\n          return lit__WEBPACK_IMPORTED_MODULE_3__.html` <ha-alert alert-type=\"error\">${this._error}</ha-alert> `;\n        }\n        const stateObj = this.hass.states[this._config.entity];\n        const name = this._config.name || (0,_data_recorder__WEBPACK_IMPORTED_MODULE_12__.getStatisticLabel)(this.hass, this._config.entity, this._metadata);\n        return lit__WEBPACK_IMPORTED_MODULE_3__.html`\n      <ha-card @click=${this._handleClick} tabindex=\"0\">\n        <div class=\"header\">\n          <div class=\"name\" .title=${name}>${name}</div>\n          <div class=\"icon\">\n            <ha-state-icon\n              .icon=${this._config.icon}\n              .state=${stateObj}\n            ></ha-state-icon>\n          </div>\n        </div>\n        <div class=\"info\">\n          <span class=\"value\"\n            >${this._value === undefined ? \"\" : this._value === null ? \"?\" : (0,_common_number_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(this._value, this.hass.locale)}</span\n          >\n          <span class=\"measurement\"\n            >${this._config.unit || (0,_data_recorder__WEBPACK_IMPORTED_MODULE_12__.getDisplayUnit)(this.hass, this._config.entity, this._metadata)}</span\n          >\n        </div>\n        ${this._footerElement}\n      </ha-card>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"shouldUpdate\",\n      value: function shouldUpdate(changedProps) {\n        // Side Effect used to update footer hass while keeping optimizations\n        if (this._footerElement) {\n          this._footerElement.hass = this.hass;\n        }\n        if (changedProps.has(\"_value\") || changedProps.has(\"_metadata\") || changedProps.has(\"_error\")) {\n          return true;\n        }\n        if (this._config) {\n          return (0,_common_has_changed__WEBPACK_IMPORTED_MODULE_15__.hasConfigOrEntityChanged)(this, changedProps);\n        }\n        return true;\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated() {\n        this._fetchStatistic();\n        this._fetchMetadata();\n      }\n    }, {\n      kind: \"method\",\n      key: \"updated\",\n      value: function updated(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HuiStatisticCard.prototype), \"updated\", this).call(this, changedProps);\n        if (!this._config || !this.hass) {\n          return;\n        }\n        const oldHass = changedProps.get(\"hass\");\n        const oldConfig = changedProps.get(\"_config\");\n        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {\n          (0,_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_5__.applyThemesOnElement)(this, this.hass.themes, this._config.theme);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_fetchStatistic\",\n      value: async function _fetchStatistic() {\n        if (!this.hass || !this._config) {\n          return;\n        }\n        clearInterval(this._interval);\n        this._interval = window.setInterval(() => this._fetchStatistic(), 5 * 1000 * 60);\n        try {\n          const stats = await (0,_data_recorder__WEBPACK_IMPORTED_MODULE_12__.fetchStatistic)(this.hass, this._config.entity, this._config.period);\n          this._value = stats[this._config.stat_type];\n          this._error = undefined;\n        } catch (e) {\n          this._error = e.message;\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_fetchMetadata\",\n      value: async function _fetchMetadata() {\n        if (!this.hass || !this._config) {\n          return;\n        }\n        try {\n          var _await$getStatisticMe;\n          this._metadata = (_await$getStatisticMe = await (0,_data_recorder__WEBPACK_IMPORTED_MODULE_12__.getStatisticMetadata)(this.hass, [this._config.entity])) === null || _await$getStatisticMe === void 0 ? void 0 : _await$getStatisticMe[0];\n        } catch (e) {\n          this._error = e.message;\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_handleClick\",\n      value: function _handleClick() {\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__.fireEvent)(this, \"hass-more-info\", {\n          entityId: this._config.entity\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return [lit__WEBPACK_IMPORTED_MODULE_3__.css`\n        ha-card {\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          cursor: pointer;\n          outline: none;\n        }\n\n        .header {\n          display: flex;\n          padding: 8px 16px 0;\n          justify-content: space-between;\n        }\n\n        .name {\n          color: var(--secondary-text-color);\n          line-height: 40px;\n          font-weight: 500;\n          font-size: 16px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .icon {\n          color: var(--state-icon-color, #44739e);\n          line-height: 40px;\n        }\n\n        .info {\n          padding: 0px 16px 16px;\n          margin-top: -4px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          line-height: 28px;\n        }\n\n        .value {\n          font-size: 28px;\n          margin-right: 4px;\n        }\n\n        .measurement {\n          font-size: 18px;\n          color: var(--secondary-text-color);\n        }\n      `];\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1zdGF0aXN0aWMtY2FyZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBOFFBO0FBQUE7QUFBQTtBQTlRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jYXJkcy9odWktc3RhdGlzdGljLWNhcmQudHM/Y2I0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHRHcm91cCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIG5vdGhpbmcsXG59IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgYXBwbHlUaGVtZXNPbkVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVudGl0eUlkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL251bWJlci9mb3JtYXRfbnVtYmVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWFsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3RhdGUtaWNvblwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hTdGF0aXN0aWMsXG4gIGdldERpc3BsYXlVbml0LFxuICBnZXRTdGF0aXN0aWNMYWJlbCxcbiAgZ2V0U3RhdGlzdGljTWV0YWRhdGEsXG4gIGlzRXh0ZXJuYWxTdGF0aXN0aWMsXG4gIFN0YXRpc3RpY3NNZXRhRGF0YSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvcmVjb3JkZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVDYXJkU2l6ZSB9IGZyb20gXCIuLi9jb21tb24vY29tcHV0ZS1jYXJkLXNpemVcIjtcbmltcG9ydCB7IGZpbmRFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vZmluZC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkIH0gZnJvbSBcIi4uL2NvbW1vbi9oYXMtY2hhbmdlZFwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyRm9vdGVyRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtaGVhZGVyLWZvb3Rlci1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBMb3ZlbGFjZUNhcmQsXG4gIExvdmVsYWNlQ2FyZEVkaXRvcixcbiAgTG92ZWxhY2VIZWFkZXJGb290ZXIsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSHVpRXJyb3JDYXJkIH0gZnJvbSBcIi4vaHVpLWVycm9yLWNhcmRcIjtcbmltcG9ydCB7IEVudGl0eUNhcmRDb25maWcsIFN0YXRpc3RpY0NhcmRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1zdGF0aXN0aWMtY2FyZFwiKVxuZXhwb3J0IGNsYXNzIEh1aVN0YXRpc3RpY0NhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCk6IFByb21pc2U8TG92ZWxhY2VDYXJkRWRpdG9yPiB7XG4gICAgYXdhaXQgaW1wb3J0KFwiLi4vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktc3RhdGlzdGljLWNhcmQtZWRpdG9yXCIpO1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHVpLXN0YXRpc3RpYy1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZyhcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgICBlbnRpdGllc0ZpbGw6IHN0cmluZ1tdXG4gICkge1xuICAgIGNvbnN0IGluY2x1ZGVEb21haW5zID0gW1wic2Vuc29yXCJdO1xuICAgIGNvbnN0IG1heEVudGl0aWVzID0gMTtcbiAgICBjb25zdCBmb3VuZEVudGl0aWVzID0gZmluZEVudGl0aWVzKFxuICAgICAgaGFzcyxcbiAgICAgIG1heEVudGl0aWVzLFxuICAgICAgZW50aXRpZXMsXG4gICAgICBlbnRpdGllc0ZpbGwsXG4gICAgICBpbmNsdWRlRG9tYWlucyxcbiAgICAgIChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4gXCJzdGF0ZV9jbGFzc1wiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eTogZm91bmRFbnRpdGllc1swXSB8fCBcIlwiLFxuICAgICAgcGVyaW9kOiB7IGNhbGVuZGFyOiB7IHBlcmlvZDogXCJtb250aFwiIH0gfSxcbiAgICB9O1xuICB9XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfY29uZmlnPzogU3RhdGlzdGljQ2FyZENvbmZpZztcblxuICBAc3RhdGUoKSBwcml2YXRlIF92YWx1ZT86IG51bWJlciB8IG51bGw7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfbWV0YWRhdGE/OiBTdGF0aXN0aWNzTWV0YURhdGE7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfZm9vdGVyRWxlbWVudD86IEh1aUVycm9yQ2FyZCB8IExvdmVsYWNlSGVhZGVyRm9vdGVyO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFN0YXRpc3RpY0NhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBtdXN0IGJlIHNwZWNpZmllZFwiKTtcbiAgICB9XG4gICAgaWYgKCFjb25maWcuc3RhdF90eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGF0aXN0aWMgdHlwZSBtdXN0IGJlIHNwZWNpZmllZFwiKTtcbiAgICB9XG4gICAgaWYgKCFjb25maWcucGVyaW9kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQZXJpb2QgbXVzdCBiZSBzcGVjaWZpZWRcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNvbmZpZy5lbnRpdHkgJiZcbiAgICAgICFpc0V4dGVybmFsU3RhdGlzdGljKGNvbmZpZy5lbnRpdHkpICYmXG4gICAgICAhaXNWYWxpZEVudGl0eUlkKGNvbmZpZy5lbnRpdHkpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudGl0eVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZmV0Y2hTdGF0aXN0aWMoKTtcbiAgICB0aGlzLl9mZXRjaE1ldGFkYXRhKCk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvb3Rlcikge1xuICAgICAgdGhpcy5fZm9vdGVyRWxlbWVudCA9IGNyZWF0ZUhlYWRlckZvb3RlckVsZW1lbnQodGhpcy5fY29uZmlnLmZvb3Rlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mb290ZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb290ZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRDYXJkU2l6ZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIGxldCBzaXplID0gMjtcbiAgICBpZiAodGhpcy5fZm9vdGVyRWxlbWVudCkge1xuICAgICAgY29uc3QgZm9vdGVyU2l6ZSA9IGNvbXB1dGVDYXJkU2l6ZSh0aGlzLl9mb290ZXJFbGVtZW50KTtcbiAgICAgIHNpemUgKz0gZm9vdGVyU2l6ZSBpbnN0YW5jZW9mIFByb21pc2UgPyBhd2FpdCBmb290ZXJTaXplIDogZm9vdGVyU2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBub3RoaW5nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgcmV0dXJuIGh0bWxgIDxoYS1hbGVydCBhbGVydC10eXBlPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvaGEtYWxlcnQ+IGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldO1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgdGhpcy5fY29uZmlnLm5hbWUgfHxcbiAgICAgIGdldFN0YXRpc3RpY0xhYmVsKHRoaXMuaGFzcywgdGhpcy5fY29uZmlnLmVudGl0eSwgdGhpcy5fbWV0YWRhdGEpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja30gdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIC50aXRsZT0ke25hbWV9PiR7bmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgPGhhLXN0YXRlLWljb25cbiAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9jb25maWcuaWNvbn1cbiAgICAgICAgICAgICAgLnN0YXRlPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICA+PC9oYS1zdGF0ZS1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCJcbiAgICAgICAgICAgID4ke3RoaXMuX3ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgIDogdGhpcy5fdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgICAgPyBcIj9cIlxuICAgICAgICAgICAgICA6IGZvcm1hdE51bWJlcih0aGlzLl92YWx1ZSwgdGhpcy5oYXNzLmxvY2FsZSl9PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhc3VyZW1lbnRcIlxuICAgICAgICAgICAgPiR7dGhpcy5fY29uZmlnLnVuaXQgfHxcbiAgICAgICAgICAgIGdldERpc3BsYXlVbml0KFxuICAgICAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHksXG4gICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhXG4gICAgICAgICAgICApfTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7dGhpcy5fZm9vdGVyRWxlbWVudH1cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgLy8gU2lkZSBFZmZlY3QgdXNlZCB0byB1cGRhdGUgZm9vdGVyIGhhc3Mgd2hpbGUga2VlcGluZyBvcHRpbWl6YXRpb25zXG4gICAgaWYgKHRoaXMuX2Zvb3RlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2Zvb3RlckVsZW1lbnQuaGFzcyA9IHRoaXMuaGFzcztcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl92YWx1ZVwiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9tZXRhZGF0YVwiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9lcnJvclwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBoYXNDb25maWdPckVudGl0eUNoYW5nZWQodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX2ZldGNoU3RhdGlzdGljKCk7XG4gICAgdGhpcy5fZmV0Y2hNZXRhZGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgb2xkQ29uZmlnID0gY2hhbmdlZFByb3BzLmdldChcIl9jb25maWdcIikgYXNcbiAgICAgIHwgRW50aXR5Q2FyZENvbmZpZ1xuICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICAhb2xkSGFzcyB8fFxuICAgICAgIW9sZENvbmZpZyB8fFxuICAgICAgb2xkSGFzcy50aGVtZXMgIT09IHRoaXMuaGFzcy50aGVtZXMgfHxcbiAgICAgIG9sZENvbmZpZy50aGVtZSAhPT0gdGhpcy5fY29uZmlnLnRoZW1lXG4gICAgKSB7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudCh0aGlzLCB0aGlzLmhhc3MudGhlbWVzLCB0aGlzLl9jb25maWchLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaFN0YXRpc3RpYygpIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgKCkgPT4gdGhpcy5fZmV0Y2hTdGF0aXN0aWMoKSxcbiAgICAgIDUgKiAxMDAwICogNjBcbiAgICApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0cyA9IGF3YWl0IGZldGNoU3RhdGlzdGljKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuX2NvbmZpZy5lbnRpdHksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5wZXJpb2RcbiAgICAgICk7XG4gICAgICB0aGlzLl92YWx1ZSA9IHN0YXRzW3RoaXMuX2NvbmZpZyEuc3RhdF90eXBlXTtcbiAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgdGhpcy5fZXJyb3IgPSBlLm1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hNZXRhZGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9tZXRhZGF0YSA9IChcbiAgICAgICAgYXdhaXQgZ2V0U3RhdGlzdGljTWV0YWRhdGEodGhpcy5oYXNzLCBbdGhpcy5fY29uZmlnLmVudGl0eV0pXG4gICAgICApPy5bMF07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGUubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLl9jb25maWchLmVudGl0eSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHggMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXN0YXRlLWljb24tY29sb3IsICM0NDczOWUpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNnB4IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWFzdXJlbWVudCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXN0YXRpc3RpYy1jYXJkXCI6IEh1aVN0YXRpc3RpY0NhcmQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/cards/hui-statistic-card.ts\n");

/***/ })

}]);