import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const [serverResponse, setServerResponse] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = item => {
    console.log('Add to cart');
    ToastAndroid.show('Item added to Cart', ToastAndroid.SHORT);
    console.log(item);
    setCartItems([...cartItems, item]);
  };
  const handleDiseaseAI = () => {
    navigation.navigate('DiseaseAI');
  };
  const handleGetRecommendation = () => {
    navigation.navigate('PlantRecommendation');
  };
  const handleOpenCart = () => {
    navigation.navigate('AddToCart', {
      cartItems: cartItems,
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get(
        'https://plantit-backend.onrender.com/products',
      );
      console.log(response.data);
      setServerResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#E2F4C5" />
      <View style={{backgroundColor:'red', width:15, justifyContent:'center', alignItems:'center',borderRadius:20,
      position:'absolute',
      zIndex:1,
      right:33,
      top:13
      }}>
        <Text style={{fontSize:12, color:'white',borderRadius:10}}>{cartItems.length}</Text>
      </View>
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
      <View
        style={{
          backgroundColor: '#E2F4C5',
          height: 55,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingBottom:3
        }}>
        <TouchableOpacity
          style={{marginLeft: 5, marginTop: 0, marginRight: 5, zIndex:1}}
          onPress={handleOpenCart}>
          <Image
            source={require('../Icons/shopping-cart.png')}
            style={{width: 25, height: 25, marginTop: 20,zIndex:1}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 5, marginTop: 0, marginRight: 5}}>
          <Image
            source={require('../Icons/user.png')}
            style={{width: 25, height: 25, marginTop: 20}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView height="94%" keyboardShouldPersistTaps="always">
        <ScrollView horizontal={true}>
          <Image
            source={require('../Icons/c1.png')}
            style={{height: 250, width: 500}}
          />
          <Image
            source={require('../Icons/c2.png')}
            style={{height: 250, width: 500}}
          />
        </ScrollView>
        <View
          style={{
            backgroundColor: '#E2F4C5',
            height: 90,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
              marginRight: 10,
            }}
            onPress={handleDiseaseAI}>
            <Image
              source={require('../Icons/plantdoc.png')}
              style={{width: 40, height: 40, borderRadius: 30}}
            />
            <Text style={{fontFamily: 'monospace', textAlign: 'center'}}>
              LeafLens AI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 5,
            }}
            onPress={handleGetRecommendation}>
            <Image
              source={require('../Icons/leaf34.png')}
              style={{width: 40, height: 40, borderRadius: 30}}
            />
            <Text style={{fontFamily: 'monospace', textAlign: 'center'}}>
              Plant Finder
            </Text>
          </TouchableOpacity>
        </View>
        {Object.keys(serverResponse).map(key => {
          const item = serverResponse[key];
          const limitedDescription =
            item.description.length > 172
              ? item.description.substring(0, 221) + '...'
              : item.description;
          return (
            <View
              key={key}
              style={{
                backgroundColor: '#F7EEDD',
                padding: 5,
                height: 215,
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 10,
              }}>
              <Image
                source={{uri: item.imageUrl}}
                style={{
                  minHeight: 200,
                  minWidth: 200,
                  borderRadius: 10,
                  marginRight: 10,
                  alignItems: 'center',
                  resizeMode: 'cover',
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 18,
                    fontWeight: '900',
                    marginTop: 10,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 10,
                    fontWeight: '800',
                    textAlign: 'left',
                    color: 'grey',
                    maxWidth: 200,
                    marginRight: 6,
                    maxHeight: 100,
                    minHeight: 70,
                  }}
                  numberOfLines={6}
                  >
                    
                  {limitedDescription}
                </Text>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 10,
                    fontWeight: '800',
                    textAlign: 'left',
                    color: 'black',
                    maxWidth: 200,
                    marginRight: 6,
                    marginTop: 10,
                  }}>
                  Sold by - {item.seller}
                </Text>
                <Text
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 15,
                    fontWeight: '800',
                    textAlign: 'left',
                    marginTop: 14,
                  }}>
                  Price- {item.price}/-
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FF204E',
                    height: 30,
                    borderRadius: 3,
                    width: 190,
                  }}
                  onPress={() => {
                    handleAddToCart(item);
                  }} // Assuming handleAddToCart is defined elsewhere
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'monospace',
                      fontSize: 15,
                      textAlign: 'center',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
