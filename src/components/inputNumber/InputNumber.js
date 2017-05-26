/**
 * InputNumber Component
 * @author yan
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RcInputNumber from 'rc-input-number';
// import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './InputNumber.css';

// @CSSModules(styles, { allowMultiple })
class InputNumber extends PureComponent {

  static displayName = 'InputNumber'

  static defaultProps = {
    step: 1,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step:PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    defaultValue:PropTypes.number,
    onChange: PropTypes.func,
    disabled:PropTypes.bool,
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    formatter: PropTypes.func,
    parser:PropTypes.func,
    placeholder:PropTypes.string,
    style: PropTypes.CSSProperties,
    className:PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { className, size, ...otherProps } = this.props;
    // const inputNumberClass = classNames({
    //   [`${this.props.prefixCls}-lg`]: size === 'large',
    //   [`${this.props.prefixCls}-sm`]: size === 'small',
    // }, className);

    return <RcInputNumber className={'rc-input-number'} {...otherProps} />;

  }
}

export default InputNumber;
