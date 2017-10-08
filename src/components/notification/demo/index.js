import { Component } from 'react';
import Button from '../../button';
import notification from '../index';
import Icon from '../../icon';
import message from '../../message';


export default class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const config = () => {
      notification.config({
        placement: 'bottomRight',
        bottom: 50,
        duration: 0,
        // getContainer: 'App',
      });
      message.success('全局配置成功');
    };

    const openNotification = () => {
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openInfo = () => {
      notification.open({
        type: 'info',
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openSuccess = () => {
      notification.open({
        type: 'success',
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openError = () => {
      notification.open({
        type: 'error',
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openWaring = () => {
      notification.open({
        type: 'warning',
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openCaution = () => {
      notification.open({
        type: 'caution',
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    const openNoDuration = () => {
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        duration: 0,
      });
    };

    const openIcon = () => {
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        duration: 0,
        icon: <Icon
          style={{
            width: '34px',
            height: '34px',
            top: '16px',
            left: '24px',
            position: 'absolute',
          }}
          name={'clock'}
        />,
      });
    };

    const openButton = () => {
      const key = `open${Date.now()}`;
      const btnClick = () => {
        notification.close(key);
      };
      const btn = (
        <div>
          <Button type="primary" onClick={btnClick}>
          立即更新
          </Button>
        &emsp;
          <Button type="secondary" onClick={btnClick}>
          今晚提醒
          </Button>
        </div>
      );

      notification.open({
        type: 'warning',
        message: '请更新系统',
        description: '如果描述超过60字，请延长展示时间，一般人的阅读速度为，8-10字每秒。',
        key,
        btn,
      });
    };


    const openButtonLink = () => {
      const btnlink = (
        <a href="./notification">查看</a>
      );
      notification.open({
        type: 'warning',
        message: '请更新系统',
        description: '如果描述超过60字，请延长展示时间，一般人的阅读速度为，8-10字每秒。',
        btn: btnlink,
      });
    };

    const openPlacement = (placement) => {
      notification.open({
        placement,
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      });
    };

    return (
      <div className="markdown-block">
        <h3>基本使用</h3>
        <p>最简单的用法，4.5 秒后自动关闭</p>
        <Button onClick={openNotification}>显示通知</Button>&emsp;
        <h3>带有图标的通知提醒框</h3>
        <p>通知提醒框左侧有图标</p>
        <Button onClick={openInfo}>消息</Button>&emsp;
        <Button onClick={openSuccess}>成功</Button>&emsp;
        <Button onClick={openError}>错误</Button>&emsp;
        <Button onClick={openWaring}>警告</Button>&emsp;
        {/* <Button onClick={openCaution}>自定义</Button>&emsp; */}
        <h3>自定义图标</h3>
        <p>可自定义图标</p>
        <Button onClick={openIcon}>自定义</Button>&emsp;
        <h3>自动关闭的延时</h3>
        <p>取消4.5秒自动关闭</p>
        <Button onClick={openNoDuration}>显示通知</Button>&emsp;
        <h3>自定义按钮</h3>
        <p>可以置入功能按钮</p>
        <Button onClick={openButton}>按钮功能</Button>&emsp;
        <Button onClick={openButtonLink}>链接功能</Button>&emsp;
        <h3>位置</h3>
        <p>从右上角、右下角、左下角、左上角弹出</p>
        <Button onClick={() => openPlacement('topRight')}>右上角</Button>&emsp;
        <Button onClick={() => openPlacement('topLeft')}>左上角</Button>&emsp;
        <Button onClick={() => openPlacement('bottomLeft')}>左下角</Button>&emsp;
        <Button onClick={() => openPlacement('bottomRight')}>右下角</Button>&emsp;
        <h3>全局配置</h3>
        <p>在调用前提前配置，全局一次生效</p>
        <p>
          {`notification.config({
            placement: 'bottomRight',
            bottom:50,
            duration:0,
            getContainer:'App'
          });`}
        </p>
        <Button onClick={() => config()}>配置</Button>&emsp;
        <Button onClick={openNotification}>显示通知</Button>&emsp;
      </div>
    );
  }
}
