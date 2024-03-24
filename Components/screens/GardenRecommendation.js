import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const GardenRecommendation = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleGetRecommendation =async ()=>{
    try {
      const response = await axios.post('https://plantit-backend.onrender.com/findplant', {
        query: inputValue
      });
      // Handle response here if needed
      console.log(response.data);
      navigation.navigate("GardenRecommendationResults", {
        plant: response.data
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <TouchableOpacity>
          <Image
            source={require("../Icons/goback1.png")}
            style={{
              width: 25,
              height: 25,
              marginLeft: 20,
              tintColor: "white",
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 10, flexDirection: "row" }}>
          <Image
            source={require("../Icons/plant1.png")}
            style={{
              height: 350,
              width: 350,
              marginLeft: 30,
              marginRight: "auto",
              marginTop: 134,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 400,
            marginTop: 450,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          }}
        >
          <Text
            style={{ fontFamily: "monospace", fontSize: 20, fontWeight: "900" }}
          >
            Get Best Recommendation{"\n"}{" "}
          </Text>
          <Text
            style={{ fontFamily: "monospace", fontSize: 18, fontWeight: "400" }}
          >
            Simply share your plant preferences and expectations, and watch as
            our meticulously crafted AI springs into action, hand-picking the
            perfect plant companions tailored just for you!
          </Text>
          <TextInput
            placeholder="Enter your preferences"
            style={{
              backgroundColor: "#ffffff",
              height: 50,
              width: 300,
              marginTop: 20,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              borderColor: "#000000",
              borderWidth: 1,
              marginLeft:'auto',
              marginRight:'auto',
            }}
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity style={{width:250, height:50, backgroundColor:'#000000', borderRadius:20, marginLeft:'auto', marginRight:'auto', marginTop:20}}>
            <Text style={{color:'#FFFFFF', fontSize:20, fontFamily:'monospace',marginLeft:10,marginRight:10,marginTop:'auto',marginBottom:'auto', textAlign:'center', fontWeight:'900'}}
            onPress={() => handleGetRecommendation()}
            >Get Recommendation</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default GardenRecommendation;

const styles = StyleSheet.create({});
