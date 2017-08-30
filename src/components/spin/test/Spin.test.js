import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Spin from '../Spin';
import Alert from '../../alert';
import styles from '../Spin.css';

describe('spin-test-describe----------', () => {

  it('spin can render', () => {
    const app = shallow(<Spin />);
    expect(app.find(`.${styles['Spin']}`).length).to.equal(1);
  });


  it('set size', () => {
    const app = shallow(<Spin size="small" />);
    expect(app.hasClass(styles['small'])).to.equal(true);
  });

  it('propTypes can do', () => {
    const app = shallow(<Spin size="small" tip="loading" />);
    expect(app.find(`p.${styles['qui-spin-text']}`).text()).to.equal('loading');
  });

  it('this.props.spinning', () => {
    const app = shallow(<Spin spinning={false} delay={600} />);
    expect(app.find(`.${styles['qui-spin-dot']}`).length).to.equal(1);
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

