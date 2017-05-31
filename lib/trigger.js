(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "object-assign", ], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("react-dom"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["object-assign"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Popup__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Trigger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Trigger_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_event__ = __webpack_require__(185);
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Trigger__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Trigger__["a"]; });


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enhancer_render_to__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Trigger_css__ = __webpack_require__(59);
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

/***/ 185:
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

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(53);
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

/***/ 53:
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

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trigger":"_3A_xDs1","trigger--wrap":"_1fJcokE","popup":"_3WT1yrT"};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZlMjg5MmIzODA5M2ZjYWFjYzk/MzY4ZioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmpzPzk3ZjEiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvaW5kZXguanM/ZjJlOCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcz84ZWQ0Iiwid2VicGFjazovLy9zcmMvdXRpbHMvZXZlbnQuanM/MGU3YiIsIndlYnBhY2s6Ly8vc3JjL2NvbnN0YW50cy5qcz9hNzc0KioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCI/MDQwNSoqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCI/NzE4ZioqKiIsIndlYnBhY2s6Ly8vc3JjL2VuaGFuY2VyL3JlbmRlci10by5qcz9hMzBhIiwid2VicGFjazovLy8uL34vLjEuMi4wQGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzPzExZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmNzcz9mNjA3Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIn0/N2E1YSoqKioiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssICwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiLCBcIm9iamVjdC1hc3NpZ25cIiwgXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJyZWFjdC1jc3MtbW9kdWxlc1wiXSwgcm9vdFtcIm9iamVjdC1hc3NpZ25cIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZmUyODkyYjM4MDkzZmNhYWNjOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCIvKipcbiAqIFRyaWdnZXIgQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlLCBBTElHTl9FTlVNIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UcmlnZ2VyLmNzcyc7XG5pbXBvcnQgeyBvbiwgb2ZmIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQnO1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgVHJpZ2dlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdUcmlnZ2VyJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWN0aW9uOiAnaG92ZXInLFxuICAgIHBsYWNlbWVudDogWyd0bCcsICdibCddLFxuICAgIG9mZnNldDogWzAsIDBdLFxuICAgIHBvcHVwOiAnJyxcbiAgICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gICAgbW91c2VMZWF2ZURlbGF5OiAxMDAsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3ZlcicsICdjbGljayddKSxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihBcnJheS5mcm9tKEFMSUdOX0VOVU0pKSksXG4gICAgb2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBwb3B1cDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgXSksXG4gICAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0aWMgZ2V0VGFyZ2V0UmVjdCA9IHRhcmdldCA9PiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBseVBsYWNlbWVudCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICghcHJldlN0YXRlLmFjdGl2ZSAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQodGhpcy5wcm9wcyk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0Nsb3NhYmxlID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMubm9kZSB8fCB0aGlzLm5vZGUuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgaWYgKHRoaXMucG9wTm9kZSAmJiAhdGhpcy5wb3BOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxlYXZlVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZXIpO1xuICAgICAgdGhpcy5sZWF2ZVRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyBtb3VzZUVudGVyRGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5lbnRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSwgbW91c2VFbnRlckRlbGF5KTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZW50ZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lcik7XG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IG1vdXNlTGVhdmVEZWxheSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSwgbW91c2VMZWF2ZURlbGF5KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrVHJpZ2dlciA9IChlKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgLy8gYmluZCBjbG9zZSBsaXN0ZW5lclxuICAgICAgICBvbihkb2N1bWVudC5ib2R5LCAnY2xpY2snLCB0aGlzLmNoZWNrQ2xvc2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdW5iaW5kIGNsb3NlIGxpc3RlbmVyXG4gICAgICAgIG9mZihkb2N1bWVudC5ib2R5LCAnY2xpY2snLCB0aGlzLmNoZWNrQ2xvc2FibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlQbGFjZW1lbnQocHJvcHMpIHtcbiAgICBpZiAoIXRoaXMubm9kZSB8fCAhdGhpcy5wb3BOb2RlKSByZXR1cm47XG4gICAgY29uc3QgW3BvcHVwQWxpZ24sIHNlbGZBbGlnbl0gPSBwcm9wcy5wbGFjZW1lbnQ7XG4gICAgY29uc3Qgc2VsZlJlY3QgPSBUcmlnZ2VyLmdldFRhcmdldFJlY3QodGhpcy5ub2RlKTtcbiAgICBjb25zdCBwb3B1cFJlY3QgPSBUcmlnZ2VyLmdldFRhcmdldFJlY3QodGhpcy5wb3BOb2RlKTtcbiAgICBjb25zdCBzY3JvbGxYID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBsZXQgeCA9IHNjcm9sbFg7XG4gICAgbGV0IHkgPSBzY3JvbGxZO1xuICAgIHN3aXRjaCAoc2VsZkFsaWduWzBdKSB7XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgeSArPSBzZWxmUmVjdC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYic6XG4gICAgICAgIHkgKz0gc2VsZlJlY3QuYm90dG9tO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgeSArPSBzZWxmUmVjdC50b3AgKyAoc2VsZlJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHNlbGZBbGlnblsxXSkge1xuICAgICAgY2FzZSAnbCc6XG4gICAgICAgIHggKz0gc2VsZlJlY3QubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgeCArPSBzZWxmUmVjdC5yaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHggKz0gc2VsZlJlY3QubGVmdCArIChzZWxmUmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3dpdGNoIChwb3B1cEFsaWduWzBdKSB7XG4gICAgICBjYXNlICd0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYic6XG4gICAgICAgIHkgLT0gcG9wdXBSZWN0LmhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgeSAtPSBwb3B1cFJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAocG9wdXBBbGlnblsxXSkge1xuICAgICAgY2FzZSAnbCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgICB4IC09IHBvcHVwUmVjdC53aWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgeCAtPSBwb3B1cFJlY3Qud2lkdGggLyAyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3NpdGlvbjogW3ggKyBvZmZzZXRbMF0sIHkgKyBvZmZzZXRbMV1dLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUG9wdXAoKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9wdXBcbiAgICAgICAgcmVmPXtuID0+ICh0aGlzLnBvcHVwID0gbil9XG4gICAgICAgIHBvcHVwUmVmPXtuID0+ICh0aGlzLnBvcE5vZGUgPSBuKX1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICB2aXNpYmxlPXthY3RpdmV9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgID57dGhpcy5wcm9wcy5wb3B1cH08L1BvcHVwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyaWdnZXJQcm9wcyA9IHtcbiAgICAgIHJlZjogbiA9PiAodGhpcy5ub2RlID0gbiksXG4gICAgICBzdHlsZU5hbWU6ICd0cmlnZ2VyLS13cmFwJyxcbiAgICB9O1xuICAgIGlmIChhY3Rpb24gPT09ICdob3ZlcicpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdjbGljaycpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXsndHJpZ2dlcid9PlxuICAgICAgICA8c3BhbiB7Li4udHJpZ2dlclByb3BzfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICB7IHRoaXMucmVuZGVyUG9wdXAoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHJpZ2dlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9pbmRleC5qcyIsIi8qKlxuICogUG9wdXAgQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbmRlclRvIGZyb20gJy4uLy4uL2VuaGFuY2VyL3JlbmRlci10byc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVHJpZ2dlci5jc3MnO1xuXG5AcmVuZGVyVG8oKVxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BvcHVwJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFswLCAwXSxcbiAgICBwb3B1cFJlZjogbnVsbCxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgcG9wdXBSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcG9wdXBSZWYsIHBvc2l0aW9uLCB2aXNpYmxlLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZVBvcyA9IHtcbiAgICAgIGxlZnQ6IHBvc2l0aW9uWzBdLFxuICAgICAgdG9wOiBwb3NpdGlvblsxXSxcbiAgICB9O1xuICAgIGNvbnN0IHdyYXBQcm9wcyA9IHtcbiAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICBzdHlsZU5hbWU6ICdwb3B1cCcsXG4gICAgICBzdHlsZTogc3R5bGVQb3MsXG4gICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmUsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgdmlzaWJsZSA/IDxkaXYgey4uLndyYXBQcm9wc30+e2NoaWxkcmVufTwvZGl2PiA6IG51bGxcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcyIsIi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0ge2VsZW1lbnR9IG5vZGUg57uR5a6a6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDml7bpl7TnsbvlnotcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIOe7keWumuWHveaVsFxuICovXG5jb25zdCBvbiA9IChub2RlLCB0eXBlLCBsaXN0ZW5lcikgPT4ge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG4vKipcbiAqIOenu+mZpOS6i+S7tlxuICogQHBhcmFtIHtlbGVtZW50fSBub2RlIOe7keWumuiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5pe26Ze057G75Z6LXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciDnu5Hlrprlh73mlbBcbiAqL1xuY29uc3Qgb2ZmID0gKG5vZGUsIHR5cGUsIGxpc3RlbmVyKSA9PiB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuZXhwb3J0IHsgb24sIG9mZiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9ldmVudC5qcyIsImV4cG9ydCBjb25zdCBhbGxvd011bHRpcGxlID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOX0VOVU0gPSBuZXcgU2V0KFtcbiAgJ3RsJyxcbiAgJ3RyJyxcbiAgJ3RjJyxcbiAgJ2JsJyxcbiAgJ2JyJyxcbiAgJ2JjJyxcbiAgJ2NsJyxcbiAgJ2NyJyxcbl0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IDEwIiwiLyoqXG4gKiBIT0MgZW5oYW5jZXJcbiAqIHJlbmRlciBDb21wb25lbnQgaW50byB0YXJnZXQgbm9kZVxuICogQGF1dGhvcjogcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVG8odGFyZ2V0ID0gZG9jdW1lbnQuYm9keSkge1xuICByZXR1cm4gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICBjbGFzcyBFbmhhbmNlZENvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLndyYXBOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLndyYXBOb2RlKTtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy53cmFwTm9kZSk7XG4gICAgICAgIHRoaXMud3JhcE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLndyYXBOb2RlKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlckNvbXBvbmVudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz4sXG4gICAgICAgICAgdGhpcy53cmFwTm9kZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWMoRW5oYW5jZWRDb21wb25lbnQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIHJldHVybiBFbmhhbmNlZENvbXBvbmVudDtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZW5oYW5jZXIvcmVuZGVyLXRvLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgY3VzdG9tU3RhdGljcykge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzR2V0T3duUHJvcGVydHlTeW1ib2xzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleXNbaV1dICYmICFLTk9XTl9TVEFUSUNTW2tleXNbaV1dICYmICghY3VzdG9tU3RhdGljcyB8fCAhY3VzdG9tU3RhdGljc1trZXlzW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb21wb25lbnRba2V5c1tpXV0gPSBzb3VyY2VDb21wb25lbnRba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuMEBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYgNyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInRyaWdnZXJcIjpcIl8zQV94RHMxXCIsXCJ0cmlnZ2VyLS13cmFwXCI6XCJfMWZKY29rRVwiLFwicG9wdXBcIjpcIl8zV1QxeXJUXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmNzc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQgNSA2IDcgOCAxMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQ2hFQTs7Ozs7OztBQ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFhQTtBQWdCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBcERBO0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBb0RBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUE1Q0E7QUFDQTtBQXVEQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFQQTtBQVNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQXBNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBMEtBOzs7Ozs7OztBQ3JOQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBc0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQWRBO0FBQ0E7QUFDQTs7O0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQTNDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7Ozs7Ozs7QUNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFpQkE7QUFLQTtBQXRCQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pEQTtBQUNBOzs7Ozs7O0FDREE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=trigger.js.map