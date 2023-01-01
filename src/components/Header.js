import React from 'react'
import {styles} from '../assets/css/main';
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.headerBlock}>
        {title}
      </Text>
    </View>
  )
}

export default Header