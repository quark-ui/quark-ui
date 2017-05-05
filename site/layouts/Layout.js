import { PureComponent, Children, cloneElement } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../Site.css';
import { allowMultiple } from '../../src/constants';

@CSSModules(styles, { allowMultiple })
export default class Layout extends PureComponent {

  render() {
    const { match } = this.props;
    return (
      <div>
        <header styleName="head">
          <h1 styleName="head__brandTitle">
            <Link to="/">Quark UI</Link>
          </h1>
          <nav styleName="head__navigation">
            <NavLink to="/" exact>首页</NavLink>
            <NavLink to="/component/">组件</NavLink>
          </nav>
        </header>
        {
          Children.map(this.props.children, Comp => cloneElement(Comp))
        }
      </div>
    );
  }
}
