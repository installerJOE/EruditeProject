import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { styles } from '../assets/css/main'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navlist}>
        Home
      </Text>
    </View>
  )
}

export default Navbar