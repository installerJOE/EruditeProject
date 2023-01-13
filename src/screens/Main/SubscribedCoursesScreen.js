import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../../assets/css/main'
import { inPageStyles } from '../../assets/css'
import SubscribedList from '../../contexts/SubscribedList'
import ListItem from '../../components/Courses/ListItem'

const SubscribedCoursesScreen = () => {
  const courseListBlock = SubscribedList.map(course => <ListItem key={course.id} list={course}/>)
  return (
    <ScrollView>
      <View style={styles.mt1}>
        {courseListBlock}
      </View>
    </ScrollView>
  )
}

export default SubscribedCoursesScreen