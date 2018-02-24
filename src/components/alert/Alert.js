/**
 * Alert Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import Icon from '../icon';

// import styles from './Alert.css';
const styles = theme => ({
  alert: {
    position: 'relative',
    padding: '16px 48px 16px 50px',
    borderRadius: 4,
    color: 'rgba(0, 0, 0, .65)',
    lineHeight: '18px',
    marginBottom: 10,
    '&.with-description': {
      '& $message': {
        fontSize: 18,
        marginBottom: 14,
      },
      '& $close': {
        top: 10,
      },
    },
    '&.no-icon': {
      padding: '16px 48px 16px 24px',
      '& $description': {
        marginLeft: 0,
      },
    },
  },
  message: {
    display: 'block',
    fontSize: 14,
  },
  description: {
    display: 'block',
    fontSize: 14,
    marginLeft: -24,
  },
  icon: {
    top: 16,
    left: 24,
    position: 'absolute',
  },
  close: {
    fontSize: 12,
    position: 'absolute',
    right: 16,
    top: 18,
    height: 12,
    background: 'none',
    border: '0 none',
    lineHeight: 1,
    overflow: 'hidden',
    cursor: 'pointer',
    color: '#999',
    '&:hover': {
      color: '#666',
    },
  },
  info: {
    backgroundColor: theme['alert-info-bg'],
    color: theme['link-color'],
    border: `1px solid ${theme['link-color']}`,
  },
  success: {
    backgroundColor: theme['alert-success-bg'],
    color: theme['success-color'],
    border: `1px solid ${theme['success-color']}`,
  },
  error: {
    backgroundColor: theme['alert-error-bg'],
    color: theme['fail-color'],
    border: `1px solid ${theme['fail-color']}`,
  },
  warning: {
    backgroundColor: theme['alert-warning-bg'],
    color: theme['warn-color'],
    border: `1px solid ${theme['warn-color']}`,
  },
});

function noop() {}

@injectSheet(styles)
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

  handleClose = (e) => {
    this.setState({
      // closing:false,
      closed: true,
    });

    (this.props.onClose || noop)(e);
  };

  render() {
    const {
      description, type, message, showIcon, closeText, closable, classes 
    } = this.props;

    const alertCls = classnames(classes.alert, {
      [classes[type]]: true,
      [classes['with-description']]: !!description,
      [classes['no-icon']]: !showIcon,
    });

    return this.state.closed ? null : (
      <div className={alertCls}>
        {showIcon ? (
          <Icon className={classes.icon} name={type} size={18} />
        ) : null}
        <span className={classes.message}>{message}</span>
        <span className={classes.description}>{description}</span>
        {closable ? (
          <button
            onClick={this.handleClose}
            className={classes.close}
          >
            {closeText || <Icon name="close" size={14} />}
          </button>
        ) : null}
      </div>
    );
  }
}

export default Alert;
