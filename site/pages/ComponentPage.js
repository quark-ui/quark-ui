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
import pages from './Pages.json';

import Layout from '../layouts/Layout';

const ComponentList = Object.keys(QuarkUI).map(c => c);

@CSSModules(styles, { allowMultiple })
export default class ComponentPage extends PureComponent {

  renderComponentList() {
    return (
      <ul styleName="aside__menu">
        {
          pages.data.map((p, index) =>
            <li styleName="aside__group">
              <div styleName="aside__title">{p.group}</div>
              <ul styleName="aside__nav">
                {
                  p.page.map((pt, index) =>
                    ComponentList.map(c => (pt.name == c) ? <li styleName="aside__navItem" key={c}>
                      <NavLink to={`/component/${lowerFirst(c)}`}>{c}<span>{pt.title}</span></NavLink>
                    </li> : null)
                  )
                }
              </ul>
            </li>
          )
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
            {this.renderComponentList()}
          </aside>
        </main>
      </Layout>
    );
  }
}
