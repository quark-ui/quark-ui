import { PureComponent } from 'react';
import {
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import lowerFirst from 'lodash/lowerFirst';
import CSSModules from 'react-css-modules';
import styles from '../Site.css';
import { allowMultiple } from '../../src/constants';

import ComponentPage from '../pages/ComponentPage';
import QuarkUI from '../../index';

const ComponentList = Object.keys(QuarkUI).map(c => c);

@CSSModules(styles, { allowMultiple })
export default class ComponentLayout extends PureComponent {

  renderComponentList() {
    return (
      <ul styleName="aside__nav">
        {
          ComponentList.map(c => <li styleName="aside__navItem" key={c}>
            <NavLink to={`/component/${lowerFirst(c)}`}>{c}</NavLink>
          </li>)
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <header styleName="head">
          <Link to="/">Quark UI</Link>
        </header>
        <main styleName="main">
          <div styleName="content">
            <Route
              path="/component/:name"
              component={(data) => {
                const { match } = data;
                return <ComponentPage key={match.params.name} {...data} />;
              }}
            />
          </div>
          <aside styleName="aside">
            { this.renderComponentList() }
          </aside>
        </main>
      </div>
    );
  }
}
