import InputNumber from '../InputNumber';
import { Component } from 'react';


 
function onChange(value) {
  console.log('changed', value);
}

export default class InputNumberDemo extends Component {
  render() {
    return (
      <div>
        <br/>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
        <br/>
        <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
        <br/>
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
        <br/>
        <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
      </div>
    );
  }
}
