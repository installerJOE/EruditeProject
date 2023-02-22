import React, { useContext, useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import ListItem from '../../../components/Courses/ListItem'
import { ACTIONS, ScheduleContext, ScheduleTypes } from '../../../contexts/ScheduleContext'
import { styles } from '../../../assets/css/main'
import { NetInfo, NetInfoStateType, useNetInfo } from '@react-native-community/netinfo'
import MyAppText from '../../../components/MyAppText'
import axios from 'axios'
import NetworkError from '../../../components/NetworkError'
import { GlobalContext } from '../../../contexts/GlobalContext'


const ScheduleListScreen = ({navigation}) => {
  
  const [connectInstance, setConnection] = useState('');
  const [error, setError] = useState(null);
  
  const [{schedules}, dispatch] = useContext(GlobalContext);

  const baseUrl = 'https://erudite.igbolibrary.co/api'

  // useEffect(() => {
  //   axios.get(baseUrl + '/schedules/types').then(response => {
  //     setSchedules(response.data.data)
  //   }).catch(error => {
  //     setError(error)
  //   })
  // }, [schedules]);

  const [scheduleState, updateScheduleState] = useContext(ScheduleContext)

  const handleScheduleSelect = (scheduleType) => {
    updateScheduleState({
      type: ACTIONS.TOGGLE_SCHEDULE_TYPE,
      payload: {
        scheduleTypeId: scheduleType.id
      }
    })

    navigation.navigate('Schedule Days', {
      timetables: scheduleType.schedules
    });
  }
  
  const scheduleListBlock = schedules ? schedules.map(item => 
    <ListItem
      key={item.id} 
      list={item} 
      submit='object'
      // caption={connectInstance} 
      handleClick ={handleScheduleSelect}
    />
  ) : null

  console.log(schedules)

  return (
    <ScrollView>
      <View style={styles.mt1}>
        {error ? <NetworkError error={error.message}/> : scheduleListBlock}
      </View>
    </ScrollView>
  )
}

export default ScheduleListScreen