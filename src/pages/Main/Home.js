import React, { useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../assets/css/main';
import Header from '../../components/Header';

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 20
  };

  return (
    <SafeAreaView>
      <Header title="Home"/>
      <View style={backgroundStyle}>
        <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
          
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default Home;
