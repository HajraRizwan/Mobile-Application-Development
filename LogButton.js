// LogButton.js
import React from 'react';
import { Button } from 'react-native';

export default function LogButton({ inputText }) {
  return (
    <Button
      title="Log Text"
      onPress={() => console.log(inputText)}
      color="green"
    />
  );
}
