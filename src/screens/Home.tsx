import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({route, navigation}) => {
    const {myName} = route.params;
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Welcome {myName}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeader: {
        fontSize: 30,
        color: 'green',
    },
});

export default Home;