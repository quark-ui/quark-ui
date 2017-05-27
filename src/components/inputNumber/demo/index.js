import InputNumber from '../InputNumber';
import { Component } from 'react';

function onChange(value) {
  console.log('changed', value);
}

export default class InputNumberDemo extends Component {
  render() {
    return (
      <div>
        <br />
        <span>基本</span>
        <br />
          <InputNumber  style={{ width: 200 }} min={1} max={10} defaultValue={3} onChange={onChange} />
        <br />
        <span>禁用</span>
        <br />
        <InputNumber min={1} max={10} disabled={true} defaultValue={3} />
        <br />
        <span>小数</span>
        <br />
        <InputNumber min={0} max={10} defaultValue={3} step={0.11} onChange={onChange} />
        <br />
        <span>大小</span>
        <br />
        <div>
          <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
          <br /><br />
          <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
          <br /><br />
          <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
        </div>
        <br />
        <span>格式化展示</span>
        <br />
        <InputNumber
          formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1000}
          formatter={value => `¥ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          parser={value => value.replace(/\¥\s?|(,*)/g, '')}
          onChange={onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1000}
          min={0}
          formatter={value => `${value}m`}
          parser={value => value.replace('m', '')}
          onChange={onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1000}
          min={0}
          formatter={value => `${value}m³`}
          parser={value => value.replace('m³', '')}
          onChange={onChange}
        />
        <br />
      </div>
    );
  }
}
