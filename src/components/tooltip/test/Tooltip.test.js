/**
 * Tooltip Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Tooltip from  '../Tooltip';
import styles from '../Tooltip.css';
import styles2 from '../../animation/Animation.css';

describe('Tooltip test',()=>{
  it('Tooltip render is ok',()=>{
    const tooltip = mount(<Tooltip />);
    expect(tooltip.hasClass(styles['tooltip--popup'])).to.equal(false);
  });
  it('Tooltip has toolElement is ok',()=>{
    const props = {
      tips: 'tooltip test',
      placement : 'top',
      toolElement : (<div><p>tooltest</p></div>)
    }
    const tooltip = mount(<Tooltip {...props} />);
    expect(tooltip.contains(<p>tooltest</p>)).to.equal(true);
  });
  it('Tooltip placement render is ok',()=>{
    const props = {
      tips: 'tooltip test',
      placement : 'top',
      action : 'click'
    }
    const tooltip = mount(<Tooltip {...props} ><p>test</p></Tooltip>);
    tooltip.find(`p`).simulate('click');
    let option = global.document.body.getElementsByClassName(`${styles['tooltip--popup--top']}`);
    expect(option.length).to.equal(1);
  })
  
});