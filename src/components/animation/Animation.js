/**
 * Animation Component
 * @author ryan.bian
 */
import Transition from 'react-transition-group/Transition';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import MOTIONS, { TIMING_FUNCTION } from './motions';

const styles = () => ({
  'fade--entering': {
    animationName: 'fadeIn',
    opacity: 1,
  },
  'fade--entered': {
    opacity: 1,
  },
  'fade--exiting': {
    animationName: 'fadeOut',
    opacity: 0,
  },
  'fade--exited': {
    opacity: 0,
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  '@keyframes fadeOut': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  flipX: {
    backfaceVisibility: ['visible', '!important'],
  },
  'flipX--entering': {
    animationName: 'flipInX',
    opacity: 1,
    transform: 'perspective(400px)',
  },
  'flipX--entered': {
    opacity: 1,
    transform: 'perspective(400px)',
  },
  'flipX--exiting': {
    animationName: 'flipOutX',
    opacity: 0,
    transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
  },
  'flipX--exited': {
    opacity: 0,
    transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
  },
  '@keyframes flipInX': {
    from: {
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      animationTimingFunction: 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
    },
    to: {
      transform: 'perspective(400px)',
    },
  },
  '@keyframes flipOutX': {
    from: {
      transform: 'perspective(400px)',
    },
    '30%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 1,
    },
    to: {
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
    },
  },
  'slideUp--entering': {
    animationName: 'slideInUp',
    transform: 'translate3d(0, 0, 0)',
  },
  'slideUp--entered': {
    transform: 'translate3d(0, 0, 0)',
  },
  'slideUp--exiting': {
    animationName: 'slideOutUp',
    transform: 'translate3d(0, -100%, 0)',
  },
  'slideUp--exited': {
    visibility: 'hidden',
    transform: 'translate3d(0, -100%, 0)',
  },
  '@keyframes slideInUp': {
    from: {
      transform: 'translate3d(0, 100%, 0)',
      visibility: 'visible',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  '@keyframes slideOutUp': {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(0, -100%, 0)',
    },
  },
  'slideDown--entering': {
    animationName: 'slideInDown',
    transform: 'translate3d(0, 0, 0)',
  },
  'slideDown--entered': {
    transform: 'translate3d(0, 0, 0)',
  },
  'slideDown--exiting': {
    animationName: 'slideOutDown',
    transform: 'translate3d(0, 100%, 0)',
  },
  'slideDown--exited': {
    visibility: 'hidden',
    transform: 'translate3d(0, 100%, 0)',
  },
  '@keyframes slideInDown': {
    from: {
      transform: 'translate3d(0, -100%, 0)',
      visibility: 'visible',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  '@keyframes slideOutDown': {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(0, 100%, 0)',
    },
  },
  'zoom--entering': {
    animationName: 'zoomIn',
    opacity: 1,
  },
  'zoom--entered': {
    opacity: 1,
  },
  'zoom--exiting': {
    animationName: 'zoomOut',
    opacity: 0,
  },
  'zoom--exited': {
    opacity: 0,
  },
  '@keyframes zoomIn': {
    from: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    '50%': {
      opacity: 1,
    },
  },
  '@keyframes zoomOut': {
    from: {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    to: {
      opacity: 0,
    },
  },
  'bounce--entering': {
    animationName: 'bounceIn',
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
  },
  'bounce--entered': {
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
  },
  'bounce--exiting': {
    animationName: 'bounceOut',
    opacity: 0,
    transform: 'scale3d(.3, .3, .3)',
  },
  'bounce--exited': {
    opacity: 0,
    transform: 'scale3d(.3, .3, .3)',
  },
  '@keyframes bounceIn': {
    'from, 20%, 40%, 60%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)',
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
    },
  },
  '@keyframes bounceOut': {
    '20%': {
      transform: 'scale3d(.9, .9, .9)',
    },
    '50%, 55%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
  },
});

@injectSheet(styles)
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
    const {
      classes, duration, motion, timingFunction, style, children, ...otherProps 
    } = this.props;
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
            className={classnames(classes[motion], classes[`${motion}--${status}`])}
          >{children}
          </div>
        )}
      </Transition>
    );
  }
}

export default Animation;
