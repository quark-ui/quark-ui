/**
 * Tooltip Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Tooltip from  '../Tooltip';
import styles from '../Tooltip.css';

describe('Tooltip test',()=>{
  it('Tooltip render is ok',()=>{
    const tooltip = mount(<Tooltip />);
    expect(tooltip.hasClass(styles['tooltip--popup'])).to.equal(true);
  });
  it('Tooltip placement render is ok',()=>{
    const props = {
      tips: 'tooltip test',
      placement : 'top'
    }
    const tooltip = mount(<Tooltip {...props} />);
    expect(tooltip.hasClass(styles['tooltip--popup--top'])).to.equal(true);
  })
  it('Tooltip has toolElement is ok',()=>{
    const props = {
      tips: 'tooltip test',
      placement : 'top',
      toolElement : (<div><p>tooltest</p></div>)
    }
    const tooltip = mount(<Tooltip {...props} />);
    expect(tooltip.contains(<p>tooltest</p>)).to.equal(true);
  });
});