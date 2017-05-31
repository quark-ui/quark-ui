(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "object-assign", "classnames", "quark-ui/lib/icon"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["object-assign"], root["classnames"], root["quark-ui/lib/icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_189__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
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

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_1L_-sT1","pagination__ctrl":"_2tvnb-l","pagination__pages":"cfbKU8w","pagination__total":"_2KQ0PhC","pagination__jumperField":"_280nkVW","pagination--normal":"_3HZDVl5","pagination__item":"jsRFs8b","pagination__item--active":"_1ZyqWB7","pagination__sizeChanger":"_3O0s4JU","pagination__jumper":"wBezPz9","pagination--small":"_2CnmpyB"};

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = require("quark-ui/lib/icon");

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

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 94:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_icon__ = __webpack_require__(189);
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKioqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZlMjg5MmIzODA5M2ZjYWFjYzk/MzY4ZioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifT85Y2RiKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uY3NzPzk5ZDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVhcmstdWkvbGliL2ljb25cIj85OTM4Iiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzLmpzP2E3NzQqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIj8wNDA1KioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIj83MThmKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/MGJiNCoqKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcz8zMjEyIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzP2JlOGEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInF1YXJrLXVpL2xpYi9pY29uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFssICwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiLCBcIm9iamVjdC1hc3NpZ25cIiwgXCJjbGFzc25hbWVzXCIsIFwicXVhcmstdWkvbGliL2ljb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhcmtVSVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpLCByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJxdWFyay11aS9saWIvaWNvblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVhcmtVSVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wicmVhY3QtY3NzLW1vZHVsZXNcIl0sIHJvb3RbXCJvYmplY3QtYXNzaWduXCJdLCByb290W1wiY2xhc3NuYW1lc1wiXSwgcm9vdFtcInF1YXJrLXVpL2xpYi9pY29uXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xODlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGZlMjg5MmIzODA5M2ZjYWFjYzkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnaW5hdGlvblwiOlwiXzFMXy1zVDFcIixcInBhZ2luYXRpb25fX2N0cmxcIjpcIl8ydHZuYi1sXCIsXCJwYWdpbmF0aW9uX19wYWdlc1wiOlwiY2ZiS1U4d1wiLFwicGFnaW5hdGlvbl9fdG90YWxcIjpcIl8yS1EwUGhDXCIsXCJwYWdpbmF0aW9uX19qdW1wZXJGaWVsZFwiOlwiXzI4MG5rVldcIixcInBhZ2luYXRpb24tLW5vcm1hbFwiOlwiXzNIWkRWbDVcIixcInBhZ2luYXRpb25fX2l0ZW1cIjpcImpzUkZzOGJcIixcInBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZVwiOlwiXzFaeXFXQjdcIixcInBhZ2luYXRpb25fX3NpemVDaGFuZ2VyXCI6XCJfM08wczRKVVwiLFwicGFnaW5hdGlvbl9fanVtcGVyXCI6XCJ3QmV6UHo5XCIsXCJwYWdpbmF0aW9uLS1zbWFsbFwiOlwiXzJDbm1weUJcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEwIiwiZXhwb3J0IGNvbnN0IGFsbG93TXVsdGlwbGUgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgQUxJR05fRU5VTSA9IG5ldyBTZXQoW1xuICAndGwnLFxuICAndHInLFxuICAndGMnLFxuICAnYmwnLFxuICAnYnInLFxuICAnYmMnLFxuICAnY2wnLFxuICAnY3InLFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDYgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xhc3NuYW1lc1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDEwIDEyIiwiLyoqXG4gKiBQYWdpbmF0aW9uIENvbXBvbmVudFxuICogQGF1dGhvciByeWFuLmJpYW5cbiAqL1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgeyBhbGxvd011bHRpcGxlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdpbmF0aW9uLmNzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICdxdWFyay11aS9pY29uJztcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7IGFsbG93TXVsdGlwbGUgfSlcbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUGFnaW5hdGlvbidcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGN1cnJlbnQ6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0Q3VycmVudDogMSxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlU2l6ZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRQYWdlU2l6ZTogMTAsXG4gICAgb25DaGFuZ2UoKSB7fSxcbiAgICBzaG93U2l6ZUNoYW5nZXI6IGZhbHNlLFxuICAgIG9uU2l6ZUNoYW5nZSgpIHt9LFxuICAgIHBhZ2VTaXplT3B0aW9uczogWzEwLCAyMCwgMzAsIDQwXSxcbiAgICBzaG93UXVpY2tKdW1wZXI6IGZhbHNlLFxuICAgIHNpemU6ICcnLFxuICAgIHNob3dUb3RhbDogZmFsc2UsXG4gIH1cblxuICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3R5cGVjaGVja2luZy13aXRoLXByb3B0eXBlcy5odG1sXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWZhdWx0Q3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWZhdWx0UGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dTaXplQ2hhbmdlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TaXplQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIHNob3dRdWlja0p1bXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93VG90YWw6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZGVmYXVsdEN1cnJlbnQsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemUgfHwgcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuY3VycmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFzc2lnbihzdGF0ZSwge1xuICAgICAgICBjdXJyZW50OiBuZXh0UHJvcHMuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5wYWdlU2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFzc2lnbihzdGF0ZSwge1xuICAgICAgICBwYWdlU2l6ZTogbmV4dFByb3BzLnBhZ2VTaXplLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgZ2V0SXRlbVByb3BzKGluZGV4KSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGN1cnJlbnQgPT09IGluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb25fX2l0ZW0nLCB7XG4gICAgICAgICdwYWdpbmF0aW9uX19pdGVtLS1hY3RpdmUnOiBhY3RpdmUsXG4gICAgICB9KSxcbiAgICAgIG9uQ2xpY2s6IGFjdGl2ZSA/IG51bGwgOiAoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KGluZGV4KSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tQcmV2ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnQgPiAxKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZUluZGV4KHRoaXMuc3RhdGUuY3VycmVudCAtIDEpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja05leHQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudCA8IE1hdGguY2VpbCh0aGlzLnByb3BzLnRvdGFsIC8gdGhpcy5zdGF0ZS5wYWdlU2l6ZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlSW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY3VycmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50OiBpbmRleCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGluZGV4LCB0aGlzLnN0YXRlLnBhZ2VTaXplKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUluZGV4UGFnZVNpemUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld1BhZ2VTaXplID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG1heFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsIC8gbmV3UGFnZVNpemUpO1xuICAgIGxldCBuZXdDdXJyZW50O1xuICAgIGlmIChjdXJyZW50ID4gbWF4UGFnZXMpIHtcbiAgICAgIG5ld0N1cnJlbnQgPSBtYXhQYWdlcztcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q3VycmVudCA9IGN1cnJlbnQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5wYWdlU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwYWdlU2l6ZTogbmV3UGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnQ6IG5ld0N1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vblNpemVDaGFuZ2UobmV3UGFnZVNpemUsIG5ld0N1cnJlbnQpO1xuICB9XG5cbiAgaGFuZGxlSnVtcGVyID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHBhZ2VTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKC9eWzEtOV0rWzAtOV0qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPD0gbWF4UGFnZSkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlSW5kZXgodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnQsIHBhZ2VTaXplIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgY29uc3QgZmlyc3RQYWdlID0gMTtcbiAgICBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcblxuICAgIGxldCBzdGFydDtcbiAgICBsZXQgZW5kO1xuICAgIGlmIChjdXJyZW50ID09PSBmaXJzdFBhZ2UpIHtcbiAgICAgIHN0YXJ0ID0gZmlyc3RQYWdlICsgMTtcbiAgICAgIGVuZCA9IGZpcnN0UGFnZSArIDE7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBsYXN0UGFnZSkge1xuICAgICAgc3RhcnQgPSBsYXN0UGFnZSAtIDE7XG4gICAgICBlbmQgPSBsYXN0UGFnZSAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0ID0gY3VycmVudDtcbiAgICAgIGVuZCA9IGN1cnJlbnQ7XG4gICAgfVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoZW5kIC0gc3RhcnQgPj0gM1xuICAgICAgICB8fCAoc3RhcnQgPD0gZmlyc3RQYWdlICsgMSAmJiBlbmQgPj0gbGFzdFBhZ2UgLSAxKVxuICAgICAgKSBicmVhaztcbiAgICAgIGlmIChzdGFydCA+IGZpcnN0UGFnZSArIDEpIHN0YXJ0IC09IDE7XG4gICAgICBpZiAoZW5kIDwgbGFzdFBhZ2UgLSAxKSBlbmQgKz0gMTtcbiAgICB9XG5cbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGxpIGtleT17Zmlyc3RQYWdlfT5cbiAgICAgICAgPGJ1dHRvbiB7Li4udGhpcy5nZXRJdGVtUHJvcHMoZmlyc3RQYWdlKX0+e2ZpcnN0UGFnZX08L2J1dHRvbj5cbiAgICAgIDwvbGk+LFxuICAgICk7XG4gICAgaWYgKHN0YXJ0ICE9PSBmaXJzdFBhZ2UgKyAxICYmIHN0YXJ0ICE9PSBmaXJzdFBhZ2UpIHtcbiAgICAgIGl0ZW1zLnB1c2goPGxpIGtleT17J2Zyb250J30+PEljb24gbmFtZT1cImVsbGlwc2lzXCIgc2l6ZT17MTJ9IC8+PC9saT4pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJ0blByb3BzID0gdGhpcy5nZXRJdGVtUHJvcHMoaSk7XG4gICAgICBpdGVtcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICA8YnV0dG9uIHsuLi5idG5Qcm9wc30+e2l9PC9idXR0b24+XG4gICAgICAgIDwvbGk+LFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGVuZCAhPT0gbGFzdFBhZ2UgLSAxICYmIGVuZCAhPT0gbGFzdFBhZ2UpIHtcbiAgICAgIGl0ZW1zLnB1c2goPGxpIGtleT17J2JhY2snfT48SWNvbiBuYW1lPVwiZWxsaXBzaXNcIiBzaXplPXsxMn0gLz48L2xpPik7XG4gICAgfVxuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8bGkga2V5PXtsYXN0UGFnZX0+XG4gICAgICAgIDxidXR0b24gey4uLnRoaXMuZ2V0SXRlbVByb3BzKGxhc3RQYWdlKX0+e2xhc3RQYWdlfTwvYnV0dG9uPlxuICAgICAgPC9saT4sXG4gICAgKTtcbiAgICByZXR1cm4gPHVsIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3BhZ2VzXCI+e2l0ZW1zfTwvdWw+O1xuICB9XG5cbiAgcmVuZGVyQ29udHJvbChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBjdHJsUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb25fX2N0cmwnKSxcbiAgICAgIG9uQ2xpY2s6IGRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gdGhpcy5oYW5kbGVDbGlja1ByZXYgOiB0aGlzLmhhbmRsZUNsaWNrTmV4dCxcbiAgICB9O1xuICAgIGxldCBjb250ZW50O1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgY29udGVudCA9IDxJY29uIG5hbWU9XCJhcnJvdy1sZWZ0XCIgc2l6ZT17MTJ9IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gPEljb24gbmFtZT1cImFycm93LXJpZ2h0XCIgc2l6ZT17MTJ9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gPGJ1dHRvbiB7Li4uY3RybFByb3BzfT57Y29udGVudH08L2J1dHRvbj47XG4gIH1cblxuICByZW5kZXJTaXplQ2hhbmdlcigpIHtcbiAgICBjb25zdCB7IHNob3dTaXplQ2hhbmdlciwgcGFnZVNpemVPcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGFnZVNpemUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNob3dTaXplQ2hhbmdlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHN0eWxlTmFtZT1cInBhZ2luYXRpb25fX3NpemVDaGFuZ2VyXCJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlSW5kZXhQYWdlU2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwYWdlU2l6ZU9wdGlvbnMubWFwKHNpemUgPT4gPG9wdGlvbiBrZXk9e3NpemV9IHZhbHVlPXtzaXplfT57YCR7c2l6ZX0gLyDpobVgfTwvb3B0aW9uPil9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXJRdWlja0p1bXBlcigpIHtcbiAgICBjb25zdCB7IHNob3dRdWlja0p1bXBlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0ZXh0RmllbGRQcm9wcyA9IHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHN0eWxlTmFtZTogJ3BhZ2luYXRpb25fX2p1bXBlckZpZWxkJyxcbiAgICAgIG9uS2V5UHJlc3M6IHRoaXMuaGFuZGxlSnVtcGVyLFxuICAgIH07XG4gICAgaWYgKHNob3dRdWlja0p1bXBlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwicGFnaW5hdGlvbl9fanVtcGVyXCI+XG4gICAgICAgICAg6Lez6IezIDxpbnB1dCB7Li4udGV4dEZpZWxkUHJvcHN9IC8+IOmhtVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKCkge1xuICAgIGNvbnN0IHsgc2hvd1RvdGFsLCB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2hvd1RvdGFsKSB7XG4gICAgICByZXR1cm4gPHNwYW4gc3R5bGVOYW1lPVwicGFnaW5hdGlvbl9fdG90YWxcIj57YOWFseiuoSAke3RvdGFsfSDmnaFgfTwvc3Bhbj47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUuaW5mbygncmVuZGVyJyk7XG4gICAgY29uc3QgeyBzaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNtYWxsU2l6ZSA9IHNpemUgPT09ICdzbWFsbCc7XG4gICAgY29uc3Qgd3JhcFByb3BzID0ge1xuICAgICAgc3R5bGVOYW1lOiBjbGFzc25hbWVzKCdwYWdpbmF0aW9uJywge1xuICAgICAgICAncGFnaW5hdGlvbi0tc21hbGwnOiBzbWFsbFNpemUsXG4gICAgICAgICdwYWdpbmF0aW9uLS1ub3JtYWwnOiAhc21hbGxTaXplLFxuICAgICAgfSksXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7Li4ud3JhcFByb3BzfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclRvdGFsKCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyQ29udHJvbCgncHJldicpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckl0ZW1zKCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyQ29udHJvbCgnbmV4dCcpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlclNpemVDaGFuZ2VyKCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyUXVpY2tKdW1wZXIoKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFnaW5hdGlvbic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQ2hFQTs7Ozs7OztBQ0NBOzs7Ozs7O0FDQ0E7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTs7Ozs7OztBQ0NBOzs7Ozs7O0FDQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQW1DQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBO0FBOENBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXpFQTtBQTJFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RkE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7QUF2QkE7QUFDQTtBQUNBOzs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFKQTtBQU1BOzs7QUF5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBOzs7O0FBOVBBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFDQTtBQTJPQTs7Ozs7Ozs7QUMvUUE7QUFBQTtBQUFBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=pagination.js.map