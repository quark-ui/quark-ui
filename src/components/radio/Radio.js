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

@CSSModules(styles, { allowMultiple })
class Radio extends PureComponent {

  static displayName = 'Radio'

  static defaultProps = {
    type:'radio',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.string,
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
