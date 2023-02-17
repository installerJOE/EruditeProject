import React, { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import GreenBackgroundButton from '../../../components/Buttons/GreenBackgroundButton'
import RedBackgroundButton from '../../../components/Buttons/RedBackgroundButton'
import { colors, styles } from '../../../assets/css/main'
import { settingsStyle } from '../../../assets/css/settings'
import AppModal from '../../../components/AppModal'
import AddCourse from './components/AddCourse'

import { Timetable } from '../../../contexts/ScheduleContext'
import ListItem from '../../../components/Courses/ListItem'

const ScheduleContentScreen = ({route}) => {

  const [showAddCourseModal, setShowAddCourseModal] = useState(false)

  const addCourse = () => {
    setShowAddCourseModal(!showAddCourseModal);
  }

  const {timetable} = route.params;

  const deleteSelected = () => {
    Alert.alert('I have been clicked to delete selected courses from the timetable')
  }

  const handleCourseSelect = () => {
    Alert.alert("I have been selected")
  }

  const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[3] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  const scheduleTypesBlock = timetable.timetable.map(item => 
    <ListItem
      key={item.id} 
      list={{
        title: item.course.course_code
      }} 
      submit='object'
      caption={tConvert(item.start_time) + ' - ' + tConvert(item.end_time)} 
      handleClick ={handleCourseSelect}
    />
  )
    
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
        Schedule For {timetable.value}
      </Text>

      <View>
        {
          timetable.timetable.length < 1 ? <Text style={[styles.textBlack, styles.captionHeader]}>
            No course has been added yet
          </Text> 
          : 
          scheduleTypesBlock
        }
      </View>

      <View style={styles.mt2}>
        <GreenBackgroundButton text="Add Course" handleClick={addCourse}/>
        <RedBackgroundButton text="Delete Selected" handleClick={deleteSelected}/>      
      </View>
    </ScrollView>
  )
}

export default ScheduleContentScreen