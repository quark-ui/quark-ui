import { Component } from 'react';
import Menu from '../Menu';
import Icon from '../../icon/Icon';

export default class MenuDemo extends Component {

  state = {
    theme: 'dark',
    current: '.$m11',
  }

  handleClick = (e) => {
    this.setState({
      current: (e.key || '').replace(/\.\&/g, ''),
    });
  }

  render() {
    return (
      <div>
        1、水平的顶部导航菜单：
        <Menu
            // theme={this.state.theme}
          onClick={this.handleClick}
          styleName={'menu'}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >

          <Menu.Item key="m0">
            <Icon className="icon" size={14} name={'paper'} />
              菜单按钮
            </Menu.Item>
          <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={'paper'} /><span>下拉菜单</span></span>}>
            <Menu.Item key="m11">二级菜单1</Menu.Item>
            <Menu.Item key="m12">二级菜单2</Menu.Item>
            <Menu.Item key="m13">二级菜单3</Menu.Item>
            <Menu.SubMenu key="m23" title="三级菜单">
              <Menu.Item key="m231">三级菜单1</Menu.Item>
              <Menu.Item key="m232">三级菜单2</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="m2" disabled title={<span><Icon className="icon" size={14} name={'finance'} /><span>不可用下拉菜单</span></span>}>
            <Menu.Item key="m21">二级菜单4</Menu.Item>
            <Menu.Item key="m22">二级菜单5</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="m3" disabled>
            <Icon className="icon" size={14} name={'paper'} />不可用菜单按钮
            </Menu.Item>
        </Menu>

        <br /><br /><br />

        2、垂直菜单,子菜单是右边弹出的
        <Menu
            // theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240, height: 500 }}
          styleName={'menu'}
          defaultOpenKeys={['.$m1']}
          selectedKeys={[this.state.current]}
          mode="vertical"
        >

          <Menu.Item key="m0">
            <Icon className="icon" size={14} name={'paper'} />
              菜单按钮
            </Menu.Item>
          <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={'paper'} /><span>下拉菜单</span></span>}>
            <Menu.Item key="m11">二级菜单1</Menu.Item>
            <Menu.Item key="m12">二级菜单2</Menu.Item>
            <Menu.Item key="m13">二级菜单3</Menu.Item>
            <Menu.SubMenu key="m23" title="三级菜单">
              <Menu.Item key="m231">三级菜单1</Menu.Item>
              <Menu.Item key="m232">三级菜单2</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="m2" disabled title={<span><Icon className="icon" size={14} name={'finance'} /><span>不可用下拉菜单</span></span>}>
            <Menu.Item key="m21">二级菜单4</Menu.Item>
            <Menu.Item key="m22">二级菜单5</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="m3" disabled>
            <Icon className="icon" size={14} name={'paper'} />不可用菜单按钮
            </Menu.Item>
        </Menu>

        <br /><br /><br />

        3、垂直菜单，子菜单内嵌在菜单区域。
        <Menu
            // theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240, height: 500 }}
          styleName={'menu'}
          defaultOpenKeys={['.$m1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >

          <Menu.Item key="m0">
            <Icon className="icon" size={14} name={'paper'} />
              菜单按钮
            </Menu.Item>
          <Menu.SubMenu key="m1" title={<span><Icon className="icon" size={14} name={'paper'} /><span>下拉菜单</span></span>}>
            <Menu.Item key="m11">二级菜单1</Menu.Item>
            <Menu.Item key="m12">二级菜单2</Menu.Item>
            <Menu.Item key="m13">二级菜单3</Menu.Item>
            <Menu.SubMenu key="m23" title="三级菜单">
              <Menu.Item key="m231">三级菜单1</Menu.Item>
              <Menu.Item key="m232">三级菜单2</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="m2" disabled title={<span><Icon className="icon" size={14} name={'finance'} /><span>不可用下拉菜单</span></span>}>
            <Menu.Item key="m21">二级菜单4</Menu.Item>
            <Menu.Item key="m22">二级菜单5</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="m3" disabled>
            <Icon className="icon" size={14} name={'paper'} />不可用菜单按钮
            </Menu.Item>
        </Menu>

      </div>
    );
  }
}
