/**
 * Select Component
 * @author heifade
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Select.css';

export default class Option extends Component {
  static displayName = 'Option';

  static defaultProps = {
    value: '',
    text: undefined,
    children: null,
  };
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  static contextTypes = {
    childContext: PropTypes.any,
  };

  click = () => {
    const { context } = this;
    const { childContext } = context;
    const { value, text, children } = this.props;
    childContext.onOptionSelected(value, text || children);
  };

  render() {
    const { children, value } = this.props;
    const { context } = this;
    const { childContext } = context;
    const isActived = childContext.getSelectedValue() === value;

    return (
      <li
        className={classnames(styles.option, isActived ? styles.active : '')}
        onClick={this.click}
      >
        {children}
      </li>
    );
  }
}
