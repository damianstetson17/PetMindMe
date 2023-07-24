import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { BottomSheet } from "react-native-btr";
import CloseButton from "../../components/Buttons/CloseButton";
import { Colors } from "../../styles/Colors";
import RoundedButton from "../../components/Buttons/RoundedButton";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addNote, setAddNote } from "../../store/slices/notesSlice";
import PetSelector from "../Buttons/PetSelector";
import { formatDate } from "../../utils/formatDate";
import { ItemNoteType } from "../../types";

const AddNoteBottomSheet = () => {
  const dispatch = useAppDispatch();
  let visible = useAppSelector((state) => state.notes.showAddNote);
  let screenName = useAppSelector((state) => state.notes.currentScreen);
  let lastPetSelected = useAppSelector((state) => state.notes.lastPetSelectedForTask);
  const [elevate, setElevate] = useState(false);
  const [description, setDescription] = useState("");

  //Toggling the visibility state of the bottom sheet
  const toggleBottomSheet = () => {
    dispatch(setAddNote(!visible));
    setElevate(false);
  };
  
  const handlingNewNote = () => {
    if(description.length > 0){
      const newNote:ItemNoteType = {
        id: -1,
        description,
        date: formatDate(new Date()),
        petId: lastPetSelected?.id ?? 1,
      }
      dispatch(addNote({newNote, screenName}))
    }
    toggleBottomSheet();
  }

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomSheet}
      onBackdropPress={toggleBottomSheet}
    >
      <View
        style={
          elevate
            ? { ...styles.bottomSheet, height: "90%" }
            : styles.bottomSheet
        }
      >
        <View style={{ alignSelf: "flex-end", margin: 15 }}>
          <CloseButton onPress={toggleBottomSheet} />
        </View>
        <Text style={[GlobalStyles.text, styles.bottomTitle]}>
          Agregar Nota
        </Text>

        {/* text input */}
        <View
          style={
            elevate
              ? { ...styles.inputContainer, height: "35%" }
              : styles.inputContainer
          }
        >
          <TextInput
            editable
            multiline
            maxLength={300}
            keyboardType="default"
            placeholder="Escribe tu nota aquí  :)"
            placeholderTextColor={"gray"}
            style={styles.inputText}
            onPressIn={() => setElevate(true)}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        {/* buttons */}
        <View style={styles.buttonsRow}>
          <PetSelector />
          <RoundedButton title="Agregar Nota" onPress={handlingNewNote} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default AddNoteBottomSheet;

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
  },
  inputContainer: {
    alignSelf: "stretch",
    height: "60%",
    marginVertical: 10,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  inputText: {
    paddingHorizontal: 10,
    height: "100%",
    ...GlobalStyles.text,
  },
  buttonsRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
