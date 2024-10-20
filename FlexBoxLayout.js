// FlexBoxLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FlexBoxLayout() {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
    height: 100,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    height: 100,
  },
  box2: {
    flex: 2,
    backgroundColor: 'orange',
    height: 100,
  },
  box3: {
    flex: 3,
    backgroundColor: 'green',
    height: 100,
  },
});
