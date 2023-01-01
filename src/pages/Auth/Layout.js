import React from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles, colors} from '../../assets/css/main';

const Layout = (props) => {
  const backgroundStyle = {
    backgroundColor: colors.darkGreen,
  };

  return (
    <View style={[backgroundStyle, styles.centeredBlock]}>
      <View style={[styles.container, styles.pdHorizontal1]}>
        {props.children}
      </View>
    </View>
  )
}

export default Layout