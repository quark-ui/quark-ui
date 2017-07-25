/**
 * Animation Component
 * @author ryan.bian
 */
import Transition from 'react-transition-group/Transition';

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Animation.css';
import MOTIONS, { TIMING_FUNCTION } from './motions';

console.log(MOTIONS, TIMING_FUNCTION);

@CSSModules(styles, { allowMultiple })
class Animation extends PureComponent {

  static displayName = 'Animation'

  static defaultProps = {
    duration: 500,
    motion: 'fade',
    timingFunction: 'linear',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { duration, motion, timingFunction } = this.props;
    const transitionProps = {
      in: this.props.in,
      timeout: duration,
    };
    const defaultStyle = {
      transition: `all ${duration}ms ${TIMING_FUNCTION[timingFunction]}`,
      ...MOTIONS[motion].default,
    };
    return (
      <Transition {...transitionProps}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...MOTIONS[motion][state],
            }}
          >{state}</div>
        )}
      </Transition>
    );
  }
}

export default Animation;
