/**
 * Uploader Component
 * @author heifade
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Uploader.css';

@CSSModules(styles, { allowMultiple })
class Uploader extends PureComponent {

  static displayName = 'Uploader'

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
      <div styleName={'uploader'}>Uploader</div>
    );
  }
}

export default Uploader;
