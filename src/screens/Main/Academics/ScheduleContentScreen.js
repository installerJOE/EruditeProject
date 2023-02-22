import React, { useContext, useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import GreenBackgroundButton from '../../../components/Buttons/GreenBackgroundButton'
import RedBackgroundButton from '../../../components/Buttons/RedBackgroundButton'
import { colors, styles } from '../../../assets/css/main'
import { settingsStyle } from '../../../assets/css/settings'
import AppModal from '../../../components/AppModal'
import AddCourse from './components/AddCourse'
import axios from 'axios';

import { ScheduleContext, Timetable } from '../../../contexts/ScheduleContext'
import ListItem from '../../../components/Courses/ListItem'
import { API, getConvertedTime } from './methods/main'
import { ACTIONS, GlobalContext } from '../../../contexts/GlobalContext'

const ScheduleContentScreen = ({route}) => {

  const [showAddCourseModal, setShowAddCourseModal] = useState(false)
  const [networkError, setNetworkError] = useState(null);
  const [scheduleUpdated, setScheduleUpdatedFlag] = useState(false);

  const [{token, schedules}, dispatch] = useContext(GlobalContext)
  
  const [{currentScheduleType, currentDay}, updateScheduleState] = useContext(ScheduleContext)

  const addCourse = () => {
    setScheduleUpdatedFlag(false);
    setShowAddCourseModal(!showAddCourseModal);
  }

  const {day} = route.params;

  const deleteSelected = () => {
    Alert.alert('I have been clicked to delete selected courses from the timetable')
  }

  const handleCourseSelect = () => {
    Alert.alert("I have been selected")
  }

  const closeModal = () => {
    setShowAddCourseModal(!showAddCourseModal)
  }

  const addCourseToSchedule = (payload) => {
    axios.post(`${API.BASE_URL}/schedules/${currentScheduleType}/timetable/add-course`, payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const updatedScheduleTypes =  schedules.map(scheduleType => {
        if(scheduleType.id == currentScheduleType){
          return response.data.data
        }
        return scheduleType;
      })

      dispatch({
        type: ACTIONS.SAVE_SCHEDULES,
        payload: {
          schedules: updatedScheduleTypes
        }
      })
      setScheduleUpdatedFlag(true);
      setTimeout(closeModal, 2000);
    })
    .catch(error => {
      // setErrorInSubmission(error.response.data.message)
      const netError = error.response ? error.response.data.message : error.message
      setNetworkError(netError)
    })
  }

  const selectedSchedule = schedules.filter(scheduleType => scheduleType.id == currentScheduleType)
  const selectedDay = selectedSchedule.length > 0 && selectedSchedule[0].schedules.filter(day => day.id == currentDay)

  const scheduleTypesBlock = selectedDay && selectedDay[0].timetable.map(item => 
    <ListItem
      key={item.id} 
      list={{
        title: item.course.course_code
      }} 
      submit='object'
      caption={getConvertedTime(item.start_time) + ' - ' + getConvertedTime(item.end_time)} 
      handleClick ={handleCourseSelect}
    />
  )

  return (
    <ScrollView style={{padding:10}}>
      {
        showAddCourseModal ? <AppModal 
          showModal={showAddCourseModal} 
          closeModal={closeModal}
          title="Add To Schedule"
          body={<AddCourse addCourse={addCourseToSchedule} networkError={networkError}/>}
        /> : null
      }

      <Text style={[styles.header, styles.textBlack, {padding: 15}]}>
        Schedule For {day.value}
      </Text>

      <View>
        {
          day.timetable.length < 1 ? <Text style={[styles.textBlack, styles.captionHeader]}>
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