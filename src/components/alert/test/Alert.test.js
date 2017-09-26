import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Alert from '../Alert';
import styles from '../Alert.css';

describe('alert-test-describe----------', () => {
  it('alert can render', () => {
    const props = {
      type: 'success',
      message: 'message',
      description: '123',
    };
    const app = shallow(<Alert {...props} />);
    expect(app.hasClass(styles.alert__success)).to.equal(true);
    expect(app.state('closed')).to.equal(false);
    expect(app.find(`span.${styles['alert--description']}`).text()).to.equal('123');
    expect(app.state('closed')).to.equal(false);
  });

  it('alert type is oneOf  info, success, error, warning ', () => {
    const props = {
      type: 'info',
      message: 'message',
    };
    const app = shallow(<Alert {...props} />);
    expect(app.hasClass(styles.alert__info)).to.equal(true);
  });


  it('showIcon is true', () => {
    const props = {
      type: 'success',
      message: 'message',
      showIcon: true,
    };
    const app = mount(
      <Alert {...props} />
    );
    expect(app.find('svg').hasClass(styles['alert--icon'])).to.equal(true);
  });

  it('closable is true', () => {
    const props = {
      type: 'success',
      message: 'message',
      closable: true,
    };
    const app = mount(
      <Alert {...props} />
    );
    expect(app.find('span')).to.have.length(2);
  });


  it('closeText is close', () => {
    const props = {
      type: 'success',
      message: 'message',
      closable: true,
      closeText: 'close',
    };
    const app = mount(
      <Alert {...props} />
    );
    expect(app.find(`span.${styles['alert--close']}`).text()).to.contain('close');
  });

  it('handleClose event', () => {
    const props = {
      type: 'success',
      message: 'message',
      closable: true,
      closeText: 'close',
    };
    const app = mount(
      <Alert {...props} />
    );
    app.find(`span.${styles['alert--close']}`).simulate('click');
    expect(app.find(`.${styles[' alert ']}`).length).to.equal(0);
  });
});

