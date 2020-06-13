
  
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Alert,
  DeviceEventEmitter,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Mainz from './Mainz'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Button, ThemeProvider, Image, Input, Overlay, ListItem , Header} from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import ValidationComponent from 'react-native-form-validator/index';
import Snackbar from 'react-native-snackbar';
import Picker from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
var PushNotification = require("react-native-push-notification");
import BackgroundFetch from "react-native-background-fetch";
import OTPTextView from 'react-native-otp-textinput';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useTheme,
  Avatar,
  Title,
FAB,
Appbar,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Card,
  TouchableRipple,
  Switch
} from 'react-native-paper';



export default function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' , justifyContent: 'center', alignSelf: "center", alignItems: "center" ,  padding: 5, backgroundColor: "white", elevation: 2, shadowOpacity: 2}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
           
          const isFocused = state.index === index;
   
   const icon = options.tabBarIcon === undefined ? null : options.tabBarIcon

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              params: {'screen' : route.name}
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const color =  isFocused ? '#007700' : '#555' ;
         const iconSize=  (Platform.OS === 'ios') ? 30 : 24;
      if (index > 2) return null;
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
               
              onLongPress={onLongPress}
              style={{ flexDirection:"row", flex: 1 , justifyContent:"center", padding: 5,  alignContent: "center", alignItems: "center"}}
            >
              <View style={{ color: color , flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            
              <Icon name={icon} size={iconSize} color={color}  />
              
           
              <Text style={{ color: color , fontWeight:"900"}}>
             
                {label}
              </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }