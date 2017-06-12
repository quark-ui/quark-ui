/**
 * Input Component
 * @author yan
 */
import { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Input.css';
import calculateNodeHeight from './calculateNodeHeight';

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
    // wrapperCls:'input__wrapper',
    disabled: false,
    autosize: false,
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
    // wrapperCls: PropTypes.string,
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
    const props = this.props;
    if (props.type === 'textarea' || !('prefix' in props || 'suffix' in props)) {
      return children;
    }

    const prefix = props.prefix ? (
      <span styleName={'input__prefix'}>
        {props.prefix}
      </span>
    ) : null;

    const suffix = props.suffix ? (
      <span styleName={'input__suffix'}>
        {props.suffix}
      </span>
    ) : null;

    const inputProps = {
      styleName: `${props.prefix ? 'input__wrapper input__wrapper__prefix' : (props.suffix ? 'input__wrapper input__wrapper__suffix' : 'input__wrapper')}`,
    };

    return (
      <span
        {...inputProps}
        style={props.style}
      >
        {prefix}
        {cloneElement(children)}
        {suffix}
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
      return <textarea
        {...fieldProps}
        style={assign({}, props.style, this.state.textareaStyles)}
        onChange={this.textareaChange}
      />;
    }
    return this.renderLabeledIcon(
      <input {...fieldProps} />,
    );
  }
}

export default Input;
