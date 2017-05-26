/**
 * DatePicker Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import isEqual from 'lodash/isEqual';
import assign from 'object-assign';
import { allowMultiple } from '../../constants';
import styles from './DatePicker.css';
import { defaultProps, propTypes } from './props';

import Picker from './Picker';

@CSSModules(styles, { allowMultiple })
class DatePicker extends PureComponent {

  static displayName = 'DatePicker'

  static defaultProps = assign({}, defaultProps, {
    pickerType: 'date',
    disabledDate() {},
  })

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = assign(propTypes, {
    pickerType: PropTypes.oneOf(['date', 'month', 'range']),
    disabledDate: PropTypes.func,
  })

  constructor(props) {
    super(props);
    this.state = {
      value: moment(props.value || props.defaultValue),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.value !== 'undefined') {
      // console.log('componentWillReceiveProps', nextProps);
      this.setState({
        value: moment(nextProps.value),
      });
    }
  }
  /**
   * TODO: 检查其它情况
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (!isEqual(nextProps, this.props)) return true;
    if (!this.state.value.isSame(nextState.value)) return true;
    return false;
  }

  changeDateInternal = (changeData) => {
    const { value } = this.state;
    const newValue = moment(value).set(changeData);
    if (typeof this.props.value !== 'undefined') {
      // 受控组件
      this.props.onChange(newValue);
    } else {
      // 非受控组件
      this.setState({
        value: newValue,
      });
      this.props.onChange(newValue);
    }
  }

  render() {
    const { value } = this.state;
    const { pickerType, disabled, format, disabledDate } = this.props;
    const pickerProps = {
      date: value,
      changeDate: this.changeDateInternal,
      type: pickerType,
      disabledDate,
    };
    const inputProps = {
      type: 'text',
      disabled,
      value: value.format(format),
    };
    return disabled ? <input {...inputProps} /> : (
      <Picker {...pickerProps}>
        <input {...inputProps} />
      </Picker>
    );
  }
}

export default DatePicker;
