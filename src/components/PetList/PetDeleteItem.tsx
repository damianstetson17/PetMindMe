import { StyleSheet, View, Alert } from "react-native";
import React from "react";
import { PetItemType } from "../../types";
import PetItem from "../NoteList/PetItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CloseButton from "../Buttons/CloseButton";
import { useAppDispatch } from "../../store/store";
import { deletePet } from "../../store/slices/notesSlice";
type Props = {
  petData: PetItemType;
};

const PetDeleteItem = ({ petData }: Props) => {
  const dispatch = useAppDispatch();

  //delete pet and dissmis bottom sheet
  const handleDeletePet = () => {
    dispatch(deletePet(petData.id))
  };

  const showConfirmationAlert = () =>
    Alert.alert(
      "¿Está seguro que desea borrar la mascota?",
      "Tendrás que volver a crearl@ !",
      [
          { text: "Confirmar", onPress: () => handleDeletePet(), style: "default" },
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "destructive",
          },
      ]
    );

  return (
    <View style={styles.buttonsRow}>
      <PetItem petData={petData} />

      {/* used has trash button */}
      <CloseButton
        icon={
          <MaterialCommunityIcons
            name="delete-empty-outline"
            size={30}
            color="black"
          />
        }
        onPress={showConfirmationAlert}
      />
    </View>
  );
};

export default PetDeleteItem;

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
