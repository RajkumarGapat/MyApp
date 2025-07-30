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


const App = () => {
  //const myName = 'Raj';
  return (
    <View> 
      {/* <Text style= {styles.textStyle}> Hello World! from App.tsx & my name is {myName}</Text>
      <CustomComponent /> */}
      {/* <FirstChallenge /> */}
      {/* <FlatListDemo/> */}
      {/* <Images/> */}
      {/* <OurButton /> */}
      {/* <ImageFile/> */}
      {/* <NetflixCard/> */}
      <DemoStyles/>
      {/* <ChallengeFlatList/> */}
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    marginTop: 20,
  },  
})

export default App;
