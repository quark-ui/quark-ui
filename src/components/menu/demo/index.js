import Menu from '../Menu';
import SubMenu from '../SubMenu';
import Icon from '../../icon/Icon';
import { Component } from 'react';

export default class MenuDemo extends Component {

  state = {
    theme: 'dark',
    current: 'm11',
  }

  handleClick = (e, key) => {
    this.setState({
      current: key,
    });
  }

  render() {
    return (
      <div>
        水平的顶部导航菜单:
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240, height: 500 }}
            styleName={"menu"}
            defaultOpenKeys={['m1']}
            selectedKeys={[this.state.current]}
            mode="inline">

            <SubMenu key="m1" title={<span><Icon size={14} name={"paper"}/><span>一级菜单1</span></span>}>
              <Menu.Item key="m11">二级菜单1</Menu.Item>
              <Menu.Item key="m12">二级菜单2</Menu.Item>
              <Menu.Item key="m13">二级菜单3</Menu.Item>
            </SubMenu>
            <SubMenu key="m2" title={<span><Icon size={14} name={"finance"}/><span>一级菜单2</span></span>}>
              <Menu.Item key="m21">二级菜单4</Menu.Item>
              <Menu.Item key="m22">二级菜单5</Menu.Item>
              <SubMenu key="m23" title="点击打开三级菜单">
                <Menu.Item key="m231">三级菜单1</Menu.Item>
                <Menu.Item key="m232">三级菜单2</Menu.Item>
              </SubMenu>
            </SubMenu>
        </Menu>

        垂直菜单:
        <Menu
            //theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240, height: 500 }}
            styleName={"menu"}
            defaultOpenKeys={['m1']}
            selectedKeys={[this.state.current]}
            mode="inline">

            <SubMenu key="m1" title={<span><Icon size={14} name={"paper"}/><span>一级菜单1</span></span>}>
              <Menu.Item key="m11">二级菜单1</Menu.Item>
              <Menu.Item key="m12">二级菜单2</Menu.Item>
              <Menu.Item key="m13">二级菜单3</Menu.Item>
            </SubMenu>
            <SubMenu key="m2" title={<span><Icon size={14} name={"finance"}/><span>一级菜单2</span></span>}>
              <Menu.Item key="m21">二级菜单4</Menu.Item>
              <Menu.Item key="m22">二级菜单5</Menu.Item>
              <SubMenu key="m23" title="点击打开三级菜单">
                <Menu.Item key="m231">三级菜单1</Menu.Item>
                <Menu.Item key="m232">三级菜单2</Menu.Item>
              </SubMenu>
            </SubMenu>
        </Menu>
        
      </div>
    );
  }
}
