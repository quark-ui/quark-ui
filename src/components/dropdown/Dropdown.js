/**
 * Dropdown Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import assign from 'object-assign';
import Trigger from 'quark-ui/trigger';
import Button from 'quark-ui/button';
import { allowMultiple } from '../../constants';
import styles from './Dropdown.css';
import Menu from './Menu';
import placements from './placements';

@CSSModules(styles, { allowMultiple })
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
    const { points, offset } = placements[placement];
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

@CSSModules(styles, { allowMultiple })
class DropdownButton extends PureComponent {

  static displayName = 'DropdownButton'

  static defaultProps = assign({}, Dropdown.defaultProps, {
    type: Button.defaultProps.type,
    placement: 'bottomRight',
  })

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: Button.propTypes.type,
    ...Dropdown.propTypes,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, type, ...otherProps } = this.props;
    return (
      <div styleName={'dropdown--buttonWrap'}>
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
