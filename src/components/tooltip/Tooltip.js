/**
 * Tooltip Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import Trigger from '../trigger';
import classnames from 'classnames';
// import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Tooltip.css';
import PLACEMENT_ENUM from './placements.js';

// @CSSModules(styles, { allowMultiple })
class Tooltip extends PureComponent {

  static displayName = 'Tooltip'

  static defaultProps = {
    tips: '',
    action : 'hover',
    placement : 'top',
    toolElement : ''
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    tips: PropTypes.oneOfType([
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
    toolElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ])
  }



  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { action, placement, tips, toolElement,children} = this.props;
    const stylename = classnames(styles['tooltip--popup'],styles[`tooltip--popup--${placement}`]);

    return (
      
      <Trigger
          style={{display:'inline-block'}}
          action={action}
          popup={
            <div  className={stylename}>
              <div className={styles['tooltip--popup--arrow']}></div>
              <div className={styles['tooltip--popup--inner']}>{tips}</div>
            </div>
          }
          placement={PLACEMENT_ENUM[placement].points}
          mouseLeaveDelay={100}
        >
          {toolElement ? toolElement : children}
        </Trigger>
    );
  }
}

export default Tooltip;
