import {
  Route,
  NavLink,
} from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import spring from 'react-motion/lib/spring';
import lowerFirst from 'lodash/lowerFirst';
import styles from '../Site.css';

import ComponentBlock from '../partials/Component';
import * as QuarkUI from '../../src/index';
import pages from './componentList';

import Layout from '../layouts/Layout';

const PopConfig = { stiffness: 360, damping: 25 };
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
            const { match, location } = props;
            return (
              <RouteTransition 
                pathname={location.pathname}
                atEnter={{ opacity: 0, scale: 0.95 }}
                atLeave={{ scale: spring(0.95, PopConfig), opacity: spring(0, PopConfig) }}
                atActive={{ scale: spring(1, PopConfig), opacity: 1 }}
                mapStyles={s => ({
                  opacity: s.opacity,
                  transform: `scale(${s.scale})`,
                })}
              >
                <ComponentBlock key={match.params.name} {...props} />
              </RouteTransition>
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
