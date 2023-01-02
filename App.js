import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Welcome from './src/screens/Welcome';
import Programme from './src/screens/Auth/Programme';
import StudyCourse from './src/screens/Auth/StudyCourse';
import Email from './src/screens/Auth/Email';
import Password from './src/screens/Auth/Password';
import Login from './src/screens/Auth/Login';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import ResetLinkSent from './src/screens/Auth/ResetLinkSent';

import Index from './src/screens/Main/HomeScreen';
import Courses from './src/screens/Main/CoursesScreen';

import { styles, colors } from './src/assets/css/main';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';



const Tab = createBottomTabNavigator();

const App = () => {
  
  const Stack = createNativeStackNavigator();

  const screenOptionsStyle = {
    headerStyle: styles.headerBlock,
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontSize: 24
    }
  }

  return (
    <NavigationContainer>
      <AuthStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
