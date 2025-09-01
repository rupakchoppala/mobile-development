import React, { JSX, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

function Basics(): JSX.Element {
  const[count,setCount]=useState(0);
  return <View >
      <View style={styles.boxContainer}>
      <View style={styles.boxred}>
        </View>
        <View style={styles.boxblue}>
        </View>
      </View>
      <Text style={styles.MyText}>
        My first react native app
      </Text>
      <Text style={styles.nextedText}>
        My first react native app
        <Text style={styles.bold}>Example</Text>
      </Text>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Image style={styles.image} source={require("../../assets/images/icon.png")}/>
      <Button color={"red"}   title="Click me" onPress={()=>setCount(count+1)}/>
      <Text style={styles.nextedText}>the count is {count}</Text>
  </View>
}

const styles = StyleSheet.create({
//  container:{
//   marginBottom:20,
//  },
 boxContainer:{
  flexDirection:'row',
  justifyContent:"space-around",
 },
 boxblue:{
  width:50,
  height:50,
  backgroundColor:"blue"
 },
 boxred:{
  width:50,
  height:50,
  backgroundColor:"red"
 },
 MyText:{
  fontSize:30,
  color:"red",
 },
 nextedText:{
  fontSize:20,
  
 },
 bold:{
  fontWeight:"bold",
 
 },
 image:{
  width:100,
  height:100,
 }

});
export default Basics;