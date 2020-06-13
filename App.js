import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
  DeviceEventEmitter,
  ToastAndroid,
  ActivityIndicator,
  PermissionsAndroid
} from 'react-native';
import Mainz from './Mainz'
import SplashScreen from './splashscreen'
import AsyncStorage from '@react-native-community/async-storage';
import BackgroundFetch from "react-native-background-fetch";
import BackgroundJob from 'react-native-background-job';
import OTPTextView from 'react-native-otp-textinput';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './dashboard';
import Profile  from './profile';
import Header from './header'
import BookTest from './booktest'
import SideBar from './SiderBar'
import Support from './support'
import Notification from './notifications'
import SelfTest from './selftest'
import MyTabBar from './bottombar'
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Favcon from 'react-native-vector-icons/MaterialIcons';
//import Geolocation from '@react-native-community/geolocation';
//import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';










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



const theme = {

  Button: {
    raised: true,
    marginTop: 20,
  },

};





export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      showRealApp: false,
      user: '',
      firstLaunch: "null",
      isLogged: false,
      ref: '',
      SideBardata: {}
    }
    }


  // splash screen handler starts


  

    setLogged= async (value) =>{
   console.log(value)
   
   var phone = await AsyncStorage.getItem('phone')
     value == false? await AsyncStorage.removeItem('phone') : await this.getDetails(phone)
     this.setState({isLogged: value})
  
   }

   
 Main = props => (
<Bottom_stack {...props}  data={this.state.data} /> 
)


  Navigation_screen = 
     (  //this.state.isLogged ? <Mainz setLogged = {this.setLogged} /> :
<NavigationContainer >
<Drawer.Navigator
    drawerContent = {props=><SideBar {...props} data={this.state.data} setLogged={this.setLogged} />}
  drawerContentOptions={{
    activeTintColor: '#e91e63',
    itemStyle: { marginVertical: 5 },
  }}>
  <Drawer.Screen
    name="Bottom"
    options={{ drawerLabel: 'First page Option' }}
component={ this.Main } 
/>
</Drawer.Navigator>
    
  </NavigationContainer>)




performTimeConsumingTask = async () => {
  return new Promise((resolve) => setTimeout(() => { this.setState({ firstLaunch: "false" }); }, 2000));
}





  async componentDidMount() {

var i = 0;




   

  // BackgroundFetch.registerHeadlessTask(this.MyHeadlessTask);

     let val = await AsyncStorage.getItem('phone');

   //  console.log(val, "val")
    
         await   this.performTimeConsumingTask()

 
  //BackgroundFetch.registerHeadlessTask(this.MyHeadlessTask);
  }







SaveLocation(position){
  fetch("https://heathHive.000webhostapp.com/saveLocation/",{
    
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "domain.com",
        "x-rapidapi-key": "",
        "content-type": "application/x-www-form-urlencoded",
      },
      "body": JSON.stringify({
        "ref": this.state.ref,
        'position': position
      
      }),
    
  }).then(response=>  response.text()).then(data=>{
           console.log(data)
  }).catch(error=> console.log(error))
}




UNSAFE_componentWillMount(){
  Geolocation.clearWatch(this.watchID);
}
  // splash screen handler ends
 getDetails(user){ 
  return fetch("https://heathhive.000webhostapp.com/getUser/",
  {
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "domain.com",
      "x-rapidapi-key": "",
      "content-type": "application/x-www-form-urlencoded",
    },
    "body": JSON.stringify({
      "ref": user,
    
    }),
  })
  .then((response) => response.json())
  .then((data) => {
  console.log(data.data)
      this.setState({data : {image : data.data.passport, "name": (data.data.first_name + ' ' + data.data.last_name), "phone" : user}})
  // console.log(this.state)


  })
  .catch((error) => {
     console.error(error);
 
  this.showSnack("could not connect")
  });
}
  render() {
   
   if (this.state.firstLaunch === "null" ){
  return <SplashScreen  style={styles} /> 
     }else{
     return   this.state.isLogged?  this.Navigation_screen : <Mainz setLogged={this.setLogged}  />
     }
    // return null;  This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
  
 
   

    



  }



}








const Drawer = createDrawerNavigator();
const Home2 = createStackNavigator();
const BookT = createStackNavigator();
const SelfT = createStackNavigator();
const Profile2 = createStackNavigator();
const Notif = createStackNavigator();
const Bottom = createStackNavigator();
const Support2 = createStackNavigator();
const Tab = createBottomTabNavigator();



function Home_stack({navigation}){

  return(
    
    <Home2.Navigator 
   
    screenOptions={
   {
     headerShown:false
   }
    }
   
    
    >
      <Home2.Screen 
      component = {Home}
      name ="Home"
         />
     
  
    </Home2.Navigator>
  )
}


function Self_stack({navigation}){
  return(
    <SelfT.Navigator

    screenOptions={
      {
        headerShown:false
      }
       }
   
    
    >
      <SelfT.Screen 
      component = {SelfTest}
      name ="Self Test"
         />
     
   
    </SelfT.Navigator>
  )
}

function Notif_stack({navigation}){
  return(
    <Notif.Navigator
 
    screenOptions={
      {
        headerShown:false
      }
       }
   
    
    >
      <Notif.Screen 
      component = {Notification}
      name ="Notification"
         />
     
   
    </Notif.Navigator>
  )
}


function Profile_stack({navigation}){
  return(
    <Profile2.Navigator
    screenOptions={
      {
        headerShown:false
      }
       }
   
    
    >
      <Profile2.Screen 
      component = {Profile}
      name ="Profile"
         />
     
   
    </Profile2.Navigator>
  )
}


function Bottom_stack(props){
  //console.log(props, "pp")
  //navigationProps={navigation}
  return(
    <Bottom.Navigator
  
    screenOptions = {{
      headerStyle:{
        backgroundColor: "#ffffff",
        elevation: 0,
        shadowOpacity: 0
      },
     
      headerLeft : ()=> <Header navigationProps={props.navigation} data={props.data}  />,
      headerTintColor: "#00000",
      headerRight: ()=> <TouchableOpacity ><Icon name='bell' color='#009900' size={20} /></TouchableOpacity>,
      headerRightContainerStyle :{
        padding: 10,
      },
      headerLeftContainerStyle :{
        padding: 10,
      },
    
    }
    }
    
    
    
    >
      <Bottom.Screen 
      component = {Main_bottom_stack}
      name ="Main"
       options = {({route})=>({
        //  console.log(route)
    
           title:  route.state == undefined? "Home" : route.state.routeNames[route.state.index]
       })}
         />
     
    </Bottom.Navigator>
  )
}


function BookT_stack({navigation}){
  return(
    <BookT.Navigator
   
    screenOptions={
      {
        headerShown:false
      }
       }
    
    >
      <BookT.Screen 
      component = {BookTest}
      name ="Schedule Test"
      
         />
    
      
    </BookT.Navigator>
  )
}

function Support_stack({navigation}){
  return(
    <Support2.Navigator

    screenOptions={
      {
        headerShown:false
      }
       }
    >
      <Support2.Screen 
      component = {Support}
      name ="Support"
      
         />
    
      
    </Support2.Navigator>
  )
}


function Main_bottom_stack(){
 // console.log("props2", props)
  return(
    <Tab.Navigator 
  tabBar = {props => <MyTabBar {...props} />}
  tabBarOptions = {{
 
}}
   >
      <Tab.Screen
    name="Home"
    component={Home_stack}
 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: "home"
    }}
  />
     <Tab.Screen
    name="Schedule Test"
    component={BookT_stack}
    options={{
      
      tabBarLabel: 'Book Test',
      tabBarIcon: "hospital-building"
     
    }}
  />
    <Tab.Screen
    name="Support"
    component={Support_stack}
    options={{
      tabBarLabel: 'Support',
      tabBarIcon: "account-check"
     
    }}
    
  />
    <Tab.Screen
    name="Profile"
    component={Profile_stack}
     />
      <Tab.Screen
    name="SelfTest"
    component={Self_stack}
     />
      <Tab.Screen
    name="Notification"
    component={Notif_stack}
     />
    </Tab.Navigator>
  )
}