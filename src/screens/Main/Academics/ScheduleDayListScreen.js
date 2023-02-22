import React, { useState, useEffect, useContext } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import ListItem from '../../../components/Courses/ListItem'
import { styles } from '../../../assets/css/main'
import { GlobalContext } from '../../../contexts/GlobalContext'
import { ACTIONS, ScheduleContext } from '../../../contexts/ScheduleContext'


const ScheduleDayListScreen = ({route, navigation}) => {
  
  const { timetables } = route.params;  

  const [{currentScheduleType}, updateScheduleState] = useContext(ScheduleContext)
  
  const handleScheduleSelect = (selectedDay) => {
    updateScheduleState({
      type: ACTIONS.TOGGLE_DAY,
      payload: {
        dayId: selectedDay.id
      }
    })
    navigation.navigate('Schedule Content', {
      day: selectedDay,
    });
  }

  const scheduleTypesBlock = timetables.map(item => 
    <ListItem
      key={item.id} 
      list={item} 
      submit='object'
      caption={item.timetable.length + ' Courses'} 
      handleClick ={handleScheduleSelect}
    />
  )
    
  return (
    <ScrollView>
      <View style={styles.mt1}>
        {scheduleTypesBlock}  
      </View>
    </ScrollView>
  )
}

export default ScheduleDayListScreen