import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AssetExample(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>{props.student_name}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>{props.father_name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  row: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space out the boxes
  },
  box: {
    backgroundColor: '#f0f0f0', // Light grey background color
    padding: 20,
    margin: 10,
    borderRadius: 8, // Rounded corners for the box
    alignItems: 'center', // Center the text horizontally
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

