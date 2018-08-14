import React, { PureComponent } from 'react';
import { isUnsafe } from './unsafe';
import filterPropsFrom from './lib/filter_props_from';

export default class Th extends PureComponent {
  render() {
    if (isUnsafe(this.props.children)) {
      return (
        <th
          {...filterPropsFrom(this.props)}
          dangerouslySetInnerHTML={{ __html: this.props.children.toString() }}
        />
      );
    }
    return <th {...filterPropsFrom(this.props)}>{this.props.children}</th>;
  }
}
