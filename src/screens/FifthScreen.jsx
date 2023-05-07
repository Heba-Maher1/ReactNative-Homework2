import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import {DATE_BACKGROUND} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';

const ThirdScreen = () => {
  return (
    <View>
      <ImageBackground
        source={DATE_BACKGROUND}
        style={styles.background}>
        <Text
          style={styles.text}>
          How many times a week you need to be achive?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="3 times a week"
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
    marginTop: 390,
  },
  input: {
    width: '50%',
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  btnView: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
  },
});

export default ThirdScreen;
