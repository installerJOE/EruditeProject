import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../assets/css/main'
import MyAppText from './MyAppText'

const NetworkError = ({error}) => {
  return (
    <View style={styles.centeredBlock}>
        <MyAppText>
            <Text style={styles.captionHeader}>
            Oops! {error}
            </Text>
        </MyAppText>
    </View>
  )
}

export default NetworkError