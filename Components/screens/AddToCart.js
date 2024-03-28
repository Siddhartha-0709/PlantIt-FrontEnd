import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";

const AddToCart = ({ route }) => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState(route.params.cartItems);
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCartItems);
    console.log('Item removed:', itemToRemove);
  };
  const handleAddressInput =()=>{
    navigation.navigate('AddressInput',{cartItems:cartItems, totalCost:totalCost()})
  }
  const totalCost = ()=>{
    var total = 0;
    for (let index = 0; index < cartItems.length; index++) {
       total  = total + parseInt(cartItems[index].price) ;
    }
    return total;
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
      <View style={{height:10}}></View>
      <View
        style={{
          height: 50,
          marginBottom:10,
          backgroundColor:'#000000',
          minWidth:200,
          marginLeft:'auto',
          marginRight:'auto',
          borderRadius:30,
          alignContent:'center',
          justifyContent:'center'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            fontWeight: "600",
            fontFamily: "monospace",
            textAlign:'center'
          }}
        >
          Shopping Cart
        </Text>
      </View>
      <ScrollView
      style={{paddingLeft:5, paddingRight:5,height:'75%'}}
      >
        {
        cartItems.length!=0?(
        
        cartItems.map((item, index) => (
          <View
          key={index}
          style={{
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            borderRadius: 10,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <TouchableOpacity
            style={{
              position:'absolute',
              top:10,
              right:10,
              width:50,
              height:50,
              zIndex:1,
              alignItems:'flex-end'
            }}
            onPress={()=>{
              handleRemoveItem(item)
            }}
          >
            <Image
              source={require("../Icons/remove.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 10,
              marginRight: 10,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "monospace",
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                marginBottom: 5,
              }}
              numberOfLines={1}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: "monospace",
                fontSize: 14,
                color: "grey",
                marginBottom: 5,
              }}
              numberOfLines={2}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontFamily: "monospace",
                fontSize: 16,
                fontWeight: "bold",
                color: "#000",
                textAlign: "right",
              }}
            >
              Price: {item.price}/-
            </Text>
          </View>
        </View>
        ))):(<>
        <View style={{backgroundColor:'#FFFFFF',height:100, width:'95%',marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto',borderRadius:10, alignItems:'center', justifyContent:'center'}}>
          <Text
          style={{
            color:'#000000',
            fontSize:18,
            fontFamily:'monospace'
          }}
          >Your Cart is Empty</Text>
        </View>
        </>)}
      </ScrollView>
      {cartItems.length!=0?(<>
      <Text style={{position:'absolute', zIndex:1,bottom:-40,right:10, color:'black', fontSize:20, fontWeight:'700',fontFamily:'monospace', elevation:5}}>Total Amount-₹{totalCost()}</Text>
      </>):(<></>)}
      {cartItems.length!=0?(<View style={{position:'absolute', bottom:-90, zIndex:1, paddingHorizontal:5}}>
          <TouchableOpacity style={{backgroundColor:'#FF204E', height:50,width:400, borderRadius:10, justifyContent:'center', alignItems:'center',elevation:5}}
          onPress={handleAddressInput}
          >
            <Text style={{color:'#FFFFFF', fontSize:20, fontFamily:'monospace', fontWeight:'900'}}>Enter Delivery Details</Text>
          </TouchableOpacity>
      </View>):(<></>)}
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
