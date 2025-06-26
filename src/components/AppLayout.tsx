import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import LoginForm from './LoginForm';
import MainApp from './MainApp';

const AppLayout: React.FC = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
};

const AppContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return <MainApp />;
};

export default AppLayout;