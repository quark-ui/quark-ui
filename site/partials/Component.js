import { Component, createElement } from 'react';
import marked from 'meta-marked';
import Prism from 'prismjs';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../src/constants';
import IconGithub from '../icons/github.svg';
import IconUser from '../icons/user.svg';
import IconMail from '../icons/email.svg';
import 'prismjs/themes/prism.css';

import styles from './Component.css';

const IconProps = {
  width: 18,
  height: 18,
};

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
  static renderMetaData = ({ author = {} }, match) => {
    const { name, homepage, email } = author;
    return (
      <div styleName="Component__meta">
        <span styleName="meta__tag">
          <IconGithub {...IconProps} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/quark-ui/quark-ui/tree/master/src/components/${match.params.name}`}>
            HomePage
          </a>
        </span>
        <span styleName="meta__tag">
          <IconUser {...IconProps} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={homepage || email}
          >{name}</a>
        </span>
        {
          email ? (
            <span styleName="meta__tag">
              <IconMail {...IconProps} />
              <a href={`mailto:${email}`}>Email</a>
            </span>
          ) : null
        }
      </div>
    );
  }
  render() {
    const { match } = this.props;
    const { readme, demo, demoSourceCode } = this.state;
    if (!readme) {
      return null;
    }
    const { meta, html } = marked(readme);
    return (
      <div styleName="Component__wrap">
        { ComponentBlock.renderMetaData(meta, match) }
        <div className="markdown-block" styleName="Component__doc" dangerouslySetInnerHTML={{ __html: html }} />
        {
          demo ? <div styleName="Component__demoBox">{createElement(demo)}</div> : null
        }
        <div styleName="Component__demoCode">
          <pre className="language-javascript">
            <code
              className="language-javascript"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(demoSourceCode, Prism.languages.javascript),
              }}
            />
          </pre>
        </div>
      </div>
    );
  }
}
