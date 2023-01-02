import React, { useEffect, useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View} from 'react-native'

import {styles, colors} from '../../assets/css/main';
import { inPageStyles } from '../../assets/css/index';
import Navbar from '../../components/Navbar';

const HomeScreen = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(()=>{
    setTimeout(()=> {
      setIsLoaded(true);
    }, 5000)
  }, []);

  return (
    <ScrollView>
      <View style={[styles.listContainer, {backgroundColor: 'rgba(11,227,154,0.04)',}]}>
        <Text style={[styles.header, {color: 'green'}, styles.textCenter]}>
          Hi Joe, Good Morning
        </Text>

        <Text style={[styles.textDarkGrey, styles.paragraph, styles.textCenter]}>
        Did you know that you look very awesome today? :)
        </Text>
      </View>
    </ScrollView>
  );
};


export default HomeScreen;