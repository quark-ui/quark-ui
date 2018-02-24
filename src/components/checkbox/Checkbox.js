/**
 * Checkbox Component
 * @author grootfish
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import CheckboxGroup from './CheckboxGroup';

import styles from './style';

@injectSheet(styles)
class Checkbox extends Component {

  static Group = CheckboxGroup;
  static displayName = 'Checkbox';

  static defaultProps = {
    prefixCls: 'checkbox',
    type: 'checkbox',
    defaultChecked: false,
    onChange() {},
    onFocus() {},
    onBlur() {},
    onClick() {},
  }
  
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls: PropTypes.oneOf(['checkbox', 'radio', 'radio-button']),
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };


  constructor(props) {
    super(props);

    const checked = 'checked' in props ? props.checked : props.defaultChecked;

    this.state = {
      checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup);
  }

  handleChange = (e) => {
    const { props } = this;
    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    props.onChange({
      target: {
        ...props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
    });
  };

  render() {
    const { context, props, state } = this;
    const { classes, children, name, type, readOnly, onClick, onFocus, onBlur, prefixCls, theme, ...otherProps } = props;
    let { checked } = state;
    let { disabled } = props;
    const { checkboxGroup } = context;
    if (checkboxGroup) {
      this.handleChange = () => checkboxGroup.toggleOption({ label: children, value: props.value });
      checked = checkboxGroup.value.indexOf(props.value) !== -1;
      disabled = 'disabled' in props ? props.disabled : checkboxGroup.disabled;
    }

    const classString = classNames(classes[prefixCls], {
      [classes[`${prefixCls}__checked`]]: checked,
      [classes[`${prefixCls}__disabled`]]: disabled,
    });
    const wrapperString = classNames({
      [classes[`${prefixCls}--wrapper`]]: true,
      [classes[`${prefixCls}--wrapper__checked`]]: checked,
      [classes[`${prefixCls}--wrapper__disabled`]]: disabled,
    });
    const innerString = classNames({
      [classes[`${prefixCls}--inner`]]: true,
    });
    return (
      <label
        htmlFor={name}
        className={wrapperString}
      >
        <span className={classString}>
          <input
            name={name}
            type={type}
            readOnly={readOnly}
            disabled={disabled}
            checked={!!checked}
            onChange={this.handleChange}
            {...otherProps}
          />
          <span className={innerString} />
        </span>
        {children !== undefined ? <span>{children}</span> : null}
      </label>

    );
  }
}

export default Checkbox;
