import { Component } from 'react';
import Button from '../../button';
import notification from '../index';

export default class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    notification.config({
      top: 60,
      duration: 10,
    });


    return (
      <div className="markdown-block">
        <h3>全局展示通知提醒信息</h3>
        <Button onClick={() => { notification.info('This is the content of the notification. This is the content of the notification. This is the content of the notification.'); }}>info</Button>&emsp;
        <Button type="secondary" onClick={() => { notification.success('This is the content of the notification. This is the content of the notification. This is the content of the notification.'); }}>success</Button>&emsp;
        <Button type="secondary" onClick={() => { notification.error('This is the content of the notification. This is the content of the notification. This is the content of the notification.'); }}>error</Button>&emsp;
        <Button type="secondary" onClick={() => { notification.warning('This is the content of the notification. This is the content of the notification. This is the content of the notification.'); }}>warning</Button>
      </div>
    );
  }
}
