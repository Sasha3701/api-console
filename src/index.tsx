import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles';
import store from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
