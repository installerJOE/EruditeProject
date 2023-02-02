import React, { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import GreenBackgroundButton from '../../../components/Buttons/GreenBackgroundButton'
import RedBackgroundButton from '../../../components/Buttons/RedBackgroundButton'
import { colors, styles } from '../../../assets/css/main'
import { settingsStyle } from '../../../assets/css/settings'
import AppModal from '../../../components/AppModal'
import AddCourse from './components/AddCourse'

const ScheduleContentScreen = () => {

  const [showAddCourseModal, setShowAddCourseModal] = useState(false)

  const addCourse = () => {
    setShowAddCourseModal(!showAddCourseModal);
  }

  const deleteSelected = () => {
    Alert.alert('I have been clicked to delete selected courses from the timetable')
  }
    
  return (
    <ScrollView style={{padding:10}}>
      {
        showAddCourseModal ? <AppModal 
          showModal={showAddCourseModal} 
          closeModal={() => setShowAddCourseModal(!showAddCourseModal)}
          title="Add Course"
          body={<AddCourse/>}
        /> 
        : null
      }

      <Text style={[styles.header, styles.textBlack, {padding: 15}]}>
          Schedule For Monday
        </Text>

      <GreenBackgroundButton text="Add Course" handleClick={addCourse}/>
      <RedBackgroundButton text="Delete Selected" handleClick={deleteSelected}/>      

    </ScrollView>
  )
}

export default ScheduleContentScreen