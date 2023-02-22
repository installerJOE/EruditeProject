import React from 'react'
import { View, Text, Button } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ErrorText from '../ErrorText'
import { getTimeFromTimeStamp } from '../../screens/Main/Academics/methods/main'
import { styles } from '../../assets/css/main'


const TimeInput = ({label, time, error, showModal, setModalStatus, updateTime}) => {
  return (
    <View>
      <Text style={[styles.textBlack, styles.paragraph]}>
        {label} - {time ? time : '00:00'}
      </Text>       
        
      {error && 
        <View>
          <ErrorText value={error}/>
        </View>
      } 

      <View>
        <Button 
          title="Choose Time" 
          onPress={() => setModalStatus(true)} 
        />
        
        <DateTimePickerModal
          isVisible={showModal}
          mode="time"
          onConfirm={updateTime}
          onCancel={() => setModalStatus(false)}
        />
      </View>
    </View>
  )
}

export default TimeInput