/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/some.json ***!
  \***********************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token, expected ; (2:6)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m{\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 | \\u001b[39m  \\u001b[32m\\\"it\\\"\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[32m\\\"works\\\"\\u001b[39m\\u001b[33m,\\u001b[39m\\n \\u001b[90m   | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m  \\u001b[32m\\\"number\\\"\\u001b[39m\\u001b[33m:\\u001b[39m \\u001b[35m42\\u001b[39m\\n \\u001b[90m 4 | \\u001b[39m}\\n \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/test_json.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var json = __webpack_require__(/*! ./some.json */ 0);\nconsole.log(JSON.stringify(json));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGVzdF9qc29uLmpzP2ExZjUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGpzb24gPSByZXF1aXJlKCcuL3NvbWUuanNvbicpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90ZXN0X2pzb24uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);