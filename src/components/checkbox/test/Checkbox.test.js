import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import styles from '../Checkbox.css';

describe('checkbox-test-describe----------', () => {
  
  it('checkbox-----is checked true and disabled false--', () => {
      const data = {
        prefixCls: 'checkbox',
        checked: true,
        disabled: false,
        onChange: (e) => {
          checkbox.setState({ checked: e.target.checked });
        },
      };
      const checkbox = mount(<Checkbox {...data} />);
      
      expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
      checkbox.instance().handleChange( { target: { checked: false } });
      expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
    });
  it('checkbox-----is checked false and disabled false--', () => {
    const data = {
      prefixCls: 'checkbox',
      disabled: false,
      onChange: (e) => {
        checkbox.setState({ checked: e.target.checked });
      },
    };
    const checkbox = mount(<Checkbox {...data} />);
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
    expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(false);
    checkbox.instance().handleChange( { target: { checked: true } });
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
    expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(false);
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
    expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
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
        checkbox.instance().handleChange();
        expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(false);
        expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(true);
        checkbox.find('input').simulate('change', { target: { checked: true } });
        expect(checkbox.hasClass(styles['checkbox--wrapper__checked'])).to.equal(true);
        expect(checkbox.hasClass(styles['checkbox--wrapper__disabled'])).to.equal(true);
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
    checkboxgroup.instance().componentWillReceiveProps({value:1});
    checkboxgroup.instance().componentWillReceiveProps({});
    checkboxgroup.instance().componentWillReceiveProps({value:null});
    expect(checkboxgroup.children().length).to.equal(0);
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
      value: ['Apple'],
    };
    const checkboxgroup = mount(<CheckboxGroup {...data} />);
    checkboxgroup.setState({ value: defaultCheckedList });
    checkboxgroup.setProps({ value: defaultCheckedList });
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
    checkboxgroup.find('input').first().simulate('change');
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
      onChange : null
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
    checkboxgroup.instance().toggleOption({value:'33'});
    expect(checkboxgroup.state().value.length).to.equal(3);
  });

  it('checkboxGroup----has checkbox, checkbox option----', () => {
    const plainOptions = [
      { label: 'Apple', value: '1', disabled: false },
      { label: 'Pear', value: '2', disabled: false },
      { label: 'Orange', value: '3', disabled: false },
    ];
    const defaultCheckedList = ['Apple'];
    const props = {
      value : ['Apple']
    }
    const checkboxgroup = mount(
      <CheckboxGroup {...props}>
        <Checkbox {...plainOptions[0]} />
        <Checkbox {...plainOptions[1]} />
        <Checkbox {...plainOptions[2]} />
      </CheckboxGroup>,
    );
    expect(checkboxgroup.children()).to.have.length(3);
    checkboxgroup.find('Checkbox').first().simulate('change');
    checkboxgroup.find('input').first().simulate('change',{ label: 'Apple', value: '1', disabled: false });
    checkboxgroup.instance().toggleOption({ label: 'Apple', value: '1', disabled: false });
  });
});
