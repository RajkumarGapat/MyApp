import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://m.media-amazon.com/images/I/61CBWbrOyxL._SL1500_.jpg',
          }}
        />

        <View style={styles.poster__info}>
          <Text style={styles.poster__title}>Macbook</Text>
          <Text style={styles.poster__text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestiae repellat aliquid ipsum qui magnam eveniet velit? Natus,
            fugit eveniet.
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() => Linking.openURL('https://www.youtube.com/')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "josefin-sans",
    color: 'red',
    fontVariant: ['small-caps'],
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
  },
  poster__info: {
    alignItems: 'center',
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'red',
    letterSpacing: 1,
    textShadowOffset: { width: -3, height: 4 },
    textShadowRadius: 10,
    textShadowColor: 'gray',
    //textTransform: 'uppercase',
  },
  poster__text: {
    color: '#999',
    paddingHorizontal: 20,
    marginBottom: 10,
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: 'justify',
  },
  imgStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderRadius: 20,
  },
});

export default NetflixCard;
