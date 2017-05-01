/**
 * QuarkUi Site
 * @author ryan.bian
 */
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styles from './Site.css';

import HomePage from './pages/HomePage';
import ComponentLayout from './layouts/ComponentLayout';

export default () => (
  <Router>
    <div className={styles.app}>
      <Route path="/" component={HomePage} exact />
      <Route path="/component" component={ComponentLayout} />
    </div>
  </Router>
);
