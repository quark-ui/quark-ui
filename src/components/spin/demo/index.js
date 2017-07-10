import { Component } from 'react';
import Spin from '../Spin';
import Alert from '../../alert';
import Button from '../../button';
import style from './index.css';

export default class SpinDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow1: false,
      isShow2: false,
    };
  }

  swichHandle1 = () => {
    this.setState({
      isShow1: !this.state.isShow1
    })
  }

  swichHandle2 = () => {
    this.setState({
      isShow2: !this.state.isShow2
    })
  }

  render() {
    return (
      <div className="markdown-block">
        <h3>基本用法</h3>
        <Spin />
        <h3>自定义大小</h3>
        <table>
          <thead>
            <tr>
              <th>小</th>
              <th>中</th>
              <th>大</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <Spin size="small" />
              </td>
              <td>
                  <Spin size="default" />
              </td>
              <td>
                  <Spin size="large" />
              </td>
            </tr>
          </tbody>
        </table>
        <h3>自定义描述文案</h3>
        <table>
          <thead>
            <tr>
              <th>小</th>
              <th>中</th>
              <th>大</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <Spin size="small" tip="loading..." />
              </td>
              <td>
                  <Spin size="default" tip="loading..." />
              </td>
              <td>
                  <Spin size="large" tip="loading..." />
              </td>
            </tr>
          </tbody>
        </table>
        <h3>容器中使用</h3>
        <div className={style.example1}>
          <Spin />
        </div>
        <div className={style.example1}>
          <Spin tip="loading..." />
        </div>
        <h3>提示中使用</h3>
        <div>
          <Spin spinning={this.state.isShow1}>
            <Alert
              type="info"
              message="警告提示内容"
              description={`警告提示的辅助性文字介绍警告提示的辅助
              性文字介绍警告提示的辅助性文字介绍警告提示的辅助性文
              字介绍警告提示的辅助性文字介绍警告提示的辅助性文字介
              绍警告提示的辅助性文字介绍警告提示的辅助性文字介绍警
              告提示的辅助性文字介绍警告提示的辅助性文字介绍`}
            />
          </Spin>
          <p>
            <Button type="primary" onClick={this.swichHandle1}>显示/隐藏</Button>
          </p>
        </div>
        <h3>延迟</h3>
        <div>
          <Spin spinning={this.state.isShow2} delay={600}>
            <Alert
              type="info"
              message="警告提示内容"
              description={`警告提示的辅助性文字介绍警告提示
              的辅助性文字介绍警告提示的辅助性文字介绍警告提示
              的辅助性文字介绍警告提示的辅助性文字介绍警告提示
              的辅助性文字介绍警告提示的辅助性文字介绍警告提示
              的辅助性文字介绍警告提示的辅助性文字介绍警告提示
              的辅助性文字介绍`}
            />
          </Spin>
          <p>
            <Button type="primary" onClick={this.swichHandle2}>显示/隐藏</Button>
          </p>
        </div>
      </div>
    );
  }
}
