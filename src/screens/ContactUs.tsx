import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const ContactUs = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  console.log(userName, password);

  const submit = () => {
    //return Alert.alert(userName, password);
    if(userName === "Raj" && password === "1234"){
        Alert.alert("Welcome " + userName);
    }else{
        Alert.alert("Invalid User");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us anytime via any@raj.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setUserName(actualData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
      value={agree}
      onValueChange={() => setAgree(!agree)}
      tintColors={{ true: 'green', false: 'gray' }} // Color when checked and unchecked
    />
        <Text style={styles.wrapperText}>
            I have read and agreed with the TC
        </Text>
        </View>


      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? '#4630EB' : 'grey' },
        ]}
        disabled={!agree}
        onPress= { () => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 25,
    fontWeight: '500',
    color: '#344055',
    paddingBottom: 15,
    paddingTop: 20,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  description: {
    fontSize: 20,
    paddingBottom: 20,
    lineHeight: 25,
    color: '#7d7d7d',
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    color: '#7d7d7d',
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
    color: 'black',
  },
    wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderColor: 'black',
  },
  wrapperText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7d7d7d',
    fontFamily: 'regular',
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'bold',
  },

});

export default ContactUs;
