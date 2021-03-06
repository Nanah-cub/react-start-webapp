import React from 'react';
import ReactDOM from 'react-dom';
import './pollyfills';
import './vendor';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
