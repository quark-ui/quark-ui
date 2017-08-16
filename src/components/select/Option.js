/**
 * Select Component
 * @author heifade
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Select.css';

export default class Option extends PureComponent {
  static displayName = 'Option';

  static defaultProps = {
    value: '',
    title: undefined,
    children: null,
  };
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  static contextTypes = {
    childContext: PropTypes.any,
  };

  click = () => {
    const { context } = this;
    const { childContext } = context;
    const { value, title, children } = this.props;
    childContext.onOptionSelected(value, title || children);
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
