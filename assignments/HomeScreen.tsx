import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { colorScheme } from "../StyleSheet";

const styles = StyleSheet.create({
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 3,
    width: "90%",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // columnGap: 10,
    //alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: colorScheme.scheme1[1] + "90", // "#123456" + opacity
    //height: 150,
    width: "100%",
    borderRadius: 10,
  },
  buttonPressed: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "rgb(210, 0, 0)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    //textAlign: "center",
    //margin: 10,
    justifyContent: "center",
  },
  buttonSubtitle: {
    color: "white",
    fontSize: 15,
    //textAlign: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
  },
});

const buttons = [
  {
    icon: "🧪",
    title: "Lab_1",
    subtitle: "Create app",
    action: "Lab_1",
  },
  {
    icon: "🧪",
    title: "Lab_2",
    subtitle: "Flat List",
    action: "Lab_2",
  },
  {
    icon: "🧪",
    title: "Lab_3",
    subtitle: "Login Form",
    action: "Lab_3",
  },
  {
    icon: "",
    title: "Profile Layout",
    subtitle: "",
    action: "ProfileLayout",
  },
  {
    icon: "",
    title: "Flat List",
    subtitle: "",
    action: "Flatlist",
  },
  {
    icon: "",
    title: "API",
    subtitle: "",
    action: "API",
  },
  {
    icon: "",
    title: "Pressable",
    subtitle: "",
    action: "newtab",
  },
];

// Component 01 - HomeScreen
export function HomeScreen({ navigation }) {
  const generateButtons = (
    buttons: { icon: string; title: string; subtitle: string; action: string }[]
  ): JSX.Element[] => {
    return buttons.map((button, index) => {
      return (
        <Pressable
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(button.action)}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.buttonIcon}>{button.icon}</Text>
            </View>
            <View style={{alignItems:"flex-start", paddingLeft: 15}}>
              <Text style={styles.buttonTitle}>{button.title}</Text>
              <Text style={styles.buttonSubtitle}>{button.subtitle}</Text>
            </View>
          </View>
        </Pressable>
      );
    });
  };

  const buttonList = generateButtons(buttons);

  return (
    <View style={styles.head}>
      <View id="head" style={styles.head}>
        <Text style={styles.title}>Welcome to my App!</Text>
        <Text>Click on the buttons to navigate to the pages</Text>
      </View>
      <View id="body" style={styles.body}>
        <FlatList
          data={buttonList}
          renderItem={({ item }) => {
            return item;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
