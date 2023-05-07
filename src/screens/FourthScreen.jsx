import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {NAME_BACKGROUND} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';

const FourhtScreen = () => {
  return (
    <View>
      <ImageBackground
        source={NAME_BACKGROUND}
        style={styles.background}>
        <Text
          style={styles.text}>
          It's great that you're here! First thing first,what should we call you?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="your Name?"
          placeholderTextColor={Colors.LIGHT_GREY}
        />

        <View
          style={styles.btnView}>
          <Button title="Get Started" color={Colors.ORANGE} />
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
    marginTop: 380,
  },
  input: {
    width: '95%',
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    color: '#fff',
    margin: 20,
    padding: 10,
  },
  btnView: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default FourhtScreen;
