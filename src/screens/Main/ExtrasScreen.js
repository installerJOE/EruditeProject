import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';
import ListItem from '../../components/Courses/ListItem';
import MyAppText from '../../components/MyAppText';
import { ExtrasData } from '../../contexts/ExtrasData';

const ExtrasScreen = () => {
  const navigateToScreen = (id) => {
    Alert.alert('I am working and the id of the prize clicked is ' + id)
    // navigation.navigate('Welcome')
  }

  const extrasListBlock = ExtrasData.map(item => 
    <ListItem 
      key={item.id} 
      list={item} 
      handleClick={navigateToScreen}
    />
  )
  
  return (
    <ScrollView style={{paddingTop: 10}}>
      {extrasListBlock}
    </ScrollView>
  )
}

export default ExtrasScreen