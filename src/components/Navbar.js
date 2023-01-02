import React from 'react'
import {Text, View} from 'react-native'
import { styles } from '../assets/css/main'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navlist}>
        <Text>
          Home
        </Text>
      </View>
    </View>
  )
}

export default Navbar