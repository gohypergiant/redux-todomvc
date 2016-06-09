import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state';
import App from './components/app';
import 'todomvc-app-css/index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
