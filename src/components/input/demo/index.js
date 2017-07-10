import { Component } from 'react';
import Input from '../Input';
import Icon from '../../icon';
import Search from '../Search';
import CardInput from '../CardInput';

export default class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '1234-1234-1234-1234' };
  }

  onChangeCard = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    const prefix = (<Icon size={12} name={'account'} />);

    return (
      <div className="markdown-block">
        <h3>基本</h3>
        <p>输入框</p>
          <Input placeholder="请输入" defaultValue="12345465" />
        <h3>图标</h3>
        <p>图标输入框</p>
          <Input placeholder="请输入" prefix={prefix} />
        <h3>大小</h3>
        <p>三种大小的数字输入框</p>
          <Input size="large" placeholder="large size" />
          <Input size="normal" placeholder="normal size" />
          <Input size="small" placeholder="small size" />
        <h3>禁用</h3>
        <p>输入框禁用</p>
        <p>
          <Input placeholder="input disabled" defaultValue="12345465" disabled />
        </p>
        <h3>搜索框</h3>
        <p>带有搜索按钮的输入框</p>
          <Search size="large" placeholder="input search text" style={{ width: 240 }} />
          <Search placeholder="input search text" style={{ width: 240 }} />
          <Search size="small" placeholder="input search text" style={{ width: 240 }} />
        <h3>文本域</h3>
        <p>用于多行输入</p>
          <Input type="textarea" placeholder="请输入" autosize rows={1} />
          <Input type="textarea" placeholder="请输入" rows={6} />
        <h3>格式化</h3>
        <p>针对16或多位格式化输入</p>
          <CardInput
            size="large"
            mask="1111-1111-1111-1111"
            placeholder="1234-1234-1234-1234"
            value={this.state.value}
            onChange={this.onChangeCard}
          />
          <CardInput
            size="normal"
            mask="111111-111111-111111-111111"
            onChange={this.onChangeCard}
          />
      </div>
    );
  }
}
