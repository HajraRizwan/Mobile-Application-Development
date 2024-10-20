import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function TextInputComponent({ handleTextChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Type something..."
      onChangeText={handleTextChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%', // Set width to 100% to fill the screen
    marginBottom: 20,  // Space between TextInput and Button
  },
});
