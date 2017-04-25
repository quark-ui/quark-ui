/**
 * DayPicker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';

@CSSModules(styles, { allowMultiple })
class DayPicker extends PureComponent {

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
    return (
      <div>
        DayPicker
      </div>
    );
  }
}

export default DayPicker;
