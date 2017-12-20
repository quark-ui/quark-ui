// npm run test-unit './src/components/steps/test/Steps.test.js'

/**
 * Menu test
 * @author yanwei
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Steps from '../Steps';
import styles from '../Steps.css';
const Step = Steps.Step;

describe('steps-test-describe----------', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Steps.prototype, 'componentDidMount');
    const app = mount(<Steps>
      <Step title="步骤1" description="这是一段很长很长很长的描述性文字" status="finish" />
      <Step title="步骤2" description="这是一段很长很长很长的描述性文字" status="process" />
      <Step title="步骤3" status="wait" />
      <Step title="步骤4" />
    </Steps>);
    expect(Steps.prototype.componentDidMount.calledOnce).to.equal(true);
  })

  it('calls componentDidUpdate', () => {
    const spy = sinon.spy(Steps.prototype, 'componentDidUpdate');
    const MyCom = () => <Step title="步骤1" />;
    const app = mount(<Steps>
      <MyCom />
    </Steps>);
    expect(spy.calledOnce).to.equal(false);
    app.setProps({ direction: 'vertical' });
    expect(spy.calledOnce).to.equal(true);
  });

  it('propTypes can do', () => {
    const props = {};
    const app = shallow(
      <Steps {...props}>
        <Step title="步骤1" />
        <Step title="步骤2" />
        <Step title="步骤3" />
        <Step title="步骤4" />
        <Step title="步骤5" />
      </Steps>);
    expect(app.hasClass(styles["steps__horizontal"])).to.equal(true);// 横向
    app.setProps({ direction: 'vertical' });
    expect(app.hasClass(styles["steps__vertical"])).to.equal(true);// 竖向
    app.setProps({ size: 'small' });
    expect(app.hasClass(styles["steps__small"])).to.equal(true); //小尺寸
    app.setProps({ current: 2 });
    expect(app.find(Step).get(0).props.status).to.equal('finish');
    expect(app.find(Step).get(2).props.status).to.equal('process');
    expect(app.find(Step).get(3).props.status).to.equal('wait');
    app.setProps({ current: 3 }); // 第几个
    expect(app.find(Step).get(2).props.status).to.equal('finish');
    expect(app.find(Step).get(3).props.status).to.equal('process');
    expect(app.find(Step).get(4).props.status).to.equal('wait');
    app.setProps({ isFinishIcon: true });
    expect(app.find(Step).get(0).props.isFinishIcon).to.equal(true);
    app.setProps({ status: 'wait' });// 修改status
    expect(app.find(Step).get(3).props.status).to.equal('wait');

    app.setProps({ current: 6 }); // 第几个
    expect(app.find(Step).get(3).props.status).to.equal('finish');
    expect(app.find(Step).get(4).props.status).to.equal('finish');
  });
});


describe('step-test-describe----------', () => {
  it('step status is finish && step title', () => {
    const app = shallow(<Step />);
    expect(app.find(`.${styles['steps--title']}`).text()).to.equal('');
    app.setProps({ title: '步骤1' });
    expect(app.find(`.${styles['steps--title']}`).text()).to.equal('步骤1');
    app.setProps({ description: '123' });
    expect(app.find(`.${styles['steps--description']}`).text()).to.equal('123');
    app.setProps({ status: 'finish' });
    app.setProps({ isFinishIcon: true });
    const item = app.find('span').first();
    expect(item.hasClass(styles['steps--icon'])).to.equal(true); // 
    expect(app.find(`.${styles['steps--item__finish']}`).length).to.equal(1);
    app.setProps({ status: 'process' });
    expect(app.find(`.${styles['steps--item__process']}`).length).to.equal(1);
    app.setProps({ status: 'wait' });
    expect(app.find(`.${styles['steps--item__wait']}`).length).to.equal(1);
  });
});
