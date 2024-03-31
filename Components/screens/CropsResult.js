import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";

const CropsResult = ({ route }) => {
  console.log("result out");
  const result = route.params;
  console.log(result);
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      {/* <TouchableOpacity>
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
      <Text
        style={{
          color: "#ffffff",
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
          color: "#ffffff",
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "800",
        }}
      >
        Nurturing Your World, One Seed at a Time
      </Text>
      <View style={{ position: "absolute", top: 10, flexDirection: "row" }}>
        <Image
          source={require("../Icons/soil.png")}
          style={{
            height: 350,
            width: 350,
            marginLeft: 30,
            marginRight: "auto",
            marginTop: 140,
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
          Soil Analysis Results
        </Text>
        <Text
          style={{
            color: "#000000",
            fontFamily: "monospace",
            textAlign: "justify",
            fontWeight: "800",
          }}
        >
          After analyzing the provided soil and environmental data, our system
          suggests crops that are well-suited to your specific conditions our
          recommendations aim to optimize your agricultural productivity.
        </Text>
      <View style={{ backgroundColor: "#F5F7F8", height: 100, width: "100%" }}>
        {result && result.uniqueArray && result.uniqueArray.length > 0 && (
          // Content to render when result is defined and has items
          <>
            <Text style={{color: "#000000",
            fontFamily: "monospace",
            textAlign: "justify",
            fontWeight: "800",}}>The recommended crops based on the condition you provided is, </Text>
            {result.uniqueArray.map((item, index) => (
              <Text
                key={index}
                style={{
                  fontFamily: "monospace",
                  color: "#000000",
                  fontWeight: "900",
                  fontSize:16, marginLeft:10
                }}
              >
                {item}
              </Text>
            ))}
          </>
        )}

        {!result ||
          !result.uniqueArray ||
          (result.uniqueArray.length === 0 && (
            // Content to render when result is undefined or empty
            <Text
              style={{
                fontFamily: "monospace",
                color: "#000000",
                fontWeight: "600",
              }}
            >
              Sorry, we are unable to recommend.
            </Text>
          ))}
      </View>
      </View>
    </SafeAreaView>
  );
};

export default CropsResult;

const styles = StyleSheet.create({});
