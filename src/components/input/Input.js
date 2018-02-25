/**
 * Input Component
 * @author yan
 */
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import calculateNodeHeight from './calculateNodeHeight';
// import styles from './Input.css';

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const styles = theme => ({
  base: {
    width: '100%',
    margin: 0,
    height: 28,
    cursor: 'text',
    fontSize: 14,
    lineHeight: 1.5,
    color: theme['text-color'],
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: `1px solid ${theme['border-color']}`,
    borderRadius: 4,
    transition: 'all .3s',
    boxSizing: 'border-box',
    '&:focus, &:hover': {
      borderColor: theme['brand-primary-light'],
    },
    '&::-moz-placeholder': {
      color: '#bcbcbc',
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: '#bcbcbc',
    },
    '&::-webkit-input-placeholder': {
      color: '#bcbcbc',
    },
  },
  input__text: {
    composes: '$base',
  },
  input__textarea: {
    composes: '$base',
    height: 'auto!important',
  },
  input__disabled: {
    composes: ['$base', '$disabled'],
  },
  input__large: {
    composes: ['$base', '$large'],
  },
  input__normal: {
    composes: ['$base', '$normal'],
  },
  input__small: {
    composes: ['$base', '$small'],
  },
  disabled: {
    background: '#f5f5f5',
    borderColor: theme['border-color'],
    color: '#999',
    cursor: 'not-allowed',
  },
  normal: {
    padding: '6px 7px',
    height: 34,
  },
  large: {
    padding: '6px 7px',
    height: 40,
  },
  small: {
    padding: '1px 7px',
    height: 26,
  },
  input__prefix: {
    position: 'absolute',
    top: '50%',
    left: 7,
    transform: 'translateY(-50%)',
    zIndex: 2,
    lineHeight: 0,
    color: theme['text-color'],
    transition: 'all .3s',
  },
  input__suffix: {
    position: 'absolute',
    top: '50%',
    right: 7,
    transform: 'translateY(-50%)',
    zIndex: 2,
    lineHeight: 0,
    color: theme['text-color'],
    transition: 'all .3s',
  },
  input__wrapper: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    '&:hover': {
      '& > input': {
        borderColor: theme['brand-primary-light'],
      },
      '& > .input__suffix': {
        cursor: 'pointer',
      },
      '& > .input__suffix:hover': {
        color: theme['brand-primary-light'],
      },
      '& > .input__prefix': {
      },
      '& > .input__prefix:hover': {
        color: theme['brand-primary-light'],
      },
    },
  },
  input__wrapper__suffix: {
    '& > input': {
      paddingRight: 30,
    },
  },
  input__wrapper__prefix: {
    '& > input': {
      paddingLeft: 30,
    },
  },
});

@injectSheet(styles)
class Input extends PureComponent {
  static displayName = 'Input'

  static defaultProps = {
    type: 'text',
    size: 'normal',
    disabled: false,
    autosize: false,
    prefix: undefined,
    suffix: undefined,
    onChange() {},
  }

  static propTypes = {
    // style: PropTypes.CSSProperties,
    type: PropTypes.oneOf([
      'text',
      'textarea',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    disabled: PropTypes.bool,
    // value: PropTypes.any,
    // defaultValue: PropTypes.any,
    autosize: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      textareaStyles: {},
    };
  }

  textareaChange = (e) => {
    if (!('value' in this.props)) {
      this.resizeTextarea();
    }
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(e);
    }
  }

  resizeTextarea = () => {
    const { type, autosize } = this.props;
    if (type !== 'textarea' || !autosize || !this.input) {
      return;
    }

    const textareaStyles = calculateNodeHeight(this.input, false);
    this.setState({ textareaStyles });
  }


  renderLabeledIcon(children) {
    const { classes, type, prefix, suffix, style } = this.props;
    if (type === 'textarea' || !('prefix' in this.props || 'suffix' in this.props)) {
      return children;
    }

    const prefixNode = prefix ? (
      <span className={classes.input__prefix}>
        {prefix}
      </span>
    ) : null;

    const suffixNode = suffix ? (
      <span className={classes.input__suffix}>
        {suffix}
      </span>
    ) : null;

    const inputProps = {
      className: classnames(classes.input__wrapper, {
        [classes.input__wrapper__prefix]: prefix,
        [classes.input__wrapper__suffix]: suffix,
      }),
    };

    return (
      <span
        {...inputProps}
        style={style}
      >
        {prefixNode}
        {cloneElement(children)}
        {suffixNode}
      </span>
    );
  }

  render() {
    const props = this.props;
    const { classes, type, size, disabled, suffix, autosize, ...otherProps } = props;
    const fieldProps = {
      ...otherProps,
      className: classnames(
        classes[`input__${disabled ? 'disabled' : type}`],
        classes[`input__${size}`],
      ),
      ref: node => (this.input = node),
      disabled,
    };

    if ('value' in props) {
      otherProps.value = fixControlledValue(props.value);
      delete otherProps.defaultValue;
    }

    if (type === 'textarea') {
      return (
        <textarea
          {...fieldProps}
          style={assign({}, props.style, this.state.textareaStyles)}
          onChange={this.textareaChange}
        />
      );
    }
    return this.renderLabeledIcon(
      <input {...fieldProps} />,
    );
  }
}

export default Input;
