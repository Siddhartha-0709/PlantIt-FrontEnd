import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
// import { auth } from 'react-native-firebase/auth';
const SecondScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '428181209108-6lks0ar467uo6invdeuvgltg7qumap6j.apps.googleusercontent.com',
    });
    console.log('Configured');
  }, []);
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    try {
      console.log('Entered');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      // console.log(idToken);
      // console.log(user);
      navigation.navigate('Home', {user: user});
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
    // Sign-in the user with the credential
  };
  // use the client id in the google-services.json file under the "oauth_client"
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E2F4C5" />

      <View style={styles.container}>
        <Image
          source={require('../Icons/gardening.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.rectanglesContainer}>
          <View style={styles.rectangle1}></View>
          <View style={styles.rectangle2}></View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.connectText}>Connect and Collaborate</Text>
          <View style={styles.rectanglesContainerBetweenText}></View>
          <Text style={styles.engage}>
            {' '}
            Even novices can nurture thriving indoor and outdoor gardens.
            Explore our extensive plant database and join a vibrant community of
            enthusiasts, sharing tips, tricks, and the beauty of flourishing
            flora.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#C1F2B0',
                borderRadius: 25,
                width: 250,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onGoogleButtonPress}>
              <Image
                source={require('../Icons/google.jpg')}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
              />
              <Text
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '600',
                  marginLeft: 8,
                }}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: 400,
    height: 400,
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
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  // signUpButton: {
  //   backgroundColor: '#C1F2B0',
  //   paddingVertical: 15,
  //   paddingHorizontal: 50,
  //   borderRadius: 25,
  //   marginRight: 10,
  //   marginBottom:10
  // },
  logInButton: {
    backgroundColor: '#65B741',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginBottom: 10,
  },
  // button1Text: {
  //   color: '#557A46',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  button2Text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
