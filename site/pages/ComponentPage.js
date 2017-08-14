import {
  Route,
  NavLink,
} from 'react-router-dom';
import lowerFirst from 'lodash/lowerFirst';
import styles from '../Site.css';

import ComponentBlock from '../partials/Component';
import PlayGround from '../partials/PlayGround';
import * as QuarkUI from '../../src/index';
import pages from './componentList';

import Layout from '../layouts/Layout';

const ComponentList = Object.keys(QuarkUI).map(c => c);

const renderNavGroup = group => (
  <ul className={styles.aside__nav}>
    {
      group
        .filter(d => ComponentList.indexOf(d.name) !== -1)
        .map(d =>
          <li className={styles.aside__navItem} key={d.name}>
            <NavLink to={`/component/${lowerFirst(d.name)}`}>{d.name}<span>{d.title}</span></NavLink>
          </li>,
      )
    }
  </ul>
);

const renderComponentList = () => (
  <ul styleName="aside__menu">
    {
      pages.data.map(p =>
        (
          <li className={styles.aside__group} key={p.group}>
            <div className={styles.aside__title}>{p.group}</div>
            { renderNavGroup(p.page) }
          </li>
        ),
      )
    }
  </ul>
);

const ComponentPage = props => (
  <Layout {...props}>
    <main className={styles.main}>
      <div className={styles.content}>
        <Route
          path="/component/:name"
          component={(props) => {
            const { match } = props;
            return (
              <div>
                <ComponentBlock key={match.params.name} {...props} />
                <PlayGround componentName={match.params.name} />
              </div>
            );
          }}
        />
      </div>
      <aside className={styles.aside}>
        { renderComponentList() }
      </aside>
    </main>
  </Layout>
);

export default ComponentPage;
