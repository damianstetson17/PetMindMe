import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import { EvilIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/Colors";
import { GlobalStyles } from "../../styles/GlobalStyles";

/**
 * Floating action button
 */
const FAB = () => {
  //menu actions
  const actions = [
    {
      text: "Agregar Nota",
      icon: <EvilIcons name="pencil" size={33} color="white" />,
      name: "add_note",
      position: 1,
      color: Colors.lighPurple,
      textStyle: GlobalStyles.text,
    },
    {
      text: "Agregar Mascota",
      icon: <MaterialIcons name="pets" size={20} color="white" />,
      name: "add_pet",
      position: 2,
      color: Colors.lighPurple,
      textStyle: GlobalStyles.text,
    },
    {
      text: "Eliminar Mascota",
      icon: (
        <MaterialCommunityIcons
          name="delete-empty-outline"
          size={24}
          color="white"
        />
      ),
      name: "delete_pet",
      position: 3,
      color: Colors.lighPurple,
      textStyle: GlobalStyles.text,
    },
  ];

  return (
    <FloatingAction
      actions={actions}
      onPressItem={(name) => {
        switch (name) {
          case "add_note":
            console.log("add_note");
            break;
          case "add_pet":
            console.log("add_pet");
            break;
          case "delete_pet":
            console.log("delete_pet");
            break;
        }
      }}
      color={Colors.darkPurple}
      showBackground={false}
    />
  );
};

export default FAB;
