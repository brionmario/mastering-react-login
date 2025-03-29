import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {AuthProvider} from '@asgardeo/auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_IN_REDIRECT_URL,
        signOutRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL,
        clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
        baseUrl: import.meta.env.VITE_ASGARDEO_SERVICES_URL,
        scope: ['openid', 'profile'],
        disableTrySignInSilently: false,
      }}
    >
      <App />
    </AuthProvider>
  </StrictMode>,
);
