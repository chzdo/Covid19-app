import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Button, ThemeProvider, Image, Input, Overlay, ListItem, Card } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import ValidationComponent from 'react-native-form-validator/index';
import Snackbar from 'react-native-snackbar';
import Picker from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
var PushNotification = require("react-native-push-notification");
import BackgroundFetch from "react-native-background-fetch";
import OTPTextView from 'react-native-otp-textinput';


export default class SplashScreen extends React.Component {

  constructor(props){
    super(props);

  }
    render() {
      const viewStyles = [
        this.props.style.container,
        { backgroundColor: '#ffffff', marginTop: 0, justifyContent: 'center' }
      ];
      const textStyles = {
        textColor: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      };
  
      return (
        <View style={viewStyles}>
          <StatusBar
            hidden={true}
            barStyle="light-content"
            backgroundColor="#ffffff"
          />
          <Image
            resizeMode={'contain'}
            source={require('./logo.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
      );
    }
  }