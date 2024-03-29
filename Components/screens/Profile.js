import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#E2F4C5" />
      <View style={{ backgroundColor: 'red', width: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 50, position: 'absolute', zIndex: 1, right: 33, top: 13 }}></View>
      <Text style={{ position: 'absolute', top: 0, left: 10, fontSize: 30, color: '#000000', zIndex: 1, fontWeight: '900', fontFamily: 'monospace' }}>
        Plant<Text style={{ color: 'red', fontWeight: '900' }}>It</Text>
      </Text>
      <View style={{ backgroundColor: '#E2F4C5', height: 65, flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 3 }}></View>

      {/* Profile Rectangle Container */}
      <View style={styles.profileContainer}>
        <Text style={{ position: 'absolute', top: 10, left: 45, fontSize: 25, color: '#FEFBF6', zIndex: 1, fontWeight: '900', fontFamily: 'monospace' }}>Profile</Text>

        <TouchableOpacity>
          <Image source={require('../Icons/checkout.png')} style={{ width: 27, height: 27, position: 'absolute', top: 125, left: 0 }} />
          <Text style={{ color: 'black', position: 'absolute', top: 120, left: 45, fontSize: 25 }}>My Orders</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', position: 'absolute', top: 155, left: 0, width: '100%' }}></View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Icons/about.png')} style={{ width: 23, height: 23, position: 'absolute', top: 195, left: 0 }} />
          <Text style={{ color: 'black', position: 'absolute', top: 190, left: 45, fontSize: 25 }}>About Us</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', position: 'absolute', top: 225, left: 0, width: '100%' }}></View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Icons/privacy.png')} style={{ width: 25, height: 25, position: 'absolute', top: 265 }} />
          <Text style={{ color: 'black', position: 'absolute', top: 260, left: 40, fontSize: 25 }}>Privacy Policy</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', position: 'absolute', top: 295, left: 0, width: '100%' }}></View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../Icons/logout.png')} style={{ width: 25, height: 25, position: 'absolute', top: 335, left: 0 }} />
          <Text style={{ color: 'black', position: 'absolute', top: 330, left: 45, fontSize: 25 }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

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
