import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { colors, styles } from '../../../assets/css/main';

import ListItem from '../../../components/Courses/ListItem';
import DepartmentList from '../../../contexts/DepartmentList';


const DepartmentListScreen = ({ navigation }) => {
  const handleDepartmentSelection = (slug) => {
    navigation.navigate('Course Outline', {
        params: {slug: slug}
    })
  }

  const departmentListBlock = DepartmentList.map(dept => <ListItem 
    key={dept.id} list={dept} handleClick={handleDepartmentSelection}/>
  )
  
  return (
    <ScrollView>
      <View style={styles.mt1}>
        {departmentListBlock}
      </View>
    </ScrollView>
  )
}

export default DepartmentListScreen