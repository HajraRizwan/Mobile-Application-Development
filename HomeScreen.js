// HomeScreen.js
import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Image, 
  Switch, 
  StatusBar, 
  Button, 
  ImageBackground, 
  StyleSheet 
} from 'react-native';

// Home Screen component
export default function HomeScreen({ navigation }) {
  // Switch state management
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ImageBackground 
      source={{ uri: 'https://ss-i.thgim.com/public/incoming/9t1h7r/article66218183.ece/alternates/FREE_1200/imp.jpg' }} // Replace with a valid image URL
      style={styles.background}
    >
      {/* StatusBar customization */}
      <StatusBar barStyle="light-content" hidden={false} />
      
      <View style={styles.container}>
        {/* TouchableOpacity example */}
        <TouchableOpacity 
          style={styles.touchableButton} 
          onPress={() => alert("Touchable Pressed!")}>
          <Text style={styles.buttonText}>Press Me!</Text>
        </TouchableOpacity>

        {/* Switch example */}
        <Switch
          value={isEnabled}
          onValueChange={(newValue) => setIsEnabled(newValue)}
        />
        <Text style={styles.switchText}>Switch is {isEnabled ? 'ON' : 'OFF'}</Text>

        {/* Image display */}
        <Image 
          source={{ uri: 'https://ss-i.thgim.com/public/incoming/9t1h7r/article66218183.ece/alternates/FREE_1200/imp.jpg' }} 
          style={styles.image} 
        />

        {/* Navigation Button */}
        <Button 
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ImageBackground>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the background image covers the whole screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add some transparency to the background
  },
  touchableButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
  switchText: {
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
