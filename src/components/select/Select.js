/**
 * Select Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import debounce from 'lodash/debounce';
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
    text: null,
    children: null,
    onSearch: null,
    onChange: null,
    onCancelChange: null,
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
    text: PropTypes.string,
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
    const { type } = this.props;
    let text = null;
    let searchText = null;
    if (type === 'combobox') {
      text = this.props.text || null;
      searchText = this.props.text || null;
    } else {
      text = this.getValue(this.props.children, value);
    }

    this.state = {
      value, // 值
      text, // 显示文本,
      searchText, // (combobox专用) 搜索文本
      textOfLastSelected: null, // (combobox专用)，上次选中时的文本内容。用于取消选择时恢复到上次选中的文本
      dropdownVisible: false, // 下拉弹层是否显示
    };

    this.searchTextDebounced = debounce((searchTextString) => {
      const { onSearch } = this.props;
      if (onSearch) {
        onSearch(searchTextString);
      }
      this.setState({
        dropdownVisible: true,
      });
    }, 300);
  }

  getChildContext = () => ({
    childContext: {
      onOptionSelected: this.onOptionSelected,
      getSelectedValue: this.getSelectedValue,
    },
  });

  componentWillReceiveProps = (nextProps, nextContext) => {
    const { value, text } = nextProps;
    if (this.props.type === 'combobox') {
      if (text !== this.state.text) {
        this.setState({
          text,
          searchText: text,
          textOfLastSelected: text,
        });
      }
      if (value !== this.state.value) {
        this.setState({
          value,
        });
      }
    } else if (value !== this.state.value) {
      if ('value' in this.props) {
        this.setState({
          value,
          text: this.getValue(this.props.children, value),
        });
      }
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
          text: this.state.textOfLastSelected,
          searchText: this.state.textOfLastSelected,
        });
        if(onCancelChange) {
          onCancelChange();
        }
      } else {
        this.searchTextDebounced(this.state.searchText);
      }
    }
  }

  onComboboxInputChanged = (e) => {
    const value = e.target.value;
    this.searchTextDebounced(value);

    if (value) {
      this.setState({
        // value,
        searchText: value,
      });
    } else { // 当全部都删完时，清空历史
      this.setState({
        text: null,
        searchText: null,
        value: null,
        textOfLastSelected: null,
      });

      const { onChange } = this.props;
      if (onChange) {
        onChange({
          value: null,
          text: null,
        });
      }
    }
  }

  // 选项选中时回调
  onOptionSelected = (value, text) => {
    this.setState({
      dropdownVisible: false,
    });
    if (!('value' in this.props)) {
      // 非受控组件
      this.setState({
        value,
        text,
      });
    }

    this.setState({
      searchText: text,
      textOfLastSelected: text,
    });

    const { onChange } = this.props;
    if (onChange) {
      onChange({
        value,
        text,
      });
    }
  }

  getSelectedValue = () => this.state.value;

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
          text = child.props.text || child.props.children;
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
    this.setState({
      value: null,
      text: null,
      searchText: null,
      textOfLastSelected: null,
      dropdownVisible: false,
    });

    // this.searchTextDebounced('');

    const { onChange } = this.props;
    if (onChange) {
      onChange({
        value: null,
        text: null,
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
              this.state.text ? 
              <span>{this.state.text}</span>
              :
              <span className={styles.placeholder}>
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
      if(this.state.text) {
        selection = <span>{this.state.text}</span>
      }
      else {
        selection = <span className={styles.placeholder}>
          { this.props.placeholder }
        </span>;
      }
    } else if (type === 'combobox') {
      selection = (<input
        type="text"
        className={styles.comboboxInput}
        onChange={this.onComboboxInputChanged}
        placeholder={this.props.placeholder}
        value={this.state.searchText || ''}
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
          <div className={this.state.value ? styles.selectionClose : styles.selection} style={{ width }}>
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
