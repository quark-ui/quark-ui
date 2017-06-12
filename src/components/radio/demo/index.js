import { Component } from 'react';
import Radio from '../index';
import Button from '../../button';
import Input from '../../input';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
export default class RadioDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      checked: false,


      value: 1,
      value1: 'Apple',
      value2: 'Apple',
      value3: 'Apple',
    };
  }

  onChange=(e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  onChange1=(e) => {
    this.setState({
      value1: e.target.value,
    });
  }

  onChange2=(e) => {
    this.setState({
      value2: e.target.value,
    });
  }

  onChange3=(e) => {
    this.setState({
      value3: e.target.value,
    });
  }

  handleChange=() => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleToggle=() => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    const { checked, disabled, value1, value2, value3, value } = this.state;
    return (
      <div>
        <h3>通过配置 options 参数来渲染单选框</h3>
        <RadioGroup options={plainOptions} onChange={this.onChange1} value={value1} disabled={disabled} />
        <RadioGroup options={options} onChange={this.onChange2} value={value2} disabled={disabled} />
        <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={value3} disabled={disabled} />

        <h3>嵌套的RadioGroup</h3>
        <RadioGroup onChange={this.onChange} value={value} disabled={disabled}>
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
          More...
          {value == 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </RadioGroup>

        <h3>按钮样式的单选组合</h3>
        <RadioGroup onChange={onChange} defaultValue="a" disabled={disabled}>
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>

        <h3>非受控方式</h3>
        <p><Radio defaultChecked name={'my-radio'} disabled={disabled}>&nbsp;默认选中</Radio></p>
        <p>
          <Radio name={'my-radio'} disabled={disabled}>&nbsp;默认</Radio>
        </p>
        <h3>受控方式</h3>
        <p>
          <Radio checked={checked} onChange={this.handleChange} disabled={disabled}>&nbsp;{checked ? '选中' : '未选中'}</Radio></p>
        <p>
          <Radio checked={checked} onChange={this.handleChange} disabled={disabled}>&nbsp;{checked ? '选中' : '未选中'}</Radio>
        </p>
        <Button onClick={this.handleToggle}>{disabled ? '启用' : '禁用'}</Button>&nbsp;
        <Button onClick={this.handleChange}>{checked ? '取消选中' : '选中'}</Button>
      </div>
    );
  }
}
