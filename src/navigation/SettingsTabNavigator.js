import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { styles, colors } from '../assets/css/main';

import SecurityScreen from '../screens/Main/Settings/SecurityScreen';
import { topTabScreenOptionsStyle } from '../assets/css/nav';
import ProfileScreen from '../screens/Main/Settings/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

const SettingsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Security" component={SecurityScreen} />
    </Tab.Navigator> 
  )
}

export default SettingsTabNavigator