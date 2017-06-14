/**
 * Button Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.css';

class Button extends PureComponent {

  static displayName = 'Button'

  static defaultProps = {
    type: 'primary',
    size: 'normal',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'dashed',
      'danger',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    children: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, type, size, disabled, ...otherProps } = this.props;
    const btnProps = {
      ...otherProps,
      className: classnames(
        styles[`button--${disabled ? 'disabled' : type}`],
        styles[`button--${size}`],
      ),
    };
    return (
      <button {...btnProps}>{children}</button>
    );
  }
}

export default Button;
