(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else if(typeof define === 'function' && define.amd)
		define([, , "react-css-modules", "object-assign", "classnames", "quark-ui/lib/icon"], factory);
	else if(typeof exports === 'object')
		exports["QuarkUI"] = factory(require("react"), require("prop-types"), require("react-css-modules"), require("object-assign"), require("classnames"), require("quark-ui/lib/icon"));
	else
		root["QuarkUI"] = factory(root["React"], root["PropTypes"], root["react-css-modules"], root["object-assign"], root["classnames"], root["quark-ui/lib/icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
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

/***/ 106:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quark_ui_icon__ = __webpack_require__(14);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_1L_-sT1","pagination__ctrl":"_2tvnb-l","pagination__pages":"cfbKU8w","pagination__total":"_2KQ0PhC","pagination__jumperField":"_280nkVW","pagination--normal":"_3HZDVl5","pagination__item":"jsRFs8b","pagination__item--active":"_1ZyqWB7","pagination__sizeChanger":"_3O0s4JU","pagination__jumper":"wBezPz9","pagination--small":"_2CnmpyB"};

/***/ }),

/***/ 14:
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKioqKioqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMzhkZjJlOWMxZDlkZDMxNjRjYT80MWJlKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIn0/OWNkYioqKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIn0/ZDJhYioqKioqKioqKioqIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uanM/MzIxMiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5qcz9iZThhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5jc3M/OTlkMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiPzk5MzgqIiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzLmpzP2E3NzQqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiPzA0MDUqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCI/NzE4ZioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiPzBiYjQqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKSwgcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgLCBcInJlYWN0LWNzcy1tb2R1bGVzXCIsIFwib2JqZWN0LWFzc2lnblwiLCBcImNsYXNzbmFtZXNcIiwgXCJxdWFyay11aS9saWIvaWNvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIiksIHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInF1YXJrLXVpL2xpYi9pY29uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJRdWFya1VJXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJyZWFjdC1jc3MtbW9kdWxlc1wiXSwgcm9vdFtcIm9iamVjdC1hc3NpZ25cIl0sIHJvb3RbXCJjbGFzc25hbWVzXCJdLCByb290W1wicXVhcmstdWkvbGliL2ljb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzhkZjJlOWMxZDlkZDMxNjRjYSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYiLCIvKipcbiAqIFBhZ2luYXRpb24gQ29tcG9uZW50XG4gKiBAYXV0aG9yIHJ5YW4uYmlhblxuICovXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCB7IGFsbG93TXVsdGlwbGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2luYXRpb24uY3NzJztcbmltcG9ydCBJY29uIGZyb20gJ3F1YXJrLXVpL2ljb24nO1xuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHsgYWxsb3dNdWx0aXBsZSB9KVxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdQYWdpbmF0aW9uJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRDdXJyZW50OiAxLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2VTaXplOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdFBhZ2VTaXplOiAxMCxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIHNob3dTaXplQ2hhbmdlcjogZmFsc2UsXG4gICAgb25TaXplQ2hhbmdlKCkge30sXG4gICAgcGFnZVNpemVPcHRpb25zOiBbMTAsIDIwLCAzMCwgNDBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgc2l6ZTogJycsXG4gICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdHlwZWNoZWNraW5nLXdpdGgtcHJvcHR5cGVzLmh0bWxcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRDdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd1NpemVDaGFuZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNpemVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dUb3RhbDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudDogcHJvcHMuY3VycmVudCB8fCBwcm9wcy5kZWZhdWx0Q3VycmVudCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZSB8fCBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5jdXJyZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIGN1cnJlbnQ6IG5leHRQcm9wcy5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLnBhZ2VTaXplICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIHBhZ2VTaXplOiBuZXh0UHJvcHMucGFnZVNpemUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBnZXRJdGVtUHJvcHMoaW5kZXgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWN0aXZlID0gY3VycmVudCA9PT0gaW5kZXg7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlTmFtZTogY2xhc3NuYW1lcygncGFnaW5hdGlvbl9faXRlbScsIHtcbiAgICAgICAgJ3BhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgIH0pLFxuICAgICAgb25DbGljazogYWN0aXZlID8gbnVsbCA6ICgpID0+IHRoaXMuaGFuZGxlQ2hhbmdlSW5kZXgoaW5kZXgpLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDbGlja1ByZXYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudCA+IDEpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlSW5kZXgodGhpcy5zdGF0ZS5jdXJyZW50IC0gMSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrTmV4dCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50IDwgTWF0aC5jZWlsKHRoaXMucHJvcHMudG90YWwgLyB0aGlzLnN0YXRlLnBhZ2VTaXplKSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VJbmRleCh0aGlzLnN0YXRlLmN1cnJlbnQgKyAxKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jdXJyZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnQ6IGluZGV4LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaW5kZXgsIHRoaXMuc3RhdGUucGFnZVNpemUpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlSW5kZXhQYWdlU2l6ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3UGFnZVNpemUgPSArZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbWF4UGFnZXMgPSBNYXRoLmNlaWwodG90YWwgLyBuZXdQYWdlU2l6ZSk7XG4gICAgbGV0IG5ld0N1cnJlbnQ7XG4gICAgaWYgKGN1cnJlbnQgPiBtYXhQYWdlcykge1xuICAgICAgbmV3Q3VycmVudCA9IG1heFBhZ2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDdXJyZW50ID0gY3VycmVudDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnBhZ2VTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhZ2VTaXplOiBuZXdQYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudDogbmV3Q3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uU2l6ZUNoYW5nZShuZXdQYWdlU2l6ZSwgbmV3Q3VycmVudCk7XG4gIH1cblxuICBoYW5kbGVKdW1wZXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgcGFnZVNpemUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpO1xuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoL15bMS05XStbMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSA8PSBtYXhQYWdlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VJbmRleCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudCwgcGFnZVNpemUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICBjb25zdCBmaXJzdFBhZ2UgPSAxO1xuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpO1xuXG4gICAgbGV0IHN0YXJ0O1xuICAgIGxldCBlbmQ7XG4gICAgaWYgKGN1cnJlbnQgPT09IGZpcnN0UGFnZSkge1xuICAgICAgc3RhcnQgPSBmaXJzdFBhZ2UgKyAxO1xuICAgICAgZW5kID0gZmlyc3RQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IGxhc3RQYWdlKSB7XG4gICAgICBzdGFydCA9IGxhc3RQYWdlIC0gMTtcbiAgICAgIGVuZCA9IGxhc3RQYWdlIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBjdXJyZW50O1xuICAgICAgZW5kID0gY3VycmVudDtcbiAgICB9XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChlbmQgLSBzdGFydCA+PSAzXG4gICAgICAgIHx8IChzdGFydCA8PSBmaXJzdFBhZ2UgKyAxICYmIGVuZCA+PSBsYXN0UGFnZSAtIDEpXG4gICAgICApIGJyZWFrO1xuICAgICAgaWYgKHN0YXJ0ID4gZmlyc3RQYWdlICsgMSkgc3RhcnQgLT0gMTtcbiAgICAgIGlmIChlbmQgPCBsYXN0UGFnZSAtIDEpIGVuZCArPSAxO1xuICAgIH1cblxuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8bGkga2V5PXtmaXJzdFBhZ2V9PlxuICAgICAgICA8YnV0dG9uIHsuLi50aGlzLmdldEl0ZW1Qcm9wcyhmaXJzdFBhZ2UpfT57Zmlyc3RQYWdlfTwvYnV0dG9uPlxuICAgICAgPC9saT4sXG4gICAgKTtcbiAgICBpZiAoc3RhcnQgIT09IGZpcnN0UGFnZSArIDEgJiYgc3RhcnQgIT09IGZpcnN0UGFnZSkge1xuICAgICAgaXRlbXMucHVzaCg8bGkga2V5PXsnZnJvbnQnfT48SWNvbiBuYW1lPVwiZWxsaXBzaXNcIiBzaXplPXsxMn0gLz48L2xpPik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYnRuUHJvcHMgPSB0aGlzLmdldEl0ZW1Qcm9wcyhpKTtcbiAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgIDxidXR0b24gey4uLmJ0blByb3BzfT57aX08L2J1dHRvbj5cbiAgICAgICAgPC9saT4sXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZW5kICE9PSBsYXN0UGFnZSAtIDEgJiYgZW5kICE9PSBsYXN0UGFnZSkge1xuICAgICAgaXRlbXMucHVzaCg8bGkga2V5PXsnYmFjayd9PjxJY29uIG5hbWU9XCJlbGxpcHNpc1wiIHNpemU9ezEyfSAvPjwvbGk+KTtcbiAgICB9XG4gICAgaXRlbXMucHVzaChcbiAgICAgIDxsaSBrZXk9e2xhc3RQYWdlfT5cbiAgICAgICAgPGJ1dHRvbiB7Li4udGhpcy5nZXRJdGVtUHJvcHMobGFzdFBhZ2UpfT57bGFzdFBhZ2V9PC9idXR0b24+XG4gICAgICA8L2xpPixcbiAgICApO1xuICAgIHJldHVybiA8dWwgc3R5bGVOYW1lPVwicGFnaW5hdGlvbl9fcGFnZXNcIj57aXRlbXN9PC91bD47XG4gIH1cblxuICByZW5kZXJDb250cm9sKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IGN0cmxQcm9wcyA9IHtcbiAgICAgIHN0eWxlTmFtZTogY2xhc3NuYW1lcygncGFnaW5hdGlvbl9fY3RybCcpLFxuICAgICAgb25DbGljazogZGlyZWN0aW9uID09PSAncHJldicgPyB0aGlzLmhhbmRsZUNsaWNrUHJldiA6IHRoaXMuaGFuZGxlQ2xpY2tOZXh0LFxuICAgIH07XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICBjb250ZW50ID0gPEljb24gbmFtZT1cImFycm93LWxlZnRcIiBzaXplPXsxMn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSA8SWNvbiBuYW1lPVwiYXJyb3ctcmlnaHRcIiBzaXplPXsxMn0gLz47XG4gICAgfVxuICAgIHJldHVybiA8YnV0dG9uIHsuLi5jdHJsUHJvcHN9Pntjb250ZW50fTwvYnV0dG9uPjtcbiAgfVxuXG4gIHJlbmRlclNpemVDaGFuZ2VyKCkge1xuICAgIGNvbnN0IHsgc2hvd1NpemVDaGFuZ2VyLCBwYWdlU2l6ZU9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2hvd1NpemVDaGFuZ2VyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgc3R5bGVOYW1lPVwicGFnaW5hdGlvbl9fc2l6ZUNoYW5nZXJcIlxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJbmRleFBhZ2VTaXplfVxuICAgICAgICA+XG4gICAgICAgICAge3BhZ2VTaXplT3B0aW9ucy5tYXAoc2l6ZSA9PiA8b3B0aW9uIGtleT17c2l6ZX0gdmFsdWU9e3NpemV9PntgJHtzaXplfSAvIOmhtWB9PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclF1aWNrSnVtcGVyKCkge1xuICAgIGNvbnN0IHsgc2hvd1F1aWNrSnVtcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRleHRGaWVsZFByb3BzID0ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgc3R5bGVOYW1lOiAncGFnaW5hdGlvbl9fanVtcGVyRmllbGQnLFxuICAgICAgb25LZXlQcmVzczogdGhpcy5oYW5kbGVKdW1wZXIsXG4gICAgfTtcbiAgICBpZiAoc2hvd1F1aWNrSnVtcGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX19qdW1wZXJcIj5cbiAgICAgICAgICDot7Poh7MgPGlucHV0IHsuLi50ZXh0RmllbGRQcm9wc30gLz4g6aG1XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyVG90YWwoKSB7XG4gICAgY29uc3QgeyBzaG93VG90YWwsIHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzaG93VG90YWwpIHtcbiAgICAgIHJldHVybiA8c3BhbiBzdHlsZU5hbWU9XCJwYWdpbmF0aW9uX190b3RhbFwiPntg5YWx6K6hICR7dG90YWx9IOadoWB9PC9zcGFuPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5pbmZvKCdyZW5kZXInKTtcbiAgICBjb25zdCB7IHNpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc21hbGxTaXplID0gc2l6ZSA9PT0gJ3NtYWxsJztcbiAgICBjb25zdCB3cmFwUHJvcHMgPSB7XG4gICAgICBzdHlsZU5hbWU6IGNsYXNzbmFtZXMoJ3BhZ2luYXRpb24nLCB7XG4gICAgICAgICdwYWdpbmF0aW9uLS1zbWFsbCc6IHNtYWxsU2l6ZSxcbiAgICAgICAgJ3BhZ2luYXRpb24tLW5vcm1hbCc6ICFzbWFsbFNpemUsXG4gICAgICB9KSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi53cmFwUHJvcHN9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVG90YWwoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCdwcmV2JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVySXRlbXMoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDb250cm9sKCduZXh0JykgfVxuICAgICAgICB7IHRoaXMucmVuZGVyU2l6ZUNoYW5nZXIoKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJRdWlja0p1bXBlcigpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdpbmF0aW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnaW5hdGlvblwiOlwiXzFMXy1zVDFcIixcInBhZ2luYXRpb25fX2N0cmxcIjpcIl8ydHZuYi1sXCIsXCJwYWdpbmF0aW9uX19wYWdlc1wiOlwiY2ZiS1U4d1wiLFwicGFnaW5hdGlvbl9fdG90YWxcIjpcIl8yS1EwUGhDXCIsXCJwYWdpbmF0aW9uX19qdW1wZXJGaWVsZFwiOlwiXzI4MG5rVldcIixcInBhZ2luYXRpb24tLW5vcm1hbFwiOlwiXzNIWkRWbDVcIixcInBhZ2luYXRpb25fX2l0ZW1cIjpcImpzUkZzOGJcIixcInBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZVwiOlwiXzFaeXFXQjdcIixcInBhZ2luYXRpb25fX3NpemVDaGFuZ2VyXCI6XCJfM08wczRKVVwiLFwicGFnaW5hdGlvbl9fanVtcGVyXCI6XCJ3QmV6UHo5XCIsXCJwYWdpbmF0aW9uLS1zbWFsbFwiOlwiXzJDbm1weUJcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1BhZ2luYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVhcmstdWkvbGliL2ljb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJxdWFyay11aS9saWIvaWNvblwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAxMiAxNCIsImV4cG9ydCBjb25zdCBhbGxvd011bHRpcGxlID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IEFMSUdOX0VOVU0gPSBuZXcgU2V0KFtcbiAgJ3RsJyxcbiAgJ3RyJyxcbiAgJ3RjJyxcbiAgJ2JsJyxcbiAgJ2JyJyxcbiAgJ2JjJyxcbiAgJ2NsJyxcbiAgJ2NyJyxcbl0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA3IDEyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA2IDEyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBOzs7Ozs7O0FDQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQW1DQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBO0FBOENBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXpFQTtBQTJFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RkE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7QUF2QkE7QUFDQTtBQUNBOzs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFKQTtBQU1BOzs7QUF5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBOzs7O0FBOVBBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFDQTtBQTJPQTs7Ozs7Ozs7QUMvUUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7Ozs7Ozs7QUNDQTs7Ozs7OztBQ0NBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=pagination.js.map