import React, { useState } from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import Layout from './Layout';
import {styles} from '../../assets/css/main';


const Password = ({navigation, email}) => {

  const [password, setPassword] = useState('')

  const createAccount = () => {
    // do some validation
    const data = {
      email: email,
      password: password,
    }
    
    navigation.navigate('Index')
  }

  return (
    <Layout>
        <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
          Almost Done!
        </Text>
        <View style={[styles.fixToText, styles.mt1]}>
          <Text style={styles.paragraph}> 
            Enter your password
          </Text>
          <TextInput
            style={[styles.formControl, styles.textWhite]}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            value={password}   
          />
        </View>

        <View>
          <TouchableOpacity onPress={createAccount}>
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
          <TouchableOpacity onPress={() => navigation.navigate('')}>
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

export default Password