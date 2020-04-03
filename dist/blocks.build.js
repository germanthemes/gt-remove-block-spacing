/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * External dependencies\n */\n\nvar _lodash = lodash,\n    assign = _lodash.assign;\n\n/**\n * WordPress dependencies\n */\n\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorAdvancedControls = wp.editor.InspectorAdvancedControls;\nvar _wp$components = wp.components,\n    BaseControl = _wp$components.BaseControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\nvar hasBlockSupport = wp.blocks.hasBlockSupport;\n\n/**\n * Internal dependencies\n */\n\n\n\nvar withInspectorControl = createHigherOrderComponent(function (BlockEdit) {\n\treturn function (props) {\n\t\tvar hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);\n\n\t\tif (hasCustomClassName && props.isSelected) {\n\t\t\tvar _props$attributes = props.attributes,\n\t\t\t    gtRemoveMarginTop = _props$attributes.gtRemoveMarginTop,\n\t\t\t    gtRemoveMarginBottom = _props$attributes.gtRemoveMarginBottom;\n\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(BlockEdit, props),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tInspectorAdvancedControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tBaseControl,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel: __('GT Remove Block Margin', 'gt-remove-block-margin')\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Remove top margin?', 'gt-remove-block-margin'),\n\t\t\t\t\t\t\tchecked: !!gtRemoveMarginTop,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn props.setAttributes({ gtRemoveMarginTop: !gtRemoveMarginTop });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Remove bottom margin?', 'gt-remove-block-margin'),\n\t\t\t\t\t\t\tchecked: !!gtRemoveMarginBottom,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn props.setAttributes({ gtRemoveMarginBottom: !gtRemoveMarginBottom });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(BlockEdit, props);\n\t};\n}, 'withInspectorControl');\naddFilter('editor.BlockEdit', 'gt-remove-block-margin/inspector-control', withInspectorControl);\n\nfunction addAttribute(settings) {\n\tif (hasBlockSupport(settings, 'customClassName', true)) {\n\t\tsettings.attributes = assign(settings.attributes, {\n\t\t\tgtRemoveMarginTop: {\n\t\t\t\ttype: 'boolean',\n\t\t\t\tdefault: false\n\t\t\t},\n\t\t\tgtRemoveMarginBottom: {\n\t\t\t\ttype: 'boolean',\n\t\t\t\tdefault: false\n\t\t\t}\n\t\t});\n\t}\n\n\treturn settings;\n}\naddFilter('blocks.registerBlockType', 'gt-remove-block-margin/attributes', addAttribute);\n\nfunction addSaveProps(extraProps, blockType, attributes) {\n\tif (hasBlockSupport(blockType, 'customClassName', true) && attributes.gtRemoveMarginTop) {\n\t\textraProps.className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(extraProps.className, 'gt-remove-margin-top');\n\t}\n\n\tif (hasBlockSupport(blockType, 'customClassName', true) && attributes.gtRemoveMarginBottom) {\n\t\textraProps.className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(extraProps.className, 'gt-remove-margin-bottom');\n\t}\n\n\treturn extraProps;\n}\naddFilter('blocks.getSaveContent.extraProps', 'gt-remove-block-margin/save-props', addSaveProps);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBfbG9kYXNoID0gbG9kYXNoLFxuICAgIGFzc2lnbiA9IF9sb2Rhc2guYXNzaWduO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgPSB3cC5jb21wb3NlLmNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50O1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzID0gd3AuZWRpdG9yLkluc3BlY3RvckFkdmFuY2VkQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJhc2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQmFzZUNvbnRyb2wsXG4gICAgVG9nZ2xlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLlRvZ2dsZUNvbnRyb2w7XG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIGFkZEZpbHRlciA9IHdwLmhvb2tzLmFkZEZpbHRlcjtcbnZhciBoYXNCbG9ja1N1cHBvcnQgPSB3cC5ibG9ja3MuaGFzQmxvY2tTdXBwb3J0O1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIHdpdGhJbnNwZWN0b3JDb250cm9sID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoZnVuY3Rpb24gKEJsb2NrRWRpdCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0dmFyIGhhc0N1c3RvbUNsYXNzTmFtZSA9IGhhc0Jsb2NrU3VwcG9ydChwcm9wcy5uYW1lLCAnY3VzdG9tQ2xhc3NOYW1lJywgdHJ1ZSk7XG5cblx0XHRpZiAoaGFzQ3VzdG9tQ2xhc3NOYW1lICYmIHByb3BzLmlzU2VsZWN0ZWQpIHtcblx0XHRcdHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0XHQgICAgZ3RSZW1vdmVNYXJnaW5Ub3AgPSBfcHJvcHMkYXR0cmlidXRlcy5ndFJlbW92ZU1hcmdpblRvcCxcblx0XHRcdCAgICBndFJlbW92ZU1hcmdpbkJvdHRvbSA9IF9wcm9wcyRhdHRyaWJ1dGVzLmd0UmVtb3ZlTWFyZ2luQm90dG9tO1xuXG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QmFzZUNvbnRyb2wsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnR1QgUmVtb3ZlIEJsb2NrIE1hcmdpbicsICdndC1yZW1vdmUtYmxvY2stbWFyZ2luJylcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ1JlbW92ZSB0b3AgbWFyZ2luPycsICdndC1yZW1vdmUtYmxvY2stbWFyZ2luJyksXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ6ICEhZ3RSZW1vdmVNYXJnaW5Ub3AsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGd0UmVtb3ZlTWFyZ2luVG9wOiAhZ3RSZW1vdmVNYXJnaW5Ub3AgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdSZW1vdmUgYm90dG9tIG1hcmdpbj8nLCAnZ3QtcmVtb3ZlLWJsb2NrLW1hcmdpbicpLFxuXHRcdFx0XHRcdFx0XHRjaGVja2VkOiAhIWd0UmVtb3ZlTWFyZ2luQm90dG9tLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBndFJlbW92ZU1hcmdpbkJvdHRvbTogIWd0UmVtb3ZlTWFyZ2luQm90dG9tIH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrRWRpdCwgcHJvcHMpO1xuXHR9O1xufSwgJ3dpdGhJbnNwZWN0b3JDb250cm9sJyk7XG5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0VkaXQnLCAnZ3QtcmVtb3ZlLWJsb2NrLW1hcmdpbi9pbnNwZWN0b3ItY29udHJvbCcsIHdpdGhJbnNwZWN0b3JDb250cm9sKTtcblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKHNldHRpbmdzKSB7XG5cdGlmIChoYXNCbG9ja1N1cHBvcnQoc2V0dGluZ3MsICdjdXN0b21DbGFzc05hbWUnLCB0cnVlKSkge1xuXHRcdHNldHRpbmdzLmF0dHJpYnV0ZXMgPSBhc3NpZ24oc2V0dGluZ3MuYXR0cmlidXRlcywge1xuXHRcdFx0Z3RSZW1vdmVNYXJnaW5Ub3A6IHtcblx0XHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGd0UmVtb3ZlTWFyZ2luQm90dG9tOiB7XG5cdFx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cbmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2d0LXJlbW92ZS1ibG9jay1tYXJnaW4vYXR0cmlidXRlcycsIGFkZEF0dHJpYnV0ZSk7XG5cbmZ1bmN0aW9uIGFkZFNhdmVQcm9wcyhleHRyYVByb3BzLCBibG9ja1R5cGUsIGF0dHJpYnV0ZXMpIHtcblx0aWYgKGhhc0Jsb2NrU3VwcG9ydChibG9ja1R5cGUsICdjdXN0b21DbGFzc05hbWUnLCB0cnVlKSAmJiBhdHRyaWJ1dGVzLmd0UmVtb3ZlTWFyZ2luVG9wKSB7XG5cdFx0ZXh0cmFQcm9wcy5jbGFzc05hbWUgPSBjbGFzc25hbWVzKGV4dHJhUHJvcHMuY2xhc3NOYW1lLCAnZ3QtcmVtb3ZlLW1hcmdpbi10b3AnKTtcblx0fVxuXG5cdGlmIChoYXNCbG9ja1N1cHBvcnQoYmxvY2tUeXBlLCAnY3VzdG9tQ2xhc3NOYW1lJywgdHJ1ZSkgJiYgYXR0cmlidXRlcy5ndFJlbW92ZU1hcmdpbkJvdHRvbSkge1xuXHRcdGV4dHJhUHJvcHMuY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhleHRyYVByb3BzLmNsYXNzTmFtZSwgJ2d0LXJlbW92ZS1tYXJnaW4tYm90dG9tJyk7XG5cdH1cblxuXHRyZXR1cm4gZXh0cmFQcm9wcztcbn1cbmFkZEZpbHRlcignYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLCAnZ3QtcmVtb3ZlLWJsb2NrLW1hcmdpbi9zYXZlLXByb3BzJywgYWRkU2F2ZVByb3BzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzgzN2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);