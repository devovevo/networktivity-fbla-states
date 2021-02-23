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

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function UserProfileScreen( {navigation} ) {
    const [_biography, _setBiography] = useState("");
    const [_profession, _setProfession] = useState("");
    const [_education, _setEducation] = useState("");
    const [_contactInfo, _setContactInfo] = useState("");

    const _currentUser = firebase.auth().currentUser;
    const [_displayName, _setDisplayName] = useState("");

    if (_currentUser != null)
    {
        firebase.firestore().collection("users").doc(_currentUser.displayName).get().then(function (docData) {
            var userData = docData.data();
            if (_displayName == "")
            {
                _setDisplayName(userData.fullName);
                _setBiography(userData.biography);
                _setProfession(userData.profession);
                _setEducation(userData.education);
                _setContactInfo(userData.contactInfo);
            }
        }).catch();
    }

    function _updateUserProfile() {
        if (_currentUser != null)
        {
            firebase.firestore().collection("users").doc(_currentUser.displayName).update({
                biography: _biography,
                profession: _profession,
                education: _education,
                contactInfo: _contactInfo,
            }).catch();
        }   
    }

    function _logOut() {
        if (_currentUser != null)
        {
            firebase.auth().signOut().catch(function(error) {
                console.log(error);
            });
        }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome, {_displayName}</Text>
    
          <StatusBar style="auto" />
          <Text style={styles.header}>Biography</Text>
          <View style={styles.inputViewBiography}>
            <TextInput
              style={styles.TextInput}
              placeholder="Tell us about yourself."
              placeholderTextColor="#003f5c"
              value={_biography}
              onEndEditing={_updateUserProfile}
              onChangeText={(_biography) => _setBiography(_biography)}
            />
          </View>
          <Text style={styles.header}>Profession</Text>
          <View style={styles.inputViewRegular}>
            <TextInput
              style={styles.TextInput}
              placeholder="What do you do?"
              placeholderTextColor="#003f5c"
              value={_profession}
              onEndEditing={_updateUserProfile}
              onChangeText={(_profession) => _setProfession(_profession)}
            />
          </View>
          <Text style={styles.header}>Education</Text>
          <View style={styles.inputViewRegular}>
            <TextInput
              style={styles.TextInput}
              placeholder="Where did you go to school?"
              placeholderTextColor="#003f5c"
              value={_education}
              onEndEditing={_updateUserProfile}
              onChangeText={(_education) => _setEducation(_education)}
            />
          </View>
          <Text style={styles.header}>Contact Info</Text>
          <View style={styles.inputViewRegular}>
            <TextInput
              style={styles.TextInput}
              placeholder="How can people reach you?"
              value={_contactInfo}
              placeholderTextColor="#003f5c"
              onEndEditing={_updateUserProfile}
              onChangeText={(_contactInfo) => _setContactInfo(_contactInfo)}
            />
          </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={_logOut}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  
    title: {
      textAlign: "center",
      marginTop: 60,
      fontSize: 50,
      height: 80,
      marginBottom: 20,
    },

    header: {
      marginStart: 35,
      fontSize: 40,
      height: 60,
      marginBottom: 20,
    },
  
    inputViewBiography: {
      backgroundColor: "#CBC0FF",
      marginStart: 35,
      width: "90%",
      height: 200,
      marginBottom: 20,
    },

    inputViewRegular: {
      backgroundColor: "#CBC0FF",
      marginStart: 35,
      width: "90%",
      height: 50,
      marginBottom: 20,
    },
  
    TextInput: {
      height: "100%",
      width: "100%",
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },

    logoutBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignSelf: "center",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#228B22",
        marginBottom: 100,
    },
});

export default UserProfileScreen;