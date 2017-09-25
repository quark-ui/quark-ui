import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Spin from '../Spin';
import Alert from '../../alert';
import styles from '../Spin.css';

describe('spin-test-describe----------', () => {

  it('spin can render', () => {
    const app = shallow(<Spin />);
    expect(app.find(`.${styles['Spin']}`).length).to.equal(0);
  });

  it('propTypes can do', () => {
    const app = shallow(<Spin size="small" tip="loading" />);
    expect(app.find(`p.${styles['qui-spin-text']}`).text()).to.equal('loading');
  });

  it('this.props.spinning', () => {
    const props = {
      spinning: false,
      delay: 600,
    };
    const app = shallow(<Spin {...props} />);
    expect(app.find(`.${styles['qui-spin-dot']}`).length).to.equal(1);

    const spy = sinon.spy(Spin.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).to.equal(false);
    app.setProps({ spinning : true });
    expect(spy.calledOnce).to.equal(true);
    app.setProps({ spinning : false });
  });


  it('this.props && this.props.children', () => {
    const app = shallow(<Spin spinning={true} delay={600}>
      <Alert
        type="info"
        message="警告提示内容"
        description={`警告提示的辅助性文字介绍警告提示
        的辅助性文字介绍警告提示的辅助性文字介绍警告提示
        的辅助性文字介绍警告提示的辅助性文字介绍警告提示
        的辅助性文字介绍警告提示的辅助性文字介绍警告提示
        的辅助性文字介绍警告提示的辅助性文字介绍警告提示
        的辅助性文字介绍`}
      />
    </Spin>);
    expect(app.find(`.${styles['qui-spin-wrap']}`).length).to.equal(1);
  });

});

