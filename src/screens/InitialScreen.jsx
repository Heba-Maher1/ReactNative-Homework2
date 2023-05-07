import React from 'react';
import {View, Text, Image, ImageBackground , StyleSheet} from 'react-native';
import {INITIAL_BACKGROUND, LOGO} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';
const InitialScreen = () => {
  return (
    <View>
      <ImageBackground
        source={INITIAL_BACKGROUND}
        style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text
          style={styles.text}>
          Make yourself stronger than your execuse
        </Text>
        <View
          style={styles.btnView}>
          <Button title="Get Started" color={Colors.ORANGE} />
          <Button title="Or Login" color="transparent" />
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
  logo: {
    width: 130,
    height: 130,
  },
  text: {
    width: '70%',
    fontSize: 24,
    fontWeight: '300',
    color: Colors.LIGHT_GREY,
    textAlign: 'center',
  },
  btnView: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
  },
});

export default InitialScreen;
