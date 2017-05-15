(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "object-assign", ], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("react-dom"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["object-assign"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 141);
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Popup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Trigger_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_event__ = __webpack_require__(203);
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
      if (_this.popNode && !_this.popNode.contains(e.target)) {
        _this.handleClickTrigger();
      }
    };

    _this.handleMouseEnter = function () {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }
      var mouseEnterDelay = _this.props.mouseEnterDelay;

      _this.enterTimer = setTimeout(function () {
        _this.setState({
          active: true
        });
      }, mouseEnterDelay);
    };

    _this.handleMouseLeave = function () {
      if (_this.enterTimer) {
        clearTimeout(_this.enterTimer);
        _this.enterTimer = null;
      }
      var mouseLeaveDelay = _this.props.mouseLeaveDelay;

      _this.leaveTimer = setTimeout(function () {
        _this.setState({
          active: false
        });
      }, mouseLeaveDelay);
    };

    _this.handleClickTrigger = function (e) {
      if (e) {
        e.preventDefault();
      }
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
      var offset = this.props.offset;

      this.setState({
        position: [x + offset[0], y + offset[1]]
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
          visible: active,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
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
        },
        styleName: 'trigger--wrap'
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
  offset: [0, 0],
  popup: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 100
}, _class2.propTypes = {
  action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover', 'click']),
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(Array.from(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ALIGN_ENUM */]))),
  offset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  popup: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]),
  mouseEnterDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  mouseLeaveDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.isRequired
}, _class2.getTargetRect = function (target) {
  return target.getBoundingClientRect();
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Trigger);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Trigger__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Trigger__["a"]; });


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enhancer_render_to__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Trigger_css__ = __webpack_require__(76);
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
          visible = _props.visible,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave;

      var stylePos = {
        left: position[0],
        top: position[1]
      };
      var wrapProps = {
        ref: popupRef,
        styleName: 'popup',
        style: stylePos,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      };
      return visible ? React.createElement(
        'div',
        wrapProps,
        children
      ) : null;
    }
  }]);

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Popup', _class2.defaultProps = {
  position: [0, 0],
  popupRef: null,
  visible: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
}, _class2.propTypes = {
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  popupRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.isRequired
}, _temp)) || _class) || _class);


/***/ }),

/***/ 203:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(70);
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

/***/ 70:
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

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trigger":"_3A_xDs1","trigger--wrap":"_1fJcokE","popup":"_3WT1yrT"};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDgxNGJhNThhNWMxZWMzMzU4Yzc3Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvVHJpZ2dlci5qcz85N2YxIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2luZGV4LmpzP2YyZTgiLCJ3ZWJwYWNrOi8vL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvUG9wdXAuanM/OGVkNCIsIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2V2ZW50LmpzPzBlN2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCI/NzE4ZioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwifT83YTVhKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9lbmhhbmNlci9yZW5kZXItdG8uanM/YTMwYSIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuMEBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcz8xMWZjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvVHJpZ2dlci5jc3M/YjcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsIFwib2JqZWN0LWFzc2lnblwiLCBdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcInJlYWN0LWNzcy1tb2R1bGVzXCJdLCByb290W1wib2JqZWN0LWFzc2lnblwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxNGJhNThhNWMxZWMzMzU4Yzc3IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIi8qKlxuICogVHJpZ2dlciBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUsIEFMSUdOX0VOVU0gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RyaWdnZXIuY3NzJztcbmltcG9ydCB7IG9uLCBvZmYgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudCc7XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywgeyBhbGxvd011bHRpcGxlIH0pXG5jbGFzcyBUcmlnZ2VyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1RyaWdnZXInXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY3Rpb246ICdob3ZlcicsXG4gICAgcGxhY2VtZW50OiBbJ3RsJywgJ2JsJ10sXG4gICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgcG9wdXA6ICcnLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgICBtb3VzZUxlYXZlRGVsYXk6IDEwMCxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvdmVyJywgJ2NsaWNrJ10pLFxuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKEFycmF5LmZyb20oQUxJR05fRU5VTSkpKSxcbiAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIHBvcHVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYXJnZXRSZWN0ID0gdGFyZ2V0ID0+IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGx5UGxhY2VtZW50KHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKCFwcmV2U3RhdGUuYWN0aXZlICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hcHBseVBsYWNlbWVudCh0aGlzLnByb3BzKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ2xvc2FibGUgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5ub2RlIHx8IHRoaXMubm9kZS5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5wb3BOb2RlICYmICF0aGlzLnBvcE5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNsaWNrVHJpZ2dlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGVhdmVUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubGVhdmVUaW1lcik7XG4gICAgICB0aGlzLmxlYXZlVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IG1vdXNlRW50ZXJEZWxheSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LCBtb3VzZUVudGVyRGVsYXkpO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5lbnRlclRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVyKTtcbiAgICAgIHRoaXMuZW50ZXJUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgbW91c2VMZWF2ZURlbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMubGVhdmVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9LCBtb3VzZUxlYXZlRGVsYXkpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tUcmlnZ2VyID0gKGUpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAvLyBiaW5kIGNsb3NlIGxpc3RlbmVyXG4gICAgICAgIG9uKGRvY3VtZW50LmJvZHksICdjbGljaycsIHRoaXMuY2hlY2tDbG9zYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1bmJpbmQgY2xvc2UgbGlzdGVuZXJcbiAgICAgICAgb2ZmKGRvY3VtZW50LmJvZHksICdjbGljaycsIHRoaXMuY2hlY2tDbG9zYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVBsYWNlbWVudChwcm9wcykge1xuICAgIGlmICghdGhpcy5ub2RlIHx8ICF0aGlzLnBvcE5vZGUpIHJldHVybjtcbiAgICBjb25zdCBbcG9wdXBBbGlnbiwgc2VsZkFsaWduXSA9IHByb3BzLnBsYWNlbWVudDtcbiAgICBjb25zdCBzZWxmUmVjdCA9IFRyaWdnZXIuZ2V0VGFyZ2V0UmVjdCh0aGlzLm5vZGUpO1xuICAgIGNvbnN0IHBvcHVwUmVjdCA9IFRyaWdnZXIuZ2V0VGFyZ2V0UmVjdCh0aGlzLnBvcE5vZGUpO1xuICAgIGNvbnN0IHNjcm9sbFggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGxldCB4ID0gc2Nyb2xsWDtcbiAgICBsZXQgeSA9IHNjcm9sbFk7XG4gICAgc3dpdGNoIChzZWxmQWxpZ25bMF0pIHtcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgICB5ICs9IHNlbGZSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgeSArPSBzZWxmUmVjdC5ib3R0b207XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB5ICs9IHNlbGZSZWN0LnRvcCArIChzZWxmUmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAoc2VsZkFsaWduWzFdKSB7XG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgeCArPSBzZWxmUmVjdC5sZWZ0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgICB4ICs9IHNlbGZSZWN0LnJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgeCArPSBzZWxmUmVjdC5sZWZ0ICsgKHNlbGZSZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHBvcHVwQWxpZ25bMF0pIHtcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgeSAtPSBwb3B1cFJlY3QuaGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICB5IC09IHBvcHVwUmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3dpdGNoIChwb3B1cEFsaWduWzFdKSB7XG4gICAgICBjYXNlICdsJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICAgIHggLT0gcG9wdXBSZWN0LndpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICB4IC09IHBvcHVwUmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBvc2l0aW9uOiBbeCArIG9mZnNldFswXSwgeSArIG9mZnNldFsxXV0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJQb3B1cCgpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3B1cFxuICAgICAgICByZWY9e24gPT4gKHRoaXMucG9wdXAgPSBuKX1cbiAgICAgICAgcG9wdXBSZWY9e24gPT4gKHRoaXMucG9wTm9kZSA9IG4pfVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIHZpc2libGU9e2FjdGl2ZX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgPnt0aGlzLnByb3BzLnBvcHVwfTwvUG9wdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJpZ2dlclByb3BzID0ge1xuICAgICAgcmVmOiBuID0+ICh0aGlzLm5vZGUgPSBuKSxcbiAgICAgIHN0eWxlTmFtZTogJ3RyaWdnZXItLXdyYXAnLFxuICAgIH07XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2hvdmVyJykge1xuICAgICAgYXNzaWduKHRyaWdnZXJQcm9wcywge1xuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2NsaWNrJykge1xuICAgICAgYXNzaWduKHRyaWdnZXJQcm9wcywge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrVHJpZ2dlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9eyd0cmlnZ2VyJ30+XG4gICAgICAgIDxzcGFuIHsuLi50cmlnZ2VyUHJvcHN9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJQb3B1cCgpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UcmlnZ2VyJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90cmlnZ2VyL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGFsbG93TXVsdGlwbGUgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgQUxJR05fRU5VTSA9IG5ldyBTZXQoW1xuICAndGwnLFxuICAndHInLFxuICAndGMnLFxuICAnYmwnLFxuICAnYnInLFxuICAnYmMnLFxuICAnY2wnLFxuICAnY3InLFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy5qcyIsIi8qKlxuICogUG9wdXAgQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbmRlclRvIGZyb20gJy4uLy4uL2VuaGFuY2VyL3JlbmRlci10byc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVHJpZ2dlci5jc3MnO1xuXG5AcmVuZGVyVG8oKVxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BvcHVwJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFswLCAwXSxcbiAgICBwb3B1cFJlZjogbnVsbCxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgcG9wdXBSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcG9wdXBSZWYsIHBvc2l0aW9uLCB2aXNpYmxlLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZVBvcyA9IHtcbiAgICAgIGxlZnQ6IHBvc2l0aW9uWzBdLFxuICAgICAgdG9wOiBwb3NpdGlvblsxXSxcbiAgICB9O1xuICAgIGNvbnN0IHdyYXBQcm9wcyA9IHtcbiAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICBzdHlsZU5hbWU6ICdwb3B1cCcsXG4gICAgICBzdHlsZTogc3R5bGVQb3MsXG4gICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgdmlzaWJsZSA/IDxkaXYgey4uLndyYXBQcm9wc30+e2NoaWxkcmVufTwvZGl2PiA6IG51bGxcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcyIsIi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0ge2VsZW1lbnR9IG5vZGUg57uR5a6a6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDml7bpl7TnsbvlnotcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIOe7keWumuWHveaVsFxuICovXG5jb25zdCBvbiA9IChub2RlLCB0eXBlLCBsaXN0ZW5lcikgPT4ge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG4vKipcbiAqIOenu+mZpOS6i+S7tlxuICogQHBhcmFtIHtlbGVtZW50fSBub2RlIOe7keWumuiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5pe26Ze057G75Z6LXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciDnu5Hlrprlh73mlbBcbiAqL1xuY29uc3Qgb2ZmID0gKG5vZGUsIHR5cGUsIGxpc3RlbmVyKSA9PiB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuZXhwb3J0IHsgb24sIG9mZiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9ldmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNyA5IDExIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggMTAgMTIiLCIvKipcbiAqIEhPQyBlbmhhbmNlclxuICogcmVuZGVyIENvbXBvbmVudCBpbnRvIHRhcmdldCBub2RlXG4gKiBAYXV0aG9yOiByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWMgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUbyh0YXJnZXQgPSBkb2N1bWVudC5ib2R5KSB7XG4gIHJldHVybiAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGNsYXNzIEVuaGFuY2VkQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMud3JhcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLndyYXBOb2RlKTtcbiAgICAgICAgdGhpcy53cmFwTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgcmVuZGVyQ29tcG9uZW50KCkge1xuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPixcbiAgICAgICAgICB0aGlzLndyYXBOb2RlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpYyhFbmhhbmNlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEVuaGFuY2VkQ29tcG9uZW50O1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9lbmhhbmNlci9yZW5kZXItdG8uanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMi4wQGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyAxMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInRyaWdnZXJcIjpcIl8zQV94RHMxXCIsXCJ0cmlnZ2VyLS13cmFwXCI6XCJfMWZKY29rRVwiLFwicG9wdXBcIjpcIl8zV1QxeXJUXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7Ozs7Ozs7QUNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUE7QUFnQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXBEQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQW9EQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBNUNBO0FBQ0E7QUF1REE7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBUEE7QUFTQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7Ozs7QUFwTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQTBLQTs7Ozs7Ozs7QUNyTkE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBc0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQWRBO0FBQ0E7QUFDQTs7O0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQTNDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBOzs7Ozs7O0FDQ0E7Ozs7Ozs7QUNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFpQkE7QUFLQTtBQXRCQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=trigger.js.map