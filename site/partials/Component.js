import { Component, createElement } from 'react';
import MDReactComponent from 'markdown-react-js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles';

import Layout from '../layouts/Layout';

export default class ComponentBlock extends Component {
  state = {
    readme: '',
    demo: undefined,
    demoSourceCode: '',
  };
  componentWillMount() {
    const { match } = this.props;
    this.load(match.params.name);
  }
  load(name) {
    require.ensure([], (require) => {
      const readme = require(`!raw-loader!../../src/components/${name}/README.md`);
      const demoSourceCode = require(`!raw-loader!../../src/components/${name}/demo/index`);
      const demo = require(`../../src/components/${name}/demo/index`).default;
      this.setState({
        readme,
        demo,
        demoSourceCode,
      });
    });
  }
  render() {
    const { readme, demo, demoSourceCode } = this.state;
    return (
      <div>
        <MDReactComponent text={readme} />
        {
          demo ? createElement(demo) : null
        }
        <SyntaxHighlighter
          language={'javascript'}
          style={darcula}
        >{demoSourceCode}</SyntaxHighlighter>
      </div>
    );
  }
}
