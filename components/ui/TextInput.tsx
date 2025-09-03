import { useState } from "react";
import { StyleSheet,Text,View ,TextInput} from "react-native";
function TextInputComponent(){
    const [value,setValue]=useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Text Input  component</Text>
            <TextInput style={styles.input} onChangeText={setValue} value={value} placeholder="Type here"/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginBottom:20,
    },
    headerText:{
     fontSize:20,
     fontWeight:"bold",
     color:"red",
     marginBottom:20,
     marginTop:20,
     textDecorationLine:'underline',
    },
    input:{
        height:50,
        borderColor:"grey",
        borderWidth:1,
        padding:10,
        borderRadius:10,
        marginBottom:20,
    }
})
export default TextInputComponent;