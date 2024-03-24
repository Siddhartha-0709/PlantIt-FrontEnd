import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React from "react";
// import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary} from 'react-native-image-picker';

const DiseaseAI = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //     navigation.navigate("DiseaseAIResult", { result });
  //   }
  // };
  const pickImage = async ()=>{
    let options = {
      mediaType:'photo',
      quality:0.5,
      includeBase64: true
    }
    launchImageLibrary(options,(response)=>{
      if(response.didCancel){
        console.log('UserCancelled Picker')
        return;
      }
      else if(response.error){
        console.log(response.error)
        return;
      }
      console.log(response.assets[0]);
      setImage(response.assets[0].uri);
      navigation.navigate("DiseaseAIResult", { response });

    })
  }
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
        <TouchableOpacity
          style={{ position: "absolute", top: 40,left:1 }}
          onPress={() => navigation.navigate("DiseaseAI")}
        >
          <Image
            source={require("../Icons/goback1.png")}
            style={{
              width: 25,
              height: 25,
              marginLeft: 20,
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 10, flexDirection: "row" }}>
          <Text
            style={{
              color: "#F9F7F7",
              fontWeight: "900",
              fontSize: 60,
              fontFamily: "monospace",
              position: "absolute",
              zIndex: 1,
              top: 60,
              left: 10,
            }}
          >
            Save
          </Text>
          <Text
            style={{
              color: "#CBF1F5",
              fontWeight: "700",
              fontSize: 50,
              fontFamily: "monospace",
              position: "absolute",
              zIndex: 1,
              top: 110,
              left: 10,
            }}
          >
            Rescue
          </Text>
          <Text
            style={{
              color: "#A6E3E9",
              fontWeight: "700",
              fontSize: 40,
              fontFamily: "monospace",
              position: "absolute",
              zIndex: 1,
              top: 160,
              left: 10,
            }}
          >
            Cure
          </Text>
          <Text
            style={{
              color: "#71C9CE",
              fontWeight: "300",
              fontSize: 35,
              fontFamily: "monospace",
              position: "absolute",
              zIndex: 1,
              top: 200,
              left: 10,
            }}
          >
            Nurture
          </Text>
          <Image
            source={require("../Icons/saveplant.png")}
            style={{
              height: 350,
              width: 350,
              marginLeft: 90,
              marginRight: "auto",
              marginTop: 0,
            }}
          />
          <Text
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: 50,
              fontFamily: "monospace",
              textAlign: "center",
              marginTop: 380,
              marginLeft: "auto",
              marginRight: 100,
            }}
          >
            PlantIt
          </Text>
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
            GreenGuard AI
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "monospace",
              textAlign: "center",
              fontWeight: "800",
            }}
          >
            Crafted by the advanced Gemini Pro Model
          </Text>
          <Text
            style={{
              color: "#000000",
              fontFamily: "monospace",
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              textAlign: "left",
              fontWeight: "600",
            }}
          >
            Transform your gardening journey with our innovative leaf
            examination service. Identify plant diseases effortlessly, delve
            into the specifics of each ailment, and receive customized solutions
            for a thriving and resilient gardening experience.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 200,
              height: 50,
              borderRadius: 30,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
            }}
            onPress={pickImage}
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
              Scan Leaf
            </Text>
          </TouchableOpacity>
          {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default DiseaseAI;

const styles = StyleSheet.create({});
