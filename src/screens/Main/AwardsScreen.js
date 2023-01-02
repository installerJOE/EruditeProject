import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';
import ListItem from '../../components/Courses/ListItem';
import AwardsData from './api/AwardsData';

const AwardsScreen = () => {
  const awardListBlock = AwardsData.map(award => <ListItem key={award.id} list={award}/>)
  return (
    <ScrollView>
      <View>
      <Text style={[styles.subHeader, styles.textBlack]}> 
          Your Awards
        </Text>
      </View>
      <View>
        {awardListBlock}
      </View>
    </ScrollView>
  )
}

export default AwardsScreen