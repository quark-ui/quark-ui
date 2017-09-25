import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Radio from '../index';
import styles from '../Radio.css';
import checkBoxStyles from '../../checkbox/Checkbox.css';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

describe('radio-test-describe----------', () => {
  it('radio can render', () => {
    const app = mount(<Radio defaultChecked disabled>&nbsp;选中</Radio>);
    expect(app.find(`label.${checkBoxStyles['radio--wrapper__disabled']}`).length).to.equal(1);
  });
  it('radio----ischecked- then cancle, no checked props', () => {
    const props = {
      defaultChecked: true,
      onChange: (e) => {
        app.setState({ checked: e.target.checked });
      },
    };
    let app = mount(<Radio {...props} />);
    app.find('input').simulate('change', { target: { checked: false } });
    expect(app.find(`.${checkBoxStyles['radio--wrapper__checked']}`).length).to.equal(1);
  });
});

describe('RadioGroup-test-describe----------', () => {
  it('radioGroup can render', () => {
    const app = shallow(<RadioGroup />);
    expect(app.find(`.${styles['radio--group']}`).length).to.equal(1);
  });

  it('options is string', () => {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const app = mount(<RadioGroup options={plainOptions} />);
    expect(app.find(`.${styles['radio--group']}`).length).to.equal(1);
  });


  it('radio checked one', () => {
    const onChange = sinon.spy();
    const props = {
      onChange,
    };
    const app = mount(
      <RadioGroup {...props}>
        <Radio value={1} checked>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
      </RadioGroup>
    );
    expect(app.find('Radio').length).to.equal(3);
    app.find('input').at(1).simulate('change');
    expect(onChange.calledOnce).to.equal(true);
  });

  it('radioGroup have defaultValue', () => {
    const app = shallow(
      <RadioGroup defaultValue="1">
        <Radio value={1} >Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
      </RadioGroup>
    );
    expect(app.find('Radio').length).to.equal(3);
  });

  it('RadioGroup length', () => {
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];
    const props = {
      value: 'Apple',
      disabled: false,
    };
    const app = mount(<RadioGroup options={optionsWithDisabled} {...props} />);
    expect(app.find('Radio').length).to.equal(3);
    expect(app.find(`.${checkBoxStyles['radio--wrapper__checked']}`).length).to.equal(1);

    const spy = sinon.spy(RadioGroup.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).to.equal(false);
    app.setProps({ value : 'Pear' });
    expect(spy.calledOnce).to.equal(true);
  });

  it('RadioGroup have radioButton', () => {
    const app = mount(
      <RadioGroup defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
      </RadioGroup>);
    expect(app.find('RadioButton').length).to.equal(2);
  });
});

describe('radioButton-test-describe----------', () => {
  it('radioButton can render', () => {
    const app = shallow(<RadioButton value={1} disabled={true} />);
    expect(app.find('Radio').length).to.equal(1);
  });
});
