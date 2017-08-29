//npm run test-unit './src/components/modal/test/modal.test.js'

/**
 * Progress test
 * @author heifade
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Modal from '../Modal';
import styles from '../Modal.css';

describe('Select-test-describe----------', () => {
  it('Modal can render', () => {
    const modal = mount(<Modal />);

    console.log(modal.debug());
  });
});
