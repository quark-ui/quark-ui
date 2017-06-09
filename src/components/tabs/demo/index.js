import { Component } from 'react';
import Icon from '../../icon';
import Radio from '../../radio';
import Button from '../../Button';
import CSSModules from 'react-css-modules';
import Tabs from '../Tabs';
import styles from '../../../styles/demo.css';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;


@CSSModules(styles)
export default class TabsDemo extends Component {

   constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', eventKey: '1', closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', eventKey: '2'},
      { title: 'Tab 3', content: 'Content of Tab 3', eventKey: '3'},
    ];
    this.state = {
      activeKey: panes[0].eventKey,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
   remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if ((pane.eventKey) === targetKey) {
        lastIndex = i - 1;
      }
    });
    
    const panes = this.state.panes.filter(pane => (pane.eventKey) !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].eventKey;
    }
    this.setState({ panes, activeKey });
  }

  add = ()=>{
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', eventKey: activeKey });
    this.setState({ panes, activeKey });
  }


  radioOnChange = (e)=> {
    console.log(`radio checked:${e.target.value}`);
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
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                  </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>禁用</span>
                <p>对某项实行禁用</p>
                <div>
                    <Tabs defaultActiveKey=".0:$.$2" onChange={this.onChange}>
                      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                      <TabPane tab="Tab 3" disabled key="3">Content of Tab Pane 3</TabPane>
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
                    <Tabs tabPosition={'vertical'} style={{ height: 'auto' }}>
                      {this.state.panes.map(pane => <TabPane tab={pane.title} eventKey={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>卡片式</span>
                <p>卡片式的页签，常用于容器顶部</p>
                <div>
                    <Tabs type="card">
                      {this.state.panes.map(pane => <TabPane tab={pane.title} eventKey={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </div>
            </div>
            <div styleName="code__temp">
                <span>新增和关闭页签</span>
                <p>支持用户关闭</p>
                <div style={{ marginBottom: 16 }}>
                  <Button onClick={this.add}>ADD</Button>
                </div>
                <div>
                    <Tabs type="edit-card" onChange={this.onChange} onEdit={this.onEdit}>
                        {this.state.panes.map(pane => <TabPane tab={pane.title} eventKey={pane.eventKey} closable={pane.closable}>{pane.content}</TabPane>)}
                    </Tabs>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
