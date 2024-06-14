import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { colorScheme } from "../../StyleSheet";
import { globalStyles } from "../../StyleSheet";

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colorScheme.scheme1[2],
    borderWidth: 0,
    borderColor: colorScheme.scheme1[0],
    height: "100%",
  },
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 4,
    margin: 20,
    alignItems: "center",
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);

  const onChangeText = (text: string, source: string) => {
    switch (source) {
      case "username":
        setUsername(text);
        break;
      case "password":
        setPassword(text);
        break;
      default:
        break;
    }
  };

  const image = { uri: "../../assets/tictactoelogo.png" };

  return (
    <View style={localStyles.container}>
      {/* <ImageBackground
        source={image}
        imageStyle={{ opacity: 0.1, resizeMode: "contain" }}
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
          paddingVertical: 40,
          bottom: 0,
        }}
      > */}
        <View style={localStyles.head}>
          <Text style={globalStyles.title}>Login</Text>
        </View>
        <View style={localStyles.logo}>
          <ImageBackground
            source={require("../../assets/tictactoelogo.png")}
            style={localStyles.image}
            resizeMode="contain"
          ></ImageBackground>
        </View>
        <View style={localStyles.body}>
          <TextInput
            placeholder="Username"
            style={globalStyles.input}
            onChangeText={(text) => onChangeText(text, "username")}
            value={username}
          />

          <TextInput
            placeholder="Password"
            style={globalStyles.input}
            onChangeText={(text) => onChangeText(text, "password")}
            value={password}
            secureTextEntry={true}
          />

          <Text>{error}</Text>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={globalStyles.button}
          >
            <Text style={globalStyles.buttonText}>Login</Text>
          </Pressable>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};
