import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import { allowMultiple } from '../../../constants';
import Menu from '../Menu';
import Icon from '../../icon/Icon';
import styles from './index.css';

@CSSModules(styles, { allowMultiple })
export default class MenuDemo extends Component {

  state = {
    theme: 'dark',
    current: '.$m0',
  }

  handleClick = (e) => {
    // const key = (e.key || '').replace(/\.\$/g, '');
    this.setState({
      current: e.key,
    });
    // console.log(key);
  }

  render() {
    return (
      <div>
        <table style={{ width: '100%' }}>
          <tr>
            <td colSpan="2">1、水平菜单，子菜单水平</td>
          </tr>
          <tr>
            <th style={{ width: '50%' }}>KA</th><th style={{ width: '50%' }}>车队加盟</th>
          </tr>
          <tr>
            <td>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                type="horizontal-h"
                colorType="warm"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />分组</span>}>
                  <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
                  <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用
                  </Menu.Item>
              </Menu>
            </td>
            <td>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                type="horizontal-h"
                colorType="cold"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />分组</span>}>
                  <Menu.Item key="m2g1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m2g1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m2g1i3">二级菜单3</Menu.Item>
                  <Menu.Item key="m2g2i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m2g2i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m2g2i3">二级菜单3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用
                  </Menu.Item>
              </Menu>
            </td>
          </tr>
          <tr><td style={{ height: '30px' }} /><td /></tr>
          <tr>
            <td colSpan="2">2、水平菜单，子菜单垂直</td>
          </tr>
          <tr>
            <th style={{ width: '50%' }}>KA</th><th style={{ width: '50%' }}>车队加盟</th>
          </tr>
          <tr>
            <td>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                type="horizontal-v"
                colorType="warm"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
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
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用
                  </Menu.Item>
              </Menu>
            </td>
            <td>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                type="horizontal-v"
                colorType="cold"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
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
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用
                  </Menu.Item>
              </Menu>
            </td>
          </tr>
          <tr><td style={{ height: '30px' }} /><td /></tr>
          <tr>
            <td colSpan="2">3、垂直菜单，子菜单水平向右弹出</td>
          </tr>
          <tr>
            <th style={{ width: '50%' }}>KA</th><th style={{ width: '50%' }}>车队加盟</th>
          </tr>
          <tr>
            <td>
              <Menu
                onClick={this.handleClick}
                style={{ width: 240, height: 500 }}
                defaultOpenKeys={['.$m1']}
                selectedKeys={[this.state.current]}
                type="vertical-h"
                colorType="warm"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
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
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />不可用下拉菜单</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用菜单按钮
                </Menu.Item>
              </Menu>
            </td>
            <td>
              <Menu
                onClick={this.handleClick}
                style={{ width: 240, height: 500 }}
                defaultOpenKeys={['.$m1']}
                selectedKeys={[this.state.current]}
                type="vertical-h"
                colorType="cold"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
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
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />不可用下拉菜单</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用菜单按钮
                </Menu.Item>
              </Menu>
            </td>
          </tr>
          <tr><td style={{ height: '30px' }} /><td /></tr>
          <tr>
            <td colSpan="2">4、垂直菜单，子菜单内嵌在菜单区域</td>
          </tr>
          <tr>
            <th style={{ width: '50%' }}>KA</th><th style={{ width: '50%' }}>车队加盟</th>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top' }}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 240 }}
                defaultOpenKeys={['.$m1']}
                selectedKeys={[this.state.current]}
                type="vertical-v"
                colorType="warm"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m2m2i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m2m2i2">三级菜单2</Menu.Item>
                    <Menu.Item key="m2m2i3">三级菜单3</Menu.Item>
                    <Menu.Item key="m2m2i4">三级菜单4</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />不可用下拉菜单</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用菜单按钮
                  </Menu.Item>
              </Menu>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <Menu
                onClick={this.handleClick}
                style={{ width: 240 }}
                defaultOpenKeys={['.$m1']}
                selectedKeys={[this.state.current]}
                type="vertical-v"
                colorType="cold"
              >

                <Menu.Item key="m0">
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />
                  菜单按钮
                  </Menu.Item>
                <Menu.SubMenu key="m1" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单</span>}>
                  <Menu.Item key="m1i1">二级菜单1</Menu.Item>
                  <Menu.Item key="m1i2">二级菜单2</Menu.Item>
                  <Menu.Item key="m1i3">二级菜单3</Menu.Item>
                  <Menu.SubMenu key="m1m1" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m1m1i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m1m1i2">三级菜单2</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m2" title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />下拉菜单分组</span>}>
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
                  <Menu.SubMenu key="m2m2" title={<span><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />三级菜单</span>}>
                    <Menu.Item key="m2m2i1">三级菜单1</Menu.Item>
                    <Menu.Item key="m2m2i2">三级菜单2</Menu.Item>
                    <Menu.Item key="m2m2i3">三级菜单3</Menu.Item>
                    <Menu.Item key="m2m2i4">三级菜单4</Menu.Item>
                  </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.SubMenu key="m3" disabled title={<span><Icon className={styles['menu--icon']} size={14} name={'attachment'} /><Icon className={styles['menu--icon__pullright']} size={12} name={'arrow-right'} />不可用下拉菜单</span>}>
                  <Menu.Item key="m3i1">二级菜单4</Menu.Item>
                  <Menu.Item key="m3i2">二级菜单5</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="m4" disabled>
                  <Icon className={styles['menu--icon']} size={14} name={'attachment'} />不可用菜单按钮
                  </Menu.Item>
              </Menu>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
