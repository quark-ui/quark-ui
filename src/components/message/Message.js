/**
 * Message Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import styles from './Message.css';

class Message extends PureComponent {

  static displayName = 'Message'

  static defaultProps = {
    onClose() {},
    duration: 1.8,
    type: 'info',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close = () => {
    this.clearCloseTimer();
    this.props.onClose();
  }


  render() {
    const { type, children } = this.props;

    return (
      <div className={classnames(styles.message, styles[`message__${type}`])}>
        <span className={styles['message--icon']}><Icon name={type} size={14} /></span>
        <div className={styles['message--content']}>
          {children}
        </div>
      </div>
    );
  }
}

export default Message;
