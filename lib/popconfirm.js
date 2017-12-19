'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var ReactDOM = _interopDefault(require('react-dom'));
var Transition = _interopDefault(require('react-transition-group/Transition'));

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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

var ALIGN_ENUM = new Set(['tl', 'tr', 'tc', 'bl', 'br', 'bc', 'cl', 'cr']);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
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
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
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





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
          ReactDOM.unstable_renderSubtreeIntoContainer(this, React__default.createElement(WrappedComponent, this.props), this.wrapNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);
      return EnhancedComponent;
    }(React.PureComponent);

    hoistNonReactStatics(EnhancedComponent, WrappedComponent);
    return EnhancedComponent;
  };
}

var styles = { "trigger": "_3A_xDs1", "trigger--wrap": "_1fJcokE", "popup": "_3WT1yrT", "popup--hidden": "_3CuSPSp" };

var styles$1 = { "fade--entering": "_1mp5FXi", "fadeIn": "gbiUlUN", "fade--entered": "_26DcFZN", "fade--exiting": "_2wSC5er", "fadeOut": "_2OnzTOe", "fade--exited": "_2K6mlzL", "flipX": "sCG0bzF", "flipX--entering": "_3cdJQI5", "flipInX": "_1FsXcPX", "flipX--entered": "qGmSxIW", "flipX--exiting": "_3NfjJC-", "flipOutX": "_24wLE9d", "flipX--exited": "_24MsE6n", "slideUp": "_1oUCufa", "slideUp--entering": "_1mO_SWR", "slideInUp": "_12qhs-A", "slideUp--entered": "_3-WipgH", "slideUp--exiting": "_27bTj8j", "slideOutUp": "_20eULFb", "slideUp--exited": "_34-gsuv", "slideDown": "_706TJ5I", "slideDown--entering": "_1ieQGlB", "slideInDown": "_21y5cl_", "slideDown--entered": "_3FYkJ5S", "slideDown--exiting": "desE714", "slideOutDown": "_16Yi8is", "slideDown--exited": "_3FJ4sR6", "zoom": "_2aGrmGr", "zoom--entering": "EdoD2Q2", "zoomIn": "gybKzsL", "zoom--entered": "_3kIgIBr", "zoom--exiting": "k0tHLpV", "zoomOut": "_689sLoR", "zoom--exited": "_6jD7wgI", "bounce": "_38IQtyb", "bounce--entering": "_1_uO8bU", "bounceIn": "_2j4EhAR", "bounce--entered": "_1hNAImH", "bounce--exiting": "Hpxa8Tt", "bounceOut": "_2yWAe_R", "bounce--exited": "_3VDKDtK" };

var MOTIONS = ['fade', 'flipX', 'slideUp', 'slideDown', 'zoom', 'bounce'];

var TIMING_FUNCTION = {
  ease: 'cubic-bezier(.25, .1, .25, 1)',
  linear: 'cubic-bezier(0,0,1,1)',
  'ease-in': 'cubic-bezier(.42,0,1,1)',
  'ease-out': 'cubic-bezier(0,0,.58,1)',
  'ease-in-out': 'cubic-bezier(.42,0,.58,1)'
};

var _class$3;
var _temp$3;

/**
 * Animation Component
 * @author ryan.bian
 */
var Animation = (_temp$3 = _class$3 = function (_PureComponent) {
  inherits(Animation, _PureComponent);

  function Animation() {
    classCallCheck(this, Animation);
    return possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).apply(this, arguments));
  }

  createClass(Animation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          duration = _props.duration,
          motion = _props.motion,
          timingFunction = _props.timingFunction,
          style = _props.style,
          children = _props.children,
          otherProps = objectWithoutProperties(_props, ['duration', 'motion', 'timingFunction', 'style', 'children']);

      var transitionProps = _extends({
        in: this.props.in,
        timeout: duration
      }, otherProps);
      var defaultStyle = _extends({}, style, {
        animationDuration: duration + 'ms',
        animationTimingFunction: TIMING_FUNCTION[timingFunction]
      });
      return React__default.createElement(
        Transition,
        transitionProps,
        function (status) {
          return React__default.createElement(
            'div',
            {
              style: defaultStyle,
              className: classnames(styles$1[motion], styles$1[motion + '--' + status])
            },
            children
          );
        }
      );
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);
  return Animation;
}(React.PureComponent), _class$3.displayName = 'Animation', _class$3.defaultProps = {
  duration: 500,
  motion: 'fade',
  timingFunction: 'linear',
  style: undefined,
  in: PropTypes__default.bool,
  mountOnEnter: false,
  unmountOnExit: false,
  enter: true,
  exit: true,
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {},
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {}
}, _class$3.propTypes = {
  duration: PropTypes__default.number,
  motion: PropTypes__default.oneOf(MOTIONS),
  timingFunction: PropTypes__default.oneOf(Object.keys(TIMING_FUNCTION)),
  style: PropTypes__default.object,
  in: PropTypes__default.bool,
  mountOnEnter: PropTypes__default.bool,
  unmountOnExit: PropTypes__default.bool,
  enter: PropTypes__default.bool,
  exit: PropTypes__default.bool,
  onEnter: PropTypes__default.func,
  onEntering: PropTypes__default.func,
  onEntered: PropTypes__default.func,
  onExit: PropTypes__default.func,
  onExiting: PropTypes__default.func,
  onExited: PropTypes__default.func
}, _temp$3);

var _dec;
var _class$2;
var _class2;
var _temp$2;

/**
 * Popup Component
 * @author ryan.bian
 */
var Popup = (_dec = renderTo(), _dec(_class$2 = (_temp$2 = _class2 = function (_PureComponent) {
  inherits(Popup, _PureComponent);

  function Popup(props) {
    classCallCheck(this, Popup);

    var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = {
      popupVisible: props.visible
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Popup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible && !this.props.visible) {
        this.setState({
          popupVisible: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          popupRef = _props.popupRef,
          position = _props.position,
          visible = _props.visible,
          otherProps = objectWithoutProperties(_props, ['children', 'popupRef', 'position', 'visible']);
      var popupVisible = this.state.popupVisible;

      var wrapProps = _extends({
        ref: popupRef,
        className: classnames(styles.popup, defineProperty$1({}, styles['popup--hidden'], !popupVisible))
      }, otherProps);
      return React__default.createElement(
        Animation,
        {
          duration: 300,
          timingFunction: 'ease-in-out',
          'in': visible,
          motion: 'fade',
          mountOnEnter: true,
          appear: true,
          onExited: function onExited() {
            _this2.setState({
              popupVisible: false
            });
          },
          style: {
            position: 'absolute',
            left: position[0],
            top: position[1]
          }
        },
        React__default.createElement(
          'div',
          wrapProps,
          children
        )
      );
    }
  }]);
  return Popup;
}(React.PureComponent), _class2.displayName = 'Popup', _class2.defaultProps = {
  position: [0, 0],
  popupRef: null,
  visible: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
}, _class2.propTypes = {
  position: PropTypes__default.arrayOf(PropTypes__default.number),
  popupRef: PropTypes__default.func,
  visible: PropTypes__default.bool,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func
}, _temp$2)) || _class$2);

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

var _class$1;
var _temp$1;
var _initialiseProps;

/**
 * Trigger Component
 * @author ryan.bian
 */
var Trigger = (_temp$1 = _class$1 = function (_PureComponent) {
  inherits(Trigger, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function Trigger(props) {
    classCallCheck(this, Trigger);

    var _this = possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      position: [],
      active: Trigger.getVisibleStateByProps(props),
      ready: false
    };
    return _this;
  }

  createClass(Trigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyPlacement(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (Trigger.isPopupVisibleDefined(nextProps)) {
        this.setState({
          active: Trigger.getVisibleStateByProps(nextProps)
        }, function () {
          if (_this2.state.active) {
            on(document.body, 'click', _this2.checkClosable);
          } else {
            off(document.body, 'click', _this2.checkClosable);
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (!prevState.active && this.state.active) {
        setTimeout(function () {
          _this3.applyPlacement(_this3.props);
        }, 100);
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
      if (popupRect.width === 0 && popupRect.height === 0) {
        this.setState({
          ready: false
        });
        return;
      }
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
      var position = this.state.position;

      var newState = {
        ready: true
      };
      var newPostition = [x + offset[0], y + offset[1]];
      if (position[0] !== newPostition[0] || position[0] !== newPostition[0]) {
        objectAssign(newState, {
          position: newPostition
        });
      }
      this.setState(newState);
    }
  }, {
    key: 'renderPopup',
    value: function renderPopup() {
      var _this4 = this;

      var action = this.props.action;
      var _state = this.state,
          position = _state.position,
          active = _state.active;

      var popupProps = {
        ref: function ref(n) {
          return _this4.popup = n;
        },
        popupRef: function popupRef(n) {
          return _this4.popNode = n;
        },
        position: position,
        visible: active
      };
      if (action === 'hover') {
        objectAssign(popupProps, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
      }
      return React__default.createElement(
        Popup,
        popupProps,
        this.props.popup
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          action = _props.action,
          children = _props.children;

      var triggerProps = {
        ref: function ref(n) {
          return _this5.node = n;
        },
        className: styles['trigger--wrap']
      };
      if (action === 'hover') {
        objectAssign(triggerProps, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
      } else if (action === 'click') {
        objectAssign(triggerProps, {
          onClick: this.handleClickTrigger
        });
      }
      return React__default.createElement(
        'div',
        { className: styles.trigger },
        React__default.createElement(
          'span',
          triggerProps,
          children
        ),
        this.renderPopup()
      );
    }
  }]);
  return Trigger;
}(React.PureComponent), _class$1.displayName = 'Trigger', _class$1.defaultProps = {
  action: 'hover',
  placement: ['tl', 'bl'],
  offset: [0, 0],
  popup: '',
  popupVisible: undefined,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 100,
  onPopupVisibleChange: function onPopupVisibleChange() {}
}, _class$1.propTypes = {
  action: PropTypes__default.oneOf(['hover', 'click']),
  placement: PropTypes__default.arrayOf(PropTypes__default.oneOf(Array.from(ALIGN_ENUM))),
  offset: PropTypes__default.arrayOf(PropTypes__default.number),
  popup: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]).isRequired,
  popupVisible: PropTypes__default.bool,
  mouseEnterDelay: PropTypes__default.number,
  mouseLeaveDelay: PropTypes__default.number,
  onPopupVisibleChange: PropTypes__default.func
}, _class$1.getTargetRect = function (target) {
  return target.getBoundingClientRect();
}, _class$1.getVisibleStateByProps = function (props) {
  return Trigger.isPopupVisibleDefined(props) ? props.popupVisible : false;
}, _class$1.isPopupVisibleDefined = function (props) {
  return typeof props.popupVisible !== 'undefined';
}, _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.checkClosable = function (e) {
    if (!_this6.node || _this6.node.contains(e.target)) return;
    if (_this6.popNode && !_this6.popNode.contains(e.target)) {
      _this6.handleClickTrigger();
    }
  };

  this.handleMouseEnter = function () {
    if (_this6.leaveTimer) {
      clearTimeout(_this6.leaveTimer);
      _this6.leaveTimer = null;
    }
    var mouseEnterDelay = _this6.props.mouseEnterDelay;

    _this6.enterTimer = setTimeout(function () {
      if (Trigger.isPopupVisibleDefined(_this6.props)) {
        _this6.props.onPopupVisibleChange(true);
      } else {
        _this6.setState({
          active: true
        }, function () {
          _this6.props.onPopupVisibleChange(true);
        });
      }
    }, mouseEnterDelay);
  };

  this.handleMouseLeave = function () {
    if (_this6.enterTimer) {
      clearTimeout(_this6.enterTimer);
      _this6.enterTimer = null;
    }
    var mouseLeaveDelay = _this6.props.mouseLeaveDelay;

    _this6.leaveTimer = setTimeout(function () {
      if (Trigger.isPopupVisibleDefined(_this6.props)) {
        _this6.props.onPopupVisibleChange(false);
      } else {
        _this6.setState({
          active: false
        }, function () {
          _this6.props.onPopupVisibleChange(false);
        });
      }
    }, mouseLeaveDelay);
  };

  this.handleClickTrigger = function (e) {
    if (e) {
      e.preventDefault();
    }
    if (Trigger.isPopupVisibleDefined(_this6.props)) {
      _this6.props.onPopupVisibleChange(!_this6.state.active);
    } else {
      _this6.setState({
        active: !_this6.state.active
      }, function () {
        if (_this6.state.active) {
          // bind close listener
          on(document.body, 'click', _this6.checkClosable);
        } else {
          // unbind close listener
          off(document.body, 'click', _this6.checkClosable);
        }
        _this6.props.onPopupVisibleChange(_this6.state.active);
      });
    }
  };
}, _temp$1);

var styles$2 = { "danger": "_1IZL9la", "dashed": "_3YSE_nE", "secondary": "_16NdYXA", "primary": "_1rlU5o-", "base": "CTy3CHb", "small": "_1FNLWX0", "normal": "_1O7JoXn", "large": "_1JYFbqn", "disabled": "_3P6QXVt", "button--primary": "_11KqluX CTy3CHb _1rlU5o-", "button--secondary": "_1QjCEA1 CTy3CHb _16NdYXA", "button--dashed": "_1Ko5_w4 CTy3CHb _3YSE_nE", "button--danger": "_16108o6 CTy3CHb _1IZL9la", "button--disabled": "_3dqIZEv CTy3CHb _3P6QXVt", "button--large": "_3KW6hMp _1JYFbqn", "button--normal": "_3mBVgjk _1O7JoXn", "button--small": "_2HVyQfI _1FNLWX0" };

var _class$4;
var _temp$4;

/**
 * Button Component
 * @author ryan.bian
 */
var Button = (_temp$4 = _class$4 = function (_PureComponent) {
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
          disabled = _props.disabled,
          otherProps = objectWithoutProperties(_props, ['children', 'type', 'size', 'disabled']);

      var btnProps = _extends({}, otherProps, {
        className: classnames(styles$2['button--' + (disabled ? 'disabled' : type)], styles$2['button--' + size])
      });
      return React__default.createElement(
        'button',
        btnProps,
        children
      );
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);
  return Button;
}(React.PureComponent), _class$4.displayName = 'Button', _class$4.defaultProps = {
  type: 'primary',
  size: 'normal' }, _class$4.propTypes = {
  type: PropTypes__default.oneOf(['primary', 'secondary', 'dashed', 'danger']),
  size: PropTypes__default.oneOf(['normal', 'large', 'small'])
}, _temp$4);

var styles$3 = { "popover": "u4IfOqM", "popover--popup": "uvM55OW", "popover--popup--title": "_3Z-3JOj", "popover--popup--footer": "g5I_0mc", "popover--popup--arrow": "_1ziGm4Y", "popover--popup--inner": "Q2bNQ6s", "popover--popup--left": "bQnXrx4", "popover--popup--leftTop": "_384M3CI", "popover--popup--leftBottom": "_1k6WArE", "popover--popup--right": "_1SxehkN", "popover--popup--rightTop": "_25sZbz2", "popover--popup--rightBottom": "_2OR9ldJ", "popover--popup--top": "_1W5S99R", "popover--popup--topLeft": "LdFw74E", "popover--popup--topRight": "_2kZVKPB", "popover--popup--bottom": "_1kIW2Lp", "popover--popup--bottomLeft": "gjhh1gR", "popover--popup--bottomRight": "_2-gECOY" };

var Placements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  leftBottom: {
    points: ['br', 'bl']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

var _class$5;
var _temp$5;

/**
 * Popover Component
 * @author lhf
 */
var Popover = (_temp$5 = _class$5 = function (_PureComponent) {
  inherits(Popover, _PureComponent);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.handleClickTrigger = function () {
      // off(document.body, 'click', this.checkClosable);
      // this.props.onPopupVisibleChange(false);
      _this.setState({
        visible: false
      });
    };

    _this.onPopupVisibleChange = function (visible) {
      // console.log('onPopupVisibleChange', visible);
      _this.setState({
        visible: visible
      });
    };

    _this.state = { visible: false };

    return _this;
  }

  createClass(Popover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          placement = _props.placement,
          title = _props.title,
          hasButton = _props.hasButton,
          popovers = _props.popovers,
          children = _props.children;

      var poptitle = title ? React__default.createElement(
        'p',
        { className: styles$3['popover--popup-title'] },
        title
      ) : '';
      // const button = hasButton ? (<div><Button size='small' type="secondary" onClick={this.handleClickTrigger}>关闭</Button></div>) : '';
      var button = hasButton ? React__default.createElement(
        'a',
        { href: 'javascript:void(0);', onClick: this.handleClickTrigger },
        '\u5173\u95ED'
      ) : '';

      var stylename = classnames(styles$3['popover--popup'], styles$3['popover--popup--' + placement]);

      var popoverProp = {
        action: action,
        placement: Placements[placement].points,
        mouseLeaveDelay: 100,
        popup: React__default.createElement(
          'div',
          { className: stylename },
          React__default.createElement('div', { className: styles$3['popover--popup--arrow'] }),
          React__default.createElement(
            'div',
            { className: styles$3['popover--popup--inner'] },
            title ? React__default.createElement(
              'p',
              { className: styles$3['popover--popup--title'] },
              title
            ) : '',
            React__default.createElement(
              'div',
              null,
              popovers
            ),
            hasButton ? React__default.createElement(
              'div',
              { className: styles$3['popover--popup--footer'] },
              button
            ) : ''
          )
        )
      };
      if (hasButton) {
        popoverProp.onPopupVisibleChange = this.onPopupVisibleChange;
        popoverProp.popupVisible = this.state.visible;
      }

      return React__default.createElement(
        Trigger,
        popoverProp,
        children
      );
    }
  }]);
  return Popover;
}(React.PureComponent), _class$5.displayName = 'Popover', _class$5.defaultProps = {
  title: '',
  action: 'hover',
  placement: 'top',
  hasButton: false,
  popovers: ''
}, _class$5.propTypes = {
  title: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
  action: PropTypes__default.oneOf(['click', 'hover']),
  placement: PropTypes__default.oneOf(['left', 'right', 'top', 'bottom', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'topLeft', 'topRight', 'rightTop', 'rightBottom']),
  hasButton: PropTypes__default.bool,
  popovers: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element])
}, _temp$5);

var styles$4 = { "popconfirm": "_3wZr8G1", "popconfirm--popup": "_2HKPRsi", "popconfirm--popup--footer": "_3zS3sqP", "popconfirm-btn": "_32U_ZXw", "popconfirm--popup--arrow": "_2bXnDTL", "popconfirm--popup--inner": "_2LzFVfh", "popconfirm--popup--left": "ljhTU5P", "popconfirm--popup--leftTop": "_2EE4LwJ", "popconfirm--popup--leftBottom": "pRC-45p", "popconfirm--popup--right": "_2WzOwhv", "popconfirm--popup--rightTop": "_38n-jE-", "popconfirm--popup--rightBottom": "_14w_NeL", "popconfirm--popup--top": "_1dyL6c3", "popconfirm--popup--topLeft": "_1J0_phe", "popconfirm--popup--topRight": "_2DLOrwJ", "popconfirm--popup--bottom": "_3Jpla17", "popconfirm--popup--bottomLeft": "_23mX_di", "popconfirm--popup--bottomRight": "_2LHhMyX" };

var Placements$1 = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  leftBottom: {
    points: ['br', 'bl']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

var _class;
var _temp;

/**
 * Popconfirm Component
 * @author lhf
 */
var Popconfirm = (_temp = _class = function (_PureComponent) {
  inherits(Popconfirm, _PureComponent);

  function Popconfirm(props) {
    classCallCheck(this, Popconfirm);

    var _this = possibleConstructorReturn(this, (Popconfirm.__proto__ || Object.getPrototypeOf(Popconfirm)).call(this, props));

    _this.onPopupVisibleChange = function (visible) {
      _this.setState({
        visible: visible
      });
    };

    _this.onHandleCancleClickTrigger = function () {
      _this.setState({
        visible: false
      });
    };

    _this.onHandleOkClickTrigger = function () {
      if (_this.props.handleOkClickTrigger) {
        _this.props.handleOkClickTrigger();
        _this.setState({
          visible: _this.props.confirmVisable
        });
      } else {
        _this.setState({
          visible: false
        });
      }
    };

    _this.state = { visible: false };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Popconfirm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          placement = _props.placement,
          content = _props.content,
          confirmVisable = _props.confirmVisable,
          children = _props.children;


      var stylename = classnames(styles$4['popconfirm'], styles$4['popconfirm--popup'], styles$4['popconfirm--popup--' + placement]);
      var popcontent = {
        action: action,
        placement: Placements$1[placement].points,
        mouseLeaveDelay: 100,
        onPopupVisibleChange: this.onPopupVisibleChange,
        popupVisible: this.state.visible,
        popup: React__default.createElement(
          'div',
          { className: stylename },
          React__default.createElement('div', { className: styles$4['popconfirm--popup--arrow'] }),
          React__default.createElement(
            'div',
            { className: styles$4['popconfirm--popup--inner'] },
            React__default.createElement(
              'div',
              null,
              content
            ),
            React__default.createElement(
              'div',
              { className: styles$4['popconfirm--popup--footer'] },
              React__default.createElement(
                Button,
                { size: 'small', type: 'secondary', onClick: this.onHandleCancleClickTrigger },
                '\u53D6\u6D88'
              ),
              React__default.createElement(
                'div',
                { className: styles$4['popconfirm-btn'] },
                React__default.createElement(
                  Button,
                  { size: 'small', type: 'primary', onClick: this.onHandleOkClickTrigger },
                  '\u786E\u5B9A'
                )
              )
            )
          )
        )
      };

      return React__default.createElement(
        Trigger,
        popcontent,
        children
      );
    }
  }]);
  return Popconfirm;
}(React.PureComponent), _class.displayName = 'Popconfirm', _class.defaultProps = {
  action: 'hover',
  placement: 'top',
  content: '',
  confirmVisable: undefined,
  handleOkClickTrigger: null }, _class.propTypes = {
  action: PropTypes__default.oneOf(['click', 'hover']),
  placement: PropTypes__default.oneOf(['left', 'right', 'top', 'bottom', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'topLeft', 'topRight', 'rightTop', 'rightBottom']),
  content: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
  confirmVisable: PropTypes__default.bool,
  handleOkClickTrigger: PropTypes__default.func
}, _temp);

module.exports = Popconfirm;
//# sourceMappingURL=popconfirm.js.map
