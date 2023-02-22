import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../assets/css/main'

const ErrorText = ({value}) => {
  return (
    <View>
      <Text style={[styles.textRed, {fontSize: 14}]}>
        *{value}
      </Text>
    </View>
  )
}

export default ErrorText