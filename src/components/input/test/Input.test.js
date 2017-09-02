import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Input from '../Input';
import CardInput from '../CardInput';
import Icon from '../../icon';
import styles from '../Input.css';

describe('input-test-describe----------', () => {
  
  it('input render',()=>{
    const props = {
      type:'text',
      size: 'normal',
      placeholder:'请输入',
      value:'12312',
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


  it('type is textarea',()=>{
    const app = shallow(<Input type="textarea" placeholder="请输入" rows={6} />);
    expect(app.find('textarea').length).to.equal(1);
  })


  it('input has prefix',()=>{
    const prefix = (<Icon size={12} name={'account'} />);
    const app = shallow(<Input placeholder="请输入" prefix={prefix} />);
    expect(app.find(`span.${styles['input__prefix']}`).length).to.equal(1);
  })

  it('input has suffix',()=>{
    const suffix = (<Icon size={12} name={'account'} />);
    const app = shallow(<Input placeholder="请输入" suffix={suffix} />);
    expect(app.find(`span.${styles['input__suffix']}`).length).to.equal(1);
  })

  it('textarea change can do',()=>{
    const onChange = sinon.spy();

    const props = {
      type: 'textarea',
      rows: '2',
      onChange,
    }

    const app = shallow(<Input {...props} />);
    app.find('textarea').simulate('change');
    expect(onChange.calledOnce).to.equal(true);

  })

});

describe('cardInput-test-describe----------', () => {
  it('propTypes  can do',()=>{
    const props = {
      mask: "A111-1111-1111-1111",
      value: 'A234-1234-1234-1234',
      placeholderChar: '',
      formatCharacters: {
        'A': null
      },
      disabled: true,
    };
    const app = shallow(<CardInput {...props} />);
    expect(app.hasClass(styles['input__disabled'])).to.equal(true);
  });

  it('mask  is null',()=>{
    const props = {
      size: "large",
    };
    const app = shallow(<CardInput {...props} />);
    expect(app.hasClass(styles['input__large'])).to.equal(true);
  });

  it('input change value',()=>{
    const props = {
      size: "large",
      mask: "1111-1111-1111-1112",
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('change', { target: { value: '1111-1111-1111-1113' } });
  });

  it('input change value is mask value',()=>{
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('change', { target: { value: '1111-1111-1111-1113' } });
  });

  it('props onChange',()=>{
    const onChange = sinon.spy();
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
      onChange,
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('change', { target: { value: '1111-1111-1111-1113' } });
    expect(onChange.calledOnce).to.equal(true);
  });

  it('onKeyDown && e.metaKey || e.altKey || e.ctrlKey || e.key === Enter', () => {
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('keyPress', { ctrlKey: '1', preventDefault() {} });
    app.find('input').simulate('shiftKey', { metaKey: '1', preventDefault() {} });
    app.find('input').simulate('keyPress', { key: 'Enter', preventDefault() {} });
    app.find('input').simulate('keyDown', { key: '1', preventDefault() {} });
    // app.find('input').simulate('keyPress', { key: 'Backspace', preventDefault() {} });
  });

  it('isUndo have shiftKey', () => {
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('keyDown', { ctrlKey: '1', shiftKey: '1', preventDefault() {} });
  });

  it('isUndo no shiftKey', () => {
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('keyDown', { ctrlKey: '1', preventDefault() {} });
  });

  it('input onPaste', () => {
    const onChange = sinon.spy();
    const props = {
      size: "large",
      mask: "1111-1111-1111-1113",
      value: '1234-1234-1234-1234',
      onChange,
    };
    const app = shallow(<CardInput {...props} />);
    app.find('input').simulate('onPaste', { preventDefault() {} });
  });


});