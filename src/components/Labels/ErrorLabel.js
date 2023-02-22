import React from 'react'
import { View, Text } from 'react-native'
import { colors, styles } from '../../assets/css/main'

export default ErrorLabel = ({message}) => {
  return (
    <View style={{
        backgroundColor: colors.red,
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '100%'
    }}>
      <Text style={[styles.textWhite, {fontSize: 16}]}>
        {message}
      </Text>
    </View>
  )
}