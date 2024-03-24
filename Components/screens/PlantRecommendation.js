import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
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
import { useNavigation } from "@react-navigation/native";
const PlantRecommendation = () => {
  const navigation = useNavigation();
  const handleCropRecommendation =()=>{
    navigation.navigate("CropRecommendation");
  }
  const handleGardenRecommendation =()=>{
    navigation.navigate("GardenRecommendation");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      <TouchableOpacity>
        <Image
          source={require("../Icons/goback1.png")}
          style={{
            width: 25,
            height: 25,
            marginLeft: 20,
            tintColor: "white",
            marginTop:30
          }}
        />
      </TouchableOpacity>
      <View style={{ position: "absolute", top: 10, flexDirection: "row" }}>
        <Image
          source={require("../Icons/search.png")}
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
          backgroundColor: "#F5F7F8",
          height: 400,
          marginTop: "auto",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#000000",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 30,
            fontWeight: "900",
            fontFamily: "monospace",
          }}
        >
          NatureNestle
        </Text>
        <Text
          style={{
            color: "#000000",
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          Nurturing Your World, One Seed at a Time
        </Text>
        <Text
          style={{
            color: "#000000",
            fontFamily: "monospace",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            textAlign: "justify",
            fontWeight: "600",
          }}
        >
          Embark on your green adventure! Your decision crafts the narrative—select the scenario that mirrors your aspirations. Will it be the charm of garden plant for lush home landscapes, or the recommendation of crops for thriving fields . . .
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 280,
            height: 50,
            borderRadius: 30,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
          onPress={handleCropRecommendation}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "900",
              fontFamily: "monospace",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Crops Recommendation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 280,
            height: 50,
            borderRadius: 30,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
          }}
          onPress={handleGardenRecommendation}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "900",
              fontFamily: "monospace",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Garden Recommendation
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantRecommendation;

const styles = StyleSheet.create({});
