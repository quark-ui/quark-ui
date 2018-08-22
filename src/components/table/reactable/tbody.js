import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Tr from './tr';
import styles from '../Table.css';

export default class Tbody extends PureComponent {
  static defaultProps = {
    emptyText: '暂无数据',
    dataSource: {},
    columns: {},
    selectedRowKeys: {},
    fixedColumn: 'scroll',
    root: null,
    currentHoverRow: null,
    fixedColumnsBodyRowsHeight: {},
    onSelectChange() {},
  };
  static propTypes = {
    emptyText: PropTypes.string,
    dataSource: PropTypes.instanceOf(Array),
    columns: PropTypes.instanceOf(Array),
    selectedRowKeys: PropTypes.instanceOf(Array),
    onSelectChange: PropTypes.func,
    fixedColumn: PropTypes.string,
    root: PropTypes.instanceOf(Object),
    currentHoverRow: PropTypes.number,
    fixedColumnsBodyRowsHeight: PropTypes.instanceOf(Object),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelectChange = (key, checked) => {
    let { selectedRowKeys } = this.props;
    if (checked) {
      selectedRowKeys.push(key);
    } else {
      selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
    }
    selectedRowKeys = selectedRowKeys.sort();
    if (this.props.onSelectChange) {
      this.props.onSelectChange(selectedRowKeys);
    }
  };
  render() {
    const tbs = [];
    const {
      emptyText,
      dataSource,
      columns,
      fixedColumn,
      root,
      currentHoverRow,
      fixedColumnsBodyRowsHeight,
      selectedRowKeys,
    } = this.props;

    if (dataSource.length) {
      dataSource.forEach((data, index) => {
        const styleTr = {
          height: `${fixedColumnsBodyRowsHeight[index]}px` || 'auto',
        };
        const checked = !!(
          selectedRowKeys &&
          selectedRowKeys.filter(item => item === index).length
        );
        const isHover = currentHoverRow === index;
        tbs.push(
          <Tr
            defaultstyle={styleTr}
            columns={columns}
            key={data.key}
            data={data}
            onChange={this.onChange}
            checked={checked}
            onSelectChange={this.onSelectChange}
            fixedColumn={fixedColumn}
            render={columns.render}
            index={index}
            root={root}
            isHover={isHover}
          />,
        );
      });
      return <tbody className={styles['table-tbody']}>{tbs}</tbody>;
    }
    const tbodystyle = classnames({
      [styles['table-tbody']]: true,
      [styles['table-tbody-empty']]: dataSource.length === 0,
    });
    return (
      <tbody className={tbodystyle}>
        <tr>
          <td colSpan={columns.length}>{emptyText}</td>
        </tr>
      </tbody>
    );
  }
}
