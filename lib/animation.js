'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Transition = _interopDefault(require('react-transition-group/Transition'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

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

var styles = { "fade--entering": "_1mp5FXi", "fadeIn": "gbiUlUN", "fade--entered": "_26DcFZN", "fade--exiting": "_2wSC5er", "fadeOut": "_2OnzTOe", "fade--exited": "_2K6mlzL", "flipX": "sCG0bzF", "flipX--entering": "_3cdJQI5", "flipInX": "_1FsXcPX", "flipX--entered": "qGmSxIW", "flipX--exiting": "_3NfjJC-", "flipOutX": "_24wLE9d", "flipX--exited": "_24MsE6n", "slideUp": "_1oUCufa", "slideUp--entering": "_1mO_SWR", "slideInUp": "_12qhs-A", "slideUp--entered": "_3-WipgH", "slideUp--exiting": "_27bTj8j", "slideOutUp": "_20eULFb", "slideUp--exited": "_34-gsuv", "slideDown": "_706TJ5I", "slideDown--entering": "_1ieQGlB", "slideInDown": "_21y5cl_", "slideDown--entered": "_3FYkJ5S", "slideDown--exiting": "desE714", "slideOutDown": "_16Yi8is", "slideDown--exited": "_3FJ4sR6", "zoom": "_2aGrmGr", "zoom--entering": "EdoD2Q2", "zoomIn": "gybKzsL", "zoom--entered": "_3kIgIBr", "zoom--exiting": "k0tHLpV", "zoomOut": "_689sLoR", "zoom--exited": "_6jD7wgI", "bounce": "_38IQtyb", "bounce--entering": "_1_uO8bU", "bounceIn": "_2j4EhAR", "bounce--entered": "_1hNAImH", "bounce--exiting": "Hpxa8Tt", "bounceOut": "_2yWAe_R", "bounce--exited": "_3VDKDtK" };

var MOTIONS = ['fade', 'flipX', 'slideUp', 'slideDown', 'zoom', 'bounce'];

var TIMING_FUNCTION = {
  ease: 'cubic-bezier(.25, .1, .25, 1)',
  linear: 'cubic-bezier(0,0,1,1)',
  'ease-in': 'cubic-bezier(.42,0,1,1)',
  'ease-out': 'cubic-bezier(0,0,.58,1)',
  'ease-in-out': 'cubic-bezier(.42,0,.58,1)'
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

var _class;
var _temp;

/**
 * Animation Component
 * @author ryan.bian
 */
var Animation = (_temp = _class = function (_PureComponent) {
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
              className: classnames(styles[motion], styles[motion + '--' + status])
            },
            children
          );
        }
      );
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html

  }]);
  return Animation;
}(React.PureComponent), _class.displayName = 'Animation', _class.defaultProps = {
  duration: 500,
  motion: 'fade',
  timingFunction: 'linear',
  style: undefined,
  in: PropTypes.bool,
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
}, _class.propTypes = {
  duration: PropTypes.number,
  motion: PropTypes.oneOf(MOTIONS),
  timingFunction: PropTypes.oneOf(Object.keys(TIMING_FUNCTION)),
  style: PropTypes.object,
  in: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func
}, _temp);

module.exports = Animation;
//# sourceMappingURL=animation.js.map
