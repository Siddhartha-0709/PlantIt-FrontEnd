import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Dashboard = () => {
    const navigation = useNavigation();
  const goToCropDiseasePrediction = () => {
    // Navigate to Crop Disease Prediction screen
    // You should replace 'CropDiseasePredictionScreen' with the actual screen name or component
    navigation.navigate('DiseaseAI');
  };

  const goToCropRecommendation = () => {
    // Navigate to Crop Recommendation screen
    // You should replace 'CropRecommendationScreen' with the actual screen name or component
    navigation.navigate('PlantRecommendation');
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={goToCropDiseasePrediction}>
        <Text style={styles.buttonText}>Crop Disease Prediction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToCropRecommendation}>
        <Text style={styles.buttonText}>Crop Recommendation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;
