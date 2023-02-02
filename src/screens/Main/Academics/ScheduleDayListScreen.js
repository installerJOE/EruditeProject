import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { ScheduleDays } from '../../../contexts/ScheduleContext'
import ListItem from '../../../components/Courses/ListItem'
import { styles } from '../../../assets/css/main'

const ScheduleDayListScreen = ({route, navigation}) => {
  
  const { id } = route.params;
  
  const handleScheduleSelect = (dayId) => {
    navigation.navigate('Schedule Content', {
      id: dayId,
      scheduleType: id
    });
  }
      
  const scheduleTypesBlock = ScheduleDays.map(item => <ListItem
    key={item.id} list={item} handleClick ={handleScheduleSelect}/>
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