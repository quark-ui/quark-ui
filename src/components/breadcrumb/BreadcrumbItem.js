/**
 * Breadcrumb Component
 * @author grootfish
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Breadcrumb.css';

@CSSModules(styles, { allowMultiple })
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
    const { children, separator, ...restProps } = this.props;

    const breadcrumbItemProps = {
      ...restProps,
      styleName: 'breadcrumb--link',
    };

    let link;
    if ('href' in this.props) {
      link = <a {...breadcrumbItemProps}>{children}</a>;
    } else {
      link = <span {...breadcrumbItemProps}>{children}</span>;
    }

    if (children) {
      return (
        <span>
          {link}
          <span styleName={'breadcrumb--separator'}>{separator}</span>
        </span>
      );
    }

    return null;
  }
}

export default BreadcrumbItem;
