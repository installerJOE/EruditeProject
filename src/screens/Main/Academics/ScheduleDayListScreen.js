import React, { useState, useEffect } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import axios from 'axios'
// import { ScheduleDays } from '../../../contexts/ScheduleContext'
import { Timetable } from '../../../contexts/ScheduleContext'
import ListItem from '../../../components/Courses/ListItem'
import { styles } from '../../../assets/css/main'

const ScheduleDayListScreen = ({route, navigation}) => {
  
  const [error, setError] = useState(null);
  const [timetable, setTimetable] = useState([])

  const { id } = route.params;

  const baseUrl = 'https://erudite.igbolibrary.co/api'

  const token = '20|pjs3EKw0butGEUnY1CToEAuvLydFyD1VqTnNHtYT'
  const data = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }
  useEffect(() => {
    axios.get(`${baseUrl}/schedules/${id}/timetable`, data).then(response => {
      setTimetable(response.data.data)
    }).catch(error => {
      setError(error)
    })
  }, [timetable]);
  
  const handleScheduleSelect = (selectedDay) => {
    navigation.navigate('Schedule Content', {
      timetable: selectedDay,
      // scheduleType: id
    });
  }

  const scheduleTypesBlock = timetable.map(item => 
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
        {error ? <Text style={styles.textBlack}>
          {error.message}
        </Text> : scheduleTypesBlock}  
      </View>
    </ScrollView>
  )
}

export default ScheduleDayListScreen