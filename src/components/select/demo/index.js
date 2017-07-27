import { Component } from 'react';
import Button from '../../button/Button';
import Select from '../Select';
import OptGroup from '../OptGroup';
import Option from '../Option';
import querystring from 'querystring';
import jsonp from 'fetch-jsonp';

class SelectDemo1 extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
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

  onChange = ({ title, value }) => {
    console.log(value, title);
  }

  render() {
    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button> &nbsp;&nbsp;
        <Button onClick={this.setSelect}>{ '选中BB' }</Button>
        <h3>基本使用</h3>
        <p />
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.value} onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
          <Option value="E">EE</Option>
          <Option value="F">FF</Option>
          <Option value="G">GG</Option>
        </Select>

        <h3>非受控</h3>
        <p />
        <Select style={{ width: 250 }} disabled={this.state.disabled} defaultValue='B' onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
          <Option value="E">EE</Option>
          <Option value="F">FF</Option>
          <Option value="G">GG</Option>
        </Select>

        <h3>分组</h3>
        <p />
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.value} onChange={this.onChange}>
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

        <h3>复杂选项。</h3>
        <p />
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.value} onChange={this.onChange}>
          <Option value="A" title="李大力">
            <div>李大力</div><div>1354534324</div><div>杭州萧山区民和路</div>
          </Option>
          <Option value="B" title="李启">
            <div>李启</div><div>1356664324</div><div>杭州江干区</div>
          </Option>
          <Option value="C" title="李宇">
            <div>李宇</div><div>1377534324</div><div>杭州富阳</div>
          </Option>
          <Option value="D" title="李琦">
            <div>李琦</div><div>1354554324</div><div>杭州滨江区江</div>
          </Option>
          <Option value="E" title="李小燕">
            <div>李小燕</div><div>1387564324</div><div>上海黄埔区</div>
          </Option>
        </Select>
      </div>
    );
  }
}

class SelectDemo2 extends Component {

  constructor() {
    super();
    this.state = {
      disabled: false,
      searchFetching: false,
      searchData: [],
    };
  }

  setDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  onSearch = (value) => {
    this.setState({ searchFetching: true });
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then((d) => {
        const result = d.result;
        const data = [];
        result.forEach((r) => {
          data.push({
            value: r[0],
            text: r[0],
          });
        });
        this.setState({
          searchData: data,
          searchFetching: false,
        });
      });
  }

  onChange = ({ value, title }) => {
    console.log('onChange', value, title);
  }

  render() {
    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button>

        <h3>带搜索框。</h3>
        <p />
        <Select
          style={{ width: 250 }}
          disabled={this.state.disabled}
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
      </div>
    );
  }
}

class SelectDemo3 extends Component {

  constructor() {
    super();
    this.state = {
      disabled: false,
      province: null,
    };
  }

  setDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  onChangeProvince = ({ value, title }) => {
    this.setState({
      province: value,
    });
  }
  onChangeCity = ({ value, title }) => {
    // console.log('onChange', value, text);
  }

  getCitysByProvince = (province) => {
    switch (province) {
      case '1':
        return [{ value: '11', text: '杭州' },
        { value: '12', text: '湖州' },
        { value: '13', text: '绍兴' }];
      case '2':
        return [{ value: '21', text: '广州' },
        { value: '22', text: '东莞' },
        { value: '23', text: '中山' }];
      case '3':
        return [{ value: '31', text: '福州' },
        { value: '32', text: '泉州' },
        { value: '33', text: '厦门' }];
      default:
        return [];
    }
  }

  render() {
    const citys = this.getCitysByProvince(this.state.province).map((v, i) => <Option value={v.value} text={v.text} key={i} />);

    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button>
        <h3>联动。</h3>
        <p />
        省：
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.value} onChange={this.onChangeProvince}>
          <Option value="1">浙江省</Option>
          <Option value="2">广东省</Option>
          <Option value="3">福建省</Option>
        </Select>
        市：
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.value} onChange={this.onChangeCity}>
          {citys}
        </Select>
      </div>
    );
  }
}

export default class UploadDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <SelectDemo1 />
        <br /><br />
        <SelectDemo2 />
        <br /><br />
        <SelectDemo3 />
      </div>
    );
  }
}
