import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { colors, styles } from '../../assets/css/main'

const ListItem = ({ list }) => {
  
  return (
    <View style={styles.listContainer}>
      <Text style={styles.captionHeader}>
        {list.title}
      </Text>
    </View>
  )
}

export default ListItem