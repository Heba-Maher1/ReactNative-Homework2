import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {SUCCESS_BACKGROUND} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';
const SecondScreen = () => {
  return (
    <View>
      <ImageBackground
        source={SUCCESS_BACKGROUND}
        style={styles.background}>
        <Text
          style={styles.text}>
         Your workout start on Nov 21,2032 for 3 times a week , Good Luck Mike!
        </Text>
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
    marginTop: 400,
  },
  btnView: {
    position: 'absolute',
    bottom: 70,
    width: '90%',
  },
});

export default SecondScreen;
