/**
 * RangePicker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import assign from 'object-assign';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';
import Picker from './Picker';
import { defaultProps, propTypes } from './props';

@CSSModules(styles, { allowMultiple })
class RangePicker extends PureComponent {

  static displayName = 'RangePicker'

  static defaultProps = assign({}, defaultProps, {
  })

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = assign({}, propTypes, {
    value: PropTypes.arrayOf(momentPropTypes.momentObj),
    defaultValue: PropTypes.arrayOf(momentPropTypes.momentObj),
  })

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue || [moment(), moment()];
    this.state = {
      rangeValue: value,
    };
  }

  changeDateInternal = (changeData, position) => {
    const { rangeValue } = this.state;
    rangeValue[position] = moment(rangeValue[position]).set(changeData);
    if (typeof this.props.value !== 'undefined') {
      // 受控组件
      this.props.onChange(rangeValue);
    } else {
      // 非受控组件
      this.setState({
        rangeValue: rangeValue.slice(0),
      });
      this.props.onChange(rangeValue);
    }
  }

  render() {
    const { disabled, format } = this.props;
    const { rangeValue } = this.state;
    const pickerProps = {
      rangeDate: rangeValue,
      type: 'range',
      changeDate: this.changeDateInternal,
    };
    const field = {
      type: 'text',
      disabled,
    };
    const startField = assign({}, field, {
      key: 'startDate',
      value: rangeValue[0].format(format),
    });
    const endField = assign({}, field, {
      key: 'endDate',
      value: rangeValue[1].format(format),
    });
    const inputs = [
      <input {...startField} />,
      <input {...endField} />,
    ];
    return disabled ? <div>{inputs}</div> : (
      <Picker {...pickerProps}>
        {inputs}
      </Picker>
    );
  }
}

export default RangePicker;
