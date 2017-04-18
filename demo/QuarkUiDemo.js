/**
 * QuarkUi Component Demo
 * @author ryan.bian
 */
import { Component } from 'react';
import {
  ComponentTest,
} from '../src';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ComponentTest />
      </div>
    );
  }
}

export default Demo;
