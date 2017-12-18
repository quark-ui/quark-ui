/**
 * Popconfirm Component.tests
 * @author lhf
 */
import React,{Component} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Popconfirm from  '../Popconfirm';
import styles from '../Popconfirm.css';
import styles3 from '../../animation/Animation.css';

describe('Popconfirm test',()=>{

  class PopconfirmTest extends Component {
    constructor() {
      super();
      this.state = {
        visible : false
      };
    }
    handleOkClickTrigger = () =>{
      this.setState({
        visible: false,
      });
    }

    render() {
      const props = {
        content: 'popconfirm',
        placement : 'top',
        action: 'click',
        handleOkClickTrigger:this.handleOkClickTrigger,
        confirmVisable : this.state.visible
      }
      return (
        <Popconfirm {...props}><p>test</p></Popconfirm>
      );
    }
  }
  const popconfirm = mount(<PopconfirmTest />);

  class PopconfirmTestNoHandle extends Component {
    constructor() {
      super();
      this.state = {
        visible : false
      };
    }

    render() {
      const props = {
        content: 'popconfirm',
        placement : 'left',
        action: 'click',
        confirmVisable : this.state.visible
      }
      return (
        <Popconfirm {...props}><p>test</p></Popconfirm>
      );
    }
  }


  it('popconfirm default render is ok',()=>{
    const popconfirmDefault = mount(<Popconfirm><p>aaaa</p></Popconfirm>);
    let node = popconfirmDefault.find(`p`).getDOMNode();
    popconfirmDefault.find(`p`).simulate('mouseenter');
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup']}`);
    expect(option.length).to.equal(0);
  });
  //点击之后显示
  it('popconfirm render is ok',()=>{
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles3['fade--entering']}`);
    popconfirm.find(`p`).simulate('click');
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(1);
  });
  //取消按钮
  it('popconfirm button cancle is ok',()=>{
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles3['fade--entering']}`);
    let button = option[0].getElementsByTagName(`button`)[0];
    button.click();
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(0);
  });
  //确定按钮
  it('popconfirm button ok is ok',()=>{
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles3['fade--entering']}`);
    let button = option[0].getElementsByTagName(`button`)[1];
    button.click();
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(0);
  });
  //没有ok方法
  it('popconfirm has button ok , but no handleClick',()=>{
    const popconfirm2 = mount(<PopconfirmTestNoHandle />);
    popconfirm2.find(`p`).simulate('click');
    let option = global.document.body.getElementsByClassName(`${styles['popconfirm--popup--left']}`);
    let option2 = global.document.body.getElementsByClassName(`${styles3['fade--entering']}`);
    let button = option[0].getElementsByTagName(`button`)[1];
    button.click();
    expect(option.length).to.equal(1);
    expect(option2.length).to.equal(0);
  });

});