import React, { Component, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native'
import { Constants, AppLoading } from 'expo';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
  
 function UsersViewScreen({navigation}) {
     //This is the base format of each listing to be displayed. Essentially, it shows how a listing should look like
    const Item = ({ username, fullName}) => (
        <View style={styles.item}>
          <Text style={styles.title}>User: {fullName} ({username})</Text>
          <TouchableOpacity>
              <Text style={styles.forgot_button} onPress={() => {
                  navigation.navigate('View Profile', {
                      userId: username,
                  });
              }}>Visit Profile</Text>
          </TouchableOpacity>
        </View>
    );

    const [_users, _setUsers] = useState([]);
    const _currentUser = firebase.auth().currentUser;
    
    //again, error where info was gotten on user that didn't exist, fixed here
    if (_currentUser != null)
    {
        //gets 20 user documents from firestore, used to just show what users are available on the platform
        firebase.firestore().collection("users").limit(20).get().then(function(query) {
            var userDocs = [];
            query.forEach(function(doc) {
                var userData = doc.data();
                userDocs.push(userData);
                userDocs[userDocs.length - 1].username = doc.id;

                console.log(userDocs[userDocs.length - 1]);
            });

            if (userDocs.length != _users.length)
            {
                _setUsers(userDocs);
            }
        }).catch();
    }

    //tells the list renderer how it should display each listing, which we defined earlier with our item class
    const renderItem = ({ item }) => <Item username={item.username} fullName={item.fullName}/>;
  
    //actual view of the screen
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Users</Text>
        <FlatList data={_users} renderItem={renderItem} keyExtractor={item => item.username} />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: "#CBC0FF",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    header: {
      fontSize: 50,
      textAlign: "center",
      marginTop: 30,
      marginBottom: 30,
    },
    forgot_button: {
        marginTop: 20,
        height: 30,
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
    },
  });

export default UsersViewScreen;