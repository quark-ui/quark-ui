/**
 * Popup Component
 * @author ryan.bian
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import renderTo from '../../enhancer/render-to';
import styles from './Trigger.css';
import Animation from '../animation';

@renderTo()
export default class Popup extends PureComponent {

  static displayName = 'Popup'

  static defaultProps = {
    position: [0, 0],
    popupRef: null,
    visible: false,
    onMouseEnter() {},
    onMouseLeave() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    popupRef: PropTypes.func,
    visible: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.props.visible) {
      this.setState({
        popupVisible: true,
      });
    }
  }

  render() {
    const { children, popupRef, position, visible, ...otherProps } = this.props;
    const { popupVisible } = this.state;
    const wrapProps = {
      ref: popupRef,
      className: classnames(styles.popup, {
        [styles['popup--hidden']]: !popupVisible,
      }),
      // style: {
      //   left: position[0],
      //   top: position[1],
      // },
      ...otherProps,
    };
    return (
      <Animation
        duration={300}
        timingFunction={'ease-in-out'}
        in={visible}
        motion={'fade'}
        mountOnEnter
        appear
        onExited={() => {
          this.setState({
            popupVisible: false,
          });
        }}
        style={{
          position: 'absolute',
          left: position[0],
          top: position[1],
        }}
      >
        <div {...wrapProps}>
          {children}
        </div>
      </Animation>
    );
  }
}
