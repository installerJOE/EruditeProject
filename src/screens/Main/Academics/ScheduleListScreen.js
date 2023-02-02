import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import ListItem from '../../../components/Courses/ListItem'
import { ScheduleTypes } from '../../../contexts/ScheduleContext'
import { styles } from '../../../assets/css/main'
import { NetInfo, NetInfoStateType, useNetInfo } from '@react-native-community/netinfo'
import MyAppText from '../../../components/MyAppText'


const ScheduleListScreen = ({navigation}) => {
  
  const [connectInstance, setConnection] = useState('');

  const handleScheduleSelect = (id) => {
    navigation.navigate('Schedule Days', {
        id: id
    });
  }

  useEffect(() => {
    fetch().then(networkState => {
      setConnection(networkState.type)
    })
  }, [])
  
  const scheduleListBlock = ScheduleTypes.map(item => <ListItem
    key={item.id} list={item} caption={connectInstance} handleClick ={handleScheduleSelect}/>
  )

  return (
    <ScrollView>
      {/* <MyAppText>
        <Text> {connectInstance} </Text>
      </MyAppText> */}
      <View style={styles.mt1}>
        {scheduleListBlock}
      </View>
    </ScrollView>
  )
}

export default ScheduleListScreen