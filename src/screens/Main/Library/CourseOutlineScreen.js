import React, { useContext } from 'react'
import {Alert, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import { styles, colors } from '../../../assets/css/main'
import ListItem from '../../../components/Courses/ListItem'
import StudyCourseContext from '../../../contexts/CourseContext'


const CourseOutlineScreen = ({navigation}) => {
  const courseOutlineList = useContext(StudyCourseContext)

  const handleLessonSelect = (id) => {
    navigation.navigate('Lesson Content')
  }

  const newCourseList = courseOutlineList.filter(faculty => faculty.slug == slug)

  const courseOutlineBlock = courseOutlineList.map(item => <ListItem
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