import { Pressable, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

// Component 01 - HomeScreen
export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View id="head" style={styles.head}>
        <Text style={styles.title}>Welcome to my App!</Text>
        <Text>Click on the buttons to navigate to the pages</Text>
      </View>
      <View id="body" style={styles.body}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Lab_1")}
        >
          🧪Lab_1
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("ProfileLayout")}
        >
          🤖Profile Layout
        </Button>
      </View>
    </View>
  );
}
