import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native'
import { colors, styles } from '../../assets/css/main'

const ListItem = ({ list, caption, handleClick, roundCorner, submit }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(submit == 'object' ? list : list.id)}>
      <View style={[styles.listContainer, {borderRadius: roundCorner ? 5 : 0}]}>
        <Text style={[styles.paragraph, styles.textBlack]}>
          {('name' in list) ? list.name : ('value' in list ? list.value : list.title)}
        </Text>
        {caption && <Caption text={caption}/>}
      </View>
    </TouchableOpacity>
  )
}

const Caption = ({text}) => {
  return(
    <Text style={[styles.textOrange, {fontSize: 14}]}>
      {text}
    </Text>
  )
}

export default ListItem