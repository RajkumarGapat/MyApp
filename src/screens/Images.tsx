import React from"react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import CardDetail from "../components/CardDetail";

const ImageFile = () => {  
    return (
            <ScrollView>
            <CardDetail 
            textData="This is my first image"
            imgSrc={require("../../assets/House.jpeg")}
             />
            <CardDetail 
            textData="This is my second image"
            imgSrc={require("../../assets/Sea.jpeg")}
             />
             <CardDetail 
            textData="This is my third image"
            imgSrc={require("../../assets/House.jpeg")}
             />
        </ScrollView>
    ); 
};

export default ImageFile;