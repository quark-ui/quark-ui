import { Component } from 'react';
import Button from '../../button/Button';
import Select from '../Select';
import OptGroup from '../OptGroup';
import Option from '../Option';

export default class SelectDemo extends Component {

  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  setDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  render() {
    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button>
        <h3>基本使用。</h3>
        <p></p>
        <Select style={{width: 250}} disabled={this.state.disabled}>
          <Option value="A" text="AA"></Option>
          <Option value="B" text="BB"></Option>
          <Option value="C" text="CC"></Option>
          <Option value="D" text="DD"></Option>
          <Option value="E" text="EE"></Option>
        </Select>

        <h3>分组</h3>
        <p></p>
        <Select style={{width: 250}} disabled={this.state.disabled}>
          <OptGroup label="分组1">
            <Option value="A" text="AA"></Option>
            <Option value="B" text="BB"></Option>
          </OptGroup>
          <OptGroup label="分组2">
            <Option value="C" text="CC"></Option>
            <Option value="D" text="DD"></Option>
          </OptGroup>
          <OptGroup label="分组3">
            <Option value="E" text="EE"></Option>
            <Option value="F" text="FF"></Option>
            <Option value="G" text="GG"></Option>
          </OptGroup>
        </Select>

        <h3>复杂选项。</h3>
        <p></p>
        <Select style={{width: 250}} disabled={this.state.disabled}>
          <Option value="A" text="李大力">
            <div>李大力</div><div>1354534324</div><div>杭州萧山区民和路</div>
          </Option>
          <Option value="B" text="李启">
            <div>李启</div><div>1356664324</div><div>杭州江干区</div>
          </Option>
          <Option value="C" text="李宇">
            <div>李宇</div><div>1377534324</div><div>杭州富阳</div>
          </Option>
          <Option value="D" text="李琦">
            <div>李琦</div><div>1354554324</div><div>杭州滨江区江</div>
          </Option>
          <Option value="E" text="李小燕">
            <div>李小燕</div><div>1387564324</div><div>上海黄埔区</div>
          </Option>
        </Select>
      </div>
    );
  }
}
