import React from 'react'
import {
    Platform,
    StyleSheet,
    
    View,
    StatusBar,
    ScrollView,
    ImageBackground,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,
    DeviceEventEmitter,
    ToastAndroid,
    ActivityIndicator,
  } from 'react-native';
  import {
    useTheme,
    Avatar,
    Title,
  
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Header(props){
    console.log(props);
    const toggleDrawer = () => {
      props.navigationProps.toggleDrawer()
 
      };
    return (
      
        <View style={{ flexDirection: 'row' }}>
          <StatusBar barStyle='light-content' backgroundColor='rgba(5,80,20,0.7)'  />
        <TouchableOpacity onPress={toggleDrawer} > 
          { props.data == undefined ? <Avatar.Text  style={{backgroundColor:"green"}} size={40} label={"A"} /> :
        props.data.passport == null ||props.data.passport == undefined ?  <Avatar.Text  style={{backgroundColor:"green"}} size={40} label={props.data.name.substring(0,1)} /> :

<Avatar.Image 
    source={{
        uri:  props.data.passport
    }}
    size={40}
/> 
}
        </TouchableOpacity>
      </View>
    )
}