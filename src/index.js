import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './scss/App.scss';
import App from './App';
import { DataContextProvider } from './store/DataContext';
import { AuthProviderWrapper } from './store/auth.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
