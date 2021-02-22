import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from  './screens/signinscreen';
import SignUpScreen from './screens/signupscreen';

import * as firebase from 'firebase';

const Stack = createStackNavigator();

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

function App() {
  try {
    firebase.app();
  }
  catch(error) {
    firebase.initializeApp(firebaseConfig);
    console.log(error);
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log('We are authenticated now!');
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen 
          name="Sign In" 
          component={SignInScreen} 
          options={{ title: 'Sign In', headerTransparent: true } }
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUpScreen}
          options={{ title: 'Sign Up', headerTransparent: true } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;