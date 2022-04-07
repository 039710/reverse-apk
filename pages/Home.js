import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import tw from "twrnc";
function Home() {
  const [serialKey, setSerialKey] = useState("");
  const [input, setInput] = useState("");
  const [cracked, setCracked] = useState(false);
  const flag = "1xYs947dD0231";
  const handleCrack = () => {
    if (input == serialKey) {
      setCracked(true);
    }
  };
  const generateKey = () => {
    let temp =
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString() +
      "-" +
      Math.round(Math.random() * 9999).toString();
    setSerialKey(temp);
  };
  useEffect(() => {
    generateKey();
  }, []);

  return (
    <SafeAreaView
      style={tw`h-full flex flex-col justify-center items-center bg-indigo-200`}
    >
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={tw`w-full h-full flex flex-col justify-center items-center text-white`}
      >
        {serialKey}
        <Text style={tw`mb-5 font-semibold text-lg text-white`}>
          Cracked - {cracked ? "✅" : "❌"}
        </Text>
        {cracked && (
          <Text style={tw`mb-5 font-semibold text-lg text-white`}>
            {String.fromCharCode(...[70, 108, 97, 103])} - {flag}
          </Text>
        )}
        <Image
          source={require("../assets/obcydian.svg")}
          style={tw`h-64 w-64 rounded-full`}
        />
        <View
          style={tw`relative p-1 w-[80%] mt-[10%] items-center rounded border border-white px-3`}
        >
          <View style={tw`p-2 flex flex-row items-center w-[100%]`}>
            <Text style={tw` mr-1 text-white`}>Serial Key</Text>
          </View>
          <TextInput
            style={tw`border border-white py-2 w-full rounded text-white mb-3 text-lg  text-center`}
            placeholder="xxxx-xxxx-xxxx-xxxx-xxxx"
            onChangeText={(text) => setInput(text)}
            placeholderTextColor="white"
          />

          <View style={tw`w-[100%] flex flex-row justify-end pr-2`}>
            <TouchableOpacity
              onPress={() => {
                handleCrack();
              }}
              style={tw`border border-white w-[150px] p-1 px-2 items-center rounded bg-blue-700 mb-2`}
            >
              <Text style={tw` mr-2 text-white `}>Crack Me!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;
