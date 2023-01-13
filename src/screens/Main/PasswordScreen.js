import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../../assets/css/main'

const PasswordScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={[styles.subHeader, styles.textBlack]}> 
          This is where Password Settings Come
        </Text>
      </View>
    </ScrollView>
  )
}

export default PasswordScreen