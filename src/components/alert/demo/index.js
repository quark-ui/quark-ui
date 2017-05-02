import Alert from '../Alert';
import { Component } from 'react';

export default class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const infoProps = {
      type: 'info',
      closeText: 'X',
      message: 'info信息',
      description: 'info描述',
      onClose() { console.log('info') },
    };
    const errorProps = {
      type: 'error',
      closable: true,
      closeText: '关闭',
      message: 'error信息',
      onClose() { console.log('error') },
    }
    return (
      <div style = {{width:400}}>
        <Alert {...infoProps}></Alert>
        <Alert {...errorProps}></Alert>
      </div>
    );
  }
}
