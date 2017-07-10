import { Component } from 'react';
import moment from 'moment';
import DatePicker from '../index';
import Checkbox from '../../checkbox';

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
      <div className="markdown-block">
        <h3>
          <Checkbox
            checked={disabled}
            onChange={this.changeDisabled}
          >
            禁用
          </Checkbox>
        </h3>
        
        <h3>日期选择</h3>
        <table>
          <thead>
            <tr>
              <th>非受控方式</th>
              <th>受控方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DatePicker
                  disabled={disabled}
                  onChange={this.onChange}
                />
              </td>
              <td style={{position: 'relative'}}>
                <DatePicker
                  disabled={disabled}
                  value={date}
                  onChange={(d) => {
                    this.setState({
                      date: d,
                    });
                  }}
                />
                <p style={{position: 'absolute', right: '20px', top: '15px'}}>选择时间: {date.format()}</p>
              </td>
            </tr>
          </tbody>
        </table>
        
        <h3>不可选日期</h3>
        <p>可用 disabledDate 禁止选择部分日期</p>
        <DatePicker
          disabled={disabled}
          disabledDate={(current) => {
            return current && current.valueOf() < Date.now();
          }}
        ></DatePicker>
        <h3>月份选择</h3>
        <MonthPicker onChange={this.onChange} disabled={disabled} />
        <h3>预设范围</h3>
        <p>RangePicker 可以设置常用的 预设范围 提高用户体验。</p>
        <RangePicker onChange={this.onChange} disabled={disabled} />
      </div>
    );
  }
}
