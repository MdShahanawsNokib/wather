import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Import main App component
import * as serviceWorker from './serviceWorker'; // Optional: for offline support

// Render the App component into the HTML element with ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// To enable offline mode (PWA), change this to serviceWorker.register();
serviceWorker.unregister(); // Keeps app online-only for now
