import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Trigger from '../Trigger';
import Button from '../../button';
import styles from '../Trigger.css';

describe('trigger-test-describe----------', () => {
  it('trigger can render', () => {
    const app = mount(<Trigger />);
    expect(app.find(`.${styles['trigger']}`).length).to.equal(1);
  });

  it('propTypes can do', () => {
    const onClick = sinon.spy();
    const onPopupVisibleChange = sinon.spy();
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
        placement={['cr', 'cl']}
        onPopupVisibleChange={onPopupVisibleChange}
      >
        <Button>click</Button>
      </Trigger>
    );
    expect(app.find(`.${styles['trigger--wrap']}`).length).to.equal(1);
  });
});

