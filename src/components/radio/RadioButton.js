/**
 * RadioButton Component
 * @author grootfish
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import assign from 'object-assign';
import Radio from './Radio';

class RadioButton extends Component {
  static displayName = 'RadioButton'

  static defaultProps = {
    prefixCls: 'radio-button',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  static contextTypes = {
    radioGroup: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
  }

  render() {
    const { props, context } = this;
    const { radioGroup } = context;
    const radioProps = {};
    if (radioGroup) {
      assign(radioProps, {
        onChange: radioGroup.onChange,
        checked: props.value === radioGroup.value,
        disabled: props.disabled || radioGroup.disabled,
      });
    }
    return (
      <Radio {...props} {...radioProps} />
    );
  }
}

export default RadioButton;
