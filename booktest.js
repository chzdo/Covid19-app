
  
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,

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
import Icon from 'react-native-vector-icons/FontAwesome';
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

  
  export default class BookTest extends React.Component{

    constructor(props){
      super(props)
    }
    render(){
      return(
        <>
        <View>
          <Text>Book Test</Text>
          </View>
        </>
      )
    }
  }