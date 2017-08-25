import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Animation from '../Animation';
import Transition from 'react-transition-group/Transition';

import styles from '../Animation.css';

describe('animation-test-describe----------', () => {
  it('animation can render', () => {
    const props = {
      in:true,
      timingFunction: 'ease',
      motion:'fade'
    }
    
    const app = shallow(
    <Animation {...props}>
      <div>123</div>
    </Animation>  
    );

    console.log(app.debug());

    expect(app.find('Transition')).to.equal(true);
  });

});

