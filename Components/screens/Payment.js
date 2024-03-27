import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import { ref, getDatabase, push } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA8PnNOuXFKGUarBqHQ7a94nIfP-boimhk",
  authDomain: "plantit-416016.firebaseapp.com",
  databaseURL: "https://plantit-416016-default-rtdb.firebaseio.com",
  projectId: "plantit-416016",
  storageBucket: "plantit-416016.appspot.com",
  messagingSenderId: "428181209108",
  appId: "1:428181209108:web:dd231b65b26e754486a701",
  measurementId: "G-C1PPLEPGY6"
};
const app = initializeApp(firebaseConfig);
const Payment = ({route}) => {
  const cartItems = route.params.cartItems;
  const address = route.params.address;
  const navigation = useNavigation();

  const handleTrackOrders = ()=>{
    navigation.navigate('Home'); //TODO: Change the Navigation once order page is created!

  }
  console.log("Payment Page");

  const pushDatabase = (cartItems, address) => {
    const database = getDatabase(app);
    const ordersRef = ref(database, 'orders');
    push(ordersRef, {
      address: address,
      cartItems: cartItems
    });
  };
  useEffect(()=>{
    pushDatabase(cartItems, address);
  })

  return (
    <>
      <SafeAreaView>
        <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#FFFFFF', borderRadius:30, marginLeft:20, marginRight:20, elevation:5, marginTop:100}}>
          <Image source={require('../Icons/success.png')} style={{height:300, width:300}} />
          <Text style={{fontSize:20, fontWeight:'600', color:'black'}}>Payment Successful</Text>
          <Text style={{fontSize:20, fontWeight:'600', color:'black'}}>Thank You for Banking with Us!</Text>
        </View>
        <View style={{position:'absolute', bottom:-300, zIndex:1, paddingHorizontal:5}}>
          <TouchableOpacity style={{backgroundColor:'#FF204E', height:50,width:400, borderRadius:10, justifyContent:'center', alignItems:'center',elevation:5}}
          onPress={handleTrackOrders}
          >
            <Text style={{color:'#FFFFFF', fontSize:18, fontFamily:'monospace', fontWeight:'900'}}>Track Your Orders</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default Payment;
