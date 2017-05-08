/**
 * Breadcrumb Component
 * @author grootfish
 */
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon'
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Breadcrumb.css';

@CSSModules(styles, { allowMultiple })
class Breadcrumb extends PureComponent {

    static displayName = 'Breadcrumb'

    static defaultProps = {
        separator: '/',
        hasBackIcon:false,
        hasHomeIcon:false,
    }

    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        separator: PropTypes.node,
        hasBackIcon:PropTypes.bool,
        hasHomeIcon:PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.onBack =this.onBack.bind(this);
        this.onHome = this.onHome.bind(this);
    }

    onBack(){
        const { children } = this.props;
        React.Children.map(children, (ele, index) => {
            if(index===(children.length-2)&&ele.props.href){
                location.href = ele.props.href;
            }
        });
    }

    onHome(){
        location.href = '/';
    }

    render() {
        const { children, separator,hasBackIcon,hasHomeIcon,...restProps } = this.props;
        let crumbs;
        crumbs = React.Children.map(children, (ele, index) => {
            if (!ele) {
                return ele;
            }

            return cloneElement(ele, { separator, key: index });
        });

        return (
            <div styleName={'breadcrumb'} {...restProps}>
                <div styleName={'breadcrumb--icon'}>
                {hasHomeIcon?<span><Icon name="home" size={12} onClick={this.onHome}></Icon></span>:null}
                {hasBackIcon?<span><Icon name="arrow-left" size={12} onClick={this.onBack}></Icon></span>:null}
                </div>
                {crumbs}
            </div>
        );
    }
}

export default Breadcrumb;
