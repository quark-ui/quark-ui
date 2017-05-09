/**
 * Menu Component
 * @author heifade
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Menu.css';

@CSSModules(styles, { allowMultiple })
class SubMenu extends PureComponent {

  static displayName = 'SubMenu'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      isMouseOver: false
    };
  }



  onClick = (e, key) => {
    this.props.onClick(e, key);
  }
  //菜单点击事件
  onClickHandle = (e) => {
    this.onClick(e, this.props.mkey);

    if(this.state.isOpen){
      this.setState({
        isOpen: false,
        isMouseOver: false
      });
    }
    else {
      this.setState({
        isOpen: true
      });
    }
  }
  onMouseOver = (e) => {
    this.setState({
      isMouseOver: true
    })
  }
  onMouseOut = (e) => {
    this.setState({
      isMouseOver: false
    })
  }

  render() {
    const { children, key, defaultOpenKeys, selectedKeys, pLeft, ...otherProps } = this.props;

    const ulStyle = {
      display: this.state.isOpen? 'block': 'none'
    }

    let newChildren = React.Children.map(children, child => {
      let isOpen = false;
      React.Children.forEach(defaultOpenKeys, key => {
        if(key == child.key){
          isOpen = true;
        }
      });

      let c = React.cloneElement(child, {
        isOpen: isOpen,
        defaultOpenKeys: defaultOpenKeys,
        onClick: this.onClick,
        mkey: child.key ? child.key.replace(/\.\$/g, '') : '',
        pLeft: pLeft + 16
      });

      return c;
    });


    let styleName = `menu--submenutitle__${this.state.isMouseOver?'active':'normal'}`;

    let divStyle = {
      paddingLeft: pLeft
    }


    return (
      <li styleName={'menu--submenu'}>
        <div onClick={this.onClickHandle} 
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          styleName={styleName}
          style={divStyle}>
          {this.props.title}
        </div>
        <ul style={ulStyle}>
          {newChildren}
        </ul>
      </li>
    );
  }
}

export default SubMenu;
