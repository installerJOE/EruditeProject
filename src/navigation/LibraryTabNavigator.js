import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles, colors } from '../assets/css/main';
import { topTabScreenOptionsStyle } from '../assets/css/nav';

import SubscribedCoursesScreen from '../screens/Main/SubscribedCoursesScreen';
import CourseGuideListScreen from '../screens/Main/Library/CourseGuideListScreen';
import ProgrammeSelectScreen from '../screens/Main/Library/ProgrammeSelectScreen';
import CourseOutlineScreen from '../screens/Main/Library/CourseOutlineScreen';
import DepartmentListScreen from '../screens/Main/Library/DepartmentListScreen';
import LessonContentScreen from '../screens/Main/Library/LessonContentScreen';

const Tab = createMaterialTopTabNavigator();

const LibraryTabs = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name="Study Guide" component={CourseGuideListScreen}/>
      <Tab.Screen name="Subscribed Courses" component={SubscribedCoursesScreen}/>
    </Tab.Navigator> 
  )
}

const LibraryTabNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Guide List" component={LibraryTabs} options={{headerShown: false}}/>
      <Stack.Screen name="Select Programme" component={ProgrammeSelectScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Departments" component={DepartmentListScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Course Outline" component={CourseOutlineScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson Content" component={LessonContentScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default LibraryTabNavigator