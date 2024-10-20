// HungryButton.js
import React from 'react';
import { Button } from 'react-native';

export default function HungryButton({ isHungry, handlePress }) {
  return (
    <Button
      title={isHungry ? "Feed Me!" : "I'm Full"}
      onPress={handlePress}
      color="blue"
      disabled={!isHungry}
    />
  );
}
