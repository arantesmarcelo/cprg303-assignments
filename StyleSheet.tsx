import { StyleSheet } from "react-native";

export const colorScheme = {
  scheme1: ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"],
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccf",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: colorScheme.scheme1[3] + "dd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: "50%",
  },
  buttonText: { 
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    width: "85%",
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ffffffdd",
    borderColor: colorScheme.scheme1[1] + "dd",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: colorScheme.scheme1[4],
  },
});
