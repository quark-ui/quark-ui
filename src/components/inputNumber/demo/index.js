import InputNumber from '../InputNumber';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/demo.css';


@CSSModules(styles)

export default class InputNumberDemo extends Component {
  
  onChange = (value) => {
    console.log('changed', value);
  }

  render() {
    return (
      <div>
        <section styleName="code__box">
          <div styleName="code__temp">
            <span>基本</span>
            <p>数字输入框</p>
            <p>
                <InputNumber  style={{ width: 200 }} min={1} max={10} defaultValue={3} onChange={this.onChange}/>
            </p>
          </div>
          <div styleName="code__temp">
             <span>禁用</span>
              <p>数字输入框禁用</p>
              <p>
                <InputNumber min={1} max={10} disabled={true} defaultValue={3} />
              </p>
          </div>
          <div styleName="code__temp">
             <span>小数</span>
              <p>和原生的数字输入框一样，鼠标离开输入框时自动取值。目前设定小数位两位。</p>
              <p>
                <InputNumber min={0} max={10} defaultValue={3} step={0.11} onChange={this.onChange}/>
              </p>
          </div>
          <div styleName="code__temp">
             <span>大小</span>
              <p>三种大小的数字输入框。</p>
              <p>
                <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange}/>
                <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange}/>
              </p>
          </div>
          <div styleName="code__temp">
             <span>格式化展示</span>
              <p>展示具有具体含义的数据</p>
              <p>
                <InputNumber
                  formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={this.onChange}/>
                <InputNumber
                    defaultValue={1000}
                    formatter={value => `¥ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                    parser={value => value.replace(/\¥\s?|(,*)/g, '')}
                    onChange={this.onChange}/>
                <InputNumber
                  defaultValue={1000}
                  min={0}
                  formatter={value => `${value}m`}
                  parser={value => value.replace('m', '')}
                  onChange={this.onChange}/>
                <InputNumber
                  defaultValue={1000}
                  min={0}
                  formatter={value => `${value}m³`}
                  parser={value => value.replace('m³', '')}
                  onChange={this.onChange}/>
              </p>
          </div>
        </section>
      </div>
    );
  }
}
