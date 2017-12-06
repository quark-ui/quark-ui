'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};

var styles = { "radio--group": "_2AmYsBu" };

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

var styles$1 = { "radio-button": "lUPswOB", "radio-button--inner": "_3hWcrmt", "radio-button__disabled": "_3X8pavo", "radio-button__checked": "_1ereod6", "radio-button--wrapper": "_1Ef7vg1", "radio-button--wrapper__disabled": "_1fdGpBG", "radio-button--wrapper__checked": "_3iHso93", "radio--wrapper": "mMWdf-U", "radio--wrapper__disabled": "_1LDcYMA", "radio": "_21TqesI", "radio__disabled": "_1hhoRJ8", "radio--inner": "_3o1Rgpv", "radio__checked": "_1szddfu", "checkbox__disabled": "_1M9TcZm", "checkbox--inner": "_3Gl9_Qw", "none": "_14pGKgJ", "checkbox": "_1XpDkQN", "checkbox--wrapper": "_2GLX7p1", "checkbox--wrapper__disabled": "xSwX73t", "checkbox--wrapper__checked": "HtPNyzB", "checkbox__checked": "We2e_be", "checkbox--group": "_3Rx63VG", "radio--wrapper__checked": "_35FhbyT" };

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





var defineProperty = function (obj, key, value) {
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



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _class$2;
var _temp$2;
var _initialiseProps$1;

/**
 * Checkbox Component
 * @author grootfish
 */
var CheckboxGroup = (_temp$2 = _class$2 = function (_PureComponent) {
  inherits(CheckboxGroup, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function CheckboxGroup(props) {
    classCallCheck(this, CheckboxGroup);

    var _this = possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

    _initialiseProps$1.call(_this);

    var value = 'value' in props ? props.value : props.defaultValue;

    _this.state = {
      value: value
    };
    return _this;
  }

  createClass(CheckboxGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value || []
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var options = props.options,
          children = props.children;

      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return React__default.createElement(
            Checkbox$1,
            {
              key: option.value,
              disabled: 'disabled' in option ? option.disabled : props.disabled,
              value: option.value,
              checked: state.value.indexOf(option.value) !== -1,
              onChange: function onChange() {
                _this2.toggleOption(option);
              }
            },
            option.label
          );
        });
      }

      return React__default.createElement(
        'div',
        { className: styles$1['checkbox--group'] },
        children
      );
    }
  }]);
  return CheckboxGroup;
}(React.PureComponent), _class$2.displayName = 'CheckboxGroup', _class$2.defaultProps = {
  type: 'checkbox',
  defaultValue: [],
  options: [],
  onChange: function onChange() {}
}, _class$2.propTypes = {
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  options: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}, _class$2.childContextTypes = {
  checkboxGroup: PropTypes.any
}, _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.getChildContext = function () {
    return {
      checkboxGroup: {
        toggleOption: _this3.toggleOption,
        value: _this3.state.value,
        disabled: _this3.props.disabled
      }
    };
  };

  this.getOptions = function () {
    var options = _this3.props.options;

    return options.map(function (option) {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  };

  this.toggleOption = function (option) {
    var optionIndex = _this3.state.value.indexOf(option.value);
    var value = [].concat(toConsumableArray(_this3.state.value));
    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }

    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }

    if (_this3.props.onChange) {
      _this3.props.onChange(value);
    }
  };
}, _temp$2);

var _class$1;
var _temp$1;
var _initialiseProps;

/**
 * Checkbox Component
 * @author grootfish
 */
var Checkbox$1 = (_temp$1 = _class$1 = function (_PureComponent) {
  inherits(Checkbox, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function Checkbox(props) {
    classCallCheck(this, Checkbox);

    var _this = possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _initialiseProps.call(_this);

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  createClass(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState) || !shallowequal(this.context.checkboxGroup, nextContext.checkboxGroup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var context = this.context,
          props = this.props,
          state = this.state;
      var children = props.children,
          name = props.name,
          type = props.type,
          readOnly = props.readOnly,
          onClick = props.onClick,
          onFocus = props.onFocus,
          onBlur = props.onBlur,
          prefixCls = props.prefixCls,
          otherProps = objectWithoutProperties(props, ['children', 'name', 'type', 'readOnly', 'onClick', 'onFocus', 'onBlur', 'prefixCls']);
      var checked = state.checked;
      var disabled = props.disabled;
      var checkboxGroup = context.checkboxGroup;

      if (checkboxGroup) {
        this.handleChange = function () {
          return checkboxGroup.toggleOption({ label: children, value: props.value });
        };
        checked = checkboxGroup.value.indexOf(props.value) !== -1;
        disabled = 'disabled' in props ? props.disabled : checkboxGroup.disabled;
      }

      var classString = classnames(styles$1[prefixCls], (_classNames = {}, defineProperty(_classNames, styles$1[prefixCls + '__checked'], checked), defineProperty(_classNames, styles$1[prefixCls + '__disabled'], disabled), _classNames));
      var wrapperString = classnames((_classNames2 = {}, defineProperty(_classNames2, styles$1[prefixCls + '--wrapper'], true), defineProperty(_classNames2, styles$1[prefixCls + '--wrapper__checked'], checked), defineProperty(_classNames2, styles$1[prefixCls + '--wrapper__disabled'], disabled), _classNames2));
      var innerString = classnames(defineProperty({}, styles$1[prefixCls + '--inner'], true));
      return React__default.createElement(
        'label',
        {
          htmlFor: name,
          className: wrapperString
        },
        React__default.createElement(
          'span',
          { className: classString },
          React__default.createElement('input', _extends({
            name: name,
            type: type,
            readOnly: readOnly,
            disabled: disabled,
            checked: !!checked,
            onChange: this.handleChange
          }, otherProps)),
          React__default.createElement('span', { className: innerString })
        ),
        children !== undefined ? React__default.createElement(
          'span',
          null,
          children
        ) : null
      );
    }
  }]);
  return Checkbox;
}(React.PureComponent), _class$1.Group = CheckboxGroup, _class$1.displayName = 'Checkbox', _class$1.defaultProps = {
  prefixCls: 'checkbox',
  type: 'checkbox',
  defaultChecked: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onClick: function onClick() {}
}, _class$1.propTypes = {
  prefixCls: PropTypes.oneOf(['checkbox', 'radio']),
  defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
}, _class$1.contextTypes = {
  checkboxGroup: PropTypes.any
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var props = _this2.props;

    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      _this2.setState({
        checked: e.target.checked
      });
    }
    props.onChange({
      target: _extends({}, props, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      }
    });
  };
}, _temp$1);

var _class$3;
var _temp$3;
var _initialiseProps$2;

/**
 * Radio Component
 * @author grootfish
 */
function getCheckedValue(children) {
  var value = null;
  var matched = false;
  React__default.Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value: value } : undefined;
}

var RadioGroup = (_temp$3 = _class$3 = function (_PureComponent) {
  inherits(RadioGroup, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function RadioGroup(props) {
    classCallCheck(this, RadioGroup);

    var _this = possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _initialiseProps$2.call(_this);

    var value = void 0;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }

    _this.state = {
      value: value
    };
    return _this;
  }

  createClass(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        radioGroup: {
          onChange: this.onRadioChange,
          value: this.state.value,
          disabled: this.props.disabled
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      } else {
        var checkedValue = getCheckedValue(nextProps.children);
        if (checkedValue) {
          this.setState({ value: checkedValue.value });
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state,
          getOptions = this.getOptions;
      var options = props.options;
      var children = props.children;

      if (options && options.length > 0) {
        children = getOptions().map(function (option) {
          return React__default.createElement(
            Radio$1,
            {
              key: option.value,
              disabled: option.disabled || props.disabled,
              value: option.value,
              onChange: _this2.onRadioChange,
              checked: state.value === option.value
            },
            option.label
          );
        });
      }

      return React__default.createElement(
        'div',
        { className: styles['radio--group'] },
        children
      );
    }
  }]);
  return RadioGroup;
}(React.PureComponent), _class$3.displayName = 'RadioGroup', _class$3.defaultProps = {
  disabled: false }, _class$3.propTypes = {
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array
}, _class$3.childContextTypes = {
  radioGroup: PropTypes.any
}, _initialiseProps$2 = function _initialiseProps() {
  var _this3 = this;

  this.onRadioChange = function (e) {
    var lastValue = _this3.state.value;
    var value = e.target.value;

    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }

    var onChange = _this3.props.onChange;

    if (onChange && value !== lastValue) {
      onChange(e);
    }
  };

  this.getOptions = function () {
    var options = _this3.props.options;

    return options.map(function (option) {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  };
}, _temp$3);

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

var _class$4;
var _temp$4;

/**
 * RadioButton Component
 * @author grootfish
 */
var RadioButton = (_temp$4 = _class$4 = function (_PureComponent) {
  inherits(RadioButton, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function RadioButton(props) {
    classCallCheck(this, RadioButton);

    var _this = possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

    _this.state = {};
    return _this;
  }

  createClass(RadioButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState) || !shallowequal(this.context.radioGroup, nextContext.radioGroup);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          context = this.context;
      var radioGroup = context.radioGroup;

      var radioProps = {};
      if (radioGroup) {
        objectAssign(radioProps, {
          onChange: radioGroup.onChange,
          checked: props.value === radioGroup.value,
          disabled: props.disabled || radioGroup.disabled
        });
      }
      return React__default.createElement(Radio$1, _extends({}, props, radioProps));
    }
  }]);
  return RadioButton;
}(React.PureComponent), _class$4.displayName = 'RadioButton', _class$4.defaultProps = {
  prefixCls: 'radio-button' }, _class$4.propTypes = {
  prefixCls: PropTypes.string
}, _class$4.contextTypes = {
  radioGroup: PropTypes.any
}, _temp$4);

var _class;
var _temp;

/**
 * Radio Component
 * @author grootfish
 */
var Radio$1 = (_temp = _class = function (_PureComponent) {
  inherits(Radio, _PureComponent);

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  function Radio(props) {
    classCallCheck(this, Radio);

    var _this = possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.state = {};
    return _this;
  }

  createClass(Radio, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState) || !shallowequal(this.context.radioGroup, nextContext.radioGroup);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          context = this.context;
      var children = props.children,
          prefixCls = props.prefixCls,
          restProps = objectWithoutProperties(props, ['children', 'prefixCls']);
      var radioGroup = context.radioGroup;

      var radioProps = restProps;

      if (radioGroup) {
        radioProps.onChange = radioGroup.onChange;
        radioProps.checked = props.value == radioGroup.value;
        radioProps.disabled = props.disabled || radioGroup.disabled;
      }
      return React__default.createElement(
        Checkbox$1,
        _extends({}, radioProps, { prefixCls: prefixCls }),
        children !== undefined ? children : null
      );
    }
  }]);
  return Radio;
}(React.PureComponent), _class.Group = RadioGroup, _class.Button = RadioButton, _class.displayName = 'Radio', _class.defaultProps = {
  type: 'radio',
  prefixCls: 'radio' }, _class.propTypes = {
  type: PropTypes.string
}, _class.contextTypes = {
  radioGroup: PropTypes.any
}, _temp);

exports.RadioGroup = RadioGroup;
exports.RadioButton = RadioButton;
exports['default'] = Radio$1;
//# sourceMappingURL=radio.js.map
