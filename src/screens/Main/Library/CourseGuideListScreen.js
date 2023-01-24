import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, styles } from '../../../assets/css/main';
import { inPageStyles } from '../../../assets/css';
import ListItem from '../../../components/Courses/ListItem';
import CourseListData from '../api/CourseListData';
import FacultyList from '../../../contexts/FacultyList';


const CourseGuideListScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const handleCourseClick = (slug) => {
    navigation.navigate('Select Programme')
  }

  const courseListBlock = FacultyList.map(faculty => <ListItem 
    key={faculty.id} list={faculty} handleClick={handleCourseClick}/>
  )
  
  return (
    <ScrollView>
      <View style={styles.mt1}>
        {courseListBlock}
      </View>
    </ScrollView>
  )
}

export default CourseGuideListScreen