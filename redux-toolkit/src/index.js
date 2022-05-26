import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/index.js"
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  
  <BrowserRouter>
    <App />  
  </BrowserRouter>
  </Provider>
);
