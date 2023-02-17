import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import { GlobalContextProvider } from './src/contexts/GlobalContext';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <AuthStackNavigator/>
      </GlobalContextProvider>
    </NavigationContainer>
  );
};

export default App;
