import { Component, createElement } from 'react';
import MDReactComponent from 'markdown-react-js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CSSModules from 'react-css-modules';
import { darcula } from 'react-syntax-highlighter/dist/styles';
import { allowMultiple } from '../../src/constants';

import Layout from '../layouts/Layout';
import styles from './Component.css';

@CSSModules(styles, { allowMultiple })
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
      <div styleName="Component__wrap">
        <MDReactComponent text={readme} styleName="Component__doc" />
        {
          demo ? <div styleName="Component__demoBox">{createElement(demo)}</div> : null
        }
        <SyntaxHighlighter
          language={'javascript'}
          style={darcula}
        >{demoSourceCode}</SyntaxHighlighter>
      </div>
    );
  }
}
