import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // Change this import
import './index.css';
import App from './App.jsx';

// Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
