import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DemoStyles = () => {
    return (
        <View style={styles.parentView}>
            <Text style={[styles.childText, styles.commonStyle]}> Box 1</Text>
            <Text style={[styles.childText2, styles.commonStyle]}> Box 2</Text>
            <Text style={[styles.childText3, styles.commonStyle]}> Box 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parentView: {
        width: "95%",
        height: 500,
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "darkgreen",
        backgroundColor: "aliceblue",
        //position: "relative",
        //flexDirection: "row",
        //flexDirection: "column-reverse",        
    },
    childText: {
        backgroundColor: "yellow",
        borderColor: "green",
        color: "blue",
        marginTop: 30,
    },
    childText2: {
      backgroundColor: "gray",
      borderColor: "pink",
      color: "hotpink",
      //right: 0,  
    },
    childText3: {
        backgroundColor: "skyblue",
        borderColor: "magenta",
        color: "maroon",
        //bottom: 0,
        //right: 0,
    },
    commonStyle: {
        fontSize: 20,
        paddingVertical: 30,
        textAlign: "center",
        borderWidth: 10,
        marginBottom: 30,
        marginHorizontal: 50,
        //position: "absolute",
    }
});

export default DemoStyles;