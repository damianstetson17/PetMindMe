import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-btr";
import CloseButton from "../../components/Buttons/CloseButton";
import { Colors } from "../../styles/Colors";
import RoundedButton from "../../components/Buttons/RoundedButton";
import PetItem from "../../components/NoteList/PetItem";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddNote } from "../../store/slices/notesSlice";

const AddNoteBottomSheet = () => {
  const dispatch = useAppDispatch();
  let visible = useAppSelector((state) => state.notes.showAddNote);

  //Toggling the visibility state of the bottom sheet
  const toggleBottomSheet = () => {
    dispatch(setAddNote(!visible));
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
          Agregar Nota
        </Text>

        {/* text input */}
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            editable
            maxLength={300}
            keyboardType="default"
            placeholder="Escribe tu nota aquí  :)"
            placeholderTextColor={"gray"}
            style={styles.inputText}
          />
        </View>

        {/* buttons */}
        <View style={styles.buttonsRow}>
          <PetItem name="Otto" color="brown" emoji="🐕" />
          <RoundedButton title="Agregar Nota" onPress={toggleBottomSheet} />
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
