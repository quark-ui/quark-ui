import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Input from '../Input';
import CardInput from '../CardInput';
import Icon from '../../icon';
import styles from '../Input.css';

describe('input-test-describe----------', () => {
  it('input render', () => { // base
    const app = shallow(<Input />);
    expect(app.find(`.${styles['input__wrapper']}`).length).to.equal(1);
    app.setProps({ disabled:true });// disabled true
    expect(app.find(`input.${styles['disabled']}`).length).to.equal(1);
    app.setProps({ size: 'large' }); // large size
    expect(app.find('input').first().hasClass(styles['input__large'])).to.equal(true);
    app.setProps({ size: 'small' }); // small size
    expect(app.find('input').first().hasClass(styles['input__small'])).to.equal(true);
    app.setProps({ disabled: 'false' }); // disabled true
    const prefix = (<Icon size={12} name={'account'} />); // 前置图标
    app.setProps({ prefix });
    expect(app.find(`span.${styles['input__prefix']}`).length).to.equal(1);
    const suffix = (<Icon size={12} name={'account'} />); // 后置图标
    app.setProps({ suffix });
    expect(app.find(`span.${styles['input__suffix']}`).length).to.equal(1);
    app.setProps({ value: '123456789' });// 设置value
  });
  it('type is textarea', () => { //  文本域多行输入
    const app = shallow(<Input type="textarea" placeholder="请输入" rows={1} />);
    expect(app.find('textarea').length).to.equal(1);
    app.setProps({ autosize: true });
    app.setProps({ value: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111' });
  });
  it('textarea change can do', () => { // 调用change
    const onChange = sinon.spy();
    const props = {
      type: 'textarea',
      rows: '2',
      onChange,
    };
    const app = shallow(<Input {...props} />);
    app.find('textarea').simulate('change');
    expect(onChange.calledOnce).to.equal(true);
  });
});

describe('cardInput-test-describe----------', () => {
  it('propTypes  can do', () => {
    const props = {
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    expect(app.find('input').first().hasClass(styles['input__normal'])).to.equal(true);// normal size
    
    app.setProps({ size: 'small' }); // small size
    expect(app.find('input').first().hasClass(styles['input__small'])).to.equal(true);

    app.setProps({ size: 'large' }); // large size
    expect(app.find('input').first().hasClass(styles['input__large'])).to.equal(true);

    app.setProps({ disabled: true });
    expect(app.hasClass(styles['input__disabled'])).to.equal(true); // 不可编辑
    app.setProps({ disabled: false }); // 可编辑
    app.setProps({ mask: '11111-11111-11111-11111' });

    app.find('input').first().simulate('keyPress', { key: 'Enter' });
  });


  it('mask is A111-1111-1111-1111', () => {
    const props = {
      mask: 'A111-1111-1111-1111',
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    expect(app.get(0).props.value).to.equal('_234-1234-1234-1234');
  });

  it('props onChange', () => {
    const onChange = sinon.spy();
    const props = {
      mask: "1111-1111-1111-1111",
      onChange,
    };
    const app = mount(<CardInput {...props} />);
    app.find('input').first().simulate('change', { target: { value: '1111-1111-1111-1113' } });
    expect(onChange.calledOnce).to.equal(true);
  });

  it('onKeyDown && e.metaKey || e.altKey || e.ctrlKey || e.key === Enter', () => {
    const onChange = sinon.spy();
    const props = {
      mask: "1111-1111-1111-1111",
      onChange: (e) =>{
        const value = e.target.value;
        app.setState({ value });
      },
    };
    const app = mount(<CardInput {...props} />);
    const input = app.find('input').get(0);
    input.value = '1';
    app.find('input').first().simulate('keyPress', { ctrlKey: '2', preventDefault() {} });

    app.find('input').first().simulate('keyPress', { key: 'Enter', preventDefault() {} });
    app.find('input').first().simulate('keyDown', { key: '1', preventDefault() {} });
    app.setProps({ value: '1234-1234-1234-1234' });
    app.find('input').first().simulate('keyPress', { key: 'Backspace', preventDefault() {} });
  });

  it('isUndo have shiftKey', () => {
    const props = {
      mask: "1111-1111-1111-1111",
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').first().simulate('keyDown', { ctrlKey: '1', shiftKey: '1', preventDefault() {} });

  });

  it('isUndo no shiftKey', () => {
    const onChange = sinon.spy();
    const props = {
      mask: "1111-1111-1111-1111",
      onChange,
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').first().simulate('keyDown', { ctrlKey: '1', preventDefault() {} });
  });

  it('input onPaste', () => {
    const onChange = sinon.spy();
    const props = {
      mask: "1111-1111-1111-1111",
      onChange,
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').first().simulate('onPaste', { preventDefault() {} });
  });
});
