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
  static OptGroup = OptGroup;
  static Option = Option;

  static defaultProps = {
    placeholder: '请选择',
    type: 'dropdown',
    style: { width: 200 },
    disabled: false,
    // defaultValue:'',
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
    defaultValue: PropTypes.string,
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

    const value = this.props.value || this.props.defaultValue;
    const title = this.getValue(this.props.children, value);


    this.state = {
      value,
      title: title || undefined,
      dropdownVisible: false, // 下接弹层是否显示
    };

    // 记录上次选择的值，供取消时回滚
    this.lastState = {
      value: this.state.value,
      title: this.state.title,
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
      const title = this.getValue(this.props.children, value);

      this.setState({
        value: nextProps.value,
        title,
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
          title: this.lastState.title,
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
        value,
        title: value,
      });
    } else { // 当全部都删完时，清空历史
      this.lastState = {
        value: '',
        title: undefined,
      };
      this.setState({
        title: '',
        value: undefined,
      });
    }
  }

  // 选项选中时回调
  onOptionSelected = (value, title) => {
    this.setState({
      dropdownVisible: false,
    });
    if(typeof this.props.value !== 'undefined'){
      // 受控组件
     this.props.onChange({
        value,
        title,
      });
    }else{
      // 非受控组件
      this.setState({
        value,
        title,
      });
      this.props.onChange(
        value,
        title,
      );
    }
  }

  getSelectedValue = () => this.state.value;

  // 在子组件中，根据value获取text
  getValue = (children, value) => {
    let title = '';
    React.Children.map(children, (child) => {
      if (title) {
        return;
      }
      if (child.type === OptGroup) {
        title = this.getValue(child.props.children, value);
      } else if (child.type === Option) {
        if (child.props.value === value) {
          title = child.props.title || child.props.children;
        }
      } else {
        title = this.getValue(child.props.children, value);
      }
    });
    return title;
  }

  remove = (e) => {
    if (e) {
      e.stopPropagation();
    }
    this.lastState.title = undefined;
    this.lastState.value = '';
    this.setState({
      value: '',
      title: undefined,
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
              this.state.title || <span className={styles.placeholder}>
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
      selection = this.state.title || <span className={styles.placeholder}>
        { this.props.placeholder }
      </span>;
    } else if (type === 'combobox') {
      selection = (<input
        type="text"
        className={styles.comboboxInput}
        onChange={this.onComboboxInputChanged}
        placeholder={this.props.placeholder}
        value={this.state.value}
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
          <div className={this.state.value ? styles.selectionClose: styles.selection} style={{ width }}>
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
