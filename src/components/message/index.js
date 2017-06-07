import ReactDom from 'react-dom';
import MessageBox from './MessageBox';

let defaultDuration =1.5;
let defaultTop=50;
let messageInstance;
let getContainer;


function getMessageInstance() {
  messageInstance = messageInstance || MessageBox.newInstance({
    style:{top:defaultTop},
    getContainer,
  });
  return messageInstance;
}



function noop() {}
export default {
  info(content = '', duration = defaultDuration , onClose = noop) {
      getMessageInstance().msg({ type: 'info', content, duration, onClose });
    
  },
  success(content = '', duration = defaultDuration , onClose = noop) {
      getMessageInstance().msg({ type: 'success', content, duration, onClose });
    
  },
  error(content = '', duration = defaultDuration , onClose = noop) {
      getMessageInstance().msg({ type: 'error', content, duration, onClose });
  },
  warning(content = '', duration = defaultDuration , onClose = noop) {
      getMessageInstance().msg({ type: 'warning', content, duration, onClose });
  },
  config(options={}){
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
