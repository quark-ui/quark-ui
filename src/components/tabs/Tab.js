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
  }

  static propTypes = {
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
    this.props.handleTabClick(this.props.tabKey);
  }

  render() {
    let tabClass,
        closeButtonStyle;

    const props = this.props;

    const { connectDropTarget } = props;
    if (props.status === 'active') {
      tabClass = classNames('tabs__tab', 'active');
    } else {
      tabClass = classNames('tabs__tab');
    }

    console.log(props);

    // only show the delete button when it's active
    if (props.tabDeleteButton && props.status === "active") {
      closeButtonStyle = {display: 'inline-block'};
    } else {
      closeButtonStyle = {display: 'none'};
    }

    const delIcon = (
      <Icon
        size={12}
        name={'close'}
        onClick={this.deleteButton}
      />
    );

    return (
      <div styleName={tabClass} onClick={this.clickTab}>
        {this.props.title}
        <div style={closeButtonStyle}>
          {delIcon}
        </div>
      </div>
    )
  }
}
