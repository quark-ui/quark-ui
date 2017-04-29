/**
 * Icon Component
 * @author ryan.bian
 */
import ReactDOM from 'react-dom';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Icon.css';

import IconSvg from './iconfont.svg?props[]=id:quark-icons';

@CSSModules(styles, { allowMultiple })
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

  componentWillMount() {
    if (document.getElementById('quark-icons')) return;
    const fragmentNode = document.createDocumentFragment();
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <IconSvg />,
      fragmentNode,
    );
    document.body.insertBefore(fragmentNode, document.body.firstChild);
  }

  render() {
    const { name, size, color, ...otherProps } = this.props;
    const svgProps = {
      style: {
        fontSize: size,
        fill: color,
      },
      styleName: 'Icon',
      'aria-hidden': true,
      ...otherProps,
    };
    return (
      <svg {...svgProps}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}

export default Icon;
