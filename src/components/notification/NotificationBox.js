/**
 * Alert Component
 * @author yanwei
 */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import assign from 'object-assign';
import Notice from './Notice';
import styles from './Notification.css';

class NotificationBox extends PureComponent {
  static displayName = 'NotificationBox';

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      notices: [],
    };
  }

  add = (notice) => {
    const key = notice.key || uniqueId();
    assign(notice, {
      key,
    });

    this.setState((preState) => {
      const notices = preState.notices;
      if (!notices.filter(v => v.key === key).length) {
        return {
          notices: notices.concat(notice),
        };
      }
      return { notices };
    });
  };

  remove = (key) => {
    this.setState(preState => ({
      notices: preState.notices.filter(notice => notice.key !== key),
    }));
  };

  render() {
    const props = this.props;
    const { placement, style } = props;

    const Nodes = this.state.notices.map((notice) => {
      const onClose = () => {
        if (notice.onClose) {
          notice.onClose();
        }
        this.remove(notice.key);
      };
      return <Notice {...notice} onClose={onClose} />;
    });

    const notificationProps = {
      style,
      className: classnames({
        [styles['notification--box']]: 1,
        [styles[`notification--box--${placement}`]]: placement,
      }),
    };
    return (
      <div {...notificationProps}>
        {Nodes}
      </div>
    );
  }
}

NotificationBox.newInstance = function newInstance(properties) {
  const { getContainer, ...props } = properties || {};
  const container = document.createElement('div');
  if (getContainer) {
    document.getElementById(getContainer).appendChild(container);
  } else {
    document.body.appendChild(container);
  }
  const DOM = ReactDOM;
  const notificationBox = DOM.render(<NotificationBox {...props} />, container);

  return {
    addNotice(noticeProps) {
      notificationBox.add(noticeProps);
    },
    removeNotice(key) {
      notificationBox.remove(key);
    },
    destroy() {
      DOM.unmountComponentAtNode(container);
      if (!getContainer) {
        document.body.removeChild(container);
      }
    },
  };
};

export default NotificationBox;
