/**
 * Alert Component
 * @author yanwei
 */
import { PureComponent } from 'react';
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

    const cls = classnames({
      'notification--box': 1,
      [`notification--box--${placement}`]: placement,
    });
    return (
      <div styleName={cls} style={style}>
        {Nodes}
      </div>
    );
  }
}

NotificationBox.newInstance = function newInstance(properties) {
  const { getContainer, ...props } = properties || {};
  let div;

  div = document.createElement('div');
  if (getContainer) {
    document.getElementById(getContainer).appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  const DOM = ReactDOM;
  const notificationBox = DOM.render(<NotificationBox {...props} />, div);

  return {
    addNotice(noticeProps) {
      notificationBox.add(noticeProps);
    },
    removeNotice(key) {
      notificationBox.remove(key);
    },
    destroy() {
      DOM.unmountComponentAtNode(div);
      if (!getContainer) {
        document.body.removeChild(div);
      }
    },
  };
};

export default NotificationBox;
