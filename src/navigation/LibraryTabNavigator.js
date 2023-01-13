import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles, colors } from '../assets/css/main';
import CoursesScreen from '../screens/Main/CoursesScreen';
import SubscribedCoursesScreen from '../screens/Main/SubscribedCoursesScreen';
import { topTabScreenOptionsStyle } from '../assets/css/nav';

const Tab = createMaterialTopTabNavigator();

const LibraryTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name="Study Guide" component={CoursesScreen}/>
      <Tab.Screen name="Subscribed Courses" component={SubscribedCoursesScreen}/>
    </Tab.Navigator> 
  )
}

export default LibraryTabNavigator