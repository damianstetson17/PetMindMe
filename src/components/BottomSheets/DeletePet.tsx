import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-btr";
import CloseButton from "../../components/Buttons/CloseButton";
import { Colors } from "../../styles/Colors";
import PetItem from "../../components/NoteList/PetItem";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setDeletePet } from "../../store/slices/notesSlice";

const DeletePetBottomSheet = () => {
  const dispatch = useAppDispatch();
  let visible = useAppSelector((state) => state.notes.showDeletePet);

  //Toggling the visibility state of the bottom sheet
  const toggleBottomSheet = () => {
    dispatch(setDeletePet(!visible));
  };

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomSheet}
      onBackdropPress={toggleBottomSheet}
    >
      <View style={styles.bottomSheet}>
        <View style={{ alignSelf: "flex-end", margin: 15 }}>
          <CloseButton onPress={toggleBottomSheet} />
        </View>
        <Text style={[GlobalStyles.text, styles.bottomTitle]}>
          Borrar Mascota
        </Text>

        {/* buttons */}
        <View style={styles.buttonsRow}>
          <PetItem name="Otto" color="brown" emoji="🐕" />

          {/* used has trash button */}
          <CloseButton
            icon={
              <MaterialCommunityIcons
                name="delete-empty-outline"
                size={30}
                color="black"
              />
            }
            onPress={toggleBottomSheet}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default DeletePetBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomTitle: {
    color: "black",
    fontSize: 23,
    marginTop: -30,
    marginBottom: 15,
  },
  inputContainer: {
    alignSelf: "stretch",
    height: "60%",
    marginVertical: 30,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  inputText: {
    margin: 5,
    height: "100%",
    ...GlobalStyles.text,
  },
  buttonsRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
