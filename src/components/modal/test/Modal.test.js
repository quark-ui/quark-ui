import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Modal from '../Modal';
import renderNoticeModal from '../noticeModal';
import Button from '../../button';
import Mask from '../Mask';
import styles from '../Modal.css';

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

describe('modal-test-describe----------', () => {
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
    console.log(app.debug());

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
            content: '这是提示信息',
            closable: true,
          });
        }}
      >error</Button>
    );
    app.find('button').simulate('click');
    expect(app.find('button').length).to.equal(1);
  });

  it('modal warning', () => {
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
  });
});