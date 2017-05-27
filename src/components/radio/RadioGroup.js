/**
 * Radio Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Radio.css';
import Radio from '../radio';

@CSSModules(styles, { allowMultiple })
class RadioGroup extends PureComponent {

  static displayName = 'RadioGroup'

  static defaultProps = {
    disabled:false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    disabled:PropTypes.bool,
  }

  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    return <Checkbox {...this.props}></Checkbox>;
  }
}

export default Radio;
