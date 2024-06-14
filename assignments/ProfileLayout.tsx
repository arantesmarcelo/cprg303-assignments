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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 3,
    flexDirection: "column-reverse",
    // backgroundColor: "red",
    // padding: 2,
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
    padding: 10,
    backgroundColor: "blue",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 10,
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
  profile_name: {
    fontSize: 32,
    color: "black",
  },
});

// Set the constants

// Component 02 - DetailsScreen
export function ProfileLayout() {

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
          <Text style={styles.profile_name}>Profile Info</Text>
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
      </View>
    </View>
  );
}
