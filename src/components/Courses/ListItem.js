import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native'
import { colors, styles } from '../../assets/css/main'

const ListItem = ({ navigation, list }) => {
  const handleCourseClick = () => {
    navigation.navigate('CourseProgramme')
  }

  return (
    <TouchableOpacity onPress={handleCourseClick}>
      <View style={styles.listContainer}>
        <Text style={styles.captionHeader}>
          {list.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem