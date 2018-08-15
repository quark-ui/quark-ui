import React, { PureComponent } from 'react';
import classnames from 'classnames';
import shallowequal from 'shallowequal';
import { measureScrollbar } from './utils';
import Colgroup from './colgroup';
import Thead from './thead';
import Tbody from './tbody';
import styles from '../Table.css';

export default class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // width: 1000,
      // height: '100%',
      emptyText: '暂无数据',
      currentHoverRow: -1,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {},
    };
    this.hasFixed = this.hasFixColumn(props);
  }

  componentDidMount() {
    this.handleWindowResize();
    this.tablebody.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidUpdate() {
    this.handleWindowResize();
  }
  componentWillUnmount() {
    this.tablebody.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    const scrollPositionLeft = this.tablebody.scrollLeft;
    const scrollPositionRight =
      this.tablebody.scrollWidth - this.tablescroll.scrollWidth;
    this.setState({
      scrollPositionLeft,
      scrollPositionRight,
    });
  }
  handleWindowResize = () => {
    this.syncFixedTableRowHeight();
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
  handleBodyScrollTop =(e) => {
    const target = e.target;
    const { fixedColumnsBodyLeft, fixedColumnsBodyRight } = this;
    if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
      fixedColumnsBodyLeft.scrollTop = target.scrollTop;
    }
    if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
      fixedColumnsBodyRight.scrollTop = target.scrollTop;
    }
    if (this.tablebody && target !== this.tablebody) {
      this.tablebody.scrollTop = target.scrollTop;
    }
    this.lastScrollTop = target.scrollTop;
  }
  handleBodyScroll = (e) => {
    this.handleBodyScrollTop(e);
  };
  saveRef = name => (node) => {
    this[name] = node;
  };
  renderColgroup = (renderColgroupProps, fixedColumn) => (
    <Colgroup {...renderColgroupProps} fixedColumn={fixedColumn} />
  );
  renderThead = (renderHeaderProps, fixedColumn) => (
    <Thead {...renderHeaderProps} fixedColumn={fixedColumn} />
  );

  renderTbody = (renderBodyProps, fixedColumn) => (
    <Tbody {...renderBodyProps} fixedColumn={fixedColumn} />
  );

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

    // 头部固定
    const fixedheader = height ? (
      <div className={styles['table-header']}>
        <table
          className={styles['table-fixed']}
          style={scrollWidth}
          ref={(c) => {
            this.tablebox = c;
          }}
        >
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
          this.tablebody = c;
        }}
        onScroll={this.handleBodyScroll}
      >
        <table
          className={tablestyle}
          style={scrollWidth}
          ref={(c) => {
            this.tablebox = c;
          }}
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
      >
        {fixedheader}
        {fixedbody}
      </div>
    );
  }
  renderFixedTable=(
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
    const outerTableStyle = height && scrollbarWidth > 0 ? {
      marginBottom: `-${scrollbarWidth}px`,
      paddingBottom: '0',
    } : null;

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
    const { dataSource, columns, height, width, emptyText } = props;

    const renderHeaderProps = {
      fixedColumnsHeadRowsHeight: state.fixedColumnsHeadRowsHeight,
      columns,
      height,
      width,
      key: 'thead',
    };

    const renderBodyProps = {
      fixedColumnsBodyRowsHeight: state.fixedColumnsBodyRowsHeight,
      columns,
      height,
      dataSource,
      currentHoverRow: state.currentHoverRow,
      emptyText,
      root: this,
      key: 'tbody',
    };

    const renderColgroupProps = {
      columns,
      height,
      key: 'colgroup',
    };

    const { scrollPositionLeft, scrollPositionRight } = state;

    const tablestyle = classnames({
      [styles.table]: true,
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
        <div className={styles['table-content']}>
          {this.renderMainTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps,
          )}
          { dataSource.length ? this.renderFixedTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps,
            'left',
          ) : null}
          { dataSource.length ? this.renderFixedTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps,
            'right',
          ) : null}
        </div>
      </div>
    );
  }
}
