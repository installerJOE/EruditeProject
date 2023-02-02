import React,{ useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from '../../../assets/css/main'
import { settingsStyle } from '../../../assets/css/settings'
import InputBlock from '../../../components/InputBlock'

const UpdatePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [pwdConfirm, setPwdConfirm] = useState('')

  const updatePassword = () => {
    // do something here
    Alert.alert('Password has been updated successfully')
  }

  return (
    <View style={[settingsStyle.profileElementContainer]}>
      <Text style={[styles.captionHeader, styles.textBlack, {paddingTop: 10, paddingLeft: 10}]}> 
        Password Settings
      </Text>    
          
      <View style={styles.mt1}>
        <InputBlock 
          label="Old Password"
          value={oldPassword}
          handleInputChange={setOldPassword}
        />

        <InputBlock 
          label="New Password"
          value={password}
          handleInputChange={setPassword}
        />

        <InputBlock 
          label="Password Confirmation"
          value={pwdConfirm}
          handleInputChange={setPwdConfirm}
        />

        <View>
          <TouchableOpacity onPress={updatePassword}>
            <Text style={[styles.btn, styles.btnGreenBg, styles.mb1, styles.textWhite, styles.textCenter, styles.paragraph]}>
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UpdatePasswordForm