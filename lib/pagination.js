(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else if(typeof define === 'function' && define.amd)
		define([, "react-css-modules", , "object-assign", "classnames", "quark-ui/lib/icon"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("react-css-modules"), require("prop-types"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else
		root["QuarkUI"] = factory(root["React"], root["react-css-modules"], root["PropTypes"], root["object-assign"], root["classnames"], root["quark-ui/lib/icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_55__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 35:
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_1L_-sT1","pagination__ctrl":"_2tvnb-l","pagination__ctrl--prev":"_2t_sb3i","pagination__ctrl--next":"_1-Px8R_","pagination__pages":"cfbKU8w","pagination__item":"jsRFs8b","pagination__item--active":"_1ZyqWB7","pagination__total":"_2KQ0PhC","pagination__jumper":"wBezPz9","pagination__jumperField":"_280nkVW","pagination--small":"_2CnmpyB"};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/icon");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzEyYTUyMjI2ZjI1MGViZTdiOTY/ZDJlZSoqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqIiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzLmpzP2E3NzQqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIj8wNDA1KioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzPzMyMTIiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanM/YmU4YSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCI/NzE4ZioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5jc3M/NjJjYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/MGJiNCoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVhcmstdWkvbGliL2ljb25cIj85OTM4Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvaWNvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsICwgXCJvYmplY3QtYXNzaWduXCIsIFwiY2xhc3NuYW1lc1wiLCBcInF1YXJrLXVpL2xpYi9pY29uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcInJlYWN0LWNzcy1tb2R1bGVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wib2JqZWN0LWFzc2lnblwiXSwgcm9vdFtcImNsYXNzbmFtZXNcIl0sIHJvb3RbXCJxdWFyay11aS9saWIvaWNvblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzEyYTUyMjI2ZjI1MGViZTdiOTYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiZXhwb3J0IGNvbnN0IGFsbG93TXVsdGlwbGUgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgQUxJR05fRU5VTSA9IG5ldyBTZXQoW1xuICAndGwnLFxuICAndHInLFxuICAndGMnLFxuICAnYmwnLFxuICAnYnInLFxuICAnYmMnLFxuICAnY2wnLFxuICAnY3InLFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8qKlxuICogUGFnaW5hdGlvbiBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAncXVhcmstdWkvaWNvbic7XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywgeyBhbGxvd011bHRpcGxlIH0pXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BhZ2luYXRpb24nXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IDEsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZVNpemU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0UGFnZVNpemU6IDEwLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgc2hvd1NpemVDaGFuZ2VyOiBmYWxzZSxcbiAgICBvblNpemVDaGFuZ2UoKSB7fSxcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IFsxMCwgMjAsIDMwLCA0MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICBzaXplOiAnJyxcbiAgICBzaG93VG90YWw6IGZhbHNlLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdFBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93U2l6ZUNoYW5nZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2l6ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd1RvdGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmRlZmF1bHRDdXJyZW50LFxuICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplIHx8IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmN1cnJlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgY3VycmVudDogbmV4dFByb3BzLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMucGFnZVNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgcGFnZVNpemU6IG5leHRQcm9wcy5wYWdlU2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGdldEl0ZW1Qcm9wcyhpbmRleCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhY3RpdmUgPSBjdXJyZW50ID09PSBpbmRleDtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdwYWdpbmF0aW9uX19pdGVtJywge1xuICAgICAgICAncGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlJzogYWN0aXZlLFxuICAgICAgfSksXG4gICAgICBvbkNsaWNrOiBhY3RpdmUgPyBudWxsIDogKCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VJbmRleChpbmRleCksXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50ID4gMSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnQgLSAxKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tOZXh0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnQgPCBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbCAvIHRoaXMuc3RhdGUucGFnZVNpemUpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmN1cnJlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudDogaW5kZXgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdQYWdlU2l6ZSA9ICtlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBtYXhQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIG5ld1BhZ2VTaXplKTtcbiAgICBsZXQgbmV3Q3VycmVudDtcbiAgICBpZiAoY3VycmVudCA+IG1heFBhZ2VzKSB7XG4gICAgICBuZXdDdXJyZW50ID0gbWF4UGFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnQgPSBjdXJyZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMucGFnZVNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFnZVNpemU6IG5ld1BhZ2VTaXplLFxuICAgICAgICBjdXJyZW50OiBuZXdDdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25TaXplQ2hhbmdlKG5ld1BhZ2VTaXplLCBuZXdDdXJyZW50KTtcbiAgfVxuXG4gIGhhbmRsZUp1bXBlciA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICgvXlsxLTldK1swLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlIDw9IG1heFBhZ2UpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50LCBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGZpcnN0UGFnZSA9IDE7XG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG5cbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZDtcbiAgICBpZiAoY3VycmVudCA9PT0gZmlyc3RQYWdlKSB7XG4gICAgICBzdGFydCA9IGZpcnN0UGFnZSArIDE7XG4gICAgICBlbmQgPSBmaXJzdFBhZ2UgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gbGFzdFBhZ2UpIHtcbiAgICAgIHN0YXJ0ID0gbGFzdFBhZ2UgLSAxO1xuICAgICAgZW5kID0gbGFzdFBhZ2UgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IGN1cnJlbnQ7XG4gICAgICBlbmQgPSBjdXJyZW50O1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ID49IDNcbiAgICAgICAgfHwgKHN0YXJ0IDw9IGZpcnN0UGFnZSArIDEgJiYgZW5kID49IGxhc3RQYWdlIC0gMSlcbiAgICAgICkgYnJlYWs7XG4gICAgICBpZiAoc3RhcnQgPiBmaXJzdFBhZ2UgKyAxKSBzdGFydCAtPSAxO1xuICAgICAgaWYgKGVuZCA8IGxhc3RQYWdlIC0gMSkgZW5kICs9IDE7XG4gICAgfVxuICAgIFxuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8bGkga2V5PXtmaXJzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhmaXJzdFBhZ2UpfT57Zmlyc3RQYWdlfTwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICApO1xuICAgIGlmIChzdGFydCAhPT0gZmlyc3RQYWdlICsgMSAmJiBzdGFydCAhPT0gZmlyc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydmcm9udCd9Pi4uLjwvbGk+KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBidG5Qcm9wcyA9IHRoaXMuZ2V0SXRlbVByb3BzKGkpO1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgPGJ1dHRvbiB7Li4uYnRuUHJvcHN9PntpfTwvYnV0dG9uPlxuICAgICAgICA8L2xpPixcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChlbmQgIT09IGxhc3RQYWdlIC0gMSAmJiBlbmQgIT09IGxhc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydiYWNrJ30+Li4uPC9saT4pO1xuICAgIH1cbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGxpIGtleT17bGFzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhsYXN0UGFnZSl9PntsYXN0UGFnZX08L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgICByZXR1cm4gPHVsIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3BhZ2VzXCI+e2l0ZW1zfTwvdWw+O1xuICB9XG5cbiAgcmVuZGVyQ29udHJvbChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBjdHJsUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb25fX2N0cmwnLCBgcGFnaW5hdGlvbl9fY3RybC0tJHtkaXJlY3Rpb259YCksXG4gICAgICBvbkNsaWNrOiBkaXJlY3Rpb24gPT09ICdwcmV2JyA/IHRoaXMuaGFuZGxlQ2xpY2tQcmV2IDogdGhpcy5oYW5kbGVDbGlja05leHQsXG4gICAgfTtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGNvbnRlbnQgPSA8SWNvbiBuYW1lPVwiYXJyb3ctbGVmdFwiIHNpemU9ezEyfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIHNpemU9ezEyfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxidXR0b24gey4uLmN0cmxQcm9wc30+e2NvbnRlbnR9PC9idXR0b24+O1xuICB9XG5cbiAgcmVuZGVyU2l6ZUNoYW5nZXIoKSB7XG4gICAgY29uc3QgeyBzaG93U2l6ZUNoYW5nZXIsIHBhZ2VTaXplT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzaG93U2l6ZUNoYW5nZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3BhZ2VTaXplfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplfT5cbiAgICAgICAgICB7cGFnZVNpemVPcHRpb25zLm1hcChzaXplID0+IDxvcHRpb24ga2V5PXtzaXplfSB2YWx1ZT17c2l6ZX0+e2Ake3NpemV9IC8gcGFnZWB9PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclF1aWNrSnVtcGVyKCkge1xuICAgIGNvbnN0IHsgc2hvd1F1aWNrSnVtcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRleHRGaWVsZFByb3BzID0ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgc3R5bGVOYW1lOiAncGFnaW5hdGlvbl9fanVtcGVyRmllbGQnLFxuICAgICAgb25LZXlQcmVzczogdGhpcy5oYW5kbGVKdW1wZXIsXG4gICAgfTtcbiAgICBpZiAoc2hvd1F1aWNrSnVtcGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX19qdW1wZXJcIj5cbiAgICAgICAgICDot7Poh7MgPGlucHV0IHsuLi50ZXh0RmllbGRQcm9wc30gLz4g6aG1XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7ICBcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXJUb3RhbCgpIHtcbiAgICBjb25zdCB7IHNob3dUb3RhbCwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNob3dUb3RhbCkge1xuICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3RvdGFsXCI+e2DlhbHorqEgJHt0b3RhbH0g5p2hYH08L3NwYW4+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmluZm8oJ3JlbmRlcicpO1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB3cmFwUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb24nLCB7XG4gICAgICAgICdwYWdpbmF0aW9uLS1zbWFsbCc6IHNpemUgPT09ICdzbWFsbCcsXG4gICAgICB9KSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi53cmFwUHJvcHN9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVG90YWwoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCdwcmV2JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVySXRlbXMoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCduZXh0JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVyU2l6ZUNoYW5nZXIoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJRdWlja0p1bXBlcigpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdpbmF0aW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdpbmF0aW9uXCI6XCJfMUxfLXNUMVwiLFwicGFnaW5hdGlvbl9fY3RybFwiOlwiXzJ0dm5iLWxcIixcInBhZ2luYXRpb25fX2N0cmwtLXByZXZcIjpcIl8ydF9zYjNpXCIsXCJwYWdpbmF0aW9uX19jdHJsLS1uZXh0XCI6XCJfMS1QeDhSX1wiLFwicGFnaW5hdGlvbl9fcGFnZXNcIjpcImNmYktVOHdcIixcInBhZ2luYXRpb25fX2l0ZW1cIjpcImpzUkZzOGJcIixcInBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZVwiOlwiXzFaeXFXQjdcIixcInBhZ2luYXRpb25fX3RvdGFsXCI6XCJfMktRMFBoQ1wiLFwicGFnaW5hdGlvbl9fanVtcGVyXCI6XCJ3QmV6UHo5XCIsXCJwYWdpbmF0aW9uX19qdW1wZXJGaWVsZFwiOlwiXzI4MG5rVldcIixcInBhZ2luYXRpb24tLXNtYWxsXCI6XCJfMkNubXB5QlwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUgOCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi9pY29uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicXVhcmstdWkvbGliL2ljb25cIlxuLy8gbW9kdWxlIGlk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
//# sourceMappingURL=pagination.js.map