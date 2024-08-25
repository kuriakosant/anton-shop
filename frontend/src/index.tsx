import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';  // Ensure you're using Tailwind CSS for styling
import App from './App';

// Since you removed reportWebVitals, you don't need to import or use it

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
