/**
 * Tabs Component
 * @author yan
 */
import React, { PureComponent, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Tab from './Tab';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Tabs extends PureComponent {
  static displayName = 'Tabs'

  static defaultProps = {
    defaultActiveKey: 0,
    type: 'line',
    size: 'default',
    tabPosition: 'top',
  }

  static propTypes = {
    type: PropTypes.oneOf([
      'line',
      'card',
      'button',
    ]),
    size: PropTypes.oneOf([
      'default',
      'small',
    ]),
    tabPosition: PropTypes.oneOf([
      'top',
      'left',
    ]),
    activeKey: PropTypes.number,
    defaultActiveKey: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.getPanel = this.getPanel.bind(this);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey,
      children: props.children,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey,
      });
    }
    if (nextProps.children !== this.state.children) {
      this.setState({
        children: nextProps.children,
      });
    }
  }

  onClick=(activeKey) => {
    const props = this.props;

    if (props.children[activeKey].props.disabled) {
      return;
    }
    if (props.onClick) {
      props.onClick(activeKey);
    }

    this.setState({
      activeKey,
      panelUpdateKey: -1,
    });
  }

  deleteButton = (key) => {
    this.props.deleteButton();
    this.setState({
      panelUpdateKey: key,
    });
  }

  getPanel = () => {
    const { activeKey, panelUpdateKey, style } = this.state;
    const { tabDeleteButton } = this.props;
    const tab = [];
    const panel = [];

    const tabProps = {
      style,
      onClick: this.onClick,
      tabDeleteButton,
      deleteButton: this.deleteButton,
    };

    Children.forEach(this.state.children, (children, index) => {
      // add tabs
      const status = index === activeKey ? 'active' : 'inactive';
      const selfProps = {
        key: `tab${index}`,
        tabKey: index,
        title: children.props.title,
        status,
        disabled: children.props.disabled,
        closable: children.props.closable,
      };

      tab.push(<Tab {...tabProps} {...selfProps} />);

      if (index === activeKey) {
        const panelProps = {
          className: classNames('tabs__panel', status),
          status,
          key: index,
          update: panelUpdateKey === index,
        };
        panel.push(cloneElement(children, panelProps));
      }
    });

    return { tab, panel };
  }


  render() {
    const opt = this.getPanel();
    const props = this.props;
    const { type, size, tabPosition } = props;
    const cls = classNames({
      tabs__card: type === 'card',
      tabs__button: type === 'button',
      tabs__small: size === 'small',
      'tabs__left clearfix': tabPosition === 'left',
      tabs__wrap: true,
    });

    return (
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
