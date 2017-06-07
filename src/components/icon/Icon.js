/**
 * Icon Component
 * @author ryan.bian
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Icon.css';

import ICONS from './icons';

class Icon extends PureComponent {

  static displayName = 'Icon'

  static defaultProps = {
    name: '',
    size: 32,
    color: null,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size, color, className, ...otherProps } = this.props;
    const svgProps = {
      style: {
        fontSize: size,
        fill: color,
      },
      className: classnames(className, styles.Icon),
      'aria-hidden': true,
      ...otherProps,
    };
    const IconNode = ICONS[name];
    return <IconNode {...svgProps} />;
  }
}

export default Icon;
