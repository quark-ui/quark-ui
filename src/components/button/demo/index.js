import Button from '../Button';
import { Component } from 'react';

export default class ButtonDemo extends Component {
  render() {
    return (
      <div>
        <h3>按钮类型</h3>
        <table>
          <thead>
            <tr>
              <th>主按钮</th>
            </tr>
            <tr>
              <th>次按钮</th>
            </tr>
            <tr>
              <th>虚线按钮</th>
            </tr>
            <tr>
              <th>危险按钮</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Button type="primary">主按钮</Button></td>
            </tr>
            <tr>
              <td><Button type="secondary">次按钮</Button></td>
            </tr>
            <tr>
              <td><Button type="dashed">虚线按钮</Button></td>
            </tr>
            <tr>
              <td><Button type="danger">危险按钮</Button></td>
            </tr>
          </tbody>
        </table>
        <h3>按钮尺寸</h3>
        <Button size="large">主要按钮(大)</Button>
        &nbsp;
        <Button>主要按钮(中)</Button>
        &nbsp;
        <Button size="small">主要按钮(小)</Button>
        <h3>不可用状态</h3>
        <Button size="large" disabled>不可用按钮</Button>
        &nbsp;
        <Button disabled>不可用按钮</Button>
        &nbsp;
        <Button size="small" disabled>不可用按钮</Button>
      </div>
    );
  }
}
