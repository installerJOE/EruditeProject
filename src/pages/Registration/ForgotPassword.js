import React, { useState } from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import Auth from '../Auth/Auth';
import {styles} from '../../assets/css/main';

const ForgotPassword = ({navigation}) => {

  const [email, setEmail] = useState('');
 
  const sendPasswordResetLink = () => {
    navigation.navigate('PasswordResetLinkSent')
  }

  return (
    <Auth>
        <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
          Forgot Password?
        </Text>
        <View style={[styles.fixToText, styles.mt1]}>
          <Text style={styles.paragraph}> 
            Enter your email address 
          </Text>
          <TextInput
            style={[styles.formControl, styles.textWhite]}
            // placeholder="e.g. joemike@gmail.com"
            onChangeText={(value) => setEmail(value)}
            keyboardType='email-address'
            value={email}   
          />
        </View>

        <View>
          <TouchableOpacity onPress={sendPasswordResetLink}>
            <Text style={[styles.btn, styles.btnGreenBg, styles.mb1]}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}/>

        <View>
          <Text style={[styles.paragraph, styles.mt1, styles.textWhite, styles.textCenter]}> 
            Do you remember it now?
          </Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
              marginTop: 0
            }]}> 
              Login Here
            </Text>
          </TouchableOpacity>
        </View>

    </Auth>
  )
}

export default ForgotPassword