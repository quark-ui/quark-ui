/**
 * QuarkUi Site
 * @author ryan.bian
 */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'react-jss';

/* eslint-disable import/no-unresolved, import/extensions */
import { AppContainer } from 'react-hot-loader';

import App from './Site';
import theme from '../src/styles/theme';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </AppContainer>,
    document.getElementById('App'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./Site', () => {
    render(App);
  });
}

