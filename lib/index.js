(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("classnames"), require("moment"), require("react-moment-proptypes"), require("react-dom"), require("lodash/isEqual"), require("lodash/partialRight"), require("quark-ui/lib/button"), require("quark-ui/lib/icon"), require("quark-ui/lib/trigger"));
	else if(typeof define === 'function' && define.amd)
		define([, "react-css-modules", , "object-assign", "classnames", , "react-moment-proptypes", , "lodash/isEqual", "lodash/partialRight", "quark-ui/lib/button", "quark-ui/lib/icon", "quark-ui/lib/trigger"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("classnames"), require("moment"), require("react-moment-proptypes"), require("react-dom"), require("lodash/isEqual"), require("lodash/partialRight"), require("quark-ui/lib/button"), require("quark-ui/lib/icon"), require("quark-ui/lib/trigger"));
	else
		root["QuarkUI"] = factory(root["React"], root["react-css-modules"], root["PropTypes"], root["object-assign"], root["classnames"], root["moment"], root["react-moment-proptypes"], root["ReactDOM"], root["lodash/isEqual"], root["lodash/partialRight"], root["quark-ui/lib/button"], root["quark-ui/lib/icon"], root["quark-ui/lib/trigger"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"datePicker":"_1VtG7Tm","datePicker__picker":"_217Ab1l","dateGrid":"-f_2pnD","dateGrid--inactive":"xFYH87X","datePicker__datePane":"_1vTxJWA","datePicker__datePaneHead":"WXNwsuK","datePicker_weekTitle":"_317pkpI","datePicker__weekTitleGrid":"gkVLoZp -f_2pnD","datePicker__weekRow":"_13BCOGA","datePicker__dayGrid":"-LL8IDY -f_2pnD","datePicker__dayGrid--range":"_3CFoqir","datePicker__dayGrid--active":"ZJlZATL","datePicker__dayGrid--disabled":"_24C4K3t","datePicker__dayGrid--curMonth":"_15xKysL","datePicker__dayGrid--lastMonth":"_2jU5NSX xFYH87X","datePicker__dayGrid--nextMonth":"kOzFgDQ xFYH87X","datePicker__monthPane":"_1oFHW95","datePicker__monthPaneHead":"_2HpgBMq","datePicker__monthGrid":"_3ZvcDzC","datePicker__monthGrid--active":"_2ap2U0a","datePicker__yearPane":"_2EHXPQJ","datePicker__yearPaneHead":"_1jrn9B0","datePicker__yearGrid":"_2PKGdIS","datePicker__yearGrid--active":"_1CyKfmD","datePicker__yearGrid--jump":"LLlseBd","datePicker__decadePane":"_2z1RIYt","datePicker__decadeGrid":"JvjXwwi","datePicker__decadeGrid--jump":"_2rjwFZK","datePicker__decadeGrid--active":"YqtKrRl"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_moment_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return propTypes; });



var defaultProps = {
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  format: 'YYYY-MM-DD',
  onChange: function onChange() {}
};

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
var propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_react_moment_proptypes___default.a.momentObj, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_react_moment_proptypes___default.a.momentObj, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  format: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony export (immutable) */ __webpack_exports__["a"] = renderTo;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC enhancer
 * render Component into target node
 * @author: ryan.bian
 */




function renderTo() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

  return function (WrappedComponent) {
    var EnhancedComponent = function (_PureComponent) {
      _inherits(EnhancedComponent, _PureComponent);

      function EnhancedComponent() {
        _classCallCheck(this, EnhancedComponent);

        return _possibleConstructorReturn(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).apply(this, arguments));
      }

      _createClass(EnhancedComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.wrapNode = document.createElement('div');
          target.appendChild(this.wrapNode);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.renderComponent();
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.renderComponent();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(this.wrapNode);
          this.wrapNode.parentNode.removeChild(this.wrapNode);
        }
      }, {
        key: 'renderComponent',
        value: function renderComponent() {
          __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, React.createElement(WrappedComponent, this.props), this.wrapNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);

      return EnhancedComponent;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

    __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(EnhancedComponent, WrappedComponent);
    return EnhancedComponent;
  };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isEqual__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__props__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Picker__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DatePicker Component
 * @author ryan.bian
 */












var DatePicker = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_7__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.changeDateInternal = function (changeData) {
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_3_moment___default()(value).set(changeData);
      if (typeof _this.props.value !== 'undefined') {
        // 受控组件
        _this.props.onChange(newValue);
      } else {
        // 非受控组件
        _this.setState({
          value: newValue
        });
        _this.props.onChange(newValue);
      }
    };

    _this.state = {
      value: __WEBPACK_IMPORTED_MODULE_3_moment___default()(props.value || props.defaultValue)
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(DatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.value !== 'undefined') {
        // console.log('componentWillReceiveProps', nextProps);
        this.setState({
          value: __WEBPACK_IMPORTED_MODULE_3_moment___default()(nextProps.value)
        });
      }
    }
    /**
     * TODO: 检查其它情况
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!__WEBPACK_IMPORTED_MODULE_4_lodash_isEqual___default()(nextProps, this.props)) return true;
      if (!this.state.value.isSame(nextState.value)) return true;
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('DatePicker rerender');
      var value = this.state.value;
      var _props = this.props,
          pickerType = _props.pickerType,
          disabled = _props.disabled,
          format = _props.format,
          disabledDate = _props.disabledDate;

      var pickerProps = {
        date: value,
        changeDate: this.changeDateInternal,
        type: pickerType,
        disabledDate: disabledDate
      };
      var inputProps = {
        type: 'text',
        disabled: disabled,
        value: value.format(format)
      };
      return disabled ? React.createElement('input', inputProps) : React.createElement(
        __WEBPACK_IMPORTED_MODULE_9__Picker__["a" /* default */],
        pickerProps,
        React.createElement('input', inputProps)
      );
    }
  }]);

  return DatePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'DatePicker', _class2.defaultProps = __WEBPACK_IMPORTED_MODULE_5_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_8__props__["a" /* defaultProps */], {
  pickerType: 'date',
  disabledDate: function disabledDate() {}
}), _class2.propTypes = __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(__WEBPACK_IMPORTED_MODULE_8__props__["b" /* propTypes */], {
  pickerType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['date', 'month', 'range']),
  disabledDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}), _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (DatePicker);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"breadcrumb":"_26mKfx-","breadcrumb--link":"_35am08f","breadcrumb--separator":"_3v_bQW3"};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"message--box":"_3_LyTzy","message":"rvYOolG","message--content":"_2VEwa73","message__info":"_23xuyLQ","message__success":"_22HZ3wd","message__error":"_1XT6zY1","message__warning":"_3SWQ13b"};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"mask":"_3v9JpJU","mask--visible":"_10G5ebT","modal":"LrsEe32","modal--visible":"_3gon6Oj","modal__header":"_5faeo8s","modal__closable":"a1dhyEV","modal__footer":"yb8LdV1"};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trigger":"_3A_xDs1","popup":"_3WT1yrT"};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_partialRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quark_ui_trigger__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quark_ui_trigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_quark_ui_trigger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__panes_DatePane__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__panes_MonthPane__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__panes_YearPane__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__panes_DecadePane__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Picker Component
 * @author ryan.bian
 */















var Picker = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Picker, _PureComponent);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

    _this.changeDate = function (year, month, date, position) {
      var d = {
        year: year,
        month: month,
        date: date
      };
      if (_this.props.type === 'range') {
        _this.props.changeDate(d, position);
      } else {
        _this.props.changeDate(d);
      }
    };

    _this.changeMonth = function (month, position) {
      switch (_this.props.type) {
        case 'range':
          _this.props.changeDate({
            month: month
          }, position);
          break;
        case 'month':
          _this.props.changeDate({
            month: month
          });
          break;
        case 'date':
        default:
          _this.state.date.set('month', month);
          break;
      }
    };

    _this.changeYear = function (year, position) {
      if (_this.props.type === 'range') {
        _this.state.rangeDate[position].set('year', year);
      } else {
        _this.state.date.set('year', year);
      }
    };

    _this.manipulateDate = function (action, value, type, position) {
      if (_this.props.type === 'range') {
        var rangeDate = [].concat(_toConsumableArray(_this.state.rangeDate));
        rangeDate[position] = __WEBPACK_IMPORTED_MODULE_3_moment___default()(rangeDate[position])[action](value, type);
        _this.setState({
          rangeDate: rangeDate
        });
      } else {
        _this.setState({
          date: __WEBPACK_IMPORTED_MODULE_3_moment___default()(_this.state.date)[action](value, type)
        });
      }
    };

    _this.onSetDecade = function (decadeYear, e, nativeEvent, position) {
      if (_this.props.type === 'range') {
        var currentRangePane = [].concat(_toConsumableArray(_this.state.currentRangePane));
        var decadeYears = [].concat(_toConsumableArray(_this.state.decadeYears));
        currentRangePane[position] = 'decade';
        decadeYears[position] = decadeYear;
        _this.setState({
          currentRangePane: currentRangePane,
          decadeYears: decadeYears
        });
      } else {
        _this.setState({
          currentPane: 'decade',
          decadeYear: decadeYear
        });
      }
    };

    _this.onSetYear = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (_this.props.type === 'range') {
        var currentRangePane = [].concat(_toConsumableArray(_this.state.currentRangePane));
        currentRangePane[args[args.length - 1]] = 'year';
        _this.setState({
          currentRangePane: currentRangePane
        });
      } else {
        _this.setState({
          currentPane: 'year'
        });
      }
    };

    _this.onSetMonth = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (_this.props.type === 'range') {
        var currentRangePane = [].concat(_toConsumableArray(_this.state.currentRangePane));
        currentRangePane[args[args.length - 1]] = 'month';
        _this.setState({
          currentRangePane: currentRangePane
        });
      } else {
        _this.setState({
          currentPane: 'month'
        });
      }
    };

    _this.onSetDate = function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      switch (_this.props.type) {
        case 'range':
          var currentRangePane = [].concat(_toConsumableArray(_this.state.currentRangePane));
          currentRangePane[args[args.length - 1]] = 'date';
          _this.setState({
            currentRangePane: currentRangePane
          });
          break;
        case 'month':
          break;
        case 'date':
        default:
          _this.setState({
            currentPane: 'date'
          });
          break;
      }
    };

    _this.state = __WEBPACK_IMPORTED_MODULE_5_object_assign___default()({
      currentPane: props.type,
      currentRangePane: ['date', 'date'],
      decadeYear: undefined,
      decadeYears: [undefined, undefined]
    }, _this.getDateFromProps(props));
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Picker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getDateFromProps(nextProps));
    }
  }, {
    key: 'getDateFromProps',
    value: function getDateFromProps(props) {
      if (props.type === 'range') {
        return {
          date: null,
          rangeDate: props.rangeDate.map(function (date) {
            return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date);
          })
        };
      }
      return {
        date: __WEBPACK_IMPORTED_MODULE_3_moment___default()(props.date),
        rangeDate: null
      };
    }
  }, {
    key: 'renderPane',
    value: function renderPane(date, currentPane, decadeYear, position) {
      var _props = this.props,
          type = _props.type,
          rangeDate = _props.rangeDate;

      var paneProps = {
        date: date,
        manipulateDate: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.manipulateDate, position)
      };
      var pane = void 0;
      switch (currentPane) {
        case 'date':
        default:
          var disabledDate = void 0;
          if (type === 'range') {
            disabledDate = function disabledDate(current) {
              return position === 1 ? current.isBefore(rangeDate[0]) : current.isAfter(rangeDate[1]);
            };
            __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(paneProps, {
              inRange: function inRange(current) {
                return current.isBetween(rangeDate[0], rangeDate[1]);
              }
            });
          } else {
            disabledDate = this.props.disabledDate;
          }
          __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(paneProps, {
            changeDate: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.changeDate, position),
            showYearPane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetYear, position),
            showMonthPane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetMonth, position),
            disabledDate: disabledDate
          });
          pane = __WEBPACK_IMPORTED_MODULE_10__panes_DatePane__["a" /* default */];
          break;
        case 'month':
          __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(paneProps, {
            changeMonth: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.changeMonth, position),
            showYearPane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetYear, position),
            showDatePane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetDate, position)
          });
          pane = __WEBPACK_IMPORTED_MODULE_11__panes_MonthPane__["a" /* default */];
          break;
        case 'year':
          __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(paneProps, {
            changeYear: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.changeYear, position),
            showMonthPane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetMonth, position),
            showDecadePane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetDecade, position)
          });
          pane = __WEBPACK_IMPORTED_MODULE_12__panes_YearPane__["a" /* default */];
          break;
        case 'decade':
          __WEBPACK_IMPORTED_MODULE_5_object_assign___default()(paneProps, {
            changeYear: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.changeYear, position),
            showYearPane: __WEBPACK_IMPORTED_MODULE_6_lodash_partialRight___default()(this.onSetYear, position),
            decadeYear: decadeYear
          });
          pane = __WEBPACK_IMPORTED_MODULE_13__panes_DecadePane__["a" /* default */];
          break;
      }
      return React.createElement(
        'div',
        null,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(pane, paneProps)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          type = _props2.type;
      var _state = this.state,
          date = _state.date,
          rangeDate = _state.rangeDate,
          decadeYear = _state.decadeYear,
          decadeYears = _state.decadeYears,
          currentPane = _state.currentPane,
          currentRangePane = _state.currentRangePane;

      var popup = void 0;
      if (type === 'range') {
        popup = React.createElement(
          'div',
          null,
          this.renderPane(rangeDate[0], currentRangePane[0], decadeYears[0], 0),
          this.renderPane(rangeDate[1], currentRangePane[1], decadeYears[1], 1)
        );
      } else {
        popup = this.renderPane(date, currentPane, decadeYear);
      }
      return React.createElement(
        __WEBPACK_IMPORTED_MODULE_9_quark_ui_trigger___default.a,
        {
          popup: popup,
          action: 'click'
        },
        children
      );
    }
  }]);

  return Picker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Picker', _class2.defaultProps = {
  date: __WEBPACK_IMPORTED_MODULE_3_moment___default()(),
  rangeDate: [__WEBPACK_IMPORTED_MODULE_3_moment___default()(), __WEBPACK_IMPORTED_MODULE_3_moment___default()()],
  type: 'date',
  changeDate: function changeDate() {},
  disabledDate: function disabledDate() {}
}, _class2.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default.a.momentObj,
  rangeDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default.a.momentObj),
  /**
   * 'date' for datePicker
   * 'month' for monthPicker
   * 'range' for rangePicker
   */
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['date', 'month', 'range']),
  changeDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  disabledDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Picker);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Alert_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Alert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Alert_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Alert Component
 * @author grootfish
 */







function noop() {}
var Alert = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Alert_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.handleClose = function (e) {
      e.preventDefault();
      _this.setState({
        // closing:false,
        closed: true
      });

      (_this.props.onClose || noop)(e);
    };

    _this.state = {
      // closing:true,
      closed: false
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          closable = _props.closable,
          description = _props.description,
          type = _props.type,
          message = _props.message,
          closeText = _props.closeText,
          showIcon = _props.showIcon;

      if (closeText) {
        closable = true;
      }

      var closeIcon = closable ? React.createElement(
        'a',
        { onClick: this.handleClose, styleName: 'alert--close' },
        closeText
      ) : null;

      return this.state.closed ? null : React.createElement(
        'div',
        { styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('alert', 'alert__' + type) },
        React.createElement(
          'span',
          { styleName: 'alert--message' },
          message
        ),
        React.createElement(
          'span',
          { styleName: 'alert--description' },
          description
        ),
        closeIcon
      );
    }
  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Alert', _class2.defaultProps = {
  type: 'info',
  closable: false,
  closeText: 'X',
  message: '',
  description: '',
  onClose: function onClose() {},

  showIcon: false
}, _class2.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['info', 'success', 'error', 'warning']),
  closable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  closeText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]),
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]),
  description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]),
  onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Alert__["a"]; });


/***/ }),
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

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Button_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button Component
 * @author ryan.bian
 */






var Button = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Button_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          size = _props.size,
          disabled = _props.disabled,
          otherProps = _objectWithoutProperties(_props, ['children', 'type', 'size', 'disabled']);

      var btnProps = _extends({}, otherProps, {
        styleName: 'button--' + (disabled ? 'disabled' : type) + ' button--' + size
      });
      return React.createElement(
        'button',
        btnProps,
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Button', _class2.defaultProps = {
  type: 'primary',
  size: 'normal'
}, _class2.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['primary', 'secondary', 'outline']),
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['normal', 'large', 'small'])
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Button__["a"]; });


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__props__ = __webpack_require__(10);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MonthPicker Component
 * @author ryan.bian
 */









var MonthPicker = (_dec = __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(MonthPicker, _PureComponent);

  function MonthPicker() {
    _classCallCheck(this, MonthPicker);

    return _possibleConstructorReturn(this, (MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).apply(this, arguments));
  }

  _createClass(MonthPicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pickerType = _props.pickerType,
          otherProps = _objectWithoutProperties(_props, ['pickerType']);

      var monthProps = _extends({
        pickerType: 'month'
      }, otherProps);
      return React.createElement(__WEBPACK_IMPORTED_MODULE_6__DatePicker__["a" /* default */], monthProps);
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);

  return MonthPicker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'MonthPicker', _class2.defaultProps = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_7__props__["a" /* defaultProps */], {
  format: 'YYYY-MM'
}), _class2.propTypes = __WEBPACK_IMPORTED_MODULE_7__props__["b" /* propTypes */], _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (MonthPicker);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Picker__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__props__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RangePicker Component
 * @author ryan.bian
 */











var RangePicker = (_dec = __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_7__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(RangePicker, _PureComponent);

  function RangePicker(props) {
    _classCallCheck(this, RangePicker);

    var _this = _possibleConstructorReturn(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

    _this.changeDateInternal = function (changeData, position) {
      var rangeValue = _this.state.rangeValue;

      rangeValue[position] = __WEBPACK_IMPORTED_MODULE_2_moment___default()(rangeValue[position]).set(changeData);
      if (typeof _this.props.value !== 'undefined') {
        // 受控组件
        _this.props.onChange(rangeValue);
      } else {
        // 非受控组件
        _this.setState({
          rangeValue: rangeValue.slice(0)
        });
        _this.props.onChange(rangeValue);
      }
    };

    var value = props.value || props.defaultValue || [__WEBPACK_IMPORTED_MODULE_2_moment___default()(), __WEBPACK_IMPORTED_MODULE_2_moment___default()()];
    _this.state = {
      rangeValue: value
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(RangePicker, [{
    key: 'render',
    value: function render() {
      console.log('RangePicker rerender');
      var _props = this.props,
          disabled = _props.disabled,
          format = _props.format;
      var rangeValue = this.state.rangeValue;

      var pickerProps = {
        rangeDate: rangeValue,
        type: 'range',
        changeDate: this.changeDateInternal
      };
      var field = {
        type: 'text',
        disabled: disabled
      };
      var startField = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, field, {
        key: 'startDate',
        value: rangeValue[0].format(format)
      });
      var endField = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, field, {
        key: 'endDate',
        value: rangeValue[1].format(format)
      });
      var inputs = [React.createElement('input', startField), React.createElement('input', endField)];
      return disabled ? React.createElement(
        'div',
        null,
        inputs
      ) : React.createElement(
        __WEBPACK_IMPORTED_MODULE_8__Picker__["a" /* default */],
        pickerProps,
        inputs
      );
    }
  }]);

  return RangePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'RangePicker', _class2.defaultProps = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_9__props__["a" /* defaultProps */], {}), _class2.propTypes = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_9__props__["b" /* propTypes */], {
  value: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default.a.momentObj),
  defaultValue: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_4_react_moment_proptypes___default.a.momentObj)
}), _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (RangePicker);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MonthPicker__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RangePicker__ = __webpack_require__(27);




__WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */].MonthPicker = __WEBPACK_IMPORTED_MODULE_1__MonthPicker__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */].RangePicker = __WEBPACK_IMPORTED_MODULE_2__RangePicker__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iconfont_svg__ = __webpack_require__(51);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Icon Component
 * @author ryan.bian
 */









var Icon = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Icon_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Icon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (document.getElementById('quark-icons')) return;
      var wrapNode = document.createElement('div');
      wrapNode.style.cssText = 'display:none';
      wrapNode.setAttribute('id', 'quark-icons');
      __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, React.createElement(__WEBPACK_IMPORTED_MODULE_6__iconfont_svg__["a" /* default */], null), wrapNode);
      document.body.insertBefore(wrapNode, document.body.firstChild);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          size = _props.size,
          color = _props.color,
          otherProps = _objectWithoutProperties(_props, ['name', 'size', 'color']);

      var svgProps = _extends({
        style: {
          fontSize: size,
          fill: color
        },
        styleName: 'Icon',
        'aria-hidden': true
      }, otherProps);
      return React.createElement(
        'svg',
        svgProps,
        React.createElement('use', { xlinkHref: '#' + name })
      );
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]), _class2.displayName = 'Icon', _class2.defaultProps = {
  name: '',
  size: 32,
  color: null
}, _class2.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Icon__["a"]; });


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Message__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Message_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Message_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Message Component
 * @author grootfish
 */









var seed = 0;
var now = Date.now();
function getUuid() {
  return now + '_' + seed++;
}
function noop() {}

var MessageBox = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Message_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(MessageBox, _PureComponent);

  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.add = function (message) {
      var key = message.key = message.key || getUuid();
      _this.setState(function (preState) {
        var messages = preState.messages;
        if (!messages.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            messages: messages.concat(message)
          };
        }
      });
    };

    _this.remove = function (key) {
      _this.setState(function (preState) {
        return {
          messages: preState.messages.filter(function (message) {
            return message.key !== key;
          })
        };
      });
    };

    _this.state = {
      messages: []
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(MessageBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var Nodes = this.state.messages.map(function (message) {
        var onClose = function onClose() {
          message.onClose && message.onClose();
          _this2.remove(message.key);
        };

        return React.createElement(
          __WEBPACK_IMPORTED_MODULE_5__Message__["a" /* default */],
          _extends({}, message, { onClose: onClose }),
          message.content
        );
      });

      return React.createElement(
        'div',
        { styleName: 'message--box' },
        Nodes
      );
    }
  }]);

  return MessageBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'MessageBox', _class2.defaultProps = {}, _class2.propTypes = {}, _temp)) || _class);


MessageBox.newInstance = function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var container = props.container,
      msgProps = _objectWithoutProperties(props, ['container']);

  var div = void 0;
  if (container) {
    div = container;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  var message = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(React.createElement(MessageBox, msgProps), div);
  return {
    info: function info() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;

      message.add({ type: 'info', content: content, duration: duration, onClose: onClose });
    },
    success: function success() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;

      message.add({ type: 'success', content: content, duration: duration, onClose: onClose });
    },
    error: function error() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;

      message.add({ type: 'error', content: content, duration: duration, onClose: onClose });
    },
    warning: function warning() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;

      message.add({ type: 'warning', content: content, duration: duration, onClose: onClose });
    },
    destroy: function destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (MessageBox);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageBox__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__MessageBox__["a"]; });


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modal_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enhancer_render_to__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_button__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_quark_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Mask__ = __webpack_require__(48);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal Component
 * @author ryan.bian
 */










var renderNoticeModal = function renderNoticeModal(type) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    title: '',
    content: ''
  };

  var wrapNode = document.createElement('div');
  document.body.appendChild(wrapNode);
  var modalProps = {
    title: config.title || type,
    visible: true,
    closable: false,
    footer: React.createElement(
      __WEBPACK_IMPORTED_MODULE_7_quark_ui_button___default.a,
      {
        key: 'confirm',
        type: 'primary',
        size: 'small',
        onClick: function onClick() {
          __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.unmountComponentAtNode(wrapNode);
          document.body.removeChild(wrapNode);
        }
      },
      '\u786E\u5B9A'
    )
  };
  __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.render(React.createElement(
    Modal,
    modalProps,
    config.content
  ), wrapNode);
};

var Modal = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__enhancer_render_to__["a" /* default */])(), _dec2 = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Modal_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(Modal, _Component);

  _createClass(Modal, null, [{
    key: 'info',
    value: function info(config) {
      renderNoticeModal('info', config);
    }
    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }, {
    key: 'success',
    value: function success(config) {
      renderNoticeModal('success', config);
    }
  }, {
    key: 'error',
    value: function error(config) {
      renderNoticeModal('error', config);
    }
  }, {
    key: 'warning',
    value: function warning(config) {
      renderNoticeModal('warning', config);
    }
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {};
    _this.handleOk = _this.handleOk.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.props.visible && prevProps.visible) {
        this.props.afterClose();
      }
    }
  }, {
    key: 'handleOk',
    value: function handleOk(e) {
      var onOk = this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(e) {
      var onCancel = this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          closable = _props.closable;

      var hasHeader = title || closable;
      if (hasHeader) {
        return React.createElement(
          'div',
          { styleName: 'modal__header' },
          title,
          closable ? React.createElement(
            'a',
            {
              styleName: 'modal__closable',
              href: '',
              onClick: function onClick(e) {
                e.preventDefault();
                _this2.handleCancel(e);
              }
            },
            'X'
          ) : null
        );
      }
      return null;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      var footer = this.props.footer;

      var defaultFooter = [React.createElement(
        __WEBPACK_IMPORTED_MODULE_7_quark_ui_button___default.a,
        {
          key: 'cancel',
          type: 'secondary',
          size: 'small',
          onClick: this.handleCancel
        },
        '\u53D6\u6D88'
      ), React.createElement(
        __WEBPACK_IMPORTED_MODULE_7_quark_ui_button___default.a,
        {
          key: 'confirm',
          type: 'primary',
          size: 'small',
          onClick: this.handleOk
        },
        '\u786E\u5B9A'
      )];
      return footer === undefined ? React.createElement(
        'div',
        { styleName: 'modal__footer' },
        defaultFooter
      ) : React.createElement(
        'div',
        { styleName: 'modal__footer' },
        footer
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          visible = _props2.visible,
          width = _props2.width,
          children = _props2.children;

      var modalProps = {
        style: {
          width: width
        },
        styleName: 'modal' + (visible ? '--visible' : '')
      };

      return React.createElement(
        __WEBPACK_IMPORTED_MODULE_8__Mask__["a" /* default */],
        { visible: visible },
        React.createElement(
          'div',
          modalProps,
          this.renderHeader(),
          children,
          this.renderFooter()
        )
      );
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class2.displayName = 'Modal', _class2.defaultProps = {
  title: '',
  closable: true,
  width: 520,
  visible: false,
  footer: undefined,
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  afterClose: function afterClose() {}
}, _class2.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element]),
  closable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  width: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  visible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  footer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element]),
  onOk: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onCancel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  afterClose: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
}, _temp)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Modal__["a"]; });


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_icon__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_quark_ui_icon__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pagination Component
 * @author ryan.bian
 */









var Pagination = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Pagination_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.handleClickPrev = function () {
      if (_this.state.current > 1) {
        _this.handleChangeIndex(_this.state.current - 1);
      }
    };

    _this.handleClickNext = function () {
      if (_this.state.current < Math.ceil(_this.props.total / _this.state.pageSize)) {
        _this.handleChangeIndex(_this.state.current + 1);
      }
    };

    _this.handleChangeIndex = function (index) {
      if (typeof _this.props.current === 'undefined') {
        _this.setState({
          current: index
        });
      }
      _this.props.onChange(index, _this.state.pageSize);
    };

    _this.handleChangeIndexPageSize = function (e) {
      var newPageSize = +e.target.value;
      var total = _this.props.total;
      var current = _this.state.current;

      var maxPages = Math.ceil(total / newPageSize);
      var newCurrent = void 0;
      if (current > maxPages) {
        newCurrent = maxPages;
      } else {
        newCurrent = current;
      }
      if (typeof _this.props.pageSize === 'undefined') {
        _this.setState({
          pageSize: newPageSize,
          current: newCurrent
        });
      }
      _this.props.onSizeChange(newPageSize, newCurrent);
    };

    _this.handleJumper = function (e) {
      if (e.key === 'Enter') {
        var total = _this.props.total;
        var pageSize = _this.state.pageSize;

        var maxPage = Math.ceil(total / pageSize);
        var value = e.target.value;
        if (/^[1-9]+[0-9]*$/.test(value)) {
          value = Number(value);
          if (value <= maxPage) {
            _this.handleChangeIndex(value);
          }
        }
      }
    };

    _this.state = {
      current: props.current || props.defaultCurrent,
      pageSize: props.pageSize || props.defaultPageSize
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var state = {};
      if (typeof nextProps.current !== 'undefined') {
        __WEBPACK_IMPORTED_MODULE_4_object_assign___default()(state, {
          current: nextProps.current
        });
      }
      if (typeof nextProps.pageSize !== 'undefined') {
        __WEBPACK_IMPORTED_MODULE_4_object_assign___default()(state, {
          pageSize: nextProps.pageSize
        });
      }
      this.setState(state);
    }
  }, {
    key: 'getItemProps',
    value: function getItemProps(index) {
      var _this2 = this;

      var current = this.state.current;

      var active = current === index;
      return {
        styleName: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('pagination__item', {
          'pagination__item--active': active
        }),
        onClick: active ? null : function () {
          return _this2.handleChangeIndex(index);
        }
      };
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var total = this.props.total;
      var _state = this.state,
          current = _state.current,
          pageSize = _state.pageSize;

      var items = [];
      var firstPage = 1;
      var lastPage = Math.ceil(total / pageSize);

      var start = void 0;
      var end = void 0;
      if (current === firstPage) {
        start = firstPage + 1;
        end = firstPage + 1;
      } else if (current === lastPage) {
        start = lastPage - 1;
        end = lastPage - 1;
      } else {
        start = current;
        end = current;
      }
      while (true) {
        if (end - start >= 3 || start <= firstPage + 1 && end >= lastPage - 1) break;
        if (start > firstPage + 1) start -= 1;
        if (end < lastPage - 1) end += 1;
      }

      items.push(React.createElement(
        'li',
        { key: firstPage },
        React.createElement(
          'button',
          this.getItemProps(firstPage),
          firstPage
        )
      ));
      if (start !== firstPage + 1 && start !== firstPage) {
        items.push(React.createElement(
          'li',
          { key: 'front' },
          '...'
        ));
      }
      for (var i = start; i <= end; i += 1) {
        var btnProps = this.getItemProps(i);
        items.push(React.createElement(
          'li',
          { key: i },
          React.createElement(
            'button',
            btnProps,
            i
          )
        ));
      }
      if (end !== lastPage - 1 && end !== lastPage) {
        items.push(React.createElement(
          'li',
          { key: 'back' },
          '...'
        ));
      }
      items.push(React.createElement(
        'li',
        { key: lastPage },
        React.createElement(
          'button',
          this.getItemProps(lastPage),
          lastPage
        )
      ));
      return React.createElement(
        'ul',
        { styleName: 'pagination__pages' },
        items
      );
    }
  }, {
    key: 'renderControl',
    value: function renderControl(direction) {
      var ctrlProps = {
        styleName: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('pagination__ctrl', 'pagination__ctrl--' + direction),
        onClick: direction === 'prev' ? this.handleClickPrev : this.handleClickNext
      };
      var content = void 0;
      if (direction === 'prev') {
        content = React.createElement(__WEBPACK_IMPORTED_MODULE_7_quark_ui_icon___default.a, { name: 'arrow-left', size: 12 });
      } else {
        content = React.createElement(__WEBPACK_IMPORTED_MODULE_7_quark_ui_icon___default.a, { name: 'arrow-right', size: 12 });
      }
      return React.createElement(
        'button',
        ctrlProps,
        content
      );
    }
  }, {
    key: 'renderSizeChanger',
    value: function renderSizeChanger() {
      var _props = this.props,
          showSizeChanger = _props.showSizeChanger,
          pageSizeOptions = _props.pageSizeOptions;
      var pageSize = this.state.pageSize;

      if (showSizeChanger) {
        return React.createElement(
          'select',
          { value: pageSize, onChange: this.handleChangeIndexPageSize },
          pageSizeOptions.map(function (size) {
            return React.createElement(
              'option',
              { key: size, value: size },
              size + ' / page'
            );
          })
        );
      }
      return null;
    }
  }, {
    key: 'renderQuickJumper',
    value: function renderQuickJumper() {
      var showQuickJumper = this.props.showQuickJumper;

      var textFieldProps = {
        type: 'text',
        styleName: 'pagination__jumperField',
        onKeyPress: this.handleJumper
      };
      if (showQuickJumper) {
        return React.createElement(
          'span',
          { styleName: 'pagination__jumper' },
          '\u8DF3\u81F3 ',
          React.createElement('input', textFieldProps),
          ' \u9875'
        );
      }
      return null;
    }
  }, {
    key: 'renderTotal',
    value: function renderTotal() {
      var _props2 = this.props,
          showTotal = _props2.showTotal,
          total = _props2.total;

      if (showTotal) {
        return React.createElement(
          'span',
          { styleName: 'pagination__total' },
          '\u5171\u8BA1 ' + total + ' \u6761'
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      console.info('render');
      var size = this.props.size;

      var wrapProps = {
        styleName: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('pagination', {
          'pagination--small': size === 'small'
        })
      };
      return React.createElement(
        'div',
        wrapProps,
        this.renderTotal(),
        this.renderControl('prev'),
        this.renderItems(),
        this.renderControl('next'),
        this.renderSizeChanger(),
        this.renderQuickJumper()
      );
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Pagination', _class2.defaultProps = {
  current: undefined,
  defaultCurrent: 1,
  total: 0,
  pageSize: undefined,
  defaultPageSize: 10,
  onChange: function onChange() {},

  showSizeChanger: false,
  onSizeChange: function onSizeChange() {},

  pageSizeOptions: [10, 20, 30, 40],
  showQuickJumper: false,
  size: '',
  showTotal: false
}, _class2.propTypes = {
  current: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  defaultCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  total: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  defaultPageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showSizeChanger: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onSizeChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  pageSizeOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  showQuickJumper: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  showTotal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Popup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Trigger_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_event__ = __webpack_require__(50);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Trigger Component
 * @author ryan.bian
 */









var Trigger = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Trigger_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Trigger, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function Trigger(props) {
    _classCallCheck(this, Trigger);

    var _this = _possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));

    _this.checkClosable = function (e) {
      if (!_this.node || _this.node.contains(e.target)) return;
      if (!_this.popNode.contains(e.target)) {
        _this.handleClickTrigger();
      }
    };

    _this.handleMouseEnter = function () {
      _this.setState({
        active: true
      });
    };

    _this.handleMouseLeave = function () {
      _this.setState({
        active: false
      });
    };

    _this.handleClickTrigger = function (e) {
      e && e.preventDefault();
      _this.setState({
        active: !_this.state.active
      }, function () {
        if (_this.state.active) {
          // bind close listener
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_event__["a" /* on */])(document.body, 'click', _this.checkClosable);
        } else {
          // unbind close listener
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_event__["b" /* off */])(document.body, 'click', _this.checkClosable);
        }
      });
    };

    _this.state = {
      position: [],
      active: false
    };
    return _this;
  }

  _createClass(Trigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyPlacement(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!prevState.active && this.state.active) {
        setTimeout(function () {
          _this2.applyPlacement(_this2.props);
        }, 0);
      }
    }
  }, {
    key: 'applyPlacement',
    value: function applyPlacement(props) {
      if (!this.node || !this.popNode) return;

      var _props$placement = _slicedToArray(props.placement, 2),
          popupAlign = _props$placement[0],
          selfAlign = _props$placement[1];

      var selfRect = Trigger.getTargetRect(this.node);
      var popupRect = Trigger.getTargetRect(this.popNode);
      var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var x = scrollX;
      var y = scrollY;
      switch (selfAlign[0]) {
        case 't':
          y += selfRect.top;
          break;
        case 'b':
          y += selfRect.bottom;
          break;
        case 'c':
        default:
          y += selfRect.top + selfRect.height / 2;
          break;
      }
      switch (selfAlign[1]) {
        case 'l':
          x += selfRect.left;
          break;
        case 'r':
          x += selfRect.right;
          break;
        case 'c':
        default:
          x += selfRect.left + selfRect.width / 2;
          break;
      }
      switch (popupAlign[0]) {
        case 't':
        default:
          break;
        case 'b':
          y -= popupRect.height;
          break;
        case 'c':
          y -= popupRect.height / 2;
          break;
      }
      switch (popupAlign[1]) {
        case 'l':
        default:
          break;
        case 'r':
          x -= popupRect.width;
          break;
        case 'c':
          x -= popupRect.width / 2;
          break;
      }
      this.setState({
        position: [x, y]
      });
    }
  }, {
    key: 'renderPopup',
    value: function renderPopup() {
      var _this3 = this;

      var _state = this.state,
          position = _state.position,
          active = _state.active;

      return React.createElement(
        __WEBPACK_IMPORTED_MODULE_5__Popup__["a" /* default */],
        {
          ref: function ref(n) {
            return _this3.popup = n;
          },
          popupRef: function popupRef(n) {
            return _this3.popNode = n;
          },
          position: position,
          visible: active
        },
        this.props.popup
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          action = _props.action,
          children = _props.children;

      var triggerProps = {
        ref: function ref(n) {
          return _this4.node = n;
        }
      };
      if (action === 'hover') {
        __WEBPACK_IMPORTED_MODULE_3_object_assign___default()(triggerProps, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
      } else if (action === 'click') {
        __WEBPACK_IMPORTED_MODULE_3_object_assign___default()(triggerProps, {
          onClick: this.handleClickTrigger
        });
      }
      return React.createElement(
        'div',
        { styleName: 'trigger' },
        React.createElement(
          'span',
          triggerProps,
          children
        ),
        this.renderPopup()
      );
    }
  }]);

  return Trigger;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Trigger', _class2.defaultProps = {
  action: 'hover',
  placement: ['tl', 'bl'],
  popup: ''
}, _class2.propTypes = {
  action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover', 'click']),
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Array.from(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ALIGN_ENUM */]))),
  popup: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element])
}, _class2.getTargetRect = function (target) {
  return target.getBoundingClientRect();
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Trigger);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Trigger__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Trigger__["a"]; });


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"alert":"_39kAAFy","alert--message":"_2PlM57S","alert--description":"_2WVGGAD","alert--close":"_2mpL-C1","alert__info":"_2zbvGEj","alert__success":"_1G-i0lm","alert__error":"_2IstVeW","alert__warning":"_1RLd9u1"};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"base":"CTy3CHb","small":"_1FNLWX0","normal":"_1O7JoXn","large":"_1JYFbqn","primary":"_1rlU5o-","secondary":"_16NdYXA","outline":"_1mwrt2X","disabled":"_3P6QXVt","button--primary":"_11KqluX CTy3CHb _1rlU5o-","button--secondary":"_1QjCEA1 CTy3CHb _16NdYXA","button--outline":"DU20RT6 CTy3CHb _1mwrt2X","button--disabled":"_3dqIZEv CTy3CHb _3P6QXVt","button--large":"_3KW6hMp _1JYFbqn","button--normal":"_3mBVgjk _1O7JoXn","button--small":"_2HVyQfI _1FNLWX0"};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Icon":"_2jSl5RJ"};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_1L_-sT1","pagination__ctrl":"_2tvnb-l","pagination__ctrl--prev":"_2t_sb3i","pagination__ctrl--next":"_1-Px8R_","pagination__pages":"cfbKU8w","pagination__item":"jsRFs8b","pagination__item--active":"_1ZyqWB7","pagination__total":"_2KQ0PhC","pagination__jumper":"wBezPz9","pagination__jumperField":"_280nkVW","pagination--small":"_2CnmpyB"};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DatePane Component
 * @author ryan.bian
 */










var DatePane = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(DatePane, _PureComponent);

  function DatePane(props) {
    _classCallCheck(this, DatePane);

    var _this = _possibleConstructorReturn(this, (DatePane.__proto__ || Object.getPrototypeOf(DatePane)).call(this, props));

    _this.handleSubtractYear = function () {
      _this.props.manipulateDate('subtract', 1, 'Y');
    };

    _this.handleSubtractMonth = function () {
      _this.props.manipulateDate('subtract', 1, 'M');
    };

    _this.handleAddYear = function () {
      _this.props.manipulateDate('add', 1, 'Y');
    };

    _this.handleAddMonth = function () {
      _this.props.manipulateDate('add', 1, 'M');
    };

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(DatePane, [{
    key: 'handleClickDate',
    value: function handleClickDate(nextYear, nextMonth, nextDate) {
      this.props.changeDate(nextYear, nextMonth, nextDate);
    }
  }, {
    key: 'renderWeekTitle',
    value: function renderWeekTitle() {
      var weekdays = __WEBPACK_IMPORTED_MODULE_7_moment___default.a.weekdaysMin();
      return React.createElement(
        'div',
        { styleName: 'datePicker_weekTitle' },
        weekdays.map(function (w) {
          return React.createElement(
            'div',
            { styleName: 'datePicker__weekTitleGrid', key: w },
            w
          );
        })
      );
    }
  }, {
    key: 'renderPaneHead',
    value: function renderPaneHead() {
      var _props = this.props,
          date = _props.date,
          showYearPane = _props.showYearPane,
          showMonthPane = _props.showMonthPane;

      return React.createElement(
        'div',
        { styleName: 'datePicker__datePaneHead' },
        React.createElement(
          'button',
          { onClick: this.handleSubtractYear },
          '\u25C0'
        ),
        React.createElement(
          'button',
          { onClick: this.handleSubtractMonth },
          '\u25C0'
        ),
        React.createElement(
          'button',
          { onClick: showMonthPane },
          date.format('MMM')
        ),
        React.createElement(
          'button',
          { onClick: showYearPane },
          date.format('YYYY')
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddMonth },
          '\u25B6'
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddYear },
          '\u25B6'
        )
      );
    }
  }, {
    key: 'renderWeekDays',
    value: function renderWeekDays() {
      var _props2 = this.props,
          date = _props2.date,
          disabledDate = _props2.disabledDate,
          inRange = _props2.inRange;

      var curDate = date.date();
      var firstDayOfMonth = __WEBPACK_IMPORTED_MODULE_7_moment___default()(date).startOf('month');
      var lastDayOfMonth = __WEBPACK_IMPORTED_MODULE_7_moment___default()(date).endOf('month');
      var start = firstDayOfMonth.weekday();
      var moveDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(firstDayOfMonth).subtract(start, 'd');
      var lastDayIndex = lastDayOfMonth.date();
      var month = date.month();
      var weeks = [];
      var i = -start;
      var week = [];
      while (true) {
        var gridProps = {
          key: i
        };
        var dateNum = void 0;
        var moveYear = date.year();
        if (i < 0) {
          // last month
          dateNum = moveDate.date();
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(gridProps, {
            styleName: 'datePicker__dayGrid datePicker__dayGrid--lastMonth',
            onClick: this.handleClickDate.bind(this, moveYear, month - 1, dateNum)
          });
        } else if (i >= lastDayIndex) {
          // next month
          dateNum = moveDate.date();
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(gridProps, {
            styleName: 'datePicker__dayGrid datePicker__dayGrid--nextMonth',
            onClick: this.handleClickDate.bind(this, moveYear, month + 1, dateNum)
          });
        } else {
          // this month
          dateNum = i + 1;
          var disabled = disabledDate && disabledDate(moveDate);
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(gridProps, {
            styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('datePicker__dayGrid', 'datePicker__dayGrid--curMonth', {
              'datePicker__dayGrid--active': dateNum === curDate,
              'datePicker__dayGrid--disabled': disabled,
              'datePicker__dayGrid--range': inRange && inRange(moveDate)
            }),
            onClick: disabled ? null : this.handleClickDate.bind(this, moveYear, month, dateNum)
          });
        }
        week.push(React.createElement(
          'button',
          gridProps,
          dateNum
        ));
        if (week.length === 7) {
          weeks.push(week);
          week = [];
          if (i > lastDayIndex) break;
        }
        moveDate.add(1, 'd');
        i += 1;
      }
      return weeks.map(function (w, k) {
        return React.createElement(
          'div',
          { key: k, styleName: 'datePicker__weekRow' },
          w
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { styleName: 'datePicker__picker datePicker__datePane' },
        this.renderPaneHead(),
        this.renderWeekTitle(),
        this.renderWeekDays()
      );
    }
  }]);

  return DatePane;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'DatePane', _class2.defaultProps = {
  date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(),
  showYearPane: function showYearPane() {},
  showMonthPane: function showMonthPane() {},
  changeDate: function changeDate() {},
  manipulateDate: function manipulateDate() {},
  disabledDate: function disabledDate() {},

  inRange: undefined
}, _class2.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default.a.momentObj,
  showYearPane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showMonthPane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  changeDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  manipulateDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  disabledDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  inRange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (DatePane);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_moment_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DatePicker_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DecadePane Component
 * @author ryan.bian
 */










var DecadePane = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(DecadePane, _PureComponent);

  function DecadePane(props) {
    _classCallCheck(this, DecadePane);

    var _this = _possibleConstructorReturn(this, (DecadePane.__proto__ || Object.getPrototypeOf(DecadePane)).call(this, props));

    _this.handleSubtractCentury = function () {
      _this.onJumpCentury(true);
    };

    _this.handleAddCentury = function () {
      _this.onJumpCentury(false);
    };

    _this.state = _this.getDecadeRange(props);
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(DecadePane, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getDecadeRange(nextProps));
    }
  }, {
    key: 'getDecadeRange',
    value: function getDecadeRange(props) {
      var decadeYear = props.decadeYear;

      var startYear = Math.floor(decadeYear / 100) * 100;
      var endYear = startYear + 99;
      return {
        startYear: startYear,
        endYear: endYear,
        decadeYear: decadeYear
      };
    }
  }, {
    key: 'onChangeDecade',
    value: function onChangeDecade(startYear) {
      this.props.changeYear(startYear);
      this.props.showYearPane();
    }
  }, {
    key: 'onJumpCentury',
    value: function onJumpCentury(backward) {
      var _state = this.state,
          startYear = _state.startYear,
          endYear = _state.endYear,
          decadeYear = _state.decadeYear;

      var newState = {};
      if (backward) {
        __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(newState, {
          startYear: startYear - 100,
          endYear: endYear - 100,
          decadeYear: decadeYear - 100
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(newState, {
          startYear: startYear + 100,
          endYear: endYear + 100,
          decadeYear: decadeYear + 100
        });
      }
      this.setState(newState);
    }
  }, {
    key: 'renderDecadeHead',
    value: function renderDecadeHead() {
      var decadeYear = this.state.decadeYear;

      var from = Math.floor(decadeYear / 10) * 10;
      var currentDecade = [from, from + 9];
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleSubtractCentury },
          '\u25C0'
        ),
        React.createElement(
          'span',
          null,
          currentDecade.join('-')
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddCentury },
          '\u25B6'
        )
      );
    }
  }, {
    key: 'renderDecades',
    value: function renderDecades() {
      var decades = [];
      var _state2 = this.state,
          startYear = _state2.startYear,
          endYear = _state2.endYear,
          decadeYear = _state2.decadeYear;

      var i = startYear - 10;
      for (; i <= endYear + 1; i += 10) {
        var decadeProps = {
          key: i,
          styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('datePicker__decadeGrid', {
            'datePicker__decadeGrid--jump': i === startYear - 10 || i === endYear + 1,
            'datePicker__decadeGrid--active': decadeYear >= i && decadeYear <= i + 9
          })
        };
        if (i === startYear - 10 || i === endYear + 1) {
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(decadeProps, {
            onClick: this.onJumpCentury.bind(this, i === startYear - 10)
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(decadeProps, {
            onClick: this.onChangeDecade.bind(this, i)
          });
        }
        decades.push(React.createElement(
          'button',
          decadeProps,
          [i, i + 9].join('-')
        ));
      }
      return React.createElement(
        'div',
        null,
        decades
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { styleName: 'datePicker__picker datePicker__decadePane' },
        this.renderDecadeHead(),
        this.renderDecades()
      );
    }
  }]);

  return DecadePane;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'DecadePane', _class2.defaultProps = {
  date: __WEBPACK_IMPORTED_MODULE_5_moment___default()(),
  decadeYear: undefined,
  changeYear: function changeYear() {},
  showYearPane: function showYearPane() {}
}, _class2.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_6_react_moment_proptypes___default.a.momentObj,
  decadeYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  changeYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showYearPane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (DecadePane);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MonthPane Component
 * @author ryan.bian
 */










var MonthPane = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(MonthPane, _PureComponent);

  function MonthPane(props) {
    _classCallCheck(this, MonthPane);

    var _this = _possibleConstructorReturn(this, (MonthPane.__proto__ || Object.getPrototypeOf(MonthPane)).call(this, props));

    _this.handleSubtractYear = function () {
      _this.props.manipulateDate('subtract', 1, 'Y');
    };

    _this.handleAddYear = function () {
      _this.props.manipulateDate('add', 1, 'Y');
    };

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(MonthPane, [{
    key: 'onChangeMonth',
    value: function onChangeMonth(month) {
      this.props.changeMonth(month);
      this.props.showDatePane();
    }
  }, {
    key: 'renderMonthHead',
    value: function renderMonthHead() {
      var _props = this.props,
          date = _props.date,
          showYearPane = _props.showYearPane;

      return React.createElement(
        'div',
        { styleName: 'datePicker__monthPaneHead' },
        React.createElement(
          'button',
          { onClick: this.handleSubtractYear },
          '\u25C0'
        ),
        React.createElement(
          'button',
          { onClick: showYearPane },
          date.format('YYYY')
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddYear },
          '\u25B6'
        )
      );
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var _this2 = this;

      var months = __WEBPACK_IMPORTED_MODULE_7_moment___default.a.monthsShort();
      var curMonth = this.props.date.format('MMM');
      return React.createElement(
        'div',
        null,
        months.map(function (month) {
          var monthProps = {
            key: month,
            onClick: _this2.onChangeMonth.bind(_this2, month),
            styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('datePicker__monthGrid', {
              'datePicker__monthGrid--active': month === curMonth
            })
          };
          return React.createElement(
            'button',
            monthProps,
            month
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { styleName: 'datePicker__picker datePicker__monthPane' },
        this.renderMonthHead(),
        this.renderMonths()
      );
    }
  }]);

  return MonthPane;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'MonthPane', _class2.defaultProps = {
  date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(),
  showYearPane: function showYearPane() {},
  showDatePane: function showDatePane() {},
  changeMonth: function changeMonth() {},
  manipulateDate: function manipulateDate() {}
}, _class2.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default.a.momentObj,
  showYearPane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showDatePane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  changeMonth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  manipulateDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (MonthPane);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * YearPane Component
 * @author ryan.bian
 */










var YearPane = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__DatePicker_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(YearPane, _PureComponent);

  function YearPane(props) {
    _classCallCheck(this, YearPane);

    var _this = _possibleConstructorReturn(this, (YearPane.__proto__ || Object.getPrototypeOf(YearPane)).call(this, props));

    _this.handleSubtractDecade = function () {
      _this.props.manipulateDate('subtract', 10, 'Y');
    };

    _this.handleAddDecade = function () {
      _this.props.manipulateDate('add', 10, 'Y');
    };

    _this.state = _this.getYearRange(props);
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(YearPane, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.date.isSame(nextProps.date)) {
        this.setState(this.getYearRange(nextProps));
      }
    }
  }, {
    key: 'onChangeYear',
    value: function onChangeYear(year) {
      this.props.changeYear(year);
      this.props.showMonthPane();
    }
  }, {
    key: 'onJumpDecade',
    value: function onJumpDecade(backward) {
      var _state = this.state,
          currentYear = _state.currentYear,
          startYear = _state.startYear,
          endYear = _state.endYear;

      var newState = {};
      if (backward) {
        __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(newState, {
          currentYear: currentYear - 10,
          startYear: startYear - 10,
          endYear: endYear - 10
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(newState, {
          currentYear: currentYear + 10,
          startYear: startYear + 10,
          endYear: endYear + 10
        });
      }
      this.setState(newState);
    }
  }, {
    key: 'getYearRange',
    value: function getYearRange(props) {
      var currentYear = props.date.get('year');
      var startYear = Math.floor(currentYear / 10) * 10 - 1;
      var endYear = startYear + 11;
      return {
        currentYear: currentYear,
        startYear: startYear,
        endYear: endYear
      };
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _state2 = this.state,
          currentYear = _state2.currentYear,
          startYear = _state2.startYear,
          endYear = _state2.endYear;

      var i = startYear;
      var years = [];
      for (i; i <= endYear; i += 1) {
        var yearProps = {
          styleName: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('datePicker__yearGrid', {
            'datePicker__yearGrid--active': currentYear === i,
            'datePicker__yearGrid--jump': startYear === i || endYear === i
          }),
          key: i
        };
        if (i === startYear || i === endYear) {
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(yearProps, {
            onClick: this.onJumpDecade.bind(this, i === startYear)
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_2_object_assign___default()(yearProps, {
            onClick: this.onChangeYear.bind(this, i)
          });
        }
        years.push(React.createElement(
          'button',
          yearProps,
          i
        ));
      }
      return React.createElement(
        'div',
        null,
        years
      );
    }
  }, {
    key: 'renderYearHead',
    value: function renderYearHead() {
      var showDecadePane = this.props.showDecadePane;
      var _state3 = this.state,
          currentYear = _state3.currentYear,
          startYear = _state3.startYear,
          endYear = _state3.endYear;

      var decade = [startYear + 1, endYear - 1];
      return React.createElement(
        'div',
        { styleName: 'datePicker__yearPaneHead' },
        React.createElement(
          'button',
          { onClick: this.handleSubtractDecade },
          '\u25C0'
        ),
        React.createElement(
          'button',
          { onClick: showDecadePane.bind(this, currentYear) },
          decade.join('-')
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddDecade },
          '\u25B6'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { styleName: 'datePicker__picker datePicker__yearPane' },
        this.renderYearHead(),
        this.renderYears()
      );
    }
  }]);

  return YearPane;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'YearPane', _class2.defaultProps = {
  date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(),
  showDecadePane: function showDecadePane() {},
  showMonthPane: function showMonthPane() {},
  changeYear: function changeYear() {},
  manipulateDate: function manipulateDate() {}
}, _class2.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_8_react_moment_proptypes___default.a.momentObj,
  showDecadePane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showMonthPane: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  changeYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  manipulateDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (YearPane);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Message_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Message_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Message Component
 * @author grootfish
 */







var Message = (_dec = __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Message_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    };

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.duration) {
        this.closeTimer = setTimeout(function () {
          _this2.close();
        }, this.props.duration * 1000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        'div',
        { styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('message', 'message__' + props.type) },
        React.createElement(
          'div',
          { styleName: 'message--content' },
          props.children
        )
      );
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Message', _class2.defaultProps = {
  onClose: function onClose() {},

  duration: 1.5,
  type: 'info'
}, _class2.propTypes = {
  duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['info', 'success', 'error', 'warning'])
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Modal_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mask; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mask Component
 * @author ryan.bian
 */






var Mask = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Mask, _Component);

  function Mask(props) {
    _classCallCheck(this, Mask);

    var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this, props));

    _this.state = {};
    return _this;
  }
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Mask, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          children = _props.children;

      var maskProps = {
        styleName: 'mask' + (visible ? '--visible' : '')
      };

      return React.createElement(
        'div',
        maskProps,
        children
      );
    }
  }]);

  return Mask;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class2.displayName = 'Modal', _class2.defaultProps = {
  visible: false
}, _class2.propTypes = {
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
}, _temp)) || _class);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enhancer_render_to__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Trigger_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Trigger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Trigger_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popup; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Popup Component
 * @author ryan.bian
 */







var Popup = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__enhancer_render_to__["a" /* default */])(), _dec2 = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Trigger_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Popup, _PureComponent);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Popup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          popupRef = _props.popupRef,
          position = _props.position,
          visible = _props.visible;

      var stylePos = {
        left: position[0],
        top: position[1]
      };
      return visible ? React.createElement(
        'div',
        {
          ref: popupRef,
          styleName: 'popup',
          style: stylePos
        },
        children
      ) : null;
    }
  }]);

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Popup', _class2.defaultProps = {
  position: [0, 0],
  popupRef: null,
  visible: false
}, _class2.propTypes = {
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  popupRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
}, _temp)) || _class) || _class);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return off; });
/**
 * 绑定事件
 * @param {element} node 绑定节点
 * @param {string} type 时间类型
 * @param {function} listener 绑定函数
 */
var on = function on(node, type, listener) {
  node.addEventListener(type, listener, false);
};
/**
 * 移除事件
 * @param {element} node 绑定节点
 * @param {string} type 时间类型
 * @param {function} listener 绑定函数
 */
var off = function off(node, type, listener) {
  node.removeEventListener(type, listener, false);
};



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class SVG extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "svg",
      this.props,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "symbol",
        { id: "arrow-right", viewBox: "0 0 1024 1024" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M288.867 12.483c-16.606-16.644-43.497-16.644-60.146 0-16.565 16.643-16.565 43.955 0 60.599L704.29 511.787 228.72 950.918c-16.564 16.644-16.564 43.53 0 60.6 16.65 16.643 43.54 16.643 60.147 0l506.085-466.871c8.852-8.962 12.645-20.911 12.055-32.86.59-11.523-3.203-23.472-12.055-32.434L288.867 12.483z" })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "symbol",
        { id: "arrow-left", viewBox: "0 0 1024 1024" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M735.133 1011.517c16.607 16.642 43.498 16.643 60.147 0 16.565-16.643 16.565-43.956 0-60.599L319.711 512.213l475.57-439.131c16.565-16.643 16.565-43.529 0-60.599-16.649-16.643-43.54-16.643-60.147 0L229.049 479.354c-8.852 8.962-12.645 20.911-12.055 32.86-.59 11.522 3.203 23.472 12.055 32.433l506.085 466.871z" })
      )
    );
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SVG;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/button");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/icon");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/trigger");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_breadcrumb___ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return __WEBPACK_IMPORTED_MODULE_0__components_breadcrumb___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_button___ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1__components_button___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_datePicker___ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_2__components_datePicker___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_icon___ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_3__components_icon___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message___ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return __WEBPACK_IMPORTED_MODULE_4__components_message___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert___ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_5__components_alert___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal___ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_6__components_modal___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pagination___ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_7__components_pagination___["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_trigger___ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return __WEBPACK_IMPORTED_MODULE_8__components_trigger___["default"]; });
/**
 * QUARK-UI Components
 * @author ryan.bian
 */



















/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMTJhNTIyMjZmMjUwZWJlN2I5NiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL0RhdGVQaWNrZXIuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibW9tZW50XCIsXCJjb21tb25qczJcIjpcIm1vbWVudFwiLFwicm9vdFwiOlwibW9tZW50XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vbWVudC1wcm9wdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL3Byb3BzLmpzIiwid2VicGFjazovLy9zcmMvZW5oYW5jZXIvcmVuZGVyLXRvLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4yLjBAaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL01lc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL01vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL1BpY2tlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYkl0ZW0uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9Nb250aFBpY2tlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9SYW5nZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9JY29uLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tZXNzYWdlL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vSWNvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9wYW5lcy9EYXRlUGFuZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9wYW5lcy9EZWNhZGVQYW5lLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL3BhbmVzL01vbnRoUGFuZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9wYW5lcy9ZZWFyUGFuZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9NZXNzYWdlLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tb2RhbC9NYXNrLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1BvcHVwLmpzIiwid2VicGFjazovLy9zcmMvdXRpbHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbmZvbnQuc3ZnIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9pc0VxdWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3BhcnRpYWxSaWdodFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1YXJrLXVpL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwibW9tZW50XCIpLCByZXF1aXJlKFwicmVhY3QtbW9tZW50LXByb3B0eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSwgcmVxdWlyZShcImxvZGFzaC9pc0VxdWFsXCIpLCByZXF1aXJlKFwibG9kYXNoL3BhcnRpYWxSaWdodFwiKSwgcmVxdWlyZShcInF1YXJrLXVpL2xpYi9idXR0b25cIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvaWNvblwiKSwgcmVxdWlyZShcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssIFwicmVhY3QtY3NzLW1vZHVsZXNcIiwgLCBcIm9iamVjdC1hc3NpZ25cIiwgXCJjbGFzc25hbWVzXCIsICwgXCJyZWFjdC1tb21lbnQtcHJvcHR5cGVzXCIsICwgXCJsb2Rhc2gvaXNFcXVhbFwiLCBcImxvZGFzaC9wYXJ0aWFsUmlnaHRcIiwgXCJxdWFyay11aS9saWIvYnV0dG9uXCIsIFwicXVhcmstdWkvbGliL2ljb25cIiwgXCJxdWFyay11aS9saWIvdHJpZ2dlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0LW1vbWVudC1wcm9wdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIiksIHJlcXVpcmUoXCJsb2Rhc2gvaXNFcXVhbFwiKSwgcmVxdWlyZShcImxvZGFzaC9wYXJ0aWFsUmlnaHRcIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvYnV0dG9uXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvdHJpZ2dlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVhcmtVSVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wicmVhY3QtY3NzLW1vZHVsZXNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJvYmplY3QtYXNzaWduXCJdLCByb290W1wiY2xhc3NuYW1lc1wiXSwgcm9vdFtcIm1vbWVudFwiXSwgcm9vdFtcInJlYWN0LW1vbWVudC1wcm9wdHlwZXNcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSwgcm9vdFtcImxvZGFzaC9pc0VxdWFsXCJdLCByb290W1wibG9kYXNoL3BhcnRpYWxSaWdodFwiXSwgcm9vdFtcInF1YXJrLXVpL2xpYi9idXR0b25cIl0sIHJvb3RbXCJxdWFyay11aS9saWIvaWNvblwiXSwgcm9vdFtcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81Ml9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU2X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMxMmE1MjIyNmYyNTBlYmU3Yjk2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydCBjb25zdCBhbGxvd011bHRpcGxlID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOX0VOVU0gPSBuZXcgU2V0KFtcbiAgJ3RsJyxcbiAgJ3RyJyxcbiAgJ3RjJyxcbiAgJ2JsJyxcbiAgJ2JyJyxcbiAgJ2JjJyxcbiAgJ2NsJyxcbiAgJ2NyJyxcbl0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IDgiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJkYXRlUGlja2VyXCI6XCJfMVZ0RzdUbVwiLFwiZGF0ZVBpY2tlcl9fcGlja2VyXCI6XCJfMjE3QWIxbFwiLFwiZGF0ZUdyaWRcIjpcIi1mXzJwbkRcIixcImRhdGVHcmlkLS1pbmFjdGl2ZVwiOlwieEZZSDg3WFwiLFwiZGF0ZVBpY2tlcl9fZGF0ZVBhbmVcIjpcIl8xdlR4SldBXCIsXCJkYXRlUGlja2VyX19kYXRlUGFuZUhlYWRcIjpcIldYTndzdUtcIixcImRhdGVQaWNrZXJfd2Vla1RpdGxlXCI6XCJfMzE3cGtwSVwiLFwiZGF0ZVBpY2tlcl9fd2Vla1RpdGxlR3JpZFwiOlwiZ2tWTG9acCAtZl8ycG5EXCIsXCJkYXRlUGlja2VyX193ZWVrUm93XCI6XCJfMTNCQ09HQVwiLFwiZGF0ZVBpY2tlcl9fZGF5R3JpZFwiOlwiLUxMOElEWSAtZl8ycG5EXCIsXCJkYXRlUGlja2VyX19kYXlHcmlkLS1yYW5nZVwiOlwiXzNDRm9xaXJcIixcImRhdGVQaWNrZXJfX2RheUdyaWQtLWFjdGl2ZVwiOlwiWkpsWkFUTFwiLFwiZGF0ZVBpY2tlcl9fZGF5R3JpZC0tZGlzYWJsZWRcIjpcIl8yNEM0SzN0XCIsXCJkYXRlUGlja2VyX19kYXlHcmlkLS1jdXJNb250aFwiOlwiXzE1eEt5c0xcIixcImRhdGVQaWNrZXJfX2RheUdyaWQtLWxhc3RNb250aFwiOlwiXzJqVTVOU1ggeEZZSDg3WFwiLFwiZGF0ZVBpY2tlcl9fZGF5R3JpZC0tbmV4dE1vbnRoXCI6XCJrT3pGZ0RRIHhGWUg4N1hcIixcImRhdGVQaWNrZXJfX21vbnRoUGFuZVwiOlwiXzFvRkhXOTVcIixcImRhdGVQaWNrZXJfX21vbnRoUGFuZUhlYWRcIjpcIl8ySHBnQk1xXCIsXCJkYXRlUGlja2VyX19tb250aEdyaWRcIjpcIl8zWnZjRHpDXCIsXCJkYXRlUGlja2VyX19tb250aEdyaWQtLWFjdGl2ZVwiOlwiXzJhcDJVMGFcIixcImRhdGVQaWNrZXJfX3llYXJQYW5lXCI6XCJfMkVIWFBRSlwiLFwiZGF0ZVBpY2tlcl9feWVhclBhbmVIZWFkXCI6XCJfMWpybjlCMFwiLFwiZGF0ZVBpY2tlcl9feWVhckdyaWRcIjpcIl8yUEtHZElTXCIsXCJkYXRlUGlja2VyX195ZWFyR3JpZC0tYWN0aXZlXCI6XCJfMUN5S2ZtRFwiLFwiZGF0ZVBpY2tlcl9feWVhckdyaWQtLWp1bXBcIjpcIkxMbHNlQmRcIixcImRhdGVQaWNrZXJfX2RlY2FkZVBhbmVcIjpcIl8yejFSSVl0XCIsXCJkYXRlUGlja2VyX19kZWNhZGVHcmlkXCI6XCJKdmpYd3dpXCIsXCJkYXRlUGlja2VyX19kZWNhZGVHcmlkLS1qdW1wXCI6XCJfMnJqd0ZaS1wiLFwiZGF0ZVBpY2tlcl9fZGVjYWRlR3JpZC0tYWN0aXZlXCI6XCJZcXRLclJsXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9EYXRlUGlja2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIm1vbWVudFwiLFwiY29tbW9uanMyXCI6XCJtb21lbnRcIixcInJvb3RcIjpcIm1vbWVudFwifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnQtcHJvcHR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDUgNiIsImltcG9ydCBtb21lbnRQcm9wVHlwZXMgZnJvbSAncmVhY3QtbW9tZW50LXByb3B0eXBlcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB2YWx1ZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgb25DaGFuZ2UoKSB7fSxcbn07XG5cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmosXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvcHJvcHMuanMiLCIvKipcbiAqIEhPQyBlbmhhbmNlclxuICogcmVuZGVyIENvbXBvbmVudCBpbnRvIHRhcmdldCBub2RlXG4gKiBAYXV0aG9yOiByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWMgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUbyh0YXJnZXQgPSBkb2N1bWVudC5ib2R5KSB7XG4gIHJldHVybiAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGNsYXNzIEVuaGFuY2VkQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMud3JhcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLndyYXBOb2RlKTtcbiAgICAgICAgdGhpcy53cmFwTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgcmVuZGVyQ29tcG9uZW50KCkge1xuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPixcbiAgICAgICAgICB0aGlzLndyYXBOb2RlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpYyhFbmhhbmNlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEVuaGFuY2VkQ29tcG9uZW50O1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9lbmhhbmNlci9yZW5kZXItdG8uanMiLCIvKipcbiAqIERhdGVQaWNrZXIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMsIHByb3BUeXBlcyB9IGZyb20gJy4vcHJvcHMnO1xuXG5pbXBvcnQgUGlja2VyIGZyb20gJy4vUGlja2VyJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRGF0ZVBpY2tlcidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgICBwaWNrZXJUeXBlOiAnZGF0ZScsXG4gICAgZGlzYWJsZWREYXRlKCkge30sXG4gIH0pXG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0gYXNzaWduKHByb3BUeXBlcywge1xuICAgIHBpY2tlclR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2RhdGUnLCAnbW9udGgnLCAncmFuZ2UnXSksXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSlcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IG1vbWVudChwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWUpLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgbmV4dFByb3BzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogbW9tZW50KG5leHRQcm9wcy52YWx1ZSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRPRE86IOajgOafpeWFtuWug+aDheWGtVxuICAgKi9cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKCFpc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykpIHJldHVybiB0cnVlO1xuICAgIGlmICghdGhpcy5zdGF0ZS52YWx1ZS5pc1NhbWUobmV4dFN0YXRlLnZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlRGF0ZUludGVybmFsID0gKGNoYW5nZURhdGEpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9tZW50KHZhbHVlKS5zZXQoY2hhbmdlRGF0YSk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8g5Y+X5o6n57uE5Lu2XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6Z2e5Y+X5o6n57uE5Lu2XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ0RhdGVQaWNrZXIgcmVyZW5kZXInKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgcGlja2VyVHlwZSwgZGlzYWJsZWQsIGZvcm1hdCwgZGlzYWJsZWREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBpY2tlclByb3BzID0ge1xuICAgICAgZGF0ZTogdmFsdWUsXG4gICAgICBjaGFuZ2VEYXRlOiB0aGlzLmNoYW5nZURhdGVJbnRlcm5hbCxcbiAgICAgIHR5cGU6IHBpY2tlclR5cGUsXG4gICAgICBkaXNhYmxlZERhdGUsXG4gICAgfTtcbiAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogdmFsdWUuZm9ybWF0KGZvcm1hdCksXG4gICAgfTtcbiAgICByZXR1cm4gZGlzYWJsZWQgPyA8aW5wdXQgey4uLmlucHV0UHJvcHN9IC8+IDogKFxuICAgICAgPFBpY2tlciB7Li4ucGlja2VyUHJvcHN9PlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICA8L1BpY2tlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9EYXRlUGlja2VyLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgY3VzdG9tU3RhdGljcykge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzR2V0T3duUHJvcGVydHlTeW1ib2xzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleXNbaV1dICYmICFLTk9XTl9TVEFUSUNTW2tleXNbaV1dICYmICghY3VzdG9tU3RhdGljcyB8fCAhY3VzdG9tU3RhdGljc1trZXlzW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb21wb25lbnRba2V5c1tpXV0gPSBzb3VyY2VDb21wb25lbnRba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuMEBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJyZWFkY3J1bWJcIjpcIl8yNm1LZngtXCIsXCJicmVhZGNydW1iLS1saW5rXCI6XCJfMzVhbTA4ZlwiLFwiYnJlYWRjcnVtYi0tc2VwYXJhdG9yXCI6XCJfM3ZfYlFXM1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVzc2FnZS0tYm94XCI6XCJfM19MeVR6eVwiLFwibWVzc2FnZVwiOlwicnZZT29sR1wiLFwibWVzc2FnZS0tY29udGVudFwiOlwiXzJWRXdhNzNcIixcIm1lc3NhZ2VfX2luZm9cIjpcIl8yM3h1eUxRXCIsXCJtZXNzYWdlX19zdWNjZXNzXCI6XCJfMjJIWjN3ZFwiLFwibWVzc2FnZV9fZXJyb3JcIjpcIl8xWFQ2elkxXCIsXCJtZXNzYWdlX193YXJuaW5nXCI6XCJfM1NXUTEzYlwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvTWVzc2FnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWFza1wiOlwiXzN2OUpwSlVcIixcIm1hc2stLXZpc2libGVcIjpcIl8xMEc1ZWJUXCIsXCJtb2RhbFwiOlwiTHJzRWUzMlwiLFwibW9kYWwtLXZpc2libGVcIjpcIl8zZ29uNk9qXCIsXCJtb2RhbF9faGVhZGVyXCI6XCJfNWZhZW84c1wiLFwibW9kYWxfX2Nsb3NhYmxlXCI6XCJhMWRoeUVWXCIsXCJtb2RhbF9fZm9vdGVyXCI6XCJ5YjhMZFYxXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInRyaWdnZXJcIjpcIl8zQV94RHMxXCIsXCJwb3B1cFwiOlwiXzNXVDF5clRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuICogUGlja2VyIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgbW9tZW50UHJvcFR5cGVzIGZyb20gJ3JlYWN0LW1vbWVudC1wcm9wdHlwZXMnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCBwYXJ0aWFsUmlnaHQgZnJvbSAnbG9kYXNoL3BhcnRpYWxSaWdodCc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdxdWFyay11aS90cmlnZ2VyJztcbmltcG9ydCBEYXRlUGFuZSBmcm9tICcuL3BhbmVzL0RhdGVQYW5lJztcbmltcG9ydCBNb250aFBhbmUgZnJvbSAnLi9wYW5lcy9Nb250aFBhbmUnO1xuaW1wb3J0IFllYXJQYW5lIGZyb20gJy4vcGFuZXMvWWVhclBhbmUnO1xuaW1wb3J0IERlY2FkZVBhbmUgZnJvbSAnLi9wYW5lcy9EZWNhZGVQYW5lJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFBpY2tlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQaWNrZXInXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlOiBtb21lbnQoKSxcbiAgICByYW5nZURhdGU6IFttb21lbnQoKSwgbW9tZW50KCldLFxuICAgIHR5cGU6ICdkYXRlJyxcbiAgICBjaGFuZ2VEYXRlKCkge30sXG4gICAgZGlzYWJsZWREYXRlKCkge30sXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZTogbW9tZW50UHJvcFR5cGVzLm1vbWVudE9iaixcbiAgICByYW5nZURhdGU6IFByb3BUeXBlcy5hcnJheU9mKG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmopLFxuICAgIC8qKlxuICAgICAqICdkYXRlJyBmb3IgZGF0ZVBpY2tlclxuICAgICAqICdtb250aCcgZm9yIG1vbnRoUGlja2VyXG4gICAgICogJ3JhbmdlJyBmb3IgcmFuZ2VQaWNrZXJcbiAgICAgKi9cbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydkYXRlJywgJ21vbnRoJywgJ3JhbmdlJ10pLFxuICAgIGNoYW5nZURhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkRGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gYXNzaWduKHtcbiAgICAgIGN1cnJlbnRQYW5lOiBwcm9wcy50eXBlLFxuICAgICAgY3VycmVudFJhbmdlUGFuZTogWydkYXRlJywgJ2RhdGUnXSxcbiAgICAgIGRlY2FkZVllYXI6IHVuZGVmaW5lZCxcbiAgICAgIGRlY2FkZVllYXJzOiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdLFxuICAgIH0sIHRoaXMuZ2V0RGF0ZUZyb21Qcm9wcyhwcm9wcykpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0RGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpKTtcbiAgfVxuXG4gIGdldERhdGVGcm9tUHJvcHMocHJvcHMpIHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgcmFuZ2VEYXRlOiBwcm9wcy5yYW5nZURhdGUubWFwKGRhdGUgPT4gbW9tZW50KGRhdGUpKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBtb21lbnQocHJvcHMuZGF0ZSksXG4gICAgICByYW5nZURhdGU6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZURhdGUgPSAoeWVhciwgbW9udGgsIGRhdGUsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgZCA9IHtcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRhdGUsXG4gICAgfTtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAncmFuZ2UnKSB7XG4gICAgICB0aGlzLnByb3BzLmNoYW5nZURhdGUoZCwgcG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmNoYW5nZURhdGUoZCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9udGggPSAobW9udGgsIHBvc2l0aW9uKSA9PiB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VEYXRlKHtcbiAgICAgICAgICBtb250aCxcbiAgICAgICAgfSwgcG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VEYXRlKHtcbiAgICAgICAgICBtb250aCxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN0YXRlLmRhdGUuc2V0KCdtb250aCcsIG1vbnRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlWWVhciA9ICh5ZWFyLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgIHRoaXMuc3RhdGUucmFuZ2VEYXRlW3Bvc2l0aW9uXS5zZXQoJ3llYXInLCB5ZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRlLnNldCgneWVhcicsIHllYXIpO1xuICAgIH1cbiAgfVxuXG4gIG1hbmlwdWxhdGVEYXRlID0gKGFjdGlvbiwgdmFsdWUsIHR5cGUsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgY29uc3QgcmFuZ2VEYXRlID0gWy4uLnRoaXMuc3RhdGUucmFuZ2VEYXRlXTtcbiAgICAgIHJhbmdlRGF0ZVtwb3NpdGlvbl0gPSBtb21lbnQocmFuZ2VEYXRlW3Bvc2l0aW9uXSlbYWN0aW9uXSh2YWx1ZSwgdHlwZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmFuZ2VEYXRlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRlOiBtb21lbnQodGhpcy5zdGF0ZS5kYXRlKVthY3Rpb25dKHZhbHVlLCB0eXBlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2V0RGVjYWRlID0gKGRlY2FkZVllYXIsIGUsIG5hdGl2ZUV2ZW50LCBwb3NpdGlvbikgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSYW5nZVBhbmUgPSBbLi4udGhpcy5zdGF0ZS5jdXJyZW50UmFuZ2VQYW5lXTtcbiAgICAgIGNvbnN0IGRlY2FkZVllYXJzID0gWy4uLnRoaXMuc3RhdGUuZGVjYWRlWWVhcnNdO1xuICAgICAgY3VycmVudFJhbmdlUGFuZVtwb3NpdGlvbl0gPSAnZGVjYWRlJztcbiAgICAgIGRlY2FkZVllYXJzW3Bvc2l0aW9uXSA9IGRlY2FkZVllYXI7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFJhbmdlUGFuZSxcbiAgICAgICAgZGVjYWRlWWVhcnMsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYW5lOiAnZGVjYWRlJyxcbiAgICAgICAgZGVjYWRlWWVhcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2V0WWVhciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgY29uc3QgY3VycmVudFJhbmdlUGFuZSA9IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRSYW5nZVBhbmVdO1xuICAgICAgY3VycmVudFJhbmdlUGFuZVthcmdzW2FyZ3MubGVuZ3RoIC0gMV1dID0gJ3llYXInO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRSYW5nZVBhbmUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYW5lOiAneWVhcicsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblNldE1vbnRoID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAncmFuZ2UnKSB7XG4gICAgICBjb25zdCBjdXJyZW50UmFuZ2VQYW5lID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudFJhbmdlUGFuZV07XG4gICAgICBjdXJyZW50UmFuZ2VQYW5lW2FyZ3NbYXJncy5sZW5ndGggLSAxXV0gPSAnbW9udGgnO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRSYW5nZVBhbmUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYW5lOiAnbW9udGgnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TZXREYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICBjb25zdCBjdXJyZW50UmFuZ2VQYW5lID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudFJhbmdlUGFuZV07XG4gICAgICAgIGN1cnJlbnRSYW5nZVBhbmVbYXJnc1thcmdzLmxlbmd0aCAtIDFdXSA9ICdkYXRlJztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFJhbmdlUGFuZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFBhbmU6ICdkYXRlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBhbmUoZGF0ZSwgY3VycmVudFBhbmUsIGRlY2FkZVllYXIsIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyB0eXBlLCByYW5nZURhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGFuZVByb3BzID0ge1xuICAgICAgZGF0ZSxcbiAgICAgIG1hbmlwdWxhdGVEYXRlOiBwYXJ0aWFsUmlnaHQodGhpcy5tYW5pcHVsYXRlRGF0ZSwgcG9zaXRpb24pLFxuICAgIH07XG4gICAgbGV0IHBhbmU7XG4gICAgc3dpdGNoIChjdXJyZW50UGFuZSkge1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZXQgZGlzYWJsZWREYXRlO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICAgIGRpc2FibGVkRGF0ZSA9IChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb24gPT09IDEgPyBjdXJyZW50LmlzQmVmb3JlKHJhbmdlRGF0ZVswXSkgOiBjdXJyZW50LmlzQWZ0ZXIocmFuZ2VEYXRlWzFdKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFzc2lnbihwYW5lUHJvcHMsIHtcbiAgICAgICAgICAgIGluUmFuZ2U6IGN1cnJlbnQgPT4gY3VycmVudC5pc0JldHdlZW4ocmFuZ2VEYXRlWzBdLCByYW5nZURhdGVbMV0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc2FibGVkRGF0ZSA9IHRoaXMucHJvcHMuZGlzYWJsZWREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGFzc2lnbihwYW5lUHJvcHMsIHtcbiAgICAgICAgICBjaGFuZ2VEYXRlOiBwYXJ0aWFsUmlnaHQodGhpcy5jaGFuZ2VEYXRlLCBwb3NpdGlvbiksXG4gICAgICAgICAgc2hvd1llYXJQYW5lOiBwYXJ0aWFsUmlnaHQodGhpcy5vblNldFllYXIsIHBvc2l0aW9uKSxcbiAgICAgICAgICBzaG93TW9udGhQYW5lOiBwYXJ0aWFsUmlnaHQodGhpcy5vblNldE1vbnRoLCBwb3NpdGlvbiksXG4gICAgICAgICAgZGlzYWJsZWREYXRlLFxuICAgICAgICB9KTtcbiAgICAgICAgcGFuZSA9IERhdGVQYW5lO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgYXNzaWduKHBhbmVQcm9wcywge1xuICAgICAgICAgIGNoYW5nZU1vbnRoOiBwYXJ0aWFsUmlnaHQodGhpcy5jaGFuZ2VNb250aCwgcG9zaXRpb24pLFxuICAgICAgICAgIHNob3dZZWFyUGFuZTogcGFydGlhbFJpZ2h0KHRoaXMub25TZXRZZWFyLCBwb3NpdGlvbiksXG4gICAgICAgICAgc2hvd0RhdGVQYW5lOiBwYXJ0aWFsUmlnaHQodGhpcy5vblNldERhdGUsIHBvc2l0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhbmUgPSBNb250aFBhbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGFzc2lnbihwYW5lUHJvcHMsIHtcbiAgICAgICAgICBjaGFuZ2VZZWFyOiBwYXJ0aWFsUmlnaHQodGhpcy5jaGFuZ2VZZWFyLCBwb3NpdGlvbiksXG4gICAgICAgICAgc2hvd01vbnRoUGFuZTogcGFydGlhbFJpZ2h0KHRoaXMub25TZXRNb250aCwgcG9zaXRpb24pLFxuICAgICAgICAgIHNob3dEZWNhZGVQYW5lOiBwYXJ0aWFsUmlnaHQodGhpcy5vblNldERlY2FkZSwgcG9zaXRpb24pLFxuICAgICAgICB9KTtcbiAgICAgICAgcGFuZSA9IFllYXJQYW5lO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RlY2FkZSc6XG4gICAgICAgIGFzc2lnbihwYW5lUHJvcHMsIHtcbiAgICAgICAgICBjaGFuZ2VZZWFyOiBwYXJ0aWFsUmlnaHQodGhpcy5jaGFuZ2VZZWFyLCBwb3NpdGlvbiksXG4gICAgICAgICAgc2hvd1llYXJQYW5lOiBwYXJ0aWFsUmlnaHQodGhpcy5vblNldFllYXIsIHBvc2l0aW9uKSxcbiAgICAgICAgICBkZWNhZGVZZWFyLFxuICAgICAgICB9KTtcbiAgICAgICAgcGFuZSA9IERlY2FkZVBhbmU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NyZWF0ZUVsZW1lbnQocGFuZSwgcGFuZVByb3BzKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGUsIHJhbmdlRGF0ZSwgZGVjYWRlWWVhciwgZGVjYWRlWWVhcnMsIGN1cnJlbnRQYW5lLCBjdXJyZW50UmFuZ2VQYW5lIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBwb3B1cDtcbiAgICBpZiAodHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgcG9wdXAgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucmVuZGVyUGFuZShyYW5nZURhdGVbMF0sIGN1cnJlbnRSYW5nZVBhbmVbMF0sIGRlY2FkZVllYXJzWzBdLCAwKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJQYW5lKHJhbmdlRGF0ZVsxXSwgY3VycmVudFJhbmdlUGFuZVsxXSwgZGVjYWRlWWVhcnNbMV0sIDEpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwID0gdGhpcy5yZW5kZXJQYW5lKGRhdGUsIGN1cnJlbnRQYW5lLCBkZWNhZGVZZWFyKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmlnZ2VyXG4gICAgICAgIHBvcHVwPXtwb3B1cH1cbiAgICAgICAgYWN0aW9uPXsnY2xpY2snfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RyaWdnZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9QaWNrZXIuanMiLCIvKipcbiAqIEFsZXJ0IENvbXBvbmVudFxuICogQGF1dGhvciBncm9vdGZpc2hcbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcyc7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQWxlcnQnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOidpbmZvJyxcbiAgICBjbG9zYWJsZTpmYWxzZSxcbiAgICBjbG9zZVRleHQ6J1gnLFxuICAgIG1lc3NhZ2U6JycsXG4gICAgZGVzY3JpcHRpb246JycsXG4gICAgb25DbG9zZSgpe30sXG4gICAgc2hvd0ljb246ZmFsc2UsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTpQcm9wVHlwZXMub25lT2YoWydpbmZvJywgJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnd2FybmluZyddKSxcbiAgICBjbG9zYWJsZTpQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZVRleHQ6UHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgXSksXG4gICAgbWVzc2FnZTpQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBkZXNjcmlwdGlvbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93SWNvbjpQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBjbG9zaW5nOnRydWUsXG4gICAgICBjbG9zZWQ6ZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vIGNsb3Npbmc6ZmFsc2UsXG4gICAgICBjbG9zZWQ6dHJ1ZSxcbiAgICB9KTtcblxuICAgICh0aGlzLnByb3BzLm9uQ2xvc2V8fG5vb3ApKGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y2xvc2FibGUsZGVzY3JpcHRpb24sdHlwZSxtZXNzYWdlLGNsb3NlVGV4dCxzaG93SWNvbn0gPSB0aGlzLnByb3BzO1xuICAgIGlmKGNsb3NlVGV4dCl7XG4gICAgICBjbG9zYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VJY29uID0gY2xvc2FibGU/KDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9IHN0eWxlTmFtZT17YGFsZXJ0LS1jbG9zZWB9PlxuICAgICAgICB7Y2xvc2VUZXh0fVxuICAgICAgPC9hPik6bnVsbDtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmNsb3NlZD9udWxsOihcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXtjbGFzc25hbWVzKCdhbGVydCcsYGFsZXJ0X18ke3R5cGV9YCl9PlxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9eydhbGVydC0tbWVzc2FnZSd9PnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGVOYW1lPXsnYWxlcnQtLWRlc2NyaXB0aW9uJ30+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAge2Nsb3NlSWNvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BbGVydCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWxlcnQvaW5kZXguanMiLCIvKipcbiAqIEJyZWFkY3J1bWIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCcmVhZGNydW1iJ1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2VwYXJhdG9yOiAnLydcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMubm9kZSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHNlcGFyYXRvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNydW1icztcbiAgICAgICAgY3J1bWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGVsZSwgeyBzZXBhcmF0b3IsIGtleTogaW5kZXggfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17J2JyZWFkY3J1bWInfT57Y3J1bWJzfTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWIuanMiLCIvKipcbiAqIEJyZWFkY3J1bWIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEJyZWFkY3J1bWJJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0JyZWFkY3J1bWJJdGVtJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBzZXBhcmF0b3I6Jy8nXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBocmVmOlByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLHNlcGFyYXRvciwuLi5yZXN0UHJvcHN9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJvcHMgPXtcbiAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIHN0eWxlTmFtZTonYnJlYWRjcnVtYi0tbGluaydcbiAgICB9XG5cbiAgICBsZXQgbGluaztcbiAgICBpZignaHJlZicgaW4gdGhpcy5wcm9wcyl7XG4gICAgICBsaW5rID0gPGEgey4uLmJyZWFkY3J1bWJJdGVtUHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgfWVsc2V7XG4gICAgICBsaW5rID0gPHNwYW4gey4uLmJyZWFkY3J1bWJJdGVtUHJvcHN9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgfVxuXG4gICAgaWYoY2hpbGRyZW4pe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2xpbmt9XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPXsnYnJlYWRjcnVtYi0tc2VwYXJhdG9yJ30+e3NlcGFyYXRvcn08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYkl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vQnJlYWRjcnVtYic7XG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9CcmVhZGNydW1iSXRlbSc7XG5cbkJyZWFkY3J1bWIuSXRlbSA9IEJyZWFkY3J1bWJJdGVtO1xuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4LmpzIiwiLyoqXG4gKiBCdXR0b24gQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnO1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0J1dHRvbidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICBzaXplOiAnbm9ybWFsJyxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ3ByaW1hcnknLFxuICAgICAgJ3NlY29uZGFyeScsXG4gICAgICAnb3V0bGluZScsXG4gICAgXSksXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdub3JtYWwnLFxuICAgICAgJ2xhcmdlJyxcbiAgICAgICdzbWFsbCcsXG4gICAgXSksXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdHlwZSwgc2l6ZSwgZGlzYWJsZWQsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYnRuUHJvcHMgPSB7XG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgICAgc3R5bGVOYW1lOiBgYnV0dG9uLS0ke2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6IHR5cGV9IGJ1dHRvbi0tJHtzaXplfWAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB7Li4uYnRuUHJvcHN9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCIvKipcbiAqIE1vbnRoUGlja2VyIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzLCBwcm9wVHlwZXMgfSBmcm9tICcuL3Byb3BzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIE1vbnRoUGlja2VyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ01vbnRoUGlja2VyJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBhc3NpZ24oe30sIGRlZmF1bHRQcm9wcywge1xuICAgIGZvcm1hdDogJ1lZWVktTU0nLFxuICB9KVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHByb3BUeXBlc1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBpY2tlclR5cGUsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9udGhQcm9wcyA9IHtcbiAgICAgIHBpY2tlclR5cGU6ICdtb250aCcsXG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIDxEYXRlUGlja2VyIHsuLi5tb250aFByb3BzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aFBpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL01vbnRoUGlja2VyLmpzIiwiLyoqXG4gKiBSYW5nZVBpY2tlciBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IG1vbWVudFByb3BUeXBlcyBmcm9tICdyZWFjdC1tb21lbnQtcHJvcHR5cGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlUGlja2VyLmNzcyc7XG5pbXBvcnQgUGlja2VyIGZyb20gJy4vUGlja2VyJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcywgcHJvcFR5cGVzIH0gZnJvbSAnLi9wcm9wcyc7XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywgeyBhbGxvd011bHRpcGxlIH0pXG5jbGFzcyBSYW5nZVBpY2tlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdSYW5nZVBpY2tlcidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgfSlcblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBhc3NpZ24oe30sIHByb3BUeXBlcywge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqKSxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKG1vbWVudFByb3BUeXBlcy5tb21lbnRPYmopLFxuICB9KVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlIHx8IFttb21lbnQoKSwgbW9tZW50KCldO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByYW5nZVZhbHVlOiB2YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlRGF0ZUludGVybmFsID0gKGNoYW5nZURhdGEsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByYW5nZVZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJhbmdlVmFsdWVbcG9zaXRpb25dID0gbW9tZW50KHJhbmdlVmFsdWVbcG9zaXRpb25dKS5zZXQoY2hhbmdlRGF0YSk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8g5Y+X5o6n57uE5Lu2XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHJhbmdlVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDpnZ7lj5fmjqfnu4Tku7ZcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByYW5nZVZhbHVlOiByYW5nZVZhbHVlLnNsaWNlKDApLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHJhbmdlVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUmFuZ2VQaWNrZXIgcmVyZW5kZXInKTtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBmb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByYW5nZVZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBpY2tlclByb3BzID0ge1xuICAgICAgcmFuZ2VEYXRlOiByYW5nZVZhbHVlLFxuICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgIGNoYW5nZURhdGU6IHRoaXMuY2hhbmdlRGF0ZUludGVybmFsLFxuICAgIH07XG4gICAgY29uc3QgZmllbGQgPSB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBkaXNhYmxlZCxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0RmllbGQgPSBhc3NpZ24oe30sIGZpZWxkLCB7XG4gICAgICBrZXk6ICdzdGFydERhdGUnLFxuICAgICAgdmFsdWU6IHJhbmdlVmFsdWVbMF0uZm9ybWF0KGZvcm1hdCksXG4gICAgfSk7XG4gICAgY29uc3QgZW5kRmllbGQgPSBhc3NpZ24oe30sIGZpZWxkLCB7XG4gICAgICBrZXk6ICdlbmREYXRlJyxcbiAgICAgIHZhbHVlOiByYW5nZVZhbHVlWzFdLmZvcm1hdChmb3JtYXQpLFxuICAgIH0pO1xuICAgIGNvbnN0IGlucHV0cyA9IFtcbiAgICAgIDxpbnB1dCB7Li4uc3RhcnRGaWVsZH0gLz4sXG4gICAgICA8aW5wdXQgey4uLmVuZEZpZWxkfSAvPixcbiAgICBdO1xuICAgIHJldHVybiBkaXNhYmxlZCA/IDxkaXY+e2lucHV0c308L2Rpdj4gOiAoXG4gICAgICA8UGlja2VyIHsuLi5waWNrZXJQcm9wc30+XG4gICAgICAgIHtpbnB1dHN9XG4gICAgICA8L1BpY2tlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlUGlja2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvUmFuZ2VQaWNrZXIuanMiLCJpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IE1vbnRoUGlja2VyIGZyb20gJy4vTW9udGhQaWNrZXInO1xuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gJy4vUmFuZ2VQaWNrZXInO1xuXG5EYXRlUGlja2VyLk1vbnRoUGlja2VyID0gTW9udGhQaWNrZXI7XG5EYXRlUGlja2VyLlJhbmdlUGlja2VyID0gUmFuZ2VQaWNrZXI7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9pbmRleC5qcyIsIi8qKlxuICogSWNvbiBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uLmNzcyc7XG5cbmltcG9ydCBJY29uU3ZnIGZyb20gJy4vaWNvbmZvbnQuc3ZnJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIEljb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnSWNvbidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHNpemU6IDMyLFxuICAgIGNvbG9yOiBudWxsLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YXJrLWljb25zJykpIHJldHVybjtcbiAgICBjb25zdCB3cmFwTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBOb2RlLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpub25lJztcbiAgICB3cmFwTm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1YXJrLWljb25zJyk7XG4gICAgUmVhY3RET00udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoXG4gICAgICB0aGlzLFxuICAgICAgPEljb25TdmcgLz4sXG4gICAgICB3cmFwTm9kZSxcbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHdyYXBOb2RlLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgc2l6ZSwgY29sb3IsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3ZnUHJvcHMgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogc2l6ZSxcbiAgICAgICAgZmlsbDogY29sb3IsXG4gICAgICB9LFxuICAgICAgc3R5bGVOYW1lOiAnSWNvbicsXG4gICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgLi4ub3RoZXJQcm9wcyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIHsuLi5zdmdQcm9wc30+XG4gICAgICAgIDx1c2UgeGxpbmtIcmVmPXtgIyR7bmFtZX1gfSAvPlxuICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vSWNvbi5qcyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb24nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaW5kZXguanMiLCIvKipcbiAqIE1lc3NhZ2UgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGdyb290ZmlzaFxuICovXG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVzc2FnZS5jc3MnO1xuXG5sZXQgc2VlZCA9IDA7XG5jb25zdCBub3cgPSBEYXRlLm5vdygpO1xuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcbiAgcmV0dXJuIGAke25vd31fJHtzZWVkKyt9YDtcbn1cbmZ1bmN0aW9uIG5vb3AoKSB7IH1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIE1lc3NhZ2VCb3ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ01lc3NhZ2VCb3gnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge31cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhZGQgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGtleSA9IG1lc3NhZ2Uua2V5ID0gbWVzc2FnZS5rZXkgfHwgZ2V0VXVpZCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHByZVN0YXRlLm1lc3NhZ2VzO1xuICAgICAgaWYgKCFtZXNzYWdlcy5maWx0ZXIodiA9PiB2LmtleSA9PT0ga2V5KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMuY29uY2F0KG1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSA9IChrZXkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmVTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IHByZVN0YXRlLm1lc3NhZ2VzLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2Uua2V5ICE9PSBrZXkpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IE5vZGVzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSAmJiBtZXNzYWdlLm9uQ2xvc2UoKTtcbiAgICAgICAgdGhpcy5yZW1vdmUobWVzc2FnZS5rZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWVzc2FnZSB7Li4ubWVzc2FnZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT0nbWVzc2FnZS0tYm94Jz5cbiAgICAgICAge05vZGVzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NZXNzYWdlQm94Lm5ld0luc3RhbmNlID0gZnVuY3Rpb24gKHByb3BzID0ge30pIHtcbiAgY29uc3QgeyBjb250YWluZXIsIC4uLm1zZ1Byb3BzIH0gPSBwcm9wcztcblxuICBsZXQgZGl2O1xuICBpZiAoY29udGFpbmVyKSB7XG4gICAgZGl2ID0gY29udGFpbmVyO1xuICB9IGVsc2Uge1xuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBSZWFjdERvbS5yZW5kZXIoPE1lc3NhZ2VCb3ggey4uLm1zZ1Byb3BzfT48L01lc3NhZ2VCb3g+LCBkaXYpO1xuICByZXR1cm4ge1xuICAgIGluZm8oY29udGVudCA9ICcnLCBvbkNsb3NlID0gbm9vcCwgZHVyYXRpb24gPSAxLjUpIHtcbiAgICAgIG1lc3NhZ2UuYWRkKHsgdHlwZTogJ2luZm8nLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSB9KTtcbiAgICB9LFxuICAgIHN1Y2Nlc3MoY29udGVudCA9ICcnLCBvbkNsb3NlID0gbm9vcCwgZHVyYXRpb24gPSAxLjUpIHtcbiAgICAgIG1lc3NhZ2UuYWRkKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSB9KVxuICAgIH0sXG4gICAgZXJyb3IoY29udGVudCA9ICcnLCBvbkNsb3NlID0gbm9vcCwgZHVyYXRpb24gPSAxLjUpIHtcbiAgICAgIG1lc3NhZ2UuYWRkKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UgfSk7XG4gICAgfSxcbiAgICB3YXJuaW5nKGNvbnRlbnQgPSAnJywgb25DbG9zZSA9IG5vb3AsIGR1cmF0aW9uID0gMS41KSB7XG4gICAgICBtZXNzYWdlLmFkZCh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UgfSk7XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkaXYpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21lc3NhZ2UvTWVzc2FnZUJveC5qcyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lc3NhZ2VCb3gnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguanMiLCIvKipcbiAqIE1vZGFsIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWwuY3NzJztcbmltcG9ydCByZW5kZXJUbyBmcm9tICcuLi8uLi9lbmhhbmNlci9yZW5kZXItdG8nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdxdWFyay11aS9idXR0b24nO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrJztcblxuY29uc3QgcmVuZGVyTm90aWNlTW9kYWwgPSAodHlwZSwgY29uZmlnID0ge1xuICB0aXRsZTogJycsXG4gIGNvbnRlbnQ6ICcnLFxufSkgPT4ge1xuICBjb25zdCB3cmFwTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBOb2RlKTtcbiAgY29uc3QgbW9kYWxQcm9wcyA9IHtcbiAgICB0aXRsZTogY29uZmlnLnRpdGxlIHx8IHR5cGUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjbG9zYWJsZTogZmFsc2UsXG4gICAgZm9vdGVyOiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT1cImNvbmZpcm1cIlxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHdyYXBOb2RlKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHdyYXBOb2RlKTtcbiAgICAgICAgfX1cbiAgICAgID7noa7lrpo8L0J1dHRvbj5cbiAgICApLFxuICB9O1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPE1vZGFsIHsuLi5tb2RhbFByb3BzfT5cbiAgICAgIHtjb25maWcuY29udGVudH1cbiAgICA8L01vZGFsPlxuICAsIHdyYXBOb2RlKTtcbn07XG5cbkByZW5kZXJUbygpXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdNb2RhbCdcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICB3aWR0aDogNTIwLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGZvb3RlcjogdW5kZWZpbmVkLFxuICAgIG9uT2soKSB7fSxcbiAgICBvbkNhbmNlbCgpIHt9LFxuICAgIGFmdGVyQ2xvc2UoKSB7fSxcbiAgfVxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgIF0pLFxuICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgIF0pLFxuICAgIG9uT2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBpbmZvKGNvbmZpZykge1xuICAgIHJlbmRlck5vdGljZU1vZGFsKCdpbmZvJywgY29uZmlnKTtcbiAgfVxuICBzdGF0aWMgc3VjY2Vzcyhjb25maWcpIHtcbiAgICByZW5kZXJOb3RpY2VNb2RhbCgnc3VjY2VzcycsIGNvbmZpZyk7XG4gIH1cbiAgc3RhdGljIGVycm9yKGNvbmZpZykge1xuICAgIHJlbmRlck5vdGljZU1vZGFsKCdlcnJvcicsIGNvbmZpZyk7XG4gIH1cbiAgc3RhdGljIHdhcm5pbmcoY29uZmlnKSB7XG4gICAgcmVuZGVyTm90aWNlTW9kYWwoJ3dhcm5pbmcnLCBjb25maWcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuaGFuZGxlT2sgPSB0aGlzLmhhbmRsZU9rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy52aXNpYmxlICYmIHByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnByb3BzLmFmdGVyQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPayhlKSB7XG4gICAgY29uc3QgeyBvbk9rIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbk9rKSB7XG4gICAgICBvbk9rKGUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNhbmNlbChlKSB7XG4gICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgIG9uQ2FuY2VsKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBjbG9zYWJsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoYXNIZWFkZXIgPSB0aXRsZSB8fCBjbG9zYWJsZTtcbiAgICBpZiAoaGFzSGVhZGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgeyBjbG9zYWJsZSA/XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJtb2RhbF9fY2xvc2FibGVcIlxuICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+WDwvYT5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlckZvb3RlcigpIHtcbiAgICBjb25zdCB7IGZvb3RlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZWZhdWx0Rm9vdGVyID0gW1xuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJjYW5jZWxcIlxuICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9XG4gICAgICA+XG4gICAgICAgIOWPlua2iFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJjb25maXJtXCJcbiAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9rfVxuICAgICAgPlxuICAgICAgICDnoa7lrppcbiAgICAgIDwvQnV0dG9uPixcbiAgICBdO1xuICAgIHJldHVybiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwibW9kYWxfX2Zvb3RlclwiPntkZWZhdWx0Rm9vdGVyfTwvZGl2PlxuICAgICkgOiA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsX19mb290ZXJcIj57Zm9vdGVyfTwvZGl2PjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUsIHdpZHRoLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb2RhbFByb3BzID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgd2lkdGgsXG4gICAgICB9LFxuICAgICAgc3R5bGVOYW1lOiBgbW9kYWwke3Zpc2libGUgPyAnLS12aXNpYmxlJyA6ICcnfWAsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TWFzayB2aXNpYmxlPXt2aXNpYmxlfT5cbiAgICAgICAgPGRpdiB7Li4ubW9kYWxQcm9wc30+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlckhlYWRlcigpIH1cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgeyB0aGlzLnJlbmRlckZvb3RlcigpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hc2s+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01vZGFsJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIi8qKlxuICogUGFnaW5hdGlvbiBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAncXVhcmstdWkvaWNvbic7XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywgeyBhbGxvd011bHRpcGxlIH0pXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BhZ2luYXRpb24nXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IDEsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZVNpemU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0UGFnZVNpemU6IDEwLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgc2hvd1NpemVDaGFuZ2VyOiBmYWxzZSxcbiAgICBvblNpemVDaGFuZ2UoKSB7fSxcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IFsxMCwgMjAsIDMwLCA0MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICBzaXplOiAnJyxcbiAgICBzaG93VG90YWw6IGZhbHNlLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdFBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93U2l6ZUNoYW5nZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2l6ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd1RvdGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmRlZmF1bHRDdXJyZW50LFxuICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplIHx8IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmN1cnJlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgY3VycmVudDogbmV4dFByb3BzLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMucGFnZVNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgcGFnZVNpemU6IG5leHRQcm9wcy5wYWdlU2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGdldEl0ZW1Qcm9wcyhpbmRleCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhY3RpdmUgPSBjdXJyZW50ID09PSBpbmRleDtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdwYWdpbmF0aW9uX19pdGVtJywge1xuICAgICAgICAncGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlJzogYWN0aXZlLFxuICAgICAgfSksXG4gICAgICBvbkNsaWNrOiBhY3RpdmUgPyBudWxsIDogKCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VJbmRleChpbmRleCksXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50ID4gMSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnQgLSAxKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tOZXh0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnQgPCBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbCAvIHRoaXMuc3RhdGUucGFnZVNpemUpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmN1cnJlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudDogaW5kZXgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdQYWdlU2l6ZSA9ICtlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBtYXhQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIG5ld1BhZ2VTaXplKTtcbiAgICBsZXQgbmV3Q3VycmVudDtcbiAgICBpZiAoY3VycmVudCA+IG1heFBhZ2VzKSB7XG4gICAgICBuZXdDdXJyZW50ID0gbWF4UGFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnQgPSBjdXJyZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMucGFnZVNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFnZVNpemU6IG5ld1BhZ2VTaXplLFxuICAgICAgICBjdXJyZW50OiBuZXdDdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25TaXplQ2hhbmdlKG5ld1BhZ2VTaXplLCBuZXdDdXJyZW50KTtcbiAgfVxuXG4gIGhhbmRsZUp1bXBlciA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICgvXlsxLTldK1swLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlIDw9IG1heFBhZ2UpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50LCBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGZpcnN0UGFnZSA9IDE7XG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG5cbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZDtcbiAgICBpZiAoY3VycmVudCA9PT0gZmlyc3RQYWdlKSB7XG4gICAgICBzdGFydCA9IGZpcnN0UGFnZSArIDE7XG4gICAgICBlbmQgPSBmaXJzdFBhZ2UgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gbGFzdFBhZ2UpIHtcbiAgICAgIHN0YXJ0ID0gbGFzdFBhZ2UgLSAxO1xuICAgICAgZW5kID0gbGFzdFBhZ2UgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IGN1cnJlbnQ7XG4gICAgICBlbmQgPSBjdXJyZW50O1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ID49IDNcbiAgICAgICAgfHwgKHN0YXJ0IDw9IGZpcnN0UGFnZSArIDEgJiYgZW5kID49IGxhc3RQYWdlIC0gMSlcbiAgICAgICkgYnJlYWs7XG4gICAgICBpZiAoc3RhcnQgPiBmaXJzdFBhZ2UgKyAxKSBzdGFydCAtPSAxO1xuICAgICAgaWYgKGVuZCA8IGxhc3RQYWdlIC0gMSkgZW5kICs9IDE7XG4gICAgfVxuICAgIFxuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8bGkga2V5PXtmaXJzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhmaXJzdFBhZ2UpfT57Zmlyc3RQYWdlfTwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICApO1xuICAgIGlmIChzdGFydCAhPT0gZmlyc3RQYWdlICsgMSAmJiBzdGFydCAhPT0gZmlyc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydmcm9udCd9Pi4uLjwvbGk+KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBidG5Qcm9wcyA9IHRoaXMuZ2V0SXRlbVByb3BzKGkpO1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgPGJ1dHRvbiB7Li4uYnRuUHJvcHN9PntpfTwvYnV0dG9uPlxuICAgICAgICA8L2xpPixcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChlbmQgIT09IGxhc3RQYWdlIC0gMSAmJiBlbmQgIT09IGxhc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydiYWNrJ30+Li4uPC9saT4pO1xuICAgIH1cbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGxpIGtleT17bGFzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhsYXN0UGFnZSl9PntsYXN0UGFnZX08L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgICByZXR1cm4gPHVsIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3BhZ2VzXCI+e2l0ZW1zfTwvdWw+O1xuICB9XG5cbiAgcmVuZGVyQ29udHJvbChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBjdHJsUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb25fX2N0cmwnLCBgcGFnaW5hdGlvbl9fY3RybC0tJHtkaXJlY3Rpb259YCksXG4gICAgICBvbkNsaWNrOiBkaXJlY3Rpb24gPT09ICdwcmV2JyA/IHRoaXMuaGFuZGxlQ2xpY2tQcmV2IDogdGhpcy5oYW5kbGVDbGlja05leHQsXG4gICAgfTtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGNvbnRlbnQgPSA8SWNvbiBuYW1lPVwiYXJyb3ctbGVmdFwiIHNpemU9ezEyfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIHNpemU9ezEyfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxidXR0b24gey4uLmN0cmxQcm9wc30+e2NvbnRlbnR9PC9idXR0b24+O1xuICB9XG5cbiAgcmVuZGVyU2l6ZUNoYW5nZXIoKSB7XG4gICAgY29uc3QgeyBzaG93U2l6ZUNoYW5nZXIsIHBhZ2VTaXplT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzaG93U2l6ZUNoYW5nZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3BhZ2VTaXplfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplfT5cbiAgICAgICAgICB7cGFnZVNpemVPcHRpb25zLm1hcChzaXplID0+IDxvcHRpb24ga2V5PXtzaXplfSB2YWx1ZT17c2l6ZX0+e2Ake3NpemV9IC8gcGFnZWB9PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclF1aWNrSnVtcGVyKCkge1xuICAgIGNvbnN0IHsgc2hvd1F1aWNrSnVtcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRleHRGaWVsZFByb3BzID0ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgc3R5bGVOYW1lOiAncGFnaW5hdGlvbl9fanVtcGVyRmllbGQnLFxuICAgICAgb25LZXlQcmVzczogdGhpcy5oYW5kbGVKdW1wZXIsXG4gICAgfTtcbiAgICBpZiAoc2hvd1F1aWNrSnVtcGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX19qdW1wZXJcIj5cbiAgICAgICAgICDot7Poh7MgPGlucHV0IHsuLi50ZXh0RmllbGRQcm9wc30gLz4g6aG1XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7ICBcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXJUb3RhbCgpIHtcbiAgICBjb25zdCB7IHNob3dUb3RhbCwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNob3dUb3RhbCkge1xuICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3RvdGFsXCI+e2DlhbHorqEgJHt0b3RhbH0g5p2hYH08L3NwYW4+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmluZm8oJ3JlbmRlcicpO1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB3cmFwUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb24nLCB7XG4gICAgICAgICdwYWdpbmF0aW9uLS1zbWFsbCc6IHNpemUgPT09ICdzbWFsbCcsXG4gICAgICB9KSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi53cmFwUHJvcHN9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVG90YWwoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCdwcmV2JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVySXRlbXMoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCduZXh0JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVyU2l6ZUNoYW5nZXIoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJRdWlja0p1bXBlcigpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdpbmF0aW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwiLyoqXG4gKiBUcmlnZ2VyIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSwgQUxJR05fRU5VTSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVHJpZ2dlci5jc3MnO1xuaW1wb3J0IHsgb24sIG9mZiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50JztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVHJpZ2dlcidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGlvbjogJ2hvdmVyJyxcbiAgICBwbGFjZW1lbnQ6IFsndGwnLCAnYmwnXSxcbiAgICBwb3B1cDogJycsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3ZlcicsICdjbGljayddKSxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihBcnJheS5mcm9tKEFMSUdOX0VOVU0pKSksXG4gICAgcG9wdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgIF0pLFxuICB9XG5cbiAgc3RhdGljIGdldFRhcmdldFJlY3QgPSB0YXJnZXQgPT4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXByZXZTdGF0ZS5hY3RpdmUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KHRoaXMucHJvcHMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDbG9zYWJsZSA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgdGhpcy5ub2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5wb3BOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGlja1RyaWdnZXIgPSAoZSkgPT4ge1xuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIC8vIGJpbmQgY2xvc2UgbGlzdGVuZXJcbiAgICAgICAgb24oZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgdGhpcy5jaGVja0Nsb3NhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVuYmluZCBjbG9zZSBsaXN0ZW5lclxuICAgICAgICBvZmYoZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgdGhpcy5jaGVja0Nsb3NhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5UGxhY2VtZW50KHByb3BzKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgIXRoaXMucG9wTm9kZSkgcmV0dXJuO1xuICAgIGNvbnN0IFtwb3B1cEFsaWduLCBzZWxmQWxpZ25dID0gcHJvcHMucGxhY2VtZW50O1xuICAgIGNvbnN0IHNlbGZSZWN0ID0gVHJpZ2dlci5nZXRUYXJnZXRSZWN0KHRoaXMubm9kZSk7XG4gICAgY29uc3QgcG9wdXBSZWN0ID0gVHJpZ2dlci5nZXRUYXJnZXRSZWN0KHRoaXMucG9wTm9kZSk7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IHggPSBzY3JvbGxYO1xuICAgIGxldCB5ID0gc2Nyb2xsWTtcbiAgICBzd2l0Y2ggKHNlbGZBbGlnblswXSkge1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHkgKz0gc2VsZlJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICB5ICs9IHNlbGZSZWN0LmJvdHRvbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHkgKz0gc2VsZlJlY3QudG9wICsgKHNlbGZSZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3dpdGNoIChzZWxmQWxpZ25bMV0pIHtcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgICB4ICs9IHNlbGZSZWN0LmxlZnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICAgIHggKz0gc2VsZlJlY3QucmlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4ICs9IHNlbGZSZWN0LmxlZnQgKyAoc2VsZlJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAocG9wdXBBbGlnblswXSkge1xuICAgICAgY2FzZSAndCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICB5IC09IHBvcHVwUmVjdC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHkgLT0gcG9wdXBSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHBvcHVwQWxpZ25bMV0pIHtcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgeCAtPSBwb3B1cFJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHggLT0gcG9wdXBSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9zaXRpb246IFt4LCB5XSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBvcHVwKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHVwXG4gICAgICAgIHJlZj17biA9PiAodGhpcy5wb3B1cCA9IG4pfVxuICAgICAgICBwb3B1cFJlZj17biA9PiAodGhpcy5wb3BOb2RlID0gbil9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgdmlzaWJsZT17YWN0aXZlfVxuICAgICAgPnt0aGlzLnByb3BzLnBvcHVwfTwvUG9wdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJpZ2dlclByb3BzID0ge1xuICAgICAgcmVmOiBuID0+ICh0aGlzLm5vZGUgPSBuKSxcbiAgICB9O1xuICAgIGlmIChhY3Rpb24gPT09ICdob3ZlcicpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdjbGljaycpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXsndHJpZ2dlcid9PlxuICAgICAgICA8c3BhbiB7Li4udHJpZ2dlclByb3BzfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICB7IHRoaXMucmVuZGVyUG9wdXAoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHJpZ2dlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFsZXJ0XCI6XCJfMzlrQUFGeVwiLFwiYWxlcnQtLW1lc3NhZ2VcIjpcIl8yUGxNNTdTXCIsXCJhbGVydC0tZGVzY3JpcHRpb25cIjpcIl8yV1ZHR0FEXCIsXCJhbGVydC0tY2xvc2VcIjpcIl8ybXBMLUMxXCIsXCJhbGVydF9faW5mb1wiOlwiXzJ6YnZHRWpcIixcImFsZXJ0X19zdWNjZXNzXCI6XCJfMUctaTBsbVwiLFwiYWxlcnRfX2Vycm9yXCI6XCJfMklzdFZlV1wiLFwiYWxlcnRfX3dhcm5pbmdcIjpcIl8xUkxkOXUxXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VcIjpcIkNUeTNDSGJcIixcInNtYWxsXCI6XCJfMUZOTFdYMFwiLFwibm9ybWFsXCI6XCJfMU83Sm9YblwiLFwibGFyZ2VcIjpcIl8xSllGYnFuXCIsXCJwcmltYXJ5XCI6XCJfMXJsVTVvLVwiLFwic2Vjb25kYXJ5XCI6XCJfMTZOZFlYQVwiLFwib3V0bGluZVwiOlwiXzFtd3J0MlhcIixcImRpc2FibGVkXCI6XCJfM1A2UVhWdFwiLFwiYnV0dG9uLS1wcmltYXJ5XCI6XCJfMTFLcWx1WCBDVHkzQ0hiIF8xcmxVNW8tXCIsXCJidXR0b24tLXNlY29uZGFyeVwiOlwiXzFRakNFQTEgQ1R5M0NIYiBfMTZOZFlYQVwiLFwiYnV0dG9uLS1vdXRsaW5lXCI6XCJEVTIwUlQ2IENUeTNDSGIgXzFtd3J0MlhcIixcImJ1dHRvbi0tZGlzYWJsZWRcIjpcIl8zZHFJWkV2IENUeTNDSGIgXzNQNlFYVnRcIixcImJ1dHRvbi0tbGFyZ2VcIjpcIl8zS1c2aE1wIF8xSllGYnFuXCIsXCJidXR0b24tLW5vcm1hbFwiOlwiXzNtQlZnamsgXzFPN0pvWG5cIixcImJ1dHRvbi0tc21hbGxcIjpcIl8ySFZ5UWZJIF8xRk5MV1gwXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA5IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSWNvblwiOlwiXzJqU2w1UkpcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9pY29uL0ljb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2luYXRpb25cIjpcIl8xTF8tc1QxXCIsXCJwYWdpbmF0aW9uX19jdHJsXCI6XCJfMnR2bmItbFwiLFwicGFnaW5hdGlvbl9fY3RybC0tcHJldlwiOlwiXzJ0X3NiM2lcIixcInBhZ2luYXRpb25fX2N0cmwtLW5leHRcIjpcIl8xLVB4OFJfXCIsXCJwYWdpbmF0aW9uX19wYWdlc1wiOlwiY2ZiS1U4d1wiLFwicGFnaW5hdGlvbl9faXRlbVwiOlwianNSRnM4YlwiLFwicGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlXCI6XCJfMVp5cVdCN1wiLFwicGFnaW5hdGlvbl9fdG90YWxcIjpcIl8yS1EwUGhDXCIsXCJwYWdpbmF0aW9uX19qdW1wZXJcIjpcIndCZXpQejlcIixcInBhZ2luYXRpb25fX2p1bXBlckZpZWxkXCI6XCJfMjgwbmtWV1wiLFwicGFnaW5hdGlvbi0tc21hbGxcIjpcIl8yQ25tcHlCXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQiLCIvKipcbiAqIERhdGVQYW5lIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vRGF0ZVBpY2tlci5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IG1vbWVudFByb3BUeXBlcyBmcm9tICdyZWFjdC1tb21lbnQtcHJvcHR5cGVzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIERhdGVQYW5lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RhdGVQYW5lJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0ZTogbW9tZW50KCksXG4gICAgc2hvd1llYXJQYW5lKCkge30sXG4gICAgc2hvd01vbnRoUGFuZSgpIHt9LFxuICAgIGNoYW5nZURhdGUoKSB7fSxcbiAgICBtYW5pcHVsYXRlRGF0ZSgpIHt9LFxuICAgIGRpc2FibGVkRGF0ZSgpIHt9LFxuICAgIGluUmFuZ2U6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXRlOiBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqLFxuICAgIHNob3dZZWFyUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd01vbnRoUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hhbmdlRGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbWFuaXB1bGF0ZURhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkRGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5SYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVDbGlja0RhdGUobmV4dFllYXIsIG5leHRNb250aCwgbmV4dERhdGUpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZURhdGUobmV4dFllYXIsIG5leHRNb250aCwgbmV4dERhdGUpO1xuICB9XG4gIGhhbmRsZVN1YnRyYWN0WWVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm1hbmlwdWxhdGVEYXRlKCdzdWJ0cmFjdCcsIDEsICdZJyk7XG4gIH1cbiAgaGFuZGxlU3VidHJhY3RNb250aCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm1hbmlwdWxhdGVEYXRlKCdzdWJ0cmFjdCcsIDEsICdNJyk7XG4gIH1cbiAgaGFuZGxlQWRkWWVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm1hbmlwdWxhdGVEYXRlKCdhZGQnLCAxLCAnWScpO1xuICB9XG4gIGhhbmRsZUFkZE1vbnRoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubWFuaXB1bGF0ZURhdGUoJ2FkZCcsIDEsICdNJyk7XG4gIH1cblxuICByZW5kZXJXZWVrVGl0bGUoKSB7XG4gICAgY29uc3Qgd2Vla2RheXMgPSBtb21lbnQud2Vla2RheXNNaW4oKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkYXRlUGlja2VyX3dlZWtUaXRsZVwiPlxuICAgICAgICB7XG4gICAgICAgICAgd2Vla2RheXMubWFwKHcgPT4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkYXRlUGlja2VyX193ZWVrVGl0bGVHcmlkXCIga2V5PXt3fT57d308L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGFuZUhlYWQoKSB7XG4gICAgY29uc3QgeyBkYXRlLCBzaG93WWVhclBhbmUsIHNob3dNb250aFBhbmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fZGF0ZVBhbmVIZWFkXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJ0cmFjdFllYXJ9PiYjOTY2NDs8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1YnRyYWN0TW9udGh9PiYjOTY2NDs8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93TW9udGhQYW5lfT57ZGF0ZS5mb3JtYXQoJ01NTScpfTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dZZWFyUGFuZX0+e2RhdGUuZm9ybWF0KCdZWVlZJyl9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRNb250aH0+JiM5NjU0OzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkWWVhcn0+JiM5NjU0OzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldlZWtEYXlzKCkge1xuICAgIGNvbnN0IHsgZGF0ZSwgZGlzYWJsZWREYXRlLCBpblJhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1ckRhdGUgPSBkYXRlLmRhdGUoKTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBtb21lbnQoZGF0ZSkuc3RhcnRPZignbW9udGgnKTtcbiAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG1vbWVudChkYXRlKS5lbmRPZignbW9udGgnKTtcbiAgICBjb25zdCBzdGFydCA9IGZpcnN0RGF5T2ZNb250aC53ZWVrZGF5KCk7XG4gICAgY29uc3QgbW92ZURhdGUgPSBtb21lbnQoZmlyc3REYXlPZk1vbnRoKS5zdWJ0cmFjdChzdGFydCwgJ2QnKTtcbiAgICBjb25zdCBsYXN0RGF5SW5kZXggPSBsYXN0RGF5T2ZNb250aC5kYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLm1vbnRoKCk7XG4gICAgY29uc3Qgd2Vla3MgPSBbXTtcbiAgICBsZXQgaSA9IC1zdGFydDtcbiAgICBsZXQgd2VlayA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBncmlkUHJvcHMgPSB7XG4gICAgICAgIGtleTogaSxcbiAgICAgIH07XG4gICAgICBsZXQgZGF0ZU51bTtcbiAgICAgIGNvbnN0IG1vdmVZZWFyID0gZGF0ZS55ZWFyKCk7XG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgLy8gbGFzdCBtb250aFxuICAgICAgICBkYXRlTnVtID0gbW92ZURhdGUuZGF0ZSgpO1xuICAgICAgICBhc3NpZ24oZ3JpZFByb3BzLCB7XG4gICAgICAgICAgc3R5bGVOYW1lOiAnZGF0ZVBpY2tlcl9fZGF5R3JpZCBkYXRlUGlja2VyX19kYXlHcmlkLS1sYXN0TW9udGgnLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tEYXRlLmJpbmQodGhpcywgbW92ZVllYXIsIG1vbnRoIC0gMSwgZGF0ZU51bSksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpID49IGxhc3REYXlJbmRleCkge1xuICAgICAgICAvLyBuZXh0IG1vbnRoXG4gICAgICAgIGRhdGVOdW0gPSBtb3ZlRGF0ZS5kYXRlKCk7XG4gICAgICAgIGFzc2lnbihncmlkUHJvcHMsIHtcbiAgICAgICAgICBzdHlsZU5hbWU6ICdkYXRlUGlja2VyX19kYXlHcmlkIGRhdGVQaWNrZXJfX2RheUdyaWQtLW5leHRNb250aCcsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja0RhdGUuYmluZCh0aGlzLCBtb3ZlWWVhciwgbW9udGggKyAxLCBkYXRlTnVtKSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIG1vbnRoXG4gICAgICAgIGRhdGVOdW0gPSBpICsgMTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBkaXNhYmxlZERhdGUgJiYgZGlzYWJsZWREYXRlKG1vdmVEYXRlKTtcbiAgICAgICAgYXNzaWduKGdyaWRQcm9wcywge1xuICAgICAgICAgIHN0eWxlTmFtZTogY2xhc3NuYW1lcyhcbiAgICAgICAgICAgICdkYXRlUGlja2VyX19kYXlHcmlkJyxcbiAgICAgICAgICAgICdkYXRlUGlja2VyX19kYXlHcmlkLS1jdXJNb250aCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdkYXRlUGlja2VyX19kYXlHcmlkLS1hY3RpdmUnOiBkYXRlTnVtID09PSBjdXJEYXRlLFxuICAgICAgICAgICAgICAnZGF0ZVBpY2tlcl9fZGF5R3JpZC0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgJ2RhdGVQaWNrZXJfX2RheUdyaWQtLXJhbmdlJzogaW5SYW5nZSAmJiBpblJhbmdlKG1vdmVEYXRlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKSxcbiAgICAgICAgICBvbkNsaWNrOiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLmhhbmRsZUNsaWNrRGF0ZS5iaW5kKHRoaXMsIG1vdmVZZWFyLCBtb250aCwgZGF0ZU51bSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgd2Vlay5wdXNoKDxidXR0b24gey4uLmdyaWRQcm9wc30+e2RhdGVOdW19PC9idXR0b24+KTtcbiAgICAgIGlmICh3ZWVrLmxlbmd0aCA9PT0gNykge1xuICAgICAgICB3ZWVrcy5wdXNoKHdlZWspO1xuICAgICAgICB3ZWVrID0gW107XG4gICAgICAgIGlmIChpID4gbGFzdERheUluZGV4KSBicmVhaztcbiAgICAgIH1cbiAgICAgIG1vdmVEYXRlLmFkZCgxLCAnZCcpO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgd2Vla3MubWFwKCh3LCBrKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtrfSBzdHlsZU5hbWU9XCJkYXRlUGlja2VyX193ZWVrUm93XCI+e3d9PC9kaXY+XG4gICAgICApKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fcGlja2VyIGRhdGVQaWNrZXJfX2RhdGVQYW5lXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhbmVIZWFkKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlcldlZWtUaXRsZSgpfVxuICAgICAgICB7dGhpcy5yZW5kZXJXZWVrRGF5cygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGFuZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL3BhbmVzL0RhdGVQYW5lLmpzIiwiLyoqXG4gKiBEZWNhZGVQYW5lIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgbW9tZW50UHJvcFR5cGVzIGZyb20gJ3JlYWN0LW1vbWVudC1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0RhdGVQaWNrZXIuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIERlY2FkZVBhbmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRGVjYWRlUGFuZSdcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGU6IG1vbWVudCgpLFxuICAgIGRlY2FkZVllYXI6IHVuZGVmaW5lZCxcbiAgICBjaGFuZ2VZZWFyKCkge30sXG4gICAgc2hvd1llYXJQYW5lKCkge30sXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZTogbW9tZW50UHJvcFR5cGVzLm1vbWVudE9iaixcbiAgICBkZWNhZGVZZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNoYW5nZVllYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dZZWFyUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXREZWNhZGVSYW5nZShwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXREZWNhZGVSYW5nZShuZXh0UHJvcHMpKTtcbiAgfVxuICBcbiAgZ2V0RGVjYWRlUmFuZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IGRlY2FkZVllYXIgfSA9IHByb3BzO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IE1hdGguZmxvb3IoZGVjYWRlWWVhciAvIDEwMCkgKiAxMDA7XG4gICAgY29uc3QgZW5kWWVhciA9IHN0YXJ0WWVhciArIDk5O1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydFllYXIsXG4gICAgICBlbmRZZWFyLFxuICAgICAgZGVjYWRlWWVhcixcbiAgICB9O1xuICB9XG5cbiAgb25DaGFuZ2VEZWNhZGUoc3RhcnRZZWFyKSB7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VZZWFyKHN0YXJ0WWVhcik7XG4gICAgdGhpcy5wcm9wcy5zaG93WWVhclBhbmUoKTtcbiAgfVxuXG4gIG9uSnVtcENlbnR1cnkoYmFja3dhcmQpIHtcbiAgICBjb25zdCB7IHN0YXJ0WWVhciwgZW5kWWVhciwgZGVjYWRlWWVhciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgYXNzaWduKG5ld1N0YXRlLCB7XG4gICAgICAgIHN0YXJ0WWVhcjogc3RhcnRZZWFyIC0gMTAwLFxuICAgICAgICBlbmRZZWFyOiBlbmRZZWFyIC0gMTAwLFxuICAgICAgICBkZWNhZGVZZWFyOiBkZWNhZGVZZWFyIC0gMTAwLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnbihuZXdTdGF0ZSwge1xuICAgICAgICBzdGFydFllYXI6IHN0YXJ0WWVhciArIDEwMCxcbiAgICAgICAgZW5kWWVhcjogZW5kWWVhciArIDEwMCxcbiAgICAgICAgZGVjYWRlWWVhcjogZGVjYWRlWWVhciArIDEwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVN1YnRyYWN0Q2VudHVyeSA9ICgpID0+IHtcbiAgICB0aGlzLm9uSnVtcENlbnR1cnkodHJ1ZSk7XG4gIH1cbiAgaGFuZGxlQWRkQ2VudHVyeSA9ICgpID0+IHtcbiAgICB0aGlzLm9uSnVtcENlbnR1cnkoZmFsc2UpO1xuICB9XG5cbiAgcmVuZGVyRGVjYWRlSGVhZCgpIHtcbiAgICBjb25zdCB7IGRlY2FkZVllYXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IE1hdGguZmxvb3IoZGVjYWRlWWVhciAvIDEwKSAqIDEwO1xuICAgIGNvbnN0IGN1cnJlbnREZWNhZGUgPSBbZnJvbSwgZnJvbSArIDldO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VidHJhY3RDZW50dXJ5fT4mIzk2NjQ7PC9idXR0b24+XG4gICAgICAgIDxzcGFuPntjdXJyZW50RGVjYWRlLmpvaW4oJy0nKX08L3NwYW4+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRDZW50dXJ5fT4mIzk2NTQ7PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRGVjYWRlcygpIHtcbiAgICBjb25zdCBkZWNhZGVzID0gW107XG4gICAgY29uc3QgeyBzdGFydFllYXIsIGVuZFllYXIsIGRlY2FkZVllYXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGkgPSBzdGFydFllYXIgLSAxMDtcbiAgICBmb3IgKDsgaSA8PSBlbmRZZWFyICsgMTsgaSArPSAxMCkge1xuICAgICAgY29uc3QgZGVjYWRlUHJvcHMgPSB7XG4gICAgICAgIGtleTogaSxcbiAgICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdkYXRlUGlja2VyX19kZWNhZGVHcmlkJywge1xuICAgICAgICAgICdkYXRlUGlja2VyX19kZWNhZGVHcmlkLS1qdW1wJzogaSA9PT0gc3RhcnRZZWFyIC0gMTAgfHwgaSA9PT0gZW5kWWVhciArIDEsXG4gICAgICAgICAgJ2RhdGVQaWNrZXJfX2RlY2FkZUdyaWQtLWFjdGl2ZSc6IGRlY2FkZVllYXIgPj0gaSAmJiBkZWNhZGVZZWFyIDw9IGkgKyA5LFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgICBpZiAoaSA9PT0gc3RhcnRZZWFyIC0gMTAgfHwgaSA9PT0gZW5kWWVhciArIDEpIHtcbiAgICAgICAgYXNzaWduKGRlY2FkZVByb3BzLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkp1bXBDZW50dXJ5LmJpbmQodGhpcywgaSA9PT0gc3RhcnRZZWFyIC0gMTApLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnbihkZWNhZGVQcm9wcywge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25DaGFuZ2VEZWNhZGUuYmluZCh0aGlzLCBpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZWNhZGVzLnB1c2goXG4gICAgICAgIDxidXR0b24gey4uLmRlY2FkZVByb3BzfT57W2ksIGkgKyA5XS5qb2luKCctJyl9PC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj57ZGVjYWRlc308L2Rpdj47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fcGlja2VyIGRhdGVQaWNrZXJfX2RlY2FkZVBhbmVcIj5cbiAgICAgICAgeyB0aGlzLnJlbmRlckRlY2FkZUhlYWQoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJEZWNhZGVzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNhZGVQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvcGFuZXMvRGVjYWRlUGFuZS5qcyIsIi8qKlxuICogTW9udGhQYW5lIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vRGF0ZVBpY2tlci5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IG1vbWVudFByb3BUeXBlcyBmcm9tICdyZWFjdC1tb21lbnQtcHJvcHR5cGVzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIE1vbnRoUGFuZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdNb250aFBhbmUnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlOiBtb21lbnQoKSxcbiAgICBzaG93WWVhclBhbmUoKSB7fSxcbiAgICBzaG93RGF0ZVBhbmUoKSB7fSxcbiAgICBjaGFuZ2VNb250aCgpIHt9LFxuICAgIG1hbmlwdWxhdGVEYXRlKCkge30sXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZTogbW9tZW50UHJvcFR5cGVzLm1vbWVudE9iaixcbiAgICBzaG93WWVhclBhbmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dEYXRlUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hhbmdlTW9udGg6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1hbmlwdWxhdGVEYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgfVxuXG4gIG9uQ2hhbmdlTW9udGgobW9udGgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vbnRoKG1vbnRoKTtcbiAgICB0aGlzLnByb3BzLnNob3dEYXRlUGFuZSgpO1xuICB9XG5cbiAgaGFuZGxlU3VidHJhY3RZZWFyID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubWFuaXB1bGF0ZURhdGUoJ3N1YnRyYWN0JywgMSwgJ1knKTtcbiAgfVxuICBoYW5kbGVBZGRZZWFyID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubWFuaXB1bGF0ZURhdGUoJ2FkZCcsIDEsICdZJyk7XG4gIH1cblxuICByZW5kZXJNb250aEhlYWQoKSB7XG4gICAgY29uc3QgeyBkYXRlLCBzaG93WWVhclBhbmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fbW9udGhQYW5lSGVhZFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VidHJhY3RZZWFyfT4mIzk2NjQ7PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1llYXJQYW5lfT57ZGF0ZS5mb3JtYXQoJ1lZWVknKX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFllYXJ9PiYjOTY1NDs8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb250aHMoKSB7XG4gICAgY29uc3QgbW9udGhzID0gbW9tZW50Lm1vbnRoc1Nob3J0KCk7XG4gICAgY29uc3QgY3VyTW9udGggPSB0aGlzLnByb3BzLmRhdGUuZm9ybWF0KCdNTU0nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb250aFByb3BzID0ge1xuICAgICAgICAgICAgICBrZXk6IG1vbnRoLFxuICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2hhbmdlTW9udGguYmluZCh0aGlzLCBtb250aCksXG4gICAgICAgICAgICAgIHN0eWxlTmFtZTogY2xhc3NuYW1lcygnZGF0ZVBpY2tlcl9fbW9udGhHcmlkJywge1xuICAgICAgICAgICAgICAgICdkYXRlUGlja2VyX19tb250aEdyaWQtLWFjdGl2ZSc6IG1vbnRoID09PSBjdXJNb250aCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gey4uLm1vbnRoUHJvcHN9ID57bW9udGh9PC9idXR0b24+O1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fcGlja2VyIGRhdGVQaWNrZXJfX21vbnRoUGFuZVwiPlxuICAgICAgICB7IHRoaXMucmVuZGVyTW9udGhIZWFkKCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyTW9udGhzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9wYW5lcy9Nb250aFBhbmUuanMiLCIvKipcbiAqIFllYXJQYW5lIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vRGF0ZVBpY2tlci5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IG1vbWVudFByb3BUeXBlcyBmcm9tICdyZWFjdC1tb21lbnQtcHJvcHR5cGVzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFllYXJQYW5lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1llYXJQYW5lJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0ZTogbW9tZW50KCksXG4gICAgc2hvd0RlY2FkZVBhbmUoKSB7fSxcbiAgICBzaG93TW9udGhQYW5lKCkge30sXG4gICAgY2hhbmdlWWVhcigpIHt9LFxuICAgIG1hbmlwdWxhdGVEYXRlKCkge30sXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZTogbW9tZW50UHJvcFR5cGVzLm1vbWVudE9iaixcbiAgICBzaG93RGVjYWRlUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd01vbnRoUGFuZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hhbmdlWWVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbWFuaXB1bGF0ZURhdGU6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0WWVhclJhbmdlKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRhdGUuaXNTYW1lKG5leHRQcm9wcy5kYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFllYXJSYW5nZShuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVllYXIoeWVhcikge1xuICAgIHRoaXMucHJvcHMuY2hhbmdlWWVhcih5ZWFyKTtcbiAgICB0aGlzLnByb3BzLnNob3dNb250aFBhbmUoKTtcbiAgfVxuXG4gIG9uSnVtcERlY2FkZShiYWNrd2FyZCkge1xuICAgIGNvbnN0IHsgY3VycmVudFllYXIsIHN0YXJ0WWVhciwgZW5kWWVhciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgYXNzaWduKG5ld1N0YXRlLCB7XG4gICAgICAgIGN1cnJlbnRZZWFyOiBjdXJyZW50WWVhciAtIDEwLFxuICAgICAgICBzdGFydFllYXI6IHN0YXJ0WWVhciAtIDEwLFxuICAgICAgICBlbmRZZWFyOiBlbmRZZWFyIC0gMTAsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduKG5ld1N0YXRlLCB7XG4gICAgICAgIGN1cnJlbnRZZWFyOiBjdXJyZW50WWVhciArIDEwLFxuICAgICAgICBzdGFydFllYXI6IHN0YXJ0WWVhciArIDEwLFxuICAgICAgICBlbmRZZWFyOiBlbmRZZWFyICsgMTAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICBnZXRZZWFyUmFuZ2UocHJvcHMpIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHByb3BzLmRhdGUuZ2V0KCd5ZWFyJyk7XG4gICAgY29uc3Qgc3RhcnRZZWFyID0gKE1hdGguZmxvb3IoY3VycmVudFllYXIgLyAxMCkgKiAxMCkgLSAxO1xuICAgIGNvbnN0IGVuZFllYXIgPSBzdGFydFllYXIgKyAxMTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFllYXIsXG4gICAgICBzdGFydFllYXIsXG4gICAgICBlbmRZZWFyLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdWJ0cmFjdERlY2FkZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm1hbmlwdWxhdGVEYXRlKCdzdWJ0cmFjdCcsIDEwLCAnWScpO1xuICB9XG4gIGhhbmRsZUFkZERlY2FkZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm1hbmlwdWxhdGVEYXRlKCdhZGQnLCAxMCwgJ1knKTtcbiAgfVxuXG4gIHJlbmRlclllYXJzKCkge1xuICAgIGNvbnN0IHsgY3VycmVudFllYXIsIHN0YXJ0WWVhciwgZW5kWWVhciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaSA9IHN0YXJ0WWVhcjtcbiAgICBjb25zdCB5ZWFycyA9IFtdO1xuICAgIGZvciAoaTsgaSA8PSBlbmRZZWFyOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHllYXJQcm9wcyA9IHtcbiAgICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdkYXRlUGlja2VyX195ZWFyR3JpZCcsIHtcbiAgICAgICAgICAnZGF0ZVBpY2tlcl9feWVhckdyaWQtLWFjdGl2ZSc6IGN1cnJlbnRZZWFyID09PSBpLFxuICAgICAgICAgICdkYXRlUGlja2VyX195ZWFyR3JpZC0tanVtcCc6IHN0YXJ0WWVhciA9PT0gaSB8fCBlbmRZZWFyID09PSBpLFxuICAgICAgICB9KSxcbiAgICAgICAga2V5OiBpLFxuICAgICAgfTtcbiAgICAgIGlmIChpID09PSBzdGFydFllYXIgfHwgaSA9PT0gZW5kWWVhcikge1xuICAgICAgICBhc3NpZ24oeWVhclByb3BzLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkp1bXBEZWNhZGUuYmluZCh0aGlzLCBpID09PSBzdGFydFllYXIpLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnbih5ZWFyUHJvcHMsIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2hhbmdlWWVhci5iaW5kKHRoaXMsIGkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHllYXJzLnB1c2goXG4gICAgICAgIDxidXR0b24gey4uLnllYXJQcm9wc30+e2l9PC9idXR0b24+LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+e3llYXJzfTwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJZZWFySGVhZCgpIHtcbiAgICBjb25zdCB7IHNob3dEZWNhZGVQYW5lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudFllYXIsIHN0YXJ0WWVhciwgZW5kWWVhciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkZWNhZGUgPSBbc3RhcnRZZWFyICsgMSwgZW5kWWVhciAtIDFdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImRhdGVQaWNrZXJfX3llYXJQYW5lSGVhZFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VidHJhY3REZWNhZGV9PiYjOTY2NDs8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RGVjYWRlUGFuZS5iaW5kKHRoaXMsIGN1cnJlbnRZZWFyKX0+e2RlY2FkZS5qb2luKCctJyl9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGREZWNhZGV9PiYjOTY1NDs8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGF0ZVBpY2tlcl9fcGlja2VyIGRhdGVQaWNrZXJfX3llYXJQYW5lXCI+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJZZWFySGVhZCgpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlclllYXJzKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyUGFuZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL3BhbmVzL1llYXJQYW5lLmpzIiwiLyoqXG4gKiBNZXNzYWdlIENvbXBvbmVudFxuICogQGF1dGhvciBncm9vdGZpc2hcbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lc3NhZ2UuY3NzJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnTWVzc2FnZSdcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xvc2UoKSB7fSxcbiAgICBkdXJhdGlvbjogMS41LFxuICAgIHR5cGU6ICdpbmZvJyxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydpbmZvJywgJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnd2FybmluZyddKSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uKSB7XG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gIH1cblxuICBjbGVhckNsb3NlVGltZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY2xvc2VUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e2NsYXNzbmFtZXMoJ21lc3NhZ2UnLGBtZXNzYWdlX18ke3Byb3BzLnR5cGV9YCl9PlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT17J21lc3NhZ2UtLWNvbnRlbnQnfT5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21lc3NhZ2UvTWVzc2FnZS5qcyIsIi8qKlxuICogTWFzayBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5jc3MnO1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ01vZGFsJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gIH1cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWFza1Byb3BzID0ge1xuICAgICAgc3R5bGVOYW1lOiBgbWFzayR7dmlzaWJsZSA/ICctLXZpc2libGUnIDogJyd9YCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLm1hc2tQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9tb2RhbC9NYXNrLmpzIiwiLyoqXG4gKiBQb3B1cCBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVuZGVyVG8gZnJvbSAnLi4vLi4vZW5oYW5jZXIvcmVuZGVyLXRvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UcmlnZ2VyLmNzcyc7XG5cbkByZW5kZXJUbygpXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUG9wdXAnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogWzAsIDBdLFxuICAgIHBvcHVwUmVmOiBudWxsLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBwb3B1cFJlZjogUHJvcFR5cGVzLmFueSxcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwb3B1cFJlZiwgcG9zaXRpb24sIHZpc2libGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVQb3MgPSB7XG4gICAgICBsZWZ0OiBwb3NpdGlvblswXSxcbiAgICAgIHRvcDogcG9zaXRpb25bMV0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgdmlzaWJsZSA/IDxkaXZcbiAgICAgICAgcmVmPXtwb3B1cFJlZn1cbiAgICAgICAgc3R5bGVOYW1lPXsncG9wdXAnfVxuICAgICAgICBzdHlsZT17c3R5bGVQb3N9XG4gICAgICA+e2NoaWxkcmVufTwvZGl2PiA6IG51bGxcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcyIsIi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0ge2VsZW1lbnR9IG5vZGUg57uR5a6a6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDml7bpl7TnsbvlnotcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIOe7keWumuWHveaVsFxuICovXG5jb25zdCBvbiA9IChub2RlLCB0eXBlLCBsaXN0ZW5lcikgPT4ge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG4vKipcbiAqIOenu+mZpOS6i+S7tlxuICogQHBhcmFtIHtlbGVtZW50fSBub2RlIOe7keWumuiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5pe26Ze057G75Z6LXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciDnu5Hlrprlh73mlbBcbiAqL1xuY29uc3Qgb2ZmID0gKG5vZGUsIHR5cGUsIGxpc3RlbmVyKSA9PiB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuZXhwb3J0IHsgb24sIG9mZiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9ldmVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyB7Li4udGhpcy5wcm9wc30+PHN5bWJvbCBpZD1cImFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIj48cGF0aCBkPVwiTTI4OC44NjcgMTIuNDgzYy0xNi42MDYtMTYuNjQ0LTQzLjQ5Ny0xNi42NDQtNjAuMTQ2IDAtMTYuNTY1IDE2LjY0My0xNi41NjUgNDMuOTU1IDAgNjAuNTk5TDcwNC4yOSA1MTEuNzg3IDIyOC43MiA5NTAuOTE4Yy0xNi41NjQgMTYuNjQ0LTE2LjU2NCA0My41MyAwIDYwLjYgMTYuNjUgMTYuNjQzIDQzLjU0IDE2LjY0MyA2MC4xNDcgMGw1MDYuMDg1LTQ2Ni44NzFjOC44NTItOC45NjIgMTIuNjQ1LTIwLjkxMSAxMi4wNTUtMzIuODYuNTktMTEuNTIzLTMuMjAzLTIzLjQ3Mi0xMi4wNTUtMzIuNDM0TDI4OC44NjcgMTIuNDgzelwiIC8+PC9zeW1ib2w+PHN5bWJvbCBpZD1cImFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiPjxwYXRoIGQ9XCJNNzM1LjEzMyAxMDExLjUxN2MxNi42MDcgMTYuNjQyIDQzLjQ5OCAxNi42NDMgNjAuMTQ3IDAgMTYuNTY1LTE2LjY0MyAxNi41NjUtNDMuOTU2IDAtNjAuNTk5TDMxOS43MTEgNTEyLjIxM2w0NzUuNTctNDM5LjEzMWMxNi41NjUtMTYuNjQzIDE2LjU2NS00My41MjkgMC02MC41OTktMTYuNjQ5LTE2LjY0My00My41NC0xNi42NDMtNjAuMTQ3IDBMMjI5LjA0OSA0NzkuMzU0Yy04Ljg1MiA4Ljk2Mi0xMi42NDUgMjAuOTExLTEyLjA1NSAzMi44Ni0uNTkgMTEuNTIyIDMuMjAzIDIzLjQ3MiAxMi4wNTUgMzIuNDMzbDUwNi4wODUgNDY2Ljg3MXpcIiAvPjwvc3ltYm9sPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbmZvbnQuc3ZnIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFcXVhbFwiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81M19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL3BhcnRpYWxSaWdodFwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi9idXR0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvYnV0dG9uXCJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi90cmlnZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicXVhcmstdWkvbGliL3RyaWdnZXJcIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIFFVQVJLLVVJIENvbXBvbmVudHNcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcmVhZGNydW1iIH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uLyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGF0ZVBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlUGlja2VyLyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbiB9IGZyb20gJy4vY29tcG9uZW50cy9pY29uLyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVzc2FnZSB9IGZyb20gJy4vY29tcG9uZW50cy9tZXNzYWdlLyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC8nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2luYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi8nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyaWdnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJpZ2dlci8nO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUNoRUE7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7O0FDQ0E7Ozs7OztBQ0NBOzs7Ozs7QUNDQTs7Ozs7O0FDQ0E7QUFDQTs7Ozs7O0FDREE7Ozs7OztBQ0NBOzs7Ozs7QUNDQTs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBaUJBO0FBS0E7QUF0QkE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUF6QkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTtBQVpBO0FBQ0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFpQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXpFQTtBQUtBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFnRUE7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUEwQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBMURBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEVBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBaEZBO0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFsR0E7QUFtR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQWhIQTtBQWlIQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBOUhBO0FBK0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFmQTtBQWlCQTtBQUNBO0FBaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTtBQXZCQTtBQUNBO0FBQ0E7OztBQXNCQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQTBIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTdDQTtBQStDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7Ozs7QUFoUUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBb1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFrQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7QUEzQkE7QUFDQTtBQUNBOzs7QUFvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFNQTs7OztBQXJFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBaEJBO0FBQ0E7QUFDQTtBQXVEQTs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQWhDQTtBQUtBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQWlCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBL0NBO0FBS0E7QUFEQTtBQU1BO0FBSUE7QUFMQTtBQUNBO0FBQ0E7QUF1Q0E7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBdUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQWxCQTtBQUNBO0FBQ0E7OztBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBckNBO0FBS0E7QUFDQTtBQUZBO0FBT0E7QUFLQTtBQU5BO0FBQ0E7QUFDQTtBQTRCQTs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBWEE7QUFDQTs7OztBQVRBO0FBS0E7QUFEQTtBQUNBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBO0FBYkE7QUFDQTtBQUNBOzs7QUEyQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQWxFQTtBQVNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEyREE7Ozs7Ozs7QUNyRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBWEE7QUFDQTtBQUNBOzs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUFuREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQXlDQTs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTtBQVRBO0FBQ0E7QUFDQTs7O0FBNEJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUF2REE7QUFDQTtBQUNBO0FBd0RBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvR0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFMQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUdBOzs7OztBQWdDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTs7O0FBb0JBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFIQTtBQWVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7Ozs7QUEzSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQUNBO0FBNkhBOzs7Ozs7O0FDM0xBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBbUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBekVBO0FBMkVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTtBQXZCQTtBQUNBO0FBQ0E7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBTUE7OztBQXlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7Ozs7QUF4UEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQUNBO0FBcU9BOzs7Ozs7O0FDelFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBVUE7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFoQ0E7QUFrQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXRDQTtBQXdDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBb0NBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQXpLQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQXNKQTs7Ozs7OztBQzFMQTtBQUFBO0FBQUE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUF5QkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBWkE7QUFhQTtBQUNBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTtBQUNBO0FBbkJBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBQ0E7QUFDQTs7O0FBZUE7QUFDQTtBQUNBOzs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGQTtBQVFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVkE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBbkpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBQ0E7QUFxSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFtQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNkNBO0FBQ0E7QUFDQTtBQS9DQTtBQWdEQTtBQUNBO0FBQ0E7QUFoREE7QUFGQTtBQUdBO0FBQ0E7QUFaQTtBQUNBO0FBQ0E7OztBQVdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUF0SEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUEyR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFxQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBZEE7QUFlQTtBQUNBO0FBQ0E7QUFmQTtBQUZBO0FBSUE7QUFDQTtBQWRBO0FBQ0E7QUFDQTs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUE5RUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBcUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQStDQTtBQUNBO0FBQ0E7QUFqREE7QUFrREE7QUFDQTtBQUNBO0FBbERBO0FBRkE7QUFHQTtBQUNBO0FBYkE7QUFDQTtBQUNBOzs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUE1SEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBZ0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBaUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFGQTtBQUdBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQXpEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBUkE7QUFDQTtBQUNBOzs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUE1QkE7QUFLQTtBQURBO0FBS0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBWEE7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUpBO0FBTUE7Ozs7QUFuQ0E7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7O0FDREE7Ozs7OztBQ0NBOzs7Ozs7QUNDQTs7Ozs7O0FDQ0E7Ozs7OztBQ0NBOzs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=index.js.map