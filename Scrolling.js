// Scrolling.js
import React from 'react';
import { 
  View, 
  ScrollView, 
  ImageBackground, 
  Text, 
  StyleSheet 
} from 'react-native';

// Scrolling Screen component
export default function Scrolling() {
  // Sample images for demonstration
  const images = [
    'https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png',
    'https://www.jasarat.com/en/wp-content/uploads/2024/06/babar.webp',
    'https://www.hindustantimes.com/ht-img/img/2024/09/10/1600x900/Ben_Stokes_1725978299983_1725978300247.jpg',
    'https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png',
    'https://www.jasarat.com/en/wp-content/uploads/2024/06/babar.webp',
    'https://www.hindustantimes.com/ht-img/img/2024/09/10/1600x900/Ben_Stokes_1725978299983_1725978300247.jpg',
    'https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png',
    'https://www.jasarat.com/en/wp-content/uploads/2024/06/babar.webp',
    'https://www.hindustantimes.com/ht-img/img/2024/09/10/1600x900/Ben_Stokes_1725978299983_1725978300247.jpg',
    'https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png',
    'https://www.jasarat.com/en/wp-content/uploads/2024/06/babar.webp',
    'https://www.hindustantimes.com/ht-img/img/2024/09/10/1600x900/Ben_Stokes_1725978299983_1725978300247.jpg',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {images.map((imageUri, index) => (
          <View key={index} style={styles.box}>
            <ImageBackground 
              source={{ uri: imageUri }} 
              style={styles.image}
            >
              <View style={styles.overlay}>
                <Text style={styles.text}>Box {index + 1}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Add some padding to the container
  },
  grid: {
    flexDirection: 'row', // Use a row direction for the grid
    flexWrap: 'wrap', // Allow wrapping to next row
    justifyContent: 'space-between', // Distribute space evenly
  },
  box: {
    width: '48%', // Set box width to 48% for two columns with margin
    height: 150, // Height of each box
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Add shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.5,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center the overlay
  },
  overlay: {
    position: 'absolute', // Position it absolutely
    top: '50%', // Center it vertically
    left: 0,
    right: 0,
    height: 40, // Reduced height of the rectangle
    marginTop: -20, // Negative margin to center the overlay (half of the height)
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  text: {
    color: 'white', // White text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center text
  },
});
