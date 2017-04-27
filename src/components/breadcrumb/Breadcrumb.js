/**
 * Breadcrumb Component
 * @author grootfish
 */
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Breadcrumb.css';

@CSSModules(styles, { allowMultiple })
class Breadcrumb extends PureComponent {

    static displayName = 'Breadcrumb'

    static defaultProps = {
        separator: '/'
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        separator: PropTypes.node,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children, separator } = this.props;
        let crumbs;
        crumbs = React.Children.map(children, (ele, index) => {
            if (!ele) {
                return ele;
            }

            return cloneElement(ele, { separator, key: index });
        });

        return (
            <div styleName={'breadcrumb'}>{crumbs}</div>
        );
    }
}

export default Breadcrumb;
