
/**
 * Button Component
 * @author ryan.bian
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Button extends Component {

  static displayName = 'Button'

  static defaultProps = {
    prefixCls: 'quark-button',
    className: '',
    type: 'primary',
    size: 'normal',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'outline',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, className, children, type, size } = this.props;
    const btnProps = {
      className: classnames(
        prefixCls,
        className,
        `${prefixCls}-${type}`,
        {
          [`${prefixCls}-${size}`]: size !== 'normal',
        },
      ),
    };
    return (
      <button {...btnProps}>{children}</button>
    );
  }
}

export default Button;
