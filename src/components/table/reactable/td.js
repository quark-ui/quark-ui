import React from 'react';
import { isUnsafe } from './unsafe';
import { filterPropsFrom } from './lib/filter_props_from';

export class Td extends React.Component {
    render() {
        
        if (isUnsafe(this.props.children)) {
            return <td {...filterPropsFrom(this.props)}
                dangerouslySetInnerHTML={{__html: this.props.children.toString()}}/>
        } else {
            return <td {...filterPropsFrom(this.props)}>
                {this.props.children}
            </td>;
        }
    }
};

