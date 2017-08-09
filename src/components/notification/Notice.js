/**
 * Alert Component
 * @author yanwei
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import Icon from '../icon';

import { allowMultiple } from '../../constants';
import styles from './Notification.css';

@CSSModules(styles, { allowMultiple })
class Notice extends PureComponent {
  static displayName = 'Notice'

  static defaultProps = {
    onEnd(){},
    onClose(){},
    duration:4.5,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    message: PropTypes.string,
    description: PropTypes.string,
    duration : PropTypes.number,
    btn: PropTypes.node,
    icon: PropTypes.node,
    onClose : PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount(){
    if(this.props.duration){
      this.closeTimer = setTimeout(() => {
        this.handleClose();
      },this.props.duration * 1000);
    }
  }

  componentWillUnmount(){
    this.clearCloseTimer();
  }

  clearCloseTimer = ()=>{
    if(this.closeTimer){
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  handleClose = ()=>{
    this.clearCloseTimer();
    this.props.onClose();
  }


  render() {
    const props = this.props;
    const { type,icon,btn, children } = props;
    const cls = classnames({
      ['notification']:1,
      ['notification--icon']:type || icon,
    });

    return (
      <div styleName={cls} style={props.style}>
        <div styleName={'notification--content'}>
          {type ? <Icon styleName={'notification__icon'} name={type} size={24} /> : null}
          {icon ? icon : null}
          <div styleName={'notification__mes'}>
            {props.message}
          </div>
          <div styleName={'notification__des'}>
            {props.description}
          </div>
          {
            btn ? <div styleName={'notification__btn'}>
              {btn}
            </div>: null
          }
        </div>
          <span onClick={this.handleClose} styleName={'notification--close'}>
            <Icon name="close" size={14} />
          </span>
      </div>
    );
  }
}

export default Notice;
