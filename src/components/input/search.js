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
    size: 'normal',
    onSearch() { },
  }

  static propTypes = {
    style: PropTypes.CSSProperties,
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    onSearch: PropTypes.func,
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
    const props = this.props;
    const { size, ...otherProps } = props;
    const btnProps = {
      ...otherProps,
      styleName: `input__${size} input__search`,
    };


    const searchSuffix = (
      <Icon
        size={24}
        name={'search'}
        onClick={this.onSearch}
      />
    );

    return (
      <Input
        {...btnProps}
        suffix={searchSuffix}
        wrapperCls={'input__wrapper input__search'}
        ref={node => this.input = node}
      />
    );

  }
}
