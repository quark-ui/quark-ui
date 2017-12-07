'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Animate = _interopDefault(require('rc-animate'));

var styles = { "Spin": "_2skC-me", "qui-spin-dot": "_1EZh2dh", "small": "_2x0173l", "large": "_3QD-S4t", "uiFade": "_2EHkGoG", "qui-spin-text": "_2uKi-RX", "qui-spin-container": "_1ZQogri", "qui-spin-blur": "_1m5Kgy8", "qui-spin-loading-wrap": "_2_VO-5x", "qui-spin-wrap": "_2xnXvO0" };

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

/**
 * Spin Component
 * @author Northerner
 */
var Spin = (_temp = _class = function (_PureComponent) {
  inherits(Spin, _PureComponent);

  function Spin(props) {
    classCallCheck(this, Spin);

    var _this = possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

    _this.debounceTimeout = null;
    _this.delayTimeout = null;

    _this.state = {
      spinning: props.spinning
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Spin, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var currentSpinning = this.props.spinning;
      var spinning = nextProps.spinning;
      var delay = this.props.delay;


      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      if (currentSpinning && !spinning) {
        this.debounceTimeout = setTimeout(function () {
          return _this2.setState({ spinning: spinning });
        }, 300);
        if (this.delayTimeout) {
          clearTimeout(this.delayTimeout);
        }
      } else if (spinning && delay && !isNaN(Number(delay))) {
        this.delayTimeout = setTimeout(function () {
          return _this2.setState({ spinning: spinning });
        }, delay);
      } else {
        this.setState({ spinning: spinning });
      }
    }
  }, {
    key: 'isNestedPattern',
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          size = _props.size,
          tip = _props.tip,
          delay = _props.delay;
      var spinning = this.state.spinning;


      var spinProps = {
        className: styles['Spin ' + (size === 'default' ? '' : size)]
      };
      var conProps = {
        className: styles['qui-spin-container ' + (spinning ? 'qui-spin-blur' : '')],
        key: 'container'
      };
      var spinElement = React__default.createElement(
        'div',
        spinProps,
        React__default.createElement(
          'span',
          { className: styles['qui-spin-dot'] },
          React__default.createElement('i', null),
          React__default.createElement('i', null),
          React__default.createElement('i', null),
          React__default.createElement('i', null),
          React__default.createElement('i', null)
        ),
        tip ? React__default.createElement(
          'p',
          { className: styles['qui-spin-text'] },
          tip
        ) : null
      );

      if (this.isNestedPattern()) {
        return React__default.createElement(
          Animate,
          {
            component: 'div',
            transitionName: 'fade',
            className: styles['qui-spin-loading-wrap']
          },
          spinning && React__default.createElement(
            'div',
            { key: 'wrap', className: styles['qui-spin-wrap'] },
            spinElement
          ),
          React__default.createElement(
            'div',
            conProps,
            children
          )
        );
      }

      return spinElement;
    }
  }]);
  return Spin;
}(React.PureComponent), _class.displayName = 'Spin', _class.defaultProps = {
  size: 'default',
  spinning: true,
  delay: 0 }, _class.propTypes = {
  size: PropTypes.oneOf(['small', 'large', 'default']),
  spinning: PropTypes.bool,
  delay: PropTypes.number
}, _temp);

module.exports = Spin;
//# sourceMappingURL=spin.js.map
