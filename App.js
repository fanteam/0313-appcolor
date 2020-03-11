import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>數位二甲</Text>
      <Text style={styles.text1}>110719040</Text>
      <Text style={styles.text2}>洪湘芸</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'green',
  },

  text1: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'green',
  },

  text2: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'green',
  },


});
