import React, { useContext, useEffect, useMemo, useState } from 'react'
import {StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import ProfileElement from '../../../components/Main/ProfileElement'
import UserContext from '../../../contexts/UserContext'
import { settingsStyle } from '../../../assets/css/settings'
import { styles } from '../../../assets/css/main'

import axios from 'axios'
import ListItem from '../../../components/Courses/ListItem'
import { GlobalContext } from '../../../contexts/GlobalContext'


const baseUrl = "http://localhost:8000/api";

const Overview = () => {

  const [academics, setAcademics] = useContext(GlobalContext)
  const { university } = academics;

  return (
    <ScrollView style={{padding:10}}>
      <View style={[settingsStyle.profileElementsBlock, styles.mt0]}>
        <ProfileElement header="Institution" body={university.name}/>
        <ProfileElement header="Faculty" body={academics.faculty.name}/>
        <ProfileElement header="Course of Study" body={academics.department.name}/>
        <ProfileElement header="Current Session" body={university.current_session}/>
        <ProfileElement header="Current Semester" body={university.current_semester}/>
        <ProfileElement header="Current Level" body={academics.current_level}/>
        <ProfileElement header="Total Courses" body={12}/>
        <ProfileElement header="Total Credits" body={58}/>
      </View>
    </ScrollView>
  )
}

export default Overview