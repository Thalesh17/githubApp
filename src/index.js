import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './global.css';
import { RepositoryProvider } from './contexts/repositories';

ReactDOM.render(
  <React.StrictMode>
    <RepositoryProvider>
      <App />
    </RepositoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
