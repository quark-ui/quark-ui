/**
 * Tabs Component
 * @author yan
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Icon from '../icon';
import { allowMultiple } from '../../constants';
import styles from './Tabs.css';

@CSSModules(styles, { allowMultiple })
export default class Tab extends PureComponent {
  static displayName = 'Tab';

  static defaultProps = {
    closable: true,
    tabKey: null,
    deleteButton() {},
    onClick() {},
  };

  static propTypes = {
    closable: PropTypes.bool,
    tabKey: PropTypes.string,
    deleteButton: PropTypes.func,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.clickTab = this.clickTab.bind(this);
  }

  deleteButton = (e) => {
    // e.stopPropagation();
    this.props.deleteButton(this.props.tabKey);
  }

  clickTab = () => {
    this.props.onClick(this.props.tabKey);
  }

  render() {
    const props = this.props;

    const {
      closable,
      disabled,
      status,
      tabDeleteButton,
      title,
    } = props;

    const tabClass = classNames({
      disabled: disabled === true,
      active: status === 'active',
      tabs__tab: true,
    });

    const delIcon = (
      <Icon size={12} name={'close'} onClick={this.deleteButton} />
    );

    return (
      <div
        styleName={tabClass}
        onClick={this.clickTab}
      >
        {title}
        {tabDeleteButton && closable
          ? <div styleName={'tab__del'}>
            {delIcon}
          </div>
          : null}
      </div>
    );
  }
}
