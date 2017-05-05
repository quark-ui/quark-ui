/**
 * HOC enhancer
 * render Component into target node
 * @author: ryan.bian
 */
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import hoistNonReactStatic from 'hoist-non-react-statics';

export default function renderTo(target = document.body) {
  return (WrappedComponent) => {
    class EnhancedComponent extends PureComponent {
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
    }
    hoistNonReactStatic(EnhancedComponent, WrappedComponent);
    return EnhancedComponent;
  };
}
