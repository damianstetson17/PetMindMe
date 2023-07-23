import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Action from "./Action";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const ActionsMenu = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Action
        title="Comida"
        icon={
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={27}
            color="black"
          />
        }
        onPress={() => navigation.navigate("Food", {})}
      />
      <Action
        title="Meds"
        icon={<MaterialCommunityIcons name="pill" size={27} color="black" />}
        onPress={() => navigation.navigate("Drugs", {})}
      />
      <Action
        title="Vet"
        icon={<AntDesign name="medicinebox" size={27} color="black" />}
        onPress={() => navigation.navigate("Vet", {})}
      />
    </View>
  );
};

export default ActionsMenu;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 15,
  },
});
