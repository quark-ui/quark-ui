/**
 * Progress Component
 * @author heifade
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import { defaultProps, propTypes } from './propDefine';
import styles from './Progress.css';

import Line from './Line';
// import Circle from './Circle';

@CSSModules(styles, { allowMultiple })
class Progress extends PureComponent {

  static displayName = 'Progress'

  static defaultProps = {
    ...defaultProps,
    // type: 'line',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    ...propTypes,
    // type: PropTypes.oneOf([
    //   'line',
    //   'circle',
    // ]),
  }

  render() {
    const { ...renderProps } = this.props;
    // let Comp;
    // if (type === 'circle') {
    //   Comp = Circle;
    // } else {
    //   Comp = Line;
    // }
    return <Line {...renderProps} />;
  }
}

export default Progress;
