import Popover from '../Popover';
import { Component } from 'react';
import Button from '../../button/Button';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../../constants';
import styles from './index.css';

export default class PopoverDemo extends Component {
  render() {
    return (
      <div>
        <div className={styles['top-tooltip']}>
          <div className={styles['top-tooltip-div']}><Popover title="标题" popovers="topLeft" placement="topLeft" hasButton="true" ><Button type="secondary">上左</Button></Popover></div>
          <div className={styles['top-tooltip-div']}><Popover popovers="top"  placement="top" ><Button type="secondary">上</Button></Popover></div>
          <div className={styles['top-tooltip-div']}><Popover popovers="topRight"  placement="topRight" ><Button type="secondary">上右</Button></Popover></div>
        </div>
        <div className={styles['left-tooltip']} >
          <div className={styles['left-tooltip-div']}><Popover popovers='leftTop' placement="leftTop" ><Button type="secondary">左上</Button></Popover></div>
          <div className={styles['left-tooltip-div']}><Popover popovers='left' placement="left" ><Button type="secondary">左</Button></Popover></div>
          <div className={styles['left-tooltip-div']}><Popover popovers='leftBottom'  placement="leftBottom" ><Button type="secondary">左下</Button></Popover></div>
        </div>
        <div className={styles['right-tooltip']} >
          <div className={styles['right-tooltip-div']}><Popover popovers="rightTop" placement="rightTop" ><Button type="secondary">右上</Button></Popover></div>
          <div className={styles['right-tooltip-div']}><Popover popovers="right" placement="right" ><Button type="secondary">右</Button></Popover></div>
          <div className={styles['right-tooltip-div']}><Popover popovers="rightBottom"  placement="rightBottom" ><Button type="secondary">左下</Button></Popover></div>
        </div>
        <div className={styles['bottom-tooltip']}>
          <div className={styles['bottom-tooltip-div']}><Popover popovers="bottomLeft" placement="bottomLeft" ><Button type="secondary">下左</Button></Popover></div>
          <div className={styles['bottom-tooltip-div']}><Popover popovers="bottom" placement="bottom"><Button type="secondary">下</Button></Popover></div>
          <div className={styles['bottom-tooltip-div']}><Popover popovers="bottomRight" placement="bottomRight"><Button type="secondary">下右</Button></Popover></div>
        </div>
      </div>
    );
  }
}
