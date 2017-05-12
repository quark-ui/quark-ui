/**
 * Alert Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Alert.css';

function noop() {}
@CSSModules(styles, { allowMultiple })
class Alert extends PureComponent {

  static displayName = 'Alert'

  static defaultProps = {
    type: 'info',
    closable: false,
    closeText: 'X',
    message: '',
    description: '',
    onClose() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    closable: PropTypes.bool,
    closeText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onClose: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      // closing:true,
      closed: false,
    };
  }

  handleClose=(e) => {
    e.preventDefault();
    this.setState({
      // closing:false,
      closed: true,
    });

    (this.props.onClose || noop)(e);
  }

  render() {
    const { closable, description, type, message, closeText } = this.props;

    const closeIcon = closeText || closable ? (<a href="" onClick={this.handleClose} styleName={'alert--close'}>
      {closeText}
    </a>) : null;

    return this.state.closed ? null : (
      <div styleName={classnames('alert', `alert__${type}`)}>
        <span styleName={'alert--message'}>{message}</span>
        <span styleName={'alert--description'}>{description}</span>
        {closeIcon}
      </div>
    );
  }
}

export default Alert;
