(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, "react-css-modules", , "object-assign", ], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("react-dom"));
	else
		root["QuarkUI"] = factory(root["React"], root["react-css-modules"], root["PropTypes"], root["object-assign"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),

/***/ 11:
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

/***/ 13:
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

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trigger":"_3A_xDs1","popup":"_3WT1yrT"};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 37:
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Trigger__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Trigger__["a"]; });


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 49:
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

/***/ 50:
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

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMxMmE1MjIyNmYyNTBlYmU3Yjk2P2QyZWUqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9PzljZGIqIiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzLmpzP2E3NzQqIiwid2VicGFjazovLy9zcmMvZW5oYW5jZXIvcmVuZGVyLXRvLmpzP2EzMGEiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4yLjBAaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanM/MTFmYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuY3NzP2I3MDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIj8wNDA1KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9P2QyYWIqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1RyaWdnZXIuanM/OTdmMSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9pbmRleC5qcz9mMmU4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIj83MThmKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcz84ZWQ0Iiwid2VicGFjazovLy9zcmMvdXRpbHMvZXZlbnQuanM/MGU3YiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCJ9PzdhNWEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssIFwicmVhY3QtY3NzLW1vZHVsZXNcIiwgLCBcIm9iamVjdC1hc3NpZ25cIiwgXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJyZWFjdC1jc3MtbW9kdWxlc1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcIm9iamVjdC1hc3NpZ25cIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMxMmE1MjIyNmYyNTBlYmU3Yjk2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImV4cG9ydCBjb25zdCBhbGxvd011bHRpcGxlID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOX0VOVU0gPSBuZXcgU2V0KFtcbiAgJ3RsJyxcbiAgJ3RyJyxcbiAgJ3RjJyxcbiAgJ2JsJyxcbiAgJ2JyJyxcbiAgJ2JjJyxcbiAgJ2NsJyxcbiAgJ2NyJyxcbl0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCIvKipcbiAqIEhPQyBlbmhhbmNlclxuICogcmVuZGVyIENvbXBvbmVudCBpbnRvIHRhcmdldCBub2RlXG4gKiBAYXV0aG9yOiByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWMgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUbyh0YXJnZXQgPSBkb2N1bWVudC5ib2R5KSB7XG4gIHJldHVybiAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGNsYXNzIEVuaGFuY2VkQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMud3JhcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLndyYXBOb2RlKTtcbiAgICAgICAgdGhpcy53cmFwTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcE5vZGUpO1xuICAgICAgfVxuICAgICAgcmVuZGVyQ29tcG9uZW50KCkge1xuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPixcbiAgICAgICAgICB0aGlzLndyYXBOb2RlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpYyhFbmhhbmNlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEVuaGFuY2VkQ29tcG9uZW50O1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9lbmhhbmNlci9yZW5kZXItdG8uanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMi4wQGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1widHJpZ2dlclwiOlwiXzNBX3hEczFcIixcInBvcHVwXCI6XCJfM1dUMXlyVFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvVHJpZ2dlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLyoqXG4gKiBUcmlnZ2VyIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSwgQUxJR05fRU5VTSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVHJpZ2dlci5jc3MnO1xuaW1wb3J0IHsgb24sIG9mZiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50JztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVHJpZ2dlcidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGlvbjogJ2hvdmVyJyxcbiAgICBwbGFjZW1lbnQ6IFsndGwnLCAnYmwnXSxcbiAgICBwb3B1cDogJycsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3ZlcicsICdjbGljayddKSxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihBcnJheS5mcm9tKEFMSUdOX0VOVU0pKSksXG4gICAgcG9wdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgIF0pLFxuICB9XG5cbiAgc3RhdGljIGdldFRhcmdldFJlY3QgPSB0YXJnZXQgPT4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXByZXZTdGF0ZS5hY3RpdmUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KHRoaXMucHJvcHMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDbG9zYWJsZSA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgdGhpcy5ub2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5wb3BOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGlja1RyaWdnZXIgPSAoZSkgPT4ge1xuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIC8vIGJpbmQgY2xvc2UgbGlzdGVuZXJcbiAgICAgICAgb24oZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgdGhpcy5jaGVja0Nsb3NhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVuYmluZCBjbG9zZSBsaXN0ZW5lclxuICAgICAgICBvZmYoZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgdGhpcy5jaGVja0Nsb3NhYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5UGxhY2VtZW50KHByb3BzKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgIXRoaXMucG9wTm9kZSkgcmV0dXJuO1xuICAgIGNvbnN0IFtwb3B1cEFsaWduLCBzZWxmQWxpZ25dID0gcHJvcHMucGxhY2VtZW50O1xuICAgIGNvbnN0IHNlbGZSZWN0ID0gVHJpZ2dlci5nZXRUYXJnZXRSZWN0KHRoaXMubm9kZSk7XG4gICAgY29uc3QgcG9wdXBSZWN0ID0gVHJpZ2dlci5nZXRUYXJnZXRSZWN0KHRoaXMucG9wTm9kZSk7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IHggPSBzY3JvbGxYO1xuICAgIGxldCB5ID0gc2Nyb2xsWTtcbiAgICBzd2l0Y2ggKHNlbGZBbGlnblswXSkge1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHkgKz0gc2VsZlJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICB5ICs9IHNlbGZSZWN0LmJvdHRvbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHkgKz0gc2VsZlJlY3QudG9wICsgKHNlbGZSZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3dpdGNoIChzZWxmQWxpZ25bMV0pIHtcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgICB4ICs9IHNlbGZSZWN0LmxlZnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICAgIHggKz0gc2VsZlJlY3QucmlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB4ICs9IHNlbGZSZWN0LmxlZnQgKyAoc2VsZlJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAocG9wdXBBbGlnblswXSkge1xuICAgICAgY2FzZSAndCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICB5IC09IHBvcHVwUmVjdC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHkgLT0gcG9wdXBSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHBvcHVwQWxpZ25bMV0pIHtcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgeCAtPSBwb3B1cFJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHggLT0gcG9wdXBSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9zaXRpb246IFt4LCB5XSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBvcHVwKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHVwXG4gICAgICAgIHJlZj17biA9PiAodGhpcy5wb3B1cCA9IG4pfVxuICAgICAgICBwb3B1cFJlZj17biA9PiAodGhpcy5wb3BOb2RlID0gbil9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgdmlzaWJsZT17YWN0aXZlfVxuICAgICAgPnt0aGlzLnByb3BzLnBvcHVwfTwvUG9wdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJpZ2dlclByb3BzID0ge1xuICAgICAgcmVmOiBuID0+ICh0aGlzLm5vZGUgPSBuKSxcbiAgICB9O1xuICAgIGlmIChhY3Rpb24gPT09ICdob3ZlcicpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdjbGljaycpIHtcbiAgICAgIGFzc2lnbih0cmlnZ2VyUHJvcHMsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1RyaWdnZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXsndHJpZ2dlcid9PlxuICAgICAgICA8c3BhbiB7Li4udHJpZ2dlclByb3BzfT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICB7IHRoaXMucmVuZGVyUG9wdXAoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9UcmlnZ2VyLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHJpZ2dlcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiLyoqXG4gKiBQb3B1cCBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVuZGVyVG8gZnJvbSAnLi4vLi4vZW5oYW5jZXIvcmVuZGVyLXRvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UcmlnZ2VyLmNzcyc7XG5cbkByZW5kZXJUbygpXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUG9wdXAnXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogWzAsIDBdLFxuICAgIHBvcHVwUmVmOiBudWxsLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBwb3B1cFJlZjogUHJvcFR5cGVzLmFueSxcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwb3B1cFJlZiwgcG9zaXRpb24sIHZpc2libGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVQb3MgPSB7XG4gICAgICBsZWZ0OiBwb3NpdGlvblswXSxcbiAgICAgIHRvcDogcG9zaXRpb25bMV0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgdmlzaWJsZSA/IDxkaXZcbiAgICAgICAgcmVmPXtwb3B1cFJlZn1cbiAgICAgICAgc3R5bGVOYW1lPXsncG9wdXAnfVxuICAgICAgICBzdHlsZT17c3R5bGVQb3N9XG4gICAgICA+e2NoaWxkcmVufTwvZGl2PiA6IG51bGxcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9Qb3B1cC5qcyIsIi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0ge2VsZW1lbnR9IG5vZGUg57uR5a6a6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDml7bpl7TnsbvlnotcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIOe7keWumuWHveaVsFxuICovXG5jb25zdCBvbiA9IChub2RlLCB0eXBlLCBsaXN0ZW5lcikgPT4ge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG4vKipcbiAqIOenu+mZpOS6i+S7tlxuICogQHBhcmFtIHtlbGVtZW50fSBub2RlIOe7keWumuiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5pe26Ze057G75Z6LXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciDnu5Hlrprlh73mlbBcbiAqL1xuY29uc3Qgb2ZmID0gKG5vZGUsIHR5cGUsIGxpc3RlbmVyKSA9PiB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuZXhwb3J0IHsgb24sIG9mZiB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9ldmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNSA2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBOzs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBaUJBO0FBS0E7QUF0QkE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUF6QkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7O0FDQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQVVBO0FBWUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBaENBO0FBa0NBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF0Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQW9DQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7Ozs7QUF6S0E7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFzSkE7Ozs7Ozs7O0FDMUxBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQWlCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBSkE7QUFNQTs7OztBQW5DQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=trigger.js.map