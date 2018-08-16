import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Th from './th';
import styles from '../Table.css';

export default class Thead extends PureComponent {
  static defaultProps = {
    columns: {},
    // rowSelection: {},
    fixedColumn: 'scroll',
    fixedColumnsHeadRowsHeight: {},
  }
  static propTypes = {
    columns: PropTypes.instanceOf(Array),
    // rowSelection: PropTypes.instanceOf(Object),
    fixedColumn: PropTypes.string,
    fixedColumnsHeadRowsHeight: PropTypes.instanceOf(Array),
  }

  renderTh() {
    const ths = [];
    const rightths = [];
    const leftths = [];
    const { fixedColumn, columns } = this.props;

    columns.forEach((item) => {
      const th = <Th key={item.key}>{item.title}</Th>;
      if (item.fixed && item.fixed === 'left') {
        leftths.push(th);
      } else if (item.fixed && item.fixed === 'right') {
        rightths.push(th);
      }
      ths.push(th);
    });

    if (fixedColumn === 'left') {
      return leftths;
    } else if (fixedColumn === 'right') {
      return rightths;
    }

    return ths;
  }

  render() {
    const { fixedColumnsHeadRowsHeight } = this.props;
    const height = {
      height: `${fixedColumnsHeadRowsHeight}px` || 'auto',
    };
    return (
      <thead className={styles['table-thead']}>
        <tr style={height}>{this.renderTh()}</tr>
      </thead>
    );
  }
}
