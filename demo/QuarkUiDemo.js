/**
 * QuarkUi Component Demo
 * @author ryan.bian
 */
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import componentWrapper from './tools/componentWrapper';
import demoWrapper from './tools/demoWrapper';
import styles from './QuarkUiDemo.css';
import { allowMultiple } from '../src/constants';

import QuarkUI from '../index';
const ComponentList = Object.keys(QuarkUI).map(c => c);

import loadButtonDemo from 'bundle-loader?lazy!../src/components/button/demo/';
import loadModalDemo from 'bundle-loader?lazy!../src/components/modal/demo/';
import loadDatePickerDemo from 'bundle-loader?lazy!../src/components/datePicker/demo/';
import loadBreadcrumbDemo from 'bundle-loader?lazy!../src/components/breadcrumb/demo/';
import loadTriggerDemo from 'bundle-loader?lazy!../src/components/trigger/demo/';

const ButtonDemo = demoWrapper(componentWrapper(loadButtonDemo));
const ModalDemo = demoWrapper(componentWrapper(loadModalDemo));
const TriggerDemo = demoWrapper(componentWrapper(loadTriggerDemo));
const DatePickerDemo = demoWrapper(componentWrapper(loadDatePickerDemo));
const BreadcrumbDemo = demoWrapper(componentWrapper(loadBreadcrumbDemo));

@CSSModules(styles, { allowMultiple })
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderComponentList() {
    return (
      <ul styleName="aside__nav">
        {
          ComponentList.map(c => <li styleName="aside__navItem" key={c}>
            <Link to={`/${c}`}>{c}</Link>
          </li>)
        }
      </ul>
    );
  }

  render() {
    return (
      <Router>
        <div styleName="app">
          <header styleName="head">Quark UI</header>
          <main styleName="main">
            <div styleName="content">
              <Route path="/button" component={ButtonDemo} />
              <Route path="/modal" component={ModalDemo} />
              <Route path="/trigger" component={TriggerDemo} />
              <Route path="/datepicker" component={DatePickerDemo} />
              <Route path="/breadcrumb" component={BreadcrumbDemo}></Route>
            </div>
            <aside styleName="aside">
              { this.renderComponentList() }
            </aside>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
