import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Google from 'expo-google-app-auth';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

import firebase from "firebase/app";
import "firebase/auth";

//Screen to sign in
function SignInScreen({navigation}) {
    const [_email, _setEmail] = useState("");
    const [_password, _setPassword] = useState("");

    //attempts to sign user in
    function _attemptSignUserIn() {
        firebase.auth().signInWithEmailAndPassword(_email, _password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                Alert.alert('Login Failed', 'Wrong password.');
            } else {
                Alert.alert('Login Failed', errorMessage);
            }
            console.log(error);
        });
    }

    //go to sign up page
    function _goToSignUp() {
        navigation.navigate("Sign Up");
    }

    //send password reset email
    function _resetPassword() {
      if (_email.length > 0)
      {
        firebase.auth().sendPasswordResetEmail(_email);
        Alert.alert("Password reset", "An email has been sent to the provided email on how to reset your password.");
      }
      else
      {
        Alert.alert("Password reset", "Please enter an email in the email entry so that we can send you a password reset email.");
      }
    }

    //attempt to sign in with Google account -- VERY BUGGY
    //TODO -- figure out how to make this feature more reliable
    async function _signInWithGoogleAsync() {
      try {
        const result = await Google.logInAsync({
          androidClientId: "516883900845-jfbmr348sq6ca81dlljrru7fqtct7s4i.apps.googleusercontent.com",
          iosClientId: "516883900845-0q282hmcuqprkh3008kuqhnv3o38reb4.apps.googleusercontent.com",
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          firebase.auth().signInWithCredential(result);
        }
      } catch (e) {
        return { error: true };
      }
    }
  
    //This is the actual view of the page
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/networktivityicon.png")} />
        <Text style={styles.title} >Networktivity</Text>
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(_email) => _setEmail(_email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(_password) => _setPassword(_password)}
          />
        </View>
  
        <TouchableOpacity onPress={_resetPassword}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginBtn} onPress={_attemptSignUserIn} >
          <Text>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleBtn} onPress={_signInWithGoogleAsync} >
          <Text>Login with Google?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={_goToSignUp}>
          <Text style={styles.signup_button}>No account? Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    image: {
      marginTop: 40,  
      height: 300,
      width: 300,
      marginBottom: 10,
    },
  
    title: {
      fontSize: 50,
      height: 120,
      marginBottom: 40,
    },
  
    inputView: {
      backgroundColor: "#CBC0FF",
      borderRadius: 30,
      width: "70%",
      height: 60,
      marginBottom: 30,
  
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      width: "100%",
      textAlign: "center",
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#228B22",
      marginBottom: 10,
    },
  
    signup_button: {
      height: 30,
      fontWeight: "bold",
    },

    googleBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 50,
    }
  });

  export default SignInScreen;