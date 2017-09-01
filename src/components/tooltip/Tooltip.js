/**
 * Tooltip Component
 * @author lhf
 */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import Trigger from 'quark-ui/trigger';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Tooltip.css';
import PLACEMENT_ENUM from './placements.js';

@CSSModules(styles, { allowMultiple })
class Tooltip extends PureComponent {

  static displayName = 'Tooltip'

  static defaultProps = {
    content: '',
    action : 'hover',
    placement : 'topRight',
    toolElement : ''
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    content: PropTypes.oneOfType([
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
      'bottomCenter',
      'bottomRight',
      'topLeft',
      'topCenter',
      'topRight',
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
    const { action, placement, content, toolElement} = this.props;
      
    return (
      
      <Trigger
          action={action}
          popup={
            <div className={styles['tooltip--popup']}>{content}</div>
          }
          placement={PLACEMENT_ENUM[placement].points}
          mouseLeaveDelay={100}
        >
          {toolElement}
        </Trigger>
    );
  }
}

export default Tooltip;
