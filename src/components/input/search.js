/**
 * Input Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import styles from './Input.css';
import Icon from '../icon';

export default class Search extends PureComponent {

  static displayName = 'Search'

  static defaultProps = {
    onSearch() {},
  }

  static propTypes = {
    onSearch: PropTypes.func,
  }

  onSearch = () => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.input.input.value);
    }
    this.input.input.focus();
  }

  render() {
    const { onSearch, ...otherProps } = this.props;

    const searchSuffix = (
      <Icon
        size={12}
        name={'search'}
        onClick={this.onSearch}
      />
    );

    return (
      <Input
        {...otherProps}
        suffix={searchSuffix}
        ref={node => (this.input = node)}
      />
    );
  }
}
