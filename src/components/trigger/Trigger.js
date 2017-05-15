/**
 * Trigger Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import assign from 'object-assign';
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
    offset: [0, 0],
    popup: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 100,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    action: PropTypes.oneOf(['hover', 'click']),
    placement: PropTypes.arrayOf(PropTypes.oneOf(Array.from(ALIGN_ENUM))),
    offset: PropTypes.arrayOf(PropTypes.number),
    popup: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    children: PropTypes.isRequired,
  }

  static getTargetRect = target => target.getBoundingClientRect()

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
    if (!this.node || this.node.contains(e.target)) return;
    if (this.popNode && !this.popNode.contains(e.target)) {
      this.handleClickTrigger();
    }
  }

  handleMouseEnter = () => {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
    const { mouseEnterDelay } = this.props;
    this.enterTimer = setTimeout(() => {
      this.setState({
        active: true,
      });
    }, mouseEnterDelay);
  }

  handleMouseLeave = () => {
    if (this.enterTimer) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }
    const { mouseLeaveDelay } = this.props;
    this.leaveTimer = setTimeout(() => {
      this.setState({
        active: false,
      });
    }, mouseLeaveDelay);
  }

  handleClickTrigger = (e) => {
    if (e) {
      e.preventDefault();
    }
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
    const selfRect = Trigger.getTargetRect(this.node);
    const popupRect = Trigger.getTargetRect(this.popNode);
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let x = scrollX;
    let y = scrollY;
    switch (selfAlign[0]) {
      case 't':
        y += selfRect.top;
        break;
      case 'b':
        y += selfRect.bottom;
        break;
      case 'c':
      default:
        y += selfRect.top + (selfRect.height / 2);
        break;
    }
    switch (selfAlign[1]) {
      case 'l':
        x += selfRect.left;
        break;
      case 'r':
        x += selfRect.right;
        break;
      case 'c':
      default:
        x += selfRect.left + (selfRect.width / 2);
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
    const { offset } = this.props;
    this.setState({
      position: [x + offset[0], y + offset[1]],
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
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >{this.props.popup}</Popup>
    );
  }

  render() {
    const { action, children } = this.props;
    const triggerProps = {
      ref: n => (this.node = n),
      styleName: 'trigger--wrap',
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
