import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../checkbox';
import Th from './th';
import styles from '../Table.css';

export default class Thead extends PureComponent {
  static defaultProps = {
    columns: {},
    dataSource: [],
    selections: null,
    selectedRowKeys: [],
    allChecked: false,
    fixedColumn: 'scroll',
    fixedColumnsHeadRowsHeight: {},
    onSelectChange() {},
  };
  static propTypes = {
    columns: PropTypes.instanceOf(Array),
    dataSource: PropTypes.instanceOf(Object),
    selections: PropTypes.string,
    selectedRowKeys: PropTypes.instanceOf(Array),
    onSelectChange: PropTypes.func,
    // rowSelection: PropTypes.instanceOf(Object),
    fixedColumn: PropTypes.string,
    fixedColumnsHeadRowsHeight: PropTypes.instanceOf(Array),
  };
  constructor(props) {
    super(props);
    this.state = {
      allChecked: !!(
        this.props.selectedRowKeys &&
        this.props.selectedRowKeys.length === this.props.dataSource.length
      ),
    };
  }
  componentDidMount() {
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.selectedRowKeys && nextprops.dataSource) {
      this.setState({
        allChecked: nextprops.selectedRowKeys.length === nextprops.dataSource.length,
      });
    }
  }

  handleAllChecked = (allChecked, e) => {
    e.stopPropagation();
    this.setState({
      allChecked,
    });
    const selectedRowKeys = allChecked ? [...Array(3).keys()] : [];
    if (this.props.onSelectChange) {
      this.props.onSelectChange(selectedRowKeys);
    }
  };
  renderTh() {
    const ths = [];
    const rightths = [];
    const leftths = [];
    const { fixedColumn, columns, selections } = this.props;
    const { allChecked } = this.state;

    columns.forEach((item) => {
      let th = <Th key={item.key}>{item.title}</Th>;
      if (item.key === 'select') {
        th = (<Th key={selections}>
          <Checkbox
            checked={allChecked}
            onChange={e => this.handleAllChecked(!allChecked, e)}
          />
        </Th>);
      }
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
