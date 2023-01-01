import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';
import Header from '../../components/Header';

const Courses = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header title="Courses"/>
      <View>
        <Text style={styles.paragraph}> 
          These are a list of the courses.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Courses