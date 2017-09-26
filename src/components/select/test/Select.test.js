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
import OptGroup from '../OptGroup';
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
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
        </Select>
      );
    }
  }


  
  class SelectOptGroupTest extends Component {
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

    render() {
      const { value, disabled } = this.state;
      return (
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="A" value={value} onChange={this.onChange}>
          <OptGroup label="分组1">
            <Option value="A">AA</Option>
            <Option value="B">BB</Option>
          </OptGroup>
          <OptGroup label="分组2">
            <Option value="C">CC</Option>
            <Option value="D">DD</Option>
          </OptGroup>
          <OptGroup label="分组3">
            <Option value="E">EE</Option>
            <Option value="F">FF</Option>
            <Option value="G">GG</Option>
          </OptGroup>
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

    render() {
      const { value, disabled } = this.state;
      return (
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="B" onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
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
        value: 'aa',
        text: 'aa',
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
    onCancelChange = () => {

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
    document.body.innerHTML = ''; //清除上面产生的内容
    const select = mount(<Select style={{ width: 250 }} disabled={true} defaultValue="C">
      <Option value="A">AA</Option>
      <Option value="B">BB</Option>
      <Option value="C">CC</Option>
      <Option value="D">DD</Option>
    </Select>);

    expect(select.find(`.${styles.selection}`).hasClass(`${styles.disabled}`)).to.equal(true);
  });

  it('Select type of dropdown placeholder disabled can render', () => {
    document.body.innerHTML = ''; //清除上面产生的内容
    const select = mount(<Select style={{ width: 250 }} disabled={true} defaultValue="E" placeholder={"请选择"}>
      <Option value="A">AA</Option>
      <Option value="B">BB</Option>
      <Option value="C">CC</Option>
      <Option value="D">DD</Option>
    </Select>);

    expect(select.find(`.${styles.selection}`).hasClass(`${styles.disabled}`)).to.equal(true);
  });

  it('Select type of dropdown can render', () => {
    document.body.innerHTML = ''; //清除上面产生的内容
    const select = mount(<SelectTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();
    triggerBtn.simulate('click');

    let dropdowns = global.document.getElementsByClassName(`${styles.dropdown}`);
    
    expect(dropdowns.length).to.equal(1); // 有1个下拉弹框
    expect(dropdowns[0].getElementsByClassName(`${styles.option}`).length).to.equal(4);

    //选中A
    select.setState({
      value: 'B',
    });

    let option = global.document.body.getElementsByClassName(`${styles['active']}`)[0];
    expect(option.innerHTML).to.equal('BB');
    option.click();
    expect(triggerBtn.find(`.${styles['selectionClose']}`).find('span').text()).to.equal('BB');


    select.find(`.${styles.selectionCloseIcon}`).simulate('click');

    expect(triggerBtn.find(`.${styles['selection']}`).find(`span.${styles['placeholder']}`).text()).to.equal('请选择');
  });

  

  it('Select type of dropdown notControl can render', () => {
    document.body.innerHTML = ''; //清除上面产生的内容
    const select = mount(<SelectNotControlTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();
    triggerBtn.simulate('click');

    //选中A
    select.setState({
      value: 'B',
    });

    let option = global.document.body.getElementsByClassName(`${styles['active']}`)[0];
    expect(option.innerHTML).to.equal('BB');
    option.click();
    expect(triggerBtn.find(`.${styles['selectionClose']}`).find('span').text()).to.equal('BB');
  });

  it('Select type of dropdown with OptGroup can render', () => {
    document.body.innerHTML = ''; //清除上面产生的内容

    const select = mount(<SelectOptGroupTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let triggerBtn = select.find(`span`).first();
    triggerBtn.simulate('click');



    let dropdowns = global.document.getElementsByClassName(`${styles.dropdown}`);
    
    expect(dropdowns.length).to.equal(1); // 有1个下拉弹框
    expect(dropdowns[0].getElementsByClassName(`${styles.option}`).length).to.equal(7);


    //选中A
    select.setState({
      value: 'B',
    });

    let option = dropdowns[0].getElementsByClassName(`${styles['active']}`)[0];
    expect(option.innerHTML).to.equal('BB');
    option.click();
    expect(triggerBtn.find(`.${styles['selectionClose']}`).find('span').text()).to.equal('BB');
  });




  it('Select type of combobox can render', (done) => {

    document.body.innerHTML = ''; //清除上面产生的内容

    const select = mount(<ComboboxTest />);

    expect(select.hasClass(styles['select'])).to.equal(true);

    let searchTextBox = select.find(`.${styles['comboboxInput']}`).first();

    select.find(`.${styles.selectionCloseIcon}`).simulate('click');
    expect(select.find(`.${styles['selection']}`).find(`.${styles['comboboxInput']}`).prop('placeholder') ).to.equal('请输入查询条件');

    select.setState({
      text: '11',
    });

    expect(searchTextBox.get(0).value).to.equal('11');

    searchTextBox.simulate('click');

    searchTextBox.get(0).value = '2';
    searchTextBox.simulate('change');

    setTimeout(() => {

      let dropdowns = global.document.getElementsByClassName(`${styles.dropdown}`);

      let list = dropdowns[0].getElementsByClassName(`${styles.option}`);
      expect(list.length).to.equal(2);
      expect(list[0].innerHTML).to.equal('2');
      expect(list[1].innerHTML).to.equal('22');

      searchTextBox.get(0).value = '';
      searchTextBox.simulate('change');

      setTimeout(() => {

        document.body.click();


        done();
        
      }, 500);

      
    }, 500);

  });


  
});
