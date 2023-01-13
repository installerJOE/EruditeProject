import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { styles, colors } from '../../../assets/css/main'
import { inPageStyles } from '../../../assets/css'

const SingleCourseScreen = ({ course }) => {
  return (
    <ScrollView>
      <View style={inPageStyles.container}>
        <Text style={[styles.subHeader, styles.textBlack]}> 
          {course.title}
        </Text>
      </View>
      <View>
        {course.description}
      </View>
    </ScrollView>
  )
}

export default SingleCourseScreen