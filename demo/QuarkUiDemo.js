/**
 * QuarkUi Component Demo
 * @author ryan.bian
 */
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import lowerFirst from 'lodash/lowerFirst';
import styles from './QuarkUiDemo.css';
import { allowMultiple } from '../src/constants';
import ComponentPage from './pages/ComponentPage';

import QuarkUI from '../index';

const ComponentList = Object.keys(QuarkUI).map(c => c);

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
            <Link to={`/component/${lowerFirst(c)}`}>{c}</Link>
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
              <Route
                path="/component/:name"
                component={(data) => {
                  const { match } = data;
                  return <ComponentPage key={match.params.name} {...data} />;
                }}
              />
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
