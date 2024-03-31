import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#E2F4C5" />
      <View style={{height: 50, backgroundColor: '#E2F4C5'}}>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            left: 10,
            fontSize: 25,
            color: '#000000',
            zIndex: 1,
            fontWeight: '900',
            fontFamily: 'monospace',
          }}>
          Plant<Text style={{color: 'red', fontWeight: '900'}}>It</Text>
        </Text>
      </View>
      <View
        style={{
          height: 50,
          marginBottom: 10,
          backgroundColor: '#000000',
          minWidth: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 30,
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '600',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}>
          About Us
        </Text>
      </View>
      <ScrollView style={{height:'83%', paddingLeft:10, paddingRight:10}}>
        <Text style={{color:'#000000', fontSize:28, textAlign:'center', fontFamily:'monospace', fontWeight:'900'}}>PlantIt</Text>
        <Text style={{color:'#000000', fontSize:28, textAlign:'center', fontFamily:'monospace', fontWeight:'900'}}>Grow Your Urban Jungle</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:20}}>PlantIT is more than just an online plant store; it's a thriving community dedicated to fostering connections with nature, one houseplant at a time. We believe everyone deserves to experience the joys of greenery, regardless of experience or living space.</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}><Text style={{fontWeight:'700', fontSize:15, textAlign:'left', color:'#000000' }}>Unbeatable Plant Selection:</Text>Discover a diverse range of houseplants, from low-maintenance wonders to statement-making tropical beauties. Whether you're a seasoned plant parent or a curious newbie, we have the perfect addition to your urban jungle.</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}><Text style={{fontWeight:'700', fontSize:15, textAlign:'left', color:'#000000' }}>Your Plant Whisperer:</Text> Don't worry about drooping leaves or mysterious spots! Our cutting-edge AI technology offers:</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}><Text style={{fontWeight:'700', fontSize:15, textAlign:'left', color:'#000000' }}>Disease Detection:</Text> Simply upload a picture, and our AI assistant will diagnose any potential problems, empowering you to take swift action and keep your plants thriving.</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}><Text style={{fontWeight:'700', fontSize:15, textAlign:'left', color:'#000000' }}>Plant Recommendation Engine:</Text> Unsure which plant is right for you? Answer a few quick questions about your lifestyle and lighting conditions, and our AI will curate personalized plant recommendations that perfectly match your needs.</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}><Text style={{fontWeight:'700', fontSize:15, textAlign:'left', color:'#000000' }}>A Community that Blooms:</Text> Connect with fellow plant enthusiasts in our vibrant community blog. Share plant care tips, swap stories about your leafy companions, and get inspired by breathtaking plant photography.</Text>
        <Text style={{color:'grey', fontSize:15, textAlign:'left', fontFamily:'monospace', marginTop:10}}>PlantIT is your one-stop shop for everything plant-related. We're passionate about helping you cultivate a thriving green haven, and we're here to support you every step of the way. Let's grow together!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});
