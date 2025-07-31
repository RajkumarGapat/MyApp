import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";  

const CounterNumber = () => {
    const [counter, setCounter] = useState(0);
    //let counter = 0;
    return (
        <View>
        <Text style={styles.counter}> {counter} </Text>

        <View style= {styles.button_group}>
            <TouchableOpacity style={[styles.commonButton, styles.subtract]}
            onPress={() => {
                setCounter(counter + 10);
                console.log(counter + 10);
            }}>
                <Text style={styles.commonText}> +10 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.commonButton, styles.reset]}
            onPress={() => {
                const count = setCounter(0);
                console.log(count);
            }}>
                <Text style={styles.commonText}> Reset </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.commonButton, styles.add]}
            onPress={() => {
                if(counter > 0) setCounter(counter - 10);
                console.log(counter - 10);
            }}>
                <Text style={styles.commonText}> -10 </Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        color : 'red',
    },
    button_group: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    counter: {
        color: 'white',
        width: '100%',
        fontSize: 80,
        padding: 20,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 30, 
    },
    commonButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
     subtract: {
        backgroundColor: '#1E90FF', // DodgerBlue
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: 100,
    },
    reset: {
        backgroundColor: '#FFD700', // Gold
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: 100,
    },
    add: {
        backgroundColor: '#FF6347', // Tomato
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: 100,
    },
    commonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CounterNumber;