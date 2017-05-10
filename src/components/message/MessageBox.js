/**
 * Message Component
 * @author grootfish
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import Message from './Message';
import styles from './Message.css';

let seed = 0;
const now = Date.now();
function getUuid() {
  return `${now}_${seed++}`;
}

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
    const key = message.key = message.key || getUuid();
    this.setState((preState) => {
      const messages = preState.messages;
      if (!messages.filter(v => v.key === key).length) {
        return {
          messages: messages.concat(message)
        }
      }
    });
  }

  remove = (key) => {
    this.setState((preState) => {
      return {
        messages: preState.messages.filter(message => message.key !== key)
      }
    });
  }

  render() {
    const props = this.props;
    const Nodes = this.state.messages.map((message) => {
      const onClose = () => {
        message.onClose && message.onClose();
        this.remove(message.key);
      }

      return (
        <Message {...message} onClose={onClose}>
          {message.content}
        </Message>
      );
    });

    return (
      <div styleName='message--box'>
        {Nodes}
      </div>
    );
  }
}

export default MessageBox;
