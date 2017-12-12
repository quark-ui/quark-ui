import { Component } from 'react';
import Popconfirm from '../Popconfirm';
import Popover from '../../popover/Popover';
import Icon from '../../icon/Icon';
import Button from '../../button/Button';
import { allowMultiple } from '../../../constants';
import styles from './index.css';

export default class PopconfirmDemo extends Component {
  state = {visible : false};
  handleOkClickTrigger = () =>{
    this.setState({
      visible: false,
    });
  }
  render() {
    const ele = (<div><p>top</p><p>这是一个气泡确认框</p></div>);
    const warning = (<div><Icon size={15} name='warning' color='#f9d900'></Icon><span>这是一个气泡确认框，确定要这样做吗？</span></div>);
    return (
      <div>
        <div className={styles['top-tooltip']}>
          <div className={styles['top-tooltip-div']}><Popconfirm content={warning} placement="topLeft" handleOkClickTrigger={this.handleOkClickTrigger} ><Button type="secondary">上左</Button></Popconfirm></div>
          <div className={styles['top-tooltip-div']}><Popconfirm content={warning} placement="top" action="click" handleOkClickTrigger={this.handleOkClickTrigger} confirmVisable = {this.state.visible}><Button type="secondary">点击</Button></Popconfirm></div>
          <div className={styles['top-tooltip-div']}><Popconfirm content={ele}   placement="topRight" ><Button type="secondary">上右</Button></Popconfirm></div>
        </div>
        <div className={styles['left-tooltip']} >
          <div className={styles['left-tooltip-div']}><Popconfirm content="leftTop"  placement="leftTop" ><Button type="secondary">左上</Button></Popconfirm></div>
          <div className={styles['left-tooltip-div']}><Popconfirm content='left' placement="left" ><Button type="secondary">左</Button></Popconfirm></div>
          <div className={styles['left-tooltip-div']}><Popconfirm content='leftBottom'  placement="leftBottom" ><Button type="secondary">左下</Button></Popconfirm></div>
        </div>
        <div className={styles['right-tooltip']} >
          <div className={styles['right-tooltip-div']}><Popconfirm content="rightTop" placement="rightTop" ><Button type="secondary">右上</Button></Popconfirm></div>
          <div className={styles['right-tooltip-div']}><Popconfirm content="right" placement="right" ><Button type="secondary">右</Button></Popconfirm></div>
          <div className={styles['right-tooltip-div']}><Popconfirm content="rightBottom"  placement="rightBottom" ><Button type="secondary">左下</Button></Popconfirm></div>
        </div>
        <div className={styles['bottom-tooltip']}>
          <div className={styles['bottom-tooltip-div']}><Popconfirm content="bottomLeft" placement="bottomLeft" ><Button type="secondary">下左</Button></Popconfirm></div>
          <div className={styles['bottom-tooltip-div']}><Popconfirm content="bottom" placement="bottom"><Button type="secondary">下</Button></Popconfirm></div>
          <div className={styles['bottom-tooltip-div']}><Popconfirm content="bottomRight" placement="bottomRight"><Button type="secondary">下右</Button></Popconfirm></div>
        </div>
      </div>
    );
  }
}
