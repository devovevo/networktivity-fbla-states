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

function ViewProfileScreen( {route, navigation} ) {
    const { userId } = route.params;

    const [_profileName, _setProfileName] = useState("");
    const [_biography, _setBiography] = useState("");
    const [_profession, _setProfession] = useState("");
    const [_education, _setEducation] = useState("");
    const [_contactInfo, _setContactInfo] = useState("");

    const _currentUser = firebase.auth().currentUser;
    const [_displayName, _setDisplayName] = useState("");

    //returns all of the information about the selected profile from the firestore document
    firebase.firestore().collection("users").doc(userId).get().then(function(userDoc) {
        var userData = userDoc.data();
        
        _setProfileName(userData.fullName);
        _setBiography(userData.biography);
        _setProfession(userData.profession);
        _setEducation(userData.education);
        _setContactInfo(userData.contactInfo);
    });

    //returns view of the screen, HTML
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{_profileName} ({userId})</Text>
    
          <StatusBar style="auto" />
          <Text style={styles.header}>
            Biography: {_biography}{'\n'}
            Profession: {_profession}{'\n'}
            Education: {_education}{'\n'}
            Contact Info: {_contactInfo}{'\n'}
          </Text>
          
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
    },
});

export default ViewProfileScreen;