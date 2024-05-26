import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Avatar, Card } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    //flexDirection: "column",
    alignItems: "center",
    // textAlign: "center",
    // alignContent: "center",
  },
  header: {
    //flex: 1,
    zIndex: 1,
    position: "absolute",
    flexDirection: "column",
    backgroundColor: "#fff0",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00A0ff",
  },
  body: {
    //flex: 2,
    height: 400,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  profileinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 10,
  },
});

// Set the constants
const userName = "Marcelo Arantes";
const initials = userName
  .split(" ")
  .map((n) => n[0])
  .join("");

// Component 02 - DetailsScreen
export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View id="header"  style={styles.header}>
        <View id="background-image-view" style={{ backgroundColor: "#2C4" }}>
          <ImageBackground
            resizeMode="cover"
            style={{ width: 600, height: 150 }}
            source={{ uri: "https://picsum.photos/id/10/2500/1667" }}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={["transparent", "rgba(255,255,255,1)"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 150,
              }}
            />
          </ImageBackground>
        </View>
        <View id="avatar-name-view">
          <Avatar
            size={64}
            rounded
            title={initials}
            titleStyle={{ fontSize: 24 }}
            containerStyle={{ backgroundColor: "gray", marginBottom: 10 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{userName}</Text>
        </View>
      </View>
      <View id="body-view" style={styles.body}>
        <Text>Body</Text>
        <View id="profile-info-view" style={styles.profileinfo}>
          <Card containerStyle={styles.card}>
            <Text>Followers</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text>Following</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Text>Likes</Text>
          </Card>
        </View>
      </View>
    </View>
  );
}
