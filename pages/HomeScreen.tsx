import { Pressable, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";

// Component 01 - HomeScreen
export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        Go to details
      </Button>
      <Button onPress={() => navigation.navigate("Profile")}>
        Profile
      </Button>

    </View>
  );
}
