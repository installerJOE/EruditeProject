import React, { useState, useContext } from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { colors, styles } from '../../../assets/css/main';

import ListItem from '../../../components/Courses/ListItem';
import MyAppText from '../../../components/MyAppText';
// import DepartmentList from '../../../contexts/DepartmentList';
import CourseListContext from '../../../contexts/CourseListContext';


const DepartmentListScreen = ({ route, navigation }) => {
  const handleDepartmentSelection = (slug) => {
    navigation.navigate('Course Outline', {
        slug: slug
    })
  }

  const courseList = useContext(CourseListContext)

   const { slug } = route.params;

  // const [studyCourseList, setStudyCourseList] = useState(courseList)

  const faculty = courseList.filter(faculty => faculty.slug == slug)[0]

  const studyProgrammes = faculty.study_programmes;

  const departmentListBlock = (id) => studyProgrammes[id].courses.map(item => 
    <ListItem key={item.department.id} list={item.department} handleClick ={handleDepartmentSelection}/>
  )

  
  return (
    <ScrollView>
      <View style={styles.mt1}>
        <Text style={[styles.header, styles.textOrange]}>
          {studyProgrammes[1].name}
        </Text>
      </View>
      <View style={styles.mt1}>
        {departmentListBlock}
      </View>
    </ScrollView>
  )
}

export default DepartmentListScreen