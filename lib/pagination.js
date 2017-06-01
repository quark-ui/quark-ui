(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "object-assign", "classnames", "quark-ui/lib/icon"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["object-assign"], root["classnames"], root["quark-ui/lib/icon"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
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

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_1L_-sT1","pagination__ctrl":"_2tvnb-l","pagination__pages":"cfbKU8w","pagination__total":"_2KQ0PhC","pagination__jumperField":"_280nkVW","pagination--normal":"_3HZDVl5","pagination__item":"jsRFs8b","pagination__item--active":"_1ZyqWB7","pagination__sizeChanger":"_3O0s4JU","pagination__jumper":"wBezPz9","pagination--small":"_2CnmpyB"};

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALIGN_ENUM; });
var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/icon");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_object_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_icon__ = __webpack_require__(21);
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
          React.createElement(__WEBPACK_IMPORTED_MODULE_7_quark_ui_icon___default.a, { name: 'ellipsis', size: 12 })
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
          React.createElement(__WEBPACK_IMPORTED_MODULE_7_quark_ui_icon___default.a, { name: 'ellipsis', size: 12 })
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
        styleName: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('pagination__ctrl'),
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
          {
            styleName: 'pagination__sizeChanger',
            value: pageSize,
            onChange: this.handleChangeIndexPageSize
          },
          pageSizeOptions.map(function (size) {
            return React.createElement(
              'option',
              { key: size, value: size },
              size + ' / \u9875'
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

      var smallSize = size === 'small';
      var wrapProps = {
        styleName: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('pagination', {
          'pagination--small': smallSize,
          'pagination--normal': !smallSize
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTQzYjUzNGE4ZTlhYjg1YjUwZWQ/NjcwMSoqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uY3NzPzk5ZDIiLCJ3ZWJwYWNrOi8vL3NyYy9jb25zdGFudHMuanM/YTc3NCoqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiPzk5MzgqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCI/MDQwNSoqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCI/NzE4ZioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiPzBiYjQqKioqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uanM/MzIxMiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5qcz9iZThhIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvaWNvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbLCAsIFwicmVhY3QtY3NzLW1vZHVsZXNcIiwgXCJvYmplY3QtYXNzaWduXCIsIFwiY2xhc3NuYW1lc1wiLCBcInF1YXJrLXVpL2xpYi9pY29uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlF1YXJrVUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSwgcm9vdFtcInJlYWN0LWNzcy1tb2R1bGVzXCJdLCByb290W1wib2JqZWN0LWFzc2lnblwiXSwgcm9vdFtcImNsYXNzbmFtZXNcIl0sIHJvb3RbXCJxdWFyay11aS9saWIvaWNvblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTQzYjUzNGE4ZTlhYjg1YjUwZWQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnaW5hdGlvblwiOlwiXzFMXy1zVDFcIixcInBhZ2luYXRpb25fX2N0cmxcIjpcIl8ydHZuYi1sXCIsXCJwYWdpbmF0aW9uX19wYWdlc1wiOlwiY2ZiS1U4d1wiLFwicGFnaW5hdGlvbl9fdG90YWxcIjpcIl8yS1EwUGhDXCIsXCJwYWdpbmF0aW9uX19qdW1wZXJGaWVsZFwiOlwiXzI4MG5rVldcIixcInBhZ2luYXRpb24tLW5vcm1hbFwiOlwiXzNIWkRWbDVcIixcInBhZ2luYXRpb25fX2l0ZW1cIjpcImpzUkZzOGJcIixcInBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZVwiOlwiXzFaeXFXQjdcIixcInBhZ2luYXRpb25fX3NpemVDaGFuZ2VyXCI6XCJfM08wczRKVVwiLFwicGFnaW5hdGlvbl9fanVtcGVyXCI6XCJ3QmV6UHo5XCIsXCJwYWdpbmF0aW9uLS1zbWFsbFwiOlwiXzJDbm1weUJcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEwIiwiZXhwb3J0IGNvbnN0IGFsbG93TXVsdGlwbGUgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgQUxJR05fRU5VTSA9IG5ldyBTZXQoW1xuICAndGwnLFxuICAndHInLFxuICAndGMnLFxuICAnYmwnLFxuICAnYnInLFxuICAnYmMnLFxuICAnY2wnLFxuICAnY3InLFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1YXJrLXVpL2xpYi9pY29uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicXVhcmstdWkvbGliL2ljb25cIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA2IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCAxMCAxMiIsIi8qKlxuICogUGFnaW5hdGlvbiBDb21wb25lbnRcbiAqIEBhdXRob3Igcnlhbi5iaWFuXG4gKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgYWxsb3dNdWx0aXBsZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbi5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAncXVhcmstdWkvaWNvbic7XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywgeyBhbGxvd011bHRpcGxlIH0pXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1BhZ2luYXRpb24nXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50OiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IDEsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZVNpemU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0UGFnZVNpemU6IDEwLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgc2hvd1NpemVDaGFuZ2VyOiBmYWxzZSxcbiAgICBvblNpemVDaGFuZ2UoKSB7fSxcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IFsxMCwgMjAsIDMwLCA0MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICBzaXplOiAnJyxcbiAgICBzaG93VG90YWw6IGZhbHNlLFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90eXBlY2hlY2tpbmctd2l0aC1wcm9wdHlwZXMuaHRtbFxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdFBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93U2l6ZUNoYW5nZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2l6ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd1RvdGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmRlZmF1bHRDdXJyZW50LFxuICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplIHx8IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmN1cnJlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgY3VycmVudDogbmV4dFByb3BzLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMucGFnZVNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgcGFnZVNpemU6IG5leHRQcm9wcy5wYWdlU2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGdldEl0ZW1Qcm9wcyhpbmRleCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhY3RpdmUgPSBjdXJyZW50ID09PSBpbmRleDtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdwYWdpbmF0aW9uX19pdGVtJywge1xuICAgICAgICAncGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlJzogYWN0aXZlLFxuICAgICAgfSksXG4gICAgICBvbkNsaWNrOiBhY3RpdmUgPyBudWxsIDogKCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VJbmRleChpbmRleCksXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50ID4gMSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnQgLSAxKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tOZXh0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnQgPCBNYXRoLmNlaWwodGhpcy5wcm9wcy50b3RhbCAvIHRoaXMuc3RhdGUucGFnZVNpemUpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmN1cnJlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudDogaW5kZXgsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdQYWdlU2l6ZSA9ICtlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBtYXhQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIG5ld1BhZ2VTaXplKTtcbiAgICBsZXQgbmV3Q3VycmVudDtcbiAgICBpZiAoY3VycmVudCA+IG1heFBhZ2VzKSB7XG4gICAgICBuZXdDdXJyZW50ID0gbWF4UGFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnQgPSBjdXJyZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMucGFnZVNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFnZVNpemU6IG5ld1BhZ2VTaXplLFxuICAgICAgICBjdXJyZW50OiBuZXdDdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25TaXplQ2hhbmdlKG5ld1BhZ2VTaXplLCBuZXdDdXJyZW50KTtcbiAgfVxuXG4gIGhhbmRsZUp1bXBlciA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICgvXlsxLTldK1swLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlIDw9IG1heFBhZ2UpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50LCBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGZpcnN0UGFnZSA9IDE7XG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG5cbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZDtcbiAgICBpZiAoY3VycmVudCA9PT0gZmlyc3RQYWdlKSB7XG4gICAgICBzdGFydCA9IGZpcnN0UGFnZSArIDE7XG4gICAgICBlbmQgPSBmaXJzdFBhZ2UgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gbGFzdFBhZ2UpIHtcbiAgICAgIHN0YXJ0ID0gbGFzdFBhZ2UgLSAxO1xuICAgICAgZW5kID0gbGFzdFBhZ2UgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IGN1cnJlbnQ7XG4gICAgICBlbmQgPSBjdXJyZW50O1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ID49IDNcbiAgICAgICAgfHwgKHN0YXJ0IDw9IGZpcnN0UGFnZSArIDEgJiYgZW5kID49IGxhc3RQYWdlIC0gMSlcbiAgICAgICkgYnJlYWs7XG4gICAgICBpZiAoc3RhcnQgPiBmaXJzdFBhZ2UgKyAxKSBzdGFydCAtPSAxO1xuICAgICAgaWYgKGVuZCA8IGxhc3RQYWdlIC0gMSkgZW5kICs9IDE7XG4gICAgfVxuXG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxsaSBrZXk9e2ZpcnN0UGFnZX0+XG4gICAgICAgIDxidXR0b24gey4uLnRoaXMuZ2V0SXRlbVByb3BzKGZpcnN0UGFnZSl9PntmaXJzdFBhZ2V9PC9idXR0b24+XG4gICAgICA8L2xpPixcbiAgICApO1xuICAgIGlmIChzdGFydCAhPT0gZmlyc3RQYWdlICsgMSAmJiBzdGFydCAhPT0gZmlyc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydmcm9udCd9PjxJY29uIG5hbWU9XCJlbGxpcHNpc1wiIHNpemU9ezEyfSAvPjwvbGk+KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBidG5Qcm9wcyA9IHRoaXMuZ2V0SXRlbVByb3BzKGkpO1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgPGJ1dHRvbiB7Li4uYnRuUHJvcHN9PntpfTwvYnV0dG9uPlxuICAgICAgICA8L2xpPixcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChlbmQgIT09IGxhc3RQYWdlIC0gMSAmJiBlbmQgIT09IGxhc3RQYWdlKSB7XG4gICAgICBpdGVtcy5wdXNoKDxsaSBrZXk9eydiYWNrJ30+PEljb24gbmFtZT1cImVsbGlwc2lzXCIgc2l6ZT17MTJ9IC8+PC9saT4pO1xuICAgIH1cbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGxpIGtleT17bGFzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhsYXN0UGFnZSl9PntsYXN0UGFnZX08L2J1dHRvbj5cbiAgICAgIDwvbGk+LFxuICAgICk7XG4gICAgcmV0dXJuIDx1bCBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX19wYWdlc1wiPntpdGVtc308L3VsPjtcbiAgfVxuXG4gIHJlbmRlckNvbnRyb2woZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgY3RybFByb3BzID0ge1xuICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdwYWdpbmF0aW9uX19jdHJsJyksXG4gICAgICBvbkNsaWNrOiBkaXJlY3Rpb24gPT09ICdwcmV2JyA/IHRoaXMuaGFuZGxlQ2xpY2tQcmV2IDogdGhpcy5oYW5kbGVDbGlja05leHQsXG4gICAgfTtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGNvbnRlbnQgPSA8SWNvbiBuYW1lPVwiYXJyb3ctbGVmdFwiIHNpemU9ezEyfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIHNpemU9ezEyfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxidXR0b24gey4uLmN0cmxQcm9wc30+e2NvbnRlbnR9PC9idXR0b24+O1xuICB9XG5cbiAgcmVuZGVyU2l6ZUNoYW5nZXIoKSB7XG4gICAgY29uc3QgeyBzaG93U2l6ZUNoYW5nZXIsIHBhZ2VTaXplT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzaG93U2l6ZUNoYW5nZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX19zaXplQ2hhbmdlclwiXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUluZGV4UGFnZVNpemV9XG4gICAgICAgID5cbiAgICAgICAgICB7cGFnZVNpemVPcHRpb25zLm1hcChzaXplID0+IDxvcHRpb24ga2V5PXtzaXplfSB2YWx1ZT17c2l6ZX0+e2Ake3NpemV9IC8g6aG1YH08L29wdGlvbj4pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyUXVpY2tKdW1wZXIoKSB7XG4gICAgY29uc3QgeyBzaG93UXVpY2tKdW1wZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGV4dEZpZWxkUHJvcHMgPSB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzdHlsZU5hbWU6ICdwYWdpbmF0aW9uX19qdW1wZXJGaWVsZCcsXG4gICAgICBvbktleVByZXNzOiB0aGlzLmhhbmRsZUp1bXBlcixcbiAgICB9O1xuICAgIGlmIChzaG93UXVpY2tKdW1wZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX2p1bXBlclwiPlxuICAgICAgICAgIOi3s+iHsyA8aW5wdXQgey4uLnRleHRGaWVsZFByb3BzfSAvPiDpobVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXJUb3RhbCgpIHtcbiAgICBjb25zdCB7IHNob3dUb3RhbCwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNob3dUb3RhbCkge1xuICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3RvdGFsXCI+e2DlhbHorqEgJHt0b3RhbH0g5p2hYH08L3NwYW4+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmluZm8oJ3JlbmRlcicpO1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzbWFsbFNpemUgPSBzaXplID09PSAnc21hbGwnO1xuICAgIGNvbnN0IHdyYXBQcm9wcyA9IHtcbiAgICAgIHN0eWxlTmFtZTogY2xhc3NuYW1lcygncGFnaW5hdGlvbicsIHtcbiAgICAgICAgJ3BhZ2luYXRpb24tLXNtYWxsJzogc21hbGxTaXplLFxuICAgICAgICAncGFnaW5hdGlvbi0tbm9ybWFsJzogIXNtYWxsU2l6ZSxcbiAgICAgIH0pLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLndyYXBQcm9wc30+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUb3RhbCgpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRyb2woJ3ByZXYnKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJJdGVtcygpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRyb2woJ25leHQnKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJTaXplQ2hhbmdlcigpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlclF1aWNrSnVtcGVyKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhZ2luYXRpb24nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBO0FBQ0E7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOzs7Ozs7O0FDQ0E7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFtQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQThDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBdURBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUF6RUE7QUEyRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEZBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBO0FBdkJBO0FBQ0E7QUFDQTs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBSkE7QUFNQTs7O0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTs7OztBQTlQQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBQ0E7QUEyT0E7Ozs7Ozs7O0FDL1FBO0FBQUE7QUFBQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=pagination.js.map