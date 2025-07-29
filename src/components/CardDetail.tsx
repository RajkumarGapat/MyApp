import React from"react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardDetail = ({ textData, imgSrc }) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>{textData}</Text>
      <Image style={styles.imageStyle} source={imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
    listStyle: {
      
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        margin: 30,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
   
});

export default CardDetail;