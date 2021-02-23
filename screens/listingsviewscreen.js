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
  
 function ListingsViewScreen({navigation}) {
    //viewmodel defining what each listing should look like
    const Item = ({ owner, fullName, title, description}) => (
        <View style={styles.item}>
          <Text style={styles.title}>Owner: {fullName} ({owner})</Text>
          <Text style={styles.title}>Title: {title}</Text>
          <Text style={styles.title}>Description: {description}</Text>
          <TouchableOpacity>
              <Text style={styles.forgot_button} onPress={() => {
                  navigation.navigate('View Profile', {
                      userId: owner,
                  });
              }}>Visit Profile</Text>
          </TouchableOpacity>
        </View>
    );

    const [_listings, _setListings] = useState([]);
    const _currentUser = firebase.auth().currentUser;
    
    //again, error where undefined user would be accessed, fixed here
    if (_currentUser != null)
    {
        //gets 20 listings from firestore as long as they don't belong to the current user
        firebase.firestore().collection("listings").where("owner", "!=", _currentUser.displayName).limit(20).get().then(function(query) {
            var listingDocs = [];
            query.forEach(function(doc) {
                var listingData = doc.data();
                listingDocs.push(listingData);
                listingDocs[listingDocs.length - 1].id = doc.id;
                firebase.firestore().collection("users").doc(listingData.owner).get().then(function(ownerDoc) {
                    var ownerData = ownerDoc.data();
                    listingDocs[listingDocs.length - 1].fullName = ownerData.fullName;

                    if (listingDocs.length != _listings.length) {
                        _setListings(listingDocs);
                    }
                });
            });
        }).catch();
    }

    //defines how each item should be rendered, using viewmodel defined earlier
    const renderItem = ({ item }) => <Item title={item.title} description={item.description} owner={item.owner} fullName={item.fullName}/>;
  
    //returns actual view of screen
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Listings</Text>
        <FlatList data={_listings} renderItem={renderItem} keyExtractor={item => item.id} />
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

export default ListingsViewScreen;