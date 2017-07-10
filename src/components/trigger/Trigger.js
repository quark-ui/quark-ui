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
    popupVisible: undefined,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 100,
    onPopupVisibleChange() {},
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    action: PropTypes.oneOf(['hover', 'click']),
    placement: PropTypes.arrayOf(PropTypes.oneOf(Array.from(ALIGN_ENUM))),
    offset: PropTypes.arrayOf(PropTypes.number),
    popup: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    popupVisible: PropTypes.bool,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    onPopupVisibleChange: PropTypes.func,
  }

  static getTargetRect = target => target.getBoundingClientRect()
  static getVisibleStateByProps = (props) => {
    return Trigger.isPopupVisibleDefined(props) ? props.popupVisible : false;
  }
  static isPopupVisibleDefined = props => typeof props.popupVisible !== 'undefined'

  constructor(props) {
    super(props);
    this.state = {
      position: [],
      active: Trigger.getVisibleStateByProps(props),
      ready: false,
    };
  }

  componentDidMount() {
    this.applyPlacement(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (Trigger.isPopupVisibleDefined(nextProps)) {
      this.setState({
        active: Trigger.getVisibleStateByProps(nextProps),
      }, () => {
        if (this.state.active) {
          on(document.body, 'click', this.checkClosable);
        } else {
          off(document.body, 'click', this.checkClosable);
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.active && this.state.active) {
      setTimeout(() => {
        this.applyPlacement(this.props);
      }, 100);
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
      if (Trigger.isPopupVisibleDefined(this.props)) {
        this.props.onPopupVisibleChange(true);
      } else {
        this.setState({
          active: true,
        }, () => {
          this.props.onPopupVisibleChange(true);
        });
      }
    }, mouseEnterDelay);
  }

  handleMouseLeave = () => {
    if (this.enterTimer) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }
    const { mouseLeaveDelay } = this.props;
    this.leaveTimer = setTimeout(() => {
      if (Trigger.isPopupVisibleDefined(this.props)) {
        this.props.onPopupVisibleChange(false);
      } else {
        this.setState({
          active: false,
        }, () => {
          this.props.onPopupVisibleChange(false);
        });
      }
    }, mouseLeaveDelay);
  }

  handleClickTrigger = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (Trigger.isPopupVisibleDefined(this.props)) {
      this.props.onPopupVisibleChange(!this.state.active);
    } else {
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
        this.props.onPopupVisibleChange(this.state.active);
      });
    }
  }

  applyPlacement(props) {
    if (!this.node || !this.popNode) return;
    const [popupAlign, selfAlign] = props.placement;
    const selfRect = Trigger.getTargetRect(this.node);
    const popupRect = Trigger.getTargetRect(this.popNode);
    if (popupRect.width === 0 && popupRect.height === 0) {
      this.setState({
        ready: false,
      });
      return;
    }
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
    const { position } = this.state;
    const newState = {
      ready: true,
    };
    const newPostition = [x + offset[0], y + offset[1]];
    if (position[0] !== newPostition[0] || position[0] !== newPostition[0]) {
      assign(newState, {
        position: newPostition,
      });
    }
    this.setState(newState);
  }

  renderPopup() {
    const { action } = this.props;
    const { position, active, ready } = this.state;
    const popupProps = {
      ref: n => (this.popup = n),
      popupRef: n => (this.popNode = n),
      position,
      visible: active,
      ready,
    };
    if (action === 'hover') {
      assign(popupProps, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      });
    }
    return (
      <Popup {...popupProps}>{this.props.popup}</Popup>
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
