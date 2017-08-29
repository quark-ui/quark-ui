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
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ disabled ? '启用' : '禁用'}</Button> &nbsp;&nbsp;
        <Button onClick={this.setSelect}>{ '选中BB' }</Button>
        <h3>受控</h3>
        <p />
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="C" value={value} onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
          <Option value="E">EE</Option>
          <Option value="F">FF</Option>
          <Option value="G">GG</Option>
        </Select>
        <span>选中值:{`${this.state.value},${this.state.text}`}</span>

        <h3>非受控</h3>
        <p />
        <Select style={{ width: 250 }} disabled={disabled} defaultValue="C" onChange={this.onChange}>
          <Option value="A">AA</Option>
          <Option value="B">BB</Option>
          <Option value="C">CC</Option>
          <Option value="D">DD</Option>
          <Option value="E">EE</Option>
          <Option value="F">FF</Option>
          <Option value="G">GG</Option>
        </Select>
        <span>选中值:{`${this.state.value},${this.state.text}`}</span>
      </div>
    );
  }
}


class SelectDemo2 extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
      value: null,
      text: null,
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

  onChange = ({ text, value }) => {
    this.setState({
      value,
      text,
    });
  }

  render() {
    const { value, disabled } = this.state;

    return (
      <div className="markdown-block">
        <h3>分组</h3>
        <p />
        <Select style={{ width: 250 }} disabled={disabled} value={value} onChange={this.onChange}>
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
        <span>选中值:{`${this.state.value},${this.state.text}`}</span>

        <h3>复杂选项。</h3>
        <p />
        <Select style={{ width: 250 }} disabled={disabled} value={value} onChange={this.onChange}>
          <Option value="A" text="李大力">
            <div>李大力</div><div>1354534324</div><div>杭州萧山区民和路</div>
          </Option>
          <Option value="B" text="李启">
            <div>李启</div><div>1356664324</div><div>杭州江干区</div>
          </Option>
          <Option value="C" text="李宇">
            <div>李宇</div><div>1377534324</div><div>杭州富阳</div>
          </Option>
          <Option value="D" text="李琦">
            <div>李琦</div><div>1354554324</div><div>杭州滨江区江</div>
          </Option>
          <Option value="E" text="李小燕">
            <div>李小燕</div><div>1387564324</div><div>上海黄埔区</div>
          </Option>
        </Select>
        <span>选中值:{`${this.state.value},${this.state.text}`}</span>
      </div>
    );
  }
}


class SelectDemo3 extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
      searchFetching: false,
      value: null,
      text: null,
      searchData: [],
    };
  }

  setDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  setDefaultValue = () => {
    this.setState({
      value: 'CPU',
      text: 'CPU',
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

  onChange = ({ value, text }) => {
    this.setState({
      value,
      text,
    });
  }

  render() {
    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button> &nbsp;&nbsp;
        <Button onClick={this.setDefaultValue}>设值</Button>
        <h3>带搜索框。</h3>
        <p />
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

        <span>选中值:{`${this.state.value},${this.state.text}`}</span>
      </div>
    );
  }
}

class SelectDemo4 extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      text: null,
      disabled: false,
      province: null,
      city: null,
    };
  }

  setDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  onChangeProvince = ({ value, text }) => {
    this.setState({
      province: value,
      provinceText: text,
      city: null,
      cityText: null,
    });
  }
  onChangeCity = ({ value, text }) => {
    this.setState({
      city: value,
      cityText: text,
    });
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
    const citys = this.getCitysByProvince(this.state.province).map((v, i) => <Option value={v.value} key={i}>{v.text}</Option>);

    return (
      <div className="markdown-block">
        <Button onClick={this.setDisabled}>{ this.state.disabled ? '启用' : '禁用'}</Button>
        <h3>联动。</h3>
        <p />
        省：
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.province} onChange={this.onChangeProvince}>
          <Option value="1">浙江省</Option>
          <Option value="2">广东省</Option>
          <Option value="3">福建省</Option>
        </Select>
        市：
        <Select style={{ width: 250 }} disabled={this.state.disabled} value={this.state.city} onChange={this.onChangeCity}>
          {citys}
        </Select>
        <span>选中值:{`${this.state.province}-${this.state.provinceText},${this.state.city}-${this.state.cityText}`}</span>
      </div>
    );
  }
}

export default class SelectDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <SelectDemo1 />
        <br /><br />
        <SelectDemo2 />
        <br /><br />
        <SelectDemo3 />
        <br /><br />
        <SelectDemo4 />
      </div>
    );
  }
}
