import React, { useState } from 'react'
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import Layout from './Layout';
import {styles, colors} from '../../assets/css/main';



const ResetLinkSent = ({navigation}) => {
  const backgroundStyle = {
    backgroundColor: colors.green,
  };

  const [otpCode, setOtpCode] = useState('');

  const sendPasswordResetLink = () => {
    Alert.alert('Password has been resent successfully');
  }
  
  return (
    <Layout>
      <Text style={[styles.header, styles.textCenter, styles.textGreen, styles.mb1, {
        fontSize: 30
      }]}> 
        Password Reset Code Sent!
      </Text>
      
      <View style={[styles.fixToText]}>
        <Text style={[styles.paragraph, styles.mb1, {
          lineHeight: 24
        }]}> 
          Please enter the code sent to your email to proceed 
        </Text>
        <TextInput
          style={[styles.formControl, styles.textWhite]}
          onChangeText={(value) => setOtpCode(value)}
          keyboardType='number'
          value={otpCode}   
        />
      </View>
      
      <TouchableOpacity onPress={sendPasswordResetLink}>
        <Text style={[styles.paragraph, styles.textGreen, styles.textLeft, styles.textUnderlined]}> 
          Resend Code
        </Text>
      </TouchableOpacity>

      <View style={styles.sectionContainer}/>

      <View style={styles.mt2}>
         <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, {
            marginTop: 0, color: "#fff", fontSize: 20
          }]}> 
          Did you enter incorrect email?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
            marginTop: 0, color: "#fff", fontSize: 20
          }]}> 
            Re-enter Email
          </Text>
        </TouchableOpacity>
      </View>

    </Layout>
  )
}

export default ResetLinkSent