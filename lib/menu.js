'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var RcMenu = require('rc-menu');
var RcMenu__default = _interopDefault(RcMenu);
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

var styles = { "menu": "_37XJzyY" };

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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var _class;
var _temp;
var _initialiseProps;

/**
 * Menu Component
 * @author heifade
 */
var Menu = (_temp = _class = function (_PureComponent) {
  inherits(Menu, _PureComponent);

  function Menu(props) {
    classCallCheck(this, Menu);

    var _this = possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _initialiseProps.call(_this);

    var openKeys = null;
    if (props.defaultOpenKeys) {
      openKeys = props.defaultOpenKeys;
    } else if (props.openKeys) {
      openKeys = props.openKeys;
    }
    _this.state = {
      openKeys: openKeys || []
    };
    return _this;
  }

  createClass(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (this.props.type === 'vertical-v' && nextProps.type !== 'vertical-v') {
      //   this.switchModeFromInline = true;
      // }
      if ('openKeys' in nextProps) {
        this.setState({ openKeys: nextProps.openKeys });
      }
    }
  }, {
    key: 'setOpenKeys',
    value: function setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys: openKeys });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = {};
      // const className = `${this.props.className}`;
      var mode = '';
      switch (this.props.type) {
        case 'horizontal-h':
          mode = 'horizontal-h';
          break;
        case 'horizontal-v':
          mode = 'horizontal';
          break;
        case 'vertical-h':
          mode = 'vertical';
          break;
        case 'vertical-v':
        default:
          mode = 'inline';
          break;
      }

      if (mode === 'inline') {
        // 垂直菜单，子菜单内嵌在菜单区域。
        props = {
          openKeys: this.state.openKeys,
          onClick: this.handleClick,
          onOpenChange: this.handleOpenChange,
          mode: mode
        };
      } else {
        props = {
          openKeys: this.state.openKeys,
          onClick: this.handleClick,
          onOpenChange: this.handleOpenChange,
          mode: mode
        };
      }
      props.className = classnames('color-' + this.props.colorType, styles.menu);
      props.prefixCls = 'menu';
      props.inlineIndent = 18;

      return React__default.createElement(RcMenu__default, _extends({}, this.props, props));
    }
  }]);
  return Menu;
}(React.PureComponent), _class.SubMenu = RcMenu.SubMenu, _class.Item = RcMenu.Item, _class.ItemGroup = RcMenu.ItemGroup, _class.displayName = 'Menu', _class.defaultProps = {
  // className: '',
  type: 'inline',
  colorType: 'warm',
  // selectedKeys: [],
  // defaultOpenKeys: [],
  // openKeys: undefined,
  onClick: null
  // onOpenChange: function() {},


  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
}, _class.propTypes = {
  // className: PropTypes.string,
  type: PropTypes.oneOf(['horizontal-h', // 水平菜单，子菜单水平
  'horizontal-v', // 水平菜单，子菜单垂直
  'vertical-h', // 垂直菜单，子菜单水平向右弹出
  'vertical-v'] // 垂直菜单，子菜单内嵌在菜单区域
  ),
  colorType: PropTypes.oneOf(['warm', 'cold']),
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  openKeys: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onOpenChange: PropTypes.func
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleOpenChange = function (openKeys) {
    _this2.setOpenKeys(openKeys);
    var onOpenChange = _this2.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(openKeys);
    }
  };

  this.handleClick = function (e) {
    if (!('selectedKeys' in _this2.props)) {
      _this2.setState({ selectedKeys: [e.key] });
    }

    _this2.setOpenKeys([]);
    var onClick = _this2.props.onClick;

    if (onClick) {
      onClick(e);
    }
  };
}, _temp);

module.exports = Menu;
//# sourceMappingURL=menu.js.map
