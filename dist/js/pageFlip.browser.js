var St =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PageFlip.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Style/stPageFlip.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Style/stPageFlip.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".stf__parent {\\n  position: relative;\\n  display: block;\\n  box-sizing: border-box;\\n  transform: translateZ(0);\\n\\n  -ms-touch-action: pan-y;\\n  touch-action: pan-y;\\n}\\n\\n.sft__wrapper {\\n  position: relative;\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.stf__parent canvas {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n}\\n\\n.stf__block {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  box-sizing: border-box;\\n  perspective: 2000px;\\n}\\n\\n.stf__item {\\n  display: none;\\n  position: absolute;\\n  transform-style: preserve-3d;\\n}\\n\\n.stf__outerShadow {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n}\\n\\n.stf__innerShadow {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n}\\n\\n.stf__hardShadow {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n}\\n\\n.stf__hardInnerShadow {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://St/./src/Style/stPageFlip.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://St/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://St/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Collection/HTMLPageCollection.ts":
/*!**********************************************!*\
  !*** ./src/Collection/HTMLPageCollection.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Collection\\\\HTMLPageCollection.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Collection/HTMLPageCollection.ts?");

/***/ }),

/***/ "./src/Collection/ImagePageCollection.ts":
/*!***********************************************!*\
  !*** ./src/Collection/ImagePageCollection.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Collection\\\\ImagePageCollection.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Collection/ImagePageCollection.ts?");

/***/ }),

/***/ "./src/Event/EventObject.ts":
/*!**********************************!*\
  !*** ./src/Event/EventObject.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Event\\\\EventObject.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Event/EventObject.ts?");

/***/ }),

/***/ "./src/Flip/Flip.ts":
/*!**************************!*\
  !*** ./src/Flip/Flip.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Flip\\\\Flip.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Flip/Flip.ts?");

/***/ }),

/***/ "./src/Helper.ts":
/*!***********************!*\
  !*** ./src/Helper.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Helper.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Helper.ts?");

/***/ }),

/***/ "./src/PageFlip.ts":
/*!*************************!*\
  !*** ./src/PageFlip.ts ***!
  \*************************/
/*! exports provided: PageFlip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageFlip\", function() { return PageFlip; });\n/* harmony import */ var _Collection_ImagePageCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection/ImagePageCollection */ \"./src/Collection/ImagePageCollection.ts\");\n/* harmony import */ var _Collection_ImagePageCollection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Collection_ImagePageCollection__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Collection_HTMLPageCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection/HTMLPageCollection */ \"./src/Collection/HTMLPageCollection.ts\");\n/* harmony import */ var _Collection_HTMLPageCollection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Collection_HTMLPageCollection__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Flip_Flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flip/Flip */ \"./src/Flip/Flip.ts\");\n/* harmony import */ var _Flip_Flip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Flip_Flip__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Render_CanvasRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Render/CanvasRender */ \"./src/Render/CanvasRender.ts\");\n/* harmony import */ var _Render_CanvasRender__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Render_CanvasRender__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_HTMLUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/HTMLUI */ \"./src/UI/HTMLUI.ts\");\n/* harmony import */ var _UI_HTMLUI__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UI_HTMLUI__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _UI_CanvasUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/CanvasUI */ \"./src/UI/CanvasUI.ts\");\n/* harmony import */ var _UI_CanvasUI__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_CanvasUI__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Helper */ \"./src/Helper.ts\");\n/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Helper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Event_EventObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Event/EventObject */ \"./src/Event/EventObject.ts\");\n/* harmony import */ var _Event_EventObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Event_EventObject__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Render_HTMLRender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Render/HTMLRender */ \"./src/Render/HTMLRender.ts\");\n/* harmony import */ var _Render_HTMLRender__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Render_HTMLRender__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Settings */ \"./src/Settings.ts\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Settings__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Style_stPageFlip_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Style/stPageFlip.css */ \"./src/Style/stPageFlip.css\");\n/* harmony import */ var _Style_stPageFlip_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Style_stPageFlip_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Class representing a main PageFlip object\n *\n * @extends EventObject\n */\nclass PageFlip extends _Event_EventObject__WEBPACK_IMPORTED_MODULE_7__[\"EventObject\"] {\n    /**\n     * Create a new PageFlip instance\n     *\n     * @constructor\n     * @param {HTMLElement} inBlock - Root HTML Element\n     * @param {Object} setting - Configuration object\n     */\n    constructor(inBlock, setting) {\n        super();\n        this.isUserTouch = false;\n        this.isUserMove = false;\n        this.setting = null;\n        this.pages = null;\n        this.setting = new _Settings__WEBPACK_IMPORTED_MODULE_9__[\"Settings\"]().getSettings(setting);\n        this.block = inBlock;\n    }\n    /**\n     * Destructor. Remove a root HTML element and all event handlers\n     */\n    destroy() {\n        this.ui.destroy();\n        this.block.remove();\n    }\n    /**\n     * Update the render area. Re-show current page.\n     */\n    update() {\n        this.render.update();\n        this.pages.show();\n    }\n    /**\n     * Load pages from images on the Canvas mode\n     *\n     * @param {string[]} imagesHref - List of paths to images\n     */\n    loadFromImages(imagesHref) {\n        this.ui = new _UI_CanvasUI__WEBPACK_IMPORTED_MODULE_5__[\"CanvasUI\"](this.block, this, this.setting);\n        const canvas = this.ui.getCanvas();\n        this.render = new _Render_CanvasRender__WEBPACK_IMPORTED_MODULE_3__[\"CanvasRender\"](this, this.setting, canvas);\n        this.flipController = new _Flip_Flip__WEBPACK_IMPORTED_MODULE_2__[\"Flip\"](this.render, this);\n        this.pages = new _Collection_ImagePageCollection__WEBPACK_IMPORTED_MODULE_0__[\"ImagePageCollection\"](this, this.render, imagesHref);\n        this.pages.load();\n        this.render.start();\n        this.pages.show(this.setting.startPage);\n        // safari fix\n        setTimeout(() => {\n            this.ui.update();\n            this.trigger('init', this, {\n                page: this.setting.startPage,\n                mode: this.render.getOrientation(),\n            });\n        }, 1);\n    }\n    /**\n     * Load pages from HTML elements on the HTML mode\n     *\n     * @param {(NodeListOf<HTMLElement>|HTMLElement[])} items - List of pages as HTML Element\n     */\n    loadFromHTML(items) {\n        this.ui = new _UI_HTMLUI__WEBPACK_IMPORTED_MODULE_4__[\"HTMLUI\"](this.block, this, this.setting, items);\n        this.render = new _Render_HTMLRender__WEBPACK_IMPORTED_MODULE_8__[\"HTMLRender\"](this, this.setting, this.ui.getDistElement());\n        this.flipController = new _Flip_Flip__WEBPACK_IMPORTED_MODULE_2__[\"Flip\"](this.render, this);\n        this.pages = new _Collection_HTMLPageCollection__WEBPACK_IMPORTED_MODULE_1__[\"HTMLPageCollection\"](this, this.render, this.ui.getDistElement(), items);\n        this.pages.load();\n        this.render.start();\n        this.pages.show(this.setting.startPage);\n        // safari fix\n        setTimeout(() => {\n            this.ui.update();\n            this.trigger('init', this, {\n                page: this.setting.startPage,\n                mode: this.render.getOrientation(),\n            });\n        }, 1);\n    }\n    /**\n     * Update current pages from images\n     *\n     * @param {string[]} imagesHref - List of paths to images\n     */\n    updateFromImages(imagesHref) {\n        const current = this.pages.getCurrentPageIndex();\n        this.pages.destroy();\n        this.pages = new _Collection_ImagePageCollection__WEBPACK_IMPORTED_MODULE_0__[\"ImagePageCollection\"](this, this.render, imagesHref);\n        this.pages.load();\n        this.pages.show(current);\n        this.trigger('update', this, {\n            page: current,\n            mode: this.render.getOrientation(),\n        });\n    }\n    /**\n     * Update current pages from HTML\n     *\n     * @param {(NodeListOf<HTMLElement>|HTMLElement[])} items - List of pages as HTML Element\n     */\n    updateFromHtml(items) {\n        const current = this.pages.getCurrentPageIndex();\n        this.pages.destroy();\n        this.pages = new _Collection_HTMLPageCollection__WEBPACK_IMPORTED_MODULE_1__[\"HTMLPageCollection\"](this, this.render, this.ui.getDistElement(), items);\n        this.pages.load();\n        this.ui.updateItems(items);\n        this.render.reload();\n        this.pages.show(current);\n        this.trigger('update', this, {\n            page: current,\n            mode: this.render.getOrientation(),\n        });\n    }\n    /**\n     * Clear pages from HTML (remove to initinalState)\n     */\n    clear() {\n        this.pages.destroy();\n        this.ui.clear();\n    }\n    /**\n     * Turn to the previous page (without animation)\n     */\n    turnToPrevPage() {\n        this.pages.showPrev();\n    }\n    /**\n     * Turn to the next page (without animation)\n     */\n    turnToNextPage() {\n        this.pages.showNext();\n    }\n    /**\n     * Turn to the specified page number (without animation)\n     *\n     * @param {number} page - New page number\n     */\n    turnToPage(page) {\n        this.pages.show(page);\n    }\n    /**\n     * Turn to the next page (with animation)\n     *\n     * @param {FlipCorner} corner - Active page corner when turning\n     */\n    flipNext(corner = \"top\" /* FlipCorner.TOP */) {\n        this.flipController.flipNext(corner);\n    }\n    /**\n     * Turn to the prev page (with animation)\n     *\n     * @param {FlipCorner} corner - Active page corner when turning\n     */\n    flipPrev(corner = \"top\" /* FlipCorner.TOP */) {\n        this.flipController.flipPrev(corner);\n    }\n    /**\n     * Turn to the specified page number (with animation)\n     *\n     * @param {number} page - New page number\n     * @param {FlipCorner} corner - Active page corner when turning\n     */\n    flip(page, corner = \"top\" /* FlipCorner.TOP */) {\n        this.flipController.flipToPage(page, corner);\n    }\n    /**\n     * Call a state change event trigger\n     *\n     * @param {FlippingState} newState - New  state of the object\n     */\n    updateState(newState) {\n        this.trigger('changeState', this, newState);\n    }\n    /**\n     * Call a page number change event trigger\n     *\n     * @param {number} newPage - New page Number\n     */\n    updatePageIndex(newPage) {\n        this.trigger('flip', this, newPage);\n    }\n    /**\n     * Call a page orientation change event trigger. Update UI and rendering area\n     *\n     * @param {Orientation} newOrientation - New page orientation (portrait, landscape)\n     */\n    updateOrientation(newOrientation) {\n        this.ui.setOrientationStyle(newOrientation);\n        this.update();\n        this.trigger('changeOrientation', this, newOrientation);\n    }\n    /**\n     * Get the total number of pages in a book\n     *\n     * @returns {number}\n     */\n    getPageCount() {\n        return this.pages.getPageCount();\n    }\n    /**\n     * Get the index of the current page in the page list (starts at 0)\n     *\n     * @returns {number}\n     */\n    getCurrentPageIndex() {\n        return this.pages.getCurrentPageIndex();\n    }\n    /**\n     * Get page from collection by number\n     *\n     * @param {number} pageIndex\n     * @returns {Page}\n     */\n    getPage(pageIndex) {\n        return this.pages.getPage(pageIndex);\n    }\n    /**\n     * Get the current rendering object\n     *\n     * @returns {Render}\n     */\n    getRender() {\n        return this.render;\n    }\n    /**\n     * Get current object responsible for flipping\n     *\n     * @returns {Flip}\n     */\n    getFlipController() {\n        return this.flipController;\n    }\n    /**\n     * Get current page orientation\n     *\n     * @returns {Orientation} Сurrent orientation: portrait or landscape\n     */\n    getOrientation() {\n        return this.render.getOrientation();\n    }\n    /**\n     * Get current book sizes and position\n     *\n     * @returns {PageRect}\n     */\n    getBoundsRect() {\n        return this.render.getRect();\n    }\n    /**\n     * Get configuration object\n     *\n     * @returns {FlipSetting}\n     */\n    getSettings() {\n        return this.setting;\n    }\n    /**\n     * Get UI object\n     *\n     * @returns {UI}\n     */\n    getUI() {\n        return this.ui;\n    }\n    /**\n     * Get current flipping state\n     *\n     * @returns {FlippingState}\n     */\n    getState() {\n        return this.flipController.getState();\n    }\n    /**\n     * Get page collection\n     *\n     * @returns {PageCollection}\n     */\n    getPageCollection() {\n        return this.pages;\n    }\n    /**\n     * Start page turning. Called when a user clicks or touches\n     *\n     * @param {Point} pos - Touch position in coordinates relative to the book\n     */\n    startUserTouch(pos) {\n        this.mousePosition = pos; // Save touch position\n        this.isUserTouch = true;\n        this.isUserMove = false;\n    }\n    /**\n     * Called when a finger / mouse moves\n     *\n     * @param {Point} pos - Touch position in coordinates relative to the book\n     * @param {boolean} isTouch - True if there was a touch event, not a mouse click\n     */\n    userMove(pos, isTouch) {\n        if (!this.isUserTouch && !isTouch && this.setting.showPageCorners) {\n            this.flipController.showCorner(pos); // fold Page Corner\n        }\n        else if (this.isUserTouch) {\n            if (_Helper__WEBPACK_IMPORTED_MODULE_6__[\"Helper\"].GetDistanceBetweenTwoPoint(this.mousePosition, pos) > 5) {\n                this.isUserMove = true;\n                this.flipController.fold(pos);\n            }\n        }\n    }\n    /**\n     * Сalled when the user has stopped touching\n     *\n     * @param {Point} pos - Touch end position in coordinates relative to the book\n     * @param {boolean} isSwipe - true if there was a mobile swipe event\n     */\n    userStop(pos, isSwipe = false) {\n        if (this.isUserTouch) {\n            this.isUserTouch = false;\n            if (!isSwipe) {\n                if (!this.isUserMove)\n                    this.flipController.flip(pos);\n                else\n                    this.flipController.stopMove();\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack://St/./src/PageFlip.ts?");

/***/ }),

/***/ "./src/Render/CanvasRender.ts":
/*!************************************!*\
  !*** ./src/Render/CanvasRender.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Render\\\\CanvasRender.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Render/CanvasRender.ts?");

/***/ }),

/***/ "./src/Render/HTMLRender.ts":
/*!**********************************!*\
  !*** ./src/Render/HTMLRender.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Render\\\\HTMLRender.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Render/HTMLRender.ts?");

/***/ }),

/***/ "./src/Settings.ts":
/*!*************************!*\
  !*** ./src/Settings.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\Settings.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/Settings.ts?");

/***/ }),

/***/ "./src/Style/stPageFlip.css":
/*!**********************************!*\
  !*** ./src/Style/stPageFlip.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./stPageFlip.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Style/stPageFlip.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://St/./src/Style/stPageFlip.css?");

/***/ }),

/***/ "./src/UI/CanvasUI.ts":
/*!****************************!*\
  !*** ./src/UI/CanvasUI.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\UI\\\\CanvasUI.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/UI/CanvasUI.ts?");

/***/ }),

/***/ "./src/UI/HTMLUI.ts":
/*!**************************!*\
  !*** ./src/UI/HTMLUI.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\src\\\\UI\\\\HTMLUI.ts. By default, ts-loader will not compile .ts files in node_modules.\\nYou should not need to recompile .ts files there, but if you really want to, use the allowTsInNodeModules option.\\nSee: https://github.com/Microsoft/TypeScript/issues/12358\\n    at makeSourceMapAndFinish (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:88:18)\\n    at successLoader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:74:9)\\n    at Object.loader (D:\\\\Code\\\\Upwork\\\\so3od-university\\\\surah-ui-v2-with-electron\\\\node_modules\\\\page-flip\\\\node_modules\\\\ts-loader\\\\dist\\\\index.js:25:5)\");\n\n//# sourceURL=webpack://St/./src/UI/HTMLUI.ts?");

/***/ })

/******/ });