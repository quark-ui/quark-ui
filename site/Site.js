/**
 * QuarkUi Site
 * @author ryan.bian
 */
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { mapProps } from 'recompose';

import styles from './Site.css';

import HomePage from './pages/HomePage';
// import MotionPage from './pages/MotionPage';
import ComponentPage from './pages/ComponentPage';
import DocPage from './pages/DocPage';
import mdRender from './util/mdRender';

import historyDoc from '!raw-loader!../HISTORY.md';
import usageDoc from '!raw-loader!./doc/usage.md';
import designDoc from '!raw-loader!./doc/design.md';
import motionDoc from '!raw-loader!./doc/motion.md';

const basename = BASEPATH;

// 如何使用
const UsagePage = mapProps(() => ({
  html: mdRender(usageDoc).html,
}))(DocPage);

// 版本历史
const HistoryPage = mapProps(() => ({
  html: mdRender(historyDoc).html,
}))(DocPage);

// 视觉规范
const DesignPage = mapProps(() => ({
  html: mdRender(designDoc).html,
}))(DocPage);

// 动效规范
const MotionPage = mapProps(() => ({
  html: mdRender(motionDoc).html,
}))(DocPage);

export default () => (
  <Router basename={basename}>
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/motion" component={MotionPage} />
      <Route path="/component" component={ComponentPage} />
      <Route path="/usage" component={UsagePage} />
      <Route path="/changes" component={HistoryPage} />
      <Route path="/design" component={DesignPage} />
    </div>
  </Router>
);
