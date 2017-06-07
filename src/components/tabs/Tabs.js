/**
 * Tabs Component
 * @author yan
 */
import { PureComponent } from 'react';
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

  static displayName = 'Tabs'
  

  static defaultProps = {
    prefixCls:'rc-tabs',
    size: 'default' | 'small',
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    defaultActiveKey: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (activeKey) =>{
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(activeKey);
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

    
    let cls = classNames({
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-card`]: type.indexOf('card') >= 0,
      [`${prefixCls}-${type}`]: true,
    });


    return (
      <RcTabs
        {...this.props}
        className={cls}
        tabBarPosition={tabPosition}
        onChange={this.onChange}
        renderTabBar={()=><ScrollableInkTabBar />}
        renderTabContent={()=><TabContent />}
      >
      {children}
      </RcTabs>
    );
  }
}