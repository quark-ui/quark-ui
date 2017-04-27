/**
 * Message Component
 * @author grootfish
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Message.css';

@CSSModules(styles, { allowMultiple })
class Message extends PureComponent {

  static displayName = 'Message'

  static defaultProps = {
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName={'message'}>Message</div>
    );
  }
}

export default Message;
