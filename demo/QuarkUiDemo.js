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
import componentWrapper from './tools/componentWrapper';
import demoWrapper from './tools/demoWrapper';

import loadButtonDemo from 'bundle-loader?lazy!../src/components/button/demo/';
import loadModalDemo from 'bundle-loader?lazy!../src/components/modal/demo/';

const ButtonDemo = demoWrapper(componentWrapper(loadButtonDemo));
const ModalDemo = demoWrapper(componentWrapper(loadModalDemo));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header className="head">Quark UI</header>
          <div className="content">
            <Route path="/button" component={ButtonDemo} />
            <Route path="/modal" component={ModalDemo} />
          </div>
          <aside className="aside">
            <ul>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/modal">Modal</Link></li>
            </ul>
          </aside>
        </div>
      </Router>
    );
  }
}

export default App;
