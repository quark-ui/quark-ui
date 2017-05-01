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
    onSizeChanger() {},
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
    onSizeChanger: PropTypes.func,
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

  renderItems() {
    const { total } = this.props;
    const { current, pageSize } = this.state;
    const items = [];
    for (let i = 1; i <= total; i += pageSize) {
      const pageIndex = Math.ceil(i / pageSize);
      const active = current === pageIndex;
      const btnProps = {
        styleName: classnames('pagination__item', {
          'pagination__item--active': active,
        }),
        onClick: active ? null : () => this.handleChangeIndex(pageIndex),
      };
      items.push(
        <li key={i}><button data-index={pageIndex} {...btnProps}>{pageIndex}</button></li>,
      );
    }
    return <ul>{items}</ul>;
  }

  renderControl(direction) {
    const ctrlProps = {
      styleName: classnames('pagination__ctrl', `pagination__ctrl--${direction}`),
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

  render() {
    console.info('render');
    return (
      <div styleName={'pagination'}>
        { this.renderControl('prev') }
        { this.renderItems() }
        { this.renderControl('next') }
      </div>
    );
  }
}

export default Pagination;
