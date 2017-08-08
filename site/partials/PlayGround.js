import React, { Component } from 'react';
import { transform } from 'babel-standalone';
import classnames from 'classnames';
import CodeMirror from './Codemirror';
import 'codemirror/mode/javascript/javascript';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import * as QuarkUI from '../../src/index';
import RunningIcon from '../icons/run.svg';

import styles from './PlayGround.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

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
        'es2016',
        'react',
        'stage-1',
      ],
    }).code;
  }
  buildScope() {
    const { scope } = this.props;
    return Object.keys(scope).map(key => scope[key]);
  }
  loadRepl() {
    const { componentName } = this.props;
    require.ensure([], require => {
      const repl = require(`!raw-loader!../../src/components/${componentName}/repl/index`);
      this.setState({
        repl,
      });
      this.executeCode(repl);
    });
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
        mode: 'javascript',
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
              <div className={styles.PlayGround__Preview} ref={node => (this.mount = node)} />
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
