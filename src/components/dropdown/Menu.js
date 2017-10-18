/**
 * Dropdown.Menu Component
 * @author ryan.bian
 */
import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.css';

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
      <ul className={styles['dropdown--menu']}>
        { Children.map(children, Comp => cloneElement(Comp)) }
      </ul>
    );
  }
}

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
      <li className={styles['dropdown--menuItem']}>{children}</li>
    );
  }
}

Menu.Item = Item;

export default Menu;
