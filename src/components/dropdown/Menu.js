/**
 * Dropdown.Menu Component
 * @author ryan.bian
 */
import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './style';

@injectSheet(styles)
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
    const { classes, children } = this.props;
    return (
      <ul className={classes['dropdown--menu']}>
        { Children.map(children, Comp => cloneElement(Comp)) }
      </ul>
    );
  }
}

@injectSheet(styles)
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
    const { classes, children } = this.props;
    return (
      <li className={classes['dropdown--menuItem']}>{children}</li>
    );
  }
}

Menu.Item = Item;

export default Menu;
