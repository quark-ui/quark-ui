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
class Icon extends PureComponent {

  static displayName = 'Icon'

  static defaultProps = {
    type: 'mail'
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf([
      'mail',
      'appstore',
      'setting',
    ])
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <i >Icon</i>
    );
  }
}

export default Icon;
