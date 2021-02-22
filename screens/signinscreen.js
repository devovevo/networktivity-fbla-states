import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as firebase from 'firebase';

function SignInScreen({navigation}) {
    const [_email, _setEmail] = useState("");
    const [_password, _setPassword] = useState("");

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

    function _goToSignUp() {
        navigation.navigate("Sign Up");
    }
  
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
  
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginBtn} onPress={_attemptSignUserIn} >
          <Text>LOGIN</Text>
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
      marginBottom: 100,
    },
  
    signup_button: {
      height: 30,
      fontWeight: "bold",
    }
  });

  export default SignInScreen;