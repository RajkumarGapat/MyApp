import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from "react-native";

const OurButton = () => {
  return (
    <View> 
        <Text style={styles.textStyle}>Buttons</Text>

        < Button 
          //disabled 
          title="Join Now"
          onPress={() => {
          //console.log("Button Clicked")
          Alert.alert("Alert: Button Clicked")
        }}/>

        < TouchableOpacity 
            //disabled
            onPress={() => {
            console.log("Button Clicked")
            Alert.alert("Alert: Button Clicked");
            }}>
              <Image
              style={styles.imgStyle}
              source={require("../../assets/House.jpeg")}></Image>
            <Text>Join Now</Text>
        </TouchableOpacity>
        
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
   marginVertical: 150,
   textAlign: 'center',
   fontSize: 30,
  }, 
  imgStyle: {
    width: 100,
    height: 100,
  } 
})

export default OurButton;
