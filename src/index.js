import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';

import config from './config';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Only wrap with GoogleOAuthProvider if clientId is configured
const renderApp = () => (
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

const renderAppWithGoogle = () => (
  <React.StrictMode>
    <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

root.render(config.GOOGLE_CLIENT_ID ? renderAppWithGoogle() : renderApp());
