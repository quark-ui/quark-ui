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

import loadButtonDemo from 'bundle-loader?lazy!../src/components/button/demo/';
import loadDialogDemo from 'bundle-loader?lazy!../src/components/dialog/demo/';

const ButtonDemo = componentWrapper(loadButtonDemo);
const DialogDemo = componentWrapper(loadDialogDemo);

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
            <Route path="/dialog" component={DialogDemo} />
          </div>
          <aside className="aside">
            <ul>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/dialog">Dialog</Link></li>
            </ul>
          </aside>
        </div>
      </Router>
    );
  }
}

export default App;
