import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import Firebase from './firebase/config';
import Context from './store/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <Context>
          <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
