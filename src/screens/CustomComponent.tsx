import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomComponent = () => {
  return (
    <Text style={styles.textStyle}>
      Hello World! This is my custom component
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});
export default CustomComponent;
