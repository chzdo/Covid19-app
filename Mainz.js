
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

import BackgroundFetch from "react-native-background-fetch";
import OTPTextView from 'react-native-otp-textinput';
var PushNotification = require("react-native-push-notification");
export default class Mainz extends ValidationComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        ref : '',
        UserMail: '',
        UserPass: '',
        usermail: '',
        userpass: '',
        logButLoad: false,
        logButDisabled: false,
        modal_reg: false,
        modal_resetpassword: false,
        modal_confirm: false,
        modal_changepassword: false,
        modal_passwordOTP: false,
        loginPassShow: true,
        loginPassIcon: 'eye',
        regPassShow: true,
        regPassIcon: 'eye',
        regConPassShow: true,
        regConPassIcon: 'eye',
        regButLoad: false,
        regButDisabled: false,
        Mobile_Number: '',
        Firstname: '',
        Lastname: '',
        Middlename: '',
        Email: '',
        Mobile: '',
        Password: '',
        ConfirmPassword: '',
        fnError: '',
        mnError: '',
        lnError: '',
        mnError: '',
        emError: '',
        moError: '',
        paError: '',
        coError: '',
        count: 60,
        ActivationNum: '',
        actNum: '',
        activateButLoad: false,
        activateButDisabled: true,
        login: false,
        resendButLoad: false,
        resendButDisabled: false,
        ForgotMail: '',
        forgotConf: '',
        ForgotCode: '',
        forgotcode: '',
        forgotAuthButLoad: false,
        forgotAuthButDisabled: false,
        resendForgotButLoad: false,
        resendForgotButDisabled: false,
        NewPassword: '',
        ConfirmNewPassword: '',
        newPassShow: true,
        newPassIcon: 'eye',
        newConPassShow: true,
        newConPassIcon: 'eye',
        newpa: '',
        newco: '',
        setPassButDisable: false,
        setPassButLoad: false,
        fmailerr: '',
        banks: '',
        bal: '',
        pushmodal: false,
        pushData: [],
        setPin: false,
        resetChangeLoad: false,
        resetChangeDisabled: false,
      }
  
    }
  
    setModalVisibility(modal, state) {
  
  
      this.setState({ [modal]: state });
    }
  
    setLoginPassShow(show) {
      this.setState({ loginPassShow: show });
      if (this.state.loginPassIcon == 'eye') {
        this.setState({ loginPassIcon: 'eye-slash' });
      } else {
        this.setState({ loginPassIcon: 'eye' });
      }
  
    }
  
    setRegPassShow(show) {
      this.setState({ regPassShow: show });
      if (this.state.regPassIcon == 'eye') {
        this.setState({ regPassIcon: 'eye-slash' });
      } else {
        this.setState({ regPassIcon: 'eye' });
      }
  
    }
  
    setRegConPassShow(show) {
      this.setState({ regConPassShow: show });
      if (this.state.regConPassIcon == 'eye') {
        this.setState({ regConPassIcon: 'eye-slash' });
      } else {
        this.setState({ regConPassIcon: 'eye' });
      }
  
    }
  
    setNewPassShow(show) {
      this.setState({ newPassShow: show });
      if (this.state.newPassIcon == 'eye') {
        this.setState({ newPassIcon: 'eye-slash' });
      } else {
        this.setState({ newPassIcon: 'eye' });
      }
  
    }
  
    setNewConPassShow(show) {
      this.setState({ newConPassShow: show });
      if (this.state.newConPassIcon == 'eye') {
        this.setState({ newConPassIcon: 'eye-slash' });
      } else {
        this.setState({ newConPassIcon: 'eye' });
      }
  
    }
  
    reset_p() {
      var password1 = this.state.nPassword1 + this.state.nPassword2 + this.state.nPassword3 + this.state.nPassword4;
      var password2 = this.state.cPassword1 + this.state.cPassword2 + this.state.cPassword3 + this.state.cPassword4;
      this.setState({ resetChangeDisabled: true, resetChangeLoad: true, });
      if (password1 !== "" && password1.length === 4) {
        if (password2 !== "" && password2.length === 4) {
          if (password1 === password2) {
  
            return fetch("https://domain.com/resetpass/",
              {
                "method": "POST",
                "headers": {
                  "x-rapidapi-host": "domain.com",
                  "x-rapidapi-key": "",
                  "content-type": "application/x-www-form-urlencoded",
                },
                "body": JSON.stringify({
                  "user": this.state.user,
                  "pass": "",
                  "pass1": password1,
                  "pass2": password2,
                }),
              })
              .then((response) => response.json())
              .then((data) => {
                if (data.done === true) {
                  this.setState({ resetOverlay: false, resetSuccess: true, resetChangeDisabled: false, resetChangeLoad: false, Password1: '', Password2: '', Password3: '', Password4: '', nPassword1: '', nPassword2: '', nPassword3: '', nPassword4: '', cPassword1: '', cPassword2: '', cPassword3: '', cPassword4: '' });
                  Snackbar.show({
                    text: "Signed up successfully!",
                    duration: Snackbar.LENGTH_INDEFINITE,
                    backgroundColor: 'rgba(0,51,82,0.8)',
                    textColor: 'white',
                    action: {
                      text: 'LOGIN',
                      textColor: 'white',
                      onPress: () => { this.setState({ setPin: false }); this.setModal2Visible(false); },
                    },
                  });
                } else {
                  this.setState({ resetChangeDisabled: false, resetChangeLoad: false, });
                  Snackbar.show({
                    text: data.msg,
                    duration: Snackbar.LENGTH_INDEFINITE,
                    backgroundColor: 'rgba(0,51,82,0.8)',
                    textColor: 'white',
                    action: {
                      text: 'OK',
                      textColor: 'white',
                      onPress: () => { },
                    },
                  });
  
                }
              })
              .catch((error) => {
                this.setState({ resetChangeDisabled: false, resetChangeLoad: false, });
                Snackbar.show({
                  text: "Unable to connect to the internet.",
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'rgba(0,51,82,0.8)',
                  textColor: 'white',
                });
              });
  
  
          } else {
            Snackbar.show({
              text: "New passwords do not match!",
              duration: Snackbar.LENGTH_INDEFINITE,
              backgroundColor: 'rgba(0,51,82,0.8)',
              textColor: 'white',
              action: {
                text: 'OK',
                textColor: 'white',
                onPress: () => { },
              },
            });
          }
  
        } else {
          this.setState({ resetPass2Error: "You have to confirm your new password." });
        }
  
      } else {
        this.setState({ resetPass1Error: "Your new password is required." });
      }
  
    }
  
  
  showSnack(msg,fn=null){
    Snackbar.show({
      text: msg,
      duration: Snackbar.LENGTH_INDEFINITE,
      backgroundColor: 'rgba(0,51,82,0.8)',
      textColor: 'white',
      action: {
        text: 'OK',
        textColor: 'white',
        onPress: ()=> fn,
      },
    });
  
  }
  startTimer(){
    var timer = setInterval(() => {
      this.setState({count: (this.state.count-1)})
      if (this.state.count < 0) clearInterval(timer)
      console.log(this.state.count)
      }, 1000);
  }
 
    async componentDidMount() {
      var self = this;
    
 /** 
    try{  
      
     PushNotification.configure({
      
            onNotification: function (notification) {
              // console.log('NOTIFICATION:', notification);
              const clicked = notification.userInteraction;
              if (clicked) {
               // ToastAndroid.show(notification.message,ToastAndroid.CENTER);
               // alert(notification.ref);
               self.setState({pushData: notification.data});
               self.pushmodalVisible(true, notification.ref);
              } else {
              
              }
              // ToastAndroid.show(notification.message,ToastAndroid.CENTER);
            },
            popInitialNotification: true,
            requestPermissions: true,
          });
        }catch(e){
          alert(e)
        }
        **/
  
    }
  
  
  
  
  
    activ8() {
      
      this.setState({ activateButLoad: true });
  
          return fetch("https://heathhive.000webhostapp.com/confirm/",
          {
            "method": "POST",
            "headers": {
              "x-rapidapi-host": "domain.com",
              "x-rapidapi-key": "",
              "content-type": "application/x-www-form-urlencoded",
            },
            "body": JSON.stringify({
              "ref": this.state.ref,
              "code": this.state.ActivationNum,
            }),
          })
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
            this.setState({ activateButLoad: false });
             if (data.conf === true) {
              this.state.ActivationNum = '';
              this.state.ref = '';
              this.state.count = 0;
             ToastAndroid.show(data.msg,ToastAndroid.LONG)
              this.setModalVisibility("modal_confirm", !this.state.modal_confirm);
              
            } else {
              this.setState({ActivationNum : ''})
              this.showSnack(data.msg)
         
            }
  
  
          })
          .catch((error) => {
            console.error(error);
            this.setState({ activateButLoad: false });
            this.showSnack("Unable to Connect To Internet")
          });
  
     
    }
  
    resend() {
      this.setState({ resendButLoad: true });
      this.setState({ resendButDisabled: true });
      // send API request
      return fetch("https://heathhive.000webhostapp.com/confirm/gen/",
        {
          "method": "POST",
          "headers": {
            "x-rapidapi-host": "domain.com",
            "x-rapidapi-key": "",
            "content-type": "application/x-www-form-urlencoded",
          },
          "body": JSON.stringify({
            "ref": this.state.ref,
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ resendButLoad: false });
          this.setState({ resendButDisabled: false });
          if (data.OTP === true) {
           this.showSnack(data.msg)
          this.setState({count: 60});
          this.startTimer();
          } else {
           this.showSnack(data.msg)
  
          }
  
  
        })
        .catch((error) => {
          // console.error(error);
          this.setState({ resendButLoad: false });
          this.setState({ resendButDisabled: false });
      this.showSnack("Could not Connect! Check Connection")
        });
  
      // API request ends
  
    }
  
  
    forgot() {
      this.state.fmailerr = '';
      this.setState({ forgotButLoad: true });
      this.setState({ forgotButDisabled: true });
      var chk = this.validate({
        Mobile_Number: { equalto: 11, required: true },  });
              if (chk == true && this.state.Mobile_Number.length == 11) {
               
   
  
        // send API request
        return fetch("https://heathhive.000webhostapp.com/forget/",
          {
            "method": "POST",
            "headers": {
              "x-rapidapi-host": "domain.com",
              "x-rapidapi-key": "",
              "content-type": "application/x-www-form-urlencoded",
            },
            "body": JSON.stringify({
              "mobile": this.state.Mobile_Number
            }),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({ forgotButLoad: false });
            this.setState({ forgotButDisabled: false });
            if (data.status === true) {
              ToastAndroid.show(data.msg,ToastAndroid.LONG)
              this.setState({ ref: this.state.Mobile_Number });
              this.state.count = 60;
              this.startTimer();
              this.setModalVisibility("modal_passwordOTP", !this.state.modal_passwordOTP)
              this.setModalVisibility("modal_resetpassword", !this.state.modal_resetpassword)
           
             
            } else {
              if (data.mobile === 2) {
              ToastAndroid.show(data.msg,ToastAndroid.LENGTH_LONG)
                this.setModalVisibility("modal_confirm", !this.state.modal_confirm)
                this.setModalVisibility("modal_resetpassword", !this.state.modal_resetpassword)
                this.startTimer();
                this.setState({ ref: this.state.Mobile_Number });
                this.state.Mobile_Number = '';
  
  
              } else {
               this.showSnack(data.msg)
              }
            }
   
  
          })
          .catch((error) => {
             console.error(error);
            this.setState({ forgotButLoad: false });
            this.setState({ forgotButDisabled: false });
           this.showSnack("could not connect")
          });
      } else {
        this.setState({ forgotButLoad: false });
        this.setState({ forgotButDisabled: false });
        this.state.fmailerr = 'Inavlid Mobile Number';
   
      }
      // API request ends
  
    }
  
  
  
    resend_forgot() {
      this.setState({ resendForgotButLoad: true });
      this.setState({ resendForgotButDisabled: true });
      // send API request
      return fetch("https://heathhive.000webhostapp.com/forget/",
        {
          "method": "POST",
          "headers": {
            "x-rapidapi-host": "domain.com",
            "x-rapidapi-key": "",
            "content-type": "application/x-www-form-urlencoded",
          },
          "body": JSON.stringify({
            "mobile": this.state.ref,
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ resendForgotButLoad: false });
          this.setState({ resendForgotButDisabled: false });
          if (data.status === true) {
            ToastAndroid.show(data.msg,ToastAndroid.LONG)
            this.setState({ ref: this.state.Mobile_Number });
            this.state.count = 60;
            this.startTimer();
          
           
          } else {
            if (data.mobile === 2) {
            ToastAndroid.show(data.msg,ToastAndroid.LENGTH_LONG)
              this.setModalVisibility("modal_confirm", !this.state.modal_confirm)
              this.setModalVisibility("modal_resetpassword", !this.state.modal_resetpassword)
              this.startTimer();
              this.setState({ ref: this.state.Mobile_Number });
              this.state.Mobile_Number = '';
  
  
            } else {
              this.setModalVisibility("modal_confirm", !this.state.modal_confirm)
             this.showSnack(data.msg)
            }
          }
  
        })
        .catch((error) => {
          // console.error(error);
          this.setState({ resendForgotButLoad: false });
          this.setState({ resendForgotButDisabled: false });
                this.showSnack("could not connect");
        });
  
      // API request ends
  
    }
  
  
    forgot_auth() {
    
      this.setState({ forgotAuthButLoad: true });
   
  
        return fetch("https://heathhive.000webhostapp.com/forget/confirm/",
          {
            "method": "POST",
            "headers": {
              "x-rapidapi-host": "domain.com",
              "x-rapidapi-key": "",
              "content-type": "application/x-www-form-urlencoded",
            },
            "body": JSON.stringify({
              "ref": this.state.ref,
              "code": this.state.forgotCode,
            }),
          })
          .then((response) => response.json())
          .then((data) => {
  
            console.log(data);
            this.setState({ forgotAuthButLoad: false });
              if (data.conf === true) {
                ToastAndroid.show(data.msg,ToastAndroid.LONG)
                this.setModalVisibility("modal_changepassword", !this.state.modal_changepassword)
                this.setModalVisibility("modal_passwordOTP", !this.state.modal_passwordOTP)
               
        
            } else {
  
             this.showSnack(data.msg)
  
            }
  
  
          })
          .catch((error) => {
            // console.error(error);
            this.setState({ forgotAuthButLoad: false });
                  this.showSnack("could not connect")
          });
        // API request ends
  
  
    }
  
    setPassword() {
      this.setState({ setPassButLoad: true });
      this.setState({ setPassButDisable: true });
      var chk = this.validate({
        NewPassword: { required: true, minlength: 6 },
        ConfirmNewPassword: { required: true, minlength: 6 },
      });
  
      if (chk == true) {
        this.setState({ newpa: '', newco: '' });
  
        if (this.state.NewPassword === this.state.ConfirmNewPassword) {
          // send API request
  
          return fetch("https://heathhive.000webhostapp.com/forget/change/",
            {
              "method": "POST",
              "headers": {
                "x-rapidapi-host": "domain.com",
                "x-rapidapi-key": "",
                "content-type": "application/x-www-form-urlencoded",
              },
              "body": JSON.stringify({
                "ref": this.state.ref,
               "newpass": this.state.NewPassword,
              }),
            })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.setState({ setPassButLoad: false });
              this.setState({ setPassButDisable: false });
              if (data.changed === true) {
                //load password reset UI
                this.state.ForgotCode = '';
                this.state.forgotConf = '';
                this.state.ForgotMail = '';
                this.state.ref='';
               ToastAndroid.show("Password Changed", ToastAndroid.LONG)
               this.setModalVisibility('modal_changepassword', !this.state.modal_changepassword);
              
              } else {
               this.showSnack(data.msg)
          
  
  
  
              }
  
  
            })
            .catch((error) => {
              // console.error(error);
              this.setState({ setPassButLoad: false });
              this.setState({ setPassButDisable: false });
          this.showSnack("could not connect");
            });
          // API request ends
  
  
        } else {
          this.setState({ setPassButLoad: false });
          this.setState({ setPassButDisable: false });
          this.setState({ newco: "Passwords do not match." });
        }
  
  
      } else {
        this.setState({ setPassButLoad: false });
        this.setState({ setPassButDisable: false });  
        this.state.newpa = this.getError('NewPassword');
        this.state.newco= this.getError('ConfirmNewPassword');
        
       
      }
    }
  
  
    reg() {
    
      var chk = this.validate({
        Firstname: { required: true },
        Lastname: { required: true },
        Middlename: { required: true },
        Password: { minlength: 6, required: true },
        ConfirmPassword: { minlength: 6, required: true },
        Email: { email: true, required: true },
        Mobile: { numbers: true, equalto: 11, required: true },
      });
      if (chk == true) {
        this.state.fnError = '';
        this.state.lnError = '';
        this.state.mnError = '';
        this.state.emError = '';
        this.state.paError = '';
        this.state.coError = '';
        this.state.moError= '';
        //check if Confirm is equalto Password
        if (this.state.ConfirmPassword === this.state.Password) {
          this.setState({ regButLoad: true });
          this.setState({ regButDisabled: true });
          this.state.coError = '';
  
          return fetch("https://heathhive.000webhostapp.com/reg/",
            {
              "method": "POST",
              "headers": {
                "x-rapidapi-host": "domain.com",
                "x-rapidapi-key": "",
                "content-type": "application/x-www-form-urlencoded",
              },
              "body": JSON.stringify({
  
                "fname": this.state.Firstname,
                "mname": this.state.Middlename,
                "pass": this.state.Password,
                "mobile": this.state.Mobile,
                "email": this.state.Email,
                "lname": this.state.Lastname,
                "dob": this.state.Lastname,
              }),
  
            })
            .then(response => { return response.json(); })
            .then((data) => {
              // alert("rsp");
              console.log("data",data);
              
              this.setState({ regButLoad: false });
              this.setState({ regButDisabled: false });
              if (data.reg === true && data.ref !== null) {
                this.state.Firstname = '';
                this.state.Middlename = '';
                this.state.Lastname = '';
                this.state.Email = '';
                this.state.Mobile = '';
                this.state.Password = '';
                this.state.ConfirmPassword = '';
                this.setState({ ref: data.ref});
                ToastAndroid.show(data.msg, ToastAndroid.LONG)
                this.setModalVisibility("modal_confirm", !this.state.modal_confirm);
                this.setModalVisibility("modal_reg", !this.state.modal_reg);
                this.startTimer();
                      } else {
             this.showSnack(data.msg)
  
              }
  
  
            })
            .catch(error => {
              // alert("err");
               console.error(error);
              this.setState({ regButLoad: false });
              this.setState({ regButDisabled: false });
           this.showSnack("Could not connect")
            });
  
          // API call end
  
        } else {
          this.state.coError = "Passwords do not match.";
        }
  
  
      } else {
             this.state.fnError = this.getError('Firstname')
             this.state.mnError = this.getError('Middlename')
             this.state.lnError = this.getError('Lastname')
             this.state.emError = this.getError('Email')
             this.state.moError = this.getError('Mobile')
             this.state.paError = this.getError('Password')
             this.state.coError = this.getError('ConfirmPassword')
   
        this.setState({ regButLoad: false });
        this.setState({ regButDisabled: false });
      }
  
    }
  
   getError(field){
     var c = this.getErrorsInField(field);
   
        var i = 0;
        var co_str = "";
        for (i in c) {
          var br = "";
          if (co_str !== "") {
            br = "\n";
          }
          co_str = co_str + br + c[i];
        }
        return co_str;
  }
   storeData = async (index,value) => {
    try {
      console.log(index,value);
      await AsyncStorage.setItem(index, value)
      this.props.setLogged(true)
    } catch (e) {
      console.error(e)
    }
  }
    login() {
      this.setState({ logButLoad: true });
      this.setState({ logButDisabled: true });
      var chk = this.validate({
        UserMail: { number: true, required: true },
        UserPass: { required: true },
      });
      if (chk == true) {
        this.state.usermail = '';
        this.state.userpass = '';
        this.setState({ user: this.state.UserMail });
        // API call start
  
        return fetch("https://heathhive.000webhostapp.com/login/",
          {
            "method": "POST",
            "headers": {
              "x-rapidapi-host": "domain.com",
              "x-rapidapi-key": "",
              "content-type": "application/x-www-form-urlencoded",
            },
            "body": JSON.stringify({
              "uname": this.state.UserMail,
              "pass": this.state.UserPass,
            }),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({ logButLoad: false });
            this.setState({ logButDisabled: false });
            if (data.login === true) {
              if(data.conf === true){
                 this.storeData('phone',data.ref);
               
                }else{
                  ToastAndroid.show(data.msg,ToastAndroid.LONG)
                  this.state.ref = data.ref;
                  this.setModalVisibility("modal_confirm", !this.state.modal_confirm)
                  this.state.count = 60
                  this.startTimer()
                }
  
            } else {
               
            this.showSnack(data.msg);           
  
  
            }
  
  
          })
          .catch((error) => {
             console.error(error);
            this.setState({ logButLoad: false });
            this.setState({ logButDisabled: false });
          this.showSnack("could not connect")
          });
  
        // API call end
      } else {
        this.setState({ logButLoad: false });
        this.setState({ logButDisabled: false });
        this.state.usermail = this.getError('UserMail');
        this.state.userpass = this.getError('UserPass');
      
      }
    }
  
   
      
  
  
    render() {
      if (this.state.login === false) {
        return (
  
          <View>
            <StatusBar
              barStyle="light-content"
              backgroundColor="rgba(5,80,20,0.7)"
            />
            <ScrollView style={{ minHeight: '100%', backgroundColor: '#ffffff' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '0%' }}>
                <Image
                  resizeMode={'contain'}
                  source={require('./logo.png')}
                  style={{ width: 200, height: 200, marginBottom: '0%' }}
                />
              </View>
              <View style={styles.container}>
                <Input
                  ref="UserMail"
                  onChangeText={(UserMail) => this.setState({ UserMail })}
                  value={this.state.UserMail}
                  placeholder='Mobile Number'
                  shake={true}
                  leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(5,80,20,0.7)' }}
                  inputContainerStyle={{
                    backgroundColor: 'white', margin: 10,
                    marginLeft: 0, marginRight: 0, borderRadius: 10
                  }}
                  containerStyle={{ marginTop: '10%' }}
                  inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                  keyboardType='numeric'
                  errorMessage={this.state.usermail}
                />
                <Input
                  ref="UserPass"
                  onChangeText={(UserPass) => this.setState({ UserPass })} value={this.state.UserPass}
                  secureTextEntry={this.state.loginPassShow}
                  placeholder='Password'
                  shake={true}
                  leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                  rightIcon={{ type: 'font-awesome', name: this.state.loginPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => { this.setLoginPassShow(!this.state.loginPassShow) } }}
                  inputContainerStyle={{
                    backgroundColor: 'white', margin: 10,
                    paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10
                  }}
                  inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                  errorMessage={this.state.userpass}
                />
                <Button
                  title="LOGIN   "
                  titleStyle={{ color: "rgba(5,80,20,0.7)" }}
                  raised={true}
                  icon={<Icon name="arrow-right" size={15} color="rgba(5,80,20,0.7)" />}
                  iconRight={true}
                  loading={this.state.logButLoad}
                  disabled={this.state.logButDisabled}
                  loadingProps={{ color: 'rgba(5,80,20,0.7)' }}
                  buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                  onPress={() => { this.login() }}
                />
                <View style={{ flex: 1, marginTop: '1%', fontWeight: 'bold', fontSize: 25 }}>
                  <Button title="Forgot Password?" titleStyle={{ color: "rgba(5,80,20,0.7)" }} type="clear" onPress={() => { this.setModalVisibility('modal_resetpassword', true); }} color="white" />
                  <Button title="Sign Up" titleStyle={{ color: "rgba(5,80,20,0.7)", textTransform: "uppercase" }} containerStyle={{ marginTop: "2%", }} type='solid' onPress={() => { this.setModalVisibility('modal_reg', true); }} buttonStyle={{ minWidth: '100%', backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center' }} />
                </View>
  
                {    /** End of login layout */}
  
  
  
  
                {    /** Start of registrati layout */}
  
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modal_reg}
                  onRequestClose={() => {
                    this.setModalVisibility('modal_reg', !this.state.modal_reg);
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <StatusBar
                    barStyle="light-content"
                    backgroundColor="rgba(5,80,20,0.7)"
                  />
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View raised={true} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60, elevation: 5 }}>
                      <TouchableHighlight onPress={() => { this.setModalVisibility('modal_reg', !this.state.modal_reg); }} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 10 }}>SIGN UP</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
  
                        <Input
                          ref="Firstname"
                          onChangeText={(Firstname) => this.setState({ Firstname })} value={this.state.Firstname}
                          placeholder='Firstname'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', marginBottom: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.fnError}
                        />
                        <Input
                          ref="Middlename"
                          onChangeText={(Middlename) => this.setState({ Middlename })} value={this.state.Middlename}
                          placeholder='Middlename'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', marginBottom: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.mnError}
                        />
                        <Input
                          ref="Lastname"
                          onChangeText={(Lastname) => this.setState({ Lastname })} value={this.state.Lastname}
                          placeholder='Lastname'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.lnError}
                        />
                        <Input
                          ref="Email"
                          onChangeText={(Email) => this.setState({ Email })} value={this.state.Email}
                          placeholder='Email Address'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'at', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.emError}
                          keyboardType='email-address'
                        />
                        <Input
                          ref="Mobile"
                          onChangeText={(Mobile) => this.setState({ Mobile })} value={this.state.Mobile}
                          placeholder='Mobile Number'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'phone', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.moError}
                          keyboardType='numeric'
                        />
                        <Input
                          ref="Password"
                          onChangeText={(Password) => this.setState({ Password })} value={this.state.Password}
                          secureTextEntry={this.state.regPassShow}
                          placeholder='Password'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                          rightIcon={{ type: 'font-awesome', name: this.state.regPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => { this.setRegPassShow(!this.state.regPassShow) } }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.paError}
                        />
                        <Input
                          ref="ConfirmPassword"
                          onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })} value={this.state.ConfirmPassword}
                          secureTextEntry={this.state.regConPassShow}
                          placeholder='Confirm Password'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                          rightIcon={{ type: 'font-awesome', name: this.state.regConPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => { this.setRegConPassShow(!this.state.regConPassShow) } }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.coError}
                        />
                        <Button title="SUBMIT   "
                          titleStyle={{ color: "rgba(5,80,20,0.7)" }} raised={true} icon={<Icon name="check" size={15}
                            color="rgba(5,80,20,0.7)" />}
                          iconRight={true}
                          loading={this.state.regButLoad}
                          disabled={this.state.regButDisabled}
                          loadingProps={{ color: 'rgba(5,80,20,0.7)' }}
                          buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                          onPress={() => { this.reg() }}
                        />
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: '10%', fontWeight: 'bold', fontSize: 20 }}>
                          <Button title="Already have an account? Login." titleStyle={{ color: "rgba(5,80,20,0.7)" }} type="clear" onPress={() => { this.setModalVisibility('modal_reg', !this.state.modal_reg); }} style={{ marginLeft: 50 }} />
                        </View>
                      </View>
  
                    </ScrollView>
                  </View>
                </Modal>
  
  
                { // end of registration layout 
                }
  
  
  
  
  
  
                { // Reset Password Section 
                }
  
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modal_resetpassword}
                  onRequestClose={() => {
                    this.setModalVisibility('modal_resetpassword', !this.state.modal_resetpassword);
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View raised={true} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60, elevation: 5 }}>
                      <TouchableHighlight onPress={() => { this.setModalVisibility('modal_resetpassword', !this.state.modal_resetpassword); }} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 10 }}>RESET PASSWORD</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', paddingTop: '45%' }}>
  
                        <Input
                          ref="Mobile_Number"
                          onChangeText={(text) => this.setState({ Mobile_Number : text })} 
                          value={this.state.Mobile_Number}
                          placeholder='Mobile Number'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'phone', color: 'rgba(5,80,20,0.7)' }}
                          inputContainerStyle={{
                            backgroundColor: 'white', marginBottom: 10,
                            marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          keyboardType='numeric'
                          errorMessage={this.state.fmailerr}
                        />
  
                        <Button
                          loading={this.state.forgotButLoad}
                          disabled={this.state.forgotButDisabled}
                          title="RESET   " titleStyle={{ color: "rgba(5,80,20,0.7)" }} raised={true} icon={<Icon name="check" size={15}
                            color="rgba(5,80,20,0.7)" />} iconRight={true}
                          loadingProps={{ color: 'rgba(5,80,20,0.7)' }}
                          buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                          onPress={() => { this.forgot(); }}
                        />
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: '10%', fontWeight: 'bold', fontSize: 20 }}>
                          <Button title="<<< Back to login" titleStyle={{ color: "rgba(5,80,20,0.7)" }} type="clear" onPress={() => { this.setModalVisibility('modal_resetpassword', !this.state.modal_resetpassword); }} />
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
  
  
                {
                  //Push Notification Interface
                }
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.pushmodal}
                  onRequestClose={() => {
                    this.pushmodalVisible(!this.state.pushmodal);
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View raised={true} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60, elevation: 5 }}>
                      <TouchableHighlight onPress={() => { this.pushmodalVisible(!this.state.pushmodal); }} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 50 }}>NOTIFICATION</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', }}>
                        <Card
                          containerStyle={{ width: '100%', backgroundColor: '#ffffff' }}
                          title={this.state.pushData.title}
                          titleStyle={{ textTransform: 'uppercase', color: 'rgba(5,80,20,0.7)' }}
                        >
                          <Text style={{ marginBottom: 10 }}>{this.state.pushData.bigText}</Text>
                          <Image
                            source={{ uri: this.state.pushData.image }}
                            style={{ width: '100%', height: 200 }}
                            PlaceholderContent={<ActivityIndicator />}
                          />
                          <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
                            title='CLOSE NOTIFICATION'
                            type="outline"
                            onPress={() => { this.pushmodalVisible(!this.state.pushmodal); }}
                          />
                        </Card>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
  
                {
                  //End of Push Notification
                }
  
  
  
                {
  
                  //Activate Account Interface
                }
  
  
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modal_confirm}
                  onRequestClose={() => {
                    this.setModalVisibility('modal_confirm', !this.state.modal_confirm);
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View  style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60, elevation: 0 }}>
                      <TouchableHighlight onPress={() => {        this.setModalVisibility('modal_confirm', !this.state.modal_confirm); }} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 10, paddingTop: 6 }}>ACTIVATE ACCOUNT</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', marginTop: '35%', justifyContent: 'center', flexDirection: "column"}}>
                          <Text style={{color:"rgba(5,80,20,0.7)", fontWeight: 'bold'}}> Enter Code sent to ********{ this.state.ref.substr(8) } </Text>
                        <OTPTextView
                        handleTextChange = {(text)=> {  this.state.ActivationNum = text; if (text.length === 4) this.activ8(); else this.setState({activateButDisabled: true});  }}
                           containerStyle={{marginBottom: 30}}
                           inputCount={4}
                           ref= 'OTP'
                           shake={true}
                           errorMessage={this.state.ActivationNum}
                           default = {this.state.ActivationNum}
           
                                />
                         {(this.state.activateButLoad)?     <ActivityIndicator size="large" color="green"  /> : null }
                          
                            
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: '6%', fontWeight: 'bold', fontSize: 20 }}>
                      { this.state.count >= 0 ? <Text style={{color:"rgba(5,80,20,0.7)", fontWeight: 'bold'}}> Resend Code in {this.state.count}</Text>  :<Button 
                      loading={this.state.resendButLoad} 
                      disabled={this.state.resendButDisabled} 
                       buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                         title="Resend Code" titleStyle={{ color: "rgba(5,80,20,0.7)" }}
                          type="clear" 
                          onPress={() => { this.resend(); }} 
                          />
                              } 
                              </View>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
                {
                  //End of Activate Account Interface
                }
  
  
  {
                  //Start of Reset Password
                }
  
  
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modal_changepassword}
                  onRequestClose={() => {
                    this.setModalVisibility('modal_changepassword', !this.state.modal_changepassword);
              
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View raised={true} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60, elevation: 5 }}>
                      <TouchableHighlight onPress={() => {   this.setModalVisibility('modal_changepassword', !this.state.modal_changepassword);}} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 10 }}>RESET PASSWORD</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', paddingTop: '35%' }}>
                        <Input
                          ref="NewPassword"
                          onChangeText={(NewPassword) => this.setState({ NewPassword })} value={this.state.NewPassword}
                          secureTextEntry={this.state.newPassShow}
                          placeholder='Password'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                          rightIcon={{ type: 'font-awesome', name: this.state.newPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => { this.setNewPassShow(!this.state.newPassShow) } }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.newpa}
                        />
                        <Input
                          ref="ConfirmNewPassword"
                          onChangeText={(ConfirmNewPassword) => this.setState({ ConfirmNewPassword })} value={this.state.ConfirmNewPassword}
                          secureTextEntry={this.state.newConPassShow}
                          placeholder='Confirm Password'
                          shake={true}
                          leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(5,80,20,0.7)' }}
                          rightIcon={{ type: 'font-awesome', name: this.state.newConPassIcon, color: 'rgba(5,80,20,0.7)', onPress: () => { this.setNewConPassShow(!this.state.newConPassShow) } }}
                          inputContainerStyle={{
                            backgroundColor: 'white', margin: 10,
                            paddingRight: 10, marginLeft: 0, marginRight: 0, borderRadius: 10
                          }}
                          inputStyle={{ color: 'rgba(5,80,20,0.7)' }}
                          errorStyle={{ color: 'red' }}
                          errorMessage={this.state.newco}
                        />
                        <Button loading={this.state.setPassButLoad} disabled={this.state.setPassButDisabled} title="CHANGE   " titleStyle={{ color: "rgba(5,80,20,0.7)" }} raised={true} icon={<Icon name="check" size={15}
                          color="rgba(5,80,20,0.7)" />} iconRight={true}
                          loadingProps={{ color: 'rgba(5,80,20,0.7)' }}
                          buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                          onPress={() => { this.setPassword(); }}
                        />
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
  
                {
                  //End of Reset Password
                }
  
  {
    // Password OTP Inteface
  }
  
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modal_passwordOTP}
                  onRequestClose={() => {
                    this.setModalVisibility("modal_passwordOTP", !this.state.modal_passwordOTP)
          
                  }} style={{ backgroundColor: '#4682B4' }}>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                    <View raised={true} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, paddingTop: 15, minHeight: 60 }}>
                      <TouchableHighlight onPress={() => {   this.setModalVisibility("modal_passwordOTP", !this.state.modal_passwordOTP)
           }} underlayColor="rgba(0,0,0,0)" >
                        <View style={{ width: 40, textAlign: 'left', padding: 5 }}>
                          <Icon type='font-awesome' name="arrow-left" size={20} color="rgba(5,80,20,0.7)" />
                        </View>
                      </TouchableHighlight>
                      <Text h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(5,80,20,0.7)', marginLeft: 10 }}>PASSWORD RECOVER OTP</Text>
                    </View>
                    <ScrollView style={{ width: '100%', height: '100%' }}>
                      <View style={{ flex: 1, alignItems: 'center', marginTop: '35%', justifyContent: 'center' }}>
                      <Text style={{color:"rgba(5,80,20,0.7)", fontWeight: 'bold'}}> Enter Code sent to ********{ this.state.ref.substr(8) } </Text>
                  
                      <OTPTextView
                        handleTextChange = {(text)=> {  this.state.forgotCode = text; if (text.length === 4) this.forgot_auth();  }}
                           containerStyle={{marginBottom: 30}}
                           inputCount={4}
                           ref= 'OTP'
                           shake={true}
                           errorMessage={this.state.ActivationNum}
                           default = {this.state.forgotCode}
           
                                />
  
  {(this.state.forgotAuthButLoad)?     <ActivityIndicator size="large" color="green"  /> : null }
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: '6%', fontWeight: 'bold', fontSize: 20 }}>
                        { this.state.count >= 0 ? <Text style={{color:"rgba(5,80,20,0.7)", fontWeight: 'bold'}}> Resend Code in {this.state.count}</Text>  :<Button 
                      loading={this.state.resendForgotButLoad} 
                      disabled={this.state.resendForgotButDisabled} 
                       buttonStyle={{ minWidth: 100, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(5,80,20,0.7)', borderRadius: 10 }}
                         title="Resend Code" titleStyle={{ color: "rgba(5,80,20,0.7)" }}
                          type="clear" 
                          onPress={() => { this.resend_forgot(); }} 
                          />
                              } 
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
  
  
                {
    // End of Password OTP Interface
  }
  
  
  
  
              </View>
  
            </ScrollView>
          </View>
  
        );
      } else {
  
        return <Dashboard data={{ user: this.state.user, banks: this.state.banks, bal: this.state.bal, tranz: this.state.tranz, support: this.state.support, mtnPlans: this.state.mtnPlans, gloPlans: this.state.gloPlans, airtelPlans: this.state.airtelPlans, mobilePlans: this.state.mobilePlans }} />;
      }
    }
  }
  const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 0,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      color: '#4682B4',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#F5FCFF',
    },
    instructions: {
      textAlign: 'center',
      color: '#F5FCFF',
      marginBottom: 5,
    },
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 320,
      height: 320,
    },
  
  });