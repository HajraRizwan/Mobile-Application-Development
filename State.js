import React, { useState } from 'react';
import { View, Button } from 'react-native';

export default function Example() {
  const [text, setText] = useState('Button');

  const toggleText = () => {
    setText(prevText => (prevText === 'Button' ? 'Pressed' : 'Button'));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title={text} onPress={toggleText} />
    </View>
  );
}
