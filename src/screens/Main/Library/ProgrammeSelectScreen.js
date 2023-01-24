import React, { useState } from 'react'
import {Alert, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { styles, colors } from '../../../assets/css/main'
import studyProgrammes from '../../Auth/api/studyProgrammeList'
import { SelectList } from 'react-native-dropdown-select-list'



const ProgrammeSelectScreen = ({navigation}) => {
  const [selected, setSelected] = useState('');

  const saveSelectedDegree = () => {
    // save the selected degree 
    navigation.navigate('Departments', {
      params: {course: selected}
    })
  }

  return (
    <SafeAreaView style={[styles.centeredBlock, {padding: 20}]}>
      <View style={[styles.whiteBackground, {padding: 20, paddingBottom: 30}]}>
        <Text style={[styles.textBlack, styles.subHeader, styles.textCenter, {lineHeight: 35}]}> 
          What Degree are you interested in learning about?
        </Text>

        <View>
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={studyProgrammes} 
            inputStyles={styles.textBlack}
            dropdownTextStyles={styles.textBlack}
            save="key"
          />
        </View>

        <View>
          <TouchableOpacity 
            onPress={() => saveSelectedDegree()} 
            style={[styles.btn, styles.btnGreenBg, styles.mt1]}
            activeOpacity={0.8}
          >
            <Text style={[styles.btnText, styles.btnGreenBgText]}>
              Proceed to Course
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProgrammeSelectScreen