import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Modal from '../Modal';
import styles from '../Modal.css';

describe('modal-test-describe----------', () => {
  it('modal can render',()=>{
    const modal = shallow(<Modal />);
    expect(modal.find(`.${styles['modal__header']}`).length).to.equal(1);
  })
});

