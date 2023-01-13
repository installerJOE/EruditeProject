import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Main/HomeScreen';
import CoursesScreen from '../screens/Main/CoursesScreen';

import { styles, colors } from '../assets/css/main';
import ExtrasScreen from '../screens/Main/ExtrasScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import AwardsScreen from '../screens/Main/AwardsScreen';
import LibraryTabNavigator from './LibraryTabNavigator';
import SettingsTabNavigator from './SettingsTabNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const screenOptionsStyle = {
    headerStyle: styles.headerBlock,
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontSize: 24,
    },
    tabBarStyle: {
        height: 65,
        paddingBottom: 10,
        paddingTop: 7.5,
        backgroundColor: '#CCFCE6'
    },
    tabBarLabelStyle: {
        fontSize: 12,
        color: '#000'
    }
  }

  return (
    <Tab.Navigator screenOptions={screenOptionsStyle}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryTabNavigator} />
      <Tab.Screen name="Awards" component={AwardsScreen} />
      <Tab.Screen name="Extras" component={ExtrasScreen} />
      <Tab.Screen name="Settings" component={SettingsTabNavigator} />
    </Tab.Navigator> 
  )
}

export default MainTabNavigator