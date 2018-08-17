import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isUnsafe } from './unsafe';

export default class Th extends PureComponent {
  static defaultProps = {
    children: null,
  };
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Object),
    ]),
  };
  render() {
    if (isUnsafe(this.props.children)) {
      const options = {};
      if (this.props.children) {
        options.dangerouslySetInnerHTML = { __html: this.props.children.toString() };
      }
      return (
        <th
          {...options}
        />
      );
    }
    return <th>{this.props.children}</th>;
  }
}
