(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("quark-ui/lib/icon"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "quark-ui/lib/icon"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("quark-ui/lib/icon"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["quark-ui/lib/icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_74__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 186);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"breadcrumb":"_26mKfx-","breadcrumb--separator":"_3v_bQW3","breadcrumb--link":"_35am08f","breadcrumb--icon":"y-He0IY"};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quark_ui_icon__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quark_ui_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quark_ui_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Breadcrumb_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Breadcrumb_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Breadcrumb_css__);
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








var Breadcrumb = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Breadcrumb_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Breadcrumb, _PureComponent);

  function Breadcrumb(props) {
    _classCallCheck(this, Breadcrumb);

    var _this = _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).call(this, props));

    _this.state = {};
    _this.onBack = _this.onBack.bind(_this);
    _this.onHome = _this.onHome.bind(_this);
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Breadcrumb, [{
    key: 'onBack',
    value: function onBack() {
      var children = this.props.children;

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (ele, index) {
        if (index === children.length - 2 && ele.props.href) {
          location.href = ele.props.href;
        }
      });
    }
  }, {
    key: 'onHome',
    value: function onHome() {
      location.href = '/';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          separator = _props.separator,
          hasBackIcon = _props.hasBackIcon,
          hasHomeIcon = _props.hasHomeIcon,
          restProps = _objectWithoutProperties(_props, ['children', 'separator', 'hasBackIcon', 'hasHomeIcon']);

      var crumbs = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (ele, index) {
        if (!ele) {
          return ele;
        }

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(ele, { separator: separator, key: index });
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({ styleName: 'breadcrumb' }, restProps),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { styleName: 'breadcrumb--icon' },
          hasHomeIcon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_quark_ui_icon___default.a, { name: 'home', size: 12, onClick: this.onHome })
          ) : null,
          hasBackIcon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_quark_ui_icon___default.a, { name: 'arrow-left', size: 12, onClick: this.onBack })
          ) : null
        ),
        crumbs
      );
    }
  }]);

  return Breadcrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Breadcrumb', _class2.defaultProps = {
  separator: '/',
  hasBackIcon: false,
  hasHomeIcon: false
}, _class2.propTypes = {
  separator: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  hasBackIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hasHomeIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Breadcrumb_css__ = __webpack_require__(169);
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumb__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem__ = __webpack_require__(185);



__WEBPACK_IMPORTED_MODULE_0__Breadcrumb__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__BreadcrumbItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Breadcrumb__["a" /* default */]);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/icon");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRlNjA1MDg4ZmQ5OTY4ZGNmZjA/NzNmNSoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuY3NzP2VhODMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcz83ODE4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzPzg0M2QiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXguanM/MmQzOCIsIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcz9hNzc0KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiPzA0MDUqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1YXJrLXVpL2xpYi9pY29uXCI/OTkzOCoqIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsIFwicXVhcmstdWkvbGliL2ljb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhcmtVSVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcInJlYWN0LWNzcy1tb2R1bGVzXCJdLCByb290W1wicXVhcmstdWkvbGliL2ljb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83NF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmRlNjA1MDg4ZmQ5OTY4ZGNmZjAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnJlYWRjcnVtYlwiOlwiXzI2bUtmeC1cIixcImJyZWFkY3J1bWItLXNlcGFyYXRvclwiOlwiXzN2X2JRVzNcIixcImJyZWFkY3J1bWItLWxpbmtcIjpcIl8zNWFtMDhmXCIsXCJicmVhZGNydW1iLS1pY29uXCI6XCJ5LUhlMElZXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmNzc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxOSIsIi8qKlxuICogQnJlYWRjcnVtYiBDb21wb25lbnRcbiAqIEBhdXRob3IgZ3Jvb3RmaXNoXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IEljb24gZnJvbSAncXVhcmstdWkvaWNvbic7XG5cbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQnJlYWRjcnVtYidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNlcGFyYXRvcjogJy8nLFxuICAgIGhhc0JhY2tJY29uOiBmYWxzZSxcbiAgICBoYXNIb21lSWNvbjogZmFsc2UsXG4gIH1cblxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5ub2RlLFxuICAgIGhhc0JhY2tJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNIb21lSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5vbkJhY2sgPSB0aGlzLm9uQmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ib21lID0gdGhpcy5vbkhvbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gKGNoaWxkcmVuLmxlbmd0aCAtIDIpICYmIGVsZS5wcm9wcy5ocmVmKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBlbGUucHJvcHMuaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uSG9tZSgpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gJy8nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNlcGFyYXRvciwgaGFzQmFja0ljb24sIGhhc0hvbWVJY29uLCAuLi5yZXN0UHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3J1bWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCFlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGUsIHsgc2VwYXJhdG9yLCBrZXk6IGluZGV4IH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXsnYnJlYWRjcnVtYid9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9eydicmVhZGNydW1iLS1pY29uJ30+XG4gICAgICAgICAge2hhc0hvbWVJY29uID8gPHNwYW4+PEljb24gbmFtZT1cImhvbWVcIiBzaXplPXsxMn0gb25DbGljaz17dGhpcy5vbkhvbWV9IC8+PC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAge2hhc0JhY2tJY29uID8gPHNwYW4+PEljb24gbmFtZT1cImFycm93LWxlZnRcIiBzaXplPXsxMn0gb25DbGljaz17dGhpcy5vbkJhY2t9IC8+PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2NydW1ic31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuanMiLCIvKipcbiAqIEJyZWFkY3J1bWIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWJJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0JyZWFkY3J1bWJJdGVtJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VwYXJhdG9yOiAnLycsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNlcGFyYXRvciwgLi4ucmVzdFByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYnJlYWRjcnVtYkl0ZW1Qcm9wcyA9IHtcbiAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIHN0eWxlTmFtZTogJ2JyZWFkY3J1bWItLWxpbmsnLFxuICAgIH07XG5cbiAgICBsZXQgbGluaztcbiAgICBpZiAoJ2hyZWYnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgIGxpbmsgPSA8YSB7Li4uYnJlYWRjcnVtYkl0ZW1Qcm9wc30+e2NoaWxkcmVufTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsgPSA8c3BhbiB7Li4uYnJlYWRjcnVtYkl0ZW1Qcm9wc30+e2NoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7bGlua31cbiAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9eydicmVhZGNydW1iLS1zZXBhcmF0b3InfT57c2VwYXJhdG9yfTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzIiwiaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi9CcmVhZGNydW1iJztcbmltcG9ydCBCcmVhZGNydW1iSXRlbSBmcm9tICcuL0JyZWFkY3J1bWJJdGVtJztcblxuQnJlYWRjcnVtYi5JdGVtID0gQnJlYWRjcnVtYkl0ZW07XG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXguanMiLCJleHBvcnQgY29uc3QgYWxsb3dNdWx0aXBsZSA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBBTElHTl9FTlVNID0gbmV3IFNldChbXG4gICd0bCcsXG4gICd0cicsXG4gICd0YycsXG4gICdibCcsXG4gICdicicsXG4gICdiYycsXG4gICdjbCcsXG4gICdjcicsXG5dKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDUgNiA3IDggOSAxMCAxMSAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi9pY29uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicXVhcmstdWkvbGliL2ljb25cIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUgMTcgMTkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWJBO0FBQ0E7QUFDQTs7O0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBTEE7QUFRQTs7OztBQXhEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWlCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBL0NBO0FBS0E7QUFEQTtBQU1BO0FBSUE7QUFMQTtBQUNBO0FBQ0E7QUF1Q0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOzs7Ozs7O0FDQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=breadcrumb.js.map