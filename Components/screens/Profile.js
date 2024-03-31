import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Profile = ({route}) => {
  const userAccount = route.params.userAccount;
  const navigation = useNavigation();
  const handleAboutUs = ()=>{
    navigation.navigate('AboutUs')
  }
  const handlePrivacyPolicy = ()=>{
    navigation.navigate('Privacy')
  }
  const handleOrders = ()=>{
    navigation.navigate('Orders',{
      userAccount: userAccount
    })
  }
  const handleSignOut = ()=>{
    navigation.navigate('FirstScreen');
  }
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

      {/* Profile Rectangle Container */}
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
          Profile
        </Text>
      </View>

      <View style={{paddingLeft: 20, paddingRight: 10, marginTop: 150}}>
        <TouchableOpacity
          style={{
            height: 70,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={handleOrders}>
          <Image
            source={require('../Icons/checkout.png')}
            style={{width: 27, height: 27, marginRight: 20}}
          />
          <Text style={{color: 'black', fontSize: 25, fontFamily: 'monospace'}}>
            My Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 70,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={handleAboutUs}
          >
          <Image
            source={require('../Icons/about.png')}
            style={{width: 23, height: 23, marginRight: 20}}
          />
          <Text style={{color: 'black', fontSize: 25, fontFamily: 'monospace'}}>
            About Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 70,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={handlePrivacyPolicy}>
          <Image
            source={require('../Icons/privacy.png')}
            style={{width: 25, height: 25, marginRight: 20}}
          />
          <Text style={{color: 'black', fontSize: 25, fontFamily: 'monospace'}}>
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{height: 70, flexDirection: 'row', alignItems: 'center'}}
          onPress={handleSignOut}
          >
          <Image
            source={require('../Icons/logout.png')}
            style={{width: 25, height: 25, marginRight: 15, marginLeft: 5}}
          />
          <Text style={{color: 'black', fontSize: 25, fontFamily: 'monospace'}}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: 'black',
    height: 50,
    marginHorizontal: 100,
    marginTop: 40,
    borderRadius: 80,
  },
});
