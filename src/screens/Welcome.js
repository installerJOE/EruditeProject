import React from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import {styles, colors} from '../assets/css/main';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Welcome = ({navigation}) => {
  const backgroundStyle = {
    backgroundColor: colors.green,
  };

  return (
    <View style={[backgroundStyle, styles.centeredBlock]}>
      <View style={[styles.container, styles.pdHorizontal1]}>
        <Text style={[styles.header, styles.textCenter, styles.textGreen, styles.mb1, {
            fontSize: 48, color: colors.white
        }]}> 
          Welcome to Erudite!
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Programme')}>
        <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
          marginTop: 0, color: "#fff", fontSize: 20
        }]}> 
          Get Started
        </Text>
      </TouchableOpacity>

      <View style={styles.sectionContainer}/>

      <View style={styles.mt2}>
         <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, {
            marginTop: 0, color: "#fff", fontSize: 20
          }]}> 
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
            marginTop: 0, color: "#fff", fontSize: 20
          }]}> 
            Login Here
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Welcome