import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Message from '../Message';
import styles from '../Message.css';

describe('message-test-describe----------', () => {
  it('message render',()=>{
    const app = shallow(<Message />);
    expect(app.hasClass(styles['message'])).to.equal(true);
  });
  it('calls componentDidMount',()=>{
    sinon.spy(Message.prototype, 'componentDidMount');
    const app = mount(<Message />);
    expect(Message.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should render a cmp',(done)=>{
    setTimeout(done, 1800);
  });
});
