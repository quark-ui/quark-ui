/**
 * QuarkUi Component Demo
 * @author ryan.bian
 */
import ReactDOM from 'react-dom';
import React from 'react';

/* eslint-disable import/no-unresolved, import/extensions */
import { AppContainer } from 'react-hot-loader';

import Demo from './QuarkUiDemo';
import './QuarkUiDemo.less';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('Demo'),
  );
};

render(Demo);

if (module.hot) {
  module.hot.accept('./QuarkUiDemo', () => {
    render(Demo);
  });
}

