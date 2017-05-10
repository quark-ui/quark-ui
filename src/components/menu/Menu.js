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

  static displayName = 'Menu'

  static defaultProps = {
    styleName: 'menu',
    className: '',
    mode: 'inline',
    selectedKeys: [],
    defaultOpenKeys: [],
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    styleName: PropTypes.string,
    className: PropTypes.string,
    mode: PropTypes.oneOf([
      'horizontal',//水平的顶部导航菜单。
      'vertical',//垂直菜单,子菜单是弹出的
      "inline"//垂直菜单，子菜单内嵌在菜单区域。
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
    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
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
    if (this.props.mode !== 'inline') {//垂直菜单，子菜单内嵌在菜单区域。
      // There is this.state.openKeys for
      // closing vertical popup submenu after click it
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpenChange: this.handleOpenChange,
        //openTransitionName: openAnimation,
        className,
      };
    } else {
      props = {
        //openAnimation,
        className,
      };
    }

    props.prefixCls = this.props.styleName;


    return (
      <RcMenu {...this.props} {...props} />
    );
  }
}


export default Menu;