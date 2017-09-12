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

  // 授控
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
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="A" value={value} onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
        </Select>
      );
    }
  }

  // 非授控
  class SelectNotControlTest extends Component {
    constructor() {
      super();
      this.state = {
        disabled: false,
        text: null,
      };
    }
    onChange = ({ text, value }) => {
      
    }
    setDisabled = () => {
      this.setState({
        disabled: !this.state.disabled,
      });
    }

    render() {
      const { value, disabled } = this.state;
      return (
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="B" onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
        </Select>
      );
    }
  }

  // 带搜索框
  class ComboboxTest extends Component {
    constructor() {
      super();
      this.state = {
        disabled: false,
        value: null,
        text: null,
        searchData: [],
      };
    }
    onSearch = (value) => {
      let list = [];
      if(value == '1') {
        list = [
          {value: '1', text: '1'},
        ]
      }
      else if(value == '2') {
        list = [
          {value: '2', text: '2'},
          {value: '22', text: '22'},
        ]
      }

      this.setState({
        searchData: list,
      });
    }
    onChange = ({ value, text }) => {
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
    

    render() {
      return (
        <Select
          style={{ width: 250 }}
          disabled={this.state.disabled}
          value={this.state.value}
          text={this.state.text}
          type="combobox"
          onSearch={this.onSearch}
          onCancelChange={this.onCancelChange}
          onChange={this.onChange}
          placeholder="请输入查询条件"
        >
        {
          this.state.searchData.map(d => <Option key={d.value} value={d.value}>{d.text}</Option>)
        }
        </Select>
      );
    }
  }


  it('Select type of dropdown disabled can render', () => {
    const select = mount(<Select style={{ width: 250 }} disabled={true} defaultValue="C">
      <Option value="A">AA</Option>
      <Option value="B">BB</Option>
    </Select>);

    expect(select.find(`.${styles.selection}`).hasClass(`${styles.disabled}`)).to.equal(true);
  });

  it('Select type of dropdown can render', () => {
    const select = mount(<SelectTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();
    triggerBtn.simulate('click');
    
    expect(global.document.getElementsByClassName(`${styles.dropdown}`).length).to.equal(1); // 有1个下拉弹框
    expect(global.document.getElementsByClassName(`${styles.option}`).length).to.equal(2);  // 有2个选项(AA,BB)

    //选中A
    select.setState({
      value: 'B',
    });

    let option = global.document.body.getElementsByClassName(`${styles['active']}`)[0];
    expect(option.innerHTML).to.equal('BB');
    option.click();
    expect(triggerBtn.find(`.${styles['selectionClose']}`).find('span').text()).to.equal('BB');
  });

  it('Select type of dropdown notControl can render', () => {
    const select = mount(<SelectNotControlTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();
    triggerBtn.simulate('click');

    //选中A
    select.setState({
      value: 'B',
    });

    let option = global.document.body.getElementsByClassName(`${styles['active']}`)[0];

    console.log(global.document.body.getElementsByClassName(`${styles['active']}`).length);

    expect(option.innerHTML).to.equal('BB');


    option.click();

    expect(triggerBtn.find(`.${styles['selectionClose']}`).find('span').text()).to.equal('BB');


  });


  it('Select type of combobox can render', () => {
    const select = mount(<ComboboxTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let searchTextBox = select.find(`.${styles['comboboxInput']}`).first();

    searchTextBox.get(0).value = '1';
    searchTextBox.simulate('change');
    // 这里由于debounce的原因没法同步测试

    searchTextBox.get(0).value = '';
    searchTextBox.simulate('change');
    // 这里由于debounce的原因没法同步测试

    



    select.setState({
      text: '11',
    });

    expect(searchTextBox.get(0).value).to.equal('11');
    

  });
});
