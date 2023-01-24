import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native'
import { colors, styles } from '../../assets/css/main'

const ListItem = ({ list, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(('slug' in list) ? list.slug : list.id)}>
      <View style={styles.listContainer}>
        <Text style={[styles.paragraph, styles.textBlack]}>
          {('name' in list) ? list.name : list.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem