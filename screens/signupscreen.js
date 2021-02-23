import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Image
} from 'react-native'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function SignUpScreen() {
    const [_email, _setEmail] = useState("");
    const [_password, _setPassword] = useState("");
    const [_username, _setUsername] = useState("");
    const [_full_name, _setFullName] = useState("");
    
    const [_usernameEntryColor, _setUsernameEntryColor] = useState("#CBC0FF");
    const [_signUpDisabled, _setSignUpDisabled] = useState(true);

    function _attemptCreateUserAccount() {

      if (!_checkUsernameExists(_username))
      {
        firebase.auth().createUserWithEmailAndPassword(_email, _password).then(function(userCredential) {
            userCredential.user.updateProfile({
                displayName: _username,
            });
            firebase.firestore().collection("users").doc(_username).set({
              fullName: _full_name,
            });
            Alert.alert('Sign Up Successful!', 'Welcome to Networktivity!');
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              Alert.alert('Sign Up Failed', 'Wrong password.');
            } else {
              Alert.alert('Sign Up Failed', errorMessage);
            }
            console.log(error);
        });
      }
      else
      {
        Alert.alert('Sign Up Failed', "Username already taken.");
      }
    }

    function _checkUsernameExists(name) {
      if (name.length > 0)
      {
        firebase.firestore().collection("users").doc(name).get().then(function(doc) {
          if (doc.exists) {
            _setSignUpDisabled(true);
            _setUsernameEntryColor("#FFC0CB");

            return true;
          }
          else
          {
            _setSignUpDisabled(false);
            _setUsernameEntryColor("#CBC0FF");

            return false;
          }
        }).catch();

        return false;
      }
    }
 
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/networktivityicon.png")} />
        <Text style={styles.title}>Networktivity</Text>

        <TextInput
          style={styles.input}
          placeholder='Full Name'
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(_full_name) => _setFullName(_full_name)}
        />
        <TextInput
          style={styles.username}
          backgroundColor={_usernameEntryColor}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(_username) => {
              _setUsername(_username);
              _checkUsernameExists(_username);
            }
          }
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(_password) => _setPassword(_password)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(_email) => _setEmail(_email)}
        />
        <TouchableOpacity style={styles.signup_button} disabled={_signUpDisabled} onPress={_attemptCreateUserAccount}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#CBC0FF",
    borderRadius: 30,
    width: "70%",
    height: 60,
    marginBottom: 40,
    textAlign: "center",
  
    alignItems: "center",
  },
  username: {
    borderRadius: 30,
    width: "70%",
    height: 60,
    marginBottom: 40,
    textAlign: "center",
  
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 80,
    height: 150,
    width: 150,
    marginBottom: 10,
  },

  title: {
    fontSize: 50,
    height: 120,
    marginBottom: 30,
  },

  signup_button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#228B22",
    marginBottom: 100,
  },
})

export default SignUpScreen;