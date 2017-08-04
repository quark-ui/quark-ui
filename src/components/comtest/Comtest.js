/**
 * Comtest Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Comtest.css';

@CSSModules(styles, { allowMultiple })
class Comtest extends PureComponent {

  static displayName = 'Comtest'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName={'comtest'}>Comtest</div>
    );
  }
}

export default Comtest;
