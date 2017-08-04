import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import styles from '../Checkbox.css';

describe('checkbox-test-describe',()=>{
  it('checkbox-------------',()=>{
  	const data = {
  		'checked' : true
  	}
  	let checkbox = shallow(<Checkbox  {...data}/>);
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
    // expect(checkbox.prop('className')).to.equal('checkbox--wrapper');
    // expect(checkbox.at(0).type()).to.equal('label');
  });
  it('checkboxGroup-----------',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions
    }
    let checkboxgroup = shallow(<CheckboxGroup  {...data}/>);
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
  });

  it('checkboxGroup mount is ok ',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions,
      'value': defaultCheckedList
    }

    let checkboxgroup = mount(<CheckboxGroup  {...data}/>);
    console.log(checkboxgroup.at(0).children(),11)
    // checkboxgroup.children().at(0).simulate('click');
    console.log(checkboxgroup.find(styles['checkbox--wrapper']).length,999);
    // expect(checkboxgroup.children()).to.have.length(plainOptions.length);
    expect(checkboxgroup.at(0).children().at(0).props.checked).to.equal(false);
  });
});
