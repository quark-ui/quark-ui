import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Trigger from '../Trigger';
import Button from '../../button';
import styles from '../Trigger.css';

describe('trigger-test-describe----------', () => {
  const PLACEMENT_ENUM = {
    left: {
      points: ['cr', 'cl'],
    },
    right: {
      points: ['cl', 'cr'],
    },
    top: {
      points: ['bc', 'tc'],
    },
    bottom: {
      points: ['tc', 'bc'],
    },
    topLeft: {
      points: ['bl', 'tl'],
    },
    topRight: {
      points: ['br', 'tr'],
    },
    bottomRight: {
      points: ['tr', 'br'],
    },
    bottomLeft: {
      points: ['tl', 'bl'],
    },
  };

  it('trigger can render', () => {
    const app = mount(<Trigger />);
    expect(app.find(`.${styles['trigger']}`).length).to.equal(1);
  });

  it('propTypes can do', () => {
    const onClick = sinon.spy();
    const props = {
      onClick,
    };
    const app = mount(
      <Trigger
        action={'click'}
        popup={
          <div {...props} >click me to close</div>
        }
        popupVisible
        placement={PLACEMENT_ENUM.left.points}
      >
        <Button>click</Button>
      </Trigger>
    );
    expect(app.find(`.${styles['trigger--wrap']}`).length).to.equal(1);
    app.find(`.${styles['trigger--wrap']}`).simulate('click');
  });

  it('action is null', () => {
    const app = mount(
      <Trigger
        action={'change'}
        popup={
          <div>click me to close</div>
        }
        popupVisible
        placement={PLACEMENT_ENUM.bottomRight.points}
      >
        <Button>click</Button>
      </Trigger>
    );
    expect(app.find(`.${styles['trigger--wrap']}`).length).to.equal(1);
  });


  it('props placement', () => {
    const state = {
      visible: false,
    };
    const app = mount(
      <Trigger
        action={'click'}
        popup={
          <div>click me to close</div>
        }
        popupVisible={state.visible}
        placement={PLACEMENT_ENUM.bottomRight.points}
      >
        <Button>click</Button>
      </Trigger>
    );
    expect(app.find(`.${styles['trigger--wrap']}`).length).to.equal(1);
  });


  it('action is hover', () => {
    const state = {
      visible: true,
    };
    const app = mount(
      <Trigger
        action={'hover'}
        popup={
          <div style={{ border: '1px solid #000', padding: 10, background: '#fff' }}>popup content</div>
        }
        popupVisible={state.visible}
        placement={PLACEMENT_ENUM.top.points}
        mouseLeaveDelay={100}
      >
        <Button>click</Button>
      </Trigger>
    );
    expect(app.find(`.${styles['trigger--wrap']}`).length).to.equal(1);
    app.find(`.${styles['trigger--wrap']}`).simulate('mouseenter');
    app.find(`.${styles['trigger--wrap']}`).simulate('mouseleave');
    
  });
});

