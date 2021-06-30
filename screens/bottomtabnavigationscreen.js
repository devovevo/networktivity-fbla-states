import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from '@draftbit/ui';

import firebase from "firebase/app";
import "firebase/auth";

import UserProfileScreen from './userprofilescreen';
import PostListingScreen from './postlistingscreen';
import ListingsViewScreen from './listingsviewscreen';
import UsersViewScreen from './userviewscreen';

function BottomTabNavigationScreen() {
    //This is the tab at the bottom used to navigate the main screen
    const Tab = createMaterialBottomTabNavigator();

    //this returns the actual view of the webpage, html
    return (
        <Tab.Navigator
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'aliceblue' }}
        >
            <Tab.Screen
                name="Users"
                component={UsersViewScreen}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="community" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Listings"
                component={ListingsViewScreen}
                options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostListingScreen}
                options={{
                tabBarLabel: 'Post',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clipboard-plus" color={color} size={26} />
                ),
                }}
            />
          <Tab.Screen
                name="Profile"
                component={UserProfileScreen}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
                }}
            />
        </Tab.Navigator>
      );
}   

export default BottomTabNavigationScreen;