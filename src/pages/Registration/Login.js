import React, { useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import Auth from '../Auth/Auth';
import { styles } from '../../assets/css/main';


const Login = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    Alert.alert('logged in');
    navigation.navigate('Index')
  }

  return (
    <Auth>
      <Text style={[styles.header, styles.textCenter, styles.textGreen, styles.mb1]}> 
        Welcome Back!
      </Text>

      <View style={styles.fixToText}>
        <Text style={[styles.paragraph, styles.mb0, styles.textWhite]}> 
          Email Address
        </Text>
        <TextInput
          style={[styles.formControl, styles.textWhite]}
          // placeholder="e.g. joemike@gmail.com"
          onChangeText={(value) => setEmail(value)}
          keyboardType='email-address'
          value={email}   
        />

        <Text style={[styles.paragraph, styles.mb0, styles.textWhite]}> 
          Password
        </Text>
        <TextInput
          style={[styles.formControl, styles.textWhite]}
          // placeholder="e.g. joemike@gmail.com"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />

        <TouchableOpacity onPress={loginUser}>
          <Text style={[styles.btn, styles.btnGreenBg]}>
            Login Now
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}/>

      <View>
        <Text style={[styles.paragraph, styles.mt1, styles.textWhite, styles.textCenter]}> 
          Did you forget your password?
        </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
            marginTop: 0
          }]}> 
            Yeah, that's right
          </Text>
        </TouchableOpacity>
      </View>
    </Auth>
  )
}


export default Login