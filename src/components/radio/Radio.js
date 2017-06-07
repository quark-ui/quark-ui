/**
 * Radio Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Radio.css';
import Checkbox from '../checkbox';
import shallowEqual from 'shallowEqual';

@CSSModules(styles, { allowMultiple })
class Radio extends PureComponent {

  static displayName = 'Radio'

  static defaultProps = {
    type: 'radio',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.string,
  }

  static contextTypes = {
    radioGroup: PropTypes.any,
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { props, context } = this;
    const { children, ...restProps } = props;
    const { radioGroup } = context;
    const radioProps = restProps;

    if (radioGroup) {
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value == radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    return (<Checkbox {...radioProps}>
      {children !== undefined ? children : null}
    </Checkbox>);
  }
}

export default Radio;
