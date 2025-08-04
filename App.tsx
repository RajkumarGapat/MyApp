import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from './src/screens/CustomComponent';
import FirstChallenge from './src/screens/FirstChallenge';
import FlatListDemo from './src/screens/FlatListDemo';
import ImageFile from './src/screens/Images';
import OurButton from './src/screens/OurButton';
import NetflixCard from './src/components/NetflixCard';
import DemoStyles from './src/screens/DemoStyles';
import ChallengeFlatList from './src/screens/ChallengeFlatList';
import CounterNumber from './src/screens/CounterNumber';
import ColorGenerator from './src/screens/ColorGenerator';
import HookEffect from './src/screens/HookEffect';
import ContactUs from './src/screens/ContactUs';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  //const myName = 'Raj';

  const Stack = createNativeStackNavigator();

  return (
    // // <View> 
    //   {/* <Text style= {styles.textStyle}> Hello World! from App.tsx & my name is {myName}</Text>
    //   <CustomComponent /> */}
    //   {/* <FirstChallenge /> */}
    //   {/* <FlatListDemo/> */}
    //   {/* <Images/> */}
    //   {/* <OurButton /> */}
    //   {/* <ImageFile/> */}
    //   {/* <NetflixCard/> */}
    //   {/* <DemoStyles/> */}
    //   {/* <ChallengeFlatList/> */}
    //   {/* <CounterNumber/> */}
    //   {/* <ColorGenerator/> */}
    //   {/* <HookEffect/> */}
    //   {/* <ContactUs/>
    // </View> */}

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={ContactUs} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    marginTop: 20,
  },  
})

export default App;
