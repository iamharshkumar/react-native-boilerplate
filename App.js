import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import AuthContextProvider from './src/contexts/AuthContext';
import Navigator from './src/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import Message from './src/components/generic/Message';

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AuthContextProvider>
          <Navigator />
        </AuthContextProvider>
      </SafeAreaProvider>
      <Message />
    </PaperProvider>
  );
}

