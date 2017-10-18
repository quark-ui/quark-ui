import Tooltip from '../Tooltip';
import Button from '../../button/Button';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../../constants';
import styles from './index.css';

@CSSModules(styles, { allowMultiple })
export default class TooltipDemo extends Component {

  render() {
  	const ele = (<div><p>1111</p><p>222</p><p>3333</p></div>);

    return (
      <div>
        <div className={styles['top-tooltip']}>
          <div className={styles['top-tooltip-div']}><Tooltip tips="topLeft" placement="topLeft" ><Button type="secondary">上左</Button></Tooltip></div>
          <div className={styles['top-tooltip-div']}><Tooltip tips="top"  placement="top" ><Button type="secondary">上</Button></Tooltip></div>
          <div className={styles['top-tooltip-div']}><Tooltip tips="topRight"  placement="topRight" ><Button type="secondary">上右</Button></Tooltip></div>
        </div>
        <div className={styles['left-tooltip']} >
          <div className={styles['left-tooltip-div']}><Tooltip tips={ele} placement="leftTop" ><Button type="secondary">左上</Button></Tooltip></div>
          <div className={styles['left-tooltip-div']}><Tooltip tips={ele} placement="left" ><Button type="secondary">左</Button></Tooltip></div>
          <div className={styles['left-tooltip-div']}><Tooltip tips={ele}  placement="leftBottom" ><Button type="secondary">左下</Button></Tooltip></div>
        </div>
        <div className={styles['right-tooltip']} >
          <div className={styles['right-tooltip-div']}><Tooltip tips="right" placement="rightTop" ><Button type="secondary">右上</Button></Tooltip></div>
          <div className={styles['right-tooltip-div']}><Tooltip tips="right" placement="right" ><Button type="secondary">右</Button></Tooltip></div>
          <div className={styles['right-tooltip-div']}><Tooltip tips="right"  placement="rightBottom" ><Button type="secondary">左下</Button></Tooltip></div>
        </div>
        <div className={styles['bottom-tooltip']}>
          <div className={styles['bottom-tooltip-div']}><Tooltip tips="bottomLeft" placement="bottomLeft" ><Button type="secondary">下左</Button></Tooltip></div>
          <div className={styles['bottom-tooltip-div']}><Tooltip tips="bottom" placement="bottom"><Button type="secondary">下</Button></Tooltip></div>
          <div className={styles['bottom-tooltip-div']}><Tooltip tips="bottomRight" placement="bottomRight"><Button type="secondary">下右</Button></Tooltip></div>
        </div>
      </div>
      
    );
  }
}
