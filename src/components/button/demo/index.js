import Button from '../Button';
import { Component } from 'react';

export default class ButtonDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <h3>按钮类型</h3>
        <p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p>
        <table>
          <thead>
            <tr>
              <th>主按钮</th>
              <th>次按钮</th>
              <th>虚线按钮</th>
              <th>危险按钮</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Button type="primary">主按钮</Button></td>
              <td><Button type="secondary">次按钮</Button></td>
              <td><Button type="dashed">虚线按钮</Button></td>
              <td><Button type="danger">危险按钮</Button></td>
            </tr>
          </tbody>
        </table>
        <h3>按钮尺寸</h3>
        <p>按钮有大、中、小三种尺寸。</p>
        <p>通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>
        <Button size="large">主要按钮(大)</Button>
        &nbsp;
        <Button>主要按钮(中)</Button>
        &nbsp;
        <Button size="small">主要按钮(小)</Button>
        <h3>不可用状态</h3>
        <p>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
        <Button size="large" disabled>不可用按钮</Button>
        &nbsp;
        <Button disabled>不可用按钮</Button>
        &nbsp;
        <Button size="small" disabled>不可用按钮</Button>
      </div>
    );
  }
}
