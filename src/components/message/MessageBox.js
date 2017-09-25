/**
 * Message Component
 * @author grootfish
 */

import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import uniqueId from 'lodash/uniqueId';
import assign from 'object-assign';
import Message from './Message';
import styles from './Message.css';

class MessageBox extends PureComponent {
  static displayName = 'MessageBox'

  static defaultProps = {}

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  add = (message) => {
    const key = message.key || uniqueId();
    assign(message, {
      key,
    });
    this.setState((preState) => {
      const messages = preState.messages;
      if (!messages.filter(v => v.key === key).length) {
        return {
          messages: messages.concat(message),
        };
      }
      return { messages };
    });
  }

  remove = (key) => {
    this.setState(preState => ({
      messages: preState.messages.filter(message => message.key !== key),
    }));
  }

  render() {
    const props = this.props;
    const Nodes = this.state.messages.map((message) => {
      const onClose = () => {
        if (message.onClose) {
          message.onClose();
        }
        this.remove(message.key);
      };

      return (
        <Message {...message} onClose={onClose}>
          {message.content}
        </Message>
      );
    });

    return (
      <div className={styles['message--box']} style={props.style}>
        {Nodes}
      </div>
    );
  }
}

MessageBox.newInstance = function newInstance(properties) {
  const { getContainer, ...props } = properties || {};
  let div;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  const DOM = ReactDOM;
  const messageBox = DOM.render(<MessageBox {...props} />, div);
  return {
    msg(noticeProps) {
      messageBox.add(noticeProps);
    },
    removeMsg(key) {
      messageBox.remove(key);
    },
    component: messageBox,
    destroy() {
      DOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};

export default MessageBox;
