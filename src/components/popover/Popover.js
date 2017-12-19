/**
 * Popover Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes, { func } from 'prop-types';
import Trigger from '../trigger/Trigger';
import Button from '../button/Button';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import { on, off } from '../../utils/event';
import styles from './Popover.css';
import PLACEMENT_ENUM from './placements.js';

class Popover extends PureComponent {

  static displayName = 'Popover'

  static defaultProps = {
    title:'',
    action : 'hover',
    placement : 'top',
    hasButton : false,
    popovers : ''
  }

  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
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
    hasButton: PropTypes.bool,
    popovers: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {visible: false};
    
  }

  handleClickTrigger = ()=>{
    // off(document.body, 'click', this.checkClosable);
    // this.props.onPopupVisibleChange(false);
    this.setState({
      visible: false,
    });
  }

  onPopupVisibleChange = (visible) => {
    // console.log('onPopupVisibleChange', visible);
    this.setState({
      visible,
    });
  }

  render() {
    const { action, placement, title, hasButton, popovers, children} = this.props;
    const poptitle = title ? (<p className={styles['popover--popup-title']}>{title}</p>) : '';
    // const button = hasButton ? (<div><Button size='small' type="secondary" onClick={this.handleClickTrigger}>关闭</Button></div>) : '';
    const button = hasButton ? (<a href='javascript:void(0);' onClick={this.handleClickTrigger}>关闭</a>) : '' ;

    const stylename = classnames(styles['popover--popup'], styles[`popover--popup--${placement}`]);

    let popoverProp = {
      action : action,
      placement : PLACEMENT_ENUM[placement].points,
      mouseLeaveDelay : 100,
      popup : (<div  className={stylename}>
        <div className={styles['popover--popup--arrow']}></div>
        <div className={styles['popover--popup--inner']}>
          {title ? <p className={styles['popover--popup--title']}>{title}</p> : ''}
          <div>{popovers}</div>
          {hasButton ? <div className={styles['popover--popup--footer']}>{button}</div> : ''}      
        </div>
      </div>)
    }
    if(hasButton){
      popoverProp.onPopupVisibleChange = this.onPopupVisibleChange;
      popoverProp.popupVisible = this.state.visible;
    }

    return (
      
      <Trigger {...popoverProp}>
          {children}
        </Trigger>
    );
    
  }
}

export default Popover;
