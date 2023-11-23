import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import Firebase from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
