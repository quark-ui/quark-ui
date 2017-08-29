//npm run test-unit './src/components/progress/test/Progress.test.js'

/**
 * Progress test
 * @author heifade
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Progress from '../Progress';
import styles from '../Progress.css';

describe('progress-test-describe----------', () => {

  function checkProgressValue(progress, value) {
    const lineInner = progress.find(`.${styles['progress__lineInner']}`);
    expect(lineInner.length).to.equal(1);
    expect(lineInner.prop('style').width).to.equal(`${value}%`); // 进度条值
  }

  // 进度条后面有数字
  it('progress of normal', () => {
    for (let value = 0; value <= 100; value += 1) {
      const progress = mount(<Progress percent={value} />);
      expect(progress.hasClass(styles['progress__showinfo'])).to.equal(true);
      checkProgressValue(progress, value);
      expect(progress.find(`.${styles['progress__lineIndicator']}`).text()).to.equal(`${value}%`); // 进度条后面的数字
    }
  });

  // 进度条 出错
  it('progress of exception', () => {
    for (let value = 0; value <= 100; value += 1) {
      const progress = mount(<Progress percent={value} status="exception" />);
      expect(progress.hasClass(styles['progress__showinfo'])).to.equal(true);
      checkProgressValue(progress, value);
      expect(progress.findWhere(n => n.name() === 'Icon' && n.prop('name') === 'error').length).to.equal(1);
    }
  });

  // 进度条 暂停
  it('progress of pause', () => {
    for (let value = 0; value <= 100; value += 1) {
      const progress = mount(<Progress percent={value} status="pause" />);
      expect(progress.hasClass(styles['progress__showinfo'])).to.equal(true);
      checkProgressValue(progress, value);
      expect(progress.findWhere(n => n.name() === 'Icon' && n.prop('name') === 'clock').length).to.equal(1);
    }
  });

  // 进度条 成功
  it('progress of success', () => {
    for (let value = 0; value <= 100; value += 1) {
      const progress = mount(<Progress percent={value} status="success" />);
      expect(progress.hasClass(styles['progress__showinfo'])).to.equal(true);
      checkProgressValue(progress, value);
      expect(progress.findWhere(n => n.name() === 'Icon' && n.prop('name') === 'success').length).to.equal(1);
    }
  });

  // 进度条 普通进度条
  it('progress of success', () => {
    for (let value = 0; value <= 100; value += 1) {
      const progress = mount(<Progress percent={value} showInfo={false} />);
      expect(progress.hasClass(styles['progress__line'])).to.equal(true);
      checkProgressValue(progress, value);
    }
  });
});
