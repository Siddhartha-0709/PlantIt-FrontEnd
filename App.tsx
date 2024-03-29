
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
import Blog from './Components/screens/Blog'
import BlogView from './Components/screens/BlogView'
import BlogUpload from './Components/screens/BlogUpload'
import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyA8PnNOuXFKGUarBqHQ7a94nIfP-boimhk',
  authDomain: 'plantit-416016.firebaseapp.com',
  databaseURL: 'https://plantit-416016-default-rtdb.firebaseio.com',
  projectId: 'plantit-416016',
  storageBucket: 'plantit-416016.appspot.com',
  messagingSenderId: '428181209108',
  appId: '1:428181209108:web:dd231b65b26e754486a701',
  measurementId: 'G-C1PPLEPGY6',
};
import FirstScreen from './Components/screens/FirstScreen'
import SecondScreen from './Components/screens/SecondScreen'

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  console.log('Firebase Initialized');
};
const App = () => {
  initFirebase();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ headerShown: false }}
        /> 
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BlogUpload"
          component={BlogUpload}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressInput"
          component={AddressInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Blogs"
          component={Blog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BlogView"
          component={BlogView}
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
