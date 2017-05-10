import MessageBox from './MessageBox';
import ReactDom from 'react-dom';

const renderMessage = function (props = {}) {
  const { getContainer , ...msgProps } = props;

  let div;
  if (getContainer ) {
    div = getContainer;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  return ReactDom.render(<MessageBox {...msgProps}></MessageBox>, div);
}

let messageInstance;
function getMessageInstance() {
  messageInstance = messageInstance || renderMessage();
  return messageInstance;
}


function noop() {}
export default {
    info(content = '', duration = 2, onClose = noop) {
      let message = getMessageInstance();
      message&&message.add({ type: 'info', content, duration, onClose });
    },
    success(content = '', duration = 2, onClose = noop) {
      let message = getMessageInstance();
      message&&message.add({ type: 'success', content, duration, onClose })
    },
    error(content = '', duration = 2, onClose = noop) {
      let message = getMessageInstance();
      message&&message.add({ type: 'error', content, duration, onClose });
    },
    warning(content = '', duration = 2, onClose = noop) {
      let message = getMessageInstance();
      message&&message.add({ type: 'warning', content, duration, onClose });
    },
}
