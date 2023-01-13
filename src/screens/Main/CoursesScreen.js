import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {styles} from '../../assets/css/main';
import { inPageStyles } from '../../assets/css/index';
import ListItem from '../../components/Courses/ListItem';
import CourseListData from './api/CourseListData';
import FacultyList from '../../contexts/FacultyList';

const CoursesScreen = () => {
  const Stack = createNativeStackNavigator();
  const courseListBlock = FacultyList.map(faculty => <ListItem key={faculty.id} list={faculty}/>)
  return (
    <ScrollView>
      {/* <Stack.Navigator> */}
        <View style={styles.mt1}>
          {courseListBlock}
        </View>
      {/* </Stack.Navigator> */}
    </ScrollView>
  )
}

export default CoursesScreen