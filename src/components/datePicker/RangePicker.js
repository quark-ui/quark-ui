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
import Input from '../input';

@CSSModules(styles, { allowMultiple })
class RangePicker extends PureComponent {

  static displayName = 'RangePicker'

  static defaultProps = assign({}, defaultProps, {
    fieldWidth: 100,
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
      paneVisible: false,
    };
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

  changeDateInternal = (rangeValue) => {
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
    const { disabled, format, fieldSize, fieldWidth } = this.props;
    const { rangeValue, paneVisible } = this.state;
    const pickerProps = {
      rangeDate: rangeValue,
      type: 'range',
      changeDate: this.changeDateInternal,
      paneVisible,
      onVisibleChange: this.handlePickerVisibleChange,
    };
    const fieldStyle = {};
    const field = {
      // type: 'text',
      disabled,
      size: fieldSize,
      onClick: this.handleClickField,
    };
    if (fieldWidth) {
      assign(fieldStyle, {
        width: fieldWidth,
      });
    }
    const startField = assign({}, field, {
      key: 'startDate',
      value: rangeValue[0].format(format),
      style: assign({}, fieldStyle, {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: '0 none',
      }),
    });
    const endField = assign({}, field, {
      key: 'endDate',
      value: rangeValue[1].format(format),
      style: assign({}, fieldStyle, {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: '0 none',
      }),
    });
    const inputs = [
      <Input {...startField} />,
      <Input {...endField} />,
    ];
    return disabled ? <div>{inputs}</div> : (
      <Picker {...pickerProps}>
        {inputs}
      </Picker>
    );
  }
}

export default RangePicker;
