import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Button, ScrollView } from 'react-native'

// external libraries
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// internal components
import InputBlock from '../../../../components/InputBlock'
import GreenBackgroundButton from '../../../../components/Buttons/GreenBackgroundButton'
import RegisteredCoursesContext from '../../../../contexts/RegisteredCoursesContext'
import TimeInput from '../../../../components/Inputs/TimeInput';
import { ACTIONS } from '../../../../contexts/GlobalContext';

// styles
import { settingsStyle } from '../../../../assets/css/settings'
import { styles } from '../../../../assets/css/main'
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { __storeCourse } from '../methods/__storeCourseToSchedule';
import { responseOnAddingCourse, ScheduleContext } from '../../../../contexts/ScheduleContext';
import { API, getTimeFromTimeStamp } from '../methods/main';
import ErrorLabel from '../../../../components/Labels/ErrorLabel';


export default AddCourse = ({ addCourse, networkError}) => {
  const [courseId, setSelectedCourse] = useState(RegisteredCoursesContext[0].id)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  
  const [startTimeErr, setStartTimeErr] = useState(null)
  const [endTimeErr, setEndTimeErr] = useState(null)
  const [success, setSuccessStatus] = useState(false);

  const [showStartTimeModal, setShowStartTimeModal] = useState(false)
  const [showEndTimeModal, setShowEndTimeModal] = useState(false)
  // const [errorInSubmission, setErrorInSubmission] = useState(null)

  const [{currentDay}, updateScheduleState] = useContext(ScheduleContext);

  const updateStartTime = (time) => {
    if(startTimeErr) setStartTimeErr(null)
    setStartTime(getTimeFromTimeStamp(time));
    setShowStartTimeModal(false)
  }

  const updateEndTime = (time) => {
    if(endTimeErr) setEndTimeErr(null)
    setEndTime(getTimeFromTimeStamp(time));
    setShowEndTimeModal(false)   
  }
  
  const addNewCourse = () => {
    if(startTime.length < 1) setStartTimeErr('A start time is required')

    if(endTime.length < 1) setEndTimeErr('An End time is required')

    if(endTime.length < 1 || startTime.length < 1) return;

    setSuccessStatus(true);    

    addCourse({
      day_id: currentDay,
      course_id: courseId,
      start_time: startTime,
      end_time: endTime
    })
  }

  useEffect(() => {
    if(networkError && success){
      setSuccessStatus(false)
    }
  }, [startTimeErr, endTimeErr])

  return (
    <View style={[settingsStyle.profileElementContainer]}>
      {networkError && <ErrorLabel message={networkError}/>}

      <View>
        <Text style={[styles.paragraph, styles.textBlack]}>
          Select a course 
        </Text>

        <SelectDropdown
          onSelect={(course, index) => setSelectedCourse(course.id)} 
          data={RegisteredCoursesContext}
          defaultValueByIndex={0}
          buttonTextAfterSelection={course => course.course_code}
          rowTextForSelection={course => course.course_code} 
          style={{padding: 20}}
          dropdownStyle={{
            width: '70%',
          }}
          rowStyle={{backgroundColor: '#fff', borderBottomColor: '#d9d9d9'}}
          selectedRowStyle={{backgroundColor: '#e6e6e6'}}
        />
        
        <TimeInput
          label="Start Time"
          time={startTime}
          error={startTimeErr} 
          showModal={showStartTimeModal} 
          setModalStatus={setShowStartTimeModal}
          updateTime={updateStartTime}
        />

        <TimeInput
          label="End Time"
          time={endTime}
          error={endTimeErr} 
          showModal={showEndTimeModal} 
          setModalStatus={setShowEndTimeModal}
          updateTime={updateEndTime}
        />
       </View>

      <View style={styles.mt2}>
        <GreenBackgroundButton 
          text={success ? 'Adding Course...' : 'Add Course'}
          handleClick={addNewCourse}
        />
      </View>
    </View>
  )
}