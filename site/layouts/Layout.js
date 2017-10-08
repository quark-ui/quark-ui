import { PureComponent, Children, cloneElement } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import styles from '../Site.css';
import ThemePicker from '../partials/ThemePicker';
import IconUEDLogo from '../icons/uedlogo.svg';

const IconProps = {
  width: 14,
  height: 14,
};

export default class Layout extends PureComponent {

  render() {
    const { match, children } = this.props;
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <header className={styles.head}>
            <h1 className={styles.head__brandTitle}>
              <Link to="/">Quark UI</Link>
            </h1>
            <nav className={styles.head__navigation}>
              <NavLink to="/" exact>首页</NavLink>
              <NavLink to="/motion">动效</NavLink>
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
        <footer className={styles.footer}>
          Copyright © &nbsp;&nbsp;&nbsp;&nbsp;易货嘀研发中心&nbsp;&nbsp;&nbsp;&nbsp;
          <IconUEDLogo {...IconProps} />
          易货嘀UED
        </footer>
      </div>
    );
  }
}
