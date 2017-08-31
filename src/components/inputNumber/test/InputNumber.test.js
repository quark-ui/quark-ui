import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import RcInputNumber from 'rc-input-number';
import InputNumber from '../InputNumber';
import styles from '../InputNumber.css';

describe('inputNumber-test-describe----------', () => {
  it('inputNumber render',()=>{
    const app = mount(<InputNumber style={{ width: 200 }} min={1} max={10} defaultValue={3} disabled />);
    expect(app.hasClass(styles['input-number-normal'])).to.equal(false);
  });
});

