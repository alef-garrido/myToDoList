/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/* remove default margin  */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role='list'],\\nol[role='list'] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  color: antiquewhite;\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n  background-color: #272822;\\n  padding: 3em;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\nmain {\\n  box-shadow: 0 0 0.75rem rgb(214, 214, 45, 41%);\\n  width: 60vw;\\n  margin: 0 auto;\\n}\\n\\nh1 {\\n  font-family: sans-serif;\\n  font-weight: 300;\\n  font-style: normal;\\n  font-size: 18px;\\n  padding: 1rem 0;\\n}\\n\\nul {\\n  padding: 0;\\n}\\n\\nli {\\n  width: 100%;\\n  padding: 1em 0.5em;\\n  list-style: none;\\n  display: grid;\\n  grid-template-columns: 10% 85% 5%;\\n  border-bottom: solid 1px rgb(194, 194, 194);\\n  align-items: center;\\n  color: #fffeca;\\n}\\n\\nform {\\n  display: block;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n#header {\\n  padding: 0 1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: solid 1px rgb(194, 194, 194);\\n}\\n\\n#clear {\\n  width: 100%;\\n}\\n\\n.clearBtn {\\n  width: 100%;\\n  height: 4rem;\\n  background-color: #272822;\\n  color: rgb(131, 129, 129);\\n  border: none;\\n}\\n\\nspan {\\n  cursor: pointer;\\n}\\n\\n.emptyState {\\n  text-align: center;\\n  margin: 1rem;\\n  color: #d6d62d;\\n}\\n\\ninput[type=text],\\ninput[type=text]:active,\\ninput[type=text]:focus-visible {\\n  border: none;\\n  appearance: none;\\n  vertical-align: middle;\\n  background: transparent;\\n  outline: none;\\n  box-shadow: none;\\n  color: antiquewhite;\\n}\\n\\n.todo {\\n  border: none;\\n  font-size: large;\\n}\\n\\n.add {\\n  display: flex;\\n  align-items: center;\\n  border-bottom: 1px solid whitesmoke;\\n}\\n\\n.add input {\\n  border: none;\\n  background-color: #272822;\\n  caret-color: #74af2a;\\n}\\n\\n.add input::placeholder {\\n  color: rgb(148, 147, 147);\\n  font-style: italic;\\n}\\n\\n.add input:focus-visible {\\n  color: antiquewhite;\\n  outline: none;\\n  box-shadow: none;\\n  background: transparent;\\n}\\n\\n.add p {\\n  margin: 0.5em 1em 0 0;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: grey;\\n}\\n\\n.editing {\\n  color: #74af2a;\\n  background: #1e1f1c;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mytodolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mytodolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://mytodolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mytodolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/storage.js */ \"./src/utils/storage.js\");\n/* harmony import */ var _utils_rendering_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/rendering.js */ \"./src/utils/rendering.js\");\n/* harmony import */ var _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/editing.js */ \"./src/utils/editing.js\");\n/* eslint-disable no-restricted-globals */\n/* eslint-disable no-restricted-syntax */\n\n\n\n\n\n\nconst bullets = _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getFromStorage();\n\nwindow.addEventListener('load', _utils_rendering_js__WEBPACK_IMPORTED_MODULE_2__.default.renderList(bullets));\n\n// EVENT LISTENERS\n\n// Event Add-Task\nconst addTask = document.querySelector('#addTask');\naddTask.addEventListener('submit', (e) => {\n  e.preventDefault();\n  _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.add(bullets);\n  _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage(bullets);\n  _utils_rendering_js__WEBPACK_IMPORTED_MODULE_2__.default.renderList(bullets);\n  location.reload();\n});\n\n// Event Status Update\nconst taskList = document.querySelector('#listContainer');\ntaskList.addEventListener('change', (e) => {\n  if (e.target.classList.contains('status')) {\n    const { id } = e.target.parentElement;\n    const taskBody = document.getElementById(`task-${id}`);\n    _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.toggleBullet(bullets, parseInt(id, 10));\n    taskBody.classList.toggle('completed');\n    _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage(bullets);\n  }\n});\n\n// Events for Edit Description\nconst inputs = Array.from(document.querySelectorAll('.todo'));\ninputs.forEach((input) => {\n  input.addEventListener('input', (e) => {\n    const id = parseInt(e.target.parentElement.id, 10);\n    const { value } = e.target;\n    _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.updateTask(bullets, id, value);\n    _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage(bullets);\n  });\n});\n\nconst tasks = Array.from(document.querySelectorAll('.todo'));\nfor (let task = 0; task < tasks.length; task += 1) {\n  const id = parseInt(task, 10) + 1;\n  const bulletRow = document.getElementById(`${id}`);\n\n  const trash = document.getElementById(`trash-${id}`);\n  const dots = document.getElementById(`dots-${id}`);\n\n  bulletRow.addEventListener('focusin', () => {\n    bulletRow.classList.toggle('editing');\n    trash.classList.toggle('hide');\n    dots.classList.toggle('hide');\n  });\n  bulletRow.addEventListener('focusout', () => {\n    setTimeout(() => {\n      bulletRow.classList.toggle('editing');\n      trash.classList.toggle('hide');\n      dots.classList.toggle('hide');\n    }, 100);\n  });\n}\n\n// Event Delete-task\nconst listContainer = document.getElementById('listContainer');\nlistContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('fa-trash-alt')) {\n    const index = parseInt(e.target.parentElement.parentElement.id, 10);\n    _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.deleteTask(bullets, index - 1);\n    _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.updateId(bullets);\n    _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage(bullets);\n    _utils_rendering_js__WEBPACK_IMPORTED_MODULE_2__.default.renderList(bullets);\n    location.reload();\n  }\n});\n\n// Event Clear all completed tasks\nconst clearBtn = document.getElementById('clear');\nclearBtn.addEventListener('click', () => {\n  for (let i = 0; i < bullets.length; i += 1) {\n    while (bullets[i].completed === true) {\n      _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.deleteTask(bullets, i);\n    }\n  }\n  _utils_editing_js__WEBPACK_IMPORTED_MODULE_3__.default.updateId(bullets);\n  _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage(bullets);\n  _utils_rendering_js__WEBPACK_IMPORTED_MODULE_2__.default.renderList(bullets);\n  location.reload();\n});\n\n\n//# sourceURL=webpack://mytodolist/./src/index.js?");

/***/ }),

/***/ "./src/utils/editing.js":
/*!******************************!*\
  !*** ./src/utils/editing.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditTask)\n/* harmony export */ });\n/* eslint-disable max-classes-per-file */\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable guard-for-in */\n\nclass Task {\n  constructor(arr, text) {\n    this.id = arr.length + 1;\n    this.description = text;\n    this.completed = false;\n  }\n}\n\nclass EditTask {\n  static updateTask = (arr, id, value) => {\n    const bullet = arr.find((task) => task.id === id);\n    if (bullet) {\n      bullet.description = value;\n    }\n  }\n\n  static add = (arr) => {\n    const text = document.getElementById('text').value;\n    arr.push(new Task(arr, text));\n    document.getElementById('text').value = '';\n  }\n\n   static deleteTask = (arr, index) => {\n     arr.splice(index, 1);\n   }\n\n   //  static clearCompleted(arr) {\n   //    for (const task in arr) {\n   //      while (arr[task].completed === true) {\n   //        this.deleteTask(arr, task);\n   //      }\n   //    }\n   //  }\n\n   static updateId(arr) {\n     arr.forEach((task, index) => {\n       task.id = index + 1;\n     });\n   }\n\n   static toggleBullet = (arr, id) => {\n     const bullet = arr.find((task) => task.id === id);\n     if (bullet) {\n       bullet.completed = !bullet.completed;\n     }\n   }\n}\n\n\n//# sourceURL=webpack://mytodolist/./src/utils/editing.js?");

/***/ }),

/***/ "./src/utils/rendering.js":
/*!********************************!*\
  !*** ./src/utils/rendering.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderList(arr) {\n  const list = document.getElementById('listContainer');\n  list.innerHTML = '';\n  if (arr.length === 0) {\n    const emptyState = document.getElementById('listContainer');\n    const str = `<div class=\"emptyState\"> \n      <p>What are your goals today? :)<p> \n    </div>`;\n    emptyState.insertAdjacentHTML('afterbegin', str);\n  } else {\n    arr.forEach((task, index) => {\n      const listContainer = document.getElementById('listContainer');\n      const str = `<li id=${index + 1} class=\"task ${task.completed}\">\n          <input type=\"checkbox\" id=check-${index + 1} class=\"status form-check-input me-2\">\n          <input type=\"text\" id=task-${index + 1} class=\"todo\" value='${task.description}'>\n          <span id=\"dots-${index + 1}\" class=\"dots\"> <i class=\"fas fa-ellipsis-v\"></i> </span>\n          <span id=\"trash-${index + 1}\" class=\"delete hide\"><i class=\"fas fa-trash-alt\"></i></span>\n        </li>`;\n\n      listContainer.insertAdjacentHTML('beforeend', str);\n\n      if (task.completed === true) {\n        const finished = document.getElementById(`task-${index + 1}`);\n        const checks = document.getElementById(`check-${index + 1}`);\n        checks.toggleAttribute('checked');\n        finished.classList.toggle('completed');\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ renderList });\n\n//# sourceURL=webpack://mytodolist/./src/utils/rendering.js?");

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* eslint-disable max-classes-per-file */\n\nclass Storage {\n  static saveToStorage(arr) {\n    localStorage.setItem('todoList', JSON.stringify(arr));\n  }\n\n  static getFromStorage() {\n    let tasks;\n    if (localStorage.getItem('todoList') === null) {\n      tasks = [];\n    } else {\n      tasks = JSON.parse(localStorage.getItem('todoList'));\n    }\n    return tasks;\n  }\n}\n\n\n//# sourceURL=webpack://mytodolist/./src/utils/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;