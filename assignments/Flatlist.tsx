import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";

const data = [
  { id: 1, title: "First Item" },
  { id: 2, title: "Second Item" },
  { id: 3, title: "Third Item" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  item: {
    backgroundColor: "#abc2ff",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 18,
    height: 44,
    color: "black",
  },
  title: {
    fontSize: 24,
  },
});

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export function Flatlist() {
  return (
    <View>
      <Text>Flatlist</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
      ></FlatList>
    </View>
  );
}
