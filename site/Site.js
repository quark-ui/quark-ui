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
import ChangePage from './pages/ChangePage';

const basename = BASEPATH;

export default () => (
  <Router basename={basename}>
    <div className={styles.app}>
      <Route path="/" component={HomePage} exact />
      <Route path="/component" component={ComponentPage} />
      <Route path="/changes" component={ChangePage} />
    </div>
  </Router>
);
