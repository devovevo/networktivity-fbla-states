import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SignInScreen from  './screens/signinscreen';
import SignUpScreen from './screens/signupscreen';
import BottomTabNavigationScreen from './screens/bottomtabnavigationscreen';
import ViewProfileScreen from './screens/viewprofilescreen';
import UserProfileScreen from './screens/userprofilescreen';

import firebase from "firebase/app";
import "firebase/auth";

import { AppRegistry } from "react-native";
import userprofilescreen from "./screens/userprofilescreen";

const Stack = createStackNavigator();

//info for initialization of firebase API with expo
const firebaseConfig = {
  apiKey: "AIzaSyB7q02BPW3_dTCd-WE24ZTTaM0G479GtsA",
  authDomain: "networktivity.firebaseapp.com",
  databaseURL: "https://networktivity.firebaseio.com",
  projectId: "networktivity",
  storageBucket: "networktivity.appspot.com",
  messagingSenderId: "516883900845",
  appId: "1:516883900845:web:a4f5cf1253574e2fa45924",
  measurementId: "G-NNMDQM32TT"
};

//this way I can navigate pages without needing a navigation prop
const navigationRef = React.createRef();

const Networktivity = () => {
  try {
    firebase.app();
  }
  catch(error) {
    firebase.initializeApp(firebaseConfig);
    console.log(error);
  }

  //when user signs in, redirect them to the main screen
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      navigationRef.current.navigate("Tab Navigation");
    }
    else
    {
      navigationRef.current.navigate("Sign In");
    }
  });
  
  //actual view of the page, pretty much just central navigation route
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Tab Navigation">
        <Stack.Screen 
          name="Sign In" 
          component={SignInScreen} 
          options={{ title: 'Sign In', headerShown: false } }
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUpScreen}
          options={{ title: 'Sign Up', headerShown: false } }
        />
        <Stack.Screen 
          name="Tab Navigation" 
          component={BottomTabNavigationScreen}
          options={{ title: '', headerTransparent: true, headerLeft: null } }
        />
        <Stack.Screen 
          name="View Profile" 
          component={UserProfileScreen}
          options={{ title: '', headerTransparent: true } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Networktivity;