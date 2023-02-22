import React from 'react'
import {ScrollView,Text, View} from 'react-native'
import { styles } from '../../../assets/css/main'

export default  MyRecordings = () => {
  return (
    <ScrollView style={{padding:10}}>
      <View style={{backgroundColor: '#e8e8e8', paddingVertical: 15, paddingHorizontal:5}}>
        <View style={[{paddingHorizontal: 10, paddingBottom: 10}]}>
          <Text style={[styles.textBlack, styles.header]}>
            Coming soon!
          </Text>
        </View>
      </View>
    </ScrollView> 
  )
}