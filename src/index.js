import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// COMPONENTS
import App from './App';
import store from './store';

// CONFIG
import theme from './styles/theme';
import { startListeningToAuthChanges } from './actions/authActions';

store.dispatch(startListeningToAuthChanges());

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route component={App} />
      </ThemeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
