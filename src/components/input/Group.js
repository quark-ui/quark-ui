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

@CSSModules(styles, { allowMultiple })
export default class Group extends PureComponent {

  static displayName = 'Group'

  static defaultProps = {
    size: 'normal',
  }

  static propTypes = {
    style: PropTypes.CSSProperties,
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    // const { size, ...otherProps } = props;
    // const btnProps = {
    //   ...otherProps,
    //   styleName: `input__${size}`,
    // };

    return (
      <span>
        {props.children}
      </span>
    );

  }
}
