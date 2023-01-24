import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native'

import { colors, styles } from '../../../assets/css/main';
import { settingsStyle } from '../../../assets/css/settings';
import UserData from '../../../contexts/UserData';


const ProfileScreen = () => {
  return (
    <ScrollView style={{padding:10}}>
      
      <View style={settingsStyle.profileElementsBlock}>
        <View>
          <Text style={[styles.subHeader, styles.textBlack]}> 
            Image comes here
          </Text>
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
        {/* <Text style={[styles.textBlack, styles.]}>
          Bio Data
        </Text> */}
        <ProfileElement header="Gender" body={UserData.gender}/>
        <ProfileElement header="Date of Birth" body={UserData.dateOfBirth}/>
        <ProfileElement header="Phone Number" body={UserData.phoneNumber}/>
        <ProfileElement header="Email Address" body={UserData.email}/>
        <ProfileElement header="Contact Address" body={UserData.address}/>
      </View>
      
    </ScrollView>
  )
}

const ProfileElement = ({header, body}) => {
  return(
    <View style={settingsStyle.profileElementContainer}>
      <Text style={[settingsStyle.profileElementHeader]}>
        {header}
      </Text>
      <Text style={[styles.subHeader, settingsStyle.profileElementBody]}>
        {body}
      </Text>
    </View>
  )
}

export default ProfileScreen