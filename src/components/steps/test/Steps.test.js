import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Steps from '../Steps';
import styles from '../Steps.css';
const Step = Steps.Step;

describe('steps-test-describe----------', () => {

  it('steps can render', () => {
    let app = shallow(
      <Steps>
        <Step title="步骤1" />
      </Steps>
    );
    expect(app.find(`.${styles['steps']}`).length).to.equal(1);
  });

  it('steps size is small && steps direction is vertical', () => {
    const props = {
      direction: 'vertical',
      size: 'small'
    };
    const app = shallow(
      <Steps {...props}>
        <Step title="步骤1" />
      </Steps>
    );
    expect(app.hasClass(styles['steps__vertical'])).to.equal(true);
    expect(app.hasClass(styles['steps__small'])).to.equal(true);

  });

  it('step status is finish && step title', () => {
    const props = {};
    const app = shallow(
        <Step status="finish" title="步骤1" />
    );
    expect(app.find(`.${styles['steps--item__finish']}`).length).to.equal(1);
    expect(app.find(`.${styles['steps--item']}`).text()).to.equal('步骤1');

  });


});

