import Message from '../index';
import Button from 'quark-ui/button';
import { Component } from 'react';
const message = Message.newInstance({});

export default class MessageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div>
        <Button onClick={()=>{message.info('info信息');}}>info</Button>
        <Button type="secondary" onClick={()=>{message.success('info信息');}}>success</Button>
        <Button type="secondary" onClick={()=>{message.error('info信息');}}>error</Button>
        <Button type="secondary" onClick={()=>{message.warning('info信息');}}>warning</Button>
      </div>
    );
  }
  
}
