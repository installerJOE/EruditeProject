import React from 'react'
import {StyleSheet, SafeAreaView, Image, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { colors, styles } from '../../../assets/css/main';
import { settingsStyle } from '../../../assets/css/settings';
import UserContext from '../../../contexts/UserContext';
import noProfileImage from '../../../assets/images/noprofile.png'
import ProfileElement from '../../../components/Main/ProfileElement';


const ProfileScreen = () => {
  const { email, firstname, lastname, phone_number, gender, profile_image, created_at } = UserContext;

  return (
    <ScrollView style={{padding:10}}>
      
      <View style={settingsStyle.profileElementsBlock}>
        <View style={{alignItems: 'center'}}>
          <Image  
            style={[settingsStyle.passport]}
            source={profile_image ?? noProfileImage}
            alt='Profile Image'
          />
        </View>

        <View>
          <Text style={[styles.subHeader, styles.textBlack, styles.textBold, styles.textCenter, {color: colors.green}]}> 
            {lastname} {firstname}
          </Text>
          <Text style={[styles.paragraph, styles.textBlack, styles.textCenter, {marginTop: -10}]}> 
            Joined: {created_at}
          </Text>
        </View>
      </View>

      <View style={[settingsStyle.profileElementsBlock, styles.mt0]}>
        <ProfileElement header="Email Address" body={email ?? 'N/A'}/>
        <ProfileElement header="Gender" body={gender ?? 'N/A'}/>
        <ProfileElement header="Phone Number" body={phone_number ?? 'N/A'}/>
      </View>
      
    </ScrollView>
  )
}

export default ProfileScreen