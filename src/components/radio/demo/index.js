import Radio from '../Radio';
import Button from '../../button'
import { Component } from 'react';

export default class RadioDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      disabled:false,
      checked:false,
    }
  }

  handleChange=(e)=>{
    this.setState({
      checked:!this.state.checked,
    });
  }

  handleToggle=()=>{
    this.setState({
      disabled:!this.state.disabled,
    });
  }

  render() {
    const {checked,disabled} = this.state;
    return (
      <div>
        <h3>非受控方式</h3>
        <p><Radio defaultChecked name={"my-radio"} disabled={disabled}>&nbsp;默认选中</Radio></p>
        <p>
          
          <Radio name={"my-radio"} disabled={disabled}>&nbsp;默认</Radio>
          
        </p>
        <h3>受控方式</h3>
        <p>
        <Radio checked={checked} onChange={this.handleChange} disabled={disabled}>&nbsp;{checked?'选中':'未选中'}</Radio></p>
        <p>
          <Radio checked={checked} onChange={this.handleChange} disabled={disabled}>&nbsp;{checked?'选中':'未选中'}</Radio>
        </p>
        <Button onClick={this.handleToggle}>{disabled?'启用':'禁用'}</Button>&nbsp;
        <Button onClick={this.handleChange}>{checked?'取消选中':'选中'}</Button>
      </div>
    );
  }
}
