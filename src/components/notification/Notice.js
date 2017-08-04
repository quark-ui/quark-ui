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
    duration:1.5,
    style:{
      right:'50%',
    }
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    duration : PropTypes.number,
    onclose : PropTypes.func,
    content : PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount(){
    if(this.props.duration){
      this.closeTimer = setTimeout(() => {
        this.close();
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

  close = () =>{
    this.clearCloseTimer();
    this.props.onClose();
  }


  render() {
    const props = this.props;
    const { type, children } = props;

    const className = {
      ['notification']:1,
    };


    return (
      <div styleName={classnames('notification', `notification__${type}`)} style={props.style}>
        <div className={'notification--content'}></div>
          {children}
          {props.closeable ?
            <a tabIndex="0" onclick={this.close} className={'notification--close'}>
              <span className={'notification--closex'}></span>
            </a> : null
          }
      </div>
    );
  }
}

export default Notice;
