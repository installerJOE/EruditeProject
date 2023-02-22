import React, { useContext, useEffect, useMemo, useState } from 'react'
import {Alert, ScrollView, Text, View} from 'react-native'
import ProfileElement from '../../../components/Main/ProfileElement'
import { settingsStyle } from '../../../assets/css/settings'
import { styles } from '../../../assets/css/main'

import axios from 'axios'
import ListItem from '../../../components/Courses/ListItem'
import { GlobalContext } from '../../../contexts/GlobalContext'
import RegisteredCoursesContext from '../../../contexts/RegisteredCoursesContext'


const baseUrl = "http://localhost:8000/api";

const CoursesScreen = () => {

  const [{ academics }, dispatch] = useContext(GlobalContext);

  const handleCourseSelect = (course) => {
    Alert.alert('I have been selected ' + JSON.stringify(course))
  }

  const coursesBlock = RegisteredCoursesContext.map(course => <ListItem
    key={course.id}
    list={course}
    title={course.course_code}
    caption={course.credit_load + ' UNIT'}
    submit='object'
    handleClick ={handleCourseSelect}
  />)


  return (
    <ScrollView style={{padding:10}}>
      <View style={[{paddingHorizontal: 10, paddingBottom: 10}]}>
        <Text style={[styles.textBlack, styles.header]}>
          Registered Courses
        </Text>
      </View>

      <View >
        {coursesBlock}  
      </View>
    </ScrollView>
  )
}

export default CoursesScreen