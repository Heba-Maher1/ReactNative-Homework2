import React from 'react';
import {View, Text, ImageBackground , TextInput , StyleSheet} from 'react-native';
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
          When do you want to start ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nov 20,2032"
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
    marginTop: 400,
  },
  btnView: {
    position: 'absolute',
    bottom: 70,
    width: '90%',
  },
});

export default ThirdScreen;
