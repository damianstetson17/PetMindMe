import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import { EvilIcons } from "@expo/vector-icons";
import { Colors } from "../../styles/Colors";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setAddNote,
  setAddPet,
  setDeletePet,
} from "../../store/slices/notesSlice";

/**
 * Floating action button
 */
const FAB = () => {
  const dispatch = useAppDispatch();
  let pets = useAppSelector((state) => state.notes.pets);
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

  const handleOpenAddNoteSheet = () => {
    if (pets.length > 0) dispatch(setAddNote(true));
    else dispatch(setAddPet(true));
  };
  return (
    <FloatingAction
      actions={actions}
      onPressItem={(name) => {
        switch (name) {
          case "add_note":
            handleOpenAddNoteSheet();
            break;
          case "add_pet":
            dispatch(setAddPet(true));
            break;
          case "delete_pet":
            dispatch(setDeletePet(true));
            break;
        }
      }}
      color={Colors.darkPurple}
      showBackground={false}
    />
  );
};

export default FAB;
