import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.subHeader, styles.textBlack]}> 
          All Profile Settings Enter Here
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen