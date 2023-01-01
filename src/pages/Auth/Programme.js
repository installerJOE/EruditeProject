import React, {useState} from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import studyProgrammes from './api/studyProgrammeList'
import Layout from './Layout'
import { styles, colors } from '../../assets/css/main'

const Programme = ({navigation}) => {
  const [selected, setSelected] = useState("");

  return (
    <Layout>
      <Text style={[styles.header, styles.textCenter, styles.textGreen, styles.mb1]}> 
        What degree are you aiming for?
      </Text>

      <View style={styles.fixToText}>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={studyProgrammes} 
          save="key"
        />
      </View>
      
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('StudyCourse')}>
          <Text style={[styles.btn, styles.btnGreenBg, styles.mt1]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

export default Programme