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
    rowSelection: {},
    fixedColumn: 'scroll',
    root: null,
    currentHoverRow: null,
    fixedColumnsBodyRowsHeight: {},
  };
  static propTypes = {
    emptyText: PropTypes.string,
    dataSource: PropTypes.instanceOf(Array),
    columns: PropTypes.instanceOf(Array),
    rowSelection: PropTypes.instanceOf(Object),
    fixedColumn: PropTypes.string,
    root: PropTypes.instanceOf(Object),
    currentHoverRow: PropTypes.number,
    fixedColumnsBodyRowsHeight: PropTypes.instanceOf(Object),
  };

  render() {
    const tbs = [];
    const {
      emptyText,
      dataSource,
      columns,
      rowSelection,
      fixedColumn,
      root,
      currentHoverRow,
      fixedColumnsBodyRowsHeight,
    } = this.props;

    if (dataSource.length) {
      dataSource.forEach((data, index) => {
        const styleTr = {
          height: `${fixedColumnsBodyRowsHeight[index]}px` || 'auto',
        };
        const isHover = currentHoverRow === index;
        tbs.push(<Tr
          defaultstyle={styleTr}
          columns={columns}
          rowSelection={rowSelection}
          key={data.key}
          data={data}
          fixedColumn={fixedColumn}
          render={columns.render}
          index={index}
          root={root}
          isHover={isHover}
        />);
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