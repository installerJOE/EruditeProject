import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles, colors } from '../assets/css/main';
import { topTabScreenOptionsStyle } from '../assets/css/nav';


import Overview from '../screens/Main/Academics/OverviewScreen';
import ScheduleListScreen from '../screens/Main/Academics/ScheduleListScreen';
import ScheduleDayListScreen from '../screens/Main/Academics/ScheduleDayListScreen';
import { ScheduleListProvider } from '../contexts/ScheduleListContext';
import ScheduleContentScreen from '../screens/Main/Academics/ScheduleContentScreen';

const Tab = createMaterialTopTabNavigator();

const AcademicsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name="Overview" component={Overview}/>
      {/* <Tab.Screen name="My Courses" component={ScheduleStackNav}/> */}
      <Tab.Screen name="My Schedule" component={ScheduleStackNav}/>
    </Tab.Navigator> 
  )
}

const ScheduleStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Schedule Type" component={ScheduleList} options={{headerShown: false}}/>
      <Stack.Screen name="Schedule Days" component={ScheduleDayList} options={{headerShown: false}}/>
      <Stack.Screen name="Schedule Content" component={ScheduleContentScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const ScheduleList = ({navigation}) => {
  return(
    <ScheduleListProvider> 
      <ScheduleListScreen navigation={navigation}/> 
    </ScheduleListProvider>
  )
}


const ScheduleDayList = ({route, navigation}) => {
  return (
    <ScheduleListProvider>
      <ScheduleDayListScreen navigation={navigation} route={route}/>
    </ScheduleListProvider>
  )
}

export default AcademicsTabNavigator