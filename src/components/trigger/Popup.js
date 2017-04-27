/**
 * Popup Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import renderTo from '../../enhancer/render-to';
import styles from './Trigger.css';

@renderTo()
@CSSModules(styles, { allowMultiple })
export default class Popup extends PureComponent {

  static displayName = 'Popup'

  static defaultProps = {
    position: [0, 0],
    popupRef: null,
    visible: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    popupRef: PropTypes.any,
    visible: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, popupRef, position, visible } = this.props;
    const stylePos = {
      left: position[0],
      top: position[1],
    };
    return (
      visible ? <div
        ref={popupRef}
        styleName={'popup'}
        style={stylePos}
      >{children}</div> : null
    );
  }
}
