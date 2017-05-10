import message from '../index';
import Button from 'quark-ui/button';
import { Component } from 'react';

export default class MessageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div>
        <Button onClick={()=>{message.info('这是一条提示信息（信息内容）。');}}>info</Button>
        <Button type="secondary" onClick={()=>{message.success('这是一条提示信息（信息内容）。');}}>success</Button>
        <Button type="secondary" onClick={()=>{message.error('这是一条提示信息（信息内容）。');}}>error</Button>
        <Button type="secondary" onClick={()=>{message.warning('这是一条提示信息（信息内容）。');}}>warning</Button>
      </div>
    );
  }
  
}
