import React from 'react';
import { View, Text, FlatList } from 'react-native';
const OrderList = ({ userData }) => {
    const renderItem = ({ item }) => (
      <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0' }}>
        <Text>ID: {item.id}</Text>
        <Text>Name: {item.address.name}</Text>
        <Text>Address: {item.address.address}</Text>
        <Text>Mobile: {item.address.mobile}</Text>
        <Text>Pin Code: {item.address.pinCode}</Text>
        <Text>State: {item.address.state}</Text>
        {/* You can render cart items here */}
      </View>
    );
  
    return (
      {userData.map((item) => (
        <View key={item.id} style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0' }}>
          <Text>ID: {item.id}</Text>
          <Text>Name: {item.address.name}</Text>
          <Text>Address: {item.address.address}</Text>
          <Text>Mobile: {item.address.mobile}</Text>
          <Text>Pin Code: {item.address.pinCode}</Text>
          <Text>State: {item.address.state}</Text>
          {/* You can render cart items here */}
        </View>
      ))}
    );
  };
  
  export default OrderList;