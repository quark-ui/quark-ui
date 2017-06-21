import { PureComponent, Children, cloneElement } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../Site.css';
import { allowMultiple } from '../../src/constants';
import ThemePicker from '../partials/ThemePicker';

@CSSModules(styles, { allowMultiple })
export default class Layout extends PureComponent {

  render() {
    const { match, children } = this.props;
    return (
      <div className={styles.app}>
        <div styleName="container">
          <header styleName="head">
            <h1 styleName="head__brandTitle">
              <Link to="/">Quark UI</Link>
            </h1>
            <nav styleName="head__navigation">
              <NavLink to="/" exact>首页</NavLink>
              <NavLink to="/component/alert">组件</NavLink>
              <NavLink to="/usage">如何使用</NavLink>
              <NavLink to="/changes">版本历史</NavLink>
              <NavLink to="/design">视觉规范</NavLink>
            </nav>
            <ThemePicker />
          </header>
        </div>
        {
          Children.map(children, Comp => cloneElement(Comp))
        }
        <footer styleName="footer">
          Copyright © &nbsp;&nbsp;&nbsp;&nbsp;易货嘀研发中心&nbsp;&nbsp;&nbsp;&nbsp;易货嘀UED
        </footer>
      </div>
    );
  }
}
