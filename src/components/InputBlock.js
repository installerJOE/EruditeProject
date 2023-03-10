import React from 'react'
import {View, Text, TextInput} from 'react-native'
import { styles } from '../assets/css/main'
import { settingsStyle } from '../assets/css/settings'
import ErrorText from './ErrorText'
import MyAppText from './MyAppText'

const InputBlock = ({label, value, handleInputChange, backgroundColor, secureTextEntry, error}) => {
  return(
    <View style={[settingsStyle.profileElementContainer, {
        marginBottom: 0, 
        backgroundColor: backgroundColor,
        padding: 0,
      }]}>

      <MyAppText style={[settingsStyle.profileElementHeader]}>
        <Text style={styles.paragraph}>
          {label}
        </Text>
      </MyAppText>
      {error && <ErrorText value={error}/>}

      <TextInput
        style={[styles.formControl, styles.textBlack, styles.borderBlack, {marginTop: 10}]}
        onChangeText={(value) => handleInputChange(value)}
        secureTextEntry={secureTextEntry ?? true}
        value={value}
      />
    </View>
  )
}

export default InputBlock