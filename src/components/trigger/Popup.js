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
    onMouseEnter() {},
    onMouseLeave() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    popupRef: PropTypes.func,
    visible: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.isRequired,
  }
  render() {
    const { children, popupRef, position, visible, onMouseEnter, onMouseLeave } = this.props;
    const stylePos = {
      left: position[0],
      top: position[1],
    };
    const wrapProps = {
      ref: popupRef,
      styleName: 'popup',
      style: stylePos,
      onMouseEnter,
      onMouseLeave,
    };
    return (
      visible ? <div {...wrapProps}>{children}</div> : null
    );
  }
}
