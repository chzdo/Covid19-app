import React, { Component } from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import {
  View, Text, TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class BannerAlert extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            complete: true
        }
    }

   getUser(user){
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
   //  console.log(data,"f")
      //  this.setState({data : {image : data.data.passport, "name": (data.data.first_name + ' ' + data.data.last_name), "phone" : user}})
    // console.log(this.state)
//console.log(Object.keys(data.data))
var state = true;
Object.keys(data.data).map(key=>{
    if (data.data[key]==null){
      //  console.log(data.data[key])
state = false;
    }
})
this.setState({complete: state})
//console.log(this.state)
    })
    .catch((error) => {
       console.error(error);
    
    this.showSnack("could not connect")
    });
      }
async componentDidMount(){
  await this.getUser(this.props.user)
 // console.log(this.props)
}


  render(){ 
   
         return (
       <View style={{ flexDirection: "column", backgroundColor: "rgba(90,0,0,0.8)", width: "100%", Height: "10%", minHeight: "20%", padding: 5}}>
           <View style={{flex:1, color:"white",width:"100%", flexDirection:"row", justifyContent:"flex-start", padding:5}}>
               <Icon name="alert" size={40} color="white" />
              <Text style={{color:"white"}}> You have not omplteted your profile </Text>
           </View>
           <View style={{flex:1, flexDirection:"row" ,  color:"white",width:"100%", justifyContent:"flex-end" , alignItems:"baseline", alignContent:"flex-start", bottom:0, padding:1}}>
               <TouchableOpacity style={{backgroundColor:"white", padding:10}} ><Text>Fix Now</Text></TouchableOpacity>
           </View>
       </View>
         )
}

}