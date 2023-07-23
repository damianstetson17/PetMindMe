import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { BottomSheet } from "react-native-btr";
import CloseButton from "../../components/Buttons/CloseButton";
import { Colors } from "../../styles/Colors";
import RoundedButton from "../../components/Buttons/RoundedButton";
import PetItem from "../../components/NoteList/PetItem";
import { GlobalStyles } from "../../styles/GlobalStyles";
import EmojiSelector from "../Buttons/EmojiSelector";

const AddPetBottomSheet = () => {
  const [visible, setVisible] = useState(true);

  //Toggling the visibility state of the bottom sheet
  const toggleBottomSheet = () => {
    setVisible(!visible);
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
          Agregar Mascota
        </Text>

        {/* text input */}
        <View style={styles.inputContainer}>
          <TextInput
            editable
            maxLength={300}
            keyboardType="default"
            autoCorrect={false}
            autoComplete="off"
            placeholder="Nombre de tu mascota  :)"
            placeholderTextColor={"gray"}
            style={styles.inputText}
          />
        </View>

        {/* buttons */}
        <View style={styles.buttonsRow}>
          <EmojiSelector />
          <RoundedButton title="Agregar Mascota" onPress={toggleBottomSheet} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default AddPetBottomSheet;

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
    height: "10%",
    marginVertical: 30,
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
