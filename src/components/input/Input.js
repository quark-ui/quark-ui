/**
 * Input Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Input.css';

@CSSModules(styles, { allowMultiple })
class Input extends PureComponent {

  static displayName = 'Input'

  static defaultProps = {
    type: 'text',
    size: 'normal',
    disabled: false,
    autosize:false
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'textarea',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    disabled: PropTypes.bool,
    autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    children: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, type, size, disabled, autosize, ...otherProps } = this.props;
    const btnProps = {
      ...otherProps,
      styleName: `input__${disabled ? 'disabled' : type} input__${size}`,
    };

    switch (this.props.type) {
      case 'textarea':
        return (
          <textarea 
          {...btnProps}
          disabled={this.props.disabled}
           />
        );
      default:
        return (
          <input 
          {...btnProps}
          disabled={this.props.disabled}
           />
        );
    }

  }
}

export default Input;
