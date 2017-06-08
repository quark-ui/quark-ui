import { Component } from 'react';
import Icon from '../../icon';
import CSSModules from 'react-css-modules';
import Tabs from '../Tabs';
import styles from '../../../styles/demo.css';
const TabPane = Tabs.TabPane;

@CSSModules(styles)
export default class TabsDemo extends Component {
  onChange = (key) => {
    // console.log(key);
  }

  render() {
    return (
      <div>
        <section styleName="code__box">
            <div styleName="code__temp">
                <span>基本</span>
                <p>标准线条式页签</p>
                <div>
                  <Tabs onChange={this.onChange}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                  </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>禁用</span>
                <p>对某项实行禁用</p>
                <div>
                    <Tabs onChange={this.onChange}>
                      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                      <TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
                      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>迷你</span>
                <p>用在狭小的区块或子级Tab</p>
                <div>
                    <Tabs onChange={this.onChange} size="small">
                      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                      <TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
                      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>带图标</span>
                <p>带图标的Tab</p>
                <div>
                    <Tabs>
                      <TabPane tab={<span><Icon size={18} name="account" />Tab 1</span>} key="1">
                        Tab 1
                      </TabPane>
                      <TabPane tab={<span><Icon size={18} name="account" />Tab 2</span>} key="2">
                        Tab 2
                      </TabPane>
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>纵向</span>
                <p>纵向的Tab</p>
                <div>
                    <Tabs tabPosition={'vertical'} style={{ height: 220 }}>
                      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                      <TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
                      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>卡片式</span>
                <p>卡片式的页签，常用于容器顶部</p>
                <div>
                    <Tabs type="card">
                      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                      <TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
                      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
