(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("quark-ui/lib/button"), require("quark-ui/lib/trigger"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "quark-ui/lib/button", "quark-ui/lib/trigger"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("quark-ui/lib/button"), require("quark-ui/lib/trigger"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["quark-ui/lib/button"], root["quark-ui/lib/trigger"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_160__, __WEBPACK_EXTERNAL_MODULE_161__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
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

/***/ 160:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/button");

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/trigger");

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"_2wHqwX6","dropdown--menu":"Hze9W1M","dropdown--menuItem":"_2pDhaod","dropdown--buttonWrap":"gLXAOiI"};

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quark_ui_trigger__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quark_ui_trigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quark_ui_trigger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quark_ui_button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quark_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quark_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dropdown_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dropdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Dropdown_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Menu__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__placements__ = __webpack_require__(258);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dropdown Component
 * @author ryan.bian
 */










var Dropdown = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Dropdown_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          trigger = _props.trigger,
          overlay = _props.overlay,
          placement = _props.placement,
          children = _props.children;
      var _Placements$placement = __WEBPACK_IMPORTED_MODULE_8__placements__["a" /* default */][placement],
          points = _Placements$placement.points,
          offset = _Placements$placement.offset;

      return React.createElement(
        __WEBPACK_IMPORTED_MODULE_3_quark_ui_trigger___default.a,
        {
          action: trigger,
          popup: overlay,
          offset: offset,
          placement: points
        },
        children
      );
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Dropdown', _class2.defaultProps = {
  trigger: 'click',
  overlay: undefined,
  placement: 'bottomLeft'
}, _class2.propTypes = {
  trigger: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover', 'click']),
  overlay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_7__Menu__["a" /* default */]),
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'])
}, _temp)) || _class);
var DropdownButton = (_dec2 = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Dropdown_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec2(_class3 = (_temp2 = _class4 = function (_PureComponent2) {
  _inherits(DropdownButton, _PureComponent2);

  function DropdownButton(props) {
    _classCallCheck(this, DropdownButton);

    var _this2 = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(DropdownButton, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          type = _props2.type,
          otherProps = _objectWithoutProperties(_props2, ['children', 'type']);

      return React.createElement(
        'div',
        { styleName: 'dropdown--buttonWrap' },
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_4_quark_ui_button___default.a,
          { type: type },
          children
        ),
        React.createElement(
          Dropdown,
          otherProps,
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_4_quark_ui_button___default.a,
            { type: type },
            'arrow'
          )
        )
      );
    }
  }]);

  return DropdownButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class4.displayName = 'DropdownButton', _class4.defaultProps = _extends({}, Dropdown.defaultProps, {
  type: __WEBPACK_IMPORTED_MODULE_4_quark_ui_button___default.a.defaultProps.type,
  placement: 'bottomRight'
}), _class4.propTypes = _extends({}, Dropdown.propTypes, {
  type: __WEBPACK_IMPORTED_MODULE_4_quark_ui_button___default.a.propTypes.type
}), _temp2)) || _class3);


Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_7__Menu__["a" /* default */];
Dropdown.Button = DropdownButton;

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Dropdown__["a"]; });


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dropdown_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dropdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Dropdown_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dropdown.Menu Component
 * @author ryan.bian
 */






var Menu = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Dropdown_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        'ul',
        { styleName: 'dropdown--menu' },
        __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (Comp) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(Comp);
        })
      );
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Menu', _class2.defaultProps = {}, _class2.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.isRequired
}, _temp)) || _class);
var Item = (_dec2 = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Dropdown_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec2(_class3 = (_temp2 = _class4 = function (_PureComponent2) {
  _inherits(Item, _PureComponent2);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this2 = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        'li',
        { styleName: 'dropdown--menuItem' },
        children
      );
    }
  }]);

  return Item;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class4.displayName = 'Item', _class4.defaultProps = {}, _class4.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.isRequired
}, _temp2)) || _class3);


Menu.Item = Item;

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Placements = {
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4]
  },
  topCenter: {
    points: ['bc', 'tc'],
    offset: [0, -4]
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4]
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    offset: [0, 4]
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4]
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Placements);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDJkZTYwNTA4OGZkOTk2OGRjZmYwPzczZjUqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn0/OWNkYioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9P2QyYWIqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVhcmstdWkvbGliL2J1dHRvblwiPzE5OTUqIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCI/MmU4YyoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24uY3NzPzg3ZjUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL0Ryb3Bkb3duLmpzPzA4NzgiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzPzU1NDIiLCJ3ZWJwYWNrOi8vL3NyYy9jb25zdGFudHMuanM/YTc3NCoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL01lbnUuanM/OTFhOCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vcGxhY2VtZW50cy5qcz82NThmIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCI/MDQwNSoqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvYnV0dG9uXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL3RyaWdnZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsIFwicXVhcmstdWkvbGliL2J1dHRvblwiLCBcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcInF1YXJrLXVpL2xpYi9idXR0b25cIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvdHJpZ2dlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVhcmtVSVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wicmVhY3QtY3NzLW1vZHVsZXNcIl0sIHJvb3RbXCJxdWFyay11aS9saWIvYnV0dG9uXCJdLCByb290W1wicXVhcmstdWkvbGliL3RyaWdnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNjBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNjFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkZTYwNTA4OGZkOTk2OGRjZmYwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi9idXR0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvYnV0dG9uXCJcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiAxNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicXVhcmstdWkvbGliL3RyaWdnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IDE2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZHJvcGRvd25cIjpcIl8yd0hxd1g2XCIsXCJkcm9wZG93bi0tbWVudVwiOlwiSHplOVcxTVwiLFwiZHJvcGRvd24tLW1lbnVJdGVtXCI6XCJfMnBEaGFvZFwiLFwiZHJvcGRvd24tLWJ1dHRvbldyYXBcIjpcImdMWEFPaUlcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9Ecm9wZG93bi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMTYiLCIvKipcbiAqIERyb3Bkb3duIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdxdWFyay11aS90cmlnZ2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAncXVhcmstdWkvYnV0dG9uJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3Bkb3duLmNzcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBsYWNlbWVudHMgZnJvbSAnLi9wbGFjZW1lbnRzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG4gICAgcGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFsnaG92ZXInLCAnY2xpY2snXSksXG4gICAgb3ZlcmxheTogUHJvcFR5cGVzLmluc3RhbmNlT2YoTWVudSksXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ2JvdHRvbUxlZnQnLFxuICAgICAgJ2JvdHRvbUNlbnRlcicsXG4gICAgICAnYm90dG9tUmlnaHQnLFxuICAgICAgJ3RvcExlZnQnLFxuICAgICAgJ3RvcENlbnRlcicsXG4gICAgICAndG9wUmlnaHQnLFxuICAgIF0pLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJpZ2dlciwgb3ZlcmxheSwgcGxhY2VtZW50LCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBvaW50cywgb2Zmc2V0IH0gPSBQbGFjZW1lbnRzW3BsYWNlbWVudF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmlnZ2VyXG4gICAgICAgIGFjdGlvbj17dHJpZ2dlcn1cbiAgICAgICAgcG9wdXA9e292ZXJsYXl9XG4gICAgICAgIG9mZnNldD17b2Zmc2V0fVxuICAgICAgICBwbGFjZW1lbnQ9e3BvaW50c31cbiAgICAgID57Y2hpbGRyZW59PC9UcmlnZ2VyPlxuICAgICk7XG4gIH1cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duQnV0dG9uJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uRHJvcGRvd24uZGVmYXVsdFByb3BzLFxuICAgIHR5cGU6IEJ1dHRvbi5kZWZhdWx0UHJvcHMudHlwZSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b21SaWdodCcsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uRHJvcGRvd24ucHJvcFR5cGVzLFxuICAgIHR5cGU6IEJ1dHRvbi5wcm9wVHlwZXMudHlwZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0eXBlLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17J2Ryb3Bkb3duLS1idXR0b25XcmFwJ30+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0+e2NoaWxkcmVufTwvQnV0dG9uPlxuICAgICAgICA8RHJvcGRvd24gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0+YXJyb3c8L0J1dHRvbj5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRHJvcGRvd24uTWVudSA9IE1lbnU7XG5Ecm9wZG93bi5CdXR0b24gPSBEcm9wZG93bkJ1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24uanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ecm9wZG93bic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJleHBvcnQgY29uc3QgYWxsb3dNdWx0aXBsZSA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBBTElHTl9FTlVNID0gbmV3IFNldChbXG4gICd0bCcsXG4gICd0cicsXG4gICd0YycsXG4gICdibCcsXG4gICdicicsXG4gICdiYycsXG4gICdjbCcsXG4gICdjcicsXG5dKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29uc3RhbnRzLmpzIiwiLyoqXG4gKiBEcm9wZG93bi5NZW51IENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bi5jc3MnO1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdNZW51J1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZU5hbWU9XCJkcm9wZG93bi0tbWVudVwiPlxuICAgICAgICB7IENoaWxkcmVuLm1hcChjaGlsZHJlbiwgQ29tcCA9PiBjbG9uZUVsZW1lbnQoQ29tcCkpIH1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgSXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdJdGVtJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZU5hbWU9XCJkcm9wZG93bi0tbWVudUl0ZW1cIj57Y2hpbGRyZW59PC9saT5cbiAgICApO1xuICB9XG59XG5cbk1lbnUuSXRlbSA9IEl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vTWVudS5qcyIsImNvbnN0IFBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gIH0sXG4gIHRvcENlbnRlcjoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgfSxcbiAgYm90dG9tQ2VudGVyOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFjZW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Ryb3Bkb3duL3BsYWNlbWVudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNSA2IDcgOCA5IDEwIDExIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBOzs7Ozs7O0FDQ0E7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBOzs7Ozs7O0FDQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQWxCQTtBQUNBO0FBQ0E7OztBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUxBO0FBT0E7Ozs7QUF4Q0E7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBaUNBOzs7QUFnQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBVkE7QUFDQTtBQUNBOzs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFPQTs7OztBQS9CQTtBQU1BO0FBQ0E7QUFJQTtBQUVBOzs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQVlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTs7O0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQXhCQTtBQVNBO0FBREE7QUFvQkE7OztBQVlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTs7O0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBdEJBO0FBU0E7QUFEQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBckJBO0FBQ0E7QUEwQkE7Ozs7Ozs7QUMzQkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=dropdown.js.map