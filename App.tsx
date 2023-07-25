import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { StackNavigator } from "./src/navigation/StackNavigator";
import {
  useFonts,
  Andika_400Regular,
  Andika_400Regular_Italic,
} from "@expo-google-fonts/andika";
import { Provider } from "react-redux";
import store from "./src/store/store";
import LocalStorage from "./src/services/localStorage/LocalStorage";

export default function App() {
  //load google fonts
  let [fontsLoaded] = useFonts({
    Andika_400Regular,
    Andika_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  
  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Provider store={store}>
        <StackNavigator />
        <LocalStorage />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
