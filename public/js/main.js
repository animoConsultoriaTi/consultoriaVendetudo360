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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-primary: #05060A;\\n  --color-secondary: #FAFAFA;\\n  --brand: #5DE2E9;\\n  --brand-dark: #2F969C;\\n  --brand-add: #E8945D;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n@media (max-width: 1080px) {\\n  html {\\n    font-size: 93.75%;\\n  }\\n}\\n@media (max-width: 720px) {\\n  html {\\n    font-size: 87.5%;\\n  }\\n}\\n\\nbody {\\n  background: var(--background);\\n  -webkit-font-smoothing: antialiased;\\n}\\n\\nbody,\\ninput,\\ntextarea,\\nbutton {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 400;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nstrong {\\n  font-weight: 600;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n[disabled] {\\n  opacity: 0.6;\\n  cursor: not-allowed;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\na.square {\\n  width: 2.5rem;\\n  height: 2.5rem;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 0.5rem;\\n  transition: filter 0.3s;\\n}\\n@media (max-width: 879px) {\\n  a.square {\\n    width: 2rem;\\n    height: 2rem;\\n  }\\n}\\na.circle {\\n  width: 3rem;\\n  height: 3rem;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  transition: filter 0.3s;\\n}\\n@media (max-width: 879px) {\\n  a.circle {\\n    width: 2.5rem;\\n    height: 2.5rem;\\n  }\\n}\\na:hover {\\n  filter: brightness(0.9);\\n}\\n\\n.container {\\n  max-width: 1440px;\\n  padding-left: 2rem;\\n  padding-right: 2rem;\\n  margin: 0 auto;\\n  display: flex;\\n}\\n\\n.call-to-action {\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  width: 223px;\\n  height: 51px;\\n  border-radius: 0.5rem;\\n  transition: filter 0.3s;\\n}\\n.call-to-action:hover {\\n  filter: brightness(0.9);\\n}\\n.call-to-action i {\\n  font-size: 1.5rem;\\n}\\n.call-to-action p {\\n  font-weight: 600;\\n}\\n\\nheader {\\n  border-bottom: 1px solid rgba(34, 34, 34, 0.3);\\n}\\nheader .container {\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nheader .left-items {\\n  display: flex;\\n  align-items: center;\\n  gap: 10rem;\\n}\\n@media (max-width: 879px) {\\n  header .left-items {\\n    gap: 0;\\n  }\\n}\\nheader .left-items nav {\\n  height: 4.5rem;\\n}\\nheader .left-items nav .menu {\\n  display: flex;\\n  gap: 1.5rem;\\n  align-items: center;\\n}\\n@media (max-width: 879px) {\\n  header .left-items nav .menu {\\n    display: none;\\n  }\\n}\\nheader .left-items nav .menu a {\\n  display: inline-flex;\\n  height: 4.5rem;\\n  align-items: center;\\n  position: relative;\\n  color: var(--color-primary);\\n  font-family: var(--default-font-family);\\n  font-weight: 500;\\n  line-height: 130%;\\n}\\nheader .left-items nav .menu a::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 0%;\\n  height: 2px;\\n  position: absolute;\\n  bottom: 0;\\n  background: var(--color-primary);\\n  border-radius: 2px;\\n  transition: 0.3s;\\n}\\nheader .left-items nav .menu a:hover::after {\\n  width: 100%;\\n}\\nheader .contact-icons {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n}\\nheader .contact-icons a {\\n  color: var(--color-secondary);\\n  background-color: var(--brand-dark);\\n  transition: filter 0.3s;\\n}\\n\\n#home .container {\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-top: 2.5rem;\\n  padding-bottom: 2.5rem;\\n}\\n@media (max-width: 1032px) {\\n  #home .container {\\n    justify-content: center;\\n  }\\n}\\n#home .home-text {\\n  max-width: 474px;\\n  margin-left: 2rem;\\n}\\n@media (max-width: 1032px) {\\n  #home .home-text {\\n    padding: 8.75rem 0 8.75rem 0;\\n    max-width: 100%;\\n    text-align: center;\\n    margin: 0;\\n  }\\n}\\n@media (max-width: 475px) {\\n  #home .home-text {\\n    padding: 4.25rem 0 4.25rem 0;\\n  }\\n}\\n#home .home-text h1 {\\n  font-size: 4rem;\\n  font-weight: 900;\\n}\\n@media (max-width: 475px) {\\n  #home .home-text h1 {\\n    font-size: 3rem;\\n  }\\n}\\n#home .home-text p {\\n  line-height: 1.625rem;\\n}\\n#home .buttons-container {\\n  margin-top: 3rem;\\n  display: inline-flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 1.5rem;\\n}\\n@media (max-width: 474px) {\\n  #home .buttons-container {\\n    justify-content: center;\\n  }\\n}\\n#home .buttons-container .call-to-action {\\n  background: var(--brand-dark);\\n  color: var(--color-secondary);\\n}\\n#home .buttons-container .marketplace {\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  width: 175px;\\n  height: 51px;\\n  border-radius: 0.5rem;\\n  border: 2px solid var(--brand-dark);\\n  color: var(--brand-dark);\\n  font-weight: 600;\\n  transition: background 0.3s, color 0.3s;\\n}\\n#home .buttons-container .marketplace:hover {\\n  background: var(--brand-dark);\\n  color: var(--color-secondary);\\n  filter: brightness(1);\\n}\\n#home .buttons-container .marketplace i {\\n  font-size: 1.5rem;\\n}\\n#home .home-image-container {\\n  width: 364px;\\n  height: 561px;\\n  background: var(--brand);\\n  margin-right: -2rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n}\\n@media (max-width: 1032px) {\\n  #home .home-image-container {\\n    display: none;\\n  }\\n}\\n#home .home-image-container .home-image {\\n  width: 360px;\\n  height: 360px;\\n  background: var(--color-elements);\\n  border-radius: 50%;\\n  position: absolute;\\n  left: -11.5rem;\\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\\n}\\n\\n#about {\\n  padding: 2.5rem 0;\\n  margin-top: 73px;\\n}\\n#about .content {\\n  width: 100%;\\n  display: flex;\\n  gap: 4rem;\\n  align-items: center;\\n  background-color: var(--brand-dark);\\n  color: var(--color-secondary);\\n  border-radius: 2rem 2rem 0 2rem;\\n  padding: 0 2rem;\\n  position: relative;\\n}\\n@media (max-width: 879px) {\\n  #about .content {\\n    flex-direction: column;\\n    padding-bottom: 2.5rem;\\n  }\\n  #about .content .seal-icon {\\n    display: none;\\n  }\\n  #about .content .circle {\\n    width: 3rem;\\n    height: 3rem;\\n  }\\n}\\n#about .content .business-image {\\n  flex-shrink: 0;\\n  width: 320px;\\n  height: 387px;\\n  background-color: var(--color-elements);\\n  margin-top: -73px;\\n  border-radius: 1rem 1rem 0 0;\\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.25);\\n  object-fit: cover;\\n}\\n@media (max-width: 425px) {\\n  #about .content .business-image {\\n    height: 290px;\\n  }\\n}\\n@media (max-width: 879px) {\\n  #about .content .business-image {\\n    width: min(100%, 320px);\\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\\n  }\\n}\\n#about .content .about-text {\\n  width: 100%;\\n}\\n@media (max-width: 879px) {\\n  #about .content .about-text {\\n    text-align: center;\\n  }\\n}\\n#about .content .about-text h2 {\\n  font-size: 3rem;\\n}\\n#about .content .about-text p {\\n  max-width: 441px;\\n  line-height: 1.625rem;\\n  font-size: 1rem;\\n}\\n@media (max-width: 879px) {\\n  #about .content .about-text p {\\n    max-width: 100%;\\n  }\\n}\\n#about .content .about-text .buttons-container {\\n  margin-top: 1.5rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n@media (max-width: 425px) {\\n  #about .content .about-text .buttons-container {\\n    flex-direction: column;\\n    gap: 2rem;\\n  }\\n}\\n#about .content .about-text .buttons-container .call-to-action {\\n  background: var(--brand-add);\\n  color: var(--color-secondary);\\n}\\n#about .content .about-text .buttons-container .circle {\\n  background: var(--brand-add);\\n  color: var(--color-secondary);\\n}\\n#about .content .about-text .buttons-container .circle:hover {\\n  filter: brightness(0.9);\\n}\\n#about .content .about-text .buttons-container .circle i {\\n  font-size: 1.2rem;\\n}\\n#about .seal-icon {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n}\\n\\n#questions {\\n  background: var(--color-secondary);\\n}\\n#questions .container {\\n  display: block;\\n  padding-top: 2.5rem;\\n  padding-bottom: 2.5rem;\\n}\\n#questions .questions-info {\\n  text-align: center;\\n  margin-bottom: 4rem;\\n}\\n#questions .questions-info h2 {\\n  font-size: 3rem;\\n  font-weight: 600;\\n}\\n#questions .questions-info h2::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 10rem;\\n  height: 2px;\\n  border-radius: 1px;\\n  background-color: var(--color-primary);\\n  margin: 1rem auto;\\n}\\n#questions .questions-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  row-gap: 1.5rem;\\n  column-gap: 2rem;\\n  justify-content: center;\\n}\\n@media (max-width: 687px) {\\n  #questions .questions-container {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n#questions .questions-container .accordion {\\n  flex-basis: 526px;\\n  max-height: 80px;\\n  overflow: hidden;\\n  padding: 0 2rem 0 2rem;\\n  border: 2px solid var(--color-primary);\\n  border-radius: 0.5rem;\\n  transition: max-height 0.3s;\\n  position: relative;\\n}\\n#questions .questions-container .accordion.open {\\n  max-height: 100%;\\n}\\n#questions .questions-container .accordion.open .icon-plus {\\n  transform: rotate(135deg);\\n}\\n@media (max-width: 469px) {\\n  #questions .questions-container .accordion.open {\\n    max-height: 250px;\\n  }\\n}\\n#questions .questions-container .accordion .question-ask {\\n  width: 100%;\\n  display: flex;\\n  padding: 0 2rem;\\n  align-items: center;\\n  justify-content: space-between;\\n  position: absolute;\\n  top: 27px;\\n  left: 0;\\n}\\n@media (max-width: 337px) {\\n  #questions .questions-container .accordion .question-ask {\\n    top: 21px;\\n  }\\n}\\n#questions .questions-container .accordion .question-ask i {\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n  transition: transform 0.3s;\\n}\\n#questions .questions-container .accordion .question-ask i:hover {\\n  color: #3f3f46;\\n}\\n#questions .questions-container .accordion .question-ans {\\n  margin-top: 5.4rem;\\n  padding-bottom: 2.1rem;\\n}\\n\\nfooter {\\n  background-color: var(--brand-dark);\\n  color: var(--color-secondary);\\n  padding: 1rem 0 2rem 0;\\n}\\nfooter .container {\\n  display: block;\\n}\\nfooter .footer-menu {\\n  display: flex;\\n}\\n@media (max-width: 879px) {\\n  footer .footer-menu {\\n    flex-direction: column;\\n  }\\n}\\nfooter .footer-menu .seal-container {\\n  align-self: flex-start;\\n}\\nfooter .footer-menu .footer-links {\\n  display: flex;\\n  width: 100%;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  margin-top: 4rem;\\n  padding: 0 3rem;\\n}\\n@media (max-width: 1140px) {\\n  footer .footer-menu .footer-links {\\n    gap: 2rem;\\n    padding: 0;\\n    margin-top: 2rem;\\n  }\\n}\\nfooter .footer-menu .footer-links ul li:first-child {\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\nfooter .footer-menu .footer-links ul li a {\\n  color: var(--color-secondary);\\n}\\nfooter .footer-menu .footer-links ul li a:hover {\\n  text-decoration: underline;\\n}\\nfooter .footer-menu .footer-links ul li + li {\\n  margin-top: 1rem;\\n}\\nfooter .rights {\\n  font-weight: 100;\\n  font-size: 0.75rem;\\n  margin-top: 3rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vendetudo360/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vendetudo360/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vendetudo360/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vendetudo360/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vendetudo360/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\r\n\r\nconst startQuestionsAccordion = () => {\r\n  const questions = document.querySelectorAll('.accordion');\r\n\r\n  questions.forEach((question) => {\r\n    const questionTargetButton = question.querySelector('.icon-plus');\r\n\r\n    questionTargetButton.addEventListener('click', () => {\r\n      question.classList.toggle('open');\r\n    });\r\n  });\r\n};\r\n\r\nstartQuestionsAccordion();\r\n\n\n//# sourceURL=webpack://vendetudo360/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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