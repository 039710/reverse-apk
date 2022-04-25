import { Text, SafeAreaView, Image, View, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import tw from "twrnc";
function Home() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        console.log(ip);
      });
  }, []);
  useEffect(() => {
    fetch("https://api.agify.io/?name=james")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <SafeAreaView
      style={tw`h-full flex flex-col justify-center items-center bg-indigo-200`}
    >
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={tw`w-full h-full flex flex-col justify-center items-center text-white`}
      >
        <View>
          <Text style={tw`text-2xl text-center text-indigo-500`}>
            Hello, {ip}!
          </Text>
        </View>
        <Image
          source={require("../assets/obcydian.svg")}
          style={tw`h-64 w-64 rounded-full`}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;
