import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Input from '../Input';
import CardInput from '../CardInput';
import Icon from '../../Icon';
import styles from '../Input.css';

describe('input-test-describe----------', () => {
  
  it('input render',()=>{
    const props = {
      type:'text',
      size: 'normal',
      placeholder:'请输入',
      defaultValue:'12312',
      disabled:false,
      autosize:false,
    }
    const app = shallow(<Input {...props} />);
    expect(app.hasClass(styles['input__wrapper'])).to.equal(true);
  })
 
  it('should require a disabled bool as props', () => {
    const props = {
      disabled:true
    }
    const app = mount(<Input {...props} />);
    expect(app.find(`input.${styles['disabled']}`).length).to.equal(1);
  });


  it('input has prefix',()=>{
    const prefix = (<Icon size={12} name={'account'} />);
    const app = shallow(<Input placeholder="请输入" prefix={prefix} />);
    expect(app.find(`span.${styles['input__prefix']}`).length).to.equal(1);
  })

  it('input has prefix',()=>{
    const suffix = (<Icon size={12} name={'account'} />);
    const app = shallow(<Input placeholder="请输入" suffix={suffix} />);
    expect(app.find(`span.${styles['input__suffix']}`).length).to.equal(1);
  })

  it('type is textarea',()=>{
    const app = shallow(<Input type="textarea" placeholder="请输入" rows={6} />);
    expect(app.find('textarea').length).to.equal(1);
  })

  it('textarea change can do',()=>{
    const app = shallow(<Input type="textarea" placeholder="请输入" rows={6} />);
    const onChange = sinon.spy();
    app.find('textarea').simulate('change');
    expect(onChange.calledOnce).to.equal(true);
  })


  it('CardInput render',()=>{
    const props = {
      size: "large",
      mask: "1111-1111-1111-1111",
      placeholder: "1234-1234-1234-1234",
      value: '123456',
    }
    const app = shallow(<CardInput {...props} />);
    expect(app.hasClass(styles['input__large'])).to.equal(true);
  })


});

