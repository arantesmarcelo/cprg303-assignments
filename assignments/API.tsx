import { StyleSheet, Text, View } from "react-native";
import React from "react";

const APItest = () => {
  async function fetchAPI() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  const data = fetchAPI();

  return (
    <View>
      <Text>API</Text>
    </View>
  );
};


export default APItest;

const styles = StyleSheet.create({});
