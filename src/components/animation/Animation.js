/**
 * Animation Component
 * @author ryan.bian
 */
import Transition from 'react-transition-group/Transition';

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Animation.css';
import MOTIONS, { TIMING_FUNCTION } from './motions';

class Animation extends PureComponent {

  static displayName = 'Animation'

  static defaultProps = {
    duration: 500,
    motion: 'fade',
    timingFunction: 'linear',
    style: undefined,
    in: PropTypes.bool,
    mountOnEnter: false,
    unmountOnExit: false,
    enter: true,
    exit: true,
    onEnter() {},
    onEntering() {},
    onEntered() {},
    onExit() {},
    onExiting() {},
    onExited() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    duration: PropTypes.number,
    motion: PropTypes.oneOf(MOTIONS),
    timingFunction: PropTypes.oneOf(Object.keys(TIMING_FUNCTION)),
    style: PropTypes.object,
    in: PropTypes.bool,
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    enter: PropTypes.bool,
    exit: PropTypes.bool,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
  }

  render() {
    const { duration, motion, timingFunction, style, children, ...otherProps } = this.props;
    const transitionProps = {
      in: this.props.in,
      timeout: duration,
      ...otherProps,
    };
    const defaultStyle = {
      ...style,
      animationDuration: `${duration}ms`,
      animationTimingFunction: TIMING_FUNCTION[timingFunction],
    };
    return (
      <Transition {...transitionProps}>
        {status => (
          <div
            style={defaultStyle}
            className={classnames(styles[motion], styles[`${motion}--${status}`])}
          >{children}</div>
        )}
      </Transition>
    );
  }
}

export default Animation;
