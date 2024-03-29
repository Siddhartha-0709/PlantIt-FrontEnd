import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SecondScreen = () => {
  const navigation = useNavigation();
  const handleSignUp = ()=>{
    
    navigation.navigate('SignUp')
  }
  const handleLogin = ()=>{
    navigation.navigate('Login');
  } 
  return (
    <View style={styles.container}>
      {/* <Image source={require('../screens/assets/Connect.png')} style={styles.backgroundImage} /> */}
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle1}></View>
        <View style={styles.rectangle2}></View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.connectText}>Connect and Collaborate</Text>
        <View style={styles.rectanglesContainerBetweenText}></View>
        <Text style={styles.engage}> Cultivating your green oasis! Even novices can nurture thriving indoor and outdoor gardens. Explore our extensive plant database and join a vibrant community of enthusiasts, sharing tips, tricks, and the beauty of flourishing flora.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.button1Text}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
            <Text style={styles.button2Text}>Log In</Text>
          </TouchableOpacity>
        </View>
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
    width: '100%',
    height: '50%',
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
    width: 8,
    height: 8,
    backgroundColor: '#A9A9A9',
    marginRight: 5,
    borderRadius: 5,
  },
  rectangle2: {
    width: 15,
    height: 8,
    backgroundColor: '#A8DF8E',
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectText: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 0,
    color: 'green',
  },
  rectanglesContainerBetweenText: {
    height: 15,
  },
  engage: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 60,
    textAlign: 'center',
    marginLeft:10,
    marginRight:10,
    color: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUpButton: {
    backgroundColor: '#C1F2B0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginRight: 10,
    marginBottom:10
  },
  logInButton: {
    backgroundColor: '#65B741',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginBottom:10
  },
  button1Text: {
    color: '#557A46',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2Text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
