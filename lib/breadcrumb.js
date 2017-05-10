(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-css-modules"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define([, "react-css-modules", ], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("react-css-modules"), require("prop-types"));
	else
		root["QuarkUI"] = factory(root["React"], root["react-css-modules"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"breadcrumb":"_26mKfx-","breadcrumb--link":"_35am08f","breadcrumb--separator":"_3v_bQW3"};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Breadcrumb Component
 * @author grootfish
 */






var Breadcrumb = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
    _inherits(Breadcrumb, _PureComponent);

    function Breadcrumb(props) {
        _classCallCheck(this, Breadcrumb);

        var _this = _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).call(this, props));

        _this.state = {};
        return _this;
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


    _createClass(Breadcrumb, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                separator = _props.separator;

            var crumbs = void 0;
            crumbs = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (ele, index) {
                if (!ele) {
                    return ele;
                }

                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(ele, { separator: separator, key: index });
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { styleName: 'breadcrumb' },
                crumbs
            );
        }
    }]);

    return Breadcrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Breadcrumb', _class2.defaultProps = {
    separator: '/'
}, _class2.propTypes = {
    separator: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Breadcrumb Component
 * @author grootfish
 */






var BreadcrumbItem = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(BreadcrumbItem, _PureComponent);

  function BreadcrumbItem(props) {
    _classCallCheck(this, BreadcrumbItem);

    var _this = _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(BreadcrumbItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          separator = _props.separator,
          restProps = _objectWithoutProperties(_props, ['children', 'separator']);

      var breadcrumbItemProps = _extends({}, restProps, {
        styleName: 'breadcrumb--link'
      });

      var link = void 0;
      if ('href' in this.props) {
        link = React.createElement(
          'a',
          breadcrumbItemProps,
          children
        );
      } else {
        link = React.createElement(
          'span',
          breadcrumbItemProps,
          children
        );
      }

      if (children) {
        return React.createElement(
          'span',
          null,
          link,
          React.createElement(
            'span',
            { styleName: 'breadcrumb--separator' },
            separator
          )
        );
      }

      return null;
    }
  }]);

  return BreadcrumbItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'BreadcrumbItem', _class2.defaultProps = {
  separator: '/'
}, _class2.propTypes = {
  separator: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]),
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbItem);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumb__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem__ = __webpack_require__(22);



__WEBPACK_IMPORTED_MODULE_0__Breadcrumb__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Breadcrumb__["a" /* default */]);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzEyYTUyMjI2ZjI1MGViZTdiOTY/ZDJlZSoqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqKioqIiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzLmpzP2E3NzQqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIj8wNDA1KioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuY3NzPzViZTIiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcz83ODE4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzPzg0M2QiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXguanM/MmQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsIF0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhcmtVSVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJyZWFjdC1jc3MtbW9kdWxlc1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMTJhNTIyMjZmMjUwZWJlN2I5NiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJleHBvcnQgY29uc3QgYWxsb3dNdWx0aXBsZSA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBBTElHTl9FTlVNID0gbmV3IFNldChbXG4gICd0bCcsXG4gICd0cicsXG4gICd0YycsXG4gICdibCcsXG4gICdicicsXG4gICdiYycsXG4gICdjbCcsXG4gICdjcicsXG5dKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnJlYWRjcnVtYlwiOlwiXzI2bUtmeC1cIixcImJyZWFkY3J1bWItLWxpbmtcIjpcIl8zNWFtMDhmXCIsXCJicmVhZGNydW1iLS1zZXBhcmF0b3JcIjpcIl8zdl9iUVczXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciLCIvKipcbiAqIEJyZWFkY3J1bWIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCcmVhZGNydW1iJ1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2VwYXJhdG9yOiAnLydcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMubm9kZSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNlcGFyYXRvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNydW1icztcbiAgICAgICAgY3J1bWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGVsZSwgeyBzZXBhcmF0b3IsIGtleTogaW5kZXggfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17J2JyZWFkY3J1bWInfT57Y3J1bWJzfTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuanMiLCIvKipcbiAqIEJyZWFkY3J1bWIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWJJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0JyZWFkY3J1bWJJdGVtJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBzZXBhcmF0b3I6Jy8nXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBocmVmOlByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLHNlcGFyYXRvciwuLi5yZXN0UHJvcHN9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJvcHMgPXtcbiAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIHN0eWxlTmFtZTonYnJlYWRjcnVtYi0tbGluaydcbiAgICB9XG5cbiAgICBsZXQgbGluaztcbiAgICBpZignaHJlZicgaW4gdGhpcy5wcm9wcyl7XG4gICAgICBsaW5rID0gPGEgey4uLmJyZWFkY3J1bWJJdGVtUHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgfWVsc2V7XG4gICAgICBsaW5rID0gPHNwYW4gey4uLmJyZWFkY3J1bWJJdGVtUHJvcHN9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgfVxuXG4gICAgaWYoY2hpbGRyZW4pe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2xpbmt9XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPXsnYnJlYWRjcnVtYi0tc2VwYXJhdG9yJ30+e3NlcGFyYXRvcn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYkl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vQnJlYWRjcnVtYic7XG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9CcmVhZGNydW1iSXRlbSc7XG5cbkJyZWFkY3J1bWIuSXRlbSA9IEJyZWFkY3J1bWJJdGVtO1xuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUNoRUE7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7O0FDQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQWhDQTtBQUtBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWlCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBL0NBO0FBS0E7QUFEQTtBQU1BO0FBSUE7QUFMQTtBQUNBO0FBQ0E7QUF1Q0E7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=breadcrumb.js.map