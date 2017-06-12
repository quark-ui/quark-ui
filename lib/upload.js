(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("classnames"), require("object-assign"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "classnames", "object-assign", ], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("classnames"), require("object-assign"), require("react-dom"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["classnames"], root["object-assign"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 215);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

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

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(80)
  , toPrimitive    = __webpack_require__(66)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(81)
  , defined = __webpack_require__(57);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(7) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(64)('wks')
  , uid        = __webpack_require__(27)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(11)
  , ctx       = __webpack_require__(88)
  , hide      = __webpack_require__(12)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(90);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(126);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(84)
  , enumBugKeys = __webpack_require__(58);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons__ = __webpack_require__(30);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Icon Component
 * @author ryan.bian
 */







var Icon = (_temp = _class = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          size = _props.size,
          color = _props.color,
          className = _props.className,
          otherProps = _objectWithoutProperties(_props, ['name', 'size', 'color', 'className']);

      var svgProps = _extends({
        style: {
          fontSize: size,
          fill: color
        },
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, __WEBPACK_IMPORTED_MODULE_3__Icon_css___default.a.Icon),
        'aria-hidden': true
      }, otherProps);
      var IconNode = __WEBPACK_IMPORTED_MODULE_4__icons__["a" /* default */][name];
      return React.createElement(IconNode, svgProps);
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class.displayName = 'Icon', _class.defaultProps = {
  name: '',
  size: 32,
  color: null
}, _class.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
}, _temp);


/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Icon":"_2jSl5RJ"};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_svg__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrow_left_svg__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_right_svg__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attachment_svg__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caution_svg__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_svg__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__close_svg__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__double_arrow_left_svg__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__double_arrow_right_svg__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ellipsis_svg__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_svg__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fail_svg__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__finance_svg__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_svg__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_svg__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__paper_svg__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__plus_svg__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question_svg__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__question2_svg__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__recycle_svg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_svg__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__setting_svg__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__success_svg__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__upload_svg__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__visible_svg__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__warning_svg__ = __webpack_require__(56);



























var ICONS = {
  account: __WEBPACK_IMPORTED_MODULE_0__account_svg__["a" /* default */],
  'arrow-left': __WEBPACK_IMPORTED_MODULE_1__arrow_left_svg__["a" /* default */],
  'arrow-right': __WEBPACK_IMPORTED_MODULE_2__arrow_right_svg__["a" /* default */],
  attachment: __WEBPACK_IMPORTED_MODULE_3__attachment_svg__["a" /* default */],
  caution: __WEBPACK_IMPORTED_MODULE_4__caution_svg__["a" /* default */],
  check: __WEBPACK_IMPORTED_MODULE_5__check_svg__["a" /* default */],
  close: __WEBPACK_IMPORTED_MODULE_6__close_svg__["a" /* default */],
  'double-arrow-left': __WEBPACK_IMPORTED_MODULE_7__double_arrow_left_svg__["a" /* default */],
  'double-arrow-right': __WEBPACK_IMPORTED_MODULE_8__double_arrow_right_svg__["a" /* default */],
  ellipsis: __WEBPACK_IMPORTED_MODULE_9__ellipsis_svg__["a" /* default */],
  error: __WEBPACK_IMPORTED_MODULE_10__error_svg__["a" /* default */],
  fail: __WEBPACK_IMPORTED_MODULE_11__fail_svg__["a" /* default */],
  finance: __WEBPACK_IMPORTED_MODULE_12__finance_svg__["a" /* default */],
  home: __WEBPACK_IMPORTED_MODULE_13__home_svg__["a" /* default */],
  info: __WEBPACK_IMPORTED_MODULE_14__info_svg__["a" /* default */],
  paper: __WEBPACK_IMPORTED_MODULE_15__paper_svg__["a" /* default */],
  plus: __WEBPACK_IMPORTED_MODULE_16__plus_svg__["a" /* default */],
  question: __WEBPACK_IMPORTED_MODULE_17__question_svg__["a" /* default */],
  question2: __WEBPACK_IMPORTED_MODULE_18__question2_svg__["a" /* default */],
  recycle: __WEBPACK_IMPORTED_MODULE_19__recycle_svg__["a" /* default */],
  search: __WEBPACK_IMPORTED_MODULE_20__search_svg__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_21__setting_svg__["a" /* default */],
  success: __WEBPACK_IMPORTED_MODULE_22__success_svg__["a" /* default */],
  upload: __WEBPACK_IMPORTED_MODULE_23__upload_svg__["a" /* default */],
  visible: __WEBPACK_IMPORTED_MODULE_24__visible_svg__["a" /* default */],
  warning: __WEBPACK_IMPORTED_MODULE_25__warning_svg__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (ICONS);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1025 1024", xmlns: "http://www.w3.org/2000/svg", width: "200.195", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M615.372 595.166a24.383 24.383 0 0 1-20.888-25.15c.853-20.632 6.565-32.312 19.183-47.402 5.797-6.99 7.332-9.378 8.525-13.385 1.45-4.689 2.046-9.804 2.643-22.592 1.194-23.19 2.814-34.017 9.72-46.976 6.052-11.424 12.958-16.625 26.002-23.53a41.946 41.946 0 0 0 5.968-3.41c3.666-5.116 7.673-17.648 9.975-30.522 4.945-27.793 5.115-48.595-1.023-61.64a276.738 276.738 0 0 0-6.31-11.68 66.755 66.755 0 0 1-7.416-25.917 309.476 309.476 0 0 1 1.705-50.3l1.023-11.936 2.046-22.508a264.973 264.973 0 0 0 .256-45.867 275.374 275.374 0 0 0-6.394-30.521 99.067 99.067 0 0 0-7.588-16.796 50.983 50.983 0 0 0-5.286-7.758l-25.065-4.433-12.532-6.394-15.517-15.346c-53.54-33.59-104.182-27.026-185.004 6.48-59.337 19.778-84.061 80.65-60.36 195.745a62.748 62.748 0 0 1-7.673 45.526l-3.24 6.224.426 4.945 1.45 20.802c.596 8.526 1.364 15.943 2.302 22.934 3.24 24.383 8.866 40.07 13.214 42.883-1.96-1.193 2.131 0 4.263.597l3.07.682a23.275 23.275 0 0 1 24.723 22.166l3.41 37.257c2.132 22.337 2.132 22.337 2.899 38.79.852 2.473 2.046 4.093 6.053 8.612 12.533 13.896 18.5 24.127 21.484 41.263a24.298 24.298 0 0 1-18.159 27.793l-8.355 2.046c-3.751 8.27-6.82 14.92-10.23 21.485-11.51 23.104-22.082 38.79-34.955 47.913l-7.588 3.58-14.75 4.178-24.297 6.565c-21.314 8.952-43.31 18.5-76.73 33.25l-5.541 2.387c-50.13 22.08-52.006 22.933-69.995 30.692-8.014 3.41-15.772 6.394-27.793 10.656l-5.797 2.047c-45.27 16.113-60.36 25.661-66.158 39.217 0 11.936-.17 18.245-1.194 62.407l-.511 21.57c-.341 19.352-.597 35.124-.682 48.169l21.825 3.836c32.994 5.627 69.739 11.254 109.382 16.54 113.134 15.09 226.268 24.127 331.643 24.127a2548.277 2548.277 0 0 0 331.643-24.127 2989.558 2989.558 0 0 0 131.207-20.462c0-12.959-.34-28.73-.682-48.084l-.511-21.313c-1.023-44.248-1.194-50.727.085-54.905-7.161-21.314-22.166-30.947-67.522-46.975l-5.797-2.047a434.801 434.801 0 0 1-27.708-10.656c-17.904-7.759-16.88-7.332-69.91-30.692l-6.138-2.643c-32.908-14.494-54.99-24.042-73.32-31.97l-21.057-5.883-6.139-1.706-14.749-4.177-7.502-3.58c-12.96-9.123-23.445-24.725-35.125-47.914a584.595 584.595 0 0 1-9.549-20.12l-13.385-1.961zm46.72-544.78l8.184 3.069a71.614 71.614 0 0 1 24.895 27.537c5.541 9.72 9.378 19.012 11.935 27.538 5.627 23.019 6.82 28.56 8.014 37.768 1.28 10.23 1.45 19.353 1.024 40.07 0 3.41-.427 8.184-1.109 16.113l-2.046 22.593-1.023 11.51c-1.705 20.972-2.387 35.465-1.705 41.177a19.523 19.523 0 0 0 2.046 8.44 235.304 235.304 0 0 1 7.332 13.727c11.595 24.894 11.424 53.71 4.86 90.797-3.41 19.267-9.379 37.512-17.99 49.874-5.967 8.525-11.594 12.532-22.848 18.415a32.567 32.567 0 0 0-5.968 3.41c-2.387 4.519-3.41 10.657-4.177 25.832-.853 17.734-1.705 25.406-4.774 35.381a75.28 75.28 0 0 1-16.028 28.135c6.564 2.046 11.935 6.82 14.92 13.044 6.308 14.152 10.145 22.422 14.237 30.606 6.82 13.47 12.959 23.275 17.307 27.879l9.634 2.728 6.223 1.705 23.872 6.82c21.484 9.123 43.736 18.756 76.985 33.335l5.968 2.728c52.943 23.275 52.006 22.849 69.739 30.522a393.026 393.026 0 0 0 30.436 11.51c58.911 20.887 83.806 36.744 98.725 85.084 0 11.339.086 17.903 1.109 61.64l.511 21.313c.682 30.948.853 52.944.512 69.91a24.383 24.383 0 0 1-19.609 23.36 3037.983 3037.983 0 0 1-153.715 24.553c-115.095 15.346-230.19 24.553-338.037 24.553-107.762 0-222.942-9.207-338.037-24.553a3037.642 3037.642 0 0 1-153.8-24.554A24.383 24.383 0 0 1 .085 950.51c-.256-16.88 0-38.876.597-69.824l.512-21.655c1.023-43.48 1.108-50.045 2.387-69.056 13.64-40.497 38.45-56.44 97.276-77.327l5.797-2.046c11.083-3.922 17.99-6.565 24.724-9.463 17.904-7.673 19.865-8.526 69.824-30.522l5.457-2.472c33.76-14.835 55.927-24.468 80.48-34.528l27.112-7.588 9.633-2.728c4.263-4.604 10.572-14.494 17.307-27.879 4.092-8.184 7.929-16.454 14.238-30.521a24.298 24.298 0 0 1 7.076-9.037 67.01 67.01 0 0 1-15.857-29.413l-4.093-44.76-1.79-19.267a45.27 45.27 0 0 1-11.339-4.774c-21.058-13.47-30.35-39.388-35.466-77.582a467.369 467.369 0 0 1-2.558-25.577l-1.45-21.143-.51-6.224a39.729 39.729 0 0 1 1.449-14.408c1.534-5.542.682-3.751 7.332-16.54 3.41-6.308 3.921-8.866 3.069-13.129-28.22-137.005 6.82-223.113 91.052-251.076 92.673-38.45 156.7-46.89 231.894.938l13.897 13.214 23.957 4.263z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M230.935 512L742.429.506l51.142 51.142L333.219 512l460.352 460.352-51.142 51.142L230.935 512z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M793.065 512l-51.142 51.142-460.352 460.352-51.142-51.142L690.78 512 230.43 51.648 281.57.506l460.352 460.352L793.065 512z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "13", height: "13", viewBox: "0 0 13 13" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.859 2.974c-.306.306-.57.568-1.017 1.01-1.924 1.9-2.42 2.431-2.818 3.107-.548.93-.432 1.722.36 2.495 1.45 1.414 2.286.913 5.686-2.522.382-.386.598-.604.852-.857 1.742-1.743 2.15-3.44.348-5.133-1.422-1.336-3.176-1.206-5.095.301-1.365 1.36-1.365 1.36-2.845 2.84C.11 7.435 0 9.842 2.212 11.793c2.221 1.96 4.781 1.487 8.638-2.37a.5.5 0 1 0-.708-.707c-3.52 3.52-5.5 3.887-7.269 2.327-1.75-1.545-1.671-3.285 1.164-6.12l2.8-2.8c1.519-1.19 2.728-1.28 3.748-.321 1.288 1.21 1.026 2.3-.37 3.697-.255.255-.473.473-.856.86-2.944 2.976-3.474 3.293-4.277 2.51-.466-.455-.508-.743-.197-1.272.332-.564.826-1.09 2.66-2.903.448-.442.714-.706 1.02-1.013a.5.5 0 1 0-.706-.708z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 0C229.235 0 0 229.235 0 512s229.235 512 512 512 512-229.235 512-512S794.765 0 512 0zm0 934.4C278.72 934.4 89.6 745.28 89.6 512 89.6 278.72 278.72 89.6 512 89.6S934.4 278.72 934.4 512c0 233.28-189.12 422.4-422.4 422.4z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M448 729.6a5 5 0 1 0 128 0 5 5 0 1 0-128 0zM469.338 567.86c2.56 26.585 19.481 46.54 42.662 46.54 23.18 0 40.102-21.35 42.662-46.54l20.43-264.833c.588-3.417.908-10.893.908-14.451 0-34.304-28.66-58.176-64-58.176s-64 23.872-64 58.176c0 3.558.307 11.034.896 14.438l20.442 264.845z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1025 1024", xmlns: "http://www.w3.org/2000/svg", width: "200.195", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M950.782 127.489L328.07 750.117 73.151 495.17 0 568.452l328.071 328.06L1024 200.657z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358L512.828 458.768l-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992L801.821 855.29c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M548.48 1010.496L50.752 512.768 549.248 14.272l45.248 45.248-453.248 453.248 452.608 452.48z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M912 1010.496L414.272 512.768 912.768 14.272l45.248 45.248-453.248 453.248 452.48 452.48z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M475.52 13.504l497.728 497.728-498.496 498.496-45.248-45.248 453.248-453.248-452.608-452.48z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M112 13.504l497.728 497.728-498.496 498.496-45.248-45.248 453.248-453.248-452.48-452.48z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M64 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0zM426 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0zM788 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 451.67L328.832 268.5a42.667 42.667 0 0 0-60.33 60.331L451.668 512 268.501 695.168a42.667 42.667 0 0 0 60.331 60.33L512 572.332l183.168 183.168a42.667 42.667 0 0 0 60.33-60.331L572.332 512l183.168-183.168a42.667 42.667 0 1 0-60.331-60.33L512 451.668zm0 572.33C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 0C229.224 0 0 229.224 0 512s229.224 512 512 512 512-229.224 512-512S794.76 0 512 0zm261.092 685.355l-87.72 87.721L512 599.721 337.856 773.864l-87.72-87.72L424.279 512 250.908 338.645l87.72-87.721 173.356 173.355 174.143-174.143 87.721 87.72L599.721 512l173.371 173.355z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 42.667a469.333 469.333 0 1 1 0 938.666 469.333 469.333 0 0 1 0-938.666zM512 0C229.717 0 0 229.803 0 512s229.717 512 512 512 512-229.717 512-512S794.283 0 512 0z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M608.939 256.512l-97.792 197.632-96.342-197.632h-44.458l120.32 219.99h-140.63V512h140.63v83.285h-140.63v31.062h140.63v141.226h40.96V626.347h142.506v-31.062H531.627V512h142.506v-35.584H531.627l120.746-219.99z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M979.775 516.757c.271-9.781-4.69-20.431-13.95-29.474L546.847 77.86c-19.272-18.844-50.552-18.844-69.823 0L58.04 487.284c-10.503 10.26-15.995 21.627-14.211 32.055a20.34 20.34 0 0 0-.204 2.728c0 11.49 9.53 20.807 21.293 20.807h110.525c-2.79 6.103-4.063 13.175-4.063 20.723v353.805c0 22.982 19.064 41.612 42.585 41.612h596.197c23.52 0 42.585-18.63 42.585-41.612V563.597c.287-8.266-.705-15.118-2.859-20.723h109.32c11.762 0 21.293-9.318 21.293-20.807 0-1.838-.269-3.611-.727-5.31zM810.162 875.785c0 22.987-19.064 41.617-42.585 41.617H256.551c-23.521 0-42.585-18.63-42.585-41.617v-353.8h-.004c-.046-11.45-9.554-20.725-21.288-20.725h-85.059l369.408-360.983c19.272-18.837 50.552-18.837 69.823.007l369.407 360.975h-84.797c-11.735 0-21.243 9.275-21.288 20.725h-.004v353.801z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 0C229.308 0 0 229.24 0 512s229.308 512 512 512 512-229.24 512-512S794.692 0 512 0zm-63.898 448.034C448.102 412.672 476.706 384 512 384c35.362 0 64.034 28.672 64.034 64.034V768c0 35.294-28.672 64.034-64.034 64.034-35.294 0-63.898-28.74-63.898-64.034V448.034zM512 321.058c-35.294 0-63.898-28.74-63.898-64.034 0-35.294 28.604-64.034 63.898-64.034 35.362 0 64.034 28.74 64.034 64.034 0 35.294-28.672 64.034-64.034 64.034z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M1024 256L768 0H298.667c-62.976 0-85.334 29.013-85.334 85.333v64h-128C7.936 149.333 0 190.123 0 256v661.333C0 983.211 7.936 1024 85.333 1024h625.75C788.48 1024 832 940.544 832 874.667h85.333C994.731 874.667 1024 833.877 1024 768V256zM917.333 832H320a63.744 63.744 0 0 1-64-64V106.667c0-41.302 21.333-64 64-64h405.333c-.597 73.728 0 149.333 0 149.333 0 66.475 28.758 106.667 106.667 106.667h149.333V768c0 32.597-25.6 64-64 64zm-128 42.667c0 52.65-46.933 106.666-85.333 106.666H85.333c-38.4 0-42.666-31.402-42.666-64V256c0-30.464 4.266-64 42.666-64h128v576c0 65.877 29.27 106.667 106.667 106.667h469.333zM768 192V64l192 192H832a63.061 63.061 0 0 1-64-64zM448 516.096a21.59 21.59 0 0 0-21.333 21.333c0 11.776 9.813 21.334 21.333 21.334h298.667c11.776 0 21.333-9.899 21.333-21.334a21.504 21.504 0 0 0-21.333-21.333H448zm0-128a21.59 21.59 0 0 0-21.333 21.333c0 11.776 9.813 21.334 21.333 21.334h298.667c11.776 0 21.333-9.899 21.333-21.334a21.504 21.504 0 0 0-21.333-21.333H448z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", viewBox: "0 0 25 25" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M13.5 11.5V0h-2v11.5H0v2h11.5V25h2V13.5H25v-2H13.5z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512 0C229.218 0 0 229.218 0 512s229.218 512 512 512 512-229.218 512-512S794.782 0 512 0zm0 944C273.406 944 80 750.594 80 512S273.406 80 512 80s432 193.406 432 432-193.406 432-432 432z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M480 704h64v64h-64v-64zM635.468 300.296c-12.968-13.25-29.376-23.844-49.532-32.062C565.53 260.03 541.592 256 513.374 256c-23.938 0-45.75 4.032-65.562 12.234-19.876 8.218-37 19.546-51.376 34.25-14.25 14.578-25.344 29.016-33 49.546C355.812 372.562 352 384 352 416h65.312c0-32 8.468-56.218 25.876-77.032 17.188-20.906 40.532-29.64 70.188-29.64 28.876 0 50.468 7.828 64.344 21.876 13.75 14.046 20.782 34.172 20.782 59.594 0 19.766-6.5 37.516-19.468 52.984a509.737 509.737 0 0 1-41.688 44.876c-15.188 14.282-27.344 29.532-39.906 45.282S480 568.032 480 588.938V640h64v-27.5c0-16.406 2.406-30.624 8.812-43.032C559 557.03 566.718 545.75 576.5 535.686a368.683 368.683 0 0 1 30.938-29.656c11-9.532 21.562-19.718 31.062-30.344 9.688-10.688 17.75-22.688 23.876-35.938 6.438-13.25 9.656-28.812 9.656-46.954 0-15.75-2.844-31.782-8.782-48.078-5.812-16.42-15.188-31.184-27.782-44.42z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M511.872.96C231.006.96 3.294 229.95 3.294 512.48c0 282.465 227.712 511.52 508.578 511.52s508.642-229.055 508.642-511.52C1020.45 229.95 792.738.96 511.872.96zm49.636 790.979c0 18.101-15.735 27.696-52.578 27.696h-28.017c-36.843 0-52.642-9.53-52.642-27.696v-79.572c0-18.165 15.8-27.696 52.642-27.696h28.017c36.843 0 52.578 9.467 52.578 27.696v79.572zm-9.594-189.462c-5.246 18.23-17.527 23.41-46.502 23.41h-20.085c-30.639 0-42.92-6.907-42.92-25.137 0-108.93 135.86-178.907 135.86-232.573-.064-30.255-20.213-48.357-64.924-48.357-50.851 0-85.903 26.737-98.12 26.737-24.627 0-55.265-52.77-55.265-70.872 0-51.043 96.457-70.105 164.835-70.105 117.374 0 190.229 58.783 190.229 153.898 0 132.341-147.31 160.038-163.108 243z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M14.444 1.097V3.29h5.273a.284.284 0 0 1 .283.284v.836a.285.285 0 0 1-.282.285h-1.75v14.208c0 .604-.5 1.097-1.11 1.097H3.074a1.108 1.108 0 0 1-1.111-1.097V4.695H.29A.286.286 0 0 1 0 4.41v-.836c0-.155.125-.282.283-.284h5.273V1.097C5.556.493 6.055 0 6.666 0h6.668c.61 0 1.11.493 1.11 1.097zM3.334 18.643h13.332V4.66H3.334v13.982zM6.964 3.29h6.18V1.4H6.965v1.89zM5.556 15.468V7.405a.349.349 0 0 1 .104-.253.358.358 0 0 1 .256-.102h.708a.357.357 0 0 1 .256.102.348.348 0 0 1 .104.253v8.063a.349.349 0 0 1-.104.252.358.358 0 0 1-.256.102h-.708a.352.352 0 0 1-.36-.354zm4.96.354H9.8a.36.36 0 0 1-.357-.354V7.405c0-.203.16-.355.357-.355h.715a.36.36 0 0 1 .357.355v8.063c0 .202-.16.354-.357.354zm2.818-.354V7.405a.349.349 0 0 1 .104-.253.358.358 0 0 1 .256-.102h.707a.357.357 0 0 1 .257.102.348.348 0 0 1 .104.253v8.063a.349.349 0 0 1-.105.252.358.358 0 0 1-.256.102h-.707a.352.352 0 0 1-.36-.354z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M11.896 11.388L8.98 8.472a5.095 5.095 0 0 0 1.257-3.355A5.122 5.122 0 0 0 5.118 0 5.122 5.122 0 0 0 0 5.117a5.124 5.124 0 0 0 5.118 5.116 5.098 5.098 0 0 0 3.356-1.256l2.917 2.917a.35.35 0 0 0 .506 0 .36.36 0 0 0 0-.506zM.716 5.117a4.404 4.404 0 0 1 4.4-4.399c2.426 0 4.398 1.975 4.398 4.399s-1.972 4.4-4.399 4.4a4.406 4.406 0 0 1-4.4-4.4z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512.17 264.192a241.664 241.664 0 1 0 0 483.413 241.664 241.664 0 0 0 0-483.413zm0 436.31a194.56 194.56 0 1 1 0-389.12 194.56 194.56 0 0 1 0 389.12z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M976.384 574.464a259.328 259.328 0 0 0-7.765-4.096c-3.755-1.877-7.254-3.67-10.496-5.632a66.304 66.304 0 0 1-32.427-48.213 67.157 67.157 0 0 1 19.883-55.211c10.154-10.24 22.784-16.896 36.181-23.893l2.816-1.366c27.819-14.506 41.643-37.546 38.997-65.024-4.266-43.946-16.128-79.872-36.096-109.824-18.688-27.989-38.314-40.533-63.488-40.533-10.24 0-21.504 2.048-34.56 6.315a221.867 221.867 0 0 1-30.464 8.021 62.379 62.379 0 0 1-10.496.853c-29.184 0-56.32-20.48-63.146-47.616-3.926-15.872-2.048-32.938 5.632-52.309 11.946-29.867 5.12-57.173-19.968-81.493-12.8-12.459-30.55-27.819-53.248-35.84-29.014-10.496-52.48-17.408-72.107-17.408-31.573 0-53.163 17.066-76.715 61.013a61.952 61.952 0 0 1-55.808 33.963 72.96 72.96 0 0 1-60.16-33.28c-3.157-4.694-5.802-9.814-8.533-15.104-2.219-4.267-4.523-8.79-7.168-13.142C423.851 12.46 404.309.768 380.928.768a75.776 75.776 0 0 0-9.045.597c-24.15 2.902-52.139 7.51-77.398 19.798-70.997 34.304-77.909 64.426-66.56 118.869 9.984 47.53-7.424 81.323-46.506 90.368a76.544 76.544 0 0 1-17.408 1.877c-11.691 0-24.235-2.218-40.534-7.338a84.31 84.31 0 0 0-25.002-4.096c-21.334 0-39.936 9.642-55.296 28.672C26.624 270.08 15.019 294.4 6.57 326.144-9.387 386.56 4.267 418.219 58.88 447.061c21.504 11.35 35.84 27.648 40.107 45.739a57.173 57.173 0 0 1-10.667 46.933c-10.24 14.507-24.747 25.771-44.203 34.134-27.306 11.946-42.154 33.45-42.752 62.378-1.194 52.907 16.128 98.816 51.371 136.534a65.024 65.024 0 0 0 49.408 20.992c4.437 0 9.13-.342 13.91-1.11 5.375-.853 10.666-1.962 15.786-3.157 9.045-1.963 17.493-3.755 25.6-3.755a46.08 46.08 0 0 1 6.144.342l1.195.17 1.109-.17a62.123 62.123 0 0 1 8.107-.512c17.322 0 32.682 7.936 42.154 21.845 9.814 14.507 11.776 33.28 5.035 50.347a114.944 114.944 0 0 0-3.755 11.69c-.853 3.072-1.621 5.974-2.56 8.534-11.434 31.829-4.778 59.221 19.627 81.749 24.747 22.613 55.723 38.4 94.72 48.299 19.03 4.864 32.768 6.997 44.544 6.997 35.072 0 53.76-20.31 75.69-57.856 15.873-26.965 36.011-40.107 61.611-40.107H512c25.685.342 44.8 12.971 60.16 39.68 1.707 2.987 3.328 5.974 4.95 9.302 2.303 4.437 4.693 9.13 7.594 13.653 14.677 23.296 35.157 35.157 60.757 35.157 4.267 0 8.79-.341 13.312-1.024a238.677 238.677 0 0 0 97.11-36.096c38.57-25.088 50.517-59.989 34.389-100.949-9.813-24.917-8.277-50.603 4.01-68.608 10.497-15.36 27.649-23.552 49.665-23.552 4.864 0 10.069.427 15.36 1.28l4.608.597c6.144.939 12.032 1.792 17.834 3.072 11.435 2.56 21.59 3.84 31.062 3.84 33.28 0 57.856-15.36 79.53-49.749 15.531-24.747 24.832-52.48 28.416-85.163 4.096-37.205-10.752-65.45-44.288-84.053zM745.045 880.299c12.63 41.13 9.558 48.896-27.306 69.12a165.717 165.717 0 0 1-30.55 13.397c-17.92 5.547-30.208 8.79-39.85 8.79-13.568 0-23.211-5.803-38.4-37.547-18.774-39.254-53.675-60.928-98.134-60.928h-.512c-41.216.17-74.752 21.504-99.754 63.573-17.238 29.013-22.187 35.243-36.011 35.243-7.339 0-17.067-1.792-31.403-4.864a172.117 172.117 0 0 1-77.397-38.4c-13.653-11.776-16.47-22.784-9.813-38.059 8.533-19.883 16.64-43.776 10.837-71.168-10.155-48.384-45.653-78.507-92.757-78.507-5.291 0-10.752.427-16.214 1.195a1083.733 1083.733 0 0 0-25.77 3.84c-12.032 1.963-20.31 2.901-26.966 2.901-19.114 0-26.965-6.997-42.154-37.29a188.501 188.501 0 0 1-14.507-39.766c-5.461-22.613-6.144-32.768-2.816-40.106 3.67-8.363 14.08-15.36 32-25.43 58.88-33.28 82.176-94.378 55.296-145.322a128 128 0 0 0-64-58.027c-19.627-8.533-27.307-22.101-24.832-43.776 3.328-30.293 13.91-57.173 31.403-79.787 8.192-10.581 16.042-15.274 25.6-15.274 3.584 0 7.68.682 12.117 2.133 17.067 5.376 33.877 10.24 51.541 10.24 5.12 0 10.07-.427 14.763-1.195 36.523-6.314 61.44-21.077 76.288-45.226 12.459-20.139 17.835-46.08 17.408-84.139a17.408 17.408 0 0 0-1.024-5.12l-.17-.768c-8.705-51.115-2.646-61.696 45.994-80.64 9.472-3.755 18.859-6.741 27.819-8.96 14.336-3.413 25.088-5.973 32.512-5.973 11.434 0 16.042 6.058 32.426 34.218 23.552 40.534 56.832 61.014 99.158 61.014h1.792c43.008-.598 77.653-22.187 100.266-62.55 14.763-26.282 20.651-32 33.28-32 7.168 0 16.64 1.963 28.758 4.779 19.882 4.779 34.56 11.008 46.336 19.627 19.626 14.25 28.586 23.637 31.232 32.426 2.474 8.192-.427 17.75-5.803 33.792-11.52 34.731-6.656 70.486 13.312 98.134 20.31 28.33 53.675 44.458 91.392 44.458h.853a62.464 62.464 0 0 0 4.779.171c17.323 0 36.437-6.656 53.333-12.63a37.547 37.547 0 0 1 12.288-2.389c7.766 0 14.251 3.414 20.48 10.838 22.699 27.306 34.816 60.416 36.779 100.949.683 13.739-8.875 19.37-24.576 27.477l-.17.086c-25.771 13.312-61.014 36.437-69.974 83.712-9.557 50.346 11.435 96.085 53.504 116.565 48.128 23.296 46.25 37.717 31.317 89.173a115.285 115.285 0 0 1-22.613 39.766c-10.07 12.458-21.333 18.517-34.56 18.517a53.419 53.419 0 0 1-14.933-2.304 181.93 181.93 0 0 0-51.286-8.107 131.413 131.413 0 0 0-22.186 1.878c-29.184 4.949-53.59 21.248-68.608 45.738-16.214 26.454-19.798 60.075-9.814 92.502z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M511.996 9.862C234.668 9.862 9.862 234.675 9.862 512c0 277.328 224.806 502.138 502.134 502.138 277.321 0 502.138-224.81 502.138-502.138.004-277.325-224.813-502.138-502.138-502.138zM824.89 388.75L473.502 727.583a56.476 56.476 0 0 1-15.588 11.03c-22.066 15.76-52.916 13.756-72.73-6.062L234.284 581.653c-22.065-22.066-22.065-57.833 0-79.884 22.055-22.065 57.822-22.065 79.887 0l113.292 113.285 317.532-306.192c22.061-22.062 57.832-22.062 79.883 0 22.076 22.058 22.076 57.825.01 79.887zm0 0" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M13 13H1V7.5H0V14h14V7.5h-1z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M6.5 1v9h1V1z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.004 1.67l3.163 2.822.666-.747L7.005.33 3.167 3.745l.665.747z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "21", height: "15", viewBox: "0 0 21 15" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M10.5 13.8c3.117 0 6.03-1.9 8.763-5.844a.8.8 0 0 0 0-.912C16.53 3.1 13.617 1.2 10.5 1.2S4.47 3.1 1.737 7.044a.8.8 0 0 0 0 .912C4.47 11.9 7.383 13.8 10.5 13.8zm0 1.2C6.94 15 3.69 12.88.75 8.64a2 2 0 0 1 0-2.28C3.69 2.12 6.94 0 10.5 0c3.56 0 6.81 2.12 9.75 6.36a2 2 0 0 1 0 2.28C17.31 12.88 14.06 15 10.5 15z" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M10.5 9.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6zm0 1.2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        _extends({ className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, this.props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "defs",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M511.999 0C228.937 0 0 228.937 0 511.999c0 283.064 228.937 511.999 511.999 511.999 283.064 0 511.999-228.934 511.999-511.999C1023.997 228.937 795.063 0 511.999 0zm0 804.568c-40.227 0-73.142-32.915-73.142-73.14 0-40.23 32.915-73.145 73.142-73.145 40.23 0 73.145 32.915 73.145 73.145 0 40.225-32.915 73.14-73.145 73.14zm73.145-292.569c0 40.23-32.915 73.145-73.145 73.145-40.227 0-73.142-32.915-73.142-73.145V292.572c0-40.23 32.915-73.145 73.142-73.145 40.23 0 73.145 32.915 73.145 73.145v219.427z" })
      );
    }
  }]);

  return SVG;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(8)
  , TAG = __webpack_require__(13)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(64)('keys')
  , uid    = __webpack_require__(27);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(11)
  , LIBRARY        = __webpack_require__(60)
  , wksExt         = __webpack_require__(68)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(13);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(109)
  , enumBugKeys = __webpack_require__(58)
  , IE_PROTO    = __webpack_require__(63)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(79)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(102).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(154);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(153);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(87);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(87);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(17)(function(){
  return Object.defineProperty(__webpack_require__(79)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(78);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(60)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(85)
  , hide           = __webpack_require__(12)
  , has            = __webpack_require__(8)
  , Iterators      = __webpack_require__(59)
  , $iterCreate    = __webpack_require__(104)
  , setToStringTag = __webpack_require__(62)
  , getPrototypeOf = __webpack_require__(111)
  , ITERATOR       = __webpack_require__(13)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(84)
  , hiddenKeys = __webpack_require__(58).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(8)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(100)(false)
  , IE_PROTO     = __webpack_require__(63)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(57);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(128);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(127);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(98);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(25)
  , createDesc     = __webpack_require__(26)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(66)
  , has            = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(80)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
exports["default"] = util;
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// export this package's api
module.exports = __webpack_require__(145);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(11).Object.assign;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
var $Object = __webpack_require__(11).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
__webpack_require__(118);
__webpack_require__(121);
__webpack_require__(122);
module.exports = __webpack_require__(11).Symbol;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(123);
module.exports = __webpack_require__(68).f('iterator');

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(114)
  , toIndex   = __webpack_require__(113);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(61)
  , pIE     = __webpack_require__(25);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(78);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(69)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(62)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(13)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(18)
  , toIObject = __webpack_require__(10);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(27)('meta')
  , isObject = __webpack_require__(20)
  , has      = __webpack_require__(8)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(17)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(61)
  , pIE      = __webpack_require__(25)
  , toObject = __webpack_require__(86)
  , IObject  = __webpack_require__(81)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10)
  , gOPN      = __webpack_require__(83).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(8)
  , toObject    = __webpack_require__(86)
  , IE_PROTO    = __webpack_require__(63)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65)
  , defined   = __webpack_require__(57);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(65)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(99)
  , step             = __webpack_require__(105)
  , Iterators        = __webpack_require__(59)
  , toIObject        = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(82)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(108)});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ }),
/* 118 */
/***/ (function(module, exports) {



/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(112)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(82)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(8)
  , DESCRIPTORS    = __webpack_require__(7)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(85)
  , META           = __webpack_require__(107).KEY
  , $fails         = __webpack_require__(17)
  , shared         = __webpack_require__(64)
  , setToStringTag = __webpack_require__(62)
  , uid            = __webpack_require__(27)
  , wks            = __webpack_require__(13)
  , wksExt         = __webpack_require__(68)
  , wksDefine      = __webpack_require__(67)
  , keyOf          = __webpack_require__(106)
  , enumKeys       = __webpack_require__(101)
  , isArray        = __webpack_require__(103)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(66)
  , createDesc     = __webpack_require__(26)
  , _create        = __webpack_require__(69)
  , gOPNExt        = __webpack_require__(110)
  , $GOPD          = __webpack_require__(89)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(18)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(83).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f  = $propertyIsEnumerable;
  __webpack_require__(61).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(60)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('asyncIterator');

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('observable');

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(12)
  , Iterators     = __webpack_require__(59)
  , TO_STRING_TAG = __webpack_require__(13)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(91);
} catch (err) {
  var index = __webpack_require__(91);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports["default"] = TransitionEvents;
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(141);

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__(140);

var _componentClasses2 = _interopRequireDefault(_componentClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = (0, _componentClasses2["default"])(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

exports["default"] = cssAnimation;
module.exports = exports['default'];

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ChildrenUtils = __webpack_require__(147);

var _AnimateChild = __webpack_require__(146);

var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

var _util = __webpack_require__(92);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (_react2["default"].isValidElement(children)) {
    if (!children.key) {
      return _react2["default"].cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
    };
    return _this;
  }

  Animate.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var showProp = this.props.showProp;
    var children = this.state.children;
    if (showProp) {
      children = children.filter(function (child) {
        return !!child.props[showProp];
      });
    }
    children.forEach(function (child) {
      if (child) {
        _this2.performAppear(child.key);
      }
    });
  };

  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    this.nextProps = nextProps;
    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
    var props = this.props;
    // exclusive needs immediate response
    if (props.exclusive) {
      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
        _this3.stop(key);
      });
    }
    var showProp = props.showProp;
    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
    // last props children if exclusive
    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
    // in case destroy in showProp mode
    var newChildren = [];
    if (showProp) {
      currentChildren.forEach(function (currentChild) {
        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
        var newChild = void 0;
        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
        } else {
          newChild = nextChild;
        }
        if (newChild) {
          newChildren.push(newChild);
        }
      });
      nextChildren.forEach(function (nextChild) {
        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
          newChildren.push(nextChild);
        }
      });
    } else {
      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
    }

    // need render to avoid update
    this.setState({
      children: newChildren
    });

    nextChildren.forEach(function (child) {
      var key = child && child.key;
      if (child && currentlyAnimatingKeys[key]) {
        return;
      }
      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
      if (showProp) {
        var showInNext = child.props[showProp];
        if (hasPrev) {
          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
          if (!showInNow && showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (showInNext) {
          _this3.keysToEnter.push(key);
        }
      } else if (!hasPrev) {
        _this3.keysToEnter.push(key);
      }
    });

    currentChildren.forEach(function (child) {
      var key = child && child.key;
      if (child && currentlyAnimatingKeys[key]) {
        return;
      }
      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
      if (showProp) {
        var showInNow = child.props[showProp];
        if (hasNext) {
          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
          if (!showInNext && showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (showInNow) {
          _this3.keysToLeave.push(key);
        }
      } else if (!hasNext) {
        _this3.keysToLeave.push(key);
      }
    });
  };

  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);
    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  };

  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
    var showProp = this.props.showProp;
    if (showProp) {
      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
    }
    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
  };

  Animate.prototype.stop = function stop(key) {
    delete this.currentlyAnimatingKeys[key];
    var component = this.refs[key];
    if (component) {
      component.stop();
    }
  };

  Animate.prototype.render = function render() {
    var props = this.props;
    this.nextProps = props;
    var stateChildren = this.state.children;
    var children = null;
    if (stateChildren) {
      children = stateChildren.map(function (child) {
        if (child === null || child === undefined) {
          return child;
        }
        if (!child.key) {
          throw new Error('must set key for <rc-animate> children');
        }
        return _react2["default"].createElement(
          _AnimateChild2["default"],
          {
            key: child.key,
            ref: child.key,
            animation: props.animation,
            transitionName: props.transitionName,
            transitionEnter: props.transitionEnter,
            transitionAppear: props.transitionAppear,
            transitionLeave: props.transitionLeave
          },
          child
        );
      });
    }
    var Component = props.component;
    if (Component) {
      var passedProps = props;
      if (typeof Component === 'string') {
        passedProps = _extends({
          className: props.className,
          style: props.style
        }, props.componentProps);
      }
      return _react2["default"].createElement(
        Component,
        passedProps,
        children
      );
    }
    return children[0] || null;
  };

  return Animate;
}(_react2["default"].Component);

Animate.propTypes = {
  component: _propTypes2["default"].any,
  componentProps: _propTypes2["default"].object,
  animation: _propTypes2["default"].object,
  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
  transitionEnter: _propTypes2["default"].bool,
  transitionAppear: _propTypes2["default"].bool,
  exclusive: _propTypes2["default"].bool,
  transitionLeave: _propTypes2["default"].bool,
  onEnd: _propTypes2["default"].func,
  onEnter: _propTypes2["default"].func,
  onLeave: _propTypes2["default"].func,
  onAppear: _propTypes2["default"].func,
  showProp: _propTypes2["default"].string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this4.refs[key]) {
      _this4.currentlyAnimatingKeys[key] = true;
      _this4.refs[key].componentWillEnter(_this4.handleDoneAdding.bind(_this4, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this4.refs[key]) {
      _this4.currentlyAnimatingKeys[key] = true;
      _this4.refs[key].componentWillAppear(_this4.handleDoneAdding.bind(_this4, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this4.props;
    delete _this4.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this4.nextProps) {
      return;
    }
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    if (!_this4.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this4.performLeave(key);
    } else {
      if (type === 'appear') {
        if (_util2["default"].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (_util2["default"].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this4.refs[key]) {
      _this4.currentlyAnimatingKeys[key] = true;
      _this4.refs[key].componentWillLeave(_this4.handleDoneLeaving.bind(_this4, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this4.props;
    delete _this4.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this4.nextProps) {
      return;
    }
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this4.isValidChildByKey(currentChildren, key)) {
      _this4.performEnter(key);
    } else {
      var end = function end() {
        if (_util2["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!(0, _ChildrenUtils.isSameChildren)(_this4.state.children, currentChildren, props.showProp)) {
        _this4.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

exports["default"] = Animate;
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cssAnimation = __webpack_require__(142);

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _util = __webpack_require__(92);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
    if (_util2["default"].isEnterSupported(this.props)) {
      this.transition('enter', done);
    } else {
      done();
    }
  };

  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
    if (_util2["default"].isAppearSupported(this.props)) {
      this.transition('appear', done);
    } else {
      done();
    }
  };

  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
    if (_util2["default"].isLeaveSupported(this.props)) {
      this.transition('leave', done);
    } else {
      // always sync, do not interupt with react component life cycle
      // update hidden -> animate hidden ->
      // didUpdate -> animate leave -> unmount (if animate is none)
      done();
    }
  };

  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
    var _this2 = this;

    var node = _reactDom2["default"].findDOMNode(this);
    var props = this.props;
    var transitionName = props.transitionName;
    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
    this.stop();
    var end = function end() {
      _this2.stopper = null;
      finishCallback();
    };
    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
      var activeName = name + '-active';
      if (nameIsObj && transitionName[animationType + 'Active']) {
        activeName = transitionName[animationType + 'Active'];
      }
      this.stopper = (0, _cssAnimation2["default"])(node, {
        name: name,
        active: activeName
      }, end);
    } else {
      this.stopper = props.animation[animationType](node, end);
    }
  };

  AnimateChild.prototype.stop = function stop() {
    var stopper = this.stopper;
    if (stopper) {
      this.stopper = null;
      stopper.stop();
    }
  };

  AnimateChild.prototype.render = function render() {
    return this.props.children;
  };

  return AnimateChild;
}(_react2["default"].Component);

AnimateChild.propTypes = {
  children: _propTypes2["default"].any
};
exports["default"] = AnimateChild;
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArrayChildren = toArrayChildren;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
exports.isSameChildren = isSameChildren;
exports.mergeChildren = mergeChildren;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
var $Object = __webpack_require__(11).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(11).Object.setPrototypeOf;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(20)
  , anObject = __webpack_require__(19);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(88)(Function.call, __webpack_require__(89).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(69)});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(150).set});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_Icon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Progress_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Progress_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Progress_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Progress Component
 * @author heifade
 */







// const statusColorMap = {
//   normal: '#108ee9',
//   exception: '#ff5500',
//   success: '#87d068',
// };

var Progress = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_5__Progress_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(Progress, _PureComponent);

  function Progress(props) {
    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var prefixCls = 'progress';
      var styleName = prefixCls + '--line';

      var props = this.props;

      var className = props.className,
          _props$percent = props.percent,
          percent = _props$percent === undefined ? 0 : _props$percent,
          status = props.status,
          format = props.format,
          type = props.type,
          strokeWidth = props.strokeWidth,
          width = props.width,
          showInfo = props.showInfo,
          gapDegree = props.gapDegree,
          gapPosition = props.gapPosition,
          restProps = _objectWithoutProperties(props, ['className', 'percent', 'status', 'format', 'type', 'strokeWidth', 'width', 'showInfo', 'gapDegree', 'gapPosition']);

      var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
      var progressInfo = void 0;
      var progress = void 0;
      var textFormatter = format || function (percentNumber) {
        return percentNumber + '%';
      };

      if (showInfo) {
        var text = void 0;
        // const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
        if (progressStatus === 'exception') {
          text = format ? textFormatter(percent) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { size: 14, name: 'error', color: 'red' });
        } else if (progressStatus === 'success') {
          text = format ? textFormatter(percent) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { size: 14, name: 'success', color: 'green' });
        } else {
          text = textFormatter(percent);
        }
        progressInfo = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { styleName: prefixCls + '--text' },
          text
        );
      }

      if (type === 'line') {
        styleName = prefixCls + '--line';
        var percentStyle = {
          width: percent + '%',
          height: strokeWidth || 10
        };
        progress = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { styleName: prefixCls + '--outer' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { styleName: prefixCls + '--inner' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { styleName: prefixCls + '--bg', style: percentStyle })
            )
          ),
          progressInfo
        );
      } else if (type === 'circle' || type === 'dashboard') {}
      /* const circleSize = width || 132;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.16 + 6,
      };
      const circleWidth = strokeWidth || 6;
      const gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
      const gapDeg = gapDegree || type === 'dashboard' && 75;
      progress = (
        <div className={`${prefixCls}-inner`} style={circleStyle}>
          <Circle
            percent={percent}
            strokeWidth={circleWidth}
            trailWidth={circleWidth}
            strokeColor={statusColorMap[progressStatus]}
            trailColor={trailColor}
            prefixCls={prefixCls}
            gapDegree={gapDeg}
            gapPosition={gapPos}
          />
          {progressInfo}
        </div>
      );*/


      // const classString = classNames(prefixCls, {
      //   [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: true,
      //   [`${prefixCls}-status-${progressStatus}`]: true,
      //   [`${prefixCls}-show-info`]: showInfo,
      // }, className);


      var styleNameStr = prefixCls + ' ' + styleName;

      if (showInfo) {
        styleNameStr = styleNameStr.concat(' ' + (prefixCls + '--show-info'));
      }

      styleNameStr = styleNameStr.concat(' ' + (prefixCls + '--status-' + progressStatus));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, restProps, { styleName: styleNameStr }),
        progress
      );
    }
  }]);

  return Progress;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class2.displayName = 'Progress', _class2.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  strokeWidth: 10,
  width: 0,
  // trailColor: '#f3f3f3',
  status: 'normal',
  format: null,
  gapDegree: 0
}, _class2.propTypes = {
  status: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['normal', 'exception', 'active', 'success']),
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['line', 'circle', 'dashboard']),
  showInfo: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  percent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  strokeWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  // trailColor: PropTypes.string,
  format: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  gapDegree: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Progress);

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"progress":"WMaqHWs","progress--line":"_3xg6VqA","progress--outer":"_3jjNyzc","progress--inner":"_2rlYPCR","progress--bg":"_3PKDJ1C","progress--show-info":"_1EvJNAq","progress--text":"j6hJ9BN","progress--status-active":"_37dTj6C","progress--active":"_1L4m8vT","progress--status-exception":"zdFCOPi","progress--status-normal":"_2E5UTJ4","progress--status-success":"_3w7-N9Y"};

/***/ }),
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"upload":"_2UxV0kz","upload-select":"_1fQz-E_","upload-select-text":"_1maN_Cv","upload-list":"_14NhtWo","upload-list-item":"_3Njfikd","remove":"Boe8gJv","upload-list-item-info":"ACI5HD8","status":"_3qlP1Cd","upload-list-item-name":"_1cVZiOQ","upload-list-item-progress":"_1ik1y6A","upload-list-item-uploading":"_2H0ypTn","upload-list-item-done":"_7oltx-C","upload-list-item-error":"_1jGbUaw","upload-list-text":"_3Mi3sRo","upload-select-picture-card":"_3SaxPHm","hide":"_2Z7KgL4","upload-list-picture-card":"_2MKkXWB","upload-list-item-thumbnail":"_27WS6DP","uploading-text":"_3ki_XOw","imgshow":"_1tzLhEf","pictureShow":"xpw90-A","upload-list-item-actions":"_3X70GPS","eye":"_3gICJJz"};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uid;
var now = +new Date();
var index = 0;

function uid() {
  return "rc-upload-" + now + "-" + ++index;
}
module.exports = exports['default'];

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_upload__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UploadList__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Upload_css__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Upload_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Upload_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Upload Component
 * @author heifade
 */







// import Dragger from './Dragger';

// import { UploadProps, UploadLocale } from './interface';
// import classNames from 'classnames';


var defaultLocale = {
  uploading: '上传中...',
  uploadError: '上传失败',
  removeFile: '删除文件',
  previewFile: '预览文件'
};

var Upload = (_dec = __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__Upload_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Upload, _React$Component);

  function Upload(props) {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

    _this.onChange = function (info) {
      if (!('fileList' in _this.props)) {
        _this.setState({ fileList: info.fileList });
      }

      var onChange = _this.props.onChange;


      if (onChange) {
        onChange(info);
      }
    };

    _this.onStart = function (file) {
      var targetItem = void 0;
      var nextFileList = _this.state.fileList.concat();
      if (file.length > 0) {
        targetItem = file.map(function (f) {
          var fileObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* fileToObject */])(f);
          fileObject.status = 'uploading';
          return fileObject;
        });
        nextFileList = nextFileList.concat(targetItem);
      } else {
        targetItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* fileToObject */])(file);
        targetItem.status = 'uploading';
        nextFileList.push(targetItem);
      }
      _this.onChange({
        file: targetItem,
        fileList: nextFileList
      });

      // fix ie progress
      if (!window.FormData) {
        _this.autoUpdateProgress(0, targetItem);
      }
    };

    _this.onError = function (error, response, file) {
      _this.clearProgressTimer();
      var fileList = _this.state.fileList;
      var targetItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getFileItem */])(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.error = error;
      targetItem.response = defaultLocale.uploadError;
      targetItem.status = 'error';
      _this.onChange({
        file: _extends({}, targetItem),
        fileList: fileList
      });
    };

    _this.onFileDrop = function (e) {
      _this.setState({
        dragState: e.type
      });
    };

    _this.onSuccess = function (response, file) {
      _this.clearProgressTimer();
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {/* do nothing */
      }
      var fileList = _this.state.fileList;
      var targetItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getFileItem */])(file, fileList);

      // removed
      if (!targetItem) {
        return;
      }

      if (_this.props.onResponse) {
        var resultData = _this.props.onResponse(response);
        if (resultData.success) {
          targetItem.status = 'done';
        } else {
          targetItem.status = 'error';
          targetItem.response = resultData.message;
        }
      }

      _this.onChange({
        file: _extends({}, targetItem),
        fileList: fileList
      });
    };

    _this.onProgress = function (e, file) {
      var fileList = _this.state.fileList;
      var targetItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getFileItem */])(file, fileList);

      // removed
      if (!targetItem) {
        return;
      }
      targetItem.percent = e.percent;

      _this.onChange({
        event: e,
        file: _extends({}, targetItem),
        fileList: _this.state.fileList
      });
    };

    _this.handleManualRemove = function (file) {
      _this.refs.upload.abort(file);
      file.status = 'removed'; // eslint-disable-line
      _this.handleRemove(file);
    };

    _this.state = {
      fileList: _this.props.fileList || _this.props.defaultFileList || [],
      dragState: 'drop'
    };
    return _this;
  }

  // getLocale() {
  //   let locale = {};
  //   if (this.context.antLocale && this.context.antLocale.Upload) {
  //     locale = this.context.antLocale.Upload;
  //   }
  //   return assign({}, defaultLocale, locale, this.props.locale);
  // }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(Upload, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('fileList' in nextProps) {
        this.setState({
          fileList: nextProps.fileList || []
        });
      }
    }
    // 上传出错时

  }, {
    key: 'autoUpdateProgress',
    value: function autoUpdateProgress(_, file) {
      var _this2 = this;

      var getPercent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* genPercentAdd */])();
      var curPercent = 0;
      this.clearProgressTimer();
      this.progressTimer = setInterval(function () {
        curPercent = getPercent(curPercent);
        _this2.onProgress({
          percent: curPercent
        }, file);
      }, 200);
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(file) {
      var _this3 = this;

      var onRemove = this.props.onRemove;


      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
        // Prevent removing file
        if (ret === false) {
          return;
        }

        var removedFileList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeFileItem */])(file, _this3.state.fileList);
        if (removedFileList) {
          _this3.onChange({
            file: file,
            fileList: removedFileList
          });
        }
      });
    }
  }, {
    key: 'clearProgressTimer',
    value: function clearProgressTimer() {
      clearInterval(this.progressTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$prefixCls = _props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
          showUploadList = _props.showUploadList,
          listType = _props.listType,
          onPreview = _props.onPreview,
          disabled = _props.disabled,
          children = _props.children,
          className = _props.className;


      var rcUploadProps = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()({}, {
        onStart: this.onStart,
        onError: this.onError,
        onProgress: this.onProgress,
        onSuccess: this.onSuccess
      }, this.props);

      delete rcUploadProps.className;

      var showRemoveIcon = showUploadList.showRemoveIcon,
          showPreviewIcon = showUploadList.showPreviewIcon;

      var uploadList = showUploadList ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__UploadList__["a" /* default */], {
        listType: listType,
        items: this.state.fileList,
        onPreview: onPreview,
        onRemove: this.handleManualRemove,
        showRemoveIcon: showRemoveIcon,
        showPreviewIcon: showPreviewIcon
        // locale={this.getLocale()}
        , locale: defaultLocale,
        disabled: disabled
      }) : null;

      /* if (type === 'drag') {
        const dragCls = classNames(prefixCls, {
          [`${prefixCls}-drag`]: true,
          [`${prefixCls}-drag-uploading`]: this.state.fileList.some(file => {
            return file.status === 'uploading';
          }),
          [`${prefixCls}-drag-hover`]: this.state.dragState === 'dragover',
          [`${prefixCls}-disabled`]: disabled,
        });
        return (
          <span className={className}>
            <div
              className={dragCls}
              onDrop={this.onFileDrop}
              onDragOver={this.onFileDrop}
              onDragLeave={this.onFileDrop}
            >
              <RcUpload {...rcUploadProps} ref="upload" className={`${prefixCls}-btn`}>
                <div className={`${prefixCls}-drag-container`}>
                  {children}
                </div>
              </RcUpload>
            </div>
            {uploadList}
          </span>
        );
      } */

      // const uploadButtonCls = classNames(prefixCls, {
      //   [`${prefixCls}-select`]: true,
      //   [`${prefixCls}-select-${listType}`]: true,
      //   [`${prefixCls}-disabled`]: disabled,
      // });

      var uploadButton =
      // <div styleName={`${prefixCls} ${prefixCls}-select ${prefixCls}-select-${listType} `} style={{ display: children ? '' : 'none' }}>
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { styleName: prefixCls + ' ' + prefixCls + '-select ' + prefixCls + '-select-' + listType + ' ' + (children ? '' : 'hide') },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_upload___default.a, _extends({}, rcUploadProps, { ref: 'upload' }))
      );

      if (listType === 'picture-card') {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: className },
          uploadList,
          uploadButton,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { clear: 'both' } })
        );
      }
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: className },
        uploadButton,
        uploadList
      );
    }
  }]);

  return Upload;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), _class2.displayName = 'Upload', _class2.defaultProps = {
  name: 'file',
  defaultFileList: null,
  action: '',
  data: {},
  headers: null,
  showUploadList: true,
  multiple: false,
  accept: '',
  beforeUpload: null,
  customRequest: null,
  onChange: null,
  listType: 'text', // or picture-card
  onPreview: null,
  onRemove: null,
  disabled: false,
  withCredentials: false,

  prefixCls: 'upload',
  // type: 'select',
  className: '',
  // supportServerRender: false,
  onResponse: function onResponse(response) {
    if (response.result === 'success') {
      return {
        success: true,
        message: '上传成功'
      };
    }

    return {
      success: false,
      message: response.msg
    };
  }
}, _class2.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  defaultFileList: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object),
  fileList: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object),
  action: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  data: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object || __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  headers: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  showUploadList: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool || __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  multiple: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  accept: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  beforeUpload: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  customRequest: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  listType: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf('text', 'picture-card'),
  onPreview: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onRemove: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  withCredentials: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element.isRequired,
  onResponse: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}, _temp)) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Upload);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Upload__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Upload__["a"]; });


/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(15);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(71);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(73);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _request = __webpack_require__(235);

var _request2 = _interopRequireDefault(_request);

var _uid = __webpack_require__(177);

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AjaxUploader = function (_Component) {
  (0, _inherits3["default"])(AjaxUploader, _Component);

  function AjaxUploader() {
    var _temp, _this, _ret;

    (0, _classCallCheck3["default"])(this, AjaxUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3["default"])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { uid: (0, _uid2["default"])() }, _this.reqs = {}, _this.onChange = function (e) {
      var files = e.target.files;
      _this.uploadFiles(files);
      _this.reset();
    }, _this.onClick = function () {
      var el = _this.refs.file;
      if (!el) {
        return;
      }
      el.click();
    }, _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick();
      }
    }, _this.onFileDrop = function (e) {
      if (e.type === 'dragover') {
        e.preventDefault();
        return;
      }

      var files = e.dataTransfer.files;
      _this.uploadFiles(files);

      e.preventDefault();
    }, _temp), (0, _possibleConstructorReturn3["default"])(_this, _ret);
  }

  AjaxUploader.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
  };

  AjaxUploader.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.abort();
  };

  AjaxUploader.prototype.uploadFiles = function uploadFiles(files) {
    var postFiles = Array.prototype.slice.call(files);
    var len = postFiles.length;
    for (var i = 0; i < len; i++) {
      var file = postFiles[i];
      file.uid = (0, _uid2["default"])();
      this.upload(file, postFiles);
    }
  };

  AjaxUploader.prototype.upload = function upload(file, fileList) {
    var _this2 = this;

    var props = this.props;

    if (!props.beforeUpload) {
      // always async in case use react state to keep fileList
      return setTimeout(function () {
        return _this2.post(file);
      }, 0);
    }

    var before = props.beforeUpload(file, fileList);
    if (before && before.then) {
      before.then(function (processedFile) {
        var processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
          _this2.post(processedFile);
        } else {
          _this2.post(file);
        }
      })["catch"](function (e) {
        console && console.log(e); // eslint-disable-line
      });
    } else if (before !== false) {
      setTimeout(function () {
        return _this2.post(file);
      }, 0);
    }
  };

  AjaxUploader.prototype.post = function post(file) {
    var _this3 = this;

    if (!this._isMounted) {
      return;
    }
    var props = this.props;
    var data = props.data;
    var onStart = props.onStart,
        onProgress = props.onProgress;

    if (typeof data === 'function') {
      data = data(file);
    }
    var uid = file.uid;

    var request = props.customRequest || _request2["default"];
    this.reqs[uid] = request({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: onProgress ? function (e) {
        onProgress(e, file);
      } : null,
      onSuccess: function onSuccess(ret) {
        delete _this3.reqs[uid];
        props.onSuccess(ret, file);
      },
      onError: function onError(err, ret) {
        delete _this3.reqs[uid];
        props.onError(err, ret, file);
      }
    });
    onStart(file);
  };

  AjaxUploader.prototype.reset = function reset() {
    this.setState({
      uid: (0, _uid2["default"])()
    });
  };

  AjaxUploader.prototype.abort = function abort(file) {
    var reqs = this.reqs;

    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (reqs[uid]) {
        reqs[uid].abort();
        delete reqs[uid];
      }
    } else {
      Object.keys(reqs).forEach(function (uid) {
        if (reqs[uid]) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      });
    }
  };

  AjaxUploader.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        prefixCls = _props.prefixCls,
        className = _props.className,
        disabled = _props.disabled,
        style = _props.style,
        multiple = _props.multiple,
        accept = _props.accept,
        children = _props.children;

    var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      onDrop: this.onFileDrop,
      onDragOver: this.onFileDrop,
      tabIndex: '0'
    };
    return _react2["default"].createElement(
      Tag,
      (0, _extends3["default"])({}, events, {
        className: cls,
        role: 'button',
        style: style
      }),
      _react2["default"].createElement('input', {
        type: 'file',
        ref: 'file',
        key: this.state.uid,
        style: { display: 'none' },
        accept: accept,
        multiple: multiple,
        onChange: this.onChange
      }),
      children
    );
  };

  return AjaxUploader;
}(_react.Component); /* eslint react/no-is-mounted:0 react/sort-comp:0 */

AjaxUploader.propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  accept: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  onStart: _propTypes2["default"].func,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  headers: _propTypes2["default"].object,
  beforeUpload: _propTypes2["default"].func,
  customRequest: _propTypes2["default"].func,
  onProgress: _propTypes2["default"].func,
  withCredentials: _propTypes2["default"].bool
};
exports["default"] = AjaxUploader;
module.exports = exports['default'];

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(15);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(71);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(73);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _uid = __webpack_require__(177);

var _uid2 = _interopRequireDefault(_uid);

var _warning = __webpack_require__(230);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint react/sort-comp:0 */
var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

// diferent from AjaxUpload, can only upload on at one time, serial seriously

var IframeUploader = function (_Component) {
  (0, _inherits3["default"])(IframeUploader, _Component);

  function IframeUploader() {
    var _temp, _this, _ret;

    (0, _classCallCheck3["default"])(this, IframeUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3["default"])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { uploading: false }, _this.file = {}, _this.onLoad = function () {
      if (!_this.state.uploading) {
        return;
      }
      var _this2 = _this,
          props = _this2.props,
          file = _this2.file;

      var response = void 0;
      try {
        var doc = _this.getIframeDocument();
        var script = doc.getElementsByTagName('script')[0];
        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }
        response = doc.body.innerHTML;
        props.onSuccess(response, file);
      } catch (err) {
        (0, _warning2["default"])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
        response = 'cross-domain';
        props.onError(err, null, file);
      }
      _this.endUpload();
    }, _this.onChange = function () {
      var target = _this.getFormInputNode();
      // ie8/9 don't support FileList Object
      // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
      var file = _this.file = {
        uid: (0, _uid2["default"])(),
        name: target.value
      };
      _this.startUpload();
      var _this3 = _this,
          props = _this3.props;

      if (!props.beforeUpload) {
        return _this.post(file);
      }
      var before = props.beforeUpload(file);
      if (before && before.then) {
        before.then(function () {
          _this.post(file);
        }, function () {
          _this.endUpload();
        });
      } else if (before !== false) {
        _this.post(file);
      } else {
        _this.endUpload();
      }
    }, _temp), (0, _possibleConstructorReturn3["default"])(_this, _ret);
  }

  IframeUploader.prototype.componentDidMount = function componentDidMount() {
    this.updateIframeWH();
    this.initIframe();
  };

  IframeUploader.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateIframeWH();
  };

  IframeUploader.prototype.getIframeNode = function getIframeNode() {
    return this.refs.iframe;
  };

  IframeUploader.prototype.getIframeDocument = function getIframeDocument() {
    return this.getIframeNode().contentDocument;
  };

  IframeUploader.prototype.getFormNode = function getFormNode() {
    return this.getIframeDocument().getElementById('form');
  };

  IframeUploader.prototype.getFormInputNode = function getFormInputNode() {
    return this.getIframeDocument().getElementById('input');
  };

  IframeUploader.prototype.getFormDataNode = function getFormDataNode() {
    return this.getIframeDocument().getElementById('data');
  };

  IframeUploader.prototype.getFileForMultiple = function getFileForMultiple(file) {
    return this.props.multiple ? [file] : file;
  };

  IframeUploader.prototype.getIframeHTML = function getIframeHTML(domain) {
    var domainScript = '';
    var domainInput = '';
    if (domain) {
      var script = 'script';
      domainScript = '<' + script + '>document.domain="' + domain + '";</' + script + '>';
      domainInput = '<input name="_documentDomain" value="' + domain + '" />';
    }
    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
  };

  IframeUploader.prototype.initIframeSrc = function initIframeSrc() {
    if (this.domain) {
      this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
    }
  };

  IframeUploader.prototype.initIframe = function initIframe() {
    var iframeNode = this.getIframeNode();
    var win = iframeNode.contentWindow;
    var doc = void 0;
    this.domain = this.domain || '';
    this.initIframeSrc();
    try {
      doc = win.document;
    } catch (e) {
      this.domain = document.domain;
      this.initIframeSrc();
      win = iframeNode.contentWindow;
      doc = win.document;
    }
    doc.open('text/html', 'replace');
    doc.write(this.getIframeHTML(this.domain));
    doc.close();
    this.getFormInputNode().onchange = this.onChange;
  };

  IframeUploader.prototype.endUpload = function endUpload() {
    if (this.state.uploading) {
      this.file = {};
      // hack avoid batch
      this.state.uploading = false;
      this.setState({
        uploading: false
      });
      this.initIframe();
    }
  };

  IframeUploader.prototype.startUpload = function startUpload() {
    if (!this.state.uploading) {
      this.state.uploading = true;
      this.setState({
        uploading: true
      });
    }
  };

  IframeUploader.prototype.updateIframeWH = function updateIframeWH() {
    var rootNode = _reactDom2["default"].findDOMNode(this);
    var iframeNode = this.getIframeNode();
    iframeNode.style.height = rootNode.offsetHeight + 'px';
    iframeNode.style.width = rootNode.offsetWidth + 'px';
  };

  IframeUploader.prototype.abort = function abort(file) {
    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (uid === this.file.uid) {
        this.endUpload();
      }
    } else {
      this.endUpload();
    }
  };

  IframeUploader.prototype.post = function post(file) {
    var formNode = this.getFormNode();
    var dataSpan = this.getFormDataNode();
    var data = this.props.data;
    var onStart = this.props.onStart;

    if (typeof data === 'function') {
      data = data(file);
    }
    var inputs = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
      }
    }
    dataSpan.innerHTML = inputs.join('');
    formNode.submit();
    dataSpan.innerHTML = '';
    onStart(file);
  };

  IframeUploader.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        disabled = _props.disabled,
        className = _props.className,
        prefixCls = _props.prefixCls,
        children = _props.children,
        style = _props.style;

    var iframeStyle = (0, _extends3["default"])({}, IFRAME_STYLE, {
      display: this.state.uploading || disabled ? 'none' : ''
    });
    var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    return _react2["default"].createElement(
      Tag,
      {
        className: cls,
        style: (0, _extends3["default"])({ position: 'relative', zIndex: 0 }, style)
      },
      _react2["default"].createElement('iframe', {
        ref: 'iframe',
        onLoad: this.onLoad,
        style: iframeStyle
      }),
      children
    );
  };

  return IframeUploader;
}(_react.Component);

IframeUploader.propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  accept: _propTypes2["default"].string,
  onStart: _propTypes2["default"].func,
  multiple: _propTypes2["default"].bool,
  children: _propTypes2["default"].any,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  action: _propTypes2["default"].string,
  name: _propTypes2["default"].string
};
exports["default"] = IframeUploader;
module.exports = exports['default'];

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(71);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(73);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AjaxUploader = __webpack_require__(231);

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = __webpack_require__(232);

var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function empty() {}

var Upload = function (_Component) {
  (0, _inherits3["default"])(Upload, _Component);

  function Upload() {
    var _temp, _this, _ret;

    (0, _classCallCheck3["default"])(this, Upload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3["default"])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      Component: null
    }, _temp), (0, _possibleConstructorReturn3["default"])(_this, _ret);
  }

  Upload.prototype.componentDidMount = function componentDidMount() {
    if (this.props.supportServerRender) {
      /* eslint react/no-did-mount-set-state:0 */
      this.setState({
        Component: this.getComponent()
      }, this.props.onReady);
    }
  };

  Upload.prototype.getComponent = function getComponent() {
    return typeof FormData !== 'undefined' ? _AjaxUploader2["default"] : _IframeUploader2["default"];
  };

  Upload.prototype.abort = function abort(file) {
    this.refs.inner.abort(file);
  };

  Upload.prototype.render = function render() {
    if (this.props.supportServerRender) {
      var _ComponentUploader = this.state.Component;
      if (_ComponentUploader) {
        return _react2["default"].createElement(_ComponentUploader, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
      }
      return null;
    }
    var ComponentUploader = this.getComponent();
    return _react2["default"].createElement(ComponentUploader, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
  };

  return Upload;
}(_react.Component);

Upload.propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  prefixCls: _propTypes2["default"].string,
  action: _propTypes2["default"].string,
  name: _propTypes2["default"].string,
  multipart: _propTypes2["default"].bool,
  onError: _propTypes2["default"].func,
  onSuccess: _propTypes2["default"].func,
  onProgress: _propTypes2["default"].func,
  onStart: _propTypes2["default"].func,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  headers: _propTypes2["default"].object,
  accept: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  beforeUpload: _propTypes2["default"].func,
  customRequest: _propTypes2["default"].func,
  onReady: _propTypes2["default"].func,
  withCredentials: _propTypes2["default"].bool,
  supportServerRender: _propTypes2["default"].bool
};
Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onReady: empty,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};
exports["default"] = Upload;
module.exports = exports['default'];

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Upload = __webpack_require__(233);

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Upload2["default"]; // export this package's api

module.exports = exports['default'];

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = upload;
function getError(option, xhr) {
  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
function upload(option) {
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr));
  };

  xhr.open('post', option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
module.exports = exports['default'];

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_animate__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_Icon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_Progress__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Upload_css__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Upload_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Upload_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadList; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UploadList Component
 * @author heifade
 */






// import Tooltip from '../tooltip';

// import classNames from 'classnames';
// import { UploadListProps } from './interface';


var previewFile = function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
};

var UploadList = (_dec = __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_7__Upload_css___default.a, { allowMultiple: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* allowMultiple */] }), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(UploadList, _React$Component);

  function UploadList(props) {
    _classCallCheck(this, UploadList);

    var _this = _possibleConstructorReturn(this, (UploadList.__proto__ || Object.getPrototypeOf(UploadList)).call(this, props));

    _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;
      if (onRemove) {
        onRemove(file);
      }
    };

    _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }
      e.preventDefault();
      onPreview(file);
    };

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  _createClass(UploadList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
        return;
      }
      (this.props.items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
          return;
        }
        /*eslint-disable */
        file.thumbUrl = '';
        /*eslint-enable */
        previewFile(file.originFileObj, function (previewDataUrl) {
          /*eslint-disable */
          file.thumbUrl = previewDataUrl;
          /*eslint-enable */
          _this2.forceUpdate();
        });
      });
    }

    // 删除

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$items = _props.items,
          items = _props$items === undefined ? [] : _props$items,
          listType = _props.listType,
          showPreviewIcon = _props.showPreviewIcon,
          showRemoveIcon = _props.showRemoveIcon,
          locale = _props.locale,
          disabled = _props.disabled;

      var list = items.map(function (file) {
        var progress = void 0;
        var icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { size: 12, styleName: 'status', name: file.status === 'uploading' ? 'attachment' : 'attachment' });

        if (listType === 'picture' || listType === 'picture-card') {
          if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
            if (listType === 'picture-card') {
              icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { styleName: 'uploading-text' },
                locale.uploading
              );
            } else {
              icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
            }
          } else {
            icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                styleName: prefixCls + '-list-item-thumbnail',
                onClick: function onClick(e) {
                  return _this3.handlePreview(file, e);
                },
                href: file.url || file.thumbUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: file.thumbUrl || file.url, alt: file.name, styleName: 'imgshow' })
            );
          }
        }

        if (file.status === 'uploading') {
          // show loading icon if upload progress listener is disabled
          var loadingProgress = 'percent' in file ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__progress_Progress__["a" /* default */], _extends({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent })) : null;

          progress = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { styleName: prefixCls + '-list-item-progress', key: 'progress' },
            loadingProgress
          );
        }
        // const message = file.response || (file.error && file.error.statusText) || locale.uploadError;
        var message = file.status === 'error' ? file.response || locale.uploadError : file.response;

        // console.log(file);

        var preview = file.url ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            href: file.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            styleName: prefixCls + '-list-item-name',
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            }
            // title={file.name}
            , title: message
          },
          file.name
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            styleName: prefixCls + '-list-item-name'
            // title={file.name}
            , title: message
          },
          file.name
        );
        var style = file.url || file.thumbUrl ? undefined : {
          pointerEvents: 'none',
          opacity: 0.5
        };
        var previewIcon = showPreviewIcon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            href: file.url || file.thumbUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: style,
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: locale.previewFile
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { name: 'visible', size: 20, styleName: 'eye' })
        ) : null;
        // picture-card 删除按钮
        var removeIcon = showRemoveIcon && !disabled ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            href: 'javascript:void(0)',
            title: locale.removeFile,
            onClick: function onClick() {
              return _this3.handleClose(file);
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { name: 'recycle', size: 20, styleName: 'remove' })
        ) : null;
        // text 删除按钮
        var removeIconCross = showRemoveIcon && !disabled ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            href: 'javascript:void(0)',
            title: locale.removeFile,
            onClick: function onClick() {
              return _this3.handleClose(file);
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icon_Icon__["a" /* default */], { name: 'close', size: 10, styleName: 'remove' })
        ) : null;
        var actions = listType === 'picture-card' && file.status !== 'uploading' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { styleName: prefixCls + '-list-item-actions' },
          previewIcon,
          removeIcon
        ) : removeIconCross;

        var iconAndPreview = file.status === 'error' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          icon,
          preview
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          icon,
          preview
        );

        // const infoUploadingClass = classNames({
        //   [`${prefixCls}-list-item`]: true,
        //   [`${prefixCls}-list-item-${file.status}`]: true,
        // });

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { styleName: prefixCls + '-list-item ' + prefixCls + '-list-item-' + file.status, key: file.uid },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { styleName: prefixCls + '-list-item-info' },
            iconAndPreview
          ),
          actions,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_rc_animate___default.a,
            { transitionName: 'fade', component: '' },
            progress
          )
        );
      });
      // const listClassNames = classNames({
      //   [`${prefixCls}-list`]: true,
      //   [`${prefixCls}-list-${listType}`]: true,
      // });
      var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_rc_animate___default.a,
        {
          transitionName: prefixCls + '-' + animationDirection,
          component: 'div',
          styleName: prefixCls + '-list ' + prefixCls + '-list-' + listType
        },
        list
      );
    }
  }]);

  return UploadList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.displayName = 'UploadList', _class2.defaultProps = {
  listType: 'text', // or picture-card
  items: [],
  onRemove: null,
  onPreview: null,
  prefixCls: 'upload',
  showRemoveIcon: true,
  showPreviewIcon: true,
  disabled: false,
  progressAttr: {
    strokeWidth: 2,
    showInfo: false
  },
  locale: {}
}, _class2.propTypes = {
  listType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf('text', 'picture-card'),
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object),
  onRemove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onPreview: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  prefixCls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  showPreviewIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  showRemoveIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  progressAttr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
}, _temp)) || _class);


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fileToObject;
/* harmony export (immutable) */ __webpack_exports__["c"] = genPercentAdd;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFileItem;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeFileItem;
// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file,
    status: null
  };
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  var k = 0.1;
  var i = 0.01;
  var end = 0.98;
  return function f(s) {
    var start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k -= i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start * 100;
  };
}

function getFileItem(file, fileList) {
  var matchKey = file.uid ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}

function removeFileItem(file, fileList) {
  var matchKey = file.uid ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbj81Y2E2KioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDJkZTYwNTA4OGZkOTk2OGRjZmYwPzczZjUqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wifT9kMmFiKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb25zdGFudHMuanM/YTc3NCoqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCI/MDQwNSoqIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIj8wYmI0KioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiPzcxOGYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/YWVjNCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzQwYTkqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/OTgxMioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz83ZTgxKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz80MzNkKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz85NDU0KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9kNTQ1KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzPzMyNGUqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZTE5NSoiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz8xMDEwKiIsIndlYnBhY2s6Ly8vLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanM/YmM5ZioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzdiMTgqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9jZTAzKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzP2UwMGYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/OTEwZCoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwifT83YTVhIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL0ljb24uanM/ODk0YSoqIiwid2VicGFjazovLy8uL34vLjAuMTEuOUBwcm9jZXNzL2Jyb3dzZXIuanM/M2JlZSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/NTBmNCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MzA3OSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz8zNTNhKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL0ljb24uY3NzPzhjM2YqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9pbmRleC5qcz85YTgwKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvYWNjb3VudC5zdmc/NmQyZioqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2Fycm93LWxlZnQuc3ZnPzJjNDMqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9hcnJvdy1yaWdodC5zdmc/ZWJiNSoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2F0dGFjaG1lbnQuc3ZnPzQxYzkqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9jYXV0aW9uLnN2Zz9jMmY4KioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvY2hlY2suc3ZnPzlhODcqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9jbG9zZS5zdmc/MmQ3YyoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2RvdWJsZS1hcnJvdy1sZWZ0LnN2Zz84ZDZiKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZG91YmxlLWFycm93LXJpZ2h0LnN2Zz85MjUzKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZWxsaXBzaXMuc3ZnP2Y2ZTIqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9lcnJvci5zdmc/MmU3MyoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2ZhaWwuc3ZnP2EzNDYqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9maW5hbmNlLnN2Zz82NzE4KioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvaG9tZS5zdmc/MTUwYioqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2luZm8uc3ZnPzJjNDQqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9wYXBlci5zdmc/YWY1MSoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3BsdXMuc3ZnPzk0M2UqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9xdWVzdGlvbi5zdmc/ZmViOSoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3F1ZXN0aW9uMi5zdmc/ZjNkYyoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3JlY3ljbGUuc3ZnPzFjZDkqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9zZWFyY2guc3ZnPzU0MjAqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9zZXR0aW5nLnN2Zz80ZWYzKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvc3VjY2Vzcy5zdmc/YTIxNCoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3VwbG9hZC5zdmc/MGRiZCoqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3Zpc2libGUuc3ZnPzg4MTcqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy93YXJuaW5nLnN2Zz83YTE1KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/YTczNioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/MTkwNSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz8zM2M4KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcz9lODMwKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/NDVhYyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2FjMDcqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzEwYjQqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/MjEyOSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/NDUxYyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz9jZTUxKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcz8zNjBmKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcz8yZGZiKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcz80YTQwKiIsIndlYnBhY2s6Ly8vLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzPzUzNTQqIiwid2VicGFjazovLy8uL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanM/OWM1YSoiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzPzc2NGIqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/MWEwMyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/Y2E3NCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzPzFmODkqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzP2I1NWUqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcz8wNGE3KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanM/ZTllMyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2QwNTMqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz84MGM4KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzPzdkOGMqIiwid2VicGFjazovLy8uL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2JjNjAqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/ZGU0NCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzPzJlZjYqIiwid2VicGFjazovLy8uL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcz84NzhkKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjAuM0Bjb21wb25lbnQtaW5kZXhvZi9pbmRleC5qcz9hZjJkIiwid2VicGFjazovLy8uL34vLjIuMy42QHJjLWFuaW1hdGUvbGliL3V0aWwuanM/MjU4ZSIsIndlYnBhY2s6Ly8vLi9+Ly4yLjMuNkByYy1hbmltYXRlL2xpYi9pbmRleC5qcz8zYzA1Iiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzFkZmMqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2MyOGMqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanM/MDhjZSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcz9lOTJjKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9lMzQzKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzPzlmN2IqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz83ZGM2KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzPzYzZDIqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzPzc2NjcqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz85MWJiKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanM/ZGZkZioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcz85ODJmKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanM/NzU3MioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/MzZmNSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanM/YzhhNioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/OWE1ZioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcz8yZmU4KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz83NzE4KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzNkOWIqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz8xZTkxKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzP2JhMDAqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcz85ZDhlKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz9kMjAxKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcz8yMTM3KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzPzA0NGYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanM/OWViNioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcz83ZGZhKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanM/YjM5ZCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcz81N2EwKiIsIndlYnBhY2s6Ly8vLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/NWI0YioiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/ZTcwZioiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanM/OTExNSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4yLjZAY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanM/MTIxNiIsIndlYnBhY2s6Ly8vLi9+Ly4xLjMuMkBjc3MtYW5pbWF0aW9uL2xpYi9FdmVudC5qcz82N2IxIiwid2VicGFjazovLy8uL34vLjEuMy4yQGNzcy1hbmltYXRpb24vbGliL2luZGV4LmpzPzNlMTAiLCJ3ZWJwYWNrOi8vLy4vfi8uMi4zLjZAcmMtYW5pbWF0ZS9saWIvQW5pbWF0ZS5qcz82ZTgyIiwid2VicGFjazovLy8uL34vLjIuMy42QHJjLWFuaW1hdGUvbGliL0FuaW1hdGVDaGlsZC5qcz80MjgwIiwid2VicGFjazovLy8uL34vLjIuMy42QHJjLWFuaW1hdGUvbGliL0NoaWxkcmVuVXRpbHMuanM/ZThjNiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcz8wZTdmKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/NWY5YyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcz8xYTc2KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcz84ZGI2KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanM/OGExNCoiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzPzc2OWMqIiwid2VicGFjazovLy8uL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/NzViYSoiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzL1Byb2dyZXNzLmpzP2MxNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvUHJvZ3Jlc3MuY3NzPzJmOTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL1VwbG9hZC5jc3M/MmUxOSIsIndlYnBhY2s6Ly8vLi9+Ly4yLjMuNUByYy11cGxvYWQvbGliL3VpZC5qcz9mZmJjIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91cGxvYWQvVXBsb2FkLmpzPzI0YWEiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3VwbG9hZC9pbmRleC5qcz9iOWNlIiwid2VicGFjazovLy8uL34vLjIuMS4wQHdhcm5pbmcvYnJvd3Nlci5qcz80ZjFmIiwid2VicGFjazovLy8uL34vLjIuMy41QHJjLXVwbG9hZC9saWIvQWpheFVwbG9hZGVyLmpzPzNiYTMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi4zLjVAcmMtdXBsb2FkL2xpYi9JZnJhbWVVcGxvYWRlci5qcz82YTlhIiwid2VicGFjazovLy8uL34vLjIuMy41QHJjLXVwbG9hZC9saWIvVXBsb2FkLmpzPzBlNGMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi4zLjVAcmMtdXBsb2FkL2xpYi9pbmRleC5qcz9iNWY3Iiwid2VicGFjazovLy8uL34vLjIuMy41QHJjLXVwbG9hZC9saWIvcmVxdWVzdC5qcz9hMmM4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91cGxvYWQvVXBsb2FkTGlzdC5qcz8wZGJlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91cGxvYWQvdXRpbHMuanM/Yjk2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssICwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiLCBcImNsYXNzbmFtZXNcIiwgXCJvYmplY3QtYXNzaWduXCIsIF0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhcmtVSVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcInJlYWN0LWNzcy1tb2R1bGVzXCJdLCByb290W1wiY2xhc3NuYW1lc1wiXSwgcm9vdFtcIm9iamVjdC1hc3NpZ25cIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkZTYwNTA4OGZkOTk2OGRjZmYwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCIsImV4cG9ydCBjb25zdCBhbGxvd011bHRpcGxlID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOX0VOVU0gPSBuZXcgU2V0KFtcbiAgJ3RsJyxcbiAgJ3RyJyxcbiAgJ3RjJyxcbiAgJ2JsJyxcbiAgJ2JyJyxcbiAgJ2JjJyxcbiAgJ2NsJyxcbiAgJ2NyJyxcbl0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNSA2IDcgOCA5IDEwIDExIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTQgMTcgMTgiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyA4IDE1IDE3IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCA2IDcgMTMgMTUiLCIvKipcbiAqIEljb24gQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24uY3NzJztcblxuaW1wb3J0IElDT05TIGZyb20gJy4vaWNvbnMnO1xuXG5jbGFzcyBJY29uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0ljb24nXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzaXplOiAzMixcbiAgICBjb2xvcjogbnVsbCxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBzaXplLCBjb2xvciwgY2xhc3NOYW1lLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN2Z1Byb3BzID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IHNpemUsXG4gICAgICAgIGZpbGw6IGNvbG9yLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhjbGFzc05hbWUsIHN0eWxlcy5JY29uKSxcbiAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgIH07XG4gICAgY29uc3QgSWNvbk5vZGUgPSBJQ09OU1tuYW1lXTtcbiAgICByZXR1cm4gPEljb25Ob2RlIHsuLi5zdmdQcm9wc30gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL0ljb24uanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjExLjlAcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkljb25cIjpcIl8yalNsNVJKXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaWNvbi9JY29uLmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IDYgNyA4IDkgMTAgMTEgMTIiLCJpbXBvcnQgYWNjb3VudCBmcm9tICcuL2FjY291bnQuc3ZnJztcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnLi9hcnJvdy1sZWZ0LnN2Zyc7XG5pbXBvcnQgYXJyb3dSaWdodCBmcm9tICcuL2Fycm93LXJpZ2h0LnN2Zyc7XG5pbXBvcnQgYXR0YWNobWVudCBmcm9tICcuL2F0dGFjaG1lbnQuc3ZnJztcbmltcG9ydCBjYXV0aW9uIGZyb20gJy4vY2F1dGlvbi5zdmcnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vY2hlY2suc3ZnJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgZG91YmxlQXJyb3dMZWZ0IGZyb20gJy4vZG91YmxlLWFycm93LWxlZnQuc3ZnJztcbmltcG9ydCBkb3VibGVBcnJvd1JpZ2h0IGZyb20gJy4vZG91YmxlLWFycm93LXJpZ2h0LnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXMgZnJvbSAnLi9lbGxpcHNpcy5zdmcnO1xuaW1wb3J0IGVycm9yIGZyb20gJy4vZXJyb3Iuc3ZnJztcbmltcG9ydCBmYWlsIGZyb20gJy4vZmFpbC5zdmcnO1xuaW1wb3J0IGZpbmFuY2UgZnJvbSAnLi9maW5hbmNlLnN2Zyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuc3ZnJztcbmltcG9ydCBpbmZvIGZyb20gJy4vaW5mby5zdmcnO1xuaW1wb3J0IHBhcGVyIGZyb20gJy4vcGFwZXIuc3ZnJztcbmltcG9ydCBwbHVzIGZyb20gJy4vcGx1cy5zdmcnO1xuaW1wb3J0IHF1ZXN0aW9uIGZyb20gJy4vcXVlc3Rpb24uc3ZnJztcbmltcG9ydCBxdWVzdGlvbjIgZnJvbSAnLi9xdWVzdGlvbjIuc3ZnJztcbmltcG9ydCByZWN5Y2xlIGZyb20gJy4vcmVjeWNsZS5zdmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC5zdmcnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nLnN2Zyc7XG5pbXBvcnQgc3VjY2VzcyBmcm9tICcuL3N1Y2Nlc3Muc3ZnJztcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi91cGxvYWQuc3ZnJztcbmltcG9ydCB2aXNpYmxlIGZyb20gJy4vdmlzaWJsZS5zdmcnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nLnN2Zyc7XG5cbmNvbnN0IElDT05TID0ge1xuICBhY2NvdW50LFxuICAnYXJyb3ctbGVmdCc6IGFycm93TGVmdCxcbiAgJ2Fycm93LXJpZ2h0JzogYXJyb3dSaWdodCxcbiAgYXR0YWNobWVudCxcbiAgY2F1dGlvbixcbiAgY2hlY2ssXG4gIGNsb3NlLFxuICAnZG91YmxlLWFycm93LWxlZnQnOiBkb3VibGVBcnJvd0xlZnQsXG4gICdkb3VibGUtYXJyb3ctcmlnaHQnOiBkb3VibGVBcnJvd1JpZ2h0LFxuICBlbGxpcHNpcyxcbiAgZXJyb3IsXG4gIGZhaWwsXG4gIGZpbmFuY2UsXG4gIGhvbWUsXG4gIGluZm8sXG4gIHBhcGVyLFxuICBwbHVzLFxuICBxdWVzdGlvbixcbiAgcXVlc3Rpb24yLFxuICByZWN5Y2xlLFxuICBzZWFyY2gsXG4gIHNldHRpbmcsXG4gIHN1Y2Nlc3MsXG4gIHVwbG9hZCxcbiAgdmlzaWJsZSxcbiAgd2FybmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElDT05TO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjUgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwMC4xOTVcIiBoZWlnaHQ9XCIyMDBcIiB7Li4udGhpcy5wcm9wc30+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9XCJNNjE1LjM3MiA1OTUuMTY2YTI0LjM4MyAyNC4zODMgMCAwIDEtMjAuODg4LTI1LjE1Yy44NTMtMjAuNjMyIDYuNTY1LTMyLjMxMiAxOS4xODMtNDcuNDAyIDUuNzk3LTYuOTkgNy4zMzItOS4zNzggOC41MjUtMTMuMzg1IDEuNDUtNC42ODkgMi4wNDYtOS44MDQgMi42NDMtMjIuNTkyIDEuMTk0LTIzLjE5IDIuODE0LTM0LjAxNyA5LjcyLTQ2Ljk3NiA2LjA1Mi0xMS40MjQgMTIuOTU4LTE2LjYyNSAyNi4wMDItMjMuNTNhNDEuOTQ2IDQxLjk0NiAwIDAgMCA1Ljk2OC0zLjQxYzMuNjY2LTUuMTE2IDcuNjczLTE3LjY0OCA5Ljk3NS0zMC41MjIgNC45NDUtMjcuNzkzIDUuMTE1LTQ4LjU5NS0xLjAyMy02MS42NGEyNzYuNzM4IDI3Ni43MzggMCAwIDAtNi4zMS0xMS42OCA2Ni43NTUgNjYuNzU1IDAgMCAxLTcuNDE2LTI1LjkxNyAzMDkuNDc2IDMwOS40NzYgMCAwIDEgMS43MDUtNTAuM2wxLjAyMy0xMS45MzYgMi4wNDYtMjIuNTA4YTI2NC45NzMgMjY0Ljk3MyAwIDAgMCAuMjU2LTQ1Ljg2NyAyNzUuMzc0IDI3NS4zNzQgMCAwIDAtNi4zOTQtMzAuNTIxIDk5LjA2NyA5OS4wNjcgMCAwIDAtNy41ODgtMTYuNzk2IDUwLjk4MyA1MC45ODMgMCAwIDAtNS4yODYtNy43NThsLTI1LjA2NS00LjQzMy0xMi41MzItNi4zOTQtMTUuNTE3LTE1LjM0NmMtNTMuNTQtMzMuNTktMTA0LjE4Mi0yNy4wMjYtMTg1LjAwNCA2LjQ4LTU5LjMzNyAxOS43NzgtODQuMDYxIDgwLjY1LTYwLjM2IDE5NS43NDVhNjIuNzQ4IDYyLjc0OCAwIDAgMS03LjY3MyA0NS41MjZsLTMuMjQgNi4yMjQuNDI2IDQuOTQ1IDEuNDUgMjAuODAyYy41OTYgOC41MjYgMS4zNjQgMTUuOTQzIDIuMzAyIDIyLjkzNCAzLjI0IDI0LjM4MyA4Ljg2NiA0MC4wNyAxMy4yMTQgNDIuODgzLTEuOTYtMS4xOTMgMi4xMzEgMCA0LjI2My41OTdsMy4wNy42ODJhMjMuMjc1IDIzLjI3NSAwIDAgMSAyNC43MjMgMjIuMTY2bDMuNDEgMzcuMjU3YzIuMTMyIDIyLjMzNyAyLjEzMiAyMi4zMzcgMi44OTkgMzguNzkuODUyIDIuNDczIDIuMDQ2IDQuMDkzIDYuMDUzIDguNjEyIDEyLjUzMyAxMy44OTYgMTguNSAyNC4xMjcgMjEuNDg0IDQxLjI2M2EyNC4yOTggMjQuMjk4IDAgMCAxLTE4LjE1OSAyNy43OTNsLTguMzU1IDIuMDQ2Yy0zLjc1MSA4LjI3LTYuODIgMTQuOTItMTAuMjMgMjEuNDg1LTExLjUxIDIzLjEwNC0yMi4wODIgMzguNzktMzQuOTU1IDQ3LjkxM2wtNy41ODggMy41OC0xNC43NSA0LjE3OC0yNC4yOTcgNi41NjVjLTIxLjMxNCA4Ljk1Mi00My4zMSAxOC41LTc2LjczIDMzLjI1bC01LjU0MSAyLjM4N2MtNTAuMTMgMjIuMDgtNTIuMDA2IDIyLjkzMy02OS45OTUgMzAuNjkyLTguMDE0IDMuNDEtMTUuNzcyIDYuMzk0LTI3Ljc5MyAxMC42NTZsLTUuNzk3IDIuMDQ3Yy00NS4yNyAxNi4xMTMtNjAuMzYgMjUuNjYxLTY2LjE1OCAzOS4yMTcgMCAxMS45MzYtLjE3IDE4LjI0NS0xLjE5NCA2Mi40MDdsLS41MTEgMjEuNTdjLS4zNDEgMTkuMzUyLS41OTcgMzUuMTI0LS42ODIgNDguMTY5bDIxLjgyNSAzLjgzNmMzMi45OTQgNS42MjcgNjkuNzM5IDExLjI1NCAxMDkuMzgyIDE2LjU0IDExMy4xMzQgMTUuMDkgMjI2LjI2OCAyNC4xMjcgMzMxLjY0MyAyNC4xMjdhMjU0OC4yNzcgMjU0OC4yNzcgMCAwIDAgMzMxLjY0My0yNC4xMjcgMjk4OS41NTggMjk4OS41NTggMCAwIDAgMTMxLjIwNy0yMC40NjJjMC0xMi45NTktLjM0LTI4LjczLS42ODItNDguMDg0bC0uNTExLTIxLjMxM2MtMS4wMjMtNDQuMjQ4LTEuMTk0LTUwLjcyNy4wODUtNTQuOTA1LTcuMTYxLTIxLjMxNC0yMi4xNjYtMzAuOTQ3LTY3LjUyMi00Ni45NzVsLTUuNzk3LTIuMDQ3YTQzNC44MDEgNDM0LjgwMSAwIDAgMS0yNy43MDgtMTAuNjU2Yy0xNy45MDQtNy43NTktMTYuODgtNy4zMzItNjkuOTEtMzAuNjkybC02LjEzOC0yLjY0M2MtMzIuOTA4LTE0LjQ5NC01NC45OS0yNC4wNDItNzMuMzItMzEuOTdsLTIxLjA1Ny01Ljg4My02LjEzOS0xLjcwNi0xNC43NDktNC4xNzctNy41MDItMy41OGMtMTIuOTYtOS4xMjMtMjMuNDQ1LTI0LjcyNS0zNS4xMjUtNDcuOTE0YTU4NC41OTUgNTg0LjU5NSAwIDAgMS05LjU0OS0yMC4xMmwtMTMuMzg1LTEuOTYxem00Ni43Mi01NDQuNzhsOC4xODQgMy4wNjlhNzEuNjE0IDcxLjYxNCAwIDAgMSAyNC44OTUgMjcuNTM3YzUuNTQxIDkuNzIgOS4zNzggMTkuMDEyIDExLjkzNSAyNy41MzggNS42MjcgMjMuMDE5IDYuODIgMjguNTYgOC4wMTQgMzcuNzY4IDEuMjggMTAuMjMgMS40NSAxOS4zNTMgMS4wMjQgNDAuMDcgMCAzLjQxLS40MjcgOC4xODQtMS4xMDkgMTYuMTEzbC0yLjA0NiAyMi41OTMtMS4wMjMgMTEuNTFjLTEuNzA1IDIwLjk3Mi0yLjM4NyAzNS40NjUtMS43MDUgNDEuMTc3YTE5LjUyMyAxOS41MjMgMCAwIDAgMi4wNDYgOC40NCAyMzUuMzA0IDIzNS4zMDQgMCAwIDEgNy4zMzIgMTMuNzI3YzExLjU5NSAyNC44OTQgMTEuNDI0IDUzLjcxIDQuODYgOTAuNzk3LTMuNDEgMTkuMjY3LTkuMzc5IDM3LjUxMi0xNy45OSA0OS44NzQtNS45NjcgOC41MjUtMTEuNTk0IDEyLjUzMi0yMi44NDggMTguNDE1YTMyLjU2NyAzMi41NjcgMCAwIDAtNS45NjggMy40MWMtMi4zODcgNC41MTktMy40MSAxMC42NTctNC4xNzcgMjUuODMyLS44NTMgMTcuNzM0LTEuNzA1IDI1LjQwNi00Ljc3NCAzNS4zODFhNzUuMjggNzUuMjggMCAwIDEtMTYuMDI4IDI4LjEzNWM2LjU2NCAyLjA0NiAxMS45MzUgNi44MiAxNC45MiAxMy4wNDQgNi4zMDggMTQuMTUyIDEwLjE0NSAyMi40MjIgMTQuMjM3IDMwLjYwNiA2LjgyIDEzLjQ3IDEyLjk1OSAyMy4yNzUgMTcuMzA3IDI3Ljg3OWw5LjYzNCAyLjcyOCA2LjIyMyAxLjcwNSAyMy44NzIgNi44MmMyMS40ODQgOS4xMjMgNDMuNzM2IDE4Ljc1NiA3Ni45ODUgMzMuMzM1bDUuOTY4IDIuNzI4YzUyLjk0MyAyMy4yNzUgNTIuMDA2IDIyLjg0OSA2OS43MzkgMzAuNTIyYTM5My4wMjYgMzkzLjAyNiAwIDAgMCAzMC40MzYgMTEuNTFjNTguOTExIDIwLjg4NyA4My44MDYgMzYuNzQ0IDk4LjcyNSA4NS4wODQgMCAxMS4zMzkuMDg2IDE3LjkwMyAxLjEwOSA2MS42NGwuNTExIDIxLjMxM2MuNjgyIDMwLjk0OC44NTMgNTIuOTQ0LjUxMiA2OS45MWEyNC4zODMgMjQuMzgzIDAgMCAxLTE5LjYwOSAyMy4zNiAzMDM3Ljk4MyAzMDM3Ljk4MyAwIDAgMS0xNTMuNzE1IDI0LjU1M2MtMTE1LjA5NSAxNS4zNDYtMjMwLjE5IDI0LjU1My0zMzguMDM3IDI0LjU1My0xMDcuNzYyIDAtMjIyLjk0Mi05LjIwNy0zMzguMDM3LTI0LjU1M2EzMDM3LjY0MiAzMDM3LjY0MiAwIDAgMS0xNTMuOC0yNC41NTRBMjQuMzgzIDI0LjM4MyAwIDAgMSAuMDg1IDk1MC41MWMtLjI1Ni0xNi44OCAwLTM4Ljg3Ni41OTctNjkuODI0bC41MTItMjEuNjU1YzEuMDIzLTQzLjQ4IDEuMTA4LTUwLjA0NSAyLjM4Ny02OS4wNTYgMTMuNjQtNDAuNDk3IDM4LjQ1LTU2LjQ0IDk3LjI3Ni03Ny4zMjdsNS43OTctMi4wNDZjMTEuMDgzLTMuOTIyIDE3Ljk5LTYuNTY1IDI0LjcyNC05LjQ2MyAxNy45MDQtNy42NzMgMTkuODY1LTguNTI2IDY5LjgyNC0zMC41MjJsNS40NTctMi40NzJjMzMuNzYtMTQuODM1IDU1LjkyNy0yNC40NjggODAuNDgtMzQuNTI4bDI3LjExMi03LjU4OCA5LjYzMy0yLjcyOGM0LjI2My00LjYwNCAxMC41NzItMTQuNDk0IDE3LjMwNy0yNy44NzkgNC4wOTItOC4xODQgNy45MjktMTYuNDU0IDE0LjIzOC0zMC41MjFhMjQuMjk4IDI0LjI5OCAwIDAgMSA3LjA3Ni05LjAzNyA2Ny4wMSA2Ny4wMSAwIDAgMS0xNS44NTctMjkuNDEzbC00LjA5My00NC43Ni0xLjc5LTE5LjI2N2E0NS4yNyA0NS4yNyAwIDAgMS0xMS4zMzktNC43NzRjLTIxLjA1OC0xMy40Ny0zMC4zNS0zOS4zODgtMzUuNDY2LTc3LjU4MmE0NjcuMzY5IDQ2Ny4zNjkgMCAwIDEtMi41NTgtMjUuNTc3bC0xLjQ1LTIxLjE0My0uNTEtNi4yMjRhMzkuNzI5IDM5LjcyOSAwIDAgMSAxLjQ0OS0xNC40MDhjMS41MzQtNS41NDIuNjgyLTMuNzUxIDcuMzMyLTE2LjU0IDMuNDEtNi4zMDggMy45MjEtOC44NjYgMy4wNjktMTMuMTI5LTI4LjIyLTEzNy4wMDUgNi44Mi0yMjMuMTEzIDkxLjA1Mi0yNTEuMDc2IDkyLjY3My0zOC40NSAxNTYuNy00Ni44OSAyMzEuODk0LjkzOGwxMy44OTcgMTMuMjE0IDIzLjk1NyA0LjI2M3pcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvYWNjb3VudC5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTIzMC45MzUgNTEyTDc0Mi40MjkuNTA2bDUxLjE0MiA1MS4xNDJMMzMzLjIxOSA1MTJsNDYwLjM1MiA0NjAuMzUyLTUxLjE0MiA1MS4xNDJMMjMwLjkzNSA1MTJ6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2Fycm93LWxlZnQuc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHsuLi50aGlzLnByb3BzfT48ZGVmcz48c3R5bGUgLz48L2RlZnM+PHBhdGggZD1cIk03OTMuMDY1IDUxMmwtNTEuMTQyIDUxLjE0Mi00NjAuMzUyIDQ2MC4zNTItNTEuMTQyLTUxLjE0Mkw2OTAuNzggNTEyIDIzMC40MyA1MS42NDggMjgxLjU3LjUwNmw0NjAuMzUyIDQ2MC4zNTJMNzkzLjA2NSA1MTJ6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2Fycm93LXJpZ2h0LnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMyAxM1wiIHsuLi50aGlzLnByb3BzfT48cGF0aCBkPVwiTTcuODU5IDIuOTc0Yy0uMzA2LjMwNi0uNTcuNTY4LTEuMDE3IDEuMDEtMS45MjQgMS45LTIuNDIgMi40MzEtMi44MTggMy4xMDctLjU0OC45My0uNDMyIDEuNzIyLjM2IDIuNDk1IDEuNDUgMS40MTQgMi4yODYuOTEzIDUuNjg2LTIuNTIyLjM4Mi0uMzg2LjU5OC0uNjA0Ljg1Mi0uODU3IDEuNzQyLTEuNzQzIDIuMTUtMy40NC4zNDgtNS4xMzMtMS40MjItMS4zMzYtMy4xNzYtMS4yMDYtNS4wOTUuMzAxLTEuMzY1IDEuMzYtMS4zNjUgMS4zNi0yLjg0NSAyLjg0Qy4xMSA3LjQzNSAwIDkuODQyIDIuMjEyIDExLjc5M2MyLjIyMSAxLjk2IDQuNzgxIDEuNDg3IDguNjM4LTIuMzdhLjUuNSAwIDEgMC0uNzA4LS43MDdjLTMuNTIgMy41Mi01LjUgMy44ODctNy4yNjkgMi4zMjctMS43NS0xLjU0NS0xLjY3MS0zLjI4NSAxLjE2NC02LjEybDIuOC0yLjhjMS41MTktMS4xOSAyLjcyOC0xLjI4IDMuNzQ4LS4zMjEgMS4yODggMS4yMSAxLjAyNiAyLjMtLjM3IDMuNjk3LS4yNTUuMjU1LS40NzMuNDczLS44NTYuODYtMi45NDQgMi45NzYtMy40NzQgMy4yOTMtNC4yNzcgMi41MS0uNDY2LS40NTUtLjUwOC0uNzQzLS4xOTctMS4yNzIuMzMyLS41NjQuODI2LTEuMDkgMi42Ni0yLjkwMy40NDgtLjQ0Mi43MTQtLjcwNiAxLjAyLTEuMDEzYS41LjUgMCAxIDAtLjcwNi0uNzA4elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9hdHRhY2htZW50LnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB7Li4udGhpcy5wcm9wc30+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9XCJNNTEyIDBDMjI5LjIzNSAwIDAgMjI5LjIzNSAwIDUxMnMyMjkuMjM1IDUxMiA1MTIgNTEyIDUxMi0yMjkuMjM1IDUxMi01MTJTNzk0Ljc2NSAwIDUxMiAwem0wIDkzNC40QzI3OC43MiA5MzQuNCA4OS42IDc0NS4yOCA4OS42IDUxMiA4OS42IDI3OC43MiAyNzguNzIgODkuNiA1MTIgODkuNlM5MzQuNCAyNzguNzIgOTM0LjQgNTEyYzAgMjMzLjI4LTE4OS4xMiA0MjIuNC00MjIuNCA0MjIuNHpcIiAvPjxwYXRoIGQ9XCJNNDQ4IDcyOS42YTUgNSAwIDEgMCAxMjggMCA1IDUgMCAxIDAtMTI4IDB6TTQ2OS4zMzggNTY3Ljg2YzIuNTYgMjYuNTg1IDE5LjQ4MSA0Ni41NCA0Mi42NjIgNDYuNTQgMjMuMTggMCA0MC4xMDItMjEuMzUgNDIuNjYyLTQ2LjU0bDIwLjQzLTI2NC44MzNjLjU4OC0zLjQxNy45MDgtMTAuODkzLjkwOC0xNC40NTEgMC0zNC4zMDQtMjguNjYtNTguMTc2LTY0LTU4LjE3NnMtNjQgMjMuODcyLTY0IDU4LjE3NmMwIDMuNTU4LjMwNyAxMS4wMzQuODk2IDE0LjQzOGwyMC40NDIgMjY0Ljg0NXpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvY2F1dGlvbi5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNSAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwLjE5NVwiIGhlaWdodD1cIjIwMFwiIHsuLi50aGlzLnByb3BzfT48ZGVmcz48c3R5bGUgLz48L2RlZnM+PHBhdGggZD1cIk05NTAuNzgyIDEyNy40ODlMMzI4LjA3IDc1MC4xMTcgNzMuMTUxIDQ5NS4xNyAwIDU2OC40NTJsMzI4LjA3MSAzMjguMDZMMTAyNCAyMDAuNjU3elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9jaGVjay5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTU2Ni41OTQgNTEyLjUzM2wyODguOTkyLTI4OC45OTRjMTIuOTk4LTEyLjk5MyAxMS40OTItMzUuNTU4LTMuMzYxLTUwLjQwNy0xNC44NDYtMTQuODQ2LTM3LjQwNS0xNi4zNTMtNTAuNDA2LTMuMzU4TDUxMi44MjggNDU4Ljc2OGwtMjg4Ljk5LTI4OC45OTRjLTEyLjk5OC0xMi45OTUtMzUuNTU5LTExLjQ4OS01MC40MDcgMy4zNTgtMTQuODUxIDE0Ljg0OS0xNi4zNTkgMzcuNDE0LTMuMzYgNTAuNDA3bDI4OC45OTIgMjg4Ljk5NC0yODguOTg3IDI4OC45OWMtMTIuOTk1IDEyLjk5LTExLjQ5NiAzNS41NiAzLjM1NSA1MC40MDcgMTQuODQyIDE0Ljg0NiAzNy40MTYgMTYuMzQ5IDUwLjQwNyAzLjM2bDI4OC45OS0yODguOTkyTDgwMS44MjEgODU1LjI5YzEyLjk4OCAxMi45ODkgMzUuNTY0IDExLjQ4NiA1MC40MDYtMy4zNiAxNC44NTItMTQuODQ3IDE2LjM1LTM3LjQxNiAzLjM1NS01MC40MDhsLTI4OC45ODgtMjg4Ljk5elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9jbG9zZS5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTU0OC40OCAxMDEwLjQ5Nkw1MC43NTIgNTEyLjc2OCA1NDkuMjQ4IDE0LjI3Mmw0NS4yNDggNDUuMjQ4LTQ1My4yNDggNDUzLjI0OCA0NTIuNjA4IDQ1Mi40OHpcIiAvPjxwYXRoIGQ9XCJNOTEyIDEwMTAuNDk2TDQxNC4yNzIgNTEyLjc2OCA5MTIuNzY4IDE0LjI3Mmw0NS4yNDggNDUuMjQ4LTQ1My4yNDggNDUzLjI0OCA0NTIuNDggNDUyLjQ4elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9kb3VibGUtYXJyb3ctbGVmdC5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTQ3NS41MiAxMy41MDRsNDk3LjcyOCA0OTcuNzI4LTQ5OC40OTYgNDk4LjQ5Ni00NS4yNDgtNDUuMjQ4IDQ1My4yNDgtNDUzLjI0OC00NTIuNjA4LTQ1Mi40OHpcIiAvPjxwYXRoIGQ9XCJNMTEyIDEzLjUwNGw0OTcuNzI4IDQ5Ny43MjgtNDk4LjQ5NiA0OTguNDk2LTQ1LjI0OC00NS4yNDggNDUzLjI0OC00NTMuMjQ4LTQ1Mi40OC00NTIuNDh6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL2RvdWJsZS1hcnJvdy1yaWdodC5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTY0IDUxMmE4NiA4NiAwIDEgMCAxNzIgMCA4NiA4NiAwIDEgMC0xNzIgMHpNNDI2IDUxMmE4NiA4NiAwIDEgMCAxNzIgMCA4NiA4NiAwIDEgMC0xNzIgMHpNNzg4IDUxMmE4NiA4NiAwIDEgMCAxNzIgMCA4NiA4NiAwIDEgMC0xNzIgMHpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZWxsaXBzaXMuc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHsuLi50aGlzLnByb3BzfT48ZGVmcz48c3R5bGUgLz48L2RlZnM+PHBhdGggZD1cIk01MTIgNDUxLjY3TDMyOC44MzIgMjY4LjVhNDIuNjY3IDQyLjY2NyAwIDAgMC02MC4zMyA2MC4zMzFMNDUxLjY2OCA1MTIgMjY4LjUwMSA2OTUuMTY4YTQyLjY2NyA0Mi42NjcgMCAwIDAgNjAuMzMxIDYwLjMzTDUxMiA1NzIuMzMybDE4My4xNjggMTgzLjE2OGE0Mi42NjcgNDIuNjY3IDAgMCAwIDYwLjMzLTYwLjMzMUw1NzIuMzMyIDUxMmwxODMuMTY4LTE4My4xNjhhNDIuNjY3IDQyLjY2NyAwIDEgMC02MC4zMzEtNjAuMzNMNTEyIDQ1MS42Njh6bTAgNTcyLjMzQzIyOS4yNDggMTAyNCAwIDc5NC43NTIgMCA1MTJTMjI5LjI0OCAwIDUxMiAwczUxMiAyMjkuMjQ4IDUxMiA1MTItMjI5LjI0OCA1MTItNTEyIDUxMnpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZXJyb3Iuc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHsuLi50aGlzLnByb3BzfT48ZGVmcz48c3R5bGUgLz48L2RlZnM+PHBhdGggZD1cIk01MTIgMEMyMjkuMjI0IDAgMCAyMjkuMjI0IDAgNTEyczIyOS4yMjQgNTEyIDUxMiA1MTIgNTEyLTIyOS4yMjQgNTEyLTUxMlM3OTQuNzYgMCA1MTIgMHptMjYxLjA5MiA2ODUuMzU1bC04Ny43MiA4Ny43MjFMNTEyIDU5OS43MjEgMzM3Ljg1NiA3NzMuODY0bC04Ny43Mi04Ny43Mkw0MjQuMjc5IDUxMiAyNTAuOTA4IDMzOC42NDVsODcuNzItODcuNzIxIDE3My4zNTYgMTczLjM1NSAxNzQuMTQzLTE3NC4xNDMgODcuNzIxIDg3LjcyTDU5OS43MjEgNTEybDE3My4zNzEgMTczLjM1NXpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZmFpbC5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxwYXRoIGQ9XCJNNTEyIDQyLjY2N2E0NjkuMzMzIDQ2OS4zMzMgMCAxIDEgMCA5MzguNjY2IDQ2OS4zMzMgNDY5LjMzMyAwIDAgMSAwLTkzOC42NjZ6TTUxMiAwQzIyOS43MTcgMCAwIDIyOS44MDMgMCA1MTJzMjI5LjcxNyA1MTIgNTEyIDUxMiA1MTItMjI5LjcxNyA1MTItNTEyUzc5NC4yODMgMCA1MTIgMHpcIiAvPjxwYXRoIGQ9XCJNNjA4LjkzOSAyNTYuNTEybC05Ny43OTIgMTk3LjYzMi05Ni4zNDItMTk3LjYzMmgtNDQuNDU4bDEyMC4zMiAyMTkuOTloLTE0MC42M1Y1MTJoMTQwLjYzdjgzLjI4NWgtMTQwLjYzdjMxLjA2MmgxNDAuNjN2MTQxLjIyNmg0MC45NlY2MjYuMzQ3aDE0Mi41MDZ2LTMxLjA2Mkg1MzEuNjI3VjUxMmgxNDIuNTA2di0zNS41ODRINTMxLjYyN2wxMjAuNzQ2LTIxOS45OXpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvZmluYW5jZS5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTk3OS43NzUgNTE2Ljc1N2MuMjcxLTkuNzgxLTQuNjktMjAuNDMxLTEzLjk1LTI5LjQ3NEw1NDYuODQ3IDc3Ljg2Yy0xOS4yNzItMTguODQ0LTUwLjU1Mi0xOC44NDQtNjkuODIzIDBMNTguMDQgNDg3LjI4NGMtMTAuNTAzIDEwLjI2LTE1Ljk5NSAyMS42MjctMTQuMjExIDMyLjA1NWEyMC4zNCAyMC4zNCAwIDAgMC0uMjA0IDIuNzI4YzAgMTEuNDkgOS41MyAyMC44MDcgMjEuMjkzIDIwLjgwN2gxMTAuNTI1Yy0yLjc5IDYuMTAzLTQuMDYzIDEzLjE3NS00LjA2MyAyMC43MjN2MzUzLjgwNWMwIDIyLjk4MiAxOS4wNjQgNDEuNjEyIDQyLjU4NSA0MS42MTJoNTk2LjE5N2MyMy41MiAwIDQyLjU4NS0xOC42MyA0Mi41ODUtNDEuNjEyVjU2My41OTdjLjI4Ny04LjI2Ni0uNzA1LTE1LjExOC0yLjg1OS0yMC43MjNoMTA5LjMyYzExLjc2MiAwIDIxLjI5My05LjMxOCAyMS4yOTMtMjAuODA3IDAtMS44MzgtLjI2OS0zLjYxMS0uNzI3LTUuMzF6TTgxMC4xNjIgODc1Ljc4NWMwIDIyLjk4Ny0xOS4wNjQgNDEuNjE3LTQyLjU4NSA0MS42MTdIMjU2LjU1MWMtMjMuNTIxIDAtNDIuNTg1LTE4LjYzLTQyLjU4NS00MS42MTd2LTM1My44aC0uMDA0Yy0uMDQ2LTExLjQ1LTkuNTU0LTIwLjcyNS0yMS4yODgtMjAuNzI1aC04NS4wNTlsMzY5LjQwOC0zNjAuOTgzYzE5LjI3Mi0xOC44MzcgNTAuNTUyLTE4LjgzNyA2OS44MjMuMDA3bDM2OS40MDcgMzYwLjk3NWgtODQuNzk3Yy0xMS43MzUgMC0yMS4yNDMgOS4yNzUtMjEuMjg4IDIwLjcyNWgtLjAwNHYzNTMuODAxelwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9ob21lLnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB7Li4udGhpcy5wcm9wc30+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9XCJNNTEyIDBDMjI5LjMwOCAwIDAgMjI5LjI0IDAgNTEyczIyOS4zMDggNTEyIDUxMiA1MTIgNTEyLTIyOS4yNCA1MTItNTEyUzc5NC42OTIgMCA1MTIgMHptLTYzLjg5OCA0NDguMDM0QzQ0OC4xMDIgNDEyLjY3MiA0NzYuNzA2IDM4NCA1MTIgMzg0YzM1LjM2MiAwIDY0LjAzNCAyOC42NzIgNjQuMDM0IDY0LjAzNFY3NjhjMCAzNS4yOTQtMjguNjcyIDY0LjAzNC02NC4wMzQgNjQuMDM0LTM1LjI5NCAwLTYzLjg5OC0yOC43NC02My44OTgtNjQuMDM0VjQ0OC4wMzR6TTUxMiAzMjEuMDU4Yy0zNS4yOTQgMC02My44OTgtMjguNzQtNjMuODk4LTY0LjAzNCAwLTM1LjI5NCAyOC42MDQtNjQuMDM0IDYzLjg5OC02NC4wMzQgMzUuMzYyIDAgNjQuMDM0IDI4Ljc0IDY0LjAzNCA2NC4wMzQgMCAzNS4yOTQtMjguNjcyIDY0LjAzNC02NC4wMzQgNjQuMDM0elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9pbmZvLnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB7Li4udGhpcy5wcm9wc30+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9XCJNMTAyNCAyNTZMNzY4IDBIMjk4LjY2N2MtNjIuOTc2IDAtODUuMzM0IDI5LjAxMy04NS4zMzQgODUuMzMzdjY0aC0xMjhDNy45MzYgMTQ5LjMzMyAwIDE5MC4xMjMgMCAyNTZ2NjYxLjMzM0MwIDk4My4yMTEgNy45MzYgMTAyNCA4NS4zMzMgMTAyNGg2MjUuNzVDNzg4LjQ4IDEwMjQgODMyIDk0MC41NDQgODMyIDg3NC42NjdoODUuMzMzQzk5NC43MzEgODc0LjY2NyAxMDI0IDgzMy44NzcgMTAyNCA3NjhWMjU2ek05MTcuMzMzIDgzMkgzMjBhNjMuNzQ0IDYzLjc0NCAwIDAgMS02NC02NFYxMDYuNjY3YzAtNDEuMzAyIDIxLjMzMy02NCA2NC02NGg0MDUuMzMzYy0uNTk3IDczLjcyOCAwIDE0OS4zMzMgMCAxNDkuMzMzIDAgNjYuNDc1IDI4Ljc1OCAxMDYuNjY3IDEwNi42NjcgMTA2LjY2N2gxNDkuMzMzVjc2OGMwIDMyLjU5Ny0yNS42IDY0LTY0IDY0em0tMTI4IDQyLjY2N2MwIDUyLjY1LTQ2LjkzMyAxMDYuNjY2LTg1LjMzMyAxMDYuNjY2SDg1LjMzM2MtMzguNCAwLTQyLjY2Ni0zMS40MDItNDIuNjY2LTY0VjI1NmMwLTMwLjQ2NCA0LjI2Ni02NCA0Mi42NjYtNjRoMTI4djU3NmMwIDY1Ljg3NyAyOS4yNyAxMDYuNjY3IDEwNi42NjcgMTA2LjY2N2g0NjkuMzMzek03NjggMTkyVjY0bDE5MiAxOTJIODMyYTYzLjA2MSA2My4wNjEgMCAwIDEtNjQtNjR6TTQ0OCA1MTYuMDk2YTIxLjU5IDIxLjU5IDAgMCAwLTIxLjMzMyAyMS4zMzNjMCAxMS43NzYgOS44MTMgMjEuMzM0IDIxLjMzMyAyMS4zMzRoMjk4LjY2N2MxMS43NzYgMCAyMS4zMzMtOS44OTkgMjEuMzMzLTIxLjMzNGEyMS41MDQgMjEuNTA0IDAgMCAwLTIxLjMzMy0yMS4zMzNINDQ4em0wLTEyOGEyMS41OSAyMS41OSAwIDAgMC0yMS4zMzMgMjEuMzMzYzAgMTEuNzc2IDkuODEzIDIxLjMzNCAyMS4zMzMgMjEuMzM0aDI5OC42NjdjMTEuNzc2IDAgMjEuMzMzLTkuODk5IDIxLjMzMy0yMS4zMzRhMjEuNTA0IDIxLjUwNCAwIDAgMC0yMS4zMzMtMjEuMzMzSDQ0OHpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvcGFwZXIuc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgey4uLnRoaXMucHJvcHN9PjxwYXRoIGQ9XCJNMTMuNSAxMS41VjBoLTJ2MTEuNUgwdjJoMTEuNVYyNWgyVjEzLjVIMjV2LTJIMTMuNXpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvcGx1cy5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTUxMiAwQzIyOS4yMTggMCAwIDIyOS4yMTggMCA1MTJzMjI5LjIxOCA1MTIgNTEyIDUxMiA1MTItMjI5LjIxOCA1MTItNTEyUzc5NC43ODIgMCA1MTIgMHptMCA5NDRDMjczLjQwNiA5NDQgODAgNzUwLjU5NCA4MCA1MTJTMjczLjQwNiA4MCA1MTIgODBzNDMyIDE5My40MDYgNDMyIDQzMi0xOTMuNDA2IDQzMi00MzIgNDMyelwiIC8+PHBhdGggZD1cIk00ODAgNzA0aDY0djY0aC02NHYtNjR6TTYzNS40NjggMzAwLjI5NmMtMTIuOTY4LTEzLjI1LTI5LjM3Ni0yMy44NDQtNDkuNTMyLTMyLjA2MkM1NjUuNTMgMjYwLjAzIDU0MS41OTIgMjU2IDUxMy4zNzQgMjU2Yy0yMy45MzggMC00NS43NSA0LjAzMi02NS41NjIgMTIuMjM0LTE5Ljg3NiA4LjIxOC0zNyAxOS41NDYtNTEuMzc2IDM0LjI1LTE0LjI1IDE0LjU3OC0yNS4zNDQgMjkuMDE2LTMzIDQ5LjU0NkMzNTUuODEyIDM3Mi41NjIgMzUyIDM4NCAzNTIgNDE2aDY1LjMxMmMwLTMyIDguNDY4LTU2LjIxOCAyNS44NzYtNzcuMDMyIDE3LjE4OC0yMC45MDYgNDAuNTMyLTI5LjY0IDcwLjE4OC0yOS42NCAyOC44NzYgMCA1MC40NjggNy44MjggNjQuMzQ0IDIxLjg3NiAxMy43NSAxNC4wNDYgMjAuNzgyIDM0LjE3MiAyMC43ODIgNTkuNTk0IDAgMTkuNzY2LTYuNSAzNy41MTYtMTkuNDY4IDUyLjk4NGE1MDkuNzM3IDUwOS43MzcgMCAwIDEtNDEuNjg4IDQ0Ljg3NmMtMTUuMTg4IDE0LjI4Mi0yNy4zNDQgMjkuNTMyLTM5LjkwNiA0NS4yODJTNDgwIDU2OC4wMzIgNDgwIDU4OC45MzhWNjQwaDY0di0yNy41YzAtMTYuNDA2IDIuNDA2LTMwLjYyNCA4LjgxMi00My4wMzJDNTU5IDU1Ny4wMyA1NjYuNzE4IDU0NS43NSA1NzYuNSA1MzUuNjg2YTM2OC42ODMgMzY4LjY4MyAwIDAgMSAzMC45MzgtMjkuNjU2YzExLTkuNTMyIDIxLjU2Mi0xOS43MTggMzEuMDYyLTMwLjM0NCA5LjY4OC0xMC42ODggMTcuNzUtMjIuNjg4IDIzLjg3Ni0zNS45MzggNi40MzgtMTMuMjUgOS42NTYtMjguODEyIDkuNjU2LTQ2Ljk1NCAwLTE1Ljc1LTIuODQ0LTMxLjc4Mi04Ljc4Mi00OC4wNzgtNS44MTItMTYuNDItMTUuMTg4LTMxLjE4NC0yNy43ODItNDQuNDJ6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3F1ZXN0aW9uLnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB7Li4udGhpcy5wcm9wc30+PGRlZnM+PHN0eWxlIC8+PC9kZWZzPjxwYXRoIGQ9XCJNNTExLjg3Mi45NkMyMzEuMDA2Ljk2IDMuMjk0IDIyOS45NSAzLjI5NCA1MTIuNDhjMCAyODIuNDY1IDIyNy43MTIgNTExLjUyIDUwOC41NzggNTExLjUyczUwOC42NDItMjI5LjA1NSA1MDguNjQyLTUxMS41MkMxMDIwLjQ1IDIyOS45NSA3OTIuNzM4Ljk2IDUxMS44NzIuOTZ6bTQ5LjYzNiA3OTAuOTc5YzAgMTguMTAxLTE1LjczNSAyNy42OTYtNTIuNTc4IDI3LjY5NmgtMjguMDE3Yy0zNi44NDMgMC01Mi42NDItOS41My01Mi42NDItMjcuNjk2di03OS41NzJjMC0xOC4xNjUgMTUuOC0yNy42OTYgNTIuNjQyLTI3LjY5NmgyOC4wMTdjMzYuODQzIDAgNTIuNTc4IDkuNDY3IDUyLjU3OCAyNy42OTZ2NzkuNTcyem0tOS41OTQtMTg5LjQ2MmMtNS4yNDYgMTguMjMtMTcuNTI3IDIzLjQxLTQ2LjUwMiAyMy40MWgtMjAuMDg1Yy0zMC42MzkgMC00Mi45Mi02LjkwNy00Mi45Mi0yNS4xMzcgMC0xMDguOTMgMTM1Ljg2LTE3OC45MDcgMTM1Ljg2LTIzMi41NzMtLjA2NC0zMC4yNTUtMjAuMjEzLTQ4LjM1Ny02NC45MjQtNDguMzU3LTUwLjg1MSAwLTg1LjkwMyAyNi43MzctOTguMTIgMjYuNzM3LTI0LjYyNyAwLTU1LjI2NS01Mi43Ny01NS4yNjUtNzAuODcyIDAtNTEuMDQzIDk2LjQ1Ny03MC4xMDUgMTY0LjgzNS03MC4xMDUgMTE3LjM3NCAwIDE5MC4yMjkgNTguNzgzIDE5MC4yMjkgMTUzLjg5OCAwIDEzMi4zNDEtMTQ3LjMxIDE2MC4wMzgtMTYzLjEwOCAyNDN6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3F1ZXN0aW9uMi5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB7Li4udGhpcy5wcm9wc30+PHBhdGggZD1cIk0xNC40NDQgMS4wOTdWMy4yOWg1LjI3M2EuMjg0LjI4NCAwIDAgMSAuMjgzLjI4NHYuODM2YS4yODUuMjg1IDAgMCAxLS4yODIuMjg1aC0xLjc1djE0LjIwOGMwIC42MDQtLjUgMS4wOTctMS4xMSAxLjA5N0gzLjA3NGExLjEwOCAxLjEwOCAwIDAgMS0xLjExMS0xLjA5N1Y0LjY5NUguMjlBLjI4Ni4yODYgMCAwIDEgMCA0LjQxdi0uODM2YzAtLjE1NS4xMjUtLjI4Mi4yODMtLjI4NGg1LjI3M1YxLjA5N0M1LjU1Ni40OTMgNi4wNTUgMCA2LjY2NiAwaDYuNjY4Yy42MSAwIDEuMTEuNDkzIDEuMTEgMS4wOTd6TTMuMzM0IDE4LjY0M2gxMy4zMzJWNC42NkgzLjMzNHYxMy45ODJ6TTYuOTY0IDMuMjloNi4xOFYxLjRINi45NjV2MS44OXpNNS41NTYgMTUuNDY4VjcuNDA1YS4zNDkuMzQ5IDAgMCAxIC4xMDQtLjI1My4zNTguMzU4IDAgMCAxIC4yNTYtLjEwMmguNzA4YS4zNTcuMzU3IDAgMCAxIC4yNTYuMTAyLjM0OC4zNDggMCAwIDEgLjEwNC4yNTN2OC4wNjNhLjM0OS4zNDkgMCAwIDEtLjEwNC4yNTIuMzU4LjM1OCAwIDAgMS0uMjU2LjEwMmgtLjcwOGEuMzUyLjM1MiAwIDAgMS0uMzYtLjM1NHptNC45Ni4zNTRIOS44YS4zNi4zNiAwIDAgMS0uMzU3LS4zNTRWNy40MDVjMC0uMjAzLjE2LS4zNTUuMzU3LS4zNTVoLjcxNWEuMzYuMzYgMCAwIDEgLjM1Ny4zNTV2OC4wNjNjMCAuMjAyLS4xNi4zNTQtLjM1Ny4zNTR6bTIuODE4LS4zNTRWNy40MDVhLjM0OS4zNDkgMCAwIDEgLjEwNC0uMjUzLjM1OC4zNTggMCAwIDEgLjI1Ni0uMTAyaC43MDdhLjM1Ny4zNTcgMCAwIDEgLjI1Ny4xMDIuMzQ4LjM0OCAwIDAgMSAuMTA0LjI1M3Y4LjA2M2EuMzQ5LjM0OSAwIDAgMS0uMTA1LjI1Mi4zNTguMzU4IDAgMCAxLS4yNTYuMTAyaC0uNzA3YS4zNTIuMzUyIDAgMCAxLS4zNi0uMzU0elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy9yZWN5Y2xlLnN2ZyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWRyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIHsuLi50aGlzLnByb3BzfT48cGF0aCBkPVwiTTExLjg5NiAxMS4zODhMOC45OCA4LjQ3MmE1LjA5NSA1LjA5NSAwIDAgMCAxLjI1Ny0zLjM1NUE1LjEyMiA1LjEyMiAwIDAgMCA1LjExOCAwIDUuMTIyIDUuMTIyIDAgMCAwIDAgNS4xMTdhNS4xMjQgNS4xMjQgMCAwIDAgNS4xMTggNS4xMTYgNS4wOTggNS4wOTggMCAwIDAgMy4zNTYtMS4yNTZsMi45MTcgMi45MTdhLjM1LjM1IDAgMCAwIC41MDYgMCAuMzYuMzYgMCAwIDAgMC0uNTA2ek0uNzE2IDUuMTE3YTQuNDA0IDQuNDA0IDAgMCAxIDQuNC00LjM5OWMyLjQyNiAwIDQuMzk4IDEuOTc1IDQuMzk4IDQuMzk5cy0xLjk3MiA0LjQtNC4zOTkgNC40YTQuNDA2IDQuNDA2IDAgMCAxLTQuNC00LjR6XCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3NlYXJjaC5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTUxMi4xNyAyNjQuMTkyYTI0MS42NjQgMjQxLjY2NCAwIDEgMCAwIDQ4My40MTMgMjQxLjY2NCAyNDEuNjY0IDAgMCAwIDAtNDgzLjQxM3ptMCA0MzYuMzFhMTk0LjU2IDE5NC41NiAwIDEgMSAwLTM4OS4xMiAxOTQuNTYgMTk0LjU2IDAgMCAxIDAgMzg5LjEyelwiIC8+PHBhdGggZD1cIk05NzYuMzg0IDU3NC40NjRhMjU5LjMyOCAyNTkuMzI4IDAgMCAwLTcuNzY1LTQuMDk2Yy0zLjc1NS0xLjg3Ny03LjI1NC0zLjY3LTEwLjQ5Ni01LjYzMmE2Ni4zMDQgNjYuMzA0IDAgMCAxLTMyLjQyNy00OC4yMTMgNjcuMTU3IDY3LjE1NyAwIDAgMSAxOS44ODMtNTUuMjExYzEwLjE1NC0xMC4yNCAyMi43ODQtMTYuODk2IDM2LjE4MS0yMy44OTNsMi44MTYtMS4zNjZjMjcuODE5LTE0LjUwNiA0MS42NDMtMzcuNTQ2IDM4Ljk5Ny02NS4wMjQtNC4yNjYtNDMuOTQ2LTE2LjEyOC03OS44NzItMzYuMDk2LTEwOS44MjQtMTguNjg4LTI3Ljk4OS0zOC4zMTQtNDAuNTMzLTYzLjQ4OC00MC41MzMtMTAuMjQgMC0yMS41MDQgMi4wNDgtMzQuNTYgNi4zMTVhMjIxLjg2NyAyMjEuODY3IDAgMCAxLTMwLjQ2NCA4LjAyMSA2Mi4zNzkgNjIuMzc5IDAgMCAxLTEwLjQ5Ni44NTNjLTI5LjE4NCAwLTU2LjMyLTIwLjQ4LTYzLjE0Ni00Ny42MTYtMy45MjYtMTUuODcyLTIuMDQ4LTMyLjkzOCA1LjYzMi01Mi4zMDkgMTEuOTQ2LTI5Ljg2NyA1LjEyLTU3LjE3My0xOS45NjgtODEuNDkzLTEyLjgtMTIuNDU5LTMwLjU1LTI3LjgxOS01My4yNDgtMzUuODQtMjkuMDE0LTEwLjQ5Ni01Mi40OC0xNy40MDgtNzIuMTA3LTE3LjQwOC0zMS41NzMgMC01My4xNjMgMTcuMDY2LTc2LjcxNSA2MS4wMTNhNjEuOTUyIDYxLjk1MiAwIDAgMS01NS44MDggMzMuOTYzIDcyLjk2IDcyLjk2IDAgMCAxLTYwLjE2LTMzLjI4Yy0zLjE1Ny00LjY5NC01LjgwMi05LjgxNC04LjUzMy0xNS4xMDQtMi4yMTktNC4yNjctNC41MjMtOC43OS03LjE2OC0xMy4xNDJDNDIzLjg1MSAxMi40NiA0MDQuMzA5Ljc2OCAzODAuOTI4Ljc2OGE3NS43NzYgNzUuNzc2IDAgMCAwLTkuMDQ1LjU5N2MtMjQuMTUgMi45MDItNTIuMTM5IDcuNTEtNzcuMzk4IDE5Ljc5OC03MC45OTcgMzQuMzA0LTc3LjkwOSA2NC40MjYtNjYuNTYgMTE4Ljg2OSA5Ljk4NCA0Ny41My03LjQyNCA4MS4zMjMtNDYuNTA2IDkwLjM2OGE3Ni41NDQgNzYuNTQ0IDAgMCAxLTE3LjQwOCAxLjg3N2MtMTEuNjkxIDAtMjQuMjM1LTIuMjE4LTQwLjUzNC03LjMzOGE4NC4zMSA4NC4zMSAwIDAgMC0yNS4wMDItNC4wOTZjLTIxLjMzNCAwLTM5LjkzNiA5LjY0Mi01NS4yOTYgMjguNjcyQzI2LjYyNCAyNzAuMDggMTUuMDE5IDI5NC40IDYuNTcgMzI2LjE0NC05LjM4NyAzODYuNTYgNC4yNjcgNDE4LjIxOSA1OC44OCA0NDcuMDYxYzIxLjUwNCAxMS4zNSAzNS44NCAyNy42NDggNDAuMTA3IDQ1LjczOWE1Ny4xNzMgNTcuMTczIDAgMCAxLTEwLjY2NyA0Ni45MzNjLTEwLjI0IDE0LjUwNy0yNC43NDcgMjUuNzcxLTQ0LjIwMyAzNC4xMzQtMjcuMzA2IDExLjk0Ni00Mi4xNTQgMzMuNDUtNDIuNzUyIDYyLjM3OC0xLjE5NCA1Mi45MDcgMTYuMTI4IDk4LjgxNiA1MS4zNzEgMTM2LjUzNGE2NS4wMjQgNjUuMDI0IDAgMCAwIDQ5LjQwOCAyMC45OTJjNC40MzcgMCA5LjEzLS4zNDIgMTMuOTEtMS4xMSA1LjM3NS0uODUzIDEwLjY2Ni0xLjk2MiAxNS43ODYtMy4xNTcgOS4wNDUtMS45NjMgMTcuNDkzLTMuNzU1IDI1LjYtMy43NTVhNDYuMDggNDYuMDggMCAwIDEgNi4xNDQuMzQybDEuMTk1LjE3IDEuMTA5LS4xN2E2Mi4xMjMgNjIuMTIzIDAgMCAxIDguMTA3LS41MTJjMTcuMzIyIDAgMzIuNjgyIDcuOTM2IDQyLjE1NCAyMS44NDUgOS44MTQgMTQuNTA3IDExLjc3NiAzMy4yOCA1LjAzNSA1MC4zNDdhMTE0Ljk0NCAxMTQuOTQ0IDAgMCAwLTMuNzU1IDExLjY5Yy0uODUzIDMuMDcyLTEuNjIxIDUuOTc0LTIuNTYgOC41MzQtMTEuNDM0IDMxLjgyOS00Ljc3OCA1OS4yMjEgMTkuNjI3IDgxLjc0OSAyNC43NDcgMjIuNjEzIDU1LjcyMyAzOC40IDk0LjcyIDQ4LjI5OSAxOS4wMyA0Ljg2NCAzMi43NjggNi45OTcgNDQuNTQ0IDYuOTk3IDM1LjA3MiAwIDUzLjc2LTIwLjMxIDc1LjY5LTU3Ljg1NiAxNS44NzMtMjYuOTY1IDM2LjAxMS00MC4xMDcgNjEuNjExLTQwLjEwN0g1MTJjMjUuNjg1LjM0MiA0NC44IDEyLjk3MSA2MC4xNiAzOS42OCAxLjcwNyAyLjk4NyAzLjMyOCA1Ljk3NCA0Ljk1IDkuMzAyIDIuMzAzIDQuNDM3IDQuNjkzIDkuMTMgNy41OTQgMTMuNjUzIDE0LjY3NyAyMy4yOTYgMzUuMTU3IDM1LjE1NyA2MC43NTcgMzUuMTU3IDQuMjY3IDAgOC43OS0uMzQxIDEzLjMxMi0xLjAyNGEyMzguNjc3IDIzOC42NzcgMCAwIDAgOTcuMTEtMzYuMDk2YzM4LjU3LTI1LjA4OCA1MC41MTctNTkuOTg5IDM0LjM4OS0xMDAuOTQ5LTkuODEzLTI0LjkxNy04LjI3Ny01MC42MDMgNC4wMS02OC42MDggMTAuNDk3LTE1LjM2IDI3LjY0OS0yMy41NTIgNDkuNjY1LTIzLjU1MiA0Ljg2NCAwIDEwLjA2OS40MjcgMTUuMzYgMS4yOGw0LjYwOC41OTdjNi4xNDQuOTM5IDEyLjAzMiAxLjc5MiAxNy44MzQgMy4wNzIgMTEuNDM1IDIuNTYgMjEuNTkgMy44NCAzMS4wNjIgMy44NCAzMy4yOCAwIDU3Ljg1Ni0xNS4zNiA3OS41My00OS43NDkgMTUuNTMxLTI0Ljc0NyAyNC44MzItNTIuNDggMjguNDE2LTg1LjE2MyA0LjA5Ni0zNy4yMDUtMTAuNzUyLTY1LjQ1LTQ0LjI4OC04NC4wNTN6TTc0NS4wNDUgODgwLjI5OWMxMi42MyA0MS4xMyA5LjU1OCA0OC44OTYtMjcuMzA2IDY5LjEyYTE2NS43MTcgMTY1LjcxNyAwIDAgMS0zMC41NSAxMy4zOTdjLTE3LjkyIDUuNTQ3LTMwLjIwOCA4Ljc5LTM5Ljg1IDguNzktMTMuNTY4IDAtMjMuMjExLTUuODAzLTM4LjQtMzcuNTQ3LTE4Ljc3NC0zOS4yNTQtNTMuNjc1LTYwLjkyOC05OC4xMzQtNjAuOTI4aC0uNTEyYy00MS4yMTYuMTctNzQuNzUyIDIxLjUwNC05OS43NTQgNjMuNTczLTE3LjIzOCAyOS4wMTMtMjIuMTg3IDM1LjI0My0zNi4wMTEgMzUuMjQzLTcuMzM5IDAtMTcuMDY3LTEuNzkyLTMxLjQwMy00Ljg2NGExNzIuMTE3IDE3Mi4xMTcgMCAwIDEtNzcuMzk3LTM4LjRjLTEzLjY1My0xMS43NzYtMTYuNDctMjIuNzg0LTkuODEzLTM4LjA1OSA4LjUzMy0xOS44ODMgMTYuNjQtNDMuNzc2IDEwLjgzNy03MS4xNjgtMTAuMTU1LTQ4LjM4NC00NS42NTMtNzguNTA3LTkyLjc1Ny03OC41MDctNS4yOTEgMC0xMC43NTIuNDI3LTE2LjIxNCAxLjE5NWExMDgzLjczMyAxMDgzLjczMyAwIDAgMC0yNS43NyAzLjg0Yy0xMi4wMzIgMS45NjMtMjAuMzEgMi45MDEtMjYuOTY2IDIuOTAxLTE5LjExNCAwLTI2Ljk2NS02Ljk5Ny00Mi4xNTQtMzcuMjlhMTg4LjUwMSAxODguNTAxIDAgMCAxLTE0LjUwNy0zOS43NjZjLTUuNDYxLTIyLjYxMy02LjE0NC0zMi43NjgtMi44MTYtNDAuMTA2IDMuNjctOC4zNjMgMTQuMDgtMTUuMzYgMzItMjUuNDMgNTguODgtMzMuMjggODIuMTc2LTk0LjM3OCA1NS4yOTYtMTQ1LjMyMmExMjggMTI4IDAgMCAwLTY0LTU4LjAyN2MtMTkuNjI3LTguNTMzLTI3LjMwNy0yMi4xMDEtMjQuODMyLTQzLjc3NiAzLjMyOC0zMC4yOTMgMTMuOTEtNTcuMTczIDMxLjQwMy03OS43ODcgOC4xOTItMTAuNTgxIDE2LjA0Mi0xNS4yNzQgMjUuNi0xNS4yNzQgMy41ODQgMCA3LjY4LjY4MiAxMi4xMTcgMi4xMzMgMTcuMDY3IDUuMzc2IDMzLjg3NyAxMC4yNCA1MS41NDEgMTAuMjQgNS4xMiAwIDEwLjA3LS40MjcgMTQuNzYzLTEuMTk1IDM2LjUyMy02LjMxNCA2MS40NC0yMS4wNzcgNzYuMjg4LTQ1LjIyNiAxMi40NTktMjAuMTM5IDE3LjgzNS00Ni4wOCAxNy40MDgtODQuMTM5YTE3LjQwOCAxNy40MDggMCAwIDAtMS4wMjQtNS4xMmwtLjE3LS43NjhjLTguNzA1LTUxLjExNS0yLjY0Ni02MS42OTYgNDUuOTk0LTgwLjY0IDkuNDcyLTMuNzU1IDE4Ljg1OS02Ljc0MSAyNy44MTktOC45NiAxNC4zMzYtMy40MTMgMjUuMDg4LTUuOTczIDMyLjUxMi01Ljk3MyAxMS40MzQgMCAxNi4wNDIgNi4wNTggMzIuNDI2IDM0LjIxOCAyMy41NTIgNDAuNTM0IDU2LjgzMiA2MS4wMTQgOTkuMTU4IDYxLjAxNGgxLjc5MmM0My4wMDgtLjU5OCA3Ny42NTMtMjIuMTg3IDEwMC4yNjYtNjIuNTUgMTQuNzYzLTI2LjI4MiAyMC42NTEtMzIgMzMuMjgtMzIgNy4xNjggMCAxNi42NCAxLjk2MyAyOC43NTggNC43NzkgMTkuODgyIDQuNzc5IDM0LjU2IDExLjAwOCA0Ni4zMzYgMTkuNjI3IDE5LjYyNiAxNC4yNSAyOC41ODYgMjMuNjM3IDMxLjIzMiAzMi40MjYgMi40NzQgOC4xOTItLjQyNyAxNy43NS01LjgwMyAzMy43OTItMTEuNTIgMzQuNzMxLTYuNjU2IDcwLjQ4NiAxMy4zMTIgOTguMTM0IDIwLjMxIDI4LjMzIDUzLjY3NSA0NC40NTggOTEuMzkyIDQ0LjQ1OGguODUzYTYyLjQ2NCA2Mi40NjQgMCAwIDAgNC43NzkuMTcxYzE3LjMyMyAwIDM2LjQzNy02LjY1NiA1My4zMzMtMTIuNjNhMzcuNTQ3IDM3LjU0NyAwIDAgMSAxMi4yODgtMi4zODljNy43NjYgMCAxNC4yNTEgMy40MTQgMjAuNDggMTAuODM4IDIyLjY5OSAyNy4zMDYgMzQuODE2IDYwLjQxNiAzNi43NzkgMTAwLjk0OS42ODMgMTMuNzM5LTguODc1IDE5LjM3LTI0LjU3NiAyNy40NzdsLS4xNy4wODZjLTI1Ljc3MSAxMy4zMTItNjEuMDE0IDM2LjQzNy02OS45NzQgODMuNzEyLTkuNTU3IDUwLjM0NiAxMS40MzUgOTYuMDg1IDUzLjUwNCAxMTYuNTY1IDQ4LjEyOCAyMy4yOTYgNDYuMjUgMzcuNzE3IDMxLjMxNyA4OS4xNzNhMTE1LjI4NSAxMTUuMjg1IDAgMCAxLTIyLjYxMyAzOS43NjZjLTEwLjA3IDEyLjQ1OC0yMS4zMzMgMTguNTE3LTM0LjU2IDE4LjUxN2E1My40MTkgNTMuNDE5IDAgMCAxLTE0LjkzMy0yLjMwNCAxODEuOTMgMTgxLjkzIDAgMCAwLTUxLjI4Ni04LjEwNyAxMzEuNDEzIDEzMS40MTMgMCAwIDAtMjIuMTg2IDEuODc4Yy0yOS4xODQgNC45NDktNTMuNTkgMjEuMjQ4LTY4LjYwOCA0NS43MzgtMTYuMjE0IDI2LjQ1NC0xOS43OTggNjAuMDc1LTkuODE0IDkyLjUwMnpcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvc2V0dGluZy5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTUxMS45OTYgOS44NjJDMjM0LjY2OCA5Ljg2MiA5Ljg2MiAyMzQuNjc1IDkuODYyIDUxMmMwIDI3Ny4zMjggMjI0LjgwNiA1MDIuMTM4IDUwMi4xMzQgNTAyLjEzOCAyNzcuMzIxIDAgNTAyLjEzOC0yMjQuODEgNTAyLjEzOC01MDIuMTM4LjAwNC0yNzcuMzI1LTIyNC44MTMtNTAyLjEzOC01MDIuMTM4LTUwMi4xMzh6TTgyNC44OSAzODguNzVMNDczLjUwMiA3MjcuNTgzYTU2LjQ3NiA1Ni40NzYgMCAwIDEtMTUuNTg4IDExLjAzYy0yMi4wNjYgMTUuNzYtNTIuOTE2IDEzLjc1Ni03Mi43My02LjA2MkwyMzQuMjg0IDU4MS42NTNjLTIyLjA2NS0yMi4wNjYtMjIuMDY1LTU3LjgzMyAwLTc5Ljg4NCAyMi4wNTUtMjIuMDY1IDU3LjgyMi0yMi4wNjUgNzkuODg3IDBsMTEzLjI5MiAxMTMuMjg1IDMxNy41MzItMzA2LjE5MmMyMi4wNjEtMjIuMDYyIDU3LjgzMi0yMi4wNjIgNzkuODgzIDAgMjIuMDc2IDIyLjA1OCAyMi4wNzYgNTcuODI1LjAxIDc5Ljg4N3ptMCAwXCIgLz48L3N2Zz47XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2ljb25zL3N1Y2Nlc3Muc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgey4uLnRoaXMucHJvcHN9PjxwYXRoIGQ9XCJNMTMgMTNIMVY3LjVIMFYxNGgxNFY3LjVoLTF6XCIgLz48cGF0aCBkPVwiTTYuNSAxdjloMVYxelwiIC8+PHBhdGggZD1cIk03LjAwNCAxLjY3bDMuMTYzIDIuODIyLjY2Ni0uNzQ3TDcuMDA1LjMzIDMuMTY3IDMuNzQ1bC42NjUuNzQ3elwiIC8+PC9zdmc+O1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9pY29ucy91cGxvYWQuc3ZnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIxXCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDIxIDE1XCIgey4uLnRoaXMucHJvcHN9PjxwYXRoIGQ9XCJNMTAuNSAxMy44YzMuMTE3IDAgNi4wMy0xLjkgOC43NjMtNS44NDRhLjguOCAwIDAgMCAwLS45MTJDMTYuNTMgMy4xIDEzLjYxNyAxLjIgMTAuNSAxLjJTNC40NyAzLjEgMS43MzcgNy4wNDRhLjguOCAwIDAgMCAwIC45MTJDNC40NyAxMS45IDcuMzgzIDEzLjggMTAuNSAxMy44em0wIDEuMkM2Ljk0IDE1IDMuNjkgMTIuODguNzUgOC42NGEyIDIgMCAwIDEgMC0yLjI4QzMuNjkgMi4xMiA2Ljk0IDAgMTAuNSAwYzMuNTYgMCA2LjgxIDIuMTIgOS43NSA2LjM2YTIgMiAwIDAgMSAwIDIuMjhDMTcuMzEgMTIuODggMTQuMDYgMTUgMTAuNSAxNXpcIiAvPjxwYXRoIGQ9XCJNMTAuNSA5LjhhMi4zIDIuMyAwIDEgMCAwLTQuNiAyLjMgMi4zIDAgMCAwIDAgNC42em0wIDEuMmEzLjUgMy41IDAgMSAxIDAtNyAzLjUgMy41IDAgMCAxIDAgN3pcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvdmlzaWJsZS5zdmciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgey4uLnRoaXMucHJvcHN9PjxkZWZzPjxzdHlsZSAvPjwvZGVmcz48cGF0aCBkPVwiTTUxMS45OTkgMEMyMjguOTM3IDAgMCAyMjguOTM3IDAgNTExLjk5OWMwIDI4My4wNjQgMjI4LjkzNyA1MTEuOTk5IDUxMS45OTkgNTExLjk5OSAyODMuMDY0IDAgNTExLjk5OS0yMjguOTM0IDUxMS45OTktNTExLjk5OUMxMDIzLjk5NyAyMjguOTM3IDc5NS4wNjMgMCA1MTEuOTk5IDB6bTAgODA0LjU2OGMtNDAuMjI3IDAtNzMuMTQyLTMyLjkxNS03My4xNDItNzMuMTQgMC00MC4yMyAzMi45MTUtNzMuMTQ1IDczLjE0Mi03My4xNDUgNDAuMjMgMCA3My4xNDUgMzIuOTE1IDczLjE0NSA3My4xNDUgMCA0MC4yMjUtMzIuOTE1IDczLjE0LTczLjE0NSA3My4xNHptNzMuMTQ1LTI5Mi41NjljMCA0MC4yMy0zMi45MTUgNzMuMTQ1LTczLjE0NSA3My4xNDUtNDAuMjI3IDAtNzMuMTQyLTMyLjkxNS03My4xNDItNzMuMTQ1VjI5Mi41NzJjMC00MC4yMyAzMi45MTUtNzMuMTQ1IDczLjE0Mi03My4xNDUgNDAuMjMgMCA3My4xNDUgMzIuOTE1IDczLjE0NSA3My4xNDV2MjE5LjQyN3pcIiAvPjwvc3ZnPjtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2ljb24vaWNvbnMvd2FybmluZy5zdmciLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjMuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4wLjNAY29tcG9uZW50LWluZGV4b2YvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMTMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciB1dGlsID0ge1xuICBpc0FwcGVhclN1cHBvcnRlZDogZnVuY3Rpb24gaXNBcHBlYXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBpc0VudGVyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0VudGVyU3VwcG9ydGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25OYW1lICYmIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGlzTGVhdmVTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzTGVhdmVTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfSxcbiAgYWxsb3dBcHBlYXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGFsbG93RW50ZXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGFsbG93TGVhdmVDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25MZWF2ZSB8fCBwcm9wcy5hbmltYXRpb24ubGVhdmU7XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHV0aWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMy42QHJjLWFuaW1hdGUvbGliL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMTMiLCIndXNlIHN0cmljdCc7XG5cbi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9BbmltYXRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjMuNkByYy1hbmltYXRlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAxMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG59IGNhdGNoIChlcnIpIHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnY29tcG9uZW50LWluZGV4b2YnKTtcbn1cblxuLyoqXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cbiAqL1xuXG52YXIgcmUgPSAvXFxzKy87XG5cbi8qKlxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV3JhcCBgZWxgIGluIGEgYENsYXNzTGlzdGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKXtcbiAgcmV0dXJuIG5ldyBDbGFzc0xpc3QoZWwpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IENsYXNzTGlzdCBmb3IgYGVsYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwubm9kZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxpc3QgPSBlbC5jbGFzc0xpc3Q7XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIGBuYW1lYCBpZiBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obmFtZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LmFkZChuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKCF+aSkgYXJyLnB1c2gobmFtZSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyBgbmFtZWAgd2hlbiBwcmVzZW50LCBvclxuICogcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmVcbiAqIGFueSB3aGljaCBtYXRjaC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNYXRjaGluZyhuYW1lKTtcbiAgfVxuXG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LnJlbW92ZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKH5pKSBhcnIuc3BsaWNlKGksIDEpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGNsYXNzZXMgbWF0Y2hpbmcgYHJlYC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlTWF0Y2hpbmcgPSBmdW5jdGlvbihyZSl7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xuICAgICAgdGhpcy5yZW1vdmUoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBjbGFzcyBgbmFtZWAsIGNhbiBmb3JjZSBzdGF0ZSB2aWEgYGZvcmNlYC5cbiAqXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNsYXNzTGlzdCwgYnV0IGRvIG5vdCBzdXBwb3J0IGBmb3JjZWAgeWV0LFxuICogdGhlIG1pc3Rha2Ugd2lsbCBiZSBkZXRlY3RlZCBhbmQgY29ycmVjdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24obmFtZSwgZm9yY2Upe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSAhPT0gdGhpcy5saXN0LnRvZ2dsZShuYW1lLCBmb3JjZSkpIHtcbiAgICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTsgLy8gdG9nZ2xlIGFnYWluIHRvIGNvcnJlY3RcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIGNsYXNzZXMuXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NOYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gIHZhciBzdHIgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgYXJyID0gc3RyLnNwbGl0KHJlKTtcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBjbGFzcyBgbmFtZWAgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmhhcyA9XG5DbGFzc0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiB0aGlzLmxpc3RcbiAgICA/IHRoaXMubGlzdC5jb250YWlucyhuYW1lKVxuICAgIDogISEgfmluZGV4KHRoaXMuYXJyYXkoKSwgbmFtZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuNkBjb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMTMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4zLjJAY3NzLWFuaW1hdGlvbi9saWIvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDEzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfRXZlbnQgPSByZXF1aXJlKCcuL0V2ZW50Jyk7XG5cbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnQpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMgPSByZXF1aXJlKCdjb21wb25lbnQtY2xhc3NlcycpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50Q2xhc3Nlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBfRXZlbnQyW1wiZGVmYXVsdFwiXS5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xuXG5cbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvLyBvbGQgZmYgbmVlZCBudWxsLCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2dldENvbXB1dGVkU3R5bGVcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gKDAsIF9jb21wb25lbnRDbGFzc2VzMltcImRlZmF1bHRcIl0pKG5vZGUpO1xuXG4gIGlmIChlbmRDYWxsYmFjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW5kQ2FsbGJhY2spID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGVuZCA9IGVuZENhbGxiYWNrLmVuZDtcbiAgICBzdGFydCA9IGVuZENhbGxiYWNrLnN0YXJ0O1xuICAgIGFjdGl2ZSA9IGVuZENhbGxiYWNrLmFjdGl2ZTtcbiAgfVxuXG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShjbGFzc05hbWUpO1xuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgX0V2ZW50MltcImRlZmF1bHRcIl0ucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDJbXCJkZWZhdWx0XCJdLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBfRXZlbnQyW1wiZGVmYXVsdFwiXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgX0V2ZW50MltcImRlZmF1bHRcIl0uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3NzQW5pbWF0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjMuMkBjc3MtYW5pbWF0aW9uL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMTMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfQ2hpbGRyZW5VdGlscyA9IHJlcXVpcmUoJy4vQ2hpbGRyZW5VdGlscycpO1xuXG52YXIgX0FuaW1hdGVDaGlsZCA9IHJlcXVpcmUoJy4vQW5pbWF0ZUNoaWxkJyk7XG5cbnZhciBfQW5pbWF0ZUNoaWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FuaW1hdGVDaGlsZCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgX3V0aWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIGRlZmF1bHRLZXkgPSAncmNfYW5pbWF0ZV8nICsgRGF0ZS5ub3coKTtcblxuXG5mdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgaWYgKF9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIGlmICghY2hpbGRyZW4ua2V5KSB7XG4gICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGtleTogZGVmYXVsdEtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBBbmltYXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFuaW1hdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzID0ge307XG4gICAgX3RoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBfdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZHJlblV0aWxzLnRvQXJyYXlDaGlsZHJlbikoZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMoX3RoaXMucHJvcHMpKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQW5pbWF0ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gISFjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBfdGhpczIucGVyZm9ybUFwcGVhcihjaGlsZC5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIEFuaW1hdGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5uZXh0UHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdmFyIG5leHRDaGlsZHJlbiA9ICgwLCBfQ2hpbGRyZW5VdGlscy50b0FycmF5Q2hpbGRyZW4pKGdldENoaWxkcmVuRnJvbVByb3BzKG5leHRQcm9wcykpO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgLy8gZXhjbHVzaXZlIG5lZWRzIGltbWVkaWF0ZSByZXNwb25zZVxuICAgIGlmIChwcm9wcy5leGNsdXNpdmUpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzMy5zdG9wKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNob3dQcm9wID0gcHJvcHMuc2hvd1Byb3A7XG4gICAgdmFyIGN1cnJlbnRseUFuaW1hdGluZ0tleXMgPSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXM7XG4gICAgLy8gbGFzdCBwcm9wcyBjaGlsZHJlbiBpZiBleGNsdXNpdmVcbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gcHJvcHMuZXhjbHVzaXZlID8gKDAsIF9DaGlsZHJlblV0aWxzLnRvQXJyYXlDaGlsZHJlbikoZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKSA6IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgLy8gaW4gY2FzZSBkZXN0cm95IGluIHNob3dQcm9wIG1vZGVcbiAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1cnJlbnRDaGlsZCAmJiAoMCwgX0NoaWxkcmVuVXRpbHMuZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KShuZXh0Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZC5rZXkpO1xuICAgICAgICB2YXIgbmV3Q2hpbGQgPSB2b2lkIDA7XG4gICAgICAgIGlmICgoIW5leHRDaGlsZCB8fCAhbmV4dENoaWxkLnByb3BzW3Nob3dQcm9wXSkgJiYgY3VycmVudENoaWxkLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIG5ld0NoaWxkID0gX3JlYWN0MltcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KG5leHRDaGlsZCB8fCBjdXJyZW50Q2hpbGQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2hvd1Byb3AsIHRydWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZCA9IG5leHRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICAgIGlmICghbmV4dENoaWxkIHx8ICEoMCwgX0NoaWxkcmVuVXRpbHMuZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KShjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRyZW4gPSAoMCwgX0NoaWxkcmVuVXRpbHMubWVyZ2VDaGlsZHJlbikoY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pO1xuICAgIH1cblxuICAgIC8vIG5lZWQgcmVuZGVyIHRvIGF2b2lkIHVwZGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNQcmV2ID0gY2hpbGQgJiYgKDAsIF9DaGlsZHJlblV0aWxzLmZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIHZhciBzaG93SW5OZXh0ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICBpZiAoaGFzUHJldikge1xuICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSAoMCwgX0NoaWxkcmVuVXRpbHMuZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkpKGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgaWYgKCFzaG93SW5Ob3cgJiYgc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTmV4dCkge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWhhc1ByZXYpIHtcbiAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGhhc05leHQgPSBjaGlsZCAmJiAoMCwgX0NoaWxkcmVuVXRpbHMuZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KShuZXh0Q2hpbGRyZW4sIGtleSk7XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgdmFyIHNob3dJbk5vdyA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9ICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSkobmV4dENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICBpZiAoIXNob3dJbk5leHQgJiYgc2hvd0luTm93KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaG93SW5Ob3cpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFoYXNOZXh0KSB7XG4gICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQW5pbWF0ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIGtleXNUb0VudGVyLmZvckVhY2godGhpcy5wZXJmb3JtRW50ZXIpO1xuICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgIGtleXNUb0xlYXZlLmZvckVhY2godGhpcy5wZXJmb3JtTGVhdmUpO1xuICB9O1xuXG4gIEFuaW1hdGUucHJvdG90eXBlLmlzVmFsaWRDaGlsZEJ5S2V5ID0gZnVuY3Rpb24gaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpIHtcbiAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgcmV0dXJuICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfQ2hpbGRyZW5VdGlscy5maW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkpKGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgfTtcblxuICBBbmltYXRlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcChrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgdmFyIGNvbXBvbmVudCA9IHRoaXMucmVmc1trZXldO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIEFuaW1hdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHRoaXMubmV4dFByb3BzID0gcHJvcHM7XG4gICAgdmFyIHN0YXRlQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIHZhciBjaGlsZHJlbiA9IG51bGw7XG4gICAgaWYgKHN0YXRlQ2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuID0gc3RhdGVDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGQua2V5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNldCBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9BbmltYXRlQ2hpbGQyW1wiZGVmYXVsdFwiXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgIHJlZjogY2hpbGQua2V5LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHByb3BzLnRyYW5zaXRpb25BcHBlYXIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IHByb3BzLnRyYW5zaXRpb25MZWF2ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgIHZhciBwYXNzZWRQcm9wcyA9IHByb3BzO1xuICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhc3NlZFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZVxuICAgICAgICB9LCBwcm9wcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwYXNzZWRQcm9wcyxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlblswXSB8fCBudWxsO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5BbmltYXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYW55LFxuICBjb21wb25lbnRQcm9wczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0cmFuc2l0aW9uTmFtZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9iamVjdF0pLFxuICB0cmFuc2l0aW9uRW50ZXI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgZXhjbHVzaXZlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25FbmQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkVudGVyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25MZWF2ZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQXBwZWFyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgc2hvd1Byb3A6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5BbmltYXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5pbWF0aW9uOiB7fSxcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIGNvbXBvbmVudFByb3BzOiB7fSxcbiAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICB0cmFuc2l0aW9uTGVhdmU6IHRydWUsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICBvbkVuZDogbm9vcCxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25MZWF2ZTogbm9vcCxcbiAgb25BcHBlYXI6IG5vb3Bcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgdGhpcy5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmIChfdGhpczQucmVmc1trZXldKSB7XG4gICAgICBfdGhpczQuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNC5yZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKF90aGlzNC5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM0LCBrZXksICdlbnRlcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChfdGhpczQucmVmc1trZXldKSB7XG4gICAgICBfdGhpczQuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNC5yZWZzW2tleV0uY29tcG9uZW50V2lsbEFwcGVhcihfdGhpczQuaGFuZGxlRG9uZUFkZGluZy5iaW5kKF90aGlzNCwga2V5LCAnYXBwZWFyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVBZGRpbmcgPSBmdW5jdGlvbiAoa2V5LCB0eXBlKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM0LnByb3BzO1xuICAgIGRlbGV0ZSBfdGhpczQuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgIC8vIGlmIHVwZGF0ZSBvbiBleGNsdXNpdmUgbW9kZSwgc2tpcCBjaGVja1xuICAgIGlmIChwcm9wcy5leGNsdXNpdmUgJiYgcHJvcHMgIT09IF90aGlzNC5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9ICgwLCBfQ2hpbGRyZW5VdGlscy50b0FycmF5Q2hpbGRyZW4pKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgaWYgKCFfdGhpczQuaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpKSB7XG4gICAgICAvLyBleGNsdXNpdmUgd2lsbCBub3QgbmVlZCB0aGlzXG4gICAgICBfdGhpczQucGVyZm9ybUxlYXZlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlID09PSAnYXBwZWFyJykge1xuICAgICAgICBpZiAoX3V0aWwyW1wiZGVmYXVsdFwiXS5hbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uQXBwZWFyKGtleSk7XG4gICAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF91dGlsMltcImRlZmF1bHRcIl0uYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uRW50ZXIoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM0LnJlZnNba2V5XSkge1xuICAgICAgX3RoaXM0LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczQucmVmc1trZXldLmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpczQuaGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpczQsIGtleSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNC5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM0LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczQubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSAoMCwgX0NoaWxkcmVuVXRpbHMudG9BcnJheUNoaWxkcmVuKShnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpO1xuICAgIC8vIGluIGNhc2Ugc3RhdGUgY2hhbmdlIGlzIHRvbyBmYXN0XG4gICAgaWYgKF90aGlzNC5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIF90aGlzNC5wZXJmb3JtRW50ZXIoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgaWYgKF91dGlsMltcImRlZmF1bHRcIl0uYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uTGVhdmUoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghKDAsIF9DaGlsZHJlblV0aWxzLmlzU2FtZUNoaWxkcmVuKShfdGhpczQuc3RhdGUuY2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgcHJvcHMuc2hvd1Byb3ApKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW46IGN1cnJlbnRDaGlsZHJlblxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBbmltYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjMuNkByYy1hbmltYXRlL2xpYi9BbmltYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAxMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbiA9IHJlcXVpcmUoJ2Nzcy1hbmltYXRpb24nKTtcblxudmFyIF9jc3NBbmltYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQW5pbWF0aW9uKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBfdXRpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgdHJhbnNpdGlvbk1hcCA9IHtcbiAgZW50ZXI6ICd0cmFuc2l0aW9uRW50ZXInLFxuICBhcHBlYXI6ICd0cmFuc2l0aW9uQXBwZWFyJyxcbiAgbGVhdmU6ICd0cmFuc2l0aW9uTGVhdmUnXG59O1xuXG52YXIgQW5pbWF0ZUNoaWxkID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFuaW1hdGVDaGlsZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQW5pbWF0ZUNoaWxkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlQ2hpbGQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBBbmltYXRlQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gIH07XG5cbiAgQW5pbWF0ZUNoaWxkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsRW50ZXIgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoZG9uZSkge1xuICAgIGlmIChfdXRpbDJbXCJkZWZhdWx0XCJdLmlzRW50ZXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbmltYXRlQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxBcHBlYXIgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGRvbmUpIHtcbiAgICBpZiAoX3V0aWwyW1wiZGVmYXVsdFwiXS5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbmltYXRlQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMZWF2ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgaWYgKF91dGlsMltcImRlZmF1bHRcIl0uaXNMZWF2ZVN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhbHdheXMgc3luYywgZG8gbm90IGludGVydXB0IHdpdGggcmVhY3QgY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gLT4gYW5pbWF0ZSBoaWRkZW4gLT5cbiAgICAgIC8vIGRpZFVwZGF0ZSAtPiBhbmltYXRlIGxlYXZlIC0+IHVubW91bnQgKGlmIGFuaW1hdGUgaXMgbm9uZSlcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH07XG5cbiAgQW5pbWF0ZUNoaWxkLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgX3RoaXMyLnN0b3BwZXIgPSBudWxsO1xuICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGlmICgoX2Nzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB8fCAhcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKSAmJiB0cmFuc2l0aW9uTmFtZSAmJiBwcm9wc1t0cmFuc2l0aW9uTWFwW2FuaW1hdGlvblR5cGVdXSkge1xuICAgICAgdmFyIG5hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlXSA6IHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICAgIHZhciBhY3RpdmVOYW1lID0gbmFtZSArICctYWN0aXZlJztcbiAgICAgIGlmIChuYW1lSXNPYmogJiYgdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSkge1xuICAgICAgICBhY3RpdmVOYW1lID0gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RvcHBlciA9ICgwLCBfY3NzQW5pbWF0aW9uMltcImRlZmF1bHRcIl0pKG5vZGUsIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVOYW1lXG4gICAgICB9LCBlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BwZXIgPSBwcm9wcy5hbmltYXRpb25bYW5pbWF0aW9uVHlwZV0obm9kZSwgZW5kKTtcbiAgICB9XG4gIH07XG5cbiAgQW5pbWF0ZUNoaWxkLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgc3RvcHBlciA9IHRoaXMuc3RvcHBlcjtcbiAgICBpZiAoc3RvcHBlcikge1xuICAgICAgdGhpcy5zdG9wcGVyID0gbnVsbDtcbiAgICAgIHN0b3BwZXIuc3RvcCgpO1xuICAgIH1cbiAgfTtcblxuICBBbmltYXRlQ2hpbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0ZUNoaWxkO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5BbmltYXRlQ2hpbGQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmFueVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQW5pbWF0ZUNoaWxkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjMuNkByYy1hbmltYXRlL2xpYi9BbmltYXRlQ2hpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDEzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50b0FycmF5Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW47XG5leHBvcnRzLmZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSA9IGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleTtcbmV4cG9ydHMuZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleTtcbmV4cG9ydHMuZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5ID0gZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5O1xuZXhwb3J0cy5pc1NhbWVDaGlsZHJlbiA9IGlzU2FtZUNoaWxkcmVuO1xuZXhwb3J0cy5tZXJnZUNoaWxkcmVuID0gbWVyZ2VDaGlsZHJlbjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9BcnJheUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0LnB1c2goY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgcmV0ID0gbnVsbDtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiBjaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndHdvIGNoaWxkIHdpdGggc2FtZSBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgZm91bmQgPSAwO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvdW5kID0gY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiAhY2hpbGQyIHx8ICFjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dQcm9wICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSAhPT0gY2hpbGQyLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzYW1lO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNoaWxkcmVuKHByZXYsIG5leHQpIHtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dENoaWxkcmVuUGVuZGluZyA9IHt9O1xuICB2YXIgcGVuZGluZ0NoaWxkcmVuID0gW107XG4gIHByZXYuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHQsIGNoaWxkLmtleSkpIHtcbiAgICAgIGlmIChwZW5kaW5nQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSA9IHBlbmRpbmdDaGlsZHJlbjtcbiAgICAgICAgcGVuZGluZ0NoaWxkcmVuID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgJiYgbmV4dENoaWxkcmVuUGVuZGluZy5oYXNPd25Qcm9wZXJ0eShjaGlsZC5rZXkpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0ID0gcmV0LmNvbmNhdChwZW5kaW5nQ2hpbGRyZW4pO1xuXG4gIHJldHVybiByZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjMuNkByYy1hbmltYXRlL2xpYi9DaGlsZHJlblV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAxMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMy4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjIzLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IiwiLyoqXG4gKiBQcm9ncmVzcyBDb21wb25lbnRcbiAqIEBhdXRob3IgaGVpZmFkZVxuICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24vSWNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZ3Jlc3MuY3NzJztcblxuLy8gY29uc3Qgc3RhdHVzQ29sb3JNYXAgPSB7XG4vLyAgIG5vcm1hbDogJyMxMDhlZTknLFxuLy8gICBleGNlcHRpb246ICcjZmY1NTAwJyxcbi8vICAgc3VjY2VzczogJyM4N2QwNjgnLFxuLy8gfTtcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFByb2dyZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1Byb2dyZXNzJ1xuXG4gIHN0YXRpYyBMaW5lO1xuICBzdGF0aWMgQ2lyY2xlO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIHBlcmNlbnQ6IDAsXG4gICAgc2hvd0luZm86IHRydWUsXG4gICAgc3Ryb2tlV2lkdGg6IDEwLFxuICAgIHdpZHRoOiAwLFxuICAgIC8vIHRyYWlsQ29sb3I6ICcjZjNmM2YzJyxcbiAgICBzdGF0dXM6ICdub3JtYWwnLFxuICAgIGZvcm1hdDogbnVsbCxcbiAgICBnYXBEZWdyZWU6IDAsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAnZXhjZXB0aW9uJywgJ2FjdGl2ZScsICdzdWNjZXNzJ10pLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2xpbmUnLCAnY2lyY2xlJywgJ2Rhc2hib2FyZCddKSxcbiAgICBzaG93SW5mbzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGVyY2VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHJva2VXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyB0cmFpbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2FwRGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByZWZpeENscyA9ICdwcm9ncmVzcyc7XG4gICAgbGV0IHN0eWxlTmFtZSA9IGAke3ByZWZpeENsc30tLWxpbmVgO1xuXG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgcGVyY2VudCA9IDAsIHN0YXR1cywgZm9ybWF0LCAvLyB0cmFpbENvbG9yLFxuICAgICAgdHlwZSwgc3Ryb2tlV2lkdGgsIHdpZHRoLCBzaG93SW5mbywgZ2FwRGVncmVlLCBnYXBQb3NpdGlvbiwgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHByb2dyZXNzU3RhdHVzID0gcGFyc2VJbnQocGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwICYmICEoJ3N0YXR1cycgaW4gcHJvcHMpID8gJ3N1Y2Nlc3MnIDogKHN0YXR1cyB8fCAnbm9ybWFsJyk7XG4gICAgbGV0IHByb2dyZXNzSW5mbztcbiAgICBsZXQgcHJvZ3Jlc3M7XG4gICAgY29uc3QgdGV4dEZvcm1hdHRlciA9IGZvcm1hdCB8fCAocGVyY2VudE51bWJlciA9PiBgJHtwZXJjZW50TnVtYmVyfSVgKTtcblxuICAgIGlmIChzaG93SW5mbykge1xuICAgICAgbGV0IHRleHQ7XG4gICAgICAvLyBjb25zdCBpY29uVHlwZSA9ICh0eXBlID09PSAnY2lyY2xlJyB8fCB0eXBlID09PSAnZGFzaGJvYXJkJykgPyAnJyA6ICctY2lyY2xlJztcbiAgICAgIGlmIChwcm9ncmVzc1N0YXR1cyA9PT0gJ2V4Y2VwdGlvbicpIHtcbiAgICAgICAgdGV4dCA9IGZvcm1hdCA/IHRleHRGb3JtYXR0ZXIocGVyY2VudCkgOiA8SWNvbiBzaXplPXsxNH0gbmFtZT17J2Vycm9yJ30gY29sb3I9J3JlZCcgLz47XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzU3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgdGV4dCA9IGZvcm1hdCA/IHRleHRGb3JtYXR0ZXIocGVyY2VudCkgOiA8SWNvbiBzaXplPXsxNH0gbmFtZT17J3N1Y2Nlc3MnfSBjb2xvcj0nZ3JlZW4nIC8+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IHRleHRGb3JtYXR0ZXIocGVyY2VudCk7XG4gICAgICB9XG4gICAgICBwcm9ncmVzc0luZm8gPSA8c3BhbiBzdHlsZU5hbWU9e2Ake3ByZWZpeENsc30tLXRleHRgfT57dGV4dH08L3NwYW4+O1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgIHN0eWxlTmFtZSA9IGAke3ByZWZpeENsc30tLWxpbmVgO1xuICAgICAgY29uc3QgcGVyY2VudFN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7cGVyY2VudH0lYCxcbiAgICAgICAgaGVpZ2h0OiBzdHJva2VXaWR0aCB8fCAxMCxcbiAgICAgIH07XG4gICAgICBwcm9ncmVzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17YCR7cHJlZml4Q2xzfS0tb3V0ZXJgfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPXtgJHtwcmVmaXhDbHN9LS1pbm5lcmB9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17YCR7cHJlZml4Q2xzfS0tYmdgfSBzdHlsZT17cGVyY2VudFN0eWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb2dyZXNzSW5mb31cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NpcmNsZScgfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgIC8qIGNvbnN0IGNpcmNsZVNpemUgPSB3aWR0aCB8fCAxMzI7XG4gICAgICBjb25zdCBjaXJjbGVTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGNpcmNsZVNpemUsXG4gICAgICAgIGhlaWdodDogY2lyY2xlU2l6ZSxcbiAgICAgICAgZm9udFNpemU6IGNpcmNsZVNpemUgKiAwLjE2ICsgNixcbiAgICAgIH07XG4gICAgICBjb25zdCBjaXJjbGVXaWR0aCA9IHN0cm9rZVdpZHRoIHx8IDY7XG4gICAgICBjb25zdCBnYXBQb3MgPSBnYXBQb3NpdGlvbiB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyAmJiAnYm90dG9tJyB8fCAndG9wJztcbiAgICAgIGNvbnN0IGdhcERlZyA9IGdhcERlZ3JlZSB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyAmJiA3NTtcbiAgICAgIHByb2dyZXNzID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbm5lcmB9IHN0eWxlPXtjaXJjbGVTdHlsZX0+XG4gICAgICAgICAgPENpcmNsZVxuICAgICAgICAgICAgcGVyY2VudD17cGVyY2VudH1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtjaXJjbGVXaWR0aH1cbiAgICAgICAgICAgIHRyYWlsV2lkdGg9e2NpcmNsZVdpZHRofVxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e3N0YXR1c0NvbG9yTWFwW3Byb2dyZXNzU3RhdHVzXX1cbiAgICAgICAgICAgIHRyYWlsQ29sb3I9e3RyYWlsQ29sb3J9XG4gICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgICAgIGdhcERlZ3JlZT17Z2FwRGVnfVxuICAgICAgICAgICAgZ2FwUG9zaXRpb249e2dhcFBvc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtwcm9ncmVzc0luZm99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTsqL1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHtcbiAgICAvLyAgIFtgJHtwcmVmaXhDbHN9LSR7dHlwZSA9PT0gJ2Rhc2hib2FyZCcgJiYgJ2NpcmNsZScgfHwgdHlwZX1gXTogdHJ1ZSxcbiAgICAvLyAgIFtgJHtwcmVmaXhDbHN9LXN0YXR1cy0ke3Byb2dyZXNzU3RhdHVzfWBdOiB0cnVlLFxuICAgIC8vICAgW2Ake3ByZWZpeENsc30tc2hvdy1pbmZvYF06IHNob3dJbmZvLFxuICAgIC8vIH0sIGNsYXNzTmFtZSk7XG5cblxuICAgIGxldCBzdHlsZU5hbWVTdHIgPSBgJHtwcmVmaXhDbHN9ICR7c3R5bGVOYW1lfWA7XG5cbiAgICBpZiAoc2hvd0luZm8pIHtcbiAgICAgIHN0eWxlTmFtZVN0ciA9IHN0eWxlTmFtZVN0ci5jb25jYXQoYCAke2Ake3ByZWZpeENsc30tLXNob3ctaW5mb2B9YCk7XG4gICAgfVxuXG4gICAgc3R5bGVOYW1lU3RyID0gc3R5bGVOYW1lU3RyLmNvbmNhdChgICR7YCR7cHJlZml4Q2xzfS0tc3RhdHVzLSR7cHJvZ3Jlc3NTdGF0dXN9YH1gKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLnJlc3RQcm9wc30gc3R5bGVOYW1lPXtzdHlsZU5hbWVTdHJ9PlxuICAgICAgICB7cHJvZ3Jlc3N9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3Byb2dyZXNzL1Byb2dyZXNzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJvZ3Jlc3NcIjpcIldNYXFIV3NcIixcInByb2dyZXNzLS1saW5lXCI6XCJfM3hnNlZxQVwiLFwicHJvZ3Jlc3MtLW91dGVyXCI6XCJfM2pqTnl6Y1wiLFwicHJvZ3Jlc3MtLWlubmVyXCI6XCJfMnJsWVBDUlwiLFwicHJvZ3Jlc3MtLWJnXCI6XCJfM1BLREoxQ1wiLFwicHJvZ3Jlc3MtLXNob3ctaW5mb1wiOlwiXzFFdkpOQXFcIixcInByb2dyZXNzLS10ZXh0XCI6XCJqNmhKOUJOXCIsXCJwcm9ncmVzcy0tc3RhdHVzLWFjdGl2ZVwiOlwiXzM3ZFRqNkNcIixcInByb2dyZXNzLS1hY3RpdmVcIjpcIl8xTDRtOHZUXCIsXCJwcm9ncmVzcy0tc3RhdHVzLWV4Y2VwdGlvblwiOlwiemRGQ09QaVwiLFwicHJvZ3Jlc3MtLXN0YXR1cy1ub3JtYWxcIjpcIl8yRTVVVEo0XCIsXCJwcm9ncmVzcy0tc3RhdHVzLXN1Y2Nlc3NcIjpcIl8zdzctTjlZXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvUHJvZ3Jlc3MuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMTEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ1cGxvYWRcIjpcIl8yVXhWMGt6XCIsXCJ1cGxvYWQtc2VsZWN0XCI6XCJfMWZRei1FX1wiLFwidXBsb2FkLXNlbGVjdC10ZXh0XCI6XCJfMW1hTl9DdlwiLFwidXBsb2FkLWxpc3RcIjpcIl8xNE5odFdvXCIsXCJ1cGxvYWQtbGlzdC1pdGVtXCI6XCJfM05qZmlrZFwiLFwicmVtb3ZlXCI6XCJCb2U4Z0p2XCIsXCJ1cGxvYWQtbGlzdC1pdGVtLWluZm9cIjpcIkFDSTVIRDhcIixcInN0YXR1c1wiOlwiXzNxbFAxQ2RcIixcInVwbG9hZC1saXN0LWl0ZW0tbmFtZVwiOlwiXzFjVlppT1FcIixcInVwbG9hZC1saXN0LWl0ZW0tcHJvZ3Jlc3NcIjpcIl8xaWsxeTZBXCIsXCJ1cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZ1wiOlwiXzJIMHlwVG5cIixcInVwbG9hZC1saXN0LWl0ZW0tZG9uZVwiOlwiXzdvbHR4LUNcIixcInVwbG9hZC1saXN0LWl0ZW0tZXJyb3JcIjpcIl8xakdiVWF3XCIsXCJ1cGxvYWQtbGlzdC10ZXh0XCI6XCJfM01pM3NSb1wiLFwidXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmRcIjpcIl8zU2F4UEhtXCIsXCJoaWRlXCI6XCJfMlo3S2dMNFwiLFwidXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkXCI6XCJfMk1La1hXQlwiLFwidXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWxcIjpcIl8yN1dTNkRQXCIsXCJ1cGxvYWRpbmctdGV4dFwiOlwiXzNraV9YT3dcIixcImltZ3Nob3dcIjpcIl8xdHpMaEVmXCIsXCJwaWN0dXJlU2hvd1wiOlwieHB3OTAtQVwiLFwidXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zXCI6XCJfM1g3MEdQU1wiLFwiZXllXCI6XCJfM2dJQ0pKelwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3VwbG9hZC9VcGxvYWQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdWlkO1xudmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xudmFyIGluZGV4ID0gMDtcblxuZnVuY3Rpb24gdWlkKCkge1xuICByZXR1cm4gXCJyYy11cGxvYWQtXCIgKyBub3cgKyBcIi1cIiArICsraW5kZXg7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMy41QHJjLXVwbG9hZC9saWIvdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiAqIFVwbG9hZCBDb21wb25lbnRcbiAqIEBhdXRob3IgaGVpZmFkZVxuICovXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY1VwbG9hZCBmcm9tICdyYy11cGxvYWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmlsZVRvT2JqZWN0LCBnZW5QZXJjZW50QWRkLCBnZXRGaWxlSXRlbSwgcmVtb3ZlRmlsZUl0ZW0gfSBmcm9tICcuL3V0aWxzJztcbi8vIGltcG9ydCBEcmFnZ2VyIGZyb20gJy4vRHJhZ2dlcic7XG5pbXBvcnQgVXBsb2FkTGlzdCBmcm9tICcuL1VwbG9hZExpc3QnO1xuLy8gaW1wb3J0IHsgVXBsb2FkUHJvcHMsIFVwbG9hZExvY2FsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VwbG9hZC5jc3MnO1xuXG5jb25zdCBkZWZhdWx0TG9jYWxlID0ge1xuICB1cGxvYWRpbmc6ICfkuIrkvKDkuK0uLi4nLFxuICB1cGxvYWRFcnJvcjogJ+S4iuS8oOWksei0pScsXG4gIHJlbW92ZUZpbGU6ICfliKDpmaTmlofku7YnLFxuICBwcmV2aWV3RmlsZTogJ+mihOiniOaWh+S7ticsXG59O1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgVXBsb2FkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnVXBsb2FkJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ2ZpbGUnLFxuICAgIGRlZmF1bHRGaWxlTGlzdDogbnVsbCxcbiAgICBhY3Rpb246ICcnLFxuICAgIGRhdGE6IHt9LFxuICAgIGhlYWRlcnM6IG51bGwsXG4gICAgc2hvd1VwbG9hZExpc3Q6IHRydWUsXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjY2VwdDogJycsXG4gICAgYmVmb3JlVXBsb2FkOiBudWxsLFxuICAgIGN1c3RvbVJlcXVlc3Q6IG51bGwsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgbGlzdFR5cGU6ICd0ZXh0JywgLy8gb3IgcGljdHVyZS1jYXJkXG4gICAgb25QcmV2aWV3OiBudWxsLFxuICAgIG9uUmVtb3ZlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuXG4gICAgcHJlZml4Q2xzOiAndXBsb2FkJyxcbiAgICAvLyB0eXBlOiAnc2VsZWN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIC8vIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IGZhbHNlLFxuICAgIG9uUmVzcG9uc2U6IChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiAn5LiK5Lyg5oiQ5YqfJyxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1zZyxcbiAgICAgIH07XG4gICAgfSxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRGaWxlTGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgZmlsZUxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0IHx8IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2hvd1VwbG9hZExpc3Q6IFByb3BUeXBlcy5ib29sIHx8IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjY2VwdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiZWZvcmVVcGxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbVJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsaXN0VHlwZTogUHJvcFR5cGVzLm9uZU9mKCd0ZXh0JywgJ3BpY3R1cmUtY2FyZCcpLFxuICAgIG9uUHJldmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICBvblJlc3BvbnNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBzdXBwb3J0U2VydmVyUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlTGlzdDogdGhpcy5wcm9wcy5maWxlTGlzdCB8fCB0aGlzLnByb3BzLmRlZmF1bHRGaWxlTGlzdCB8fCBbXSxcbiAgICAgIGRyYWdTdGF0ZTogJ2Ryb3AnLFxuICAgIH07XG4gIH1cblxuICAvLyBnZXRMb2NhbGUoKSB7XG4gIC8vICAgbGV0IGxvY2FsZSA9IHt9O1xuICAvLyAgIGlmICh0aGlzLmNvbnRleHQuYW50TG9jYWxlICYmIHRoaXMuY29udGV4dC5hbnRMb2NhbGUuVXBsb2FkKSB7XG4gIC8vICAgICBsb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlLlVwbG9hZDtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIGFzc2lnbih7fSwgZGVmYXVsdExvY2FsZSwgbG9jYWxlLCB0aGlzLnByb3BzLmxvY2FsZSk7XG4gIC8vIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICgnZmlsZUxpc3QnIGluIG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbGVMaXN0OiBuZXh0UHJvcHMuZmlsZUxpc3QgfHwgW10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2UgPSAoaW5mbykgPT4ge1xuICAgIGlmICghKCdmaWxlTGlzdCcgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlTGlzdDogaW5mby5maWxlTGlzdCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShpbmZvKTtcbiAgICB9XG4gIH1cbiAgb25TdGFydCA9IChmaWxlKSA9PiB7XG4gICAgbGV0IHRhcmdldEl0ZW07XG4gICAgbGV0IG5leHRGaWxlTGlzdCA9IHRoaXMuc3RhdGUuZmlsZUxpc3QuY29uY2F0KCk7XG4gICAgaWYgKGZpbGUubGVuZ3RoID4gMCkge1xuICAgICAgdGFyZ2V0SXRlbSA9IGZpbGUubWFwKChmKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVPYmplY3QgPSBmaWxlVG9PYmplY3QoZik7XG4gICAgICAgIGZpbGVPYmplY3Quc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgICAgIHJldHVybiBmaWxlT2JqZWN0O1xuICAgICAgfSk7XG4gICAgICBuZXh0RmlsZUxpc3QgPSBuZXh0RmlsZUxpc3QuY29uY2F0KHRhcmdldEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRJdGVtID0gZmlsZVRvT2JqZWN0KGZpbGUpO1xuICAgICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAndXBsb2FkaW5nJztcbiAgICAgIG5leHRGaWxlTGlzdC5wdXNoKHRhcmdldEl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIGZpbGU6IHRhcmdldEl0ZW0sXG4gICAgICBmaWxlTGlzdDogbmV4dEZpbGVMaXN0LFxuICAgIH0pO1xuXG4gICAgLy8gZml4IGllIHByb2dyZXNzXG4gICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcbiAgICAgIHRoaXMuYXV0b1VwZGF0ZVByb2dyZXNzKDAsIHRhcmdldEl0ZW0pO1xuICAgIH1cbiAgfVxuICAvLyDkuIrkvKDlh7rplJnml7ZcbiAgb25FcnJvciA9IChlcnJvciwgcmVzcG9uc2UsIGZpbGUpID0+IHtcbiAgICB0aGlzLmNsZWFyUHJvZ3Jlc3NUaW1lcigpO1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5zdGF0ZS5maWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIC8vIHJlbW92ZWRcbiAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycm9yO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSBkZWZhdWx0TG9jYWxlLnVwbG9hZEVycm9yO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgfSk7XG4gIH1cbiAgb25GaWxlRHJvcCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnU3RhdGU6IGUudHlwZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VjY2VzcyA9IChyZXNwb25zZSwgZmlsZSkgPT4ge1xuICAgIHRoaXMuY2xlYXJQcm9ncmVzc1RpbWVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBkbyBub3RoaW5nICovXG4gICAgfVxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5zdGF0ZS5maWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuXG4gICAgLy8gcmVtb3ZlZFxuICAgIGlmICghdGFyZ2V0SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdERhdGEgPSB0aGlzLnByb3BzLm9uUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgaWYgKHJlc3VsdERhdGEuc3VjY2Vzcykge1xuICAgICAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlc3VsdERhdGEubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgfSk7XG4gIH1cblxuICBvblByb2dyZXNzID0gKGUsIGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMuc3RhdGUuZmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IGdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcblxuICAgIC8vIHJlbW92ZWRcbiAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuXG4gICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICBldmVudDogZSxcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3Q6IHRoaXMuc3RhdGUuZmlsZUxpc3QsXG4gICAgfSk7XG4gIH1cblxuICBhdXRvVXBkYXRlUHJvZ3Jlc3MoXywgZmlsZSkge1xuICAgIGNvbnN0IGdldFBlcmNlbnQgPSBnZW5QZXJjZW50QWRkKCk7XG4gICAgbGV0IGN1clBlcmNlbnQgPSAwO1xuICAgIHRoaXMuY2xlYXJQcm9ncmVzc1RpbWVyKCk7XG4gICAgdGhpcy5wcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY3VyUGVyY2VudCA9IGdldFBlcmNlbnQoY3VyUGVyY2VudCk7XG4gICAgICB0aGlzLm9uUHJvZ3Jlc3Moe1xuICAgICAgICBwZXJjZW50OiBjdXJQZXJjZW50LFxuICAgICAgfSwgZmlsZSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIGhhbmRsZU1hbnVhbFJlbW92ZSA9IChmaWxlKSA9PiB7XG4gICAgdGhpcy5yZWZzLnVwbG9hZC5hYm9ydChmaWxlKTtcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHRoaXMuaGFuZGxlUmVtb3ZlKGZpbGUpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlKGZpbGUpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHR5cGVvZiBvblJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVtb3ZlKGZpbGUpIDogb25SZW1vdmUpXG4gICAgICAudGhlbigocmV0KSA9PiB7XG4gICAgICAgIC8vIFByZXZlbnQgcmVtb3ZpbmcgZmlsZVxuICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZWRGaWxlTGlzdCA9IHJlbW92ZUZpbGVJdGVtKGZpbGUsIHRoaXMuc3RhdGUuZmlsZUxpc3QpO1xuICAgICAgICBpZiAocmVtb3ZlZEZpbGVMaXN0KSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgZmlsZUxpc3Q6IHJlbW92ZWRGaWxlTGlzdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjbGVhclByb2dyZXNzVGltZXIoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzVGltZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZWZpeENscyA9ICcnLCBzaG93VXBsb2FkTGlzdCwgbGlzdFR5cGUsIG9uUHJldmlldyxcbiAgICAgIC8vIHR5cGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmNVcGxvYWRQcm9wcyA9IGFzc2lnbih7fSwge1xuICAgICAgb25TdGFydDogdGhpcy5vblN0YXJ0LFxuICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yLFxuICAgICAgb25Qcm9ncmVzczogdGhpcy5vblByb2dyZXNzLFxuICAgICAgb25TdWNjZXNzOiB0aGlzLm9uU3VjY2VzcyxcbiAgICB9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSByY1VwbG9hZFByb3BzLmNsYXNzTmFtZTtcblxuXG4gICAgY29uc3QgeyBzaG93UmVtb3ZlSWNvbiwgc2hvd1ByZXZpZXdJY29uIH0gPSBzaG93VXBsb2FkTGlzdDtcbiAgICBjb25zdCB1cGxvYWRMaXN0ID0gc2hvd1VwbG9hZExpc3QgPyAoXG4gICAgICA8VXBsb2FkTGlzdFxuICAgICAgICBsaXN0VHlwZT17bGlzdFR5cGV9XG4gICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmZpbGVMaXN0fVxuICAgICAgICBvblByZXZpZXc9e29uUHJldmlld31cbiAgICAgICAgb25SZW1vdmU9e3RoaXMuaGFuZGxlTWFudWFsUmVtb3ZlfVxuICAgICAgICBzaG93UmVtb3ZlSWNvbj17c2hvd1JlbW92ZUljb259XG4gICAgICAgIHNob3dQcmV2aWV3SWNvbj17c2hvd1ByZXZpZXdJY29ufVxuICAgICAgICAvLyBsb2NhbGU9e3RoaXMuZ2V0TG9jYWxlKCl9XG4gICAgICAgIGxvY2FsZT17ZGVmYXVsdExvY2FsZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApIDogbnVsbDtcblxuICAgIC8qIGlmICh0eXBlID09PSAnZHJhZycpIHtcbiAgICAgIGNvbnN0IGRyYWdDbHMgPSBjbGFzc05hbWVzKHByZWZpeENscywge1xuICAgICAgICBbYCR7cHJlZml4Q2xzfS1kcmFnYF06IHRydWUsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYF06IHRoaXMuc3RhdGUuZmlsZUxpc3Quc29tZShmaWxlID0+IHtcbiAgICAgICAgICByZXR1cm4gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnO1xuICAgICAgICB9KSxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tZHJhZy1ob3ZlcmBdOiB0aGlzLnN0YXRlLmRyYWdTdGF0ZSA9PT0gJ2RyYWdvdmVyJyxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2RyYWdDbHN9XG4gICAgICAgICAgICBvbkRyb3A9e3RoaXMub25GaWxlRHJvcH1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9e3RoaXMub25GaWxlRHJvcH1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXt0aGlzLm9uRmlsZURyb3B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJjVXBsb2FkIHsuLi5yY1VwbG9hZFByb3BzfSByZWY9XCJ1cGxvYWRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tYnRuYH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWRyYWctY29udGFpbmVyYH0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmNVcGxvYWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3VwbG9hZExpc3R9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSAqL1xuXG4gICAgLy8gY29uc3QgdXBsb2FkQnV0dG9uQ2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHtcbiAgICAvLyAgIFtgJHtwcmVmaXhDbHN9LXNlbGVjdGBdOiB0cnVlLFxuICAgIC8vICAgW2Ake3ByZWZpeENsc30tc2VsZWN0LSR7bGlzdFR5cGV9YF06IHRydWUsXG4gICAgLy8gICBbYCR7cHJlZml4Q2xzfS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICAgIC8vIDxkaXYgc3R5bGVOYW1lPXtgJHtwcmVmaXhDbHN9ICR7cHJlZml4Q2xzfS1zZWxlY3QgJHtwcmVmaXhDbHN9LXNlbGVjdC0ke2xpc3RUeXBlfSBgfSBzdHlsZT17eyBkaXNwbGF5OiBjaGlsZHJlbiA/ICcnIDogJ25vbmUnIH19PlxuICAgICAgPGRpdiBzdHlsZU5hbWU9e2Ake3ByZWZpeENsc30gJHtwcmVmaXhDbHN9LXNlbGVjdCAke3ByZWZpeENsc30tc2VsZWN0LSR7bGlzdFR5cGV9ICR7Y2hpbGRyZW4gPyAnJyA6ICdoaWRlJ31gfT5cbiAgICAgICAgPFJjVXBsb2FkIHsuLi5yY1VwbG9hZFByb3BzfSByZWY9XCJ1cGxvYWRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHt1cGxvYWRMaXN0fVxuICAgICAgICAgIHt1cGxvYWRCdXR0b259XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7dXBsb2FkQnV0dG9ufVxuICAgICAgICB7dXBsb2FkTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3VwbG9hZC9VcGxvYWQuanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9VcGxvYWQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3VwbG9hZC9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjEuMEB3YXJuaW5nL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG5cbnZhciBfcmVxdWVzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXF1ZXN0KTtcblxudmFyIF91aWQgPSByZXF1aXJlKCcuL3VpZCcpO1xuXG52YXIgX3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91aWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIEFqYXhVcGxvYWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzW1wiZGVmYXVsdFwiXSkoQWpheFVwbG9hZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBamF4VXBsb2FkZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szW1wiZGVmYXVsdFwiXSkodGhpcywgQWpheFVwbG9hZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1tcImRlZmF1bHRcIl0pKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7IHVpZDogKDAsIF91aWQyW1wiZGVmYXVsdFwiXSkoKSB9LCBfdGhpcy5yZXFzID0ge30sIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgX3RoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICAgICAgX3RoaXMucmVzZXQoKTtcbiAgICB9LCBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gX3RoaXMucmVmcy5maWxlO1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGljaygpO1xuICAgIH0sIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgX3RoaXMub25DbGljaygpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRmlsZURyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICBfdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbXCJkZWZhdWx0XCJdKShfdGhpcywgX3JldCk7XG4gIH1cblxuICBBamF4VXBsb2FkZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBBamF4VXBsb2FkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9O1xuXG4gIEFqYXhVcGxvYWRlci5wcm90b3R5cGUudXBsb2FkRmlsZXMgPSBmdW5jdGlvbiB1cGxvYWRGaWxlcyhmaWxlcykge1xuICAgIHZhciBwb3N0RmlsZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlcyk7XG4gICAgdmFyIGxlbiA9IHBvc3RGaWxlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGZpbGUgPSBwb3N0RmlsZXNbaV07XG4gICAgICBmaWxlLnVpZCA9ICgwLCBfdWlkMltcImRlZmF1bHRcIl0pKCk7XG4gICAgICB0aGlzLnVwbG9hZChmaWxlLCBwb3N0RmlsZXMpO1xuICAgIH1cbiAgfTtcblxuICBBamF4VXBsb2FkZXIucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uIHVwbG9hZChmaWxlLCBmaWxlTGlzdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcHJvcHMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICAvLyBhbHdheXMgYXN5bmMgaW4gY2FzZSB1c2UgcmVhY3Qgc3RhdGUgdG8ga2VlcCBmaWxlTGlzdFxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnBvc3QoZmlsZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgYmVmb3JlID0gcHJvcHMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcbiAgICBpZiAoYmVmb3JlICYmIGJlZm9yZS50aGVuKSB7XG4gICAgICBiZWZvcmUudGhlbihmdW5jdGlvbiAocHJvY2Vzc2VkRmlsZSkge1xuICAgICAgICB2YXIgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICBfdGhpczIucG9zdChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIucG9zdChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnBvc3QoZmlsZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH07XG5cbiAgQWpheFVwbG9hZGVyLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gcG9zdChmaWxlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICB2YXIgb25TdGFydCA9IHByb3BzLm9uU3RhcnQsXG4gICAgICAgIG9uUHJvZ3Jlc3MgPSBwcm9wcy5vblByb2dyZXNzO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhID0gZGF0YShmaWxlKTtcbiAgICB9XG4gICAgdmFyIHVpZCA9IGZpbGUudWlkO1xuXG4gICAgdmFyIHJlcXVlc3QgPSBwcm9wcy5jdXN0b21SZXF1ZXN0IHx8IF9yZXF1ZXN0MltcImRlZmF1bHRcIl07XG4gICAgdGhpcy5yZXFzW3VpZF0gPSByZXF1ZXN0KHtcbiAgICAgIGFjdGlvbjogcHJvcHMuYWN0aW9uLFxuICAgICAgZmlsZW5hbWU6IHByb3BzLm5hbWUsXG4gICAgICBmaWxlOiBmaWxlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGhlYWRlcnM6IHByb3BzLmhlYWRlcnMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHByb3BzLndpdGhDcmVkZW50aWFscyxcbiAgICAgIG9uUHJvZ3Jlc3M6IG9uUHJvZ3Jlc3MgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBvblByb2dyZXNzKGUsIGZpbGUpO1xuICAgICAgfSA6IG51bGwsXG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXQpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMy5yZXFzW3VpZF07XG4gICAgICAgIHByb3BzLm9uU3VjY2VzcyhyZXQsIGZpbGUpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyLCByZXQpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMy5yZXFzW3VpZF07XG4gICAgICAgIHByb3BzLm9uRXJyb3IoZXJyLCByZXQsIGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9uU3RhcnQoZmlsZSk7XG4gIH07XG5cbiAgQWpheFVwbG9hZGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdWlkOiAoMCwgX3VpZDJbXCJkZWZhdWx0XCJdKSgpXG4gICAgfSk7XG4gIH07XG5cbiAgQWpheFVwbG9hZGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICB2YXIgcmVxcyA9IHRoaXMucmVxcztcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICB2YXIgdWlkID0gZmlsZTtcbiAgICAgIGlmIChmaWxlICYmIGZpbGUudWlkKSB7XG4gICAgICAgIHVpZCA9IGZpbGUudWlkO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXNbdWlkXSkge1xuICAgICAgICByZXFzW3VpZF0uYWJvcnQoKTtcbiAgICAgICAgZGVsZXRlIHJlcXNbdWlkXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMocmVxcykuZm9yRWFjaChmdW5jdGlvbiAodWlkKSB7XG4gICAgICAgIGlmIChyZXFzW3VpZF0pIHtcbiAgICAgICAgICByZXFzW3VpZF0uYWJvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgQWpheFVwbG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIFRhZyA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG4gICAgICAgIGFjY2VwdCA9IF9wcm9wcy5hY2NlcHQsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNscyA9ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBjbGFzc05hbWUpLCBfY2xhc3NOYW1lcykpO1xuICAgIHZhciBldmVudHMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgIG9uRHJvcDogdGhpcy5vbkZpbGVEcm9wLFxuICAgICAgb25EcmFnT3ZlcjogdGhpcy5vbkZpbGVEcm9wLFxuICAgICAgdGFiSW5kZXg6ICcwJ1xuICAgIH07XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUYWcsXG4gICAgICAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIGV2ZW50cywge1xuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICByZWY6ICdmaWxlJyxcbiAgICAgICAga2V5OiB0aGlzLnN0YXRlLnVpZCxcbiAgICAgICAgc3R5bGU6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgIGFjY2VwdDogYWNjZXB0LFxuICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQWpheFVwbG9hZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTsgLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCByZWFjdC9zb3J0LWNvbXA6MCAqL1xuXG5BamF4VXBsb2FkZXIucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBwcmVmaXhDbHM6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFjY2VwdDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5hbnksXG4gIG9uU3RhcnQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBkYXRhOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LCBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuY10pLFxuICBoZWFkZXJzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBiZWZvcmVVcGxvYWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjdXN0b21SZXF1ZXN0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Qcm9ncmVzczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHdpdGhDcmVkZW50aWFsczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFqYXhVcGxvYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4zLjVAcmMtdXBsb2FkL2xpYi9BamF4VXBsb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91aWQgPSByZXF1aXJlKCcuL3VpZCcpO1xuXG52YXIgX3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91aWQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qIGVzbGludCByZWFjdC9zb3J0LWNvbXA6MCAqL1xudmFyIElGUkFNRV9TVFlMRSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgb3BhY2l0eTogMCxcbiAgZmlsdGVyOiAnYWxwaGEob3BhY2l0eT0wKScsXG4gIGxlZnQ6IDAsXG4gIHpJbmRleDogOTk5OVxufTtcblxuLy8gZGlmZXJlbnQgZnJvbSBBamF4VXBsb2FkLCBjYW4gb25seSB1cGxvYWQgb24gYXQgb25lIHRpbWUsIHNlcmlhbCBzZXJpb3VzbHlcblxudmFyIElmcmFtZVVwbG9hZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czNbXCJkZWZhdWx0XCJdKShJZnJhbWVVcGxvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSWZyYW1lVXBsb2FkZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szW1wiZGVmYXVsdFwiXSkodGhpcywgSWZyYW1lVXBsb2FkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zW1wiZGVmYXVsdFwiXSkodGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHsgdXBsb2FkaW5nOiBmYWxzZSB9LCBfdGhpcy5maWxlID0ge30sIF90aGlzLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUudXBsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBfdGhpczIgPSBfdGhpcyxcbiAgICAgICAgICBwcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgICBmaWxlID0gX3RoaXMyLmZpbGU7XG5cbiAgICAgIHZhciByZXNwb25zZSA9IHZvaWQgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBkb2MgPSBfdGhpcy5nZXRJZnJhbWVEb2N1bWVudCgpO1xuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgaWYgKHNjcmlwdCAmJiBzY3JpcHQucGFyZW50Tm9kZSA9PT0gZG9jLmJvZHkpIHtcbiAgICAgICAgICBkb2MuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3BvbnNlID0gZG9jLmJvZHkuaW5uZXJIVE1MO1xuICAgICAgICBwcm9wcy5vblN1Y2Nlc3MocmVzcG9uc2UsIGZpbGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbXCJkZWZhdWx0XCJdKShmYWxzZSwgJ2Nyb3NzIGRvbWFpbiBlcnJvciBmb3IgVXBsb2FkLiBNYXliZSBzZXJ2ZXIgc2hvdWxkIHJldHVybiBkb2N1bWVudC5kb21haW4gc2NyaXB0LiBzZWUgTm90ZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXBsb2FkJyk7XG4gICAgICAgIHJlc3BvbnNlID0gJ2Nyb3NzLWRvbWFpbic7XG4gICAgICAgIHByb3BzLm9uRXJyb3IoZXJyLCBudWxsLCBmaWxlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmVuZFVwbG9hZCgpO1xuICAgIH0sIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRhcmdldCA9IF90aGlzLmdldEZvcm1JbnB1dE5vZGUoKTtcbiAgICAgIC8vIGllOC85IGRvbid0IHN1cHBvcnQgRmlsZUxpc3QgT2JqZWN0XG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyODMwMDU4L2llOC1pbnB1dC10eXBlLWZpbGUtZ2V0LWZpbGVzXG4gICAgICB2YXIgZmlsZSA9IF90aGlzLmZpbGUgPSB7XG4gICAgICAgIHVpZDogKDAsIF91aWQyW1wiZGVmYXVsdFwiXSkoKSxcbiAgICAgICAgbmFtZTogdGFyZ2V0LnZhbHVlXG4gICAgICB9O1xuICAgICAgX3RoaXMuc3RhcnRVcGxvYWQoKTtcbiAgICAgIHZhciBfdGhpczMgPSBfdGhpcyxcbiAgICAgICAgICBwcm9wcyA9IF90aGlzMy5wcm9wcztcblxuICAgICAgaWYgKCFwcm9wcy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBvc3QoZmlsZSk7XG4gICAgICB9XG4gICAgICB2YXIgYmVmb3JlID0gcHJvcHMuYmVmb3JlVXBsb2FkKGZpbGUpO1xuICAgICAgaWYgKGJlZm9yZSAmJiBiZWZvcmUudGhlbikge1xuICAgICAgICBiZWZvcmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucG9zdChmaWxlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmVuZFVwbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xuICAgICAgICBfdGhpcy5wb3N0KGZpbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuZW5kVXBsb2FkKCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zW1wiZGVmYXVsdFwiXSkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgSWZyYW1lVXBsb2FkZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVJZnJhbWVXSCgpO1xuICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVJZnJhbWVXSCgpO1xuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5nZXRJZnJhbWVOb2RlID0gZnVuY3Rpb24gZ2V0SWZyYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZzLmlmcmFtZTtcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuZ2V0SWZyYW1lRG9jdW1lbnQgPSBmdW5jdGlvbiBnZXRJZnJhbWVEb2N1bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJZnJhbWVOb2RlKCkuY29udGVudERvY3VtZW50O1xuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5nZXRGb3JtTm9kZSA9IGZ1bmN0aW9uIGdldEZvcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldElmcmFtZURvY3VtZW50KCkuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuZ2V0Rm9ybUlucHV0Tm9kZSA9IGZ1bmN0aW9uIGdldEZvcm1JbnB1dE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SWZyYW1lRG9jdW1lbnQoKS5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuZ2V0Rm9ybURhdGFOb2RlID0gZnVuY3Rpb24gZ2V0Rm9ybURhdGFOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldElmcmFtZURvY3VtZW50KCkuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEnKTtcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuZ2V0RmlsZUZvck11bHRpcGxlID0gZnVuY3Rpb24gZ2V0RmlsZUZvck11bHRpcGxlKGZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tdWx0aXBsZSA/IFtmaWxlXSA6IGZpbGU7XG4gIH07XG5cbiAgSWZyYW1lVXBsb2FkZXIucHJvdG90eXBlLmdldElmcmFtZUhUTUwgPSBmdW5jdGlvbiBnZXRJZnJhbWVIVE1MKGRvbWFpbikge1xuICAgIHZhciBkb21haW5TY3JpcHQgPSAnJztcbiAgICB2YXIgZG9tYWluSW5wdXQgPSAnJztcbiAgICBpZiAoZG9tYWluKSB7XG4gICAgICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gICAgICBkb21haW5TY3JpcHQgPSAnPCcgKyBzY3JpcHQgKyAnPmRvY3VtZW50LmRvbWFpbj1cIicgKyBkb21haW4gKyAnXCI7PC8nICsgc2NyaXB0ICsgJz4nO1xuICAgICAgZG9tYWluSW5wdXQgPSAnPGlucHV0IG5hbWU9XCJfZG9jdW1lbnREb21haW5cIiB2YWx1ZT1cIicgKyBkb21haW4gKyAnXCIgLz4nO1xuICAgIH1cbiAgICByZXR1cm4gJ1xcbiAgICA8IURPQ1RZUEUgaHRtbD5cXG4gICAgPGh0bWw+XFxuICAgIDxoZWFkPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxcbiAgICA8c3R5bGU+XFxuICAgIGJvZHksaHRtbCB7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO292ZXJmbG93OmhpZGRlbjt9XFxuICAgIDwvc3R5bGU+XFxuICAgICcgKyBkb21haW5TY3JpcHQgKyAnXFxuICAgIDwvaGVhZD5cXG4gICAgPGJvZHk+XFxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIlxcbiAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXFxuICAgIGFjdGlvbj1cIicgKyB0aGlzLnByb3BzLmFjdGlvbiArICdcIiBpZD1cImZvcm1cIlxcbiAgICBzdHlsZT1cImRpc3BsYXk6YmxvY2s7aGVpZ2h0Ojk5OTlweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47XCI+XFxuICAgIDxpbnB1dCBpZD1cImlucHV0XCIgdHlwZT1cImZpbGVcIlxcbiAgICAgbmFtZT1cIicgKyB0aGlzLnByb3BzLm5hbWUgKyAnXCJcXG4gICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtoZWlnaHQ6OTk5OXB4O2ZvbnQtc2l6ZTo5OTk5cHg7Y3Vyc29yOnBvaW50ZXI7XCIvPlxcbiAgICAnICsgZG9tYWluSW5wdXQgKyAnXFxuICAgIDxzcGFuIGlkPVwiZGF0YVwiPjwvc3Bhbj5cXG4gICAgPC9mb3JtPlxcbiAgICA8L2JvZHk+XFxuICAgIDwvaHRtbD5cXG4gICAgJztcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuaW5pdElmcmFtZVNyYyA9IGZ1bmN0aW9uIGluaXRJZnJhbWVTcmMoKSB7XG4gICAgaWYgKHRoaXMuZG9tYWluKSB7XG4gICAgICB0aGlzLmdldElmcmFtZU5vZGUoKS5zcmMgPSAnamF2YXNjcmlwdDp2b2lkKChmdW5jdGlvbigpe1xcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudDtcXG4gICAgICAgIGQub3BlbigpO1xcbiAgICAgICAgZC5kb21haW49XFwnJyArIHRoaXMuZG9tYWluICsgJ1xcJztcXG4gICAgICAgIGQud3JpdGUoXFwnXFwnKTtcXG4gICAgICAgIGQuY2xvc2UoKTtcXG4gICAgICB9KSgpKSc7XG4gICAgfVxuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5pbml0SWZyYW1lID0gZnVuY3Rpb24gaW5pdElmcmFtZSgpIHtcbiAgICB2YXIgaWZyYW1lTm9kZSA9IHRoaXMuZ2V0SWZyYW1lTm9kZSgpO1xuICAgIHZhciB3aW4gPSBpZnJhbWVOb2RlLmNvbnRlbnRXaW5kb3c7XG4gICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICB0aGlzLmRvbWFpbiA9IHRoaXMuZG9tYWluIHx8ICcnO1xuICAgIHRoaXMuaW5pdElmcmFtZVNyYygpO1xuICAgIHRyeSB7XG4gICAgICBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5kb21haW4gPSBkb2N1bWVudC5kb21haW47XG4gICAgICB0aGlzLmluaXRJZnJhbWVTcmMoKTtcbiAgICAgIHdpbiA9IGlmcmFtZU5vZGUuY29udGVudFdpbmRvdztcbiAgICAgIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB9XG4gICAgZG9jLm9wZW4oJ3RleHQvaHRtbCcsICdyZXBsYWNlJyk7XG4gICAgZG9jLndyaXRlKHRoaXMuZ2V0SWZyYW1lSFRNTCh0aGlzLmRvbWFpbikpO1xuICAgIGRvYy5jbG9zZSgpO1xuICAgIHRoaXMuZ2V0Rm9ybUlucHV0Tm9kZSgpLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZTtcbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUuZW5kVXBsb2FkID0gZnVuY3Rpb24gZW5kVXBsb2FkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnVwbG9hZGluZykge1xuICAgICAgdGhpcy5maWxlID0ge307XG4gICAgICAvLyBoYWNrIGF2b2lkIGJhdGNoXG4gICAgICB0aGlzLnN0YXRlLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVwbG9hZGluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbml0SWZyYW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5zdGFydFVwbG9hZCA9IGZ1bmN0aW9uIHN0YXJ0VXBsb2FkKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS51cGxvYWRpbmcpIHtcbiAgICAgIHRoaXMuc3RhdGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1cGxvYWRpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBJZnJhbWVVcGxvYWRlci5wcm90b3R5cGUudXBkYXRlSWZyYW1lV0ggPSBmdW5jdGlvbiB1cGRhdGVJZnJhbWVXSCgpIHtcbiAgICB2YXIgcm9vdE5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgaWZyYW1lTm9kZSA9IHRoaXMuZ2V0SWZyYW1lTm9kZSgpO1xuICAgIGlmcmFtZU5vZGUuc3R5bGUuaGVpZ2h0ID0gcm9vdE5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICBpZnJhbWVOb2RlLnN0eWxlLndpZHRoID0gcm9vdE5vZGUub2Zmc2V0V2lkdGggKyAncHgnO1xuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdmFyIHVpZCA9IGZpbGU7XG4gICAgICBpZiAoZmlsZSAmJiBmaWxlLnVpZCkge1xuICAgICAgICB1aWQgPSBmaWxlLnVpZDtcbiAgICAgIH1cbiAgICAgIGlmICh1aWQgPT09IHRoaXMuZmlsZS51aWQpIHtcbiAgICAgICAgdGhpcy5lbmRVcGxvYWQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRVcGxvYWQoKTtcbiAgICB9XG4gIH07XG5cbiAgSWZyYW1lVXBsb2FkZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiBwb3N0KGZpbGUpIHtcbiAgICB2YXIgZm9ybU5vZGUgPSB0aGlzLmdldEZvcm1Ob2RlKCk7XG4gICAgdmFyIGRhdGFTcGFuID0gdGhpcy5nZXRGb3JtRGF0YU5vZGUoKTtcbiAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICB2YXIgb25TdGFydCA9IHRoaXMucHJvcHMub25TdGFydDtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSA9IGRhdGEoZmlsZSk7XG4gICAgfVxuICAgIHZhciBpbnB1dHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpbnB1dHMucHVzaCgnPGlucHV0IG5hbWU9XCInICsga2V5ICsgJ1wiIHZhbHVlPVwiJyArIGRhdGFba2V5XSArICdcIi8+Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGFTcGFuLmlubmVySFRNTCA9IGlucHV0cy5qb2luKCcnKTtcbiAgICBmb3JtTm9kZS5zdWJtaXQoKTtcbiAgICBkYXRhU3Bhbi5pbm5lckhUTUwgPSAnJztcbiAgICBvblN0YXJ0KGZpbGUpO1xuICB9O1xuXG4gIElmcmFtZVVwbG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIFRhZyA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICB2YXIgaWZyYW1lU3R5bGUgPSAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIElGUkFNRV9TVFlMRSwge1xuICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS51cGxvYWRpbmcgfHwgZGlzYWJsZWQgPyAnbm9uZScgOiAnJ1xuICAgIH0pO1xuICAgIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIHByZWZpeENscywgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkzW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkzW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIFRhZyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIHN0eWxlOiAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAwIH0sIHN0eWxlKVxuICAgICAgfSxcbiAgICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtcbiAgICAgICAgcmVmOiAnaWZyYW1lJyxcbiAgICAgICAgb25Mb2FkOiB0aGlzLm9uTG9hZCxcbiAgICAgICAgc3R5bGU6IGlmcmFtZVN0eWxlXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gSWZyYW1lVXBsb2FkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5JZnJhbWVVcGxvYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgcHJlZml4Q2xzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGFjY2VwdDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb25TdGFydDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG11bHRpcGxlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5hbnksXG4gIGRhdGE6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vYmplY3QsIF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIGFjdGlvbjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbmFtZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSWZyYW1lVXBsb2FkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMy41QHJjLXVwbG9hZC9saWIvSWZyYW1lVXBsb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9BamF4VXBsb2FkZXIgPSByZXF1aXJlKCcuL0FqYXhVcGxvYWRlcicpO1xuXG52YXIgX0FqYXhVcGxvYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BamF4VXBsb2FkZXIpO1xuXG52YXIgX0lmcmFtZVVwbG9hZGVyID0gcmVxdWlyZSgnLi9JZnJhbWVVcGxvYWRlcicpO1xuXG52YXIgX0lmcmFtZVVwbG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lmcmFtZVVwbG9hZGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxudmFyIFVwbG9hZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzW1wiZGVmYXVsdFwiXSkoVXBsb2FkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVcGxvYWQoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szW1wiZGVmYXVsdFwiXSkodGhpcywgVXBsb2FkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1tcImRlZmF1bHRcIl0pKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBDb21wb25lbnQ6IG51bGxcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbXCJkZWZhdWx0XCJdKShfdGhpcywgX3JldCk7XG4gIH1cblxuICBVcGxvYWQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc3VwcG9ydFNlcnZlclJlbmRlcikge1xuICAgICAgLyogZXNsaW50IHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGU6MCAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIENvbXBvbmVudDogdGhpcy5nZXRDb21wb25lbnQoKVxuICAgICAgfSwgdGhpcy5wcm9wcy5vblJlYWR5KTtcbiAgICB9XG4gIH07XG5cbiAgVXBsb2FkLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBfQWpheFVwbG9hZGVyMltcImRlZmF1bHRcIl0gOiBfSWZyYW1lVXBsb2FkZXIyW1wiZGVmYXVsdFwiXTtcbiAgfTtcblxuICBVcGxvYWQucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gYWJvcnQoZmlsZSkge1xuICAgIHRoaXMucmVmcy5pbm5lci5hYm9ydChmaWxlKTtcbiAgfTtcblxuICBVcGxvYWQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdXBwb3J0U2VydmVyUmVuZGVyKSB7XG4gICAgICB2YXIgX0NvbXBvbmVudFVwbG9hZGVyID0gdGhpcy5zdGF0ZS5Db21wb25lbnQ7XG4gICAgICBpZiAoX0NvbXBvbmVudFVwbG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Db21wb25lbnRVcGxvYWRlciwgKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCB0aGlzLnByb3BzLCB7IHJlZjogJ2lubmVyJyB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIENvbXBvbmVudFVwbG9hZGVyID0gdGhpcy5nZXRDb21wb25lbnQoKTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb21wb25lbnRVcGxvYWRlciwgKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCB0aGlzLnByb3BzLCB7IHJlZjogJ2lubmVyJyB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFVwbG9hZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblVwbG9hZC5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHByZWZpeENsczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYWN0aW9uOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBuYW1lOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtdWx0aXBhcnQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICBvbkVycm9yOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25TdWNjZXNzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Qcm9ncmVzczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uU3RhcnQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBkYXRhOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LCBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuY10pLFxuICBoZWFkZXJzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBhY2NlcHQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG11bHRpcGxlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICBiZWZvcmVVcGxvYWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjdXN0b21SZXF1ZXN0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25SZWFkeTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHdpdGhDcmVkZW50aWFsczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sXG59O1xuVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIHByZWZpeENsczogJ3JjLXVwbG9hZCcsXG4gIGRhdGE6IHt9LFxuICBoZWFkZXJzOiB7fSxcbiAgbmFtZTogJ2ZpbGUnLFxuICBtdWx0aXBhcnQ6IGZhbHNlLFxuICBvblJlYWR5OiBlbXB0eSxcbiAgb25TdGFydDogZW1wdHksXG4gIG9uRXJyb3I6IGVtcHR5LFxuICBvblN1Y2Nlc3M6IGVtcHR5LFxuICBzdXBwb3J0U2VydmVyUmVuZGVyOiBmYWxzZSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBiZWZvcmVVcGxvYWQ6IG51bGwsXG4gIGN1c3RvbVJlcXVlc3Q6IG51bGwsXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2Vcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFVwbG9hZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4zLjVAcmMtdXBsb2FkL2xpYi9VcGxvYWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9VcGxvYWQgPSByZXF1aXJlKCcuL1VwbG9hZCcpO1xuXG52YXIgX1VwbG9hZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VcGxvYWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfVXBsb2FkMltcImRlZmF1bHRcIl07IC8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjMuNUByYy11cGxvYWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHVwbG9hZDtcbmZ1bmN0aW9uIGdldEVycm9yKG9wdGlvbiwgeGhyKSB7XG4gIHZhciBtc2cgPSAnY2Fubm90IHBvc3QgJyArIG9wdGlvbi5hY3Rpb24gKyAnICcgKyB4aHIuc3RhdHVzICsgJ1xcJyc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSAncG9zdCc7XG4gIGVyci51cmwgPSBvcHRpb24uYWN0aW9uO1xuICByZXR1cm4gZXJyO1xufVxuXG5mdW5jdGlvbiBnZXRCb2R5KHhocikge1xuICB2YXIgdGV4dCA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlO1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG4vLyBvcHRpb24ge1xuLy8gIG9uUHJvZ3Jlc3M6IChldmVudDogeyBwZXJjZW50OiBudW1iZXIgfSk6IHZvaWQsXG4vLyAgb25FcnJvcjogKGV2ZW50OiBFcnJvciwgYm9keT86IE9iamVjdCk6IHZvaWQsXG4vLyAgb25TdWNjZXNzOiAoYm9keTogT2JqZWN0KTogdm9pZCxcbi8vICBkYXRhOiBPYmplY3QsXG4vLyAgZmlsZW5hbWU6IFN0cmluZyxcbi8vICBmaWxlOiBGaWxlLFxuLy8gIHdpdGhDcmVkZW50aWFsczogQm9vbGVhbixcbi8vICBhY3Rpb246IFN0cmluZyxcbi8vICBoZWFkZXJzOiBPYmplY3QsXG4vLyB9XG5mdW5jdGlvbiB1cGxvYWQob3B0aW9uKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAob3B0aW9uLm9uUHJvZ3Jlc3MgJiYgeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKGUpIHtcbiAgICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICB9XG4gICAgICBvcHRpb24ub25Qcm9ncmVzcyhlKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9uLmRhdGEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBvcHRpb24uZGF0YVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1EYXRhLmFwcGVuZChvcHRpb24uZmlsZW5hbWUsIG9wdGlvbi5maWxlKTtcblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIGVycm9yKGUpIHtcbiAgICBvcHRpb24ub25FcnJvcihlKTtcbiAgfTtcblxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgIC8vIGFsbG93IHN1Y2Nlc3Mgd2hlbiAyeHggc3RhdHVzXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXBsb2FkL2lzc3Vlcy8zNFxuICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLm9uRXJyb3IoZ2V0RXJyb3Iob3B0aW9uLCB4aHIpLCBnZXRCb2R5KHhocikpO1xuICAgIH1cblxuICAgIG9wdGlvbi5vblN1Y2Nlc3MoZ2V0Qm9keSh4aHIpKTtcbiAgfTtcblxuICB4aHIub3BlbigncG9zdCcsIG9wdGlvbi5hY3Rpb24sIHRydWUpO1xuXG4gIC8vIEhhcyB0byBiZSBhZnRlciBgLm9wZW4oKWAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZW55by9kcm9wem9uZS9pc3N1ZXMvMTc5XG4gIGlmIChvcHRpb24ud2l0aENyZWRlbnRpYWxzICYmICd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG5cbiAgdmFyIGhlYWRlcnMgPSBvcHRpb24uaGVhZGVycyB8fCB7fTtcblxuICAvLyB3aGVuIHNldCBoZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBudWxsICwgY2FuIGNsb3NlIGRlZmF1bHQgWEhSIGhlYWRlclxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91cGxvYWQvaXNzdWVzLzMzXG4gIGlmIChoZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gIT09IG51bGwpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICB9XG5cbiAgZm9yICh2YXIgaCBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaCkgJiYgaGVhZGVyc1toXSAhPT0gbnVsbCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgaGVhZGVyc1toXSk7XG4gICAgfVxuICB9XG4gIHhoci5zZW5kKGZvcm1EYXRhKTtcblxuICByZXR1cm4ge1xuICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4zLjVAcmMtdXBsb2FkL2xpYi9yZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiAqIFVwbG9hZExpc3QgQ29tcG9uZW50XG4gKiBAYXV0aG9yIGhlaWZhZGVcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24vSWNvbic7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL3Byb2dyZXNzL1Byb2dyZXNzJztcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuLy8gaW1wb3J0IHsgVXBsb2FkTGlzdFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VwbG9hZC5jc3MnO1xuXG5jb25zdCBwcmV2aWV3RmlsZSA9IChmaWxlLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xufTtcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdVcGxvYWRMaXN0J1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGlzdFR5cGU6ICd0ZXh0JywgIC8vIG9yIHBpY3R1cmUtY2FyZFxuICAgIGl0ZW1zOiBbXSxcbiAgICBvblJlbW92ZTogbnVsbCxcbiAgICBvblByZXZpZXc6IG51bGwsXG4gICAgcHJlZml4Q2xzOiAndXBsb2FkJyxcbiAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcbiAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHByb2dyZXNzQXR0cjoge1xuICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICBzaG93SW5mbzogZmFsc2UsXG4gICAgfSxcbiAgICBsb2NhbGU6IHsgfSxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsaXN0VHlwZTogUHJvcFR5cGVzLm9uZU9mKCd0ZXh0JywgJ3BpY3R1cmUtY2FyZCcpLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QcmV2aWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd1ByZXZpZXdJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93UmVtb3ZlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHByb2dyZXNzQXR0cjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5saXN0VHlwZSAhPT0gJ3BpY3R1cmUnICYmIHRoaXMucHJvcHMubGlzdFR5cGUgIT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzLnByb3BzLml0ZW1zIHx8IFtdKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhd2luZG93LkZpbGVSZWFkZXIgfHwgIXdpbmRvdy5GaWxlIHx8XG4gICAgICAgICEoZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSkgfHxcbiAgICAgICAgZmlsZS50aHVtYlVybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qZXNsaW50LWRpc2FibGUgKi9cbiAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcbiAgICAgIC8qZXNsaW50LWVuYWJsZSAqL1xuICAgICAgcHJldmlld0ZpbGUoZmlsZS5vcmlnaW5GaWxlT2JqLCAocHJldmlld0RhdGFVcmwpID0+IHtcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBmaWxlLnRodW1iVXJsID0gcHJldmlld0RhdGFVcmw7XG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOWIoOmZpFxuICBoYW5kbGVDbG9zZSA9IChmaWxlKSA9PiB7XG4gICAgY29uc3Qgb25SZW1vdmUgPSB0aGlzLnByb3BzLm9uUmVtb3ZlO1xuICAgIGlmIChvblJlbW92ZSkge1xuICAgICAgb25SZW1vdmUoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlLCBlKSA9PiB7XG4gICAgY29uc3QgeyBvblByZXZpZXcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvblByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uUHJldmlldyhmaWxlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZWZpeENscyxcbiAgICAgIGl0ZW1zID0gW10sXG4gICAgICBsaXN0VHlwZSxcbiAgICAgIHNob3dQcmV2aWV3SWNvbixcbiAgICAgIHNob3dSZW1vdmVJY29uLFxuICAgICAgbG9jYWxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGlzdCA9IGl0ZW1zLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgbGV0IHByb2dyZXNzO1xuICAgICAgbGV0IGljb24gPSA8SWNvbiBzaXplPXsxMn0gc3R5bGVOYW1lPXsnc3RhdHVzJ30gbmFtZT17ZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnID8gJ2F0dGFjaG1lbnQnIDogJ2F0dGFjaG1lbnQnfSAvPjtcblxuICAgICAgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZScgfHwgbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgfHwgKCFmaWxlLnRodW1iVXJsICYmICFmaWxlLnVybCkpIHtcbiAgICAgICAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICAgICAgICBpY29uID0gPGRpdiBzdHlsZU5hbWU9eyd1cGxvYWRpbmctdGV4dCd9Pntsb2NhbGUudXBsb2FkaW5nfTwvZGl2PjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbiA9IDxJY29uIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1saXN0LWl0ZW0tdGh1bWJuYWlsYH0gdHlwZT1cInBpY3R1cmVcIiAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvbiA9IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHN0eWxlTmFtZT17YCR7cHJlZml4Q2xzfS1saXN0LWl0ZW0tdGh1bWJuYWlsYH1cbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVByZXZpZXcoZmlsZSwgZSl9XG4gICAgICAgICAgICAgIGhyZWY9e2ZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmx9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybH0gYWx0PXtmaWxlLm5hbWV9IHN0eWxlTmFtZT1cImltZ3Nob3dcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgICAvLyBzaG93IGxvYWRpbmcgaWNvbiBpZiB1cGxvYWQgcHJvZ3Jlc3MgbGlzdGVuZXIgaXMgZGlzYWJsZWRcbiAgICAgICAgY29uc3QgbG9hZGluZ1Byb2dyZXNzID0gKCdwZXJjZW50JyBpbiBmaWxlKSA/IChcbiAgICAgICAgICA8UHJvZ3Jlc3MgdHlwZT1cImxpbmVcIiB7Li4udGhpcy5wcm9wcy5wcm9ncmVzc0F0dHJ9IHBlcmNlbnQ9e2ZpbGUucGVyY2VudH0gLz5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcHJvZ3Jlc3MgPSAoXG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9e2Ake3ByZWZpeENsc30tbGlzdC1pdGVtLXByb2dyZXNzYH0ga2V5PVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIHtsb2FkaW5nUHJvZ3Jlc3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBjb25zdCBtZXNzYWdlID0gZmlsZS5yZXNwb25zZSB8fCAoZmlsZS5lcnJvciAmJiBmaWxlLmVycm9yLnN0YXR1c1RleHQpIHx8IGxvY2FsZS51cGxvYWRFcnJvcjtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/IGZpbGUucmVzcG9uc2UgfHwgbG9jYWxlLnVwbG9hZEVycm9yIDogZmlsZS5yZXNwb25zZTtcblxuICAgICAgLy8gY29uc29sZS5sb2coZmlsZSk7XG5cbiAgICAgIGNvbnN0IHByZXZpZXcgPSBmaWxlLnVybCA/IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtmaWxlLnVybH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIHN0eWxlTmFtZT17YCR7cHJlZml4Q2xzfS1saXN0LWl0ZW0tbmFtZWB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVByZXZpZXcoZmlsZSwgZSl9XG4gICAgICAgICAgLy8gdGl0bGU9e2ZpbGUubmFtZX1cbiAgICAgICAgICB0aXRsZT17bWVzc2FnZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGVOYW1lPXtgJHtwcmVmaXhDbHN9LWxpc3QtaXRlbS1uYW1lYH1cbiAgICAgICAgICAvLyB0aXRsZT17ZmlsZS5uYW1lfVxuICAgICAgICAgIHRpdGxlPXttZXNzYWdlfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbGUubmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0eWxlID0gKGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwpID8gdW5kZWZpbmVkIDoge1xuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIH07XG4gICAgICBjb25zdCBwcmV2aWV3SWNvbiA9IHNob3dQcmV2aWV3SWNvbiA/IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVQcmV2aWV3KGZpbGUsIGUpfVxuICAgICAgICAgIHRpdGxlPXtsb2NhbGUucHJldmlld0ZpbGV9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwidmlzaWJsZVwiIHNpemU9ezIwfSBzdHlsZU5hbWU9eydleWUnfSAvPlxuICAgICAgICA8L2E+XG4gICAgICApIDogbnVsbDtcbiAgICAgIC8vIHBpY3R1cmUtY2FyZCDliKDpmaTmjInpkq5cbiAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBzaG93UmVtb3ZlSWNvbiAmJiAhZGlzYWJsZWQgPyAoXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj0namF2YXNjcmlwdDp2b2lkKDApJ1xuICAgICAgICAgIHRpdGxlPXtsb2NhbGUucmVtb3ZlRmlsZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKGZpbGUpfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gbmFtZT1cInJlY3ljbGVcIiBzaXplPXsyMH0gc3R5bGVOYW1lPXsncmVtb3ZlJ30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSA6IG51bGw7XG4gICAgICAvLyB0ZXh0IOWIoOmZpOaMiemSrlxuICAgICAgY29uc3QgcmVtb3ZlSWNvbkNyb3NzID0gc2hvd1JlbW92ZUljb24gJiYgIWRpc2FibGVkID8gKFxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9J2phdmFzY3JpcHQ6dm9pZCgwKSdcbiAgICAgICAgICB0aXRsZT17bG9jYWxlLnJlbW92ZUZpbGV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZShmaWxlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjbG9zZVwiIHNpemU9ezEwfSBzdHlsZU5hbWU9eydyZW1vdmUnfSAvPlxuICAgICAgICA8L2E+XG4gICAgICApIDogbnVsbDtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnICYmIGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJylcbiAgICAgICAgPyA8c3BhbiBzdHlsZU5hbWU9e2Ake3ByZWZpeENsc30tbGlzdC1pdGVtLWFjdGlvbnNgfT57cHJldmlld0ljb259e3JlbW92ZUljb259PC9zcGFuPlxuICAgICAgICA6IHJlbW92ZUljb25Dcm9zcztcblxuXG4gICAgICBjb25zdCBpY29uQW5kUHJldmlldyA9IChmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJylcbiAgICAgICAgPyA8c3Bhbj57aWNvbn17cHJldmlld308L3NwYW4+XG4gICAgICAgIDogPHNwYW4+e2ljb259e3ByZXZpZXd9PC9zcGFuPjtcblxuXG4gICAgICAvLyBjb25zdCBpbmZvVXBsb2FkaW5nQ2xhc3MgPSBjbGFzc05hbWVzKHtcbiAgICAgIC8vICAgW2Ake3ByZWZpeENsc30tbGlzdC1pdGVtYF06IHRydWUsXG4gICAgICAvLyAgIFtgJHtwcmVmaXhDbHN9LWxpc3QtaXRlbS0ke2ZpbGUuc3RhdHVzfWBdOiB0cnVlLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPXtgJHtwcmVmaXhDbHN9LWxpc3QtaXRlbSAke3ByZWZpeENsc30tbGlzdC1pdGVtLSR7ZmlsZS5zdGF0dXN9YH0ga2V5PXtmaWxlLnVpZH0+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9e2Ake3ByZWZpeENsc30tbGlzdC1pdGVtLWluZm9gfT5cbiAgICAgICAgICAgIHtpY29uQW5kUHJldmlld31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgICA8QW5pbWF0ZSB0cmFuc2l0aW9uTmFtZT1cImZhZGVcIiBjb21wb25lbnQ9XCJcIj5cbiAgICAgICAgICAgIHtwcm9ncmVzc31cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICAvLyBjb25zdCBsaXN0Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgIC8vICAgW2Ake3ByZWZpeENsc30tbGlzdGBdOiB0cnVlLFxuICAgIC8vICAgW2Ake3ByZWZpeENsc30tbGlzdC0ke2xpc3RUeXBlfWBdOiB0cnVlLFxuICAgIC8vIH0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbkRpcmVjdGlvbiA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyA/ICdhbmltYXRlLWlubGluZScgOiAnYW5pbWF0ZSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbmltYXRlXG4gICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXhDbHN9LSR7YW5pbWF0aW9uRGlyZWN0aW9ufWB9XG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHN0eWxlTmFtZT17YCR7cHJlZml4Q2xzfS1saXN0ICR7cHJlZml4Q2xzfS1saXN0LSR7bGlzdFR5cGV9YH1cbiAgICAgID5cbiAgICAgICAge2xpc3R9XG4gICAgICA8L0FuaW1hdGU+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdXBsb2FkL1VwbG9hZExpc3QuanMiLCIvLyBGaXggSUUgZmlsZS5zdGF0dXMgcHJvYmxlbVxuLy8gdmlhIGNvcGluZyBhIG5ldyBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmaWxlVG9PYmplY3QoZmlsZSkge1xuICByZXR1cm4ge1xuICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgIG5hbWU6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxuICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICByZXNwb25zZTogZmlsZS5yZXNwb25zZSxcbiAgICBlcnJvcjogZmlsZS5lcnJvcixcbiAgICBwZXJjZW50OiAwLFxuICAgIG9yaWdpbkZpbGVPYmo6IGZpbGUsXG4gICAgc3RhdHVzOiBudWxsLFxuICB9O1xufVxuXG4vKipcbiAqIOeUn+aIkFByb2dyZXNzIHBlcmNlbnQ6IDAuMSAtPiAwLjk4XG4gKiAgIC0gZm9yIGllXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5QZXJjZW50QWRkKCkge1xuICBsZXQgayA9IDAuMTtcbiAgY29uc3QgaSA9IDAuMDE7XG4gIGNvbnN0IGVuZCA9IDAuOTg7XG4gIHJldHVybiBmdW5jdGlvbiBmKHMpIHtcbiAgICBsZXQgc3RhcnQgPSBzO1xuICAgIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICAgIHJldHVybiBzdGFydDtcbiAgICB9XG5cbiAgICBzdGFydCArPSBrO1xuICAgIGsgLT0gaTtcbiAgICBpZiAoayA8IDAuMDAxKSB7XG4gICAgICBrID0gMC4wMDE7XG4gICAgfVxuICAgIHJldHVybiBzdGFydCAqIDEwMDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KSB7XG4gIGNvbnN0IG1hdGNoS2V5ID0gZmlsZS51aWQgPyAndWlkJyA6ICduYW1lJztcbiAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW1bbWF0Y2hLZXldID09PSBmaWxlW21hdGNoS2V5XSlbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCkge1xuICBjb25zdCBtYXRjaEtleSA9IGZpbGUudWlkID8gJ3VpZCcgOiAnbmFtZSc7XG4gIGNvbnN0IHJlbW92ZWQgPSBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtW21hdGNoS2V5XSAhPT0gZmlsZVttYXRjaEtleV0pO1xuICBpZiAocmVtb3ZlZC5sZW5ndGggPT09IGZpbGVMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByZW1vdmVkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3VwbG9hZC91dGlscy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDaEVBOzs7Ozs7QUNDQTs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7QUNDQTs7Ozs7O0FDQ0E7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0xBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBWEE7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTs7OztBQW5DQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBeUJBOzs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkxBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFPQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFnQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFOQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQWhJQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQUNBO0FBNkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BOzs7QUFvRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNEQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVFQTtBQTZFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBakZBO0FBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBakhBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBbElBO0FBZ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsSkE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBQ0E7QUFDQTs7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBcUNBO0FBQ0E7OztBQXVFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQWpCQTtBQUFBO0FBQ0E7QUFtQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBM1VBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFsQ0E7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFDQTtBQUNBO0FBa1NBOzs7Ozs7O0FDdldBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFrQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFGQTtBQUtBO0FBQ0E7QUFwQkE7QUFDQTtBQUNBOzs7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFTQTtBQVRBO0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBOzs7O0FBeE9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=upload.js.map