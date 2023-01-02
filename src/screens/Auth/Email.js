import React, { useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'
import Layout from './Layout';
import {styles} from '../../assets/css/main';

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');

  const proceedToPassword = () => {
    () => navigation.navigate('Password', {
      params: {email: email}
    });
  }

  return (
    <Layout>
        <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
          Create Account
        </Text>
        <View style={[styles.fixToText, styles.mt1]}>
          <Text style={styles.paragraph}> Email Address </Text>
          <TextInput
            style={[styles.formControl, styles.textWhite]}
            // placeholder="e.g. joemike@gmail.com"
            onChangeText={(value) => setEmail(value)}
            keyboardType='email-address'
            value={email}   
          />
        </View>

        <View>
          <TouchableOpacity onPress={proceedToPassword}>
            <Text style={[styles.btn, styles.btnGreenBg, styles.mb1]}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}/>

        <View>
          <Text style={[styles.paragraph, styles.mt1, styles.textWhite, styles.textCenter]}> 
            Already have an account yet?
          </Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
              marginTop: 0
            }]}> 
              Login Here 
            </Text>
          </TouchableOpacity>
        </View>

    </Layout>
  )
}
export default Email