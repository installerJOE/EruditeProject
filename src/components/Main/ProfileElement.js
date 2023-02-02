import React from 'react'
import {Text, View} from 'react-native'
import { settingsStyle } from '../../assets/css/settings'
import { styles } from '../../assets/css/main'


const ProfileElement = ({header, body, style}) => {
  return (
    <View style={[settingsStyle.profileElementContainer, {backgroundColor: style ? style.backgroundColor : '#f2f2f2'}]}>
      <Text style={[settingsStyle.profileElementHeader]}>
        {header}
      </Text>
      <Text style={[styles.subHeader, settingsStyle.profileElementBody]}>
        {body}
      </Text>
    </View>
  )
}

export default ProfileElement