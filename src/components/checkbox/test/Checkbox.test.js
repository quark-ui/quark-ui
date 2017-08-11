import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import styles from '../Checkbox.css';

describe('checkbox-test-describe',()=>{
  it('checkbox-------------',()=>{
  	const data = {
      prefixCls : 'checkbox',
  		'checked' : true
  	}
  	let checkbox = shallow(<Checkbox  {...data}/>);
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
    // expect(checkbox.prop('className')).to.equal('checkbox--wrapper');
    // expect(checkbox.at(0).type()).to.equal('label');
  });

  

  it('checkbox----ischecked----',()=>{
    const data = {
      'checked' : true,
      onChange : (e)=>{
        checkbox.setState( {checked : e.target.checked})
      }
    }
    let checkbox = mount(<Checkbox  {...data} />);
    checkbox.find('input').simulate('change',{target: {checked : false}});
    
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
  });
  it('checkboxGroup-----------',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions,
      'value': defaultCheckedList
    }
    let checkboxgroup = shallow(<CheckboxGroup  {...data}/>);
    // console.log(checkboxgroup.at(0).props(),33333);
    // console.log(`.${styles['checkbox--wrapper__checked']}`,5555);
    // console.log(checkboxgroup.find(`.${styles['checkbox__checked']}`),444);
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
  });


  it('checkboxgroup allows us to set props',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions,
      'value': defaultCheckedList
    }
    let checkboxgroup = mount(<CheckboxGroup  {...data}/>);
    expect(checkboxgroup.props().value).to.equal(defaultCheckedList);
    checkboxgroup.setProps({value : ['Orange']});
    expect(checkboxgroup.props().value).to.deep.equal(['Orange']);
    expect(checkboxgroup.at(0).children().at(0).props().checked).to.equal(false);
  });

  it('checkboxGroup mount is ok ',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions,
      'value': defaultCheckedList
    }

    let checkboxgroup = mount(<CheckboxGroup  {...data}/>);
    // console.log(checkboxgroup.at(0).props(),22);
    // console.log(checkboxgroup.at(0).children().at(0).props(),11)
    // checkboxgroup.at(0).children().at(0).simulate('click');
    checkboxgroup.at(0).children().at(0).simulate('change',{target:{checked:false}});
    checkboxgroup.setProps({value : ['Orange']});
    // console.log(checkboxgroup.debug());
     // console.log(checkboxgroup.at(0).children().at(0).props(),33)
    // console.log(checkboxgroup.find(`.${styles['checkbox--wrapper__checked']}`).length,999);
    // expect(checkboxgroup.children()).to.have.length(plainOptions.length);
    expect(checkboxgroup.at(0).children().at(0).props().checked).to.equal(false);
  });
});
