/**
 * MonthPicker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import assign from 'object-assign';
// import styles from './DatePicker.css';
import DatePicker from './DatePicker';
import { defaultProps, propTypes } from './props';

class MonthPicker extends PureComponent {

  static displayName = 'MonthPicker'

  static defaultProps = assign({}, defaultProps, {
    format: 'YYYY-MM',
  })

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = propTypes

  render() {
    const { pickerType, ...otherProps } = this.props;
    const monthProps = {
      pickerType: 'month',
      ...otherProps,
    };
    return <DatePicker {...monthProps} />;
  }
}

export default MonthPicker;
