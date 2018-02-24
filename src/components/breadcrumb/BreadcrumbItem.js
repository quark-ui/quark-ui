/**
 * Breadcrumb Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './style';

@injectSheet(styles)
class BreadcrumbItem extends PureComponent {
  static displayName = 'BreadcrumbItem'

  static defaultProps = {
    separator: '/',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    separator: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    href: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, children, separator, ...restProps } = this.props;

    const breadcrumbItemProps = {
      ...restProps,
      className: classes.link,
    };

    let link;
    if ('href' in this.props) {
      link = <a {...breadcrumbItemProps}>{children}</a>;
    } else {
      link = <span {...breadcrumbItemProps}>{children}</span>;
    }

    if (children) {
      return (
        <li className={classes.item}>
          {link}
          <span className={classes.separator}>{separator}</span>
        </li>
      );
    }

    return null;
  }
}

export default BreadcrumbItem;
