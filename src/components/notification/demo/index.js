import { Component } from 'react';
import Button from '../../button';
import notification from '../index';
import Icon from '../../icon';

export default class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    notification.config({
      getContainer:'App'
    });

    const openNotification = () =>{
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
      })
    }

    const openInfo = () =>{
      notification.open({
        type:"info",
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        duration:0
      })
    }
    
    const openSuccess = () =>{
      notification.open({
        type:"success",
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })
    }

    const openError = () =>{
      notification.open({
        type:"error",
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })
    }

    const openWaring = () =>{
      notification.open({
        type:"warning",
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })
    }
    
    const openCaution = () =>{
      notification.open({
        type:"caution",
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })
    }

    const openNoDuration = () =>{
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        duration:0
      })
    }


    const openIcon = () =>{
      notification.open({
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        icon:<Icon style={{
            top: '16px',
            left: '24px',
            position: 'absolute',
          }} 
          name={'clock'}
          size={24}
           />,
      })
    }

    const btnClick=() =>{

    }


    const btn =(
      <div>
        <Button type="primary" size="small" onClick={btnClick}>
          立即更新
        </Button>
        <Button type="secondary" size="small" onClick={btnClick}>
          今晚提醒
        </Button>
      </div>
    )

    const openButton =()=>{
      notification.open({
        type:"warning",
        message: '请更新系统',
        description: '如果描述超过60字，请延长展示时间，一般人的阅读速度为，8-10字每秒。',
        btn,
      })
    }
    
    const btnlink=(
      <a>查看</a>
    )
    const openButtonLink =()=>{
      notification.open({
        type:"warning",
        message: '请更新系统',
        description: '如果描述超过60字，请延长展示时间，一般人的阅读速度为，8-10字每秒。',
        btn:btnlink,
      })
    }

    const openPlacement = (placement) =>{
      notification.open({
        placement,
        message: '需要及时知道的系统通知',
        description: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      })
    }

    return (
      <div className="markdown-block">
        <h3>基本使用</h3>
        <p>最简单的用法，4.5 秒后自动关闭</p>
        <Button onClick={openNotification}>
          open
        </Button>&emsp;
        <h3>带有图标的通知提醒框</h3>
        <p>通知提醒框左侧有图标</p>
        <Button onClick={openInfo}>info</Button>&emsp;
        <Button onClick={openSuccess}>success</Button>&emsp;
        <Button onClick={openError}>error</Button>&emsp;
        <Button onClick={openWaring}>waring</Button>&emsp;
        <Button onClick={openCaution}>caution</Button>&emsp;
        <h3>自定义图标</h3>
        <p>可自定义图标</p>
        <Button onClick={openIcon}>openIcon</Button>&emsp;
        <h3>自动关闭的延时</h3>
        <p>取消4.5秒自动关闭</p>
        <Button onClick={openNoDuration}>open</Button>&emsp;
        <h3>自定义按钮</h3>
        <p>可以置入功能按钮</p>
        <Button onClick={openButton}>openButton</Button>&emsp;
        <Button onClick={openButtonLink}>openLink</Button>&emsp;
        <h3>位置</h3>
        <p>从右上角、右下角、左下角、左上角弹出</p>
        <Button onClick={()=>openPlacement('topRight')}>topRight</Button>&emsp;
        <Button onClick={()=>openPlacement('topLeft')}>topLeft</Button>&emsp;
      </div>
    );
  }
}
