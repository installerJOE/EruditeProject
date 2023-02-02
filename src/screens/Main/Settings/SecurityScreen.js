import React from 'react'
import { ScrollView, View } from 'react-native'
import { settingsStyle } from '../../../assets/css/settings'
import UpdatePasswordForm from './UpdatePasswordForm'

const SecurityScreen = () => {
  

  return (
    <ScrollView style={{padding:10}}>
      <View style={settingsStyle.profileElementsBlock}>     
        <UpdatePasswordForm/>
      </View>
    </ScrollView>
  )
}

export default SecurityScreen