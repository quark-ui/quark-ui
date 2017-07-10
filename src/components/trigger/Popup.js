/**
 * Popup Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { spring, TransitionMotion, presets } from 'react-motion';
import renderTo from '../../enhancer/render-to';
import styles from './Trigger.css';

@renderTo()
export default class Popup extends PureComponent {

  static displayName = 'Popup'

  static defaultProps = {
    position: [0, 0],
    popupRef: null,
    visible: false,
    ready: false,
    onMouseEnter() {},
    onMouseLeave() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    popupRef: PropTypes.func,
    visible: PropTypes.bool,
    ready: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }
  willLeave() {
    return {
      opacity: spring(0, presets.stiff),
    };
  }
  willEnter() {
    return {
      opacity: 0,
    };
  }
  render() {
    const { children, popupRef, position, visible, ready, ...otherProps } = this.props;
    const wrapProps = {
      ref: popupRef,
      className: styles.popup,
      style: {
        left: position[0],
        top: position[1],
        visibility: ready ? 'visible' : 'hidden',
      },
    };
    const innerProps = {
      // style: stylePos,
      ...otherProps,
    };
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        willEnter={this.willEnter}
        styles={visible ? [
          {
            key: 'popup',
            style: {
              opacity: spring(1, presets.stiff),
            },
          },
        ] : []}
      >
        {
          interpolatedStyles =>
            <div {...wrapProps}>
              {
                interpolatedStyles.map(({ key, style }) =>
                  <div
                    key={key}
                    style={style}
                    {...innerProps}
                  >
                    {children}
                  </div>,
                )
              }
            </div>
        }
      </TransitionMotion>
    );
  }
}
