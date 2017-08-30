import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Button from '../Button';
import styles from '../Button.css';

describe('button-test-describe----------', () => {
  it('button render',()=>{
    const app = shallow(<Button />);
    expect(app.hasClass(styles['button--primary'])).to.equal(true);
  })

  it('button type is danger',()=>{
    const props = {
      type:'danger',
      size:'small',
    }
    const app = shallow(<Button {...props} />);
    expect(app.hasClass(styles['button--danger'])).to.equal(true);
    expect(app.hasClass(styles['button--small'])).to.equal(true);
  });

  it('button is disabled',()=>{
    const app = shallow(<Button disabled />);
    expect(app.hasClass(styles['button--disabled'])).to.equal(true);
  });

});

