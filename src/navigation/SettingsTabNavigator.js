import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { styles, colors } from '../assets/css/main';
import ProfileScreen from '../screens/Main/ProfileScreen';
import PasswordScreen from '../screens/Main/PasswordScreen';
import { topTabScreenOptionsStyle } from '../assets/css/nav';

const Tab = createMaterialTopTabNavigator();

const SettingsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Password" component={PasswordScreen} />
    </Tab.Navigator> 
  )
}

export default SettingsTabNavigator