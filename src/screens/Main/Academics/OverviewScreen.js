import React from 'react'
import {StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
// import ProfileElement from '../../components/ProfileElement'
import ProfileElement from '../../../components/Main/ProfileElement'
import StudentData from '../../../contexts/StudentData'
import { settingsStyle } from '../../../assets/css/settings'
import { styles } from '../../../assets/css/main'


const Overview = () => {
  return (
    <ScrollView style={{padding:10}}>
      <View style={[settingsStyle.profileElementsBlock, styles.mt0]}>
        <ProfileElement header="Institution" body={StudentData.university}/>
        <ProfileElement header="Faculty" body={StudentData.faculty}/>
        <ProfileElement header="Course of Study" body={StudentData.department}/>
        <ProfileElement header="Current Session" body={'2022/2023'}/>
        <ProfileElement header="Current Semester" body={'First'}/>
        <ProfileElement header="Current Level" body={StudentData.current_level}/>
        <ProfileElement header="Total Courses" body={12}/>
        <ProfileElement header="Total Credits" body={58}/>
      </View>
    </ScrollView>
  )
}

export default Overview