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
class Menu extends PureComponent {

  static displayName = 'Menu'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = (e, key) => {
    this.props.onClick(e, key);
  }

  render() {
    const { children, style, defaultOpenKeys, selectedKeys, ...otherProps } = this.props;


    let newChildren = React.Children.map(children, child => {
      let isOpen = false;
      React.Children.forEach(defaultOpenKeys, key => {
        if(key == child.key){
          isOpen = true;
        }
      });

      return React.cloneElement(child, {
        isOpen: isOpen,
        defaultOpenKeys: defaultOpenKeys,
        onClick: this.onClick,
        mkey: child.key ? child.key.replace(/\.\$/g, '') : '',
        pLeft: 16
      });
    });

    return (
      <ul styleName={'menu'} style={style}>
        {newChildren}
      </ul>
    );
  }
}

@CSSModules(styles, { allowMultiple })
class MenuItem extends PureComponent {

  static displayName = 'Menu.Item'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
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
    const { children, pLeft, ...otherProps } = this.props;

    let divStyle = {
      paddingLeft: pLeft
    }


    return (
      <li onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          styleName={`menu--menuitem__${this.state.isMouseOver?'active':'normal'}`}
          style={divStyle}>
        {children}
      </li>
    );
  }
}

Menu.Item = MenuItem;



export default Menu;
