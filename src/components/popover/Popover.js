/**
 * Popover Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import Trigger from '../Trigger';
import Button from '../Button';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Popover.css';
import PLACEMENT_ENUM from './placements.js';


@CSSModules(styles, { allowMultiple })
class Popover extends PureComponent {

  static displayName = 'Popover'

  static defaultProps = {
    title:'',
    action : 'hover',
    placement : 'top',
    hasButton : false,
    popovers : ''
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
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
    this.state = {};
  }

  render() {
    const { action, placement, title, hasButton, popovers, children} = this.props;
    const poptitle = title ? (<p className={styles['popover--popup-title']}>{title}</p>) : '';
    const button = hasButton ? (<div><Button size='small' type="secondary">关闭</Button></div>) : '';

    const stylename = classnames(styles['popover--popup'], styles[`popover--popup--${placement}`]);

    return (
      
      <Trigger
          action={action}
          popup={
            <div  className={stylename}>
              <div className={styles['popover--popup--arrow']}></div>
              <div className={styles['popover--popup--inner']}>
                {title ? <p className={styles['popover--popup-title']}>{title}</p> : ''}
                <div>{popovers}</div>
                <div>{button}</div>      
              </div>
            </div>
          }
          placement={PLACEMENT_ENUM[placement].points}
          mouseLeaveDelay={100}
        >
          {children}
        </Trigger>
    );
    
  }
}

export default Popover;
