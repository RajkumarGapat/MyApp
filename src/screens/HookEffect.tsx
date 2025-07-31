import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

const HookEffect = () => {
  const [myuserData, setMyUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapaTechnical.github.io/userapi/users.json',
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
        {isLoaded ? 
        (<View style={styles.loader}> <ActivityIndicator size="large" color="#00e0ff"/> </View>)
        : (
            <View> 

         
      <Text style={styles.mainHeader}> My User Data </Text>
      <FlatList
        data={myuserData}
        renderItem={({ item }) => {
          return (
            <View style={styles.imgContainer}>
              <Image
                style={styles.imgStyle}
                resizeMode="cover"
                source={{
                  uri: item.image,
                }}
              />

              <View>
                <View style={styles.bioDataContainer}>
                  <Text style={styles.bioData}> Bio-Data </Text>
                  <Text style={styles.idNumber}> {item.id < 10 ? `#0${item.id}` : `#${item.id}}` }</Text>
                </View>

                <View style={styles.card}>
                  <Text style={styles.myName}> Name : {item.name} </Text>
                  <Text style={styles.myName}> Email : {item.email} </Text>
                  <Text style={styles.myName}> Mobile : {item.mobile} </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
         </View>
          )
        }
    </View>
  );
};

const styles = StyleSheet.create({
    loader: {
        minHeight: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    mainContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a', 
    paddingTop: 40,
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00e0ff',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  imgContainer: {
    backgroundColor: '#068e8cff',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 4,
  },
  imgStyle: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  bioDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    display: 'flex',
  },
  bioData: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5c518',
  },
  idNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },
  card: {
    display: 'flex',
    backgroundColor: '#1c1c1c',
    paddingTop: 8,
    borderRadius: 8,
    borderTopWidth: 1,
    borderColor: '#444',
    justifyContent: 'space-between',
  },
  myName: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
});


export default HookEffect;
