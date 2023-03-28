import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TableProvider } from './components/Context/UserContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <TableProvider>
      <App />
      </TableProvider>
        
    </React.StrictMode>
  </BrowserRouter>

);
reportWebVitals();
