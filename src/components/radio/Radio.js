/**
 * Radio Component
 * @author grootfish
 */
import React,{ PureComponent } from 'react';
import shallowEqual from 'shallowequal';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Radio.css';
import Checkbox from '../checkbox';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';


@CSSModules(styles, { allowMultiple })
class Radio extends PureComponent {

  static Group = RadioGroup;
  static Button = RadioButton;

  static displayName = 'Radio'

  static defaultProps = {
    type: 'radio',
    prefixCls: 'radio',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.string,
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
    const { children, prefixCls, ...restProps } = props;
    const { radioGroup } = context;
    const radioProps = restProps;

    if (radioGroup) {
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value == radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    return (
      <Checkbox {...radioProps} prefixCls={prefixCls}>
        {children !== undefined ? children : null}
      </Checkbox>
    );
  }
}

export default Radio;
