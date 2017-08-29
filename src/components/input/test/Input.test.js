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

  
  // it('calls componentWillMount',()=>{
  //   const props = {
  //     mask: "1111-1111-1111-1111",
  //     value: "1234-1234-1234-1234",
  //   }

  //   sinon.spy(CardInput.prototype, 'componentWillMount');
  //   const app = mount(<CardInput {...props} />);

  //   console.log(app.debug());

  //   expect(CardInput.prototype.componentWillMount.calledOnce).to.equal(true);
  // })


  it('propTypes  can do',()=>{
    const props = {
      size: "large",
      mask: "1111-1111-1111-1111",
      value: '1234-1234-1234-1234',
      disabled: true,
    }

    const app = shallow(<CardInput {...props} />);
    expect(app.hasClass(styles['input__large'])).to.equal(true);
    expect(app.hasClass(styles['input__disabled'])).to.equal(true);
  })


  it('input change value',()=>{
    // const onChange = sinon.spy();

    // const props = {
    //   mask: "1111-1111-1111-1111",
    //   value: "1234-1234-1234-1234",
    //   onChange: (e) => {
    //     app.setState({ value: e.target.value });
    //     console.log(value)
    //   },
    // }

    // let app = shallow(<CardInput {...props} />);
    // console.log('1111111111',app.debug());
    // app.find('input').simulate('change', { target: { value: '4567-4567-4567-4567' } });


    // console.log('222222222222222222',app.debug());
    // expect(app.find('input').props.value).to.equal('4567-4567-4567-4567');

  })



});