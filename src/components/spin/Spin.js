/**
 * Spin Component
 * @author Northerner
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Animate from 'rc-animate';
import styles from './Spin.css';

class Spin extends PureComponent {
  static displayName = 'Spin'

  static defaultProps = {
    size: 'default',
    spinning: true,
    delay: 0,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    size: PropTypes.oneOf([
      'small',
      'large',
      'default',
    ]),
    spinning: PropTypes.bool,
    delay: PropTypes.number,
  }

  debounceTimeout = null
  delayTimeout = null

  constructor(props) {
    super(props);
    this.state = {
      spinning: props.spinning,
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentSpinning = this.props.spinning;
    const spinning = nextProps.spinning;
    const { delay } = this.props;

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    if (currentSpinning && !spinning) {
      this.debounceTimeout = setTimeout(() => this.setState({ spinning }), 300);
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    } else if (spinning && delay && !isNaN(Number(delay))) {
      this.delayTimeout = setTimeout(() => this.setState({ spinning }), delay);
    } else {
      this.setState({ spinning });
    }
  }

  isNestedPattern() {
    return !!(this.props && this.props.children);
  }

  render() {
    const { children, size, tip, delay } = this.props;
    const { spinning } = this.state;

    const spinProps = {
      className: styles[`Spin ${size === 'default' ? '' : size}`],
    };
    const conProps = {
      className: styles[`qui-spin-container ${spinning ? 'qui-spin-blur' : ''}`],
      key: 'container',
    };
    const spinElement = (
      <div {...spinProps}>
        <span className={styles['qui-spin-dot']}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
        {
          tip ? <p className={styles['qui-spin-text']}>{tip}</p> : null
        }
      </div>
    );

    if (this.isNestedPattern()) {
      return (
        <Animate
          component="div"
          transitionName="fade"
          className={styles['qui-spin-loading-wrap']}
        >
          {spinning && <div key={'wrap'} className={styles['qui-spin-wrap']}>{spinElement}</div>}
          <div {...conProps}>
            {children}
          </div>
        </Animate>
      );
    }

    return spinElement;
  }
}

export default Spin;
