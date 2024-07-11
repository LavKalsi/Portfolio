import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your existing index.css or any other specific styles
import './global.css'; // Import your global stylesheet
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
