/**
 * Radio Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import shallowEqual from 'shallowequal';
import { allowMultiple } from '../../constants';
import styles from './Radio.css';
import Radio from '../radio';

function getCheckedValue(children) {
  let value = null;
  let matched = false;
  React.Children.forEach(children, (radio) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}


@CSSModules(styles, { allowMultiple })
class RadioGroup extends PureComponent {

  static displayName = 'RadioGroup'

  static defaultProps = {
    disabled: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    disabled: PropTypes.bool,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    children: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.array,
  }

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      const checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }

    this.state = {
      value,
    };
  }

  getChildContext() {
    return {
      radioGroup: {
        onChange: this.onRadioChange,
        value: this.state.value,
        disabled: this.props.disabled,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    } else {
      const checkedValue = getCheckedValue(nextProps.children);
      if (checkedValue) {
        this.setState({ value: checkedValue.value });
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }

  onRadioChange=(e) => {
    const lastValue = this.state.value;
    const { value } = e.target;
    if (!('value' in this.props)) {
      this.setState({ value });
    }

    const { onChange } = this.props;
    if (onChange && value !== lastValue) {
      onChange(e);
    }
  }

  getOptions=() => {
    const { options } = this.props;
    return options.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  }

  render() {
    const { props, state, getOptions } = this;
    const { options } = props;
    let { children } = props;
    if (options && options.length > 0) {
      children = getOptions().map(option => (
        <Radio
          key={option.value}
          disabled={option.disabled || props.disabled}
          value={option.value}
          onChange={this.onRadioChange}
          checked={state.value === option.value}
        >
          {option.label}
        </Radio>
          ),
      );
    }

    return (
      <div styleName={'radio--group'}>
        {children}
      </div>
    );
  }
}

export default RadioGroup;
