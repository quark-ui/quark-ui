/**
 * Trigger Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import assign from 'object-assign';
import isEqual from 'lodash/isEqual';
import { allowMultiple, ALIGN_ENUM } from '../../constants';
import Popup from './Popup';
import styles from './Trigger.css';
import { on, off } from '../../utils/event';

@CSSModules(styles, { allowMultiple })
class Trigger extends PureComponent {

  static displayName = 'Trigger'

  static defaultProps = {
    action: 'hover',
    placement: ['tl', 'bl'],
    popup: '',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    action: PropTypes.oneOf(['hover', 'click']),
    placement: PropTypes.arrayOf(PropTypes.oneOf(Array.from(ALIGN_ENUM))),
    popup: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {
      position: [],
      active: false,
    };
  }

  componentDidMount() {
    this.applyPlacement(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.active && this.state.active) {
      setTimeout(() => {
        this.applyPlacement(this.props);
      }, 0);
    }
  }

  checkClosable = (e) => {
    if (this.node.contains(e.target)) return;
    if (!this.popNode.contains(e.target)) {
      this.handleClickTrigger();
    }
  }

  getTargetRect(target) {
    return target.getBoundingClientRect();
  }

  handleMouseEnter = () => {
    this.setState({
      active: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      active: false,
    });
  }

  handleClickTrigger = (e) => {
    e && e.preventDefault();
    this.setState({
      active: !this.state.active,
    }, () => {
      if (this.state.active) {
        // bind close listener
        on(document.body, 'click', this.checkClosable);
      } else {
        // unbind close listener
        off(document.body, 'click', this.checkClosable);
      }
    });
  }

  applyPlacement(props) {
    if (!this.node || !this.popNode) return;
    const [popupAlign, selfAlign] = props.placement;
    const selfRect = this.getTargetRect(this.node);
    const popupRect = this.getTargetRect(this.popNode);
    let x;
    let y;
    switch (selfAlign[0]) {
      case 't':
        y = selfRect.top;
        break;
      case 'b':
        y = selfRect.bottom;
        break;
      case 'c':
      default:
        y = selfRect.top + (selfRect.height / 2);
        break;
    }
    switch (selfAlign[1]) {
      case 'l':
        x = selfRect.left;
        break;
      case 'r':
        x = selfRect.right;
        break;
      case 'c':
      default:
        x = selfRect.left + (selfRect.width / 2);
        break;
    }
    switch (popupAlign[0]) {
      case 't':
      default:
        break;
      case 'b':
        y -= popupRect.height;
        break;
      case 'c':
        y -= popupRect.height / 2;
        break;
    }
    switch (popupAlign[1]) {
      case 'l':
      default:
        break;
      case 'r':
        x -= popupRect.width;
        break;
      case 'c':
        x -= popupRect.width / 2;
        break;
    }
    this.setState({
      position: [x, y],
    });
  }

  renderPopup() {
    const { position, active } = this.state;
    return (
      <Popup
        ref={n => (this.popup = n)}
        popupRef={n => (this.popNode = n)}
        position={position}
        visible={active}
      >{this.props.popup}</Popup>
    );
  }

  render() {
    const { action, children } = this.props;
    const triggerProps = {
      ref: n => (this.node = n),
    };
    if (action === 'hover') {
      assign(triggerProps, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      });
    } else if (action === 'click') {
      assign(triggerProps, {
        onClick: this.handleClickTrigger,
      });
    }
    return (
      <div styleName={'trigger'}>
        <span {...triggerProps}>{children}</span>
        { this.renderPopup() }
      </div>
    );
  }
}

export default Trigger;
