/**
 * Tabs Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class FunctionTab extends PureComponent {
  static displayName = 'FunctionTab'

  static defaultProps = {
    title: '',
    handleTabClick() {},
  }

  static propTypes = {
    title: PropTypes.string,
    handleTabClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
  }

  clickTab() {
    this.props.handleTabClick();
  }

  render() {
    const tabClass = classNames('tabs__tab', 'add');

    return (
      <li
        className={tabClass}
        onClick={this.clickTab}
      >
        {this.props.title}
      </li>
    );
  }
}
