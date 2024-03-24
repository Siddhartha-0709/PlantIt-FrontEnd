
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlantRecommendation from './Components/screens/PlantRecommendation'
import DiseaseAI from './Components/screens/DiseaseAI'
import DiseaseAIResult from './Components/screens/DiseaseAIResult'
import Home from './Components/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToCart from './Components/screens/AddToCart'
import AddressInput from './Components/screens/AddressInput'
import Payment from './Components/screens/Payment'
import CropsRecommendation from './Components/screens/CropsRecommendation';
import CropsResult from './Components/screens/CropsResult';
import GardenRecommendation from './Components/screens/GardenRecommendation'
import Menu from './Components/screens/Menu'
import GardenRecommendationResults from './Components/screens/GardenRecommendationResults'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressInput"
          component={AddressInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CropRecommendation"
          component={CropsRecommendation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlantRecommendation"
          component={PlantRecommendation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiseaseAI"
          component={DiseaseAI}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CropsResult"
          component={CropsResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiseaseAIResult"
          component={DiseaseAIResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GardenRecommendation"
          component={GardenRecommendation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GardenRecommendationResults"
          component={GardenRecommendationResults}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
