(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _http = __webpack_require__(15);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.handler = function (event, context, callback) {
  _http2.default.get_ss().then(function (result) {
    console.log(result);
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(result)
    });
  }).catch(function (e) {
    console.log(e);
    callback(null, {
      statusCode: 200,
      body: e
    });
  });
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: await is a reserved word (6:21)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m  get_fs () {\n \u001b[90m 5 | \u001b[39m    \u001b[36mtry\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m      \u001b[36mconst\u001b[39m result \u001b[33m=\u001b[39m await axios\u001b[33m.\u001b[39mget(\u001b[32m'/events'\u001b[39m\u001b[33m,\u001b[39m {\n \u001b[90m   | \u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m        baseURL\u001b[33m:\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mFRONT_API_URL\u001b[39m\n \u001b[90m 8 | \u001b[39m      })\n \u001b[90m 9 | \u001b[39m      \u001b[36mreturn\u001b[39m result\u001b[33m.\u001b[39mdata\u001b[0m\n");

/***/ })

/******/ })));