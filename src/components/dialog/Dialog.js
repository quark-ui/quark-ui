
/**
 * Button Component
 * @author ryan.bian
 */
import { Component } from 'react';
import RcDialog from 'rc-dialog';
import PropTypes from 'prop-types';

class Dialog extends Component {

  static displayName = 'Dialog'

  static defaultProps = {
    prefixCls: 'quark-button',
    className: '',
  }
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RcDialog {...this.props} />
    );
  }
}

export default Dialog;
