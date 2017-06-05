import { Component } from 'react';
import Alert from '../Alert';

export default class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const infoProps = {
      type: 'info',
      message: 'info信息',
      description: 'info描info描述info描述info描述info描述info描述info描述info描述info描述info描述info描述述',
    };
    const errorProps = {
      type: 'error',
      message: 'error信息',
      onClose() { console.log('error'); },
    };
    return (
      <div style={{ width: 400 }}>
        <Alert {...infoProps} showIcon/>
        <Alert {...errorProps} closable/>
        <Alert type='warning' message="警告信息" showIcon closable></Alert>
      </div>
    );
  }
}
