import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const FirstScreen = () => {
  const navigation = useNavigation();  
  const handleGetStarted = () => {
      navigation.navigate('SecondScreen')
    };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Image
        source={require('../Icons/logo2.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle1}></View>
        <View style={styles.rectangle2}></View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to PlantIt!</Text>
        <View style={styles.rectanglesContainerBetweenText}></View>
        <Text style={styles.where}>Greenery in Your Pocket</Text>
        <Text style={styles.join}>
          Your essential guide to greenery! From tailored care reminders to expert tips, our thriving community supports your plant journey.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: 400,
    height:400,
    position: 'absolute',
    zIndex: -1,
    marginTop: 80,

  },
  rectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 530,
  },
  rectangle1: {
    width: 15,
    height: 8,
    backgroundColor: '#A8DF8E',
    marginRight: 5,
    borderRadius: 5,
  },
  rectangle2: {
    width: 8,
    height: 8,
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 0,
    color: 'green',
  },
  rectanglesContainerBetweenText: {
    height: 15,
  },
  where: {
    fontSize: 16,
    marginBottom: 15,
    marginTop: 0,
    color: '#A9A9A9',
  },
  join: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 50,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#65B741',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FirstScreen;
