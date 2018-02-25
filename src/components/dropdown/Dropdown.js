/**
 * Dropdown Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Trigger from '../trigger';
import Button from '../button';
import styles from './style';
import Menu from './Menu';
import Placements from './placements';

class Dropdown extends PureComponent {
  static displayName = 'Dropdown'

  static defaultProps = {
    trigger: 'click',
    overlay: undefined,
    placement: 'bottomLeft',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    trigger: PropTypes.oneOf(['hover', 'click']),
    overlay: PropTypes.instanceOf(Menu),
    placement: PropTypes.oneOf([
      'bottomLeft',
      'bottomCenter',
      'bottomRight',
      'topLeft',
      'topCenter',
      'topRight',
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { trigger, overlay, placement, children } = this.props;
    const { points, offset } = Placements[placement];
    return (
      <Trigger
        action={trigger}
        popup={overlay}
        offset={offset}
        placement={points}
      >{children}</Trigger>
    );
  }
}

@injectSheet(styles)
class DropdownButton extends PureComponent {

  static displayName = 'DropdownButton'

  static defaultProps = {
    ...Dropdown.defaultProps,
    type: Button.InnerComponent.defaultProps.type,
    placement: 'bottomRight',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    ...Dropdown.propTypes,
    type: Button.InnerComponent.propTypes.type,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, children, type, ...otherProps } = this.props;
    return (
      <div className={classes['dropdown--buttonWrap']}>
        <Button type={type}>{children}</Button>
        <Dropdown {...otherProps}>
          <Button type={type}>arrow</Button>
        </Dropdown>
      </div>
    );
  }
}

Dropdown.Menu = Menu;
Dropdown.Button = DropdownButton;

export default Dropdown;
