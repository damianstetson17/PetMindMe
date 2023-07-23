import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Food from "../screens/Food";
import Drugs from "../screens/Drugs";
import Vet from "../screens/Vet";
import { ScreensNames } from "../types";

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Food"
        screenOptions={{ animation: "fade" }}
      >
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ScreensNames.FOOD} component={Food} />
          <Stack.Screen name={ScreensNames.DRUGS}  component={Drugs} />
          <Stack.Screen name={ScreensNames.VET}  component={Vet} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
