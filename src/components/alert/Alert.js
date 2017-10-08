/**
 * Alert Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';

import styles from './Alert.css';

function noop() {}

class Alert extends PureComponent {
  static displayName = 'Alert';

  static defaultProps = {
    type: 'info',
    closable: false,
    showIcon: false,
    closeText: '',
    message: '',
    description: '',
    onClose() {},
  };

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    closable: PropTypes.bool,
    showIcon: PropTypes.bool,
    closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      // closing:true,
      closed: false,
    };
  }

  handleClose = e => {
    e.preventDefault();
    this.setState({
      // closing:false,
      closed: true,
    });

    (this.props.onClose || noop)(e);
  };

  render() {
    const { description, type, message, showIcon, closeText } = this.props;
    const closable = !!closeText;

    const alertCls = classnames({
      [styles.alert]: true,
      [styles[`alert__${type}`]]: true,
      [styles['with-description']]: !!description,
      [styles['no-icon']]: !showIcon,
    });

    return this.state.closed ? null : (
      <div className={alertCls}>
        {showIcon ? (
          <Icon className={styles['alert--icon']} name={type} size={18} />
        ) : null}
        <span className={styles['alert--message']}>{message}</span>
        <span className={styles['alert--description']}>{description}</span>
        {closable ? (
          <span onClick={this.handleClose} className={styles['alert--close']}>
            {closeText || <Icon name="close" size={14} />}
          </span>
        ) : null}
      </div>
    );
  }
}

export default Alert;
