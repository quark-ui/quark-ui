import Menu from '../Menu';
import Icon from '../../icon/Icon';
import { Component } from 'react';
import styles from './index.css';

export default class MenuDemo extends Component {

  state = {
    theme: 'dark',
    current: '.$m0',
  }

  handleClick = (e) => {
    let key = (e.key || '').replace(/\.\$/g, '');
    this.setState({
      current: e.key
    });
    console.log(key);
  }

  render() {
    return (
      <div>
        1、水平菜单，子菜单水平
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            styleName={"menu"}
            selectedKeys={[this.state.current]}
            type="horizontal-h">

            <Menu.Item key="m0">
              <Icon className="icon" size={14} name={"paper"}/>
              菜单按钮
            </Menu.Item>
            <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单</span></span>}>
              <Menu.Item key="m1i1">二级菜单1</Menu.Item>
              <Menu.Item key="m1i2">二级菜单2</Menu.Item>
              <Menu.Item key="m1i3">二级菜单3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="m2" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单分组</span></span>}>
              <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
              <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
              <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
              <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
              <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
              <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="m3" disabled title={<span><Icon className="icon" size={14} name={"finance"}/><span>不可用下拉菜单</span></span>}>
              <Menu.Item key="m3i1">二级菜单4</Menu.Item>
              <Menu.Item key="m3i2">二级菜单5</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m4" disabled>
              <Icon className="icon" size={14} name={"paper"}/>不可用菜单按钮
            </Menu.Item>
        </Menu>

        <br/><br/><br/>

        2、水平菜单，子菜单垂直
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            styleName={"menu"}
            selectedKeys={[this.state.current]}
            type="horizontal-v">

            <Menu.Item key="m0">
              <Icon className="icon" size={14} name={"paper"}/>
              菜单按钮
            </Menu.Item>
            <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单</span></span>}>
              <Menu.Item key="m1i1">二级菜单1</Menu.Item>
              <Menu.Item key="m1i2">二级菜单2</Menu.Item>
              <Menu.Item key="m1i3">二级菜单3</Menu.Item>
              <Menu.SubMenu key="m1m1" title="三级菜单">
                <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m2" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单分组</span></span>}>
              <Menu.ItemGroup key="m2g1" title="分组1">
                <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m2g2" title="分组1">
                <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.SubMenu key="m2m2" title="三级菜单">
                <Menu.ItemGroup key="m2m2g1" title="分组1">
                  <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="m2m2g2" title="分组2">
                  <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m3" disabled title={<span><Icon className="icon" size={14} name={"finance"}/><span>不可用下拉菜单</span></span>}>
              <Menu.Item key="m3i1">二级菜单4</Menu.Item>
              <Menu.Item key="m3i2">二级菜单5</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m4" disabled>
              <Icon className="icon" size={14} name={"paper"}/>不可用菜单按钮
            </Menu.Item>
        </Menu>

        <br/><br/><br/>


        3、垂直菜单，子菜单水平向右弹出
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240, height: 500 }}
            styleName={"menu"}
            defaultOpenKeys={['.$m1']}
            selectedKeys={[this.state.current]}
            type="vertical-h">

            <Menu.Item key="m0">
              <Icon className="icon" size={14} name={"paper"}/>
              菜单按钮
            </Menu.Item>
            <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单</span></span>}>
              <Menu.Item key="m1i1">二级菜单1</Menu.Item>
              <Menu.Item key="m1i2">二级菜单2</Menu.Item>
              <Menu.Item key="m1i3">二级菜单3</Menu.Item>
              <Menu.SubMenu key="m1m1" title="三级菜单">
                <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m2" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单分组</span></span>}>
              <Menu.ItemGroup key="m2g1" title="分组1">
                <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m2g2" title="分组1">
                <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.SubMenu key="m2m2" title="三级菜单">
                <Menu.ItemGroup key="m2m2g1" title="分组1">
                  <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="m2m2g2" title="分组2">
                  <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m3" disabled title={<span><Icon className="icon" size={14} name={"finance"}/><span>不可用下拉菜单</span></span>}>
              <Menu.Item key="m3i1">二级菜单4</Menu.Item>
              <Menu.Item key="m3i2">二级菜单5</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m4" disabled>
              <Icon className="icon" size={14} name={"paper"}/>不可用菜单按钮
            </Menu.Item>
        </Menu>

        <br/><br/><br/>

        4、垂直菜单，子菜单内嵌在菜单区域
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240 }}
            styleName={"menu"}
            defaultOpenKeys={['.$m1']}
            selectedKeys={[this.state.current]}
            type="vertical-v">

            <Menu.Item key="m0">
              <Icon className="icon" size={14} name={"paper"}/>
              菜单按钮
            </Menu.Item>
            <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单</span></span>}>
              <Menu.Item key="m1i1">二级菜单1</Menu.Item>
              <Menu.Item key="m1i2">二级菜单2</Menu.Item>
              <Menu.Item key="m1i3">二级菜单3</Menu.Item>
              <Menu.SubMenu key="m1m1" title="三级菜单">
                <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m2" title={<span><Icon className="icon" size={14} name={"paper"}/><span>下拉菜单分组</span></span>}>
              <Menu.ItemGroup key="m2g1" title="分组1">
                <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m2g2" title="分组1">
                <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
                <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
                <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
              </Menu.ItemGroup>
              <Menu.SubMenu key="m2m2" title="三级菜单">
                <Menu.ItemGroup key="m2m2g1" title="分组1">
                  <Menu.Item key="m2m2g1i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g1i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="m2m2g2" title="分组2">
                  <Menu.Item key="m2m2g2i1">三级菜单1</Menu.Item>
                  <Menu.Item key="m2m2g2i2">三级菜单2</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m3" disabled title={<span><Icon className="icon" size={14} name={"finance"}/><span>不可用下拉菜单</span></span>}>
              <Menu.Item key="m3i1">二级菜单4</Menu.Item>
              <Menu.Item key="m3i2">二级菜单5</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m4" disabled>
              <Icon className="icon" size={14} name={"paper"}/>不可用菜单按钮
            </Menu.Item>
        </Menu>
        
      </div>
    );
  }
}
