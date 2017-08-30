import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import  sinon from 'sinon';
import Steps from '../Steps';
import styles from '../Steps.css';
const Step = Steps.Step;

describe('steps-test-describe----------', () => {

  it('calls componentDidMount',()=>{
    sinon.spy(Steps.prototype, 'componentDidMount');
    const app = mount(<Steps>
      <Step title="步骤1" />
      <Step title="步骤2" />
      <Step title="步骤3" />
      <Step title="步骤4" />
    </Steps>);
    expect(Steps.prototype.componentDidMount.calledOnce).to.equal(true);
  })

  it('calls componentDidUpdate',()=>{
    sinon.spy(Steps.prototype, 'componentDidUpdate');
    const app = mount(<Steps>
      <Step title="步骤1" />
    </Steps>);
    expect(Steps.prototype.componentDidUpdate.calledOnce).to.equal(false);
  })

  it('propTypes can do', () => {
    const props = {
      direction: 'vertical',
      current: 2,
      status: 'process',
      isFinishIcon: true,
      size: 'small',
    };
    const app = shallow(
      <Steps {...props}>
        <Step title="步骤1" />
        <Step title="步骤2" />
        <Step title="步骤3" />
        <Step title="步骤4" />
      </Steps>
    );
    console.log(app.find(Step).get(0).props.adjustMarginRight);

    expect(app.hasClass(styles['steps__vertical'])).to.equal(true);
    expect(app.hasClass(styles['steps__small'])).to.equal(true);
    expect(app.find(Step).get(0).props.isFinishIcon).to.equal(true);
    expect(app.find(Step).get(0).props.status).to.equal('finish');
    expect(app.find(Step).get(3).props.status).to.equal('wait');
  });

});


describe('step-test-describe----------', () => {
  it('step status is finish && step title', () => {
    const props = {};
    const app = shallow(<Step status="finish" title="步骤1" description="123" isFinishIcon="true" />);
    expect(app.find(`.${styles['steps--item__finish']}`).length).to.equal(1);
    expect(app.find(`.${styles['steps--title']}`).text()).to.equal('步骤1');
    expect(app.find(`.${styles['steps--description']}`).text()).to.equal('123');
  });
});
