import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Welcome from "../pages/Welcome/Welcome";
import Recipie from "../pages/Recepie/Recipie";
const Stack = createNativeStackNavigator();

export default function AppNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Recepie" component={Recipie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
