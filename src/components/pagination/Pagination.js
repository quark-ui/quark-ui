/**
 * Pagination Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import assign from 'object-assign';
import { allowMultiple } from '../../constants';
import styles from './Pagination.css';
import Icon from 'quark-ui/icon';

@CSSModules(styles, { allowMultiple })
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
    this.state = {
      current: props.current || props.defaultCurrent,
      pageSize: props.pageSize || props.defaultPageSize,
    };
  }

  componentWillReceiveProps(nextProps) {
    const state = {};
    if (typeof nextProps.current !== 'undefined') {
      assign(state, {
        current: nextProps.current,
      });
    }
    if (typeof nextProps.pageSize !== 'undefined') {
      assign(state, {
        pageSize: nextProps.pageSize,
      });
    }
    this.setState(state);
  }

  getItemProps(index) {
    const { current } = this.state;
    const active = current === index;
    return {
      styleName: classnames('pagination__item', {
        'pagination__item--active': active,
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
    const { current, pageSize } = this.state;
    const items = [];
    const firstPage = 1;
    const lastPage = Math.ceil(total / pageSize);

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
      </li>
    );
    if (start !== firstPage + 1 && start !== firstPage) {
      items.push(<li key={'front'}><Icon name="ellipsis" size={12} /></li>);
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
      items.push(<li key={'back'}><Icon name="ellipsis" size={12} /></li>);
    }
    items.push(
      <li key={lastPage}>
        <button {...this.getItemProps(lastPage)}>{lastPage}</button>
      </li>
    );
    return <ul styleName="pagination__pages">{items}</ul>;
  }

  renderControl(direction) {
    const ctrlProps = {
      styleName: classnames('pagination__ctrl'),
      onClick: direction === 'prev' ? this.handleClickPrev : this.handleClickNext,
    };
    let content;
    if (direction === 'prev') {
      content = <Icon name="arrow-left" size={12} />;
    } else {
      content = <Icon name="arrow-right" size={12} />;
    }
    return <button {...ctrlProps}>{content}</button>;
  }

  renderSizeChanger() {
    const { showSizeChanger, pageSizeOptions } = this.props;
    const { pageSize } = this.state;
    if (showSizeChanger) {
      return (
        <select
          styleName="pagination__sizeChanger"
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
      styleName: 'pagination__jumperField',
      onKeyPress: this.handleJumper,
    };
    if (showQuickJumper) {
      return (
        <span styleName="pagination__jumper">
          跳至 <input {...textFieldProps} /> 页
        </span>
      );  
    }
    return null;
  }

  renderTotal() {
    const { showTotal, total } = this.props;
    if (showTotal) {
      return <span styleName="pagination__total">{`共计 ${total} 条`}</span>;
    }
    return null;
  }

  render() {
    console.info('render');
    const { size } = this.props;
    const smallSize = size === 'small';
    const wrapProps = {
      styleName: classnames('pagination', {
        'pagination--small': smallSize,
        'pagination--normal': !smallSize,
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
