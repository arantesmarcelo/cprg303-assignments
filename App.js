import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./pages/HomeScreen";
import { DetailsScreen } from "./pages/DetailsScreen";
import { ProfileScreen } from "./pages/ProfileScreen";
import { ProfileLayout } from "./pages/ProfileLayout";

// Stack Navigator: this is the main navigator that will be used to navigate between screens
const Stack = createNativeStackNavigator();

// App Component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ProfileLayout" component={ProfileLayout} />
        <Stack.Screen name="Home" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
