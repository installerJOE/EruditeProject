import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';

const ExtrasScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.subHeader, styles.textBlack]}> 
            Extras Come here
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ExtrasScreen