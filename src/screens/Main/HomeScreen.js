import React, { useEffect, useState } from 'react'
import {Alert, Button, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View} from 'react-native'

import {styles, colors} from '../../assets/css/main';
import { inPageStyles } from '../../assets/css/index';
import Navbar from '../../components/Navbar';
import ListItem from '../../components/Courses/ListItem';
import Erudite from '../Erudite';
import AppModal from '../../components/AppModal';

const HomeScreen = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  // const [showModal, setShowModal] = useState(false);
  
  useEffect(()=>{
    setTimeout(()=> {
      setIsLoaded(true);
    }, 4000)
  }, []);

  const handleItemClick = () => {
    Alert.alert('I am working');
  }

  return (
    isLoaded ? <Erudite/> :
    <ScrollView>
      <View style={[styles.listContainer, {backgroundColor: '#fff', marginHorizontal:0, marginBottom:0}]}>
        <Text style={[styles.header, {color: 'green'}, styles.textCenter]}>
          Hi Joe, Good Morning
        </Text>

        <Text style={[styles.textDarkGrey, styles.paragraph, styles.textCenter]}>
          Did you know that you look very awesome today? :)
        </Text>
      </View>

      <View style={{backgroundColor: '#f4f4f4', paddingVertical: 15, paddingHorizontal:5}}>
        <View style={[{paddingHorizontal: 10, paddingBottom: 10}]}>
          <Text style={[styles.textOrange, styles.header, styles.textItalic]}>
            What's New?
          </Text>
        </View>
        <ListItem roundCorner={true} list={{id: 1, title: 'A Regular Topic'}} handleClick={handleItemClick}/>
      </View>

      <View style={{backgroundColor: '#e8e8e8', paddingVertical: 15, paddingHorizontal:5}}>
        <View style={[{paddingHorizontal: 10, paddingBottom: 10}]}>
          <Text style={[styles.textGreen, styles.header, styles.textItalic]}>
            My Recordings?
          </Text>
        </View>
        <ListItem roundCorner={true} list={{id: 1, title: 'Title of Record Comes Here'}} handleClick={handleItemClick}/>
      </View>


    </ScrollView>
  );
};


export default HomeScreen;