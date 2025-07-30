import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ChallengeFlatList = () => {
  const netflixSeries = [
    {
      name: 'Archieve 81',
      year: '2022',
      Creator: 'Rebecca Sonnenshine',
      Genere: 'Horror, Thriller',
    },
    {
      name: 'Cheer',
      year: '2021 - 2022',
      Creator: 'Samual L. Jackson',
      Genere: 'Docuseries',
    },
    {
      name: 'Cobra Kai',
      year: '2018 - 2022',
      Creator: 'Hydene Zoldyck',
      Genere: 'Drama',
    },
    {
      name: 'The Witcher',
      year: '2020 - 2022',
      Creator: 'Lauren Cohan',
      Genere: 'Reality',
    },
    {
      name: 'Early in Pris',
      year: '2020',
      Creator: 'Schmidt Hissrich',
      Genere: 'Romance, Drama',
    },
    {
      name: 'Anaconda',
      year: '2018 - 2024',
      Creator: 'Lauren Cohan',
      Genere: 'Reality',
    },
    {
      name: 'Bullet Proof',
      year: '2021',
      Creator: 'Hydene thomas',
      Genere: 'Action',
    },
    {
      name: 'John Wick',
      year: '2023',
      Creator: 'John Doe',
      Genere: 'Action, Thriller',
    },
    {
      name: 'Intersteller',
      year: '2024',
      Creator: 'Anderson Walters',
      Genere: 'Adventures, Sci-Fi',
    },
    {
      name: 'Death Note',
      year: '2021',
      Creator: 'Rand Henderson',
      Genere: 'Suspense, thriller',
    },
  ];

  return (
    <View>
        <Text style={styles.textStyleOne}>The list of top 10 netflix series</Text>
    <FlatList
    style={styles.listStyle}
    keyExtractor={ (key) => {
        return key.name 
    }}
    horizontal
    showsHorizontalScrollIndicator={false}  
      data={netflixSeries}
      renderItem={({ item }) => {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}> Name : {item.name} </Text>
                <Text style={styles.textStyle}> Year :  {item.year} </Text>
                <Text style={styles.textStyle}> Creator : {item.Creator} </Text>
                <Text style={styles.textStyle}> Genere : {item.Genere} </Text>
            </View>
        )
      }}
    />
</View>
  );
};

const styles = StyleSheet.create ({
    listStyle: {
        padding: 5,
        margin: 20,
        textAlign: 'center',
    },
    textStyle: {
        color: 'white', 
        fontSize: 30,
        padding: 5,
        textAlign: "center",
        backgroundColor: 'green', 
    },
    viewStyle: {
        padding: 5,
        margin: 20,
    },
    textStyleOne: {
        margin: 30,
        fontSize: 50,
        color: 'red',
    }

})

export default ChallengeFlatList;
