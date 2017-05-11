import Modal from '../Modal';
import Button from 'quark-ui/button';
import { Component } from 'react';

export default class ModalDemo extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      visible: false,
    };
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible } = this.state;
    const modalProps = {
      title: 'title',
      visible,
      onOk: () => { this.closeModal(); },
      onCancel: () => { this.closeModal(); },
    };
    return (
      <div>
        <h3>基本</h3>
        <Button type="secondary" onClick={this.openModal}>open modal</Button>
        <Modal {...modalProps}>
          <p>first Modal</p>
        </Modal>
        <h3>信息提示</h3>
        <Button
          type="secondary"
          onClick={() => {
            Modal.info({
              content: '这是提示信息',
            });
          }}
        >info</Button>
        <Button
          type="secondary"
          onClick={() => {
            Modal.success({
              content: '这是成功消息',
            });
          }}
        >success</Button>
        <Button
          type="secondary"
          onClick={() => {
            Modal.error({
              content: '这是错误提示',
            });
          }}
        >error</Button>
        <Button
          type="secondary"
          onClick={() => {
            Modal.warning({
              content: '这是警告信息',
            });
          }}
        >warning</Button>
      </div>
    );
  }
}
