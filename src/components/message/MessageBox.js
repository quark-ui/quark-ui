/**
 * Message Component
 * @author grootfish
 */

import { PureComponent } from 'react';
import ReactDom from 'react-dom';
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
          messages: messages.concat(message),
        };
      }
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
        message.onClose && message.onClose();
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

Message.newInstance = function (props = {}) {
  const { container, ...msgProps } = props;
  let div;
  if (container) {
    div = container;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  const message = ReactDom.render(<MessageBox {...msgProps} />, div);
  return {
    info(content = '', duration = 1.5, onClose) {
      message.add({ type: 'info', content, duration, onClose });
    },
    success(content = '', duration = 1.5, onClose) {
      message.add({ type: 'success', content, duration, onClose });
    },
    error(content = '', duration = 1.5, onClose) {
      message.add({ type: 'error', content, duration, onClose });
    },
    warning(content = '', duration = 1.5, onClose) {
      message.add({ type: 'warning', content, duration, onClose });
    },
    remove(key) {
      message.remove(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};

export default Message;
