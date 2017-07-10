'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var PropTypes = _interopDefault(require('prop-types'));
var CSSModules = _interopDefault(require('react-css-modules'));
var ReactDOM = _interopDefault(require('react-dom'));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var allowMultiple = true;

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

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

var index$1 = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 * HOC enhancer
 * render Component into target node
 * @author: ryan.bian
 */
function renderTo() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

  return function (WrappedComponent) {
    var EnhancedComponent = function (_PureComponent) {
      inherits(EnhancedComponent, _PureComponent);

      function EnhancedComponent() {
        classCallCheck(this, EnhancedComponent);
        return possibleConstructorReturn(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).apply(this, arguments));
      }

      createClass(EnhancedComponent, [{
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
          ReactDOM.unmountComponentAtNode(this.wrapNode);
          this.wrapNode.parentNode.removeChild(this.wrapNode);
        }
      }, {
        key: 'renderComponent',
        value: function renderComponent() {
          ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(WrappedComponent, this.props), this.wrapNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);
      return EnhancedComponent;
    }(react.PureComponent);

    index$1(EnhancedComponent, WrappedComponent);
    return EnhancedComponent;
  };
}

var styles = { "trigger": "_3A_xDs1", "trigger--wrap": "_1fJcokE", "popup": "_3WT1yrT", "triggerWrap": "_1fJcokE" };

var _dec$2;
var _dec2$1;
var _class$2;
var _class2$2;
var _temp$2;

/**
 * Popup Component
 * @author ryan.bian
 */
var Popup = (_dec$2 = renderTo(), _dec2$1 = CSSModules(styles, { allowMultiple: allowMultiple }), _dec$2(_class$2 = _dec2$1(_class$2 = (_temp$2 = _class2$2 = function (_PureComponent) {
  inherits(Popup, _PureComponent);

  function Popup() {
    classCallCheck(this, Popup);
    return possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  createClass(Popup, [{
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

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);
  return Popup;
}(react.PureComponent), _class2$2.displayName = 'Popup', _class2$2.defaultProps = {
  position: [0, 0],
  popupRef: null,
  visible: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
}, _class2$2.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  popupRef: PropTypes.func,
  visible: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}, _temp$2)) || _class$2) || _class$2);

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

var _dec$1;
var _class$1;
var _class2$1;
var _temp$1;

/**
 * Trigger Component
 * @author ryan.bian
 */
var Trigger = (_dec$1 = CSSModules(styles, { allowMultiple: allowMultiple }), _dec$1(_class$1 = (_temp$1 = _class2$1 = function (_PureComponent) {
  inherits(Trigger, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function Trigger(props) {
    classCallCheck(this, Trigger);

    var _this = possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));

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
          on(document.body, 'click', _this.checkClosable);
        } else {
          // unbind close listener
          off(document.body, 'click', _this.checkClosable);
        }
      });
    };

    _this.state = {
      position: [],
      active: false
    };
    return _this;
  }

  createClass(Trigger, [{
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

      var _props$placement = slicedToArray(props.placement, 2),
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

      var action = this.props.action;
      var _state = this.state,
          position = _state.position,
          active = _state.active;

      var popupProps = {
        ref: function ref(n) {
          return _this3.popup = n;
        },
        popupRef: function popupRef(n) {
          return _this3.popNode = n;
        },
        position: position,
        visible: active
      };
      if (action === 'hover') {
        index(popupProps, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
      }
      return React.createElement(
        Popup,
        popupProps,
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
        index(triggerProps, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
      } else if (action === 'click') {
        index(triggerProps, {
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
}(react.PureComponent), _class2$1.displayName = 'Trigger', _class2$1.defaultProps = {
  action: 'hover',
  placement: ['tl', 'bl'],
  offset: [0, 0],
  popup: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 100 }, _class2$1.propTypes = {
  action: PropTypes.oneOf(['hover', 'click']),
  placement: PropTypes.arrayOf(PropTypes.oneOf(Array.from(ALIGN_ENUM))),
  offset: PropTypes.arrayOf(PropTypes.number),
  popup: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number
}, _class2$1.getTargetRect = function (target) {
  return target.getBoundingClientRect();
}, _temp$1)) || _class$1);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$2 = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var styles$1 = { "danger": "_1IZL9la", "dashed": "_3YSE_nE", "secondary": "_16NdYXA", "primary": "_1rlU5o-", "base": "CTy3CHb", "small": "_1FNLWX0", "normal": "_1O7JoXn", "large": "_1JYFbqn", "disabled": "_3P6QXVt", "button--primary": "_11KqluX CTy3CHb _1rlU5o-", "button--secondary": "_1QjCEA1 CTy3CHb _16NdYXA", "button--dashed": "_1Ko5_w4 CTy3CHb _3YSE_nE", "button--danger": "_16108o6 CTy3CHb _1IZL9la", "button--disabled": "_3dqIZEv CTy3CHb _3P6QXVt", "button--large": "_3KW6hMp _1JYFbqn", "button--normal": "_3mBVgjk _1O7JoXn", "button--small": "_2HVyQfI _1FNLWX0", "buttonPrimary": "_11KqluX CTy3CHb _1rlU5o-", "buttonSecondary": "_1QjCEA1 CTy3CHb _16NdYXA", "buttonDashed": "_1Ko5_w4 CTy3CHb _3YSE_nE", "buttonDanger": "_16108o6 CTy3CHb _1IZL9la", "buttonDisabled": "_3dqIZEv CTy3CHb _3P6QXVt", "buttonLarge": "_3KW6hMp _1JYFbqn", "buttonNormal": "_3mBVgjk _1O7JoXn", "buttonSmall": "_2HVyQfI _1FNLWX0" };

var _class$3;
var _temp$3;

/**
 * Button Component
 * @author ryan.bian
 */
var Button = (_temp$3 = _class$3 = function (_PureComponent) {
  inherits(Button, _PureComponent);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          size = _props.size,
          disabled$$1 = _props.disabled,
          otherProps = objectWithoutProperties(_props, ['children', 'type', 'size', 'disabled']);

      var btnProps = _extends({}, otherProps, {
        className: index$2(styles$1['button--' + (disabled$$1 ? 'disabled' : type)], styles$1['button--' + size])
      });
      return React.createElement(
        'button',
        btnProps,
        children
      );
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);
  return Button;
}(react.PureComponent), _class$3.displayName = 'Button', _class$3.defaultProps = {
  type: 'primary',
  size: 'normal' }, _class$3.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'dashed', 'danger']),
  size: PropTypes.oneOf(['normal', 'large', 'small'])
}, _temp$3);

var styles$2 = { "dropdown--buttonWrap": "gLXAOiI", "dropdown--menuItem": "_2pDhaod", "dropdown": "_2wHqwX6", "dropdown--menu": "Hze9W1M", "dropdownButtonWrap": "gLXAOiI", "dropdownMenuItem": "_2pDhaod", "dropdownMenu": "Hze9W1M" };

var _dec$3;
var _class$4;
var _class2$3;
var _temp$4;
var _dec2$2;
var _class3$1;
var _class4$1;
var _temp2$1;

/**
 * Dropdown.Menu Component
 * @author ryan.bian
 */
var Menu = (_dec$3 = CSSModules(styles$2, { allowMultiple: allowMultiple }), _dec$3(_class$4 = (_temp$4 = _class2$3 = function (_PureComponent) {
  inherits(Menu, _PureComponent);

  function Menu(props) {
    classCallCheck(this, Menu);

    var _this = possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Menu, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        'ul',
        { styleName: 'dropdown--menu' },
        react.Children.map(children, function (Comp) {
          return react.cloneElement(Comp);
        })
      );
    }
  }]);
  return Menu;
}(react.PureComponent), _class2$3.displayName = 'Menu', _class2$3.defaultProps = {}, _class2$3.propTypes = {}, _temp$4)) || _class$4);
var Item = (_dec2$2 = CSSModules(styles$2, { allowMultiple: allowMultiple }), _dec2$2(_class3$1 = (_temp2$1 = _class4$1 = function (_PureComponent2) {
  inherits(Item, _PureComponent2);

  function Item(props) {
    classCallCheck(this, Item);

    var _this2 = possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Item, [{
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
}(react.PureComponent), _class4$1.displayName = 'Item', _class4$1.defaultProps = {}, _class4$1.propTypes = {}, _temp2$1)) || _class3$1);


Menu.Item = Item;

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

var _dec;
var _class;
var _class2;
var _temp;
var _dec2;
var _class3;
var _class4;
var _temp2;

/**
 * Dropdown Component
 * @author ryan.bian
 */
var Dropdown = (_dec = CSSModules(styles$2, { allowMultiple: allowMultiple }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  inherits(Dropdown, _PureComponent);

  function Dropdown(props) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          trigger = _props.trigger,
          overlay = _props.overlay,
          placement = _props.placement,
          children = _props.children;
      var _Placements$placement = Placements[placement],
          points = _Placements$placement.points,
          offset = _Placements$placement.offset;

      return React.createElement(
        Trigger,
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
}(react.PureComponent), _class2.displayName = 'Dropdown', _class2.defaultProps = {
  trigger: 'click',
  overlay: undefined,
  placement: 'bottomLeft' }, _class2.propTypes = {
  trigger: PropTypes.oneOf(['hover', 'click']),
  overlay: PropTypes.instanceOf(Menu),
  placement: PropTypes.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'])
}, _temp)) || _class);
var DropdownButton = (_dec2 = CSSModules(styles$2, { allowMultiple: allowMultiple }), _dec2(_class3 = (_temp2 = _class4 = function (_PureComponent2) {
  inherits(DropdownButton, _PureComponent2);

  function DropdownButton(props) {
    classCallCheck(this, DropdownButton);

    var _this2 = possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(DropdownButton, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          type = _props2.type,
          otherProps = objectWithoutProperties(_props2, ['children', 'type']);

      return React.createElement(
        'div',
        { styleName: 'dropdown--buttonWrap' },
        React.createElement(
          Button,
          { type: type },
          children
        ),
        React.createElement(
          Dropdown,
          otherProps,
          React.createElement(
            Button,
            { type: type },
            'arrow'
          )
        )
      );
    }
  }]);
  return DropdownButton;
}(react.PureComponent), _class4.displayName = 'DropdownButton', _class4.defaultProps = _extends({}, Dropdown.defaultProps, {
  type: Button.defaultProps.type,
  placement: 'bottomRight' }), _class4.propTypes = _extends({}, Dropdown.propTypes, {
  type: Button.propTypes.type
}), _temp2)) || _class3);


Dropdown.Menu = Menu;
Dropdown.Button = DropdownButton;

module.exports = Dropdown;
//# sourceMappingURL=dropdown.js.map
