import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Button from '../Button';
import styles from '../Button.css';

describe('button-test-describe----------', () => {
  it('button test 1',()=>{
    const btn = shallow(<Button />);
    expect(btn.hasClass('btn')).to.equal(false);
  })
});

