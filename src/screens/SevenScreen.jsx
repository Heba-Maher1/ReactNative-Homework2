import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {SUCCESS_BACKGROUND, LOGO} from '../assets';
import {Colors} from '../constants/colors';
import Button from '../components/Button';
const SevenScreen = () => {
  return (
    <View >
      <ImageBackground 
      style={styles.container}
        source={SUCCESS_BACKGROUND}
>
        <View
          style={{
            width: '90%',
          }}>
            <Text style={styles.text}>Your workout start</Text>
          <Button style={styles.button} title="Lets Started" color={Colors.ORANGE} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text:{
    textAlign:'center',
    color:'#ccc',
    fontSize:20,
    borderColor:'blue',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginBottom:30,
    marginTop:200,
  },
});

export default SevenScreen;
