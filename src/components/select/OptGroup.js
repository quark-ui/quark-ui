/**
 * Select Component
 * @author heifade
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.css';

export default class OptGroup extends PureComponent {
  static displayName = 'Option';

  static defaultProps = {
    children: null,
    label: '',
  };
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    label: PropTypes.string,
  };

  render() {
    const { children, label } = this.props;
    return (
      <ul>
        <li className={styles.groupname}>{label}</li>
        <ul>
          {children}
        </ul>
      </ul>
    );
  }
}
