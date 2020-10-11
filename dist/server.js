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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/CREDENTIALS":
/*!********************************!*\
  !*** ./src/server/CREDENTIALS ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CREDENTIALS;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CREDENTIALS = {\n  token: {\n    key: 'f79b356273fc72ca350cf7bd964aa1e3748bf326b8602dc95ddf4b441514934f',\n    secret: 'd9549f1621ca7d3342bdb648b75625a9b99b540da25c0e80da42ac279ad54dfa'\n  },\n  consumer: {\n    key: 'ce9c6ecd85d31e827c5b0c16c41cf94ebd621de326d78f8b1eccd8a3eca1efa3',\n    secret: '6798f66fd9aaabc909e96fcd78ad8ced40359f3278cbfd1fa63ea6eb7e0d1ccf'\n  }\n});\n\n\n//# sourceURL=webpack:///./src/server/CREDENTIALS?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var oauth_1_0a__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oauth-1.0a */ \"oauth-1.0a\");\n/* harmony import */ var oauth_1_0a__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oauth_1_0a__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _CREDENTIALS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CREDENTIALS */ \"./src/server/CREDENTIALS\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(DIST_DIR, 'index.html');\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](__dirname));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\nvar last_update = null;\nvar parts = null;\napp.get('/gettechparts', function (req, res) {\n  // check if parts have been updated recently\n  var now = new Date();\n  var mins_since = 9999;\n\n  if (last_update) {\n    mins_since = (now.getTime() - last_update.getTime()) / (1000 * 60);\n  }\n\n  if (mins_since > 60) {\n    // update parts from netsuite\n    last_update = now;\n    callPartRestlet().then(function (response) {\n      parts = response.data;\n      res.send(response.data);\n    }, function (error) {\n      res.send(error);\n    });\n  } else {\n    // send the currently saved parts list\n    res.send(parts);\n  }\n}); // calls the parts restlet from netsuite using the credentials stored in a file\n// called 'CREDENTIALS'. Credentials are exported in the format:\n//    {\n//      token: {\n//        key: KEY,\n//        secret: SECRET\n//      },\n//      consumer: {\n//        key: KEY,\n//        secret: SECRET\n//      }\n//    }\n\nfunction callPartRestlet() {\n  var url = 'https://5238530-sb2.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=735&deploy=1';\n  var request_data = {\n    method: 'GET',\n    url: url\n  };\n  var oauth = oauth_1_0a__WEBPACK_IMPORTED_MODULE_3___default()({\n    consumer: _CREDENTIALS__WEBPACK_IMPORTED_MODULE_6__[\"default\"].consumer,\n    signature_method: 'HMAC-SHA256',\n    hash_function: function hash_function(base_string, key) {\n      return crypto__WEBPACK_IMPORTED_MODULE_5___default.a.createHmac('sha256', key).update(base_string).digest('base64');\n    }\n  });\n  var authorization = oauth.authorize(request_data, _CREDENTIALS__WEBPACK_IMPORTED_MODULE_6__[\"default\"].token);\n  var header = oauth.toHeader(authorization);\n  header['Authorization'] += ', realm=\"5238530_SB2\"';\n  header['content-type'] = 'application/json';\n  return axios__WEBPACK_IMPORTED_MODULE_2___default()({\n    url: url,\n    method: 'GET',\n    headers: header\n  });\n}\n\n; // end callPartRestlet\n\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log('Prod App listening to ${PORT}....');\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "oauth-1.0a":
/*!*****************************!*\
  !*** external "oauth-1.0a" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"oauth-1.0a\");\n\n//# sourceURL=webpack:///external_%22oauth-1.0a%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });