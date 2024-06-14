import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button } from "@rneui/base";

type Data = {
  id: number;
  name: string;
  url: string;
};

const data: Data[] = [
  {
    id: 1,
    name: "John Doe",
    url: "https://avatar.iran.liara.run/public/6",
  },
  {
    id: 2,
    name: "Jane Doe",
    url: "https://avatar.iran.liara.run/public/38",
  },
  {
    id: 3,
    name: "Jimmy Doe",
    url: "https://avatar.iran.liara.run/public/21",
  },
];

const Lab_2 = () => {
  const [likes_count, setLikes_count] = useState({
    id1: 0,
    id2: 0,
    id3: 0,
  });

  const Item = (data: Data): JSX.Element => (
    <View style={styles.item}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar
          size={64}
          rounded
          source={{ uri: data.url }}
          titleStyle={{ fontSize: 24 }}
          containerStyle={{ backgroundColor: "gray" }}
        ></Avatar>
        <Text>{data.name}</Text>
        <Text>{likes_count.id1}</Text>
        <Button
          id="profile-1"
          onPress={() =>
            setLikes_count((prevState) => ({
              ...prevState,
              id1: prevState.id1 + 1,
            }))
          }
        >
          Like
        </Button>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View id="head" style={styles.head}>
        <Text style={styles.title}>Lab 2 - FlatList</Text>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item {...item} />}
        ></FlatList>
      </View>
    </View>
  );
};

export default Lab_2;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profile_container: {
    flex: 1,
    borderWidth: 1,
    borderBlockColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    backgroundColor: "#abc2ff",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 18,
    height: 80,
    color: "black",
  },
});
