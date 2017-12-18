/**
 * Popconfirm Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import Trigger from '../Trigger';
import Button from '../button/Button';
import Popover from '../popover/Popover';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import { on, off } from '../../utils/event';
import styles from './Popconfirm.css';
import PLACEMENT_ENUM from './placements.js';


class Popconfirm extends PureComponent {

  static displayName = 'Popconfirm'

  static defaultProps = {
    action : 'hover',
    placement : 'top',
    content : '',
    confirmVisable : undefined,
    handleOkClickTrigger : null
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    action: PropTypes.oneOf(['click','hover']),
    placement : PropTypes.oneOf([
      'left',
      'right',
      'top',
      'bottom',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'topLeft',
      'topRight',
      'rightTop',
      'rightBottom'
    ]),
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    confirmVisable: PropTypes.bool,
    handleOkClickTrigger: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  onPopupVisibleChange = (visible) => {
    this.setState({
      visible : visible,
    });
  }

  onHandleCancleClickTrigger = ()=>{
    this.setState({
      visible: false,
    });
  }

  onHandleOkClickTrigger = () =>{
    if(this.props.handleOkClickTrigger){
      this.props.handleOkClickTrigger();
      this.setState({
        visible: this.props.confirmVisable,
      });
    }else{
      this.setState({
        visible: false,
      });
    }
  }

  render() {
    const { action, placement, content, confirmVisable, children} = this.props;

    const stylename = classnames(styles['popconfirm'],styles['popconfirm--popup'], styles[`popconfirm--popup--${placement}`]);
    let popcontent = {
      action : action,
      placement : PLACEMENT_ENUM[placement].points,
      mouseLeaveDelay : 100,
      onPopupVisibleChange : this.onPopupVisibleChange,
      popupVisible : this.state.visible ,
      popup : (<div  className={stylename}>
      <div className={styles['popconfirm--popup--arrow']}></div>
      <div className={styles['popconfirm--popup--inner']}>
        <div>{content}</div>
        <div className={styles['popconfirm--popup--footer']}>
          <Button size='small' type="secondary" onClick={this.onHandleCancleClickTrigger}>取消</Button>
          <div className={styles['popconfirm-btn']}><Button size='small' type="primary" onClick={this.onHandleOkClickTrigger} >确定</Button></div>
        </div>
      </div>
    </div>)
    }

    return (
      <Trigger {...popcontent}>{children}</Trigger>
    );
  }
}

export default Popconfirm;
