'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

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

var styles = { "danger": "_1IZL9la", "dashed": "_3YSE_nE", "secondary": "_16NdYXA", "primary": "_1rlU5o-", "base": "CTy3CHb", "small": "_1FNLWX0", "normal": "_1O7JoXn", "large": "_1JYFbqn", "disabled": "_3P6QXVt", "button--primary": "_11KqluX CTy3CHb _1rlU5o-", "button--secondary": "_1QjCEA1 CTy3CHb _16NdYXA", "button--dashed": "_1Ko5_w4 CTy3CHb _3YSE_nE", "button--danger": "_16108o6 CTy3CHb _1IZL9la", "button--disabled": "_3dqIZEv CTy3CHb _3P6QXVt", "button--large": "_3KW6hMp _1JYFbqn", "button--normal": "_3mBVgjk _1O7JoXn", "button--small": "_2HVyQfI _1FNLWX0" };

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
 * Button Component
 * @author ryan.bian
 */
var Button = (_temp = _class = function (_PureComponent) {
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
        className: classnames(styles['button--' + (disabled ? 'disabled' : type)], styles['button--' + size])
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
}(React.PureComponent), _class.displayName = 'Button', _class.defaultProps = {
  type: 'primary',
  size: 'normal' }, _class.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'dashed', 'danger']),
  size: PropTypes.oneOf(['normal', 'large', 'small'])
}, _temp);

module.exports = Button;
//# sourceMappingURL=button.js.map
