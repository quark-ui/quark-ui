import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';
import { measureScrollbar } from './utils';
import Icon from '../../icon';
import Colgroup from './colgroup';
import Thead from './thead';
import Tbody from './tbody';
import styles from '../Table.css';

export default class Table extends PureComponent {
  static defaultProps = {
    dataSource: [],
    columns: [],
    title() {},
    footer() {},
    onChange() {},
    childrenColumnName: 'children',
  };
  static propTypes = {
    dataSource: PropTypes.instanceOf(Object),
    columns: PropTypes.instanceOf(Object),
    title: PropTypes.func,
    footer: PropTypes.func,
    onChange: PropTypes.func,
    childrenColumnName: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      ...this.getSortStateFromColumns(),
      // width: 1000,
      // height: '100%',
      // emptyText: '暂无数据',
      // dataSource: this.props.dataSource ? this.props.dataSource : {},
      currentHoverRow: -1,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {},
    };
    this.hasFixed = this.hasFixColumn(props);
  }

  componentDidMount() {
    this.handleWindowResize();
    this.bodyTable.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    if (this.getSortOrderColumns(nextProps.columns).length > 0) {
      const sortState = this.getSortStateFromColumns(nextProps.columns);
      if (
        sortState.sortColumn !== this.state.sortColumn ||
        sortState.sortOrder !== this.state.sortOrder
      ) {
        this.setState(sortState);
      }
    }
  }
  componentDidUpdate() {
    this.handleWindowResize();
  }
  componentWillUnmount() {
    this.bodyTable.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  getSortStateFromColumns(columns) {
    // return fisrt column which sortOrder is not falsy
    const sortedColumn = this.getSortOrderColumns(columns).filter(
      col => col.sortOrder,
    )[0];
    if (sortedColumn) {
      return {
        sortColumn: sortedColumn,
        sortOrder: sortedColumn.sortOrder,
      };
    }
    return {
      sortColumn: null,
      sortOrder: null,
    };
  }
  // getHeaderRows=(columns, currentRow = 0, rows) => {
  //   rows[currentRow] = rows[currentRow] || [];
  //   columns.forEach((column) => {
  //     if (column.rowSpan && rows.length < column.rowSpan) {
  //       while (rows.length < column.rowSpan) {
  //         rows.push([]);
  //       }
  //     }
  //     const cell = {
  //       key: column.key,
  //       className: column.className || '',
  //       children: column.title,
  //       column,
  //     };
  //     if (column.children) {
  //       this.getHeaderRows(column.children, currentRow + 1, rows);
  //     }
  //     rows[currentRow].push(cell);
  //   });
  //   return rows.filter(row => row.length > 0);
  // }

  getSortOrderColumns(columns) {
    return (columns || this.props.columns || []).filter(
      column => 'sortOrder' in column,
    );
  }
  getColumnKey(column, index) {
    return column.key || column.dataIndex || index;
  }
  getSorterFn = (a, b) => {
    const { sortOrder, sortColumn } = this.state;
    const result = sortColumn.sorter(a, b);
    if (result !== 0) {
      return sortOrder === 'descend' ? -result : result;
    }
    return 0;
  };

  getLocalData = () => {
    const { dataSource } = this.props;
    let data = dataSource || [];
    // 优化本地排序
    data = data.slice(0);
    const { sortOrder, sortColumn } = this.state;
    const sorterFn = (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') ? null : this.getSorterFn;

    if (sorterFn) {
      data = this.recursiveSort(data, sorterFn);
    }
    return data;
  };
  recursiveSort = (data, sorterFn) => {
    const { childrenColumnName } = this.props;
    return data.sort(sorterFn).map(
      item =>
        (item[childrenColumnName]
          ? {
            ...item,
            [childrenColumnName]: this.recursiveSort(
              item[childrenColumnName],
              sorterFn,
            ),
          }
          : item),
    );
  };
  handleRowHover(index, isEnter) {
    if (!isEnter) {
      this.rowHoverTimer = setTimeout(() => {
        this.setState({
          currentHoverRow: -1,
        });
      }, 100);
    } else {
      if (this.rowHoverTimer) {
        clearTimeout(this.rowHoverTimer);
        this.rowHoverTimer = null;
      }
      this.setState({
        currentHoverRow: index,
      });
    }
  }
  handleBodyScrollTop = (e) => {
    const target = e.target || {};
    if (e.currentTarget !== e.target) {
      return;
    }
    const { fixedColumnsBodyLeft, fixedColumnsBodyRight } = this;
    if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
      fixedColumnsBodyLeft.scrollTop = target.scrollTop;
    }
    if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
      fixedColumnsBodyRight.scrollTop = target.scrollTop;
    }
    if (this.bodyTable && target !== this.bodyTable) {
      this.bodyTable.scrollTop = target.scrollTop;
    }
    this.lastScrollTop = target.scrollTop;
  };
  handleBodyScrollLeft = (e) => {
    const target = e.target || {};
    if (e.currentTarget !== e.target) {
      return;
    }
    if (this.headTable && this.bodyTable && target === this.bodyTable) {
      this.headTable.scrollLeft = target.scrollLeft;
    }
  };
  handleBodyScroll = (e) => {
    this.handleBodyScrollTop(e);
    this.handleBodyScrollLeft(e);
  };
  saveRef = name => (node) => {
    this[name] = node;
  };
  hasFixColumn = (props) => {
    let hasLeft = false;
    let hasRight = false;
    const columns = props.columns.filter((item) => {
      if (item.fixed && item.fixed === 'left') {
        hasLeft = true;
        return true;
      }

      if (item.fixed && item.fixed === 'right') {
        hasRight = true;
        return true;
      }
      return false;
    });

    if (columns.length > 0) {
      return {
        hasLeft,
        hasRight,
      };
    }
    return false;
  };
  syncFixedTableRowHeight = () => {
    const tableRect = this.tableNode.getBoundingClientRect();
    if (tableRect.height !== undefined && tableRect.height <= 0) {
      return;
    }
    const headRows = this.tablebox.querySelectorAll('thead');
    const fixedColumnsHeadRowsHeight = [].map.call(
      headRows,
      row => row.getBoundingClientRect().height || 'auto',
    );

    const bodyRows = this.tablebox.querySelectorAll('tr[data-row-key]') || [];
    const fixedColumnsBodyRowsHeight = [].reduce.call(
      bodyRows,
      (acc, row) => {
        const rowKey = row.getAttribute('data-row-key');
        const height = row.getBoundingClientRect().height || 'auto';
        acc[rowKey] = height;
        return acc;
      },
      {},
    );

    if (
      shallowequal(
        this.state.fixedColumnsHeadRowsHeight,
        fixedColumnsHeadRowsHeight,
      ) &&
      shallowequal(
        this.state.fixedColumnsBodyRowsHeight,
        fixedColumnsBodyRowsHeight,
      )
    ) {
      return;
    }

    this.setState({
      fixedColumnsHeadRowsHeight,
      fixedColumnsBodyRowsHeight,
    });
  };
  handleWindowResize = () => {
    this.syncFixedTableRowHeight();
  };
  isSortColumn(column) {
    const { sortColumn } = this.state;
    if (!column || !sortColumn) {
      return false;
    }
    return this.getColumnKey(sortColumn) === this.getColumnKey(column);
  }

  handleScroll() {
    const scrollPositionLeft = this.bodyTable.scrollLeft;
    const scrollPositionRight =
      this.bodyTable.scrollWidth - this.tablescroll.scrollWidth;
    this.setState({
      scrollPositionLeft,
      scrollPositionRight,
    });
  }
  prepareParamsArguments(state) {
    // 准备筛选、排序、分页的参数
    const sorter = {};
    if (state.sortColumn && state.sortOrder) {
      sorter.column = state.sortColumn;
      sorter.order = state.sortOrder;
      sorter.field = state.sortColumn.dataIndex;
      sorter.columnKey = this.getColumnKey(state.sortColumn);
    }
    return [sorter];
  }
  toggleSortOrder(order, column) {
    let { sortColumn, sortOrder } = this.state;
    // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题
    const isSortColumn = this.isSortColumn(column);
    if (!isSortColumn) {
      sortOrder = order;
      sortColumn = column;
    } else {
      sortOrder = order;
      // 当前列已排序
      if (sortOrder === order) {
        // 切换为未排序状态
        sortOrder = '';
        sortColumn = null;
      }
    }
    const newState = {
      sortOrder,
      sortColumn,
    };

    // Controlled
    if (this.getSortOrderColumns().length === 0) {
      this.setState(newState);
    }

    this.props.onChange(
      ...this.prepareParamsArguments({ ...this.state, ...newState }),
    );
  }
  renderColumnsDropdown(columns) {
    const { sortOrder } = this.state;
    return columns.map((originColumn) => {
      const column = { ...originColumn };
      let sortButton;
      if (column.sorter) {
        const isSortColumn = this.isSortColumn(column);
        if (isSortColumn) {
          column.className = column.className || '';
          if (sortOrder) {
            column.className += styles['table-column-sort'];
          }
        }
        const isAscend = isSortColumn && sortOrder === 'ascend';
        const isDescend = isSortColumn && sortOrder === 'descend';

        sortButton = (
          <div className={styles['table-column-sorter']}>
            <span
              className={styles['table-column-sorter-up']}
              title="↑"
              onClick={() => this.toggleSortOrder('ascend', column)}
            >
              <Icon
                size={12}
                name={'arrow-up'}
                color={isAscend ? '#3a98e0' : '#cccccc'}
              />
            </span>
            <span
              className={styles['table-column-sorter-down']}
              title="↓"
              onClick={() => this.toggleSortOrder('descend', column)}
            >
              <Icon
                size={12}
                name={'arrow-down'}
                color={isDescend ? '#3a98e0' : '#cccccc'}
              />
            </span>
          </div>
        );
      }
      column.title = (
        <span>
          {column.title}
          {sortButton}
        </span>
      );
      return column;
    });
  }
  renderColgroup = (renderColgroupProps, fixedColumn) => (
    <Colgroup {...renderColgroupProps} fixedColumn={fixedColumn} />
  );
  renderThead = (renderHeaderProps, fixedColumn) => (
    <Thead {...renderHeaderProps} fixedColumn={fixedColumn} />
  );

  renderTbody = (renderBodyProps, fixedColumn) => (
    <Tbody {...renderBodyProps} fixedColumn={fixedColumn} />
  );

  renderTitle = () => {
    const { title } = this.props;
    return title() ? (
      <div className={styles['table-title']} key="title">
        {title()}
      </div>
    ) : null;
  };

  renderFooter = () => {
    const { footer } = this.props;
    return footer() ? (
      <div className={styles['table-footer']} key="footer">
        {footer()}
      </div>
    ) : null;
  };

  renderMainTable(renderColgroupProps, renderHeaderProps, renderBodyProps) {
    let bodyStyle = {};
    const { columns, height } = renderBodyProps;

    const scrollWidth = {
      width: this.hasFixed ? `${columns.length * 200}px` : 'auto',
    };
    if (
      this.hasFixed &&
      (this.hasFixed.hasRight || this.hasFixed.hasLeft) &&
      !height
    ) {
      bodyStyle = {
        overflowX: 'scroll',
      };
    }
    if (height && !this.hasFixed) {
      bodyStyle = {
        overflowY: 'scroll',
        maxHeight: `${height}px`,
      };
    }

    if (this.hasFixed && height) {
      bodyStyle = {
        overflow: 'scroll',
        maxHeight: `${height}px`,
      };
    }

    const scrollbarWidth = measureScrollbar();
    const headeTableStyle =
      height && scrollbarWidth > 0
        ? {
          marginBottom: `-${scrollbarWidth}px`,
          paddingBottom: '0',
        }
        : null;

    const headClass = classnames({
      [styles['table-fixed']]: !!this.hasFixed,
    });
    // 头部固定
    const fixedheader = height ? (
      <div
        className={styles['table-header']}
        ref={(c) => {
          this.headTable = c;
        }}
        style={headeTableStyle}
        // onScroll={this.handleBodyScroll}
      >
        <table className={headClass} style={scrollWidth}>
          {this.renderColgroup(renderColgroupProps, 'scroll')}
          {this.renderThead(renderHeaderProps, 'scroll')}
        </table>
      </div>
    ) : null;
    // body
    const tablestyle = classnames({
      [styles.table]: !height,
      [styles['table-fixed']]: height,
    });

    const fixedbody = (
      <div
        className={styles['table-body']}
        style={bodyStyle}
        ref={(c) => {
          this.bodyTable = c;
        }}
        onScroll={this.handleBodyScroll}
      >
        <table
          className={tablestyle}
          style={scrollWidth}
          ref={(c) => {
            this.tablebox = c;
          }}
          onScroll={this.handleBodyScroll}
        >
          {this.renderColgroup(renderColgroupProps, 'scroll')}
          {!height ? this.renderThead(renderHeaderProps, 'scroll') : null}
          {this.renderTbody(renderBodyProps, 'scroll')}
        </table>
      </div>
    );

    return (
      <div
        className={styles['table-scroll']}
        ref={(c) => {
          this.tablescroll = c;
        }}
        onScroll={this.handleBodyScroll}
      >
        {fixedheader}
        {fixedbody}
      </div>
    );
  }
  renderFixedTable = (
    renderColgroupProps,
    renderHeaderProps,
    renderBodyProps,
    fixed,
  ) => {
    if (!this.hasFixed) {
      return null;
    }
    if (fixed === 'right' && !this.hasFixed.hasRight) {
      return null;
    }
    if (fixed === 'left' && !this.hasFixed.hasLeft) {
      return null;
    }
    const { height } = renderBodyProps;
    const leftbodystyle = height
      ? {
        maxHeight: `${height}px`,
        overflowY: 'scroll',
      }
      : {};
    // 头部固定
    const fixedheader = height ? (
      <div className={styles['table-header']}>
        <table
          className={styles['table-fixed']}
          ref={(c) => {
            this.tableleftbox = c;
          }}
        >
          {this.renderColgroup(renderColgroupProps, fixed)}
          {this.renderThead(renderHeaderProps, fixed)}
        </table>
      </div>
    ) : null;

    const scrollbarWidth = measureScrollbar();
    const outerTableStyle =
      height && scrollbarWidth > 0
        ? {
          marginBottom: `-${scrollbarWidth}px`,
          paddingBottom: '0',
        }
        : null;

    let refName;
    if (height) {
      if (fixed === 'left') {
        refName = 'fixedColumnsBodyLeft';
      } else if (fixed === 'right') {
        refName = 'fixedColumnsBodyRight';
      }
    }
    // body
    const fixedbody = (
      <div className={styles['table-body-outer']} style={outerTableStyle}>
        <div
          className={styles['table-body-inner']}
          style={leftbodystyle}
          onScroll={this.handleBodyScroll}
          ref={this.saveRef(refName)}
        >
          <table className={styles['table-fixed']}>
            {this.renderColgroup(renderColgroupProps, fixed)}
            {!height ? this.renderThead(renderHeaderProps, fixed) : null}
            {this.renderTbody(renderBodyProps, fixed)}
          </table>
        </div>
      </div>
    );

    return (
      <div className={styles[`table-fixed-${fixed}`]}>
        {fixedheader}
        {fixedbody}
      </div>
    );
  };

  render() {
    const { props, state } = this;
    const {
      bordered,
      // dataSource,
      // columns,
      height,
      width,
      emptyText,
      rowSelection,
    } = props;
    const dataSource = this.getLocalData();
    // const rows = this.getHeaderRows(columns, 0, []);
    let columns = this.renderColumnsDropdown(this.props.columns);
    columns = columns.map((column, i) => {
      const newColumn = { ...column };
      newColumn.key = this.getColumnKey(newColumn, i);
      return newColumn;
    });
    const renderHeaderProps = {
      fixedColumnsHeadRowsHeight: state.fixedColumnsHeadRowsHeight,
      columns,
      // rows,
      dataSource,
      height,
      width,
      selectedRowKeys: rowSelection ? rowSelection.selectedRowKeys : null,
      onSelectChange: rowSelection ? rowSelection.onSelectChange : null,
      selections: rowSelection ? rowSelection.selections : null,
      key: 'thead',
    };

    const renderBodyProps = {
      fixedColumnsBodyRowsHeight: state.fixedColumnsBodyRowsHeight,
      columns,
      height,
      dataSource,
      currentHoverRow: state.currentHoverRow,
      emptyText,
      selectedRowKeys: rowSelection ? rowSelection.selectedRowKeys : null,
      onSelectChange: rowSelection ? rowSelection.onSelectChange : null,
      root: this,
      key: 'tbody',
    };

    const renderColgroupProps = {
      columns,
      height,
      rowSelection,
      key: 'colgroup',
    };

    const { scrollPositionLeft, scrollPositionRight } = state;

    const tablestyle = classnames({
      [styles.table]: true,
      [styles['table-bordered']]: bordered,
      [styles['table-fixed-header']]: height,
      [styles['table-scroll-position-left']]: !!(
        !scrollPositionLeft || scrollPositionLeft === 0
      ),
      [styles['table-scroll-position-middle']]: !!(
        scrollPositionLeft &&
        scrollPositionRight &&
        scrollPositionLeft > 1 &&
        scrollPositionLeft !== scrollPositionRight
      ),
      [styles['table-scroll-position-right']]: !!(
        scrollPositionLeft &&
        scrollPositionRight &&
        scrollPositionLeft === scrollPositionRight
      ),
    });

    return (
      <div
        className={tablestyle}
        ref={(c) => {
          this.tableNode = c;
        }}
      >
        {this.renderTitle()}
        <div className={styles['table-content']}>
          {this.renderMainTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps,
          )}
          {dataSource.length &&
            this.renderFixedTable(
              renderColgroupProps,
              renderHeaderProps,
              renderBodyProps,
              'left',
            )}
          {dataSource.length &&
            this.renderFixedTable(
              renderColgroupProps,
              renderHeaderProps,
              renderBodyProps,
              'right',
            )}
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}
