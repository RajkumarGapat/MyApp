import React from "react";
import { View, Text , StyleSheet} from "react-native";


const FirstChallenge = () => {
    return (
        <View>
            <Text style={styles.textStyleOne}>My name is Raj </Text> 
            <Text style={styles.textStyleTwo}> I love React Native</Text> 
            <Text style={styles.textStyleThree}>I'm dveveloping react native app</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    textStyleOne: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
    },
    textStyleTwo: {
        color: 'green',
        fontSize: 30,
        fontStyle: 'italic',
    },
    textStyleThree: {
        color: 'blue',
        fontSize: 20,
    },
});

export default FirstChallenge;