import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import ListItem from '../../../components/Courses/ListItem'
import { ScheduleTypes } from '../../../contexts/ScheduleContext'
import { styles } from '../../../assets/css/main'
import { NetInfo, NetInfoStateType, useNetInfo } from '@react-native-community/netinfo'
import MyAppText from '../../../components/MyAppText'
import axios from 'axios'
import NetworkError from '../../../components/NetworkError'


const ScheduleListScreen = ({navigation}) => {
  
  const [connectInstance, setConnection] = useState('');
  const [error, setError] = useState(null);
  const [schedules, setSchedules] = useState([]);

  const baseUrl = 'https://erudite.igbolibrary.co/api'

  useEffect(() => {
    axios.get(baseUrl + '/schedules/types').then(response => {
      setSchedules(response.data.data)
    }).catch(error => {
      setError(error)
    })
  }, [schedules]);

  const handleScheduleSelect = (id) => {
    navigation.navigate('Schedule Days', {
        id: id
    });
  }
  
  const scheduleListBlock = schedules.map(item => 
    <ListItem
      key={item.id} 
      list={item} 
      // caption={connectInstance} 
      handleClick ={handleScheduleSelect}
    />
  )

  return (
    <ScrollView>
      <View style={styles.mt1}>
        {error ? <NetworkError error={error.message}/> : scheduleListBlock}
      </View>
    </ScrollView>
  )
}

export default ScheduleListScreen