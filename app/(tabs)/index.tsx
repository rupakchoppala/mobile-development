import Basics from "@/components/ui/Basics";
import TextInputComponent from "@/components/ui/TextInput";
import React, { JSX, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

export default function App(): JSX.Element {
  const[count,setCount]=useState(0);
  return <View style={styles.container}>
    <ScrollView>
     <Basics/>
     <TextInputComponent/>
     </ScrollView>
  </View>
}

const styles = StyleSheet.create({
 container:{
  marginBottom:20,
 },

 

});
