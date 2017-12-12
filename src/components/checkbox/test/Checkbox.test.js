import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import styles from '../Checkbox.css';

describe('checkbox-test-describe----------', () => {
  it('checkbox can render', () => {
    const checkbox = shallow(<Checkbox />);
    expect(checkbox.find(`.${styles['checkbox--wrapper']}`).length).to.equal(1);
    expect(checkbox.find('span').length).to.equal(2);
  });
  it('checkbox-----is checked true--', () => {
    const data = {
      prefixCls: 'checkbox',
      checked: true,
    };
    const checkbox = shallow(<Checkbox {...data} />);
    checkbox.simulate('change');
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
  });
  it('checkbox defaultChecked is true', () => {
    const data = {
      defaultChecked: true,
    };
    const checkbox = shallow(<Checkbox {...data} />);
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
    checkbox.instance().componentWillReceiveProps({'checked': false});
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
  });

  it('checkbox----ischecked- then cancle, no checked props', () => {
    const data = {
      prefixCls: 'checkbox',
      defaultChecked: true,
      onChange: (e) => {
        checkbox.setState({ checked: e.target.checked });
      },
    };
    let checkbox = mount(<Checkbox {...data} />);
    checkbox.find('input').simulate('change', { target: { checked: false } });
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
  });

  it('checkbox----disable defaultChecked- then cancle , ischecked', () => {
    const data = {
      disabled: true,
      defaultChecked: true,
      onChange: (e) => {
        checkbox.setState({ checked: e.target.checked });
      },
    };
    let checkbox = mount(<Checkbox {...data} />);
    checkbox.find('input').simulate('change', { target: { checked: false } });
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
    expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(true);
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(
      true,
    );
    checkbox.find('input').simulate('click');
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(
      true,
    );
    expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(
      true,
    );
  });

  it('checkbox----checked , onChange ', () => {
    const data = {
      checked: true
    };
    let checkbox = mount(<Checkbox {...data} />);
    checkbox.simulate('change');
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
  });
});

describe('checkboxgroup test', () => {
  it('checkboxgroup can render', () => {
    const checkboxgroup = shallow(<CheckboxGroup />);
    expect(checkboxgroup.hasClass(styles['checkbox--group'])).to.equal(true);
    expect(checkboxgroup.find('div').length).to.equal(1);
  });

  it('checkboxGroup-----length----', () => {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      options: plainOptions,
      value: defaultCheckedList,
    };
    const checkboxgroup = shallow(<CheckboxGroup {...data} />);
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
  });

  it('checkboxGroup----options is object----', () => {
    const plainOptions = [
      { label: 'Apple', value: '1', disabled: false },
      { label: 'Pear', value: '2', disabled: false },
      { label: 'Orange', value: '3', disabled: false },
    ];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      options: plainOptions,
      value: defaultCheckedList,
    };
    const checkboxgroup = mount(<CheckboxGroup {...data} />);
    checkboxgroup.setState({ value: defaultCheckedList });
    checkboxgroup.setProps({ value: defaultCheckedList });
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
  });

  it('checkboxgroup has checkbox', () => {
    const data = {
      disabled: true
    };
    const checkboxgroup = mount(
      <CheckboxGroup {...data}>
        <Checkbox value="a"/>
      </CheckboxGroup>,
    );
    expect(checkboxgroup.find('Checkbox').hasClass(styles['checkbox--wrapper__disabled'])).to.equal(true);
  });

  it('checkboxgroup has checkbox-------toggleOption', () => {
    const data = {
      onChange : (e) => { 
        console.log(e,111111);
      }
    };
    const checkboxgroup = mount(
      <CheckboxGroup {...data}>
        <Checkbox value="a"/>
      </CheckboxGroup>,
    );
    expect(checkboxgroup.find('Checkbox').hasClass(styles['checkbox--wrapper'])).to.equal(true);

    checkboxgroup.setState({value:['11','22','33']});
    checkboxgroup.instance().toggleOption({value:'44'});
    expect(checkboxgroup.state().value.length).to.equal(4);
    
  });

  it('checkboxGroup----has checkbox, checkbox option----', () => {
    const plainOptions = [
      { label: 'Apple', value: '1', disabled: false },
      { label: 'Pear', value: '2', disabled: false },
      { label: 'Orange', value: '3', disabled: false },
    ];
    const defaultCheckedList = ['Apple'];

    const checkboxgroup = mount(
      <CheckboxGroup>
        <Checkbox {...plainOptions[0]} />
      </CheckboxGroup>,
    );
    checkboxgroup.setProps({ value: defaultCheckedList });
    checkboxgroup.setState({value: defaultCheckedList});
    checkboxgroup.find('Checkbox').simulate('change');
    expect(checkboxgroup.children()).to.have.length(1);
  });
});
