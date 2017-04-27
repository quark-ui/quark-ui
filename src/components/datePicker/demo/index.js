import { Component } from 'react';
import moment from 'moment';
import DatePicker from '../index';

const { MonthPicker, RangePicker } = DatePicker;

export default class DatePickerDemo extends Component {
  state = {
    disabled: false,
    date: moment().add(1, 'M'),
  }
  onChange(m) {
    console.log(m);
  }
  changeDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    const { date, disabled } = this.state;
    return (
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={disabled}
            onChange={this.changeDisabled}
          /> 禁用
        </label>
        <h2>日期选择</h2>
        <h3>非受控方式</h3>
        <DatePicker
          disabled={disabled}
          onChange={this.onChange}
        />
        <h3>受控方式</h3>
        <DatePicker
          disabled={disabled}
          value={date}
          onChange={(d) => {
            this.setState({
              date: d,
            });
          }}
        />
        <p>选择时间: {date.format()}</p>
        <h2>不可选日期</h2>
        <DatePicker
          disabled={disabled}
          disabledDate={(current) => {
            return current && current.valueOf() < Date.now();
          }}
        ></DatePicker>
        <h2>月份选择</h2>
        <MonthPicker onChange={this.onChange} disabled={disabled} />
        <h2>范围选择</h2>
        <RangePicker onChange={this.onChange} disabled={disabled} />
      </div>
    );
  }
}
