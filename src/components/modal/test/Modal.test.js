import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Modal from '../Modal';
import Mask from '../Mask';
import styles from '../Modal.css';

describe('mask-test-describe----------', () => {
  it('mask should be render', () => {
    const props = {
      visible: true,
    };
    let app = shallow(
      <Mask {...props}>
        <div>123</div>
      </Mask>
    );

    expect(app.hasClass(styles['mask--visible'])).to.equal(true);
    expect(app.children().text()).to.equal('123');
  });
});

describe('modal-test-describe----------', () => {
  it('modal should be render', () => {
    const props = {
      title: '标题',
      visible: true,
    };
    const app = mount(
      <Modal {...props} />
    );
    console.log('++++++++++++++++++++++++++++++++',app.debug());
  });
});