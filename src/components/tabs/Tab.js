/**
 * Tabs Component
 * @author yan
 */
import { PureComponent, cloneElement, Children } from 'react';
import ReactDOM from 'react-dom';
import Tappable from 'react-tappable';
import Icon from '../icon';

import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Tab extends PureComponent {
  static displayName = 'Tab'

  static defaultProps = {
    closable:true,
  }

  static propTypes = {
    closable:PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.clickTab = this.clickTab.bind(this);
  }

   deleteButton = (e) => {
    e.stopPropagation(); //prevent trigger clickTab function
    this.props.deleteButton(this.props.tabKey);
  }

  clickTab = ()=> {
    this.props.onClick(this.props.tabKey);
  }

  render() {
    let tabClass,
        delTabStyle;

    const props = this.props;
    console.log(props);

    const { closable,disabled,status,tabDeleteButton,title, connectDropTarget } = props;
    tabClass = classNames({
      ['disabled']:disabled === true,
      ['active']:status === 'active',
      ['tabs__tab']:true,
    })
    
    delTabStyle = status === "active" ? {display: 'inline-block'} : {display: 'none'};

    const delIcon = (
      <Icon
        size={12}
        name={'close'}
        onClick={this.deleteButton}
      />
    );

    return (
      <div styleName={tabClass} onClick={this.clickTab}>
        {title}{
          tabDeleteButton ? 
          <div style={delTabStyle}>
          {closable ? delIcon : null}
          </div> :null
        }
      </div>
    )
  }
}
