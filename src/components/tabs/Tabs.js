/**
 * Tabs Component
 * @author yan
 */
import { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import RcTabs, { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/TabContent';
import Icon from '../icon';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Tabs extends PureComponent {

  static TabPane = TabPane;
  
  static displayName = 'Tabs'

  static defaultProps = {
    prefixCls: 'rc-tabs',
    size: 'default' | 'small',
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onEdit: PropTypes.func,
  }

  onChange = (activeKey) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(activeKey);
    }
  }

  onEdit = (targetKey, action) => {

  }

  removeTab = (targetKey, e) => {
    e.stopPropagation();
    if (!targetKey) {
      return;
    }
    const onEdit = this.props.onEdit;
    if (onEdit) {
      onEdit(targetKey, 'remove');
    }
  }

  render() {
    const {
      prefixCls,
      className = '',
      size,
      type = 'line',
      tabPosition,
      children,
    } = this.props;

    console.log(children)

    const cls = classNames({
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-card`]: type.indexOf('card') >= 0,
      [`${prefixCls}-${type}`]: true,
    });

    let childrenNodes = [];

    if (type === 'edit-card') {
      Children.forEach(children, (child, index) => {
        let closable = child.props.closable;
        closable = typeof closable === 'undefined' ? true : closable;
        let closeIcon;
        if (closable) {
          closeIcon = (
            <Icon
              size={12}
              name={'close'}
              onClick={e => this.removeTab(child.key, e)}
            />
          );
        }

        childrenNodes.push(cloneElement(child, {
          tab: (
            <div className={closable ? undefined : `${prefixCls}-tab-unclosable`}>
              {child.props.tab}
              {closeIcon}
            </div>
          ),
          key: child.key || index,
        }));
      });
    } else {
      childrenNodes = children;
    }

    return (
      <RcTabs
        {...this.props}
        className={cls}
        tabBarPosition={tabPosition}
        onChange={this.onChange}
        renderTabBar={() => <ScrollableInkTabBar />}
        renderTabContent={() => <TabContent />}
      >
        {childrenNodes}
      </RcTabs>
    );
  }
}
