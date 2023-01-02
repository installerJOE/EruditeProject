import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles, colors } from '../assets/css/main';

import Welcome from '../screens/Welcome';
import Programme from '../screens/Auth/Programme';
import StudyCourse from '../screens/Auth/StudyCourse';
import Email from '../screens/Auth/Email';
import Password from '../screens/Auth/Password';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetLinkSent from '../screens/Auth/ResetLinkSent';

import Index from '../screens/Main/HomeScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Welcome} options={{headerShown: false}}/>

      <Stack.Screen name="Programme" component={Programme} options={{headerShown: false}}/>

      <Stack.Screen name="StudyCourse" component={StudyCourse} options={{headerShown: false}}/>

      <Stack.Screen name="Email" component={Email} options={{headerShown: false}}/>

      <Stack.Screen name="Password" component={Password} options={{headerShown: false}}/>

      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>

      <Stack.Screen name="PasswordResetLinkSent" component={ResetLinkSent} options={{headerShown: false}}/>

      <Stack.Screen name="Index" component={MainTabNavigator} options={{headerShown: false}}/>

    </Stack.Navigator>  
  )
}

export default AuthStackNavigation