/**
 * Select Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import Trigger from '../trigger/Trigger';
import OptGroup from './OptGroup';
import Option from './Option';
import styles from './Select.css';

export default class Select extends PureComponent {
  static displayName = 'Select';

  static defaultProps = {
    placeholder: '请选择',
    type: 'dropdown',
    style: { width: 200 },
    disabled: false,
    value: '',
    children: null,
    onSearch: () => {},
    onChange: () => {},
    onCancelChange: () => {},
  };

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
      'dropdown',
      'combobox',
    ]),
    style: PropTypes.object,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onSearch: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    // onSelect: PropTypes.func,
    onChange: PropTypes.func,
    onCancelChange: PropTypes.func,
  };

  static childContextTypes = {
    childContext: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      text: '',
      dropdownVisible: false, // 下接弹层是否显示
    };

    // 记录上次选择的值，供取消时回滚
    this.lastState = {
      value: '',
      text: '',
    };
  }

  getChildContext = () => ({
    childContext: {
      onOptionSelected: this.onOptionSelected,
      getSelectedValue: this.getSelectedValue,
    },
  });

  componentWillReceiveProps = (nextProps, nextContext) => {
    if (nextProps.value && nextProps.value !== this.state.value) {
      const value = nextProps.value;
      const text = this.getValue(this.props.children, value);

      this.setState({
        value: nextProps.value,
        text,
      });
    }
  }

  onDropdownVisibleChanged = (visible) => {
    this.setState({
      dropdownVisible: visible,
    });

    const { type } = this.props;
    if (type === 'combobox') {
      const { onCancelChange } = this.props;
      if (!visible) {
        this.setState({
          value: this.lastState.value,
          text: this.lastState.text,
        });
        onCancelChange();
      }
    }
  }

  onComboboxInputChanged = (e) => {
    const value = e.target.value;
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(value);
    }
    if (value) {
      this.setState({
        text: value,
      });
    } else { // 当全部都删完时，清空历史
      this.lastState = {
        value: '',
        text: '',
      };
      this.setState({
        text: '',
        value: '',
      });
    }
  }

  // 选项选中时回调
  onOptionSelected = (value, text) => {
    this.setState({
      value,
      text,
      dropdownVisible: false,
    });

    this.lastState.text = text;
    this.lastState.value = value;
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        value,
        text,
      });
    }
  }

  getSelectedValue = () => (this.state.value);

  // 在子组件中，根据value获取text
  getValue = (children, value) => {
    let text = '';
    React.Children.map(children, (child) => {
      if (text) {
        return;
      }
      if (child.type === OptGroup) {
        text = this.getValue(child.props.children, value);
      } else if (child.type === Option) {
        if (child.props.value === value) {
          text = child.props.text;
        }
      } else {
        text = this.getValue(child.props.children, value);
      }
    });
    return text;
  }

  remove = (e) => {
    if (e) {
      e.stopPropagation();
    }
    this.lastState.text = '';
    this.lastState.value = '';
    this.setState({
      value: '',
      text: '',
    });

    const { onChange } = this.props;
    if (onChange) {
      onChange({
        // value: null,
        // text: null,
      });
    }
  }

  render() {
    const { children, disabled, type } = this.props;
    const { width } = this.props.style;

    if (disabled) {
      return (
        <div className={styles.select} >
          <div className={classnames(styles.selection, styles.disabled)} style={{ width }}>
            {
              this.state.text || <span className={styles.placeholder}>
                { this.props.placeholder }
              </span>
            }
            <Icon
              name="arrow-down"
              size={14}
              className={styles.selectionDownIcon}
            />
          </div>
        </div>
      );
    }

    let selection = '';
    if (type === 'dropdown') { // 简单下位
      selection = this.state.text || <span className={styles.placeholder}>
        { this.props.placeholder }
      </span>;
    } else if (type === 'combobox') {
      selection = (<input
        type="text"
        className={styles.comboboxInput}
        onChange={this.onComboboxInputChanged}
        placeholder={this.props.placeholder}
        value={this.state.text}
      />);
    }

    const childrenLength = children.length;
    const popupVisible = this.state.dropdownVisible;

    return (
      <div className={styles.select} >
        <Trigger
          action={'click'}
          popup={
            <div className={styles.dropdown} style={{ width }}>
              <ul>
                <li className={classnames(styles.nooption)} style={{ display: childrenLength === 0 ? 'block' : 'none' }}>无匹配选项</li>
                {children}
              </ul>
            </div>
          }
          placement={['tl', 'bl']}
          mouseLeaveDelay={100}
          popupVisible={popupVisible}
          onPopupVisibleChange={this.onDropdownVisibleChanged}
        >
          <div className={styles.selection} style={{ width }}>
            { selection }
            <Icon
              name={popupVisible ? 'arrow-up' : 'arrow-down'}
              size={14}
              className={styles.selectionDownIcon}
            />
            {
              this.state.value ? (
                <Icon
                  name="close"
                  size={14}
                  className={styles.selectionCloseIcon}
                  onClick={this.remove}
                />
              ) : ''
            }
          </div>
        </Trigger>
      </div>
    );
  }
}
