import React, { useContext } from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, styles } from '../../../assets/css/main';
import { inPageStyles } from '../../../assets/css';
import ListItem from '../../../components/Courses/ListItem';
import FacultyList from '../../../contexts/FacultyList';
import CourseListContext from '../../../contexts/CourseListContext';


const CourseGuideListScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const handleCourseClick = (slug) => {
    navigation.navigate('Departments', {
      slug: slug
    })
  }

  const courseList = useContext(CourseListContext)

  const courseListBlock = courseList.map(list => <ListItem 
    key={list.id} list={list} handleClick={handleCourseClick}/>
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