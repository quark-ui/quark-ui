/**
 * Input Component
 * @author yan
 */
import { PureComponent,cloneElement } from 'react';
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
    wrapperCls:'input__wrapper',
    disabled: false,
    autosize:false
  }

  static propTypes = {
    style: PropTypes.CSSProperties,
    type: PropTypes.oneOf([
      'text',
      'textarea',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    wrapperCls: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
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
      console.log(this.props);
    
    if (type !== 'textarea' || !autosize || !this.refs.input) {
      return;
    }

    const textareaStyles = calculateNodeHeight(this.refs.input,false);
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

    return (
      <span styleName={props.wrapperCls} style={props.style}>
        {prefix}
        {cloneElement(children, { style: null })}
        {suffix}
      </span>
    );
  }


  
  render() {
    const props = this.props;
    const { style, type, size, disabled, ...otherProps } = props;
    const btnProps = {
      ...otherProps,
      styleName: `input__${disabled ? 'disabled' : type} input__${size}`,
    };

    if ('value' in props) {
      otherProps.value = fixControlledValue(props.value);
      delete otherProps.defaultValue;
    }

    switch (type) {
      case 'textarea':
        return (
          <textarea 
          {...btnProps}
          style={assign({}, props.style, this.state.textareaStyles)}
          disabled={disabled}
          onChange={this.textareaChange}
          ref="input"
           />
        );
      default:
        return this.renderLabeledIcon(
          <input 
          {...btnProps}
          disabled={disabled}
          ref="input"
           />
        );
    }

  }
}

export default Input;
