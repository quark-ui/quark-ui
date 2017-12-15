import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import notification from '../index';
import Notice from '../Notice';
import styles from '../Notification.css';
import Icon from '../../icon';
import Button from '../../button';


describe('notification-test-describe----------', () => {
  it('Notice render', () => {
    const props = {
      message: '需要及时知道的系统通知',
      description:
        '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      duration: 0,
    };
    const app = shallow(<Notice {...props} />);
    expect(app.hasClass(styles.notification)).to.equal(true);
  });

  it('Notice test ----------- btn', () => {
    const key = `open${Date.now()}`;
    const btnClick = () => {
      notification.close(key);
    };
    const onClose = sinon.spy();
    const btn = (
      <div>
        <Button type="primary" onClick={btnClick}>
        立即更新
        </Button>
      &emsp;
        <Button type="secondary" onClick={btnClick}>
        今晚提醒
        </Button>
      </div>
    );
    const props = {
      type: 'warning',
      message: '需要及时知道的系统通知',
      description:
        '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      duration: 0,
      btn,
    };
    const app = shallow(<Notice {...props} onClose={onClose} />);
    expect(app.hasClass(styles.notification)).to.equal(true);
    app.find(`span.${styles['notification--close']}`).simulate('click');
  });

  it('notification render', () => {
    notification.open({
      message: 'Notification Title',
      duration: 0,
    });
    notification.open({
      message: 'Notification Title',
      duration: 0,
      key: '1',
    });
    notification.open({
      placement: 'topRight',
      message: 'Notification Title',
      duration: 0,
      key: '2',
    });
    notification.open({
      placement: 'topLeft',
      message: 'Notification Title',
      duration: 0,
      key: '3',
    });
    notification.open({
      placement: 'bottomLeft',
      message: 'Notification Title',
      duration: 0,
      key: '4',
    });
    notification.open({
      placement: 'bottomRight',
      message: 'Notification Title',
      duration: 0,
      key: '5',
    });
    
    expect(document.querySelectorAll('.notification').length).toBe(6);
    
    notification.open({
      message: 'Notification Title',
      key: '6',
      icon: <Icon
        style={{
          width: '34px',
          height: '34px',
          top: '16px',
          left: '24px',
          position: 'absolute',
        }}
        name={'clock'}
      />,
    });
    notification.destroy();
  });


  it('notification test ----------- config', () => {
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 0,
      getContainer: 'App',
    });
  });

  it('notification test ----------- config top', () => {
    notification.config({
      placement: 'bottomRight',
      top: 50,
      duration: 0,
      getContainer: 'App',
    });
  });
});
