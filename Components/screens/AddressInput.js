import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
import RazorpayCheckout from 'react-native-razorpay';

const AddressInput = ({route}) => {
  const navigation = useNavigation();
  const totalPrice = route.params.totalCost;
  const [cartItems, setCartItems] = useState(route.params.cartItems);
  const [address, setAddress] = useState({
    name: '',
    mobile: '',
    address: '',
    state: '',
    pinCode: '',
  });

  const [modalVisible, setModalVisible] = useState(false);
  
  const states = [
    {key: 1, label: 'Andhra Pradesh'},
    {key: 2, label: 'Arunachal Pradesh'},
    {key: 3, label: 'Assam'},
    {key: 4, label: 'Bihar'},
    {key: 5, label: 'Chhattisgarh'},
    {key: 6, label: 'Goa'},
    {key: 7, label: 'Gujarat'},
    {key: 8, label: 'Haryana'},
    {key: 9, label: 'Himachal Pradesh'},
    {key: 10, label: 'Jharkhand'},
    {key: 11, label: 'Karnataka'},
    {key: 12, label: 'Kerala'},
    {key: 13, label: 'Madhya Pradesh'},
    {key: 14, label: 'Maharashtra'},
    {key: 15, label: 'Manipur'},
    {key: 16, label: 'Meghalaya'},
    {key: 17, label: 'Mizoram'},
    {key: 18, label: 'Nagaland'},
    {key: 19, label: 'Odisha'},
    {key: 20, label: 'Punjab'},
    {key: 21, label: 'Rajasthan'},
    {key: 22, label: 'Sikkim'},
    {key: 23, label: 'Tamil Nadu'},
    {key: 24, label: 'Telangana'},
    {key: 25, label: 'Tripura'},
    {key: 26, label: 'Uttar Pradesh'},
    {key: 27, label: 'Uttarakhand'},
    {key: 28, label: 'West Bengal'},
    {key: 29, label: 'Andaman and Nicobar Islands'},
    {key: 30, label: 'Chandigarh'},
    {key: 31, label: 'Dadra and Nagar Haveli and Daman and Diu'},
    {key: 32, label: 'Lakshadweep'},
    {key: 33, label: 'Delhi'},
    {key: 34, label: 'Puducherry'},

    // Add more states as needed
  ]; // Replace with your list of states



  
  const handleInputChange = (field, value) => {
    setAddress({...address, [field]: value});
  };

  const handleStateSelect = selectedState => {
    setAddress({...address, state: selectedState.label});
    setModalVisible(false);
  };

  const handleSubmit = () => {
    // Handle form submission here (e.g., validation, sending data to server)
    console.log(address);
    console.log(cartItems);
    paymentUpi();
  };

  const paymentUpi = () => {
    function generateTxnRef() {
      // Generate a timestamp
      var timestamp = new Date()
        .toISOString()
        .replace(/[-T:]/g, '')
        .split('.')[0]; // Format: YYYYMMDDHHMMSS
      // Generate a random number
      var randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
      // Combine timestamp and random number to create txnRef
      var txnRef = timestamp + '-' + randomNumber;
      return txnRef;
    }
    RNUpiPayment.initializePayment(
      {
        vpa: '6289368650@ybl', // or can be john@ybl or mobileNo@upi
        payeeName: 'Siddhartha Mukherjee',
        amount: '10',
        transactionRef: generateTxnRef(),
      },
      successCallback,
      failureCallback,
    );
    function successCallback(data) {
      // do whatever with the data
      console.log(data);
      navigation.navigate('Payment', {address: address, cartItems: cartItems});
    }
    function failureCallback(data) {
      // do whatever with the data
      console.log(data);
      navigation.navigate('Payment', {address: address, cartItems: cartItems});
    }
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
      <View style={{height:10}}></View>

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
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '600',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}>
          Shipping Address
        </Text>
      </View>
      <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'monospace',
            marginBottom: 5,
            marginTop: 10,
          }}>
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={address.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'monospace',
            marginBottom: 5,
            marginTop: 10,
          }}>
          Phone Number
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Mobile Number"
          value={address.mobile}
          onChangeText={text => handleInputChange('mobile', text)}
          keyboardType="numeric"
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'monospace',
            marginBottom: 5,
            marginTop: 10,
          }}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Address"
          value={address.address}
          onChangeText={text => handleInputChange('address', text)}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 15,
              fontWeight: '900',
              fontFamily: 'monospace',
              marginBottom: 5,
              marginTop: 10,
              marginRight: 50,
            }}>
            State
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 15,
              fontWeight: '900',
              fontFamily: 'monospace',
              marginBottom: 5,
              marginTop: 10,
              marginLeft: 100,
            }}>
            PIN Code
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{...styles.input, width: 177, marginRight: 9}}
            onPress={() => setModalVisible(true)}>
            <Text>{address.state ? address.state : 'Select Your State'}</Text>
          </TouchableOpacity>
          <TextInput
            style={{...styles.input, width: 177, marginLeft: 9}}
            placeholder="PIN Code"
            value={address.pinCode}
            onChangeText={text => handleInputChange('pinCode', text)}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={states}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleStateSelect(item)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.key.toString()}
            />
          </View>
        </View>
      </Modal>
      <View
        style={{
          position: 'absolute',
          bottom: -300,
          zIndex: 1,
          paddingHorizontal: 5,
        }}>
        {/* <TouchableOpacity
          style={{
            backgroundColor: '#FF204E',
            height: 50,
            width: 400,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
          }}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.jpg',
              currency: 'INR',
              key: 'rzp_test_2VYHu p8J177ylx',
              amount: '5000',
              name: 'Acme Corp',
              order_id: '', //Replace this with an order_id created using Orders API.
              prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9191919191',
                name: 'Gaurav Kumar',
              },
              theme: {color: '#53a20e'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'monospace',
              fontWeight: '900',
            }}>
            Proceed to Payment
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={{backgroundColor:'#FF204E', height:50,width:400, borderRadius:10, justifyContent:'center', alignItems:'center',elevation:5}}
          onPress={handleSubmit}
          >
            <Text style={{color:'#FFFFFF', fontSize:18, fontFamily:'monospace', fontWeight:'900'}}>Proceed to Pay ₹{totalPrice}</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AddressInput;
