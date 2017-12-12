//npm run test-unit './src/components/menu/test/menu.test.js'

/**
 * Menu test
 * @author heifade
 */
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Menu from '../Menu';
import Icon from '../../icon/Icon';
import styles from '../Menu.css';


describe('Menu-test-describe----------', () => {
  const mountMenu = ({ type, colorType, defaultOpenKeys, openKeys = null, haveSelectedKeys = true, haveOpenKeys = true }) => {
    class MenuTest extends Component {
      constructor() {
        super();
        this.state = {
          selectedKeys: ['.$.$m0'],
          openKeys,
        };
        this.defaultOpenKeys = null;
      }

      handleClick = (e) => {
        this.setState({
          selectedKeys: [e.key],
        });
      }
      handleOpenChange = (mopenKeys) => {
        this.setState({
          openKeys: mopenKeys,
        });
      }

      render() {
        const data = {};
        if (haveSelectedKeys) {
          data.selectedKeys = this.state.selectedKeys;
        }
        if (haveOpenKeys) {
          data.openKeys = this.state.openKeys;
        }

        return (
          <Menu
            type={type}
            colorType={colorType}
            defaultOpenKeys={defaultOpenKeys}
            onClick={this.handleClick}
            onOpenChange={this.handleOpenChange}
            {...data}
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
        );
      }
    }
    return mount(<MenuTest />);
  };

  // 1、水平菜单，子菜单水平 暖色
  it('Menu of horizontal-h warm', () => {
    const menu = mountMenu({ type: 'horizontal-h', colorType: 'warm', defaultOpenKeys: ['.$m1'], openKeys: null });
    expect(menu.hasClass('menu-horizontal-h')).to.equal(true);
    expect(menu.hasClass('color-warm')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'horizontal-h')).to.have.length(3);
  });

  // 2、水平菜单，子菜单水平 冷色
  it('Menu of horizontal-h cold', () => {
    const menu = mountMenu({ type: 'horizontal-h', colorType: 'cold', openKeys: ['.$m1'] });
    expect(menu.hasClass('menu-horizontal-h')).to.equal(true);
    expect(menu.hasClass('color-cold')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'horizontal-h')).to.have.length(3);
  });

  // 3、水平菜单，子菜单垂直 暖色
  it('Menu of horizontal-v warm', () => {
    const menu = mountMenu({ type: 'horizontal-v', colorType: 'warm', defaultOpenKeys: ['.$m1'] });
    expect(menu.hasClass('menu-horizontal')).to.equal(true);
    expect(menu.hasClass('color-warm')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'vertical')).to.have.length(3);
  });

  // 4、水平菜单，子菜单垂直 冷色
  it('Menu of horizontal-v cold', () => {
    const menu = mountMenu({ type: 'horizontal-v', colorType: 'cold', defaultOpenKeys: ['.$m1'] });
    expect(menu.hasClass('menu-horizontal')).to.equal(true);
    expect(menu.hasClass('color-cold')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'vertical')).to.have.length(3);
  });

  // 5、垂直菜单，子菜单水平向右弹出 暖色
  it('Menu of vertical-h warm', () => {
    const menu = mountMenu({ type: 'vertical-h', colorType: 'warm', defaultOpenKeys: ['.$m1'] });
    expect(menu.hasClass('menu-vertical')).to.equal(true);
    expect(menu.hasClass('color-warm')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'vertical')).to.have.length(3);
  });

  // 6、垂直菜单，子菜单水平向右弹出 冷色
  it('Menu of vertical-h cold', () => {
    const menu = mountMenu({ type: 'vertical-h', colorType: 'cold', defaultOpenKeys: ['.$m1'] });
    expect(menu.hasClass('menu-vertical')).to.equal(true);
    expect(menu.hasClass('color-cold')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'vertical')).to.have.length(3);
  });

  // 7、垂直菜单，子菜单内嵌在菜单区域 暖色
  it('Menu of vertical-v warm', () => {
    const menu = mountMenu({ type: 'vertical-v', colorType: 'warm', defaultOpenKeys: ['.$m1'] });
    expect(menu.hasClass('menu-inline')).to.equal(true);
    expect(menu.hasClass('color-warm')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'inline')).to.have.length(3);
  });

  // 8、垂直菜单，子菜单内嵌在菜单区域 冷色
  it('Menu of vertical-v cold', () => {
    const menu = mountMenu({ type: 'vertical-v', colorType: 'cold', openKeys: ['.$m1'] });
    expect(menu.hasClass('menu-inline')).to.equal(true);
    expect(menu.hasClass('color-cold')).to.equal(true);
    expect(menu.find('li.menu-item')).to.have.length(2); // 5个菜单项
    expect(menu.find('li.menu-item-disabled')).to.have.length(1); // 1个不可用菜单项

    expect(menu.find('li.menu-submenu')).to.have.length(3); // 3个子菜单
    expect(menu.find('li.menu-submenu-disabled')).to.have.length(1); // 1个不可用子菜单
    expect(menu.findWhere(n => n.name() === 'SubPopupMenu' && n.prop('mode') === 'inline')).to.have.length(3);

    expect(menu.findWhere(n => n.name() === 'li' && n.text() === '二级菜单1')).to.have.length(0);
    expect(menu.findWhere(n => n.name() === 'li' && n.text() === '二级菜单2')).to.have.length(0);
    expect(menu.findWhere(n => n.name() === 'li' && n.text() === '二级菜单3')).to.have.length(0);
  });

  it('Menu of vertical-v cold item click', () => {
    const menu = mountMenu({ type: 'vertical-v', colorType: 'cold', haveSelectedKeys: false });
    let menuItem = menu.find('li.menu-item-disabled').first(); // 打一个不可用的叶子节点
    const status = menuItem.hasClass('menu-item-selected');
    menuItem.simulate('click');
    expect(menuItem.hasClass('menu-item-selected')).to.equal(status); // 点击后，应该状态与点击前一致
    
    menuItem = menu.find('li.menu-item').first();
    expect(menuItem.hasClass('menu-item-selected')).to.equal(false); // 没有点击前，应该是未选中状态
    menuItem.simulate('click');
    expect(menuItem.hasClass('menu-item-selected')).to.equal(true); // 点击后，应该是选中状态
  });

  it('Menu of vertical-v cold subItem click', () => {
    const menu = mountMenu({ type: 'vertical-v', colorType: 'cold', haveOpenKeys: false });
    let menuSubMenu = menu.find('li.menu-submenu').first();
    let menuSubmenuTitle = menuSubMenu.find('div.menu-submenu-title').first();
    expect(menuSubMenu.hasClass('menu-submenu-open')).to.equal(false); // 没有点击前，应该是关闭状态
    menuSubmenuTitle.simulate('click');
    expect(menuSubMenu.hasClass('menu-submenu-open')).to.equal(true); // 点击后，应该是打开状态

    menuSubMenu = menu.find('li.menu-submenu-disabled').first(); // 找一个不可用的非叶子节点
    menuSubmenuTitle = menuSubMenu.find('div.menu-submenu-title').first();
    const status = menuSubMenu.hasClass('menu-submenu-open'); // 点击前状态
    menuSubmenuTitle.simulate('click');
    expect(menuSubMenu.hasClass('menu-submenu-open')).to.equal(status); // 点击后，应该状态与点击前一致
  });
});
