import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
const Order = ({route}) => {
  const userAccount = route.params.userAccount;
  useEffect(() => {
    getOrders();
  }, []);
  const [orders, setOrders] = useState([]);
  const [showLoad, setShowLoad] = useState(false);
  const getOrders = async () => {
    setShowLoad(true);
    await database()
      .ref('orders')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        var ordersArray = Object.values(snapshot.val());
        for (let i = 0; i < ordersArray.length; i++) {
          if (ordersArray[i].accountUserDetails.id === userAccount.id) {
            console.log(ordersArray[i].accountUserDetails.id);
            console.log(userAccount.id);
            setOrders(prevOrders => [...prevOrders, ordersArray[i]]);
          }
        }
        // setOrders(ordersArray);
        console.log(ordersArray);
      })
      .catch(error => {
        console.error('Error getting orders: ', error);
      });
    setShowLoad(false);
  };

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
          Your Orders
        </Text>
      </View>
      <ScrollView
        style={{height: '85%', paddingLeft: 10, paddingRight: 10}}
        showsVerticalScrollIndicator={false}>
        {showLoad ? (
          <>
            <ActivityIndicator size="large" style={{marginTop: 100}} />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'monospace',
                color: '#000000',
              }}>
              Finding your Orders. . .
            </Text>
          </>
        ) : (
          <>
            {!orders ? (
              <>
                <Text
                  style={{
                    marginTop: 100,
                    color: '#000000',
                    fontFamily: 'monospace',
                    fontSize: 18,
                    textAlign: 'center',
                  }}>
                  Your Orders Look Empty!
                </Text>
              </>
            ) : (
              <>
                {orders.map(item => (
                  <>
                    <View
                      style={{
                        backgroundColor: '#E2F4C5',
                        borderRadius: 10,
                        marginBottom: 10,
                        padding: 10,
                      }}
                      key={item.id}>
                      <View
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: 5,
                          paddingLeft: 10,
                          marginBottom: 4,
                        }}>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 18,
                            fontWeight: '800',
                            fontFamily: 'monospace',
                          }}>
                          Order ID: {item.orderId}
                        </Text>
                      </View>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        {item.cartItems.map(cartItem => (
                          <>
                            <View
                              style={{
                                backgroundColor: '#FEFDED',
                                height: 320,
                                width: 220,
                                borderRadius: 9,
                                justifyContent: 'center',
                                marginLeft: 0,
                                marginRight: 5,
                              }}
                              key={item.id}>
                              <Image
                                source={{uri: cartItem.imageUrl}}
                                style={{
                                  height: 200,
                                  width: 200,
                                  borderRadius: 9,
                                  alignItems: 'center',
                                  marginTop: 3,
                                  marginLeft: 'auto',
                                  marginRight: 'auto',
                                }}
                              />
                              <View
                                style={{
                                  marginTop: 10,
                                  marginLeft: 10,
                                  marginRight: 10,
                                }}>
                                <Text
                                  style={{
                                    color: '#000000',
                                    fontSize: 18,
                                    fontWeight: '900',
                                    fontFamily: 'monospace',
                                  }}>
                                  {cartItem.name}
                                </Text>
                                <Text
                                  style={{
                                    color: '#000000',
                                    fontSize: 18,
                                    fontWeight: '700',
                                    fontFamily: 'monospace',
                                  }}>
                                  Price:{cartItem.price}/-
                                </Text>
                                <Text
                                  style={{
                                    color: 'grey',
                                    fontSize: 15,
                                    fontWeight: '700',
                                    fontFamily: 'monospace',
                                  }}>
                                  Seller:{cartItem.seller.substring(0, 10)}...
                                </Text>
                                <Text
                                  style={{
                                    color: 'grey',
                                    fontSize: 15,
                                    fontWeight: '700',
                                    fontFamily: 'monospace',
                                  }}>
                                  Status:{item.status}
                                </Text>
                              </View>
                            </View>
                          </>
                        ))}
                      </ScrollView>
                    </View>
                  </>
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({});
