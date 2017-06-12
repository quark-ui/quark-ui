import { Component } from 'react';
import Alert from '../index';

export default class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const successProps = {
      type: 'success',
      message: '这是一条正确的提示信息(信息内容)。',
    };
    const infoProps = {
      type: 'info',
      message: 'info信息',
      description: 'info描info描述info描述info描述info描述info描述info描述info描述info描述info描述info描述述',
    };
    const errorProps = {
      type: 'error',
      message: '这是一条错误的提示信息(信息内容)。',
      onClose() { console.log('error'); },
    };
    const warnProps = {
      type: 'warning',
      message: '这是一条错误的提示信息(信息内容)。',
    };

    return (
      <div>
        <h3>基本的提示</h3>
        <Alert {...successProps} />
        <h3>可关闭的提示</h3>
        <Alert {...errorProps} closable />
        <Alert type="warning" message="这是一条警告的提示信息(信息内容)。" showIcon closable closeText="close me" />
        <h3>带图标的提示</h3>
        <Alert {...infoProps} showIcon />
        <Alert {...successProps} showIcon />
        <Alert {...errorProps} showIcon />
        <Alert {...warnProps} showIcon />
        <h3>含有辅助性文字介绍的提示</h3>
        <Alert {...infoProps} closable showIcon />
        <Alert type="error" message="error信息" description="这是一条错误的提示信息(信息内容)。" />
      </div>
    );
  }
}
