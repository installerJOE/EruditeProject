import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Courses from './src/pages/Main/Courses';
import Home from './src/pages/Main/Home';
import Login from './src/pages/Registration/Login';
import Welcome from './src/pages/Welcome';
import Email from './src/pages/Registration/Email';
import Password from './src/pages/Registration/Password';
import Programme from './src/pages/Registration/Programme';
import StudyCourse from './src/pages/Registration/StudyCourse';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Navigator>
        {/* <SafeAreaView style={backgroundStyle}> */}
          <Stack.Screen name="Home" component={Welcome} options={{headerShown: false}}/>

          <Stack.Screen name="Programme" component={Programme} options={{headerShown: false}}/>

          <Stack.Screen name="StudyCourse" component={StudyCourse} options={{headerShown: false}}/>

          <Stack.Screen name="Email" component={Email} options={{headerShown: false}}/>
          
          <Stack.Screen name="Password" component={Password} options={{headerShown: false}}/>
          
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          
          {/* <Stack.Screen name="Verify Email" component={Password} options={{headerShown: false}}/> */}

          <Stack.Screen name="Index" component={Home} options={{ title: '' }}/>

          <Stack.Screen name="Courses" component={Courses} />
        {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
