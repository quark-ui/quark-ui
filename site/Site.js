/**
 * QuarkUi Site
 * @author ryan.bian
 */
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { mapProps } from 'recompose';
import marked from 'meta-marked';

import styles from './Site.css';

import HomePage from './pages/HomePage';
import ComponentPage from './pages/ComponentPage';
import DocPage from './pages/DocPage';

import historyDoc from '!raw-loader!../HISTORY.md';
import usageDoc from '!raw-loader!../README/usage.md';
import designDoc from '!raw-loader!../README/design.md';

const basename = BASEPATH;

// 如何使用
const UsagePage = mapProps(() => ({
  html: marked(usageDoc).html,
}))(DocPage);

// 版本历史
const HistoryPage = mapProps(() => ({
  html: marked(historyDoc).html,
}))(DocPage);

// 视觉规范
const DesignPage = mapProps(() => ({
  html: marked(designDoc).html,
}))(DocPage);

export default () => (
  <Router basename={basename}>
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/component" component={ComponentPage} />
      <Route path="/usage" component={UsagePage} />
      <Route path="/changes" component={HistoryPage} />
      <Route path="/design" component={DesignPage} />
    </div>
  </Router>
);
