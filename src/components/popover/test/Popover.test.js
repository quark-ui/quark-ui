/**
 * Popover Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Popover from  '../Popover';
import styles from '../Popover.css';
import styles2 from '../../animation/Animation.css';

describe('Popover test',()=>{
  it('Popover is ok',()=>{
    const popover = mount(<Popover />);
    let option = global.document.body.getElementsByClassName(`${styles['popover--popup']}`);
    expect(option.length).to.equal(0);
  });
  it('Popover placement render is ok',()=>{
    const props = {
      popovers: 'popover test',
      placement : 'top',
      action: 'click'
    }
    const popover = mount(<Popover {...props} ><p>aaaa</p></Popover>);
    popover.find(`p`).simulate('click');
    
    let option = global.document.body.getElementsByClassName(`${styles['popover--popup']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles2['fade--entering']}`);
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(1);
    popover.find(`p`).simulate('click');
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(0);
  });
  it('Popover title render is ok',()=>{
    const props = {
      title : 'popover title',
      popovers: 'popover test',
      placement : 'top',
      action : 'click'
    }
    const popover = mount(<Popover {...props} ><p>aaaa</p></Popover>);
    popover.find(`p`).simulate('click');
    let option2 = global.document.body.getElementsByClassName(`${styles2['fade--entering']}`);
    expect(option2[0].getElementsByClassName(`${styles['popover--popup--title']}`)[0].innerHTML).to.equal('popover title');
  });
  //关闭按钮生效
  it('Popover button render is ok',()=>{
    const props = {
      title:'test',
      popovers: 'popover test',
      placement : 'top',
      hasButton : true,
      action:'click'
    }
    let popover = mount(<Popover {...props} ><p>bbb</p></Popover>);
    popover.find(`p`).simulate('click');
    let option = global.document.body.getElementsByClassName(`${styles['popover--popup']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles2['fade--entering']}`);
    let button = option[option.length-1].getElementsByTagName(`a`)[0];
    button.click();
    expect(option2.length).to.equal(0);
  });
});
