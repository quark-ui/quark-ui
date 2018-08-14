import React, { PureComponent } from 'react';
import { isUnsafe } from './unsafe';
import filterPropsFrom from './lib/filter_props_from';

export default class Td extends PureComponent {
  render() {
    if (isUnsafe(this.props.children)) {
      return (
        <td
          {...filterPropsFrom(this.props)}
          dangerouslySetInnerHTML={{ __html: this.props.children.toString() }}
        />
      );
    }
    return <td {...filterPropsFrom(this.props)}>{this.props.children}</td>;
  }
}
