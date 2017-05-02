import Message from '../index';
import Button from 'quark-ui/button';
import { Component } from 'react';
const message = Message.newInstance({});

export default class MessageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openMsg() {
    message.error('error我马上消失', () => { message.info('info我又回来了') },2);
  }
  render() {
    return (
      <div>
        <Button onClick={this.openMsg}>msg</Button>
      </div>
    );
  }
  
}
