import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { Avatar, Card } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button } from "@rneui/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 3,
    flexDirection: "column-reverse",
    backgroundColor: "red",
    padding: 2,
    //height: "100%",
    //justifyContent: "center",
    //alignItems: "baseline",
  },
  headerimage: {
    width: "100%",
    flex: 7,
    backgroundColor: "green",
  },
  headerprofileinfo: {
    width: "100%",
    flex: 4,
    backgroundColor: "#ffff0080",
    position: "absolute",
    verticalAlign: "bottom",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
  body: {
    flex: 8,
    backgroundColor: "blue",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  card_number: {
    fontSize: 36,
    color: "gray",
  },
  card_label: {
    fontSize: 20,
    color: "gray",
  },
});

// Set the constants

// Component 02 - DetailsScreen
export function ProfileLayout() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Marcelo");
  const [text, setText] = useState("");

  return (
    <View id="main-container" style={styles.container}>
      <View id="header" style={styles.header}>
        <View id="header-image" style={styles.headerimage}>
          <Text>Image</Text>
        </View>
        <View id="header-profileinfo" style={styles.headerprofileinfo}>
          <Avatar
            size={64}
            rounded
            title="AB"
            titleStyle={{ fontSize: 24 }}
            containerStyle={{ backgroundColor: "gray" }}
          ></Avatar>
          <Text>Profile Info</Text>
        </View>
      </View>
      <View id="body" style={styles.body}>
        <View id="card" style={styles.cardContainer}>
          <Card containerStyle={styles.card}>
            <Text style={styles.card_number}>00</Text>
            <Text style={styles.card_label}>info</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.card_number}>00</Text>
            <Text style={styles.card_label}>info</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text style={styles.card_number}>00</Text>
            <Text style={styles.card_label}>info</Text>
          </Card>
        </View>
        <Text style={{ fontSize: 40, color: "white" }}>{count}</Text>
        <Button onPress={() => setCount(count + 1)}>Count</Button>
        <Text style={{ fontSize: 40, color: "white" }}>{name}</Text>
        <Button
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
          style={{
            height: 40,
            backgroundColor: "white",
            borderWidth: 1,
            margin: 10,
          }}
          placeholder="Type your name"
          value={text}
          onChangeText={(text) => setText(text.toUpperCase())}
        />
      </View>
    </View>
  );
}
