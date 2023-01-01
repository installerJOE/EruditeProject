import React, { useEffect, useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View} from 'react-native'

import {styles, colors} from '../../assets/css/main';
import Header from '../../components/Header';

const Index = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundStyle = {
    backgroundColor: colors.darkGreen,
  };

  useEffect(()=>{
    setTimeout(()=> {
      setIsLoaded(true);
    }, 5000)
  }, []);



  return (
    <SafeAreaView>
      <Header title="Home"/>
      <View style={backgroundStyle}>
        <Text style={[styles.header, styles.textCenter, styles.textGreen]}> 
          Welcome back kid    
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default Index;
