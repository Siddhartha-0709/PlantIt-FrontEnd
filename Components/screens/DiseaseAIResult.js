import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const DiseaseAIResult = ({ route }) => {
  console.log(route.params);
  const image = route.params.response.assets[0].uri;
  console.log(image);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const uploadImage = async (fileUri) => {
    console.log("Sending Data to Server", fileUri);
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: fileUri,
        type: "image/jpeg", // Adjust the type based on your image format
        name: "image.jpg", // Adjust the name based on your requirements
      });
      const response = await axios.post(
        "https://plantit-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server Response:", response.data);
      setData(response.data.text.trimStart());
      setIsLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      console.log("Retrying");
      uploadImage(fileUri);
    }
  };
  useEffect(() => {
    uploadImage(image);
  }, []); 
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      <View style={{ backgroundColor: "#000000", height: 400, paddingTop: 40 }}>
        {/* <TouchableOpacity style={{position:'absolute', top: 40,}}
        onPress={() => navigation.navigate('DiseaseAI')}
        >
          <Image source={require('../Icons/goback1.png')} style={{ width: 25, height: 25, marginLeft: 20, tintColor:'white'}} />
        </TouchableOpacity> */}
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            GreenGuard AI Results
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Crafted by the advanced Gemini Pro Model
          </Text>
        </View>
        <Image
          source={{ uri: image }}
          style={{
            height: 350,
            width: 350,
            marginRight: "auto",
            marginTop: 0,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{ backgroundColor: "#FFFFFF", height: 410, marginTop: "auto", borderTopRightRadius:30, borderTopLeftRadius:30,paddingTop:10 }}
      >
        <ScrollView style={{}}>
          {isLoading ? (
            <>
              <View style={{ marginTop: 100, marginBottom: 100 }}>
                <SkypeIndicator color="black" size={80} />
                <Text style={{ fontFamily: "monospace", textAlign: "center" }}>
                  Analysing your Image
                </Text>
              </View>
            </>
          ) : (
            <View>

              <Text style={{ fontFamily: "monospace", textAlign: "left", color:'#000000', fontSize:18, fontWeight:'900', marginLeft:10, marginRight:10 }}>
              Analysis Results:
              </Text>
              <Text style={{ fontFamily: "monospace", textAlign: "left", color:'grey', fontSize:15, fontWeight:'700', marginLeft:10, marginRight:10 }}>
                {data}
              </Text>
              <Text style={{ fontFamily: "monospace", textAlign: "center", color:'grey', fontSize:40, fontWeight:'700', marginLeft:10, marginRight:10 }}>PlantIt</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DiseaseAIResult;

const styles = StyleSheet.create({});
