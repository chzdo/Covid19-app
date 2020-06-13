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
 


export default function (props){
    return (
       
        <View>
            <Input
                    ref="UserMail"
                    onChangeText={(UserMail) => this.setState({UserMail})} 
                    value={this.state.UserMail}
                    placeholder='Email'
                    shake={true}
                    leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(5,80,20,0.7)' }}
                    inputContainerStyle={{backgroundColor: 'white', margin: 10,
                    marginLeft: 0, marginRight: 0, borderRadius: 10}}
                    containerStyle={{ marginTop: '10%' }}
                    inputStyle={{color: 'rgba(5,80,20,0.7)'}}
                    keyboardType='email-address'
                    errorMessage= {this.state.usermail}
                  />
                  <Input
                    ref="UserPass"
                    onChangeText={(UserPass) => this.setState({UserPass})} value={this.state.UserPass}
                    secureTextEntry={this.state.loginPassShow}
                    placeholder='Password'
                    shake={true}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                    rightIcon={{ type: 'font-awesome', name: this.state.loginPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => {this.setLoginPassShow(!this.state.loginPassShow)} }}
                    inputContainerStyle={{backgroundColor: 'white', margin: 10,
                    paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10}}
                    inputStyle={{color: 'rgba(5,80,20,0.7)'}}
                    errorMessage= {this.state.userpass}
                  />
                   <Button 
                          title="LOGIN   "
                          titleStyle={{color: "rgba(5,80,20,0.7)"}}
                          raised={true}
                          icon={ <Icon name="arrow-right" size={15} color="rgba(5,80,20,0.7)" /> }
                          iconRight={true}
                          loading={this.state.logButLoad}
                          disabled={this.state.logButDisabled} 
                          loadingProps={{color: 'rgba(5,80,20,0.7)'}}
                          buttonStyle={{minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10}}
                          onPress={() => {this.login()}}
                           />
                          <View style={{flex: 1, marginTop: '1%', fontWeight: 'bold', fontSize: 25}}>
                            <Button title="Forgot Password?" titleStyle={{color: "rgba(5,80,20,0.7)"}} type="clear" onPress={() => {this.setModal1Visible(true);}} color="white" />
                           <Button title="Sign Up" titleStyle={{color: "rgba(5,80,20,0.7)", textTransform: "uppercase"}} containerStyle={{marginTop: "2%",}} type='solid' onPress={() => {this.setModalVisible(true);}} buttonStyle={{minWidth: '100%', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center'}} />
                           </View>
        </View>
       
    )
}