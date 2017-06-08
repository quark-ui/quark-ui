/**
 * Menu Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import RcMenu, { Item, SubMenu, ItemGroup } from 'rc-menu';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Menu.css';

@CSSModules(styles, { allowMultiple })
class Menu extends PureComponent {

  static SubMenu = SubMenu;
  static Item = Item;
  static ItemGroup = ItemGroup;

  static displayName = 'Menu'

  static defaultProps = {
    // className: '',
    type: 'inline',
    colorType: 'warm',
    selectedKeys: [],
    defaultOpenKeys: [],
    // openKeys: undefined,
    onClick: null,
    // onOpenChange: function() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    // className: PropTypes.string,
    type: PropTypes.oneOf([
      'horizontal-h', // 水平菜单，子菜单水平
      'horizontal-v', // 水平菜单，子菜单垂直
      'vertical-h', // 垂直菜单，子菜单水平向右弹出
      'vertical-v', // 垂直菜单，子菜单内嵌在菜单区域
    ]),
    colorType: PropTypes.oneOf(['warm', 'cold']),
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
    openKeys: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onOpenChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    let openKeys = null;
    if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    } else if ('openKeys' in props) {
      openKeys = props.openKeys;
    }
    this.state = {
      openKeys: openKeys || [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type === 'vertical-v' && nextProps.type !== 'vertical-v') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setState({ openKeys: nextProps.openKeys });
    }
  }

  setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys });
    }
  }
  handleOpenChange = (openKeys) => {
    this.setOpenKeys(openKeys);

    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(openKeys);
    }
  }
  handleClick = (e) => {
    this.setOpenKeys([]);
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    let props = {};
    const className = `${this.props.className}`;
    let mode = '';
    switch (this.props.type) {
      case 'horizontal-h':
        mode = 'horizontal-h';
        break;
      case 'horizontal-v':
        mode = 'horizontal';
        break;
      case 'vertical-h':
        mode = 'vertical';
        break;
      case 'vertical-v':
        mode = 'inline';
        break;
      default:
        break;
    }

    if (mode === 'inline') { // 垂直菜单，子菜单内嵌在菜单区域。
      props = {
        mode,
      };
    } else {
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpenChange: this.handleOpenChange,
        mode,
      };
    }
    props.className = `color-${this.props.colorType}`;
    props.styleName = 'menu';
    props.prefixCls = 'menu';
    props.inlineIndent = 18;

    return (
      <RcMenu {...this.props} {...props} />
    );
  }
}


export default Menu;
