/**
 * Alert Component
 * @author yanwei
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';

import styles from './Notification.css';

class Notice extends PureComponent {
  static displayName = 'Notice';

  static defaultProps = {
    onEnd() {},
    onClose() {},
    duration: 4.5,
  };

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    message: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    btn: PropTypes.node,
    icon: PropTypes.node,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.handleClose();
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
  };

  handleClose = () => {
    this.clearCloseTimer();
    this.props.onClose();
  };

  render() {
    const props = this.props;
    const { type, icon, btn, children } = props;
    const cls = classnames({
      [styles.notification]: 1,
      [styles['notification--icon']]: type || icon,
    });

    return (
      <div className={cls} style={props.style}>
        <div className={styles['notification--content']}>
          {type ? (
            <Icon className={
              classnames({
                [styles.notification__icon]: 1,
                [styles[`notification--icon--${type}`]]: type,
              })} 
            name={type} size={24} />
          ) : null}
          {icon || null}
          <div className={styles.notification__mes}>{props.message}</div>
          <div className={styles.notification__des}>{props.description}</div>
          {btn ? <div className={styles.notification__btn}>{btn}</div> : null}
        </div>
        <span
          onClick={this.handleClose}
          className={styles['notification--close']}
        >
          <Icon name="close" size={14} />
        </span>
      </div>
    );
  }
}

export default Notice;
