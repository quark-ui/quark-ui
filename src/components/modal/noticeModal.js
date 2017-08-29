import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';
import Modal from './Modal';

import styles from './Modal.css';

const colorArr = {
  info: '#3b98e0',
  success: '#73da7d',
  error: '#e6445e',
  warning: '#ffd31a',
};

class NoticeModal extends PureComponent {
  static defaultProps = {
    type: undefined,
    config: undefined,
    afterClose() {},
  }
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    config: PropTypes.object,
    afterClose: PropTypes.func,
  }
  state = {
    visible: false,
  }
  componentDidMount() {
    this.setState({
      visible: true,
    });
  }
  render() {
    const { type, config, afterClose } = this.props;
    const { visible } = this.state;
    const modalProps = {
      title: (
        <p>
          <Icon name={type} size={26} color={colorArr[type]} />
          <span>
            {config.title || type}
          </span>
          {config.closable ?
            <button
              className={styles.modal__closable}
              onClick={() => {
                this.setState({
                  visible: false,
                });
              }}
            >
              <Icon name="close" size={18} color="#a6a6a6" />
            </button>
            : null}
        </p>
      ),
      visible,
      closable: false,
      footer: (
        <Button
          key="confirm"
          type="primary"
          onClick={() => {
            this.setState({
              visible: false,
            });
          }}
        >
          我知道了
        </Button>
      ),
      afterClose() {
        setTimeout(() => {
          afterClose();
        }, 500);
      },
    };
    return (
      <Modal {...modalProps}>
        {config.content}
      </Modal>
    );
  }
}

const renderNoticeModal = (
  type,
  config = {
    title: '',
    content: '',
    closable: false,
  },
) => {
  const wrapNode = document.createElement('div');
  document.body.appendChild(wrapNode);
  ReactDOM.render(
    <NoticeModal
      type={type}
      config={config}
      afterClose={() => {
        ReactDOM.unmountComponentAtNode(wrapNode);
        document.body.removeChild(wrapNode);
      }}
    />,
    wrapNode,
  );
};

export default renderNoticeModal;
