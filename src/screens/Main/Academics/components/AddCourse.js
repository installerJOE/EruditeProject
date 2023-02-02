import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { settingsStyle } from '../../../../assets/css/settings'
import { styles } from '../../../../assets/css/main'
import InputBlock from '../../../../components/InputBlock'
import GreenBackgroundButton from '../../../../components/Buttons/GreenBackgroundButton'

const AddCourse = () => {

  const [courseCode, setCourseCode] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const addNewCourse = () => {
    Alert.alert('New course added: ' + courseCode)
  }

  return (
    <View style={[settingsStyle.profileElementContainer]}>
      <InputBlock 
        label="Course Code"
        value={courseCode}
        handleInputChange={setCourseCode}
        secureTextEntry={false}
      />

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
      <GreenBackgroundButton text="Add Course" handleClick={addNewCourse}/>
    </View>
  )
}

export default AddCourse