// App.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen'; // Import your HomeScreen component
import DetailsScreen from './components/DetailsScreen'; 
import Props_Ex from './components/Props_Ex'; 
import Example from './components/State'; 
import TextInputComponent from './components/TextInputComponent'; 
import HungryButton from './components/HungryButton'; 
import LogButton from './components/LogButton'; 
import FlexBoxLayout from './components/FlexBoxLayout'; 
import Scrolling from './components/Scrolling'; // Import the Scrolling component

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [isHungry, setIsHungry] = useState(true);
  const [inputText, setInputText] = useState('');

  const handleTextChange = (text) => {
    setInputText(text);
    console.log(text);
  };

  const handlePress = () => {
    setIsHungry(false);
    console.log("Button Pressed!");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* Main Screen */}
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {({ navigation }) => (
            <ScrollView style={styles.container}>
              {/* Button to navigate to Home Screen */}
              <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} />

              {/* Button to navigate to Scrolling Screen */}
              <Button title="Go to Scrolling Screen" onPress={() => navigation.navigate('Scrolling')} />

              {/* Props_Ex Component */}
              <Props_Ex student_name="Hajra" father_name="Rizwan" />

              {/* State Example Component */}
              <Example />

              {/* Spacer */}
              <View style={styles.spacer} />

              {/* TextInput and Buttons Section */}
              <TextInputComponent handleTextChange={handleTextChange} />
              <HungryButton isHungry={isHungry} handlePress={handlePress} />
              <LogButton inputText={inputText} />

              {/* FlexBoxLayout Component */}
              <FlexBoxLayout />
            </ScrollView>
          )}
        </Stack.Screen>

        {/* Details Screen */}
        <Stack.Screen name="Details" component={DetailsScreen} />

        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Scrolling Screen */}
        <Stack.Screen name="Scrolling" component={Scrolling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensure content can grow
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  spacer: {
    height: 30, // Adjust the space between components
  },
});
