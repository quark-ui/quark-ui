/**
 * Alert Component
 * @author lhf
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Alert.css';

@CSSModules(styles, { allowMultiple })
class Alert extends PureComponent {

  static displayName = 'Alert'

  static defaultProps = {
    type : 'info',
    closable: true,

  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type : PropTypes.oneOf([
      'info',
      'warning',
      'success',
      'error'
    ]),
    closable : PropTypes.bool
  }

  constructor(props) {
    console.log(props,222222222);
    super(props);
    this.state = {};
  }

  render() {
    const {type,closable} = this.props;
    return (
      <div styleName={'alert'}>
        <div styleName={'alert ' + `alert--${props.type}`}>
          <div styleName={'alert--content'}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;
