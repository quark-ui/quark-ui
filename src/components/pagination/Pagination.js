/**
 * Pagination Component
 * @author ryan.bian
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import assign from 'object-assign';
import styles from './Pagination.css';
import Icon from '../icon';

class Pagination extends PureComponent {

  static displayName = 'Pagination'

  static defaultProps = {
    current: undefined,
    defaultCurrent: 1,
    total: 0,
    pageSize: undefined,
    defaultPageSize: 10,
    onChange() {},
    showSizeChanger: false,
    onSizeChange() {},
    pageSizeOptions: [10, 20, 30, 40],
    showQuickJumper: false,
    size: '',
    showTotal: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    current: PropTypes.number,
    defaultCurrent: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,
    defaultPageSize: PropTypes.number,
    onChange: PropTypes.func,
    showSizeChanger: PropTypes.bool,
    onSizeChange: PropTypes.func,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    showQuickJumper: PropTypes.bool,
    size: PropTypes.string,
    showTotal: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   current: props.current || props.defaultCurrent,
    //   pageSize: props.pageSize || props.defaultPageSize,
    // };
    this.state = this.getStateByProps(
      props.current || props.defaultCurrent,
      props.pageSize || props.defaultPageSize,
      props.total,
    );
  }

  componentWillReceiveProps(nextProps) {
    // const state = {
    //   current: this.state.current,
    //   pageSize: this.state.pageSize,
    // };
    // if (typeof nextProps.current !== 'undefined') {
    //   assign(state, {
    //     current: nextProps.current,
    //   });
    // }
    // if (typeof nextProps.pageSize !== 'undefined') {
    //   assign(state, {
    //     pageSize: nextProps.pageSize,
    //   });
    // }
    // const lastPage = Math.ceil(nextProps.total / state.pageSize);
    // if (state.current > lastPage) {
    //   assign(state, {
    //     current: lastPage,
    //   });
    // }
    // this.setState(state);
    this.setState(this.getStateByProps(
      nextProps.current,
      nextProps.pageSize,
      nextProps.total,
    ));
  }

  getStateByProps(current, pageSize, total) {
    const state = {
      current: this.state ? this.state.current : 1,
      pageSize: this.state ? this.state.pageSize : 1,
    };
    if (typeof current !== 'undefined') {
      assign(state, {
        current,
      });
    }
    if (typeof pageSize !== 'undefined') {
      assign(state, {
        pageSize,
      });
    }
    const lastPage = Math.ceil(total / state.pageSize);
    if (state.current > lastPage) {
      assign(state, {
        current: lastPage,
      });
    }
    return state;
  }

  getItemProps(index) {
    const { current } = this.state;
    const active = current === index;
    return {
      className: classnames(styles.pagination__item, {
        [styles['pagination__item--active']]: active,
      }),
      onClick: active ? null : () => this.handleChangeIndex(index),
    };
  }

  handleClickPrev = () => {
    if (this.state.current > 1) {
      this.handleChangeIndex(this.state.current - 1);
    }
  }
  handleClickNext = () => {
    if (this.state.current < Math.ceil(this.props.total / this.state.pageSize)) {
      this.handleChangeIndex(this.state.current + 1);
    }
  }

  handleChangeIndex = (index) => {
    if (typeof this.props.current === 'undefined') {
      this.setState({
        current: index,
      });
    }
    this.props.onChange(index, this.state.pageSize);
  }

  handleChangeIndexPageSize = (e) => {
    const newPageSize = +e.target.value;
    const { total } = this.props;
    const { current } = this.state;
    const maxPages = Math.ceil(total / newPageSize);
    let newCurrent;
    if (current > maxPages) {
      newCurrent = maxPages;
    } else {
      newCurrent = current;
    }
    if (typeof this.props.pageSize === 'undefined') {
      this.setState({
        pageSize: newPageSize,
        current: newCurrent,
      });
    }
    this.props.onSizeChange(newPageSize, newCurrent);
  }

  handleJumper = (e) => {
    if (e.key === 'Enter') {
      const { total } = this.props;
      const { pageSize } = this.state;
      const maxPage = Math.ceil(total / pageSize);
      let value = e.target.value;
      if (/^[1-9]+[0-9]*$/.test(value)) {
        value = Number(value);
        if (value <= maxPage) {
          this.handleChangeIndex(value);
        }
      }
    }
  }

  renderItems() {
    const { total } = this.props;
    const { pageSize } = this.state;
    const items = [];
    const firstPage = 1;
    const lastPage = Math.ceil(total / pageSize);
    const current = this.state.current > lastPage ? lastPage : this.state.current;

    if (total > 1) {
      let start;
      let end;
      if (current === firstPage) {
        start = firstPage + 1;
        end = firstPage + 1;
      } else if (current === lastPage) {
        start = lastPage - 1;
        end = lastPage - 1;
      } else {
        start = current;
        end = current;
      }
      while (true) {
        if (end - start >= 3
          || (start <= firstPage + 1 && end >= lastPage - 1)
        ) break;
        if (start > firstPage + 1) start -= 1;
        if (end < lastPage - 1) end += 1;
      }
  
      items.push(
        <li key={firstPage}>
          <button {...this.getItemProps(firstPage)}>{firstPage}</button>
        </li>,
      );
      if (start !== firstPage + 1 && start !== firstPage) {
        items.push(<li key={'front'} className={styles.pagination__ellipsis}><Icon name="ellipsis" size={12} /></li>);
      }
      for (let i = start; i <= end; i += 1) {
        const btnProps = this.getItemProps(i);
        items.push(
          <li key={i}>
            <button {...btnProps}>{i}</button>
          </li>,
        );
      }
      if (end !== lastPage - 1 && end !== lastPage) {
        items.push(<li key={'back'} className={styles.pagination__ellipsis}><Icon name="ellipsis" size={12} /></li>);
      }
      items.push(
        <li key={lastPage}>
          <button {...this.getItemProps(lastPage)}>{lastPage}</button>
        </li>,
      );
    } else if (total === 1) {
      const btnProps = this.getItemProps(1);
      items.push(
        <li key={1}>
          <button {...btnProps}>1</button>
        </li>,
      );
    }

    return <ul className={styles.pagination__pages}>{items}</ul>;
  }

  renderControl(direction) {
    const ctrlProps = {
      className: styles.pagination__ctrl,
      onClick: direction === 'prev' ? this.handleClickPrev : this.handleClickNext,
    };
    let content;
    if (direction === 'prev') {
      content = <Icon name="double-arrow-left" size={12} />;
    } else {
      content = <Icon name="double-arrow-right" size={12} />;
    }
    return <button {...ctrlProps}>{content}</button>;
  }

  renderSizeChanger() {
    const { showSizeChanger, pageSizeOptions } = this.props;
    const { pageSize } = this.state;
    if (showSizeChanger) {
      return (
        <select
          className={styles.pagination__sizeChanger}
          value={pageSize}
          onChange={this.handleChangeIndexPageSize}
        >
          {pageSizeOptions.map(size => <option key={size} value={size}>{`${size} / 页`}</option>)}
        </select>
      );
    }
    return null;
  }

  renderQuickJumper() {
    const { showQuickJumper } = this.props;
    const textFieldProps = {
      type: 'text',
      className: styles.pagination__jumperField,
      onKeyPress: this.handleJumper,
    };
    if (showQuickJumper) {
      return (
        <span className={styles.pagination__jumper}>
          跳至 <input {...textFieldProps} /> 页
        </span>
      );
    }
    return null;
  }

  renderTotal() {
    const { showTotal, total } = this.props;
    if (showTotal) {
      return <span className={styles.pagination__total}>{`共计 ${total} 条`}</span>;
    }
    return null;
  }

  render() {
    const { size } = this.props;
    const smallSize = size === 'small';
    const wrapProps = {
      className: classnames(styles.pagination, {
        [styles['pagination--small']]: smallSize,
        [styles['pagination--normal']]: !smallSize,
      }),
    };
    return (
      <div {...wrapProps}>
        { this.renderTotal() }
        { this.renderControl('prev') }
        { this.renderItems() }
        { this.renderControl('next') }
        { this.renderSizeChanger() }
        { this.renderQuickJumper() }
      </div>
    );
  }
}

export default Pagination;
