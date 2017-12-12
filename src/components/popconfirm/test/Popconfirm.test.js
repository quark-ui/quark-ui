/**
 * Popconfirm Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Popconfirm from  '../Popconfirm';
import styles from '../Popconfirm.css';

describe('Popconfirm test',()=>{
  
  it('popconfirm placement render is ok',()=>{
    const props = {
      content: 'popconfirm',
      placement : 'top',
      action: 'click'
    }
    const popconfirm = mount(<Popconfirm {...props} ><p>aaaa</p></Popconfirm>);
    popover.find(`p`).simulate('click');
    
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup']}`);
    // console.log(option.length,666);
    expect(option.length).to.equal(1);
    // popover.find(`p`).simulate('click');
    global.document.body.click();
    // console.log(option.length,777);
  });
});