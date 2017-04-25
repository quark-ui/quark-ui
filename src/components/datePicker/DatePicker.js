/**
 * DatePicker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';

import DayPicker from './DayPicker';

@CSSModules(styles, { allowMultiple })
class DatePicker extends PureComponent {

  static displayName = 'DatePicker'

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
      <div>
        <input />
        <DayPicker />
      </div>
    );
  }
}

export default DatePicker;
