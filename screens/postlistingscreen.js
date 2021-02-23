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

function PostListingScreen( {navigation} ) {
    const [_title, _setTitle] = useState("");
    const [_description, _setDescription] = useState("");

    const _currentUser = firebase.auth().currentUser;

    function _postListing() {
        if (_currentUser != null)
        {
            firebase.firestore().collection("listings").add({
                title: _title,
                description: _description,
                owner: _currentUser.displayName,
            }).then(function(docRef) {
                firebase.firestore().collection("users").doc(_currentUser.displayName).update({
                    listings: firebase.firestore.FieldValue.arrayUnion(docRef.id),
                }).catch();
            }).catch();
        }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Make Post</Text>
    
          <StatusBar style="auto" />
          <Text style={styles.header}>Title</Text>
          <View style={styles.inputViewRegular}>
            <TextInput
              style={styles.TextInput}
              placeholder="What should people see?"
              placeholderTextColor="#003f5c"
              onChangeText={(_title) => _setTitle(_title)}
            />
          </View>
          <Text style={styles.header}>Description</Text>
          <View style={styles.inputViewDescription}>
            <TextInput
              style={styles.TextInput}
              placeholder="Write what you want to say here."
              placeholderTextColor="#003f5c"
              onChangeText={(_description) => _setDescription(_description)}
            />
          </View>
          <TouchableOpacity style={styles.logoutBtn} onPress={_postListing}>
                <Text>POST</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
  
    title: {
      textAlign: "center",
      fontSize: 50,
      height: 80,
      marginBottom: 40,
    },

    header: {
      marginStart: 35,
      fontSize: 40,
      height: 60,
      marginBottom: 20,
    },
  
    inputViewDescription: {
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
      marginBottom: 60,
    },
  
    TextInput: {
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },

    logoutBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignSelf: "center",
        marginTop: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#228B22",
    },
});

export default PostListingScreen;