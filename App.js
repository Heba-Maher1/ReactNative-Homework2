import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import InitialScreen from './src/screens/InitialScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourhtScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';
import SixScreen from './src/screens/SixScreen';
import SevenScreen from './src/screens/SevenScreen';
const App = () => {
  return (
    <View>
      <InitialScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
