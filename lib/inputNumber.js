'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var PropTypes = _interopDefault(require('prop-types'));
var RcInputNumber = _interopDefault(require('rc-input-number'));

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
 * InputNumber Component
 * @author yan
 */
var InputNumber = (_temp = _class = function (_PureComponent) {
  inherits(InputNumber, _PureComponent);

  function InputNumber(props) {
    classCallCheck(this, InputNumber);

    var _this = possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

    _this.state = {};
    return _this;
  }

  createClass(InputNumber, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          size = _props.size,
          otherProps = objectWithoutProperties(_props, ['className', 'size']);


      var inputNumberClass = 'input-number-' + size;

      return React.createElement(RcInputNumber, _extends({ className: inputNumberClass }, otherProps));
    }
  }]);
  return InputNumber;
}(react.PureComponent), _class.displayName = 'InputNumber', _class.defaultProps = {
  step: 1,
  size: 'normal'
}, _class.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'large', 'small']),
  formatter: PropTypes.func,
  parser: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string
}, _temp);

module.exports = InputNumber;
//# sourceMappingURL=inputNumber.js.map
