/**
 * Menu Component
 * @author heifade
 */
import { PureComponent } from 'react';
import RcMenu, { Item, SubMenu } from 'rc-menu';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import assign from 'object-assign';
import { allowMultiple } from '../../constants';
import styles from './Menu.css';

@CSSModules(styles, { allowMultiple })
class Menu extends PureComponent {

  static SubMenu = SubMenu;
  static Item = Item;

  static displayName = 'Menu'

  static defaultProps = {
    mode: 'inline',
    selectedKeys: [],
    defaultSelectedKeys: [],
    openKeys: [],
    defaultOpenKeys: [],
    onClick() {},
    onOpenChange() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    mode: PropTypes.oneOf([
      'horizontal', // 水平的顶部导航菜单。
      'vertical', // 垂直菜单,子菜单是弹出的
      'inline', // 垂直菜单，子菜单内嵌在菜单区域。
    ]),
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
    openKeys: PropTypes.arrayOf(PropTypes.string),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    onOpenChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    let openKeys;
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
    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
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
  handleClick = (e) => {
    this.setOpenKeys([]);

    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }
  handleOpenChange = (openKeys) => {
    this.setOpenKeys(openKeys);

    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(openKeys);
    }
  }

  render() {
    const props = {};
    const styleName = 'menu';
    assign(props, {
      styleName,
      prefixCls: 'menu',
    });
    if (this.props.mode !== 'inline') {
      // 垂直菜单，子菜单内嵌在菜单区域。
      // There is this.state.openKeys for
      // closing vertical popup submenu after click it
      assign(props, {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpenChange: this.handleOpenChange,
      });
    }

    return (
      <RcMenu {...this.props} {...props} />
    );
  }
}


export default Menu;
