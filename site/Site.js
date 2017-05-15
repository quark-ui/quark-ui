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
import ComponentPage from './pages/ComponentPage';

export default () => (
  <Router basename="BASEPATH">
    <div className={styles.app}>
      <Route path="/" component={HomePage} exact />
      <Route path="/component" component={ComponentPage} />
    </div>
  </Router>
);
