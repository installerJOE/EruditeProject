import React from 'react'
import {Alert, Button, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import {styles, colors} from '../assets/css/main';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import backgroundImage from '../assets/images/welcome.jpg'


const Erudite = () => {
  return (
    <View style={[styles.centeredBlock]}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={[styles.screenImageStyle]}>
        <View style={[styles.container, {padding: 0}]}>
          <Text style={[styles.textCenter, {
              fontSize: 48, color: colors.white, backgroundColor: '#00000080', padding: 10, fontWeight: 'bold'
          }]}> 
            The Erudite Project
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Erudite