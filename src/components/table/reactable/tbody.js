import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tr from './tr';
import styles from '../Table.css';

export default class Tbody extends PureComponent {
  static defaultProps = {
    dataSource: {},
    columns: {},
    fixedColumn: 'scroll',
    root: null,
    currentHoverRow: null,
    isHover: false,
    fixedColumnsBodyRowsHeight: {},
  }
  static propTypes = {
    dataSource: PropTypes.instanceOf(Array),
    columns: PropTypes.instanceOf(Array),
    fixedColumn: PropTypes.string,
    root: PropTypes.instanceOf(Object),
    currentHoverRow: PropTypes.number,
    fixedColumnsBodyRowsHeight: PropTypes.instanceOf(Object),
  }

  render() {
    const tbs = [];
    const {
      dataSource,
      columns,
      fixedColumn,
      root,
      currentHoverRow,
      fixedColumnsBodyRowsHeight,
    } = this.props;
    dataSource.forEach((data, index) => {
      const styleTr = {
        height: `${fixedColumnsBodyRowsHeight[index]}px` || 'auto',
      };
      const isHover = currentHoverRow === index;
      tbs.push(
        <Tr
          style={styleTr}
          columns={columns}
          key={data.key}
          data={data}
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
}
