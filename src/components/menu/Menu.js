/**
 * Menu Component
 * @author heifade
 */
import { PureComponent } from 'react';
import RcMenu, { Item, Divider, SubMenu, ItemGroup } from 'rc-menu';
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
    styleName: 'menu',
    className: '',
    type: 'inline',
    selectedKeys: [],
    defaultOpenKeys: [],
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    styleName: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      'horizontal-h',//水平菜单，子菜单水平
      'horizontal-v',//水平菜单，子菜单垂直
      'vertical-h',//垂直菜单，子菜单水平向右弹出
      "vertical-v"//垂直菜单，子菜单内嵌在菜单区域
    ]),
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string)
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
    if (this.props.type === 'vertical-v' && nextProps.type !== 'vertical-v') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setState({ openKeys: nextProps.openKeys });
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
  setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys });
    }
  }

  render() {
    // let openAnimation = this.props.openAnimation || this.props.openTransitionName;
    // if (this.props.openAnimation === undefined && this.props.openTransitionName === undefined) {
    //   switch (this.props.mode) {
    //     case 'horizontal':
    //       openAnimation = 'slide-up';
    //       break;
    //     case 'vertical':
    //       // When mode switch from inline
    //       // submenu should hide without animation
    //       if (this.switchModeFromInline) {
    //         openAnimation = '';
    //         this.switchModeFromInline = false;
    //       } else {
    //         openAnimation = 'zoom-big';
    //       }
    //       break;
    //     case 'inline':
    //       openAnimation = animation;
    //       break;
    //     default:
    //   }
    // }

    

    let props = {};
    const className = `${this.props.className} ${this.props.styleName}-${this.props.theme}`;
    let mode = '';
    switch(this.props.type){
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
    }

    if (mode === 'inline') {//垂直菜单，子菜单内嵌在菜单区域。
      props = {
        //openAnimation,
        className: className,
        mode,
      };
    } else {
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpenChange: this.handleOpenChange,
        //openTransitionName: openAnimation,
        className: className,
        mode,
      };
    }

    props.prefixCls = this.props.styleName;

    return (
      <RcMenu {...this.props} {...props} />
    );
  }
}


export default Menu;