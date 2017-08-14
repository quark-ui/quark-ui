/**
 * Tabs Component
 * @author yan
 */
import { PureComponent, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class FunctionTab  extends PureComponent {
  static displayName = 'FunctionTab'

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
  }

  clickTab() {
    this.props.handleTabClick();
  }

  render() {
    var tabClass;

    tabClass = classNames('tabs__tab', 'add');

    return (
      <span>
        <li className={tabClass} onClick={this.clickTab}>
          {this.props.title}
        </li>
      </span>
    );
  }
}
