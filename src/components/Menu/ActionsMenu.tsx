import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Action from "./Action";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ScreensNames } from "../../types";
import { useAppDispatch } from "../../store/store";
import { setScreensNames } from "../../store/slices/notesSlice";

const ActionsMenu = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch()

  //set the new current screen name for style update
  const handleSetScreensNames = (screenName:ScreensNames) =>{
   dispatch(setScreensNames(screenName))
   navigation.navigate(screenName, {})
  }

  return (
    <View style={styles.container}>
      <Action
        title="Comida"
        screenName={ScreensNames.FOOD}
        icon={
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={27}
            color="black"
          />
        }
        onPress={() => handleSetScreensNames(ScreensNames.FOOD)}
      />
      <Action
        title="Meds"
        screenName={ScreensNames.DRUGS}
        icon={<MaterialCommunityIcons name="pill" size={27} color="black" />}
        onPress={() => handleSetScreensNames(ScreensNames.DRUGS)}      />
      <Action
        title="Vet"
        screenName={ScreensNames.VET}
        icon={<AntDesign name="medicinebox" size={27} color="black" />}
        onPress={() => handleSetScreensNames(ScreensNames.VET)}      />
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
