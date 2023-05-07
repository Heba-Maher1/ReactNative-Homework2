import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {SIGNUP_BACKGROUND} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';

const SixScreen = () => {
  return (
    <View>
      <ImageBackground
        source={SIGNUP_BACKGROUND}
        style={styles.background}>
        <Text
          style={styles.text}>
          It's great that you're here! First thing first,what should we call
          you?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={Colors.LIGHT_GREY}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.LIGHT_GREY}
        />

        <View
          style={styles.btnView}>
          <Button title="Create Account" color={Colors.ORANGE} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    fontSize: 24,
    fontWeight: '500',
    color: Colors.LIGHT_GREY,
    textAlign: 'center',
    marginTop: 350,
  },
  input: {
    width: '85%',
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    padding: 10,
  },
  btnView: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
  },
});

export default SixScreen;
