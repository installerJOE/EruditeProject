import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {styles} from '../../assets/css/main';
import { inPageStyles } from '../../assets/css/index';
import ListItem from '../../components/Courses/ListItem';
import CourseListData from './api/CourseListData';

const CoursesScreen = () => {
  const courseListBlock = CourseListData.map(course => <ListItem key={course.id} list={course}/>)
  return (
    <ScrollView>
      <View style={inPageStyles.container}>
        <Text style={[styles.subHeader, styles.textBlack]}> 
          List of Courses
        </Text>
      </View>
      <View>
        {courseListBlock}
      </View>
      <View>
        {courseListBlock}
      </View>
      <View>
        {courseListBlock}
      </View>
      <View>
        {courseListBlock}
      </View>
    </ScrollView>
  )
}

export default CoursesScreen