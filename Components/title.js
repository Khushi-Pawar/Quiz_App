import React  from "react";
import { View , Text, StyleSheet} from "react-native"

const Title = ({titleText}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
   
  )
  }

  const styles = StyleSheet.create({
    title:{
        fontSize: 36,
        fontWeight: "600",
        fontStyle: "italic", 
        color: "#9d4edd",
    },
    container:{
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
    },
  })

  export default Title;