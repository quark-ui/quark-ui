//npm run test-unit './src/components/select/test/Select.test.js'

/**
 * Select test
 * @author heifade
 */
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Select from '../Select';
import Option from '../Option';
import styles from '../Select.css';


describe('Select-test-describe----------', () => {

  class SelectTest extends Component {
    constructor() {
      super();
      this.state = {
        disabled: false,
        value: null,
        text: null,
      };
    }
    onChange = ({ text, value }) => {
      this.setState({
        value,
        text,
      });
    }
    setDisabled = () => {
      this.setState({
        disabled: !this.state.disabled,
      });
    }
    setSelect = () => {
      this.setState({
        value: 'B',
      });
    }

    render() {
      const { value, disabled } = this.state;
      return (
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="C" value={value} onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
        </Select>
      );
    }
  }

  it('Select type of dropdown can render', () => {
    const select = mount(<SelectTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();

    triggerBtn.simulate('click');

    // expect(select.hasClass(styles['select'])).to.equal(true);

    console.log(select.debug());

  });


  // it('Select type of combobox can render', () => {
  //   const select = mount(<Select type="combobox">
  //   </Select>);

  //   expect(select.hasClass(styles['select'])).to.equal(true);
  // });
});
