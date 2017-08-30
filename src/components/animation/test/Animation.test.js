import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Animation from '../Animation';
import styles from '../Animation.css';

describe('animation-test-describe----------', () => {
  it('animation can render', () => {
    const props = {
      in:true,
      timingFunction: 'ease',
      motion:'fade'
    }
    const app = mount(
      <Animation {...props}>
        <div>123</div>
      </Animation>  
    );
    expect(app.find(`.${styles['fade--entered']}`).length).to.equal(1);
  });

});

