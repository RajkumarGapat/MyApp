import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";


const FlatListDemo = () => {
    const names = [
        { 
            index : "1",
            name: 'Raj',
        },
        { 
            index : "2",
            name: 'Rajesh',
        },
        { 
            index : "3",
            name: 'Ramesh',
        },
        { 
            index : "4",
            name: 'Ram',
        },
        { 
            index : "5",
            name: 'Raj',
        },
        { 
            index : "6",
            name: 'Roy',
        },
        { 
            index : "7",
            name: 'Sam',
        },
        { 
            index : "8",
            name: 'Dan',
        },  
    ]

    return (
        <FlatList 
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.index;
        }} 
        horizontal
        inverted
        //numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={names} 
        renderItem={({item}) => {
            console.log(item.name)
            return <Text style={styles.textStyle}>{item.name}</Text>
        }} />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'white',
        margin: 20,
        fontSize: 20,
        padding: 30,
        backgroundColor: 'green',
    },
    listStyle: {
        margin: 20,
        padding: 10,
    }
});

export default FlatListDemo;