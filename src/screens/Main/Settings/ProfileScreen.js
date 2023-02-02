import React from 'react'
import {StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { colors, styles } from '../../../assets/css/main';
import { settingsStyle } from '../../../assets/css/settings';
import UserData from '../../../contexts/UserData';
import noProfileImage from '../../../assets/images/noprofile.png'
import ProfileElement from '../../../components/Main/ProfileElement';


const ProfileScreen = () => {
  return (
    <ScrollView style={{padding:10}}>
      
      <View style={settingsStyle.profileElementsBlock}>
        <View style={{alignItems: 'center'}}>
          <Image  
            style={[settingsStyle.passport]}
            source={noProfileImage}
            alt='Profile Image'
          />
        </View>

        <View>
          <Text style={[styles.subHeader, styles.textBlack, styles.textBold, styles.textCenter, {color: colors.green}]}> 
            {UserData.lastname} {UserData.firstname}
          </Text>
          <Text style={[styles.paragraph, styles.textBlack, styles.textCenter, {marginTop: -10}]}> 
            Joined: {UserData.created_at}
          </Text>
        </View>
      </View>

      <View style={[settingsStyle.profileElementsBlock, styles.mt0]}>
        <ProfileElement header="Gender" body={UserData.gender}/>
        <ProfileElement header="Date of Birth" body={UserData.dateOfBirth}/>
        <ProfileElement header="Phone Number" body={UserData.phoneNumber}/>
        <ProfileElement header="Email Address" body={UserData.email}/>
        <ProfileElement header="Contact Address" body={UserData.address}/>
      </View>
      
    </ScrollView>
  )
}

export default ProfileScreen