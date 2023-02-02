import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Main/HomeScreen';

import { styles, colors } from '../assets/css/main';
import ExtrasScreen from '../screens/Main/ExtrasScreen';
import AwardsScreen from '../screens/Main/AwardsScreen';
import LibraryTabNavigator from './LibraryTabNavigator';
import SettingsTabNavigator from './SettingsTabNavigator';
import AcademicsTabNavigator from './AcademicsTabNavigator';

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
      <Tab.Screen name="Academics" component={AcademicsTabNavigator}/>
      <Tab.Screen name="Study" component={LibraryTabNavigator} />
      {/* <Tab.Screen name="" component={AwardsScreen} /> */}
      <Tab.Screen name="Extras" component={ExtrasScreen} />
      <Tab.Screen name="Settings" component={SettingsTabNavigator} />
    </Tab.Navigator> 
  )
}

export default MainTabNavigator