/**
 * Message Component
 * @author grootfish
 */

import { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import uniqueId from 'lodash/uniqueId';
import assign from 'object-assign';
import { allowMultiple } from '../../constants';
import Message from './Message';
import styles from './Message.css';

@CSSModules(styles, { allowMultiple })
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
      <div styleName="message--box">
        {Nodes}
      </div>
    );
  }
}

export default MessageBox;
