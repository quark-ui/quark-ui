import React, { Component } from 'react';
import marked from 'meta-marked';
import endsWith from 'lodash/endsWith';
import uniqueId from 'lodash/uniqueId';
import { transform } from 'babel-standalone';
import * as QuarkUI from '../../src/index';

const EXECUTION_SCOPES = {
  React,
  ...QuarkUI,
};
const renderer = new marked.Renderer();

renderer.code = (code, language) => {
  let lang = language;
  let executable = false;
  if (endsWith(lang, '#demo')) {
    executable = true;
    lang = lang.replace(/#demo$/, '');
  }
  const result = [
    `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.javascript)}</code></pre>`,
  ];
  if (executable) {
    const uid = uniqueId('demo_');
    const sourceCode = `
      console.log(111)
      (function(){
        const Comp = ${code};
        ReactDOM.render(<Comp />, document.getElementById('${uid}'));
      })();`;
    result.push(
      `<div id="${uid}"></div><script>
        ${transform(sourceCode, {
          presets: [
            'es2015',
            'react',
            'stage-1',
          ],
        }).code}
      </script>`
    );
  }
  return result.join('');
};

export default content => marked(content, {
  renderer,
});
