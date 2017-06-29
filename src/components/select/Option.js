/**
 * Select Component
 * @author heifade
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.css';

export default class Option extends PureComponent {
  static displayName = 'Option';

  static defaultProps = {};
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {};

  static contextTypes = {
    childContext: PropTypes.any,
  };

  click = (e) => {
    let { context } = this;
    let { childContext } = context;
    let { children, value, text } = this.props;
    childContext.setValue(value, text);
  };

  render() {
    let { children, text } = this.props;
    return <li className={styles.option} onClick={this.click}>{children ? children : text}</li>;
  }
}
