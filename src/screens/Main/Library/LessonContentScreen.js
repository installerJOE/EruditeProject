import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, styles } from '../../../assets/css/main';

import ListItem from '../../../components/Courses/ListItem';

import LessonContent from '../../../contexts/LessonContent';


const LessonContentScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  // const handleDepartmentSelection = (slug) => {
  //   navigation.navigate('Course Outline', {
  //       params: {slug: slug}
  //   })
  // }

//   const departmentListBlock = DepartmentList.map(dept => <ListItem 
//     key={dept.id} list={dept} handleClick={handleDepartmentSelection}/>
//   )
  const contentStyle = {
    padding: 20,
    paddingBottom: 140,
  }

  return (
    <ScrollView style={contentStyle}>
      <View>
        <Text style={[styles.xlHeader, styles.textBlack]}>
            {LessonContent.title}
        </Text>
      </View>

      <View style={[styles.mt1, styles.infoBox]}>
        <Text style={[styles.captionHeader, styles.textBlack, styles.textBold]}>
            Preview
        </Text>
        <Text style={[styles.paragraph, styles.textBlack]}>
            {LessonContent.preview}
        </Text>
      </View> 

      <View style={styles.mt1}>
        <View style={[styles.mt1, styles.infoBox]}>
            <Text style={[styles.captionHeader, styles.textBlack]}>
                Main Content
            </Text>
        </View>
        <Text style={[styles.paragraph, styles.textBlack, styles.lineHeight20]}>
            {LessonContent.body}
        </Text>
      </View> 
    </ScrollView>
  )
}

export default LessonContentScreen