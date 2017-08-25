/**
 * Input Component
 * @author yan
 */
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import calculateNodeHeight from './calculateNodeHeight';
import styles from './Input.css';

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

@CSSModules(styles, { allowMultiple })
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
    const { type, prefix, suffix, style } = this.props;
    if (type === 'textarea' || !('prefix' in this.props || 'suffix' in this.props)) {
      return children;
    }

    const prefixNode = prefix ? (
      <span styleName={'input__prefix'}>
        {prefix}
      </span>
    ) : null;

    const suffixNode = suffix ? (
      <span styleName={'input__suffix'}>
        {suffix}
      </span>
    ) : null;

    const inputProps = {
      styleName: classnames('input__wrapper', {
        input__wrapper__prefix: prefix,
        input__wrapper__suffix: suffix,
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
    const { type, size, disabled, suffix, autosize, ...otherProps } = props;
    const fieldProps = {
      ...otherProps,
      styleName: `input__${disabled ? 'disabled' : type} input__${size}`,
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
