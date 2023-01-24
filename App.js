import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
