import React, { PureComponent } from 'react';
import Tr from './tr';
import styles from '../Table.css';

export default class Tbody extends PureComponent {
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
        height: `${fixedColumnsBodyRowsHeight[index]}px`,
      };
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
          isHover={currentHoverRow === index}
        />,
      );
    });
    return <tbody className={styles['table-tbody']}>{tbs}</tbody>;
  }
}
