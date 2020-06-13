import React from 'react'

import {View,  StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
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
import Favcon from 'react-native-vector-icons/MaterialIcons';



function getImage(){
    
}
export default function SideBar(props){
  state = {
      "image": '',
      "name" : '',
      "phone": ''
  }

//console.log("props", props.data)
    return(
      
            <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                    <Drawer.Section>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                          { props.data.passport == null ?  <Avatar.Text size={50} label={props.data.name.substring(0,1)} /> :

                            <Avatar.Image 
                                source={{
                                    uri:  props.data.passport
                                }}
                                size={50}
                            /> 
                             }
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{props.data.name}</Title>
                                <Caption style={styles.caption}>{props.data.phone}</Caption>
                            </View>
                          
                        </View>
                        </Drawer.Section>
                        
                    </View>

                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate("Home")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="hospital" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Take Self Test"
                            onPress={() => {props.navigation.navigate('SelfTest')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="hospital-building" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Book a Test"
                            onPress={() => {props.navigation.navigate('Schedule Test')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Favcon
                                name = "notifications" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Notification"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { props.setLogged(false)}}
                />
            </Drawer.Section>
        </View>
    );
}
async function r(){
    await AsyncStorage.removeItem('phone') 
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });