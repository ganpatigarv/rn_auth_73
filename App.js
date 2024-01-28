import 'react-native-gesture-handler';
import React from 'react';
import {
  Text, View,
} from 'react-native';
import { AuthProvider } from './src/context/Auth';
import AppNav from './src/navigation/AppNav';

function App() {

  return (
    <AuthProvider>
      <AppNav />

    </AuthProvider>
  );
}

export default App;
