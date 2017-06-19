/**
 * Dropdown.Menu Component
 * @author ryan.bian
 */
import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Dropdown.css';

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

  render() {
    const { children } = this.props;
    return (
      <ul styleName="dropdown--menu">
        { Children.map(children, Comp => cloneElement(Comp)) }
      </ul>
    );
  }
}

@CSSModules(styles, { allowMultiple })
class Item extends PureComponent {

  static displayName = 'Item'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <li styleName="dropdown--menuItem">{children}</li>
    );
  }
}

Menu.Item = Item;

export default Menu;
