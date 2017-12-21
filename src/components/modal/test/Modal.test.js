import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Modal from '../Modal';
import renderNoticeModal from '../noticeModal';
import Button from '../../button';
import Mask from '../Mask';
import styles from '../Modal.css';
import { exec } from 'child_process';

describe('mask-test-describe----------', () => {
  it('mask should be render', () => {
    const props = {
      visible: true,
    };
    const app = shallow(
      <Mask {...props}>
        <div>123</div>
      </Mask>
    );
    expect(app.hasClass(styles['mask--visible'])).to.equal(true);
    expect(app.children().text()).to.equal('123');
  });
});

describe('modal-test-describe-----notice-----', () => {
  it('modal onOk', () => {
    const onOk = sinon.spy();
    const onCancel = sinon.spy();
    const afterClose = sinon.spy();
    const props = {
      type: 'info',
      title: '标题',
      closable: true,
      visible: false,
      onOk,
      onCancel,
      afterClose,
    };
    const app = mount(
      <Modal {...props} />
    );
    // console.log(app.debug());
  });

  it('modal info', () => {
    const onOk = sinon.spy();
    const onCancel = sinon.spy();
    const afterClose = sinon.spy();
    const app = mount(
      <Button
        type="secondary"
        onClick={() => {
          Modal.info({
            content: '这是提示信息',
            closable: true,
            onOk,
            onCancel,
            afterClose,
          });
        }}
      >info</Button>
    );
    app.find('button').simulate('click');
    expect(app.find('button').length).to.equal(1);
  });

  it('modal success', () => {
    const app = mount(
      <Button
        type="secondary"
        onClick={() => {
          Modal.success({
            content: '这是提示信息',
            closable: true,
          });
        }}
      >success</Button>
    );
    app.find('button').simulate('click');
    expect(app.find('button').length).to.equal(1);
  });

  it('modal error', () => {
    const app = mount(
      <Button
        type="secondary"
        onClick={() => {
          Modal.error({
            content: '这是提示信息'
          });
        }}
      >error</Button>
    );
    app.find('button').simulate('click');
    expect(app.find('button').length).to.equal(1);
  });

  it('modal warning , then close modal', () => {
    const app = mount(
      <Button
        type="secondary"
        onClick={() => {
          Modal.warning({
            content: '这是提示信息',
            closable: true,
          });
        }}
      >warning</Button>
    );
    app.find('button').simulate('click');
    expect(app.find('button').length).to.equal(1);
    let modal =  global.document.body.getElementsByClassName(`${styles['modal--visible']}`);
    let btn = modal[3].getElementsByClassName(`${styles['modal__footer']}`)[0].getElementsByTagName('button')[0];
    btn.click();
    expect(modal.length).to.equal(3);
  });
});
describe('modal-test-head and footer----------', () => {
  it('modal has head and footer,cancle and ok are null',()=>{
    const data ={
      title : 'test',
      visible: true,
      onCancel : null,
      onOk : null
    }
    const modal = mount(<Modal {...data}><p>测试modal</p></Modal>);
    let modals =  global.document.body.getElementsByClassName(`${styles['modal--visible']}`);
    expect(modals.length).to.equal(4);
    let btnCancle = modals[modals.length-1].getElementsByTagName('button')[0];
    let btnOK = modals[modals.length-1].getElementsByTagName('button')[1];
    btnCancle.click();
    expect(modals.length).to.equal(4);
    btnOK.click();
    expect(modals.length).to.equal(4);
  });
  it('modal has head and footer,cancle and ok are ok',()=>{
    const data ={
      title : 'test',
      visible: true,
      onCancel : (e)=>{
        modal.setState({visible:false});
      },
      onOk :   (e)=>{
        modal.setState({visible:false});
      }
    }
    const modal = mount(<Modal {...data}><p>测试modal</p></Modal>);
    let modals =  global.document.body.getElementsByClassName(`${styles['modal--visible']}`);
    expect(modals.length).to.equal(5);
    let btnCancle = modals[modals.length-1].getElementsByTagName('button')[0];
    let btnOK = modals[modals.length-1].getElementsByTagName('button')[1];
    btnCancle.click();

  });
  it('modal do not has head and footer',()=>{
      const data = {
        closable : false,
        title : null,
        footer : null
      }
      const modal = mount(<Modal {...data}><p>测试modal</p></Modal> );
      // console.log(modal.debug());
  });
});