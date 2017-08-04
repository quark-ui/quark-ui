/**
 * Alert Component
 * @author yanwei
 */
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import uniqueId from 'lodash/uniqueId';
import assign from 'object-assign';
import Notice from './Notice';

import { allowMultiple } from '../../constants';
import styles from './Notification.css';


@CSSModules(styles, { allowMultiple })
class NotificationBox extends PureComponent {

  static displayName = 'NotificationBox'

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      notices:[],
    };
  }

  add=(notice)=>{
    const key = notice.key || uniqueId();
    assign(notice, {
      key,
    });

    this.setState(preState =>{
      const notices = preState.notices;

      if(!notices.filter(v=>v.key === key).length){
        return {
          notices: notices.concat(notice),
        }
      }

      return { notices };

    })
  }

  remove = (key) =>{
    this.setState(preState =>{
      return {
        notices:preState.notices.filter(notice => notice.key !== key),
      }
    })
  }

  render() {
    const props = this.props;
    const Nodes = this.state.notices.map((notice) => {
      const onClose = () => {
        if (notice.onClose) {
          notice.onClose();
        }
        this.remove(notice.key);
      };

      return (
        <Notice {...notice} onClose={onClose}>
          {notice.content}
        </Notice>
      );
    });

    return (
      <div styleName="notification--box" style={props.style}>
        {Nodes}
      </div> 
    )

  }
}


NotificationBox.newInstance = function newInstance(properties){
  const {getContainer, ...props } = properties || {};
  let div;
  if(getContainer){
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  const DOM = ReactDOM;
  const notificationBox = DOM.render(<NotificationBox {...props} />,div);

    return {
      notice(noticeProps) {
        notificationBox.add(noticeProps);
      },
      removeNotice(key) {
        notificationBox.remove(key);
      },
      component: notificationBox,
      destroy() {
        DOM.unmountComponentAtNode(div);
        if (!getContainer) {
          document.body.removeChild(div);
        }
      },
    };
}

export default NotificationBox;
