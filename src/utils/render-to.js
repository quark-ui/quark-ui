/**
 * HOC enhancer
 * render Component into target node
 * @author: ryan.bian
 */
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default function renderTo(target = document.body) {
  return WrappedComponent => class extends Component {
    componentWillMount() {
      this.wrapNode = document.createElement('div');
      target.appendChild(this.wrapNode);
    }
    componentDidMount() {
      this.renderComponent();
    }
    componentDidUpdate() {
      this.renderComponent();
    }
    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.wrapNode);
      this.wrapNode.parentNode.removeChild(this.wrapNode);
    }
    renderComponent() {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        <WrappedComponent {...this.props} />,
        this.wrapNode,
      );
    }
    render() {
      return null;
    }
  };
}
