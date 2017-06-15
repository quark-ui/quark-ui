import { Component } from 'react';
import Icon from '../../icon';
import Radio from '../../radio';
import Button from '../../button';
import CSSModules from 'react-css-modules';
import Tabs from '../Tabs';
import Panel from '../Panel';
Tabs.Panel = Panel;

export default class TabsDemo extends Component {

  constructor(props) {
    super(props);
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: 1, closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', key: 2 },
      { title: 'Tab 3', content: 'Content of Tab 3', key: 3 },
    ];

    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  
  deleteButton = ()=> {
    let data = this.state.panes;
    let activeKey = this.state.activeKey;
    data.splice(activeKey, 1); 
    
    if (data.length <= activeKey + 1)
      activeKey = data.length - 1;
    this.setState({
      panes: data,
      activeKey: activeKey
    })
  }

  onClick = (key)=> {
    this.setState({activeKey: key})
  }

  render() {

    return (
      <div className="markdown-block">

          <h3>基本</h3>
            <p>标准线条式页签</p>
              <Tabs 
                  activeKey={this.state.activeKey} 
                  onClick={this.onClick} >
                {this.state.panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
              </Tabs>
            <h3>禁用</h3>
            <p>对某项实行禁用</p>
            <Tabs
              activeKey={this.state.activeKey}
              onClick={this.onClick}
              >
                <Panel title={<span><Icon size={18} name="account" />Tab 1</span>} key="1">
                  Tab 1
                </Panel>
                <Panel title={<span><Icon size={18} name="account" />Tab 2</span>} key="2">
                  Tab 2
                </Panel>
                <Panel title={<span><Icon size={18} name="account" />Tab 3</span>} key="3" disabled >
                  Tab 3
                </Panel>
            </Tabs>
            <h3>迷你</h3>
            <p>用在狭小的区块或子级Tab</p>
            <Tabs 
                size={'small'}
                activeKey={this.state.activeKey} 
                onClick={this.onClick} >
              {this.state.panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
            </Tabs>
            <h3>带图标</h3>
            <p>带图标的Tab</p>
            <Tabs
              activeKey={this.state.activeKey}
              onClick={this.onClick}
              >
                <Panel title={<span><Icon size={18} name="account" />Tab 1</span>} key="1">
                  Tab 1
                </Panel>
                <Panel title={<span><Icon size={18} name="account" />Tab 2</span>} key="2">
                  Tab 2
                </Panel>
                <Panel title={<span><Icon size={18} name="account" />Tab 3</span>} key="3" >
                  Tab 3
                </Panel>
            </Tabs>
            <h3>纵向</h3>
            <p>纵向的Tab</p>
              <Tabs 
                  activeKey={this.state.activeKey}
                  tabPosition={'left'} 
                  onClick={this.onClick} >
                {this.state.panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
              </Tabs>
            <h3>卡片式</h3>
            <p>卡片式的页签，常用于容器顶部</p>
            <Tabs activeKey={this.state.activeKey}
                type={'card'} 
                tabDeleteButton={true}
                deleteButton={this.deleteButton}
                onClick={this.onClick}
            >
              {this.state.panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
            </Tabs>
            <br />
            <p>button可作为更次级的页签来使用</p>
            <Tabs activeKey={this.state.activeKey}
                type={'button'} 
                onClick={this.onClick}
            >
              {this.state.panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
            </Tabs>
            
      </div>
    );
  }
}
