import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Td from './td';
import Checkbox from '../../checkbox';
import styles from '../Table.css';

export default class Tr extends PureComponent {
  static defaultProps = {
    index: null,
    checked: false,
    root: null,
    isHover: null,
    defaultstyle: null,
    onSelectChange: null,
  };
  static propTypes = {
    isHover: PropTypes.bool,
    index: PropTypes.number,
    checked: PropTypes.bool,
    root: PropTypes.instanceOf(Object),
    defaultstyle: PropTypes.instanceOf(Object),
    onSelectChange: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked || false,
    };
  }

  componentDidMount() {}
  componentWillReceiveProps(nextprops) {
    this.setState({
      checked: nextprops.checked,
    });
  }
  handleMouseEnter() {
    this.props.root.handleRowHover(this.props.index, true);
  }

  handleMouseLeave() {
    this.props.root.handleRowHover(this.props.index, false);
  }
  handleToggleChecked = (key, checked, e) => {
    e.stopPropagation();
    this.setState({
      checked,
    });
    if (this.props.onSelectChange) {
      this.props.onSelectChange(key, checked);
    }
  };
  renderColumns(renderProps) {
    const { index, columns, data, fixedColumn } = renderProps;
    const { checked } = this.state;
    const tds = [];
    const righttds = [];
    const lefttds = [];
    columns.forEach((item) => {
      let value;
      let action;
      if (!!item.render && typeof item.render === 'function') {
        action = <div>{item.render()}</div>;
      }
      if (data[item.key]) {
        value = data[item.key];
      }
      const td =
        item.key === 'select' ? (
          <Td column={item} key={item.key}>
            <Checkbox
              checked={checked}
              onChange={e => this.handleToggleChecked(index, !checked, e)}
            />
          </Td>
        ) : (
          <Td column={item} key={item.key}>
            {value || action}
          </Td>
        );
      if (item.fixed && item.fixed === 'left') {
        lefttds.push(td);
      } else if (item.fixed && item.fixed === 'right') {
        righttds.push(td);
      }
      tds.push(td);
    });

    if (fixedColumn === 'left') {
      return lefttds;
    } else if (fixedColumn === 'right') {
      return righttds;
    }
    return tds;
  }

  render() {
    const { isHover, index, defaultstyle } = this.props;
    return (
      <tr
        data-row-key={index}
        ref={(c) => {
          this.trRow = c;
        }}
        className={classnames({
          [styles['table-row']]: true,
          [styles['table-row-hover']]: isHover,
        })}
        style={defaultstyle}
        onMouseEnter={() => {
          this.handleMouseEnter();
        }}
        onMouseLeave={() => {
          this.handleMouseLeave();
        }}
      >
        {this.renderColumns(this.props)}
      </tr>
    );
  }
}

// Tr.childNode = Td;
// Tr.dataType = "object";
