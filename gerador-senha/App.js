import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


import Home from './src/screens/home/Home';
import History from './src/screens/history/History';
import SignIn from './src/screens/singIn/SignIn';
import Register from "./src/screens/register/Register";


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign-in" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: "Historico de senhas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
