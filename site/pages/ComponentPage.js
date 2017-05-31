import { PureComponent } from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';
import lowerFirst from 'lodash/lowerFirst';
import CSSModules from 'react-css-modules';
import styles from '../Site.css';
import { allowMultiple } from '../../src/constants';

import ComponentBlock from '../partials/Component';
import * as QuarkUI from '../../src/index';

import Layout from '../layouts/Layout';

const ComponentList = Object.keys(QuarkUI).map(c => c);

@CSSModules(styles, { allowMultiple })
export default class ComponentPage extends PureComponent {

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
      <Layout {...this.props}>
        <main styleName="main">
          <div styleName="content">
            <Route
              path="/component/:name"
              component={(data) => {
                const { match } = data;
                return <ComponentBlock key={match.params.name} {...data} />;
              }}
            />
          </div>
          <aside styleName="aside">
            { this.renderComponentList() }
          </aside>
        </main>
      </Layout>
    );
  }
}
