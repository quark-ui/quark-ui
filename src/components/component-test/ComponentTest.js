/**
 * Test Component
 * @author ryan.bian
 */
import { Component } from 'react';

class ComponentTest extends Component {

  static displayName = 'ComponentTest'

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>dialog component</div>
    );
  }
}

export default ComponentTest;
