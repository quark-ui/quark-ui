/**
 * Popover Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Popover from  '../Popover';
import styles from '../Popover.css';

describe('Popover test',()=>{
  it('Popover is ok',()=>{
    const popover = mount(<Popover />);
    expect(popover.hasClass(styles['popover--popup'])).to.equal(true);
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
    console.log(option.length,666);
    expect(option.length).to.equal(1);
    // popover.find(`p`).simulate('click');
    global.document.body.click();
    console.log(option.length,777);
  });
  it('Popover title render is ok',()=>{
    const props = {
      title : 'popover title',
      popovers: 'popover test',
      placement : 'top'
    }
    const popover = mount(<Popover {...props} ><p>aaaa</p></Popover>);
    expect(popover.hasClass(styles['popover--popup-title'])).to.equal(true);
  });
  it('Popover button render is ok',()=>{
    const props = {
      title:'test',
      popovers: 'popover test',
      placement : 'top',
      hasButton : true,
      action:'click'
    }
    let popover = mount(<Popover {...props} ><p>aaaa</p></Popover>);
    console.log(popover.debug(),1111);
    popover.find(`p`).simulate('click');
    // popover.find('.Trigger__trigger--wrap___38U4l').simulate('click');

    const cl = styles['popover--popup'];
    // console.log(popover.debug());

    let option = global.document.body.getElementsByClassName(`${styles['popover--popup']}`);
    console.log(option.length,999);
    console.log(option[option.length-1].getElementsByTagName(`a`),333333);
    expect(option[option.length-1].contains(`.${styles['popover--popup--footer']}`)).to.equal(true);
    option[option.length-1].getElementsByTagName(`a`).simulate('click');
    console.log(option.length,4444);
  });
});
