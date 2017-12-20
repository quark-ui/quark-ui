import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Message from '../Message';
import styles from '../Message.css';

describe('message-test-describe----------', () => {
  it('message render', () => {
    const props = {
      duration: 1,
    };
    const app = shallow(<Message {...props} />);
    expect(app.hasClass(styles["message"])).to.equal(true);
  });

  it('message render', () => {
    const app = shallow(<Message />);
    expect(app.hasClass(styles["message"])).to.equal(true);
  });
  it('message render', () => {
    const onClose = sinon.spy();
    const props = {
      duration: 1,
      onClose,
    };
    const app = shallow(<Message {...props} />);
    expect(app.hasClass(styles["message"])).to.equal(true);

    const clock = sinon.useFakeTimers();
    setTimeout(() => console.log('then'), 2000);
    clock.tick(2000);
    clock.restore();
  });

  it('calls componentDidMount', () => {
    sinon.spy(Message.prototype, 'componentDidMount');
    const spyUnmount = sinon.spy(Message.prototype, 'componentWillUnmount');
    const app = mount(<Message />);
    expect(Message.prototype.componentDidMount.calledOnce).to.equal(true);
    app.unmount();
    expect(spyUnmount.calledOnce).to.equal(true);
  });

  it('should render a cmp', (done) => {
    setTimeout(done, 1800);
  });
});
