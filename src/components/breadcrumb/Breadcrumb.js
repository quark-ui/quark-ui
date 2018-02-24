/**
 * Breadcrumb Component
 * @author grootfish
 */
import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Icon from '../icon';
import styles from './style';

@injectSheet(styles)
class Breadcrumb extends PureComponent {
  static displayName = 'Breadcrumb'

  static defaultProps = {
    separator: '/',
    hasBackIcon: false,
    hasHomeIcon: false,
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    separator: PropTypes.node,
    hasBackIcon: PropTypes.bool,
    hasHomeIcon: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onBack = this.onBack.bind(this);
    this.onHome = this.onHome.bind(this);
  }

  onBack() {
    const { children } = this.props;
    React.Children.map(children, (ele, index) => {
      if (index === (children.length - 2) && ele.props.href) {
        location.href = ele.props.href;
      }
    });
  }

  onHome() {
    location.href = '/';
  }

  render() {
    const { classes, children, separator, hasBackIcon, hasHomeIcon, ...restProps } = this.props;
    const crumbs = React.Children.map(children, (ele, index) => {

      return cloneElement(ele, { separator, key: index });
    });

    return (
      <div className={classes.breadcrumb} {...restProps}>
        <span className={classes.icon}>
          {hasHomeIcon ? <span><Icon name="home" size={12} onClick={this.onHome} /></span> : null}
          {hasBackIcon ? <span><Icon name="arrow-left" size={12} onClick={this.onBack} /></span> : null}
        </span>
        <ul>
          {crumbs}
        </ul>
      </div>
    );
  }
}

export default Breadcrumb;
