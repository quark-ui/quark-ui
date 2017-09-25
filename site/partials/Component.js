import React, { Component, createElement } from 'react';
import marked from 'meta-marked';
import copy from 'copy-to-clipboard';
import IconGithub from '../icons/github.svg';
import IconUser from '../icons/user.svg';
import IconMail from '../icons/email.svg';
import message from '../../src/components/message';
import Icon from '../../src/components/icon';

import styles from './Component.css';

const IconProps = {
  width: 18,
  height: 18,
};

export default class ComponentBlock extends Component {
  static renderMetaData = ({ author = {} }, match) => {
    const { name, homepage, email } = author;
    return (
      <div className={styles.Component__meta}>
        <span className={styles.meta__tag}>
          <IconGithub {...IconProps} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/quark-ui/quark-ui/tree/master/src/components/${match.params.name}`}
          >
            HomePage
          </a>
        </span>
        <span className={styles.meta__tag}>
          <IconUser {...IconProps} />
          <a target="_blank" rel="noopener noreferrer" href={homepage || email}>
            {name}
          </a>
        </span>
        {email
          ? <span className={styles.meta__tag}>
            <IconMail {...IconProps} />
            <a href={`mailto:${email}`}>Email</a>
          </span>
          : null}
      </div>
    );
  }
  state = {
    readme: '',
    demo: undefined,
    demoSourceCode: '',
    showCode: false,
  };
  componentWillMount() {
    const { match } = this.props;
    this.load(match.params.name);
  }
  async load(name) {
    const { scope } = this.props;
    const readme = await import(`!raw-loader!../../src/components/${name}/README.md`);
    const demoSourceCode = await import(`!raw-loader!../../src/components/${name}/demo/index`);
    const { default: demo } = await import(`../../src/components/${name}/demo/index`);
    this.setState({
      readme,
      demo,
      demoSourceCode,
    });
  }

  copyCode = () => {
    copy(this.state.demoSourceCode);
    message.success('Success', 1);
  }

  toggleCodeBlock = () => {
    this.setState({
      showCode: !this.state.showCode,
    });
  }

  buildScope() {
    const { scope } = this.props;
    return Object.keys(scope).map(key => scope[key]);
  }

  render() {
    const { match } = this.props;
    const { readme, demo, demoSourceCode } = this.state;
    if (!readme) {
      return null;
    }
    const { meta, html } = marked(readme);

    return (
      <div className={styles.Component__wrap}>
        {ComponentBlock.renderMetaData(meta, match)}
        <section
          className={`markdown-block ${styles.Component__doc}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <section className={styles.Component__demo}>
          <div className={styles.Component__demoHead}>
            <h3>DEMO</h3>
            <span>
              <Icon
                name="code"
                size={20}
                title={'show code'}
                onClick={this.toggleCodeBlock}
              />
              <Icon
                name="copy"
                size={20}
                title={'copy code'}
                onClick={this.copyCode}
              />
            </span>
          </div>
          <div className="markdown-demo">
            {this.state.showCode
              ? <div className={`markdown-code ${styles.Component__demoCode}`}>
                <pre className="language-javascript">
                  <code
                    className="language-javascript"
                    dangerouslySetInnerHTML={{
                      __html: Prism.highlight(
                        demoSourceCode,
                        Prism.languages.javascript,
                      ),
                    }}
                  />
                </pre>
              </div>
              : null}
            { demo
              ? <div className={styles.Component__demoBox}>{createElement(demo)}</div>
              : null}
          </div>
        </section>
      </div>
    );
  }
}
