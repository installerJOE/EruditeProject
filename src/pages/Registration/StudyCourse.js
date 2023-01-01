import React, {useState} from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import studyCourses from './api/studyCourseList'
import Auth from '../Auth/Auth'
import { styles, colors } from '../../assets/css/main'

const StudyCourse = ({navigation}) => {
  const [selected, setSelected] = useState("");

  return (
    <Auth>
      <Text style={[styles.header, styles.textCenter, styles.textGreen, styles.mb1]}> 
        What course are you currently studying?
      </Text>

      <View style={styles.fixToText}>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={studyCourses} 
          save="key"
        />
      </View>
      
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Email')}>
          <Text style={[styles.btn, styles.btnGreenBg, styles.mt1]}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </Auth>
  )
}

export default StudyCourse