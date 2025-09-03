import { StyleSheet, Text, View } from "react-native";
function StylingDemo(){
    return (
        <View style={styles.container}>
            <Text>Styling Demo</Text>
            <View style={{width:50,height:50,backgroundColor:"red"}}>

            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginBottom:20,
    }
})
export default StylingDemo;
