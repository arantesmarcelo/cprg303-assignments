import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./assignments/HomeScreen";
import { Lab_1 } from "./assignments/lab_1/page";
import { ProfileLayout } from "./assignments/ProfileLayout";
import { Flatlist } from "./assignments/Flatlist";
import Newtab from "./assignments/class_examples/page";
import APItest from "./assignments/API";
import Lab_2 from "./assignments/lab_2/FlatList";
import { Login } from "./assignments/lab_3/Login";

// Stack Navigator: this is the main navigator that will be used to navigate between screens
const Stack = createNativeStackNavigator();

// App Component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lab_3" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileLayout" component={ProfileLayout} />
        <Stack.Screen name="Lab_1" component={Lab_1} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="API" component={APItest} />
        <Stack.Screen name="Lab_2" component={Lab_2} />
        <Stack.Screen name="newtab" component={Newtab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
