import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { topTabScreenOptionsStyle } from '../assets/css/nav';
import { ROUTE } from './Route';
import MyNoteScreen from '../screens/Main/Extras/MyNoteScreen';
import MyRecordings from '../screens/Main/Extras/MyRecordings';

const Tab = createMaterialTopTabNavigator();

export default ExtrasTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={topTabScreenOptionsStyle}>
      <Tab.Screen name={ROUTE.EXTRAS.NOTES} component={MyNoteScreen} options={{tabBarLabel: 'My Notes'}}/>
      <Tab.Screen name={ROUTE.EXTRAS.RECORDINGS} component={MyRecordings} options={{tabBarLabel: 'My Recordings'}}/>
    </Tab.Navigator>
  )
}