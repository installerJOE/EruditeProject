import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';
import ListItem from '../../components/Courses/ListItem';
import MyAppText from '../../components/MyAppText';
import { AwardsData } from '../../contexts/AwardsData';

const AwardsScreen = () => {
  const handlePrizeClick = (id) => {
    Alert.alert('I am working and the id of the prize clicked is ' + id)
    // navigation.navigate('Welcome')
  }

  const awardListBlock = AwardsData.map(award => 
    <ListItem 
      key={award.id} 
      list={award} 
      caption={'Prize: ' + award.prize}
      handleClick={handlePrizeClick}
    />
  )
  
  return (
    <ScrollView style={{paddingTop: 10}}>
      <View>
        {awardListBlock}
      </View>
    </ScrollView>
  )
}

export default AwardsScreen