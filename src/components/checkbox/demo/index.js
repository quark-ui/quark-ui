import { Component } from 'react';
import Checkbox from '../Checkbox';
// import {Checkbox} from 'antd'
import Button from '../../button';


const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const onChange = (e) => {
  console.log(e.target.checked, e.target.value);
};
export default class CheckboxDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      checked: true,

      checkedList: defaultCheckedList,
      checkAll: false,
    };
  }

  handleToggleDisabled=() => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  handleToggleChecked=() => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleChange=(checkedList) => {
    this.setState({
      checkedList,
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  handleAllChange=(e) => {
    // const { checkedList, checkAll } = this.state;
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      checkAll: e.target.checked,
    });
  }


  render() {
    const { checked, disabled, checkedList, checkAll } = this.state;
    return (
      <div>
        <h3>全选</h3>
        <p>
          <Checkbox
            checked={checkAll}
            disabled={disabled}
            onChange={this.handleAllChange}
          >&nbsp;全选</Checkbox>
        </p>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          disabled={disabled}
          onChange={this.handleChange}
        />

        <h3>一组checkbox</h3>
        <div>
          <CheckboxGroup onChange={(v) => { this.checkValue.innerHTML = v; }} disabled={disabled}>
            <Checkbox value="A"> A</Checkbox>
            <Checkbox value="B"> B</Checkbox>
            <Checkbox value="C"> C</Checkbox>
            <Checkbox value="D"> D</Checkbox>
          </CheckboxGroup>
        </div>
        <p ref={(v) => { this.checkValue = v; }} />
        <h3>受控方式</h3>
        <p>
          <Checkbox
            checked={checked}
            disabled={disabled}
            onChange={this.handleToggleChecked}
          >&nbsp;受控的CheckBox组件</Checkbox>
        </p>
        <p>
          <Checkbox
            checked={checked}
            disabled={disabled}
            onChange={this.handleToggleChecked}
          >&nbsp;受控的CheckBox组件</Checkbox>
        </p>
        <p>
          <Checkbox
            name="my-check"
            checked={checked}
            disabled={disabled}
            onChange={this.handleToggleChecked}
          >&nbsp;受控的CheckBox组件</Checkbox>
        </p>
        <p>
          <Checkbox
            name="my-check"
            checked={checked}
            disabled={disabled}
            onChange={this.handleToggleChecked}
          >&nbsp;受控的CheckBox组件</Checkbox>
        </p>
        <h3>非受控方式</h3>
        <p>
          <Checkbox
            defaultChecked
            disabled={disabled}
            onChange={onChange}
          >&nbsp;非控的CheckBox组件</Checkbox>
        </p>
        <Button onClick={this.handleToggleDisabled}>{disabled ? '启用' : '禁用'}</Button>&nbsp;
        <Button onClick={this.handleToggleChecked}>{checked ? '取消选中' : '选中'}</Button>
      </div>
    );
  }
}
