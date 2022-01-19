import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles';
import store from './store';
import {Provider} from 'react-redux';

const app = (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
