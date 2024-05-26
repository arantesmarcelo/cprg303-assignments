import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/base";
import { StyleSheet } from "react-native";

// Component 02 - DetailsScreen
export function Lab_1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Marcelo");
  const [text, setText] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    header: {
      flex: 3,
      flexDirection: "column",
      // backgroundColor: "red",
      // padding: 2,
      //height: "100%",
      justifyContent: "center",
      //alignItems: "baseline",
    },

    button: {
      marginBottom: 20,
    },
    body: {
      flex: 8,
      padding: 10,
    },
    text: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    text_input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
    },
  });

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}
    >
      <View id="header" style={styles.header}>
        <Text style={styles.title}>Lab 1</Text>
        <Text>Implemented useState hook</Text>
      </View>
      <View id="body" style={styles.body}>
        <Text style={styles.text}>{count}</Text>
        <Button style={styles.button} onPress={() => setCount(count + 1)}>
          Count
        </Button>
        <Text style={styles.text}>{name}</Text>
        <Button
          style={styles.button}
          onPress={() =>
            setName(
              name
                .split("")
                .sort(function () {
                  return 0.5 - Math.random();
                })
                .join("")
            )
          }
        >
          Random name
        </Button>
        <TextInput
          style={styles.text_input}
          placeholder="Type your name"
          value={text}
          onChangeText={(text) => {
            setText(text.toUpperCase());
            setName(text.toUpperCase());
          }}
        />
      </View>
    </View>
  );
}
