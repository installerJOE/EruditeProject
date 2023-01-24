import React from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { styles, colors } from '../../../assets/css/main'
import ListItem from '../../../components/Courses/ListItem'
import LessonsList from '../../../contexts/LessonList'


const CourseOutlineScreen = ({navigation}) => {
  
  const handleLessonSelect = (id) => {
    navigation.navigate('Lesson Content')
  }

  const courseOutlineBlock = LessonsList.map(item => <ListItem
    key={item.id} list={item} handleClick ={handleLessonSelect}/>
  )

  return (
    <ScrollView>
      <View style={styles.mt1}>
        {courseOutlineBlock}
      </View>
    </ScrollView>
  )
}

export default CourseOutlineScreen