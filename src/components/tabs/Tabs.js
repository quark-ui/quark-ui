/**
 * Tabs Component
 * @author yan
 */
import React,{ PureComponent, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Icon from '../icon';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Tabs extends PureComponent {
  static displayName = 'Tabs'

  static defaultProps = {
    defaultActiveKey: 0,
    type:'line',
    size:'default',
    tabPosition:'top',
  }

  static propTypes = {
    type:PropTypes.oneOf([
      'line',
      'card',
    ]),
    size:PropTypes.oneOf([
      'default',
      'small',
    ]),
    tabPosition:PropTypes.oneOf([
      'top',
      'left',
    ]),
    activeKey: PropTypes.number,
    defaultActiveKey: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.getPanel = this.getPanel.bind(this);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey,
      children: props.children,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey
      })
    }
    if (nextProps.children !== this.state.children) {
      this.setState({
        children: nextProps.children
      })
    }
  }

  handleTabClick=(activeKey)=> {
    if (this.props.handleTabClick) {
      this.props.handleTabClick(activeKey);
    }

    this.setState({
      activeKey: activeKey,
      panelUpdateKey: -1
    })
  }

  deleteButton = (key)=> {
    this.props.deleteButton();
    this.setState({
      panelUpdateKey: key
    })
  }

  getPanel = () => {
    var that = this;
    let tab = [];
    let panel = [];
    Children.forEach(this.state.children, function(children, index) {
      // add tabs
      let status, className;
      if (index === that.state.activeKey) {
        status = 'active';
      } else {
        status = 'inactive';
      }
      var props = {
        key: 'tab'+index,
        tabKey: index,
        title: children.props.title,
        status: status,
        style: that.state.style,
        handleTabClick: that.handleTabClick,
        tabDeleteButton: that.props.tabDeleteButton,
        deleteButton: that.deleteButton,
      }
      
      tab.push(<Tab {...props}/>);

      if (!children.props.lazy || (children.props.lazy && index === that.state.activeKey)) {
        var props = {className: classNames('tabs__panel', status), status: status, key: index};
        if (that.state.panelUpdateKey === index) {
          props.update = true;
        }
        panel.push(cloneElement(children, props));
      }
    })

    return {tab: tab, panel: panel};
  }


  render() {
    var opt = this.getPanel();
    const props = this.props;
    const{type,size,tabPosition, ...otherProps} = props;
    const cls = classNames({
        ['tabs__card'] : type === 'card',
        ['tabs__small'] : size === 'small',
        ['tabs__left clearfix'] : tabPosition === 'left',
        ['tabs__wrap'] : true,
      })

    return(
      <div styleName={cls}>
        <div styleName={'tabs__bar'}>
          {opt.tab}
        </div>
        <div styleName={'tabs__con'}>
          {opt.panel}
        </div>
      </div>
    );
  }
}
