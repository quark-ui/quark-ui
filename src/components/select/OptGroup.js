/**
 * Select Component
 * @author heifade
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.css';

export default class OptGroup extends PureComponent {
  static displayName = 'Option';

  static defaultProps = {};
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {};

  render() {
    let { children, label } = this.props;
    return (
      <ul>
        <li>{label}</li>
        {children}
      </ul>
    );
  }
}
