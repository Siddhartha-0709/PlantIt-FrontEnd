import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Markdown from 'react-native-markdown-display';
import { useNavigation } from "@react-navigation/core";

const GardenRecommendationResults = ({ route }) => {
  console.log(route.params.plant);
  const plant = route.params.plant;
  const navigation = useNavigation();
  const backPressed = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
        {/* <TouchableOpacity
        onPress={backPressed}
        >
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
        </TouchableOpacity> */}
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
            height: 430,
            marginTop: 450,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom:50,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <Text
            style={{ fontFamily: "monospace", fontSize: 20, fontWeight: "900", color:'#000000' }}
          >
            Recommendation Results{"\n"}{" "}
          </Text>
          <Text
            style={{ fontFamily: "monospace", fontSize: 18, fontWeight: "400", color:'#000000' }}
          >
            Based on your preferences, we have found the following recommendations:
          </Text>
          <ScrollView style={{height:'85%'}} contentInsetAdjustmentBehavior="automatic">
            <Markdown style={{color:'#000000'}}>{plant}</Markdown>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default GardenRecommendationResults;

const styles = StyleSheet.create({});
