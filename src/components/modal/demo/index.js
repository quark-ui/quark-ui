import Modal from '../Modal';
import Button from '../../button/Button';
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
        <Button onClick={this.openModal}>open modal</Button>
        <Modal {...modalProps}>
          <p>first Modal</p>
        </Modal>
      </div>
    );
  }
}
