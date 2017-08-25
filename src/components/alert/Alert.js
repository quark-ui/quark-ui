/**
 * Alert Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Icon from '../icon';

import { allowMultiple } from '../../constants';
import styles from './Alert.css';

function noop() {}
@CSSModules(styles, { allowMultiple })
class Alert extends PureComponent {

  static displayName = 'Alert'

  static defaultProps = {
    type: 'info',
    closable: false,
    showIcon: false,
    closeText: '',
    message: '',
    description: '',
    onClose() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    closable: PropTypes.bool,
    showIcon: PropTypes.bool,
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
    const { description, type, message, showIcon, closeText } = this.props;
    if (closeText) {
      this.props.closable = true;
    }


    const alertCls = classnames(
      {
        alert: true,
        [`alert__${type}`]: true,
        'with-description': !!description,
        'no-icon': !showIcon,
      },
    );

    return this.state.closed ? null : (
      <div styleName={alertCls}>
        {showIcon ? <Icon styleName={'alert--icon'} name={type} size={18} /> : null}
        <span styleName={'alert--message'}>{message}</span>
        <span styleName={'alert--description'}>{description}</span>
        {this.props.closable ? <span onClick={this.handleClose} styleName={'alert--close'}>
          {closeText || <Icon name="close" size={14} />}
        </span> : null}
      </div>
    );
  }
}

export default Alert;
