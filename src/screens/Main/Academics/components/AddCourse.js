import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { settingsStyle } from '../../../../assets/css/settings'
import InputBlock from '../../../../components/InputBlock'
import GreenBackgroundButton from '../../../../components/Buttons/GreenBackgroundButton'
import RegisteredCoursesContext from '../../../../contexts/RegisteredCoursesContext'
import { styles } from '../../../../assets/css/main'

const AddCourse = () => {

  const [courseCode, setSelectedCourse] = useState('Add')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const addNewCourse = () => {
    Alert.alert('New course added: ' + courseCode)
  }

  const registeredCourses = RegisteredCoursesContext.map(course => {
    return {
      key: course.id,
      value: course.course_code
    }
  })
  return (
    <View style={[settingsStyle.profileElementContainer]}>
      <View style={styles.fixToText}>
        <SelectList 
          setSelected={(val) => setSelectedCourse(val)} 
          data={registeredCourses} 
          save="key"
        />
      </View>

      {/* <InputBlock 
        label="Course Code"
        value={courseCode}
        handleInputChange={setCourseCode}
        secureTextEntry={false}
      /> */}

      <InputBlock 
        label="What time would study start?"
        value={startTime}
        handleInputChange={setStartTime}
        secureTextEntry={false}
      />

      <InputBlock 
        label="What time would study end?"
        value={endTime}
        handleInputChange={setEndTime}
        secureTextEntry={false}
      />
      {/* <GreenBackgroundButton text="Add Course" handleClick={addNewCourse}/> */}
      <GreenBackgroundButton text={courseCode} handleClick={addNewCourse}/>
    </View>
  )
}

export default AddCourse