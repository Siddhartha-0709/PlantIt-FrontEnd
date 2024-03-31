import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { SkypeIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";
const CropsRecommendation = () => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [acidity, setAcidity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const handleFormSubmit = async() => {
    setIsLoading(true);
    // Assuming you have these variables defined somewhere in your component state or elsewhere
    let nitrogenValue = parseInt(nitrogen);
    let phosphorusValue = parseInt(phosphorus);
    let potassiumValue = parseInt(potassium);
    let rainfallValue = parseInt(rainfall);
    let humidityValue = parseInt(humidity);
    let temperatureValue = parseInt(temperature);
    let acidityValue = parseInt(acidity);

    console.log("Form submitted:", {
      nitrogen: nitrogenValue,
      phosphorus: phosphorusValue,
      potassium: potassiumValue,
      rainfall: rainfallValue,
      humidity: humidityValue,
      temperature: temperatureValue,
      acidity: acidityValue,
    });

    const formData = {
      nitrogen: nitrogenValue,
      phosphorus: phosphorusValue,
      potassium: potassiumValue,
      rainfall: rainfallValue,
      humidity: humidityValue,
      temperature: temperatureValue,
      acidity: acidityValue,
    };

    // Make the POST request using Axios
    await axios
      .post("https://plantit-backend.onrender.com/recommendcrop", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the API response here if needed
        console.log("API Response:", response.data);
        const uniqueValues = new Set(response.data);
        const uniqueArray = [...uniqueValues];
        console.log("Unique API Response:", uniqueArray);
        setData(uniqueArray);
        setIsLoading(false);
        navigation.navigate("CropsResult", { uniqueArray });
      })
      .catch((error) => {
        // Handle errors from the API request
        console.error("API Error:", error);
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      {isLoading ? (
        <View
          style={{
            backgroundColor: "#352F44",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 1,
            right: "auto",
            opacity: 0.8,
          }}
        >
          <SkypeIndicator color="white" size={90} />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "monospace",
              textAlign: "center",
              position: "absolute",
              top: 500,
              left: 140,
            }}
          >
            Processing...
          </Text>
        </View>
      ) : null}
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
          source={require("../Icons/plant1.png")}
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
          Soil Analysis Form
        </Text>
        <Text
          style={{
            color: "#000000",
            fontFamily: "monospace",
            textAlign: "justify",
            fontWeight: "800",
          }}
        >
          For personalized crop recommendations, enter your details about your
          soil and weather conditions in your region. These details help us
          tailor recommendations to your specific agricultural conditions.
        </Text>
        <ScrollView>
          <Text style={styles.title}>Soil Analysis Form</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Nitrogen (%)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={nitrogen}
              onChangeText={(text) => setNitrogen(text)}
            />

            <Text style={styles.label}>Phosphorus (%)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={phosphorus}
              onChangeText={(text) => setPhosphorus(text)}
            />

            <Text style={styles.label}>Potassium (%)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={potassium}
              onChangeText={(text) => setPotassium(text)}
            />

            <Text style={styles.label}>Annual Rainfall (mm)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={rainfall}
              onChangeText={(text) => setRainfall(text)}
            />

            <Text style={styles.label}>Humidity (%)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={humidity}
              onChangeText={(text) => setHumidity(text)}
            />

            <Text style={styles.label}>Average Temperature (°C)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={temperature}
              onChangeText={(text) => setTemperature(text)}
            />

            <Text style={styles.label}>Soil Acidity (pH)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={acidity}
              onChangeText={(text) => setAcidity(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CropsRecommendation;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 20,
    color: "black",
    fontFamily: "monospace",
    fontWeight: "900",
    marginTop: 10,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
    fontFamily: "monospace",
    fontWeight: "900",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    fontFamily: "monospace",
    fontWeight: "900",
    fontSize: 16,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "monospace",
    fontWeight: "900",
  },
});
