import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { transform } from 'babel-standalone';
import classnames from 'classnames';
import 'codemirror/mode/jsx/jsx';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import CodeMirror from './Codemirror';
import * as QuarkUI from '../../src/index';
import RunningIcon from '../icons/run.svg';
import defaultRepl from '!raw-loader!../repl/default';


import styles from './PlayGround.css';

export default class PlayGround extends Component {
  static defaultProps = {
    componentName: null,
    scope: {
      React,
      ...QuarkUI,
    },
  }
  static propTypes = {
    componentName: PropTypes.string.isRequired,
    scope: PropTypes.object,
  }
  state = {
    repl: '',
    errorMsg: null,
    active: false,
  }
  componentDidMount() {
    this.loadRepl();
  }
  handleClickTrgger = () => {
    this.setState({
      active: !this.state.active,
    });
  }
  compileCode(sourceCode) {
    const { scope } = this.props;
    const code = `
      (function(${Object.keys(scope).join(', ')}){
        ${sourceCode}
      });`;
    return transform(code, {
      presets: [
        'es2015',
        'react',
        'stage-1',
      ],
    }).code;
  }
  buildScope() {
    const { scope } = this.props;
    return Object.keys(scope).map(key => scope[key]);
  }
  async loadRepl() {
    const { componentName } = this.props;
    try {
      const repl = await import(`!raw-loader!../repl/${componentName}`);
      this.setState({
        repl,
      });
      this.executeCode(repl);
    } catch (e) {
      this.setState({
        repl: defaultRepl,
      });
      this.executeCode(defaultRepl);
    }
  }
  executeCode(code) {
    const scope = this.buildScope();
    
    try {
      ReactDOM.unmountComponentAtNode(this.mount);
    } catch(e) {
      console.error(e);
    }

    try {
      const compiledResult = this.compileCode(code);
      ReactDOM.render(eval(compiledResult)(...scope), this.mount);
      if (this.state.errorMsg) {
        this.setState({
          errorMsg: null,
        });
      }
    } catch (err) {
      this.setState({
        errorMsg: err.toString(),
      });
    }
  }
  render() {
    const { errorMsg, repl, active } = this.state;
    const codeMirrorProps = {
      value: repl,
      onChange: (newCode) => {
        this.executeCode(newCode);
      },
      options: {
        mode: 'jsx',
        lineNumbers: true,
        theme: 'material',
        tabSize: 2,
        viewportMargin: Infinity,
      },
    };
    return (
      <Transition in={active} timeout={625}>
        {
          status => (
            <div
              key={status}
              className={classnames(
                styles.PlayGround__Pane,
                styles[`PlayGround__Pane--${status}`],
              )}
            >
              <div className={styles.PlayGround__Editor}>
                <CodeMirror {...codeMirrorProps} />
              </div>
              { errorMsg !== null ? 
                <p className={styles.PlayGround__ErrorMsg}>{errorMsg}</p> :
                null
              }
              <div className={styles.PlayGround__Preview} ref={node => this.mount = node} />
              <button
                className={styles.PlayGround__Trigger}
                onClick={this.handleClickTrgger}
              >
                <RunningIcon
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )
        }
      </Transition>
    );
  }
}
