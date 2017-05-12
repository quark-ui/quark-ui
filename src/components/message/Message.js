/**
 * Message Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Icon from '../icon';
import { allowMultiple } from '../../constants';
import styles from './Message.css';

@CSSModules(styles, { allowMultiple })
class Message extends PureComponent {

  static displayName = 'Message'

  static defaultProps = {
    onClose() {},
    duration: 1.5,
    type: 'info',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    children: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close = () => {
    this.clearCloseTimer();
    this.props.onClose();
  }


  render() {
    const { type, children } = this.props;

    return (
      <div styleName={classnames('message', `message__${type}`)}>
        <span styleName={'message--icon'}><Icon name="caution" size={12} /></span>
        <div styleName={'message--content'}>
          {children}
        </div>
      </div>
    );
  }
}

export default Message;
