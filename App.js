import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./pages/HomeScreen";
import { Lab_1 } from "./pages/lab_1/page";
import { ProfileLayout } from "./pages/ProfileLayout";

// Stack Navigator: this is the main navigator that will be used to navigate between screens
const Stack = createNativeStackNavigator();

// App Component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileLayout" component={ProfileLayout} />
        <Stack.Screen name="Lab_1" component={Lab_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
