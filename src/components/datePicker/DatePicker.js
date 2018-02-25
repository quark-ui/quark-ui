/**
 * DatePicker Component
 * @author ryan.bian
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import isEqual from 'lodash/isEqual';
import assign from 'object-assign';
// import injectSheet from 'react-jss';
// import styles from './style';
// import styles from './DatePicker.css';
import { defaultProps, propTypes } from './props';
import Input from '../input';

import Picker from './Picker';

// @injectSheet(styles)
class DatePicker extends Component {
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
      paneVisible: false,
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
    if (this.state.paneVisible !== nextState.paneVisible) return true;
    return false;
  }

  handleClickField = () => {
    this.setState({
      paneVisible: true,
    });
  }

  handlePickerVisibleChange = (visible) => {
    this.setState({
      paneVisible: visible,
    });
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
    this.setState({
      paneVisible: false,
    });
  }

  render() {
    const { value, paneVisible } = this.state;
    const { pickerType, disabled, format, disabledDate, fieldSize, fieldWidth } = this.props;
    const pickerProps = {
      date: value,
      changeDate: this.changeDateInternal,
      type: pickerType,
      disabledDate,
      paneVisible,
      onVisibleChange: this.handlePickerVisibleChange,
    };
    const fieldStyle = {};
    if (fieldWidth) {
      assign(fieldStyle, {
        width: fieldWidth,
      });
    }
    const inputProps = {
      // type: 'text',
      disabled,
      value: value.format(format),
      size: fieldSize,
      style: fieldStyle,
      onClick: this.handleClickField,
    };
    return disabled ? <Input {...inputProps} /> : (
      <Picker {...pickerProps}>
        <Input {...inputProps} />
      </Picker>
    );
  }
}

export default DatePicker;
