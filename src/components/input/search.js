/**
 * Input Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import Input from './Input';
import styles from './Input.css';
import Icon from '../icon';

@CSSModules(styles, { allowMultiple })
export default class Search extends PureComponent {

  static displayName = 'Search'

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  input: any;

  onSearch = () => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.input.refs.input.value);
      console.log(this.input.refs.input.value);
    }
    this.input.refs.input.focus();
  }


  render() {
    const {suffix , ...otherProps} = this.props;

    const searchSuffix = (
      <Icon
        size={24}
        name={'search'}
        onClick={this.onSearch}
      />
    );

    return (
      <Input
        {...otherProps}
        suffix={searchSuffix}
        ref={node => this.input = node}
      />
    );

  }
}
