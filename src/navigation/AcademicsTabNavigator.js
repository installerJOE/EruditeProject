import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles, colors } from '../assets/css/main';
import { topTabScreenOptionsStyle } from '../assets/css/nav';


import OverviewScreen from '../screens/Main/Academics/OverviewScreen';
import ScheduleListScreen from '../screens/Main/Academics/ScheduleListScreen';
import ScheduleDayListScreen from '../screens/Main/Academics/ScheduleDayListScreen';
import { ScheduleListProvider } from '../contexts/ScheduleListContext';
import ScheduleContentScreen from '../screens/Main/Academics/ScheduleContentScreen';
import { ROUTE } from './Route';
import CoursesScreen from '../screens/Main/Academics/CoursesScreen';
import { ScheduleContextProvider } from '../contexts/ScheduleContext';

const Tab = createMaterialTopTabNavigator();

const AcademicsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle} >
      <Tab.Screen name={ROUTE.ACADEMICS.OVERVIEW} component={OverviewScreen} options={{tabBarLabel: 'Overview'}}/>
      <Tab.Screen name={ROUTE.ACADEMICS.MY_COURSES} component={CoursesScreen} options={{tabBarLabel: 'Courses'}}/>
      <Tab.Screen name={ROUTE.ACADEMICS.MY_SCHEDULE} component={ScheduleStackNav} options={{tabBarLabel: 'Schedule'}}/>
    </Tab.Navigator> 
  )
}

const ScheduleStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <ScheduleContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="Schedule Type" component={ScheduleListScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Schedule Days" component={ScheduleDayListScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Schedule Content" component={ScheduleContentScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </ScheduleContextProvider>
  )
}

export default AcademicsTabNavigator