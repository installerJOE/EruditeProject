import React from 'react'
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import Layout from './Layout';
import {styles} from '../../assets/css/main';

const ResetPassword = () => {
  const [password, setPassword] = useState('')

  const resetPassword = () => {
    Alert.alert('Password has been reset successfully');
    setTimeout(()=> {
      navigation.navigate('Login')
    }, 5000);
  }

  return (
    <Layout>
      <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
        Almost Done!
      </Text>
      <View style={[styles.fixToText, styles.mt1]}>
        <Text style={styles.paragraph}>
          Enter new password
        </Text>
        <TextInput 
          style={[styles.formControl, styles.textWhite]} onChangeText={(value) => setPassword(value)}
          keyboardType='password'
          value={password}   
        />
      </View>

      <View style={[styles.fixToText, styles.mt1]}>
        <Text style={styles.paragraph}>
          Re-Enter password
        </Text>
        <TextInput 
          style={[styles.formControl, styles.textWhite]} onChangeText={(value) => setPassword(value)}
          keyboardType='password'
          value={password}   
        />
      </View>

      <View>
        <TouchableOpacity onPress={resetPassword}>
          <Text style={[styles.btn, styles.btnGreenBg, styles.mb1]}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.sectionContainer}/>
      
      <View>
        <Text style={[styles.paragraph, styles.mt1, styles.textWhite, styles.textCenter]}> 
          Already have an account yet?
        </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text 
            style={[styles.paragraph, styles.textGreen, styles.textCenter, styles.textUnderlined, {
              marginTop: 0
            }]}> 
            Login Here 
          </Text>
        </TouchableOpacity>
      </View>

    </Layout>
  )
}

export default ResetPassword