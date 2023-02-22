import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles, colors } from '../assets/css/main';
import { topTabScreenOptionsStyle } from '../assets/css/nav';

import CourseGuideListScreen from '../screens/Main/Library/CourseGuideListScreen';
import CourseOutlineScreen from '../screens/Main/Library/CourseOutlineScreen';
import DepartmentListScreen from '../screens/Main/Library/DepartmentListScreen';
import LessonContentScreen from '../screens/Main/Library/LessonContentScreen';

import { CourseProvider } from '../contexts/CourseContext';
import { CourseListProvider } from '../contexts/CourseListContext';

const Tab = createMaterialTopTabNavigator();

const LibraryTabNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Study" component={CourseList} options={{headerShown: false}}/>
      <Stack.Screen name="Departments" component={StudyProgrammeList} options={{headerShown: false}}/>
      <Stack.Screen name="Course Outline" component={CourseOutline} options={{headerShown: false}}/>
      <Stack.Screen name="Lesson Content" component={LessonContentScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const CourseOutline = ({navigation}) => {
  return(
    <CourseProvider> 
      <CourseOutlineScreen navigation={navigation}/> 
    </CourseProvider>
  )
}


const CourseList = ({navigation}) => {
  return (
    <CourseListProvider>
      <CourseGuideListScreen navigation={navigation}/>
    </CourseListProvider>
  )
}

const StudyProgrammeList = ({route, navigation}) => {
  return (
    <CourseListProvider>
      <DepartmentListScreen navigation={navigation} route={route}/>
    </CourseListProvider>
  )
}


export default LibraryTabNavigator