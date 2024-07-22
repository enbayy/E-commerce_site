import React from 'react';
import AppClientRouter from './AppClientRouter.jsx';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import { AuthProvider } from './utils/AuthContext';

Amplify.configure(config);

function App() {
  return (
    <AuthProvider>
      <AppClientRouter />
    </AuthProvider>
  );
}

export default App;