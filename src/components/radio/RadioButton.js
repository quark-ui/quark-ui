/**
 * RadioButton Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import shallowEqual from 'shallowEqual';
import Radio from './Radio';
import { allowMultiple } from '../../constants';
import styles from './Radio.css';


@CSSModules(styles, { allowMultiple })
class RadioButton extends PureComponent {

  static displayName = 'RadioButton'

  static defaultProps = {
    prefixCls:'radio-button',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls:PropTypes.string,
  }

  static contextTypes = {
    radioGroup:PropTypes.any
  }

  shouldComponentUpdate(nextProps,nextState,nextContext){
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props,context} = this;
    const {radioGroup} = context;
    let radioProps = props;
    if(radioGroup){
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked =props.value==radioGroup.value;
      radioProps.disabled = props.disabled||radioGroup.disabled;
    }
    return (
      <Radio {...radioProps}></Radio>
    );
  }
}

export default RadioButton;
