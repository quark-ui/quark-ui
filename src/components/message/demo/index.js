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
      duration: 1000,
    });
    return (
      <div>
        <Button onClick={() => { message.info('这是一条提示信息（信息内容）。'); }}>info</Button>&emsp;
        <Button type="secondary" onClick={() => { message.success('这是一条提示信息（信息内容）。'); }}>success</Button>&emsp;
        <Button type="secondary" onClick={() => { message.error('这是一条提示信息（信息内容）。'); }}>error</Button>&emsp;
        <Button type="secondary" onClick={() => { message.warning('这是一条提示信息（信息内容）。'); }}>warning</Button>
      </div>
    );
  }

}
