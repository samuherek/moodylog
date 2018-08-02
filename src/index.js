import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { auth, uidKey, dataKey, timestampKey, firestore, isAuthenticated } from './firebase';

const startListeningToAuthChanges = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user', user);
    }
  });
};

startListeningToAuthChanges();

ReactDOM.render(<App />, document.getElementById('root'));
