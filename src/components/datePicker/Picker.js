/**
 * Picker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';
import Trigger from '../trigger/';

@CSSModules(styles, { allowMultiple })
class Picker extends PureComponent {

  static displayName = 'DayPicker'

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
    const { children } = this.props;
    return (
      <Trigger
        popup={'dayPicker'}
        action={'click'}
      >
        {children}
      </Trigger>
    );
  }
}

export default Picker;
