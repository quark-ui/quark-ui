import { Component } from 'react';
import Button from '../../button';
import message from '../index';

export default class MessageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    message.config({
      top: 60,
      duration: 10,
    });
    return (
      <div className="markdown-block">
      <h3>全局提示</h3>
      <p>各种类型的全局提示，自动消失</p>
      <Button onClick={() => { message.info('这是一条提示信息（信息内容）。'); }}>info</Button>&emsp;
      <Button type="secondary" onClick={() => { message.success('这是一条提示信息（信息内容）。'); }}>success</Button>&emsp;
      <Button type="secondary" onClick={() => { message.error('这是一条提示信息（信息内容）。'); }}>error</Button>&emsp;
      <Button type="secondary" onClick={() => { message.warning('这是一条提示信息（信息内容）。'); }}>warning</Button>
      </div>
    );
  }

}
